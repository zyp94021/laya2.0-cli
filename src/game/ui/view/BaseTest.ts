import { ui } from '../../../ui/layaMaxUI'
import { IView } from '../../../core/mvc/interface/IView'
import { ViewConst } from '../../../core/const/ViewConst'
import { BaseLayer } from '../../../core/mvc/layer/BaseLayer'
import DialogTest from './DialogTest'
import ViewTest from './ViewTest'
import Loading from './Loading'
import { RegisterMVC, openView, closeView } from '../../../core/mvc/MvcMgr'
import { Click } from '../../../core/mvc/UIEvent'
import GameApp from '../../../core/game/GameApp'
import store from '../../store/store'
import { changeToken, changeUsername } from '../../store/actions'
@RegisterMVC(BaseLayer)
export default class BaseTest extends ui.view.BaseTestUI implements IView {
  static viewKey = ViewConst.BaseTest
  public moveY = false
  constructor() {
    super()
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

    this.dialogBtn.on(Laya.Event.CLICK, this, () => {})
    this.viewBtn.on(Laya.Event.CLICK, this, () => {
      openView(ViewTest, 1, 2)
    })
    this.loadingBtn.on(Laya.Event.CLICK, this, () => {
      openView(Loading, 1, 2, 3)
    })
    this.closeBtn.on(Laya.Event.CLICK, this, () => {
      closeView(this)
    })
  }
  @Click('dialogBtn')
  @Click('loadingBtn', 1, 2, 3, 4)
  private async todo1(...type) {
    store.dispatch(changeToken(Math.random()))
    store.dispatch(changeUsername(Math.random()))
    console.log(type)
    console.log(await GameApp.fetch.post('get', { a: [1, 2], c: 'hahahaha' }))
  }
  public openCb() {
    super.openCb()
    console.log('BaseTest open')
  }
  public updateView() {
    const { user, token, testData } = store.getState()
    this.username.text = user.name
    this.token.text = token
  }
}
