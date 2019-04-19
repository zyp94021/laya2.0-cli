import { Singleton } from '../../base/Singleton'

export class TimeUtil extends Singleton {
  public constructor() {
    super()
  }
  //剩余时间转时分秒（秒）
  private changeTime(time: number): { hours: number; minutes: number; seconds: number } {
    return {
      hours: Math.floor(time / 3600),
      minutes: Math.floor((time % 3600) / 60),
      seconds: time % 60,
    }
  }
  /**
   * 倒计时
   * @param time 时间戳（s）
   * @param hour 时
   * @param minute 分
   * @param second 秒
   */
  public countDown(time: number, hour: string = '时', minute: string = '分', second: string = '秒'): string {
    let temp = this.changeTime(time)
    return `${temp.hours}${hour}${temp.minutes}${minute}${temp.seconds}${second}`
  }
  /**
   * 格式化时间
   * @param date Date
   * @param format 格式
   */
  public DateFormat(date: Date, format: string = 'yyyy-MM-dd hh:mm:ss'): string {
    let year = date.getFullYear()
    let month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
    let month2 = date.getMonth() + 1
    let day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`
    let day2 = date.getDate()
    let hour = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`
    let hour2 = date.getHours()
    let minute = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`
    let minute2 = date.getMinutes()
    let second = date.getSeconds() > 9 ? date.getSeconds() : `0${date.getSeconds()}`
    let second2 = date.getSeconds()

    return format
      .replace(/yyyy/, `${year}`)
      .replace(/MM/, `${month}`)
      .replace(/M/, `${month2}`)
      .replace(/dd/, `${day}`)
      .replace(/d/, `${day2}`)
      .replace(/hh/, `${hour}`)
      .replace(/h/, `${hour2}`)
      .replace(/mm/, `${minute}`)
      .replace(/m/, `${minute2}`)
      .replace(/ss/, `${second}`)
      .replace(/s/, `${second2}`)
  }
  /**
   * 获取当前utc天0点
   */
  public UTCDate(): Date {
    const now = new Date()
    now.setUTCHours(0)
    now.setUTCMinutes(0)
    now.setUTCSeconds(0)
    now.setUTCMilliseconds(0)
    return now
  }
  /**
   * 获取当前时间到到1970-1-1的天数（utc）
   */
  public getUTCDate(): number {
    return Math.floor(Date.now() / (24 * 60 * 60 * 1000))
  }
}
