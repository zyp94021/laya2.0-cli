/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/Main.ts","lib"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/GameConfig.ts":
/*!***************************!*\
  !*** ./src/GameConfig.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
var MainScene_1 = __webpack_require__(/*! ./scene/MainScene */ "./src/scene/MainScene.ts");
/*
* 游戏初始化配置;
*/
var GameConfig = /** @class */ (function () {
    function GameConfig() {
    }
    GameConfig.init = function () {
        var reg = Laya.ClassUtils.regClass;
        reg("scene/MainScene.ts", MainScene_1.default);
    };
    GameConfig.width = 640;
    GameConfig.height = 1136;
    GameConfig.scaleMode = "showall";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "middle";
    GameConfig.alignH = "center";
    GameConfig.startScene = "scene/MainScene.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    return GameConfig;
}());
exports.default = GameConfig;
GameConfig.init();


/***/ }),

/***/ "./src/Main.ts":
/*!*********************!*\
  !*** ./src/Main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GameConfig_1 = __webpack_require__(/*! ./GameConfig */ "./src/GameConfig.ts");
__webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
var Main = /** @class */ (function () {
    function Main() {
        //根据IDE设置初始化引擎
        if (window['Laya3D'])
            Laya3D.init(GameConfig_1.default.width, GameConfig_1.default.height);
        else
            Laya.init(GameConfig_1.default.width, GameConfig_1.default.height, Laya['WebGL']);
        Laya['Physics'] && Laya['Physics'].enable();
        Laya['DebugPanel'] && Laya['DebugPanel'].enable();
        // Laya.stage.scaleMode = GameConfig.scaleMode;
        Laya.stage.scaleMode = GameConfig_1.default.scaleMode;
        Laya.stage.screenMode = GameConfig_1.default.screenMode;
        Laya.stage.alignV = GameConfig_1.default.alignV;
        Laya.stage.alignH = GameConfig_1.default.alignH;
        //兼容微信不支持加载scene后缀场景
        Laya.URL.exportSceneToJson = GameConfig_1.default.exportSceneToJson;
        //打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
        if (GameConfig_1.default.debug || Laya.Utils.getQueryString('debug') == 'true')
            Laya.enableDebugPanel();
        if (GameConfig_1.default.physicsDebug && Laya['PhysicsDebugDraw'])
            Laya['PhysicsDebugDraw'].enable();
        if (GameConfig_1.default.stat)
            Laya.Stat.show();
        Laya.alertGlobalError = true;
        //激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
        Laya.ResourceVersion.enable('version.json', Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
    }
    Main.prototype.onVersionLoaded = function () {
        //激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
        Laya.AtlasInfoManager.enable('fileconfig.json', Laya.Handler.create(this, this.onConfigLoaded));
    };
    Main.prototype.onConfigLoaded = function () {
        //加载IDE指定的场景
        GameConfig_1.default.startScene && Laya.Scene.open(GameConfig_1.default.startScene);
    };
    return Main;
}());
//激活启动类
new Main();


/***/ }),

/***/ "./src/core/base/Singleton.ts":
/*!************************************!*\
  !*** ./src/core/base/Singleton.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * name
 */
var Singleton = /** @class */ (function () {
    /**
     * default constractor
     */
    function Singleton() {
    }
    /**
     * get instance or create new instance
     * @returns {any}
     */
    Singleton.CreateOrGet = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var instT = this;
        return (instT._instance = instT._instance || new (instT.bind.apply(instT, [void 0].concat(args)))());
    };
    return Singleton;
}());
exports.Singleton = Singleton;


/***/ }),

/***/ "./src/core/const/LayerConst.ts":
/*!**************************************!*\
  !*** ./src/core/const/LayerConst.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LayerConst;
(function (LayerConst) {
    LayerConst[LayerConst["base"] = 1] = "base";
    LayerConst[LayerConst["base1"] = 2] = "base1";
    LayerConst[LayerConst["view"] = 3] = "view";
    LayerConst[LayerConst["share"] = 4] = "share";
    LayerConst[LayerConst["dialog"] = 5] = "dialog";
    LayerConst[LayerConst["loading"] = 6] = "loading";
})(LayerConst = exports.LayerConst || (exports.LayerConst = {}));


/***/ }),

/***/ "./src/core/const/ViewConst.ts":
/*!*************************************!*\
  !*** ./src/core/const/ViewConst.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ViewConst;
(function (ViewConst) {
    ViewConst[ViewConst["Main"] = 1] = "Main";
    ViewConst[ViewConst["Loading"] = 2] = "Loading";
    ViewConst[ViewConst["ViewTest"] = 3] = "ViewTest";
    ViewConst[ViewConst["ViewTest1"] = 4] = "ViewTest1";
    ViewConst[ViewConst["DialogTest"] = 5] = "DialogTest";
    ViewConst[ViewConst["BaseTest"] = 6] = "BaseTest";
    ViewConst[ViewConst["APage"] = 7] = "APage";
    ViewConst[ViewConst["BPage"] = 8] = "BPage";
})(ViewConst = exports.ViewConst || (exports.ViewConst = {}));


/***/ }),

/***/ "./src/core/game/GameApp.ts":
/*!**********************************!*\
  !*** ./src/core/game/GameApp.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Service_1 = __webpack_require__(/*! ../service/Service */ "./src/core/service/Service.ts");
var ViewMgr_1 = __webpack_require__(/*! ./scenes/ViewMgr */ "./src/core/game/scenes/ViewMgr.ts");
var socket_1 = __webpack_require__(/*! ../../net/socket */ "./src/net/socket.ts");
var StringUtil_1 = __webpack_require__(/*! ./utils/StringUtil */ "./src/core/game/utils/StringUtil.ts");
var TimeUtil_1 = __webpack_require__(/*! ./utils/TimeUtil */ "./src/core/game/utils/TimeUtil.ts");
var GameNet_1 = __webpack_require__(/*! ../../net/http/GameNet */ "./src/net/http/GameNet.ts");
var GameApp = /** @class */ (function () {
    function GameApp() {
    }
    /**
     * 初始化函数
     * @constructor
     */
    GameApp.init = function (scene) {
        return new Promise(function (resolve, reject) {
            GameApp.GlobalData = Laya.loader.getRes('conf/global.json');
            //帧轮询
            Service_1.Service.Init();
            resolve();
        });
    };
    Object.defineProperty(GameApp, "dispatcher", {
        get: function () {
            return Service_1.Service.dispatcher;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameApp, "viewMgr", {
        get: function () {
            return ViewMgr_1.ViewMgr.CreateOrGet();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameApp, "StringUtil", {
        get: function () {
            return StringUtil_1.StringUtil.CreateOrGet();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameApp, "TimeUtil", {
        get: function () {
            return TimeUtil_1.TimeUtil.CreateOrGet();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameApp, "Socket", {
        get: function () {
            return socket_1.default.CreateOrGet();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameApp, "net", {
        get: function () {
            return GameNet_1.default.CreateOrGet();
        },
        enumerable: true,
        configurable: true
    });
    // 全局配置数据
    GameApp.GlobalData = null;
    return GameApp;
}());
exports.default = GameApp;


/***/ }),

/***/ "./src/core/game/scenes/BaseLayer.ts":
/*!*******************************************!*\
  !*** ./src/core/game/scenes/BaseLayer.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var LayerConst_1 = __webpack_require__(/*! ../../const/LayerConst */ "./src/core/const/LayerConst.ts");
var BaseLayer = /** @class */ (function (_super) {
    __extends(BaseLayer, _super);
    function BaseLayer(scene) {
        var _this = _super.call(this) || this;
        _this.ownScene = scene;
        _this.width = _this.ownScene.width;
        _this.height = _this.ownScene.height;
        _this.hitTestPrior = true;
        _this.mouseThrough = true;
        _this.mouseEnabled = true;
        return _this;
    }
    BaseLayer.prototype.openView = function (view) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (view.openCb) {
            view.openCb.apply(view, args);
        }
        this.mouseThrough = false;
        this.addChild(view);
    };
    BaseLayer.prototype.closeView = function (view) {
        if (view.closeCb) {
            view.closeCb();
        }
        this.removeChild(view);
        this.mouseThrough = this._children.length === 0;
    };
    BaseLayer.layerKey = LayerConst_1.LayerConst.base;
    return BaseLayer;
}(Laya.Sprite));
exports.BaseLayer = BaseLayer;


/***/ }),

/***/ "./src/core/game/scenes/DialogLayer.ts":
/*!*********************************************!*\
  !*** ./src/core/game/scenes/DialogLayer.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseLayer_1 = __webpack_require__(/*! ./BaseLayer */ "./src/core/game/scenes/BaseLayer.ts");
var LayerConst_1 = __webpack_require__(/*! ../../const/LayerConst */ "./src/core/const/LayerConst.ts");
var MvcMgr_1 = __webpack_require__(/*! ../../mvc/MvcMgr */ "./src/core/mvc/MvcMgr.ts");
var Mask = /** @class */ (function (_super) {
    __extends(Mask, _super);
    function Mask() {
        var _this = _super.call(this) || this;
        _this.skin = 'comp/blank.png';
        _this.alpha = 0.8;
        return _this;
    }
    return Mask;
}(Laya.Image));
var DialogLayer = /** @class */ (function (_super) {
    __extends(DialogLayer, _super);
    // private mMask
    function DialogLayer(scene) {
        var _this = _super.call(this, scene) || this;
        _this.masks = new Map();
        return _this;
    }
    DialogLayer.prototype.openView = function (view) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var mask = this.masks.get(view.constructor.viewKey);
        if (!mask) {
            mask = new Mask();
            mask.on(Laya.Event.CLICK, this, function () {
                MvcMgr_1.closeView(view);
            });
        }
        mask.width = this.width;
        mask.height = this.height;
        this.masks.set(view.constructor.viewKey, mask);
        this.addChild(mask);
        _super.prototype.openView.apply(this, [view].concat(args));
        view.anchorX = 0.5;
        view.anchorY = 0.5;
        view.x = view.width / 2;
        view.y = view.height / 2;
        view.mouseThrough = true;
        var tween = new Laya.Tween();
        view.scaleX = 0.8;
        view.scaleY = 0.8;
        tween.to(view, { scaleX: 1.05, scaleY: 1.05 }, 100, null, new Laya.Handler(this, function () {
            var tween = new Laya.Tween();
            tween.to(view, { scaleX: 1, scaleY: 1 }, 100, null);
        }));
    };
    DialogLayer.prototype.closeView = function (view) {
        this.removeChild(this.masks.get(view.constructor.viewKey));
        _super.prototype.closeView.call(this, view);
    };
    DialogLayer.layerKey = LayerConst_1.LayerConst.dialog;
    return DialogLayer;
}(BaseLayer_1.BaseLayer));
exports.DialogLayer = DialogLayer;


/***/ }),

/***/ "./src/core/game/scenes/ViewLayer.ts":
/*!*******************************************!*\
  !*** ./src/core/game/scenes/ViewLayer.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseLayer_1 = __webpack_require__(/*! ./BaseLayer */ "./src/core/game/scenes/BaseLayer.ts");
var LayerConst_1 = __webpack_require__(/*! ../../const/LayerConst */ "./src/core/const/LayerConst.ts");
var dis = 100;
var time = 240;
var ViewLayer = /** @class */ (function (_super) {
    __extends(ViewLayer, _super);
    function ViewLayer(scene) {
        var _this = _super.call(this, scene) || this;
        _this.openViews = [];
        return _this;
    }
    ViewLayer.prototype.openView = function (view) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var lastView;
        var tween1 = new Laya.Tween();
        if (this.openViews.length) {
            lastView = this.openViews[this.openViews.length - 1];
        }
        else {
            lastView = this.ownScene;
        }
        lastView.x = this.ownScene === lastView ? 0 : dis;
        tween1.to(lastView, { x: this.ownScene === lastView ? -dis : 0 }, time, null, new Laya.Handler(lastView, function () {
            if (lastView !== _this.ownScene)
                lastView.removeSelf();
        }));
        this.openViews.push(view);
        _super.prototype.openView.apply(this, [view].concat(args));
        var tween2 = new Laya.Tween();
        view.x = this.width;
        tween2.to(view, { x: dis }, time, null, new Laya.Handler(view, function () {
            if (view.afterOpen) {
                view.afterOpen.call(view);
            }
        }));
    };
    ViewLayer.prototype.closeView = function (view) {
        var _this = this;
        var lastView;
        var tween1 = new Laya.Tween();
        this.openViews.pop();
        if (this.openViews.length > 0) {
            lastView = this.openViews[this.openViews.length - 1];
            lastView.zOrder = view.zOrder - 1;
            lastView.layer.addChild(lastView);
        }
        else {
            lastView = this.ownScene;
        }
        lastView.x = lastView === this.ownScene ? -dis : 0;
        tween1.to(lastView, { x: lastView === this.ownScene ? 0 : dis }, time);
        var tween2 = new Laya.Tween();
        view.x = dis;
        tween2.to(view, { x: this.width }, time, null, new Laya.Handler(this, function () {
            _super.prototype.closeView.call(_this, view);
        }));
    };
    ViewLayer.layerKey = LayerConst_1.LayerConst.view;
    return ViewLayer;
}(BaseLayer_1.BaseLayer));
exports.ViewLayer = ViewLayer;


/***/ }),

/***/ "./src/core/game/scenes/ViewMgr.ts":
/*!*****************************************!*\
  !*** ./src/core/game/scenes/ViewMgr.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Singleton_1 = __webpack_require__(/*! ../../base/Singleton */ "./src/core/base/Singleton.ts");
var ViewConst_1 = __webpack_require__(/*! ../../const/ViewConst */ "./src/core/const/ViewConst.ts");
var ViewMgr = /** @class */ (function (_super) {
    __extends(ViewMgr, _super);
    function ViewMgr() {
        var _this = _super.call(this) || this;
        _this.views = new Map();
        _this.openViews = new Map();
        return _this;
    }
    ViewMgr.prototype.getView = function (key) {
        if (this.views.get(key)) {
            return this.views.get(key);
        }
    };
    ViewMgr.prototype.setView = function (key, view) {
        this.views.set(key, view);
    };
    ViewMgr.prototype.openView = function (key) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var view = this.openViews.get(key);
        if (view) {
            view.open.apply(view, args);
            return;
        }
        view = this.views.get(key);
        if (view) {
            view.layer.openView.apply(view.layer, [view].concat(args));
            this.openViews.set(key, view);
        }
        else {
            console.error('view不存在');
        }
    };
    ViewMgr.prototype.closeView = function (vieworkey) {
        var view;
        if (vieworkey in ViewConst_1.ViewConst) {
            view = this.openViews.get(vieworkey);
        }
        else {
            view = vieworkey;
        }
        if (view) {
            view.layer.closeView.apply(view.layer, [view]);
            this.openViews.delete(view.name);
            return;
        }
    };
    ViewMgr.prototype.isOpen = function (vieworkey) {
        if (vieworkey in ViewConst_1.ViewConst) {
            return this.openViews.has(vieworkey);
        }
        else {
            return this.openViews.has(vieworkey.name);
        }
    };
    return ViewMgr;
}(Singleton_1.Singleton));
exports.ViewMgr = ViewMgr;


/***/ }),

/***/ "./src/core/game/utils/StringUtil.ts":
/*!*******************************************!*\
  !*** ./src/core/game/utils/StringUtil.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Singleton_1 = __webpack_require__(/*! ../../base/Singleton */ "./src/core/base/Singleton.ts");
var StringUtil = /** @class */ (function (_super) {
    __extends(StringUtil, _super);
    function StringUtil() {
        return _super.call(this) || this;
    }
    return StringUtil;
}(Singleton_1.Singleton));
exports.StringUtil = StringUtil;


/***/ }),

/***/ "./src/core/game/utils/TimeUtil.ts":
/*!*****************************************!*\
  !*** ./src/core/game/utils/TimeUtil.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Singleton_1 = __webpack_require__(/*! ../../base/Singleton */ "./src/core/base/Singleton.ts");
var TimeUtil = /** @class */ (function (_super) {
    __extends(TimeUtil, _super);
    function TimeUtil() {
        return _super.call(this) || this;
    }
    //剩余时间转时分秒（秒）
    TimeUtil.prototype.changeTime = function (time) {
        return {
            hours: Math.floor(time / 3600),
            minutes: Math.floor((time % 3600) / 60),
            seconds: time % 60,
        };
    };
    /**
     * 倒计时
     * @param time 时间戳（s）
     * @param hour 时
     * @param minute 分
     * @param second 秒
     */
    TimeUtil.prototype.countDown = function (time, hour, minute, second) {
        if (hour === void 0) { hour = '时'; }
        if (minute === void 0) { minute = '分'; }
        if (second === void 0) { second = '秒'; }
        var temp = this.changeTime(time);
        return "" + temp.hours + hour + temp.minutes + minute + temp.seconds + second;
    };
    /**
     * 格式化时间
     * @param date Date
     * @param format 格式
     */
    TimeUtil.prototype.DateFormat = function (date, format) {
        if (format === void 0) { format = 'yyyy-MM-dd hh:mm:ss'; }
        var year = date.getFullYear();
        var month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
        var month2 = date.getMonth() + 1;
        var day = date.getDate() > 9 ? date.getDate() : "0" + date.getDate();
        var day2 = date.getDate();
        var hour = date.getHours() > 9 ? date.getHours() : "0" + date.getHours();
        var hour2 = date.getHours();
        var minute = date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();
        var minute2 = date.getMinutes();
        var second = date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds();
        var second2 = date.getSeconds();
        return format
            .replace(/yyyy/, "" + year)
            .replace(/MM/, "" + month)
            .replace(/M/, "" + month2)
            .replace(/dd/, "" + day)
            .replace(/d/, "" + day2)
            .replace(/hh/, "" + hour)
            .replace(/h/, "" + hour2)
            .replace(/mm/, "" + minute)
            .replace(/m/, "" + minute2)
            .replace(/ss/, "" + second)
            .replace(/s/, "" + second2);
    };
    /**
     * 获取当前utc天0点
     */
    TimeUtil.prototype.UTCDate = function () {
        var now = new Date();
        now.setUTCHours(0);
        now.setUTCMinutes(0);
        now.setUTCSeconds(0);
        now.setUTCMilliseconds(0);
        return now;
    };
    /**
     * 获取当前时间到到1970-1-1的天数（utc）
     */
    TimeUtil.prototype.getUTCDate = function () {
        return Math.floor(Date.now() / (24 * 60 * 60 * 1000));
    };
    return TimeUtil;
}(Singleton_1.Singleton));
exports.TimeUtil = TimeUtil;


/***/ }),

/***/ "./src/core/mvc/ControllerManager.ts":
/*!*******************************************!*\
  !*** ./src/core/mvc/ControllerManager.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mvc;
(function (mvc) {
    var ControllerManager = /** @class */ (function () {
        function ControllerManager() {
            this.controllers = new Map();
        }
        ControllerManager.prototype.register = function (view, Controller, Model) {
            var key = view.constructor.viewKey;
            if (this.isExists(key))
                return;
            var controller = new Controller();
            controller.setView(view);
            if (Model) {
                controller.setModel(new Model());
            }
            this.controllers.set(key, controller);
            return controller;
        };
        ControllerManager.prototype.unregister = function (controllerKey) {
            if (!this.isExists(controllerKey))
                return;
            this.controllers.delete(controllerKey);
        };
        ControllerManager.prototype.isExists = function (controllerKey) {
            return this.controllers.has(controllerKey);
        };
        /**
         * 获取指定Controller对象
         * @param  controllerKey Controller唯一标识
         * @returns
         */
        ControllerManager.prototype.getController = function (controllerKey) {
            return this.controllers.get(controllerKey);
        };
        return ControllerManager;
    }());
    mvc.controllerMgr = new ControllerManager();
})(mvc = exports.mvc || (exports.mvc = {}));


/***/ }),

/***/ "./src/core/mvc/MvcMgr.ts":
/*!********************************!*\
  !*** ./src/core/mvc/MvcMgr.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var v = __webpack_require__(/*! ./ViewMgr */ "./src/core/mvc/ViewMgr.ts");
var c = __webpack_require__(/*! ./ControllerManager */ "./src/core/mvc/ControllerManager.ts");
var MVC = [];
exports.MVC = MVC;
var UI = Laya.stage;
exports.UI = UI;
var RegisterMVC = function (Layer, Controller, Model) {
    if (Controller === void 0) { Controller = null; }
    if (Model === void 0) { Model = null; }
    return function (View) {
        var layer = MVC.find(function (layer) { return layer.Layer === Layer; });
        if (!layer) {
            layer = {
                Layer: Layer,
                views: [],
            };
            MVC.push(layer);
        }
        var view = layer.views.find(function (view) { return view.View === View || view.View.viewKey === View.viewKey; });
        if (view) {
            throw new Error("View " + view.View + " \u5DF2\u5B58\u5728 || viewKey " + View.viewKey + " \u91CD\u590D");
        }
        layer.views.push({ layer: layer, View: View, Model: Model, Controller: Controller });
    };
};
exports.RegisterMVC = RegisterMVC;
var setUIRoot = function (root) {
    exports.UI = UI = root;
};
exports.setUIRoot = setUIRoot;
var controllerMgr = c.mvc.controllerMgr;
exports.controllerMgr = controllerMgr;
var viewMgr = v.mvc.viewMgr;
exports.viewMgr = viewMgr;
var openView = v.mvc.openView;
exports.openView = openView;
var closeView = v.mvc.closeView;
exports.closeView = closeView;


/***/ }),

/***/ "./src/core/mvc/ViewMgr.ts":
/*!*********************************!*\
  !*** ./src/core/mvc/ViewMgr.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MvcMgr_1 = __webpack_require__(/*! ./MvcMgr */ "./src/core/mvc/MvcMgr.ts");
var mvc;
(function (mvc) {
    var ViewMgr = /** @class */ (function () {
        function ViewMgr() {
            this.views = new Map();
            this.layers = new Map();
            this.openViews = new Map();
        }
        ViewMgr.prototype.getView = function (key) {
            return this.views.get(key);
        };
        ViewMgr.prototype.setView = function (key, view) {
            this.views.set(key, view);
        };
        ViewMgr.prototype.getLayer = function (key) {
            return this.layers.get(key);
        };
        ViewMgr.prototype.setLayer = function (key, layer) {
            this.layers.set(key, layer);
        };
        ViewMgr.prototype.openView = function (View) {
            var _a, _b;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var _view = this.openViews.get(View.viewKey);
            if (_view) {
                _view.open.apply(_view, args);
                return;
            }
            _view = this.getView(View.viewKey);
            if (_view) {
                (_a = _view.layer).openView.apply(_a, [_view].concat(args));
                this.openViews.set(View.viewKey, _view);
                return;
            }
            _view = this.createView(View);
            (_b = _view.layer).openView.apply(_b, [_view].concat(args));
        };
        ViewMgr.prototype.createView = function (View) {
            var layer = MvcMgr_1.MVC.find(function (layer) { return layer.views.find(function (view) { return view.View.viewKey === View.viewKey; }); });
            if (!layer) {
                throw new Error('layer 不存在');
            }
            var _layer = this.getLayer(layer.Layer.layerKey);
            if (!_layer) {
                _layer = new layer.Layer(MvcMgr_1.UI);
                _layer.zOrder = layer.Layer.layerKey;
                MvcMgr_1.UI.addChild(_layer);
                this.setLayer(layer.Layer.layerKey, _layer);
            }
            var view = layer.views.find(function (view) { return view.View.viewKey === View.viewKey; });
            var _view = new view.View();
            _view.layer = _layer;
            if (view.Controller) {
                var _controller = MvcMgr_1.controllerMgr.register(_view, view.Controller, view.Model);
                _view.setController(_controller);
            }
            this.setView(view.View.viewKey, _view);
            if (_view.init)
                _view.init();
            return _view;
        };
        ViewMgr.prototype.closeView = function (ViewOrKeyOrIns) {
            var _a;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var _view;
            if (ViewOrKeyOrIns.viewKey) {
                _view = this.getView(ViewOrKeyOrIns.viewKey);
            }
            else if (this.getView(ViewOrKeyOrIns)) {
                _view = this.getView(ViewOrKeyOrIns);
            }
            else if (ViewOrKeyOrIns.constructor.viewKey) {
                _view = this.getView(ViewOrKeyOrIns.constructor.viewKey);
            }
            if (_view) {
                (_a = _view.layer).closeView.apply(_a, [_view].concat(args));
                this.openViews.delete(_view.constructor.viewKey);
                return;
            }
        };
        ViewMgr.prototype.isOpen = function (ViewOrKeyOrIns) {
            var _view;
            if (ViewOrKeyOrIns.viewKey) {
                _view = this.openViews.get(ViewOrKeyOrIns.viewKey);
            }
            else if (this.openViews.get(ViewOrKeyOrIns)) {
                _view = this.openViews.get(ViewOrKeyOrIns);
            }
            else if (ViewOrKeyOrIns.constructor.viewKey) {
                _view = this.openViews.get(ViewOrKeyOrIns.constructor.viewKey);
            }
            return !!_view;
        };
        return ViewMgr;
    }());
    mvc.viewMgr = new ViewMgr();
    mvc.openView = function (View) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        mvc.viewMgr.openView.apply(mvc.viewMgr, [View].concat(args));
    };
    mvc.closeView = function (ViewOrKeyOrIns) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        mvc.viewMgr.closeView.apply(mvc.viewMgr, [ViewOrKeyOrIns].concat(args));
    };
})(mvc = exports.mvc || (exports.mvc = {}));


/***/ }),

/***/ "./src/core/mvc/controller/BaseController.ts":
/*!***************************************************!*\
  !*** ./src/core/mvc/controller/BaseController.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GameApp_1 = __webpack_require__(/*! ../../game/GameApp */ "./src/core/game/GameApp.ts");
var BaseController = /** @class */ (function () {
    function BaseController() {
        this.model = null;
        this.view = null;
        this.init();
    }
    BaseController.prototype.init = function () {
    };
    BaseController.prototype.setModel = function (model) {
        this.model = model;
    };
    BaseController.prototype.getModel = function () {
        return this.model;
    };
    BaseController.prototype.setView = function (view) {
        this.view = view;
    };
    BaseController.prototype.getView = function () {
        return this.view;
    };
    //监听事件
    BaseController.prototype.addListener = function (key, callback, caller) {
        GameApp_1.default.dispatcher.Observe(key, caller, callback);
    };
    //移除监听的事件
    BaseController.prototype.removeListener = function (key) {
        GameApp_1.default.dispatcher.Remove(key);
    };
    //触发事件
    BaseController.prototype.dispatch = function (key) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        GameApp_1.default.dispatcher.SendMsg(key, args);
    };
    /**
     * 注册从服务器返回消息的监听
     * @param  cmd 消息标识
     * @param callback 处理函数
     * @param  thisObj 处理函数所属对象
     */
    BaseController.prototype.observerSocketMsg = function (cmd, callback, thisObj) { };
    /**
     * @param cmd 消息标识
     * @param msg 数据
     * @param callback 处理函数
     * @param thisObj 处理函数所属对象
     */
    BaseController.prototype.sendSocketMsg = function (cmd, msg, callback, thisObj) { };
    /**
     * 发送消息到Http服务端
     * @param  cmd 消息标识 例如: User.login
     * @param  msg 消息参数 例如: let msg:any = {"uName":uName, "uPass":uPass};
     */
    BaseController.prototype.sendHttpMsg = function (cmd, msg) { };
    //向其他模块通讯
    BaseController.prototype.sendMessage = function () { };
    return BaseController;
}());
exports.default = BaseController;


/***/ }),

/***/ "./src/core/mvc/model/BaseModel.ts":
/*!*****************************************!*\
  !*** ./src/core/mvc/model/BaseModel.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BaseModel = /** @class */ (function () {
    function BaseModel() {
    }
    return BaseModel;
}());
exports.default = BaseModel;


/***/ }),

/***/ "./src/core/mvc/view/BaseView.ts":
/*!***************************************!*\
  !*** ./src/core/mvc/view/BaseView.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var KUI;
(function (KUI) {
    var BaseView = /** @class */ (function (_super) {
        __extends(BaseView, _super);
        function BaseView() {
            return _super.call(this) || this;
        }
        BaseView.prototype.setController = function (ctrl) {
            this.controller = ctrl;
        };
        BaseView.prototype.init = function () {
            this.initData();
            this.initRes();
            this.initView();
        };
        BaseView.prototype.initData = function () { };
        BaseView.prototype.initRes = function () { };
        BaseView.prototype.initView = function () { };
        return BaseView;
    }(Laya.View));
    KUI.BaseView = BaseView;
})(KUI = exports.KUI || (exports.KUI = {}));


/***/ }),

/***/ "./src/core/service/Service.ts":
/*!*************************************!*\
  !*** ./src/core/service/Service.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Dispatcher_1 = __webpack_require__(/*! ./dispatcher/Dispatcher */ "./src/core/service/dispatcher/Dispatcher.ts");
var Service = /** @class */ (function () {
    function Service() {
    }
    Service.Init = function () { };
    Object.defineProperty(Service, "dispatcher", {
        get: function () {
            return Dispatcher_1.Dispatcher.CreateOrGet();
        },
        enumerable: true,
        configurable: true
    });
    return Service;
}());
exports.Service = Service;


/***/ }),

/***/ "./src/core/service/dispatcher/Dispatcher.ts":
/*!***************************************************!*\
  !*** ./src/core/service/dispatcher/Dispatcher.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Observer_1 = __webpack_require__(/*! ./Observer */ "./src/core/service/dispatcher/Observer.ts");
var Singleton_1 = __webpack_require__(/*! ../../base/Singleton */ "./src/core/base/Singleton.ts");
var Dispatcher = /** @class */ (function (_super) {
    __extends(Dispatcher, _super);
    function Dispatcher() {
        var _this = _super.call(this) || this;
        _this._observers = {};
        return _this;
    }
    Dispatcher.prototype.Observe = function (topic_, observer_, handler_) {
        if (!this._observers[topic_])
            this._observers[topic_] = [];
        var observer = new Observer_1.Observer(topic_, observer_, handler_);
        this._observers[topic_].push(observer);
        return observer.Reuse(topic_, observer_, handler_);
    };
    Dispatcher.prototype.ObserveList = function (observer_, topics_, handlers_) {
        var list = [];
        for (var i = 0; i < topics_.length; i++) {
            list.push(this.Observe(topics_[i], observer_, handlers_[i]));
        }
        return list;
    };
    Dispatcher.prototype.RemoveList = function (obs) {
        for (var i = 0; i < obs.length; i++) {
            this.Remove(obs[i]);
        }
    };
    Dispatcher.prototype.SendMsg = function (topic_) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!this._observers[topic_]) {
            return null;
        }
        var ret = [];
        this._observers[topic_].forEach(function (element) {
            ret.push(element.RecvMsg.apply(element, args));
        });
        return ret;
    };
    Dispatcher.prototype.Remove = function (obs) {
        if (obs == null)
            return;
        var arr = this._observers[obs.topic];
        if (!arr)
            return null;
        var ind = arr.indexOf(obs);
        if (ind < 0)
            return null;
        arr.splice(ind, 1);
        return obs;
    };
    Dispatcher.prototype.RemoveAll = function (topic) {
        var arr = this._observers[topic];
        if (!arr)
            return;
        arr.splice(0, arr.length);
    };
    return Dispatcher;
}(Singleton_1.Singleton));
exports.Dispatcher = Dispatcher;


/***/ }),

/***/ "./src/core/service/dispatcher/Observer.ts":
/*!*************************************************!*\
  !*** ./src/core/service/dispatcher/Observer.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observer = /** @class */ (function () {
    function Observer(topic_, observer_, handler_) {
        this.Reuse(topic_, observer_, handler_);
    }
    Observer.prototype.Reuse = function (topic_, observer_, handler_) {
        this.topic = topic_;
        this.observer = observer_;
        this.handler = handler_;
        return this;
    };
    Observer.prototype.RecvMsg = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var ret;
        if (!this.observer) {
            ret = this.handler.apply(this, args);
        }
        else {
            ret = this.handler.apply(this.observer, args);
        }
        return ret;
    };
    return Observer;
}());
exports.Observer = Observer;


/***/ }),

/***/ "./src/game/ui/view/APage/APage.ts":
/*!*****************************************!*\
  !*** ./src/game/ui/view/APage/APage.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var layaMaxUI_1 = __webpack_require__(/*! ../../../../ui/layaMaxUI */ "./src/ui/layaMaxUI.ts");
var BPage_1 = __webpack_require__(/*! ../BPage/BPage */ "./src/game/ui/view/BPage/BPage.ts");
var ViewConst_1 = __webpack_require__(/*! ../../../../core/const/ViewConst */ "./src/core/const/ViewConst.ts");
var BaseLayer_1 = __webpack_require__(/*! ../../../../core/game/scenes/BaseLayer */ "./src/core/game/scenes/BaseLayer.ts");
var MvcMgr_1 = __webpack_require__(/*! ../../../../core/mvc/MvcMgr */ "./src/core/mvc/MvcMgr.ts");
var APageController_1 = __webpack_require__(/*! ./APageController */ "./src/game/ui/view/APage/APageController.ts");
var ApageModel_1 = __webpack_require__(/*! ./ApageModel */ "./src/game/ui/view/APage/ApageModel.ts");
var BaseTest_1 = __webpack_require__(/*! ../BaseTest */ "./src/game/ui/view/BaseTest.ts");
var APage = /** @class */ (function (_super) {
    __extends(APage, _super);
    function APage() {
        var _this = _super.call(this) || this;
        _this.btn.on(Laya.Event.CLICK, _this, function () {
            MvcMgr_1.openView(BPage_1.default);
        });
        _this.baseBtn.on(Laya.Event.CLICK, _this, function () {
            MvcMgr_1.openView(BaseTest_1.default);
        });
        return _this;
    }
    APage.prototype.init = function () {
        var _this = this;
        this.controller.addListener('change', function (args) {
            _this.contents.text = args[0];
            // console.log(this)
        }, this);
    };
    APage.viewKey = ViewConst_1.ViewConst.APage;
    APage = __decorate([
        MvcMgr_1.RegisterMVC(BaseLayer_1.BaseLayer, APageController_1.default, ApageModel_1.default)
    ], APage);
    return APage;
}(layaMaxUI_1.ui.view.APageUI));
exports.default = APage;


/***/ }),

/***/ "./src/game/ui/view/APage/APageController.ts":
/*!***************************************************!*\
  !*** ./src/game/ui/view/APage/APageController.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseController_1 = __webpack_require__(/*! ../../../../core/mvc/controller/BaseController */ "./src/core/mvc/controller/BaseController.ts");
var APageController = /** @class */ (function (_super) {
    __extends(APageController, _super);
    /**
     *
     */
    function APageController() {
        return _super.call(this) || this;
    }
    APageController.prototype.init = function () {
        _super.prototype.init.call(this);
    };
    return APageController;
}(BaseController_1.default));
exports.default = APageController;


/***/ }),

/***/ "./src/game/ui/view/APage/ApageModel.ts":
/*!**********************************************!*\
  !*** ./src/game/ui/view/APage/ApageModel.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseModel_1 = __webpack_require__(/*! ../../../../core/mvc/model/BaseModel */ "./src/core/mvc/model/BaseModel.ts");
var APageModel = /** @class */ (function (_super) {
    __extends(APageModel, _super);
    function APageModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return APageModel;
}(BaseModel_1.default));
exports.default = APageModel;


/***/ }),

/***/ "./src/game/ui/view/BPage/BPage.ts":
/*!*****************************************!*\
  !*** ./src/game/ui/view/BPage/BPage.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var layaMaxUI_1 = __webpack_require__(/*! ../../../../ui/layaMaxUI */ "./src/ui/layaMaxUI.ts");
var ViewConst_1 = __webpack_require__(/*! ../../../../core/const/ViewConst */ "./src/core/const/ViewConst.ts");
var DialogLayer_1 = __webpack_require__(/*! ../../../../core/game/scenes/DialogLayer */ "./src/core/game/scenes/DialogLayer.ts");
var BPageController_1 = __webpack_require__(/*! ./BPageController */ "./src/game/ui/view/BPage/BPageController.ts");
var BPageModel_1 = __webpack_require__(/*! ./BPageModel */ "./src/game/ui/view/BPage/BPageModel.ts");
var MvcMgr_1 = __webpack_require__(/*! ../../../../core/mvc/MvcMgr */ "./src/core/mvc/MvcMgr.ts");
var BPage = /** @class */ (function (_super) {
    __extends(BPage, _super);
    function BPage() {
        return _super.call(this) || this;
    }
    BPage.prototype.init = function () {
        var _this = this;
        this.close_btn.on(Laya.Event.CLICK, this, function () {
            MvcMgr_1.closeView(_this);
        });
        this.change.on(Laya.Event.CLICK, this, function () {
            _this.controller.dispatch('change', ['#ee3321']);
        });
    };
    BPage.viewKey = ViewConst_1.ViewConst.BPage;
    BPage = __decorate([
        MvcMgr_1.RegisterMVC(DialogLayer_1.DialogLayer, BPageController_1.default, BPageModel_1.default)
    ], BPage);
    return BPage;
}(layaMaxUI_1.ui.view.BPageUI));
exports.default = BPage;


/***/ }),

/***/ "./src/game/ui/view/BPage/BPageController.ts":
/*!***************************************************!*\
  !*** ./src/game/ui/view/BPage/BPageController.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseController_1 = __webpack_require__(/*! ../../../../core/mvc/controller/BaseController */ "./src/core/mvc/controller/BaseController.ts");
var BPageController = /** @class */ (function (_super) {
    __extends(BPageController, _super);
    /**
     *
     */
    function BPageController() {
        return _super.call(this) || this;
    }
    BPageController.prototype.init = function () {
        _super.prototype.init.call(this);
    };
    return BPageController;
}(BaseController_1.default));
exports.default = BPageController;


/***/ }),

/***/ "./src/game/ui/view/BPage/BPageModel.ts":
/*!**********************************************!*\
  !*** ./src/game/ui/view/BPage/BPageModel.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseModel_1 = __webpack_require__(/*! ../../../../core/mvc/model/BaseModel */ "./src/core/mvc/model/BaseModel.ts");
var BPageModel = /** @class */ (function (_super) {
    __extends(BPageModel, _super);
    function BPageModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BPageModel;
}(BaseModel_1.default));
exports.default = BPageModel;


/***/ }),

/***/ "./src/game/ui/view/BaseTest.ts":
/*!**************************************!*\
  !*** ./src/game/ui/view/BaseTest.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var layaMaxUI_1 = __webpack_require__(/*! ../../../ui/layaMaxUI */ "./src/ui/layaMaxUI.ts");
var ViewConst_1 = __webpack_require__(/*! ../../../core/const/ViewConst */ "./src/core/const/ViewConst.ts");
var BaseLayer_1 = __webpack_require__(/*! ../../../core/game/scenes/BaseLayer */ "./src/core/game/scenes/BaseLayer.ts");
var DialogTest_1 = __webpack_require__(/*! ./DialogTest */ "./src/game/ui/view/DialogTest.ts");
var ViewTest_1 = __webpack_require__(/*! ./ViewTest */ "./src/game/ui/view/ViewTest.ts");
var Loading_1 = __webpack_require__(/*! ./Loading */ "./src/game/ui/view/Loading.ts");
var MvcMgr_1 = __webpack_require__(/*! ../../../core/mvc/MvcMgr */ "./src/core/mvc/MvcMgr.ts");
var BaseTest = /** @class */ (function (_super) {
    __extends(BaseTest, _super);
    function BaseTest() {
        var _this = _super.call(this) || this;
        _this.moveY = false;
        _this.timerLoop(500, _this, function () {
            _this.tank.index = _this.tank.index === 7 ? 4 : _this.tank.index + 1;
        });
        _this.timerLoop(250, _this, function () {
            if (_this.moveY) {
                _this.tank.centerY += 1;
            }
            else {
                _this.tank.centerY -= 1;
            }
            _this.moveY = !_this.moveY;
        });
        _this.dialogBtn.on(Laya.Event.CLICK, _this, function () {
            MvcMgr_1.openView(DialogTest_1.default, 1, 2, 3, 4, 5);
        });
        _this.viewBtn.on(Laya.Event.CLICK, _this, function () {
            MvcMgr_1.openView(ViewTest_1.default, 1, 2, 3, 4, 5);
        });
        _this.loadingBtn.on(Laya.Event.CLICK, _this, function () {
            MvcMgr_1.openView(Loading_1.default, 1, 2, 3, 4, 5);
        });
        _this.closeBtn.on(Laya.Event.CLICK, _this, function () {
            MvcMgr_1.closeView(_this);
        });
        return _this;
    }
    BaseTest.prototype.openCb = function () {
        console.log('BaseTest open');
    };
    BaseTest.viewKey = ViewConst_1.ViewConst.BaseTest;
    BaseTest = __decorate([
        MvcMgr_1.RegisterMVC(BaseLayer_1.BaseLayer)
    ], BaseTest);
    return BaseTest;
}(layaMaxUI_1.ui.view.BaseTestUI));
exports.default = BaseTest;


/***/ }),

/***/ "./src/game/ui/view/DialogTest.ts":
/*!****************************************!*\
  !*** ./src/game/ui/view/DialogTest.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var layaMaxUI_1 = __webpack_require__(/*! ../../../ui/layaMaxUI */ "./src/ui/layaMaxUI.ts");
var ViewConst_1 = __webpack_require__(/*! ../../../core/const/ViewConst */ "./src/core/const/ViewConst.ts");
var DialogLayer_1 = __webpack_require__(/*! ../../../core/game/scenes/DialogLayer */ "./src/core/game/scenes/DialogLayer.ts");
var MvcMgr_1 = __webpack_require__(/*! ../../../core/mvc/MvcMgr */ "./src/core/mvc/MvcMgr.ts");
var DialogTest = /** @class */ (function (_super) {
    __extends(DialogTest, _super);
    function DialogTest() {
        var _this = _super.call(this) || this;
        _this.moveY = false;
        _this.active;
        _this.timerLoop(500, _this, function () {
            _this.tank.index = _this.tank.index === 7 ? 4 : _this.tank.index + 1;
        });
        _this.timerLoop(250, _this, function () {
            if (_this.moveY) {
                _this.tank.centerY += 1;
            }
            else {
                _this.tank.centerY -= 1;
            }
            _this.moveY = !_this.moveY;
        });
        _this.closeBtn.on(Laya.Event.CLICK, _this, function () {
            MvcMgr_1.closeView(ViewConst_1.ViewConst.DialogTest);
            // console.log(this)
            // Laya.Scene.close('view/DialogTest.scene')
        });
        return _this;
    }
    DialogTest.prototype.openCb = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log('DialogTest open', args);
        // console.log(this.img['onCompResize']())
    };
    DialogTest.viewKey = ViewConst_1.ViewConst.DialogTest;
    DialogTest = __decorate([
        MvcMgr_1.RegisterMVC(DialogLayer_1.DialogLayer)
    ], DialogTest);
    return DialogTest;
}(layaMaxUI_1.ui.view.DialogTestUI));
exports.default = DialogTest;


/***/ }),

/***/ "./src/game/ui/view/Loading.ts":
/*!*************************************!*\
  !*** ./src/game/ui/view/Loading.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var layaMaxUI_1 = __webpack_require__(/*! ../../../ui/layaMaxUI */ "./src/ui/layaMaxUI.ts");
var ViewConst_1 = __webpack_require__(/*! ../../../core/const/ViewConst */ "./src/core/const/ViewConst.ts");
var BaseLayer_1 = __webpack_require__(/*! ../../../core/game/scenes/BaseLayer */ "./src/core/game/scenes/BaseLayer.ts");
var MvcMgr_1 = __webpack_require__(/*! ../../../core/mvc/MvcMgr */ "./src/core/mvc/MvcMgr.ts");
var Loading = /** @class */ (function (_super) {
    __extends(Loading, _super);
    function Loading() {
        var _this = _super.call(this) || this;
        _this.moveY = false;
        _this.timerLoop(500, _this, function () {
            _this.tank.index = _this.tank.index === 7 ? 4 : _this.tank.index + 1;
        });
        _this.timerLoop(250, _this, function () {
            if (_this.moveY) {
                _this.tank.centerY += 1;
            }
            else {
                _this.tank.centerY -= 1;
            }
            _this.moveY = !_this.moveY;
        });
        _this.btn_close.on(Laya.Event.CLICK, _this, function () {
            MvcMgr_1.closeView(_this);
        });
        return _this;
    }
    Loading.prototype.openCb = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log('Loading open', args);
    };
    Loading.viewKey = ViewConst_1.ViewConst.Loading;
    Loading = __decorate([
        MvcMgr_1.RegisterMVC(BaseLayer_1.BaseLayer)
    ], Loading);
    return Loading;
}(layaMaxUI_1.ui.view.LoadingUI));
exports.default = Loading;


/***/ }),

/***/ "./src/game/ui/view/ViewTest.ts":
/*!**************************************!*\
  !*** ./src/game/ui/view/ViewTest.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var layaMaxUI_1 = __webpack_require__(/*! ../../../ui/layaMaxUI */ "./src/ui/layaMaxUI.ts");
var ViewConst_1 = __webpack_require__(/*! ../../../core/const/ViewConst */ "./src/core/const/ViewConst.ts");
var ViewLayer_1 = __webpack_require__(/*! ../../../core/game/scenes/ViewLayer */ "./src/core/game/scenes/ViewLayer.ts");
var ViewTest1_1 = __webpack_require__(/*! ./ViewTest1 */ "./src/game/ui/view/ViewTest1.ts");
var MvcMgr_1 = __webpack_require__(/*! ../../../core/mvc/MvcMgr */ "./src/core/mvc/MvcMgr.ts");
var ViewTest = /** @class */ (function (_super) {
    __extends(ViewTest, _super);
    function ViewTest() {
        var _this = _super.call(this) || this;
        _this.moveY = false;
        _this.timerLoop(500, _this, function () {
            _this.tank.index = _this.tank.index === 7 ? 4 : _this.tank.index + 1;
        });
        _this.timerLoop(250, _this, function () {
            if (_this.moveY) {
                _this.tank.centerY += 1;
            }
            else {
                _this.tank.centerY -= 1;
            }
            _this.moveY = !_this.moveY;
        });
        _this.closeBtn.on(Laya.Event.CLICK, _this, function () {
            MvcMgr_1.closeView(_this);
        });
        _this.viewBtn.on(Laya.Event.CLICK, _this, function () {
            MvcMgr_1.openView(ViewTest1_1.default);
        });
        return _this;
    }
    ViewTest.prototype.openCb = function () {
        console.log('ViewTest open');
    };
    ViewTest.viewKey = ViewConst_1.ViewConst.ViewTest;
    ViewTest = __decorate([
        MvcMgr_1.RegisterMVC(ViewLayer_1.ViewLayer)
    ], ViewTest);
    return ViewTest;
}(layaMaxUI_1.ui.view.ViewTestUI));
exports.default = ViewTest;


/***/ }),

/***/ "./src/game/ui/view/ViewTest1.ts":
/*!***************************************!*\
  !*** ./src/game/ui/view/ViewTest1.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var layaMaxUI_1 = __webpack_require__(/*! ../../../ui/layaMaxUI */ "./src/ui/layaMaxUI.ts");
var ViewConst_1 = __webpack_require__(/*! ../../../core/const/ViewConst */ "./src/core/const/ViewConst.ts");
var ViewLayer_1 = __webpack_require__(/*! ../../../core/game/scenes/ViewLayer */ "./src/core/game/scenes/ViewLayer.ts");
var MvcMgr_1 = __webpack_require__(/*! ../../../core/mvc/MvcMgr */ "./src/core/mvc/MvcMgr.ts");
var ViewTest1 = /** @class */ (function (_super) {
    __extends(ViewTest1, _super);
    function ViewTest1() {
        var _this = _super.call(this) || this;
        _this.moveY = false;
        _this.timerLoop(500, _this, function () {
            _this.tank.index = _this.tank.index === 7 ? 4 : _this.tank.index + 1;
        });
        _this.timerLoop(250, _this, function () {
            if (_this.moveY) {
                _this.tank.centerY += 1;
            }
            else {
                _this.tank.centerY -= 1;
            }
            _this.moveY = !_this.moveY;
        });
        _this.closeBtn.on(Laya.Event.CLICK, _this, function () {
            MvcMgr_1.closeView(_this);
        });
        return _this;
    }
    ViewTest1.prototype.openCb = function () {
        console.log('ViewTest open');
    };
    ViewTest1.viewKey = ViewConst_1.ViewConst.ViewTest1;
    ViewTest1 = __decorate([
        MvcMgr_1.RegisterMVC(ViewLayer_1.ViewLayer)
    ], ViewTest1);
    return ViewTest1;
}(layaMaxUI_1.ui.view.ViewTest1UI));
exports.default = ViewTest1;


/***/ }),

/***/ "./src/net/http/GameNet.ts":
/*!*********************************!*\
  !*** ./src/net/http/GameNet.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Singleton_1 = __webpack_require__(/*! ../../core/base/Singleton */ "./src/core/base/Singleton.ts");
var NetRequest_1 = __webpack_require__(/*! ./NetRequest */ "./src/net/http/NetRequest.ts");
var GameNet = /** @class */ (function (_super) {
    __extends(GameNet, _super);
    function GameNet() {
        return _super.call(this) || this;
    }
    GameNet.prototype.initServer = function (url) {
        this.serverUrl = url;
    };
    GameNet.prototype.send = function (api, bodyVariables, urlVariables, method, responseType, header) {
        if (bodyVariables === void 0) { bodyVariables = null; }
        if (urlVariables === void 0) { urlVariables = ''; }
        if (method === void 0) { method = 'post'; }
        if (responseType === void 0) { responseType = 'json'; }
        this.sendByUrl(this.serverUrl, api, bodyVariables, urlVariables, method, responseType, header);
    };
    GameNet.prototype.sendPromise = function (api, bodyVariables, urlVariables, method, responseType, header) {
        if (bodyVariables === void 0) { bodyVariables = null; }
        if (urlVariables === void 0) { urlVariables = ''; }
        if (method === void 0) { method = 'post'; }
        if (responseType === void 0) { responseType = 'json'; }
        this.sendPromiseByUrl(this.serverUrl, api, bodyVariables, urlVariables, method, responseType, header);
    };
    GameNet.prototype.sendByUrl = function (url, api, bodyVariables, urlVariables, method, responseType, header) {
        if (bodyVariables === void 0) { bodyVariables = null; }
        if (urlVariables === void 0) { urlVariables = ''; }
        if (method === void 0) { method = 'post'; }
        if (responseType === void 0) { responseType = 'json'; }
        var req = NetRequest_1.default.Create(api, url + api + urlVariables, bodyVariables, method, responseType, header);
        req.Send();
    };
    GameNet.prototype.sendPromiseByUrl = function (url, api, bodyVariables, urlVariables, method, responseType, header) {
        if (bodyVariables === void 0) { bodyVariables = null; }
        if (urlVariables === void 0) { urlVariables = ''; }
        if (method === void 0) { method = 'post'; }
        if (responseType === void 0) { responseType = 'json'; }
        return __awaiter(this, void 0, void 0, function () {
            var req, get;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        req = NetRequest_1.default.Create(api, url + api + urlVariables, bodyVariables, method, responseType, header);
                        return [4 /*yield*/, req.SendPromise()];
                    case 1:
                        get = _a.sent();
                        return [2 /*return*/, get];
                }
            });
        });
    };
    return GameNet;
}(Singleton_1.Singleton));
exports.default = GameNet;


/***/ }),

/***/ "./src/net/http/NetRequest.ts":
/*!************************************!*\
  !*** ./src/net/http/NetRequest.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var GameApp_1 = __webpack_require__(/*! ../../core/game/GameApp */ "./src/core/game/GameApp.ts");
var NetRequest = /** @class */ (function () {
    function NetRequest() {
        var req = new laya.net.HttpRequest();
        this.req = req;
    }
    NetRequest.Create = function (apiPath, url, data, method, responseType, headers, messageKey) {
        var request = new NetRequest();
        request.url = url;
        request.data = data;
        request.method = method;
        request.responseType = responseType;
        request.headers = headers;
        request.apiPath = apiPath;
        request.messageKey = messageKey;
        return request;
    };
    NetRequest.prototype.Send = function () {
        var req = this.req;
        var url = this.url;
        var data = this.data;
        var method = this.method;
        var responseType = this.responseType;
        var headers = this.headers || ['Content-Type', 'application/json'];
        req.once(laya.events.Event.COMPLETE, this, this.completeHandler);
        req.once(laya.events.Event.ERROR, this, this.errorHandler);
        req.send(url, data, method, responseType, headers);
    };
    NetRequest.prototype.SendPromise = function () {
        return __awaiter(this, void 0, void 0, function () {
            var req, url, data, method, responseType, headers, _post;
            return __generator(this, function (_a) {
                req = this.req;
                url = this.url;
                data = this.data;
                method = this.method;
                responseType = this.responseType;
                headers = this.headers || ['Content-Type', 'application/json'];
                _post = function (resolve, reject) {
                    var _resolve = function (obj) {
                        resolve(obj);
                    };
                    req.once(laya.events.Event.COMPLETE, this, _resolve);
                    req.once(laya.events.Event.ERROR, this, _resolve);
                    req.send(url, data, method, responseType, headers);
                };
                return [2 /*return*/, new Promise(_post)];
            });
        });
    };
    NetRequest.prototype.completeHandler = function (data) {
        if (this.messageKey) {
            GameApp_1.default.dispatcher.SendMsg(this.messageKey, data);
        }
    };
    NetRequest.prototype.errorHandler = function (e) {
        console.error(this.messageKey, e);
    };
    NetRequest.prototype.processHandler = function (data) { };
    return NetRequest;
}());
exports.default = NetRequest;


/***/ }),

/***/ "./src/net/socket.ts":
/*!***************************!*\
  !*** ./src/net/socket.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Singleton_1 = __webpack_require__(/*! ../core/base/Singleton */ "./src/core/base/Singleton.ts");
var Observer_1 = __webpack_require__(/*! ../core/service/dispatcher/Observer */ "./src/core/service/dispatcher/Observer.ts");
var io = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/*
   socket.init(...)
   socket.connect()
*/
var Socket = /** @class */ (function (_super) {
    __extends(Socket, _super);
    function Socket() {
        var _this = _super.call(this) || this;
        _this.nonce = 1;
        _this.event = 'message';
        _this.observers = {};
        return _this;
    }
    Socket.prototype.init = function (ip, successCallback, failedCallback, heartbeatFailedCallback) {
        this.ipAddress = ip;
        this.connectSuccessCallback = successCallback;
        this.connectFailedCallback = failedCallback;
        this.heartbeatFailedCallback = heartbeatFailedCallback;
    };
    Socket.prototype.connect = function () {
        var _this = this;
        this.socket = io(this.ipAddress);
        this.socket.on('connect', function () {
            _this.timeStamp = Date.now();
            console.log('websocket connect...');
            _this.connectSuccess();
        });
        this.socket.on(this.event, function (data) {
            _this.timeStamp = Date.now();
            data = JSON.stringify(data);
            _this.receiveMessage(JSON.parse(data));
        });
        this.socket.on('disconnect', this.onDisconnect);
    };
    Socket.prototype.disconnect = function () {
        this.socket.disconnect();
    };
    Socket.prototype.onDisconnect = function () {
        if (this.connectFailedCallback)
            this.connectFailedCallback();
    };
    Socket.prototype.connectSuccess = function () {
        if (this.connectSuccessCallback)
            this.connectSuccessCallback();
        this.send('login', {}, 'C2S_login');
        this.startHeartBeat();
    };
    Socket.prototype.startHeartBeat = function () {
        var _this = this;
        Laya.timer.loop(5000, this, function () {
            _this.sendHeartBeat();
        });
    };
    Socket.prototype.sendHeartBeat = function () {
        var v = Date.now() - this.timeStamp;
        if (v >= 30000) {
            if (this.heartbeatFailedCallback)
                this.heartbeatFailedCallback();
        }
        this.send('heartbeat', {}, 'C2S_heartbeat');
    };
    Socket.prototype.receiveMessage = function (data) {
        console.log(data.headers.nonce);
        if (data.headers.nonce && data.headers.nonce.startsWith('S2C_')) {
            for (var k in this.observers) {
                if (data.headers.func_name == k) {
                    this.observers[k].forEach(function (element) {
                        element.RecvMsg(data);
                    });
                }
            }
        }
        else {
            for (var k in this.observers) {
                if (data.headers.nonce == k) {
                    this.observers[k].forEach(function (element) {
                        element.RecvMsg(data);
                    });
                    delete this.observers[k];
                }
            }
        }
    };
    Socket.prototype.sendMessage = function (funcName, observer, data, callback) {
        if (callback === void 0) { callback = null; }
        var nonce = 'C2S_' + funcName + this.nonce++;
        if (!this.observers[nonce])
            this.observers[nonce] = [];
        this.observers[nonce].push(new Observer_1.Observer(nonce, observer, callback));
        this.send(funcName, data, nonce);
    };
    Socket.prototype.observerMessage = function (funcName, observer, callback) {
        if (callback === void 0) { callback = null; }
        var key = funcName;
        if (!this.observers[key])
            this.observers[key] = [];
        var obs = new Observer_1.Observer(key, observer, callback);
        this.observers[key].push(obs);
        return obs;
    };
    Socket.prototype.remove = function (obs) {
        if (obs == null)
            return;
        var arr = this.observers[obs.topic];
        if (!arr)
            return null;
        var ind = arr.indexOf(obs);
        if (ind < 0)
            return null;
        arr.splice(ind, 1);
        if (arr.length == 0)
            delete this.observers[obs.topic];
        return obs;
    };
    Socket.prototype.send = function (funcName, data, nonce) {
        var param = {
            headers: {
                uid: 'hejunjie',
                func_name: funcName,
                nonce: nonce,
            },
            params: data,
        };
        this.timeStamp = Date.now();
        this.socket.emit(this.event, JSON.stringify(param));
    };
    return Socket;
}(Singleton_1.Singleton));
exports.default = Socket;


/***/ }),

/***/ "./src/scene/MainScene.ts":
/*!********************************!*\
  !*** ./src/scene/MainScene.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var layaMaxUI_1 = __webpack_require__(/*! ../ui/layaMaxUI */ "./src/ui/layaMaxUI.ts");
var APage_1 = __webpack_require__(/*! ../game/ui/view/APage/APage */ "./src/game/ui/view/APage/APage.ts");
var MvcMgr_1 = __webpack_require__(/*! ../core/mvc/MvcMgr */ "./src/core/mvc/MvcMgr.ts");
var MainScene = /** @class */ (function (_super) {
    __extends(MainScene, _super);
    function MainScene() {
        var _this = _super.call(this) || this;
        // GameApp.init(this)
        var UI = new Laya.Sprite();
        UI.name = 'UI';
        UI.width = Laya.stage.width;
        UI.height = Laya.stage.height;
        Laya.stage.addChild(UI);
        MvcMgr_1.setUIRoot(UI);
        MvcMgr_1.openView(APage_1.default);
        return _this;
    }
    MainScene.prototype.onOpened = function () { };
    return MainScene;
}(layaMaxUI_1.ui.scene.MainSceneUI));
exports.default = MainScene;


/***/ }),

/***/ "./src/ui/layaMaxUI.ts":
/*!*****************************!*\
  !*** ./src/ui/layaMaxUI.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
var View = Laya.View;
var Scene = Laya.Scene;
var v = __webpack_require__(/*! ../core/mvc/view/BaseView */ "./src/core/mvc/view/BaseView.ts");
var BaseView = v.KUI.BaseView;
var REG = Laya.ClassUtils.regClass;
var ui;
(function (ui) {
    var scene;
    (function (scene) {
        var MainSceneUI = /** @class */ (function (_super) {
            __extends(MainSceneUI, _super);
            function MainSceneUI() {
                return _super.call(this) || this;
            }
            MainSceneUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadScene("scene/MainScene");
            };
            return MainSceneUI;
        }(Scene));
        scene.MainSceneUI = MainSceneUI;
        REG("ui.scene.MainSceneUI", MainSceneUI);
    })(scene = ui.scene || (ui.scene = {}));
})(ui = exports.ui || (exports.ui = {}));
(function (ui) {
    var view;
    (function (view) {
        var APageUI = /** @class */ (function (_super) {
            __extends(APageUI, _super);
            function APageUI() {
                return _super.call(this) || this;
            }
            APageUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(APageUI.uiView);
            };
            APageUI.uiView = { "type": "BaseView", "props": { "width": 640, "height": 1136 }, "compId": 2, "child": [{ "type": "Rect", "props": { "width": 640, "name": "r", "lineWidth": 1, "height": 1136, "fillColor": "#fbbbbb" }, "compId": 7 }, { "type": "Button", "props": { "y": 555, "x": 208, "width": 200, "var": "btn", "skin": "comp/button.png", "label": "GoTo BPage", "height": 50 }, "compId": 8 }, { "type": "Label", "props": { "y": 41, "x": 398, "width": 201, "var": "contents", "valign": "middle", "text": "ssss", "height": 500, "fontSize": 40, "align": "center" }, "compId": 14 }, { "type": "Button", "props": { "y": 670, "x": 208, "width": 200, "var": "baseBtn", "skin": "comp/button.png", "label": "GoTo Base", "height": 50 }, "compId": 15 }], "loadList": ["comp/button.png"], "loadList3D": [] };
            return APageUI;
        }(BaseView));
        view.APageUI = APageUI;
        REG("ui.view.APageUI", APageUI);
        var BaseTestUI = /** @class */ (function (_super) {
            __extends(BaseTestUI, _super);
            function BaseTestUI() {
                return _super.call(this) || this;
            }
            BaseTestUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(BaseTestUI.uiView);
            };
            BaseTestUI.uiView = { "type": "View", "props": { "width": 640, "height": 1136 }, "compId": 2, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "top": 0, "skin": "comp/image.png", "right": 0, "left": 0, "bottom": 0 }, "compId": 8 }, { "type": "Clip", "props": { "y": 0, "x": 0, "var": "tank", "skin": "Characters/Tank_8.png", "index": 4, "clipY": 4, "clipX": 4, "centerY": -1, "centerX": 0 }, "compId": 3 }, { "type": "Button", "props": { "y": 327, "x": 282, "var": "closeBtn", "skin": "comp/button.png", "label": "close" }, "compId": 4 }, { "type": "Button", "props": { "y": 252, "x": 472, "var": "dialogBtn", "skin": "comp/button.png", "label": "dialog" }, "compId": 5 }, { "type": "Button", "props": { "y": 304, "x": 472, "var": "loadingBtn", "skin": "comp/button.png", "label": "base" }, "compId": 6 }, { "type": "Button", "props": { "y": 362, "x": 472, "var": "viewBtn", "skin": "comp/button.png", "label": "view" }, "compId": 7 }], "loadList": ["comp/image.png", "Characters/Tank_8.png", "comp/button.png"], "loadList3D": [] };
            return BaseTestUI;
        }(View));
        view.BaseTestUI = BaseTestUI;
        REG("ui.view.BaseTestUI", BaseTestUI);
        var BPageUI = /** @class */ (function (_super) {
            __extends(BPageUI, _super);
            function BPageUI() {
                return _super.call(this) || this;
            }
            BPageUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(BPageUI.uiView);
            };
            BPageUI.uiView = { "type": "BaseView", "props": { "width": 300, "height": 1136 }, "compId": 2, "child": [{ "type": "Rect", "props": { "width": 300, "lineWidth": 1, "height": 1136, "fillColor": "#cdf9a4" }, "compId": 3 }, { "type": "Button", "props": { "y": 534, "x": 59, "width": 200, "var": "change", "skin": "comp/button.png", "label": "ChangeAPage", "height": 50 }, "compId": 4 }, { "type": "Button", "props": { "y": 644, "x": 59, "width": 200, "var": "close_btn", "skin": "comp/button.png", "label": "Close", "height": 50 }, "compId": 5 }], "loadList": ["comp/button.png"], "loadList3D": [] };
            return BPageUI;
        }(BaseView));
        view.BPageUI = BPageUI;
        REG("ui.view.BPageUI", BPageUI);
        var DialogTestUI = /** @class */ (function (_super) {
            __extends(DialogTestUI, _super);
            function DialogTestUI() {
                return _super.call(this) || this;
            }
            DialogTestUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(DialogTestUI.uiView);
            };
            DialogTestUI.uiView = { "type": "View", "props": { "width": 640, "height": 300 }, "compId": 2, "child": [{ "type": "Image", "props": { "top": 0, "skin": "Characters/Tank_2.png", "right": 0, "left": 0, "bottom": 0 }, "compId": 8 }, { "type": "Box", "props": { "width": 200, "var": "box", "height": 200, "centerY": 0, "centerX": 0 }, "compId": 9, "child": [{ "type": "Image", "props": { "top": 0, "skin": "comp/image.png", "sizeGrid": "0,0,0,0", "right": 0, "left": 0, "bottom": 0 }, "compId": 10 }, { "type": "Clip", "props": { "y": 550, "x": 303, "var": "tank", "skin": "Characters/Tank_7.png", "index": 4, "clipY": 4, "clipX": 4, "centerY": -1, "centerX": 0 }, "compId": 3 }, { "type": "Button", "props": { "y": 39, "x": 62.5, "var": "closeBtn", "skin": "comp/button.png", "label": "close" }, "compId": 4 }] }], "loadList": ["Characters/Tank_2.png", "comp/image.png", "Characters/Tank_7.png", "comp/button.png"], "loadList3D": [] };
            return DialogTestUI;
        }(View));
        view.DialogTestUI = DialogTestUI;
        REG("ui.view.DialogTestUI", DialogTestUI);
        var LoadingUI = /** @class */ (function (_super) {
            __extends(LoadingUI, _super);
            function LoadingUI() {
                return _super.call(this) || this;
            }
            LoadingUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(LoadingUI.uiView);
            };
            LoadingUI.uiView = { "type": "View", "props": { "width": 640, "height": 1136 }, "compId": 2, "child": [{ "type": "Image", "props": { "top": 0, "skin": "Characters/Tank_7.png", "right": 0, "left": 0, "bottom": 0 }, "compId": 17 }, { "type": "Clip", "props": { "var": "tank", "skin": "Characters/Tank_4.png", "index": 4, "clipY": 4, "clipX": 4, "centerY": -1, "centerX": 0 }, "compId": 3 }, { "type": "Button", "props": { "y": 327, "x": 282.5, "var": "btn_close", "skin": "comp/button.png", "label": "close" }, "compId": 4 }, { "type": "Button", "props": { "y": 222, "x": 282.5, "var": "btn_connect", "skin": "comp/button.png", "label": "connect" }, "compId": 5 }], "loadList": ["Characters/Tank_7.png", "Characters/Tank_4.png", "comp/button.png"], "loadList3D": [] };
            return LoadingUI;
        }(View));
        view.LoadingUI = LoadingUI;
        REG("ui.view.LoadingUI", LoadingUI);
        var ViewTestUI = /** @class */ (function (_super) {
            __extends(ViewTestUI, _super);
            function ViewTestUI() {
                return _super.call(this) || this;
            }
            ViewTestUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ViewTestUI.uiView);
            };
            ViewTestUI.uiView = { "type": "View", "props": { "width": 640, "height": 1136 }, "compId": 2, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "top": 0, "skin": "comp/image.png", "right": 0, "left": 0, "bottom": 0 }, "compId": 7 }, { "type": "Clip", "props": { "y": 0, "x": 0, "var": "tank", "skin": "Characters/$狼.png", "index": 4, "clipY": 4, "clipX": 4, "centerY": -1, "centerX": 0 }, "compId": 3 }, { "type": "Button", "props": { "y": 327, "x": 282, "var": "closeBtn", "skin": "comp/button.png", "label": "close" }, "compId": 4 }, { "type": "Button", "props": { "y": 385, "x": 282.5, "var": "viewBtn", "skin": "comp/button.png", "label": "view" }, "compId": 5 }], "loadList": ["comp/image.png", "Characters/$狼.png", "comp/button.png"], "loadList3D": [] };
            return ViewTestUI;
        }(View));
        view.ViewTestUI = ViewTestUI;
        REG("ui.view.ViewTestUI", ViewTestUI);
        var ViewTest1UI = /** @class */ (function (_super) {
            __extends(ViewTest1UI, _super);
            function ViewTest1UI() {
                return _super.call(this) || this;
            }
            ViewTest1UI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ViewTest1UI.uiView);
            };
            ViewTest1UI.uiView = { "type": "View", "props": { "width": 640, "height": 1136 }, "compId": 2, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "top": 0, "skin": "comp/image.png", "right": 0, "left": 0, "bottom": 0 }, "compId": 6 }, { "type": "Clip", "props": { "y": 0, "x": 0, "var": "tank", "skin": "Characters/$狼.png", "index": 4, "clipY": 4, "clipX": 4, "centerY": -1, "centerX": 0 }, "compId": 3 }, { "type": "Button", "props": { "y": 327, "x": 282, "var": "closeBtn", "skin": "comp/button.png", "label": "close" }, "compId": 4 }], "loadList": ["comp/image.png", "Characters/$狼.png", "comp/button.png"], "loadList3D": [] };
            return ViewTest1UI;
        }(View));
        view.ViewTest1UI = ViewTest1UI;
        REG("ui.view.ViewTest1UI", ViewTest1UI);
    })(view = ui.view || (ui.view = {}));
})(ui = exports.ui || (exports.ui = {}));


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWVDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvYmFzZS9TaW5nbGV0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY29uc3QvTGF5ZXJDb25zdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9jb25zdC9WaWV3Q29uc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZ2FtZS9HYW1lQXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2dhbWUvc2NlbmVzL0Jhc2VMYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9nYW1lL3NjZW5lcy9EaWFsb2dMYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9nYW1lL3NjZW5lcy9WaWV3TGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZ2FtZS9zY2VuZXMvVmlld01nci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9nYW1lL3V0aWxzL1N0cmluZ1V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZ2FtZS91dGlscy9UaW1lVXRpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9tdmMvQ29udHJvbGxlck1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvbXZjL012Y01nci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9tdmMvVmlld01nci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9tdmMvY29udHJvbGxlci9CYXNlQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9tdmMvbW9kZWwvQmFzZU1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL212Yy92aWV3L0Jhc2VWaWV3LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3NlcnZpY2UvU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9zZXJ2aWNlL2Rpc3BhdGNoZXIvRGlzcGF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9zZXJ2aWNlL2Rpc3BhdGNoZXIvT2JzZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdWkvdmlldy9BUGFnZS9BUGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS91aS92aWV3L0FQYWdlL0FQYWdlQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS91aS92aWV3L0FQYWdlL0FwYWdlTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdWkvdmlldy9CUGFnZS9CUGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS91aS92aWV3L0JQYWdlL0JQYWdlQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS91aS92aWV3L0JQYWdlL0JQYWdlTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdWkvdmlldy9CYXNlVGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS91aS92aWV3L0RpYWxvZ1Rlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdWkvdmlldy9Mb2FkaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3VpL3ZpZXcvVmlld1Rlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdWkvdmlldy9WaWV3VGVzdDEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ldC9odHRwL0dhbWVOZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ldC9odHRwL05ldFJlcXVlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ldC9zb2NrZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lL01haW5TY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvbGF5YU1heFVJLnRzIiwid2VicGFjazovLy93cyAoaWdub3JlZCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FB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TUFBTSxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sRUFBQyxHQUFHLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLFdBQVcsRUFBQyxTQUFTLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBQyxZQUFZLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLEdBQUcsRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxTQUFTLEVBQUMsTUFBTSxFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBQyxX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QyxNQUFNLEVBQUMsT0FBTyxFQUFDLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsdUJBQXVCLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLHVCQUF1QixFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLFdBQVcsRUFBQyxNQUFNLEVBQUMsaUJBQWlCLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxhQUFhLEVBQUMsTUFBTSxFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyx1QkFBdUIsRUFBQyx1QkFBdUIsRUFBQyxpQkFBaUIsQ0FBQyxFQUFD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QkFBZ0IsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLG1CQUFtQixFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxNQUFNLEVBQUMsaUJBQWlCLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLGdCQUFnQixFQUFDLG1CQUFtQixFQUFDLGlCQUFpQixDQUFDLEVBQUMsWUFBWSxFQUFDLEVBQUUsRUFBQyxDQUFDO1lBTTdpQixrQkFBQztTQUFBLENBVGdDLElBQUksR0FTcEM7UUFUWSxnQkFBVyxjQVN2QjtRQUNELEdBQUcsQ0FBQyxxQkFBcUIsRUFBQyxXQUFXLENBQUMsQ0FBQztJQUMzQyxDQUFDLEVBckZnQixJQUFJLEdBQUosT0FBSSxLQUFKLE9BQUksUUFxRnBCO0FBQUQsQ0FBQyxFQXJGYSxFQUFFLEdBQUYsVUFBRSxLQUFGLFVBQUUsUUFxRmY7Ozs7Ozs7Ozs7OztBQ3RHRCxlIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiaW5kZXhcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9NYWluLnRzXCIsXCJsaWJcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvKipUaGlzIGNsYXNzIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IExheWFBaXJJREUsIHBsZWFzZSBkbyBub3QgbWFrZSBhbnkgbW9kaWZpY2F0aW9ucy4gKi9cclxuaW1wb3J0IE1haW5TY2VuZSBmcm9tIFwiLi9zY2VuZS9NYWluU2NlbmVcIlxyXG4vKlxyXG4qIOa4uOaIj+WIneWni+WMlumFjee9rjtcclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbmZpZ3tcclxuICAgIHN0YXRpYyB3aWR0aDpudW1iZXI9NjQwO1xyXG4gICAgc3RhdGljIGhlaWdodDpudW1iZXI9MTEzNjtcclxuICAgIHN0YXRpYyBzY2FsZU1vZGU6c3RyaW5nPVwic2hvd2FsbFwiO1xyXG4gICAgc3RhdGljIHNjcmVlbk1vZGU6c3RyaW5nPVwibm9uZVwiO1xyXG4gICAgc3RhdGljIGFsaWduVjpzdHJpbmc9XCJtaWRkbGVcIjtcclxuICAgIHN0YXRpYyBhbGlnbkg6c3RyaW5nPVwiY2VudGVyXCI7XHJcbiAgICBzdGF0aWMgc3RhcnRTY2VuZTphbnk9XCJzY2VuZS9NYWluU2NlbmUuc2NlbmVcIjtcclxuICAgIHN0YXRpYyBzY2VuZVJvb3Q6c3RyaW5nPVwiXCI7XHJcbiAgICBzdGF0aWMgZGVidWc6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBzdGF0OmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgcGh5c2ljc0RlYnVnOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgZXhwb3J0U2NlbmVUb0pzb246Ym9vbGVhbj10cnVlO1xyXG4gICAgY29uc3RydWN0b3IoKXt9XHJcbiAgICBzdGF0aWMgaW5pdCgpe1xyXG4gICAgICAgIHZhciByZWc6IEZ1bmN0aW9uID0gTGF5YS5DbGFzc1V0aWxzLnJlZ0NsYXNzO1xyXG4gICAgICAgIHJlZyhcInNjZW5lL01haW5TY2VuZS50c1wiLE1haW5TY2VuZSk7XHJcbiAgICB9XHJcbn1cclxuR2FtZUNvbmZpZy5pbml0KCk7IiwiaW1wb3J0IEdhbWVDb25maWcgZnJvbSAnLi9HYW1lQ29uZmlnJ1xyXG5pbXBvcnQgJ0BiYWJlbC9wb2x5ZmlsbCdcclxuY2xhc3MgTWFpbiB7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy/moLnmja5JREXorr7nva7liJ3lp4vljJblvJXmk45cclxuICAgIGlmICh3aW5kb3dbJ0xheWEzRCddKSBMYXlhM0QuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodClcclxuICAgIGVsc2UgTGF5YS5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0LCBMYXlhWydXZWJHTCddKVxyXG4gICAgTGF5YVsnUGh5c2ljcyddICYmIExheWFbJ1BoeXNpY3MnXS5lbmFibGUoKVxyXG4gICAgTGF5YVsnRGVidWdQYW5lbCddICYmIExheWFbJ0RlYnVnUGFuZWwnXS5lbmFibGUoKVxyXG4gICAgLy8gTGF5YS5zdGFnZS5zY2FsZU1vZGUgPSBHYW1lQ29uZmlnLnNjYWxlTW9kZTtcclxuICAgIExheWEuc3RhZ2Uuc2NhbGVNb2RlID0gR2FtZUNvbmZpZy5zY2FsZU1vZGVcclxuICAgIExheWEuc3RhZ2Uuc2NyZWVuTW9kZSA9IEdhbWVDb25maWcuc2NyZWVuTW9kZVxyXG4gICAgTGF5YS5zdGFnZS5hbGlnblYgPSBHYW1lQ29uZmlnLmFsaWduVlxyXG4gICAgTGF5YS5zdGFnZS5hbGlnbkggPSBHYW1lQ29uZmlnLmFsaWduSFxyXG4gICAgLy/lhbzlrrnlvq7kv6HkuI3mlK/mjIHliqDovb1zY2VuZeWQjue8gOWcuuaZr1xyXG4gICAgTGF5YS5VUkwuZXhwb3J0U2NlbmVUb0pzb24gPSBHYW1lQ29uZmlnLmV4cG9ydFNjZW5lVG9Kc29uXHJcblxyXG4gICAgLy/miZPlvIDosIPor5XpnaLmnb/vvIjpgJrov4dJREXorr7nva7osIPor5XmqKHlvI/vvIzmiJbogIV1cmzlnLDlnYDlop7liqBkZWJ1Zz10cnVl5Y+C5pWw77yM5Z2H5Y+v5omT5byA6LCD6K+V6Z2i5p2/77yJXHJcbiAgICBpZiAoR2FtZUNvbmZpZy5kZWJ1ZyB8fCBMYXlhLlV0aWxzLmdldFF1ZXJ5U3RyaW5nKCdkZWJ1ZycpID09ICd0cnVlJykgTGF5YS5lbmFibGVEZWJ1Z1BhbmVsKClcclxuICAgIGlmIChHYW1lQ29uZmlnLnBoeXNpY3NEZWJ1ZyAmJiBMYXlhWydQaHlzaWNzRGVidWdEcmF3J10pIExheWFbJ1BoeXNpY3NEZWJ1Z0RyYXcnXS5lbmFibGUoKVxyXG4gICAgaWYgKEdhbWVDb25maWcuc3RhdCkgTGF5YS5TdGF0LnNob3coKVxyXG4gICAgTGF5YS5hbGVydEdsb2JhbEVycm9yID0gdHJ1ZVxyXG5cclxuICAgIC8v5r+A5rS76LWE5rqQ54mI5pys5o6n5Yi277yMdmVyc2lvbi5qc29u55SxSURF5Y+R5biD5Yqf6IO96Ieq5Yqo55Sf5oiQ77yM5aaC5p6c5rKh5pyJ5Lmf5LiN5b2x5ZON5ZCO57ut5rWB56iLXHJcbiAgICBMYXlhLlJlc291cmNlVmVyc2lvbi5lbmFibGUoJ3ZlcnNpb24uanNvbicsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vblZlcnNpb25Mb2FkZWQpLCBMYXlhLlJlc291cmNlVmVyc2lvbi5GSUxFTkFNRV9WRVJTSU9OKVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblZlcnNpb25Mb2FkZWQoKTogdm9pZCB7XHJcbiAgICAvL+a/gOa0u+Wkp+Wwj+WbvuaYoOWwhO+8jOWKoOi9veWwj+WbvueahOaXtuWAme+8jOWmguaenOWPkeeOsOWwj+WbvuWcqOWkp+WbvuWQiOmbhumHjOmdou+8jOWImeS8mOWFiOWKoOi9veWkp+WbvuWQiOmbhu+8jOiAjOS4jeaYr+Wwj+WbvlxyXG4gICAgTGF5YS5BdGxhc0luZm9NYW5hZ2VyLmVuYWJsZSgnZmlsZWNvbmZpZy5qc29uJywgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uQ29uZmlnTG9hZGVkKSlcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Db25maWdMb2FkZWQoKTogdm9pZCB7XHJcbiAgICAvL+WKoOi9vUlEReaMh+WumueahOWcuuaZr1xyXG4gICAgR2FtZUNvbmZpZy5zdGFydFNjZW5lICYmIExheWEuU2NlbmUub3BlbihHYW1lQ29uZmlnLnN0YXJ0U2NlbmUpXHJcbiAgfVxyXG59XHJcbi8v5r+A5rS75ZCv5Yqo57G7XHJcbm5ldyBNYWluKClcclxuIiwiLyoqXHJcbiAqIG5hbWVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBTaW5nbGV0b24ge1xyXG4gIC8qKlxyXG4gICAqIGRlZmF1bHQgY29uc3RyYWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgX2luc3RhbmNlOiBhbnlcclxuICAvKipcclxuICAgKiBnZXQgaW5zdGFuY2Ugb3IgY3JlYXRlIG5ldyBpbnN0YW5jZVxyXG4gICAqIEByZXR1cm5zIHthbnl9XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBDcmVhdGVPckdldCguLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICBjb25zdCBpbnN0VDogYW55ID0gdGhpc1xyXG4gICAgcmV0dXJuIChpbnN0VC5faW5zdGFuY2UgPSBpbnN0VC5faW5zdGFuY2UgfHwgbmV3IGluc3RUKC4uLmFyZ3MpKVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZW51bSBMYXllckNvbnN0IHtcbiAgYmFzZSA9IDEsXG4gIGJhc2UxLFxuICB2aWV3LFxuICBzaGFyZSxcbiAgZGlhbG9nLFxuICBsb2FkaW5nLFxufVxuIiwiZXhwb3J0IGVudW0gVmlld0NvbnN0IHtcclxuICBNYWluID0gMSxcclxuICBMb2FkaW5nLFxyXG4gIFZpZXdUZXN0LFxyXG4gIFZpZXdUZXN0MSxcclxuICBEaWFsb2dUZXN0LFxyXG4gIEJhc2VUZXN0LFxyXG4gIEFQYWdlLFxyXG4gIEJQYWdlXHJcbn1cclxuIiwiaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvU2VydmljZSdcbmltcG9ydCB7IERpc3BhdGNoZXIgfSBmcm9tICcuLi9zZXJ2aWNlL2Rpc3BhdGNoZXIvRGlzcGF0Y2hlcidcbmltcG9ydCB7IFZpZXdNZ3IgfSBmcm9tICcuL3NjZW5lcy9WaWV3TWdyJ1xuaW1wb3J0IFNvY2tldCBmcm9tICcuLi8uLi9uZXQvc29ja2V0J1xuaW1wb3J0IHsgU3RyaW5nVXRpbCB9IGZyb20gJy4vdXRpbHMvU3RyaW5nVXRpbCdcbmltcG9ydCB7IFRpbWVVdGlsIH0gZnJvbSAnLi91dGlscy9UaW1lVXRpbCdcblxuaW1wb3J0IEdhbWVOZXQgZnJvbSAnLi4vLi4vbmV0L2h0dHAvR2FtZU5ldCdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVBcHAge1xuICAvLyDlhajlsYDphY3nva7mlbDmja5cbiAgcHVibGljIHN0YXRpYyBHbG9iYWxEYXRhOiBhbnkgPSBudWxsXG5cbiAgLyoqXG4gICAqIOWIneWni+WMluWHveaVsFxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgaW5pdChzY2VuZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBHYW1lQXBwLkdsb2JhbERhdGEgPSBMYXlhLmxvYWRlci5nZXRSZXMoJ2NvbmYvZ2xvYmFsLmpzb24nKVxuICAgICAgLy/luKfova7or6JcbiAgICAgIFNlcnZpY2UuSW5pdCgpXG4gICAgICByZXNvbHZlKClcbiAgICB9KVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXQgZGlzcGF0Y2hlcigpOiBEaXNwYXRjaGVyIHtcbiAgICByZXR1cm4gU2VydmljZS5kaXNwYXRjaGVyXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldCB2aWV3TWdyKCk6IFZpZXdNZ3Ige1xuICAgIHJldHVybiBWaWV3TWdyLkNyZWF0ZU9yR2V0KClcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IFN0cmluZ1V0aWwoKTogU3RyaW5nVXRpbCB7XG4gICAgcmV0dXJuIFN0cmluZ1V0aWwuQ3JlYXRlT3JHZXQoKVxuICB9XG4gIHB1YmxpYyBzdGF0aWMgZ2V0IFRpbWVVdGlsKCk6IFRpbWVVdGlsIHtcbiAgICByZXR1cm4gVGltZVV0aWwuQ3JlYXRlT3JHZXQoKVxuICB9XG4gIHB1YmxpYyBzdGF0aWMgZ2V0IFNvY2tldCgpOiBTb2NrZXQge1xuICAgIHJldHVybiBTb2NrZXQuQ3JlYXRlT3JHZXQoKVxuICB9XG4gIHB1YmxpYyBzdGF0aWMgZ2V0IG5ldCgpOiBHYW1lTmV0IHtcbiAgICByZXR1cm4gR2FtZU5ldC5DcmVhdGVPckdldCgpXG4gIH1cbn1cbiIsImltcG9ydCB7IElWaWV3IH0gZnJvbSAnLi9pbnRlcmZhY2UvSVZpZXcnXHJcbmltcG9ydCB7IExheWVyQ29uc3QgfSBmcm9tICcuLi8uLi9jb25zdC9MYXllckNvbnN0J1xyXG5pbXBvcnQgeyBJTGF5ZXIgfSBmcm9tICcuL2ludGVyZmFjZS9JTGF5ZXInXHJcbmV4cG9ydCBjbGFzcyBCYXNlTGF5ZXIgZXh0ZW5kcyBMYXlhLlNwcml0ZSBpbXBsZW1lbnRzIElMYXllciB7XHJcbiAgcHJvdGVjdGVkIG93blNjZW5lOiBMYXlhLlNjZW5lXHJcbiAgY29uc3RydWN0b3Ioc2NlbmU6IExheWEuU2NlbmUpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMub3duU2NlbmUgPSBzY2VuZVxyXG4gICAgdGhpcy53aWR0aCA9IHRoaXMub3duU2NlbmUud2lkdGhcclxuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5vd25TY2VuZS5oZWlnaHRcclxuICAgIHRoaXMuaGl0VGVzdFByaW9yID0gdHJ1ZVxyXG4gICAgdGhpcy5tb3VzZVRocm91Z2ggPSB0cnVlXHJcbiAgICB0aGlzLm1vdXNlRW5hYmxlZCA9IHRydWVcclxuICB9XHJcblxyXG4gIHN0YXRpYyBsYXllcktleSA9IExheWVyQ29uc3QuYmFzZVxyXG4gIHB1YmxpYyBvcGVuVmlldyh2aWV3OiBJVmlldywgLi4uYXJncyk6IHZvaWQge1xyXG4gICAgaWYgKHZpZXcub3BlbkNiKSB7XHJcbiAgICAgIHZpZXcub3BlbkNiLmFwcGx5KHZpZXcsIGFyZ3MpXHJcbiAgICB9XHJcbiAgICB0aGlzLm1vdXNlVGhyb3VnaCA9IGZhbHNlXHJcbiAgICB0aGlzLmFkZENoaWxkKHZpZXcpXHJcbiAgfVxyXG4gIHB1YmxpYyBjbG9zZVZpZXcodmlldzogSVZpZXcpOiB2b2lkIHtcclxuICAgIGlmICh2aWV3LmNsb3NlQ2IpIHtcclxuICAgICAgdmlldy5jbG9zZUNiKClcclxuICAgIH1cclxuICAgIHRoaXMucmVtb3ZlQ2hpbGQodmlldylcclxuICAgIHRoaXMubW91c2VUaHJvdWdoID0gdGhpcy5fY2hpbGRyZW4ubGVuZ3RoID09PSAwXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEJhc2VMYXllciB9IGZyb20gJy4vQmFzZUxheWVyJ1xyXG5pbXBvcnQgeyBJTGF5ZXIgfSBmcm9tICcuL2ludGVyZmFjZS9JTGF5ZXInXHJcbmltcG9ydCB7IExheWVyQ29uc3QgfSBmcm9tICcuLi8uLi9jb25zdC9MYXllckNvbnN0J1xyXG5pbXBvcnQgeyBjbG9zZVZpZXcgfSBmcm9tICcuLi8uLi9tdmMvTXZjTWdyJ1xyXG5jbGFzcyBNYXNrIGV4dGVuZHMgTGF5YS5JbWFnZSB7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy5za2luID0gJ2NvbXAvYmxhbmsucG5nJ1xyXG4gICAgdGhpcy5hbHBoYSA9IDAuOFxyXG4gIH1cclxufVxyXG5leHBvcnQgY2xhc3MgRGlhbG9nTGF5ZXIgZXh0ZW5kcyBCYXNlTGF5ZXIgaW1wbGVtZW50cyBJTGF5ZXIge1xyXG4gIC8vIHByaXZhdGUgbU1hc2tcclxuICBjb25zdHJ1Y3RvcihzY2VuZTogTGF5YS5TY2VuZSkge1xyXG4gICAgc3VwZXIoc2NlbmUpXHJcbiAgfVxyXG4gIHN0YXRpYyBsYXllcktleSA9IExheWVyQ29uc3QuZGlhbG9nXHJcblxyXG4gIHByaXZhdGUgbWFza3M6IE1hcDxzdHJpbmcsIExheWEuSW1hZ2U+ID0gbmV3IE1hcCgpXHJcblxyXG4gIHB1YmxpYyBvcGVuVmlldyh2aWV3OiBhbnksIC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XHJcbiAgICBsZXQgbWFzayA9IHRoaXMubWFza3MuZ2V0KHZpZXcuY29uc3RydWN0b3Iudmlld0tleSlcclxuICAgIGlmICghbWFzaykge1xyXG4gICAgICBtYXNrID0gbmV3IE1hc2soKVxyXG4gICAgICBtYXNrLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcclxuICAgICAgICBjbG9zZVZpZXcodmlldylcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIG1hc2sud2lkdGggPSB0aGlzLndpZHRoXHJcbiAgICBtYXNrLmhlaWdodCA9IHRoaXMuaGVpZ2h0XHJcblxyXG4gICAgdGhpcy5tYXNrcy5zZXQodmlldy5jb25zdHJ1Y3Rvci52aWV3S2V5LCBtYXNrKVxyXG4gICAgdGhpcy5hZGRDaGlsZChtYXNrKVxyXG4gICAgc3VwZXIub3BlblZpZXcuYXBwbHkodGhpcywgW3ZpZXcsIC4uLmFyZ3NdKVxyXG4gICAgdmlldy5hbmNob3JYID0gMC41XHJcbiAgICB2aWV3LmFuY2hvclkgPSAwLjVcclxuICAgIHZpZXcueCA9IHZpZXcud2lkdGggLyAyXHJcbiAgICB2aWV3LnkgPSB2aWV3LmhlaWdodCAvIDJcclxuICAgIHZpZXcubW91c2VUaHJvdWdoID0gdHJ1ZVxyXG4gICAgbGV0IHR3ZWVuID0gbmV3IExheWEuVHdlZW4oKVxyXG4gICAgdmlldy5zY2FsZVggPSAwLjhcclxuICAgIHZpZXcuc2NhbGVZID0gMC44XHJcbiAgICB0d2Vlbi50byhcclxuICAgICAgdmlldyxcclxuICAgICAgeyBzY2FsZVg6IDEuMDUsIHNjYWxlWTogMS4wNSB9LFxyXG4gICAgICAxMDAsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG5ldyBMYXlhLkhhbmRsZXIodGhpcywgKCkgPT4ge1xyXG4gICAgICAgIGxldCB0d2VlbiA9IG5ldyBMYXlhLlR3ZWVuKClcclxuICAgICAgICB0d2Vlbi50byh2aWV3LCB7IHNjYWxlWDogMSwgc2NhbGVZOiAxIH0sIDEwMCwgbnVsbClcclxuICAgICAgfSksXHJcbiAgICApXHJcbiAgfVxyXG4gIHB1YmxpYyBjbG9zZVZpZXcodmlldzogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMubWFza3MuZ2V0KHZpZXcuY29uc3RydWN0b3Iudmlld0tleSkpXHJcbiAgICBzdXBlci5jbG9zZVZpZXcodmlldylcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQmFzZUxheWVyIH0gZnJvbSAnLi9CYXNlTGF5ZXInXHJcblxyXG5pbXBvcnQgeyBJVmlldyB9IGZyb20gJy4vaW50ZXJmYWNlL0lWaWV3J1xyXG5cclxuaW1wb3J0IHsgTGF5ZXJDb25zdCB9IGZyb20gJy4uLy4uL2NvbnN0L0xheWVyQ29uc3QnXHJcblxyXG5jb25zdCBkaXMgPSAxMDBcclxuY29uc3QgdGltZSA9IDI0MFxyXG5leHBvcnQgY2xhc3MgVmlld0xheWVyIGV4dGVuZHMgQmFzZUxheWVyIHtcclxuICBjb25zdHJ1Y3RvcihzY2VuZTogTGF5YS5TY2VuZSkge1xyXG4gICAgc3VwZXIoc2NlbmUpXHJcbiAgfVxyXG4gIHN0YXRpYyBsYXllcktleSA9IExheWVyQ29uc3Qudmlld1xyXG4gIHByaXZhdGUgb3BlblZpZXdzOiBJVmlld1tdID0gW11cclxuIFxyXG4gIHB1YmxpYyBvcGVuVmlldyh2aWV3OiBhbnksIC4uLmFyZ3MpIHtcclxuICAgIGxldCBsYXN0VmlldzogTGF5YS5TcHJpdGVcclxuICAgIGNvbnN0IHR3ZWVuMSA9IG5ldyBMYXlhLlR3ZWVuKClcclxuICAgIGlmICh0aGlzLm9wZW5WaWV3cy5sZW5ndGgpIHtcclxuICAgICAgbGFzdFZpZXcgPSB0aGlzLm9wZW5WaWV3c1t0aGlzLm9wZW5WaWV3cy5sZW5ndGggLSAxXVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGFzdFZpZXcgPSB0aGlzLm93blNjZW5lXHJcbiAgICB9XHJcbiAgICBsYXN0Vmlldy54ID0gdGhpcy5vd25TY2VuZSA9PT0gbGFzdFZpZXcgPyAwIDogZGlzXHJcbiAgICB0d2VlbjEudG8oXHJcbiAgICAgIGxhc3RWaWV3LFxyXG4gICAgICB7IHg6IHRoaXMub3duU2NlbmUgPT09IGxhc3RWaWV3ID8gLWRpcyA6IDAgfSxcclxuICAgICAgdGltZSxcclxuICAgICAgbnVsbCxcclxuICAgICAgbmV3IExheWEuSGFuZGxlcihsYXN0VmlldywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChsYXN0VmlldyAhPT0gdGhpcy5vd25TY2VuZSkgbGFzdFZpZXcucmVtb3ZlU2VsZigpXHJcbiAgICAgIH0pLFxyXG4gICAgKVxyXG4gICAgdGhpcy5vcGVuVmlld3MucHVzaCh2aWV3KVxyXG4gICAgc3VwZXIub3BlblZpZXcuYXBwbHkodGhpcywgW3ZpZXcsIC4uLmFyZ3NdKVxyXG4gICAgY29uc3QgdHdlZW4yID0gbmV3IExheWEuVHdlZW4oKVxyXG4gICAgdmlldy54ID0gdGhpcy53aWR0aFxyXG4gICAgdHdlZW4yLnRvKFxyXG4gICAgICB2aWV3LFxyXG4gICAgICB7IHg6IGRpcyB9LFxyXG4gICAgICB0aW1lLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBuZXcgTGF5YS5IYW5kbGVyKHZpZXcsICgpID0+IHtcclxuICAgICAgICBpZiAodmlldy5hZnRlck9wZW4pIHtcclxuICAgICAgICAgIHZpZXcuYWZ0ZXJPcGVuLmNhbGwodmlldylcclxuICAgICAgICB9XHJcbiAgICAgIH0pLFxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb3NlVmlldyh2aWV3OiBhbnkpIHtcclxuICAgIGxldCBsYXN0Vmlld1xyXG4gICAgY29uc3QgdHdlZW4xID0gbmV3IExheWEuVHdlZW4oKVxyXG4gICAgdGhpcy5vcGVuVmlld3MucG9wKClcclxuICAgIGlmICh0aGlzLm9wZW5WaWV3cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxhc3RWaWV3ID0gdGhpcy5vcGVuVmlld3NbdGhpcy5vcGVuVmlld3MubGVuZ3RoIC0gMV1cclxuICAgICAgbGFzdFZpZXcuek9yZGVyID0gdmlldy56T3JkZXIgLSAxXHJcbiAgICAgIGxhc3RWaWV3LmxheWVyLmFkZENoaWxkKGxhc3RWaWV3KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGFzdFZpZXcgPSB0aGlzLm93blNjZW5lXHJcbiAgICB9XHJcblxyXG4gICAgbGFzdFZpZXcueCA9IGxhc3RWaWV3ID09PSB0aGlzLm93blNjZW5lID8gLWRpcyA6IDBcclxuXHJcbiAgICB0d2VlbjEudG8obGFzdFZpZXcsIHsgeDogbGFzdFZpZXcgPT09IHRoaXMub3duU2NlbmUgPyAwIDogZGlzIH0sIHRpbWUpXHJcbiAgICBjb25zdCB0d2VlbjIgPSBuZXcgTGF5YS5Ud2VlbigpXHJcbiAgICB2aWV3LnggPSBkaXNcclxuICAgIHR3ZWVuMi50byhcclxuICAgICAgdmlldyxcclxuICAgICAgeyB4OiB0aGlzLndpZHRoIH0sXHJcbiAgICAgIHRpbWUsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG5ldyBMYXlhLkhhbmRsZXIodGhpcywgKCkgPT4ge1xyXG4gICAgICAgIHN1cGVyLmNsb3NlVmlldyh2aWV3KVxyXG4gICAgICB9KSxcclxuICAgIClcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSVZpZXcgfSBmcm9tICcuL2ludGVyZmFjZS9JVmlldydcclxuaW1wb3J0IHsgU2luZ2xldG9uIH0gZnJvbSAnLi4vLi4vYmFzZS9TaW5nbGV0b24nXHJcbmltcG9ydCB7IFZpZXdDb25zdCB9IGZyb20gJy4uLy4uL2NvbnN0L1ZpZXdDb25zdCdcclxuXHJcbmV4cG9ydCBjbGFzcyBWaWV3TWdyIGV4dGVuZHMgU2luZ2xldG9uIHtcclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgfVxyXG4gIHByaXZhdGUgdmlld3M6IE1hcDxzdHJpbmcsIElWaWV3PiA9IG5ldyBNYXA8c3RyaW5nLCBJVmlldz4oKVxyXG4gIHByaXZhdGUgb3BlblZpZXdzOiBNYXA8c3RyaW5nLCBJVmlldz4gPSBuZXcgTWFwPHN0cmluZywgSVZpZXc+KClcclxuICBwdWJsaWMgZ2V0VmlldyhrZXkpOiBJVmlldyB7XHJcbiAgICBpZiAodGhpcy52aWV3cy5nZXQoa2V5KSkge1xyXG4gICAgICByZXR1cm4gdGhpcy52aWV3cy5nZXQoa2V5KVxyXG4gICAgfVxyXG4gIH1cclxuICBwdWJsaWMgc2V0VmlldyhrZXksIHZpZXc6IElWaWV3KTogdm9pZCB7XHJcbiAgICB0aGlzLnZpZXdzLnNldChrZXksIHZpZXcpXHJcbiAgfVxyXG4gIHB1YmxpYyBvcGVuVmlldyhrZXksIC4uLmFyZ3MpOiB2b2lkIHtcclxuICAgIGxldCB2aWV3ID0gdGhpcy5vcGVuVmlld3MuZ2V0KGtleSlcclxuICAgIGlmICh2aWV3KSB7XHJcbiAgICAgIHZpZXcub3Blbi5hcHBseSh2aWV3LCBhcmdzKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHZpZXcgPSB0aGlzLnZpZXdzLmdldChrZXkpXHJcbiAgICBpZiAodmlldykge1xyXG4gICAgICB2aWV3LmxheWVyLm9wZW5WaWV3LmFwcGx5KHZpZXcubGF5ZXIsIFt2aWV3LCAuLi5hcmdzXSlcclxuICAgICAgdGhpcy5vcGVuVmlld3Muc2V0KGtleSwgdmlldylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3ZpZXfkuI3lrZjlnKgnKVxyXG4gICAgfVxyXG4gIH1cclxuICBwdWJsaWMgY2xvc2VWaWV3KHZpZXdvcmtleTogYW55KTogdm9pZCB7XHJcbiAgICBsZXQgdmlldzogSVZpZXdcclxuICAgIGlmICh2aWV3b3JrZXkgaW4gVmlld0NvbnN0KSB7XHJcbiAgICAgIHZpZXcgPSB0aGlzLm9wZW5WaWV3cy5nZXQodmlld29ya2V5KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmlldyA9IHZpZXdvcmtleVxyXG4gICAgfVxyXG4gICAgaWYgKHZpZXcpIHtcclxuICAgICAgdmlldy5sYXllci5jbG9zZVZpZXcuYXBwbHkodmlldy5sYXllciwgW3ZpZXddKVxyXG4gICAgICB0aGlzLm9wZW5WaWV3cy5kZWxldGUodmlldy5uYW1lKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICB9XHJcbiAgcHVibGljIGlzT3Blbih2aWV3b3JrZXkpOiBib29sZWFuIHtcclxuICAgIGlmICh2aWV3b3JrZXkgaW4gVmlld0NvbnN0KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm9wZW5WaWV3cy5oYXModmlld29ya2V5KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMub3BlblZpZXdzLmhhcyh2aWV3b3JrZXkubmFtZSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2luZ2xldG9uIH0gZnJvbSAnLi4vLi4vYmFzZS9TaW5nbGV0b24nXHJcblxyXG5leHBvcnQgY2xhc3MgU3RyaW5nVXRpbCBleHRlbmRzIFNpbmdsZXRvbiB7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTaW5nbGV0b24gfSBmcm9tICcuLi8uLi9iYXNlL1NpbmdsZXRvbidcclxuXHJcbmV4cG9ydCBjbGFzcyBUaW1lVXRpbCBleHRlbmRzIFNpbmdsZXRvbiB7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gIH1cclxuICAvL+WJqeS9meaXtumXtOi9rOaXtuWIhuenku+8iOenku+8iVxyXG4gIHByaXZhdGUgY2hhbmdlVGltZSh0aW1lOiBudW1iZXIpOiB7IGhvdXJzOiBudW1iZXI7IG1pbnV0ZXM6IG51bWJlcjsgc2Vjb25kczogbnVtYmVyIH0ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaG91cnM6IE1hdGguZmxvb3IodGltZSAvIDM2MDApLFxyXG4gICAgICBtaW51dGVzOiBNYXRoLmZsb29yKCh0aW1lICUgMzYwMCkgLyA2MCksXHJcbiAgICAgIHNlY29uZHM6IHRpbWUgJSA2MCxcclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICog5YCS6K6h5pe2XHJcbiAgICogQHBhcmFtIHRpbWUg5pe26Ze05oiz77yIc++8iVxyXG4gICAqIEBwYXJhbSBob3VyIOaXtlxyXG4gICAqIEBwYXJhbSBtaW51dGUg5YiGXHJcbiAgICogQHBhcmFtIHNlY29uZCDnp5JcclxuICAgKi9cclxuICBwdWJsaWMgY291bnREb3duKHRpbWU6IG51bWJlciwgaG91cjogc3RyaW5nID0gJ+aXticsIG1pbnV0ZTogc3RyaW5nID0gJ+WIhicsIHNlY29uZDogc3RyaW5nID0gJ+enkicpOiBzdHJpbmcge1xyXG4gICAgbGV0IHRlbXAgPSB0aGlzLmNoYW5nZVRpbWUodGltZSlcclxuICAgIHJldHVybiBgJHt0ZW1wLmhvdXJzfSR7aG91cn0ke3RlbXAubWludXRlc30ke21pbnV0ZX0ke3RlbXAuc2Vjb25kc30ke3NlY29uZH1gXHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIOagvOW8j+WMluaXtumXtFxyXG4gICAqIEBwYXJhbSBkYXRlIERhdGVcclxuICAgKiBAcGFyYW0gZm9ybWF0IOagvOW8j1xyXG4gICAqL1xyXG4gIHB1YmxpYyBEYXRlRm9ybWF0KGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nID0gJ3l5eXktTU0tZGQgaGg6bW06c3MnKTogc3RyaW5nIHtcclxuICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXHJcbiAgICBsZXQgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxID4gOSA/IGRhdGUuZ2V0TW9udGgoKSArIDEgOiBgMCR7ZGF0ZS5nZXRNb250aCgpICsgMX1gXHJcbiAgICBsZXQgbW9udGgyID0gZGF0ZS5nZXRNb250aCgpICsgMVxyXG4gICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpID4gOSA/IGRhdGUuZ2V0RGF0ZSgpIDogYDAke2RhdGUuZ2V0RGF0ZSgpfWBcclxuICAgIGxldCBkYXkyID0gZGF0ZS5nZXREYXRlKClcclxuICAgIGxldCBob3VyID0gZGF0ZS5nZXRIb3VycygpID4gOSA/IGRhdGUuZ2V0SG91cnMoKSA6IGAwJHtkYXRlLmdldEhvdXJzKCl9YFxyXG4gICAgbGV0IGhvdXIyID0gZGF0ZS5nZXRIb3VycygpXHJcbiAgICBsZXQgbWludXRlID0gZGF0ZS5nZXRNaW51dGVzKCkgPiA5ID8gZGF0ZS5nZXRNaW51dGVzKCkgOiBgMCR7ZGF0ZS5nZXRNaW51dGVzKCl9YFxyXG4gICAgbGV0IG1pbnV0ZTIgPSBkYXRlLmdldE1pbnV0ZXMoKVxyXG4gICAgbGV0IHNlY29uZCA9IGRhdGUuZ2V0U2Vjb25kcygpID4gOSA/IGRhdGUuZ2V0U2Vjb25kcygpIDogYDAke2RhdGUuZ2V0U2Vjb25kcygpfWBcclxuICAgIGxldCBzZWNvbmQyID0gZGF0ZS5nZXRTZWNvbmRzKClcclxuXHJcbiAgICByZXR1cm4gZm9ybWF0XHJcbiAgICAgIC5yZXBsYWNlKC95eXl5LywgYCR7eWVhcn1gKVxyXG4gICAgICAucmVwbGFjZSgvTU0vLCBgJHttb250aH1gKVxyXG4gICAgICAucmVwbGFjZSgvTS8sIGAke21vbnRoMn1gKVxyXG4gICAgICAucmVwbGFjZSgvZGQvLCBgJHtkYXl9YClcclxuICAgICAgLnJlcGxhY2UoL2QvLCBgJHtkYXkyfWApXHJcbiAgICAgIC5yZXBsYWNlKC9oaC8sIGAke2hvdXJ9YClcclxuICAgICAgLnJlcGxhY2UoL2gvLCBgJHtob3VyMn1gKVxyXG4gICAgICAucmVwbGFjZSgvbW0vLCBgJHttaW51dGV9YClcclxuICAgICAgLnJlcGxhY2UoL20vLCBgJHttaW51dGUyfWApXHJcbiAgICAgIC5yZXBsYWNlKC9zcy8sIGAke3NlY29uZH1gKVxyXG4gICAgICAucmVwbGFjZSgvcy8sIGAke3NlY29uZDJ9YClcclxuICB9XHJcbiAgLyoqXHJcbiAgICog6I635Y+W5b2T5YmNdXRj5aSpMOeCuVxyXG4gICAqL1xyXG4gIHB1YmxpYyBVVENEYXRlKCk6IERhdGUge1xyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKVxyXG4gICAgbm93LnNldFVUQ0hvdXJzKDApXHJcbiAgICBub3cuc2V0VVRDTWludXRlcygwKVxyXG4gICAgbm93LnNldFVUQ1NlY29uZHMoMClcclxuICAgIG5vdy5zZXRVVENNaWxsaXNlY29uZHMoMClcclxuICAgIHJldHVybiBub3dcclxuICB9XHJcbiAgLyoqXHJcbiAgICog6I635Y+W5b2T5YmN5pe26Ze05Yiw5YiwMTk3MC0xLTHnmoTlpKnmlbDvvIh1dGPvvIlcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0VVRDRGF0ZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvICgyNCAqIDYwICogNjAgKiAxMDAwKSlcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IG1vZHVsZSBtdmMge1xuICBjbGFzcyBDb250cm9sbGVyTWFuYWdlciB7XG4gICAgcHJpdmF0ZSBjb250cm9sbGVycyA9IG5ldyBNYXAoKVxuXG4gICAgcHVibGljIHJlZ2lzdGVyKHZpZXcsIENvbnRyb2xsZXIsIE1vZGVsKSB7XG4gICAgICBjb25zdCBrZXkgPSB2aWV3LmNvbnN0cnVjdG9yLnZpZXdLZXlcbiAgICAgIGlmICh0aGlzLmlzRXhpc3RzKGtleSkpIHJldHVyblxuICAgICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKClcbiAgICAgIGNvbnRyb2xsZXIuc2V0Vmlldyh2aWV3KVxuICAgICAgaWYgKE1vZGVsKSB7XG4gICAgICAgIGNvbnRyb2xsZXIuc2V0TW9kZWwobmV3IE1vZGVsKCkpXG4gICAgICB9XG4gICAgICB0aGlzLmNvbnRyb2xsZXJzLnNldChrZXksIGNvbnRyb2xsZXIpXG4gICAgICByZXR1cm4gY29udHJvbGxlclxuICAgIH1cbiAgICBwdWJsaWMgdW5yZWdpc3Rlcihjb250cm9sbGVyS2V5KSB7XG4gICAgICBpZiAoIXRoaXMuaXNFeGlzdHMoY29udHJvbGxlcktleSkpIHJldHVyblxuICAgICAgdGhpcy5jb250cm9sbGVycy5kZWxldGUoY29udHJvbGxlcktleSlcbiAgICB9XG4gICAgaXNFeGlzdHMoY29udHJvbGxlcktleSkge1xuICAgICAgcmV0dXJuIHRoaXMuY29udHJvbGxlcnMuaGFzKGNvbnRyb2xsZXJLZXkpXG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPluaMh+WumkNvbnRyb2xsZXLlr7nosaFcbiAgICAgKiBAcGFyYW0gIGNvbnRyb2xsZXJLZXkgQ29udHJvbGxlcuWUr+S4gOagh+ivhlxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgZ2V0Q29udHJvbGxlcihjb250cm9sbGVyS2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250cm9sbGVycy5nZXQoY29udHJvbGxlcktleSlcbiAgICB9XG4gIH1cblxuICBleHBvcnQgY29uc3QgY29udHJvbGxlck1nciA9IG5ldyBDb250cm9sbGVyTWFuYWdlcigpXG59XG4iLCJpbXBvcnQgKiBhcyB2IGZyb20gJy4vVmlld01ncidcclxuaW1wb3J0ICogYXMgYyBmcm9tICcuL0NvbnRyb2xsZXJNYW5hZ2VyJ1xyXG5jb25zdCBNVkMgPSBbXVxyXG5sZXQgVUkgPSBMYXlhLnN0YWdlXHJcbmNvbnN0IFJlZ2lzdGVyTVZDID0gKExheWVyLCBDb250cm9sbGVyID0gbnVsbCwgTW9kZWwgPSBudWxsKSA9PiB7XHJcbiAgcmV0dXJuIFZpZXcgPT4ge1xyXG4gICAgbGV0IGxheWVyID0gTVZDLmZpbmQobGF5ZXIgPT4gbGF5ZXIuTGF5ZXIgPT09IExheWVyKVxyXG4gICAgaWYgKCFsYXllcikge1xyXG4gICAgICBsYXllciA9IHtcclxuICAgICAgICBMYXllcixcclxuICAgICAgICB2aWV3czogW10sXHJcbiAgICAgIH1cclxuICAgICAgTVZDLnB1c2gobGF5ZXIpXHJcbiAgICB9XHJcbiAgICBjb25zdCB2aWV3ID0gbGF5ZXIudmlld3MuZmluZCh2aWV3ID0+IHZpZXcuVmlldyA9PT0gVmlldyB8fCB2aWV3LlZpZXcudmlld0tleSA9PT0gVmlldy52aWV3S2V5KVxyXG4gICAgaWYgKHZpZXcpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBWaWV3ICR7dmlldy5WaWV3fSDlt7LlrZjlnKggfHwgdmlld0tleSAke1ZpZXcudmlld0tleX0g6YeN5aSNYClcclxuICAgIH1cclxuICAgIGxheWVyLnZpZXdzLnB1c2goeyBsYXllciwgVmlldywgTW9kZWwsIENvbnRyb2xsZXIgfSlcclxuICB9XHJcbn1cclxuY29uc3Qgc2V0VUlSb290ID0gcm9vdCA9PiB7XHJcbiAgVUkgPSByb290XHJcbn1cclxuY29uc3QgY29udHJvbGxlck1nciA9IGMubXZjLmNvbnRyb2xsZXJNZ3JcclxuY29uc3Qgdmlld01nciA9IHYubXZjLnZpZXdNZ3JcclxuY29uc3Qgb3BlblZpZXcgPSB2Lm12Yy5vcGVuVmlld1xyXG5jb25zdCBjbG9zZVZpZXcgPSB2Lm12Yy5jbG9zZVZpZXdcclxuZXhwb3J0IHsgdmlld01nciwgY29udHJvbGxlck1nciwgb3BlblZpZXcsIGNsb3NlVmlldywgUmVnaXN0ZXJNVkMsIHNldFVJUm9vdCwgTVZDLCBVSSB9XHJcbiIsImltcG9ydCB7IElWaWV3IH0gZnJvbSAnLi4vZ2FtZS9zY2VuZXMvaW50ZXJmYWNlL0lWaWV3J1xuXG5pbXBvcnQgeyBJTGF5ZXIgfSBmcm9tICcuLi9nYW1lL3NjZW5lcy9pbnRlcmZhY2UvSUxheWVyJ1xuXG5pbXBvcnQgeyBNVkMsIFVJLCBjb250cm9sbGVyTWdyIH0gZnJvbSAnLi9NdmNNZ3InXG5cbmV4cG9ydCBtb2R1bGUgbXZjIHtcbiAgY2xhc3MgVmlld01nciB7XG4gICAgcHJpdmF0ZSB2aWV3czogTWFwPHN0cmluZywgSVZpZXc+ID0gbmV3IE1hcDxzdHJpbmcsIElWaWV3PigpXG4gICAgcHJpdmF0ZSBsYXllcnM6IE1hcDxzdHJpbmcsIElMYXllcj4gPSBuZXcgTWFwPHN0cmluZywgSUxheWVyPigpXG4gICAgcHJpdmF0ZSBvcGVuVmlld3M6IE1hcDxzdHJpbmcsIElWaWV3PiA9IG5ldyBNYXA8c3RyaW5nLCBJVmlldz4oKVxuXG4gICAgcHVibGljIGdldFZpZXcoa2V5KTogSVZpZXcge1xuICAgICAgcmV0dXJuIHRoaXMudmlld3MuZ2V0KGtleSlcbiAgICB9XG4gICAgcHVibGljIHNldFZpZXcoa2V5LCB2aWV3OiBJVmlldyk6IHZvaWQge1xuICAgICAgdGhpcy52aWV3cy5zZXQoa2V5LCB2aWV3KVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0TGF5ZXIoa2V5KTogSUxheWVyIHtcbiAgICAgIHJldHVybiB0aGlzLmxheWVycy5nZXQoa2V5KVxuICAgIH1cbiAgICBwdWJsaWMgc2V0TGF5ZXIoa2V5LCBsYXllcjogSUxheWVyKTogdm9pZCB7XG4gICAgICB0aGlzLmxheWVycy5zZXQoa2V5LCBsYXllcilcbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlblZpZXcoVmlldywgLi4uYXJncyk6IHZvaWQge1xuICAgICAgbGV0IF92aWV3ID0gdGhpcy5vcGVuVmlld3MuZ2V0KFZpZXcudmlld0tleSlcbiAgICAgIGlmIChfdmlldykge1xuICAgICAgICBfdmlldy5vcGVuLmFwcGx5KF92aWV3LCBhcmdzKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIF92aWV3ID0gdGhpcy5nZXRWaWV3KFZpZXcudmlld0tleSlcbiAgICAgIGlmIChfdmlldykge1xuICAgICAgICBfdmlldy5sYXllci5vcGVuVmlldyhfdmlldywgLi4uYXJncylcbiAgICAgICAgdGhpcy5vcGVuVmlld3Muc2V0KFZpZXcudmlld0tleSwgX3ZpZXcpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgX3ZpZXcgPSB0aGlzLmNyZWF0ZVZpZXcoVmlldylcbiAgICAgIF92aWV3LmxheWVyLm9wZW5WaWV3KF92aWV3LCAuLi5hcmdzKVxuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZVZpZXcoVmlldykge1xuICAgICAgY29uc3QgbGF5ZXIgPSBNVkMuZmluZChsYXllciA9PiBsYXllci52aWV3cy5maW5kKHZpZXcgPT4gdmlldy5WaWV3LnZpZXdLZXkgPT09IFZpZXcudmlld0tleSkpXG4gICAgICBpZiAoIWxheWVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbGF5ZXIg5LiN5a2Y5ZyoJylcbiAgICAgIH1cbiAgICAgIGxldCBfbGF5ZXIgPSB0aGlzLmdldExheWVyKGxheWVyLkxheWVyLmxheWVyS2V5KVxuICAgICAgaWYgKCFfbGF5ZXIpIHtcbiAgICAgICAgX2xheWVyID0gbmV3IGxheWVyLkxheWVyKFVJKVxuICAgICAgICBfbGF5ZXIuek9yZGVyID0gbGF5ZXIuTGF5ZXIubGF5ZXJLZXlcbiAgICAgICAgVUkuYWRkQ2hpbGQoX2xheWVyKVxuICAgICAgICB0aGlzLnNldExheWVyKGxheWVyLkxheWVyLmxheWVyS2V5LCBfbGF5ZXIpXG4gICAgICB9XG4gICAgICBjb25zdCB2aWV3ID0gbGF5ZXIudmlld3MuZmluZCh2aWV3ID0+IHZpZXcuVmlldy52aWV3S2V5ID09PSBWaWV3LnZpZXdLZXkpXG4gICAgICBsZXQgX3ZpZXcgPSBuZXcgdmlldy5WaWV3KClcbiAgICAgIF92aWV3LmxheWVyID0gX2xheWVyXG4gICAgICBpZiAodmlldy5Db250cm9sbGVyKSB7XG4gICAgICAgIGNvbnN0IF9jb250cm9sbGVyOiBhbnkgPSBjb250cm9sbGVyTWdyLnJlZ2lzdGVyKF92aWV3LCB2aWV3LkNvbnRyb2xsZXIsIHZpZXcuTW9kZWwpXG4gICAgICAgIF92aWV3LnNldENvbnRyb2xsZXIoX2NvbnRyb2xsZXIpXG4gICAgICB9XG4gICAgICB0aGlzLnNldFZpZXcodmlldy5WaWV3LnZpZXdLZXksIF92aWV3KVxuICAgICAgaWYgKF92aWV3LmluaXQpIF92aWV3LmluaXQoKVxuICAgICAgcmV0dXJuIF92aWV3XG4gICAgfVxuICAgIHB1YmxpYyBjbG9zZVZpZXcoVmlld09yS2V5T3JJbnM6IGFueSwgLi4uYXJncyk6IHZvaWQge1xuICAgICAgbGV0IF92aWV3XG4gICAgICBpZiAoVmlld09yS2V5T3JJbnMudmlld0tleSkge1xuICAgICAgICBfdmlldyA9IHRoaXMuZ2V0VmlldyhWaWV3T3JLZXlPcklucy52aWV3S2V5KVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmdldFZpZXcoVmlld09yS2V5T3JJbnMpKSB7XG4gICAgICAgIF92aWV3ID0gdGhpcy5nZXRWaWV3KFZpZXdPcktleU9ySW5zKVxuICAgICAgfSBlbHNlIGlmIChWaWV3T3JLZXlPcklucy5jb25zdHJ1Y3Rvci52aWV3S2V5KSB7XG4gICAgICAgIF92aWV3ID0gdGhpcy5nZXRWaWV3KFZpZXdPcktleU9ySW5zLmNvbnN0cnVjdG9yLnZpZXdLZXkpXG4gICAgICB9XG4gICAgICBpZiAoX3ZpZXcpIHtcbiAgICAgICAgX3ZpZXcubGF5ZXIuY2xvc2VWaWV3KF92aWV3LCAuLi5hcmdzKVxuICAgICAgICB0aGlzLm9wZW5WaWV3cy5kZWxldGUoX3ZpZXcuY29uc3RydWN0b3Iudmlld0tleSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBpc09wZW4oVmlld09yS2V5T3JJbnMpOiBib29sZWFuIHtcbiAgICAgIGxldCBfdmlld1xuICAgICAgaWYgKFZpZXdPcktleU9ySW5zLnZpZXdLZXkpIHtcbiAgICAgICAgX3ZpZXcgPSB0aGlzLm9wZW5WaWV3cy5nZXQoVmlld09yS2V5T3JJbnMudmlld0tleSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcGVuVmlld3MuZ2V0KFZpZXdPcktleU9ySW5zKSkge1xuICAgICAgICBfdmlldyA9IHRoaXMub3BlblZpZXdzLmdldChWaWV3T3JLZXlPcklucylcbiAgICAgIH0gZWxzZSBpZiAoVmlld09yS2V5T3JJbnMuY29uc3RydWN0b3Iudmlld0tleSkge1xuICAgICAgICBfdmlldyA9IHRoaXMub3BlblZpZXdzLmdldChWaWV3T3JLZXlPcklucy5jb25zdHJ1Y3Rvci52aWV3S2V5KVxuICAgICAgfVxuICAgICAgcmV0dXJuICEhX3ZpZXdcbiAgICB9XG4gIH1cbiAgZXhwb3J0IGNvbnN0IHZpZXdNZ3IgPSBuZXcgVmlld01ncigpXG4gIGV4cG9ydCBjb25zdCBvcGVuVmlldyA9IChWaWV3LCAuLi5hcmdzKSA9PiB7XG4gICAgdmlld01nci5vcGVuVmlldyhWaWV3LCAuLi5hcmdzKVxuICB9XG5cbiAgZXhwb3J0IGNvbnN0IGNsb3NlVmlldyA9IChWaWV3T3JLZXlPcklucywgLi4uYXJncykgPT4ge1xuICAgIHZpZXdNZ3IuY2xvc2VWaWV3KFZpZXdPcktleU9ySW5zLCAuLi5hcmdzKVxuICB9XG59XG4iLCJpbXBvcnQgQmFzZU1vZGVsIGZyb20gJy4uL21vZGVsL0Jhc2VNb2RlbCdcbmltcG9ydCAqIGFzIHYgZnJvbSBcIi4uL3ZpZXcvQmFzZVZpZXdcIjtcbmltcG9ydCBCYXNlVmlldyA9di5LVUkuQmFzZVZpZXdcbmltcG9ydCBHYW1lQXBwIGZyb20gJy4uLy4uL2dhbWUvR2FtZUFwcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VDb250cm9sbGVyIHtcbiAgcHJpdmF0ZSBtb2RlbDogQmFzZU1vZGVsXG4gIHByaXZhdGUgdmlldzogQmFzZVZpZXdcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tb2RlbCA9IG51bGxcbiAgICB0aGlzLnZpZXcgPSBudWxsXG4gICAgdGhpcy5pbml0KClcbiAgfVxuICBwdWJsaWMgaW5pdCgpXG4gIHtcbiAgICBcbiAgfVxuICBwdWJsaWMgc2V0TW9kZWwobW9kZWwpIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWxcbiAgfVxuICBwdWJsaWMgZ2V0TW9kZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWxcbiAgfVxuICBwdWJsaWMgc2V0Vmlldyh2aWV3KSB7XG4gICAgdGhpcy52aWV3ID0gdmlld1xuICB9XG4gIHB1YmxpYyBnZXRWaWV3KCkge1xuICAgIHJldHVybiB0aGlzLnZpZXdcbiAgfVxuXG4gIC8v55uR5ZCs5LqL5Lu2XG4gIHB1YmxpYyBhZGRMaXN0ZW5lcihrZXksIGNhbGxiYWNrLCBjYWxsZXIpIHtcbiAgICBHYW1lQXBwLmRpc3BhdGNoZXIuT2JzZXJ2ZShrZXksY2FsbGVyLGNhbGxiYWNrKVxuICB9XG4gIC8v56e76Zmk55uR5ZCs55qE5LqL5Lu2XG4gIHB1YmxpYyByZW1vdmVMaXN0ZW5lcihrZXkpIHtcbiAgICBHYW1lQXBwLmRpc3BhdGNoZXIuUmVtb3ZlKGtleSlcbiAgfVxuICAvL+inpuWPkeS6i+S7tlxuICBwdWJsaWMgZGlzcGF0Y2goa2V5LCAuLi5hcmdzKSB7XG4gICAgR2FtZUFwcC5kaXNwYXRjaGVyLlNlbmRNc2coa2V5LGFyZ3MpXG4gIH1cbiAgLyoqXG4gICAqIOazqOWGjOS7juacjeWKoeWZqOi/lOWbnua2iOaBr+eahOebkeWQrFxuICAgKiBAcGFyYW0gIGNtZCDmtojmga/moIfor4ZcbiAgICogQHBhcmFtIGNhbGxiYWNrIOWkhOeQhuWHveaVsFxuICAgKiBAcGFyYW0gIHRoaXNPYmog5aSE55CG5Ye95pWw5omA5bGe5a+56LGhXG4gICAqL1xuICBvYnNlcnZlclNvY2tldE1zZyhjbWQsIGNhbGxiYWNrLCB0aGlzT2JqKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gY21kIOa2iOaBr+agh+ivhlxuICAgKiBAcGFyYW0gbXNnIOaVsOaNrlxuICAgKiBAcGFyYW0gY2FsbGJhY2sg5aSE55CG5Ye95pWwXG4gICAqIEBwYXJhbSB0aGlzT2JqIOWkhOeQhuWHveaVsOaJgOWxnuWvueixoVxuICAgKi9cbiAgc2VuZFNvY2tldE1zZyhjbWQsIG1zZywgY2FsbGJhY2ssIHRoaXNPYmopIHt9XG5cbiAgLyoqXG4gICAqIOWPkemAgea2iOaBr+WIsEh0dHDmnI3liqHnq69cbiAgICogQHBhcmFtICBjbWQg5raI5oGv5qCH6K+GIOS+i+WmgjogVXNlci5sb2dpblxuICAgKiBAcGFyYW0gIG1zZyDmtojmga/lj4LmlbAg5L6L5aaCOiBsZXQgbXNnOmFueSA9IHtcInVOYW1lXCI6dU5hbWUsIFwidVBhc3NcIjp1UGFzc307XG4gICAqL1xuICBzZW5kSHR0cE1zZyhjbWQsIG1zZykge31cbiAgLy/lkJHlhbbku5bmqKHlnZfpgJrorq9cbiAgcHVibGljIHNlbmRNZXNzYWdlKCkge31cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VNb2RlbHtcbiAgICBcbn0iLCJpbXBvcnQgQmFzZUNvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlci9CYXNlQ29udHJvbGxlcidcblxuZXhwb3J0IG5hbWVzcGFjZSBLVUkge1xuICBleHBvcnQgY2xhc3MgQmFzZVZpZXcgZXh0ZW5kcyBMYXlhLlZpZXcge1xuICAgIHB1YmxpYyBjb250cm9sbGVyOiBCYXNlQ29udHJvbGxlclxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKVxuICAgIH1cbiAgICBwdWJsaWMgc2V0Q29udHJvbGxlcihjdHJsKSB7XG4gICAgICB0aGlzLmNvbnRyb2xsZXIgPSBjdHJsXG4gICAgfVxuICAgIHB1YmxpYyBpbml0KCkge1xuICAgICAgdGhpcy5pbml0RGF0YSgpXG4gICAgICB0aGlzLmluaXRSZXMoKVxuICAgICAgdGhpcy5pbml0VmlldygpXG4gICAgfVxuICAgIHB1YmxpYyBpbml0RGF0YSgpIHt9XG4gICAgcHVibGljIGluaXRSZXMoKSB7fVxuICAgIHB1YmxpYyBpbml0VmlldygpIHt9XG4gIH1cbn1cbiIsImltcG9ydCB7IERpc3BhdGNoZXIgfSBmcm9tICcuL2Rpc3BhdGNoZXIvRGlzcGF0Y2hlcidcclxuXHJcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlIHtcclxuICBwdWJsaWMgc3RhdGljIEluaXQoKTogdm9pZCB7fVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBkaXNwYXRjaGVyKCk6IERpc3BhdGNoZXIge1xyXG4gICAgcmV0dXJuIERpc3BhdGNoZXIuQ3JlYXRlT3JHZXQoKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBPYnNlcnZlciB9IGZyb20gJy4vT2JzZXJ2ZXInXG5pbXBvcnQgeyBTaW5nbGV0b24gfSBmcm9tICcuLi8uLi9iYXNlL1NpbmdsZXRvbidcbmV4cG9ydCBjbGFzcyBEaXNwYXRjaGVyIGV4dGVuZHMgU2luZ2xldG9uIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLl9vYnNlcnZlcnMgPSB7fVxuICB9XG5cbiAgLyoqXG4gICAqIOa2iOaBr+WIl+ihqFxuICAgKi9cbiAgcHJpdmF0ZSBfb2JzZXJ2ZXJzOiBhbnlcblxuICBwdWJsaWMgT2JzZXJ2ZSh0b3BpY186IGFueSwgb2JzZXJ2ZXJfOiBhbnksIGhhbmRsZXJfOiBGdW5jdGlvbik6IE9ic2VydmVyIHtcbiAgICBpZiAoIXRoaXMuX29ic2VydmVyc1t0b3BpY19dKSB0aGlzLl9vYnNlcnZlcnNbdG9waWNfXSA9IFtdXG4gICAgbGV0IG9ic2VydmVyOiBPYnNlcnZlciA9IG5ldyBPYnNlcnZlcih0b3BpY18sIG9ic2VydmVyXywgaGFuZGxlcl8pXG4gICAgdGhpcy5fb2JzZXJ2ZXJzW3RvcGljX10ucHVzaChvYnNlcnZlcilcbiAgICByZXR1cm4gb2JzZXJ2ZXIuUmV1c2UodG9waWNfLCBvYnNlcnZlcl8sIGhhbmRsZXJfKVxuICB9XG5cbiAgcHVibGljIE9ic2VydmVMaXN0KG9ic2VydmVyXzogYW55LCB0b3BpY3NfOiBhbnlbXSwgaGFuZGxlcnNfOiBhbnlbXSk6IE9ic2VydmVyW10ge1xuICAgIGxldCBsaXN0OiBPYnNlcnZlcltdID0gW11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvcGljc18ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpc3QucHVzaCh0aGlzLk9ic2VydmUodG9waWNzX1tpXSwgb2JzZXJ2ZXJfLCBoYW5kbGVyc19baV0pKVxuICAgIH1cbiAgICByZXR1cm4gbGlzdFxuICB9XG5cbiAgcHVibGljIFJlbW92ZUxpc3Qob2JzOiBPYnNlcnZlcltdKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuUmVtb3ZlKG9ic1tpXSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgU2VuZE1zZyh0b3BpY186IGFueSwgLi4uYXJnczogYW55W10pOiBhbnlbXSB7XG4gICAgaWYgKCF0aGlzLl9vYnNlcnZlcnNbdG9waWNfXSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBsZXQgcmV0OiBhbnlbXSA9IFtdXG4gICAgdGhpcy5fb2JzZXJ2ZXJzW3RvcGljX10uZm9yRWFjaChcbiAgICAgIChlbGVtZW50KTogdm9pZCA9PiB7XG4gICAgICAgIHJldC5wdXNoKGVsZW1lbnQuUmVjdk1zZyguLi5hcmdzKSlcbiAgICAgIH0sXG4gICAgKVxuICAgIHJldHVybiByZXRcbiAgfVxuXG4gIHB1YmxpYyBSZW1vdmUob2JzOiBPYnNlcnZlcik6IE9ic2VydmVyIHtcbiAgICBpZiAob2JzID09IG51bGwpIHJldHVyblxuICAgIGxldCBhcnI6IGFueVtdID0gdGhpcy5fb2JzZXJ2ZXJzW29icy50b3BpY11cblxuICAgIGlmICghYXJyKSByZXR1cm4gbnVsbFxuXG4gICAgbGV0IGluZDogbnVtYmVyID0gYXJyLmluZGV4T2Yob2JzKVxuICAgIGlmIChpbmQgPCAwKSByZXR1cm4gbnVsbFxuXG4gICAgYXJyLnNwbGljZShpbmQsIDEpXG4gICAgcmV0dXJuIG9ic1xuICB9XG5cbiAgcHVibGljIFJlbW92ZUFsbCh0b3BpYzogYW55KTogdm9pZCB7XG4gICAgbGV0IGFycjogYW55W10gPSB0aGlzLl9vYnNlcnZlcnNbdG9waWNdXG4gICAgaWYgKCFhcnIpIHJldHVyblxuICAgIGFyci5zcGxpY2UoMCwgYXJyLmxlbmd0aClcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIE9ic2VydmVyIHtcbiAgcHVibGljIHRvcGljOiBhbnlcbiAgcHVibGljIG9ic2VydmVyOiBhbnlcbiAgcHVibGljIGhhbmRsZXI6IEZ1bmN0aW9uXG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRvcGljXzogYW55LCBvYnNlcnZlcl86IGFueSwgaGFuZGxlcl86IEZ1bmN0aW9uKSB7XG4gICAgdGhpcy5SZXVzZSh0b3BpY18sIG9ic2VydmVyXywgaGFuZGxlcl8pXG4gIH1cblxuICBwdWJsaWMgUmV1c2UodG9waWNfOiBhbnksIG9ic2VydmVyXzogYW55LCBoYW5kbGVyXzogRnVuY3Rpb24pOiBPYnNlcnZlciB7XG4gICAgdGhpcy50b3BpYyA9IHRvcGljX1xuICAgIHRoaXMub2JzZXJ2ZXIgPSBvYnNlcnZlcl9cbiAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyX1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBwdWJsaWMgUmVjdk1zZyguLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xuICAgIGxldCByZXQ6IGFueVxuICAgIGlmICghdGhpcy5vYnNlcnZlcikge1xuICAgICAgcmV0ID0gdGhpcy5oYW5kbGVyKC4uLmFyZ3MpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldCA9IHRoaXMuaGFuZGxlci5hcHBseSh0aGlzLm9ic2VydmVyLCBhcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmV0XG4gIH1cbn1cbiIsImltcG9ydCB7IHVpIH0gZnJvbSAnLi4vLi4vLi4vLi4vdWkvbGF5YU1heFVJJ1xuaW1wb3J0IEJQYWdlIGZyb20gJy4uL0JQYWdlL0JQYWdlJ1xuaW1wb3J0IHsgVmlld0NvbnN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9jb25zdC9WaWV3Q29uc3QnXG5pbXBvcnQgeyBCYXNlTGF5ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2dhbWUvc2NlbmVzL0Jhc2VMYXllcidcbmltcG9ydCB7IFJlZ2lzdGVyTVZDLCBvcGVuVmlldyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvbXZjL012Y01ncidcbmltcG9ydCBBUGFnZUNvbnRyb2xsZXIgZnJvbSAnLi9BUGFnZUNvbnRyb2xsZXInXG5pbXBvcnQgQVBhZ2VNb2RlbCBmcm9tICcuL0FwYWdlTW9kZWwnXG5pbXBvcnQgQmFzZVRlc3QgZnJvbSAnLi4vQmFzZVRlc3QnXG5AUmVnaXN0ZXJNVkMoQmFzZUxheWVyLCBBUGFnZUNvbnRyb2xsZXIsIEFQYWdlTW9kZWwpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBUGFnZSBleHRlbmRzIHVpLnZpZXcuQVBhZ2VVSSB7XG4gIHN0YXRpYyB2aWV3S2V5ID0gVmlld0NvbnN0LkFQYWdlXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmJ0bi5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKSA9PiB7XG4gICAgICBvcGVuVmlldyhCUGFnZSlcbiAgICB9KVxuICAgIHRoaXMuYmFzZUJ0bi5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKSA9PiB7XG4gICAgICBvcGVuVmlldyhCYXNlVGVzdClcbiAgICB9KVxuICB9XG4gIHB1YmxpYyBpbml0KCkge1xuICAgIHRoaXMuY29udHJvbGxlci5hZGRMaXN0ZW5lcihcbiAgICAgICdjaGFuZ2UnLFxuICAgICAgYXJncyA9PiB7XG4gICAgICAgIHRoaXMuY29udGVudHMudGV4dCA9IGFyZ3NbMF1cbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcylcbiAgICAgIH0sXG4gICAgICB0aGlzLFxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IEJhc2VDb250cm9sbGVyIGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvbXZjL2NvbnRyb2xsZXIvQmFzZUNvbnRyb2xsZXInXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBUGFnZUNvbnRyb2xsZXIgZXh0ZW5kcyBCYXNlQ29udHJvbGxlciB7XG4gIC8qKlxuICAgKlxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICB9XG4gIHB1YmxpYyBpbml0KCkge1xuICAgIHN1cGVyLmluaXQoKVxuICB9XG5cbn1cbiIsImltcG9ydCBCYXNlTW9kZWwgZnJvbSBcIi4uLy4uLy4uLy4uL2NvcmUvbXZjL21vZGVsL0Jhc2VNb2RlbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBUGFnZU1vZGVsIGV4dGVuZHMgQmFzZU1vZGVse1xuICAgIFxufSIsImltcG9ydCB7IHVpIH0gZnJvbSAnLi4vLi4vLi4vLi4vdWkvbGF5YU1heFVJJ1xuaW1wb3J0IHsgVmlld0NvbnN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9jb25zdC9WaWV3Q29uc3QnXG5pbXBvcnQgeyBEaWFsb2dMYXllciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZ2FtZS9zY2VuZXMvRGlhbG9nTGF5ZXInXG5pbXBvcnQgQlBhZ2VDb250cm9sbGVyIGZyb20gJy4vQlBhZ2VDb250cm9sbGVyJ1xuaW1wb3J0IEJQYWdlTW9kZWwgZnJvbSAnLi9CUGFnZU1vZGVsJ1xuaW1wb3J0IHsgUmVnaXN0ZXJNVkMsIGNsb3NlVmlldyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvbXZjL012Y01ncidcbkBSZWdpc3Rlck1WQyhEaWFsb2dMYXllciwgQlBhZ2VDb250cm9sbGVyLCBCUGFnZU1vZGVsKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQlBhZ2UgZXh0ZW5kcyB1aS52aWV3LkJQYWdlVUkge1xuICBzdGF0aWMgdmlld0tleSA9IFZpZXdDb25zdC5CUGFnZVxuIFxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gIH1cbiAgcHVibGljIGluaXQoKSB7XG4gICAgdGhpcy5jbG9zZV9idG4ub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCkgPT4ge1xuICAgICAgY2xvc2VWaWV3KHRoaXMpXG4gICAgfSlcbiAgICB0aGlzLmNoYW5nZS5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKSA9PiB7XG4gICAgICB0aGlzLmNvbnRyb2xsZXIuZGlzcGF0Y2goJ2NoYW5nZScsIFsnI2VlMzMyMSddKVxuICAgIH0pXG4gIH1cbn1cbiIsImltcG9ydCBCYXNlQ29udHJvbGxlciBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL212Yy9jb250cm9sbGVyL0Jhc2VDb250cm9sbGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCUGFnZUNvbnRyb2xsZXIgZXh0ZW5kcyBCYXNlQ29udHJvbGxlciB7XG4gIC8qKlxuICAgKlxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICB9XG4gIHB1YmxpYyBpbml0KCkge1xuICAgIHN1cGVyLmluaXQoKVxuICB9XG59XG4iLCJpbXBvcnQgQmFzZU1vZGVsIGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvbXZjL21vZGVsL0Jhc2VNb2RlbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQlBhZ2VNb2RlbCBleHRlbmRzIEJhc2VNb2RlbCB7XG4gIHB1YmxpYyBjb2xvcjogc3RyaW5nXG59XG4iLCJpbXBvcnQgeyB1aSB9IGZyb20gJy4uLy4uLy4uL3VpL2xheWFNYXhVSSdcbmltcG9ydCB7IElWaWV3IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9nYW1lL3NjZW5lcy9pbnRlcmZhY2UvSVZpZXcnXG5pbXBvcnQgeyBWaWV3Q29uc3QgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2NvbnN0L1ZpZXdDb25zdCdcbmltcG9ydCB7IEJhc2VMYXllciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZ2FtZS9zY2VuZXMvQmFzZUxheWVyJ1xuaW1wb3J0IERpYWxvZ1Rlc3QgZnJvbSAnLi9EaWFsb2dUZXN0J1xuaW1wb3J0IFZpZXdUZXN0IGZyb20gJy4vVmlld1Rlc3QnXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuL0xvYWRpbmcnXG5pbXBvcnQgeyBSZWdpc3Rlck1WQywgb3BlblZpZXcsIGNsb3NlVmlldyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvbXZjL012Y01ncidcbkBSZWdpc3Rlck1WQyhCYXNlTGF5ZXIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlVGVzdCBleHRlbmRzIHVpLnZpZXcuQmFzZVRlc3RVSSBpbXBsZW1lbnRzIElWaWV3IHtcbiAgc3RhdGljIHZpZXdLZXkgPSBWaWV3Q29uc3QuQmFzZVRlc3RcbiAgcHVibGljIG1vdmVZID0gZmFsc2VcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMudGltZXJMb29wKDUwMCwgdGhpcywgKCkgPT4ge1xuICAgICAgdGhpcy50YW5rLmluZGV4ID0gdGhpcy50YW5rLmluZGV4ID09PSA3ID8gNCA6IHRoaXMudGFuay5pbmRleCArIDFcbiAgICB9KVxuICAgIHRoaXMudGltZXJMb29wKDI1MCwgdGhpcywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMubW92ZVkpIHtcbiAgICAgICAgdGhpcy50YW5rLmNlbnRlclkgKz0gMVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50YW5rLmNlbnRlclkgLT0gMVxuICAgICAgfVxuICAgICAgdGhpcy5tb3ZlWSA9ICF0aGlzLm1vdmVZXG4gICAgfSlcblxuICAgIHRoaXMuZGlhbG9nQnRuLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcbiAgICAgIG9wZW5WaWV3KERpYWxvZ1Rlc3QsIDEsIDIsIDMsIDQsIDUpXG4gICAgfSlcbiAgICB0aGlzLnZpZXdCdG4ub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCkgPT4ge1xuICAgICAgb3BlblZpZXcoVmlld1Rlc3QsIDEsIDIsIDMsIDQsIDUpXG4gICAgfSlcbiAgICB0aGlzLmxvYWRpbmdCdG4ub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCkgPT4ge1xuICAgICAgb3BlblZpZXcoTG9hZGluZywgMSwgMiwgMywgNCwgNSlcbiAgICB9KVxuICAgIHRoaXMuY2xvc2VCdG4ub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCkgPT4ge1xuICAgICAgY2xvc2VWaWV3KHRoaXMpXG4gICAgfSlcbiAgfVxuICBwdWJsaWMgb3BlbkNiKCkge1xuICAgIGNvbnNvbGUubG9nKCdCYXNlVGVzdCBvcGVuJylcbiAgfVxufVxuIiwiaW1wb3J0IHsgdWkgfSBmcm9tICcuLi8uLi8uLi91aS9sYXlhTWF4VUknXG5pbXBvcnQgeyBJVmlldyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZ2FtZS9zY2VuZXMvaW50ZXJmYWNlL0lWaWV3J1xuaW1wb3J0IHsgVmlld0NvbnN0IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9jb25zdC9WaWV3Q29uc3QnXG5pbXBvcnQgeyBEaWFsb2dMYXllciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZ2FtZS9zY2VuZXMvRGlhbG9nTGF5ZXInXG5pbXBvcnQgeyBSZWdpc3Rlck1WQywgY2xvc2VWaWV3IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvTXZjTWdyJ1xuQFJlZ2lzdGVyTVZDKERpYWxvZ0xheWVyKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlhbG9nVGVzdCBleHRlbmRzIHVpLnZpZXcuRGlhbG9nVGVzdFVJIGltcGxlbWVudHMgSVZpZXcge1xuICBzdGF0aWMgdmlld0tleSA9IFZpZXdDb25zdC5EaWFsb2dUZXN0XG4gIHB1YmxpYyBtb3ZlWSA9IGZhbHNlXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmFjdGl2ZVxuICAgIHRoaXMudGltZXJMb29wKDUwMCwgdGhpcywgKCkgPT4ge1xuICAgICAgdGhpcy50YW5rLmluZGV4ID0gdGhpcy50YW5rLmluZGV4ID09PSA3ID8gNCA6IHRoaXMudGFuay5pbmRleCArIDFcbiAgICB9KVxuICAgIHRoaXMudGltZXJMb29wKDI1MCwgdGhpcywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMubW92ZVkpIHtcbiAgICAgICAgdGhpcy50YW5rLmNlbnRlclkgKz0gMVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50YW5rLmNlbnRlclkgLT0gMVxuICAgICAgfVxuICAgICAgdGhpcy5tb3ZlWSA9ICF0aGlzLm1vdmVZXG4gICAgfSlcbiAgICB0aGlzLmNsb3NlQnRuLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcbiAgICAgIGNsb3NlVmlldyhWaWV3Q29uc3QuRGlhbG9nVGVzdClcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpXG4gICAgICAvLyBMYXlhLlNjZW5lLmNsb3NlKCd2aWV3L0RpYWxvZ1Rlc3Quc2NlbmUnKVxuICAgIH0pXG4gIH1cbiAgcHVibGljIG9wZW5DYiguLi5hcmdzKSB7XG4gICAgY29uc29sZS5sb2coJ0RpYWxvZ1Rlc3Qgb3BlbicsIGFyZ3MpXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5pbWdbJ29uQ29tcFJlc2l6ZSddKCkpXG4gIH1cbn1cbiIsImltcG9ydCB7IHVpIH0gZnJvbSAnLi4vLi4vLi4vdWkvbGF5YU1heFVJJ1xyXG5pbXBvcnQgeyBJVmlldyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZ2FtZS9zY2VuZXMvaW50ZXJmYWNlL0lWaWV3J1xyXG5pbXBvcnQgeyBWaWV3Q29uc3QgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2NvbnN0L1ZpZXdDb25zdCdcclxuaW1wb3J0IHsgQmFzZUxheWVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9nYW1lL3NjZW5lcy9CYXNlTGF5ZXInXHJcbmltcG9ydCB7IFJlZ2lzdGVyTVZDLCBjbG9zZVZpZXcgfSBmcm9tICcuLi8uLi8uLi9jb3JlL212Yy9NdmNNZ3InXHJcbkBSZWdpc3Rlck1WQyhCYXNlTGF5ZXIpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmcgZXh0ZW5kcyB1aS52aWV3LkxvYWRpbmdVSSBpbXBsZW1lbnRzIElWaWV3IHtcclxuICBzdGF0aWMgdmlld0tleSA9IFZpZXdDb25zdC5Mb2FkaW5nXHJcbiAgcHVibGljIG1vdmVZID0gZmFsc2VcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMudGltZXJMb29wKDUwMCwgdGhpcywgKCkgPT4ge1xyXG4gICAgICB0aGlzLnRhbmsuaW5kZXggPSB0aGlzLnRhbmsuaW5kZXggPT09IDcgPyA0IDogdGhpcy50YW5rLmluZGV4ICsgMVxyXG4gICAgfSlcclxuICAgIHRoaXMudGltZXJMb29wKDI1MCwgdGhpcywgKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5tb3ZlWSkge1xyXG4gICAgICAgIHRoaXMudGFuay5jZW50ZXJZICs9IDFcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnRhbmsuY2VudGVyWSAtPSAxXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5tb3ZlWSA9ICF0aGlzLm1vdmVZXHJcbiAgICB9KVxyXG4gICAgdGhpcy5idG5fY2xvc2Uub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCkgPT4ge1xyXG4gICAgICBjbG9zZVZpZXcodGhpcylcclxuICAgIH0pXHJcbiAgfVxyXG4gIHB1YmxpYyBvcGVuQ2IoLi4uYXJncykge1xyXG4gICAgY29uc29sZS5sb2coJ0xvYWRpbmcgb3BlbicsIGFyZ3MpXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHVpIH0gZnJvbSAnLi4vLi4vLi4vdWkvbGF5YU1heFVJJ1xuaW1wb3J0IHsgSVZpZXcgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2dhbWUvc2NlbmVzL2ludGVyZmFjZS9JVmlldydcbmltcG9ydCB7IFZpZXdDb25zdCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvY29uc3QvVmlld0NvbnN0J1xuaW1wb3J0IHsgVmlld0xheWVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9nYW1lL3NjZW5lcy9WaWV3TGF5ZXInXG5pbXBvcnQgVmlld1Rlc3QxIGZyb20gJy4vVmlld1Rlc3QxJ1xuaW1wb3J0IHsgUmVnaXN0ZXJNVkMsIGNsb3NlVmlldywgb3BlblZpZXcgfSBmcm9tICcuLi8uLi8uLi9jb3JlL212Yy9NdmNNZ3InXG5AUmVnaXN0ZXJNVkMoVmlld0xheWVyKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld1Rlc3QgZXh0ZW5kcyB1aS52aWV3LlZpZXdUZXN0VUkgaW1wbGVtZW50cyBJVmlldyB7XG4gIHN0YXRpYyB2aWV3S2V5ID0gVmlld0NvbnN0LlZpZXdUZXN0XG4gIHB1YmxpYyBtb3ZlWSA9IGZhbHNlXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcblxuICAgIHRoaXMudGltZXJMb29wKDUwMCwgdGhpcywgKCkgPT4ge1xuICAgICAgdGhpcy50YW5rLmluZGV4ID0gdGhpcy50YW5rLmluZGV4ID09PSA3ID8gNCA6IHRoaXMudGFuay5pbmRleCArIDFcbiAgICB9KVxuICAgIHRoaXMudGltZXJMb29wKDI1MCwgdGhpcywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMubW92ZVkpIHtcbiAgICAgICAgdGhpcy50YW5rLmNlbnRlclkgKz0gMVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50YW5rLmNlbnRlclkgLT0gMVxuICAgICAgfVxuICAgICAgdGhpcy5tb3ZlWSA9ICF0aGlzLm1vdmVZXG4gICAgfSlcbiAgICB0aGlzLmNsb3NlQnRuLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcbiAgICAgIGNsb3NlVmlldyh0aGlzKVxuICAgIH0pXG4gICAgdGhpcy52aWV3QnRuLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcbiAgICAgIG9wZW5WaWV3KFZpZXdUZXN0MSlcbiAgICB9KVxuICB9XG4gIHB1YmxpYyBvcGVuQ2IoKSB7XG4gICAgY29uc29sZS5sb2coJ1ZpZXdUZXN0IG9wZW4nKVxuICB9XG59XG4iLCJpbXBvcnQgeyB1aSB9IGZyb20gJy4uLy4uLy4uL3VpL2xheWFNYXhVSSdcbmltcG9ydCB7IElWaWV3IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9nYW1lL3NjZW5lcy9pbnRlcmZhY2UvSVZpZXcnXG5pbXBvcnQgeyBWaWV3Q29uc3QgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2NvbnN0L1ZpZXdDb25zdCdcbmltcG9ydCB7IFZpZXdMYXllciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZ2FtZS9zY2VuZXMvVmlld0xheWVyJ1xuaW1wb3J0IHsgUmVnaXN0ZXJNVkMsIGNsb3NlVmlldyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvbXZjL012Y01ncidcbkBSZWdpc3Rlck1WQyhWaWV3TGF5ZXIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3VGVzdDEgZXh0ZW5kcyB1aS52aWV3LlZpZXdUZXN0MVVJIGltcGxlbWVudHMgSVZpZXcge1xuICBzdGF0aWMgdmlld0tleSA9IFZpZXdDb25zdC5WaWV3VGVzdDFcbiAgcHVibGljIG1vdmVZID0gZmFsc2VcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgdGhpcy50aW1lckxvb3AoNTAwLCB0aGlzLCAoKSA9PiB7XG4gICAgICB0aGlzLnRhbmsuaW5kZXggPSB0aGlzLnRhbmsuaW5kZXggPT09IDcgPyA0IDogdGhpcy50YW5rLmluZGV4ICsgMVxuICAgIH0pXG4gICAgdGhpcy50aW1lckxvb3AoMjUwLCB0aGlzLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5tb3ZlWSkge1xuICAgICAgICB0aGlzLnRhbmsuY2VudGVyWSArPSAxXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRhbmsuY2VudGVyWSAtPSAxXG4gICAgICB9XG4gICAgICB0aGlzLm1vdmVZID0gIXRoaXMubW92ZVlcbiAgICB9KVxuICAgIHRoaXMuY2xvc2VCdG4ub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCkgPT4ge1xuICAgICAgY2xvc2VWaWV3KHRoaXMpXG4gICAgfSlcbiAgfVxuICBwdWJsaWMgb3BlbkNiKCkge1xuICAgIGNvbnNvbGUubG9nKCdWaWV3VGVzdCBvcGVuJylcbiAgfVxufVxuIiwiaW1wb3J0IHsgU2luZ2xldG9uIH0gZnJvbSAnLi4vLi4vY29yZS9iYXNlL1NpbmdsZXRvbidcbmltcG9ydCBOZXRSZXF1ZXN0IGZyb20gJy4vTmV0UmVxdWVzdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU5ldCBleHRlbmRzIFNpbmdsZXRvbiB7XG4gIHByaXZhdGUgc2VydmVyVXJsOiBzdHJpbmdcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICB9XG4gIHB1YmxpYyBpbml0U2VydmVyKHVybDogc3RyaW5nKSB7XG4gICAgdGhpcy5zZXJ2ZXJVcmwgPSB1cmxcbiAgfVxuICBwdWJsaWMgc2VuZChhcGk6IHN0cmluZywgYm9keVZhcmlhYmxlczogYW55ID0gbnVsbCwgdXJsVmFyaWFibGVzOiBhbnkgPSAnJywgbWV0aG9kOiBzdHJpbmcgPSAncG9zdCcsIHJlc3BvbnNlVHlwZTogc3RyaW5nID0gJ2pzb24nLCBoZWFkZXI/OiBhbnlbXSkge1xuICAgIHRoaXMuc2VuZEJ5VXJsKHRoaXMuc2VydmVyVXJsLCBhcGksIGJvZHlWYXJpYWJsZXMsIHVybFZhcmlhYmxlcywgbWV0aG9kLCByZXNwb25zZVR5cGUsIGhlYWRlcilcbiAgfVxuICBwdWJsaWMgc2VuZFByb21pc2UoYXBpOiBzdHJpbmcsIGJvZHlWYXJpYWJsZXM6IGFueSA9IG51bGwsIHVybFZhcmlhYmxlczogYW55ID0gJycsIG1ldGhvZDogc3RyaW5nID0gJ3Bvc3QnLCByZXNwb25zZVR5cGU6IHN0cmluZyA9ICdqc29uJywgaGVhZGVyPzogYW55W10pIHtcbiAgICB0aGlzLnNlbmRQcm9taXNlQnlVcmwodGhpcy5zZXJ2ZXJVcmwsIGFwaSwgYm9keVZhcmlhYmxlcywgdXJsVmFyaWFibGVzLCBtZXRob2QsIHJlc3BvbnNlVHlwZSwgaGVhZGVyKVxuICB9XG4gIHB1YmxpYyBzZW5kQnlVcmwodXJsOiBzdHJpbmcsIGFwaTogc3RyaW5nLCBib2R5VmFyaWFibGVzOiBhbnkgPSBudWxsLCB1cmxWYXJpYWJsZXM6IGFueSA9ICcnLCBtZXRob2Q6IHN0cmluZyA9ICdwb3N0JywgcmVzcG9uc2VUeXBlOiBzdHJpbmcgPSAnanNvbicsIGhlYWRlcj86IGFueVtdKSB7XG4gICAgbGV0IHJlcSA9IE5ldFJlcXVlc3QuQ3JlYXRlKGFwaSwgdXJsICsgYXBpICsgdXJsVmFyaWFibGVzLCBib2R5VmFyaWFibGVzLCBtZXRob2QsIHJlc3BvbnNlVHlwZSwgaGVhZGVyKVxuICAgIHJlcS5TZW5kKClcbiAgfVxuICBwdWJsaWMgYXN5bmMgc2VuZFByb21pc2VCeVVybCh1cmw6IHN0cmluZywgYXBpOiBzdHJpbmcsIGJvZHlWYXJpYWJsZXM6IGFueSA9IG51bGwsIHVybFZhcmlhYmxlczogYW55ID0gJycsIG1ldGhvZDogc3RyaW5nID0gJ3Bvc3QnLCByZXNwb25zZVR5cGU6IHN0cmluZyA9ICdqc29uJywgaGVhZGVyPzogYW55W10pIHtcbiAgICBsZXQgcmVxID0gTmV0UmVxdWVzdC5DcmVhdGUoYXBpLCB1cmwgKyBhcGkgKyB1cmxWYXJpYWJsZXMsIGJvZHlWYXJpYWJsZXMsIG1ldGhvZCwgcmVzcG9uc2VUeXBlLCBoZWFkZXIpXG4gICAgY29uc3QgZ2V0ID0gYXdhaXQgcmVxLlNlbmRQcm9taXNlKClcbiAgICByZXR1cm4gZ2V0XG4gIH1cbn1cbiIsImltcG9ydCBHYW1lQXBwIGZyb20gJy4uLy4uL2NvcmUvZ2FtZS9HYW1lQXBwJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXRSZXF1ZXN0IHtcbiAgcHJpdmF0ZSByZXE6IGxheWEubmV0Lkh0dHBSZXF1ZXN0XG4gIHByaXZhdGUgdXJsOiBzdHJpbmdcbiAgcHJpdmF0ZSBkYXRhOiBhbnlcbiAgcHJpdmF0ZSBtZXRob2Q6IHN0cmluZ1xuICBwcml2YXRlIHJlc3BvbnNlVHlwZTogc3RyaW5nXG4gIHByaXZhdGUgaGVhZGVyczogYW55W11cbiAgcHJpdmF0ZSBhcGlQYXRoOiBzdHJpbmdcbiAgcHJpdmF0ZSBtZXNzYWdlS2V5OiBhbnlcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgcmVxID0gbmV3IGxheWEubmV0Lkh0dHBSZXF1ZXN0KClcbiAgICB0aGlzLnJlcSA9IHJlcVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBDcmVhdGUoYXBpUGF0aDogc3RyaW5nLCB1cmw6IHN0cmluZywgZGF0YT86IGFueSwgbWV0aG9kPzogc3RyaW5nLCByZXNwb25zZVR5cGU/OiBzdHJpbmcsIGhlYWRlcnM/OiBhbnlbXSwgbWVzc2FnZUtleT8pOiBOZXRSZXF1ZXN0IHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBOZXRSZXF1ZXN0KClcbiAgICByZXF1ZXN0LnVybCA9IHVybFxuICAgIHJlcXVlc3QuZGF0YSA9IGRhdGFcbiAgICByZXF1ZXN0Lm1ldGhvZCA9IG1ldGhvZFxuICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gcmVzcG9uc2VUeXBlXG4gICAgcmVxdWVzdC5oZWFkZXJzID0gaGVhZGVyc1xuICAgIHJlcXVlc3QuYXBpUGF0aCA9IGFwaVBhdGhcbiAgICByZXF1ZXN0Lm1lc3NhZ2VLZXkgPSBtZXNzYWdlS2V5XG4gICAgcmV0dXJuIHJlcXVlc3RcbiAgfVxuICBwdWJsaWMgU2VuZCgpIHtcbiAgICBsZXQgcmVxID0gdGhpcy5yZXFcbiAgICBsZXQgdXJsID0gdGhpcy51cmxcbiAgICBsZXQgZGF0YSA9IHRoaXMuZGF0YVxuICAgIGxldCBtZXRob2QgPSB0aGlzLm1ldGhvZFxuICAgIGxldCByZXNwb25zZVR5cGUgPSB0aGlzLnJlc3BvbnNlVHlwZVxuICAgIGxldCBoZWFkZXJzID0gdGhpcy5oZWFkZXJzIHx8IFsnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nXVxuICAgIHJlcS5vbmNlKGxheWEuZXZlbnRzLkV2ZW50LkNPTVBMRVRFLCB0aGlzLCB0aGlzLmNvbXBsZXRlSGFuZGxlcilcbiAgICByZXEub25jZShsYXlhLmV2ZW50cy5FdmVudC5FUlJPUiwgdGhpcywgdGhpcy5lcnJvckhhbmRsZXIpXG4gICAgcmVxLnNlbmQodXJsLCBkYXRhLCBtZXRob2QsIHJlc3BvbnNlVHlwZSwgaGVhZGVycylcbiAgfVxuICBwdWJsaWMgYXN5bmMgU2VuZFByb21pc2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICBsZXQgcmVxID0gdGhpcy5yZXFcbiAgICBsZXQgdXJsID0gdGhpcy51cmxcbiAgICBsZXQgZGF0YSA9IHRoaXMuZGF0YVxuICAgIGxldCBtZXRob2QgPSB0aGlzLm1ldGhvZFxuICAgIGxldCByZXNwb25zZVR5cGUgPSB0aGlzLnJlc3BvbnNlVHlwZVxuICAgIGxldCBoZWFkZXJzID0gdGhpcy5oZWFkZXJzIHx8IFsnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nXVxuICAgIGxldCBfcG9zdCA9IGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgbGV0IF9yZXNvbHZlID0gZnVuY3Rpb24ob2JqOiBhbnkpIHtcbiAgICAgICAgcmVzb2x2ZShvYmopXG4gICAgICB9XG4gICAgICByZXEub25jZShsYXlhLmV2ZW50cy5FdmVudC5DT01QTEVURSwgdGhpcywgX3Jlc29sdmUpXG4gICAgICByZXEub25jZShsYXlhLmV2ZW50cy5FdmVudC5FUlJPUiwgdGhpcywgX3Jlc29sdmUpXG4gICAgICByZXEuc2VuZCh1cmwsIGRhdGEsIG1ldGhvZCwgcmVzcG9uc2VUeXBlLCBoZWFkZXJzKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PihfcG9zdClcbiAgfVxuICBwcml2YXRlIGNvbXBsZXRlSGFuZGxlcihkYXRhOiBhbnkpIHtcbiAgICBpZiAodGhpcy5tZXNzYWdlS2V5KSB7XG4gICAgICBHYW1lQXBwLmRpc3BhdGNoZXIuU2VuZE1zZyh0aGlzLm1lc3NhZ2VLZXksIGRhdGEpXG4gICAgfVxuICB9XG4gIHByaXZhdGUgZXJyb3JIYW5kbGVyKGU6IGFueSkge1xuICAgIGNvbnNvbGUuZXJyb3IodGhpcy5tZXNzYWdlS2V5LCBlKVxuICB9XG4gIHByaXZhdGUgcHJvY2Vzc0hhbmRsZXIoZGF0YTogYW55KSB7fVxufVxuIiwiaW1wb3J0IHsgU2luZ2xldG9uIH0gZnJvbSAnLi4vY29yZS9iYXNlL1NpbmdsZXRvbidcbmltcG9ydCB7IE9ic2VydmVyIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlL2Rpc3BhdGNoZXIvT2JzZXJ2ZXInXG5pbXBvcnQgKiBhcyBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xuLypcbiAgIHNvY2tldC5pbml0KC4uLilcbiAgIHNvY2tldC5jb25uZWN0KClcbiovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb2NrZXQgZXh0ZW5kcyBTaW5nbGV0b24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5vYnNlcnZlcnMgPSB7fVxuICB9XG4gIHByaXZhdGUgbm9uY2U9MVxuICBwcml2YXRlIGlwQWRkcmVzc1xuICBwcml2YXRlIHNvY2tldDogYW55XG4gIHByaXZhdGUgb2JzZXJ2ZXJzOiBhbnlcbiAgcHJpdmF0ZSB0aW1lU3RhbXBcbiAgLy9oYW5kbGVyLS0tLVxuICBwcml2YXRlIGNvbm5lY3RTdWNjZXNzQ2FsbGJhY2tcbiAgcHJpdmF0ZSBjb25uZWN0RmFpbGVkQ2FsbGJhY2tcbiAgcHJpdmF0ZSBoZWFydGJlYXRGYWlsZWRDYWxsYmFja1xuICBwcml2YXRlIGV2ZW50ID0gJ21lc3NhZ2UnXG4gIHB1YmxpYyBpbml0KGlwLCBzdWNjZXNzQ2FsbGJhY2ssIGZhaWxlZENhbGxiYWNrLCBoZWFydGJlYXRGYWlsZWRDYWxsYmFjaykge1xuICAgIHRoaXMuaXBBZGRyZXNzID0gaXBcbiAgICB0aGlzLmNvbm5lY3RTdWNjZXNzQ2FsbGJhY2sgPSBzdWNjZXNzQ2FsbGJhY2tcbiAgICB0aGlzLmNvbm5lY3RGYWlsZWRDYWxsYmFjayA9IGZhaWxlZENhbGxiYWNrXG4gICAgdGhpcy5oZWFydGJlYXRGYWlsZWRDYWxsYmFjayA9IGhlYXJ0YmVhdEZhaWxlZENhbGxiYWNrXG4gIH1cbiAgcHVibGljIGNvbm5lY3QoKSB7XG4gICAgdGhpcy5zb2NrZXQgPSBpbyh0aGlzLmlwQWRkcmVzcylcbiAgICB0aGlzLnNvY2tldC5vbignY29ubmVjdCcsICgpID0+IHtcbiAgICAgIHRoaXMudGltZVN0YW1wID0gRGF0ZS5ub3coKVxuICAgICAgY29uc29sZS5sb2coJ3dlYnNvY2tldCBjb25uZWN0Li4uJylcbiAgICAgIHRoaXMuY29ubmVjdFN1Y2Nlc3MoKVxuICAgIH0pXG4gICAgdGhpcy5zb2NrZXQub24odGhpcy5ldmVudCwgZGF0YSA9PiB7XG4gICAgICB0aGlzLnRpbWVTdGFtcCA9IERhdGUubm93KClcbiAgICAgIGRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgICAgdGhpcy5yZWNlaXZlTWVzc2FnZShKU09OLnBhcnNlKGRhdGEpKVxuICAgIH0pXG4gICAgdGhpcy5zb2NrZXQub24oJ2Rpc2Nvbm5lY3QnLCB0aGlzLm9uRGlzY29ubmVjdClcbiAgfVxuICBwdWJsaWMgZGlzY29ubmVjdCgpIHtcbiAgICB0aGlzLnNvY2tldC5kaXNjb25uZWN0KClcbiAgfVxuICBwcml2YXRlIG9uRGlzY29ubmVjdCgpIHtcbiAgICBpZiAodGhpcy5jb25uZWN0RmFpbGVkQ2FsbGJhY2spIHRoaXMuY29ubmVjdEZhaWxlZENhbGxiYWNrKClcbiAgfVxuICBwcml2YXRlIGNvbm5lY3RTdWNjZXNzKCkge1xuICAgIGlmICh0aGlzLmNvbm5lY3RTdWNjZXNzQ2FsbGJhY2spIHRoaXMuY29ubmVjdFN1Y2Nlc3NDYWxsYmFjaygpXG4gICAgdGhpcy5zZW5kKCdsb2dpbicsIHt9LCAnQzJTX2xvZ2luJylcbiAgICB0aGlzLnN0YXJ0SGVhcnRCZWF0KClcbiAgfVxuICBwcml2YXRlIHN0YXJ0SGVhcnRCZWF0KCkge1xuICAgIExheWEudGltZXIubG9vcCg1MDAwLCB0aGlzLCAoKSA9PiB7XG4gICAgICB0aGlzLnNlbmRIZWFydEJlYXQoKVxuICAgIH0pXG4gIH1cbiAgcHJpdmF0ZSBzZW5kSGVhcnRCZWF0KCkge1xuICAgIHZhciB2ID0gRGF0ZS5ub3coKSAtIHRoaXMudGltZVN0YW1wXG5cbiAgICBpZiAodiA+PSAzMDAwMCkge1xuICAgICAgaWYgKHRoaXMuaGVhcnRiZWF0RmFpbGVkQ2FsbGJhY2spIHRoaXMuaGVhcnRiZWF0RmFpbGVkQ2FsbGJhY2soKVxuICAgIH1cbiAgICB0aGlzLnNlbmQoJ2hlYXJ0YmVhdCcsIHt9LCAnQzJTX2hlYXJ0YmVhdCcpXG4gIH1cbiAgcHJpdmF0ZSByZWNlaXZlTWVzc2FnZShkYXRhKSB7XG4gICAgY29uc29sZS5sb2coZGF0YS5oZWFkZXJzLm5vbmNlKVxuICAgIGlmIChkYXRhLmhlYWRlcnMubm9uY2UgJiYgZGF0YS5oZWFkZXJzLm5vbmNlLnN0YXJ0c1dpdGgoJ1MyQ18nKSkge1xuICAgICAgZm9yIChsZXQgayBpbiB0aGlzLm9ic2VydmVycykge1xuICAgICAgICBpZiAoZGF0YS5oZWFkZXJzLmZ1bmNfbmFtZSA9PSBrKSB7XG4gICAgICAgICAgdGhpcy5vYnNlcnZlcnNba10uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuUmVjdk1zZyhkYXRhKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgayBpbiB0aGlzLm9ic2VydmVycykge1xuICAgICAgICBpZiAoZGF0YS5oZWFkZXJzLm5vbmNlID09IGspIHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVyc1trXS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5SZWN2TXNnKGRhdGEpXG4gICAgICAgICAgfSlcbiAgICAgICAgICBkZWxldGUgdGhpcy5vYnNlcnZlcnNba11cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBwdWJsaWMgc2VuZE1lc3NhZ2UoZnVuY05hbWUsIG9ic2VydmVyLCBkYXRhLCBjYWxsYmFjayA9IG51bGwpIHtcbiAgICB2YXIgbm9uY2UgPSAnQzJTXycgKyBmdW5jTmFtZSArIHRoaXMubm9uY2UrK1xuICAgIGlmICghdGhpcy5vYnNlcnZlcnNbbm9uY2VdKSB0aGlzLm9ic2VydmVyc1tub25jZV0gPSBbXVxuICAgIHRoaXMub2JzZXJ2ZXJzW25vbmNlXS5wdXNoKG5ldyBPYnNlcnZlcihub25jZSwgb2JzZXJ2ZXIsIGNhbGxiYWNrKSlcbiAgICB0aGlzLnNlbmQoZnVuY05hbWUsIGRhdGEsIG5vbmNlKVxuICB9XG4gIHB1YmxpYyBvYnNlcnZlck1lc3NhZ2UoZnVuY05hbWUsIG9ic2VydmVyLCBjYWxsYmFjayA9IG51bGwpIHtcbiAgICB2YXIga2V5ID0gZnVuY05hbWVcbiAgICBpZiAoIXRoaXMub2JzZXJ2ZXJzW2tleV0pIHRoaXMub2JzZXJ2ZXJzW2tleV0gPSBbXVxuICAgIHZhciBvYnMgPSBuZXcgT2JzZXJ2ZXIoa2V5LCBvYnNlcnZlciwgY2FsbGJhY2spXG4gICAgdGhpcy5vYnNlcnZlcnNba2V5XS5wdXNoKG9icylcbiAgICByZXR1cm4gb2JzXG4gIH1cbiAgcHVibGljIHJlbW92ZShvYnM6IE9ic2VydmVyKSB7XG4gICAgaWYgKG9icyA9PSBudWxsKSByZXR1cm5cbiAgICBsZXQgYXJyID0gdGhpcy5vYnNlcnZlcnNbb2JzLnRvcGljXVxuICAgIGlmICghYXJyKSByZXR1cm4gbnVsbFxuICAgIGxldCBpbmQ6IG51bWJlciA9IGFyci5pbmRleE9mKG9icylcbiAgICBpZiAoaW5kIDwgMCkgcmV0dXJuIG51bGxcbiAgICBhcnIuc3BsaWNlKGluZCwgMSlcbiAgICBpZiAoYXJyLmxlbmd0aCA9PSAwKSBkZWxldGUgdGhpcy5vYnNlcnZlcnNbb2JzLnRvcGljXVxuICAgIHJldHVybiBvYnNcbiAgfVxuICBwcml2YXRlIHNlbmQoZnVuY05hbWUsIGRhdGEsIG5vbmNlKSB7XG4gICAgdmFyIHBhcmFtID0ge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICB1aWQ6ICdoZWp1bmppZScsXG4gICAgICAgIGZ1bmNfbmFtZTogZnVuY05hbWUsXG4gICAgICAgIG5vbmNlOiBub25jZSxcbiAgICAgIH0sXG4gICAgICBwYXJhbXM6IGRhdGEsXG4gICAgfVxuICAgIHRoaXMudGltZVN0YW1wID0gRGF0ZS5ub3coKVxuICAgIHRoaXMuc29ja2V0LmVtaXQodGhpcy5ldmVudCwgSlNPTi5zdHJpbmdpZnkocGFyYW0pKVxuICB9XG59XG4iLCJpbXBvcnQgeyB1aSB9IGZyb20gJy4uL3VpL2xheWFNYXhVSSdcclxuaW1wb3J0IEFQYWdlIGZyb20gJy4uL2dhbWUvdWkvdmlldy9BUGFnZS9BUGFnZSdcclxuaW1wb3J0IHsgc2V0VUlSb290LCBvcGVuVmlldyB9IGZyb20gJy4uL2NvcmUvbXZjL012Y01ncidcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblNjZW5lIGV4dGVuZHMgdWkuc2NlbmUuTWFpblNjZW5lVUkge1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuICAgIC8vIEdhbWVBcHAuaW5pdCh0aGlzKVxyXG4gICAgY29uc3QgVUkgPSBuZXcgTGF5YS5TcHJpdGUoKVxyXG4gICAgVUkubmFtZSA9ICdVSSdcclxuICAgIFVJLndpZHRoID0gTGF5YS5zdGFnZS53aWR0aFxyXG4gICAgVUkuaGVpZ2h0ID0gTGF5YS5zdGFnZS5oZWlnaHRcclxuICAgIExheWEuc3RhZ2UuYWRkQ2hpbGQoVUkpXHJcbiAgICBzZXRVSVJvb3QoVUkpXHJcblxyXG4gICAgb3BlblZpZXcoQVBhZ2UpXHJcbiAgfVxyXG4gIG9uT3BlbmVkKCkge31cclxufVxyXG4iLCIvKipUaGlzIGNsYXNzIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IExheWFBaXJJREUsIHBsZWFzZSBkbyBub3QgbWFrZSBhbnkgbW9kaWZpY2F0aW9ucy4gKi9cbmltcG9ydCBWaWV3PUxheWEuVmlldztcbmltcG9ydCBEaWFsb2c9TGF5YS5EaWFsb2c7XG5pbXBvcnQgU2NlbmU9TGF5YS5TY2VuZTtcbmltcG9ydCAqIGFzIHYgZnJvbSBcIi4uL2NvcmUvbXZjL3ZpZXcvQmFzZVZpZXdcIjtcbmltcG9ydCBCYXNlVmlldyA9di5LVUkuQmFzZVZpZXdcbnZhciBSRUc6IEZ1bmN0aW9uID0gTGF5YS5DbGFzc1V0aWxzLnJlZ0NsYXNzO1xuZXhwb3J0IG1vZHVsZSB1aS5zY2VuZSB7XHJcbiAgICBleHBvcnQgY2xhc3MgTWFpblNjZW5lVUkgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRTY2VuZShcInNjZW5lL01haW5TY2VuZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSRUcoXCJ1aS5zY2VuZS5NYWluU2NlbmVVSVwiLE1haW5TY2VuZVVJKTtcclxufVxyXG5leHBvcnQgbW9kdWxlIHVpLnZpZXcge1xyXG4gICAgZXhwb3J0IGNsYXNzIEFQYWdlVUkgZXh0ZW5kcyBCYXNlVmlldyB7XHJcblx0XHRwdWJsaWMgYnRuOkxheWEuQnV0dG9uO1xuXHRcdHB1YmxpYyBjb250ZW50czpMYXlhLkxhYmVsO1xuXHRcdHB1YmxpYyBiYXNlQnRuOkxheWEuQnV0dG9uO1xuICAgICAgICBwdWJsaWMgc3RhdGljICB1aVZpZXc6YW55ID17XCJ0eXBlXCI6XCJCYXNlVmlld1wiLFwicHJvcHNcIjp7XCJ3aWR0aFwiOjY0MCxcImhlaWdodFwiOjExMzZ9LFwiY29tcElkXCI6MixcImNoaWxkXCI6W3tcInR5cGVcIjpcIlJlY3RcIixcInByb3BzXCI6e1wid2lkdGhcIjo2NDAsXCJuYW1lXCI6XCJyXCIsXCJsaW5lV2lkdGhcIjoxLFwiaGVpZ2h0XCI6MTEzNixcImZpbGxDb2xvclwiOlwiI2ZiYmJiYlwifSxcImNvbXBJZFwiOjd9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6NTU1LFwieFwiOjIwOCxcIndpZHRoXCI6MjAwLFwidmFyXCI6XCJidG5cIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcIkdvVG8gQlBhZ2VcIixcImhlaWdodFwiOjUwfSxcImNvbXBJZFwiOjh9LHtcInR5cGVcIjpcIkxhYmVsXCIsXCJwcm9wc1wiOntcInlcIjo0MSxcInhcIjozOTgsXCJ3aWR0aFwiOjIwMSxcInZhclwiOlwiY29udGVudHNcIixcInZhbGlnblwiOlwibWlkZGxlXCIsXCJ0ZXh0XCI6XCJzc3NzXCIsXCJoZWlnaHRcIjo1MDAsXCJmb250U2l6ZVwiOjQwLFwiYWxpZ25cIjpcImNlbnRlclwifSxcImNvbXBJZFwiOjE0fSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjY3MCxcInhcIjoyMDgsXCJ3aWR0aFwiOjIwMCxcInZhclwiOlwiYmFzZUJ0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiR29UbyBCYXNlXCIsXCJoZWlnaHRcIjo1MH0sXCJjb21wSWRcIjoxNX1dLFwibG9hZExpc3RcIjpbXCJjb21wL2J1dHRvbi5wbmdcIl0sXCJsb2FkTGlzdDNEXCI6W119O1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVWaWV3KEFQYWdlVUkudWlWaWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSRUcoXCJ1aS52aWV3LkFQYWdlVUlcIixBUGFnZVVJKTtcclxuICAgIGV4cG9ydCBjbGFzcyBCYXNlVGVzdFVJIGV4dGVuZHMgVmlldyB7XHJcblx0XHRwdWJsaWMgdGFuazpMYXlhLkNsaXA7XG5cdFx0cHVibGljIGNsb3NlQnRuOkxheWEuQnV0dG9uO1xuXHRcdHB1YmxpYyBkaWFsb2dCdG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIGxvYWRpbmdCdG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIHZpZXdCdG46TGF5YS5CdXR0b247XG4gICAgICAgIHB1YmxpYyBzdGF0aWMgIHVpVmlldzphbnkgPXtcInR5cGVcIjpcIlZpZXdcIixcInByb3BzXCI6e1wid2lkdGhcIjo2NDAsXCJoZWlnaHRcIjoxMTM2fSxcImNvbXBJZFwiOjIsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJJbWFnZVwiLFwicHJvcHNcIjp7XCJ5XCI6MCxcInhcIjowLFwidG9wXCI6MCxcInNraW5cIjpcImNvbXAvaW1hZ2UucG5nXCIsXCJyaWdodFwiOjAsXCJsZWZ0XCI6MCxcImJvdHRvbVwiOjB9LFwiY29tcElkXCI6OH0se1widHlwZVwiOlwiQ2xpcFwiLFwicHJvcHNcIjp7XCJ5XCI6MCxcInhcIjowLFwidmFyXCI6XCJ0YW5rXCIsXCJza2luXCI6XCJDaGFyYWN0ZXJzL1RhbmtfOC5wbmdcIixcImluZGV4XCI6NCxcImNsaXBZXCI6NCxcImNsaXBYXCI6NCxcImNlbnRlcllcIjotMSxcImNlbnRlclhcIjowfSxcImNvbXBJZFwiOjN9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6MzI3LFwieFwiOjI4MixcInZhclwiOlwiY2xvc2VCdG5cIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcImNsb3NlXCJ9LFwiY29tcElkXCI6NH0se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjoyNTIsXCJ4XCI6NDcyLFwidmFyXCI6XCJkaWFsb2dCdG5cIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcImRpYWxvZ1wifSxcImNvbXBJZFwiOjV9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6MzA0LFwieFwiOjQ3MixcInZhclwiOlwibG9hZGluZ0J0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiYmFzZVwifSxcImNvbXBJZFwiOjZ9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6MzYyLFwieFwiOjQ3MixcInZhclwiOlwidmlld0J0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwidmlld1wifSxcImNvbXBJZFwiOjd9XSxcImxvYWRMaXN0XCI6W1wiY29tcC9pbWFnZS5wbmdcIixcIkNoYXJhY3RlcnMvVGFua184LnBuZ1wiLFwiY29tcC9idXR0b24ucG5nXCJdLFwibG9hZExpc3QzRFwiOltdfTtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVmlldyhCYXNlVGVzdFVJLnVpVmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUkVHKFwidWkudmlldy5CYXNlVGVzdFVJXCIsQmFzZVRlc3RVSSk7XHJcbiAgICBleHBvcnQgY2xhc3MgQlBhZ2VVSSBleHRlbmRzIEJhc2VWaWV3IHtcclxuXHRcdHB1YmxpYyBjaGFuZ2U6TGF5YS5CdXR0b247XG5cdFx0cHVibGljIGNsb3NlX2J0bjpMYXlhLkJ1dHRvbjtcbiAgICAgICAgcHVibGljIHN0YXRpYyAgdWlWaWV3OmFueSA9e1widHlwZVwiOlwiQmFzZVZpZXdcIixcInByb3BzXCI6e1wid2lkdGhcIjozMDAsXCJoZWlnaHRcIjoxMTM2fSxcImNvbXBJZFwiOjIsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJSZWN0XCIsXCJwcm9wc1wiOntcIndpZHRoXCI6MzAwLFwibGluZVdpZHRoXCI6MSxcImhlaWdodFwiOjExMzYsXCJmaWxsQ29sb3JcIjpcIiNjZGY5YTRcIn0sXCJjb21wSWRcIjozfSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjUzNCxcInhcIjo1OSxcIndpZHRoXCI6MjAwLFwidmFyXCI6XCJjaGFuZ2VcIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcIkNoYW5nZUFQYWdlXCIsXCJoZWlnaHRcIjo1MH0sXCJjb21wSWRcIjo0fSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjY0NCxcInhcIjo1OSxcIndpZHRoXCI6MjAwLFwidmFyXCI6XCJjbG9zZV9idG5cIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcIkNsb3NlXCIsXCJoZWlnaHRcIjo1MH0sXCJjb21wSWRcIjo1fV0sXCJsb2FkTGlzdFwiOltcImNvbXAvYnV0dG9uLnBuZ1wiXSxcImxvYWRMaXN0M0RcIjpbXX07XHJcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVZpZXcoQlBhZ2VVSS51aVZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFJFRyhcInVpLnZpZXcuQlBhZ2VVSVwiLEJQYWdlVUkpO1xyXG4gICAgZXhwb3J0IGNsYXNzIERpYWxvZ1Rlc3RVSSBleHRlbmRzIFZpZXcge1xyXG5cdFx0cHVibGljIGJveDpMYXlhLkJveDtcblx0XHRwdWJsaWMgdGFuazpMYXlhLkNsaXA7XG5cdFx0cHVibGljIGNsb3NlQnRuOkxheWEuQnV0dG9uO1xuICAgICAgICBwdWJsaWMgc3RhdGljICB1aVZpZXc6YW55ID17XCJ0eXBlXCI6XCJWaWV3XCIsXCJwcm9wc1wiOntcIndpZHRoXCI6NjQwLFwiaGVpZ2h0XCI6MzAwfSxcImNvbXBJZFwiOjIsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJJbWFnZVwiLFwicHJvcHNcIjp7XCJ0b3BcIjowLFwic2tpblwiOlwiQ2hhcmFjdGVycy9UYW5rXzIucG5nXCIsXCJyaWdodFwiOjAsXCJsZWZ0XCI6MCxcImJvdHRvbVwiOjB9LFwiY29tcElkXCI6OH0se1widHlwZVwiOlwiQm94XCIsXCJwcm9wc1wiOntcIndpZHRoXCI6MjAwLFwidmFyXCI6XCJib3hcIixcImhlaWdodFwiOjIwMCxcImNlbnRlcllcIjowLFwiY2VudGVyWFwiOjB9LFwiY29tcElkXCI6OSxcImNoaWxkXCI6W3tcInR5cGVcIjpcIkltYWdlXCIsXCJwcm9wc1wiOntcInRvcFwiOjAsXCJza2luXCI6XCJjb21wL2ltYWdlLnBuZ1wiLFwic2l6ZUdyaWRcIjpcIjAsMCwwLDBcIixcInJpZ2h0XCI6MCxcImxlZnRcIjowLFwiYm90dG9tXCI6MH0sXCJjb21wSWRcIjoxMH0se1widHlwZVwiOlwiQ2xpcFwiLFwicHJvcHNcIjp7XCJ5XCI6NTUwLFwieFwiOjMwMyxcInZhclwiOlwidGFua1wiLFwic2tpblwiOlwiQ2hhcmFjdGVycy9UYW5rXzcucG5nXCIsXCJpbmRleFwiOjQsXCJjbGlwWVwiOjQsXCJjbGlwWFwiOjQsXCJjZW50ZXJZXCI6LTEsXCJjZW50ZXJYXCI6MH0sXCJjb21wSWRcIjozfSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjM5LFwieFwiOjYyLjUsXCJ2YXJcIjpcImNsb3NlQnRuXCIsXCJza2luXCI6XCJjb21wL2J1dHRvbi5wbmdcIixcImxhYmVsXCI6XCJjbG9zZVwifSxcImNvbXBJZFwiOjR9XX1dLFwibG9hZExpc3RcIjpbXCJDaGFyYWN0ZXJzL1RhbmtfMi5wbmdcIixcImNvbXAvaW1hZ2UucG5nXCIsXCJDaGFyYWN0ZXJzL1RhbmtfNy5wbmdcIixcImNvbXAvYnV0dG9uLnBuZ1wiXSxcImxvYWRMaXN0M0RcIjpbXX07XHJcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVZpZXcoRGlhbG9nVGVzdFVJLnVpVmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUkVHKFwidWkudmlldy5EaWFsb2dUZXN0VUlcIixEaWFsb2dUZXN0VUkpO1xyXG4gICAgZXhwb3J0IGNsYXNzIExvYWRpbmdVSSBleHRlbmRzIFZpZXcge1xyXG5cdFx0cHVibGljIHRhbms6TGF5YS5DbGlwO1xuXHRcdHB1YmxpYyBidG5fY2xvc2U6TGF5YS5CdXR0b247XG5cdFx0cHVibGljIGJ0bl9jb25uZWN0OkxheWEuQnV0dG9uO1xuICAgICAgICBwdWJsaWMgc3RhdGljICB1aVZpZXc6YW55ID17XCJ0eXBlXCI6XCJWaWV3XCIsXCJwcm9wc1wiOntcIndpZHRoXCI6NjQwLFwiaGVpZ2h0XCI6MTEzNn0sXCJjb21wSWRcIjoyLFwiY2hpbGRcIjpbe1widHlwZVwiOlwiSW1hZ2VcIixcInByb3BzXCI6e1widG9wXCI6MCxcInNraW5cIjpcIkNoYXJhY3RlcnMvVGFua183LnBuZ1wiLFwicmlnaHRcIjowLFwibGVmdFwiOjAsXCJib3R0b21cIjowfSxcImNvbXBJZFwiOjE3fSx7XCJ0eXBlXCI6XCJDbGlwXCIsXCJwcm9wc1wiOntcInZhclwiOlwidGFua1wiLFwic2tpblwiOlwiQ2hhcmFjdGVycy9UYW5rXzQucG5nXCIsXCJpbmRleFwiOjQsXCJjbGlwWVwiOjQsXCJjbGlwWFwiOjQsXCJjZW50ZXJZXCI6LTEsXCJjZW50ZXJYXCI6MH0sXCJjb21wSWRcIjozfSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjMyNyxcInhcIjoyODIuNSxcInZhclwiOlwiYnRuX2Nsb3NlXCIsXCJza2luXCI6XCJjb21wL2J1dHRvbi5wbmdcIixcImxhYmVsXCI6XCJjbG9zZVwifSxcImNvbXBJZFwiOjR9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6MjIyLFwieFwiOjI4Mi41LFwidmFyXCI6XCJidG5fY29ubmVjdFwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiY29ubmVjdFwifSxcImNvbXBJZFwiOjV9XSxcImxvYWRMaXN0XCI6W1wiQ2hhcmFjdGVycy9UYW5rXzcucG5nXCIsXCJDaGFyYWN0ZXJzL1RhbmtfNC5wbmdcIixcImNvbXAvYnV0dG9uLnBuZ1wiXSxcImxvYWRMaXN0M0RcIjpbXX07XHJcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVZpZXcoTG9hZGluZ1VJLnVpVmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUkVHKFwidWkudmlldy5Mb2FkaW5nVUlcIixMb2FkaW5nVUkpO1xyXG4gICAgZXhwb3J0IGNsYXNzIFZpZXdUZXN0VUkgZXh0ZW5kcyBWaWV3IHtcclxuXHRcdHB1YmxpYyB0YW5rOkxheWEuQ2xpcDtcblx0XHRwdWJsaWMgY2xvc2VCdG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIHZpZXdCdG46TGF5YS5CdXR0b247XG4gICAgICAgIHB1YmxpYyBzdGF0aWMgIHVpVmlldzphbnkgPXtcInR5cGVcIjpcIlZpZXdcIixcInByb3BzXCI6e1wid2lkdGhcIjo2NDAsXCJoZWlnaHRcIjoxMTM2fSxcImNvbXBJZFwiOjIsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJJbWFnZVwiLFwicHJvcHNcIjp7XCJ5XCI6MCxcInhcIjowLFwidG9wXCI6MCxcInNraW5cIjpcImNvbXAvaW1hZ2UucG5nXCIsXCJyaWdodFwiOjAsXCJsZWZ0XCI6MCxcImJvdHRvbVwiOjB9LFwiY29tcElkXCI6N30se1widHlwZVwiOlwiQ2xpcFwiLFwicHJvcHNcIjp7XCJ5XCI6MCxcInhcIjowLFwidmFyXCI6XCJ0YW5rXCIsXCJza2luXCI6XCJDaGFyYWN0ZXJzLyTni7wucG5nXCIsXCJpbmRleFwiOjQsXCJjbGlwWVwiOjQsXCJjbGlwWFwiOjQsXCJjZW50ZXJZXCI6LTEsXCJjZW50ZXJYXCI6MH0sXCJjb21wSWRcIjozfSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjMyNyxcInhcIjoyODIsXCJ2YXJcIjpcImNsb3NlQnRuXCIsXCJza2luXCI6XCJjb21wL2J1dHRvbi5wbmdcIixcImxhYmVsXCI6XCJjbG9zZVwifSxcImNvbXBJZFwiOjR9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6Mzg1LFwieFwiOjI4Mi41LFwidmFyXCI6XCJ2aWV3QnRuXCIsXCJza2luXCI6XCJjb21wL2J1dHRvbi5wbmdcIixcImxhYmVsXCI6XCJ2aWV3XCJ9LFwiY29tcElkXCI6NX1dLFwibG9hZExpc3RcIjpbXCJjb21wL2ltYWdlLnBuZ1wiLFwiQ2hhcmFjdGVycy8k54u8LnBuZ1wiLFwiY29tcC9idXR0b24ucG5nXCJdLFwibG9hZExpc3QzRFwiOltdfTtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVmlldyhWaWV3VGVzdFVJLnVpVmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUkVHKFwidWkudmlldy5WaWV3VGVzdFVJXCIsVmlld1Rlc3RVSSk7XHJcbiAgICBleHBvcnQgY2xhc3MgVmlld1Rlc3QxVUkgZXh0ZW5kcyBWaWV3IHtcclxuXHRcdHB1YmxpYyB0YW5rOkxheWEuQ2xpcDtcblx0XHRwdWJsaWMgY2xvc2VCdG46TGF5YS5CdXR0b247XG4gICAgICAgIHB1YmxpYyBzdGF0aWMgIHVpVmlldzphbnkgPXtcInR5cGVcIjpcIlZpZXdcIixcInByb3BzXCI6e1wid2lkdGhcIjo2NDAsXCJoZWlnaHRcIjoxMTM2fSxcImNvbXBJZFwiOjIsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJJbWFnZVwiLFwicHJvcHNcIjp7XCJ5XCI6MCxcInhcIjowLFwidG9wXCI6MCxcInNraW5cIjpcImNvbXAvaW1hZ2UucG5nXCIsXCJyaWdodFwiOjAsXCJsZWZ0XCI6MCxcImJvdHRvbVwiOjB9LFwiY29tcElkXCI6Nn0se1widHlwZVwiOlwiQ2xpcFwiLFwicHJvcHNcIjp7XCJ5XCI6MCxcInhcIjowLFwidmFyXCI6XCJ0YW5rXCIsXCJza2luXCI6XCJDaGFyYWN0ZXJzLyTni7wucG5nXCIsXCJpbmRleFwiOjQsXCJjbGlwWVwiOjQsXCJjbGlwWFwiOjQsXCJjZW50ZXJZXCI6LTEsXCJjZW50ZXJYXCI6MH0sXCJjb21wSWRcIjozfSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjMyNyxcInhcIjoyODIsXCJ2YXJcIjpcImNsb3NlQnRuXCIsXCJza2luXCI6XCJjb21wL2J1dHRvbi5wbmdcIixcImxhYmVsXCI6XCJjbG9zZVwifSxcImNvbXBJZFwiOjR9XSxcImxvYWRMaXN0XCI6W1wiY29tcC9pbWFnZS5wbmdcIixcIkNoYXJhY3RlcnMvJOeLvC5wbmdcIixcImNvbXAvYnV0dG9uLnBuZ1wiXSxcImxvYWRMaXN0M0RcIjpbXX07XHJcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVZpZXcoVmlld1Rlc3QxVUkudWlWaWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSRUcoXCJ1aS52aWV3LlZpZXdUZXN0MVVJXCIsVmlld1Rlc3QxVUkpO1xyXG59XHIiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9