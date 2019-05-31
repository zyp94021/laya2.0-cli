import { ui } from '../../../../ui/layaMaxUI'
import BPage from '../BPage/BPage'
import { ViewConst } from '../../../../core/const/ViewConst'
import { BaseLayer } from '../../../../core/mvc/layer/BaseLayer'
import { RegisterMVC, openView } from '../../../../core/mvc/MvcMgr'
import BaseTest from '../BaseTest'
import '../../../store/store'
import { store } from '../../../store/store'
import { ActionTypes, actionRequest, deleteTodo, addTodo } from '../../../store/actions'
import { changeData1 } from '../../../store/actions'
import GameApp from '../../../../core/game/GameApp'
@RegisterMVC(BaseLayer)
export default class APage extends ui.view.APageUI {
  static viewKey = ViewConst.APage
  constructor() {
    super()
    this.btn.on(Laya.Event.CLICK, this, () => {
      openView(BPage)
    })
    this.baseBtn.on(Laya.Event.CLICK, this, () => {
      openView(BaseTest)
    })

    this.todoList.renderHandler = new Laya.Handler(this, this.updateTodo)
    this.todoList.on(Laya.Event.CLICK, this, this.todoListClick)
    this.addBtn.on(Laya.Event.CLICK, this, this.addTodo)
    this.testBtn.on(Laya.Event.CLICK, this, () => {
      store.dispatch(changeData1(1))
      console.log('finished:', store.getState())
    })
  }
  private updateTodo(cell: Laya.Box, index) {
    const label = cell.getChildByName('label') as Laya.Label
    const dataSource = cell.dataSource
    label.text = dataSource.message
  }
  private todoListClick(e) {
    if (e.target.var === 'deleteBtn') {
      const box = e.target.parent as Laya.Box
      // store.dispatch(actionRequest(ActionTypes.deleteTodoRequest, box.dataSource.id))
      GameApp.socket.sendEvent('delete', { id: box.dataSource.id })
    }
  }
  private addTodo() {
    if (this.addInput.text !== '') {
      // store.dispatch(actionRequest(ActionTypes.addTodoRequest, this.addInput.text))
      GameApp.socket.sendEvent('add', { message: this.addInput.text })
      this.addInput.text = ''
    }
  }
  public init() {
    // this.controller.addListener(
    //   'change',
    //   args => {
    //     this.contents.text = args[0]
    //     // console.log(this)
    //   },
    //   this,
    // )
  }

  public onUpdateView(state) {
    console.log(state)
    const { user, token, testData, todo } = state
    // this.contents.text = testData.data1
    // this.username.text = user.name
    // this.token.text = token
    this.todoList.array = todo
  }
  public onOpen(args) {
    super.onOpen()
    var html = "<span style='fontSize:30' color='#67fc2c'>富文本</span>"
    html += "<img style='height:50;width:50' src='Characters/Tank_4.png'></img>"
    html += "<span style='fontSize:20' color='#fff'>测试</span>"
    this.dd.pos(0, 0)
    this.dd.style.width = 640
    this.dd.style.align = 'center'

    this.dd.innerHTML = html
    console.log(this.dd)

    store.dispatch(actionRequest(ActionTypes.getTodoRequest))
    GameApp.socket.addEvent('retureDelete', this, this.returnDelete)
    GameApp.socket.addEvent('retureAdd', this, this.returnAdd)
  }
  public onClose() {
    GameApp.socket.removeEvent('retureDelete')
    GameApp.socket.removeEvent('retureAdd')
  }
  returnDelete({ id }) {
    store.dispatch(deleteTodo(id))
  }
  returnAdd({ id, message }) {
    store.dispatch(addTodo([{ id, message }]))
  }
}
