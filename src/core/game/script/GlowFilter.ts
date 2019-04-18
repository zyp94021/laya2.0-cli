export class GlowFilter {
  private sprite: Laya.Sprite
  private color: string
  private blur: number
  private offX: number
  private offY: number
  constructor() {}
  public set owner(value: any) {
    this.sprite = value
    this.sprite.frameOnce(2, this, this.onLoaded)
  }

  private onLoaded(): void {
    this.sprite.filters = [new Laya.GlowFilter(this.color, this.blur, this.offX, this.offY)]
  }
}
