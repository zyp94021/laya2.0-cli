enum HttpMethod {
  get = 'GET',
  post = 'POST',
}
export class Fetch {
  private baseUrl = ''
  private contentType = 'application/json;charset=UTF-8'
  static fetchMap = new Map()
  constructor({ url }) {
    this.baseUrl = url
  }
  public static init(key, { url }) {
    let fetch = this.fetchMap.get(key)
    if (!fetch) {
      fetch = new Fetch({ url })
      this.fetchMap.set(key, fetch)
    }
    return fetch
  }
  private async send(api: string, { body, method }) {
    let url = this.baseUrl + api
    const headers = new Headers({
      'Content-Type': this.contentType,
    })
    let res: Response
    switch (method) {
      case HttpMethod.get:
        if (body) {
          url +=
            '?' +
            Object.entries(body)
              .map(item => item.join('='))
              .join('&')
        }
        res = await fetch(url, { headers, method })
        break
      case HttpMethod.post:
      default:
        res = await fetch(url, { body, headers, method })
        break
    }
    return this.resHandle(res)
  }
  public async get(api: string, params: any = undefined) {
    return this.send(api, { body: params, method: HttpMethod.get })
  }
  public async post(api: string, body: any = undefined) {
    return this.send(api, { body: body ? JSON.stringify(body) : undefined, method: HttpMethod.post })
  }
  private resHandle(res: Response) {
    const contentType = res.headers.get('Content-Type')
    if (contentType) {
      if (contentType.indexOf('json') > -1) {
        return res.json()
      }
    }
    return res.text()
  }
}
