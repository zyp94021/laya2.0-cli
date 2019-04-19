import { Singleton } from "../core/base/Singleton";
import { Observer } from "../core/service/dispatcher/Observer";
import * as io from "socket.io-client";
/*
   socket.init(...)
   socket.connect()
*/
export default class socket extends Singleton {
    constructor() {
        super()
        this.observers = {}
    }
    private ip_address
    private socket: any
    private observers: any
    private time_stamp
    private message_list = []
    //handler----
    private connect_success_callback
    private connect_failed_callback
    private heartbeat_failed_callback
    private event = 'message'
    public init(ip,successCallback, failedCallback, heartbeat_failed_callback) {
        this.ip_address=ip
        this.connect_success_callback = successCallback
        this.connect_failed_callback = failedCallback
        this.heartbeat_failed_callback = heartbeat_failed_callback
    }
    public connect() {
        this.socket = io(this.ip_address)
        this.socket.on('connect', () => {
            this.time_stamp = Date.now()
            console.log('websocket connect...');
            this.connectSuccess()
        }
        );
        this.socket.on(this.event, data => {
            this.time_stamp = Date.now()
            data = JSON.stringify(data)
            this.receiveMessage(JSON.parse(data))
        })
        this.socket.on('disconnect', this.onDisconnect)
    }
    public disconnect()
    {
        this.socket.disconnect()
    }
    private onDisconnect() {
        if (this.connect_failed_callback)
            this.connect_failed_callback()
    }
    private connectSuccess() {
        if (this.connect_success_callback)
            this.connect_success_callback()
        this.send('login', {}, 'C2S_login')
        this.startHeartBeat()
    }
    private startHeartBeat() {
        Laya.timer.loop(5000, this, () => {
            this.sendHeartBeat()
        })
    }
    private sendHeartBeat() {
        var v = Date.now() - this.time_stamp

        if (v >= 30000) {
            if (this.heartbeat_failed_callback)
                this.heartbeat_failed_callback()
        }
        this.send('heartbeat', {}, 'C2S_heartbeat')

    }
    private receiveMessage(data) {
        console.log(data.headers.nonce)
        if (data.headers.nonce && data.headers.nonce.startsWith('S2C_')) {
            for (let k in this.observers) {
                if (data.headers.func_name == k) {
                    this.observers[k].forEach(element => {
                        element.RecvMsg(data)
                    });
                }
            }
        }
        else {
            for (let k in this.observers) {
                if (data.headers.nonce == k) {
                    this.observers[k].forEach(element => {
                        element.RecvMsg(data)
                    });
                    delete this.observers[k]
                }
            }
        }
    }
    public sendMessage(func_name, observer: Object, data, callback = null) {
        var nonce = 'C2S_' + func_name + (Math.random() * 100000).toFixed(0)
        if (!this.observers[nonce])
            this.observers[nonce] = []
        this.observers[nonce].push(new Observer(nonce, observer, callback))
        this.send(func_name, data, nonce)
    }
    public observerMessage(func_name, observer: Object, callback = null) {
        var key = func_name
        if (!this.observers[key])
            this.observers[key] = []
        var obs = new Observer(key, observer, callback)
        this.observers[key].push(obs)
        return obs
    }
    public remove(obs: Observer) {
        if (obs == null) return
        let arr: Array<any> = this.observers[obs.topic]
        if (!arr) return null
        let ind: number = arr.indexOf(obs)
        if (ind < 0) return null
        arr.splice(ind, 1)
        if (arr.length == 0)
            delete this.observers[obs.topic]
        return obs
    }
    private send(funcName, data, nonce) {
        var param = {
            headers: {
                uid: 'hejunjie',
                func_name: funcName,
                nonce: nonce
            },
            params: data
        }
        this.time_stamp = Date.now()
        this.socket.emit(this.event, JSON.stringify(param));
    }
}