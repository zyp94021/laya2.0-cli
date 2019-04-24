import GameApp from '../../core/game/GameApp'

export default class NetRequest {
  private req: laya.net.HttpRequest
  private url: string
  private data: any
  private method: string
  private responseType: string
  private headers: any[]
  private apiPath: string
  private messageKey: any
  private constructor() {
    let req = new laya.net.HttpRequest()
    this.req = req
  }

  public static Create(apiPath: string, url: string, data?: any, method?: string, responseType?: string, headers?: any[], messageKey?): NetRequest {
    let request = new NetRequest()
    request.url = url
    request.data = data
    request.method = method
    request.responseType = responseType
    request.headers = headers
    request.apiPath = apiPath
    request.messageKey = messageKey
    return request
  }
  public Send() {
    let req = this.req
    let url = this.url
    let data = this.data
    let method = this.method
    let responseType = this.responseType
    let headers = this.headers || ['Content-Type', 'application/json']
    req.once(laya.events.Event.COMPLETE, this, this.completeHandler)
    req.once(laya.events.Event.ERROR, this, this.errorHandler)
    req.send(url, data, method, responseType, headers)
  }
  public async SendPromise(): Promise<any> {
    let req = this.req
    let url = this.url
    let data = this.data
    let method = this.method
    let responseType = this.responseType
    let headers = this.headers || ['Content-Type', 'application/json']
    let _post = function(resolve, reject) {
      let _resolve = function(obj: any) {
        resolve(obj)
      }
      req.once(laya.events.Event.COMPLETE, this, _resolve)
      req.once(laya.events.Event.ERROR, this, _resolve)
      req.send(url, data, method, responseType, headers)
    }
    return new Promise<any>(_post)
  }
  private completeHandler(data: any) {
    if (this.messageKey) {
      GameApp.dispatcher.SendMsg(this.messageKey, data)
    }
  }
  private errorHandler(e: any) {
    console.error(this.messageKey, e)
  }
  private processHandler(data: any) {}
}
