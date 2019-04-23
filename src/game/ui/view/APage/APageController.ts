import BaseController from '../../../../core/mvc/controller/BaseController'
import APageModel from './ApageModel';
import { registerView } from '../../../../decorators/LayerViewMgr';
import APage from '../../../../view/APage';
export default class APageController extends BaseController {
  /**
   *
   */
  constructor() {
    super()
  }
  public init() {
    super.init()
    this.setModel(new APageModel())
    this.setView(registerView(APage,this))
  }

}
