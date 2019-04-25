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
(function (mvc_1) {
    var ControllerManager = /** @class */ (function () {
        function ControllerManager() {
            this.controllers = new Map();
        }
        ControllerManager.prototype.register = function (mvc) {
            var key = mvc.viewKey;
            if (this.isExists(key))
                return;
            if (mvc.Controller) {
                var controller = new mvc.Controller();
                controller.setView(mvc.view);
                if (mvc.Model) {
                    controller.setModel(new mvc.Model());
                }
                this.controllers.set(key, controller);
                mvc.view.setController(controller);
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
    mvc_1.controllerMgr = new ControllerManager();
})(mvc = exports.mvc || (exports.mvc = {}));


/***/ }),

/***/ "./src/core/mvc/MvcMgr.ts":
/*!********************************!*\
  !*** ./src/core/mvc/MvcMgr.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var v = __webpack_require__(/*! ./ViewMgr */ "./src/core/mvc/ViewMgr.ts");
var c = __webpack_require__(/*! ./ControllerManager */ "./src/core/mvc/ControllerManager.ts");
/**
 * MVC
 * [
 *  {
 *    viewKey,
 *    View,
 *    view,View实例
 *    Layer,
 *    layer,Layer实例
 *    event,
 *    Controller,
 *    Model
 *  }
 * ]
 */
var MVC = [];
exports.MVC = MVC;
exports.findByLayerKey = function (layerKey) { return MVC.find(function (item) { return item.Layer && item.Layer.layerKey === layerKey; }); };
exports.findByViewKey = function (viewKey) { return MVC.find(function (item) { return item.viewKey === viewKey; }); };
exports.updateMVCItem = function (_a) {
    var viewKey = _a.viewKey, prop = __rest(_a, ["viewKey"]);
    var index = MVC.findIndex(function (item) { return item.viewKey === viewKey; });
    var mvc;
    if (index > -1) {
        var item = MVC[index];
        mvc = __assign({}, item, prop);
        MVC.splice(index, 1, mvc);
    }
    else {
        mvc = __assign({ viewKey: viewKey }, prop);
        MVC.push(mvc);
    }
    return mvc;
};
var UI = Laya.stage;
exports.UI = UI;
var RegisterMVC = function (Layer, Controller, Model) {
    if (Controller === void 0) { Controller = null; }
    if (Model === void 0) { Model = null; }
    return function (View) {
        exports.updateMVCItem({
            viewKey: View.viewKey,
            Layer: Layer,
            Controller: Controller,
            Model: Model,
            View: View,
        });
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
        var mvc = MvcMgr_1.updateMVCItem({ viewKey: View.constructor.viewKey });
        mvc.event = mvc.event || {};
        var event = mvc.event;
        event[EventType] = event[EventType] || {};
        var eventUI = event[EventType];
        eventUI[ui] = eventUI[ui] || [];
        eventUI[ui].push(descriptor.value);
        return descriptor;
    };
};
exports.bindEvent = function (mvc) {
    if (mvc.event) {
        Object.entries(mvc.event).forEach(function (event) {
            var type = event[0];
            var eventUI = event[1];
            Object.entries(eventUI).forEach(function (eventUI) {
                var ui = eventUI[0];
                var func = eventUI[1];
                func.forEach(function (func) {
                    mvc.view[ui].on(type, mvc.view, func);
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
(function (mvc_1) {
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
        ViewMgr.prototype.getLayer = function (Layer) {
            var layer = this.layers.get(Layer.layerKey);
            if (layer)
                return layer;
            layer = this.createLayer(Layer);
            this.setLayer(Layer.layerKey, layer);
            return layer;
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
                _view.openCb.apply(_view, args);
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
            var mvc = MvcMgr_1.findByViewKey(View.viewKey);
            var layer = this.getLayer(mvc.Layer);
            var _view = new mvc.View();
            _view.layer = layer;
            mvc.view = _view;
            mvc.layer = layer;
            UIEvent_1.bindEvent(mvc);
            MvcMgr_1.controllerMgr.register(mvc);
            this.setView(mvc.viewKey, _view);
            if (_view.init)
                _view.init();
            return _view;
        };
        ViewMgr.prototype.createLayer = function (Layer) {
            var _layer = new Layer(MvcMgr_1.UI);
            _layer.zOrder = Layer.layerKey;
            MvcMgr_1.UI.addChild(_layer);
            return _layer;
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
    mvc_1.viewMgr = new ViewMgr();
    mvc_1.openView = function (View) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        mvc_1.viewMgr.openView.apply(mvc_1.viewMgr, [View].concat(args));
    };
    mvc_1.closeView = function (ViewOrKeyOrIns) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        mvc_1.viewMgr.closeView.apply(mvc_1.viewMgr, [ViewOrKeyOrIns].concat(args));
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
    BaseTest.prototype.todo1 = function (type) {
        console.log('click');
        console.log(type);
        console.log(this);
    };
    BaseTest.prototype.openCb = function () {
        console.log('BaseTest open');
    };
    BaseTest.viewKey = ViewConst_1.ViewConst.BaseTest;
    __decorate([
        UIEvent_1.Click('dialogBtn'),
        UIEvent_1.Click('loadingBtn')
    ], BaseTest.prototype, "todo1", null);
    BaseTest = __decorate([
        MvcMgr_1.RegisterMVC(BaseLayer_1.BaseLayer)
    ], BaseTest);
    return BaseTest;
}(layaMaxUI_1.ui.view.BaseTestUI));
exports.default = BaseTest;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWVDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvYmFzZS9TaW5nbGV0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY29uc3QvTGF5ZXJDb25zdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9jb25zdC9WaWV3Q29uc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZ2FtZS9HYW1lQXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2dhbWUvdXRpbHMvU3RyaW5nVXRpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9nYW1lL3V0aWxzL1RpbWVVdGlsLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL212Yy9Db250cm9sbGVyTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9tdmMvTXZjTWdyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL212Yy9VSUV2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL212Yy9WaWV3TWdyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL212Yy9jb250cm9sbGVyL0Jhc2VDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL212Yy9sYXllci9CYXNlTGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvbXZjL2xheWVyL0RpYWxvZ0xheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL212Yy9sYXllci9WaWV3TGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvbXZjL21vZGVsL0Jhc2VNb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9tdmMvdmlldy9CYXNlVmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9zZXJ2aWNlL1NlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvc2VydmljZS9kaXNwYXRjaGVyL0Rpc3BhdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvc2VydmljZS9kaXNwYXRjaGVyL09ic2VydmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3VpL3ZpZXcvQVBhZ2UvQVBhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdWkvdmlldy9BUGFnZS9BUGFnZUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdWkvdmlldy9BUGFnZS9BcGFnZU1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3VpL3ZpZXcvQlBhZ2UvQlBhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdWkvdmlldy9CUGFnZS9CUGFnZUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdWkvdmlldy9CUGFnZS9CUGFnZU1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3VpL3ZpZXcvQmFzZVRlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdWkvdmlldy9Mb2FkaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3VpL3ZpZXcvVmlld1Rlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdWkvdmlldy9WaWV3VGVzdDEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ldC9odHRwL0dhbWVOZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ldC9odHRwL05ldFJlcXVlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ldC9zb2NrZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lL01haW5TY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvbGF5YU1heFVJLnRzIiwid2VicGFjazovLy93cyAoaWdub3JlZCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FB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QUMsS0FBSyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsZ0JBQWdCLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyx1QkFBdUIsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsTUFBTSxFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsV0FBVyxFQUFDLE1BQU0sRUFBQyxpQkFBaUIsRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLFlBQVksRUFBQyxNQUFNLEVBQUMsaUJBQWlCLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxTQUFTLEVBQUMsTUFBTSxFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxnQkFBZ0IsRUFBQyx1QkFBdUIsRUFBQyxpQkFBaUIsQ0FBQyxFQUFDLFlBQVksRUFBQyxFQUFFLEVBQUMsQ0FBQztZQU16NEIsaUJBQUM7U0FBQSxDQVorQixJQUFJLEdBWW5DO1FBWlksZUFBVSxhQVl0QjtRQUNELEdBQUcsQ0FBQyxvQkFBb0IsRUFBQyxVQUFVLENBQUMsQ0FBQztRQUNyQztZQUE2QiwyQkFBUTtZQUlqQzt1QkFBZSxpQkFBTztZQUFBLENBQUM7WUFDdkIsZ0NBQWMsR0FBZDtnQkFDSSxpQkFBTSxjQUFjLFdBQUUsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEMsQ0FBQztZQUxjLGNBQU0sR0FBTSxFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsV0FBVyxFQUFDLFNBQVMsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUMsaUJBQWlCLEVBQUMsT0FBTyxFQUFDLGFBQWEsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsV0FBVyxFQUFDLE1BQU0sRUFBQyxpQkFBaUIsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFDLFlBQVksRUFBQyxFQUFFLEVBQUMsQ0FBQztZQU1uaEIsY0FBQztTQUFBLENBVDRCLFFBQVEsR0FTcEM7UUFUWSxZQUFPLFVBU25CO1FBQ0QsR0FBRyxDQUFDLGlCQUFpQixFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9CO1lBQWtDLGdDQUFJO1lBS2xDO3VCQUFlLGlCQUFPO1lBQUEsQ0FBQztZQUN2QixxQ0FBYyxHQUFkO2dCQUNJLGlCQUFNLGNBQWMsV0FBRSxDQUFDO2dCQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN6QyxDQUFDO1lBTGMsbUJBQU0sR0FBTSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxHQUFHLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsZ0JBQWdCLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyx1QkFBdUIsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsSUFBSSxFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsTUFBTSxFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsZ0JBQWdCLEVBQUMsdUJBQXVCLEVBQUMsaUJBQWlCLENBQUMsRUFBQyxZQUFZLEVBQUMsRUFBRSxFQUFDLENBQUM7WUFNenBCLG1CQUFDO1NBQUEsQ0FWaUMsSUFBSSxHQVVyQztRQVZZLGlCQUFZLGVBVXhCO1FBQ0QsR0FBRyxDQUFDLHNCQUFzQixFQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3pDO1lBQStCLDZCQUFJO1lBSy9CO3VCQUFlLGlCQUFPO1lBQUEsQ0FBQztZQUN2QixrQ0FBYyxHQUFkO2dCQUNJLGlCQUFNLGNBQWMsV0FBRSxDQUFDO2dCQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0QyxDQUFDO1lBTGMsZ0JBQU0sR0FBTSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsdUJBQXVCLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLHVCQUF1QixFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLFdBQVcsRUFBQyxNQUFNLEVBQUMsaUJBQWlCLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxhQUFhLEVBQUMsTUFBTSxFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyx1QkFBdUIsRUFBQyx1QkFBdUIsRUFBQyxpQkFBaUIsQ0FBQyxFQUFDLFlBQVksRUFBQyxFQUFFLEVBQUMsQ0FBQztZQU12cUIsZ0JBQUM7U0FBQSxDQVY4QixJQUFJLEdBVWxDO1FBVlksY0FBUyxZQVVyQjtRQUNELEdBQUcsQ0FBQyxtQkFBbUIsRUFBQyxTQUFTLENBQUMsQ0FBQztRQUNuQztZQUFnQyw4QkFBSTtZQUtoQzt1QkFBZSxpQkFBTztZQUFBLENBQUM7WUFDdkIsbUNBQWMsR0FBZDtnQkFDSSxpQkFBTSxjQUFjLFdBQUUsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkMsQ0FBQztZQUxjLGlCQUFNLEdBQU0sRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxnQkFBZ0IsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLG1CQUFtQixFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxNQUFNLEVBQUMsaUJBQWlCLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxTQUFTLEVBQUMsTUFBTSxFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxnQkFBZ0IsRUFBQyxtQkFBbUIsRUFBQyxpQkFBaUIsQ0FBQyxFQUFDLFlBQVksRUFBQyxFQUFFLEVBQUMsQ0FBQztZQU05cEIsaUJBQUM7U0FBQSxDQVYrQixJQUFJLEdBVW5DO1FBVlksZUFBVSxhQVV0QjtRQUNELEdBQUcsQ0FBQyxvQkFBb0IsRUFBQyxVQUFVLENBQUMsQ0FBQztRQUNyQztZQUFpQywrQkFBSTtZQUlqQzt1QkFBZSxpQkFBTztZQUFBLENBQUM7WUFDdkIsb0NBQWMsR0FBZDtnQkFDSSxpQkFBTSxjQUFjLFdBQUUsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEMsQ0FBQztZQUxjLGtCQUFNLEdBQU0sRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxnQkFBZ0IsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLG1CQUFtQixFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxNQUFNLEVBQUMsaUJBQWlCLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLGdCQUFnQixFQUFDLG1CQUFtQixFQUFDLGlCQUFpQixDQUFDLEVBQUMsWUFBWSxFQUFDLEVBQUUsRUFBQyxDQUFDO1lBTTdpQixrQkFBQztTQUFBLENBVGdDLElBQUksR0FTcEM7UUFUWSxnQkFBVyxjQVN2QjtRQUNELEdBQUcsQ0FBQyxxQkFBcUIsRUFBQyxXQUFXLENBQUMsQ0FBQztJQUMzQyxDQUFDLEVBckZnQixJQUFJLEdBQUosT0FBSSxLQUFKLE9BQUksUUFxRnBCO0FBQUQsQ0FBQyxFQXJGYSxFQUFFLEdBQUYsVUFBRSxLQUFGLFVBQUUsUUFxRmY7Ozs7Ozs7Ozs7OztBQ3RHRCxlIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiaW5kZXhcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9NYWluLnRzXCIsXCJsaWJcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvKipUaGlzIGNsYXNzIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IExheWFBaXJJREUsIHBsZWFzZSBkbyBub3QgbWFrZSBhbnkgbW9kaWZpY2F0aW9ucy4gKi9cclxuaW1wb3J0IE1haW5TY2VuZSBmcm9tIFwiLi9zY2VuZS9NYWluU2NlbmVcIlxyXG4vKlxyXG4qIOa4uOaIj+WIneWni+WMlumFjee9rjtcclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbmZpZ3tcclxuICAgIHN0YXRpYyB3aWR0aDpudW1iZXI9NjQwO1xyXG4gICAgc3RhdGljIGhlaWdodDpudW1iZXI9MTEzNjtcclxuICAgIHN0YXRpYyBzY2FsZU1vZGU6c3RyaW5nPVwic2hvd2FsbFwiO1xyXG4gICAgc3RhdGljIHNjcmVlbk1vZGU6c3RyaW5nPVwibm9uZVwiO1xyXG4gICAgc3RhdGljIGFsaWduVjpzdHJpbmc9XCJtaWRkbGVcIjtcclxuICAgIHN0YXRpYyBhbGlnbkg6c3RyaW5nPVwiY2VudGVyXCI7XHJcbiAgICBzdGF0aWMgc3RhcnRTY2VuZTphbnk9XCJzY2VuZS9NYWluU2NlbmUuc2NlbmVcIjtcclxuICAgIHN0YXRpYyBzY2VuZVJvb3Q6c3RyaW5nPVwiXCI7XHJcbiAgICBzdGF0aWMgZGVidWc6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBzdGF0OmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgcGh5c2ljc0RlYnVnOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgZXhwb3J0U2NlbmVUb0pzb246Ym9vbGVhbj10cnVlO1xyXG4gICAgY29uc3RydWN0b3IoKXt9XHJcbiAgICBzdGF0aWMgaW5pdCgpe1xyXG4gICAgICAgIHZhciByZWc6IEZ1bmN0aW9uID0gTGF5YS5DbGFzc1V0aWxzLnJlZ0NsYXNzO1xyXG4gICAgICAgIHJlZyhcInNjZW5lL01haW5TY2VuZS50c1wiLE1haW5TY2VuZSk7XHJcbiAgICB9XHJcbn1cclxuR2FtZUNvbmZpZy5pbml0KCk7IiwiaW1wb3J0IEdhbWVDb25maWcgZnJvbSAnLi9HYW1lQ29uZmlnJ1xyXG5pbXBvcnQgJ0BiYWJlbC9wb2x5ZmlsbCdcclxuY2xhc3MgTWFpbiB7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy/moLnmja5JREXorr7nva7liJ3lp4vljJblvJXmk45cclxuICAgIGlmICh3aW5kb3dbJ0xheWEzRCddKSBMYXlhM0QuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodClcclxuICAgIGVsc2UgTGF5YS5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0LCBMYXlhWydXZWJHTCddKVxyXG4gICAgTGF5YVsnUGh5c2ljcyddICYmIExheWFbJ1BoeXNpY3MnXS5lbmFibGUoKVxyXG4gICAgTGF5YVsnRGVidWdQYW5lbCddICYmIExheWFbJ0RlYnVnUGFuZWwnXS5lbmFibGUoKVxyXG4gICAgLy8gTGF5YS5zdGFnZS5zY2FsZU1vZGUgPSBHYW1lQ29uZmlnLnNjYWxlTW9kZTtcclxuICAgIExheWEuc3RhZ2Uuc2NhbGVNb2RlID0gR2FtZUNvbmZpZy5zY2FsZU1vZGVcclxuICAgIExheWEuc3RhZ2Uuc2NyZWVuTW9kZSA9IEdhbWVDb25maWcuc2NyZWVuTW9kZVxyXG4gICAgTGF5YS5zdGFnZS5hbGlnblYgPSBHYW1lQ29uZmlnLmFsaWduVlxyXG4gICAgTGF5YS5zdGFnZS5hbGlnbkggPSBHYW1lQ29uZmlnLmFsaWduSFxyXG4gICAgLy/lhbzlrrnlvq7kv6HkuI3mlK/mjIHliqDovb1zY2VuZeWQjue8gOWcuuaZr1xyXG4gICAgTGF5YS5VUkwuZXhwb3J0U2NlbmVUb0pzb24gPSBHYW1lQ29uZmlnLmV4cG9ydFNjZW5lVG9Kc29uXHJcblxyXG4gICAgLy/miZPlvIDosIPor5XpnaLmnb/vvIjpgJrov4dJREXorr7nva7osIPor5XmqKHlvI/vvIzmiJbogIV1cmzlnLDlnYDlop7liqBkZWJ1Zz10cnVl5Y+C5pWw77yM5Z2H5Y+v5omT5byA6LCD6K+V6Z2i5p2/77yJXHJcbiAgICBpZiAoR2FtZUNvbmZpZy5kZWJ1ZyB8fCBMYXlhLlV0aWxzLmdldFF1ZXJ5U3RyaW5nKCdkZWJ1ZycpID09ICd0cnVlJykgTGF5YS5lbmFibGVEZWJ1Z1BhbmVsKClcclxuICAgIGlmIChHYW1lQ29uZmlnLnBoeXNpY3NEZWJ1ZyAmJiBMYXlhWydQaHlzaWNzRGVidWdEcmF3J10pIExheWFbJ1BoeXNpY3NEZWJ1Z0RyYXcnXS5lbmFibGUoKVxyXG4gICAgaWYgKEdhbWVDb25maWcuc3RhdCkgTGF5YS5TdGF0LnNob3coKVxyXG4gICAgTGF5YS5hbGVydEdsb2JhbEVycm9yID0gdHJ1ZVxyXG5cclxuICAgIC8v5r+A5rS76LWE5rqQ54mI5pys5o6n5Yi277yMdmVyc2lvbi5qc29u55SxSURF5Y+R5biD5Yqf6IO96Ieq5Yqo55Sf5oiQ77yM5aaC5p6c5rKh5pyJ5Lmf5LiN5b2x5ZON5ZCO57ut5rWB56iLXHJcbiAgICBMYXlhLlJlc291cmNlVmVyc2lvbi5lbmFibGUoJ3ZlcnNpb24uanNvbicsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vblZlcnNpb25Mb2FkZWQpLCBMYXlhLlJlc291cmNlVmVyc2lvbi5GSUxFTkFNRV9WRVJTSU9OKVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblZlcnNpb25Mb2FkZWQoKTogdm9pZCB7XHJcbiAgICAvL+a/gOa0u+Wkp+Wwj+WbvuaYoOWwhO+8jOWKoOi9veWwj+WbvueahOaXtuWAme+8jOWmguaenOWPkeeOsOWwj+WbvuWcqOWkp+WbvuWQiOmbhumHjOmdou+8jOWImeS8mOWFiOWKoOi9veWkp+WbvuWQiOmbhu+8jOiAjOS4jeaYr+Wwj+WbvlxyXG4gICAgTGF5YS5BdGxhc0luZm9NYW5hZ2VyLmVuYWJsZSgnZmlsZWNvbmZpZy5qc29uJywgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uQ29uZmlnTG9hZGVkKSlcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Db25maWdMb2FkZWQoKTogdm9pZCB7XHJcbiAgICAvL+WKoOi9vUlEReaMh+WumueahOWcuuaZr1xyXG4gICAgR2FtZUNvbmZpZy5zdGFydFNjZW5lICYmIExheWEuU2NlbmUub3BlbihHYW1lQ29uZmlnLnN0YXJ0U2NlbmUpXHJcbiAgfVxyXG59XHJcbi8v5r+A5rS75ZCv5Yqo57G7XHJcbm5ldyBNYWluKClcclxuIiwiLyoqXHJcbiAqIG5hbWVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBTaW5nbGV0b24ge1xyXG4gIC8qKlxyXG4gICAqIGRlZmF1bHQgY29uc3RyYWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgX2luc3RhbmNlOiBhbnlcclxuICAvKipcclxuICAgKiBnZXQgaW5zdGFuY2Ugb3IgY3JlYXRlIG5ldyBpbnN0YW5jZVxyXG4gICAqIEByZXR1cm5zIHthbnl9XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBDcmVhdGVPckdldCguLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICBjb25zdCBpbnN0VDogYW55ID0gdGhpc1xyXG4gICAgcmV0dXJuIChpbnN0VC5faW5zdGFuY2UgPSBpbnN0VC5faW5zdGFuY2UgfHwgbmV3IGluc3RUKC4uLmFyZ3MpKVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZW51bSBMYXllckNvbnN0IHtcbiAgYmFzZSA9IDEsXG4gIGJhc2UxLFxuICB2aWV3LFxuICBzaGFyZSxcbiAgZGlhbG9nLFxuICBsb2FkaW5nLFxufVxuIiwiZXhwb3J0IGVudW0gVmlld0NvbnN0IHtcclxuICBNYWluID0gMSxcclxuICBMb2FkaW5nLFxyXG4gIFZpZXdUZXN0LFxyXG4gIFZpZXdUZXN0MSxcclxuICBEaWFsb2dUZXN0LFxyXG4gIEJhc2VUZXN0LFxyXG4gIEFQYWdlLFxyXG4gIEJQYWdlXHJcbn1cclxuIiwiaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvU2VydmljZSdcbmltcG9ydCB7IERpc3BhdGNoZXIgfSBmcm9tICcuLi9zZXJ2aWNlL2Rpc3BhdGNoZXIvRGlzcGF0Y2hlcidcbmltcG9ydCBTb2NrZXQgZnJvbSAnLi4vLi4vbmV0L3NvY2tldCdcbmltcG9ydCB7IFN0cmluZ1V0aWwgfSBmcm9tICcuL3V0aWxzL1N0cmluZ1V0aWwnXG5pbXBvcnQgeyBUaW1lVXRpbCB9IGZyb20gJy4vdXRpbHMvVGltZVV0aWwnXG5cbmltcG9ydCBHYW1lTmV0IGZyb20gJy4uLy4uL25ldC9odHRwL0dhbWVOZXQnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQXBwIHtcbiAgLy8g5YWo5bGA6YWN572u5pWw5o2uXG4gIHB1YmxpYyBzdGF0aWMgR2xvYmFsRGF0YTogYW55ID0gbnVsbFxuXG4gIC8qKlxuICAgKiDliJ3lp4vljJblh73mlbBcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGluaXQoc2NlbmUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgR2FtZUFwcC5HbG9iYWxEYXRhID0gTGF5YS5sb2FkZXIuZ2V0UmVzKCdjb25mL2dsb2JhbC5qc29uJylcbiAgICAgIC8v5bin6L2u6K+iXG4gICAgICBTZXJ2aWNlLkluaXQoKVxuICAgICAgcmVzb2x2ZSgpXG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGRpc3BhdGNoZXIoKTogRGlzcGF0Y2hlciB7XG4gICAgcmV0dXJuIFNlcnZpY2UuZGlzcGF0Y2hlclxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXQgU3RyaW5nVXRpbCgpOiBTdHJpbmdVdGlsIHtcbiAgICByZXR1cm4gU3RyaW5nVXRpbC5DcmVhdGVPckdldCgpXG4gIH1cbiAgcHVibGljIHN0YXRpYyBnZXQgVGltZVV0aWwoKTogVGltZVV0aWwge1xuICAgIHJldHVybiBUaW1lVXRpbC5DcmVhdGVPckdldCgpXG4gIH1cbiAgcHVibGljIHN0YXRpYyBnZXQgU29ja2V0KCk6IFNvY2tldCB7XG4gICAgcmV0dXJuIFNvY2tldC5DcmVhdGVPckdldCgpXG4gIH1cbiAgcHVibGljIHN0YXRpYyBnZXQgbmV0KCk6IEdhbWVOZXQge1xuICAgIHJldHVybiBHYW1lTmV0LkNyZWF0ZU9yR2V0KClcbiAgfVxufVxuIiwiaW1wb3J0IHsgU2luZ2xldG9uIH0gZnJvbSAnLi4vLi4vYmFzZS9TaW5nbGV0b24nXHJcblxyXG5leHBvcnQgY2xhc3MgU3RyaW5nVXRpbCBleHRlbmRzIFNpbmdsZXRvbiB7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTaW5nbGV0b24gfSBmcm9tICcuLi8uLi9iYXNlL1NpbmdsZXRvbidcclxuXHJcbmV4cG9ydCBjbGFzcyBUaW1lVXRpbCBleHRlbmRzIFNpbmdsZXRvbiB7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gIH1cclxuICAvL+WJqeS9meaXtumXtOi9rOaXtuWIhuenku+8iOenku+8iVxyXG4gIHByaXZhdGUgY2hhbmdlVGltZSh0aW1lOiBudW1iZXIpOiB7IGhvdXJzOiBudW1iZXI7IG1pbnV0ZXM6IG51bWJlcjsgc2Vjb25kczogbnVtYmVyIH0ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaG91cnM6IE1hdGguZmxvb3IodGltZSAvIDM2MDApLFxyXG4gICAgICBtaW51dGVzOiBNYXRoLmZsb29yKCh0aW1lICUgMzYwMCkgLyA2MCksXHJcbiAgICAgIHNlY29uZHM6IHRpbWUgJSA2MCxcclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICog5YCS6K6h5pe2XHJcbiAgICogQHBhcmFtIHRpbWUg5pe26Ze05oiz77yIc++8iVxyXG4gICAqIEBwYXJhbSBob3VyIOaXtlxyXG4gICAqIEBwYXJhbSBtaW51dGUg5YiGXHJcbiAgICogQHBhcmFtIHNlY29uZCDnp5JcclxuICAgKi9cclxuICBwdWJsaWMgY291bnREb3duKHRpbWU6IG51bWJlciwgaG91cjogc3RyaW5nID0gJ+aXticsIG1pbnV0ZTogc3RyaW5nID0gJ+WIhicsIHNlY29uZDogc3RyaW5nID0gJ+enkicpOiBzdHJpbmcge1xyXG4gICAgbGV0IHRlbXAgPSB0aGlzLmNoYW5nZVRpbWUodGltZSlcclxuICAgIHJldHVybiBgJHt0ZW1wLmhvdXJzfSR7aG91cn0ke3RlbXAubWludXRlc30ke21pbnV0ZX0ke3RlbXAuc2Vjb25kc30ke3NlY29uZH1gXHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIOagvOW8j+WMluaXtumXtFxyXG4gICAqIEBwYXJhbSBkYXRlIERhdGVcclxuICAgKiBAcGFyYW0gZm9ybWF0IOagvOW8j1xyXG4gICAqL1xyXG4gIHB1YmxpYyBEYXRlRm9ybWF0KGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nID0gJ3l5eXktTU0tZGQgaGg6bW06c3MnKTogc3RyaW5nIHtcclxuICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXHJcbiAgICBsZXQgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxID4gOSA/IGRhdGUuZ2V0TW9udGgoKSArIDEgOiBgMCR7ZGF0ZS5nZXRNb250aCgpICsgMX1gXHJcbiAgICBsZXQgbW9udGgyID0gZGF0ZS5nZXRNb250aCgpICsgMVxyXG4gICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpID4gOSA/IGRhdGUuZ2V0RGF0ZSgpIDogYDAke2RhdGUuZ2V0RGF0ZSgpfWBcclxuICAgIGxldCBkYXkyID0gZGF0ZS5nZXREYXRlKClcclxuICAgIGxldCBob3VyID0gZGF0ZS5nZXRIb3VycygpID4gOSA/IGRhdGUuZ2V0SG91cnMoKSA6IGAwJHtkYXRlLmdldEhvdXJzKCl9YFxyXG4gICAgbGV0IGhvdXIyID0gZGF0ZS5nZXRIb3VycygpXHJcbiAgICBsZXQgbWludXRlID0gZGF0ZS5nZXRNaW51dGVzKCkgPiA5ID8gZGF0ZS5nZXRNaW51dGVzKCkgOiBgMCR7ZGF0ZS5nZXRNaW51dGVzKCl9YFxyXG4gICAgbGV0IG1pbnV0ZTIgPSBkYXRlLmdldE1pbnV0ZXMoKVxyXG4gICAgbGV0IHNlY29uZCA9IGRhdGUuZ2V0U2Vjb25kcygpID4gOSA/IGRhdGUuZ2V0U2Vjb25kcygpIDogYDAke2RhdGUuZ2V0U2Vjb25kcygpfWBcclxuICAgIGxldCBzZWNvbmQyID0gZGF0ZS5nZXRTZWNvbmRzKClcclxuXHJcbiAgICByZXR1cm4gZm9ybWF0XHJcbiAgICAgIC5yZXBsYWNlKC95eXl5LywgYCR7eWVhcn1gKVxyXG4gICAgICAucmVwbGFjZSgvTU0vLCBgJHttb250aH1gKVxyXG4gICAgICAucmVwbGFjZSgvTS8sIGAke21vbnRoMn1gKVxyXG4gICAgICAucmVwbGFjZSgvZGQvLCBgJHtkYXl9YClcclxuICAgICAgLnJlcGxhY2UoL2QvLCBgJHtkYXkyfWApXHJcbiAgICAgIC5yZXBsYWNlKC9oaC8sIGAke2hvdXJ9YClcclxuICAgICAgLnJlcGxhY2UoL2gvLCBgJHtob3VyMn1gKVxyXG4gICAgICAucmVwbGFjZSgvbW0vLCBgJHttaW51dGV9YClcclxuICAgICAgLnJlcGxhY2UoL20vLCBgJHttaW51dGUyfWApXHJcbiAgICAgIC5yZXBsYWNlKC9zcy8sIGAke3NlY29uZH1gKVxyXG4gICAgICAucmVwbGFjZSgvcy8sIGAke3NlY29uZDJ9YClcclxuICB9XHJcbiAgLyoqXHJcbiAgICog6I635Y+W5b2T5YmNdXRj5aSpMOeCuVxyXG4gICAqL1xyXG4gIHB1YmxpYyBVVENEYXRlKCk6IERhdGUge1xyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKVxyXG4gICAgbm93LnNldFVUQ0hvdXJzKDApXHJcbiAgICBub3cuc2V0VVRDTWludXRlcygwKVxyXG4gICAgbm93LnNldFVUQ1NlY29uZHMoMClcclxuICAgIG5vdy5zZXRVVENNaWxsaXNlY29uZHMoMClcclxuICAgIHJldHVybiBub3dcclxuICB9XHJcbiAgLyoqXHJcbiAgICog6I635Y+W5b2T5YmN5pe26Ze05Yiw5YiwMTk3MC0xLTHnmoTlpKnmlbDvvIh1dGPvvIlcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0VVRDRGF0ZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvICgyNCAqIDYwICogNjAgKiAxMDAwKSlcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IG1vZHVsZSBtdmMge1xuICBjbGFzcyBDb250cm9sbGVyTWFuYWdlciB7XG4gICAgcHJpdmF0ZSBjb250cm9sbGVycyA9IG5ldyBNYXAoKVxuXG4gICAgcHVibGljIHJlZ2lzdGVyKG12Yykge1xuICAgICAgY29uc3Qga2V5ID0gbXZjLnZpZXdLZXlcbiAgICAgIGlmICh0aGlzLmlzRXhpc3RzKGtleSkpIHJldHVyblxuICAgICAgaWYgKG12Yy5Db250cm9sbGVyKSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgbXZjLkNvbnRyb2xsZXIoKVxuICAgICAgICBjb250cm9sbGVyLnNldFZpZXcobXZjLnZpZXcpXG4gICAgICAgIGlmIChtdmMuTW9kZWwpIHtcbiAgICAgICAgICBjb250cm9sbGVyLnNldE1vZGVsKG5ldyBtdmMuTW9kZWwoKSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJzLnNldChrZXksIGNvbnRyb2xsZXIpXG4gICAgICAgIG12Yy52aWV3LnNldENvbnRyb2xsZXIoY29udHJvbGxlcilcbiAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHVucmVnaXN0ZXIoY29udHJvbGxlcktleSkge1xuICAgICAgaWYgKCF0aGlzLmlzRXhpc3RzKGNvbnRyb2xsZXJLZXkpKSByZXR1cm5cbiAgICAgIHRoaXMuY29udHJvbGxlcnMuZGVsZXRlKGNvbnRyb2xsZXJLZXkpXG4gICAgfVxuICAgIGlzRXhpc3RzKGNvbnRyb2xsZXJLZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xsZXJzLmhhcyhjb250cm9sbGVyS2V5KVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5bmjIflrppDb250cm9sbGVy5a+56LGhXG4gICAgICogQHBhcmFtICBjb250cm9sbGVyS2V5IENvbnRyb2xsZXLllK/kuIDmoIfor4ZcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIGdldENvbnRyb2xsZXIoY29udHJvbGxlcktleSkge1xuICAgICAgcmV0dXJuIHRoaXMuY29udHJvbGxlcnMuZ2V0KGNvbnRyb2xsZXJLZXkpXG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGNvbnN0IGNvbnRyb2xsZXJNZ3IgPSBuZXcgQ29udHJvbGxlck1hbmFnZXIoKVxufVxuIiwiaW1wb3J0ICogYXMgdiBmcm9tICcuL1ZpZXdNZ3InXHJcbmltcG9ydCAqIGFzIGMgZnJvbSAnLi9Db250cm9sbGVyTWFuYWdlcidcclxuLyoqXHJcbiAqIE1WQ1xyXG4gKiBbXHJcbiAqICB7XHJcbiAqICAgIHZpZXdLZXksXHJcbiAqICAgIFZpZXcsXHJcbiAqICAgIHZpZXcsVmlld+WunuS+i1xyXG4gKiAgICBMYXllcixcclxuICogICAgbGF5ZXIsTGF5ZXLlrp7kvotcclxuICogICAgZXZlbnQsXHJcbiAqICAgIENvbnRyb2xsZXIsXHJcbiAqICAgIE1vZGVsXHJcbiAqICB9XHJcbiAqIF1cclxuICovXHJcbmNvbnN0IE1WQyA9IFtdXHJcbmV4cG9ydCBjb25zdCBmaW5kQnlMYXllcktleSA9IGxheWVyS2V5ID0+IE1WQy5maW5kKGl0ZW0gPT4gaXRlbS5MYXllciAmJiBpdGVtLkxheWVyLmxheWVyS2V5ID09PSBsYXllcktleSlcclxuZXhwb3J0IGNvbnN0IGZpbmRCeVZpZXdLZXkgPSB2aWV3S2V5ID0+IE1WQy5maW5kKGl0ZW0gPT4gaXRlbS52aWV3S2V5ID09PSB2aWV3S2V5KVxyXG5leHBvcnQgY29uc3QgdXBkYXRlTVZDSXRlbSA9ICh7IHZpZXdLZXksIC4uLnByb3AgfSkgPT4ge1xyXG4gIGNvbnN0IGluZGV4ID0gTVZDLmZpbmRJbmRleChpdGVtID0+IGl0ZW0udmlld0tleSA9PT0gdmlld0tleSlcclxuICBsZXQgbXZjXHJcbiAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgIGNvbnN0IGl0ZW0gPSBNVkNbaW5kZXhdXHJcbiAgICBtdmMgPSB7IC4uLml0ZW0sIC4uLnByb3AgfVxyXG4gICAgTVZDLnNwbGljZShpbmRleCwgMSwgbXZjKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBtdmMgPSB7IHZpZXdLZXksIC4uLnByb3AgfVxyXG4gICAgTVZDLnB1c2gobXZjKVxyXG4gIH1cclxuICByZXR1cm4gbXZjXHJcbn1cclxubGV0IFVJID0gTGF5YS5zdGFnZVxyXG5jb25zdCBSZWdpc3Rlck1WQyA9IChMYXllciwgQ29udHJvbGxlciA9IG51bGwsIE1vZGVsID0gbnVsbCkgPT4ge1xyXG4gIHJldHVybiBWaWV3ID0+IHtcclxuICAgIHVwZGF0ZU1WQ0l0ZW0oe1xyXG4gICAgICB2aWV3S2V5OiBWaWV3LnZpZXdLZXksXHJcbiAgICAgIExheWVyLFxyXG4gICAgICBDb250cm9sbGVyLFxyXG4gICAgICBNb2RlbCxcclxuICAgICAgVmlldyxcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbmNvbnN0IHNldFVJUm9vdCA9IHJvb3QgPT4ge1xyXG4gIFVJID0gcm9vdFxyXG59XHJcbmNvbnN0IGNvbnRyb2xsZXJNZ3IgPSBjLm12Yy5jb250cm9sbGVyTWdyXHJcbmNvbnN0IHZpZXdNZ3IgPSB2Lm12Yy52aWV3TWdyXHJcbmNvbnN0IG9wZW5WaWV3ID0gdi5tdmMub3BlblZpZXdcclxuY29uc3QgY2xvc2VWaWV3ID0gdi5tdmMuY2xvc2VWaWV3XHJcbmV4cG9ydCB7IHZpZXdNZ3IsIGNvbnRyb2xsZXJNZ3IsIG9wZW5WaWV3LCBjbG9zZVZpZXcsIFJlZ2lzdGVyTVZDLCBzZXRVSVJvb3QsIE1WQywgVUkgfVxyXG4iLCJpbXBvcnQgeyB1cGRhdGVNVkNJdGVtIH0gZnJvbSAnLi9NdmNNZ3InXHJcblxyXG5leHBvcnQgY29uc3QgQ2xpY2sgPSB1aSA9PiB7XHJcbiAgcmV0dXJuIChWaWV3LCBuYW1lLCBkZXNjcmlwdG9yKSA9PiB7XHJcbiAgICBjb25zdCBFdmVudFR5cGUgPSBMYXlhLkV2ZW50LkNMSUNLXHJcbiAgICBjb25zdCBtdmMgPSB1cGRhdGVNVkNJdGVtKHsgdmlld0tleTogVmlldy5jb25zdHJ1Y3Rvci52aWV3S2V5IH0pXHJcbiAgICBtdmMuZXZlbnQgPSBtdmMuZXZlbnQgfHwge31cclxuICAgIGNvbnN0IGV2ZW50ID0gbXZjLmV2ZW50XHJcbiAgICBldmVudFtFdmVudFR5cGVdID0gZXZlbnRbRXZlbnRUeXBlXSB8fCB7fVxyXG4gICAgY29uc3QgZXZlbnRVSSA9IGV2ZW50W0V2ZW50VHlwZV1cclxuICAgIGV2ZW50VUlbdWldID0gZXZlbnRVSVt1aV0gfHwgW11cclxuICAgIGV2ZW50VUlbdWldLnB1c2goZGVzY3JpcHRvci52YWx1ZSlcclxuXHJcbiAgICByZXR1cm4gZGVzY3JpcHRvclxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGJpbmRFdmVudCA9IG12YyA9PiB7XHJcbiAgaWYgKG12Yy5ldmVudCkge1xyXG4gICAgT2JqZWN0LmVudHJpZXMobXZjLmV2ZW50KS5mb3JFYWNoKGV2ZW50ID0+IHtcclxuICAgICAgY29uc3QgdHlwZSA9IGV2ZW50WzBdXHJcbiAgICAgIGNvbnN0IGV2ZW50VUkgPSBldmVudFsxXVxyXG4gICAgICBPYmplY3QuZW50cmllcyhldmVudFVJKS5mb3JFYWNoKGV2ZW50VUkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVpID0gZXZlbnRVSVswXVxyXG4gICAgICAgIGNvbnN0IGZ1bmMgPSBldmVudFVJWzFdXHJcbiAgICAgICAgZnVuYy5mb3JFYWNoKGZ1bmMgPT4ge1xyXG4gICAgICAgICAgbXZjLnZpZXdbdWldLm9uKHR5cGUsIG12Yy52aWV3LCBmdW5jKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJVmlldyB9IGZyb20gJy4vaW50ZXJmYWNlL0lWaWV3J1xuXG5pbXBvcnQgeyBJTGF5ZXIgfSBmcm9tICcuL2ludGVyZmFjZS9JTGF5ZXInXG5cbmltcG9ydCB7IE1WQywgVUksIGNvbnRyb2xsZXJNZ3IsIGZpbmRCeVZpZXdLZXkgfSBmcm9tICcuL012Y01ncidcbmltcG9ydCB7IGJpbmRFdmVudCB9IGZyb20gJy4vVUlFdmVudCdcblxuZXhwb3J0IG1vZHVsZSBtdmMge1xuICBjbGFzcyBWaWV3TWdyIHtcbiAgICBwcml2YXRlIHZpZXdzOiBNYXA8c3RyaW5nLCBJVmlldz4gPSBuZXcgTWFwPHN0cmluZywgSVZpZXc+KClcbiAgICBwcml2YXRlIGxheWVyczogTWFwPHN0cmluZywgSUxheWVyPiA9IG5ldyBNYXA8c3RyaW5nLCBJTGF5ZXI+KClcbiAgICBwcml2YXRlIG9wZW5WaWV3czogTWFwPHN0cmluZywgSVZpZXc+ID0gbmV3IE1hcDxzdHJpbmcsIElWaWV3PigpXG5cbiAgICBwdWJsaWMgZ2V0VmlldyhrZXkpOiBJVmlldyB7XG4gICAgICByZXR1cm4gdGhpcy52aWV3cy5nZXQoa2V5KVxuICAgIH1cbiAgICBwdWJsaWMgc2V0VmlldyhrZXksIHZpZXc6IElWaWV3KTogdm9pZCB7XG4gICAgICB0aGlzLnZpZXdzLnNldChrZXksIHZpZXcpXG4gICAgfVxuICAgIHB1YmxpYyBnZXRMYXllcihMYXllcik6IElMYXllciB7XG4gICAgICBsZXQgbGF5ZXIgPSB0aGlzLmxheWVycy5nZXQoTGF5ZXIubGF5ZXJLZXkpXG4gICAgICBpZiAobGF5ZXIpIHJldHVybiBsYXllclxuICAgICAgbGF5ZXIgPSB0aGlzLmNyZWF0ZUxheWVyKExheWVyKVxuICAgICAgdGhpcy5zZXRMYXllcihMYXllci5sYXllcktleSwgbGF5ZXIpXG4gICAgICByZXR1cm4gbGF5ZXJcbiAgICB9XG4gICAgcHVibGljIHNldExheWVyKGtleSwgbGF5ZXI6IElMYXllcik6IHZvaWQge1xuICAgICAgdGhpcy5sYXllcnMuc2V0KGtleSwgbGF5ZXIpXG4gICAgfVxuXG4gICAgcHVibGljIG9wZW5WaWV3KFZpZXcsIC4uLmFyZ3MpOiB2b2lkIHtcbiAgICAgIGxldCBfdmlldyA9IHRoaXMub3BlblZpZXdzLmdldChWaWV3LnZpZXdLZXkpXG4gICAgICBpZiAoX3ZpZXcpIHtcbiAgICAgICAgX3ZpZXcub3BlbkNiLmFwcGx5KF92aWV3LCBhcmdzKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIF92aWV3ID0gdGhpcy5nZXRWaWV3KFZpZXcudmlld0tleSlcbiAgICAgIGlmIChfdmlldykge1xuICAgICAgICBfdmlldy5sYXllci5vcGVuVmlldyhfdmlldywgLi4uYXJncylcbiAgICAgICAgdGhpcy5vcGVuVmlld3Muc2V0KFZpZXcudmlld0tleSwgX3ZpZXcpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgX3ZpZXcgPSB0aGlzLmNyZWF0ZVZpZXcoVmlldylcbiAgICAgIF92aWV3LmxheWVyLm9wZW5WaWV3KF92aWV3LCAuLi5hcmdzKVxuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZVZpZXcoVmlldykge1xuICAgICAgY29uc3QgbXZjID0gZmluZEJ5Vmlld0tleShWaWV3LnZpZXdLZXkpXG4gICAgICBjb25zdCBsYXllciA9IHRoaXMuZ2V0TGF5ZXIobXZjLkxheWVyKVxuXG4gICAgICBsZXQgX3ZpZXcgPSBuZXcgbXZjLlZpZXcoKVxuICAgICAgX3ZpZXcubGF5ZXIgPSBsYXllclxuICAgICAgbXZjLnZpZXcgPSBfdmlld1xuICAgICAgbXZjLmxheWVyID0gbGF5ZXJcbiAgICAgIGJpbmRFdmVudChtdmMpXG4gICAgICBjb250cm9sbGVyTWdyLnJlZ2lzdGVyKG12YylcblxuICAgICAgdGhpcy5zZXRWaWV3KG12Yy52aWV3S2V5LCBfdmlldylcbiAgICAgIGlmIChfdmlldy5pbml0KSBfdmlldy5pbml0KClcbiAgICAgIHJldHVybiBfdmlld1xuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZUxheWVyKExheWVyKSB7XG4gICAgICBjb25zdCBfbGF5ZXIgPSBuZXcgTGF5ZXIoVUkpXG4gICAgICBfbGF5ZXIuek9yZGVyID0gTGF5ZXIubGF5ZXJLZXlcbiAgICAgIFVJLmFkZENoaWxkKF9sYXllcilcbiAgICAgIHJldHVybiBfbGF5ZXJcbiAgICB9XG4gICAgcHVibGljIGNsb3NlVmlldyhWaWV3T3JLZXlPckluczogYW55LCAuLi5hcmdzKTogdm9pZCB7XG4gICAgICBsZXQgX3ZpZXdcbiAgICAgIGlmIChWaWV3T3JLZXlPcklucy52aWV3S2V5KSB7XG4gICAgICAgIF92aWV3ID0gdGhpcy5nZXRWaWV3KFZpZXdPcktleU9ySW5zLnZpZXdLZXkpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZ2V0VmlldyhWaWV3T3JLZXlPcklucykpIHtcbiAgICAgICAgX3ZpZXcgPSB0aGlzLmdldFZpZXcoVmlld09yS2V5T3JJbnMpXG4gICAgICB9IGVsc2UgaWYgKFZpZXdPcktleU9ySW5zLmNvbnN0cnVjdG9yLnZpZXdLZXkpIHtcbiAgICAgICAgX3ZpZXcgPSB0aGlzLmdldFZpZXcoVmlld09yS2V5T3JJbnMuY29uc3RydWN0b3Iudmlld0tleSlcbiAgICAgIH1cbiAgICAgIGlmIChfdmlldykge1xuICAgICAgICBfdmlldy5sYXllci5jbG9zZVZpZXcoX3ZpZXcsIC4uLmFyZ3MpXG4gICAgICAgIHRoaXMub3BlblZpZXdzLmRlbGV0ZShfdmlldy5jb25zdHJ1Y3Rvci52aWV3S2V5KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGlzT3BlbihWaWV3T3JLZXlPcklucyk6IGJvb2xlYW4ge1xuICAgICAgbGV0IF92aWV3XG4gICAgICBpZiAoVmlld09yS2V5T3JJbnMudmlld0tleSkge1xuICAgICAgICBfdmlldyA9IHRoaXMub3BlblZpZXdzLmdldChWaWV3T3JLZXlPcklucy52aWV3S2V5KVxuICAgICAgfSBlbHNlIGlmICh0aGlzLm9wZW5WaWV3cy5nZXQoVmlld09yS2V5T3JJbnMpKSB7XG4gICAgICAgIF92aWV3ID0gdGhpcy5vcGVuVmlld3MuZ2V0KFZpZXdPcktleU9ySW5zKVxuICAgICAgfSBlbHNlIGlmIChWaWV3T3JLZXlPcklucy5jb25zdHJ1Y3Rvci52aWV3S2V5KSB7XG4gICAgICAgIF92aWV3ID0gdGhpcy5vcGVuVmlld3MuZ2V0KFZpZXdPcktleU9ySW5zLmNvbnN0cnVjdG9yLnZpZXdLZXkpXG4gICAgICB9XG4gICAgICByZXR1cm4gISFfdmlld1xuICAgIH1cbiAgfVxuICBleHBvcnQgY29uc3Qgdmlld01nciA9IG5ldyBWaWV3TWdyKClcbiAgZXhwb3J0IGNvbnN0IG9wZW5WaWV3ID0gKFZpZXcsIC4uLmFyZ3MpID0+IHtcbiAgICB2aWV3TWdyLm9wZW5WaWV3KFZpZXcsIC4uLmFyZ3MpXG4gIH1cblxuICBleHBvcnQgY29uc3QgY2xvc2VWaWV3ID0gKFZpZXdPcktleU9ySW5zLCAuLi5hcmdzKSA9PiB7XG4gICAgdmlld01nci5jbG9zZVZpZXcoVmlld09yS2V5T3JJbnMsIC4uLmFyZ3MpXG4gIH1cbn1cbiIsImltcG9ydCBCYXNlTW9kZWwgZnJvbSAnLi4vbW9kZWwvQmFzZU1vZGVsJ1xuaW1wb3J0ICogYXMgdiBmcm9tIFwiLi4vdmlldy9CYXNlVmlld1wiO1xuaW1wb3J0IEJhc2VWaWV3ID12LktVSS5CYXNlVmlld1xuaW1wb3J0IEdhbWVBcHAgZnJvbSAnLi4vLi4vZ2FtZS9HYW1lQXBwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUNvbnRyb2xsZXIge1xuICBwcml2YXRlIG1vZGVsOiBCYXNlTW9kZWxcbiAgcHJpdmF0ZSB2aWV3OiBCYXNlVmlld1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1vZGVsID0gbnVsbFxuICAgIHRoaXMudmlldyA9IG51bGxcbiAgICB0aGlzLmluaXQoKVxuICB9XG4gIHB1YmxpYyBpbml0KClcbiAge1xuICAgIFxuICB9XG4gIHB1YmxpYyBzZXRNb2RlbChtb2RlbCkge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbFxuICB9XG4gIHB1YmxpYyBnZXRNb2RlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbFxuICB9XG4gIHB1YmxpYyBzZXRWaWV3KHZpZXcpIHtcbiAgICB0aGlzLnZpZXcgPSB2aWV3XG4gIH1cbiAgcHVibGljIGdldFZpZXcoKSB7XG4gICAgcmV0dXJuIHRoaXMudmlld1xuICB9XG5cbiAgLy/nm5HlkKzkuovku7ZcbiAgcHVibGljIGFkZExpc3RlbmVyKGtleSwgY2FsbGJhY2ssIGNhbGxlcikge1xuICAgIEdhbWVBcHAuZGlzcGF0Y2hlci5PYnNlcnZlKGtleSxjYWxsZXIsY2FsbGJhY2spXG4gIH1cbiAgLy/np7vpmaTnm5HlkKznmoTkuovku7ZcbiAgcHVibGljIHJlbW92ZUxpc3RlbmVyKGtleSkge1xuICAgIEdhbWVBcHAuZGlzcGF0Y2hlci5SZW1vdmUoa2V5KVxuICB9XG4gIC8v6Kem5Y+R5LqL5Lu2XG4gIHB1YmxpYyBkaXNwYXRjaChrZXksIC4uLmFyZ3MpIHtcbiAgICBHYW1lQXBwLmRpc3BhdGNoZXIuU2VuZE1zZyhrZXksYXJncylcbiAgfVxuICAvKipcbiAgICog5rOo5YaM5LuO5pyN5Yqh5Zmo6L+U5Zue5raI5oGv55qE55uR5ZCsXG4gICAqIEBwYXJhbSAgY21kIOa2iOaBr+agh+ivhlxuICAgKiBAcGFyYW0gY2FsbGJhY2sg5aSE55CG5Ye95pWwXG4gICAqIEBwYXJhbSAgdGhpc09iaiDlpITnkIblh73mlbDmiYDlsZ7lr7nosaFcbiAgICovXG4gIG9ic2VydmVyU29ja2V0TXNnKGNtZCwgY2FsbGJhY2ssIHRoaXNPYmopIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBjbWQg5raI5oGv5qCH6K+GXG4gICAqIEBwYXJhbSBtc2cg5pWw5o2uXG4gICAqIEBwYXJhbSBjYWxsYmFjayDlpITnkIblh73mlbBcbiAgICogQHBhcmFtIHRoaXNPYmog5aSE55CG5Ye95pWw5omA5bGe5a+56LGhXG4gICAqL1xuICBzZW5kU29ja2V0TXNnKGNtZCwgbXNnLCBjYWxsYmFjaywgdGhpc09iaikge31cblxuICAvKipcbiAgICog5Y+R6YCB5raI5oGv5YiwSHR0cOacjeWKoeerr1xuICAgKiBAcGFyYW0gIGNtZCDmtojmga/moIfor4Yg5L6L5aaCOiBVc2VyLmxvZ2luXG4gICAqIEBwYXJhbSAgbXNnIOa2iOaBr+WPguaVsCDkvovlpoI6IGxldCBtc2c6YW55ID0ge1widU5hbWVcIjp1TmFtZSwgXCJ1UGFzc1wiOnVQYXNzfTtcbiAgICovXG4gIHNlbmRIdHRwTXNnKGNtZCwgbXNnKSB7fVxuICAvL+WQkeWFtuS7luaooeWdl+mAmuiur1xuICBwdWJsaWMgc2VuZE1lc3NhZ2UoKSB7fVxufVxuIiwiaW1wb3J0IHsgSVZpZXcgfSBmcm9tICcuLi9pbnRlcmZhY2UvSVZpZXcnXHJcbmltcG9ydCB7IExheWVyQ29uc3QgfSBmcm9tICcuLi8uLi9jb25zdC9MYXllckNvbnN0J1xyXG5pbXBvcnQgeyBJTGF5ZXIgfSBmcm9tICcuLi9pbnRlcmZhY2UvSUxheWVyJ1xyXG5leHBvcnQgY2xhc3MgQmFzZUxheWVyIGV4dGVuZHMgTGF5YS5TcHJpdGUgaW1wbGVtZW50cyBJTGF5ZXIge1xyXG4gIHByb3RlY3RlZCBvd25TY2VuZTogTGF5YS5TY2VuZVxyXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBMYXlhLlNjZW5lKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLm93blNjZW5lID0gc2NlbmVcclxuICAgIHRoaXMud2lkdGggPSB0aGlzLm93blNjZW5lLndpZHRoXHJcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMub3duU2NlbmUuaGVpZ2h0XHJcbiAgICB0aGlzLmhpdFRlc3RQcmlvciA9IHRydWVcclxuICAgIHRoaXMubW91c2VUaHJvdWdoID0gdHJ1ZVxyXG4gICAgdGhpcy5tb3VzZUVuYWJsZWQgPSB0cnVlXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgbGF5ZXJLZXkgPSBMYXllckNvbnN0LmJhc2VcclxuICBwdWJsaWMgb3BlblZpZXcodmlldzogSVZpZXcsIC4uLmFyZ3MpOiB2b2lkIHtcclxuICAgIGlmICh2aWV3Lm9wZW5DYikge1xyXG4gICAgICB2aWV3Lm9wZW5DYi5hcHBseSh2aWV3LCBhcmdzKVxyXG4gICAgfVxyXG4gICAgdGhpcy5tb3VzZVRocm91Z2ggPSBmYWxzZVxyXG4gICAgdGhpcy5hZGRDaGlsZCh2aWV3KVxyXG4gIH1cclxuICBwdWJsaWMgY2xvc2VWaWV3KHZpZXc6IElWaWV3KTogdm9pZCB7XHJcbiAgICBpZiAodmlldy5jbG9zZUNiKSB7XHJcbiAgICAgIHZpZXcuY2xvc2VDYigpXHJcbiAgICB9XHJcbiAgICB0aGlzLnJlbW92ZUNoaWxkKHZpZXcpXHJcbiAgICB0aGlzLm1vdXNlVGhyb3VnaCA9IHRoaXMuX2NoaWxkcmVuLmxlbmd0aCA9PT0gMFxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBCYXNlTGF5ZXIgfSBmcm9tICcuL0Jhc2VMYXllcidcclxuaW1wb3J0IHsgSUxheWVyIH0gZnJvbSAnLi4vaW50ZXJmYWNlL0lMYXllcidcclxuaW1wb3J0IHsgTGF5ZXJDb25zdCB9IGZyb20gJy4uLy4uL2NvbnN0L0xheWVyQ29uc3QnXHJcbmltcG9ydCB7IGNsb3NlVmlldyB9IGZyb20gJy4uL012Y01ncidcclxuY2xhc3MgTWFzayBleHRlbmRzIExheWEuSW1hZ2Uge1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMuc2tpbiA9ICdjb21wL2JsYW5rLnBuZydcclxuICAgIHRoaXMuc2l6ZUdyaWQgPSAnMiwyLDIsMidcclxuICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIERpYWxvZ0xheWVyIGV4dGVuZHMgQmFzZUxheWVyIGltcGxlbWVudHMgSUxheWVyIHtcclxuICAvLyBwcml2YXRlIG1NYXNrXHJcbiAgY29uc3RydWN0b3Ioc2NlbmU6IExheWEuU2NlbmUpIHtcclxuICAgIHN1cGVyKHNjZW5lKVxyXG4gIH1cclxuICBzdGF0aWMgbGF5ZXJLZXkgPSBMYXllckNvbnN0LmRpYWxvZ1xyXG5cclxuICBwcml2YXRlIG1hc2tzOiBNYXA8c3RyaW5nLCBMYXlhLkltYWdlPiA9IG5ldyBNYXAoKVxyXG5cclxuICBwdWJsaWMgb3BlblZpZXcodmlldzogYW55LCAuLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgbGV0IG1hc2sgPSB0aGlzLm1hc2tzLmdldCh2aWV3LmNvbnN0cnVjdG9yLnZpZXdLZXkpXHJcbiAgICBpZiAoIW1hc2spIHtcclxuICAgICAgbWFzayA9IG5ldyBNYXNrKClcclxuICAgICAgbWFzay5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgY2xvc2VWaWV3KHZpZXcpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBtYXNrLndpZHRoID0gdGhpcy53aWR0aFxyXG4gICAgbWFzay5oZWlnaHQgPSB0aGlzLmhlaWdodFxyXG5cclxuICAgIHRoaXMubWFza3Muc2V0KHZpZXcuY29uc3RydWN0b3Iudmlld0tleSwgbWFzaylcclxuICAgIHRoaXMuYWRkQ2hpbGQobWFzaylcclxuICAgIHN1cGVyLm9wZW5WaWV3LmFwcGx5KHRoaXMsIFt2aWV3LCAuLi5hcmdzXSlcclxuICAgIHZpZXcuYW5jaG9yWCA9IDAuNVxyXG4gICAgdmlldy5hbmNob3JZID0gMC41XHJcbiAgICB2aWV3LnggPSB2aWV3LndpZHRoIC8gMlxyXG4gICAgdmlldy55ID0gdmlldy5oZWlnaHQgLyAyXHJcbiAgICB2aWV3Lm1vdXNlVGhyb3VnaCA9IHRydWVcclxuICAgIGxldCB0d2VlbiA9IG5ldyBMYXlhLlR3ZWVuKClcclxuICAgIHZpZXcuc2NhbGVYID0gMC44XHJcbiAgICB2aWV3LnNjYWxlWSA9IDAuOFxyXG4gICAgdHdlZW4udG8oXHJcbiAgICAgIHZpZXcsXHJcbiAgICAgIHsgc2NhbGVYOiAxLjA1LCBzY2FsZVk6IDEuMDUgfSxcclxuICAgICAgMTAwLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsICgpID0+IHtcclxuICAgICAgICBsZXQgdHdlZW4gPSBuZXcgTGF5YS5Ud2VlbigpXHJcbiAgICAgICAgdHdlZW4udG8odmlldywgeyBzY2FsZVg6IDEsIHNjYWxlWTogMSB9LCAxMDAsIG51bGwpXHJcbiAgICAgIH0pLFxyXG4gICAgKVxyXG4gIH1cclxuICBwdWJsaWMgY2xvc2VWaWV3KHZpZXc6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLm1hc2tzLmdldCh2aWV3LmNvbnN0cnVjdG9yLnZpZXdLZXkpKVxyXG4gICAgc3VwZXIuY2xvc2VWaWV3KHZpZXcpXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEJhc2VMYXllciB9IGZyb20gJy4vQmFzZUxheWVyJ1xyXG5cclxuaW1wb3J0IHsgSVZpZXcgfSBmcm9tICcuLi9pbnRlcmZhY2UvSVZpZXcnXHJcblxyXG5pbXBvcnQgeyBMYXllckNvbnN0IH0gZnJvbSAnLi4vLi4vY29uc3QvTGF5ZXJDb25zdCdcclxuXHJcbmNvbnN0IGRpcyA9IDEwMFxyXG5jb25zdCB0aW1lID0gMjQwXHJcbmV4cG9ydCBjbGFzcyBWaWV3TGF5ZXIgZXh0ZW5kcyBCYXNlTGF5ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBMYXlhLlNjZW5lKSB7XHJcbiAgICBzdXBlcihzY2VuZSlcclxuICB9XHJcbiAgc3RhdGljIGxheWVyS2V5ID0gTGF5ZXJDb25zdC52aWV3XHJcbiAgcHJpdmF0ZSBvcGVuVmlld3M6IElWaWV3W10gPSBbXVxyXG4gXHJcbiAgcHVibGljIG9wZW5WaWV3KHZpZXc6IGFueSwgLi4uYXJncykge1xyXG4gICAgbGV0IGxhc3RWaWV3OiBMYXlhLlNwcml0ZVxyXG4gICAgY29uc3QgdHdlZW4xID0gbmV3IExheWEuVHdlZW4oKVxyXG4gICAgaWYgKHRoaXMub3BlblZpZXdzLmxlbmd0aCkge1xyXG4gICAgICBsYXN0VmlldyA9IHRoaXMub3BlblZpZXdzW3RoaXMub3BlblZpZXdzLmxlbmd0aCAtIDFdXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsYXN0VmlldyA9IHRoaXMub3duU2NlbmVcclxuICAgIH1cclxuICAgIGxhc3RWaWV3LnggPSB0aGlzLm93blNjZW5lID09PSBsYXN0VmlldyA/IDAgOiBkaXNcclxuICAgIHR3ZWVuMS50byhcclxuICAgICAgbGFzdFZpZXcsXHJcbiAgICAgIHsgeDogdGhpcy5vd25TY2VuZSA9PT0gbGFzdFZpZXcgPyAtZGlzIDogMCB9LFxyXG4gICAgICB0aW1lLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBuZXcgTGF5YS5IYW5kbGVyKGxhc3RWaWV3LCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGxhc3RWaWV3ICE9PSB0aGlzLm93blNjZW5lKSBsYXN0Vmlldy5yZW1vdmVTZWxmKClcclxuICAgICAgfSksXHJcbiAgICApXHJcbiAgICB0aGlzLm9wZW5WaWV3cy5wdXNoKHZpZXcpXHJcbiAgICBzdXBlci5vcGVuVmlldy5hcHBseSh0aGlzLCBbdmlldywgLi4uYXJnc10pXHJcbiAgICBjb25zdCB0d2VlbjIgPSBuZXcgTGF5YS5Ud2VlbigpXHJcbiAgICB2aWV3LnggPSB0aGlzLndpZHRoXHJcbiAgICB0d2VlbjIudG8oXHJcbiAgICAgIHZpZXcsXHJcbiAgICAgIHsgeDogZGlzIH0sXHJcbiAgICAgIHRpbWUsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG5ldyBMYXlhLkhhbmRsZXIodmlldywgKCkgPT4ge1xyXG4gICAgICAgIGlmICh2aWV3LmFmdGVyT3Blbikge1xyXG4gICAgICAgICAgdmlldy5hZnRlck9wZW4uY2FsbCh2aWV3KVxyXG4gICAgICAgIH1cclxuICAgICAgfSksXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xvc2VWaWV3KHZpZXc6IGFueSkge1xyXG4gICAgbGV0IGxhc3RWaWV3XHJcbiAgICBjb25zdCB0d2VlbjEgPSBuZXcgTGF5YS5Ud2VlbigpXHJcbiAgICB0aGlzLm9wZW5WaWV3cy5wb3AoKVxyXG4gICAgaWYgKHRoaXMub3BlblZpZXdzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGFzdFZpZXcgPSB0aGlzLm9wZW5WaWV3c1t0aGlzLm9wZW5WaWV3cy5sZW5ndGggLSAxXVxyXG4gICAgICBsYXN0Vmlldy56T3JkZXIgPSB2aWV3LnpPcmRlciAtIDFcclxuICAgICAgbGFzdFZpZXcubGF5ZXIuYWRkQ2hpbGQobGFzdFZpZXcpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsYXN0VmlldyA9IHRoaXMub3duU2NlbmVcclxuICAgIH1cclxuXHJcbiAgICBsYXN0Vmlldy54ID0gbGFzdFZpZXcgPT09IHRoaXMub3duU2NlbmUgPyAtZGlzIDogMFxyXG5cclxuICAgIHR3ZWVuMS50byhsYXN0VmlldywgeyB4OiBsYXN0VmlldyA9PT0gdGhpcy5vd25TY2VuZSA/IDAgOiBkaXMgfSwgdGltZSlcclxuICAgIGNvbnN0IHR3ZWVuMiA9IG5ldyBMYXlhLlR3ZWVuKClcclxuICAgIHZpZXcueCA9IGRpc1xyXG4gICAgdHdlZW4yLnRvKFxyXG4gICAgICB2aWV3LFxyXG4gICAgICB7IHg6IHRoaXMud2lkdGggfSxcclxuICAgICAgdGltZSxcclxuICAgICAgbnVsbCxcclxuICAgICAgbmV3IExheWEuSGFuZGxlcih0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgc3VwZXIuY2xvc2VWaWV3KHZpZXcpXHJcbiAgICAgIH0pLFxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlTW9kZWx7XG4gICAgXG59IiwiaW1wb3J0IEJhc2VDb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXIvQmFzZUNvbnRyb2xsZXInXG5cbmV4cG9ydCBuYW1lc3BhY2UgS1VJIHtcbiAgZXhwb3J0IGNsYXNzIEJhc2VWaWV3IGV4dGVuZHMgTGF5YS5WaWV3IHtcbiAgICBwdWJsaWMgY29udHJvbGxlcjogQmFzZUNvbnRyb2xsZXJcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKClcbiAgICB9XG4gICAgcHVibGljIHNldENvbnRyb2xsZXIoY3RybCkge1xuICAgICAgdGhpcy5jb250cm9sbGVyID0gY3RybFxuICAgIH1cbiAgICBwdWJsaWMgaW5pdCgpIHtcbiAgICAgIHRoaXMuaW5pdERhdGEoKVxuICAgICAgdGhpcy5pbml0UmVzKClcbiAgICAgIHRoaXMuaW5pdFZpZXcoKVxuICAgIH1cbiAgICBwdWJsaWMgaW5pdERhdGEoKSB7fVxuICAgIHB1YmxpYyBpbml0UmVzKCkge31cbiAgICBwdWJsaWMgaW5pdFZpZXcoKSB7fVxuICB9XG59XG4iLCJpbXBvcnQgeyBEaXNwYXRjaGVyIH0gZnJvbSAnLi9kaXNwYXRjaGVyL0Rpc3BhdGNoZXInXHJcblxyXG5leHBvcnQgY2xhc3MgU2VydmljZSB7XHJcbiAgcHVibGljIHN0YXRpYyBJbml0KCk6IHZvaWQge31cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZGlzcGF0Y2hlcigpOiBEaXNwYXRjaGVyIHtcclxuICAgIHJldHVybiBEaXNwYXRjaGVyLkNyZWF0ZU9yR2V0KClcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgT2JzZXJ2ZXIgfSBmcm9tICcuL09ic2VydmVyJ1xuaW1wb3J0IHsgU2luZ2xldG9uIH0gZnJvbSAnLi4vLi4vYmFzZS9TaW5nbGV0b24nXG5leHBvcnQgY2xhc3MgRGlzcGF0Y2hlciBleHRlbmRzIFNpbmdsZXRvbiB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5fb2JzZXJ2ZXJzID0ge31cbiAgfVxuXG4gIC8qKlxuICAgKiDmtojmga/liJfooahcbiAgICovXG4gIHByaXZhdGUgX29ic2VydmVyczogYW55XG5cbiAgcHVibGljIE9ic2VydmUodG9waWNfOiBhbnksIG9ic2VydmVyXzogYW55LCBoYW5kbGVyXzogRnVuY3Rpb24pOiBPYnNlcnZlciB7XG4gICAgaWYgKCF0aGlzLl9vYnNlcnZlcnNbdG9waWNfXSkgdGhpcy5fb2JzZXJ2ZXJzW3RvcGljX10gPSBbXVxuICAgIGxldCBvYnNlcnZlcjogT2JzZXJ2ZXIgPSBuZXcgT2JzZXJ2ZXIodG9waWNfLCBvYnNlcnZlcl8sIGhhbmRsZXJfKVxuICAgIHRoaXMuX29ic2VydmVyc1t0b3BpY19dLnB1c2gob2JzZXJ2ZXIpXG4gICAgcmV0dXJuIG9ic2VydmVyLlJldXNlKHRvcGljXywgb2JzZXJ2ZXJfLCBoYW5kbGVyXylcbiAgfVxuXG4gIHB1YmxpYyBPYnNlcnZlTGlzdChvYnNlcnZlcl86IGFueSwgdG9waWNzXzogYW55W10sIGhhbmRsZXJzXzogYW55W10pOiBPYnNlcnZlcltdIHtcbiAgICBsZXQgbGlzdDogT2JzZXJ2ZXJbXSA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3BpY3NfLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaXN0LnB1c2godGhpcy5PYnNlcnZlKHRvcGljc19baV0sIG9ic2VydmVyXywgaGFuZGxlcnNfW2ldKSlcbiAgICB9XG4gICAgcmV0dXJuIGxpc3RcbiAgfVxuXG4gIHB1YmxpYyBSZW1vdmVMaXN0KG9iczogT2JzZXJ2ZXJbXSk6IHZvaWQge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLlJlbW92ZShvYnNbaV0pXG4gICAgfVxuICB9XG5cbiAgcHVibGljIFNlbmRNc2codG9waWNfOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55W10ge1xuICAgIGlmICghdGhpcy5fb2JzZXJ2ZXJzW3RvcGljX10pIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgbGV0IHJldDogYW55W10gPSBbXVxuICAgIHRoaXMuX29ic2VydmVyc1t0b3BpY19dLmZvckVhY2goXG4gICAgICAoZWxlbWVudCk6IHZvaWQgPT4ge1xuICAgICAgICByZXQucHVzaChlbGVtZW50LlJlY3ZNc2coLi4uYXJncykpXG4gICAgICB9LFxuICAgIClcbiAgICByZXR1cm4gcmV0XG4gIH1cblxuICBwdWJsaWMgUmVtb3ZlKG9iczogT2JzZXJ2ZXIpOiBPYnNlcnZlciB7XG4gICAgaWYgKG9icyA9PSBudWxsKSByZXR1cm5cbiAgICBsZXQgYXJyOiBhbnlbXSA9IHRoaXMuX29ic2VydmVyc1tvYnMudG9waWNdXG5cbiAgICBpZiAoIWFycikgcmV0dXJuIG51bGxcblxuICAgIGxldCBpbmQ6IG51bWJlciA9IGFyci5pbmRleE9mKG9icylcbiAgICBpZiAoaW5kIDwgMCkgcmV0dXJuIG51bGxcblxuICAgIGFyci5zcGxpY2UoaW5kLCAxKVxuICAgIHJldHVybiBvYnNcbiAgfVxuXG4gIHB1YmxpYyBSZW1vdmVBbGwodG9waWM6IGFueSk6IHZvaWQge1xuICAgIGxldCBhcnI6IGFueVtdID0gdGhpcy5fb2JzZXJ2ZXJzW3RvcGljXVxuICAgIGlmICghYXJyKSByZXR1cm5cbiAgICBhcnIuc3BsaWNlKDAsIGFyci5sZW5ndGgpXG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBPYnNlcnZlciB7XG4gIHB1YmxpYyB0b3BpYzogYW55XG4gIHB1YmxpYyBvYnNlcnZlcjogYW55XG4gIHB1YmxpYyBoYW5kbGVyOiBGdW5jdGlvblxuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0b3BpY186IGFueSwgb2JzZXJ2ZXJfOiBhbnksIGhhbmRsZXJfOiBGdW5jdGlvbikge1xuICAgIHRoaXMuUmV1c2UodG9waWNfLCBvYnNlcnZlcl8sIGhhbmRsZXJfKVxuICB9XG5cbiAgcHVibGljIFJldXNlKHRvcGljXzogYW55LCBvYnNlcnZlcl86IGFueSwgaGFuZGxlcl86IEZ1bmN0aW9uKTogT2JzZXJ2ZXIge1xuICAgIHRoaXMudG9waWMgPSB0b3BpY19cbiAgICB0aGlzLm9ic2VydmVyID0gb2JzZXJ2ZXJfXG4gICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcl9cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgcHVibGljIFJlY3ZNc2coLi4uYXJnczogYW55W10pOiB2b2lkIHtcbiAgICBsZXQgcmV0OiBhbnlcbiAgICBpZiAoIXRoaXMub2JzZXJ2ZXIpIHtcbiAgICAgIHJldCA9IHRoaXMuaGFuZGxlciguLi5hcmdzKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXQgPSB0aGlzLmhhbmRsZXIuYXBwbHkodGhpcy5vYnNlcnZlciwgYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJldFxuICB9XG59XG4iLCJpbXBvcnQgeyB1aSB9IGZyb20gJy4uLy4uLy4uLy4uL3VpL2xheWFNYXhVSSdcbmltcG9ydCBCUGFnZSBmcm9tICcuLi9CUGFnZS9CUGFnZSdcbmltcG9ydCB7IFZpZXdDb25zdCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvY29uc3QvVmlld0NvbnN0J1xuaW1wb3J0IHsgQmFzZUxheWVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9tdmMvbGF5ZXIvQmFzZUxheWVyJ1xuaW1wb3J0IHsgUmVnaXN0ZXJNVkMsIG9wZW5WaWV3IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9tdmMvTXZjTWdyJ1xuaW1wb3J0IEFQYWdlQ29udHJvbGxlciBmcm9tICcuL0FQYWdlQ29udHJvbGxlcidcbmltcG9ydCBBUGFnZU1vZGVsIGZyb20gJy4vQXBhZ2VNb2RlbCdcbmltcG9ydCBCYXNlVGVzdCBmcm9tICcuLi9CYXNlVGVzdCdcbkBSZWdpc3Rlck1WQyhCYXNlTGF5ZXIsIEFQYWdlQ29udHJvbGxlciwgQVBhZ2VNb2RlbClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFQYWdlIGV4dGVuZHMgdWkudmlldy5BUGFnZVVJIHtcbiAgc3RhdGljIHZpZXdLZXkgPSBWaWV3Q29uc3QuQVBhZ2VcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuYnRuLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcbiAgICAgIG9wZW5WaWV3KEJQYWdlKVxuICAgIH0pXG4gICAgdGhpcy5iYXNlQnRuLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcbiAgICAgIG9wZW5WaWV3KEJhc2VUZXN0KVxuICAgIH0pXG4gIH1cbiAgcHVibGljIGluaXQoKSB7XG4gICAgdGhpcy5jb250cm9sbGVyLmFkZExpc3RlbmVyKFxuICAgICAgJ2NoYW5nZScsXG4gICAgICBhcmdzID0+IHtcbiAgICAgICAgdGhpcy5jb250ZW50cy50ZXh0ID0gYXJnc1swXVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzKVxuICAgICAgfSxcbiAgICAgIHRoaXMsXG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgQmFzZUNvbnRyb2xsZXIgZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9tdmMvY29udHJvbGxlci9CYXNlQ29udHJvbGxlcidcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFQYWdlQ29udHJvbGxlciBleHRlbmRzIEJhc2VDb250cm9sbGVyIHtcbiAgLyoqXG4gICAqXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gIH1cbiAgcHVibGljIGluaXQoKSB7XG4gICAgc3VwZXIuaW5pdCgpXG4gIH1cblxufVxuIiwiaW1wb3J0IEJhc2VNb2RlbCBmcm9tIFwiLi4vLi4vLi4vLi4vY29yZS9tdmMvbW9kZWwvQmFzZU1vZGVsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFQYWdlTW9kZWwgZXh0ZW5kcyBCYXNlTW9kZWx7XG4gICAgXG59IiwiaW1wb3J0IHsgdWkgfSBmcm9tICcuLi8uLi8uLi8uLi91aS9sYXlhTWF4VUknXG5pbXBvcnQgeyBWaWV3Q29uc3QgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2NvbnN0L1ZpZXdDb25zdCdcbmltcG9ydCB7IERpYWxvZ0xheWVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9tdmMvbGF5ZXIvRGlhbG9nTGF5ZXInXG5pbXBvcnQgQlBhZ2VDb250cm9sbGVyIGZyb20gJy4vQlBhZ2VDb250cm9sbGVyJ1xuaW1wb3J0IEJQYWdlTW9kZWwgZnJvbSAnLi9CUGFnZU1vZGVsJ1xuaW1wb3J0IHsgUmVnaXN0ZXJNVkMsIGNsb3NlVmlldyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvbXZjL012Y01ncidcbkBSZWdpc3Rlck1WQyhEaWFsb2dMYXllciwgQlBhZ2VDb250cm9sbGVyLCBCUGFnZU1vZGVsKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQlBhZ2UgZXh0ZW5kcyB1aS52aWV3LkJQYWdlVUkge1xuICBzdGF0aWMgdmlld0tleSA9IFZpZXdDb25zdC5CUGFnZVxuIFxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gIH1cbiAgcHVibGljIGluaXQoKSB7XG4gICAgdGhpcy5jbG9zZV9idG4ub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCkgPT4ge1xuICAgICAgY2xvc2VWaWV3KHRoaXMpXG4gICAgfSlcbiAgICB0aGlzLmNoYW5nZS5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKSA9PiB7XG4gICAgICB0aGlzLmNvbnRyb2xsZXIuZGlzcGF0Y2goJ2NoYW5nZScsIFsnI2VlMzMyMSddKVxuICAgIH0pXG4gIH1cbn1cbiIsImltcG9ydCBCYXNlQ29udHJvbGxlciBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL212Yy9jb250cm9sbGVyL0Jhc2VDb250cm9sbGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCUGFnZUNvbnRyb2xsZXIgZXh0ZW5kcyBCYXNlQ29udHJvbGxlciB7XG4gIC8qKlxuICAgKlxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICB9XG4gIHB1YmxpYyBpbml0KCkge1xuICAgIHN1cGVyLmluaXQoKVxuICB9XG59XG4iLCJpbXBvcnQgQmFzZU1vZGVsIGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvbXZjL21vZGVsL0Jhc2VNb2RlbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQlBhZ2VNb2RlbCBleHRlbmRzIEJhc2VNb2RlbCB7XG4gIHB1YmxpYyBjb2xvcjogc3RyaW5nXG59XG4iLCJpbXBvcnQgeyB1aSB9IGZyb20gJy4uLy4uLy4uL3VpL2xheWFNYXhVSSdcbmltcG9ydCB7IElWaWV3IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvaW50ZXJmYWNlL0lWaWV3J1xuaW1wb3J0IHsgVmlld0NvbnN0IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9jb25zdC9WaWV3Q29uc3QnXG5pbXBvcnQgeyBCYXNlTGF5ZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL212Yy9sYXllci9CYXNlTGF5ZXInXG5pbXBvcnQgRGlhbG9nVGVzdCBmcm9tICcuL0RpYWxvZ1Rlc3QnXG5pbXBvcnQgVmlld1Rlc3QgZnJvbSAnLi9WaWV3VGVzdCdcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vTG9hZGluZydcbmltcG9ydCB7IFJlZ2lzdGVyTVZDLCBvcGVuVmlldywgY2xvc2VWaWV3IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvTXZjTWdyJ1xuaW1wb3J0IHsgQ2xpY2sgfSBmcm9tICcuLi8uLi8uLi9jb3JlL212Yy9VSUV2ZW50J1xuQFJlZ2lzdGVyTVZDKEJhc2VMYXllcilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VUZXN0IGV4dGVuZHMgdWkudmlldy5CYXNlVGVzdFVJIGltcGxlbWVudHMgSVZpZXcge1xuICBzdGF0aWMgdmlld0tleSA9IFZpZXdDb25zdC5CYXNlVGVzdFxuICBwdWJsaWMgbW92ZVkgPSBmYWxzZVxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy50aW1lckxvb3AoNTAwLCB0aGlzLCAoKSA9PiB7XG4gICAgICB0aGlzLnRhbmsuaW5kZXggPSB0aGlzLnRhbmsuaW5kZXggPT09IDcgPyA0IDogdGhpcy50YW5rLmluZGV4ICsgMVxuICAgIH0pXG4gICAgdGhpcy50aW1lckxvb3AoMjUwLCB0aGlzLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5tb3ZlWSkge1xuICAgICAgICB0aGlzLnRhbmsuY2VudGVyWSArPSAxXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRhbmsuY2VudGVyWSAtPSAxXG4gICAgICB9XG4gICAgICB0aGlzLm1vdmVZID0gIXRoaXMubW92ZVlcbiAgICB9KVxuXG4gICAgdGhpcy5kaWFsb2dCdG4ub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCkgPT4ge30pXG4gICAgdGhpcy52aWV3QnRuLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcbiAgICAgIG9wZW5WaWV3KFZpZXdUZXN0LCAxLCAyKVxuICAgIH0pXG4gICAgdGhpcy5sb2FkaW5nQnRuLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcbiAgICAgIG9wZW5WaWV3KExvYWRpbmcsIDEsIDIsIDMpXG4gICAgfSlcbiAgICB0aGlzLmNsb3NlQnRuLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcbiAgICAgIGNsb3NlVmlldyh0aGlzKVxuICAgIH0pXG4gIH1cbiAgQENsaWNrKCdkaWFsb2dCdG4nKVxuICBAQ2xpY2soJ2xvYWRpbmdCdG4nKVxuICBwcml2YXRlIHRvZG8xKHR5cGUpIHtcbiAgICBjb25zb2xlLmxvZygnY2xpY2snKVxuICAgIGNvbnNvbGUubG9nKHR5cGUpXG4gICAgY29uc29sZS5sb2codGhpcylcbiAgfVxuICBwdWJsaWMgb3BlbkNiKCkge1xuICAgIGNvbnNvbGUubG9nKCdCYXNlVGVzdCBvcGVuJylcbiAgfVxufVxuIiwiaW1wb3J0IHsgdWkgfSBmcm9tICcuLi8uLi8uLi91aS9sYXlhTWF4VUknXHJcbmltcG9ydCB7IElWaWV3IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvaW50ZXJmYWNlL0lWaWV3J1xyXG5pbXBvcnQgeyBWaWV3Q29uc3QgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2NvbnN0L1ZpZXdDb25zdCdcclxuaW1wb3J0IHsgQmFzZUxheWVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvbGF5ZXIvQmFzZUxheWVyJ1xyXG5pbXBvcnQgeyBSZWdpc3Rlck1WQywgY2xvc2VWaWV3IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvTXZjTWdyJ1xyXG5AUmVnaXN0ZXJNVkMoQmFzZUxheWVyKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgdWkudmlldy5Mb2FkaW5nVUkgaW1wbGVtZW50cyBJVmlldyB7XHJcbiAgc3RhdGljIHZpZXdLZXkgPSBWaWV3Q29uc3QuTG9hZGluZ1xyXG4gIHB1YmxpYyBtb3ZlWSA9IGZhbHNlXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnRpbWVyTG9vcCg1MDAsIHRoaXMsICgpID0+IHtcclxuICAgICAgdGhpcy50YW5rLmluZGV4ID0gdGhpcy50YW5rLmluZGV4ID09PSA3ID8gNCA6IHRoaXMudGFuay5pbmRleCArIDFcclxuICAgIH0pXHJcbiAgICB0aGlzLnRpbWVyTG9vcCgyNTAsIHRoaXMsICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMubW92ZVkpIHtcclxuICAgICAgICB0aGlzLnRhbmsuY2VudGVyWSArPSAxXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50YW5rLmNlbnRlclkgLT0gMVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubW92ZVkgPSAhdGhpcy5tb3ZlWVxyXG4gICAgfSlcclxuICAgIHRoaXMuYnRuX2Nsb3NlLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcclxuICAgICAgY2xvc2VWaWV3KHRoaXMpXHJcbiAgICB9KVxyXG4gIH1cclxuICBwdWJsaWMgb3BlbkNiKC4uLmFyZ3MpIHtcclxuICAgIGNvbnNvbGUubG9nKCdMb2FkaW5nIG9wZW4nLCBhcmdzKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyB1aSB9IGZyb20gJy4uLy4uLy4uL3VpL2xheWFNYXhVSSdcbmltcG9ydCB7IElWaWV3IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvaW50ZXJmYWNlL0lWaWV3J1xuaW1wb3J0IHsgVmlld0NvbnN0IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9jb25zdC9WaWV3Q29uc3QnXG5pbXBvcnQgeyBWaWV3TGF5ZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL212Yy9sYXllci9WaWV3TGF5ZXInXG5pbXBvcnQgVmlld1Rlc3QxIGZyb20gJy4vVmlld1Rlc3QxJ1xuaW1wb3J0IHsgUmVnaXN0ZXJNVkMsIGNsb3NlVmlldywgb3BlblZpZXcgfSBmcm9tICcuLi8uLi8uLi9jb3JlL212Yy9NdmNNZ3InXG5AUmVnaXN0ZXJNVkMoVmlld0xheWVyKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld1Rlc3QgZXh0ZW5kcyB1aS52aWV3LlZpZXdUZXN0VUkgaW1wbGVtZW50cyBJVmlldyB7XG4gIHN0YXRpYyB2aWV3S2V5ID0gVmlld0NvbnN0LlZpZXdUZXN0XG4gIHB1YmxpYyBtb3ZlWSA9IGZhbHNlXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcblxuICAgIHRoaXMudGltZXJMb29wKDUwMCwgdGhpcywgKCkgPT4ge1xuICAgICAgdGhpcy50YW5rLmluZGV4ID0gdGhpcy50YW5rLmluZGV4ID09PSA3ID8gNCA6IHRoaXMudGFuay5pbmRleCArIDFcbiAgICB9KVxuICAgIHRoaXMudGltZXJMb29wKDI1MCwgdGhpcywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMubW92ZVkpIHtcbiAgICAgICAgdGhpcy50YW5rLmNlbnRlclkgKz0gMVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50YW5rLmNlbnRlclkgLT0gMVxuICAgICAgfVxuICAgICAgdGhpcy5tb3ZlWSA9ICF0aGlzLm1vdmVZXG4gICAgfSlcbiAgICB0aGlzLmNsb3NlQnRuLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcbiAgICAgIGNsb3NlVmlldyh0aGlzKVxuICAgIH0pXG4gICAgdGhpcy52aWV3QnRuLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcbiAgICAgIG9wZW5WaWV3KFZpZXdUZXN0MSlcbiAgICB9KVxuICB9XG4gIHB1YmxpYyBvcGVuQ2IoKSB7XG4gICAgY29uc29sZS5sb2coJ1ZpZXdUZXN0IG9wZW4nKVxuICB9XG59XG4iLCJpbXBvcnQgeyB1aSB9IGZyb20gJy4uLy4uLy4uL3VpL2xheWFNYXhVSSdcbmltcG9ydCB7IElWaWV3IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvaW50ZXJmYWNlL0lWaWV3J1xuaW1wb3J0IHsgVmlld0NvbnN0IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9jb25zdC9WaWV3Q29uc3QnXG5pbXBvcnQgeyBWaWV3TGF5ZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL212Yy9sYXllci9WaWV3TGF5ZXInXG5pbXBvcnQgeyBSZWdpc3Rlck1WQywgY2xvc2VWaWV3IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvTXZjTWdyJ1xuQFJlZ2lzdGVyTVZDKFZpZXdMYXllcilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdUZXN0MSBleHRlbmRzIHVpLnZpZXcuVmlld1Rlc3QxVUkgaW1wbGVtZW50cyBJVmlldyB7XG4gIHN0YXRpYyB2aWV3S2V5ID0gVmlld0NvbnN0LlZpZXdUZXN0MVxuICBwdWJsaWMgbW92ZVkgPSBmYWxzZVxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLnRpbWVyTG9vcCg1MDAsIHRoaXMsICgpID0+IHtcbiAgICAgIHRoaXMudGFuay5pbmRleCA9IHRoaXMudGFuay5pbmRleCA9PT0gNyA/IDQgOiB0aGlzLnRhbmsuaW5kZXggKyAxXG4gICAgfSlcbiAgICB0aGlzLnRpbWVyTG9vcCgyNTAsIHRoaXMsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLm1vdmVZKSB7XG4gICAgICAgIHRoaXMudGFuay5jZW50ZXJZICs9IDFcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGFuay5jZW50ZXJZIC09IDFcbiAgICAgIH1cbiAgICAgIHRoaXMubW92ZVkgPSAhdGhpcy5tb3ZlWVxuICAgIH0pXG4gICAgdGhpcy5jbG9zZUJ0bi5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKSA9PiB7XG4gICAgICBjbG9zZVZpZXcodGhpcylcbiAgICB9KVxuICB9XG4gIHB1YmxpYyBvcGVuQ2IoKSB7XG4gICAgY29uc29sZS5sb2coJ1ZpZXdUZXN0IG9wZW4nKVxuICB9XG59XG4iLCJpbXBvcnQgeyBTaW5nbGV0b24gfSBmcm9tICcuLi8uLi9jb3JlL2Jhc2UvU2luZ2xldG9uJ1xuaW1wb3J0IE5ldFJlcXVlc3QgZnJvbSAnLi9OZXRSZXF1ZXN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTmV0IGV4dGVuZHMgU2luZ2xldG9uIHtcbiAgcHJpdmF0ZSBzZXJ2ZXJVcmw6IHN0cmluZ1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gIH1cbiAgcHVibGljIGluaXRTZXJ2ZXIodXJsOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNlcnZlclVybCA9IHVybFxuICB9XG4gIHB1YmxpYyBzZW5kKGFwaTogc3RyaW5nLCBib2R5VmFyaWFibGVzOiBhbnkgPSBudWxsLCB1cmxWYXJpYWJsZXM6IGFueSA9ICcnLCBtZXRob2Q6IHN0cmluZyA9ICdwb3N0JywgcmVzcG9uc2VUeXBlOiBzdHJpbmcgPSAnanNvbicsIGhlYWRlcj86IGFueVtdKSB7XG4gICAgdGhpcy5zZW5kQnlVcmwodGhpcy5zZXJ2ZXJVcmwsIGFwaSwgYm9keVZhcmlhYmxlcywgdXJsVmFyaWFibGVzLCBtZXRob2QsIHJlc3BvbnNlVHlwZSwgaGVhZGVyKVxuICB9XG4gIHB1YmxpYyBzZW5kUHJvbWlzZShhcGk6IHN0cmluZywgYm9keVZhcmlhYmxlczogYW55ID0gbnVsbCwgdXJsVmFyaWFibGVzOiBhbnkgPSAnJywgbWV0aG9kOiBzdHJpbmcgPSAncG9zdCcsIHJlc3BvbnNlVHlwZTogc3RyaW5nID0gJ2pzb24nLCBoZWFkZXI/OiBhbnlbXSkge1xuICAgIHRoaXMuc2VuZFByb21pc2VCeVVybCh0aGlzLnNlcnZlclVybCwgYXBpLCBib2R5VmFyaWFibGVzLCB1cmxWYXJpYWJsZXMsIG1ldGhvZCwgcmVzcG9uc2VUeXBlLCBoZWFkZXIpXG4gIH1cbiAgcHVibGljIHNlbmRCeVVybCh1cmw6IHN0cmluZywgYXBpOiBzdHJpbmcsIGJvZHlWYXJpYWJsZXM6IGFueSA9IG51bGwsIHVybFZhcmlhYmxlczogYW55ID0gJycsIG1ldGhvZDogc3RyaW5nID0gJ3Bvc3QnLCByZXNwb25zZVR5cGU6IHN0cmluZyA9ICdqc29uJywgaGVhZGVyPzogYW55W10pIHtcbiAgICBsZXQgcmVxID0gTmV0UmVxdWVzdC5DcmVhdGUoYXBpLCB1cmwgKyBhcGkgKyB1cmxWYXJpYWJsZXMsIGJvZHlWYXJpYWJsZXMsIG1ldGhvZCwgcmVzcG9uc2VUeXBlLCBoZWFkZXIpXG4gICAgcmVxLlNlbmQoKVxuICB9XG4gIHB1YmxpYyBhc3luYyBzZW5kUHJvbWlzZUJ5VXJsKHVybDogc3RyaW5nLCBhcGk6IHN0cmluZywgYm9keVZhcmlhYmxlczogYW55ID0gbnVsbCwgdXJsVmFyaWFibGVzOiBhbnkgPSAnJywgbWV0aG9kOiBzdHJpbmcgPSAncG9zdCcsIHJlc3BvbnNlVHlwZTogc3RyaW5nID0gJ2pzb24nLCBoZWFkZXI/OiBhbnlbXSkge1xuICAgIGxldCByZXEgPSBOZXRSZXF1ZXN0LkNyZWF0ZShhcGksIHVybCArIGFwaSArIHVybFZhcmlhYmxlcywgYm9keVZhcmlhYmxlcywgbWV0aG9kLCByZXNwb25zZVR5cGUsIGhlYWRlcilcbiAgICBjb25zdCBnZXQgPSBhd2FpdCByZXEuU2VuZFByb21pc2UoKVxuICAgIHJldHVybiBnZXRcbiAgfVxufVxuIiwiaW1wb3J0IEdhbWVBcHAgZnJvbSAnLi4vLi4vY29yZS9nYW1lL0dhbWVBcHAnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ldFJlcXVlc3Qge1xuICBwcml2YXRlIHJlcTogbGF5YS5uZXQuSHR0cFJlcXVlc3RcbiAgcHJpdmF0ZSB1cmw6IHN0cmluZ1xuICBwcml2YXRlIGRhdGE6IGFueVxuICBwcml2YXRlIG1ldGhvZDogc3RyaW5nXG4gIHByaXZhdGUgcmVzcG9uc2VUeXBlOiBzdHJpbmdcbiAgcHJpdmF0ZSBoZWFkZXJzOiBhbnlbXVxuICBwcml2YXRlIGFwaVBhdGg6IHN0cmluZ1xuICBwcml2YXRlIG1lc3NhZ2VLZXk6IGFueVxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgIGxldCByZXEgPSBuZXcgbGF5YS5uZXQuSHR0cFJlcXVlc3QoKVxuICAgIHRoaXMucmVxID0gcmVxXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIENyZWF0ZShhcGlQYXRoOiBzdHJpbmcsIHVybDogc3RyaW5nLCBkYXRhPzogYW55LCBtZXRob2Q/OiBzdHJpbmcsIHJlc3BvbnNlVHlwZT86IHN0cmluZywgaGVhZGVycz86IGFueVtdLCBtZXNzYWdlS2V5Pyk6IE5ldFJlcXVlc3Qge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IE5ldFJlcXVlc3QoKVxuICAgIHJlcXVlc3QudXJsID0gdXJsXG4gICAgcmVxdWVzdC5kYXRhID0gZGF0YVxuICAgIHJlcXVlc3QubWV0aG9kID0gbWV0aG9kXG4gICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSByZXNwb25zZVR5cGVcbiAgICByZXF1ZXN0LmhlYWRlcnMgPSBoZWFkZXJzXG4gICAgcmVxdWVzdC5hcGlQYXRoID0gYXBpUGF0aFxuICAgIHJlcXVlc3QubWVzc2FnZUtleSA9IG1lc3NhZ2VLZXlcbiAgICByZXR1cm4gcmVxdWVzdFxuICB9XG4gIHB1YmxpYyBTZW5kKCkge1xuICAgIGxldCByZXEgPSB0aGlzLnJlcVxuICAgIGxldCB1cmwgPSB0aGlzLnVybFxuICAgIGxldCBkYXRhID0gdGhpcy5kYXRhXG4gICAgbGV0IG1ldGhvZCA9IHRoaXMubWV0aG9kXG4gICAgbGV0IHJlc3BvbnNlVHlwZSA9IHRoaXMucmVzcG9uc2VUeXBlXG4gICAgbGV0IGhlYWRlcnMgPSB0aGlzLmhlYWRlcnMgfHwgWydDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbiddXG4gICAgcmVxLm9uY2UobGF5YS5ldmVudHMuRXZlbnQuQ09NUExFVEUsIHRoaXMsIHRoaXMuY29tcGxldGVIYW5kbGVyKVxuICAgIHJlcS5vbmNlKGxheWEuZXZlbnRzLkV2ZW50LkVSUk9SLCB0aGlzLCB0aGlzLmVycm9ySGFuZGxlcilcbiAgICByZXEuc2VuZCh1cmwsIGRhdGEsIG1ldGhvZCwgcmVzcG9uc2VUeXBlLCBoZWFkZXJzKVxuICB9XG4gIHB1YmxpYyBhc3luYyBTZW5kUHJvbWlzZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIGxldCByZXEgPSB0aGlzLnJlcVxuICAgIGxldCB1cmwgPSB0aGlzLnVybFxuICAgIGxldCBkYXRhID0gdGhpcy5kYXRhXG4gICAgbGV0IG1ldGhvZCA9IHRoaXMubWV0aG9kXG4gICAgbGV0IHJlc3BvbnNlVHlwZSA9IHRoaXMucmVzcG9uc2VUeXBlXG4gICAgbGV0IGhlYWRlcnMgPSB0aGlzLmhlYWRlcnMgfHwgWydDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbiddXG4gICAgbGV0IF9wb3N0ID0gZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBsZXQgX3Jlc29sdmUgPSBmdW5jdGlvbihvYmo6IGFueSkge1xuICAgICAgICByZXNvbHZlKG9iailcbiAgICAgIH1cbiAgICAgIHJlcS5vbmNlKGxheWEuZXZlbnRzLkV2ZW50LkNPTVBMRVRFLCB0aGlzLCBfcmVzb2x2ZSlcbiAgICAgIHJlcS5vbmNlKGxheWEuZXZlbnRzLkV2ZW50LkVSUk9SLCB0aGlzLCBfcmVzb2x2ZSlcbiAgICAgIHJlcS5zZW5kKHVybCwgZGF0YSwgbWV0aG9kLCByZXNwb25zZVR5cGUsIGhlYWRlcnMpXG4gICAgfVxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KF9wb3N0KVxuICB9XG4gIHByaXZhdGUgY29tcGxldGVIYW5kbGVyKGRhdGE6IGFueSkge1xuICAgIGlmICh0aGlzLm1lc3NhZ2VLZXkpIHtcbiAgICAgIEdhbWVBcHAuZGlzcGF0Y2hlci5TZW5kTXNnKHRoaXMubWVzc2FnZUtleSwgZGF0YSlcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBlcnJvckhhbmRsZXIoZTogYW55KSB7XG4gICAgY29uc29sZS5lcnJvcih0aGlzLm1lc3NhZ2VLZXksIGUpXG4gIH1cbiAgcHJpdmF0ZSBwcm9jZXNzSGFuZGxlcihkYXRhOiBhbnkpIHt9XG59XG4iLCJpbXBvcnQgeyBTaW5nbGV0b24gfSBmcm9tICcuLi9jb3JlL2Jhc2UvU2luZ2xldG9uJ1xuaW1wb3J0IHsgT2JzZXJ2ZXIgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2UvZGlzcGF0Y2hlci9PYnNlcnZlcidcbmltcG9ydCAqIGFzIGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnXG4vKlxuICAgc29ja2V0LmluaXQoLi4uKVxuICAgc29ja2V0LmNvbm5lY3QoKVxuKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvY2tldCBleHRlbmRzIFNpbmdsZXRvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9ic2VydmVycyA9IHt9XG4gIH1cbiAgcHJpdmF0ZSBub25jZT0xXG4gIHByaXZhdGUgaXBBZGRyZXNzXG4gIHByaXZhdGUgc29ja2V0OiBhbnlcbiAgcHJpdmF0ZSBvYnNlcnZlcnM6IGFueVxuICBwcml2YXRlIHRpbWVTdGFtcFxuICAvL2hhbmRsZXItLS0tXG4gIHByaXZhdGUgY29ubmVjdFN1Y2Nlc3NDYWxsYmFja1xuICBwcml2YXRlIGNvbm5lY3RGYWlsZWRDYWxsYmFja1xuICBwcml2YXRlIGhlYXJ0YmVhdEZhaWxlZENhbGxiYWNrXG4gIHByaXZhdGUgZXZlbnQgPSAnbWVzc2FnZSdcbiAgcHVibGljIGluaXQoaXAsIHN1Y2Nlc3NDYWxsYmFjaywgZmFpbGVkQ2FsbGJhY2ssIGhlYXJ0YmVhdEZhaWxlZENhbGxiYWNrKSB7XG4gICAgdGhpcy5pcEFkZHJlc3MgPSBpcFxuICAgIHRoaXMuY29ubmVjdFN1Y2Nlc3NDYWxsYmFjayA9IHN1Y2Nlc3NDYWxsYmFja1xuICAgIHRoaXMuY29ubmVjdEZhaWxlZENhbGxiYWNrID0gZmFpbGVkQ2FsbGJhY2tcbiAgICB0aGlzLmhlYXJ0YmVhdEZhaWxlZENhbGxiYWNrID0gaGVhcnRiZWF0RmFpbGVkQ2FsbGJhY2tcbiAgfVxuICBwdWJsaWMgY29ubmVjdCgpIHtcbiAgICB0aGlzLnNvY2tldCA9IGlvKHRoaXMuaXBBZGRyZXNzKVxuICAgIHRoaXMuc29ja2V0Lm9uKCdjb25uZWN0JywgKCkgPT4ge1xuICAgICAgdGhpcy50aW1lU3RhbXAgPSBEYXRlLm5vdygpXG4gICAgICBjb25zb2xlLmxvZygnd2Vic29ja2V0IGNvbm5lY3QuLi4nKVxuICAgICAgdGhpcy5jb25uZWN0U3VjY2VzcygpXG4gICAgfSlcbiAgICB0aGlzLnNvY2tldC5vbih0aGlzLmV2ZW50LCBkYXRhID0+IHtcbiAgICAgIHRoaXMudGltZVN0YW1wID0gRGF0ZS5ub3coKVxuICAgICAgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgICB0aGlzLnJlY2VpdmVNZXNzYWdlKEpTT04ucGFyc2UoZGF0YSkpXG4gICAgfSlcbiAgICB0aGlzLnNvY2tldC5vbignZGlzY29ubmVjdCcsIHRoaXMub25EaXNjb25uZWN0KVxuICB9XG4gIHB1YmxpYyBkaXNjb25uZWN0KCkge1xuICAgIHRoaXMuc29ja2V0LmRpc2Nvbm5lY3QoKVxuICB9XG4gIHByaXZhdGUgb25EaXNjb25uZWN0KCkge1xuICAgIGlmICh0aGlzLmNvbm5lY3RGYWlsZWRDYWxsYmFjaykgdGhpcy5jb25uZWN0RmFpbGVkQ2FsbGJhY2soKVxuICB9XG4gIHByaXZhdGUgY29ubmVjdFN1Y2Nlc3MoKSB7XG4gICAgaWYgKHRoaXMuY29ubmVjdFN1Y2Nlc3NDYWxsYmFjaykgdGhpcy5jb25uZWN0U3VjY2Vzc0NhbGxiYWNrKClcbiAgICB0aGlzLnNlbmQoJ2xvZ2luJywge30sICdDMlNfbG9naW4nKVxuICAgIHRoaXMuc3RhcnRIZWFydEJlYXQoKVxuICB9XG4gIHByaXZhdGUgc3RhcnRIZWFydEJlYXQoKSB7XG4gICAgTGF5YS50aW1lci5sb29wKDUwMDAsIHRoaXMsICgpID0+IHtcbiAgICAgIHRoaXMuc2VuZEhlYXJ0QmVhdCgpXG4gICAgfSlcbiAgfVxuICBwcml2YXRlIHNlbmRIZWFydEJlYXQoKSB7XG4gICAgdmFyIHYgPSBEYXRlLm5vdygpIC0gdGhpcy50aW1lU3RhbXBcblxuICAgIGlmICh2ID49IDMwMDAwKSB7XG4gICAgICBpZiAodGhpcy5oZWFydGJlYXRGYWlsZWRDYWxsYmFjaykgdGhpcy5oZWFydGJlYXRGYWlsZWRDYWxsYmFjaygpXG4gICAgfVxuICAgIHRoaXMuc2VuZCgnaGVhcnRiZWF0Jywge30sICdDMlNfaGVhcnRiZWF0JylcbiAgfVxuICBwcml2YXRlIHJlY2VpdmVNZXNzYWdlKGRhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhkYXRhLmhlYWRlcnMubm9uY2UpXG4gICAgaWYgKGRhdGEuaGVhZGVycy5ub25jZSAmJiBkYXRhLmhlYWRlcnMubm9uY2Uuc3RhcnRzV2l0aCgnUzJDXycpKSB7XG4gICAgICBmb3IgKGxldCBrIGluIHRoaXMub2JzZXJ2ZXJzKSB7XG4gICAgICAgIGlmIChkYXRhLmhlYWRlcnMuZnVuY19uYW1lID09IGspIHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVyc1trXS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5SZWN2TXNnKGRhdGEpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBrIGluIHRoaXMub2JzZXJ2ZXJzKSB7XG4gICAgICAgIGlmIChkYXRhLmhlYWRlcnMubm9uY2UgPT0gaykge1xuICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzW2tdLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LlJlY3ZNc2coZGF0YSlcbiAgICAgICAgICB9KVxuICAgICAgICAgIGRlbGV0ZSB0aGlzLm9ic2VydmVyc1trXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHB1YmxpYyBzZW5kTWVzc2FnZShmdW5jTmFtZSwgb2JzZXJ2ZXIsIGRhdGEsIGNhbGxiYWNrID0gbnVsbCkge1xuICAgIHZhciBub25jZSA9ICdDMlNfJyArIGZ1bmNOYW1lICsgdGhpcy5ub25jZSsrXG4gICAgaWYgKCF0aGlzLm9ic2VydmVyc1tub25jZV0pIHRoaXMub2JzZXJ2ZXJzW25vbmNlXSA9IFtdXG4gICAgdGhpcy5vYnNlcnZlcnNbbm9uY2VdLnB1c2gobmV3IE9ic2VydmVyKG5vbmNlLCBvYnNlcnZlciwgY2FsbGJhY2spKVxuICAgIHRoaXMuc2VuZChmdW5jTmFtZSwgZGF0YSwgbm9uY2UpXG4gIH1cbiAgcHVibGljIG9ic2VydmVyTWVzc2FnZShmdW5jTmFtZSwgb2JzZXJ2ZXIsIGNhbGxiYWNrID0gbnVsbCkge1xuICAgIHZhciBrZXkgPSBmdW5jTmFtZVxuICAgIGlmICghdGhpcy5vYnNlcnZlcnNba2V5XSkgdGhpcy5vYnNlcnZlcnNba2V5XSA9IFtdXG4gICAgdmFyIG9icyA9IG5ldyBPYnNlcnZlcihrZXksIG9ic2VydmVyLCBjYWxsYmFjaylcbiAgICB0aGlzLm9ic2VydmVyc1trZXldLnB1c2gob2JzKVxuICAgIHJldHVybiBvYnNcbiAgfVxuICBwdWJsaWMgcmVtb3ZlKG9iczogT2JzZXJ2ZXIpIHtcbiAgICBpZiAob2JzID09IG51bGwpIHJldHVyblxuICAgIGxldCBhcnIgPSB0aGlzLm9ic2VydmVyc1tvYnMudG9waWNdXG4gICAgaWYgKCFhcnIpIHJldHVybiBudWxsXG4gICAgbGV0IGluZDogbnVtYmVyID0gYXJyLmluZGV4T2Yob2JzKVxuICAgIGlmIChpbmQgPCAwKSByZXR1cm4gbnVsbFxuICAgIGFyci5zcGxpY2UoaW5kLCAxKVxuICAgIGlmIChhcnIubGVuZ3RoID09IDApIGRlbGV0ZSB0aGlzLm9ic2VydmVyc1tvYnMudG9waWNdXG4gICAgcmV0dXJuIG9ic1xuICB9XG4gIHByaXZhdGUgc2VuZChmdW5jTmFtZSwgZGF0YSwgbm9uY2UpIHtcbiAgICB2YXIgcGFyYW0gPSB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIHVpZDogJ2hlanVuamllJyxcbiAgICAgICAgZnVuY19uYW1lOiBmdW5jTmFtZSxcbiAgICAgICAgbm9uY2U6IG5vbmNlLFxuICAgICAgfSxcbiAgICAgIHBhcmFtczogZGF0YSxcbiAgICB9XG4gICAgdGhpcy50aW1lU3RhbXAgPSBEYXRlLm5vdygpXG4gICAgdGhpcy5zb2NrZXQuZW1pdCh0aGlzLmV2ZW50LCBKU09OLnN0cmluZ2lmeShwYXJhbSkpXG4gIH1cbn1cbiIsImltcG9ydCB7IHVpIH0gZnJvbSAnLi4vdWkvbGF5YU1heFVJJ1xyXG5pbXBvcnQgQVBhZ2UgZnJvbSAnLi4vZ2FtZS91aS92aWV3L0FQYWdlL0FQYWdlJ1xyXG5pbXBvcnQgeyBzZXRVSVJvb3QsIG9wZW5WaWV3IH0gZnJvbSAnLi4vY29yZS9tdmMvTXZjTWdyJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluU2NlbmUgZXh0ZW5kcyB1aS5zY2VuZS5NYWluU2NlbmVVSSB7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgLy8gR2FtZUFwcC5pbml0KHRoaXMpXHJcbiAgICBjb25zdCBVSSA9IG5ldyBMYXlhLlNwcml0ZSgpXHJcbiAgICBVSS5uYW1lID0gJ1VJJ1xyXG4gICAgVUkud2lkdGggPSBMYXlhLnN0YWdlLndpZHRoXHJcbiAgICBVSS5oZWlnaHQgPSBMYXlhLnN0YWdlLmhlaWdodFxyXG4gICAgTGF5YS5zdGFnZS5hZGRDaGlsZChVSSlcclxuICAgIHNldFVJUm9vdChVSSlcclxuXHJcbiAgICBvcGVuVmlldyhBUGFnZSlcclxuICB9XHJcbiAgb25PcGVuZWQoKSB7fVxyXG59XHJcbiIsIi8qKlRoaXMgY2xhc3MgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgTGF5YUFpcklERSwgcGxlYXNlIGRvIG5vdCBtYWtlIGFueSBtb2RpZmljYXRpb25zLiAqL1xuaW1wb3J0IFZpZXc9TGF5YS5WaWV3O1xuaW1wb3J0IERpYWxvZz1MYXlhLkRpYWxvZztcbmltcG9ydCBTY2VuZT1MYXlhLlNjZW5lO1xuaW1wb3J0ICogYXMgdiBmcm9tIFwiLi4vY29yZS9tdmMvdmlldy9CYXNlVmlld1wiO1xuaW1wb3J0IEJhc2VWaWV3ID12LktVSS5CYXNlVmlld1xudmFyIFJFRzogRnVuY3Rpb24gPSBMYXlhLkNsYXNzVXRpbHMucmVnQ2xhc3M7XG5leHBvcnQgbW9kdWxlIHVpLnNjZW5lIHtcclxuICAgIGV4cG9ydCBjbGFzcyBNYWluU2NlbmVVSSBleHRlbmRzIFNjZW5lIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFNjZW5lKFwic2NlbmUvTWFpblNjZW5lXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFJFRyhcInVpLnNjZW5lLk1haW5TY2VuZVVJXCIsTWFpblNjZW5lVUkpO1xyXG59XHJcbmV4cG9ydCBtb2R1bGUgdWkudmlldyB7XHJcbiAgICBleHBvcnQgY2xhc3MgQVBhZ2VVSSBleHRlbmRzIEJhc2VWaWV3IHtcclxuXHRcdHB1YmxpYyBidG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIGNvbnRlbnRzOkxheWEuTGFiZWw7XG5cdFx0cHVibGljIGJhc2VCdG46TGF5YS5CdXR0b247XG4gICAgICAgIHB1YmxpYyBzdGF0aWMgIHVpVmlldzphbnkgPXtcInR5cGVcIjpcIkJhc2VWaWV3XCIsXCJwcm9wc1wiOntcIndpZHRoXCI6NjQwLFwiaGVpZ2h0XCI6MTEzNn0sXCJjb21wSWRcIjoyLFwiY2hpbGRcIjpbe1widHlwZVwiOlwiUmVjdFwiLFwicHJvcHNcIjp7XCJ3aWR0aFwiOjY0MCxcIm5hbWVcIjpcInJcIixcImxpbmVXaWR0aFwiOjEsXCJoZWlnaHRcIjoxMTM2LFwiZmlsbENvbG9yXCI6XCIjZmJiYmJiXCJ9LFwiY29tcElkXCI6N30se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjo1NTUsXCJ4XCI6MjA4LFwid2lkdGhcIjoyMDAsXCJ2YXJcIjpcImJ0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiR29UbyBCUGFnZVwiLFwiaGVpZ2h0XCI6NTB9LFwiY29tcElkXCI6OH0se1widHlwZVwiOlwiTGFiZWxcIixcInByb3BzXCI6e1wieVwiOjQxLFwieFwiOjM5OCxcIndpZHRoXCI6MjAxLFwidmFyXCI6XCJjb250ZW50c1wiLFwidmFsaWduXCI6XCJtaWRkbGVcIixcInRleHRcIjpcInNzc3NcIixcImhlaWdodFwiOjUwMCxcImZvbnRTaXplXCI6NDAsXCJhbGlnblwiOlwiY2VudGVyXCJ9LFwiY29tcElkXCI6MTR9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6NjcwLFwieFwiOjIwOCxcIndpZHRoXCI6MjAwLFwidmFyXCI6XCJiYXNlQnRuXCIsXCJza2luXCI6XCJjb21wL2J1dHRvbi5wbmdcIixcImxhYmVsXCI6XCJHb1RvIEJhc2VcIixcImhlaWdodFwiOjUwfSxcImNvbXBJZFwiOjE1fV0sXCJsb2FkTGlzdFwiOltcImNvbXAvYnV0dG9uLnBuZ1wiXSxcImxvYWRMaXN0M0RcIjpbXX07XHJcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVZpZXcoQVBhZ2VVSS51aVZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFJFRyhcInVpLnZpZXcuQVBhZ2VVSVwiLEFQYWdlVUkpO1xyXG4gICAgZXhwb3J0IGNsYXNzIEJhc2VUZXN0VUkgZXh0ZW5kcyBWaWV3IHtcclxuXHRcdHB1YmxpYyB0YW5rOkxheWEuQ2xpcDtcblx0XHRwdWJsaWMgY2xvc2VCdG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIGRpYWxvZ0J0bjpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgbG9hZGluZ0J0bjpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgdmlld0J0bjpMYXlhLkJ1dHRvbjtcbiAgICAgICAgcHVibGljIHN0YXRpYyAgdWlWaWV3OmFueSA9e1widHlwZVwiOlwiVmlld1wiLFwicHJvcHNcIjp7XCJ3aWR0aFwiOjY0MCxcImhlaWdodFwiOjExMzZ9LFwiY29tcElkXCI6MixcImNoaWxkXCI6W3tcInR5cGVcIjpcIkltYWdlXCIsXCJwcm9wc1wiOntcInlcIjowLFwieFwiOjAsXCJ0b3BcIjowLFwic2tpblwiOlwiY29tcC9pbWFnZS5wbmdcIixcInJpZ2h0XCI6MCxcImxlZnRcIjowLFwiYm90dG9tXCI6MH0sXCJjb21wSWRcIjo4fSx7XCJ0eXBlXCI6XCJDbGlwXCIsXCJwcm9wc1wiOntcInlcIjowLFwieFwiOjAsXCJ2YXJcIjpcInRhbmtcIixcInNraW5cIjpcIkNoYXJhY3RlcnMvVGFua184LnBuZ1wiLFwiaW5kZXhcIjo0LFwiY2xpcFlcIjo0LFwiY2xpcFhcIjo0LFwiY2VudGVyWVwiOi0xLFwiY2VudGVyWFwiOjB9LFwiY29tcElkXCI6M30se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjozMjcsXCJ4XCI6MjgyLFwidmFyXCI6XCJjbG9zZUJ0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiY2xvc2VcIn0sXCJjb21wSWRcIjo0fSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjI1MixcInhcIjo0NzIsXCJ2YXJcIjpcImRpYWxvZ0J0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiZGlhbG9nXCJ9LFwiY29tcElkXCI6NX0se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjozMDQsXCJ4XCI6NDcyLFwidmFyXCI6XCJsb2FkaW5nQnRuXCIsXCJza2luXCI6XCJjb21wL2J1dHRvbi5wbmdcIixcImxhYmVsXCI6XCJiYXNlXCJ9LFwiY29tcElkXCI6Nn0se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjozNjIsXCJ4XCI6NDcyLFwidmFyXCI6XCJ2aWV3QnRuXCIsXCJza2luXCI6XCJjb21wL2J1dHRvbi5wbmdcIixcImxhYmVsXCI6XCJ2aWV3XCJ9LFwiY29tcElkXCI6N31dLFwibG9hZExpc3RcIjpbXCJjb21wL2ltYWdlLnBuZ1wiLFwiQ2hhcmFjdGVycy9UYW5rXzgucG5nXCIsXCJjb21wL2J1dHRvbi5wbmdcIl0sXCJsb2FkTGlzdDNEXCI6W119O1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVWaWV3KEJhc2VUZXN0VUkudWlWaWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSRUcoXCJ1aS52aWV3LkJhc2VUZXN0VUlcIixCYXNlVGVzdFVJKTtcclxuICAgIGV4cG9ydCBjbGFzcyBCUGFnZVVJIGV4dGVuZHMgQmFzZVZpZXcge1xyXG5cdFx0cHVibGljIGNoYW5nZTpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgY2xvc2VfYnRuOkxheWEuQnV0dG9uO1xuICAgICAgICBwdWJsaWMgc3RhdGljICB1aVZpZXc6YW55ID17XCJ0eXBlXCI6XCJCYXNlVmlld1wiLFwicHJvcHNcIjp7XCJ3aWR0aFwiOjMwMCxcImhlaWdodFwiOjExMzZ9LFwiY29tcElkXCI6MixcImNoaWxkXCI6W3tcInR5cGVcIjpcIlJlY3RcIixcInByb3BzXCI6e1wid2lkdGhcIjozMDAsXCJsaW5lV2lkdGhcIjoxLFwiaGVpZ2h0XCI6MTEzNixcImZpbGxDb2xvclwiOlwiI2NkZjlhNFwifSxcImNvbXBJZFwiOjN9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6NTM0LFwieFwiOjU5LFwid2lkdGhcIjoyMDAsXCJ2YXJcIjpcImNoYW5nZVwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiQ2hhbmdlQVBhZ2VcIixcImhlaWdodFwiOjUwfSxcImNvbXBJZFwiOjR9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6NjQ0LFwieFwiOjU5LFwid2lkdGhcIjoyMDAsXCJ2YXJcIjpcImNsb3NlX2J0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiQ2xvc2VcIixcImhlaWdodFwiOjUwfSxcImNvbXBJZFwiOjV9XSxcImxvYWRMaXN0XCI6W1wiY29tcC9idXR0b24ucG5nXCJdLFwibG9hZExpc3QzRFwiOltdfTtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVmlldyhCUGFnZVVJLnVpVmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUkVHKFwidWkudmlldy5CUGFnZVVJXCIsQlBhZ2VVSSk7XHJcbiAgICBleHBvcnQgY2xhc3MgRGlhbG9nVGVzdFVJIGV4dGVuZHMgVmlldyB7XHJcblx0XHRwdWJsaWMgYm94OkxheWEuQm94O1xuXHRcdHB1YmxpYyB0YW5rOkxheWEuQ2xpcDtcblx0XHRwdWJsaWMgY2xvc2VCdG46TGF5YS5CdXR0b247XG4gICAgICAgIHB1YmxpYyBzdGF0aWMgIHVpVmlldzphbnkgPXtcInR5cGVcIjpcIlZpZXdcIixcInByb3BzXCI6e1wid2lkdGhcIjo2NDAsXCJoZWlnaHRcIjoxMTM2fSxcImNvbXBJZFwiOjIsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJCb3hcIixcInByb3BzXCI6e1wid2lkdGhcIjoyMDAsXCJ2YXJcIjpcImJveFwiLFwiaGVpZ2h0XCI6MjAwLFwiY2VudGVyWVwiOjAsXCJjZW50ZXJYXCI6MH0sXCJjb21wSWRcIjo5LFwiY2hpbGRcIjpbe1widHlwZVwiOlwiSW1hZ2VcIixcInByb3BzXCI6e1widG9wXCI6MCxcInNraW5cIjpcImNvbXAvaW1hZ2UucG5nXCIsXCJyaWdodFwiOjAsXCJsZWZ0XCI6MCxcImJvdHRvbVwiOjB9LFwiY29tcElkXCI6MTB9LHtcInR5cGVcIjpcIkNsaXBcIixcInByb3BzXCI6e1wieVwiOjU1MCxcInhcIjozMDMsXCJ2YXJcIjpcInRhbmtcIixcInNraW5cIjpcIkNoYXJhY3RlcnMvVGFua183LnBuZ1wiLFwiaW5kZXhcIjo0LFwiY2xpcFlcIjo0LFwiY2xpcFhcIjo0LFwiY2VudGVyWVwiOi0xLFwiY2VudGVyWFwiOjB9LFwiY29tcElkXCI6M30se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjozOSxcInhcIjo2Mi41LFwidmFyXCI6XCJjbG9zZUJ0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiY2xvc2VcIn0sXCJjb21wSWRcIjo0fV19XSxcImxvYWRMaXN0XCI6W1wiY29tcC9pbWFnZS5wbmdcIixcIkNoYXJhY3RlcnMvVGFua183LnBuZ1wiLFwiY29tcC9idXR0b24ucG5nXCJdLFwibG9hZExpc3QzRFwiOltdfTtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVmlldyhEaWFsb2dUZXN0VUkudWlWaWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSRUcoXCJ1aS52aWV3LkRpYWxvZ1Rlc3RVSVwiLERpYWxvZ1Rlc3RVSSk7XHJcbiAgICBleHBvcnQgY2xhc3MgTG9hZGluZ1VJIGV4dGVuZHMgVmlldyB7XHJcblx0XHRwdWJsaWMgdGFuazpMYXlhLkNsaXA7XG5cdFx0cHVibGljIGJ0bl9jbG9zZTpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgYnRuX2Nvbm5lY3Q6TGF5YS5CdXR0b247XG4gICAgICAgIHB1YmxpYyBzdGF0aWMgIHVpVmlldzphbnkgPXtcInR5cGVcIjpcIlZpZXdcIixcInByb3BzXCI6e1wid2lkdGhcIjo2NDAsXCJoZWlnaHRcIjoxMTM2fSxcImNvbXBJZFwiOjIsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJJbWFnZVwiLFwicHJvcHNcIjp7XCJ0b3BcIjowLFwic2tpblwiOlwiQ2hhcmFjdGVycy9UYW5rXzcucG5nXCIsXCJyaWdodFwiOjAsXCJsZWZ0XCI6MCxcImJvdHRvbVwiOjB9LFwiY29tcElkXCI6MTd9LHtcInR5cGVcIjpcIkNsaXBcIixcInByb3BzXCI6e1widmFyXCI6XCJ0YW5rXCIsXCJza2luXCI6XCJDaGFyYWN0ZXJzL1RhbmtfNC5wbmdcIixcImluZGV4XCI6NCxcImNsaXBZXCI6NCxcImNsaXBYXCI6NCxcImNlbnRlcllcIjotMSxcImNlbnRlclhcIjowfSxcImNvbXBJZFwiOjN9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6MzI3LFwieFwiOjI4Mi41LFwidmFyXCI6XCJidG5fY2xvc2VcIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcImNsb3NlXCJ9LFwiY29tcElkXCI6NH0se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjoyMjIsXCJ4XCI6MjgyLjUsXCJ2YXJcIjpcImJ0bl9jb25uZWN0XCIsXCJza2luXCI6XCJjb21wL2J1dHRvbi5wbmdcIixcImxhYmVsXCI6XCJjb25uZWN0XCJ9LFwiY29tcElkXCI6NX1dLFwibG9hZExpc3RcIjpbXCJDaGFyYWN0ZXJzL1RhbmtfNy5wbmdcIixcIkNoYXJhY3RlcnMvVGFua180LnBuZ1wiLFwiY29tcC9idXR0b24ucG5nXCJdLFwibG9hZExpc3QzRFwiOltdfTtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVmlldyhMb2FkaW5nVUkudWlWaWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSRUcoXCJ1aS52aWV3LkxvYWRpbmdVSVwiLExvYWRpbmdVSSk7XHJcbiAgICBleHBvcnQgY2xhc3MgVmlld1Rlc3RVSSBleHRlbmRzIFZpZXcge1xyXG5cdFx0cHVibGljIHRhbms6TGF5YS5DbGlwO1xuXHRcdHB1YmxpYyBjbG9zZUJ0bjpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgdmlld0J0bjpMYXlhLkJ1dHRvbjtcbiAgICAgICAgcHVibGljIHN0YXRpYyAgdWlWaWV3OmFueSA9e1widHlwZVwiOlwiVmlld1wiLFwicHJvcHNcIjp7XCJ3aWR0aFwiOjY0MCxcImhlaWdodFwiOjExMzZ9LFwiY29tcElkXCI6MixcImNoaWxkXCI6W3tcInR5cGVcIjpcIkltYWdlXCIsXCJwcm9wc1wiOntcInlcIjowLFwieFwiOjAsXCJ0b3BcIjowLFwic2tpblwiOlwiY29tcC9pbWFnZS5wbmdcIixcInJpZ2h0XCI6MCxcImxlZnRcIjowLFwiYm90dG9tXCI6MH0sXCJjb21wSWRcIjo3fSx7XCJ0eXBlXCI6XCJDbGlwXCIsXCJwcm9wc1wiOntcInlcIjowLFwieFwiOjAsXCJ2YXJcIjpcInRhbmtcIixcInNraW5cIjpcIkNoYXJhY3RlcnMvJOeLvC5wbmdcIixcImluZGV4XCI6NCxcImNsaXBZXCI6NCxcImNsaXBYXCI6NCxcImNlbnRlcllcIjotMSxcImNlbnRlclhcIjowfSxcImNvbXBJZFwiOjN9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6MzI3LFwieFwiOjI4MixcInZhclwiOlwiY2xvc2VCdG5cIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcImNsb3NlXCJ9LFwiY29tcElkXCI6NH0se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjozODUsXCJ4XCI6MjgyLjUsXCJ2YXJcIjpcInZpZXdCdG5cIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcInZpZXdcIn0sXCJjb21wSWRcIjo1fV0sXCJsb2FkTGlzdFwiOltcImNvbXAvaW1hZ2UucG5nXCIsXCJDaGFyYWN0ZXJzLyTni7wucG5nXCIsXCJjb21wL2J1dHRvbi5wbmdcIl0sXCJsb2FkTGlzdDNEXCI6W119O1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVWaWV3KFZpZXdUZXN0VUkudWlWaWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSRUcoXCJ1aS52aWV3LlZpZXdUZXN0VUlcIixWaWV3VGVzdFVJKTtcclxuICAgIGV4cG9ydCBjbGFzcyBWaWV3VGVzdDFVSSBleHRlbmRzIFZpZXcge1xyXG5cdFx0cHVibGljIHRhbms6TGF5YS5DbGlwO1xuXHRcdHB1YmxpYyBjbG9zZUJ0bjpMYXlhLkJ1dHRvbjtcbiAgICAgICAgcHVibGljIHN0YXRpYyAgdWlWaWV3OmFueSA9e1widHlwZVwiOlwiVmlld1wiLFwicHJvcHNcIjp7XCJ3aWR0aFwiOjY0MCxcImhlaWdodFwiOjExMzZ9LFwiY29tcElkXCI6MixcImNoaWxkXCI6W3tcInR5cGVcIjpcIkltYWdlXCIsXCJwcm9wc1wiOntcInlcIjowLFwieFwiOjAsXCJ0b3BcIjowLFwic2tpblwiOlwiY29tcC9pbWFnZS5wbmdcIixcInJpZ2h0XCI6MCxcImxlZnRcIjowLFwiYm90dG9tXCI6MH0sXCJjb21wSWRcIjo2fSx7XCJ0eXBlXCI6XCJDbGlwXCIsXCJwcm9wc1wiOntcInlcIjowLFwieFwiOjAsXCJ2YXJcIjpcInRhbmtcIixcInNraW5cIjpcIkNoYXJhY3RlcnMvJOeLvC5wbmdcIixcImluZGV4XCI6NCxcImNsaXBZXCI6NCxcImNsaXBYXCI6NCxcImNlbnRlcllcIjotMSxcImNlbnRlclhcIjowfSxcImNvbXBJZFwiOjN9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6MzI3LFwieFwiOjI4MixcInZhclwiOlwiY2xvc2VCdG5cIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcImNsb3NlXCJ9LFwiY29tcElkXCI6NH1dLFwibG9hZExpc3RcIjpbXCJjb21wL2ltYWdlLnBuZ1wiLFwiQ2hhcmFjdGVycy8k54u8LnBuZ1wiLFwiY29tcC9idXR0b24ucG5nXCJdLFwibG9hZExpc3QzRFwiOltdfTtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVmlldyhWaWV3VGVzdDFVSS51aVZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFJFRyhcInVpLnZpZXcuVmlld1Rlc3QxVUlcIixWaWV3VGVzdDFVSSk7XHJcbn1cciIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=