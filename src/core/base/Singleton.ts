/**
 * name
 */
export class Singleton {
  /**
   * default constractor
   */
  public constructor() {}

  public static _instance: any
  /**
   * get instance or create new instance
   * @returns {any}
   */
  public static CreateOrGet(...args: any[]): any {
    const instT: any = this
    return (instT._instance = instT._instance || new instT(...args))
  }
}
