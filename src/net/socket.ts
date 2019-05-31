import { Singleton } from '../core/base/Singleton'
import * as io from 'socket.io-client'
import { store } from '../game/store/store'
/*
   socket.init(...)
   socket.connect()
*/
export class Socket extends Singleton {
  constructor(ip, successCallback, failedCallback) {
    super()
    this.ipAddress = ip
    this.connectSuccessCallback = successCallback
    this.connectFailedCallback = failedCallback
  }
  private ipAddress
  private socket: any
  private connectSuccessCallback
  private connectFailedCallback
  static socketMap = new Map()
  public static init(key, { ip, successCallback = null, failedCallback = null }) {
    let socket = this.socketMap.get(key)
    if (!socket) {
      socket = new Socket(ip, successCallback, failedCallback)
      this.socketMap.set(key, socket)
    }
    return socket
  }
  public connect() {
    const token = store.getState().token
    console.log(token)
    this.socket = io(this.ipAddress, {
      query: {
        token: token,
      },
    })
    this.socket.on('connect', () => {
      console.log('websocket connect...')
      this.connectSuccess()
    })

    this.socket.on('disconnect', this.onDisconnect)
  }
  addEvent(event, _this, callback) {
    this.socket.on(event, callback.bind(_this))
  }
  removeEvent(event) {
    this.socket.removeAllListeners(event)
  }
  sendEvent(event, message) {
    this.socket.emit(event, message)
  }
  public disconnect() {
    this.socket.disconnect()
  }
  private onDisconnect() {
    if (this.connectFailedCallback) this.connectFailedCallback()
  }
  private connectSuccess() {
    if (this.connectSuccessCallback) this.connectSuccessCallback()
  }
}
