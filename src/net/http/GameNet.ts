import { Singleton } from '../../core/base/Singleton'
import NetRequest from './NetRequest'

export default class GameNet extends Singleton {
  private serverUrl: string
  constructor() {
    super()
  }
  public initServer(url: string) {
    this.serverUrl = url
  }
  public send(api: string, bodyVariables: any = null, urlVariables: any = '', method: string = 'post', responseType: string = 'json', header?: any[]) {
    this.sendByUrl(this.serverUrl, api, bodyVariables, urlVariables, method, responseType, header)
  }
  public sendPromise(api: string, bodyVariables: any = null, urlVariables: any = '', method: string = 'post', responseType: string = 'json', header?: any[]) {
    this.sendPromiseByUrl(this.serverUrl, api, bodyVariables, urlVariables, method, responseType, header)
  }
  public sendByUrl(url: string, api: string, bodyVariables: any = null, urlVariables: any = '', method: string = 'post', responseType: string = 'json', header?: any[]) {
    let req = NetRequest.Create(api, url + api + urlVariables, bodyVariables, method, responseType, header)
    req.Send()
  }
  public async sendPromiseByUrl(url: string, api: string, bodyVariables: any = null, urlVariables: any = '', method: string = 'post', responseType: string = 'json', header?: any[]) {
    let req = NetRequest.Create(api, url + api + urlVariables, bodyVariables, method, responseType, header)
    const get = await req.SendPromise()
    return get
  }
}
