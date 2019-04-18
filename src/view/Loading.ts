import { ui } from '../ui/layaMaxUI'
import { IView } from '../core/game/scenes/interface/IView'
import { ILayer } from '../core/game/scenes/interface/ILayer'
import * as moment from 'moment'
export default class Loading extends ui.view.LoadingUI implements IView {
  public layer: ILayer
  public moveY = false
  constructor(layer: ILayer) {
    super()
    this.layer = layer

    this.timerLoop(500, this, () => {
      this.tank.index = this.tank.index === 7 ? 4 : this.tank.index + 1
    })
    this.timerLoop(250, this, () => {
      if (this.moveY) {
        this.tank.centerY += 1
      } else {
        this.tank.centerY -= 1
      }
      this.moveY = !this.moveY
    })
  }
  public open() {
    console.log(moment(new Date()).format('YYYY-M-D H:m:s'))

    const data = { a: 1, b: 2, c: 3 }
    Object.entries(data).map(item => {
      console.log(item)
    })
  }
}
