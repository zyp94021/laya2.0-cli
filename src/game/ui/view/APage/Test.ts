import APage from './APage'
import GameApp from '../../../../core/game/GameApp'
import EffectUtils from '../../../../core/Utils/EffectUtils'
import { KUI } from '../../../../core/mvc/view/BaseView'

export default class Test extends Laya.Script {
  // /** @prop {name:intType, tips:"整数类型示例", type:Int, default:1000}*/
  // public intType: number = 1000;
  // /** @prop {name:numType, tips:"数字类型示例", type:Number, default:1000}*/
  // public numType: number = 1000;
  // /** @prop {name:strType, tips:"字符串类型示例", type:String, default:"hello laya"}*/
  // public strType: string = "hello laya";
  // /** @prop {name:boolType, tips:"布尔类型示例", type:Bool, default:true}*/
  // public boolType: boolean = true;
  // 更多参数说明请访问: https://ldc2.layabox.com/doc/?nav=zh-as-2-4-0

  // /** @prop {name:bindkey, tips:"bindkey", type:String}*/
  public bindkey: string = ''
  // /** @prop {name:bindVal, tips:"bindVal", type:String}*/
  public bindVal: string = ''

  /** @prop {name:binding,type:Vector,labes:binding,xCount:1,sType:string}*/
  public binding: string[] // types:"Node,String,Number,Boolean",

  public callArray: { field: string; path: any[]; mapper: Function }[] = []

  constructor() {
    super()
  }
  onAwake() {
    console.log(' == awake ')
    this.owner.on(Laya.Event.CLICK, this, () => {
      EffectUtils.macIconShake(
        this.owner,
        (this.owner as Laya.Sprite).y,
        () => {
          console.log(1)
        },
        this,
      )
    })

    if (this.binding.length > 0) {
      this.callArray = this.binding.map(str => {
        const [field, pathStr, mapper] = str.split('|')
        console.log(mapper)
        return { field, path: pathStr.split('.'), mapper: mapper ? eval(mapper) : undefined }
      })

      let owner = this.owner
      while (owner) {
        if (owner instanceof KUI.BaseView) {
          break
        }
        owner = this.owner.parent
      }
      if (owner) {
        const view = owner as KUI.BaseView
        view.stateListener.push(this)
        console.log(' == redgitered')
      }
    }
  }

  onEnable(): void {}

  onDisable(): void {}

  onStateChange(state: any) {
    this.callArray.forEach(c => {
      const result = c.path.reduce((prev, p) => (prev ? prev[p] : undefined), state)
      console.log(' == call ', this.bindkey, result, state, this.owner)
      this.owner[c.field] = c.mapper ? c.mapper(result) : result;
    })
  }
}
