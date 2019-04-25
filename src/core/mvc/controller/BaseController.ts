import BaseModel from '../model/BaseModel'
import * as v from '../view/BaseView'
import BaseView = v.KUI.BaseView
import GameApp from '../../game/GameApp'
import { dispatcher } from '../../service/dispatcher/Dispatcher'

export default class BaseController {
  private model: BaseModel
  private view: BaseView
  constructor() {
    this.model = null
    this.view = null
    this.init()
  }
  public init() {}
  public setModel(model) {
    this.model = model
  }
  public getModel() {
    return this.model
  }
  public setView(view) {
    this.view = view
  }
  public getView() {
    return this.view
  }

  //监听事件
  public addListener(key, callback, caller) {
    dispatcher.Observe(key, caller, callback)
  }
  //移除监听的事件
  public removeListener(key) {
    dispatcher.Remove(key)
  }
  //触发事件
  public dispatch(key, ...args) {
    dispatcher.SendMsg(key, args)
  }
  /**
   * 注册从服务器返回消息的监听
   * @param  cmd 消息标识
   * @param callback 处理函数
   * @param  thisObj 处理函数所属对象
   */
  observerSocketMsg(cmd, callback, thisObj) {}

  /**
   * @param cmd 消息标识
   * @param msg 数据
   * @param callback 处理函数
   * @param thisObj 处理函数所属对象
   */
  sendSocketMsg(cmd, msg, callback, thisObj) {}

  /**
   * 发送消息到Http服务端
   * @param  cmd 消息标识 例如: User.login
   * @param  msg 消息参数 例如: let msg:any = {"uName":uName, "uPass":uPass};
   */
  sendHttpMsg(cmd, msg) {}
  //向其他模块通讯
  public sendMessage() {}
}
