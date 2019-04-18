
export class Observer {

    public topic: any
    public observer: Object
    public handler: Function

    public constructor(topic_: any, observer_: Object, handler_: Function) {
        this.Reuse(topic_, observer_, handler_)
    }

    public Reuse(topic_: any, observer_: Object, handler_: Function): Observer {
        this.topic = topic_
        this.observer = observer_
        this.handler = handler_
        return this
    }

    public RecvMsg(...args: any[]) {
        let ret: any
        if (!this.observer) {
            ret = this.handler(...args)
        } else {
            ret = this.handler.apply(this.observer, args)
        }
        return ret
    }

} 