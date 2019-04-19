export class Scroller {
  private box: any
  private elasticBackTime: number
  private elasticDistance: number
  private direction: string = 'v'
  public constructor() {}
  public set owner(value: any) {
    this.box = value
    this.box.frameOnce(2, this, this.onLoaded)
  }

  private onLoaded() {
    if (this.box instanceof Laya.Panel) {
      let panel: Laya.Panel = this.box
      if (this.direction === 'v') {
        panel.vScrollBarSkin = 'egg/bg/black.png'
        panel.vScrollBar.hide = true
        panel.vScrollBar.elasticBackTime = this.elasticBackTime
        panel.vScrollBar.elasticDistance = this.elasticDistance
      } else {
        panel.hScrollBarSkin = 'egg/bg/black.png'
        panel.hScrollBar.hide = true
        panel.hScrollBar.elasticBackTime = this.elasticBackTime
        panel.hScrollBar.elasticDistance = this.elasticDistance
      }
      return
    }
    if (this.box instanceof Laya.List) {
      let list: Laya.List = this.box
      if (this.direction === 'v') {
        list.vScrollBarSkin = 'egg/bg/black.png'
      } else {
        list.hScrollBarSkin = 'egg/bg/black.png'
      }
      list.scrollBar.hide = true
      list.scrollBar.elasticBackTime = this.elasticBackTime
      list.scrollBar.elasticDistance = this.elasticDistance
      return
    }
  }
}
