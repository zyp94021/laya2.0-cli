import { ui } from "../ui/layaMaxUI";
import { ViewConst } from "../core/game/scenes/ViewConst";
import { closeView, View } from "../decorators/LayerViewMgr";
import { BaseLayer } from "../core/game/scenes/BaseLayer";
import GameApp from "../core/game/GameApp";
import { ControllerConst } from "../game/const/ControllerConst";
import { DialogLayer } from "../core/game/scenes/DialogLayer";
@View(DialogLayer)
export default class BPage extends ui.view.BPageUI{
    static viewKey=ViewConst.BPage
    /**
     *
     */
    constructor() {
        super();
        
    }
    public init()
    {
       
        this.close_btn.on(Laya.Event.CLICK ,this,()=>{closeView(this)})
        this.change.on(Laya.Event.CLICK ,this,()=>{this.controller.dispatch('change',["#ee3321"])})
    }
}