import BaseController from "../../../../core/mvc/controller/BaseController";
import BPageModel from "./BPageModel";
import BPage from "../../../../view/BPage";
import { registerView } from "../../../../decorators/LayerViewMgr";

export default class BPageController extends BaseController{
  /**
   *
   */
  constructor() {
    super()
  }
  public init() {
    super.init()
    this.setModel(new BPageModel())
    this.setView(registerView(BPage,this))
  }
}