import { ui } from '../../../ui/layaMaxUI'
import { RegisterMVC } from '../../../core/mvc/MvcMgr'
import { BaseLayer } from '../../../core/mvc/layer/BaseLayer'
@RegisterMVC(BaseLayer)
export class MapView extends ui.view.MapViewUI {
  onOpen() {
    console.log(123)
  }
}
