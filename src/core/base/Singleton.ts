/**
 * name
 */
export class Singleton {
  /**
   * default constractor
   */
  public constructor() {}

  /**
   * get instance or create new instance
   * @returns {any}
   */
  public static CreateOrGet(...args: any[]): any {
    var inst_t: any = this
    return (inst_t._instance = inst_t._instance || new inst_t(...args))
  }

  /**
   * get instance created
   */
  public static get nullable(): any {
    var inst_t: any = this
    return inst_t._inst
  }
}
