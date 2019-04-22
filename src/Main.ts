import GameConfig from './GameConfig'
import { createViews, openView } from './decorators/LayerViewMgr'
import BaseTest from './view/BaseTest'
import ViewTest from './view/ViewTest'
import ViewTest1 from './view/ViewTest1'
import { BaseLayer } from './core/game/scenes/BaseLayer'
import { DialogLayer } from './core/game/scenes/DialogLayer'
import DialogTest from './view/DialogTest'
import Loading from './view/Loading'
class Main {
  public constructor() {
    //根据IDE设置初始化引擎
    if (window['Laya3D']) Laya3D.init(GameConfig.width, GameConfig.height)
    else Laya.init(GameConfig.width, GameConfig.height, Laya['WebGL'])
    Laya['Physics'] && Laya['Physics'].enable()
    Laya['DebugPanel'] && Laya['DebugPanel'].enable()
    // Laya.stage.scaleMode = GameConfig.scaleMode;
    Laya.stage.scaleMode = GameConfig.scaleMode
    Laya.stage.screenMode = GameConfig.screenMode
    //兼容微信不支持加载scene后缀场景
    Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson

    //打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
    if (GameConfig.debug || Laya.Utils.getQueryString('debug') == 'true') Laya.enableDebugPanel()
    if (GameConfig.physicsDebug && Laya['PhysicsDebugDraw']) Laya['PhysicsDebugDraw'].enable()
    if (GameConfig.stat) Laya.Stat.show()
    Laya.alertGlobalError = true

    //激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
    Laya.ResourceVersion.enable('version.json', Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION)
  }

  private onVersionLoaded(): void {
    //激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
    Laya.AtlasInfoManager.enable('fileconfig.json', Laya.Handler.create(this, this.onConfigLoaded))
  }

  private onConfigLoaded(): void {
    //加载IDE指定的场景
    // GameConfig.startScene && Laya.Scene.open(GameConfig.startScene)
    const UI = new Laya.View()
    UI.name = 'UI'
    UI.width = Laya.stage.width
    UI.height = Laya.stage.height
    Laya.stage.addChild(UI)
    createViews(UI)
    openView(BaseTest) 
    // setTimeout(() => {
    //   openView(BaseTest)
    // }, 1000)
    setTimeout(() => {
      openView(DialogTest)
      // Laya.Scene.open('view/DialogTest.scene')
    }, 5000)
    setTimeout(() => {
      openView(Loading)
    }, 10000)
    // openView(ViewTest)
    // openView(ViewTest1)

    // const baseLayer = new DialogLayer(UI)
    // UI.addChild(baseLayer)
    // const baseTest = new BaseTest()
    // baseTest.width = baseLayer.width
    // baseTest.height = baseLayer.height
    // const dialogTest = new DialogTest()
    // dialogTest.width = baseLayer.width
    // dialogTest.height = baseLayer.height
    // ;(dialogTest as any).layer = baseLayer
    // setTimeout(() => {
    //   baseLayer.openView(baseTest)
    // }, 3000)
    // setTimeout(() => {
    //   baseLayer.openView(dialogTest)
    // }, 6000)
  }
}
//激活启动类
new Main()
