import BaseModel from '../model/BaseModel'

export default class BaseController {
    private model: BaseModel
    private messages: any
    constructor() {
        this.messages = {}
        this.model = null
    }
    //监听事件
    public addListener(key, callback, caller) {
        if (this.messages[key]) return
        this.messages[key] = [callback, caller]
    }
    //移除监听的事件
    public removeListener(key) {
        if (this.messages && this.messages[key]) {
            delete this.messages[key]
        }
    }
    //触发事件
    public dispatch(key, ...args) {
        const listen = this.messages[key]
        if (listen) {
            return listen[0].apply(listen[1], args)
        } else {
            console.log(`消息：${key}不存在监听`)
            return null
        }
    }
    //向其他模块通讯
    public sendMessage() { }
    public getModel() { }
    public setModel() { }
}
