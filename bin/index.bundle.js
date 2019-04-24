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
        ControllerManager.prototype.register = function (view) {
            var key = view.viewKey;
            if (this.isExists(key))
                return;
            if (view.Controller) {
                var controller = new view.Controller();
                controller.setView(view._view);
                if (view.Model) {
                    controller.setModel(new view.Model());
                }
                this.controllers.set(key, controller);
                view.view.setController(controller);
            }
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
var MVC = new Map();
exports.MVC = MVC;
var UI = Laya.stage;
exports.UI = UI;
var RegisterMVC = function (Layer, Controller, Model) {
    if (Controller === void 0) { Controller = null; }
    if (Model === void 0) { Model = null; }
    return function (View) {
        console.log(View.viewKey);
        var layer = MVC.get(Layer.layerKey);
        if (!layer) {
            layer = {
                layerKey: Layer.layerKey,
                Layer: Layer,
                views: new Map(),
            };
            MVC.set(layer.layerKey, layer);
        }
        var view = layer.views.get(View.viewKey);
        if (view) {
            throw new Error("viewKey " + View.viewKey + " \u91CD\u590D");
        }
        layer.views.set(View.viewKey, { layer: layer, viewKey: View.viewKey, View: View, Model: Model, Controller: Controller });
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

/***/ "./src/core/mvc/UIEvent.ts":
/*!*********************************!*\
  !*** ./src/core/mvc/UIEvent.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MvcMgr_1 = __webpack_require__(/*! ./MvcMgr */ "./src/core/mvc/MvcMgr.ts");
exports.Click = function (ui) {
    return function (View, name, descriptor) {
        var EventType = Laya.Event.CLICK;
        MvcMgr_1.MVC.forEach(function (value) {
            console.log(value.views);
            console.log(View.constructor.viewKey);
            var view = value.views.get(6);
            console.log(view);
            if (view) {
                view.Event = view.Event || new Map();
                var event_1 = view.Event.get(EventType);
                if (!event_1) {
                    event_1 = new Map();
                    view.Event.set(ui, event_1);
                }
                var funcList = event_1.get(ui);
                if (!funcList) {
                    funcList = [];
                    event_1.set(ui, funcList);
                }
                view.Event.push(descriptor.value);
            }
        });
        return descriptor;
    };
};
exports.bindEvent = function (view) {
    console.log(view);
    if (view.Event) {
        view.Event.forEach(function (eventType, uiEvent) {
            console.log(eventType, uiEvent);
            uiEvent.forEach(function (ui, func) {
                console.log(ui, func);
                func.forEach(function (func) {
                    console.log(view.view[ui]);
                    console.log(eventType);
                    console.log(func);
                    view.view[ui].on(eventType, view.view, func);
                });
            });
        });
    }
};


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
var UIEvent_1 = __webpack_require__(/*! ./UIEvent */ "./src/core/mvc/UIEvent.ts");
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
            var layer;
            MvcMgr_1.MVC.forEach(function (value) {
                var _view = value.views.get(View.viewKey);
                if (_view) {
                    layer = _view.layer;
                }
            });
            if (!layer) {
                throw new Error('layer 不存在');
            }
            var _layer = this.getLayer(layer.layerKey);
            if (!_layer) {
                _layer = new layer.Layer(MvcMgr_1.UI);
                _layer.zOrder = layer.layerKey;
                MvcMgr_1.UI.addChild(_layer);
                this.setLayer(layer.layerKey, _layer);
            }
            var view = layer.views.get(View.viewKey);
            var _view = new view.View();
            view.view = _view;
            view.view.layer = _layer;
            UIEvent_1.bindEvent(view);
            MvcMgr_1.controllerMgr.register(view);
            this.setView(view.viewKey, _view);
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

/***/ "./src/core/mvc/layer/BaseLayer.ts":
/*!*****************************************!*\
  !*** ./src/core/mvc/layer/BaseLayer.ts ***!
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

/***/ "./src/core/mvc/layer/DialogLayer.ts":
/*!*******************************************!*\
  !*** ./src/core/mvc/layer/DialogLayer.ts ***!
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
var BaseLayer_1 = __webpack_require__(/*! ./BaseLayer */ "./src/core/mvc/layer/BaseLayer.ts");
var LayerConst_1 = __webpack_require__(/*! ../../const/LayerConst */ "./src/core/const/LayerConst.ts");
var MvcMgr_1 = __webpack_require__(/*! ../MvcMgr */ "./src/core/mvc/MvcMgr.ts");
var Mask = /** @class */ (function (_super) {
    __extends(Mask, _super);
    function Mask() {
        var _this = _super.call(this) || this;
        _this.skin = 'comp/blank.png';
        _this.sizeGrid = '2,2,2,2';
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

/***/ "./src/core/mvc/layer/ViewLayer.ts":
/*!*****************************************!*\
  !*** ./src/core/mvc/layer/ViewLayer.ts ***!
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
var BaseLayer_1 = __webpack_require__(/*! ./BaseLayer */ "./src/core/mvc/layer/BaseLayer.ts");
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
var BaseLayer_1 = __webpack_require__(/*! ../../../../core/mvc/layer/BaseLayer */ "./src/core/mvc/layer/BaseLayer.ts");
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
var DialogLayer_1 = __webpack_require__(/*! ../../../../core/mvc/layer/DialogLayer */ "./src/core/mvc/layer/DialogLayer.ts");
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
var BaseLayer_1 = __webpack_require__(/*! ../../../core/mvc/layer/BaseLayer */ "./src/core/mvc/layer/BaseLayer.ts");
var DialogTest_1 = __webpack_require__(/*! ./DialogTest */ "./src/game/ui/view/DialogTest.ts");
var ViewTest_1 = __webpack_require__(/*! ./ViewTest */ "./src/game/ui/view/ViewTest.ts");
var Loading_1 = __webpack_require__(/*! ./Loading */ "./src/game/ui/view/Loading.ts");
var MvcMgr_1 = __webpack_require__(/*! ../../../core/mvc/MvcMgr */ "./src/core/mvc/MvcMgr.ts");
var UIEvent_1 = __webpack_require__(/*! ../../../core/mvc/UIEvent */ "./src/core/mvc/UIEvent.ts");
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
        _this.dialogBtn.on(Laya.Event.CLICK, _this, function () { });
        _this.viewBtn.on(Laya.Event.CLICK, _this, function () {
            MvcMgr_1.openView(ViewTest_1.default, 1, 2);
        });
        _this.loadingBtn.on(Laya.Event.CLICK, _this, function () {
            MvcMgr_1.openView(Loading_1.default, 1, 2, 3);
        });
        _this.closeBtn.on(Laya.Event.CLICK, _this, function () {
            MvcMgr_1.closeView(_this);
        });
        return _this;
    }
    BaseTest.prototype.todo1 = function () {
        MvcMgr_1.openView(DialogTest_1.default, 1, 2, 3);
    };
    BaseTest.prototype.openCb = function () {
        console.log('BaseTest open');
    };
    BaseTest.viewKey = ViewConst_1.ViewConst.BaseTest;
    __decorate([
        UIEvent_1.Click('dialogBtn')
    ], BaseTest.prototype, "todo1", null);
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
var DialogLayer_1 = __webpack_require__(/*! ../../../core/mvc/layer/DialogLayer */ "./src/core/mvc/layer/DialogLayer.ts");
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
var BaseLayer_1 = __webpack_require__(/*! ../../../core/mvc/layer/BaseLayer */ "./src/core/mvc/layer/BaseLayer.ts");
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
var ViewLayer_1 = __webpack_require__(/*! ../../../core/mvc/layer/ViewLayer */ "./src/core/mvc/layer/ViewLayer.ts");
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
var ViewLayer_1 = __webpack_require__(/*! ../../../core/mvc/layer/ViewLayer */ "./src/core/mvc/layer/ViewLayer.ts");
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
            DialogTestUI.uiView = { "type": "View", "props": { "width": 640, "height": 1136 }, "compId": 2, "child": [{ "type": "Box", "props": { "width": 200, "var": "box", "height": 200, "centerY": 0, "centerX": 0 }, "compId": 9, "child": [{ "type": "Image", "props": { "top": 0, "skin": "comp/image.png", "right": 0, "left": 0, "bottom": 0 }, "compId": 10 }, { "type": "Clip", "props": { "y": 550, "x": 303, "var": "tank", "skin": "Characters/Tank_7.png", "index": 4, "clipY": 4, "clipX": 4, "centerY": -1, "centerX": 0 }, "compId": 3 }, { "type": "Button", "props": { "y": 39, "x": 62.5, "var": "closeBtn", "skin": "comp/button.png", "label": "close" }, "compId": 4 }] }], "loadList": ["comp/image.png", "Characters/Tank_7.png", "comp/button.png"], "loadList3D": [] };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWVDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvYmFzZS9TaW5nbGV0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY29uc3QvTGF5ZXJDb25zdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9jb25zdC9WaWV3Q29uc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZ2FtZS9HYW1lQXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2dhbWUvdXRpbHMvU3RyaW5nVXRpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9nYW1lL3V0aWxzL1RpbWVVdGlsLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL212Yy9Db250cm9sbGVyTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9tdmMvTXZjTWdyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL212Yy9VSUV2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL212Yy9WaWV3TWdyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL212Yy9jb250cm9sbGVyL0Jhc2VDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL212Yy9sYXllci9CYXNlTGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvbXZjL2xheWVyL0RpYWxvZ0xheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL212Yy9sYXllci9WaWV3TGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvbXZjL21vZGVsL0Jhc2VNb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9tdmMvdmlldy9CYXNlVmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9zZXJ2aWNlL1NlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvc2VydmljZS9kaXNwYXRjaGVyL0Rpc3BhdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvc2VydmljZS9kaXNwYXRjaGVyL09ic2VydmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3VpL3ZpZXcvQVBhZ2UvQVBhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdWkvdmlldy9BUGFnZS9BUGFnZUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdWkvdmlldy9BUGFnZS9BcGFnZU1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3VpL3ZpZXcvQlBhZ2UvQlBhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdWkvdmlldy9CUGFnZS9CUGFnZUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdWkvdmlldy9CUGFnZS9CUGFnZU1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3VpL3ZpZXcvQmFzZVRlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdWkvdmlldy9EaWFsb2dUZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3VpL3ZpZXcvTG9hZGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS91aS92aWV3L1ZpZXdUZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3VpL3ZpZXcvVmlld1Rlc3QxLnRzIiwid2VicGFjazovLy8uL3NyYy9uZXQvaHR0cC9HYW1lTmV0LnRzIiwid2VicGFjazovLy8uL3NyYy9uZXQvaHR0cC9OZXRSZXF1ZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9uZXQvc29ja2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZS9NYWluU2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2xheWFNYXhVSS50cyIsIndlYnBhY2s6Ly8vd3MgKGlnbm9yZWQpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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T0FBTyxFQUFDLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLEVBQUMsR0FBRyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxXQUFXLEVBQUMsU0FBUyxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxpQkFBaUIsRUFBQyxPQUFPLEVBQUMsWUFBWSxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxHQUFHLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsU0FBUyxFQUFDLE1BQU0sRUFBQyxpQkFBaUIsRUFBQyxPQUFPLEVBQUMsV0FBVyxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFDLFlBQVksRUFBQyxFQUFFLEVBQUMsQ0FBQztZQU05ckIsY0FBQztTQUFBLENB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QUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsZ0JBQWdCLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxtQkFBbUIsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsTUFBTSxFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsU0FBUyxFQUFDLE1BQU0sRUFBQyxpQkFBaUIsRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsZ0JBQWdCLEVBQUMsbUJBQW1CLEVBQUMsaUJBQWlCLENBQUMsRUFBQyxZQUFZLEVBQUMsRUFBRSxFQUFDLENBQUM7WUFNOXBCLGlCQUFDO1NBQUEsQ0FWK0IsSUFBSSxHQVVuQztRQVZZLGVBQVUsYUFVdEI7UUFDRCxHQUFHLENBQUMsb0JBQW9CLEVBQUMsVUFBVSxDQUFDLENBQUM7UUFDckM7WUFBaUMsK0JBQUk7WUFJakM7dUJBQWUsaUJBQU87WUFBQSxDQUFDO1lBQ3ZCLG9DQUFjLEdBQWQ7Z0JBQ0ksaUJBQU0sY0FBYyxXQUFFLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hDLENBQUM7WUFMYyxrQkFBTSxHQUFNLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsZ0JBQWdCLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxtQkFBbUIsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsTUFBTSxFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxnQkFBZ0IsRUFBQyxtQkFBbUIsRUFBQyxpQkFBaUIsQ0FBQyxFQUFDLFlBQVksRUFBQyxFQUFFLEVBQUMsQ0FBQztZQU03aUIsa0JBQUM7U0FBQSxDQVRnQyxJQUFJLEdBU3BDO1FBVFksZ0JBQVcsY0FTdkI7UUFDRCxHQUFHLENBQUMscUJBQXFCLEVBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0MsQ0FBQyxFQXJGZ0IsSUFBSSxHQUFKLE9BQUksS0FBSixPQUFJLFFBcUZwQjtBQUFELENBQUMsRUFyRmEsRUFBRSxHQUFGLFVBQUUsS0FBRixVQUFFLFFBcUZmOzs7Ozs7Ozs7Ozs7QUN0R0QsZSIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImluZGV4XCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvTWFpbi50c1wiLFwibGliXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLyoqVGhpcyBjbGFzcyBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBMYXlhQWlySURFLCBwbGVhc2UgZG8gbm90IG1ha2UgYW55IG1vZGlmaWNhdGlvbnMuICovXHJcbmltcG9ydCBNYWluU2NlbmUgZnJvbSBcIi4vc2NlbmUvTWFpblNjZW5lXCJcclxuLypcclxuKiDmuLjmiI/liJ3lp4vljJbphY3nva47XHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb25maWd7XHJcbiAgICBzdGF0aWMgd2lkdGg6bnVtYmVyPTY0MDtcclxuICAgIHN0YXRpYyBoZWlnaHQ6bnVtYmVyPTExMzY7XHJcbiAgICBzdGF0aWMgc2NhbGVNb2RlOnN0cmluZz1cInNob3dhbGxcIjtcclxuICAgIHN0YXRpYyBzY3JlZW5Nb2RlOnN0cmluZz1cIm5vbmVcIjtcclxuICAgIHN0YXRpYyBhbGlnblY6c3RyaW5nPVwibWlkZGxlXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25IOnN0cmluZz1cImNlbnRlclwiO1xyXG4gICAgc3RhdGljIHN0YXJ0U2NlbmU6YW55PVwic2NlbmUvTWFpblNjZW5lLnNjZW5lXCI7XHJcbiAgICBzdGF0aWMgc2NlbmVSb290OnN0cmluZz1cIlwiO1xyXG4gICAgc3RhdGljIGRlYnVnOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgc3RhdDpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIHBoeXNpY3NEZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIGV4cG9ydFNjZW5lVG9Kc29uOmJvb2xlYW49dHJ1ZTtcclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG4gICAgc3RhdGljIGluaXQoKXtcclxuICAgICAgICB2YXIgcmVnOiBGdW5jdGlvbiA9IExheWEuQ2xhc3NVdGlscy5yZWdDbGFzcztcclxuICAgICAgICByZWcoXCJzY2VuZS9NYWluU2NlbmUudHNcIixNYWluU2NlbmUpO1xyXG4gICAgfVxyXG59XHJcbkdhbWVDb25maWcuaW5pdCgpOyIsImltcG9ydCBHYW1lQ29uZmlnIGZyb20gJy4vR2FtZUNvbmZpZydcclxuaW1wb3J0ICdAYmFiZWwvcG9seWZpbGwnXHJcbmNsYXNzIE1haW4ge1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8v5qC55o2uSURF6K6+572u5Yid5aeL5YyW5byV5pOOXHJcbiAgICBpZiAod2luZG93WydMYXlhM0QnXSkgTGF5YTNELmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQpXHJcbiAgICBlbHNlIExheWEuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCwgTGF5YVsnV2ViR0wnXSlcclxuICAgIExheWFbJ1BoeXNpY3MnXSAmJiBMYXlhWydQaHlzaWNzJ10uZW5hYmxlKClcclxuICAgIExheWFbJ0RlYnVnUGFuZWwnXSAmJiBMYXlhWydEZWJ1Z1BhbmVsJ10uZW5hYmxlKClcclxuICAgIC8vIExheWEuc3RhZ2Uuc2NhbGVNb2RlID0gR2FtZUNvbmZpZy5zY2FsZU1vZGU7XHJcbiAgICBMYXlhLnN0YWdlLnNjYWxlTW9kZSA9IEdhbWVDb25maWcuc2NhbGVNb2RlXHJcbiAgICBMYXlhLnN0YWdlLnNjcmVlbk1vZGUgPSBHYW1lQ29uZmlnLnNjcmVlbk1vZGVcclxuICAgIExheWEuc3RhZ2UuYWxpZ25WID0gR2FtZUNvbmZpZy5hbGlnblZcclxuICAgIExheWEuc3RhZ2UuYWxpZ25IID0gR2FtZUNvbmZpZy5hbGlnbkhcclxuICAgIC8v5YW85a655b6u5L+h5LiN5pSv5oyB5Yqg6L29c2NlbmXlkI7nvIDlnLrmma9cclxuICAgIExheWEuVVJMLmV4cG9ydFNjZW5lVG9Kc29uID0gR2FtZUNvbmZpZy5leHBvcnRTY2VuZVRvSnNvblxyXG5cclxuICAgIC8v5omT5byA6LCD6K+V6Z2i5p2/77yI6YCa6L+HSURF6K6+572u6LCD6K+V5qih5byP77yM5oiW6ICFdXJs5Zyw5Z2A5aKe5YqgZGVidWc9dHJ1ZeWPguaVsO+8jOWdh+WPr+aJk+W8gOiwg+ivlemdouadv++8iVxyXG4gICAgaWYgKEdhbWVDb25maWcuZGVidWcgfHwgTGF5YS5VdGlscy5nZXRRdWVyeVN0cmluZygnZGVidWcnKSA9PSAndHJ1ZScpIExheWEuZW5hYmxlRGVidWdQYW5lbCgpXHJcbiAgICBpZiAoR2FtZUNvbmZpZy5waHlzaWNzRGVidWcgJiYgTGF5YVsnUGh5c2ljc0RlYnVnRHJhdyddKSBMYXlhWydQaHlzaWNzRGVidWdEcmF3J10uZW5hYmxlKClcclxuICAgIGlmIChHYW1lQ29uZmlnLnN0YXQpIExheWEuU3RhdC5zaG93KClcclxuICAgIExheWEuYWxlcnRHbG9iYWxFcnJvciA9IHRydWVcclxuXHJcbiAgICAvL+a/gOa0u+i1hOa6kOeJiOacrOaOp+WItu+8jHZlcnNpb24uanNvbueUsUlEReWPkeW4g+WKn+iDveiHquWKqOeUn+aIkO+8jOWmguaenOayoeacieS5n+S4jeW9seWTjeWQjue7rea1geeoi1xyXG4gICAgTGF5YS5SZXNvdXJjZVZlcnNpb24uZW5hYmxlKCd2ZXJzaW9uLmpzb24nLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25WZXJzaW9uTG9hZGVkKSwgTGF5YS5SZXNvdXJjZVZlcnNpb24uRklMRU5BTUVfVkVSU0lPTilcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25WZXJzaW9uTG9hZGVkKCk6IHZvaWQge1xyXG4gICAgLy/mv4DmtLvlpKflsI/lm77mmKDlsITvvIzliqDovb3lsI/lm77nmoTml7blgJnvvIzlpoLmnpzlj5HnjrDlsI/lm77lnKjlpKflm77lkIjpm4bph4zpnaLvvIzliJnkvJjlhYjliqDovb3lpKflm77lkIjpm4bvvIzogIzkuI3mmK/lsI/lm75cclxuICAgIExheWEuQXRsYXNJbmZvTWFuYWdlci5lbmFibGUoJ2ZpbGVjb25maWcuanNvbicsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkNvbmZpZ0xvYWRlZCkpXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQ29uZmlnTG9hZGVkKCk6IHZvaWQge1xyXG4gICAgLy/liqDovb1JREXmjIflrprnmoTlnLrmma9cclxuICAgIEdhbWVDb25maWcuc3RhcnRTY2VuZSAmJiBMYXlhLlNjZW5lLm9wZW4oR2FtZUNvbmZpZy5zdGFydFNjZW5lKVxyXG4gIH1cclxufVxyXG4vL+a/gOa0u+WQr+WKqOexu1xyXG5uZXcgTWFpbigpXHJcbiIsIi8qKlxyXG4gKiBuYW1lXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU2luZ2xldG9uIHtcclxuICAvKipcclxuICAgKiBkZWZhdWx0IGNvbnN0cmFjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBwdWJsaWMgc3RhdGljIF9pbnN0YW5jZTogYW55XHJcbiAgLyoqXHJcbiAgICogZ2V0IGluc3RhbmNlIG9yIGNyZWF0ZSBuZXcgaW5zdGFuY2VcclxuICAgKiBAcmV0dXJucyB7YW55fVxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgQ3JlYXRlT3JHZXQoLi4uYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgY29uc3QgaW5zdFQ6IGFueSA9IHRoaXNcclxuICAgIHJldHVybiAoaW5zdFQuX2luc3RhbmNlID0gaW5zdFQuX2luc3RhbmNlIHx8IG5ldyBpbnN0VCguLi5hcmdzKSlcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGVudW0gTGF5ZXJDb25zdCB7XG4gIGJhc2UgPSAxLFxuICBiYXNlMSxcbiAgdmlldyxcbiAgc2hhcmUsXG4gIGRpYWxvZyxcbiAgbG9hZGluZyxcbn1cbiIsImV4cG9ydCBlbnVtIFZpZXdDb25zdCB7XHJcbiAgTWFpbiA9IDEsXHJcbiAgTG9hZGluZyxcclxuICBWaWV3VGVzdCxcclxuICBWaWV3VGVzdDEsXHJcbiAgRGlhbG9nVGVzdCxcclxuICBCYXNlVGVzdCxcclxuICBBUGFnZSxcclxuICBCUGFnZVxyXG59XHJcbiIsImltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL1NlcnZpY2UnXG5pbXBvcnQgeyBEaXNwYXRjaGVyIH0gZnJvbSAnLi4vc2VydmljZS9kaXNwYXRjaGVyL0Rpc3BhdGNoZXInXG5pbXBvcnQgU29ja2V0IGZyb20gJy4uLy4uL25ldC9zb2NrZXQnXG5pbXBvcnQgeyBTdHJpbmdVdGlsIH0gZnJvbSAnLi91dGlscy9TdHJpbmdVdGlsJ1xuaW1wb3J0IHsgVGltZVV0aWwgfSBmcm9tICcuL3V0aWxzL1RpbWVVdGlsJ1xuXG5pbXBvcnQgR2FtZU5ldCBmcm9tICcuLi8uLi9uZXQvaHR0cC9HYW1lTmV0J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUFwcCB7XG4gIC8vIOWFqOWxgOmFjee9ruaVsOaNrlxuICBwdWJsaWMgc3RhdGljIEdsb2JhbERhdGE6IGFueSA9IG51bGxcblxuICAvKipcbiAgICog5Yid5aeL5YyW5Ye95pWwXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBpbml0KHNjZW5lKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIEdhbWVBcHAuR2xvYmFsRGF0YSA9IExheWEubG9hZGVyLmdldFJlcygnY29uZi9nbG9iYWwuanNvbicpXG4gICAgICAvL+W4p+i9ruivolxuICAgICAgU2VydmljZS5Jbml0KClcbiAgICAgIHJlc29sdmUoKVxuICAgIH0pXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldCBkaXNwYXRjaGVyKCk6IERpc3BhdGNoZXIge1xuICAgIHJldHVybiBTZXJ2aWNlLmRpc3BhdGNoZXJcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IFN0cmluZ1V0aWwoKTogU3RyaW5nVXRpbCB7XG4gICAgcmV0dXJuIFN0cmluZ1V0aWwuQ3JlYXRlT3JHZXQoKVxuICB9XG4gIHB1YmxpYyBzdGF0aWMgZ2V0IFRpbWVVdGlsKCk6IFRpbWVVdGlsIHtcbiAgICByZXR1cm4gVGltZVV0aWwuQ3JlYXRlT3JHZXQoKVxuICB9XG4gIHB1YmxpYyBzdGF0aWMgZ2V0IFNvY2tldCgpOiBTb2NrZXQge1xuICAgIHJldHVybiBTb2NrZXQuQ3JlYXRlT3JHZXQoKVxuICB9XG4gIHB1YmxpYyBzdGF0aWMgZ2V0IG5ldCgpOiBHYW1lTmV0IHtcbiAgICByZXR1cm4gR2FtZU5ldC5DcmVhdGVPckdldCgpXG4gIH1cbn1cbiIsImltcG9ydCB7IFNpbmdsZXRvbiB9IGZyb20gJy4uLy4uL2Jhc2UvU2luZ2xldG9uJ1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0cmluZ1V0aWwgZXh0ZW5kcyBTaW5nbGV0b24ge1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2luZ2xldG9uIH0gZnJvbSAnLi4vLi4vYmFzZS9TaW5nbGV0b24nXHJcblxyXG5leHBvcnQgY2xhc3MgVGltZVV0aWwgZXh0ZW5kcyBTaW5nbGV0b24ge1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuICB9XHJcbiAgLy/liankvZnml7bpl7Tovazml7bliIbnp5LvvIjnp5LvvIlcclxuICBwcml2YXRlIGNoYW5nZVRpbWUodGltZTogbnVtYmVyKTogeyBob3VyczogbnVtYmVyOyBtaW51dGVzOiBudW1iZXI7IHNlY29uZHM6IG51bWJlciB9IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGhvdXJzOiBNYXRoLmZsb29yKHRpbWUgLyAzNjAwKSxcclxuICAgICAgbWludXRlczogTWF0aC5mbG9vcigodGltZSAlIDM2MDApIC8gNjApLFxyXG4gICAgICBzZWNvbmRzOiB0aW1lICUgNjAsXHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIOWAkuiuoeaXtlxyXG4gICAqIEBwYXJhbSB0aW1lIOaXtumXtOaIs++8iHPvvIlcclxuICAgKiBAcGFyYW0gaG91ciDml7ZcclxuICAgKiBAcGFyYW0gbWludXRlIOWIhlxyXG4gICAqIEBwYXJhbSBzZWNvbmQg56eSXHJcbiAgICovXHJcbiAgcHVibGljIGNvdW50RG93bih0aW1lOiBudW1iZXIsIGhvdXI6IHN0cmluZyA9ICfml7YnLCBtaW51dGU6IHN0cmluZyA9ICfliIYnLCBzZWNvbmQ6IHN0cmluZyA9ICfnp5InKTogc3RyaW5nIHtcclxuICAgIGxldCB0ZW1wID0gdGhpcy5jaGFuZ2VUaW1lKHRpbWUpXHJcbiAgICByZXR1cm4gYCR7dGVtcC5ob3Vyc30ke2hvdXJ9JHt0ZW1wLm1pbnV0ZXN9JHttaW51dGV9JHt0ZW1wLnNlY29uZHN9JHtzZWNvbmR9YFxyXG4gIH1cclxuICAvKipcclxuICAgKiDmoLzlvI/ljJbml7bpl7RcclxuICAgKiBAcGFyYW0gZGF0ZSBEYXRlXHJcbiAgICogQHBhcmFtIGZvcm1hdCDmoLzlvI9cclxuICAgKi9cclxuICBwdWJsaWMgRGF0ZUZvcm1hdChkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZyA9ICd5eXl5LU1NLWRkIGhoOm1tOnNzJyk6IHN0cmluZyB7XHJcbiAgICBsZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKVxyXG4gICAgbGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMSA+IDkgPyBkYXRlLmdldE1vbnRoKCkgKyAxIDogYDAke2RhdGUuZ2V0TW9udGgoKSArIDF9YFxyXG4gICAgbGV0IG1vbnRoMiA9IGRhdGUuZ2V0TW9udGgoKSArIDFcclxuICAgIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKSA+IDkgPyBkYXRlLmdldERhdGUoKSA6IGAwJHtkYXRlLmdldERhdGUoKX1gXHJcbiAgICBsZXQgZGF5MiA9IGRhdGUuZ2V0RGF0ZSgpXHJcbiAgICBsZXQgaG91ciA9IGRhdGUuZ2V0SG91cnMoKSA+IDkgPyBkYXRlLmdldEhvdXJzKCkgOiBgMCR7ZGF0ZS5nZXRIb3VycygpfWBcclxuICAgIGxldCBob3VyMiA9IGRhdGUuZ2V0SG91cnMoKVxyXG4gICAgbGV0IG1pbnV0ZSA9IGRhdGUuZ2V0TWludXRlcygpID4gOSA/IGRhdGUuZ2V0TWludXRlcygpIDogYDAke2RhdGUuZ2V0TWludXRlcygpfWBcclxuICAgIGxldCBtaW51dGUyID0gZGF0ZS5nZXRNaW51dGVzKClcclxuICAgIGxldCBzZWNvbmQgPSBkYXRlLmdldFNlY29uZHMoKSA+IDkgPyBkYXRlLmdldFNlY29uZHMoKSA6IGAwJHtkYXRlLmdldFNlY29uZHMoKX1gXHJcbiAgICBsZXQgc2Vjb25kMiA9IGRhdGUuZ2V0U2Vjb25kcygpXHJcblxyXG4gICAgcmV0dXJuIGZvcm1hdFxyXG4gICAgICAucmVwbGFjZSgveXl5eS8sIGAke3llYXJ9YClcclxuICAgICAgLnJlcGxhY2UoL01NLywgYCR7bW9udGh9YClcclxuICAgICAgLnJlcGxhY2UoL00vLCBgJHttb250aDJ9YClcclxuICAgICAgLnJlcGxhY2UoL2RkLywgYCR7ZGF5fWApXHJcbiAgICAgIC5yZXBsYWNlKC9kLywgYCR7ZGF5Mn1gKVxyXG4gICAgICAucmVwbGFjZSgvaGgvLCBgJHtob3VyfWApXHJcbiAgICAgIC5yZXBsYWNlKC9oLywgYCR7aG91cjJ9YClcclxuICAgICAgLnJlcGxhY2UoL21tLywgYCR7bWludXRlfWApXHJcbiAgICAgIC5yZXBsYWNlKC9tLywgYCR7bWludXRlMn1gKVxyXG4gICAgICAucmVwbGFjZSgvc3MvLCBgJHtzZWNvbmR9YClcclxuICAgICAgLnJlcGxhY2UoL3MvLCBgJHtzZWNvbmQyfWApXHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIOiOt+WPluW9k+WJjXV0Y+WkqTDngrlcclxuICAgKi9cclxuICBwdWJsaWMgVVRDRGF0ZSgpOiBEYXRlIHtcclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKClcclxuICAgIG5vdy5zZXRVVENIb3VycygwKVxyXG4gICAgbm93LnNldFVUQ01pbnV0ZXMoMClcclxuICAgIG5vdy5zZXRVVENTZWNvbmRzKDApXHJcbiAgICBub3cuc2V0VVRDTWlsbGlzZWNvbmRzKDApXHJcbiAgICByZXR1cm4gbm93XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIOiOt+WPluW9k+WJjeaXtumXtOWIsOWIsDE5NzAtMS0x55qE5aSp5pWw77yIdXRj77yJXHJcbiAgICovXHJcbiAgcHVibGljIGdldFVUQ0RhdGUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKERhdGUubm93KCkgLyAoMjQgKiA2MCAqIDYwICogMTAwMCkpXHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBtb2R1bGUgbXZjIHtcbiAgY2xhc3MgQ29udHJvbGxlck1hbmFnZXIge1xuICAgIHByaXZhdGUgY29udHJvbGxlcnMgPSBuZXcgTWFwKClcblxuICAgIHB1YmxpYyByZWdpc3Rlcih2aWV3KSB7XG4gICAgICBjb25zdCBrZXkgPSB2aWV3LnZpZXdLZXlcbiAgICAgIGlmICh0aGlzLmlzRXhpc3RzKGtleSkpIHJldHVyblxuICAgICAgaWYgKHZpZXcuQ29udHJvbGxlcikge1xuICAgICAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IHZpZXcuQ29udHJvbGxlcigpXG4gICAgICAgIGNvbnRyb2xsZXIuc2V0Vmlldyh2aWV3Ll92aWV3KVxuICAgICAgICBpZiAodmlldy5Nb2RlbCkge1xuICAgICAgICAgIGNvbnRyb2xsZXIuc2V0TW9kZWwobmV3IHZpZXcuTW9kZWwoKSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJzLnNldChrZXksIGNvbnRyb2xsZXIpXG4gICAgICAgIHZpZXcudmlldy5zZXRDb250cm9sbGVyKGNvbnRyb2xsZXIpXG4gICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyB1bnJlZ2lzdGVyKGNvbnRyb2xsZXJLZXkpIHtcbiAgICAgIGlmICghdGhpcy5pc0V4aXN0cyhjb250cm9sbGVyS2V5KSkgcmV0dXJuXG4gICAgICB0aGlzLmNvbnRyb2xsZXJzLmRlbGV0ZShjb250cm9sbGVyS2V5KVxuICAgIH1cbiAgICBpc0V4aXN0cyhjb250cm9sbGVyS2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250cm9sbGVycy5oYXMoY29udHJvbGxlcktleSlcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W5oyH5a6aQ29udHJvbGxlcuWvueixoVxuICAgICAqIEBwYXJhbSAgY29udHJvbGxlcktleSBDb250cm9sbGVy5ZSv5LiA5qCH6K+GXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBnZXRDb250cm9sbGVyKGNvbnRyb2xsZXJLZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xsZXJzLmdldChjb250cm9sbGVyS2V5KVxuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBjb25zdCBjb250cm9sbGVyTWdyID0gbmV3IENvbnRyb2xsZXJNYW5hZ2VyKClcbn1cbiIsImltcG9ydCAqIGFzIHYgZnJvbSAnLi9WaWV3TWdyJ1xyXG5pbXBvcnQgKiBhcyBjIGZyb20gJy4vQ29udHJvbGxlck1hbmFnZXInXHJcbmNvbnN0IE1WQyA9IG5ldyBNYXAoKVxyXG5sZXQgVUkgPSBMYXlhLnN0YWdlXHJcbmNvbnN0IFJlZ2lzdGVyTVZDID0gKExheWVyLCBDb250cm9sbGVyID0gbnVsbCwgTW9kZWwgPSBudWxsKSA9PiB7XHJcbiAgcmV0dXJuIFZpZXcgPT4ge1xyXG4gICAgY29uc29sZS5sb2coVmlldy52aWV3S2V5KVxyXG4gICAgbGV0IGxheWVyID0gTVZDLmdldChMYXllci5sYXllcktleSlcclxuICAgIGlmICghbGF5ZXIpIHtcclxuICAgICAgbGF5ZXIgPSB7XHJcbiAgICAgICAgbGF5ZXJLZXk6IExheWVyLmxheWVyS2V5LFxyXG4gICAgICAgIExheWVyLFxyXG4gICAgICAgIHZpZXdzOiBuZXcgTWFwKCksXHJcbiAgICAgIH1cclxuICAgICAgTVZDLnNldChsYXllci5sYXllcktleSwgbGF5ZXIpXHJcbiAgICB9XHJcbiAgICBjb25zdCB2aWV3ID0gbGF5ZXIudmlld3MuZ2V0KFZpZXcudmlld0tleSlcclxuICAgIGlmICh2aWV3KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdmlld0tleSAke1ZpZXcudmlld0tleX0g6YeN5aSNYClcclxuICAgIH1cclxuICAgIGxheWVyLnZpZXdzLnNldChWaWV3LnZpZXdLZXksIHsgbGF5ZXIsIHZpZXdLZXk6IFZpZXcudmlld0tleSwgVmlldywgTW9kZWwsIENvbnRyb2xsZXIgfSlcclxuICB9XHJcbn1cclxuY29uc3Qgc2V0VUlSb290ID0gcm9vdCA9PiB7XHJcbiAgVUkgPSByb290XHJcbn1cclxuY29uc3QgY29udHJvbGxlck1nciA9IGMubXZjLmNvbnRyb2xsZXJNZ3JcclxuY29uc3Qgdmlld01nciA9IHYubXZjLnZpZXdNZ3JcclxuY29uc3Qgb3BlblZpZXcgPSB2Lm12Yy5vcGVuVmlld1xyXG5jb25zdCBjbG9zZVZpZXcgPSB2Lm12Yy5jbG9zZVZpZXdcclxuZXhwb3J0IHsgdmlld01nciwgY29udHJvbGxlck1nciwgb3BlblZpZXcsIGNsb3NlVmlldywgUmVnaXN0ZXJNVkMsIHNldFVJUm9vdCwgTVZDLCBVSSB9XHJcbiIsImltcG9ydCB7IE1WQyB9IGZyb20gJy4vTXZjTWdyJ1xyXG5cclxuZXhwb3J0IGNvbnN0IENsaWNrID0gdWkgPT4ge1xyXG4gIHJldHVybiAoVmlldywgbmFtZSwgZGVzY3JpcHRvcikgPT4ge1xyXG4gICAgY29uc3QgRXZlbnRUeXBlID0gTGF5YS5FdmVudC5DTElDS1xyXG4gICAgTVZDLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyh2YWx1ZS52aWV3cylcclxuICAgICAgY29uc29sZS5sb2coVmlldy5jb25zdHJ1Y3Rvci52aWV3S2V5KVxyXG5cclxuICAgICAgY29uc3QgdmlldyA9IHZhbHVlLnZpZXdzLmdldCg2KVxyXG4gICAgICBjb25zb2xlLmxvZyh2aWV3KVxyXG4gICAgICBpZiAodmlldykge1xyXG4gICAgICAgIHZpZXcuRXZlbnQgPSB2aWV3LkV2ZW50IHx8IG5ldyBNYXAoKVxyXG4gICAgICAgIGxldCBldmVudCA9IHZpZXcuRXZlbnQuZ2V0KEV2ZW50VHlwZSlcclxuICAgICAgICBpZiAoIWV2ZW50KSB7XHJcbiAgICAgICAgICBldmVudCA9IG5ldyBNYXAoKVxyXG4gICAgICAgICAgdmlldy5FdmVudC5zZXQodWksIGV2ZW50KVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZnVuY0xpc3QgPSBldmVudC5nZXQodWkpXHJcbiAgICAgICAgaWYgKCFmdW5jTGlzdCkge1xyXG4gICAgICAgICAgZnVuY0xpc3QgPSBbXVxyXG4gICAgICAgICAgZXZlbnQuc2V0KHVpLCBmdW5jTGlzdClcclxuICAgICAgICB9XHJcbiAgICAgICAgdmlldy5FdmVudC5wdXNoKGRlc2NyaXB0b3IudmFsdWUpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gZGVzY3JpcHRvclxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGJpbmRFdmVudCA9IHZpZXcgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHZpZXcpXHJcbiAgaWYgKHZpZXcuRXZlbnQpIHtcclxuICAgIHZpZXcuRXZlbnQuZm9yRWFjaCgoZXZlbnRUeXBlLCB1aUV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGV2ZW50VHlwZSwgdWlFdmVudClcclxuICAgICAgdWlFdmVudC5mb3JFYWNoKCh1aSwgZnVuYykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVpLCBmdW5jKVxyXG4gICAgICAgIGZ1bmMuZm9yRWFjaChmdW5jID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHZpZXcudmlld1t1aV0pXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhldmVudFR5cGUpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhmdW5jKVxyXG4gICAgICAgICAgdmlldy52aWV3W3VpXS5vbihldmVudFR5cGUsIHZpZXcudmlldywgZnVuYylcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSVZpZXcgfSBmcm9tICcuL2ludGVyZmFjZS9JVmlldydcblxuaW1wb3J0IHsgSUxheWVyIH0gZnJvbSAnLi9pbnRlcmZhY2UvSUxheWVyJ1xuXG5pbXBvcnQgeyBNVkMsIFVJLCBjb250cm9sbGVyTWdyIH0gZnJvbSAnLi9NdmNNZ3InXG5pbXBvcnQgeyBiaW5kRXZlbnQgfSBmcm9tICcuL1VJRXZlbnQnXG5cbmV4cG9ydCBtb2R1bGUgbXZjIHtcbiAgY2xhc3MgVmlld01nciB7XG4gICAgcHJpdmF0ZSB2aWV3czogTWFwPHN0cmluZywgSVZpZXc+ID0gbmV3IE1hcDxzdHJpbmcsIElWaWV3PigpXG4gICAgcHJpdmF0ZSBsYXllcnM6IE1hcDxzdHJpbmcsIElMYXllcj4gPSBuZXcgTWFwPHN0cmluZywgSUxheWVyPigpXG4gICAgcHJpdmF0ZSBvcGVuVmlld3M6IE1hcDxzdHJpbmcsIElWaWV3PiA9IG5ldyBNYXA8c3RyaW5nLCBJVmlldz4oKVxuXG4gICAgcHVibGljIGdldFZpZXcoa2V5KTogSVZpZXcge1xuICAgICAgcmV0dXJuIHRoaXMudmlld3MuZ2V0KGtleSlcbiAgICB9XG4gICAgcHVibGljIHNldFZpZXcoa2V5LCB2aWV3OiBJVmlldyk6IHZvaWQge1xuICAgICAgdGhpcy52aWV3cy5zZXQoa2V5LCB2aWV3KVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0TGF5ZXIoa2V5KTogSUxheWVyIHtcbiAgICAgIHJldHVybiB0aGlzLmxheWVycy5nZXQoa2V5KVxuICAgIH1cbiAgICBwdWJsaWMgc2V0TGF5ZXIoa2V5LCBsYXllcjogSUxheWVyKTogdm9pZCB7XG4gICAgICB0aGlzLmxheWVycy5zZXQoa2V5LCBsYXllcilcbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlblZpZXcoVmlldywgLi4uYXJncyk6IHZvaWQge1xuICAgICAgbGV0IF92aWV3ID0gdGhpcy5vcGVuVmlld3MuZ2V0KFZpZXcudmlld0tleSlcbiAgICAgIGlmIChfdmlldykge1xuICAgICAgICBfdmlldy5vcGVuLmFwcGx5KF92aWV3LCBhcmdzKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIF92aWV3ID0gdGhpcy5nZXRWaWV3KFZpZXcudmlld0tleSlcbiAgICAgIGlmIChfdmlldykge1xuICAgICAgICBfdmlldy5sYXllci5vcGVuVmlldyhfdmlldywgLi4uYXJncylcbiAgICAgICAgdGhpcy5vcGVuVmlld3Muc2V0KFZpZXcudmlld0tleSwgX3ZpZXcpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgX3ZpZXcgPSB0aGlzLmNyZWF0ZVZpZXcoVmlldylcbiAgICAgIF92aWV3LmxheWVyLm9wZW5WaWV3KF92aWV3LCAuLi5hcmdzKVxuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZVZpZXcoVmlldykge1xuICAgICAgbGV0IGxheWVyXG4gICAgICBNVkMuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgIGNvbnN0IF92aWV3ID0gdmFsdWUudmlld3MuZ2V0KFZpZXcudmlld0tleSlcbiAgICAgICAgaWYgKF92aWV3KSB7XG4gICAgICAgICAgbGF5ZXIgPSBfdmlldy5sYXllclxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaWYgKCFsYXllcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2xheWVyIOS4jeWtmOWcqCcpXG4gICAgICB9XG4gICAgICBsZXQgX2xheWVyID0gdGhpcy5nZXRMYXllcihsYXllci5sYXllcktleSlcbiAgICAgIGlmICghX2xheWVyKSB7XG4gICAgICAgIF9sYXllciA9IG5ldyBsYXllci5MYXllcihVSSlcbiAgICAgICAgX2xheWVyLnpPcmRlciA9IGxheWVyLmxheWVyS2V5XG4gICAgICAgIFVJLmFkZENoaWxkKF9sYXllcilcbiAgICAgICAgdGhpcy5zZXRMYXllcihsYXllci5sYXllcktleSwgX2xheWVyKVxuICAgICAgfVxuICAgICAgY29uc3QgdmlldyA9IGxheWVyLnZpZXdzLmdldChWaWV3LnZpZXdLZXkpXG4gICAgICBsZXQgX3ZpZXcgPSBuZXcgdmlldy5WaWV3KClcbiAgICAgIHZpZXcudmlldyA9IF92aWV3XG4gICAgICB2aWV3LnZpZXcubGF5ZXIgPSBfbGF5ZXJcbiAgICAgIGJpbmRFdmVudCh2aWV3KVxuICAgICAgY29udHJvbGxlck1nci5yZWdpc3Rlcih2aWV3KVxuXG4gICAgICB0aGlzLnNldFZpZXcodmlldy52aWV3S2V5LCBfdmlldylcbiAgICAgIGlmIChfdmlldy5pbml0KSBfdmlldy5pbml0KClcbiAgICAgIHJldHVybiBfdmlld1xuICAgIH1cbiAgICBwdWJsaWMgY2xvc2VWaWV3KFZpZXdPcktleU9ySW5zOiBhbnksIC4uLmFyZ3MpOiB2b2lkIHtcbiAgICAgIGxldCBfdmlld1xuICAgICAgaWYgKFZpZXdPcktleU9ySW5zLnZpZXdLZXkpIHtcbiAgICAgICAgX3ZpZXcgPSB0aGlzLmdldFZpZXcoVmlld09yS2V5T3JJbnMudmlld0tleSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5nZXRWaWV3KFZpZXdPcktleU9ySW5zKSkge1xuICAgICAgICBfdmlldyA9IHRoaXMuZ2V0VmlldyhWaWV3T3JLZXlPcklucylcbiAgICAgIH0gZWxzZSBpZiAoVmlld09yS2V5T3JJbnMuY29uc3RydWN0b3Iudmlld0tleSkge1xuICAgICAgICBfdmlldyA9IHRoaXMuZ2V0VmlldyhWaWV3T3JLZXlPcklucy5jb25zdHJ1Y3Rvci52aWV3S2V5KVxuICAgICAgfVxuICAgICAgaWYgKF92aWV3KSB7XG4gICAgICAgIF92aWV3LmxheWVyLmNsb3NlVmlldyhfdmlldywgLi4uYXJncylcbiAgICAgICAgdGhpcy5vcGVuVmlld3MuZGVsZXRlKF92aWV3LmNvbnN0cnVjdG9yLnZpZXdLZXkpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgaXNPcGVuKFZpZXdPcktleU9ySW5zKTogYm9vbGVhbiB7XG4gICAgICBsZXQgX3ZpZXdcbiAgICAgIGlmIChWaWV3T3JLZXlPcklucy52aWV3S2V5KSB7XG4gICAgICAgIF92aWV3ID0gdGhpcy5vcGVuVmlld3MuZ2V0KFZpZXdPcktleU9ySW5zLnZpZXdLZXkpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3BlblZpZXdzLmdldChWaWV3T3JLZXlPcklucykpIHtcbiAgICAgICAgX3ZpZXcgPSB0aGlzLm9wZW5WaWV3cy5nZXQoVmlld09yS2V5T3JJbnMpXG4gICAgICB9IGVsc2UgaWYgKFZpZXdPcktleU9ySW5zLmNvbnN0cnVjdG9yLnZpZXdLZXkpIHtcbiAgICAgICAgX3ZpZXcgPSB0aGlzLm9wZW5WaWV3cy5nZXQoVmlld09yS2V5T3JJbnMuY29uc3RydWN0b3Iudmlld0tleSlcbiAgICAgIH1cbiAgICAgIHJldHVybiAhIV92aWV3XG4gICAgfVxuICB9XG4gIGV4cG9ydCBjb25zdCB2aWV3TWdyID0gbmV3IFZpZXdNZ3IoKVxuICBleHBvcnQgY29uc3Qgb3BlblZpZXcgPSAoVmlldywgLi4uYXJncykgPT4ge1xuICAgIHZpZXdNZ3Iub3BlblZpZXcoVmlldywgLi4uYXJncylcbiAgfVxuXG4gIGV4cG9ydCBjb25zdCBjbG9zZVZpZXcgPSAoVmlld09yS2V5T3JJbnMsIC4uLmFyZ3MpID0+IHtcbiAgICB2aWV3TWdyLmNsb3NlVmlldyhWaWV3T3JLZXlPcklucywgLi4uYXJncylcbiAgfVxufVxuIiwiaW1wb3J0IEJhc2VNb2RlbCBmcm9tICcuLi9tb2RlbC9CYXNlTW9kZWwnXG5pbXBvcnQgKiBhcyB2IGZyb20gXCIuLi92aWV3L0Jhc2VWaWV3XCI7XG5pbXBvcnQgQmFzZVZpZXcgPXYuS1VJLkJhc2VWaWV3XG5pbXBvcnQgR2FtZUFwcCBmcm9tICcuLi8uLi9nYW1lL0dhbWVBcHAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlQ29udHJvbGxlciB7XG4gIHByaXZhdGUgbW9kZWw6IEJhc2VNb2RlbFxuICBwcml2YXRlIHZpZXc6IEJhc2VWaWV3XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubW9kZWwgPSBudWxsXG4gICAgdGhpcy52aWV3ID0gbnVsbFxuICAgIHRoaXMuaW5pdCgpXG4gIH1cbiAgcHVibGljIGluaXQoKVxuICB7XG4gICAgXG4gIH1cbiAgcHVibGljIHNldE1vZGVsKG1vZGVsKSB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsXG4gIH1cbiAgcHVibGljIGdldE1vZGVsKCkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsXG4gIH1cbiAgcHVibGljIHNldFZpZXcodmlldykge1xuICAgIHRoaXMudmlldyA9IHZpZXdcbiAgfVxuICBwdWJsaWMgZ2V0VmlldygpIHtcbiAgICByZXR1cm4gdGhpcy52aWV3XG4gIH1cblxuICAvL+ebkeWQrOS6i+S7tlxuICBwdWJsaWMgYWRkTGlzdGVuZXIoa2V5LCBjYWxsYmFjaywgY2FsbGVyKSB7XG4gICAgR2FtZUFwcC5kaXNwYXRjaGVyLk9ic2VydmUoa2V5LGNhbGxlcixjYWxsYmFjaylcbiAgfVxuICAvL+enu+mZpOebkeWQrOeahOS6i+S7tlxuICBwdWJsaWMgcmVtb3ZlTGlzdGVuZXIoa2V5KSB7XG4gICAgR2FtZUFwcC5kaXNwYXRjaGVyLlJlbW92ZShrZXkpXG4gIH1cbiAgLy/op6blj5Hkuovku7ZcbiAgcHVibGljIGRpc3BhdGNoKGtleSwgLi4uYXJncykge1xuICAgIEdhbWVBcHAuZGlzcGF0Y2hlci5TZW5kTXNnKGtleSxhcmdzKVxuICB9XG4gIC8qKlxuICAgKiDms6jlhozku47mnI3liqHlmajov5Tlm57mtojmga/nmoTnm5HlkKxcbiAgICogQHBhcmFtICBjbWQg5raI5oGv5qCH6K+GXG4gICAqIEBwYXJhbSBjYWxsYmFjayDlpITnkIblh73mlbBcbiAgICogQHBhcmFtICB0aGlzT2JqIOWkhOeQhuWHveaVsOaJgOWxnuWvueixoVxuICAgKi9cbiAgb2JzZXJ2ZXJTb2NrZXRNc2coY21kLCBjYWxsYmFjaywgdGhpc09iaikge31cblxuICAvKipcbiAgICogQHBhcmFtIGNtZCDmtojmga/moIfor4ZcbiAgICogQHBhcmFtIG1zZyDmlbDmja5cbiAgICogQHBhcmFtIGNhbGxiYWNrIOWkhOeQhuWHveaVsFxuICAgKiBAcGFyYW0gdGhpc09iaiDlpITnkIblh73mlbDmiYDlsZ7lr7nosaFcbiAgICovXG4gIHNlbmRTb2NrZXRNc2coY21kLCBtc2csIGNhbGxiYWNrLCB0aGlzT2JqKSB7fVxuXG4gIC8qKlxuICAgKiDlj5HpgIHmtojmga/liLBIdHRw5pyN5Yqh56uvXG4gICAqIEBwYXJhbSAgY21kIOa2iOaBr+agh+ivhiDkvovlpoI6IFVzZXIubG9naW5cbiAgICogQHBhcmFtICBtc2cg5raI5oGv5Y+C5pWwIOS+i+WmgjogbGV0IG1zZzphbnkgPSB7XCJ1TmFtZVwiOnVOYW1lLCBcInVQYXNzXCI6dVBhc3N9O1xuICAgKi9cbiAgc2VuZEh0dHBNc2coY21kLCBtc2cpIHt9XG4gIC8v5ZCR5YW25LuW5qih5Z2X6YCa6K6vXG4gIHB1YmxpYyBzZW5kTWVzc2FnZSgpIHt9XG59XG4iLCJpbXBvcnQgeyBJVmlldyB9IGZyb20gJy4uL2ludGVyZmFjZS9JVmlldydcclxuaW1wb3J0IHsgTGF5ZXJDb25zdCB9IGZyb20gJy4uLy4uL2NvbnN0L0xheWVyQ29uc3QnXHJcbmltcG9ydCB7IElMYXllciB9IGZyb20gJy4uL2ludGVyZmFjZS9JTGF5ZXInXHJcbmV4cG9ydCBjbGFzcyBCYXNlTGF5ZXIgZXh0ZW5kcyBMYXlhLlNwcml0ZSBpbXBsZW1lbnRzIElMYXllciB7XHJcbiAgcHJvdGVjdGVkIG93blNjZW5lOiBMYXlhLlNjZW5lXHJcbiAgY29uc3RydWN0b3Ioc2NlbmU6IExheWEuU2NlbmUpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMub3duU2NlbmUgPSBzY2VuZVxyXG4gICAgdGhpcy53aWR0aCA9IHRoaXMub3duU2NlbmUud2lkdGhcclxuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5vd25TY2VuZS5oZWlnaHRcclxuICAgIHRoaXMuaGl0VGVzdFByaW9yID0gdHJ1ZVxyXG4gICAgdGhpcy5tb3VzZVRocm91Z2ggPSB0cnVlXHJcbiAgICB0aGlzLm1vdXNlRW5hYmxlZCA9IHRydWVcclxuICB9XHJcblxyXG4gIHN0YXRpYyBsYXllcktleSA9IExheWVyQ29uc3QuYmFzZVxyXG4gIHB1YmxpYyBvcGVuVmlldyh2aWV3OiBJVmlldywgLi4uYXJncyk6IHZvaWQge1xyXG4gICAgaWYgKHZpZXcub3BlbkNiKSB7XHJcbiAgICAgIHZpZXcub3BlbkNiLmFwcGx5KHZpZXcsIGFyZ3MpXHJcbiAgICB9XHJcbiAgICB0aGlzLm1vdXNlVGhyb3VnaCA9IGZhbHNlXHJcbiAgICB0aGlzLmFkZENoaWxkKHZpZXcpXHJcbiAgfVxyXG4gIHB1YmxpYyBjbG9zZVZpZXcodmlldzogSVZpZXcpOiB2b2lkIHtcclxuICAgIGlmICh2aWV3LmNsb3NlQ2IpIHtcclxuICAgICAgdmlldy5jbG9zZUNiKClcclxuICAgIH1cclxuICAgIHRoaXMucmVtb3ZlQ2hpbGQodmlldylcclxuICAgIHRoaXMubW91c2VUaHJvdWdoID0gdGhpcy5fY2hpbGRyZW4ubGVuZ3RoID09PSAwXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEJhc2VMYXllciB9IGZyb20gJy4vQmFzZUxheWVyJ1xyXG5pbXBvcnQgeyBJTGF5ZXIgfSBmcm9tICcuLi9pbnRlcmZhY2UvSUxheWVyJ1xyXG5pbXBvcnQgeyBMYXllckNvbnN0IH0gZnJvbSAnLi4vLi4vY29uc3QvTGF5ZXJDb25zdCdcclxuaW1wb3J0IHsgY2xvc2VWaWV3IH0gZnJvbSAnLi4vTXZjTWdyJ1xyXG5jbGFzcyBNYXNrIGV4dGVuZHMgTGF5YS5JbWFnZSB7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy5za2luID0gJ2NvbXAvYmxhbmsucG5nJ1xyXG4gICAgdGhpcy5zaXplR3JpZCA9ICcyLDIsMiwyJ1xyXG4gIH1cclxufVxyXG5leHBvcnQgY2xhc3MgRGlhbG9nTGF5ZXIgZXh0ZW5kcyBCYXNlTGF5ZXIgaW1wbGVtZW50cyBJTGF5ZXIge1xyXG4gIC8vIHByaXZhdGUgbU1hc2tcclxuICBjb25zdHJ1Y3RvcihzY2VuZTogTGF5YS5TY2VuZSkge1xyXG4gICAgc3VwZXIoc2NlbmUpXHJcbiAgfVxyXG4gIHN0YXRpYyBsYXllcktleSA9IExheWVyQ29uc3QuZGlhbG9nXHJcblxyXG4gIHByaXZhdGUgbWFza3M6IE1hcDxzdHJpbmcsIExheWEuSW1hZ2U+ID0gbmV3IE1hcCgpXHJcblxyXG4gIHB1YmxpYyBvcGVuVmlldyh2aWV3OiBhbnksIC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XHJcbiAgICBsZXQgbWFzayA9IHRoaXMubWFza3MuZ2V0KHZpZXcuY29uc3RydWN0b3Iudmlld0tleSlcclxuICAgIGlmICghbWFzaykge1xyXG4gICAgICBtYXNrID0gbmV3IE1hc2soKVxyXG4gICAgICBtYXNrLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcclxuICAgICAgICBjbG9zZVZpZXcodmlldylcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIG1hc2sud2lkdGggPSB0aGlzLndpZHRoXHJcbiAgICBtYXNrLmhlaWdodCA9IHRoaXMuaGVpZ2h0XHJcblxyXG4gICAgdGhpcy5tYXNrcy5zZXQodmlldy5jb25zdHJ1Y3Rvci52aWV3S2V5LCBtYXNrKVxyXG4gICAgdGhpcy5hZGRDaGlsZChtYXNrKVxyXG4gICAgc3VwZXIub3BlblZpZXcuYXBwbHkodGhpcywgW3ZpZXcsIC4uLmFyZ3NdKVxyXG4gICAgdmlldy5hbmNob3JYID0gMC41XHJcbiAgICB2aWV3LmFuY2hvclkgPSAwLjVcclxuICAgIHZpZXcueCA9IHZpZXcud2lkdGggLyAyXHJcbiAgICB2aWV3LnkgPSB2aWV3LmhlaWdodCAvIDJcclxuICAgIHZpZXcubW91c2VUaHJvdWdoID0gdHJ1ZVxyXG4gICAgbGV0IHR3ZWVuID0gbmV3IExheWEuVHdlZW4oKVxyXG4gICAgdmlldy5zY2FsZVggPSAwLjhcclxuICAgIHZpZXcuc2NhbGVZID0gMC44XHJcbiAgICB0d2Vlbi50byhcclxuICAgICAgdmlldyxcclxuICAgICAgeyBzY2FsZVg6IDEuMDUsIHNjYWxlWTogMS4wNSB9LFxyXG4gICAgICAxMDAsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG5ldyBMYXlhLkhhbmRsZXIodGhpcywgKCkgPT4ge1xyXG4gICAgICAgIGxldCB0d2VlbiA9IG5ldyBMYXlhLlR3ZWVuKClcclxuICAgICAgICB0d2Vlbi50byh2aWV3LCB7IHNjYWxlWDogMSwgc2NhbGVZOiAxIH0sIDEwMCwgbnVsbClcclxuICAgICAgfSksXHJcbiAgICApXHJcbiAgfVxyXG4gIHB1YmxpYyBjbG9zZVZpZXcodmlldzogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMubWFza3MuZ2V0KHZpZXcuY29uc3RydWN0b3Iudmlld0tleSkpXHJcbiAgICBzdXBlci5jbG9zZVZpZXcodmlldylcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQmFzZUxheWVyIH0gZnJvbSAnLi9CYXNlTGF5ZXInXHJcblxyXG5pbXBvcnQgeyBJVmlldyB9IGZyb20gJy4uL2ludGVyZmFjZS9JVmlldydcclxuXHJcbmltcG9ydCB7IExheWVyQ29uc3QgfSBmcm9tICcuLi8uLi9jb25zdC9MYXllckNvbnN0J1xyXG5cclxuY29uc3QgZGlzID0gMTAwXHJcbmNvbnN0IHRpbWUgPSAyNDBcclxuZXhwb3J0IGNsYXNzIFZpZXdMYXllciBleHRlbmRzIEJhc2VMYXllciB7XHJcbiAgY29uc3RydWN0b3Ioc2NlbmU6IExheWEuU2NlbmUpIHtcclxuICAgIHN1cGVyKHNjZW5lKVxyXG4gIH1cclxuICBzdGF0aWMgbGF5ZXJLZXkgPSBMYXllckNvbnN0LnZpZXdcclxuICBwcml2YXRlIG9wZW5WaWV3czogSVZpZXdbXSA9IFtdXHJcbiBcclxuICBwdWJsaWMgb3BlblZpZXcodmlldzogYW55LCAuLi5hcmdzKSB7XHJcbiAgICBsZXQgbGFzdFZpZXc6IExheWEuU3ByaXRlXHJcbiAgICBjb25zdCB0d2VlbjEgPSBuZXcgTGF5YS5Ud2VlbigpXHJcbiAgICBpZiAodGhpcy5vcGVuVmlld3MubGVuZ3RoKSB7XHJcbiAgICAgIGxhc3RWaWV3ID0gdGhpcy5vcGVuVmlld3NbdGhpcy5vcGVuVmlld3MubGVuZ3RoIC0gMV1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxhc3RWaWV3ID0gdGhpcy5vd25TY2VuZVxyXG4gICAgfVxyXG4gICAgbGFzdFZpZXcueCA9IHRoaXMub3duU2NlbmUgPT09IGxhc3RWaWV3ID8gMCA6IGRpc1xyXG4gICAgdHdlZW4xLnRvKFxyXG4gICAgICBsYXN0VmlldyxcclxuICAgICAgeyB4OiB0aGlzLm93blNjZW5lID09PSBsYXN0VmlldyA/IC1kaXMgOiAwIH0sXHJcbiAgICAgIHRpbWUsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG5ldyBMYXlhLkhhbmRsZXIobGFzdFZpZXcsICgpID0+IHtcclxuICAgICAgICBpZiAobGFzdFZpZXcgIT09IHRoaXMub3duU2NlbmUpIGxhc3RWaWV3LnJlbW92ZVNlbGYoKVxyXG4gICAgICB9KSxcclxuICAgIClcclxuICAgIHRoaXMub3BlblZpZXdzLnB1c2godmlldylcclxuICAgIHN1cGVyLm9wZW5WaWV3LmFwcGx5KHRoaXMsIFt2aWV3LCAuLi5hcmdzXSlcclxuICAgIGNvbnN0IHR3ZWVuMiA9IG5ldyBMYXlhLlR3ZWVuKClcclxuICAgIHZpZXcueCA9IHRoaXMud2lkdGhcclxuICAgIHR3ZWVuMi50byhcclxuICAgICAgdmlldyxcclxuICAgICAgeyB4OiBkaXMgfSxcclxuICAgICAgdGltZSxcclxuICAgICAgbnVsbCxcclxuICAgICAgbmV3IExheWEuSGFuZGxlcih2aWV3LCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHZpZXcuYWZ0ZXJPcGVuKSB7XHJcbiAgICAgICAgICB2aWV3LmFmdGVyT3Blbi5jYWxsKHZpZXcpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgIClcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9zZVZpZXcodmlldzogYW55KSB7XHJcbiAgICBsZXQgbGFzdFZpZXdcclxuICAgIGNvbnN0IHR3ZWVuMSA9IG5ldyBMYXlhLlR3ZWVuKClcclxuICAgIHRoaXMub3BlblZpZXdzLnBvcCgpXHJcbiAgICBpZiAodGhpcy5vcGVuVmlld3MubGVuZ3RoID4gMCkge1xyXG4gICAgICBsYXN0VmlldyA9IHRoaXMub3BlblZpZXdzW3RoaXMub3BlblZpZXdzLmxlbmd0aCAtIDFdXHJcbiAgICAgIGxhc3RWaWV3LnpPcmRlciA9IHZpZXcuek9yZGVyIC0gMVxyXG4gICAgICBsYXN0Vmlldy5sYXllci5hZGRDaGlsZChsYXN0VmlldylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxhc3RWaWV3ID0gdGhpcy5vd25TY2VuZVxyXG4gICAgfVxyXG5cclxuICAgIGxhc3RWaWV3LnggPSBsYXN0VmlldyA9PT0gdGhpcy5vd25TY2VuZSA/IC1kaXMgOiAwXHJcblxyXG4gICAgdHdlZW4xLnRvKGxhc3RWaWV3LCB7IHg6IGxhc3RWaWV3ID09PSB0aGlzLm93blNjZW5lID8gMCA6IGRpcyB9LCB0aW1lKVxyXG4gICAgY29uc3QgdHdlZW4yID0gbmV3IExheWEuVHdlZW4oKVxyXG4gICAgdmlldy54ID0gZGlzXHJcbiAgICB0d2VlbjIudG8oXHJcbiAgICAgIHZpZXcsXHJcbiAgICAgIHsgeDogdGhpcy53aWR0aCB9LFxyXG4gICAgICB0aW1lLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsICgpID0+IHtcclxuICAgICAgICBzdXBlci5jbG9zZVZpZXcodmlldylcclxuICAgICAgfSksXHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VNb2RlbHtcbiAgICBcbn0iLCJpbXBvcnQgQmFzZUNvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlci9CYXNlQ29udHJvbGxlcidcblxuZXhwb3J0IG5hbWVzcGFjZSBLVUkge1xuICBleHBvcnQgY2xhc3MgQmFzZVZpZXcgZXh0ZW5kcyBMYXlhLlZpZXcge1xuICAgIHB1YmxpYyBjb250cm9sbGVyOiBCYXNlQ29udHJvbGxlclxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKVxuICAgIH1cbiAgICBwdWJsaWMgc2V0Q29udHJvbGxlcihjdHJsKSB7XG4gICAgICB0aGlzLmNvbnRyb2xsZXIgPSBjdHJsXG4gICAgfVxuICAgIHB1YmxpYyBpbml0KCkge1xuICAgICAgdGhpcy5pbml0RGF0YSgpXG4gICAgICB0aGlzLmluaXRSZXMoKVxuICAgICAgdGhpcy5pbml0VmlldygpXG4gICAgfVxuICAgIHB1YmxpYyBpbml0RGF0YSgpIHt9XG4gICAgcHVibGljIGluaXRSZXMoKSB7fVxuICAgIHB1YmxpYyBpbml0VmlldygpIHt9XG4gIH1cbn1cbiIsImltcG9ydCB7IERpc3BhdGNoZXIgfSBmcm9tICcuL2Rpc3BhdGNoZXIvRGlzcGF0Y2hlcidcclxuXHJcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlIHtcclxuICBwdWJsaWMgc3RhdGljIEluaXQoKTogdm9pZCB7fVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBkaXNwYXRjaGVyKCk6IERpc3BhdGNoZXIge1xyXG4gICAgcmV0dXJuIERpc3BhdGNoZXIuQ3JlYXRlT3JHZXQoKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBPYnNlcnZlciB9IGZyb20gJy4vT2JzZXJ2ZXInXG5pbXBvcnQgeyBTaW5nbGV0b24gfSBmcm9tICcuLi8uLi9iYXNlL1NpbmdsZXRvbidcbmV4cG9ydCBjbGFzcyBEaXNwYXRjaGVyIGV4dGVuZHMgU2luZ2xldG9uIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLl9vYnNlcnZlcnMgPSB7fVxuICB9XG5cbiAgLyoqXG4gICAqIOa2iOaBr+WIl+ihqFxuICAgKi9cbiAgcHJpdmF0ZSBfb2JzZXJ2ZXJzOiBhbnlcblxuICBwdWJsaWMgT2JzZXJ2ZSh0b3BpY186IGFueSwgb2JzZXJ2ZXJfOiBhbnksIGhhbmRsZXJfOiBGdW5jdGlvbik6IE9ic2VydmVyIHtcbiAgICBpZiAoIXRoaXMuX29ic2VydmVyc1t0b3BpY19dKSB0aGlzLl9vYnNlcnZlcnNbdG9waWNfXSA9IFtdXG4gICAgbGV0IG9ic2VydmVyOiBPYnNlcnZlciA9IG5ldyBPYnNlcnZlcih0b3BpY18sIG9ic2VydmVyXywgaGFuZGxlcl8pXG4gICAgdGhpcy5fb2JzZXJ2ZXJzW3RvcGljX10ucHVzaChvYnNlcnZlcilcbiAgICByZXR1cm4gb2JzZXJ2ZXIuUmV1c2UodG9waWNfLCBvYnNlcnZlcl8sIGhhbmRsZXJfKVxuICB9XG5cbiAgcHVibGljIE9ic2VydmVMaXN0KG9ic2VydmVyXzogYW55LCB0b3BpY3NfOiBhbnlbXSwgaGFuZGxlcnNfOiBhbnlbXSk6IE9ic2VydmVyW10ge1xuICAgIGxldCBsaXN0OiBPYnNlcnZlcltdID0gW11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvcGljc18ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpc3QucHVzaCh0aGlzLk9ic2VydmUodG9waWNzX1tpXSwgb2JzZXJ2ZXJfLCBoYW5kbGVyc19baV0pKVxuICAgIH1cbiAgICByZXR1cm4gbGlzdFxuICB9XG5cbiAgcHVibGljIFJlbW92ZUxpc3Qob2JzOiBPYnNlcnZlcltdKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuUmVtb3ZlKG9ic1tpXSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgU2VuZE1zZyh0b3BpY186IGFueSwgLi4uYXJnczogYW55W10pOiBhbnlbXSB7XG4gICAgaWYgKCF0aGlzLl9vYnNlcnZlcnNbdG9waWNfXSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBsZXQgcmV0OiBhbnlbXSA9IFtdXG4gICAgdGhpcy5fb2JzZXJ2ZXJzW3RvcGljX10uZm9yRWFjaChcbiAgICAgIChlbGVtZW50KTogdm9pZCA9PiB7XG4gICAgICAgIHJldC5wdXNoKGVsZW1lbnQuUmVjdk1zZyguLi5hcmdzKSlcbiAgICAgIH0sXG4gICAgKVxuICAgIHJldHVybiByZXRcbiAgfVxuXG4gIHB1YmxpYyBSZW1vdmUob2JzOiBPYnNlcnZlcik6IE9ic2VydmVyIHtcbiAgICBpZiAob2JzID09IG51bGwpIHJldHVyblxuICAgIGxldCBhcnI6IGFueVtdID0gdGhpcy5fb2JzZXJ2ZXJzW29icy50b3BpY11cblxuICAgIGlmICghYXJyKSByZXR1cm4gbnVsbFxuXG4gICAgbGV0IGluZDogbnVtYmVyID0gYXJyLmluZGV4T2Yob2JzKVxuICAgIGlmIChpbmQgPCAwKSByZXR1cm4gbnVsbFxuXG4gICAgYXJyLnNwbGljZShpbmQsIDEpXG4gICAgcmV0dXJuIG9ic1xuICB9XG5cbiAgcHVibGljIFJlbW92ZUFsbCh0b3BpYzogYW55KTogdm9pZCB7XG4gICAgbGV0IGFycjogYW55W10gPSB0aGlzLl9vYnNlcnZlcnNbdG9waWNdXG4gICAgaWYgKCFhcnIpIHJldHVyblxuICAgIGFyci5zcGxpY2UoMCwgYXJyLmxlbmd0aClcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIE9ic2VydmVyIHtcbiAgcHVibGljIHRvcGljOiBhbnlcbiAgcHVibGljIG9ic2VydmVyOiBhbnlcbiAgcHVibGljIGhhbmRsZXI6IEZ1bmN0aW9uXG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRvcGljXzogYW55LCBvYnNlcnZlcl86IGFueSwgaGFuZGxlcl86IEZ1bmN0aW9uKSB7XG4gICAgdGhpcy5SZXVzZSh0b3BpY18sIG9ic2VydmVyXywgaGFuZGxlcl8pXG4gIH1cblxuICBwdWJsaWMgUmV1c2UodG9waWNfOiBhbnksIG9ic2VydmVyXzogYW55LCBoYW5kbGVyXzogRnVuY3Rpb24pOiBPYnNlcnZlciB7XG4gICAgdGhpcy50b3BpYyA9IHRvcGljX1xuICAgIHRoaXMub2JzZXJ2ZXIgPSBvYnNlcnZlcl9cbiAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyX1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBwdWJsaWMgUmVjdk1zZyguLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xuICAgIGxldCByZXQ6IGFueVxuICAgIGlmICghdGhpcy5vYnNlcnZlcikge1xuICAgICAgcmV0ID0gdGhpcy5oYW5kbGVyKC4uLmFyZ3MpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldCA9IHRoaXMuaGFuZGxlci5hcHBseSh0aGlzLm9ic2VydmVyLCBhcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmV0XG4gIH1cbn1cbiIsImltcG9ydCB7IHVpIH0gZnJvbSAnLi4vLi4vLi4vLi4vdWkvbGF5YU1heFVJJ1xuaW1wb3J0IEJQYWdlIGZyb20gJy4uL0JQYWdlL0JQYWdlJ1xuaW1wb3J0IHsgVmlld0NvbnN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9jb25zdC9WaWV3Q29uc3QnXG5pbXBvcnQgeyBCYXNlTGF5ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL212Yy9sYXllci9CYXNlTGF5ZXInXG5pbXBvcnQgeyBSZWdpc3Rlck1WQywgb3BlblZpZXcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL212Yy9NdmNNZ3InXG5pbXBvcnQgQVBhZ2VDb250cm9sbGVyIGZyb20gJy4vQVBhZ2VDb250cm9sbGVyJ1xuaW1wb3J0IEFQYWdlTW9kZWwgZnJvbSAnLi9BcGFnZU1vZGVsJ1xuaW1wb3J0IEJhc2VUZXN0IGZyb20gJy4uL0Jhc2VUZXN0J1xuQFJlZ2lzdGVyTVZDKEJhc2VMYXllciwgQVBhZ2VDb250cm9sbGVyLCBBUGFnZU1vZGVsKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVBhZ2UgZXh0ZW5kcyB1aS52aWV3LkFQYWdlVUkge1xuICBzdGF0aWMgdmlld0tleSA9IFZpZXdDb25zdC5BUGFnZVxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5idG4ub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCkgPT4ge1xuICAgICAgb3BlblZpZXcoQlBhZ2UpXG4gICAgfSlcbiAgICB0aGlzLmJhc2VCdG4ub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCkgPT4ge1xuICAgICAgb3BlblZpZXcoQmFzZVRlc3QpXG4gICAgfSlcbiAgfVxuICBwdWJsaWMgaW5pdCgpIHtcbiAgICB0aGlzLmNvbnRyb2xsZXIuYWRkTGlzdGVuZXIoXG4gICAgICAnY2hhbmdlJyxcbiAgICAgIGFyZ3MgPT4ge1xuICAgICAgICB0aGlzLmNvbnRlbnRzLnRleHQgPSBhcmdzWzBdXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpXG4gICAgICB9LFxuICAgICAgdGhpcyxcbiAgICApXG4gIH1cbn1cbiIsImltcG9ydCBCYXNlQ29udHJvbGxlciBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL212Yy9jb250cm9sbGVyL0Jhc2VDb250cm9sbGVyJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVBhZ2VDb250cm9sbGVyIGV4dGVuZHMgQmFzZUNvbnRyb2xsZXIge1xuICAvKipcbiAgICpcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgfVxuICBwdWJsaWMgaW5pdCgpIHtcbiAgICBzdXBlci5pbml0KClcbiAgfVxuXG59XG4iLCJpbXBvcnQgQmFzZU1vZGVsIGZyb20gXCIuLi8uLi8uLi8uLi9jb3JlL212Yy9tb2RlbC9CYXNlTW9kZWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVBhZ2VNb2RlbCBleHRlbmRzIEJhc2VNb2RlbHtcbiAgICBcbn0iLCJpbXBvcnQgeyB1aSB9IGZyb20gJy4uLy4uLy4uLy4uL3VpL2xheWFNYXhVSSdcbmltcG9ydCB7IFZpZXdDb25zdCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvY29uc3QvVmlld0NvbnN0J1xuaW1wb3J0IHsgRGlhbG9nTGF5ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL212Yy9sYXllci9EaWFsb2dMYXllcidcbmltcG9ydCBCUGFnZUNvbnRyb2xsZXIgZnJvbSAnLi9CUGFnZUNvbnRyb2xsZXInXG5pbXBvcnQgQlBhZ2VNb2RlbCBmcm9tICcuL0JQYWdlTW9kZWwnXG5pbXBvcnQgeyBSZWdpc3Rlck1WQywgY2xvc2VWaWV3IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9tdmMvTXZjTWdyJ1xuQFJlZ2lzdGVyTVZDKERpYWxvZ0xheWVyLCBCUGFnZUNvbnRyb2xsZXIsIEJQYWdlTW9kZWwpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCUGFnZSBleHRlbmRzIHVpLnZpZXcuQlBhZ2VVSSB7XG4gIHN0YXRpYyB2aWV3S2V5ID0gVmlld0NvbnN0LkJQYWdlXG4gXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgfVxuICBwdWJsaWMgaW5pdCgpIHtcbiAgICB0aGlzLmNsb3NlX2J0bi5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKSA9PiB7XG4gICAgICBjbG9zZVZpZXcodGhpcylcbiAgICB9KVxuICAgIHRoaXMuY2hhbmdlLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcbiAgICAgIHRoaXMuY29udHJvbGxlci5kaXNwYXRjaCgnY2hhbmdlJywgWycjZWUzMzIxJ10pXG4gICAgfSlcbiAgfVxufVxuIiwiaW1wb3J0IEJhc2VDb250cm9sbGVyIGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvbXZjL2NvbnRyb2xsZXIvQmFzZUNvbnRyb2xsZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJQYWdlQ29udHJvbGxlciBleHRlbmRzIEJhc2VDb250cm9sbGVyIHtcbiAgLyoqXG4gICAqXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gIH1cbiAgcHVibGljIGluaXQoKSB7XG4gICAgc3VwZXIuaW5pdCgpXG4gIH1cbn1cbiIsImltcG9ydCBCYXNlTW9kZWwgZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9tdmMvbW9kZWwvQmFzZU1vZGVsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCUGFnZU1vZGVsIGV4dGVuZHMgQmFzZU1vZGVsIHtcbiAgcHVibGljIGNvbG9yOiBzdHJpbmdcbn1cbiIsImltcG9ydCB7IHVpIH0gZnJvbSAnLi4vLi4vLi4vdWkvbGF5YU1heFVJJ1xuaW1wb3J0IHsgSVZpZXcgfSBmcm9tICcuLi8uLi8uLi9jb3JlL212Yy9pbnRlcmZhY2UvSVZpZXcnXG5pbXBvcnQgeyBWaWV3Q29uc3QgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2NvbnN0L1ZpZXdDb25zdCdcbmltcG9ydCB7IEJhc2VMYXllciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvbXZjL2xheWVyL0Jhc2VMYXllcidcbmltcG9ydCBEaWFsb2dUZXN0IGZyb20gJy4vRGlhbG9nVGVzdCdcbmltcG9ydCBWaWV3VGVzdCBmcm9tICcuL1ZpZXdUZXN0J1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9Mb2FkaW5nJ1xuaW1wb3J0IHsgUmVnaXN0ZXJNVkMsIG9wZW5WaWV3LCBjbG9zZVZpZXcgfSBmcm9tICcuLi8uLi8uLi9jb3JlL212Yy9NdmNNZ3InXG5pbXBvcnQgeyBDbGljayB9IGZyb20gJy4uLy4uLy4uL2NvcmUvbXZjL1VJRXZlbnQnXG5AUmVnaXN0ZXJNVkMoQmFzZUxheWVyKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZVRlc3QgZXh0ZW5kcyB1aS52aWV3LkJhc2VUZXN0VUkgaW1wbGVtZW50cyBJVmlldyB7XG4gIHN0YXRpYyB2aWV3S2V5ID0gVmlld0NvbnN0LkJhc2VUZXN0XG4gIHB1YmxpYyBtb3ZlWSA9IGZhbHNlXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnRpbWVyTG9vcCg1MDAsIHRoaXMsICgpID0+IHtcbiAgICAgIHRoaXMudGFuay5pbmRleCA9IHRoaXMudGFuay5pbmRleCA9PT0gNyA/IDQgOiB0aGlzLnRhbmsuaW5kZXggKyAxXG4gICAgfSlcbiAgICB0aGlzLnRpbWVyTG9vcCgyNTAsIHRoaXMsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLm1vdmVZKSB7XG4gICAgICAgIHRoaXMudGFuay5jZW50ZXJZICs9IDFcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGFuay5jZW50ZXJZIC09IDFcbiAgICAgIH1cbiAgICAgIHRoaXMubW92ZVkgPSAhdGhpcy5tb3ZlWVxuICAgIH0pXG5cbiAgICB0aGlzLmRpYWxvZ0J0bi5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKSA9PiB7fSlcbiAgICB0aGlzLnZpZXdCdG4ub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCkgPT4ge1xuICAgICAgb3BlblZpZXcoVmlld1Rlc3QsIDEsIDIpXG4gICAgfSlcbiAgICB0aGlzLmxvYWRpbmdCdG4ub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCkgPT4ge1xuICAgICAgb3BlblZpZXcoTG9hZGluZywgMSwgMiwgMylcbiAgICB9KVxuICAgIHRoaXMuY2xvc2VCdG4ub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCkgPT4ge1xuICAgICAgY2xvc2VWaWV3KHRoaXMpXG4gICAgfSlcbiAgfVxuICBAQ2xpY2soJ2RpYWxvZ0J0bicpXG4gIHByaXZhdGUgdG9kbzEoKSB7XG4gICAgb3BlblZpZXcoRGlhbG9nVGVzdCwgMSwgMiwgMylcbiAgfVxuICBwdWJsaWMgb3BlbkNiKCkge1xuICAgIGNvbnNvbGUubG9nKCdCYXNlVGVzdCBvcGVuJylcbiAgfVxufVxuIiwiaW1wb3J0IHsgdWkgfSBmcm9tICcuLi8uLi8uLi91aS9sYXlhTWF4VUknXG5pbXBvcnQgeyBJVmlldyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvbXZjL2ludGVyZmFjZS9JVmlldydcbmltcG9ydCB7IFZpZXdDb25zdCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvY29uc3QvVmlld0NvbnN0J1xuaW1wb3J0IHsgRGlhbG9nTGF5ZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL212Yy9sYXllci9EaWFsb2dMYXllcidcbmltcG9ydCB7IFJlZ2lzdGVyTVZDLCBjbG9zZVZpZXcgfSBmcm9tICcuLi8uLi8uLi9jb3JlL212Yy9NdmNNZ3InXG5AUmVnaXN0ZXJNVkMoRGlhbG9nTGF5ZXIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2dUZXN0IGV4dGVuZHMgdWkudmlldy5EaWFsb2dUZXN0VUkgaW1wbGVtZW50cyBJVmlldyB7XG4gIHN0YXRpYyB2aWV3S2V5ID0gVmlld0NvbnN0LkRpYWxvZ1Rlc3RcbiAgcHVibGljIG1vdmVZID0gZmFsc2VcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuYWN0aXZlXG4gICAgdGhpcy50aW1lckxvb3AoNTAwLCB0aGlzLCAoKSA9PiB7XG4gICAgICB0aGlzLnRhbmsuaW5kZXggPSB0aGlzLnRhbmsuaW5kZXggPT09IDcgPyA0IDogdGhpcy50YW5rLmluZGV4ICsgMVxuICAgIH0pXG4gICAgdGhpcy50aW1lckxvb3AoMjUwLCB0aGlzLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5tb3ZlWSkge1xuICAgICAgICB0aGlzLnRhbmsuY2VudGVyWSArPSAxXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRhbmsuY2VudGVyWSAtPSAxXG4gICAgICB9XG4gICAgICB0aGlzLm1vdmVZID0gIXRoaXMubW92ZVlcbiAgICB9KVxuICAgIHRoaXMuY2xvc2VCdG4ub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCkgPT4ge1xuICAgICAgY2xvc2VWaWV3KFZpZXdDb25zdC5EaWFsb2dUZXN0KVxuICAgICAgLy8gY29uc29sZS5sb2codGhpcylcbiAgICAgIC8vIExheWEuU2NlbmUuY2xvc2UoJ3ZpZXcvRGlhbG9nVGVzdC5zY2VuZScpXG4gICAgfSlcbiAgfVxuICBwdWJsaWMgb3BlbkNiKC4uLmFyZ3MpIHtcbiAgICBjb25zb2xlLmxvZygnRGlhbG9nVGVzdCBvcGVuJywgYXJncylcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmltZ1snb25Db21wUmVzaXplJ10oKSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgdWkgfSBmcm9tICcuLi8uLi8uLi91aS9sYXlhTWF4VUknXHJcbmltcG9ydCB7IElWaWV3IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvaW50ZXJmYWNlL0lWaWV3J1xyXG5pbXBvcnQgeyBWaWV3Q29uc3QgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2NvbnN0L1ZpZXdDb25zdCdcclxuaW1wb3J0IHsgQmFzZUxheWVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvbGF5ZXIvQmFzZUxheWVyJ1xyXG5pbXBvcnQgeyBSZWdpc3Rlck1WQywgY2xvc2VWaWV3IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvTXZjTWdyJ1xyXG5AUmVnaXN0ZXJNVkMoQmFzZUxheWVyKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgdWkudmlldy5Mb2FkaW5nVUkgaW1wbGVtZW50cyBJVmlldyB7XHJcbiAgc3RhdGljIHZpZXdLZXkgPSBWaWV3Q29uc3QuTG9hZGluZ1xyXG4gIHB1YmxpYyBtb3ZlWSA9IGZhbHNlXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnRpbWVyTG9vcCg1MDAsIHRoaXMsICgpID0+IHtcclxuICAgICAgdGhpcy50YW5rLmluZGV4ID0gdGhpcy50YW5rLmluZGV4ID09PSA3ID8gNCA6IHRoaXMudGFuay5pbmRleCArIDFcclxuICAgIH0pXHJcbiAgICB0aGlzLnRpbWVyTG9vcCgyNTAsIHRoaXMsICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMubW92ZVkpIHtcclxuICAgICAgICB0aGlzLnRhbmsuY2VudGVyWSArPSAxXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50YW5rLmNlbnRlclkgLT0gMVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubW92ZVkgPSAhdGhpcy5tb3ZlWVxyXG4gICAgfSlcclxuICAgIHRoaXMuYnRuX2Nsb3NlLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcclxuICAgICAgY2xvc2VWaWV3KHRoaXMpXHJcbiAgICB9KVxyXG4gIH1cclxuICBwdWJsaWMgb3BlbkNiKC4uLmFyZ3MpIHtcclxuICAgIGNvbnNvbGUubG9nKCdMb2FkaW5nIG9wZW4nLCBhcmdzKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyB1aSB9IGZyb20gJy4uLy4uLy4uL3VpL2xheWFNYXhVSSdcbmltcG9ydCB7IElWaWV3IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvaW50ZXJmYWNlL0lWaWV3J1xuaW1wb3J0IHsgVmlld0NvbnN0IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9jb25zdC9WaWV3Q29uc3QnXG5pbXBvcnQgeyBWaWV3TGF5ZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL212Yy9sYXllci9WaWV3TGF5ZXInXG5pbXBvcnQgVmlld1Rlc3QxIGZyb20gJy4vVmlld1Rlc3QxJ1xuaW1wb3J0IHsgUmVnaXN0ZXJNVkMsIGNsb3NlVmlldywgb3BlblZpZXcgfSBmcm9tICcuLi8uLi8uLi9jb3JlL212Yy9NdmNNZ3InXG5AUmVnaXN0ZXJNVkMoVmlld0xheWVyKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld1Rlc3QgZXh0ZW5kcyB1aS52aWV3LlZpZXdUZXN0VUkgaW1wbGVtZW50cyBJVmlldyB7XG4gIHN0YXRpYyB2aWV3S2V5ID0gVmlld0NvbnN0LlZpZXdUZXN0XG4gIHB1YmxpYyBtb3ZlWSA9IGZhbHNlXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcblxuICAgIHRoaXMudGltZXJMb29wKDUwMCwgdGhpcywgKCkgPT4ge1xuICAgICAgdGhpcy50YW5rLmluZGV4ID0gdGhpcy50YW5rLmluZGV4ID09PSA3ID8gNCA6IHRoaXMudGFuay5pbmRleCArIDFcbiAgICB9KVxuICAgIHRoaXMudGltZXJMb29wKDI1MCwgdGhpcywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMubW92ZVkpIHtcbiAgICAgICAgdGhpcy50YW5rLmNlbnRlclkgKz0gMVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50YW5rLmNlbnRlclkgLT0gMVxuICAgICAgfVxuICAgICAgdGhpcy5tb3ZlWSA9ICF0aGlzLm1vdmVZXG4gICAgfSlcbiAgICB0aGlzLmNsb3NlQnRuLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcbiAgICAgIGNsb3NlVmlldyh0aGlzKVxuICAgIH0pXG4gICAgdGhpcy52aWV3QnRuLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcbiAgICAgIG9wZW5WaWV3KFZpZXdUZXN0MSlcbiAgICB9KVxuICB9XG4gIHB1YmxpYyBvcGVuQ2IoKSB7XG4gICAgY29uc29sZS5sb2coJ1ZpZXdUZXN0IG9wZW4nKVxuICB9XG59XG4iLCJpbXBvcnQgeyB1aSB9IGZyb20gJy4uLy4uLy4uL3VpL2xheWFNYXhVSSdcbmltcG9ydCB7IElWaWV3IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvaW50ZXJmYWNlL0lWaWV3J1xuaW1wb3J0IHsgVmlld0NvbnN0IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9jb25zdC9WaWV3Q29uc3QnXG5pbXBvcnQgeyBWaWV3TGF5ZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL212Yy9sYXllci9WaWV3TGF5ZXInXG5pbXBvcnQgeyBSZWdpc3Rlck1WQywgY2xvc2VWaWV3IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvTXZjTWdyJ1xuQFJlZ2lzdGVyTVZDKFZpZXdMYXllcilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdUZXN0MSBleHRlbmRzIHVpLnZpZXcuVmlld1Rlc3QxVUkgaW1wbGVtZW50cyBJVmlldyB7XG4gIHN0YXRpYyB2aWV3S2V5ID0gVmlld0NvbnN0LlZpZXdUZXN0MVxuICBwdWJsaWMgbW92ZVkgPSBmYWxzZVxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLnRpbWVyTG9vcCg1MDAsIHRoaXMsICgpID0+IHtcbiAgICAgIHRoaXMudGFuay5pbmRleCA9IHRoaXMudGFuay5pbmRleCA9PT0gNyA/IDQgOiB0aGlzLnRhbmsuaW5kZXggKyAxXG4gICAgfSlcbiAgICB0aGlzLnRpbWVyTG9vcCgyNTAsIHRoaXMsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLm1vdmVZKSB7XG4gICAgICAgIHRoaXMudGFuay5jZW50ZXJZICs9IDFcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGFuay5jZW50ZXJZIC09IDFcbiAgICAgIH1cbiAgICAgIHRoaXMubW92ZVkgPSAhdGhpcy5tb3ZlWVxuICAgIH0pXG4gICAgdGhpcy5jbG9zZUJ0bi5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKSA9PiB7XG4gICAgICBjbG9zZVZpZXcodGhpcylcbiAgICB9KVxuICB9XG4gIHB1YmxpYyBvcGVuQ2IoKSB7XG4gICAgY29uc29sZS5sb2coJ1ZpZXdUZXN0IG9wZW4nKVxuICB9XG59XG4iLCJpbXBvcnQgeyBTaW5nbGV0b24gfSBmcm9tICcuLi8uLi9jb3JlL2Jhc2UvU2luZ2xldG9uJ1xuaW1wb3J0IE5ldFJlcXVlc3QgZnJvbSAnLi9OZXRSZXF1ZXN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTmV0IGV4dGVuZHMgU2luZ2xldG9uIHtcbiAgcHJpdmF0ZSBzZXJ2ZXJVcmw6IHN0cmluZ1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gIH1cbiAgcHVibGljIGluaXRTZXJ2ZXIodXJsOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNlcnZlclVybCA9IHVybFxuICB9XG4gIHB1YmxpYyBzZW5kKGFwaTogc3RyaW5nLCBib2R5VmFyaWFibGVzOiBhbnkgPSBudWxsLCB1cmxWYXJpYWJsZXM6IGFueSA9ICcnLCBtZXRob2Q6IHN0cmluZyA9ICdwb3N0JywgcmVzcG9uc2VUeXBlOiBzdHJpbmcgPSAnanNvbicsIGhlYWRlcj86IGFueVtdKSB7XG4gICAgdGhpcy5zZW5kQnlVcmwodGhpcy5zZXJ2ZXJVcmwsIGFwaSwgYm9keVZhcmlhYmxlcywgdXJsVmFyaWFibGVzLCBtZXRob2QsIHJlc3BvbnNlVHlwZSwgaGVhZGVyKVxuICB9XG4gIHB1YmxpYyBzZW5kUHJvbWlzZShhcGk6IHN0cmluZywgYm9keVZhcmlhYmxlczogYW55ID0gbnVsbCwgdXJsVmFyaWFibGVzOiBhbnkgPSAnJywgbWV0aG9kOiBzdHJpbmcgPSAncG9zdCcsIHJlc3BvbnNlVHlwZTogc3RyaW5nID0gJ2pzb24nLCBoZWFkZXI/OiBhbnlbXSkge1xuICAgIHRoaXMuc2VuZFByb21pc2VCeVVybCh0aGlzLnNlcnZlclVybCwgYXBpLCBib2R5VmFyaWFibGVzLCB1cmxWYXJpYWJsZXMsIG1ldGhvZCwgcmVzcG9uc2VUeXBlLCBoZWFkZXIpXG4gIH1cbiAgcHVibGljIHNlbmRCeVVybCh1cmw6IHN0cmluZywgYXBpOiBzdHJpbmcsIGJvZHlWYXJpYWJsZXM6IGFueSA9IG51bGwsIHVybFZhcmlhYmxlczogYW55ID0gJycsIG1ldGhvZDogc3RyaW5nID0gJ3Bvc3QnLCByZXNwb25zZVR5cGU6IHN0cmluZyA9ICdqc29uJywgaGVhZGVyPzogYW55W10pIHtcbiAgICBsZXQgcmVxID0gTmV0UmVxdWVzdC5DcmVhdGUoYXBpLCB1cmwgKyBhcGkgKyB1cmxWYXJpYWJsZXMsIGJvZHlWYXJpYWJsZXMsIG1ldGhvZCwgcmVzcG9uc2VUeXBlLCBoZWFkZXIpXG4gICAgcmVxLlNlbmQoKVxuICB9XG4gIHB1YmxpYyBhc3luYyBzZW5kUHJvbWlzZUJ5VXJsKHVybDogc3RyaW5nLCBhcGk6IHN0cmluZywgYm9keVZhcmlhYmxlczogYW55ID0gbnVsbCwgdXJsVmFyaWFibGVzOiBhbnkgPSAnJywgbWV0aG9kOiBzdHJpbmcgPSAncG9zdCcsIHJlc3BvbnNlVHlwZTogc3RyaW5nID0gJ2pzb24nLCBoZWFkZXI/OiBhbnlbXSkge1xuICAgIGxldCByZXEgPSBOZXRSZXF1ZXN0LkNyZWF0ZShhcGksIHVybCArIGFwaSArIHVybFZhcmlhYmxlcywgYm9keVZhcmlhYmxlcywgbWV0aG9kLCByZXNwb25zZVR5cGUsIGhlYWRlcilcbiAgICBjb25zdCBnZXQgPSBhd2FpdCByZXEuU2VuZFByb21pc2UoKVxuICAgIHJldHVybiBnZXRcbiAgfVxufVxuIiwiaW1wb3J0IEdhbWVBcHAgZnJvbSAnLi4vLi4vY29yZS9nYW1lL0dhbWVBcHAnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ldFJlcXVlc3Qge1xuICBwcml2YXRlIHJlcTogbGF5YS5uZXQuSHR0cFJlcXVlc3RcbiAgcHJpdmF0ZSB1cmw6IHN0cmluZ1xuICBwcml2YXRlIGRhdGE6IGFueVxuICBwcml2YXRlIG1ldGhvZDogc3RyaW5nXG4gIHByaXZhdGUgcmVzcG9uc2VUeXBlOiBzdHJpbmdcbiAgcHJpdmF0ZSBoZWFkZXJzOiBhbnlbXVxuICBwcml2YXRlIGFwaVBhdGg6IHN0cmluZ1xuICBwcml2YXRlIG1lc3NhZ2VLZXk6IGFueVxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgIGxldCByZXEgPSBuZXcgbGF5YS5uZXQuSHR0cFJlcXVlc3QoKVxuICAgIHRoaXMucmVxID0gcmVxXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIENyZWF0ZShhcGlQYXRoOiBzdHJpbmcsIHVybDogc3RyaW5nLCBkYXRhPzogYW55LCBtZXRob2Q/OiBzdHJpbmcsIHJlc3BvbnNlVHlwZT86IHN0cmluZywgaGVhZGVycz86IGFueVtdLCBtZXNzYWdlS2V5Pyk6IE5ldFJlcXVlc3Qge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IE5ldFJlcXVlc3QoKVxuICAgIHJlcXVlc3QudXJsID0gdXJsXG4gICAgcmVxdWVzdC5kYXRhID0gZGF0YVxuICAgIHJlcXVlc3QubWV0aG9kID0gbWV0aG9kXG4gICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSByZXNwb25zZVR5cGVcbiAgICByZXF1ZXN0LmhlYWRlcnMgPSBoZWFkZXJzXG4gICAgcmVxdWVzdC5hcGlQYXRoID0gYXBpUGF0aFxuICAgIHJlcXVlc3QubWVzc2FnZUtleSA9IG1lc3NhZ2VLZXlcbiAgICByZXR1cm4gcmVxdWVzdFxuICB9XG4gIHB1YmxpYyBTZW5kKCkge1xuICAgIGxldCByZXEgPSB0aGlzLnJlcVxuICAgIGxldCB1cmwgPSB0aGlzLnVybFxuICAgIGxldCBkYXRhID0gdGhpcy5kYXRhXG4gICAgbGV0IG1ldGhvZCA9IHRoaXMubWV0aG9kXG4gICAgbGV0IHJlc3BvbnNlVHlwZSA9IHRoaXMucmVzcG9uc2VUeXBlXG4gICAgbGV0IGhlYWRlcnMgPSB0aGlzLmhlYWRlcnMgfHwgWydDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbiddXG4gICAgcmVxLm9uY2UobGF5YS5ldmVudHMuRXZlbnQuQ09NUExFVEUsIHRoaXMsIHRoaXMuY29tcGxldGVIYW5kbGVyKVxuICAgIHJlcS5vbmNlKGxheWEuZXZlbnRzLkV2ZW50LkVSUk9SLCB0aGlzLCB0aGlzLmVycm9ySGFuZGxlcilcbiAgICByZXEuc2VuZCh1cmwsIGRhdGEsIG1ldGhvZCwgcmVzcG9uc2VUeXBlLCBoZWFkZXJzKVxuICB9XG4gIHB1YmxpYyBhc3luYyBTZW5kUHJvbWlzZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIGxldCByZXEgPSB0aGlzLnJlcVxuICAgIGxldCB1cmwgPSB0aGlzLnVybFxuICAgIGxldCBkYXRhID0gdGhpcy5kYXRhXG4gICAgbGV0IG1ldGhvZCA9IHRoaXMubWV0aG9kXG4gICAgbGV0IHJlc3BvbnNlVHlwZSA9IHRoaXMucmVzcG9uc2VUeXBlXG4gICAgbGV0IGhlYWRlcnMgPSB0aGlzLmhlYWRlcnMgfHwgWydDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbiddXG4gICAgbGV0IF9wb3N0ID0gZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBsZXQgX3Jlc29sdmUgPSBmdW5jdGlvbihvYmo6IGFueSkge1xuICAgICAgICByZXNvbHZlKG9iailcbiAgICAgIH1cbiAgICAgIHJlcS5vbmNlKGxheWEuZXZlbnRzLkV2ZW50LkNPTVBMRVRFLCB0aGlzLCBfcmVzb2x2ZSlcbiAgICAgIHJlcS5vbmNlKGxheWEuZXZlbnRzLkV2ZW50LkVSUk9SLCB0aGlzLCBfcmVzb2x2ZSlcbiAgICAgIHJlcS5zZW5kKHVybCwgZGF0YSwgbWV0aG9kLCByZXNwb25zZVR5cGUsIGhlYWRlcnMpXG4gICAgfVxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KF9wb3N0KVxuICB9XG4gIHByaXZhdGUgY29tcGxldGVIYW5kbGVyKGRhdGE6IGFueSkge1xuICAgIGlmICh0aGlzLm1lc3NhZ2VLZXkpIHtcbiAgICAgIEdhbWVBcHAuZGlzcGF0Y2hlci5TZW5kTXNnKHRoaXMubWVzc2FnZUtleSwgZGF0YSlcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBlcnJvckhhbmRsZXIoZTogYW55KSB7XG4gICAgY29uc29sZS5lcnJvcih0aGlzLm1lc3NhZ2VLZXksIGUpXG4gIH1cbiAgcHJpdmF0ZSBwcm9jZXNzSGFuZGxlcihkYXRhOiBhbnkpIHt9XG59XG4iLCJpbXBvcnQgeyBTaW5nbGV0b24gfSBmcm9tICcuLi9jb3JlL2Jhc2UvU2luZ2xldG9uJ1xuaW1wb3J0IHsgT2JzZXJ2ZXIgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2UvZGlzcGF0Y2hlci9PYnNlcnZlcidcbmltcG9ydCAqIGFzIGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnXG4vKlxuICAgc29ja2V0LmluaXQoLi4uKVxuICAgc29ja2V0LmNvbm5lY3QoKVxuKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvY2tldCBleHRlbmRzIFNpbmdsZXRvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9ic2VydmVycyA9IHt9XG4gIH1cbiAgcHJpdmF0ZSBub25jZT0xXG4gIHByaXZhdGUgaXBBZGRyZXNzXG4gIHByaXZhdGUgc29ja2V0OiBhbnlcbiAgcHJpdmF0ZSBvYnNlcnZlcnM6IGFueVxuICBwcml2YXRlIHRpbWVTdGFtcFxuICAvL2hhbmRsZXItLS0tXG4gIHByaXZhdGUgY29ubmVjdFN1Y2Nlc3NDYWxsYmFja1xuICBwcml2YXRlIGNvbm5lY3RGYWlsZWRDYWxsYmFja1xuICBwcml2YXRlIGhlYXJ0YmVhdEZhaWxlZENhbGxiYWNrXG4gIHByaXZhdGUgZXZlbnQgPSAnbWVzc2FnZSdcbiAgcHVibGljIGluaXQoaXAsIHN1Y2Nlc3NDYWxsYmFjaywgZmFpbGVkQ2FsbGJhY2ssIGhlYXJ0YmVhdEZhaWxlZENhbGxiYWNrKSB7XG4gICAgdGhpcy5pcEFkZHJlc3MgPSBpcFxuICAgIHRoaXMuY29ubmVjdFN1Y2Nlc3NDYWxsYmFjayA9IHN1Y2Nlc3NDYWxsYmFja1xuICAgIHRoaXMuY29ubmVjdEZhaWxlZENhbGxiYWNrID0gZmFpbGVkQ2FsbGJhY2tcbiAgICB0aGlzLmhlYXJ0YmVhdEZhaWxlZENhbGxiYWNrID0gaGVhcnRiZWF0RmFpbGVkQ2FsbGJhY2tcbiAgfVxuICBwdWJsaWMgY29ubmVjdCgpIHtcbiAgICB0aGlzLnNvY2tldCA9IGlvKHRoaXMuaXBBZGRyZXNzKVxuICAgIHRoaXMuc29ja2V0Lm9uKCdjb25uZWN0JywgKCkgPT4ge1xuICAgICAgdGhpcy50aW1lU3RhbXAgPSBEYXRlLm5vdygpXG4gICAgICBjb25zb2xlLmxvZygnd2Vic29ja2V0IGNvbm5lY3QuLi4nKVxuICAgICAgdGhpcy5jb25uZWN0U3VjY2VzcygpXG4gICAgfSlcbiAgICB0aGlzLnNvY2tldC5vbih0aGlzLmV2ZW50LCBkYXRhID0+IHtcbiAgICAgIHRoaXMudGltZVN0YW1wID0gRGF0ZS5ub3coKVxuICAgICAgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgICB0aGlzLnJlY2VpdmVNZXNzYWdlKEpTT04ucGFyc2UoZGF0YSkpXG4gICAgfSlcbiAgICB0aGlzLnNvY2tldC5vbignZGlzY29ubmVjdCcsIHRoaXMub25EaXNjb25uZWN0KVxuICB9XG4gIHB1YmxpYyBkaXNjb25uZWN0KCkge1xuICAgIHRoaXMuc29ja2V0LmRpc2Nvbm5lY3QoKVxuICB9XG4gIHByaXZhdGUgb25EaXNjb25uZWN0KCkge1xuICAgIGlmICh0aGlzLmNvbm5lY3RGYWlsZWRDYWxsYmFjaykgdGhpcy5jb25uZWN0RmFpbGVkQ2FsbGJhY2soKVxuICB9XG4gIHByaXZhdGUgY29ubmVjdFN1Y2Nlc3MoKSB7XG4gICAgaWYgKHRoaXMuY29ubmVjdFN1Y2Nlc3NDYWxsYmFjaykgdGhpcy5jb25uZWN0U3VjY2Vzc0NhbGxiYWNrKClcbiAgICB0aGlzLnNlbmQoJ2xvZ2luJywge30sICdDMlNfbG9naW4nKVxuICAgIHRoaXMuc3RhcnRIZWFydEJlYXQoKVxuICB9XG4gIHByaXZhdGUgc3RhcnRIZWFydEJlYXQoKSB7XG4gICAgTGF5YS50aW1lci5sb29wKDUwMDAsIHRoaXMsICgpID0+IHtcbiAgICAgIHRoaXMuc2VuZEhlYXJ0QmVhdCgpXG4gICAgfSlcbiAgfVxuICBwcml2YXRlIHNlbmRIZWFydEJlYXQoKSB7XG4gICAgdmFyIHYgPSBEYXRlLm5vdygpIC0gdGhpcy50aW1lU3RhbXBcblxuICAgIGlmICh2ID49IDMwMDAwKSB7XG4gICAgICBpZiAodGhpcy5oZWFydGJlYXRGYWlsZWRDYWxsYmFjaykgdGhpcy5oZWFydGJlYXRGYWlsZWRDYWxsYmFjaygpXG4gICAgfVxuICAgIHRoaXMuc2VuZCgnaGVhcnRiZWF0Jywge30sICdDMlNfaGVhcnRiZWF0JylcbiAgfVxuICBwcml2YXRlIHJlY2VpdmVNZXNzYWdlKGRhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhkYXRhLmhlYWRlcnMubm9uY2UpXG4gICAgaWYgKGRhdGEuaGVhZGVycy5ub25jZSAmJiBkYXRhLmhlYWRlcnMubm9uY2Uuc3RhcnRzV2l0aCgnUzJDXycpKSB7XG4gICAgICBmb3IgKGxldCBrIGluIHRoaXMub2JzZXJ2ZXJzKSB7XG4gICAgICAgIGlmIChkYXRhLmhlYWRlcnMuZnVuY19uYW1lID09IGspIHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVyc1trXS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5SZWN2TXNnKGRhdGEpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBrIGluIHRoaXMub2JzZXJ2ZXJzKSB7XG4gICAgICAgIGlmIChkYXRhLmhlYWRlcnMubm9uY2UgPT0gaykge1xuICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzW2tdLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LlJlY3ZNc2coZGF0YSlcbiAgICAgICAgICB9KVxuICAgICAgICAgIGRlbGV0ZSB0aGlzLm9ic2VydmVyc1trXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHB1YmxpYyBzZW5kTWVzc2FnZShmdW5jTmFtZSwgb2JzZXJ2ZXIsIGRhdGEsIGNhbGxiYWNrID0gbnVsbCkge1xuICAgIHZhciBub25jZSA9ICdDMlNfJyArIGZ1bmNOYW1lICsgdGhpcy5ub25jZSsrXG4gICAgaWYgKCF0aGlzLm9ic2VydmVyc1tub25jZV0pIHRoaXMub2JzZXJ2ZXJzW25vbmNlXSA9IFtdXG4gICAgdGhpcy5vYnNlcnZlcnNbbm9uY2VdLnB1c2gobmV3IE9ic2VydmVyKG5vbmNlLCBvYnNlcnZlciwgY2FsbGJhY2spKVxuICAgIHRoaXMuc2VuZChmdW5jTmFtZSwgZGF0YSwgbm9uY2UpXG4gIH1cbiAgcHVibGljIG9ic2VydmVyTWVzc2FnZShmdW5jTmFtZSwgb2JzZXJ2ZXIsIGNhbGxiYWNrID0gbnVsbCkge1xuICAgIHZhciBrZXkgPSBmdW5jTmFtZVxuICAgIGlmICghdGhpcy5vYnNlcnZlcnNba2V5XSkgdGhpcy5vYnNlcnZlcnNba2V5XSA9IFtdXG4gICAgdmFyIG9icyA9IG5ldyBPYnNlcnZlcihrZXksIG9ic2VydmVyLCBjYWxsYmFjaylcbiAgICB0aGlzLm9ic2VydmVyc1trZXldLnB1c2gob2JzKVxuICAgIHJldHVybiBvYnNcbiAgfVxuICBwdWJsaWMgcmVtb3ZlKG9iczogT2JzZXJ2ZXIpIHtcbiAgICBpZiAob2JzID09IG51bGwpIHJldHVyblxuICAgIGxldCBhcnIgPSB0aGlzLm9ic2VydmVyc1tvYnMudG9waWNdXG4gICAgaWYgKCFhcnIpIHJldHVybiBudWxsXG4gICAgbGV0IGluZDogbnVtYmVyID0gYXJyLmluZGV4T2Yob2JzKVxuICAgIGlmIChpbmQgPCAwKSByZXR1cm4gbnVsbFxuICAgIGFyci5zcGxpY2UoaW5kLCAxKVxuICAgIGlmIChhcnIubGVuZ3RoID09IDApIGRlbGV0ZSB0aGlzLm9ic2VydmVyc1tvYnMudG9waWNdXG4gICAgcmV0dXJuIG9ic1xuICB9XG4gIHByaXZhdGUgc2VuZChmdW5jTmFtZSwgZGF0YSwgbm9uY2UpIHtcbiAgICB2YXIgcGFyYW0gPSB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIHVpZDogJ2hlanVuamllJyxcbiAgICAgICAgZnVuY19uYW1lOiBmdW5jTmFtZSxcbiAgICAgICAgbm9uY2U6IG5vbmNlLFxuICAgICAgfSxcbiAgICAgIHBhcmFtczogZGF0YSxcbiAgICB9XG4gICAgdGhpcy50aW1lU3RhbXAgPSBEYXRlLm5vdygpXG4gICAgdGhpcy5zb2NrZXQuZW1pdCh0aGlzLmV2ZW50LCBKU09OLnN0cmluZ2lmeShwYXJhbSkpXG4gIH1cbn1cbiIsImltcG9ydCB7IHVpIH0gZnJvbSAnLi4vdWkvbGF5YU1heFVJJ1xyXG5pbXBvcnQgQVBhZ2UgZnJvbSAnLi4vZ2FtZS91aS92aWV3L0FQYWdlL0FQYWdlJ1xyXG5pbXBvcnQgeyBzZXRVSVJvb3QsIG9wZW5WaWV3IH0gZnJvbSAnLi4vY29yZS9tdmMvTXZjTWdyJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluU2NlbmUgZXh0ZW5kcyB1aS5zY2VuZS5NYWluU2NlbmVVSSB7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgLy8gR2FtZUFwcC5pbml0KHRoaXMpXHJcbiAgICBjb25zdCBVSSA9IG5ldyBMYXlhLlNwcml0ZSgpXHJcbiAgICBVSS5uYW1lID0gJ1VJJ1xyXG4gICAgVUkud2lkdGggPSBMYXlhLnN0YWdlLndpZHRoXHJcbiAgICBVSS5oZWlnaHQgPSBMYXlhLnN0YWdlLmhlaWdodFxyXG4gICAgTGF5YS5zdGFnZS5hZGRDaGlsZChVSSlcclxuICAgIHNldFVJUm9vdChVSSlcclxuXHJcbiAgICBvcGVuVmlldyhBUGFnZSlcclxuICB9XHJcbiAgb25PcGVuZWQoKSB7fVxyXG59XHJcbiIsIi8qKlRoaXMgY2xhc3MgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgTGF5YUFpcklERSwgcGxlYXNlIGRvIG5vdCBtYWtlIGFueSBtb2RpZmljYXRpb25zLiAqL1xuaW1wb3J0IFZpZXc9TGF5YS5WaWV3O1xuaW1wb3J0IERpYWxvZz1MYXlhLkRpYWxvZztcbmltcG9ydCBTY2VuZT1MYXlhLlNjZW5lO1xuaW1wb3J0ICogYXMgdiBmcm9tIFwiLi4vY29yZS9tdmMvdmlldy9CYXNlVmlld1wiO1xuaW1wb3J0IEJhc2VWaWV3ID12LktVSS5CYXNlVmlld1xudmFyIFJFRzogRnVuY3Rpb24gPSBMYXlhLkNsYXNzVXRpbHMucmVnQ2xhc3M7XG5leHBvcnQgbW9kdWxlIHVpLnNjZW5lIHtcclxuICAgIGV4cG9ydCBjbGFzcyBNYWluU2NlbmVVSSBleHRlbmRzIFNjZW5lIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFNjZW5lKFwic2NlbmUvTWFpblNjZW5lXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFJFRyhcInVpLnNjZW5lLk1haW5TY2VuZVVJXCIsTWFpblNjZW5lVUkpO1xyXG59XHJcbmV4cG9ydCBtb2R1bGUgdWkudmlldyB7XHJcbiAgICBleHBvcnQgY2xhc3MgQVBhZ2VVSSBleHRlbmRzIEJhc2VWaWV3IHtcclxuXHRcdHB1YmxpYyBidG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIGNvbnRlbnRzOkxheWEuTGFiZWw7XG5cdFx0cHVibGljIGJhc2VCdG46TGF5YS5CdXR0b247XG4gICAgICAgIHB1YmxpYyBzdGF0aWMgIHVpVmlldzphbnkgPXtcInR5cGVcIjpcIkJhc2VWaWV3XCIsXCJwcm9wc1wiOntcIndpZHRoXCI6NjQwLFwiaGVpZ2h0XCI6MTEzNn0sXCJjb21wSWRcIjoyLFwiY2hpbGRcIjpbe1widHlwZVwiOlwiUmVjdFwiLFwicHJvcHNcIjp7XCJ3aWR0aFwiOjY0MCxcIm5hbWVcIjpcInJcIixcImxpbmVXaWR0aFwiOjEsXCJoZWlnaHRcIjoxMTM2LFwiZmlsbENvbG9yXCI6XCIjZmJiYmJiXCJ9LFwiY29tcElkXCI6N30se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjo1NTUsXCJ4XCI6MjA4LFwid2lkdGhcIjoyMDAsXCJ2YXJcIjpcImJ0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiR29UbyBCUGFnZVwiLFwiaGVpZ2h0XCI6NTB9LFwiY29tcElkXCI6OH0se1widHlwZVwiOlwiTGFiZWxcIixcInByb3BzXCI6e1wieVwiOjQxLFwieFwiOjM5OCxcIndpZHRoXCI6MjAxLFwidmFyXCI6XCJjb250ZW50c1wiLFwidmFsaWduXCI6XCJtaWRkbGVcIixcInRleHRcIjpcInNzc3NcIixcImhlaWdodFwiOjUwMCxcImZvbnRTaXplXCI6NDAsXCJhbGlnblwiOlwiY2VudGVyXCJ9LFwiY29tcElkXCI6MTR9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6NjcwLFwieFwiOjIwOCxcIndpZHRoXCI6MjAwLFwidmFyXCI6XCJiYXNlQnRuXCIsXCJza2luXCI6XCJjb21wL2J1dHRvbi5wbmdcIixcImxhYmVsXCI6XCJHb1RvIEJhc2VcIixcImhlaWdodFwiOjUwfSxcImNvbXBJZFwiOjE1fV0sXCJsb2FkTGlzdFwiOltcImNvbXAvYnV0dG9uLnBuZ1wiXSxcImxvYWRMaXN0M0RcIjpbXX07XHJcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVZpZXcoQVBhZ2VVSS51aVZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFJFRyhcInVpLnZpZXcuQVBhZ2VVSVwiLEFQYWdlVUkpO1xyXG4gICAgZXhwb3J0IGNsYXNzIEJhc2VUZXN0VUkgZXh0ZW5kcyBWaWV3IHtcclxuXHRcdHB1YmxpYyB0YW5rOkxheWEuQ2xpcDtcblx0XHRwdWJsaWMgY2xvc2VCdG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIGRpYWxvZ0J0bjpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgbG9hZGluZ0J0bjpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgdmlld0J0bjpMYXlhLkJ1dHRvbjtcbiAgICAgICAgcHVibGljIHN0YXRpYyAgdWlWaWV3OmFueSA9e1widHlwZVwiOlwiVmlld1wiLFwicHJvcHNcIjp7XCJ3aWR0aFwiOjY0MCxcImhlaWdodFwiOjExMzZ9LFwiY29tcElkXCI6MixcImNoaWxkXCI6W3tcInR5cGVcIjpcIkltYWdlXCIsXCJwcm9wc1wiOntcInlcIjowLFwieFwiOjAsXCJ0b3BcIjowLFwic2tpblwiOlwiY29tcC9pbWFnZS5wbmdcIixcInJpZ2h0XCI6MCxcImxlZnRcIjowLFwiYm90dG9tXCI6MH0sXCJjb21wSWRcIjo4fSx7XCJ0eXBlXCI6XCJDbGlwXCIsXCJwcm9wc1wiOntcInlcIjowLFwieFwiOjAsXCJ2YXJcIjpcInRhbmtcIixcInNraW5cIjpcIkNoYXJhY3RlcnMvVGFua184LnBuZ1wiLFwiaW5kZXhcIjo0LFwiY2xpcFlcIjo0LFwiY2xpcFhcIjo0LFwiY2VudGVyWVwiOi0xLFwiY2VudGVyWFwiOjB9LFwiY29tcElkXCI6M30se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjozMjcsXCJ4XCI6MjgyLFwidmFyXCI6XCJjbG9zZUJ0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiY2xvc2VcIn0sXCJjb21wSWRcIjo0fSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjI1MixcInhcIjo0NzIsXCJ2YXJcIjpcImRpYWxvZ0J0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiZGlhbG9nXCJ9LFwiY29tcElkXCI6NX0se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjozMDQsXCJ4XCI6NDcyLFwidmFyXCI6XCJsb2FkaW5nQnRuXCIsXCJza2luXCI6XCJjb21wL2J1dHRvbi5wbmdcIixcImxhYmVsXCI6XCJiYXNlXCJ9LFwiY29tcElkXCI6Nn0se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjozNjIsXCJ4XCI6NDcyLFwidmFyXCI6XCJ2aWV3QnRuXCIsXCJza2luXCI6XCJjb21wL2J1dHRvbi5wbmdcIixcImxhYmVsXCI6XCJ2aWV3XCJ9LFwiY29tcElkXCI6N31dLFwibG9hZExpc3RcIjpbXCJjb21wL2ltYWdlLnBuZ1wiLFwiQ2hhcmFjdGVycy9UYW5rXzgucG5nXCIsXCJjb21wL2J1dHRvbi5wbmdcIl0sXCJsb2FkTGlzdDNEXCI6W119O1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVWaWV3KEJhc2VUZXN0VUkudWlWaWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSRUcoXCJ1aS52aWV3LkJhc2VUZXN0VUlcIixCYXNlVGVzdFVJKTtcclxuICAgIGV4cG9ydCBjbGFzcyBCUGFnZVVJIGV4dGVuZHMgQmFzZVZpZXcge1xyXG5cdFx0cHVibGljIGNoYW5nZTpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgY2xvc2VfYnRuOkxheWEuQnV0dG9uO1xuICAgICAgICBwdWJsaWMgc3RhdGljICB1aVZpZXc6YW55ID17XCJ0eXBlXCI6XCJCYXNlVmlld1wiLFwicHJvcHNcIjp7XCJ3aWR0aFwiOjMwMCxcImhlaWdodFwiOjExMzZ9LFwiY29tcElkXCI6MixcImNoaWxkXCI6W3tcInR5cGVcIjpcIlJlY3RcIixcInByb3BzXCI6e1wid2lkdGhcIjozMDAsXCJsaW5lV2lkdGhcIjoxLFwiaGVpZ2h0XCI6MTEzNixcImZpbGxDb2xvclwiOlwiI2NkZjlhNFwifSxcImNvbXBJZFwiOjN9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6NTM0LFwieFwiOjU5LFwid2lkdGhcIjoyMDAsXCJ2YXJcIjpcImNoYW5nZVwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiQ2hhbmdlQVBhZ2VcIixcImhlaWdodFwiOjUwfSxcImNvbXBJZFwiOjR9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6NjQ0LFwieFwiOjU5LFwid2lkdGhcIjoyMDAsXCJ2YXJcIjpcImNsb3NlX2J0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiQ2xvc2VcIixcImhlaWdodFwiOjUwfSxcImNvbXBJZFwiOjV9XSxcImxvYWRMaXN0XCI6W1wiY29tcC9idXR0b24ucG5nXCJdLFwibG9hZExpc3QzRFwiOltdfTtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVmlldyhCUGFnZVVJLnVpVmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUkVHKFwidWkudmlldy5CUGFnZVVJXCIsQlBhZ2VVSSk7XHJcbiAgICBleHBvcnQgY2xhc3MgRGlhbG9nVGVzdFVJIGV4dGVuZHMgVmlldyB7XHJcblx0XHRwdWJsaWMgYm94OkxheWEuQm94O1xuXHRcdHB1YmxpYyB0YW5rOkxheWEuQ2xpcDtcblx0XHRwdWJsaWMgY2xvc2VCdG46TGF5YS5CdXR0b247XG4gICAgICAgIHB1YmxpYyBzdGF0aWMgIHVpVmlldzphbnkgPXtcInR5cGVcIjpcIlZpZXdcIixcInByb3BzXCI6e1wid2lkdGhcIjo2NDAsXCJoZWlnaHRcIjoxMTM2fSxcImNvbXBJZFwiOjIsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJCb3hcIixcInByb3BzXCI6e1wid2lkdGhcIjoyMDAsXCJ2YXJcIjpcImJveFwiLFwiaGVpZ2h0XCI6MjAwLFwiY2VudGVyWVwiOjAsXCJjZW50ZXJYXCI6MH0sXCJjb21wSWRcIjo5LFwiY2hpbGRcIjpbe1widHlwZVwiOlwiSW1hZ2VcIixcInByb3BzXCI6e1widG9wXCI6MCxcInNraW5cIjpcImNvbXAvaW1hZ2UucG5nXCIsXCJyaWdodFwiOjAsXCJsZWZ0XCI6MCxcImJvdHRvbVwiOjB9LFwiY29tcElkXCI6MTB9LHtcInR5cGVcIjpcIkNsaXBcIixcInByb3BzXCI6e1wieVwiOjU1MCxcInhcIjozMDMsXCJ2YXJcIjpcInRhbmtcIixcInNraW5cIjpcIkNoYXJhY3RlcnMvVGFua183LnBuZ1wiLFwiaW5kZXhcIjo0LFwiY2xpcFlcIjo0LFwiY2xpcFhcIjo0LFwiY2VudGVyWVwiOi0xLFwiY2VudGVyWFwiOjB9LFwiY29tcElkXCI6M30se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjozOSxcInhcIjo2Mi41LFwidmFyXCI6XCJjbG9zZUJ0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiY2xvc2VcIn0sXCJjb21wSWRcIjo0fV19XSxcImxvYWRMaXN0XCI6W1wiY29tcC9pbWFnZS5wbmdcIixcIkNoYXJhY3RlcnMvVGFua183LnBuZ1wiLFwiY29tcC9idXR0b24ucG5nXCJdLFwibG9hZExpc3QzRFwiOltdfTtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVmlldyhEaWFsb2dUZXN0VUkudWlWaWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSRUcoXCJ1aS52aWV3LkRpYWxvZ1Rlc3RVSVwiLERpYWxvZ1Rlc3RVSSk7XHJcbiAgICBleHBvcnQgY2xhc3MgTG9hZGluZ1VJIGV4dGVuZHMgVmlldyB7XHJcblx0XHRwdWJsaWMgdGFuazpMYXlhLkNsaXA7XG5cdFx0cHVibGljIGJ0bl9jbG9zZTpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgYnRuX2Nvbm5lY3Q6TGF5YS5CdXR0b247XG4gICAgICAgIHB1YmxpYyBzdGF0aWMgIHVpVmlldzphbnkgPXtcInR5cGVcIjpcIlZpZXdcIixcInByb3BzXCI6e1wid2lkdGhcIjo2NDAsXCJoZWlnaHRcIjoxMTM2fSxcImNvbXBJZFwiOjIsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJJbWFnZVwiLFwicHJvcHNcIjp7XCJ0b3BcIjowLFwic2tpblwiOlwiQ2hhcmFjdGVycy9UYW5rXzcucG5nXCIsXCJyaWdodFwiOjAsXCJsZWZ0XCI6MCxcImJvdHRvbVwiOjB9LFwiY29tcElkXCI6MTd9LHtcInR5cGVcIjpcIkNsaXBcIixcInByb3BzXCI6e1widmFyXCI6XCJ0YW5rXCIsXCJza2luXCI6XCJDaGFyYWN0ZXJzL1RhbmtfNC5wbmdcIixcImluZGV4XCI6NCxcImNsaXBZXCI6NCxcImNsaXBYXCI6NCxcImNlbnRlcllcIjotMSxcImNlbnRlclhcIjowfSxcImNvbXBJZFwiOjN9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6MzI3LFwieFwiOjI4Mi41LFwidmFyXCI6XCJidG5fY2xvc2VcIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcImNsb3NlXCJ9LFwiY29tcElkXCI6NH0se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjoyMjIsXCJ4XCI6MjgyLjUsXCJ2YXJcIjpcImJ0bl9jb25uZWN0XCIsXCJza2luXCI6XCJjb21wL2J1dHRvbi5wbmdcIixcImxhYmVsXCI6XCJjb25uZWN0XCJ9LFwiY29tcElkXCI6NX1dLFwibG9hZExpc3RcIjpbXCJDaGFyYWN0ZXJzL1RhbmtfNy5wbmdcIixcIkNoYXJhY3RlcnMvVGFua180LnBuZ1wiLFwiY29tcC9idXR0b24ucG5nXCJdLFwibG9hZExpc3QzRFwiOltdfTtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVmlldyhMb2FkaW5nVUkudWlWaWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSRUcoXCJ1aS52aWV3LkxvYWRpbmdVSVwiLExvYWRpbmdVSSk7XHJcbiAgICBleHBvcnQgY2xhc3MgVmlld1Rlc3RVSSBleHRlbmRzIFZpZXcge1xyXG5cdFx0cHVibGljIHRhbms6TGF5YS5DbGlwO1xuXHRcdHB1YmxpYyBjbG9zZUJ0bjpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgdmlld0J0bjpMYXlhLkJ1dHRvbjtcbiAgICAgICAgcHVibGljIHN0YXRpYyAgdWlWaWV3OmFueSA9e1widHlwZVwiOlwiVmlld1wiLFwicHJvcHNcIjp7XCJ3aWR0aFwiOjY0MCxcImhlaWdodFwiOjExMzZ9LFwiY29tcElkXCI6MixcImNoaWxkXCI6W3tcInR5cGVcIjpcIkltYWdlXCIsXCJwcm9wc1wiOntcInlcIjowLFwieFwiOjAsXCJ0b3BcIjowLFwic2tpblwiOlwiY29tcC9pbWFnZS5wbmdcIixcInJpZ2h0XCI6MCxcImxlZnRcIjowLFwiYm90dG9tXCI6MH0sXCJjb21wSWRcIjo3fSx7XCJ0eXBlXCI6XCJDbGlwXCIsXCJwcm9wc1wiOntcInlcIjowLFwieFwiOjAsXCJ2YXJcIjpcInRhbmtcIixcInNraW5cIjpcIkNoYXJhY3RlcnMvJOeLvC5wbmdcIixcImluZGV4XCI6NCxcImNsaXBZXCI6NCxcImNsaXBYXCI6NCxcImNlbnRlcllcIjotMSxcImNlbnRlclhcIjowfSxcImNvbXBJZFwiOjN9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6MzI3LFwieFwiOjI4MixcInZhclwiOlwiY2xvc2VCdG5cIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcImNsb3NlXCJ9LFwiY29tcElkXCI6NH0se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjozODUsXCJ4XCI6MjgyLjUsXCJ2YXJcIjpcInZpZXdCdG5cIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcInZpZXdcIn0sXCJjb21wSWRcIjo1fV0sXCJsb2FkTGlzdFwiOltcImNvbXAvaW1hZ2UucG5nXCIsXCJDaGFyYWN0ZXJzLyTni7wucG5nXCIsXCJjb21wL2J1dHRvbi5wbmdcIl0sXCJsb2FkTGlzdDNEXCI6W119O1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVWaWV3KFZpZXdUZXN0VUkudWlWaWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSRUcoXCJ1aS52aWV3LlZpZXdUZXN0VUlcIixWaWV3VGVzdFVJKTtcclxuICAgIGV4cG9ydCBjbGFzcyBWaWV3VGVzdDFVSSBleHRlbmRzIFZpZXcge1xyXG5cdFx0cHVibGljIHRhbms6TGF5YS5DbGlwO1xuXHRcdHB1YmxpYyBjbG9zZUJ0bjpMYXlhLkJ1dHRvbjtcbiAgICAgICAgcHVibGljIHN0YXRpYyAgdWlWaWV3OmFueSA9e1widHlwZVwiOlwiVmlld1wiLFwicHJvcHNcIjp7XCJ3aWR0aFwiOjY0MCxcImhlaWdodFwiOjExMzZ9LFwiY29tcElkXCI6MixcImNoaWxkXCI6W3tcInR5cGVcIjpcIkltYWdlXCIsXCJwcm9wc1wiOntcInlcIjowLFwieFwiOjAsXCJ0b3BcIjowLFwic2tpblwiOlwiY29tcC9pbWFnZS5wbmdcIixcInJpZ2h0XCI6MCxcImxlZnRcIjowLFwiYm90dG9tXCI6MH0sXCJjb21wSWRcIjo2fSx7XCJ0eXBlXCI6XCJDbGlwXCIsXCJwcm9wc1wiOntcInlcIjowLFwieFwiOjAsXCJ2YXJcIjpcInRhbmtcIixcInNraW5cIjpcIkNoYXJhY3RlcnMvJOeLvC5wbmdcIixcImluZGV4XCI6NCxcImNsaXBZXCI6NCxcImNsaXBYXCI6NCxcImNlbnRlcllcIjotMSxcImNlbnRlclhcIjowfSxcImNvbXBJZFwiOjN9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6MzI3LFwieFwiOjI4MixcInZhclwiOlwiY2xvc2VCdG5cIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcImNsb3NlXCJ9LFwiY29tcElkXCI6NH1dLFwibG9hZExpc3RcIjpbXCJjb21wL2ltYWdlLnBuZ1wiLFwiQ2hhcmFjdGVycy8k54u8LnBuZ1wiLFwiY29tcC9idXR0b24ucG5nXCJdLFwibG9hZExpc3QzRFwiOltdfTtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVmlldyhWaWV3VGVzdDFVSS51aVZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFJFRyhcInVpLnZpZXcuVmlld1Rlc3QxVUlcIixWaWV3VGVzdDFVSSk7XHJcbn1cciIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=