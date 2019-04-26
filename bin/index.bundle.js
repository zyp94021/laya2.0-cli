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
var Test_1 = __webpack_require__(/*! ./game/ui/view/APage/Test */ "./src/game/ui/view/APage/Test.ts");
/*
* 游戏初始化配置;
*/
var GameConfig = /** @class */ (function () {
    function GameConfig() {
    }
    GameConfig.init = function () {
        var reg = Laya.ClassUtils.regClass;
        reg("scene/MainScene.ts", MainScene_1.default);
        reg("game/ui/view/APage/Test.ts", Test_1.default);
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

/***/ "./src/core/Utils/EffectUtils.ts":
/*!***************************************!*\
  !*** ./src/core/Utils/EffectUtils.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EffectUtils = /** @class */ (function () {
    function EffectUtils() {
    }
    /**
     * 类似mac上图标上下抖动的效果
     * @param {Sprite} obj 抖动对象
     * @param {number} initY 要抖动的对象的初始Y值，原始位置
     * @param {Function} callback 抖动动画完成回调函数
     * @param {any} thisObj 回调函数this对象
     */
    EffectUtils.macIconShake = function (obj, initY, callback, thisObj) {
        //抖动频率[时间，移动距离]，可修改
        var arr = [[20, 300], [15, 300], [10, 300], [5, 300]];
        var index = 0;
        toShake();
        function toShake() {
            if (index >= arr.length) {
                callback && callback.apply(thisObj, []);
            }
            else {
                Laya.Tween.to(obj, { y: initY - arr[index][0] }, arr[index][1], null, Laya.Handler.create(null, function () {
                    Laya.Tween.to(obj, { y: initY }, arr[index][1], null, Laya.Handler.create(null, function () {
                        ++index;
                        toShake();
                    }));
                }));
            }
        }
    };
    /**
     * 向上移动淡出（弹出框）
     * @param {Sprite} obj 淡出对象
     * @param {number} time 淡出时间
     * @param {Function} ease 淡出函数
     * @param {Function} callback 淡出完成回调函数
     * @param {any} thisObj 回调函数this对象
     * @param {Array} arrData 回调传参
     */
    EffectUtils.flowOut = function (obj, time, ease, callback, thisObj, arrData) {
        if (time === void 0) { time = 500; }
        if (ease === void 0) { ease = null; }
        if (callback === void 0) { callback = null; }
        if (thisObj === void 0) { thisObj = null; }
        if (arrData === void 0) { arrData = null; }
        if (callback) {
            Laya.Tween.to(obj, { y: obj.y - 150, alpha: 0 }, time, ease, Laya.Handler.create(thisObj, callback, arrData));
        }
        else {
            Laya.Tween.to(obj, { y: obj.y - 150, alpha: 0 }, time, ease, Laya.Handler.create(obj, obj.removeSelf, arrData));
        }
    };
    /**
     * 文本数字增减效果
     * @param {number} startNum 开始数值
     * @param {number} endNum 渐变到的数值
     * @param {Function} callback 淡出完成回调函数
     * @param {any} thisObj 回调函数this对象
     */
    EffectUtils.flowNum = function (startNum, endNum, callback, thisObj) {
        if (thisObj === void 0) { thisObj = null; }
        var change = Math.abs(endNum - startNum);
        if (change <= 0)
            return;
        var everyChange = change / (endNum - startNum);
        var currNum = startNum;
        var timer = new Laya.Timer();
        timer.loop(30, this, changeFun);
        function changeFun() {
            currNum += everyChange;
            --change;
            if (change < 0) {
                timer.clearAll(this);
                timer = null;
            }
            else {
                callback && callback.apply(thisObj, [currNum]);
            }
        }
    };
    /**
     * 开始闪烁
     * @param {Sprite} obj
     * @param {number} alphaTime 闪烁频率
     */
    EffectUtils.startFlicker = function (obj, alphaTime) {
        if (alphaTime === void 0) { alphaTime = 700; }
        obj.alpha = 1;
        Laya.Tween.to(obj, { alpha: 0 }, alphaTime, null, Laya.Handler.create(null, function () {
            Laya.Tween.to(obj, { alpha: 1 }, alphaTime, null, Laya.Handler.create(this, this.startFlicker, [obj]));
        }.bind(this)));
    };
    /**
     * 停止动画所有动画后容器位置初始化到原位，否则可能出现位置改变的bug
     * @param {Sprite} obj
     * @param {number} xPos
     * @param {number} yPos
     */
    EffectUtils.stopEffect = function (obj, xPos, yPos) {
        if (xPos === void 0) { xPos = null; }
        if (yPos === void 0) { yPos = null; }
        Laya.Tween.clearAll(obj);
        if (xPos !== null && yPos !== null) {
            obj.pos(xPos, yPos);
        }
    };
    /**
     * 点击放大缩小效果
     * @param {Laya.Sprite}
     * @param {boolean} isChangeXY 如果中心点是锚点不需要修改位置
     */
    EffectUtils.clickEffect = function (sp, isChangeXY) {
        if (isChangeXY === void 0) { isChangeXY = true; }
        if (!sp)
            return;
        sp.off(Laya.Event.MOUSE_DOWN, this, this.cubicInOutEffect);
        sp.on(Laya.Event.MOUSE_DOWN, this, this.cubicInOutEffect, [sp, isChangeXY]);
    };
    EffectUtils.clearClickEffect = function (sp) {
        if (!sp)
            return;
        sp.off(Laya.Event.MOUSE_DOWN, this, this.cubicInOutEffect);
    };
    EffectUtils.cubicInOutEffect = function (sp, isChangeXY) {
        var _this = this;
        if (sp._aniButtonEffect)
            return;
        sp._aniButtonEffect = true;
        var _x = sp.x;
        var _y = sp.y;
        var _scaX = sp.scaleX;
        var _scaY = sp.scaleY;
        var _bigX, _bigY;
        if (!isChangeXY) {
            _bigX = _x - ((sp.width * 0.1) >> 1);
            _bigY = _y - ((sp.height * 0.1) >> 1);
        }
        else {
            _bigX = _x;
            _bigY = _y;
        }
        Laya.Tween.to(sp, { x: _bigX, y: _bigY, scaleX: 1.1 * _scaX, scaleY: 1.1 * _scaY }, 100, null, Laya.Handler.create(this, function () {
            Laya.Tween.to(sp, { x: _x, y: _y, scaleX: _scaX, scaleY: _scaY }, 100, null, Laya.Handler.create(_this, function () {
                if (!sp.destroyed) {
                    sp._aniButtonEffect = false;
                }
            }));
        }));
    };
    return EffectUtils;
}());
exports.default = EffectUtils;


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
            if (_view && _view.openCb) {
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
    APage.prototype.openCb = function (args) {
        var html = "<span style='fontSize:30' color='#67fc2c'>富文本</span>";
        html += "<img style='height:50;width:50' src='Characters/Tank_4.png'></img>";
        html += "<span style='fontSize:20' color='#fff'>测试</span>";
        this.dd.pos(0, 0);
        this.dd.style.width = 640;
        this.dd.style.align = 'center';
        this.dd.innerHTML = html;
        console.log(this.dd);
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

/***/ "./src/game/ui/view/APage/Test.ts":
/*!****************************************!*\
  !*** ./src/game/ui/view/APage/Test.ts ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
var EffectUtils_1 = __webpack_require__(/*! ../../../../core/Utils/EffectUtils */ "./src/core/Utils/EffectUtils.ts");
var Test = /** @class */ (function (_super) {
    __extends(Test, _super);
    // /** @prop {name:intType, tips:"整数类型示例", type:Int, default:1000}*/
    // public intType: number = 1000;
    // /** @prop {name:numType, tips:"数字类型示例", type:Number, default:1000}*/
    // public numType: number = 1000;
    // /** @prop {name:strType, tips:"字符串类型示例", type:String, default:"hello laya"}*/
    // public strType: string = "hello laya";
    // /** @prop {name:boolType, tips:"布尔类型示例", type:Bool, default:true}*/
    // public boolType: boolean = true;
    // 更多参数说明请访问: https://ldc2.layabox.com/doc/?nav=zh-as-2-4-0
    function Test() {
        return _super.call(this) || this;
    }
    Test.prototype.onAwake = function () {
        var _this = this;
        this.owner.on(Laya.Event.CLICK, this, function () {
            EffectUtils_1.default.macIconShake(_this.owner, _this.owner.y, function () { console.log(1); }, _this);
        });
    };
    Test.prototype.onEnable = function () {
    };
    Test.prototype.onDisable = function () {
    };
    return Test;
}(Laya.Script));
exports.default = Test;


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
            MvcMgr_1.openView(DialogTest_1.default, 1, 2, 3);
        });
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
        MvcMgr_1.openView(APage_1.default, { a: 1, b: 2 });
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
            APageUI.uiView = { "type": "BaseView", "props": { "width": 640, "height": 1136 }, "compId": 2, "child": [{ "type": "Rect", "props": { "width": 640, "name": "r", "lineWidth": 1, "height": 1136, "fillColor": "#fbbbbb" }, "compId": 7 }, { "type": "Button", "props": { "y": 555, "x": 208, "width": 200, "var": "btn", "skin": "comp/button.png", "label": "GoTo BPage", "height": 50 }, "compId": 8 }, { "type": "HTMLDivElement", "props": { "y": 0, "x": 0, "width": 644, "var": "dd", "innerHTML": "<br/><span>  测试水平居中对齐</span>", "height": 265, "runtime": "laya.html.dom.HTMLDivElement" }, "compId": 20 }, { "type": "Button", "props": { "y": 669, "x": 208, "width": 200, "var": "baseBtn", "skin": "comp/button.png", "label": "GoTo Base", "height": 50 }, "compId": 15, "child": [{ "type": "Label", "props": { "y": -627, "x": 190, "width": 201, "var": "contents", "valign": "middle", "text": "ssss", "height": 500, "fontSize": 40, "align": "center" }, "compId": 14 }] }, { "type": "Label", "props": { "y": 121, "x": 275.5, "width": 63, "valign": "middle", "text": "label", "height": 22, "align": "center" }, "compId": 25 }, { "type": "Button", "props": { "y": 132, "x": 426, "presetID": 1, "width": 192, "skin": "comp/button.png", "label": "按钮脚本", "isPresetRoot": true, "height": 90 }, "compId": 31, "child": [{ "type": "Script", "props": { "presetID": 2, "y": 1, "x": 0, "runtime": "game/ui/view/APage/Test.ts" }, "compId": 32 }] }], "loadList": ["comp/button.png", "prefab/Button.prefab"], "loadList3D": [] };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWVDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvVXRpbHMvRWZmZWN0VXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvYmFzZS9TaW5nbGV0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY29uc3QvTGF5ZXJDb25zdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9jb25zdC9WaWV3Q29uc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZ2FtZS9HYW1lQXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2dhbWUvc2NlbmVzL0Jhc2VMYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9nYW1lL3NjZW5lcy9EaWFsb2dMYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9nYW1lL3NjZW5lcy9WaWV3TGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZ2FtZS9zY2VuZXMvVmlld01nci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9nYW1lL3V0aWxzL1N0cmluZ1V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZ2FtZS91dGlscy9UaW1lVXRpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9tdmMvQ29udHJvbGxlck1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvbXZjL012Y01nci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9tdmMvVmlld01nci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9tdmMvY29udHJvbGxlci9CYXNlQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9tdmMvbW9kZWwvQmFzZU1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL212Yy92aWV3L0Jhc2VWaWV3LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3NlcnZpY2UvU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9zZXJ2aWNlL2Rpc3BhdGNoZXIvRGlzcGF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9zZXJ2aWNlL2Rpc3BhdGNoZXIvT2JzZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdWkvdmlldy9BUGFnZS9BUGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS91aS92aWV3L0FQYWdlL0FQYWdlQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS91aS92aWV3L0FQYWdlL0FwYWdlTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdWkvdmlldy9BUGFnZS9UZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3VpL3ZpZXcvQlBhZ2UvQlBhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdWkvdmlldy9CUGFnZS9CUGFnZUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdWkvdmlldy9CUGFnZS9CUGFnZU1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3VpL3ZpZXcvQmFzZVRlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdWkvdmlldy9EaWFsb2dUZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3VpL3ZpZXcvTG9hZGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS91aS92aWV3L1ZpZXdUZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3VpL3ZpZXcvVmlld1Rlc3QxLnRzIiwid2VicGFjazovLy8uL3NyYy9uZXQvaHR0cC9HYW1lTmV0LnRzIiwid2VicGFjazovLy8uL3NyYy9uZXQvaHR0cC9OZXRSZXF1ZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9uZXQvc29ja2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZS9NYWluU2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3Jj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RUFBQyxNQUFNLEVBQUMsaUJBQWlCLEVBQUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsR0FBRyxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsRUFBRSxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsY0FBYyxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxF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QUN0QyxDQUFDO1lBTGMsZ0JBQU0sR0FBTSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsdUJBQXVCLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLHVCQUF1QixFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLFdBQVcsRUFBQyxNQUFNLEVBQUMsaUJBQWlCLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxhQUFhLEVBQUMsTUFBTSxFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyx1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b250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiaW5kZXhcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9NYWluLnRzXCIsXCJsaWJcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvKipUaGlzIGNsYXNzIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IExheWFBaXJJREUsIHBsZWFzZSBkbyBub3QgbWFrZSBhbnkgbW9kaWZpY2F0aW9ucy4gKi9cclxuaW1wb3J0IE1haW5TY2VuZSBmcm9tIFwiLi9zY2VuZS9NYWluU2NlbmVcIlxuaW1wb3J0IFRlc3QgZnJvbSBcIi4vZ2FtZS91aS92aWV3L0FQYWdlL1Rlc3RcIlxyXG4vKlxyXG4qIOa4uOaIj+WIneWni+WMlumFjee9rjtcclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbmZpZ3tcclxuICAgIHN0YXRpYyB3aWR0aDpudW1iZXI9NjQwO1xyXG4gICAgc3RhdGljIGhlaWdodDpudW1iZXI9MTEzNjtcclxuICAgIHN0YXRpYyBzY2FsZU1vZGU6c3RyaW5nPVwic2hvd2FsbFwiO1xyXG4gICAgc3RhdGljIHNjcmVlbk1vZGU6c3RyaW5nPVwibm9uZVwiO1xyXG4gICAgc3RhdGljIGFsaWduVjpzdHJpbmc9XCJtaWRkbGVcIjtcclxuICAgIHN0YXRpYyBhbGlnbkg6c3RyaW5nPVwiY2VudGVyXCI7XHJcbiAgICBzdGF0aWMgc3RhcnRTY2VuZTphbnk9XCJzY2VuZS9NYWluU2NlbmUuc2NlbmVcIjtcclxuICAgIHN0YXRpYyBzY2VuZVJvb3Q6c3RyaW5nPVwiXCI7XHJcbiAgICBzdGF0aWMgZGVidWc6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBzdGF0OmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgcGh5c2ljc0RlYnVnOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgZXhwb3J0U2NlbmVUb0pzb246Ym9vbGVhbj10cnVlO1xyXG4gICAgY29uc3RydWN0b3IoKXt9XHJcbiAgICBzdGF0aWMgaW5pdCgpe1xyXG4gICAgICAgIHZhciByZWc6IEZ1bmN0aW9uID0gTGF5YS5DbGFzc1V0aWxzLnJlZ0NsYXNzO1xyXG4gICAgICAgIHJlZyhcInNjZW5lL01haW5TY2VuZS50c1wiLE1haW5TY2VuZSk7XG4gICAgICAgIHJlZyhcImdhbWUvdWkvdmlldy9BUGFnZS9UZXN0LnRzXCIsVGVzdCk7XHJcbiAgICB9XHJcbn1cclxuR2FtZUNvbmZpZy5pbml0KCk7IiwiaW1wb3J0IEdhbWVDb25maWcgZnJvbSAnLi9HYW1lQ29uZmlnJ1xyXG5pbXBvcnQgJ0BiYWJlbC9wb2x5ZmlsbCdcclxuY2xhc3MgTWFpbiB7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy/moLnmja5JREXorr7nva7liJ3lp4vljJblvJXmk45cclxuICAgIGlmICh3aW5kb3dbJ0xheWEzRCddKSBMYXlhM0QuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodClcclxuICAgIGVsc2UgTGF5YS5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0LCBMYXlhWydXZWJHTCddKVxyXG4gICAgTGF5YVsnUGh5c2ljcyddICYmIExheWFbJ1BoeXNpY3MnXS5lbmFibGUoKVxyXG4gICAgTGF5YVsnRGVidWdQYW5lbCddICYmIExheWFbJ0RlYnVnUGFuZWwnXS5lbmFibGUoKVxyXG4gICAgLy8gTGF5YS5zdGFnZS5zY2FsZU1vZGUgPSBHYW1lQ29uZmlnLnNjYWxlTW9kZTtcclxuICAgIExheWEuc3RhZ2Uuc2NhbGVNb2RlID0gR2FtZUNvbmZpZy5zY2FsZU1vZGVcclxuICAgIExheWEuc3RhZ2Uuc2NyZWVuTW9kZSA9IEdhbWVDb25maWcuc2NyZWVuTW9kZVxyXG4gICAgTGF5YS5zdGFnZS5hbGlnblYgPSBHYW1lQ29uZmlnLmFsaWduVlxyXG4gICAgTGF5YS5zdGFnZS5hbGlnbkggPSBHYW1lQ29uZmlnLmFsaWduSFxyXG4gICAgLy/lhbzlrrnlvq7kv6HkuI3mlK/mjIHliqDovb1zY2VuZeWQjue8gOWcuuaZr1xyXG4gICAgTGF5YS5VUkwuZXhwb3J0U2NlbmVUb0pzb24gPSBHYW1lQ29uZmlnLmV4cG9ydFNjZW5lVG9Kc29uXHJcblxyXG4gICAgLy/miZPlvIDosIPor5XpnaLmnb/vvIjpgJrov4dJREXorr7nva7osIPor5XmqKHlvI/vvIzmiJbogIV1cmzlnLDlnYDlop7liqBkZWJ1Zz10cnVl5Y+C5pWw77yM5Z2H5Y+v5omT5byA6LCD6K+V6Z2i5p2/77yJXHJcbiAgICBpZiAoR2FtZUNvbmZpZy5kZWJ1ZyB8fCBMYXlhLlV0aWxzLmdldFF1ZXJ5U3RyaW5nKCdkZWJ1ZycpID09ICd0cnVlJykgTGF5YS5lbmFibGVEZWJ1Z1BhbmVsKClcclxuICAgIGlmIChHYW1lQ29uZmlnLnBoeXNpY3NEZWJ1ZyAmJiBMYXlhWydQaHlzaWNzRGVidWdEcmF3J10pIExheWFbJ1BoeXNpY3NEZWJ1Z0RyYXcnXS5lbmFibGUoKVxyXG4gICAgaWYgKEdhbWVDb25maWcuc3RhdCkgTGF5YS5TdGF0LnNob3coKVxyXG4gICAgTGF5YS5hbGVydEdsb2JhbEVycm9yID0gdHJ1ZVxyXG4gICAgLy/mv4DmtLvotYTmupDniYjmnKzmjqfliLbvvIx2ZXJzaW9uLmpzb27nlLFJREXlj5HluIPlip/og73oh6rliqjnlJ/miJDvvIzlpoLmnpzmsqHmnInkuZ/kuI3lvbHlk43lkI7nu63mtYHnqItcclxuICAgIExheWEuUmVzb3VyY2VWZXJzaW9uLmVuYWJsZSgndmVyc2lvbi5qc29uJywgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uVmVyc2lvbkxvYWRlZCksIExheWEuUmVzb3VyY2VWZXJzaW9uLkZJTEVOQU1FX1ZFUlNJT04pXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uVmVyc2lvbkxvYWRlZCgpOiB2b2lkIHtcclxuICAgIC8v5r+A5rS75aSn5bCP5Zu+5pig5bCE77yM5Yqg6L295bCP5Zu+55qE5pe25YCZ77yM5aaC5p6c5Y+R546w5bCP5Zu+5Zyo5aSn5Zu+5ZCI6ZuG6YeM6Z2i77yM5YiZ5LyY5YWI5Yqg6L295aSn5Zu+5ZCI6ZuG77yM6ICM5LiN5piv5bCP5Zu+XHJcbiAgICBMYXlhLkF0bGFzSW5mb01hbmFnZXIuZW5hYmxlKCdmaWxlY29uZmlnLmpzb24nLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25Db25maWdMb2FkZWQpKVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkNvbmZpZ0xvYWRlZCgpOiB2b2lkIHtcclxuICAgIC8v5Yqg6L29SURF5oyH5a6a55qE5Zy65pmvXHJcbiAgICBHYW1lQ29uZmlnLnN0YXJ0U2NlbmUgJiYgTGF5YS5TY2VuZS5vcGVuKEdhbWVDb25maWcuc3RhcnRTY2VuZSlcclxuICB9XHJcbn1cclxuLy/mv4DmtLvlkK/liqjnsbtcclxubmV3IE1haW4oKVxyXG4iLCJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWZmZWN0VXRpbHMgIHtcclxuICAvKipcclxuICAgKiDnsbvkvLxtYWPkuIrlm77moIfkuIrkuIvmipbliqjnmoTmlYjmnpxcclxuICAgKiBAcGFyYW0ge1Nwcml0ZX0gb2JqIOaKluWKqOWvueixoVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbml0WSDopoHmipbliqjnmoTlr7nosaHnmoTliJ3lp4tZ5YC877yM5Y6f5aeL5L2N572uXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sg5oqW5Yqo5Yqo55S75a6M5oiQ5Zue6LCD5Ye95pWwXHJcbiAgICogQHBhcmFtIHthbnl9IHRoaXNPYmog5Zue6LCD5Ye95pWwdGhpc+WvueixoVxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgbWFjSWNvblNoYWtlKG9iaiwgaW5pdFksIGNhbGxiYWNrLCB0aGlzT2JqKSB7XHJcbiAgICAvL+aKluWKqOmikeeOh1vml7bpl7TvvIznp7vliqjot53nprtd77yM5Y+v5L+u5pS5XHJcbiAgICBsZXQgYXJyID0gW1syMCwgMzAwXSwgWzE1LCAzMDBdLCBbMTAsIDMwMF0sIFs1LCAzMDBdXVxyXG5cclxuICAgIGxldCBpbmRleCA9IDBcclxuICAgIHRvU2hha2UoKVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvU2hha2UoKSB7XHJcbiAgICAgIGlmIChpbmRleCA+PSBhcnIubGVuZ3RoKSB7XHJcbiAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2suYXBwbHkodGhpc09iaiwgW10pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgIG9iaixcclxuICAgICAgICAgIHsgeTogaW5pdFkgLSBhcnJbaW5kZXhdWzBdIH0sXHJcbiAgICAgICAgICBhcnJbaW5kZXhdWzFdLFxyXG4gICAgICAgICAgbnVsbCxcclxuICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUobnVsbCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgb2JqLFxyXG4gICAgICAgICAgICAgIHsgeTogaW5pdFkgfSxcclxuICAgICAgICAgICAgICBhcnJbaW5kZXhdWzFdLFxyXG4gICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZShudWxsLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICsraW5kZXhcclxuICAgICAgICAgICAgICAgIHRvU2hha2UoKVxyXG4gICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWQkeS4iuenu+WKqOa3oeWHuu+8iOW8ueWHuuahhu+8iVxyXG4gICAqIEBwYXJhbSB7U3ByaXRlfSBvYmog5reh5Ye65a+56LGhXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWUg5reh5Ye65pe26Ze0XHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZWFzZSDmt6Hlh7rlh73mlbBcclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayDmt6Hlh7rlrozmiJDlm57osIPlh73mlbBcclxuICAgKiBAcGFyYW0ge2FueX0gdGhpc09iaiDlm57osIPlh73mlbB0aGlz5a+56LGhXHJcbiAgICogQHBhcmFtIHtBcnJheX0gYXJyRGF0YSDlm57osIPkvKDlj4JcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGZsb3dPdXQob2JqLCB0aW1lID0gNTAwLCBlYXNlID0gbnVsbCwgY2FsbGJhY2sgPSBudWxsLCB0aGlzT2JqID0gbnVsbCwgYXJyRGF0YSA9IG51bGwpIHtcclxuICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICBMYXlhLlR3ZWVuLnRvKG9iaiwgeyB5OiBvYmoueSAtIDE1MCwgYWxwaGE6IDAgfSwgdGltZSwgZWFzZSwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzT2JqLCBjYWxsYmFjaywgYXJyRGF0YSkpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBMYXlhLlR3ZWVuLnRvKG9iaiwgeyB5OiBvYmoueSAtIDE1MCwgYWxwaGE6IDAgfSwgdGltZSwgZWFzZSwgTGF5YS5IYW5kbGVyLmNyZWF0ZShvYmosIG9iai5yZW1vdmVTZWxmLCBhcnJEYXRhKSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOaWh+acrOaVsOWtl+WinuWHj+aViOaenFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydE51bSDlvIDlp4vmlbDlgLxcclxuICAgKiBAcGFyYW0ge251bWJlcn0gZW5kTnVtIOa4kOWPmOWIsOeahOaVsOWAvFxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIOa3oeWHuuWujOaIkOWbnuiwg+WHveaVsFxyXG4gICAqIEBwYXJhbSB7YW55fSB0aGlzT2JqIOWbnuiwg+WHveaVsHRoaXPlr7nosaFcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGZsb3dOdW0oc3RhcnROdW0sIGVuZE51bSwgY2FsbGJhY2ssIHRoaXNPYmogPSBudWxsKSB7XHJcbiAgICBsZXQgY2hhbmdlID0gTWF0aC5hYnMoZW5kTnVtIC0gc3RhcnROdW0pXHJcbiAgICBpZiAoY2hhbmdlIDw9IDApIHJldHVyblxyXG4gICAgbGV0IGV2ZXJ5Q2hhbmdlID0gY2hhbmdlIC8gKGVuZE51bSAtIHN0YXJ0TnVtKVxyXG4gICAgbGV0IGN1cnJOdW0gPSBzdGFydE51bVxyXG4gICAgbGV0IHRpbWVyID0gbmV3IExheWEuVGltZXIoKVxyXG4gICAgdGltZXIubG9vcCgzMCwgdGhpcywgY2hhbmdlRnVuKVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZUZ1bigpIHtcclxuICAgICAgY3Vyck51bSArPSBldmVyeUNoYW5nZVxyXG4gICAgICAtLWNoYW5nZVxyXG4gICAgICBpZiAoY2hhbmdlIDwgMCkge1xyXG4gICAgICAgIHRpbWVyLmNsZWFyQWxsKHRoaXMpXHJcbiAgICAgICAgdGltZXIgPSBudWxsXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2suYXBwbHkodGhpc09iaiwgW2N1cnJOdW1dKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlvIDlp4vpl6rng4FcclxuICAgKiBAcGFyYW0ge1Nwcml0ZX0gb2JqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFscGhhVGltZSDpl6rng4HpopHnjodcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIHN0YXJ0RmxpY2tlcihvYmosIGFscGhhVGltZSA9IDcwMCkge1xyXG4gICAgb2JqLmFscGhhID0gMVxyXG4gICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgb2JqLFxyXG4gICAgICB7IGFscGhhOiAwIH0sXHJcbiAgICAgIGFscGhhVGltZSxcclxuICAgICAgbnVsbCxcclxuICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZShcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgTGF5YS5Ud2Vlbi50byhvYmosIHsgYWxwaGE6IDEgfSwgYWxwaGFUaW1lLCBudWxsLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMuc3RhcnRGbGlja2VyLCBbb2JqXSkpXHJcbiAgICAgICAgfS5iaW5kKHRoaXMpLFxyXG4gICAgICApLFxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5YGc5q2i5Yqo55S75omA5pyJ5Yqo55S75ZCO5a655Zmo5L2N572u5Yid5aeL5YyW5Yiw5Y6f5L2N77yM5ZCm5YiZ5Y+v6IO95Ye6546w5L2N572u5pS55Y+Y55qEYnVnXHJcbiAgICogQHBhcmFtIHtTcHJpdGV9IG9ialxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4UG9zXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHlQb3NcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIHN0b3BFZmZlY3Qob2JqLCB4UG9zID0gbnVsbCwgeVBvcyA9IG51bGwpIHtcclxuICAgIExheWEuVHdlZW4uY2xlYXJBbGwob2JqKVxyXG4gICAgaWYgKHhQb3MgIT09IG51bGwgJiYgeVBvcyAhPT0gbnVsbCkge1xyXG4gICAgICBvYmoucG9zKHhQb3MsIHlQb3MpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDngrnlh7vmlL7lpKfnvKnlsI/mlYjmnpxcclxuICAgKiBAcGFyYW0ge0xheWEuU3ByaXRlfVxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNDaGFuZ2VYWSDlpoLmnpzkuK3lv4PngrnmmK/plJrngrnkuI3pnIDopoHkv67mlLnkvY3nva5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGNsaWNrRWZmZWN0KHNwLCBpc0NoYW5nZVhZID0gdHJ1ZSkge1xyXG4gICAgaWYgKCFzcCkgcmV0dXJuXHJcbiAgICBzcC5vZmYoTGF5YS5FdmVudC5NT1VTRV9ET1dOLCB0aGlzLCB0aGlzLmN1YmljSW5PdXRFZmZlY3QpXHJcbiAgICBzcC5vbihMYXlhLkV2ZW50Lk1PVVNFX0RPV04sIHRoaXMsIHRoaXMuY3ViaWNJbk91dEVmZmVjdCwgW3NwLCBpc0NoYW5nZVhZXSlcclxuICB9XHJcbiAgcHVibGljIHN0YXRpYyBjbGVhckNsaWNrRWZmZWN0KHNwKSB7XHJcbiAgICBpZiAoIXNwKSByZXR1cm5cclxuICAgIHNwLm9mZihMYXlhLkV2ZW50Lk1PVVNFX0RPV04sIHRoaXMsIHRoaXMuY3ViaWNJbk91dEVmZmVjdClcclxuICB9XHJcbiAgcHVibGljIHN0YXRpYyBjdWJpY0luT3V0RWZmZWN0KHNwLCBpc0NoYW5nZVhZKSB7XHJcbiAgICBpZiAoc3AuX2FuaUJ1dHRvbkVmZmVjdCkgcmV0dXJuXHJcbiAgICBzcC5fYW5pQnV0dG9uRWZmZWN0ID0gdHJ1ZVxyXG4gICAgbGV0IF94ID0gc3AueFxyXG4gICAgbGV0IF95ID0gc3AueVxyXG4gICAgbGV0IF9zY2FYID0gc3Auc2NhbGVYXHJcbiAgICBsZXQgX3NjYVkgPSBzcC5zY2FsZVlcclxuICAgIGxldCBfYmlnWCwgX2JpZ1lcclxuICAgIGlmICghaXNDaGFuZ2VYWSkge1xyXG4gICAgICBfYmlnWCA9IF94IC0gKChzcC53aWR0aCAqIDAuMSkgPj4gMSlcclxuICAgICAgX2JpZ1kgPSBfeSAtICgoc3AuaGVpZ2h0ICogMC4xKSA+PiAxKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgX2JpZ1ggPSBfeFxyXG4gICAgICBfYmlnWSA9IF95XHJcbiAgICB9XHJcbiAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICBzcCxcclxuICAgICAgeyB4OiBfYmlnWCwgeTogX2JpZ1ksIHNjYWxlWDogMS4xICogX3NjYVgsIHNjYWxlWTogMS4xICogX3NjYVkgfSxcclxuICAgICAgMTAwLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgc3AsXHJcbiAgICAgICAgICB7IHg6IF94LCB5OiBfeSwgc2NhbGVYOiBfc2NhWCwgc2NhbGVZOiBfc2NhWSB9LFxyXG4gICAgICAgICAgMTAwLFxyXG4gICAgICAgICAgbnVsbCxcclxuICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNwLmRlc3Ryb3llZCkge1xyXG4gICAgICAgICAgICAgIHNwLl9hbmlCdXR0b25FZmZlY3QgPSBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICApXHJcbiAgICAgIH0pLFxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iLCIvKipcclxuICogbmFtZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNpbmdsZXRvbiB7XHJcbiAgLyoqXHJcbiAgICogZGVmYXVsdCBjb25zdHJhY3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgcHVibGljIHN0YXRpYyBfaW5zdGFuY2U6IGFueVxyXG4gIC8qKlxyXG4gICAqIGdldCBpbnN0YW5jZSBvciBjcmVhdGUgbmV3IGluc3RhbmNlXHJcbiAgICogQHJldHVybnMge2FueX1cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIENyZWF0ZU9yR2V0KC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgIGNvbnN0IGluc3RUOiBhbnkgPSB0aGlzXHJcbiAgICByZXR1cm4gKGluc3RULl9pbnN0YW5jZSA9IGluc3RULl9pbnN0YW5jZSB8fCBuZXcgaW5zdFQoLi4uYXJncykpXHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBlbnVtIExheWVyQ29uc3Qge1xyXG4gIGJhc2UgPSAxLFxyXG4gIGJhc2UxLFxyXG4gIHZpZXcsXHJcbiAgc2hhcmUsXHJcbiAgZGlhbG9nLFxyXG4gIGxvYWRpbmcsXHJcbn1cclxuIiwiZXhwb3J0IGVudW0gVmlld0NvbnN0IHtcclxuICBNYWluID0gMSxcclxuICBMb2FkaW5nLFxyXG4gIFZpZXdUZXN0LFxyXG4gIFZpZXdUZXN0MSxcclxuICBEaWFsb2dUZXN0LFxyXG4gIEJhc2VUZXN0LFxyXG4gIEFQYWdlLFxyXG4gIEJQYWdlXHJcbn1cclxuIiwiaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvU2VydmljZSdcclxuaW1wb3J0IHsgRGlzcGF0Y2hlciB9IGZyb20gJy4uL3NlcnZpY2UvZGlzcGF0Y2hlci9EaXNwYXRjaGVyJ1xyXG5pbXBvcnQgeyBWaWV3TWdyIH0gZnJvbSAnLi9zY2VuZXMvVmlld01ncidcclxuaW1wb3J0IFNvY2tldCBmcm9tICcuLi8uLi9uZXQvc29ja2V0J1xyXG5pbXBvcnQgeyBTdHJpbmdVdGlsIH0gZnJvbSAnLi91dGlscy9TdHJpbmdVdGlsJ1xyXG5pbXBvcnQgeyBUaW1lVXRpbCB9IGZyb20gJy4vdXRpbHMvVGltZVV0aWwnXHJcblxyXG5pbXBvcnQgR2FtZU5ldCBmcm9tICcuLi8uLi9uZXQvaHR0cC9HYW1lTmV0J1xyXG5pbXBvcnQgRWZmZWN0VXRpbHMgZnJvbSAnLi4vVXRpbHMvRWZmZWN0VXRpbHMnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQXBwIHtcclxuICAvLyDlhajlsYDphY3nva7mlbDmja5cclxuICBwdWJsaWMgc3RhdGljIEdsb2JhbERhdGE6IGFueSA9IG51bGxcclxuXHJcbiAgLyoqXHJcbiAgICog5Yid5aeL5YyW5Ye95pWwXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBpbml0KHNjZW5lKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBHYW1lQXBwLkdsb2JhbERhdGEgPSBMYXlhLmxvYWRlci5nZXRSZXMoJ2NvbmYvZ2xvYmFsLmpzb24nKVxyXG4gICAgICAvL+W4p+i9ruivolxyXG4gICAgICBTZXJ2aWNlLkluaXQoKVxyXG4gICAgICByZXNvbHZlKClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBkaXNwYXRjaGVyKCk6IERpc3BhdGNoZXIge1xyXG4gICAgcmV0dXJuIFNlcnZpY2UuZGlzcGF0Y2hlclxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgdmlld01ncigpOiBWaWV3TWdyIHtcclxuICAgIHJldHVybiBWaWV3TWdyLkNyZWF0ZU9yR2V0KClcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IFN0cmluZ1V0aWwoKTogU3RyaW5nVXRpbCB7XHJcbiAgICByZXR1cm4gU3RyaW5nVXRpbC5DcmVhdGVPckdldCgpXHJcbiAgfVxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IFRpbWVVdGlsKCk6IFRpbWVVdGlsIHtcclxuICAgIHJldHVybiBUaW1lVXRpbC5DcmVhdGVPckdldCgpXHJcbiAgfVxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IFNvY2tldCgpOiBTb2NrZXQge1xyXG4gICAgcmV0dXJuIFNvY2tldC5DcmVhdGVPckdldCgpXHJcbiAgfVxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IG5ldCgpOiBHYW1lTmV0IHtcclxuICAgIHJldHVybiBHYW1lTmV0LkNyZWF0ZU9yR2V0KClcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSVZpZXcgfSBmcm9tICcuL2ludGVyZmFjZS9JVmlldydcclxuaW1wb3J0IHsgTGF5ZXJDb25zdCB9IGZyb20gJy4uLy4uL2NvbnN0L0xheWVyQ29uc3QnXHJcbmltcG9ydCB7IElMYXllciB9IGZyb20gJy4vaW50ZXJmYWNlL0lMYXllcidcclxuZXhwb3J0IGNsYXNzIEJhc2VMYXllciBleHRlbmRzIExheWEuU3ByaXRlIGltcGxlbWVudHMgSUxheWVyIHtcclxuICBwcm90ZWN0ZWQgb3duU2NlbmU6IExheWEuU2NlbmVcclxuICBjb25zdHJ1Y3RvcihzY2VuZTogTGF5YS5TY2VuZSkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy5vd25TY2VuZSA9IHNjZW5lXHJcbiAgICB0aGlzLndpZHRoID0gdGhpcy5vd25TY2VuZS53aWR0aFxyXG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLm93blNjZW5lLmhlaWdodFxyXG4gICAgdGhpcy5oaXRUZXN0UHJpb3IgPSB0cnVlXHJcbiAgICB0aGlzLm1vdXNlVGhyb3VnaCA9IHRydWVcclxuICAgIHRoaXMubW91c2VFbmFibGVkID0gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGxheWVyS2V5ID0gTGF5ZXJDb25zdC5iYXNlXHJcbiAgcHVibGljIG9wZW5WaWV3KHZpZXc6IElWaWV3LCAuLi5hcmdzKTogdm9pZCB7XHJcbiAgICBpZiAodmlldy5vcGVuQ2IpIHtcclxuICAgICAgdmlldy5vcGVuQ2IuYXBwbHkodmlldywgYXJncylcclxuICAgIH1cclxuICAgIHRoaXMubW91c2VUaHJvdWdoID0gZmFsc2VcclxuICAgIHRoaXMuYWRkQ2hpbGQodmlldylcclxuICB9XHJcbiAgcHVibGljIGNsb3NlVmlldyh2aWV3OiBJVmlldyk6IHZvaWQge1xyXG4gICAgaWYgKHZpZXcuY2xvc2VDYikge1xyXG4gICAgICB2aWV3LmNsb3NlQ2IoKVxyXG4gICAgfVxyXG4gICAgdGhpcy5yZW1vdmVDaGlsZCh2aWV3KVxyXG4gICAgdGhpcy5tb3VzZVRocm91Z2ggPSB0aGlzLl9jaGlsZHJlbi5sZW5ndGggPT09IDBcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQmFzZUxheWVyIH0gZnJvbSAnLi9CYXNlTGF5ZXInXHJcbmltcG9ydCB7IElMYXllciB9IGZyb20gJy4vaW50ZXJmYWNlL0lMYXllcidcclxuaW1wb3J0IHsgTGF5ZXJDb25zdCB9IGZyb20gJy4uLy4uL2NvbnN0L0xheWVyQ29uc3QnXHJcbmltcG9ydCB7IGNsb3NlVmlldyB9IGZyb20gJy4uLy4uL212Yy9NdmNNZ3InXHJcbmNsYXNzIE1hc2sgZXh0ZW5kcyBMYXlhLkltYWdlIHtcclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnNraW4gPSAnY29tcC9ibGFuay5wbmcnXHJcbiAgICB0aGlzLmFscGhhID0gMC44XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEaWFsb2dMYXllciBleHRlbmRzIEJhc2VMYXllciBpbXBsZW1lbnRzIElMYXllciB7XHJcbiAgLy8gcHJpdmF0ZSBtTWFza1xyXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBMYXlhLlNjZW5lKSB7XHJcbiAgICBzdXBlcihzY2VuZSlcclxuICB9XHJcbiAgc3RhdGljIGxheWVyS2V5ID0gTGF5ZXJDb25zdC5kaWFsb2dcclxuXHJcbiAgcHJpdmF0ZSBtYXNrczogTWFwPHN0cmluZywgTGF5YS5JbWFnZT4gPSBuZXcgTWFwKClcclxuXHJcbiAgcHVibGljIG9wZW5WaWV3KHZpZXc6IGFueSwgLi4uYXJnczogYW55W10pOiB2b2lkIHtcclxuICAgIGxldCBtYXNrID0gdGhpcy5tYXNrcy5nZXQodmlldy5jb25zdHJ1Y3Rvci52aWV3S2V5KVxyXG4gICAgaWYgKCFtYXNrKSB7XHJcbiAgICAgIG1hc2sgPSBuZXcgTWFzaygpXHJcbiAgICAgIG1hc2sub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgIGNsb3NlVmlldyh2aWV3KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgbWFzay53aWR0aCA9IHRoaXMud2lkdGhcclxuICAgIG1hc2suaGVpZ2h0ID0gdGhpcy5oZWlnaHRcclxuXHJcbiAgICB0aGlzLm1hc2tzLnNldCh2aWV3LmNvbnN0cnVjdG9yLnZpZXdLZXksIG1hc2spXHJcbiAgICB0aGlzLmFkZENoaWxkKG1hc2spXHJcbiAgICBzdXBlci5vcGVuVmlldy5hcHBseSh0aGlzLCBbdmlldywgLi4uYXJnc10pXHJcblxyXG4gICAgdmlldy5hbmNob3JYID0gMC41XHJcbiAgICB2aWV3LmFuY2hvclkgPSAwLjVcclxuICAgIHZpZXcueCA9IHZpZXcud2lkdGggLyAyXHJcbiAgICB2aWV3LnkgPSB2aWV3LmhlaWdodCAvIDJcclxuICAgIHZpZXcubW91c2VUaHJvdWdoID0gdHJ1ZVxyXG4gICAgbGV0IHR3ZWVuID0gbmV3IExheWEuVHdlZW4oKVxyXG4gICAgdmlldy5zY2FsZVggPSAwLjhcclxuICAgIHZpZXcuc2NhbGVZID0gMC44XHJcbiAgICB0d2Vlbi50byhcclxuICAgICAgdmlldyxcclxuICAgICAgeyBzY2FsZVg6IDEuMDUsIHNjYWxlWTogMS4wNSB9LFxyXG4gICAgICAxMDAsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG5ldyBMYXlhLkhhbmRsZXIodGhpcywgKCkgPT4ge1xyXG4gICAgICAgIGxldCB0d2VlbiA9IG5ldyBMYXlhLlR3ZWVuKClcclxuICAgICAgICB0d2Vlbi50byh2aWV3LCB7IHNjYWxlWDogMSwgc2NhbGVZOiAxIH0sIDEwMCwgbnVsbClcclxuICAgICAgfSksXHJcbiAgICApXHJcbiAgfVxyXG4gIHB1YmxpYyBjbG9zZVZpZXcodmlldzogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMubWFza3MuZ2V0KHZpZXcuY29uc3RydWN0b3Iudmlld0tleSkpXHJcbiAgICBzdXBlci5jbG9zZVZpZXcodmlldylcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQmFzZUxheWVyIH0gZnJvbSAnLi9CYXNlTGF5ZXInXHJcblxyXG5pbXBvcnQgeyBJVmlldyB9IGZyb20gJy4vaW50ZXJmYWNlL0lWaWV3J1xyXG5cclxuaW1wb3J0IHsgTGF5ZXJDb25zdCB9IGZyb20gJy4uLy4uL2NvbnN0L0xheWVyQ29uc3QnXHJcblxyXG5jb25zdCBkaXMgPSAxMDBcclxuY29uc3QgdGltZSA9IDI0MFxyXG5leHBvcnQgY2xhc3MgVmlld0xheWVyIGV4dGVuZHMgQmFzZUxheWVyIHtcclxuICBjb25zdHJ1Y3RvcihzY2VuZTogTGF5YS5TY2VuZSkge1xyXG4gICAgc3VwZXIoc2NlbmUpXHJcbiAgfVxyXG4gIHN0YXRpYyBsYXllcktleSA9IExheWVyQ29uc3Qudmlld1xyXG4gIHByaXZhdGUgb3BlblZpZXdzOiBJVmlld1tdID0gW11cclxuIFxyXG4gIHB1YmxpYyBvcGVuVmlldyh2aWV3OiBhbnksIC4uLmFyZ3MpIHtcclxuICAgIGxldCBsYXN0VmlldzogTGF5YS5TcHJpdGVcclxuICAgIGNvbnN0IHR3ZWVuMSA9IG5ldyBMYXlhLlR3ZWVuKClcclxuICAgIGlmICh0aGlzLm9wZW5WaWV3cy5sZW5ndGgpIHtcclxuICAgICAgbGFzdFZpZXcgPSB0aGlzLm9wZW5WaWV3c1t0aGlzLm9wZW5WaWV3cy5sZW5ndGggLSAxXVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGFzdFZpZXcgPSB0aGlzLm93blNjZW5lXHJcbiAgICB9XHJcbiAgICBsYXN0Vmlldy54ID0gdGhpcy5vd25TY2VuZSA9PT0gbGFzdFZpZXcgPyAwIDogZGlzXHJcbiAgICB0d2VlbjEudG8oXHJcbiAgICAgIGxhc3RWaWV3LFxyXG4gICAgICB7IHg6IHRoaXMub3duU2NlbmUgPT09IGxhc3RWaWV3ID8gLWRpcyA6IDAgfSxcclxuICAgICAgdGltZSxcclxuICAgICAgbnVsbCxcclxuICAgICAgbmV3IExheWEuSGFuZGxlcihsYXN0VmlldywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChsYXN0VmlldyAhPT0gdGhpcy5vd25TY2VuZSkgbGFzdFZpZXcucmVtb3ZlU2VsZigpXHJcbiAgICAgIH0pLFxyXG4gICAgKVxyXG4gICAgdGhpcy5vcGVuVmlld3MucHVzaCh2aWV3KVxyXG4gICAgc3VwZXIub3BlblZpZXcuYXBwbHkodGhpcywgW3ZpZXcsIC4uLmFyZ3NdKVxyXG4gICAgY29uc3QgdHdlZW4yID0gbmV3IExheWEuVHdlZW4oKVxyXG4gICAgdmlldy54ID0gdGhpcy53aWR0aFxyXG4gICAgdHdlZW4yLnRvKFxyXG4gICAgICB2aWV3LFxyXG4gICAgICB7IHg6IGRpcyB9LFxyXG4gICAgICB0aW1lLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBuZXcgTGF5YS5IYW5kbGVyKHZpZXcsICgpID0+IHtcclxuICAgICAgICBpZiAodmlldy5hZnRlck9wZW4pIHtcclxuICAgICAgICAgIHZpZXcuYWZ0ZXJPcGVuLmNhbGwodmlldylcclxuICAgICAgICB9XHJcbiAgICAgIH0pLFxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb3NlVmlldyh2aWV3OiBhbnkpIHtcclxuICAgIGxldCBsYXN0Vmlld1xyXG4gICAgY29uc3QgdHdlZW4xID0gbmV3IExheWEuVHdlZW4oKVxyXG4gICAgdGhpcy5vcGVuVmlld3MucG9wKClcclxuICAgIGlmICh0aGlzLm9wZW5WaWV3cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxhc3RWaWV3ID0gdGhpcy5vcGVuVmlld3NbdGhpcy5vcGVuVmlld3MubGVuZ3RoIC0gMV1cclxuICAgICAgbGFzdFZpZXcuek9yZGVyID0gdmlldy56T3JkZXIgLSAxXHJcbiAgICAgIGxhc3RWaWV3LmxheWVyLmFkZENoaWxkKGxhc3RWaWV3KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGFzdFZpZXcgPSB0aGlzLm93blNjZW5lXHJcbiAgICB9XHJcblxyXG4gICAgbGFzdFZpZXcueCA9IGxhc3RWaWV3ID09PSB0aGlzLm93blNjZW5lID8gLWRpcyA6IDBcclxuXHJcbiAgICB0d2VlbjEudG8obGFzdFZpZXcsIHsgeDogbGFzdFZpZXcgPT09IHRoaXMub3duU2NlbmUgPyAwIDogZGlzIH0sIHRpbWUpXHJcbiAgICBjb25zdCB0d2VlbjIgPSBuZXcgTGF5YS5Ud2VlbigpXHJcbiAgICB2aWV3LnggPSBkaXNcclxuICAgIHR3ZWVuMi50byhcclxuICAgICAgdmlldyxcclxuICAgICAgeyB4OiB0aGlzLndpZHRoIH0sXHJcbiAgICAgIHRpbWUsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG5ldyBMYXlhLkhhbmRsZXIodGhpcywgKCkgPT4ge1xyXG4gICAgICAgIHN1cGVyLmNsb3NlVmlldyh2aWV3KVxyXG4gICAgICB9KSxcclxuICAgIClcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSVZpZXcgfSBmcm9tICcuL2ludGVyZmFjZS9JVmlldydcclxuaW1wb3J0IHsgU2luZ2xldG9uIH0gZnJvbSAnLi4vLi4vYmFzZS9TaW5nbGV0b24nXHJcbmltcG9ydCB7IFZpZXdDb25zdCB9IGZyb20gJy4uLy4uL2NvbnN0L1ZpZXdDb25zdCdcclxuXHJcbmV4cG9ydCBjbGFzcyBWaWV3TWdyIGV4dGVuZHMgU2luZ2xldG9uIHtcclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgfVxyXG4gIHByaXZhdGUgdmlld3M6IE1hcDxzdHJpbmcsIElWaWV3PiA9IG5ldyBNYXA8c3RyaW5nLCBJVmlldz4oKVxyXG4gIHByaXZhdGUgb3BlblZpZXdzOiBNYXA8c3RyaW5nLCBJVmlldz4gPSBuZXcgTWFwPHN0cmluZywgSVZpZXc+KClcclxuICBwdWJsaWMgZ2V0VmlldyhrZXkpOiBJVmlldyB7XHJcbiAgICBpZiAodGhpcy52aWV3cy5nZXQoa2V5KSkge1xyXG4gICAgICByZXR1cm4gdGhpcy52aWV3cy5nZXQoa2V5KVxyXG4gICAgfVxyXG4gIH1cclxuICBwdWJsaWMgc2V0VmlldyhrZXksIHZpZXc6IElWaWV3KTogdm9pZCB7XHJcbiAgICB0aGlzLnZpZXdzLnNldChrZXksIHZpZXcpXHJcbiAgfVxyXG4gIHB1YmxpYyBvcGVuVmlldyhrZXksIC4uLmFyZ3MpOiB2b2lkIHtcclxuICAgIGxldCB2aWV3ID0gdGhpcy5vcGVuVmlld3MuZ2V0KGtleSlcclxuICAgIGlmICh2aWV3KSB7XHJcbiAgICAgIHZpZXcub3Blbi5hcHBseSh2aWV3LCBhcmdzKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHZpZXcgPSB0aGlzLnZpZXdzLmdldChrZXkpXHJcbiAgICBpZiAodmlldykge1xyXG4gICAgICB2aWV3LmxheWVyLm9wZW5WaWV3LmFwcGx5KHZpZXcubGF5ZXIsIFt2aWV3LCAuLi5hcmdzXSlcclxuICAgICAgdGhpcy5vcGVuVmlld3Muc2V0KGtleSwgdmlldylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3ZpZXfkuI3lrZjlnKgnKVxyXG4gICAgfVxyXG4gIH1cclxuICBwdWJsaWMgY2xvc2VWaWV3KHZpZXdvcmtleTogYW55KTogdm9pZCB7XHJcbiAgICBsZXQgdmlldzogSVZpZXdcclxuICAgIGlmICh2aWV3b3JrZXkgaW4gVmlld0NvbnN0KSB7XHJcbiAgICAgIHZpZXcgPSB0aGlzLm9wZW5WaWV3cy5nZXQodmlld29ya2V5KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmlldyA9IHZpZXdvcmtleVxyXG4gICAgfVxyXG4gICAgaWYgKHZpZXcpIHtcclxuICAgICAgdmlldy5sYXllci5jbG9zZVZpZXcuYXBwbHkodmlldy5sYXllciwgW3ZpZXddKVxyXG4gICAgICB0aGlzLm9wZW5WaWV3cy5kZWxldGUodmlldy5uYW1lKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICB9XHJcbiAgcHVibGljIGlzT3Blbih2aWV3b3JrZXkpOiBib29sZWFuIHtcclxuICAgIGlmICh2aWV3b3JrZXkgaW4gVmlld0NvbnN0KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm9wZW5WaWV3cy5oYXModmlld29ya2V5KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMub3BlblZpZXdzLmhhcyh2aWV3b3JrZXkubmFtZSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2luZ2xldG9uIH0gZnJvbSAnLi4vLi4vYmFzZS9TaW5nbGV0b24nXHJcblxyXG5leHBvcnQgY2xhc3MgU3RyaW5nVXRpbCBleHRlbmRzIFNpbmdsZXRvbiB7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTaW5nbGV0b24gfSBmcm9tICcuLi8uLi9iYXNlL1NpbmdsZXRvbidcclxuXHJcbmV4cG9ydCBjbGFzcyBUaW1lVXRpbCBleHRlbmRzIFNpbmdsZXRvbiB7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gIH1cclxuICAvL+WJqeS9meaXtumXtOi9rOaXtuWIhuenku+8iOenku+8iVxyXG4gIHByaXZhdGUgY2hhbmdlVGltZSh0aW1lOiBudW1iZXIpOiB7IGhvdXJzOiBudW1iZXI7IG1pbnV0ZXM6IG51bWJlcjsgc2Vjb25kczogbnVtYmVyIH0ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaG91cnM6IE1hdGguZmxvb3IodGltZSAvIDM2MDApLFxyXG4gICAgICBtaW51dGVzOiBNYXRoLmZsb29yKCh0aW1lICUgMzYwMCkgLyA2MCksXHJcbiAgICAgIHNlY29uZHM6IHRpbWUgJSA2MCxcclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICog5YCS6K6h5pe2XHJcbiAgICogQHBhcmFtIHRpbWUg5pe26Ze05oiz77yIc++8iVxyXG4gICAqIEBwYXJhbSBob3VyIOaXtlxyXG4gICAqIEBwYXJhbSBtaW51dGUg5YiGXHJcbiAgICogQHBhcmFtIHNlY29uZCDnp5JcclxuICAgKi9cclxuICBwdWJsaWMgY291bnREb3duKHRpbWU6IG51bWJlciwgaG91cjogc3RyaW5nID0gJ+aXticsIG1pbnV0ZTogc3RyaW5nID0gJ+WIhicsIHNlY29uZDogc3RyaW5nID0gJ+enkicpOiBzdHJpbmcge1xyXG4gICAgbGV0IHRlbXAgPSB0aGlzLmNoYW5nZVRpbWUodGltZSlcclxuICAgIHJldHVybiBgJHt0ZW1wLmhvdXJzfSR7aG91cn0ke3RlbXAubWludXRlc30ke21pbnV0ZX0ke3RlbXAuc2Vjb25kc30ke3NlY29uZH1gXHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIOagvOW8j+WMluaXtumXtFxyXG4gICAqIEBwYXJhbSBkYXRlIERhdGVcclxuICAgKiBAcGFyYW0gZm9ybWF0IOagvOW8j1xyXG4gICAqL1xyXG4gIHB1YmxpYyBEYXRlRm9ybWF0KGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nID0gJ3l5eXktTU0tZGQgaGg6bW06c3MnKTogc3RyaW5nIHtcclxuICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXHJcbiAgICBsZXQgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxID4gOSA/IGRhdGUuZ2V0TW9udGgoKSArIDEgOiBgMCR7ZGF0ZS5nZXRNb250aCgpICsgMX1gXHJcbiAgICBsZXQgbW9udGgyID0gZGF0ZS5nZXRNb250aCgpICsgMVxyXG4gICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpID4gOSA/IGRhdGUuZ2V0RGF0ZSgpIDogYDAke2RhdGUuZ2V0RGF0ZSgpfWBcclxuICAgIGxldCBkYXkyID0gZGF0ZS5nZXREYXRlKClcclxuICAgIGxldCBob3VyID0gZGF0ZS5nZXRIb3VycygpID4gOSA/IGRhdGUuZ2V0SG91cnMoKSA6IGAwJHtkYXRlLmdldEhvdXJzKCl9YFxyXG4gICAgbGV0IGhvdXIyID0gZGF0ZS5nZXRIb3VycygpXHJcbiAgICBsZXQgbWludXRlID0gZGF0ZS5nZXRNaW51dGVzKCkgPiA5ID8gZGF0ZS5nZXRNaW51dGVzKCkgOiBgMCR7ZGF0ZS5nZXRNaW51dGVzKCl9YFxyXG4gICAgbGV0IG1pbnV0ZTIgPSBkYXRlLmdldE1pbnV0ZXMoKVxyXG4gICAgbGV0IHNlY29uZCA9IGRhdGUuZ2V0U2Vjb25kcygpID4gOSA/IGRhdGUuZ2V0U2Vjb25kcygpIDogYDAke2RhdGUuZ2V0U2Vjb25kcygpfWBcclxuICAgIGxldCBzZWNvbmQyID0gZGF0ZS5nZXRTZWNvbmRzKClcclxuXHJcbiAgICByZXR1cm4gZm9ybWF0XHJcbiAgICAgIC5yZXBsYWNlKC95eXl5LywgYCR7eWVhcn1gKVxyXG4gICAgICAucmVwbGFjZSgvTU0vLCBgJHttb250aH1gKVxyXG4gICAgICAucmVwbGFjZSgvTS8sIGAke21vbnRoMn1gKVxyXG4gICAgICAucmVwbGFjZSgvZGQvLCBgJHtkYXl9YClcclxuICAgICAgLnJlcGxhY2UoL2QvLCBgJHtkYXkyfWApXHJcbiAgICAgIC5yZXBsYWNlKC9oaC8sIGAke2hvdXJ9YClcclxuICAgICAgLnJlcGxhY2UoL2gvLCBgJHtob3VyMn1gKVxyXG4gICAgICAucmVwbGFjZSgvbW0vLCBgJHttaW51dGV9YClcclxuICAgICAgLnJlcGxhY2UoL20vLCBgJHttaW51dGUyfWApXHJcbiAgICAgIC5yZXBsYWNlKC9zcy8sIGAke3NlY29uZH1gKVxyXG4gICAgICAucmVwbGFjZSgvcy8sIGAke3NlY29uZDJ9YClcclxuICB9XHJcbiAgLyoqXHJcbiAgICog6I635Y+W5b2T5YmNdXRj5aSpMOeCuVxyXG4gICAqL1xyXG4gIHB1YmxpYyBVVENEYXRlKCk6IERhdGUge1xyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKVxyXG4gICAgbm93LnNldFVUQ0hvdXJzKDApXHJcbiAgICBub3cuc2V0VVRDTWludXRlcygwKVxyXG4gICAgbm93LnNldFVUQ1NlY29uZHMoMClcclxuICAgIG5vdy5zZXRVVENNaWxsaXNlY29uZHMoMClcclxuICAgIHJldHVybiBub3dcclxuICB9XHJcbiAgLyoqXHJcbiAgICog6I635Y+W5b2T5YmN5pe26Ze05Yiw5YiwMTk3MC0xLTHnmoTlpKnmlbDvvIh1dGPvvIlcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0VVRDRGF0ZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvICgyNCAqIDYwICogNjAgKiAxMDAwKSlcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IG1vZHVsZSBtdmMge1xyXG4gIGNsYXNzIENvbnRyb2xsZXJNYW5hZ2VyIHtcclxuICAgIHByaXZhdGUgY29udHJvbGxlcnMgPSBuZXcgTWFwKClcclxuXHJcbiAgICBwdWJsaWMgcmVnaXN0ZXIodmlldywgQ29udHJvbGxlciwgTW9kZWwpIHtcclxuICAgICAgY29uc3Qga2V5ID0gdmlldy5jb25zdHJ1Y3Rvci52aWV3S2V5XHJcbiAgICAgIGlmICh0aGlzLmlzRXhpc3RzKGtleSkpIHJldHVyblxyXG4gICAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoKVxyXG4gICAgICBjb250cm9sbGVyLnNldFZpZXcodmlldylcclxuICAgICAgaWYgKE1vZGVsKSB7XHJcbiAgICAgICAgY29udHJvbGxlci5zZXRNb2RlbChuZXcgTW9kZWwoKSlcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNvbnRyb2xsZXJzLnNldChrZXksIGNvbnRyb2xsZXIpXHJcbiAgICAgIHJldHVybiBjb250cm9sbGVyXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdW5yZWdpc3Rlcihjb250cm9sbGVyS2V5KSB7XHJcbiAgICAgIGlmICghdGhpcy5pc0V4aXN0cyhjb250cm9sbGVyS2V5KSkgcmV0dXJuXHJcbiAgICAgIHRoaXMuY29udHJvbGxlcnMuZGVsZXRlKGNvbnRyb2xsZXJLZXkpXHJcbiAgICB9XHJcbiAgICBpc0V4aXN0cyhjb250cm9sbGVyS2V5KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xsZXJzLmhhcyhjb250cm9sbGVyS2V5KVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmjIflrppDb250cm9sbGVy5a+56LGhXHJcbiAgICAgKiBAcGFyYW0gIGNvbnRyb2xsZXJLZXkgQ29udHJvbGxlcuWUr+S4gOagh+ivhlxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgZ2V0Q29udHJvbGxlcihjb250cm9sbGVyS2V5KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xsZXJzLmdldChjb250cm9sbGVyS2V5KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGNvbnN0IGNvbnRyb2xsZXJNZ3IgPSBuZXcgQ29udHJvbGxlck1hbmFnZXIoKVxyXG59XHJcbiIsImltcG9ydCAqIGFzIHYgZnJvbSAnLi9WaWV3TWdyJ1xyXG5pbXBvcnQgKiBhcyBjIGZyb20gJy4vQ29udHJvbGxlck1hbmFnZXInXHJcbmNvbnN0IE1WQyA9IFtdXHJcbmxldCBVSSA9IExheWEuc3RhZ2VcclxuY29uc3QgUmVnaXN0ZXJNVkMgPSAoTGF5ZXIsIENvbnRyb2xsZXIgPSBudWxsLCBNb2RlbCA9IG51bGwpID0+IHtcclxuICByZXR1cm4gVmlldyA9PiB7XHJcbiAgICBsZXQgbGF5ZXIgPSBNVkMuZmluZChsYXllciA9PiBsYXllci5MYXllciA9PT0gTGF5ZXIpXHJcbiAgICBpZiAoIWxheWVyKSB7XHJcbiAgICAgIGxheWVyID0ge1xyXG4gICAgICAgIExheWVyLFxyXG4gICAgICAgIHZpZXdzOiBbXSxcclxuICAgICAgfVxyXG4gICAgICBNVkMucHVzaChsYXllcilcclxuICAgIH1cclxuICAgIGNvbnN0IHZpZXcgPSBsYXllci52aWV3cy5maW5kKHZpZXcgPT4gdmlldy5WaWV3ID09PSBWaWV3IHx8IHZpZXcuVmlldy52aWV3S2V5ID09PSBWaWV3LnZpZXdLZXkpXHJcbiAgICBpZiAodmlldykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFZpZXcgJHt2aWV3LlZpZXd9IOW3suWtmOWcqCB8fCB2aWV3S2V5ICR7Vmlldy52aWV3S2V5fSDph43lpI1gKVxyXG4gICAgfVxyXG4gICAgbGF5ZXIudmlld3MucHVzaCh7IGxheWVyLCBWaWV3LCBNb2RlbCwgQ29udHJvbGxlciB9KVxyXG4gIH1cclxufVxyXG5jb25zdCBzZXRVSVJvb3QgPSByb290ID0+IHtcclxuICBVSSA9IHJvb3RcclxufVxyXG5jb25zdCBjb250cm9sbGVyTWdyID0gYy5tdmMuY29udHJvbGxlck1nclxyXG5jb25zdCB2aWV3TWdyID0gdi5tdmMudmlld01nclxyXG5jb25zdCBvcGVuVmlldyA9IHYubXZjLm9wZW5WaWV3XHJcbmNvbnN0IGNsb3NlVmlldyA9IHYubXZjLmNsb3NlVmlld1xyXG5leHBvcnQgeyB2aWV3TWdyLCBjb250cm9sbGVyTWdyLCBvcGVuVmlldywgY2xvc2VWaWV3LCBSZWdpc3Rlck1WQywgc2V0VUlSb290LCBNVkMsIFVJIH1cclxuIiwiaW1wb3J0IHsgSVZpZXcgfSBmcm9tICcuLi9nYW1lL3NjZW5lcy9pbnRlcmZhY2UvSVZpZXcnXHJcblxyXG5pbXBvcnQgeyBJTGF5ZXIgfSBmcm9tICcuLi9nYW1lL3NjZW5lcy9pbnRlcmZhY2UvSUxheWVyJ1xyXG5cclxuaW1wb3J0IHsgTVZDLCBVSSwgY29udHJvbGxlck1nciB9IGZyb20gJy4vTXZjTWdyJ1xyXG5cclxuZXhwb3J0IG1vZHVsZSBtdmMge1xyXG4gIGNsYXNzIFZpZXdNZ3Ige1xyXG4gICAgcHJpdmF0ZSB2aWV3czogTWFwPHN0cmluZywgSVZpZXc+ID0gbmV3IE1hcDxzdHJpbmcsIElWaWV3PigpXHJcbiAgICBwcml2YXRlIGxheWVyczogTWFwPHN0cmluZywgSUxheWVyPiA9IG5ldyBNYXA8c3RyaW5nLCBJTGF5ZXI+KClcclxuICAgIHByaXZhdGUgb3BlblZpZXdzOiBNYXA8c3RyaW5nLCBJVmlldz4gPSBuZXcgTWFwPHN0cmluZywgSVZpZXc+KClcclxuXHJcbiAgICBwdWJsaWMgZ2V0VmlldyhrZXkpOiBJVmlldyB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZpZXdzLmdldChrZXkpXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0VmlldyhrZXksIHZpZXc6IElWaWV3KTogdm9pZCB7XHJcbiAgICAgIHRoaXMudmlld3Muc2V0KGtleSwgdmlldylcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRMYXllcihrZXkpOiBJTGF5ZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5sYXllcnMuZ2V0KGtleSlcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRMYXllcihrZXksIGxheWVyOiBJTGF5ZXIpOiB2b2lkIHtcclxuICAgICAgdGhpcy5sYXllcnMuc2V0KGtleSwgbGF5ZXIpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZW5WaWV3KFZpZXcsIC4uLmFyZ3MpOiB2b2lkIHtcclxuICAgICAgbGV0IF92aWV3ID0gdGhpcy5vcGVuVmlld3MuZ2V0KFZpZXcudmlld0tleSlcclxuICAgICAgaWYgKF92aWV3JiZfdmlldy5vcGVuQ2IpIHtcclxuICAgICAgICBfdmlldy5vcGVuQ2IuYXBwbHkoX3ZpZXcsIGFyZ3MpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgX3ZpZXcgPSB0aGlzLmdldFZpZXcoVmlldy52aWV3S2V5KVxyXG4gICAgICBpZiAoX3ZpZXcpIHtcclxuICAgICAgICBfdmlldy5sYXllci5vcGVuVmlldyhfdmlldywgLi4uYXJncylcclxuICAgICAgICB0aGlzLm9wZW5WaWV3cy5zZXQoVmlldy52aWV3S2V5LCBfdmlldylcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBfdmlldyA9IHRoaXMuY3JlYXRlVmlldyhWaWV3KVxyXG4gICAgICBfdmlldy5sYXllci5vcGVuVmlldyhfdmlldywgLi4uYXJncylcclxuICAgIH1cclxuICAgIHByaXZhdGUgY3JlYXRlVmlldyhWaWV3KSB7XHJcbiAgICAgIGNvbnN0IGxheWVyID0gTVZDLmZpbmQobGF5ZXIgPT4gbGF5ZXIudmlld3MuZmluZCh2aWV3ID0+IHZpZXcuVmlldy52aWV3S2V5ID09PSBWaWV3LnZpZXdLZXkpKVxyXG4gICAgICBpZiAoIWxheWVyKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdsYXllciDkuI3lrZjlnKgnKVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBfbGF5ZXIgPSB0aGlzLmdldExheWVyKGxheWVyLkxheWVyLmxheWVyS2V5KVxyXG4gICAgICBpZiAoIV9sYXllcikge1xyXG4gICAgICAgIF9sYXllciA9IG5ldyBsYXllci5MYXllcihVSSlcclxuICAgICAgICBfbGF5ZXIuek9yZGVyID0gbGF5ZXIuTGF5ZXIubGF5ZXJLZXlcclxuICAgICAgICBVSS5hZGRDaGlsZChfbGF5ZXIpXHJcbiAgICAgICAgdGhpcy5zZXRMYXllcihsYXllci5MYXllci5sYXllcktleSwgX2xheWVyKVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHZpZXcgPSBsYXllci52aWV3cy5maW5kKHZpZXcgPT4gdmlldy5WaWV3LnZpZXdLZXkgPT09IFZpZXcudmlld0tleSlcclxuICAgICAgbGV0IF92aWV3ID0gbmV3IHZpZXcuVmlldygpXHJcbiAgICAgIF92aWV3LmxheWVyID0gX2xheWVyXHJcbiAgICAgIGlmICh2aWV3LkNvbnRyb2xsZXIpIHtcclxuICAgICAgICBjb25zdCBfY29udHJvbGxlcjogYW55ID0gY29udHJvbGxlck1nci5yZWdpc3Rlcihfdmlldywgdmlldy5Db250cm9sbGVyLCB2aWV3Lk1vZGVsKVxyXG4gICAgICAgIF92aWV3LnNldENvbnRyb2xsZXIoX2NvbnRyb2xsZXIpXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRWaWV3KHZpZXcuVmlldy52aWV3S2V5LCBfdmlldylcclxuICAgICAgaWYgKF92aWV3LmluaXQpIF92aWV3LmluaXQoKVxyXG4gICAgICByZXR1cm4gX3ZpZXdcclxuICAgIH1cclxuICAgIHB1YmxpYyBjbG9zZVZpZXcoVmlld09yS2V5T3JJbnM6IGFueSwgLi4uYXJncyk6IHZvaWQge1xyXG4gICAgICBsZXQgX3ZpZXdcclxuICAgICAgaWYgKFZpZXdPcktleU9ySW5zLnZpZXdLZXkpIHtcclxuICAgICAgICBfdmlldyA9IHRoaXMuZ2V0VmlldyhWaWV3T3JLZXlPcklucy52aWV3S2V5KVxyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZ2V0VmlldyhWaWV3T3JLZXlPcklucykpIHtcclxuICAgICAgICBfdmlldyA9IHRoaXMuZ2V0VmlldyhWaWV3T3JLZXlPcklucylcclxuICAgICAgfSBlbHNlIGlmIChWaWV3T3JLZXlPcklucy5jb25zdHJ1Y3Rvci52aWV3S2V5KSB7XHJcbiAgICAgICAgX3ZpZXcgPSB0aGlzLmdldFZpZXcoVmlld09yS2V5T3JJbnMuY29uc3RydWN0b3Iudmlld0tleSlcclxuICAgICAgfVxyXG4gICAgICBpZiAoX3ZpZXcpIHtcclxuICAgICAgICBfdmlldy5sYXllci5jbG9zZVZpZXcoX3ZpZXcsIC4uLmFyZ3MpXHJcbiAgICAgICAgdGhpcy5vcGVuVmlld3MuZGVsZXRlKF92aWV3LmNvbnN0cnVjdG9yLnZpZXdLZXkpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBpc09wZW4oVmlld09yS2V5T3JJbnMpOiBib29sZWFuIHtcclxuICAgICAgbGV0IF92aWV3XHJcbiAgICAgIGlmIChWaWV3T3JLZXlPcklucy52aWV3S2V5KSB7XHJcbiAgICAgICAgX3ZpZXcgPSB0aGlzLm9wZW5WaWV3cy5nZXQoVmlld09yS2V5T3JJbnMudmlld0tleSlcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLm9wZW5WaWV3cy5nZXQoVmlld09yS2V5T3JJbnMpKSB7XHJcbiAgICAgICAgX3ZpZXcgPSB0aGlzLm9wZW5WaWV3cy5nZXQoVmlld09yS2V5T3JJbnMpXHJcbiAgICAgIH0gZWxzZSBpZiAoVmlld09yS2V5T3JJbnMuY29uc3RydWN0b3Iudmlld0tleSkge1xyXG4gICAgICAgIF92aWV3ID0gdGhpcy5vcGVuVmlld3MuZ2V0KFZpZXdPcktleU9ySW5zLmNvbnN0cnVjdG9yLnZpZXdLZXkpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuICEhX3ZpZXdcclxuICAgIH1cclxuICB9XHJcbiAgZXhwb3J0IGNvbnN0IHZpZXdNZ3IgPSBuZXcgVmlld01ncigpXHJcbiAgZXhwb3J0IGNvbnN0IG9wZW5WaWV3ID0gKFZpZXcsIC4uLmFyZ3MpID0+IHtcclxuICAgIHZpZXdNZ3Iub3BlblZpZXcoVmlldywgLi4uYXJncylcclxuICB9XHJcblxyXG4gIGV4cG9ydCBjb25zdCBjbG9zZVZpZXcgPSAoVmlld09yS2V5T3JJbnMsIC4uLmFyZ3MpID0+IHtcclxuICAgIHZpZXdNZ3IuY2xvc2VWaWV3KFZpZXdPcktleU9ySW5zLCAuLi5hcmdzKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgQmFzZU1vZGVsIGZyb20gJy4uL21vZGVsL0Jhc2VNb2RlbCdcclxuaW1wb3J0ICogYXMgdiBmcm9tIFwiLi4vdmlldy9CYXNlVmlld1wiO1xyXG5pbXBvcnQgQmFzZVZpZXcgPXYuS1VJLkJhc2VWaWV3XHJcbmltcG9ydCBHYW1lQXBwIGZyb20gJy4uLy4uL2dhbWUvR2FtZUFwcCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlQ29udHJvbGxlciB7XHJcbiAgcHJpdmF0ZSBtb2RlbDogQmFzZU1vZGVsXHJcbiAgcHJpdmF0ZSB2aWV3OiBCYXNlVmlld1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5tb2RlbCA9IG51bGxcclxuICAgIHRoaXMudmlldyA9IG51bGxcclxuICAgIHRoaXMuaW5pdCgpXHJcbiAgfVxyXG4gIHB1YmxpYyBpbml0KClcclxuICB7XHJcbiAgICBcclxuICB9XHJcbiAgcHVibGljIHNldE1vZGVsKG1vZGVsKSB7XHJcbiAgICB0aGlzLm1vZGVsID0gbW9kZWxcclxuICB9XHJcbiAgcHVibGljIGdldE1vZGVsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubW9kZWxcclxuICB9XHJcbiAgcHVibGljIHNldFZpZXcodmlldykge1xyXG4gICAgdGhpcy52aWV3ID0gdmlld1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0VmlldygpIHtcclxuICAgIHJldHVybiB0aGlzLnZpZXdcclxuICB9XHJcblxyXG4gIC8v55uR5ZCs5LqL5Lu2XHJcbiAgcHVibGljIGFkZExpc3RlbmVyKGtleSwgY2FsbGJhY2ssIGNhbGxlcikge1xyXG4gICAgR2FtZUFwcC5kaXNwYXRjaGVyLk9ic2VydmUoa2V5LGNhbGxlcixjYWxsYmFjaylcclxuICB9XHJcbiAgLy/np7vpmaTnm5HlkKznmoTkuovku7ZcclxuICBwdWJsaWMgcmVtb3ZlTGlzdGVuZXIoa2V5KSB7XHJcbiAgICBHYW1lQXBwLmRpc3BhdGNoZXIuUmVtb3ZlKGtleSlcclxuICB9XHJcbiAgLy/op6blj5Hkuovku7ZcclxuICBwdWJsaWMgZGlzcGF0Y2goa2V5LCAuLi5hcmdzKSB7XHJcbiAgICBHYW1lQXBwLmRpc3BhdGNoZXIuU2VuZE1zZyhrZXksYXJncylcclxuICB9XHJcbiAgLyoqXHJcbiAgICog5rOo5YaM5LuO5pyN5Yqh5Zmo6L+U5Zue5raI5oGv55qE55uR5ZCsXHJcbiAgICogQHBhcmFtICBjbWQg5raI5oGv5qCH6K+GXHJcbiAgICogQHBhcmFtIGNhbGxiYWNrIOWkhOeQhuWHveaVsFxyXG4gICAqIEBwYXJhbSAgdGhpc09iaiDlpITnkIblh73mlbDmiYDlsZ7lr7nosaFcclxuICAgKi9cclxuICBvYnNlcnZlclNvY2tldE1zZyhjbWQsIGNhbGxiYWNrLCB0aGlzT2JqKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gY21kIOa2iOaBr+agh+ivhlxyXG4gICAqIEBwYXJhbSBtc2cg5pWw5o2uXHJcbiAgICogQHBhcmFtIGNhbGxiYWNrIOWkhOeQhuWHveaVsFxyXG4gICAqIEBwYXJhbSB0aGlzT2JqIOWkhOeQhuWHveaVsOaJgOWxnuWvueixoVxyXG4gICAqL1xyXG4gIHNlbmRTb2NrZXRNc2coY21kLCBtc2csIGNhbGxiYWNrLCB0aGlzT2JqKSB7fVxyXG5cclxuICAvKipcclxuICAgKiDlj5HpgIHmtojmga/liLBIdHRw5pyN5Yqh56uvXHJcbiAgICogQHBhcmFtICBjbWQg5raI5oGv5qCH6K+GIOS+i+WmgjogVXNlci5sb2dpblxyXG4gICAqIEBwYXJhbSAgbXNnIOa2iOaBr+WPguaVsCDkvovlpoI6IGxldCBtc2c6YW55ID0ge1widU5hbWVcIjp1TmFtZSwgXCJ1UGFzc1wiOnVQYXNzfTtcclxuICAgKi9cclxuICBzZW5kSHR0cE1zZyhjbWQsIG1zZykge31cclxuICAvL+WQkeWFtuS7luaooeWdl+mAmuiur1xyXG4gIHB1YmxpYyBzZW5kTWVzc2FnZSgpIHt9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZU1vZGVse1xyXG4gICAgXHJcbn0iLCJpbXBvcnQgQmFzZUNvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlci9CYXNlQ29udHJvbGxlcidcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgS1VJIHtcclxuICBleHBvcnQgY2xhc3MgQmFzZVZpZXcgZXh0ZW5kcyBMYXlhLlZpZXcge1xyXG4gICAgcHVibGljIGNvbnRyb2xsZXI6IEJhc2VDb250cm9sbGVyXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgc3VwZXIoKVxyXG4gICAgfVxyXG4gICAgcHVibGljIHNldENvbnRyb2xsZXIoY3RybCkge1xyXG4gICAgICB0aGlzLmNvbnRyb2xsZXIgPSBjdHJsXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaW5pdCgpIHtcclxuICAgICAgdGhpcy5pbml0RGF0YSgpXHJcbiAgICAgIHRoaXMuaW5pdFJlcygpXHJcbiAgICAgIHRoaXMuaW5pdFZpZXcoKVxyXG4gICAgfVxyXG4gICAgcHVibGljIGluaXREYXRhKCkge31cclxuICAgIHB1YmxpYyBpbml0UmVzKCkge31cclxuICAgIHB1YmxpYyBpbml0VmlldygpIHt9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IERpc3BhdGNoZXIgfSBmcm9tICcuL2Rpc3BhdGNoZXIvRGlzcGF0Y2hlcidcclxuXHJcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlIHtcclxuICBwdWJsaWMgc3RhdGljIEluaXQoKTogdm9pZCB7fVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBkaXNwYXRjaGVyKCk6IERpc3BhdGNoZXIge1xyXG4gICAgcmV0dXJuIERpc3BhdGNoZXIuQ3JlYXRlT3JHZXQoKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBPYnNlcnZlciB9IGZyb20gJy4vT2JzZXJ2ZXInXHJcbmltcG9ydCB7IFNpbmdsZXRvbiB9IGZyb20gJy4uLy4uL2Jhc2UvU2luZ2xldG9uJ1xyXG5leHBvcnQgY2xhc3MgRGlzcGF0Y2hlciBleHRlbmRzIFNpbmdsZXRvbiB7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy5fb2JzZXJ2ZXJzID0ge31cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOa2iOaBr+WIl+ihqFxyXG4gICAqL1xyXG4gIHByaXZhdGUgX29ic2VydmVyczogYW55XHJcblxyXG4gIHB1YmxpYyBPYnNlcnZlKHRvcGljXzogYW55LCBvYnNlcnZlcl86IGFueSwgaGFuZGxlcl86IEZ1bmN0aW9uKTogT2JzZXJ2ZXIge1xyXG4gICAgaWYgKCF0aGlzLl9vYnNlcnZlcnNbdG9waWNfXSkgdGhpcy5fb2JzZXJ2ZXJzW3RvcGljX10gPSBbXVxyXG4gICAgbGV0IG9ic2VydmVyOiBPYnNlcnZlciA9IG5ldyBPYnNlcnZlcih0b3BpY18sIG9ic2VydmVyXywgaGFuZGxlcl8pXHJcbiAgICB0aGlzLl9vYnNlcnZlcnNbdG9waWNfXS5wdXNoKG9ic2VydmVyKVxyXG4gICAgcmV0dXJuIG9ic2VydmVyLlJldXNlKHRvcGljXywgb2JzZXJ2ZXJfLCBoYW5kbGVyXylcclxuICB9XHJcblxyXG4gIHB1YmxpYyBPYnNlcnZlTGlzdChvYnNlcnZlcl86IGFueSwgdG9waWNzXzogYW55W10sIGhhbmRsZXJzXzogYW55W10pOiBPYnNlcnZlcltdIHtcclxuICAgIGxldCBsaXN0OiBPYnNlcnZlcltdID0gW11cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9waWNzXy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsaXN0LnB1c2godGhpcy5PYnNlcnZlKHRvcGljc19baV0sIG9ic2VydmVyXywgaGFuZGxlcnNfW2ldKSlcclxuICAgIH1cclxuICAgIHJldHVybiBsaXN0XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgUmVtb3ZlTGlzdChvYnM6IE9ic2VydmVyW10pOiB2b2lkIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRoaXMuUmVtb3ZlKG9ic1tpXSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBTZW5kTXNnKHRvcGljXzogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueVtdIHtcclxuICAgIGlmICghdGhpcy5fb2JzZXJ2ZXJzW3RvcGljX10pIHtcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcmV0OiBhbnlbXSA9IFtdXHJcbiAgICB0aGlzLl9vYnNlcnZlcnNbdG9waWNfXS5mb3JFYWNoKFxyXG4gICAgICAoZWxlbWVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHJldC5wdXNoKGVsZW1lbnQuUmVjdk1zZyguLi5hcmdzKSlcclxuICAgICAgfSxcclxuICAgIClcclxuICAgIHJldHVybiByZXRcclxuICB9XHJcblxyXG4gIHB1YmxpYyBSZW1vdmUob2JzOiBPYnNlcnZlcik6IE9ic2VydmVyIHtcclxuICAgIGlmIChvYnMgPT0gbnVsbCkgcmV0dXJuXHJcbiAgICBsZXQgYXJyOiBhbnlbXSA9IHRoaXMuX29ic2VydmVyc1tvYnMudG9waWNdXHJcblxyXG4gICAgaWYgKCFhcnIpIHJldHVybiBudWxsXHJcblxyXG4gICAgbGV0IGluZDogbnVtYmVyID0gYXJyLmluZGV4T2Yob2JzKVxyXG4gICAgaWYgKGluZCA8IDApIHJldHVybiBudWxsXHJcblxyXG4gICAgYXJyLnNwbGljZShpbmQsIDEpXHJcbiAgICByZXR1cm4gb2JzXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgUmVtb3ZlQWxsKHRvcGljOiBhbnkpOiB2b2lkIHtcclxuICAgIGxldCBhcnI6IGFueVtdID0gdGhpcy5fb2JzZXJ2ZXJzW3RvcGljXVxyXG4gICAgaWYgKCFhcnIpIHJldHVyblxyXG4gICAgYXJyLnNwbGljZSgwLCBhcnIubGVuZ3RoKVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgT2JzZXJ2ZXIge1xyXG4gIHB1YmxpYyB0b3BpYzogYW55XHJcbiAgcHVibGljIG9ic2VydmVyOiBhbnlcclxuICBwdWJsaWMgaGFuZGxlcjogRnVuY3Rpb25cclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRvcGljXzogYW55LCBvYnNlcnZlcl86IGFueSwgaGFuZGxlcl86IEZ1bmN0aW9uKSB7XHJcbiAgICB0aGlzLlJldXNlKHRvcGljXywgb2JzZXJ2ZXJfLCBoYW5kbGVyXylcclxuICB9XHJcblxyXG4gIHB1YmxpYyBSZXVzZSh0b3BpY186IGFueSwgb2JzZXJ2ZXJfOiBhbnksIGhhbmRsZXJfOiBGdW5jdGlvbik6IE9ic2VydmVyIHtcclxuICAgIHRoaXMudG9waWMgPSB0b3BpY19cclxuICAgIHRoaXMub2JzZXJ2ZXIgPSBvYnNlcnZlcl9cclxuICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXJfXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxuXHJcbiAgcHVibGljIFJlY3ZNc2coLi4uYXJnczogYW55W10pOiB2b2lkIHtcclxuICAgIGxldCByZXQ6IGFueVxyXG4gICAgaWYgKCF0aGlzLm9ic2VydmVyKSB7XHJcbiAgICAgIHJldCA9IHRoaXMuaGFuZGxlciguLi5hcmdzKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0ID0gdGhpcy5oYW5kbGVyLmFwcGx5KHRoaXMub2JzZXJ2ZXIsIGFyZ3MpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHVpIH0gZnJvbSAnLi4vLi4vLi4vLi4vdWkvbGF5YU1heFVJJ1xyXG5pbXBvcnQgQlBhZ2UgZnJvbSAnLi4vQlBhZ2UvQlBhZ2UnXHJcbmltcG9ydCB7IFZpZXdDb25zdCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvY29uc3QvVmlld0NvbnN0J1xyXG5pbXBvcnQgeyBCYXNlTGF5ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2dhbWUvc2NlbmVzL0Jhc2VMYXllcidcclxuaW1wb3J0IHsgUmVnaXN0ZXJNVkMsIG9wZW5WaWV3IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9tdmMvTXZjTWdyJ1xyXG5pbXBvcnQgQVBhZ2VDb250cm9sbGVyIGZyb20gJy4vQVBhZ2VDb250cm9sbGVyJ1xyXG5pbXBvcnQgQVBhZ2VNb2RlbCBmcm9tICcuL0FwYWdlTW9kZWwnXHJcbmltcG9ydCBCYXNlVGVzdCBmcm9tICcuLi9CYXNlVGVzdCdcclxuQFJlZ2lzdGVyTVZDKEJhc2VMYXllciwgQVBhZ2VDb250cm9sbGVyLCBBUGFnZU1vZGVsKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBUGFnZSBleHRlbmRzIHVpLnZpZXcuQVBhZ2VVSSB7XHJcbiAgc3RhdGljIHZpZXdLZXkgPSBWaWV3Q29uc3QuQVBhZ2VcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMuYnRuLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcclxuICAgICAgb3BlblZpZXcoQlBhZ2UpXHJcbiAgICB9KVxyXG4gICAgdGhpcy5iYXNlQnRuLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcclxuICAgICAgb3BlblZpZXcoQmFzZVRlc3QpXHJcbiAgICB9KVxyXG4gIH1cclxuICBwdWJsaWMgaW5pdCgpIHtcclxuICAgIHRoaXMuY29udHJvbGxlci5hZGRMaXN0ZW5lcihcclxuICAgICAgJ2NoYW5nZScsXHJcbiAgICAgIGFyZ3MgPT4ge1xyXG4gICAgICAgIHRoaXMuY29udGVudHMudGV4dCA9IGFyZ3NbMF1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzKVxyXG4gICAgICB9LFxyXG4gICAgICB0aGlzLFxyXG4gICAgKVxyXG4gIH1cclxuICBwdWJsaWMgb3BlbkNiKGFyZ3MpIHtcclxuICAgIHZhciBodG1sID0gXCI8c3BhbiBzdHlsZT0nZm9udFNpemU6MzAnIGNvbG9yPScjNjdmYzJjJz7lr4zmlofmnKw8L3NwYW4+XCJcclxuICAgIGh0bWwgKz0gXCI8aW1nIHN0eWxlPSdoZWlnaHQ6NTA7d2lkdGg6NTAnIHNyYz0nQ2hhcmFjdGVycy9UYW5rXzQucG5nJz48L2ltZz5cIlxyXG4gICAgaHRtbCArPSBcIjxzcGFuIHN0eWxlPSdmb250U2l6ZToyMCcgY29sb3I9JyNmZmYnPua1i+ivlTwvc3Bhbj5cIlxyXG50aGlzLmRkLnBvcygwLDApXHJcbiAgICB0aGlzLmRkLnN0eWxlLndpZHRoPTY0MFxyXG4gICAgdGhpcy5kZC5zdHlsZS5hbGlnbj0nY2VudGVyJ1xyXG5cclxuICAgIHRoaXMuZGQuaW5uZXJIVE1MID0gaHRtbFxyXG4gICAgY29uc29sZS5sb2codGhpcy5kZClcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEJhc2VDb250cm9sbGVyIGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvbXZjL2NvbnRyb2xsZXIvQmFzZUNvbnRyb2xsZXInXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFQYWdlQ29udHJvbGxlciBleHRlbmRzIEJhc2VDb250cm9sbGVyIHtcclxuICAvKipcclxuICAgKlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gIH1cclxuICBwdWJsaWMgaW5pdCgpIHtcclxuICAgIHN1cGVyLmluaXQoKVxyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IEJhc2VNb2RlbCBmcm9tIFwiLi4vLi4vLi4vLi4vY29yZS9tdmMvbW9kZWwvQmFzZU1vZGVsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBUGFnZU1vZGVsIGV4dGVuZHMgQmFzZU1vZGVse1xyXG4gICAgXHJcbn0iLCJpbXBvcnQgQVBhZ2UgZnJvbSBcIi4vQVBhZ2VcIjtcclxuaW1wb3J0IEdhbWVBcHAgZnJvbSBcIi4uLy4uLy4uLy4uL2NvcmUvZ2FtZS9HYW1lQXBwXCI7XHJcbmltcG9ydCBFZmZlY3RVdGlscyBmcm9tIFwiLi4vLi4vLi4vLi4vY29yZS9VdGlscy9FZmZlY3RVdGlsc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdCBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuICAgIC8vIC8qKiBAcHJvcCB7bmFtZTppbnRUeXBlLCB0aXBzOlwi5pW05pWw57G75Z6L56S65L6LXCIsIHR5cGU6SW50LCBkZWZhdWx0OjEwMDB9Ki9cclxuICAgIC8vIHB1YmxpYyBpbnRUeXBlOiBudW1iZXIgPSAxMDAwO1xyXG4gICAgLy8gLyoqIEBwcm9wIHtuYW1lOm51bVR5cGUsIHRpcHM6XCLmlbDlrZfnsbvlnovnpLrkvotcIiwgdHlwZTpOdW1iZXIsIGRlZmF1bHQ6MTAwMH0qL1xyXG4gICAgLy8gcHVibGljIG51bVR5cGU6IG51bWJlciA9IDEwMDA7XHJcbiAgICAvLyAvKiogQHByb3Age25hbWU6c3RyVHlwZSwgdGlwczpcIuWtl+espuS4suexu+Wei+ekuuS+i1wiLCB0eXBlOlN0cmluZywgZGVmYXVsdDpcImhlbGxvIGxheWFcIn0qL1xyXG4gICAgLy8gcHVibGljIHN0clR5cGU6IHN0cmluZyA9IFwiaGVsbG8gbGF5YVwiO1xyXG4gICAgLy8gLyoqIEBwcm9wIHtuYW1lOmJvb2xUeXBlLCB0aXBzOlwi5biD5bCU57G75Z6L56S65L6LXCIsIHR5cGU6Qm9vbCwgZGVmYXVsdDp0cnVlfSovXHJcbiAgICAvLyBwdWJsaWMgYm9vbFR5cGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgLy8g5pu05aSa5Y+C5pWw6K+05piO6K+36K6/6ZeuOiBodHRwczovL2xkYzIubGF5YWJveC5jb20vZG9jLz9uYXY9emgtYXMtMi00LTBcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cclxuICAgIG9uQXdha2UoKXtcclxuICAgICAgICB0aGlzLm93bmVyLm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcywoKT0+e1xyXG4gICAgICAgIEVmZmVjdFV0aWxzLm1hY0ljb25TaGFrZSh0aGlzLm93bmVyLCh0aGlzLm93bmVyIGFzIExheWEuU3ByaXRlKS55LCgpPT57Y29uc29sZS5sb2coMSl9LHRoaXMgKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKTogdm9pZCB7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyB1aSB9IGZyb20gJy4uLy4uLy4uLy4uL3VpL2xheWFNYXhVSSdcclxuaW1wb3J0IHsgVmlld0NvbnN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9jb25zdC9WaWV3Q29uc3QnXHJcbmltcG9ydCB7IERpYWxvZ0xheWVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9nYW1lL3NjZW5lcy9EaWFsb2dMYXllcidcclxuaW1wb3J0IEJQYWdlQ29udHJvbGxlciBmcm9tICcuL0JQYWdlQ29udHJvbGxlcidcclxuaW1wb3J0IEJQYWdlTW9kZWwgZnJvbSAnLi9CUGFnZU1vZGVsJ1xyXG5pbXBvcnQgeyBSZWdpc3Rlck1WQywgY2xvc2VWaWV3IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9tdmMvTXZjTWdyJ1xyXG5AUmVnaXN0ZXJNVkMoRGlhbG9nTGF5ZXIsIEJQYWdlQ29udHJvbGxlciwgQlBhZ2VNb2RlbClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQlBhZ2UgZXh0ZW5kcyB1aS52aWV3LkJQYWdlVUkge1xyXG4gIHN0YXRpYyB2aWV3S2V5ID0gVmlld0NvbnN0LkJQYWdlXHJcbiBcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuICB9XHJcbiAgcHVibGljIGluaXQoKSB7XHJcbiAgICB0aGlzLmNsb3NlX2J0bi5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgIGNsb3NlVmlldyh0aGlzKVxyXG4gICAgfSlcclxuICAgIHRoaXMuY2hhbmdlLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcclxuICAgICAgdGhpcy5jb250cm9sbGVyLmRpc3BhdGNoKCdjaGFuZ2UnLCBbJyNlZTMzMjEnXSlcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBCYXNlQ29udHJvbGxlciBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL212Yy9jb250cm9sbGVyL0Jhc2VDb250cm9sbGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQlBhZ2VDb250cm9sbGVyIGV4dGVuZHMgQmFzZUNvbnRyb2xsZXIge1xyXG4gIC8qKlxyXG4gICAqXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgfVxyXG4gIHB1YmxpYyBpbml0KCkge1xyXG4gICAgc3VwZXIuaW5pdCgpXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBCYXNlTW9kZWwgZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9tdmMvbW9kZWwvQmFzZU1vZGVsJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQlBhZ2VNb2RlbCBleHRlbmRzIEJhc2VNb2RlbCB7XHJcbiAgcHVibGljIGNvbG9yOiBzdHJpbmdcclxufVxyXG4iLCJpbXBvcnQgeyB1aSB9IGZyb20gJy4uLy4uLy4uL3VpL2xheWFNYXhVSSdcclxuaW1wb3J0IHsgSVZpZXcgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2dhbWUvc2NlbmVzL2ludGVyZmFjZS9JVmlldydcclxuaW1wb3J0IHsgVmlld0NvbnN0IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9jb25zdC9WaWV3Q29uc3QnXHJcbmltcG9ydCB7IEJhc2VMYXllciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZ2FtZS9zY2VuZXMvQmFzZUxheWVyJ1xyXG5pbXBvcnQgRGlhbG9nVGVzdCBmcm9tICcuL0RpYWxvZ1Rlc3QnXHJcbmltcG9ydCBWaWV3VGVzdCBmcm9tICcuL1ZpZXdUZXN0J1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuL0xvYWRpbmcnXHJcbmltcG9ydCB7IFJlZ2lzdGVyTVZDLCBvcGVuVmlldywgY2xvc2VWaWV3IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvTXZjTWdyJ1xyXG5AUmVnaXN0ZXJNVkMoQmFzZUxheWVyKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlVGVzdCBleHRlbmRzIHVpLnZpZXcuQmFzZVRlc3RVSSBpbXBsZW1lbnRzIElWaWV3IHtcclxuICBzdGF0aWMgdmlld0tleSA9IFZpZXdDb25zdC5CYXNlVGVzdFxyXG4gIHB1YmxpYyBtb3ZlWSA9IGZhbHNlXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnRpbWVyTG9vcCg1MDAsIHRoaXMsICgpID0+IHtcclxuICAgICAgdGhpcy50YW5rLmluZGV4ID0gdGhpcy50YW5rLmluZGV4ID09PSA3ID8gNCA6IHRoaXMudGFuay5pbmRleCArIDFcclxuICAgIH0pXHJcbiAgICB0aGlzLnRpbWVyTG9vcCgyNTAsIHRoaXMsICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMubW92ZVkpIHtcclxuICAgICAgICB0aGlzLnRhbmsuY2VudGVyWSArPSAxXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50YW5rLmNlbnRlclkgLT0gMVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubW92ZVkgPSAhdGhpcy5tb3ZlWVxyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLmRpYWxvZ0J0bi5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgIG9wZW5WaWV3KERpYWxvZ1Rlc3QsIDEsIDIsIDMpXHJcbiAgICB9KVxyXG4gICAgdGhpcy52aWV3QnRuLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcclxuICAgICAgb3BlblZpZXcoVmlld1Rlc3QsIDEsIDIpXHJcbiAgICB9KVxyXG4gICAgdGhpcy5sb2FkaW5nQnRuLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcclxuICAgICAgb3BlblZpZXcoTG9hZGluZywgMSwgMiwgMylcclxuICAgIH0pXHJcbiAgICB0aGlzLmNsb3NlQnRuLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcclxuICAgICAgY2xvc2VWaWV3KHRoaXMpXHJcbiAgICB9KVxyXG4gIH1cclxuICBwdWJsaWMgb3BlbkNiKCkge1xyXG4gICAgY29uc29sZS5sb2coJ0Jhc2VUZXN0IG9wZW4nKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyB1aSB9IGZyb20gJy4uLy4uLy4uL3VpL2xheWFNYXhVSSdcclxuaW1wb3J0IHsgSVZpZXcgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2dhbWUvc2NlbmVzL2ludGVyZmFjZS9JVmlldydcclxuaW1wb3J0IHsgVmlld0NvbnN0IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9jb25zdC9WaWV3Q29uc3QnXHJcbmltcG9ydCB7IERpYWxvZ0xheWVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9nYW1lL3NjZW5lcy9EaWFsb2dMYXllcidcclxuaW1wb3J0IHsgUmVnaXN0ZXJNVkMsIGNsb3NlVmlldyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvbXZjL012Y01ncidcclxuQFJlZ2lzdGVyTVZDKERpYWxvZ0xheWVyKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2dUZXN0IGV4dGVuZHMgdWkudmlldy5EaWFsb2dUZXN0VUkgaW1wbGVtZW50cyBJVmlldyB7XHJcbiAgc3RhdGljIHZpZXdLZXkgPSBWaWV3Q29uc3QuRGlhbG9nVGVzdFxyXG4gIHB1YmxpYyBtb3ZlWSA9IGZhbHNlXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLmFjdGl2ZVxyXG4gICAgdGhpcy50aW1lckxvb3AoNTAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMudGFuay5pbmRleCA9IHRoaXMudGFuay5pbmRleCA9PT0gNyA/IDQgOiB0aGlzLnRhbmsuaW5kZXggKyAxXHJcbiAgICB9KVxyXG4gICAgdGhpcy50aW1lckxvb3AoMjUwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLm1vdmVZKSB7XHJcbiAgICAgICAgdGhpcy50YW5rLmNlbnRlclkgKz0gMVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGFuay5jZW50ZXJZIC09IDFcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm1vdmVZID0gIXRoaXMubW92ZVlcclxuICAgIH0pXHJcbiAgICB0aGlzLmNsb3NlQnRuLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcclxuICAgICAgY2xvc2VWaWV3KFZpZXdDb25zdC5EaWFsb2dUZXN0KVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzKVxyXG4gICAgICAvLyBMYXlhLlNjZW5lLmNsb3NlKCd2aWV3L0RpYWxvZ1Rlc3Quc2NlbmUnKVxyXG4gICAgfSlcclxuICB9XHJcbiAgcHVibGljIG9wZW5DYiguLi5hcmdzKSB7XHJcbiAgICBjb25zb2xlLmxvZygnRGlhbG9nVGVzdCBvcGVuJywgYXJncylcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaW1nWydvbkNvbXBSZXNpemUnXSgpKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyB1aSB9IGZyb20gJy4uLy4uLy4uL3VpL2xheWFNYXhVSSdcclxuaW1wb3J0IHsgSVZpZXcgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2dhbWUvc2NlbmVzL2ludGVyZmFjZS9JVmlldydcclxuaW1wb3J0IHsgVmlld0NvbnN0IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9jb25zdC9WaWV3Q29uc3QnXHJcbmltcG9ydCB7IEJhc2VMYXllciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZ2FtZS9zY2VuZXMvQmFzZUxheWVyJ1xyXG5pbXBvcnQgeyBSZWdpc3Rlck1WQywgY2xvc2VWaWV3IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvTXZjTWdyJ1xyXG5AUmVnaXN0ZXJNVkMoQmFzZUxheWVyKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgdWkudmlldy5Mb2FkaW5nVUkgaW1wbGVtZW50cyBJVmlldyB7XHJcbiAgc3RhdGljIHZpZXdLZXkgPSBWaWV3Q29uc3QuTG9hZGluZ1xyXG4gIHB1YmxpYyBtb3ZlWSA9IGZhbHNlXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnRpbWVyTG9vcCg1MDAsIHRoaXMsICgpID0+IHtcclxuICAgICAgdGhpcy50YW5rLmluZGV4ID0gdGhpcy50YW5rLmluZGV4ID09PSA3ID8gNCA6IHRoaXMudGFuay5pbmRleCArIDFcclxuICAgIH0pXHJcbiAgICB0aGlzLnRpbWVyTG9vcCgyNTAsIHRoaXMsICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMubW92ZVkpIHtcclxuICAgICAgICB0aGlzLnRhbmsuY2VudGVyWSArPSAxXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50YW5rLmNlbnRlclkgLT0gMVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubW92ZVkgPSAhdGhpcy5tb3ZlWVxyXG4gICAgfSlcclxuICAgIHRoaXMuYnRuX2Nsb3NlLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcclxuICAgICAgY2xvc2VWaWV3KHRoaXMpXHJcbiAgICB9KVxyXG4gIH1cclxuICBwdWJsaWMgb3BlbkNiKC4uLmFyZ3MpIHtcclxuICAgIGNvbnNvbGUubG9nKCdMb2FkaW5nIG9wZW4nLCBhcmdzKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyB1aSB9IGZyb20gJy4uLy4uLy4uL3VpL2xheWFNYXhVSSdcclxuaW1wb3J0IHsgSVZpZXcgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2dhbWUvc2NlbmVzL2ludGVyZmFjZS9JVmlldydcclxuaW1wb3J0IHsgVmlld0NvbnN0IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9jb25zdC9WaWV3Q29uc3QnXHJcbmltcG9ydCB7IFZpZXdMYXllciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZ2FtZS9zY2VuZXMvVmlld0xheWVyJ1xyXG5pbXBvcnQgVmlld1Rlc3QxIGZyb20gJy4vVmlld1Rlc3QxJ1xyXG5pbXBvcnQgeyBSZWdpc3Rlck1WQywgY2xvc2VWaWV3LCBvcGVuVmlldyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvbXZjL012Y01ncidcclxuQFJlZ2lzdGVyTVZDKFZpZXdMYXllcilcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld1Rlc3QgZXh0ZW5kcyB1aS52aWV3LlZpZXdUZXN0VUkgaW1wbGVtZW50cyBJVmlldyB7XHJcbiAgc3RhdGljIHZpZXdLZXkgPSBWaWV3Q29uc3QuVmlld1Rlc3RcclxuICBwdWJsaWMgbW92ZVkgPSBmYWxzZVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG5cclxuICAgIHRoaXMudGltZXJMb29wKDUwMCwgdGhpcywgKCkgPT4ge1xyXG4gICAgICB0aGlzLnRhbmsuaW5kZXggPSB0aGlzLnRhbmsuaW5kZXggPT09IDcgPyA0IDogdGhpcy50YW5rLmluZGV4ICsgMVxyXG4gICAgfSlcclxuICAgIHRoaXMudGltZXJMb29wKDI1MCwgdGhpcywgKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5tb3ZlWSkge1xyXG4gICAgICAgIHRoaXMudGFuay5jZW50ZXJZICs9IDFcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnRhbmsuY2VudGVyWSAtPSAxXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5tb3ZlWSA9ICF0aGlzLm1vdmVZXHJcbiAgICB9KVxyXG4gICAgdGhpcy5jbG9zZUJ0bi5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgIGNsb3NlVmlldyh0aGlzKVxyXG4gICAgfSlcclxuICAgIHRoaXMudmlld0J0bi5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgIG9wZW5WaWV3KFZpZXdUZXN0MSlcclxuICAgIH0pXHJcbiAgfVxyXG4gIHB1YmxpYyBvcGVuQ2IoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnVmlld1Rlc3Qgb3BlbicpXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHVpIH0gZnJvbSAnLi4vLi4vLi4vdWkvbGF5YU1heFVJJ1xyXG5pbXBvcnQgeyBJVmlldyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZ2FtZS9zY2VuZXMvaW50ZXJmYWNlL0lWaWV3J1xyXG5pbXBvcnQgeyBWaWV3Q29uc3QgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2NvbnN0L1ZpZXdDb25zdCdcclxuaW1wb3J0IHsgVmlld0xheWVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9nYW1lL3NjZW5lcy9WaWV3TGF5ZXInXHJcbmltcG9ydCB7IFJlZ2lzdGVyTVZDLCBjbG9zZVZpZXcgfSBmcm9tICcuLi8uLi8uLi9jb3JlL212Yy9NdmNNZ3InXHJcbkBSZWdpc3Rlck1WQyhWaWV3TGF5ZXIpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdUZXN0MSBleHRlbmRzIHVpLnZpZXcuVmlld1Rlc3QxVUkgaW1wbGVtZW50cyBJVmlldyB7XHJcbiAgc3RhdGljIHZpZXdLZXkgPSBWaWV3Q29uc3QuVmlld1Rlc3QxXHJcbiAgcHVibGljIG1vdmVZID0gZmFsc2VcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuXHJcbiAgICB0aGlzLnRpbWVyTG9vcCg1MDAsIHRoaXMsICgpID0+IHtcclxuICAgICAgdGhpcy50YW5rLmluZGV4ID0gdGhpcy50YW5rLmluZGV4ID09PSA3ID8gNCA6IHRoaXMudGFuay5pbmRleCArIDFcclxuICAgIH0pXHJcbiAgICB0aGlzLnRpbWVyTG9vcCgyNTAsIHRoaXMsICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMubW92ZVkpIHtcclxuICAgICAgICB0aGlzLnRhbmsuY2VudGVyWSArPSAxXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50YW5rLmNlbnRlclkgLT0gMVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubW92ZVkgPSAhdGhpcy5tb3ZlWVxyXG4gICAgfSlcclxuICAgIHRoaXMuY2xvc2VCdG4ub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCkgPT4ge1xyXG4gICAgICBjbG9zZVZpZXcodGhpcylcclxuICAgIH0pXHJcbiAgfVxyXG4gIHB1YmxpYyBvcGVuQ2IoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnVmlld1Rlc3Qgb3BlbicpXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNpbmdsZXRvbiB9IGZyb20gJy4uLy4uL2NvcmUvYmFzZS9TaW5nbGV0b24nXHJcbmltcG9ydCBOZXRSZXF1ZXN0IGZyb20gJy4vTmV0UmVxdWVzdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVOZXQgZXh0ZW5kcyBTaW5nbGV0b24ge1xyXG4gIHByaXZhdGUgc2VydmVyVXJsOiBzdHJpbmdcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuICB9XHJcbiAgcHVibGljIGluaXRTZXJ2ZXIodXJsOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2VydmVyVXJsID0gdXJsXHJcbiAgfVxyXG4gIHB1YmxpYyBzZW5kKGFwaTogc3RyaW5nLCBib2R5VmFyaWFibGVzOiBhbnkgPSBudWxsLCB1cmxWYXJpYWJsZXM6IGFueSA9ICcnLCBtZXRob2Q6IHN0cmluZyA9ICdwb3N0JywgcmVzcG9uc2VUeXBlOiBzdHJpbmcgPSAnanNvbicsIGhlYWRlcj86IGFueVtdKSB7XHJcbiAgICB0aGlzLnNlbmRCeVVybCh0aGlzLnNlcnZlclVybCwgYXBpLCBib2R5VmFyaWFibGVzLCB1cmxWYXJpYWJsZXMsIG1ldGhvZCwgcmVzcG9uc2VUeXBlLCBoZWFkZXIpXHJcbiAgfVxyXG4gIHB1YmxpYyBzZW5kUHJvbWlzZShhcGk6IHN0cmluZywgYm9keVZhcmlhYmxlczogYW55ID0gbnVsbCwgdXJsVmFyaWFibGVzOiBhbnkgPSAnJywgbWV0aG9kOiBzdHJpbmcgPSAncG9zdCcsIHJlc3BvbnNlVHlwZTogc3RyaW5nID0gJ2pzb24nLCBoZWFkZXI/OiBhbnlbXSkge1xyXG4gICAgdGhpcy5zZW5kUHJvbWlzZUJ5VXJsKHRoaXMuc2VydmVyVXJsLCBhcGksIGJvZHlWYXJpYWJsZXMsIHVybFZhcmlhYmxlcywgbWV0aG9kLCByZXNwb25zZVR5cGUsIGhlYWRlcilcclxuICB9XHJcbiAgcHVibGljIHNlbmRCeVVybCh1cmw6IHN0cmluZywgYXBpOiBzdHJpbmcsIGJvZHlWYXJpYWJsZXM6IGFueSA9IG51bGwsIHVybFZhcmlhYmxlczogYW55ID0gJycsIG1ldGhvZDogc3RyaW5nID0gJ3Bvc3QnLCByZXNwb25zZVR5cGU6IHN0cmluZyA9ICdqc29uJywgaGVhZGVyPzogYW55W10pIHtcclxuICAgIGxldCByZXEgPSBOZXRSZXF1ZXN0LkNyZWF0ZShhcGksIHVybCArIGFwaSArIHVybFZhcmlhYmxlcywgYm9keVZhcmlhYmxlcywgbWV0aG9kLCByZXNwb25zZVR5cGUsIGhlYWRlcilcclxuICAgIHJlcS5TZW5kKClcclxuICB9XHJcbiAgcHVibGljIGFzeW5jIHNlbmRQcm9taXNlQnlVcmwodXJsOiBzdHJpbmcsIGFwaTogc3RyaW5nLCBib2R5VmFyaWFibGVzOiBhbnkgPSBudWxsLCB1cmxWYXJpYWJsZXM6IGFueSA9ICcnLCBtZXRob2Q6IHN0cmluZyA9ICdwb3N0JywgcmVzcG9uc2VUeXBlOiBzdHJpbmcgPSAnanNvbicsIGhlYWRlcj86IGFueVtdKSB7XHJcbiAgICBsZXQgcmVxID0gTmV0UmVxdWVzdC5DcmVhdGUoYXBpLCB1cmwgKyBhcGkgKyB1cmxWYXJpYWJsZXMsIGJvZHlWYXJpYWJsZXMsIG1ldGhvZCwgcmVzcG9uc2VUeXBlLCBoZWFkZXIpXHJcbiAgICBjb25zdCBnZXQgPSBhd2FpdCByZXEuU2VuZFByb21pc2UoKVxyXG4gICAgcmV0dXJuIGdldFxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgR2FtZUFwcCBmcm9tICcuLi8uLi9jb3JlL2dhbWUvR2FtZUFwcCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ldFJlcXVlc3Qge1xyXG4gIHByaXZhdGUgcmVxOiBsYXlhLm5ldC5IdHRwUmVxdWVzdFxyXG4gIHByaXZhdGUgdXJsOiBzdHJpbmdcclxuICBwcml2YXRlIGRhdGE6IGFueVxyXG4gIHByaXZhdGUgbWV0aG9kOiBzdHJpbmdcclxuICBwcml2YXRlIHJlc3BvbnNlVHlwZTogc3RyaW5nXHJcbiAgcHJpdmF0ZSBoZWFkZXJzOiBhbnlbXVxyXG4gIHByaXZhdGUgYXBpUGF0aDogc3RyaW5nXHJcbiAgcHJpdmF0ZSBtZXNzYWdlS2V5OiBhbnlcclxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgbGV0IHJlcSA9IG5ldyBsYXlhLm5ldC5IdHRwUmVxdWVzdCgpXHJcbiAgICB0aGlzLnJlcSA9IHJlcVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBDcmVhdGUoYXBpUGF0aDogc3RyaW5nLCB1cmw6IHN0cmluZywgZGF0YT86IGFueSwgbWV0aG9kPzogc3RyaW5nLCByZXNwb25zZVR5cGU/OiBzdHJpbmcsIGhlYWRlcnM/OiBhbnlbXSwgbWVzc2FnZUtleT8pOiBOZXRSZXF1ZXN0IHtcclxuICAgIGxldCByZXF1ZXN0ID0gbmV3IE5ldFJlcXVlc3QoKVxyXG4gICAgcmVxdWVzdC51cmwgPSB1cmxcclxuICAgIHJlcXVlc3QuZGF0YSA9IGRhdGFcclxuICAgIHJlcXVlc3QubWV0aG9kID0gbWV0aG9kXHJcbiAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IHJlc3BvbnNlVHlwZVxyXG4gICAgcmVxdWVzdC5oZWFkZXJzID0gaGVhZGVyc1xyXG4gICAgcmVxdWVzdC5hcGlQYXRoID0gYXBpUGF0aFxyXG4gICAgcmVxdWVzdC5tZXNzYWdlS2V5ID0gbWVzc2FnZUtleVxyXG4gICAgcmV0dXJuIHJlcXVlc3RcclxuICB9XHJcbiAgcHVibGljIFNlbmQoKSB7XHJcbiAgICBsZXQgcmVxID0gdGhpcy5yZXFcclxuICAgIGxldCB1cmwgPSB0aGlzLnVybFxyXG4gICAgbGV0IGRhdGEgPSB0aGlzLmRhdGFcclxuICAgIGxldCBtZXRob2QgPSB0aGlzLm1ldGhvZFxyXG4gICAgbGV0IHJlc3BvbnNlVHlwZSA9IHRoaXMucmVzcG9uc2VUeXBlXHJcbiAgICBsZXQgaGVhZGVycyA9IHRoaXMuaGVhZGVycyB8fCBbJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJ11cclxuICAgIHJlcS5vbmNlKGxheWEuZXZlbnRzLkV2ZW50LkNPTVBMRVRFLCB0aGlzLCB0aGlzLmNvbXBsZXRlSGFuZGxlcilcclxuICAgIHJlcS5vbmNlKGxheWEuZXZlbnRzLkV2ZW50LkVSUk9SLCB0aGlzLCB0aGlzLmVycm9ySGFuZGxlcilcclxuICAgIHJlcS5zZW5kKHVybCwgZGF0YSwgbWV0aG9kLCByZXNwb25zZVR5cGUsIGhlYWRlcnMpXHJcbiAgfVxyXG4gIHB1YmxpYyBhc3luYyBTZW5kUHJvbWlzZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgbGV0IHJlcSA9IHRoaXMucmVxXHJcbiAgICBsZXQgdXJsID0gdGhpcy51cmxcclxuICAgIGxldCBkYXRhID0gdGhpcy5kYXRhXHJcbiAgICBsZXQgbWV0aG9kID0gdGhpcy5tZXRob2RcclxuICAgIGxldCByZXNwb25zZVR5cGUgPSB0aGlzLnJlc3BvbnNlVHlwZVxyXG4gICAgbGV0IGhlYWRlcnMgPSB0aGlzLmhlYWRlcnMgfHwgWydDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbiddXHJcbiAgICBsZXQgX3Bvc3QgPSBmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgbGV0IF9yZXNvbHZlID0gZnVuY3Rpb24ob2JqOiBhbnkpIHtcclxuICAgICAgICByZXNvbHZlKG9iailcclxuICAgICAgfVxyXG4gICAgICByZXEub25jZShsYXlhLmV2ZW50cy5FdmVudC5DT01QTEVURSwgdGhpcywgX3Jlc29sdmUpXHJcbiAgICAgIHJlcS5vbmNlKGxheWEuZXZlbnRzLkV2ZW50LkVSUk9SLCB0aGlzLCBfcmVzb2x2ZSlcclxuICAgICAgcmVxLnNlbmQodXJsLCBkYXRhLCBtZXRob2QsIHJlc3BvbnNlVHlwZSwgaGVhZGVycylcclxuICAgIH1cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KF9wb3N0KVxyXG4gIH1cclxuICBwcml2YXRlIGNvbXBsZXRlSGFuZGxlcihkYXRhOiBhbnkpIHtcclxuICAgIGlmICh0aGlzLm1lc3NhZ2VLZXkpIHtcclxuICAgICAgR2FtZUFwcC5kaXNwYXRjaGVyLlNlbmRNc2codGhpcy5tZXNzYWdlS2V5LCBkYXRhKVxyXG4gICAgfVxyXG4gIH1cclxuICBwcml2YXRlIGVycm9ySGFuZGxlcihlOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IodGhpcy5tZXNzYWdlS2V5LCBlKVxyXG4gIH1cclxuICBwcml2YXRlIHByb2Nlc3NIYW5kbGVyKGRhdGE6IGFueSkge31cclxufVxyXG4iLCJpbXBvcnQgeyBTaW5nbGV0b24gfSBmcm9tICcuLi9jb3JlL2Jhc2UvU2luZ2xldG9uJ1xyXG5pbXBvcnQgeyBPYnNlcnZlciB9IGZyb20gJy4uL2NvcmUvc2VydmljZS9kaXNwYXRjaGVyL09ic2VydmVyJ1xyXG5pbXBvcnQgKiBhcyBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xyXG4vKlxyXG4gICBzb2NrZXQuaW5pdCguLi4pXHJcbiAgIHNvY2tldC5jb25uZWN0KClcclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29ja2V0IGV4dGVuZHMgU2luZ2xldG9uIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMub2JzZXJ2ZXJzID0ge31cclxuICB9XHJcbiAgcHJpdmF0ZSBub25jZT0xXHJcbiAgcHJpdmF0ZSBpcEFkZHJlc3NcclxuICBwcml2YXRlIHNvY2tldDogYW55XHJcbiAgcHJpdmF0ZSBvYnNlcnZlcnM6IGFueVxyXG4gIHByaXZhdGUgdGltZVN0YW1wXHJcbiAgLy9oYW5kbGVyLS0tLVxyXG4gIHByaXZhdGUgY29ubmVjdFN1Y2Nlc3NDYWxsYmFja1xyXG4gIHByaXZhdGUgY29ubmVjdEZhaWxlZENhbGxiYWNrXHJcbiAgcHJpdmF0ZSBoZWFydGJlYXRGYWlsZWRDYWxsYmFja1xyXG4gIHByaXZhdGUgZXZlbnQgPSAnbWVzc2FnZSdcclxuICBwdWJsaWMgaW5pdChpcCwgc3VjY2Vzc0NhbGxiYWNrLCBmYWlsZWRDYWxsYmFjaywgaGVhcnRiZWF0RmFpbGVkQ2FsbGJhY2spIHtcclxuICAgIHRoaXMuaXBBZGRyZXNzID0gaXBcclxuICAgIHRoaXMuY29ubmVjdFN1Y2Nlc3NDYWxsYmFjayA9IHN1Y2Nlc3NDYWxsYmFja1xyXG4gICAgdGhpcy5jb25uZWN0RmFpbGVkQ2FsbGJhY2sgPSBmYWlsZWRDYWxsYmFja1xyXG4gICAgdGhpcy5oZWFydGJlYXRGYWlsZWRDYWxsYmFjayA9IGhlYXJ0YmVhdEZhaWxlZENhbGxiYWNrXHJcbiAgfVxyXG4gIHB1YmxpYyBjb25uZWN0KCkge1xyXG4gICAgdGhpcy5zb2NrZXQgPSBpbyh0aGlzLmlwQWRkcmVzcylcclxuICAgIHRoaXMuc29ja2V0Lm9uKCdjb25uZWN0JywgKCkgPT4ge1xyXG4gICAgICB0aGlzLnRpbWVTdGFtcCA9IERhdGUubm93KClcclxuICAgICAgY29uc29sZS5sb2coJ3dlYnNvY2tldCBjb25uZWN0Li4uJylcclxuICAgICAgdGhpcy5jb25uZWN0U3VjY2VzcygpXHJcbiAgICB9KVxyXG4gICAgdGhpcy5zb2NrZXQub24odGhpcy5ldmVudCwgZGF0YSA9PiB7XHJcbiAgICAgIHRoaXMudGltZVN0YW1wID0gRGF0ZS5ub3coKVxyXG4gICAgICBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICAgICAgdGhpcy5yZWNlaXZlTWVzc2FnZShKU09OLnBhcnNlKGRhdGEpKVxyXG4gICAgfSlcclxuICAgIHRoaXMuc29ja2V0Lm9uKCdkaXNjb25uZWN0JywgdGhpcy5vbkRpc2Nvbm5lY3QpXHJcbiAgfVxyXG4gIHB1YmxpYyBkaXNjb25uZWN0KCkge1xyXG4gICAgdGhpcy5zb2NrZXQuZGlzY29ubmVjdCgpXHJcbiAgfVxyXG4gIHByaXZhdGUgb25EaXNjb25uZWN0KCkge1xyXG4gICAgaWYgKHRoaXMuY29ubmVjdEZhaWxlZENhbGxiYWNrKSB0aGlzLmNvbm5lY3RGYWlsZWRDYWxsYmFjaygpXHJcbiAgfVxyXG4gIHByaXZhdGUgY29ubmVjdFN1Y2Nlc3MoKSB7XHJcbiAgICBpZiAodGhpcy5jb25uZWN0U3VjY2Vzc0NhbGxiYWNrKSB0aGlzLmNvbm5lY3RTdWNjZXNzQ2FsbGJhY2soKVxyXG4gICAgdGhpcy5zZW5kKCdsb2dpbicsIHt9LCAnQzJTX2xvZ2luJylcclxuICAgIHRoaXMuc3RhcnRIZWFydEJlYXQoKVxyXG4gIH1cclxuICBwcml2YXRlIHN0YXJ0SGVhcnRCZWF0KCkge1xyXG4gICAgTGF5YS50aW1lci5sb29wKDUwMDAsIHRoaXMsICgpID0+IHtcclxuICAgICAgdGhpcy5zZW5kSGVhcnRCZWF0KClcclxuICAgIH0pXHJcbiAgfVxyXG4gIHByaXZhdGUgc2VuZEhlYXJ0QmVhdCgpIHtcclxuICAgIHZhciB2ID0gRGF0ZS5ub3coKSAtIHRoaXMudGltZVN0YW1wXHJcblxyXG4gICAgaWYgKHYgPj0gMzAwMDApIHtcclxuICAgICAgaWYgKHRoaXMuaGVhcnRiZWF0RmFpbGVkQ2FsbGJhY2spIHRoaXMuaGVhcnRiZWF0RmFpbGVkQ2FsbGJhY2soKVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZW5kKCdoZWFydGJlYXQnLCB7fSwgJ0MyU19oZWFydGJlYXQnKVxyXG4gIH1cclxuICBwcml2YXRlIHJlY2VpdmVNZXNzYWdlKGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEuaGVhZGVycy5ub25jZSlcclxuICAgIGlmIChkYXRhLmhlYWRlcnMubm9uY2UgJiYgZGF0YS5oZWFkZXJzLm5vbmNlLnN0YXJ0c1dpdGgoJ1MyQ18nKSkge1xyXG4gICAgICBmb3IgKGxldCBrIGluIHRoaXMub2JzZXJ2ZXJzKSB7XHJcbiAgICAgICAgaWYgKGRhdGEuaGVhZGVycy5mdW5jX25hbWUgPT0gaykge1xyXG4gICAgICAgICAgdGhpcy5vYnNlcnZlcnNba10uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC5SZWN2TXNnKGRhdGEpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yIChsZXQgayBpbiB0aGlzLm9ic2VydmVycykge1xyXG4gICAgICAgIGlmIChkYXRhLmhlYWRlcnMubm9uY2UgPT0gaykge1xyXG4gICAgICAgICAgdGhpcy5vYnNlcnZlcnNba10uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC5SZWN2TXNnKGRhdGEpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgZGVsZXRlIHRoaXMub2JzZXJ2ZXJzW2tdXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHB1YmxpYyBzZW5kTWVzc2FnZShmdW5jTmFtZSwgb2JzZXJ2ZXIsIGRhdGEsIGNhbGxiYWNrID0gbnVsbCkge1xyXG4gICAgdmFyIG5vbmNlID0gJ0MyU18nICsgZnVuY05hbWUgKyB0aGlzLm5vbmNlKytcclxuICAgIGlmICghdGhpcy5vYnNlcnZlcnNbbm9uY2VdKSB0aGlzLm9ic2VydmVyc1tub25jZV0gPSBbXVxyXG4gICAgdGhpcy5vYnNlcnZlcnNbbm9uY2VdLnB1c2gobmV3IE9ic2VydmVyKG5vbmNlLCBvYnNlcnZlciwgY2FsbGJhY2spKVxyXG4gICAgdGhpcy5zZW5kKGZ1bmNOYW1lLCBkYXRhLCBub25jZSlcclxuICB9XHJcbiAgcHVibGljIG9ic2VydmVyTWVzc2FnZShmdW5jTmFtZSwgb2JzZXJ2ZXIsIGNhbGxiYWNrID0gbnVsbCkge1xyXG4gICAgdmFyIGtleSA9IGZ1bmNOYW1lXHJcbiAgICBpZiAoIXRoaXMub2JzZXJ2ZXJzW2tleV0pIHRoaXMub2JzZXJ2ZXJzW2tleV0gPSBbXVxyXG4gICAgdmFyIG9icyA9IG5ldyBPYnNlcnZlcihrZXksIG9ic2VydmVyLCBjYWxsYmFjaylcclxuICAgIHRoaXMub2JzZXJ2ZXJzW2tleV0ucHVzaChvYnMpXHJcbiAgICByZXR1cm4gb2JzXHJcbiAgfVxyXG4gIHB1YmxpYyByZW1vdmUob2JzOiBPYnNlcnZlcikge1xyXG4gICAgaWYgKG9icyA9PSBudWxsKSByZXR1cm5cclxuICAgIGxldCBhcnIgPSB0aGlzLm9ic2VydmVyc1tvYnMudG9waWNdXHJcbiAgICBpZiAoIWFycikgcmV0dXJuIG51bGxcclxuICAgIGxldCBpbmQ6IG51bWJlciA9IGFyci5pbmRleE9mKG9icylcclxuICAgIGlmIChpbmQgPCAwKSByZXR1cm4gbnVsbFxyXG4gICAgYXJyLnNwbGljZShpbmQsIDEpXHJcbiAgICBpZiAoYXJyLmxlbmd0aCA9PSAwKSBkZWxldGUgdGhpcy5vYnNlcnZlcnNbb2JzLnRvcGljXVxyXG4gICAgcmV0dXJuIG9ic1xyXG4gIH1cclxuICBwcml2YXRlIHNlbmQoZnVuY05hbWUsIGRhdGEsIG5vbmNlKSB7XHJcbiAgICB2YXIgcGFyYW0gPSB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICB1aWQ6ICdoZWp1bmppZScsXHJcbiAgICAgICAgZnVuY19uYW1lOiBmdW5jTmFtZSxcclxuICAgICAgICBub25jZTogbm9uY2UsXHJcbiAgICAgIH0sXHJcbiAgICAgIHBhcmFtczogZGF0YSxcclxuICAgIH1cclxuICAgIHRoaXMudGltZVN0YW1wID0gRGF0ZS5ub3coKVxyXG4gICAgdGhpcy5zb2NrZXQuZW1pdCh0aGlzLmV2ZW50LCBKU09OLnN0cmluZ2lmeShwYXJhbSkpXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHVpIH0gZnJvbSAnLi4vdWkvbGF5YU1heFVJJ1xyXG5pbXBvcnQgQVBhZ2UgZnJvbSAnLi4vZ2FtZS91aS92aWV3L0FQYWdlL0FQYWdlJ1xyXG5pbXBvcnQgeyBzZXRVSVJvb3QsIG9wZW5WaWV3IH0gZnJvbSAnLi4vY29yZS9tdmMvTXZjTWdyJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluU2NlbmUgZXh0ZW5kcyB1aS5zY2VuZS5NYWluU2NlbmVVSSB7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgLy8gR2FtZUFwcC5pbml0KHRoaXMpXHJcbiAgICBjb25zdCBVSSA9IG5ldyBMYXlhLlNwcml0ZSgpXHJcbiAgICBVSS5uYW1lID0gJ1VJJ1xyXG4gICAgVUkud2lkdGggPSBMYXlhLnN0YWdlLndpZHRoXHJcbiAgICBVSS5oZWlnaHQgPSBMYXlhLnN0YWdlLmhlaWdodFxyXG4gICAgTGF5YS5zdGFnZS5hZGRDaGlsZChVSSlcclxuICAgIHNldFVJUm9vdChVSSlcclxuXHJcbiAgICBvcGVuVmlldyhBUGFnZSx7YToxLGI6Mn0pXHJcbiAgfVxyXG4gIG9uT3BlbmVkKCkge31cclxufVxyXG4iLCIvKipUaGlzIGNsYXNzIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IExheWFBaXJJREUsIHBsZWFzZSBkbyBub3QgbWFrZSBhbnkgbW9kaWZpY2F0aW9ucy4gKi9cbmltcG9ydCBWaWV3PUxheWEuVmlldztcclxuaW1wb3J0IERpYWxvZz1MYXlhLkRpYWxvZztcclxuaW1wb3J0IFNjZW5lPUxheWEuU2NlbmU7XHJcbmltcG9ydCAqIGFzIHYgZnJvbSBcIi4uL2NvcmUvbXZjL3ZpZXcvQmFzZVZpZXdcIjtcclxuaW1wb3J0IEJhc2VWaWV3ID12LktVSS5CYXNlVmlld1xudmFyIFJFRzogRnVuY3Rpb24gPSBMYXlhLkNsYXNzVXRpbHMucmVnQ2xhc3M7XG5leHBvcnQgbW9kdWxlIHVpLnNjZW5lIHtcclxuICAgIGV4cG9ydCBjbGFzcyBNYWluU2NlbmVVSSBleHRlbmRzIFNjZW5lIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFNjZW5lKFwic2NlbmUvTWFpblNjZW5lXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFJFRyhcInVpLnNjZW5lLk1haW5TY2VuZVVJXCIsTWFpblNjZW5lVUkpO1xyXG59XHJcbmV4cG9ydCBtb2R1bGUgdWkudmlldyB7XHJcbiAgICBleHBvcnQgY2xhc3MgQVBhZ2VVSSBleHRlbmRzIEJhc2VWaWV3IHtcclxuXHRcdHB1YmxpYyBidG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIGRkOmxheWEuaHRtbC5kb20uSFRNTERpdkVsZW1lbnQ7XG5cdFx0cHVibGljIGJhc2VCdG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIGNvbnRlbnRzOkxheWEuTGFiZWw7XG4gICAgICAgIHB1YmxpYyBzdGF0aWMgIHVpVmlldzphbnkgPXtcInR5cGVcIjpcIkJhc2VWaWV3XCIsXCJwcm9wc1wiOntcIndpZHRoXCI6NjQwLFwiaGVpZ2h0XCI6MTEzNn0sXCJjb21wSWRcIjoyLFwiY2hpbGRcIjpbe1widHlwZVwiOlwiUmVjdFwiLFwicHJvcHNcIjp7XCJ3aWR0aFwiOjY0MCxcIm5hbWVcIjpcInJcIixcImxpbmVXaWR0aFwiOjEsXCJoZWlnaHRcIjoxMTM2LFwiZmlsbENvbG9yXCI6XCIjZmJiYmJiXCJ9LFwiY29tcElkXCI6N30se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjo1NTUsXCJ4XCI6MjA4LFwid2lkdGhcIjoyMDAsXCJ2YXJcIjpcImJ0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiR29UbyBCUGFnZVwiLFwiaGVpZ2h0XCI6NTB9LFwiY29tcElkXCI6OH0se1widHlwZVwiOlwiSFRNTERpdkVsZW1lbnRcIixcInByb3BzXCI6e1wieVwiOjAsXCJ4XCI6MCxcIndpZHRoXCI6NjQ0LFwidmFyXCI6XCJkZFwiLFwiaW5uZXJIVE1MXCI6XCI8YnIvPjxzcGFuPiAg5rWL6K+V5rC05bmz5bGF5Lit5a+56b2QPC9zcGFuPlwiLFwiaGVpZ2h0XCI6MjY1LFwicnVudGltZVwiOlwibGF5YS5odG1sLmRvbS5IVE1MRGl2RWxlbWVudFwifSxcImNvbXBJZFwiOjIwfSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjY2OSxcInhcIjoyMDgsXCJ3aWR0aFwiOjIwMCxcInZhclwiOlwiYmFzZUJ0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiR29UbyBCYXNlXCIsXCJoZWlnaHRcIjo1MH0sXCJjb21wSWRcIjoxNSxcImNoaWxkXCI6W3tcInR5cGVcIjpcIkxhYmVsXCIsXCJwcm9wc1wiOntcInlcIjotNjI3LFwieFwiOjE5MCxcIndpZHRoXCI6MjAxLFwidmFyXCI6XCJjb250ZW50c1wiLFwidmFsaWduXCI6XCJtaWRkbGVcIixcInRleHRcIjpcInNzc3NcIixcImhlaWdodFwiOjUwMCxcImZvbnRTaXplXCI6NDAsXCJhbGlnblwiOlwiY2VudGVyXCJ9LFwiY29tcElkXCI6MTR9XX0se1widHlwZVwiOlwiTGFiZWxcIixcInByb3BzXCI6e1wieVwiOjEyMSxcInhcIjoyNzUuNSxcIndpZHRoXCI6NjMsXCJ2YWxpZ25cIjpcIm1pZGRsZVwiLFwidGV4dFwiOlwibGFiZWxcIixcImhlaWdodFwiOjIyLFwiYWxpZ25cIjpcImNlbnRlclwifSxcImNvbXBJZFwiOjI1fSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjEzMixcInhcIjo0MjYsXCJwcmVzZXRJRFwiOjEsXCJ3aWR0aFwiOjE5MixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcIuaMiemSruiEmuacrFwiLFwiaXNQcmVzZXRSb290XCI6dHJ1ZSxcImhlaWdodFwiOjkwfSxcImNvbXBJZFwiOjMxLFwiY2hpbGRcIjpbe1widHlwZVwiOlwiU2NyaXB0XCIsXCJwcm9wc1wiOntcInByZXNldElEXCI6MixcInlcIjoxLFwieFwiOjAsXCJydW50aW1lXCI6XCJnYW1lL3VpL3ZpZXcvQVBhZ2UvVGVzdC50c1wifSxcImNvbXBJZFwiOjMyfV19XSxcImxvYWRMaXN0XCI6W1wiY29tcC9idXR0b24ucG5nXCIsXCJwcmVmYWIvQnV0dG9uLnByZWZhYlwiXSxcImxvYWRMaXN0M0RcIjpbXX07XHJcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVZpZXcoQVBhZ2VVSS51aVZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFJFRyhcInVpLnZpZXcuQVBhZ2VVSVwiLEFQYWdlVUkpO1xyXG4gICAgZXhwb3J0IGNsYXNzIEJhc2VUZXN0VUkgZXh0ZW5kcyBWaWV3IHtcclxuXHRcdHB1YmxpYyB0YW5rOkxheWEuQ2xpcDtcblx0XHRwdWJsaWMgY2xvc2VCdG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIGRpYWxvZ0J0bjpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgbG9hZGluZ0J0bjpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgdmlld0J0bjpMYXlhLkJ1dHRvbjtcbiAgICAgICAgcHVibGljIHN0YXRpYyAgdWlWaWV3OmFueSA9e1widHlwZVwiOlwiVmlld1wiLFwicHJvcHNcIjp7XCJ3aWR0aFwiOjY0MCxcImhlaWdodFwiOjExMzZ9LFwiY29tcElkXCI6MixcImNoaWxkXCI6W3tcInR5cGVcIjpcIkltYWdlXCIsXCJwcm9wc1wiOntcInlcIjowLFwieFwiOjAsXCJ0b3BcIjowLFwic2tpblwiOlwiY29tcC9pbWFnZS5wbmdcIixcInJpZ2h0XCI6MCxcImxlZnRcIjowLFwiYm90dG9tXCI6MH0sXCJjb21wSWRcIjo4fSx7XCJ0eXBlXCI6XCJDbGlwXCIsXCJwcm9wc1wiOntcInlcIjowLFwieFwiOjAsXCJ2YXJcIjpcInRhbmtcIixcInNraW5cIjpcIkNoYXJhY3RlcnMvVGFua184LnBuZ1wiLFwiaW5kZXhcIjo0LFwiY2xpcFlcIjo0LFwiY2xpcFhcIjo0LFwiY2VudGVyWVwiOi0xLFwiY2VudGVyWFwiOjB9LFwiY29tcElkXCI6M30se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjozMjcsXCJ4XCI6MjgyLFwidmFyXCI6XCJjbG9zZUJ0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiY2xvc2VcIn0sXCJjb21wSWRcIjo0fSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjI1MixcInhcIjo0NzIsXCJ2YXJcIjpcImRpYWxvZ0J0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiZGlhbG9nXCJ9LFwiY29tcElkXCI6NX0se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjozMDQsXCJ4XCI6NDcyLFwidmFyXCI6XCJsb2FkaW5nQnRuXCIsXCJza2luXCI6XCJjb21wL2J1dHRvbi5wbmdcIixcImxhYmVsXCI6XCJiYXNlXCJ9LFwiY29tcElkXCI6Nn0se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjozNjIsXCJ4XCI6NDcyLFwidmFyXCI6XCJ2aWV3QnRuXCIsXCJza2luXCI6XCJjb21wL2J1dHRvbi5wbmdcIixcImxhYmVsXCI6XCJ2aWV3XCJ9LFwiY29tcElkXCI6N31dLFwibG9hZExpc3RcIjpbXCJjb21wL2ltYWdlLnBuZ1wiLFwiQ2hhcmFjdGVycy9UYW5rXzgucG5nXCIsXCJjb21wL2J1dHRvbi5wbmdcIl0sXCJsb2FkTGlzdDNEXCI6W119O1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVWaWV3KEJhc2VUZXN0VUkudWlWaWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSRUcoXCJ1aS52aWV3LkJhc2VUZXN0VUlcIixCYXNlVGVzdFVJKTtcclxuICAgIGV4cG9ydCBjbGFzcyBCUGFnZVVJIGV4dGVuZHMgQmFzZVZpZXcge1xyXG5cdFx0cHVibGljIGNoYW5nZTpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgY2xvc2VfYnRuOkxheWEuQnV0dG9uO1xuICAgICAgICBwdWJsaWMgc3RhdGljICB1aVZpZXc6YW55ID17XCJ0eXBlXCI6XCJCYXNlVmlld1wiLFwicHJvcHNcIjp7XCJ3aWR0aFwiOjMwMCxcImhlaWdodFwiOjExMzZ9LFwiY29tcElkXCI6MixcImNoaWxkXCI6W3tcInR5cGVcIjpcIlJlY3RcIixcInByb3BzXCI6e1wid2lkdGhcIjozMDAsXCJsaW5lV2lkdGhcIjoxLFwiaGVpZ2h0XCI6MTEzNixcImZpbGxDb2xvclwiOlwiI2NkZjlhNFwifSxcImNvbXBJZFwiOjN9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6NTM0LFwieFwiOjU5LFwid2lkdGhcIjoyMDAsXCJ2YXJcIjpcImNoYW5nZVwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiQ2hhbmdlQVBhZ2VcIixcImhlaWdodFwiOjUwfSxcImNvbXBJZFwiOjR9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6NjQ0LFwieFwiOjU5LFwid2lkdGhcIjoyMDAsXCJ2YXJcIjpcImNsb3NlX2J0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiQ2xvc2VcIixcImhlaWdodFwiOjUwfSxcImNvbXBJZFwiOjV9XSxcImxvYWRMaXN0XCI6W1wiY29tcC9idXR0b24ucG5nXCJdLFwibG9hZExpc3QzRFwiOltdfTtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVmlldyhCUGFnZVVJLnVpVmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUkVHKFwidWkudmlldy5CUGFnZVVJXCIsQlBhZ2VVSSk7XHJcbiAgICBleHBvcnQgY2xhc3MgRGlhbG9nVGVzdFVJIGV4dGVuZHMgVmlldyB7XHJcblx0XHRwdWJsaWMgYm94OkxheWEuQm94O1xuXHRcdHB1YmxpYyB0YW5rOkxheWEuQ2xpcDtcblx0XHRwdWJsaWMgY2xvc2VCdG46TGF5YS5CdXR0b247XG4gICAgICAgIHB1YmxpYyBzdGF0aWMgIHVpVmlldzphbnkgPXtcInR5cGVcIjpcIlZpZXdcIixcInByb3BzXCI6e1wid2lkdGhcIjo2NDAsXCJoZWlnaHRcIjozMDB9LFwiY29tcElkXCI6MixcImNoaWxkXCI6W3tcInR5cGVcIjpcIkltYWdlXCIsXCJwcm9wc1wiOntcInRvcFwiOjAsXCJza2luXCI6XCJDaGFyYWN0ZXJzL1RhbmtfMi5wbmdcIixcInJpZ2h0XCI6MCxcImxlZnRcIjowLFwiYm90dG9tXCI6MH0sXCJjb21wSWRcIjo4fSx7XCJ0eXBlXCI6XCJCb3hcIixcInByb3BzXCI6e1wid2lkdGhcIjoyMDAsXCJ2YXJcIjpcImJveFwiLFwiaGVpZ2h0XCI6MjAwLFwiY2VudGVyWVwiOjAsXCJjZW50ZXJYXCI6MH0sXCJjb21wSWRcIjo5LFwiY2hpbGRcIjpbe1widHlwZVwiOlwiSW1hZ2VcIixcInByb3BzXCI6e1widG9wXCI6MCxcInNraW5cIjpcImNvbXAvaW1hZ2UucG5nXCIsXCJzaXplR3JpZFwiOlwiMCwwLDAsMFwiLFwicmlnaHRcIjowLFwibGVmdFwiOjAsXCJib3R0b21cIjowfSxcImNvbXBJZFwiOjEwfSx7XCJ0eXBlXCI6XCJDbGlwXCIsXCJwcm9wc1wiOntcInlcIjo1NTAsXCJ4XCI6MzAzLFwidmFyXCI6XCJ0YW5rXCIsXCJza2luXCI6XCJDaGFyYWN0ZXJzL1RhbmtfNy5wbmdcIixcImluZGV4XCI6NCxcImNsaXBZXCI6NCxcImNsaXBYXCI6NCxcImNlbnRlcllcIjotMSxcImNlbnRlclhcIjowfSxcImNvbXBJZFwiOjN9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6MzksXCJ4XCI6NjIuNSxcInZhclwiOlwiY2xvc2VCdG5cIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcImNsb3NlXCJ9LFwiY29tcElkXCI6NH1dfV0sXCJsb2FkTGlzdFwiOltcIkNoYXJhY3RlcnMvVGFua18yLnBuZ1wiLFwiY29tcC9pbWFnZS5wbmdcIixcIkNoYXJhY3RlcnMvVGFua183LnBuZ1wiLFwiY29tcC9idXR0b24ucG5nXCJdLFwibG9hZExpc3QzRFwiOltdfTtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVmlldyhEaWFsb2dUZXN0VUkudWlWaWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSRUcoXCJ1aS52aWV3LkRpYWxvZ1Rlc3RVSVwiLERpYWxvZ1Rlc3RVSSk7XHJcbiAgICBleHBvcnQgY2xhc3MgTG9hZGluZ1VJIGV4dGVuZHMgVmlldyB7XHJcblx0XHRwdWJsaWMgdGFuazpMYXlhLkNsaXA7XG5cdFx0cHVibGljIGJ0bl9jbG9zZTpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgYnRuX2Nvbm5lY3Q6TGF5YS5CdXR0b247XG4gICAgICAgIHB1YmxpYyBzdGF0aWMgIHVpVmlldzphbnkgPXtcInR5cGVcIjpcIlZpZXdcIixcInByb3BzXCI6e1wid2lkdGhcIjo2NDAsXCJoZWlnaHRcIjoxMTM2fSxcImNvbXBJZFwiOjIsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJJbWFnZVwiLFwicHJvcHNcIjp7XCJ0b3BcIjowLFwic2tpblwiOlwiQ2hhcmFjdGVycy9UYW5rXzcucG5nXCIsXCJyaWdodFwiOjAsXCJsZWZ0XCI6MCxcImJvdHRvbVwiOjB9LFwiY29tcElkXCI6MTd9LHtcInR5cGVcIjpcIkNsaXBcIixcInByb3BzXCI6e1widmFyXCI6XCJ0YW5rXCIsXCJza2luXCI6XCJDaGFyYWN0ZXJzL1RhbmtfNC5wbmdcIixcImluZGV4XCI6NCxcImNsaXBZXCI6NCxcImNsaXBYXCI6NCxcImNlbnRlcllcIjotMSxcImNlbnRlclhcIjowfSxcImNvbXBJZFwiOjN9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6MzI3LFwieFwiOjI4Mi41LFwidmFyXCI6XCJidG5fY2xvc2VcIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcImNsb3NlXCJ9LFwiY29tcElkXCI6NH0se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjoyMjIsXCJ4XCI6MjgyLjUsXCJ2YXJcIjpcImJ0bl9jb25uZWN0XCIsXCJza2luXCI6XCJjb21wL2J1dHRvbi5wbmdcIixcImxhYmVsXCI6XCJjb25uZWN0XCJ9LFwiY29tcElkXCI6NX1dLFwibG9hZExpc3RcIjpbXCJDaGFyYWN0ZXJzL1RhbmtfNy5wbmdcIixcIkNoYXJhY3RlcnMvVGFua180LnBuZ1wiLFwiY29tcC9idXR0b24ucG5nXCJdLFwibG9hZExpc3QzRFwiOltdfTtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVmlldyhMb2FkaW5nVUkudWlWaWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSRUcoXCJ1aS52aWV3LkxvYWRpbmdVSVwiLExvYWRpbmdVSSk7XHJcbiAgICBleHBvcnQgY2xhc3MgVmlld1Rlc3RVSSBleHRlbmRzIFZpZXcge1xyXG5cdFx0cHVibGljIHRhbms6TGF5YS5DbGlwO1xuXHRcdHB1YmxpYyBjbG9zZUJ0bjpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgdmlld0J0bjpMYXlhLkJ1dHRvbjtcbiAgICAgICAgcHVibGljIHN0YXRpYyAgdWlWaWV3OmFueSA9e1widHlwZVwiOlwiVmlld1wiLFwicHJvcHNcIjp7XCJ3aWR0aFwiOjY0MCxcImhlaWdodFwiOjExMzZ9LFwiY29tcElkXCI6MixcImNoaWxkXCI6W3tcInR5cGVcIjpcIkltYWdlXCIsXCJwcm9wc1wiOntcInlcIjowLFwieFwiOjAsXCJ0b3BcIjowLFwic2tpblwiOlwiY29tcC9pbWFnZS5wbmdcIixcInJpZ2h0XCI6MCxcImxlZnRcIjowLFwiYm90dG9tXCI6MH0sXCJjb21wSWRcIjo3fSx7XCJ0eXBlXCI6XCJDbGlwXCIsXCJwcm9wc1wiOntcInlcIjowLFwieFwiOjAsXCJ2YXJcIjpcInRhbmtcIixcInNraW5cIjpcIkNoYXJhY3RlcnMvJOeLvC5wbmdcIixcImluZGV4XCI6NCxcImNsaXBZXCI6NCxcImNsaXBYXCI6NCxcImNlbnRlcllcIjotMSxcImNlbnRlclhcIjowfSxcImNvbXBJZFwiOjN9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6MzI3LFwieFwiOjI4MixcInZhclwiOlwiY2xvc2VCdG5cIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcImNsb3NlXCJ9LFwiY29tcElkXCI6NH0se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjozODUsXCJ4XCI6MjgyLjUsXCJ2YXJcIjpcInZpZXdCdG5cIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcInZpZXdcIn0sXCJjb21wSWRcIjo1fV0sXCJsb2FkTGlzdFwiOltcImNvbXAvaW1hZ2UucG5nXCIsXCJDaGFyYWN0ZXJzLyTni7wucG5nXCIsXCJjb21wL2J1dHRvbi5wbmdcIl0sXCJsb2FkTGlzdDNEXCI6W119O1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVWaWV3KFZpZXdUZXN0VUkudWlWaWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSRUcoXCJ1aS52aWV3LlZpZXdUZXN0VUlcIixWaWV3VGVzdFVJKTtcclxuICAgIGV4cG9ydCBjbGFzcyBWaWV3VGVzdDFVSSBleHRlbmRzIFZpZXcge1xyXG5cdFx0cHVibGljIHRhbms6TGF5YS5DbGlwO1xuXHRcdHB1YmxpYyBjbG9zZUJ0bjpMYXlhLkJ1dHRvbjtcbiAgICAgICAgcHVibGljIHN0YXRpYyAgdWlWaWV3OmFueSA9e1widHlwZVwiOlwiVmlld1wiLFwicHJvcHNcIjp7XCJ3aWR0aFwiOjY0MCxcImhlaWdodFwiOjExMzZ9LFwiY29tcElkXCI6MixcImNoaWxkXCI6W3tcInR5cGVcIjpcIkltYWdlXCIsXCJwcm9wc1wiOntcInlcIjowLFwieFwiOjAsXCJ0b3BcIjowLFwic2tpblwiOlwiY29tcC9pbWFnZS5wbmdcIixcInJpZ2h0XCI6MCxcImxlZnRcIjowLFwiYm90dG9tXCI6MH0sXCJjb21wSWRcIjo2fSx7XCJ0eXBlXCI6XCJDbGlwXCIsXCJwcm9wc1wiOntcInlcIjowLFwieFwiOjAsXCJ2YXJcIjpcInRhbmtcIixcInNraW5cIjpcIkNoYXJhY3RlcnMvJOeLvC5wbmdcIixcImluZGV4XCI6NCxcImNsaXBZXCI6NCxcImNsaXBYXCI6NCxcImNlbnRlcllcIjotMSxcImNlbnRlclhcIjowfSxcImNvbXBJZFwiOjN9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6MzI3LFwieFwiOjI4MixcInZhclwiOlwiY2xvc2VCdG5cIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcImNsb3NlXCJ9LFwiY29tcElkXCI6NH1dLFwibG9hZExpc3RcIjpbXCJjb21wL2ltYWdlLnBuZ1wiLFwiQ2hhcmFjdGVycy8k54u8LnBuZ1wiLFwiY29tcC9idXR0b24ucG5nXCJdLFwibG9hZExpc3QzRFwiOltdfTtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVmlldyhWaWV3VGVzdDFVSS51aVZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFJFRyhcInVpLnZpZXcuVmlld1Rlc3QxVUlcIixWaWV3VGVzdDFVSSk7XHJcbn1cciIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=