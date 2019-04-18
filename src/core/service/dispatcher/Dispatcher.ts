import { Observer } from "./Observer";
import { Singleton } from "../../base/Singleton";
export class Dispatcher extends Singleton {

    public constructor() {
        super()
        this._observers = {}
    }

    /**
     * 消息列表
     */
    private _observers: any

    public Observe(topic_: any, observer_: Object, handler_: Function): Observer {
        if (!this._observers[topic_]) this._observers[topic_] = []
        let observer: Observer = new Observer(topic_, observer_, handler_)
        this._observers[topic_].push(observer)
        return observer.Reuse(topic_, observer_, handler_)
    }

    public ObserveList(observer_: Object, topics_: any[], handlers_: any[]): Observer[] {
        let list: Observer[] = []
        for (let i = 0; i < topics_.length; i++) {
            list.push(this.Observe(topics_[i], observer_, handlers_[i]));
        }
        return list
    }

    public RemoveList(obs: Observer[]) {
        for (let i = 0; i < obs.length; i++) {
            this.Remove(obs[i])
        }
    }

    public SendMsg(topic_: any, ...args: any[]): any[] {
        if (!this._observers[topic_]) {
            return null
        }

        let ret: any[] = []
        this._observers[topic_].forEach(element => {
            ret.push(element.RecvMsg(...args))
        });
        return ret
    }

    public Remove(obs: Observer): Observer {
        if (obs == null) return
        let arr: Array<any> = this._observers[obs.topic]

        if (!arr) return null

        let ind: number = arr.indexOf(obs)
        if (ind < 0) return null

        arr.splice(ind, 1)
        return obs
    }

    public RemoveAll(topic: any) {
        let arr: Array<any> = this._observers[topic]
        if (!arr) return
        arr.splice(0, arr.length)
    }
}