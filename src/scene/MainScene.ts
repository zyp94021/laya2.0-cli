import { ui } from '../ui/layaMaxUI'
import GameApp from '../core/game/GameApp'
export default class MainScene extends ui.scene.MainSceneUI {
  constructor() {
    super()
    GameApp.init()
  }
}
