/**
 * 多语言Label
 */
export default class HLabel extends Laya.Script {
  constructor() {
    super()
  }
  /** @prop {name:LanguageID,type:string}*/
  public LanguageID: string
  /** @prop {name:IsFit,type:Bool}*/
  public IsFit: boolean = true
  /** @prop {name:IsFill,tips:"1,0",type:Bool}*/
  public IsFill: boolean = false

  private _langLabel: Laya.Label
  onAwake() {
    this._langLabel = this.owner as Laya.Label
    this.lang()
  }
  private lang() {
    if (this.LanguageID) {
      this._langLabel.text = this.LanguageID
    }
    this.fit()
  }
  public fit() {
    if (!this.IsFit) return
    if (!this._langLabel.wordWrap) {
      if (this.IsFill) {
        if (this._langLabel['_tf'].textWidth > this._langLabel.width) this.fitShortWidth()
        else this.fitLongWidth()
      } else this.fitShortWidth()
    } else {
      if (this.IsFill) {
        if (this._langLabel['_tf'].textHeight > this._langLabel.height) this.fitShortHeight()
        else this.fitLongHeight()
      } else this.fitShortHeight()
    }
  }

  private fitShortWidth() {
    var flag = this._langLabel['_tf'].textWidth > this._langLabel.width
    var fSize = this._langLabel.fontSize
    while (flag) {
      fSize = fSize - 1
      Laya.Browser.context.font = fSize + 'px Arial'
      var browserText = Laya.Browser.context.measureText(this._langLabel.text)
      flag = browserText.width > this._langLabel.width && fSize > 12
    }
    this._langLabel.fontSize = fSize
  }
  private fitLongWidth() {
    var flag = this._langLabel['_tf'].textWidth < this._langLabel.width
    var fSize = this._langLabel.fontSize
    while (flag) {
      fSize = fSize + 1
      Laya.Browser.context.font = fSize + 'px Arial'
      var browserText = Laya.Browser.context.measureText(this._langLabel.text)
      flag = browserText.width < this._langLabel.width
    }
    this._langLabel.fontSize = fSize
  }
  private fitShortHeight() {
    var flag = this._langLabel['_tf'].textHeight > this._langLabel.height
    var fSize = this._langLabel.fontSize
    while (flag) {
      fSize = fSize - 1
      Laya.Browser.context.font = fSize + 'px Arial'
      this._langLabel.fontSize = fSize
      flag = this._langLabel['_tf'].textHeight > this._langLabel.height && fSize > 12
    }
  }
  private fitLongHeight() {
    var flag = this._langLabel['_tf'].textHeight < this._langLabel.height
    var fSize = this._langLabel.fontSize
    while (flag) {
      fSize = fSize + 1
      Laya.Browser.context.font = fSize + 'px Arial'
      this._langLabel.fontSize = fSize
      flag = this._langLabel['_tf'].textHeight < this._langLabel.height
    }
    this._langLabel.fontSize = fSize - 1
  }
}
