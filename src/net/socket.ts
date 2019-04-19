import { Singleton } from '../core/base/Singleton'
import { Observer } from '../core/service/dispatcher/Observer'
import * as io from 'socket.io-client'
/*
   socket.init(...)
   socket.connect()
*/
export default class Socket extends Singleton {
  constructor() {
    super()
    this.observers = {}
  }
  private ipAddress
  private socket: any
  private observers: any
  private timeStamp
  //handler----
  private connectSuccessCallback
  private connectFailedCallback
  private heartbeatFailedCallback
  private event = 'message'
  public init(ip, successCallback, failedCallback, heartbeatFailedCallback) {
    this.ipAddress = ip
    this.connectSuccessCallback = successCallback
    this.connectFailedCallback = failedCallback
    this.heartbeatFailedCallback = heartbeatFailedCallback
  }
  public connect() {
    this.socket = io(this.ipAddress)
    this.socket.on('connect', () => {
      this.timeStamp = Date.now()
      console.log('websocket connect...')
      this.connectSuccess()
    })
    this.socket.on(this.event, data => {
      this.timeStamp = Date.now()
      data = JSON.stringify(data)
      this.receiveMessage(JSON.parse(data))
    })
    this.socket.on('disconnect', this.onDisconnect)
  }
  public disconnect() {
    this.socket.disconnect()
  }
  private onDisconnect() {
    if (this.connectFailedCallback) this.connectFailedCallback()
  }
  private connectSuccess() {
    if (this.connectSuccessCallback) this.connectSuccessCallback()
    this.send('login', {}, 'C2S_login')
    this.startHeartBeat()
  }
  private startHeartBeat() {
    Laya.timer.loop(5000, this, () => {
      this.sendHeartBeat()
    })
  }
  private sendHeartBeat() {
    var v = Date.now() - this.timeStamp

    if (v >= 30000) {
      if (this.heartbeatFailedCallback) this.heartbeatFailedCallback()
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
          })
        }
      }
    } else {
      for (let k in this.observers) {
        if (data.headers.nonce == k) {
          this.observers[k].forEach(element => {
            element.RecvMsg(data)
          })
          delete this.observers[k]
        }
      }
    }
  }
  public sendMessage(funcName, observer, data, callback = null) {
    var nonce = 'C2S_' + funcName + (Math.random() * 100000).toFixed(0)
    if (!this.observers[nonce]) this.observers[nonce] = []
    this.observers[nonce].push(new Observer(nonce, observer, callback))
    this.send(funcName, data, nonce)
  }
  public observerMessage(funcName, observer, callback = null) {
    var key = funcName
    if (!this.observers[key]) this.observers[key] = []
    var obs = new Observer(key, observer, callback)
    this.observers[key].push(obs)
    return obs
  }
  public remove(obs: Observer) {
    if (obs == null) return
    let arr = this.observers[obs.topic]
    if (!arr) return null
    let ind: number = arr.indexOf(obs)
    if (ind < 0) return null
    arr.splice(ind, 1)
    if (arr.length == 0) delete this.observers[obs.topic]
    return obs
  }
  private send(funcName, data, nonce) {
    var param = {
      headers: {
        uid: 'hejunjie',
        func_name: funcName,
        nonce: nonce,
      },
      params: data,
    }
    this.timeStamp = Date.now()
    this.socket.emit(this.event, JSON.stringify(param))
  }
}
