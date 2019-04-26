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
var Socket_1 = __webpack_require__(/*! ../../net/Socket */ "./src/net/Socket.ts");
var StringUtil_1 = __webpack_require__(/*! ./utils/StringUtil */ "./src/core/game/utils/StringUtil.ts");
var TimeUtil_1 = __webpack_require__(/*! ./utils/TimeUtil */ "./src/core/game/utils/TimeUtil.ts");
var GameNet_1 = __webpack_require__(/*! ../../net/http/GameNet */ "./src/net/http/GameNet.ts");
var Fetch_1 = __webpack_require__(/*! ../../net/Fetch */ "./src/net/Fetch.ts");
var GameApp = /** @class */ (function () {
    function GameApp() {
    }
    /**
     * 初始化函数
     * @constructor
     */
    GameApp.init = function () {
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
            return Socket_1.default.CreateOrGet();
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
    Object.defineProperty(GameApp, "fetch", {
        get: function () {
            return Fetch_1.Fetch.init('main', { url: 'http://10.1.100.97:3001/' });
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
var Dispatcher_1 = __webpack_require__(/*! ../../service/dispatcher/Dispatcher */ "./src/core/service/dispatcher/Dispatcher.ts");
var BaseController = /** @class */ (function () {
    function BaseController() {
        this.model = null;
        this.view = null;
        this.init();
    }
    BaseController.prototype.init = function () { };
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
        Dispatcher_1.dispatcher.Observe(key, caller, callback);
    };
    //移除监听的事件
    BaseController.prototype.removeListener = function (key) {
        Dispatcher_1.dispatcher.Remove(key);
    };
    //触发事件
    BaseController.prototype.dispatch = function (key) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        Dispatcher_1.dispatcher.SendMsg(key, args);
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
    Service.Init = function () {
    };
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
var dispatcher = new Dispatcher();
exports.dispatcher = dispatcher;


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
var layaMaxUI_1 = __webpack_require__(/*! ../../../ui/layaMaxUI */ "./src/ui/layaMaxUI.ts");
var ViewConst_1 = __webpack_require__(/*! ../../../core/const/ViewConst */ "./src/core/const/ViewConst.ts");
var BaseLayer_1 = __webpack_require__(/*! ../../../core/mvc/layer/BaseLayer */ "./src/core/mvc/layer/BaseLayer.ts");
var ViewTest_1 = __webpack_require__(/*! ./ViewTest */ "./src/game/ui/view/ViewTest.ts");
var Loading_1 = __webpack_require__(/*! ./Loading */ "./src/game/ui/view/Loading.ts");
var MvcMgr_1 = __webpack_require__(/*! ../../../core/mvc/MvcMgr */ "./src/core/mvc/MvcMgr.ts");
var UIEvent_1 = __webpack_require__(/*! ../../../core/mvc/UIEvent */ "./src/core/mvc/UIEvent.ts");
var GameApp_1 = __webpack_require__(/*! ../../../core/game/GameApp */ "./src/core/game/GameApp.ts");
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
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = console).log;
                        return [4 /*yield*/, GameApp_1.default.fetch.post('get', { a: [1, 2], c: 'hahahaha' })];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        return [2 /*return*/];
                }
            });
        });
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

/***/ "./src/net/Fetch.ts":
/*!**************************!*\
  !*** ./src/net/Fetch.ts ***!
  \**************************/
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
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["get"] = "GET";
    HttpMethod["post"] = "POST";
})(HttpMethod || (HttpMethod = {}));
var Fetch = /** @class */ (function () {
    function Fetch(_a) {
        var url = _a.url;
        this.baseUrl = '';
        this.contentType = 'application/json;charset=UTF-8';
        this.baseUrl = url;
    }
    Fetch.init = function (key, _a) {
        var url = _a.url;
        var fetch = this.fetchMap.get(key);
        if (!fetch) {
            fetch = new Fetch({ url: url });
            this.fetchMap.set(key, fetch);
        }
        return fetch;
    };
    Fetch.prototype.send = function (api, _a) {
        var body = _a.body, method = _a.method;
        return __awaiter(this, void 0, void 0, function () {
            var url, headers, res, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        url = this.baseUrl + api;
                        headers = new Headers({
                            'Content-Type': this.contentType,
                        });
                        _b = method;
                        switch (_b) {
                            case HttpMethod.get: return [3 /*break*/, 1];
                            case HttpMethod.post: return [3 /*break*/, 3];
                        }
                        return [3 /*break*/, 3];
                    case 1:
                        if (body) {
                            url +=
                                '?' +
                                    Object.entries(body)
                                        .map(function (item) { return item.join('='); })
                                        .join('&');
                        }
                        return [4 /*yield*/, fetch(url, { headers: headers, method: method })];
                    case 2:
                        res = _c.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, fetch(url, { body: body, headers: headers, method: method })];
                    case 4:
                        res = _c.sent();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/, this.resHandle(res)];
                }
            });
        });
    };
    Fetch.prototype.get = function (api, params) {
        if (params === void 0) { params = undefined; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send(api, { body: params, method: HttpMethod.get })];
            });
        });
    };
    Fetch.prototype.post = function (api, body) {
        if (body === void 0) { body = undefined; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send(api, { body: body ? JSON.stringify(body) : undefined, method: HttpMethod.post })];
            });
        });
    };
    Fetch.prototype.resHandle = function (res) {
        var contentType = res.headers.get('Content-Type');
        if (contentType) {
            if (contentType.indexOf('json') > -1) {
                return res.json();
            }
        }
        return res.text();
    };
    Fetch.fetchMap = new Map();
    return Fetch;
}());
exports.Fetch = Fetch;


/***/ }),

/***/ "./src/net/Socket.ts":
/*!***************************!*\
  !*** ./src/net/Socket.ts ***!
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWVDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvVXRpbHMvRWZmZWN0VXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvYmFzZS9TaW5nbGV0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY29uc3QvTGF5ZXJDb25zdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9jb25zdC9WaWV3Q29uc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZ2FtZS9HYW1lQXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2dhbWUvdXRpbHMvU3RyaW5nVXRpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9nYW1lL3V0aWxzL1RpbWVVdGlsLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL212Yy9Db250cm9sbGVyTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9tdmMvTXZjTWdyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL212Yy9VSUV2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL212Yy9WaWV3TWdyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL212Yy9jb250cm9sbGVyL0Jhc2VDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL212Yy9sYXllci9CYXNlTGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvbXZjL2xheWVyL0RpYWxvZ0xheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL212Yy9sYXllci9WaWV3TGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvbXZjL21vZGVsL0Jhc2VNb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9tdmMvdmlldy9CYXNlVmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9zZXJ2aWNlL1NlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvc2VydmljZS9kaXNwYXRjaGVyL0Rpc3BhdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvc2VydmljZS9kaXNwYXRjaGVyL09ic2VydmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3VpL3ZpZXcvQVBhZ2UvQVBhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdWkvdmlldy9BUGFnZS9BUGFnZUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdWkvdmlldy9BUGFnZS9BcGFnZU1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3VpL3ZpZXcvQVBhZ2UvVGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS91aS92aWV3L0JQYWdlL0JQYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3VpL3ZpZXcvQlBhZ2UvQlBhZ2VDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3VpL3ZpZXcvQlBhZ2UvQlBhZ2VNb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS91aS92aWV3L0Jhc2VUZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3VpL3ZpZXcvTG9hZGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS91aS92aWV3L1ZpZXdUZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3VpL3ZpZXcvVmlld1Rlc3QxLnRzIiwid2VicGFjazovLy8uL3NyYy9uZXQvRmV0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ldC9Tb2NrZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ldC9odHRwL0dhbWVOZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ldC9odHRwL05ldFJlcXVlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lL01haW5TY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvbGF5YU1heFVJLnRzIiwid2VicGFjazov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O2dCQUNJLGlCQUFNLGNBQWMsV0FBRSxDQUFDO2dCQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN6QyxDQUFDO1lBTGMsbUJBQU0sR0FBTSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxHQUFHLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsZ0JBQWdCLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyx1QkFBdUIsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFH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QUcsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxNQUFNLEVBQUMsaUJBQWlCLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLGdCQUFnQixFQUFDLG1CQUFtQixFQUFDLGlCQUFpQixDQUFDLEVBQUMsWUFBWSxFQUFDLEVBQUUsRUFBQyxDQUFDO1lBTTdpQixrQkFBQztTQUFBLENBVGdDLElBQUksR0FTcEM7UUFUWSxnQkFBVyxjQVN2QjtRQUNELEdBQUcsQ0FBQyxxQkFBcUIsRUFBQyxXQUFXLENBQUMsQ0FBQztJQUMzQyxDQUFDLEVBdEZnQixJQUFJLEdBQUosT0FBSSxLQUFKLE9BQUksUUFzRnBCO0FBQUQsQ0FBQyxFQXRGYSxFQUFFLEdBQUYsVUFBRSxLQUFGLFVBQUUsUUFzRmY7Ozs7Ozs7Ozs7OztBQ3ZHRCxlIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiaW5kZXhcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9NYWluLnRzXCIsXCJsaWJcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvKipUaGlzIGNsYXNzIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IExheWFBaXJJREUsIHBsZWFzZSBkbyBub3QgbWFrZSBhbnkgbW9kaWZpY2F0aW9ucy4gKi9cclxuaW1wb3J0IE1haW5TY2VuZSBmcm9tIFwiLi9zY2VuZS9NYWluU2NlbmVcIlxuaW1wb3J0IFRlc3QgZnJvbSBcIi4vZ2FtZS91aS92aWV3L0FQYWdlL1Rlc3RcIlxyXG4vKlxyXG4qIOa4uOaIj+WIneWni+WMlumFjee9rjtcclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbmZpZ3tcclxuICAgIHN0YXRpYyB3aWR0aDpudW1iZXI9NjQwO1xyXG4gICAgc3RhdGljIGhlaWdodDpudW1iZXI9MTEzNjtcclxuICAgIHN0YXRpYyBzY2FsZU1vZGU6c3RyaW5nPVwic2hvd2FsbFwiO1xyXG4gICAgc3RhdGljIHNjcmVlbk1vZGU6c3RyaW5nPVwibm9uZVwiO1xyXG4gICAgc3RhdGljIGFsaWduVjpzdHJpbmc9XCJtaWRkbGVcIjtcclxuICAgIHN0YXRpYyBhbGlnbkg6c3RyaW5nPVwiY2VudGVyXCI7XHJcbiAgICBzdGF0aWMgc3RhcnRTY2VuZTphbnk9XCJzY2VuZS9NYWluU2NlbmUuc2NlbmVcIjtcclxuICAgIHN0YXRpYyBzY2VuZVJvb3Q6c3RyaW5nPVwiXCI7XHJcbiAgICBzdGF0aWMgZGVidWc6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBzdGF0OmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgcGh5c2ljc0RlYnVnOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgZXhwb3J0U2NlbmVUb0pzb246Ym9vbGVhbj10cnVlO1xyXG4gICAgY29uc3RydWN0b3IoKXt9XHJcbiAgICBzdGF0aWMgaW5pdCgpe1xyXG4gICAgICAgIHZhciByZWc6IEZ1bmN0aW9uID0gTGF5YS5DbGFzc1V0aWxzLnJlZ0NsYXNzO1xyXG4gICAgICAgIHJlZyhcInNjZW5lL01haW5TY2VuZS50c1wiLE1haW5TY2VuZSk7XG4gICAgICAgIHJlZyhcImdhbWUvdWkvdmlldy9BUGFnZS9UZXN0LnRzXCIsVGVzdCk7XHJcbiAgICB9XHJcbn1cclxuR2FtZUNvbmZpZy5pbml0KCk7IiwiaW1wb3J0IEdhbWVDb25maWcgZnJvbSAnLi9HYW1lQ29uZmlnJ1xyXG5jbGFzcyBNYWluIHtcclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvL+agueaNrklEReiuvue9ruWIneWni+WMluW8leaTjlxyXG4gICAgaWYgKHdpbmRvd1snTGF5YTNEJ10pIExheWEzRC5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0KVxyXG4gICAgZWxzZSBMYXlhLmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQsIExheWFbJ1dlYkdMJ10pXHJcbiAgICBMYXlhWydQaHlzaWNzJ10gJiYgTGF5YVsnUGh5c2ljcyddLmVuYWJsZSgpXHJcbiAgICBMYXlhWydEZWJ1Z1BhbmVsJ10gJiYgTGF5YVsnRGVidWdQYW5lbCddLmVuYWJsZSgpXHJcbiAgICAvLyBMYXlhLnN0YWdlLnNjYWxlTW9kZSA9IEdhbWVDb25maWcuc2NhbGVNb2RlO1xyXG4gICAgTGF5YS5zdGFnZS5zY2FsZU1vZGUgPSBHYW1lQ29uZmlnLnNjYWxlTW9kZVxyXG4gICAgTGF5YS5zdGFnZS5zY3JlZW5Nb2RlID0gR2FtZUNvbmZpZy5zY3JlZW5Nb2RlXHJcbiAgICBMYXlhLnN0YWdlLmFsaWduViA9IEdhbWVDb25maWcuYWxpZ25WXHJcbiAgICBMYXlhLnN0YWdlLmFsaWduSCA9IEdhbWVDb25maWcuYWxpZ25IXHJcbiAgICAvL+WFvOWuueW+ruS/oeS4jeaUr+aMgeWKoOi9vXNjZW5l5ZCO57yA5Zy65pmvXHJcbiAgICBMYXlhLlVSTC5leHBvcnRTY2VuZVRvSnNvbiA9IEdhbWVDb25maWcuZXhwb3J0U2NlbmVUb0pzb25cclxuXHJcbiAgICAvL+aJk+W8gOiwg+ivlemdouadv++8iOmAmui/h0lEReiuvue9ruiwg+ivleaooeW8j++8jOaIluiAhXVybOWcsOWdgOWinuWKoGRlYnVnPXRydWXlj4LmlbDvvIzlnYflj6/miZPlvIDosIPor5XpnaLmnb/vvIlcclxuICAgIGlmIChHYW1lQ29uZmlnLmRlYnVnIHx8IExheWEuVXRpbHMuZ2V0UXVlcnlTdHJpbmcoJ2RlYnVnJykgPT0gJ3RydWUnKSBMYXlhLmVuYWJsZURlYnVnUGFuZWwoKVxyXG4gICAgaWYgKEdhbWVDb25maWcucGh5c2ljc0RlYnVnICYmIExheWFbJ1BoeXNpY3NEZWJ1Z0RyYXcnXSkgTGF5YVsnUGh5c2ljc0RlYnVnRHJhdyddLmVuYWJsZSgpXHJcbiAgICBpZiAoR2FtZUNvbmZpZy5zdGF0KSBMYXlhLlN0YXQuc2hvdygpXHJcbiAgICBMYXlhLmFsZXJ0R2xvYmFsRXJyb3IgPSB0cnVlXHJcbiAgICAvL+a/gOa0u+i1hOa6kOeJiOacrOaOp+WItu+8jHZlcnNpb24uanNvbueUsUlEReWPkeW4g+WKn+iDveiHquWKqOeUn+aIkO+8jOWmguaenOayoeacieS5n+S4jeW9seWTjeWQjue7rea1geeoi1xyXG4gICAgTGF5YS5SZXNvdXJjZVZlcnNpb24uZW5hYmxlKCd2ZXJzaW9uLmpzb24nLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25WZXJzaW9uTG9hZGVkKSwgTGF5YS5SZXNvdXJjZVZlcnNpb24uRklMRU5BTUVfVkVSU0lPTilcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25WZXJzaW9uTG9hZGVkKCk6IHZvaWQge1xyXG4gICAgLy/mv4DmtLvlpKflsI/lm77mmKDlsITvvIzliqDovb3lsI/lm77nmoTml7blgJnvvIzlpoLmnpzlj5HnjrDlsI/lm77lnKjlpKflm77lkIjpm4bph4zpnaLvvIzliJnkvJjlhYjliqDovb3lpKflm77lkIjpm4bvvIzogIzkuI3mmK/lsI/lm75cclxuICAgIExheWEuQXRsYXNJbmZvTWFuYWdlci5lbmFibGUoJ2ZpbGVjb25maWcuanNvbicsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkNvbmZpZ0xvYWRlZCkpXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQ29uZmlnTG9hZGVkKCk6IHZvaWQge1xyXG4gICAgLy/liqDovb1JREXmjIflrprnmoTlnLrmma9cclxuICAgIEdhbWVDb25maWcuc3RhcnRTY2VuZSAmJiBMYXlhLlNjZW5lLm9wZW4oR2FtZUNvbmZpZy5zdGFydFNjZW5lKVxyXG4gIH1cclxufVxyXG4vL+a/gOa0u+WQr+WKqOexu1xyXG5uZXcgTWFpbigpXHJcbiIsIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZmZlY3RVdGlscyAge1xyXG4gIC8qKlxyXG4gICAqIOexu+S8vG1hY+S4iuWbvuagh+S4iuS4i+aKluWKqOeahOaViOaenFxyXG4gICAqIEBwYXJhbSB7U3ByaXRlfSBvYmog5oqW5Yqo5a+56LGhXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluaXRZIOimgeaKluWKqOeahOWvueixoeeahOWIneWni1nlgLzvvIzljp/lp4vkvY3nva5cclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayDmipbliqjliqjnlLvlrozmiJDlm57osIPlh73mlbBcclxuICAgKiBAcGFyYW0ge2FueX0gdGhpc09iaiDlm57osIPlh73mlbB0aGlz5a+56LGhXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBtYWNJY29uU2hha2Uob2JqLCBpbml0WSwgY2FsbGJhY2ssIHRoaXNPYmopIHtcclxuICAgIC8v5oqW5Yqo6aKR546HW+aXtumXtO+8jOenu+WKqOi3neemu13vvIzlj6/kv67mlLlcclxuICAgIGxldCBhcnIgPSBbWzIwLCAzMDBdLCBbMTUsIDMwMF0sIFsxMCwgMzAwXSwgWzUsIDMwMF1dXHJcblxyXG4gICAgbGV0IGluZGV4ID0gMFxyXG4gICAgdG9TaGFrZSgpXHJcblxyXG4gICAgZnVuY3Rpb24gdG9TaGFrZSgpIHtcclxuICAgICAgaWYgKGluZGV4ID49IGFyci5sZW5ndGgpIHtcclxuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjay5hcHBseSh0aGlzT2JqLCBbXSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgb2JqLFxyXG4gICAgICAgICAgeyB5OiBpbml0WSAtIGFycltpbmRleF1bMF0gfSxcclxuICAgICAgICAgIGFycltpbmRleF1bMV0sXHJcbiAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZShudWxsLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICBvYmosXHJcbiAgICAgICAgICAgICAgeyB5OiBpbml0WSB9LFxyXG4gICAgICAgICAgICAgIGFycltpbmRleF1bMV0sXHJcbiAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKG51bGwsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgKytpbmRleFxyXG4gICAgICAgICAgICAgICAgdG9TaGFrZSgpXHJcbiAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5ZCR5LiK56e75Yqo5reh5Ye677yI5by55Ye65qGG77yJXHJcbiAgICogQHBhcmFtIHtTcHJpdGV9IG9iaiDmt6Hlh7rlr7nosaFcclxuICAgKiBAcGFyYW0ge251bWJlcn0gdGltZSDmt6Hlh7rml7bpl7RcclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBlYXNlIOa3oeWHuuWHveaVsFxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIOa3oeWHuuWujOaIkOWbnuiwg+WHveaVsFxyXG4gICAqIEBwYXJhbSB7YW55fSB0aGlzT2JqIOWbnuiwg+WHveaVsHRoaXPlr7nosaFcclxuICAgKiBAcGFyYW0ge0FycmF5fSBhcnJEYXRhIOWbnuiwg+S8oOWPglxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgZmxvd091dChvYmosIHRpbWUgPSA1MDAsIGVhc2UgPSBudWxsLCBjYWxsYmFjayA9IG51bGwsIHRoaXNPYmogPSBudWxsLCBhcnJEYXRhID0gbnVsbCkge1xyXG4gICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgIExheWEuVHdlZW4udG8ob2JqLCB7IHk6IG9iai55IC0gMTUwLCBhbHBoYTogMCB9LCB0aW1lLCBlYXNlLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXNPYmosIGNhbGxiYWNrLCBhcnJEYXRhKSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIExheWEuVHdlZW4udG8ob2JqLCB7IHk6IG9iai55IC0gMTUwLCBhbHBoYTogMCB9LCB0aW1lLCBlYXNlLCBMYXlhLkhhbmRsZXIuY3JlYXRlKG9iaiwgb2JqLnJlbW92ZVNlbGYsIGFyckRhdGEpKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5paH5pys5pWw5a2X5aKe5YeP5pWI5p6cXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0TnVtIOW8gOWni+aVsOWAvFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBlbmROdW0g5riQ5Y+Y5Yiw55qE5pWw5YC8XHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sg5reh5Ye65a6M5oiQ5Zue6LCD5Ye95pWwXHJcbiAgICogQHBhcmFtIHthbnl9IHRoaXNPYmog5Zue6LCD5Ye95pWwdGhpc+WvueixoVxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgZmxvd051bShzdGFydE51bSwgZW5kTnVtLCBjYWxsYmFjaywgdGhpc09iaiA9IG51bGwpIHtcclxuICAgIGxldCBjaGFuZ2UgPSBNYXRoLmFicyhlbmROdW0gLSBzdGFydE51bSlcclxuICAgIGlmIChjaGFuZ2UgPD0gMCkgcmV0dXJuXHJcbiAgICBsZXQgZXZlcnlDaGFuZ2UgPSBjaGFuZ2UgLyAoZW5kTnVtIC0gc3RhcnROdW0pXHJcbiAgICBsZXQgY3Vyck51bSA9IHN0YXJ0TnVtXHJcbiAgICBsZXQgdGltZXIgPSBuZXcgTGF5YS5UaW1lcigpXHJcbiAgICB0aW1lci5sb29wKDMwLCB0aGlzLCBjaGFuZ2VGdW4pXHJcblxyXG4gICAgZnVuY3Rpb24gY2hhbmdlRnVuKCkge1xyXG4gICAgICBjdXJyTnVtICs9IGV2ZXJ5Q2hhbmdlXHJcbiAgICAgIC0tY2hhbmdlXHJcbiAgICAgIGlmIChjaGFuZ2UgPCAwKSB7XHJcbiAgICAgICAgdGltZXIuY2xlYXJBbGwodGhpcylcclxuICAgICAgICB0aW1lciA9IG51bGxcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjay5hcHBseSh0aGlzT2JqLCBbY3Vyck51bV0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOW8gOWni+mXqueDgVxyXG4gICAqIEBwYXJhbSB7U3ByaXRlfSBvYmpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gYWxwaGFUaW1lIOmXqueDgemikeeOh1xyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgc3RhcnRGbGlja2VyKG9iaiwgYWxwaGFUaW1lID0gNzAwKSB7XHJcbiAgICBvYmouYWxwaGEgPSAxXHJcbiAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICBvYmosXHJcbiAgICAgIHsgYWxwaGE6IDAgfSxcclxuICAgICAgYWxwaGFUaW1lLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBMYXlhLlR3ZWVuLnRvKG9iaiwgeyBhbHBoYTogMSB9LCBhbHBoYVRpbWUsIG51bGwsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5zdGFydEZsaWNrZXIsIFtvYmpdKSlcclxuICAgICAgICB9LmJpbmQodGhpcyksXHJcbiAgICAgICksXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlgZzmraLliqjnlLvmiYDmnInliqjnlLvlkI7lrrnlmajkvY3nva7liJ3lp4vljJbliLDljp/kvY3vvIzlkKbliJnlj6/og73lh7rnjrDkvY3nva7mlLnlj5jnmoRidWdcclxuICAgKiBAcGFyYW0ge1Nwcml0ZX0gb2JqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHhQb3NcclxuICAgKiBAcGFyYW0ge251bWJlcn0geVBvc1xyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgc3RvcEVmZmVjdChvYmosIHhQb3MgPSBudWxsLCB5UG9zID0gbnVsbCkge1xyXG4gICAgTGF5YS5Ud2Vlbi5jbGVhckFsbChvYmopXHJcbiAgICBpZiAoeFBvcyAhPT0gbnVsbCAmJiB5UG9zICE9PSBudWxsKSB7XHJcbiAgICAgIG9iai5wb3MoeFBvcywgeVBvcylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOeCueWHu+aUvuWkp+e8qeWwj+aViOaenFxyXG4gICAqIEBwYXJhbSB7TGF5YS5TcHJpdGV9XHJcbiAgICogQHBhcmFtIHtib29sZWFufSBpc0NoYW5nZVhZIOWmguaenOS4reW/g+eCueaYr+mUmueCueS4jemcgOimgeS/ruaUueS9jee9rlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgY2xpY2tFZmZlY3Qoc3AsIGlzQ2hhbmdlWFkgPSB0cnVlKSB7XHJcbiAgICBpZiAoIXNwKSByZXR1cm5cclxuICAgIHNwLm9mZihMYXlhLkV2ZW50Lk1PVVNFX0RPV04sIHRoaXMsIHRoaXMuY3ViaWNJbk91dEVmZmVjdClcclxuICAgIHNwLm9uKExheWEuRXZlbnQuTU9VU0VfRE9XTiwgdGhpcywgdGhpcy5jdWJpY0luT3V0RWZmZWN0LCBbc3AsIGlzQ2hhbmdlWFldKVxyXG4gIH1cclxuICBwdWJsaWMgc3RhdGljIGNsZWFyQ2xpY2tFZmZlY3Qoc3ApIHtcclxuICAgIGlmICghc3ApIHJldHVyblxyXG4gICAgc3Aub2ZmKExheWEuRXZlbnQuTU9VU0VfRE9XTiwgdGhpcywgdGhpcy5jdWJpY0luT3V0RWZmZWN0KVxyXG4gIH1cclxuICBwdWJsaWMgc3RhdGljIGN1YmljSW5PdXRFZmZlY3Qoc3AsIGlzQ2hhbmdlWFkpIHtcclxuICAgIGlmIChzcC5fYW5pQnV0dG9uRWZmZWN0KSByZXR1cm5cclxuICAgIHNwLl9hbmlCdXR0b25FZmZlY3QgPSB0cnVlXHJcbiAgICBsZXQgX3ggPSBzcC54XHJcbiAgICBsZXQgX3kgPSBzcC55XHJcbiAgICBsZXQgX3NjYVggPSBzcC5zY2FsZVhcclxuICAgIGxldCBfc2NhWSA9IHNwLnNjYWxlWVxyXG4gICAgbGV0IF9iaWdYLCBfYmlnWVxyXG4gICAgaWYgKCFpc0NoYW5nZVhZKSB7XHJcbiAgICAgIF9iaWdYID0gX3ggLSAoKHNwLndpZHRoICogMC4xKSA+PiAxKVxyXG4gICAgICBfYmlnWSA9IF95IC0gKChzcC5oZWlnaHQgKiAwLjEpID4+IDEpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBfYmlnWCA9IF94XHJcbiAgICAgIF9iaWdZID0gX3lcclxuICAgIH1cclxuICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgIHNwLFxyXG4gICAgICB7IHg6IF9iaWdYLCB5OiBfYmlnWSwgc2NhbGVYOiAxLjEgKiBfc2NhWCwgc2NhbGVZOiAxLjEgKiBfc2NhWSB9LFxyXG4gICAgICAxMDAsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICBzcCxcclxuICAgICAgICAgIHsgeDogX3gsIHk6IF95LCBzY2FsZVg6IF9zY2FYLCBzY2FsZVk6IF9zY2FZIH0sXHJcbiAgICAgICAgICAxMDAsXHJcbiAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc3AuZGVzdHJveWVkKSB7XHJcbiAgICAgICAgICAgICAgc3AuX2FuaUJ1dHRvbkVmZmVjdCA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIClcclxuICAgICAgfSksXHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBuYW1lXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU2luZ2xldG9uIHtcclxuICAvKipcclxuICAgKiBkZWZhdWx0IGNvbnN0cmFjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBwdWJsaWMgc3RhdGljIF9pbnN0YW5jZTogYW55XHJcbiAgLyoqXHJcbiAgICogZ2V0IGluc3RhbmNlIG9yIGNyZWF0ZSBuZXcgaW5zdGFuY2VcclxuICAgKiBAcmV0dXJucyB7YW55fVxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgQ3JlYXRlT3JHZXQoLi4uYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgY29uc3QgaW5zdFQ6IGFueSA9IHRoaXNcclxuICAgIHJldHVybiAoaW5zdFQuX2luc3RhbmNlID0gaW5zdFQuX2luc3RhbmNlIHx8IG5ldyBpbnN0VCguLi5hcmdzKSlcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGVudW0gTGF5ZXJDb25zdCB7XHJcbiAgYmFzZSA9IDEsXHJcbiAgYmFzZTEsXHJcbiAgdmlldyxcclxuICBzaGFyZSxcclxuICBkaWFsb2csXHJcbiAgbG9hZGluZyxcclxufVxyXG4iLCJleHBvcnQgZW51bSBWaWV3Q29uc3Qge1xyXG4gIE1haW4gPSAxLFxyXG4gIExvYWRpbmcsXHJcbiAgVmlld1Rlc3QsXHJcbiAgVmlld1Rlc3QxLFxyXG4gIERpYWxvZ1Rlc3QsXHJcbiAgQmFzZVRlc3QsXHJcbiAgQVBhZ2UsXHJcbiAgQlBhZ2VcclxufVxyXG4iLCJpbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9TZXJ2aWNlJ1xyXG5pbXBvcnQgeyBEaXNwYXRjaGVyIH0gZnJvbSAnLi4vc2VydmljZS9kaXNwYXRjaGVyL0Rpc3BhdGNoZXInXHJcbmltcG9ydCBTb2NrZXQgZnJvbSAnLi4vLi4vbmV0L1NvY2tldCdcclxuaW1wb3J0IHsgU3RyaW5nVXRpbCB9IGZyb20gJy4vdXRpbHMvU3RyaW5nVXRpbCdcclxuaW1wb3J0IHsgVGltZVV0aWwgfSBmcm9tICcuL3V0aWxzL1RpbWVVdGlsJ1xyXG5cclxuaW1wb3J0IEdhbWVOZXQgZnJvbSAnLi4vLi4vbmV0L2h0dHAvR2FtZU5ldCdcclxuaW1wb3J0IHsgRmV0Y2ggfSBmcm9tICcuLi8uLi9uZXQvRmV0Y2gnXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVBcHAge1xyXG4gIC8vIOWFqOWxgOmFjee9ruaVsOaNrlxyXG4gIHB1YmxpYyBzdGF0aWMgR2xvYmFsRGF0YTogYW55ID0gbnVsbFxyXG5cclxuICAvKipcclxuICAgKiDliJ3lp4vljJblh73mlbBcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGluaXQoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBHYW1lQXBwLkdsb2JhbERhdGEgPSBMYXlhLmxvYWRlci5nZXRSZXMoJ2NvbmYvZ2xvYmFsLmpzb24nKVxyXG4gICAgICAvL+W4p+i9ruivolxyXG4gICAgICBTZXJ2aWNlLkluaXQoKVxyXG4gICAgICByZXNvbHZlKClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBkaXNwYXRjaGVyKCk6IERpc3BhdGNoZXIge1xyXG4gICAgcmV0dXJuIFNlcnZpY2UuZGlzcGF0Y2hlclxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgU3RyaW5nVXRpbCgpOiBTdHJpbmdVdGlsIHtcclxuICAgIHJldHVybiBTdHJpbmdVdGlsLkNyZWF0ZU9yR2V0KClcclxuICB9XHJcbiAgcHVibGljIHN0YXRpYyBnZXQgVGltZVV0aWwoKTogVGltZVV0aWwge1xyXG4gICAgcmV0dXJuIFRpbWVVdGlsLkNyZWF0ZU9yR2V0KClcclxuICB9XHJcbiAgcHVibGljIHN0YXRpYyBnZXQgU29ja2V0KCk6IFNvY2tldCB7XHJcbiAgICByZXR1cm4gU29ja2V0LkNyZWF0ZU9yR2V0KClcclxuICB9XHJcbiAgcHVibGljIHN0YXRpYyBnZXQgbmV0KCk6IEdhbWVOZXQge1xyXG4gICAgcmV0dXJuIEdhbWVOZXQuQ3JlYXRlT3JHZXQoKVxyXG4gIH1cclxuICBwdWJsaWMgc3RhdGljIGdldCBmZXRjaCgpOiBGZXRjaCB7XHJcbiAgICByZXR1cm4gRmV0Y2guaW5pdCgnbWFpbicsIHsgdXJsOiAnaHR0cDovLzEwLjEuMTAwLjk3OjMwMDEvJyB9KVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTaW5nbGV0b24gfSBmcm9tICcuLi8uLi9iYXNlL1NpbmdsZXRvbidcclxuXHJcbmV4cG9ydCBjbGFzcyBTdHJpbmdVdGlsIGV4dGVuZHMgU2luZ2xldG9uIHtcclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNpbmdsZXRvbiB9IGZyb20gJy4uLy4uL2Jhc2UvU2luZ2xldG9uJ1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpbWVVdGlsIGV4dGVuZHMgU2luZ2xldG9uIHtcclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgfVxyXG4gIC8v5Ymp5L2Z5pe26Ze06L2s5pe25YiG56eS77yI56eS77yJXHJcbiAgcHJpdmF0ZSBjaGFuZ2VUaW1lKHRpbWU6IG51bWJlcik6IHsgaG91cnM6IG51bWJlcjsgbWludXRlczogbnVtYmVyOyBzZWNvbmRzOiBudW1iZXIgfSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBob3VyczogTWF0aC5mbG9vcih0aW1lIC8gMzYwMCksXHJcbiAgICAgIG1pbnV0ZXM6IE1hdGguZmxvb3IoKHRpbWUgJSAzNjAwKSAvIDYwKSxcclxuICAgICAgc2Vjb25kczogdGltZSAlIDYwLFxyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiDlgJLorqHml7ZcclxuICAgKiBAcGFyYW0gdGltZSDml7bpl7TmiLPvvIhz77yJXHJcbiAgICogQHBhcmFtIGhvdXIg5pe2XHJcbiAgICogQHBhcmFtIG1pbnV0ZSDliIZcclxuICAgKiBAcGFyYW0gc2Vjb25kIOenklxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb3VudERvd24odGltZTogbnVtYmVyLCBob3VyOiBzdHJpbmcgPSAn5pe2JywgbWludXRlOiBzdHJpbmcgPSAn5YiGJywgc2Vjb25kOiBzdHJpbmcgPSAn56eSJyk6IHN0cmluZyB7XHJcbiAgICBsZXQgdGVtcCA9IHRoaXMuY2hhbmdlVGltZSh0aW1lKVxyXG4gICAgcmV0dXJuIGAke3RlbXAuaG91cnN9JHtob3VyfSR7dGVtcC5taW51dGVzfSR7bWludXRlfSR7dGVtcC5zZWNvbmRzfSR7c2Vjb25kfWBcclxuICB9XHJcbiAgLyoqXHJcbiAgICog5qC85byP5YyW5pe26Ze0XHJcbiAgICogQHBhcmFtIGRhdGUgRGF0ZVxyXG4gICAqIEBwYXJhbSBmb3JtYXQg5qC85byPXHJcbiAgICovXHJcbiAgcHVibGljIERhdGVGb3JtYXQoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcgPSAneXl5eS1NTS1kZCBoaDptbTpzcycpOiBzdHJpbmcge1xyXG4gICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcclxuICAgIGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDEgPiA5ID8gZGF0ZS5nZXRNb250aCgpICsgMSA6IGAwJHtkYXRlLmdldE1vbnRoKCkgKyAxfWBcclxuICAgIGxldCBtb250aDIgPSBkYXRlLmdldE1vbnRoKCkgKyAxXHJcbiAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCkgPiA5ID8gZGF0ZS5nZXREYXRlKCkgOiBgMCR7ZGF0ZS5nZXREYXRlKCl9YFxyXG4gICAgbGV0IGRheTIgPSBkYXRlLmdldERhdGUoKVxyXG4gICAgbGV0IGhvdXIgPSBkYXRlLmdldEhvdXJzKCkgPiA5ID8gZGF0ZS5nZXRIb3VycygpIDogYDAke2RhdGUuZ2V0SG91cnMoKX1gXHJcbiAgICBsZXQgaG91cjIgPSBkYXRlLmdldEhvdXJzKClcclxuICAgIGxldCBtaW51dGUgPSBkYXRlLmdldE1pbnV0ZXMoKSA+IDkgPyBkYXRlLmdldE1pbnV0ZXMoKSA6IGAwJHtkYXRlLmdldE1pbnV0ZXMoKX1gXHJcbiAgICBsZXQgbWludXRlMiA9IGRhdGUuZ2V0TWludXRlcygpXHJcbiAgICBsZXQgc2Vjb25kID0gZGF0ZS5nZXRTZWNvbmRzKCkgPiA5ID8gZGF0ZS5nZXRTZWNvbmRzKCkgOiBgMCR7ZGF0ZS5nZXRTZWNvbmRzKCl9YFxyXG4gICAgbGV0IHNlY29uZDIgPSBkYXRlLmdldFNlY29uZHMoKVxyXG5cclxuICAgIHJldHVybiBmb3JtYXRcclxuICAgICAgLnJlcGxhY2UoL3l5eXkvLCBgJHt5ZWFyfWApXHJcbiAgICAgIC5yZXBsYWNlKC9NTS8sIGAke21vbnRofWApXHJcbiAgICAgIC5yZXBsYWNlKC9NLywgYCR7bW9udGgyfWApXHJcbiAgICAgIC5yZXBsYWNlKC9kZC8sIGAke2RheX1gKVxyXG4gICAgICAucmVwbGFjZSgvZC8sIGAke2RheTJ9YClcclxuICAgICAgLnJlcGxhY2UoL2hoLywgYCR7aG91cn1gKVxyXG4gICAgICAucmVwbGFjZSgvaC8sIGAke2hvdXIyfWApXHJcbiAgICAgIC5yZXBsYWNlKC9tbS8sIGAke21pbnV0ZX1gKVxyXG4gICAgICAucmVwbGFjZSgvbS8sIGAke21pbnV0ZTJ9YClcclxuICAgICAgLnJlcGxhY2UoL3NzLywgYCR7c2Vjb25kfWApXHJcbiAgICAgIC5yZXBsYWNlKC9zLywgYCR7c2Vjb25kMn1gKVxyXG4gIH1cclxuICAvKipcclxuICAgKiDojrflj5blvZPliY11dGPlpKkw54K5XHJcbiAgICovXHJcbiAgcHVibGljIFVUQ0RhdGUoKTogRGF0ZSB7XHJcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpXHJcbiAgICBub3cuc2V0VVRDSG91cnMoMClcclxuICAgIG5vdy5zZXRVVENNaW51dGVzKDApXHJcbiAgICBub3cuc2V0VVRDU2Vjb25kcygwKVxyXG4gICAgbm93LnNldFVUQ01pbGxpc2Vjb25kcygwKVxyXG4gICAgcmV0dXJuIG5vd1xyXG4gIH1cclxuICAvKipcclxuICAgKiDojrflj5blvZPliY3ml7bpl7TliLDliLAxOTcwLTEtMeeahOWkqeaVsO+8iHV0Y++8iVxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXRVVENEYXRlKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gKDI0ICogNjAgKiA2MCAqIDEwMDApKVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgbW9kdWxlIG12YyB7XHJcbiAgY2xhc3MgQ29udHJvbGxlck1hbmFnZXIge1xyXG4gICAgcHJpdmF0ZSBjb250cm9sbGVycyA9IG5ldyBNYXAoKVxyXG5cclxuICAgIHB1YmxpYyByZWdpc3RlcihtdmMpIHtcclxuICAgICAgY29uc3Qga2V5ID0gbXZjLnZpZXdLZXlcclxuICAgICAgaWYgKHRoaXMuaXNFeGlzdHMoa2V5KSkgcmV0dXJuXHJcbiAgICAgIGlmIChtdmMuQ29udHJvbGxlcikge1xyXG4gICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgbXZjLkNvbnRyb2xsZXIoKVxyXG4gICAgICAgIGNvbnRyb2xsZXIuc2V0VmlldyhtdmMudmlldylcclxuICAgICAgICBpZiAobXZjLk1vZGVsKSB7XHJcbiAgICAgICAgICBjb250cm9sbGVyLnNldE1vZGVsKG5ldyBtdmMuTW9kZWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVycy5zZXQoa2V5LCBjb250cm9sbGVyKVxyXG4gICAgICAgIG12Yy52aWV3LnNldENvbnRyb2xsZXIoY29udHJvbGxlcilcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHVucmVnaXN0ZXIoY29udHJvbGxlcktleSkge1xyXG4gICAgICBpZiAoIXRoaXMuaXNFeGlzdHMoY29udHJvbGxlcktleSkpIHJldHVyblxyXG4gICAgICB0aGlzLmNvbnRyb2xsZXJzLmRlbGV0ZShjb250cm9sbGVyS2V5KVxyXG4gICAgfVxyXG4gICAgaXNFeGlzdHMoY29udHJvbGxlcktleSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb250cm9sbGVycy5oYXMoY29udHJvbGxlcktleSlcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5oyH5a6aQ29udHJvbGxlcuWvueixoVxyXG4gICAgICogQHBhcmFtICBjb250cm9sbGVyS2V5IENvbnRyb2xsZXLllK/kuIDmoIfor4ZcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIGdldENvbnRyb2xsZXIoY29udHJvbGxlcktleSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb250cm9sbGVycy5nZXQoY29udHJvbGxlcktleSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4cG9ydCBjb25zdCBjb250cm9sbGVyTWdyID0gbmV3IENvbnRyb2xsZXJNYW5hZ2VyKClcclxufVxyXG4iLCJpbXBvcnQgKiBhcyB2IGZyb20gJy4vVmlld01ncidcclxuaW1wb3J0ICogYXMgYyBmcm9tICcuL0NvbnRyb2xsZXJNYW5hZ2VyJ1xyXG4vKipcclxuICogTVZDXHJcbiAqIFtcclxuICogIHtcclxuICogICAgdmlld0tleSxcclxuICogICAgVmlldyxcclxuICogICAgdmlldyxWaWV35a6e5L6LXHJcbiAqICAgIExheWVyLFxyXG4gKiAgICBsYXllcixMYXllcuWunuS+i1xyXG4gKiAgICBldmVudCxcclxuICogICAgQ29udHJvbGxlcixcclxuICogICAgTW9kZWxcclxuICogIH1cclxuICogXVxyXG4gKi9cclxuY29uc3QgTVZDID0gW11cclxuZXhwb3J0IGNvbnN0IGZpbmRCeVZpZXdLZXkgPSB2aWV3S2V5ID0+IE1WQy5maW5kKGl0ZW0gPT4gaXRlbS52aWV3S2V5ID09PSB2aWV3S2V5KVxyXG5leHBvcnQgY29uc3QgdXBkYXRlTVZDSXRlbSA9ICh7IHZpZXdLZXksIC4uLnByb3AgfSkgPT4ge1xyXG4gIGNvbnN0IGluZGV4ID0gTVZDLmZpbmRJbmRleChpdGVtID0+IGl0ZW0udmlld0tleSA9PT0gdmlld0tleSlcclxuICBsZXQgbXZjXHJcbiAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgIGNvbnN0IGl0ZW0gPSBNVkNbaW5kZXhdXHJcbiAgICBtdmMgPSB7IC4uLml0ZW0sIC4uLnByb3AgfVxyXG4gICAgTVZDLnNwbGljZShpbmRleCwgMSwgbXZjKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBtdmMgPSB7IHZpZXdLZXksIC4uLnByb3AgfVxyXG4gICAgTVZDLnB1c2gobXZjKVxyXG4gIH1cclxuICByZXR1cm4gbXZjXHJcbn1cclxubGV0IFVJID0gTGF5YS5zdGFnZVxyXG5jb25zdCBSZWdpc3Rlck1WQyA9IChMYXllciwgQ29udHJvbGxlciA9IG51bGwsIE1vZGVsID0gbnVsbCkgPT4ge1xyXG4gIHJldHVybiBWaWV3ID0+IHtcclxuICAgIHVwZGF0ZU1WQ0l0ZW0oe1xyXG4gICAgICB2aWV3S2V5OiBWaWV3LnZpZXdLZXksXHJcbiAgICAgIExheWVyLFxyXG4gICAgICBDb250cm9sbGVyLFxyXG4gICAgICBNb2RlbCxcclxuICAgICAgVmlldyxcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbmNvbnN0IHNldFVJUm9vdCA9IHJvb3QgPT4ge1xyXG4gIFVJID0gcm9vdFxyXG59XHJcbmNvbnN0IGNvbnRyb2xsZXJNZ3IgPSBjLm12Yy5jb250cm9sbGVyTWdyXHJcbmNvbnN0IHZpZXdNZ3IgPSB2Lm12Yy52aWV3TWdyXHJcbmNvbnN0IG9wZW5WaWV3ID0gdi5tdmMub3BlblZpZXdcclxuY29uc3QgY2xvc2VWaWV3ID0gdi5tdmMuY2xvc2VWaWV3XHJcbmV4cG9ydCB7IHZpZXdNZ3IsIGNvbnRyb2xsZXJNZ3IsIG9wZW5WaWV3LCBjbG9zZVZpZXcsIFJlZ2lzdGVyTVZDLCBzZXRVSVJvb3QsIE1WQywgVUkgfVxyXG4iLCJpbXBvcnQgeyB1cGRhdGVNVkNJdGVtIH0gZnJvbSAnLi9NdmNNZ3InXHJcblxyXG5leHBvcnQgY29uc3QgQ2xpY2sgPSB1aSA9PiB7XHJcbiAgcmV0dXJuIChWaWV3LCBuYW1lLCBkZXNjcmlwdG9yKSA9PiB7XHJcbiAgICBjb25zdCBFdmVudFR5cGUgPSBMYXlhLkV2ZW50LkNMSUNLXHJcbiAgICBjb25zdCBtdmMgPSB1cGRhdGVNVkNJdGVtKHsgdmlld0tleTogVmlldy5jb25zdHJ1Y3Rvci52aWV3S2V5IH0pXHJcbiAgICBtdmMuZXZlbnQgPSBtdmMuZXZlbnQgfHwge31cclxuICAgIGNvbnN0IGV2ZW50ID0gbXZjLmV2ZW50XHJcbiAgICBldmVudFtFdmVudFR5cGVdID0gZXZlbnRbRXZlbnRUeXBlXSB8fCB7fVxyXG4gICAgY29uc3QgZXZlbnRVSSA9IGV2ZW50W0V2ZW50VHlwZV1cclxuICAgIGV2ZW50VUlbdWldID0gZXZlbnRVSVt1aV0gfHwgW11cclxuICAgIGV2ZW50VUlbdWldLnB1c2goZGVzY3JpcHRvci52YWx1ZSlcclxuXHJcbiAgICByZXR1cm4gZGVzY3JpcHRvclxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGJpbmRFdmVudCA9IG12YyA9PiB7XHJcbiAgaWYgKG12Yy5ldmVudCkge1xyXG4gICAgT2JqZWN0LmVudHJpZXMobXZjLmV2ZW50KS5mb3JFYWNoKGV2ZW50ID0+IHtcclxuICAgICAgY29uc3QgdHlwZSA9IGV2ZW50WzBdXHJcbiAgICAgIGNvbnN0IGV2ZW50VUkgPSBldmVudFsxXVxyXG4gICAgICBPYmplY3QuZW50cmllcyhldmVudFVJKS5mb3JFYWNoKGV2ZW50VUkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVpID0gZXZlbnRVSVswXVxyXG4gICAgICAgIGNvbnN0IGZ1bmMgPSBldmVudFVJWzFdXHJcbiAgICAgICAgZnVuYy5mb3JFYWNoKGZ1bmMgPT4ge1xyXG4gICAgICAgICAgbXZjLnZpZXdbdWldLm9uKHR5cGUsIG12Yy52aWV3LCBmdW5jKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJVmlldyB9IGZyb20gJy4vaW50ZXJmYWNlL0lWaWV3J1xyXG5cclxuaW1wb3J0IHsgSUxheWVyIH0gZnJvbSAnLi9pbnRlcmZhY2UvSUxheWVyJ1xyXG5cclxuaW1wb3J0IHsgTVZDLCBVSSwgY29udHJvbGxlck1nciwgZmluZEJ5Vmlld0tleSB9IGZyb20gJy4vTXZjTWdyJ1xyXG5pbXBvcnQgeyBiaW5kRXZlbnQgfSBmcm9tICcuL1VJRXZlbnQnXHJcblxyXG5leHBvcnQgbW9kdWxlIG12YyB7XHJcbiAgY2xhc3MgVmlld01nciB7XHJcbiAgICBwcml2YXRlIHZpZXdzOiBNYXA8c3RyaW5nLCBJVmlldz4gPSBuZXcgTWFwPHN0cmluZywgSVZpZXc+KClcclxuICAgIHByaXZhdGUgbGF5ZXJzOiBNYXA8c3RyaW5nLCBJTGF5ZXI+ID0gbmV3IE1hcDxzdHJpbmcsIElMYXllcj4oKVxyXG4gICAgcHJpdmF0ZSBvcGVuVmlld3M6IE1hcDxzdHJpbmcsIElWaWV3PiA9IG5ldyBNYXA8c3RyaW5nLCBJVmlldz4oKVxyXG5cclxuICAgIHB1YmxpYyBnZXRWaWV3KGtleSk6IElWaWV3IHtcclxuICAgICAgcmV0dXJuIHRoaXMudmlld3MuZ2V0KGtleSlcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRWaWV3KGtleSwgdmlldzogSVZpZXcpOiB2b2lkIHtcclxuICAgICAgdGhpcy52aWV3cy5zZXQoa2V5LCB2aWV3KVxyXG4gICAgfVxyXG4gICAgcHVibGljIGdldExheWVyKExheWVyKTogSUxheWVyIHtcclxuICAgICAgbGV0IGxheWVyID0gdGhpcy5sYXllcnMuZ2V0KExheWVyLmxheWVyS2V5KVxyXG4gICAgICBpZiAobGF5ZXIpIHJldHVybiBsYXllclxyXG4gICAgICBsYXllciA9IHRoaXMuY3JlYXRlTGF5ZXIoTGF5ZXIpXHJcbiAgICAgIHRoaXMuc2V0TGF5ZXIoTGF5ZXIubGF5ZXJLZXksIGxheWVyKVxyXG4gICAgICByZXR1cm4gbGF5ZXJcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRMYXllcihrZXksIGxheWVyOiBJTGF5ZXIpOiB2b2lkIHtcclxuICAgICAgdGhpcy5sYXllcnMuc2V0KGtleSwgbGF5ZXIpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZW5WaWV3KFZpZXcsIC4uLmFyZ3MpOiB2b2lkIHtcclxuICAgICAgbGV0IF92aWV3ID0gdGhpcy5vcGVuVmlld3MuZ2V0KFZpZXcudmlld0tleSlcclxuICAgICAgaWYgKF92aWV3KSB7XHJcbiAgICAgICAgX3ZpZXcub3BlbkNiLmFwcGx5KF92aWV3LCBhcmdzKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIF92aWV3ID0gdGhpcy5nZXRWaWV3KFZpZXcudmlld0tleSlcclxuICAgICAgaWYgKF92aWV3KSB7XHJcbiAgICAgICAgX3ZpZXcubGF5ZXIub3BlblZpZXcoX3ZpZXcsIC4uLmFyZ3MpXHJcbiAgICAgICAgdGhpcy5vcGVuVmlld3Muc2V0KFZpZXcudmlld0tleSwgX3ZpZXcpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgX3ZpZXcgPSB0aGlzLmNyZWF0ZVZpZXcoVmlldylcclxuICAgICAgX3ZpZXcubGF5ZXIub3BlblZpZXcoX3ZpZXcsIC4uLmFyZ3MpXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNyZWF0ZVZpZXcoVmlldykge1xyXG4gICAgICBjb25zdCBtdmMgPSBmaW5kQnlWaWV3S2V5KFZpZXcudmlld0tleSlcclxuICAgICAgY29uc3QgbGF5ZXIgPSB0aGlzLmdldExheWVyKG12Yy5MYXllcilcclxuXHJcbiAgICAgIGxldCBfdmlldyA9IG5ldyBtdmMuVmlldygpXHJcbiAgICAgIF92aWV3LmxheWVyID0gbGF5ZXJcclxuICAgICAgbXZjLnZpZXcgPSBfdmlld1xyXG4gICAgICBtdmMubGF5ZXIgPSBsYXllclxyXG4gICAgICBiaW5kRXZlbnQobXZjKVxyXG4gICAgICBjb250cm9sbGVyTWdyLnJlZ2lzdGVyKG12YylcclxuXHJcbiAgICAgIHRoaXMuc2V0VmlldyhtdmMudmlld0tleSwgX3ZpZXcpXHJcbiAgICAgIGlmIChfdmlldy5pbml0KSBfdmlldy5pbml0KClcclxuICAgICAgcmV0dXJuIF92aWV3XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNyZWF0ZUxheWVyKExheWVyKSB7XHJcbiAgICAgIGNvbnN0IF9sYXllciA9IG5ldyBMYXllcihVSSlcclxuICAgICAgX2xheWVyLnpPcmRlciA9IExheWVyLmxheWVyS2V5XHJcbiAgICAgIFVJLmFkZENoaWxkKF9sYXllcilcclxuICAgICAgcmV0dXJuIF9sYXllclxyXG4gICAgfVxyXG4gICAgcHVibGljIGNsb3NlVmlldyhWaWV3T3JLZXlPckluczogYW55LCAuLi5hcmdzKTogdm9pZCB7XHJcbiAgICAgIGxldCBfdmlld1xyXG4gICAgICBpZiAoVmlld09yS2V5T3JJbnMudmlld0tleSkge1xyXG4gICAgICAgIF92aWV3ID0gdGhpcy5nZXRWaWV3KFZpZXdPcktleU9ySW5zLnZpZXdLZXkpXHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5nZXRWaWV3KFZpZXdPcktleU9ySW5zKSkge1xyXG4gICAgICAgIF92aWV3ID0gdGhpcy5nZXRWaWV3KFZpZXdPcktleU9ySW5zKVxyXG4gICAgICB9IGVsc2UgaWYgKFZpZXdPcktleU9ySW5zLmNvbnN0cnVjdG9yLnZpZXdLZXkpIHtcclxuICAgICAgICBfdmlldyA9IHRoaXMuZ2V0VmlldyhWaWV3T3JLZXlPcklucy5jb25zdHJ1Y3Rvci52aWV3S2V5KVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChfdmlldykge1xyXG4gICAgICAgIF92aWV3LmxheWVyLmNsb3NlVmlldyhfdmlldywgLi4uYXJncylcclxuICAgICAgICB0aGlzLm9wZW5WaWV3cy5kZWxldGUoX3ZpZXcuY29uc3RydWN0b3Iudmlld0tleSlcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGlzT3BlbihWaWV3T3JLZXlPcklucyk6IGJvb2xlYW4ge1xyXG4gICAgICBsZXQgX3ZpZXdcclxuICAgICAgaWYgKFZpZXdPcktleU9ySW5zLnZpZXdLZXkpIHtcclxuICAgICAgICBfdmlldyA9IHRoaXMub3BlblZpZXdzLmdldChWaWV3T3JLZXlPcklucy52aWV3S2V5KVxyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3BlblZpZXdzLmdldChWaWV3T3JLZXlPcklucykpIHtcclxuICAgICAgICBfdmlldyA9IHRoaXMub3BlblZpZXdzLmdldChWaWV3T3JLZXlPcklucylcclxuICAgICAgfSBlbHNlIGlmIChWaWV3T3JLZXlPcklucy5jb25zdHJ1Y3Rvci52aWV3S2V5KSB7XHJcbiAgICAgICAgX3ZpZXcgPSB0aGlzLm9wZW5WaWV3cy5nZXQoVmlld09yS2V5T3JJbnMuY29uc3RydWN0b3Iudmlld0tleSlcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gISFfdmlld1xyXG4gICAgfVxyXG4gIH1cclxuICBleHBvcnQgY29uc3Qgdmlld01nciA9IG5ldyBWaWV3TWdyKClcclxuICBleHBvcnQgY29uc3Qgb3BlblZpZXcgPSAoVmlldywgLi4uYXJncykgPT4ge1xyXG4gICAgdmlld01nci5vcGVuVmlldyhWaWV3LCAuLi5hcmdzKVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGNvbnN0IGNsb3NlVmlldyA9IChWaWV3T3JLZXlPcklucywgLi4uYXJncykgPT4ge1xyXG4gICAgdmlld01nci5jbG9zZVZpZXcoVmlld09yS2V5T3JJbnMsIC4uLmFyZ3MpXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBCYXNlTW9kZWwgZnJvbSAnLi4vbW9kZWwvQmFzZU1vZGVsJ1xyXG5pbXBvcnQgKiBhcyB2IGZyb20gJy4uL3ZpZXcvQmFzZVZpZXcnXHJcbmltcG9ydCBCYXNlVmlldyA9IHYuS1VJLkJhc2VWaWV3XHJcbmltcG9ydCBHYW1lQXBwIGZyb20gJy4uLy4uL2dhbWUvR2FtZUFwcCdcclxuaW1wb3J0IHsgZGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uL3NlcnZpY2UvZGlzcGF0Y2hlci9EaXNwYXRjaGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUNvbnRyb2xsZXIge1xyXG4gIHByaXZhdGUgbW9kZWw6IEJhc2VNb2RlbFxyXG4gIHByaXZhdGUgdmlldzogQmFzZVZpZXdcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMubW9kZWwgPSBudWxsXHJcbiAgICB0aGlzLnZpZXcgPSBudWxsXHJcbiAgICB0aGlzLmluaXQoKVxyXG4gIH1cclxuICBwdWJsaWMgaW5pdCgpIHt9XHJcbiAgcHVibGljIHNldE1vZGVsKG1vZGVsKSB7XHJcbiAgICB0aGlzLm1vZGVsID0gbW9kZWxcclxuICB9XHJcbiAgcHVibGljIGdldE1vZGVsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubW9kZWxcclxuICB9XHJcbiAgcHVibGljIHNldFZpZXcodmlldykge1xyXG4gICAgdGhpcy52aWV3ID0gdmlld1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0VmlldygpIHtcclxuICAgIHJldHVybiB0aGlzLnZpZXdcclxuICB9XHJcblxyXG4gIC8v55uR5ZCs5LqL5Lu2XHJcbiAgcHVibGljIGFkZExpc3RlbmVyKGtleSwgY2FsbGJhY2ssIGNhbGxlcikge1xyXG4gICAgZGlzcGF0Y2hlci5PYnNlcnZlKGtleSwgY2FsbGVyLCBjYWxsYmFjaylcclxuICB9XHJcbiAgLy/np7vpmaTnm5HlkKznmoTkuovku7ZcclxuICBwdWJsaWMgcmVtb3ZlTGlzdGVuZXIoa2V5KSB7XHJcbiAgICBkaXNwYXRjaGVyLlJlbW92ZShrZXkpXHJcbiAgfVxyXG4gIC8v6Kem5Y+R5LqL5Lu2XHJcbiAgcHVibGljIGRpc3BhdGNoKGtleSwgLi4uYXJncykge1xyXG4gICAgZGlzcGF0Y2hlci5TZW5kTXNnKGtleSwgYXJncylcclxuICB9XHJcbiAgLyoqXHJcbiAgICog5rOo5YaM5LuO5pyN5Yqh5Zmo6L+U5Zue5raI5oGv55qE55uR5ZCsXHJcbiAgICogQHBhcmFtICBjbWQg5raI5oGv5qCH6K+GXHJcbiAgICogQHBhcmFtIGNhbGxiYWNrIOWkhOeQhuWHveaVsFxyXG4gICAqIEBwYXJhbSAgdGhpc09iaiDlpITnkIblh73mlbDmiYDlsZ7lr7nosaFcclxuICAgKi9cclxuICBvYnNlcnZlclNvY2tldE1zZyhjbWQsIGNhbGxiYWNrLCB0aGlzT2JqKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gY21kIOa2iOaBr+agh+ivhlxyXG4gICAqIEBwYXJhbSBtc2cg5pWw5o2uXHJcbiAgICogQHBhcmFtIGNhbGxiYWNrIOWkhOeQhuWHveaVsFxyXG4gICAqIEBwYXJhbSB0aGlzT2JqIOWkhOeQhuWHveaVsOaJgOWxnuWvueixoVxyXG4gICAqL1xyXG4gIHNlbmRTb2NrZXRNc2coY21kLCBtc2csIGNhbGxiYWNrLCB0aGlzT2JqKSB7fVxyXG5cclxuICAvKipcclxuICAgKiDlj5HpgIHmtojmga/liLBIdHRw5pyN5Yqh56uvXHJcbiAgICogQHBhcmFtICBjbWQg5raI5oGv5qCH6K+GIOS+i+WmgjogVXNlci5sb2dpblxyXG4gICAqIEBwYXJhbSAgbXNnIOa2iOaBr+WPguaVsCDkvovlpoI6IGxldCBtc2c6YW55ID0ge1widU5hbWVcIjp1TmFtZSwgXCJ1UGFzc1wiOnVQYXNzfTtcclxuICAgKi9cclxuICBzZW5kSHR0cE1zZyhjbWQsIG1zZykge31cclxuICAvL+WQkeWFtuS7luaooeWdl+mAmuiur1xyXG4gIHB1YmxpYyBzZW5kTWVzc2FnZSgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgSVZpZXcgfSBmcm9tICcuLi9pbnRlcmZhY2UvSVZpZXcnXHJcbmltcG9ydCB7IExheWVyQ29uc3QgfSBmcm9tICcuLi8uLi9jb25zdC9MYXllckNvbnN0J1xyXG5pbXBvcnQgeyBJTGF5ZXIgfSBmcm9tICcuLi9pbnRlcmZhY2UvSUxheWVyJ1xyXG5leHBvcnQgY2xhc3MgQmFzZUxheWVyIGV4dGVuZHMgTGF5YS5TcHJpdGUgaW1wbGVtZW50cyBJTGF5ZXIge1xyXG4gIHByb3RlY3RlZCBvd25TY2VuZTogTGF5YS5TY2VuZVxyXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBMYXlhLlNjZW5lKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLm93blNjZW5lID0gc2NlbmVcclxuICAgIHRoaXMud2lkdGggPSB0aGlzLm93blNjZW5lLndpZHRoXHJcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMub3duU2NlbmUuaGVpZ2h0XHJcbiAgICB0aGlzLmhpdFRlc3RQcmlvciA9IHRydWVcclxuICAgIHRoaXMubW91c2VUaHJvdWdoID0gdHJ1ZVxyXG4gICAgdGhpcy5tb3VzZUVuYWJsZWQgPSB0cnVlXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgbGF5ZXJLZXkgPSBMYXllckNvbnN0LmJhc2VcclxuICBwdWJsaWMgb3BlblZpZXcodmlldzogSVZpZXcsIC4uLmFyZ3MpOiB2b2lkIHtcclxuICAgIGlmICh2aWV3Lm9wZW5DYikge1xyXG4gICAgICB2aWV3Lm9wZW5DYi5hcHBseSh2aWV3LCBhcmdzKVxyXG4gICAgfVxyXG4gICAgdGhpcy5tb3VzZVRocm91Z2ggPSBmYWxzZVxyXG4gICAgdGhpcy5hZGRDaGlsZCh2aWV3KVxyXG4gIH1cclxuICBwdWJsaWMgY2xvc2VWaWV3KHZpZXc6IElWaWV3KTogdm9pZCB7XHJcbiAgICBpZiAodmlldy5jbG9zZUNiKSB7XHJcbiAgICAgIHZpZXcuY2xvc2VDYigpXHJcbiAgICB9XHJcbiAgICB0aGlzLnJlbW92ZUNoaWxkKHZpZXcpXHJcbiAgICB0aGlzLm1vdXNlVGhyb3VnaCA9IHRoaXMuX2NoaWxkcmVuLmxlbmd0aCA9PT0gMFxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBCYXNlTGF5ZXIgfSBmcm9tICcuL0Jhc2VMYXllcidcclxuaW1wb3J0IHsgSUxheWVyIH0gZnJvbSAnLi4vaW50ZXJmYWNlL0lMYXllcidcclxuaW1wb3J0IHsgTGF5ZXJDb25zdCB9IGZyb20gJy4uLy4uL2NvbnN0L0xheWVyQ29uc3QnXHJcbmltcG9ydCB7IGNsb3NlVmlldyB9IGZyb20gJy4uL012Y01ncidcclxuY2xhc3MgTWFzayBleHRlbmRzIExheWEuSW1hZ2Uge1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMuc2tpbiA9ICdjb21wL2JsYW5rLnBuZydcclxuICAgIHRoaXMuc2l6ZUdyaWQgPSAnMiwyLDIsMidcclxuICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIERpYWxvZ0xheWVyIGV4dGVuZHMgQmFzZUxheWVyIGltcGxlbWVudHMgSUxheWVyIHtcclxuICAvLyBwcml2YXRlIG1NYXNrXHJcbiAgY29uc3RydWN0b3Ioc2NlbmU6IExheWEuU2NlbmUpIHtcclxuICAgIHN1cGVyKHNjZW5lKVxyXG4gIH1cclxuICBzdGF0aWMgbGF5ZXJLZXkgPSBMYXllckNvbnN0LmRpYWxvZ1xyXG5cclxuICBwcml2YXRlIG1hc2tzOiBNYXA8c3RyaW5nLCBMYXlhLkltYWdlPiA9IG5ldyBNYXAoKVxyXG5cclxuICBwdWJsaWMgb3BlblZpZXcodmlldzogYW55LCAuLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgbGV0IG1hc2sgPSB0aGlzLm1hc2tzLmdldCh2aWV3LmNvbnN0cnVjdG9yLnZpZXdLZXkpXHJcbiAgICBpZiAoIW1hc2spIHtcclxuICAgICAgbWFzayA9IG5ldyBNYXNrKClcclxuICAgICAgbWFzay5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgY2xvc2VWaWV3KHZpZXcpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBtYXNrLndpZHRoID0gdGhpcy53aWR0aFxyXG4gICAgbWFzay5oZWlnaHQgPSB0aGlzLmhlaWdodFxyXG5cclxuICAgIHRoaXMubWFza3Muc2V0KHZpZXcuY29uc3RydWN0b3Iudmlld0tleSwgbWFzaylcclxuICAgIHRoaXMuYWRkQ2hpbGQobWFzaylcclxuICAgIHN1cGVyLm9wZW5WaWV3LmFwcGx5KHRoaXMsIFt2aWV3LCAuLi5hcmdzXSlcclxuXHJcbiAgICB2aWV3LmFuY2hvclggPSAwLjVcclxuICAgIHZpZXcuYW5jaG9yWSA9IDAuNVxyXG4gICAgdmlldy54ID0gdmlldy53aWR0aCAvIDJcclxuICAgIHZpZXcueSA9IHZpZXcuaGVpZ2h0IC8gMlxyXG4gICAgdmlldy5tb3VzZVRocm91Z2ggPSB0cnVlXHJcbiAgICBsZXQgdHdlZW4gPSBuZXcgTGF5YS5Ud2VlbigpXHJcbiAgICB2aWV3LnNjYWxlWCA9IDAuOFxyXG4gICAgdmlldy5zY2FsZVkgPSAwLjhcclxuICAgIHR3ZWVuLnRvKFxyXG4gICAgICB2aWV3LFxyXG4gICAgICB7IHNjYWxlWDogMS4wNSwgc2NhbGVZOiAxLjA1IH0sXHJcbiAgICAgIDEwMCxcclxuICAgICAgbnVsbCxcclxuICAgICAgbmV3IExheWEuSGFuZGxlcih0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHR3ZWVuID0gbmV3IExheWEuVHdlZW4oKVxyXG4gICAgICAgIHR3ZWVuLnRvKHZpZXcsIHsgc2NhbGVYOiAxLCBzY2FsZVk6IDEgfSwgMTAwLCBudWxsKVxyXG4gICAgICB9KSxcclxuICAgIClcclxuICB9XHJcbiAgcHVibGljIGNsb3NlVmlldyh2aWV3OiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5tYXNrcy5nZXQodmlldy5jb25zdHJ1Y3Rvci52aWV3S2V5KSlcclxuICAgIHN1cGVyLmNsb3NlVmlldyh2aWV3KVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBCYXNlTGF5ZXIgfSBmcm9tICcuL0Jhc2VMYXllcidcclxuXHJcbmltcG9ydCB7IElWaWV3IH0gZnJvbSAnLi4vaW50ZXJmYWNlL0lWaWV3J1xyXG5cclxuaW1wb3J0IHsgTGF5ZXJDb25zdCB9IGZyb20gJy4uLy4uL2NvbnN0L0xheWVyQ29uc3QnXHJcblxyXG5jb25zdCBkaXMgPSAxMDBcclxuY29uc3QgdGltZSA9IDI0MFxyXG5leHBvcnQgY2xhc3MgVmlld0xheWVyIGV4dGVuZHMgQmFzZUxheWVyIHtcclxuICBjb25zdHJ1Y3RvcihzY2VuZTogTGF5YS5TY2VuZSkge1xyXG4gICAgc3VwZXIoc2NlbmUpXHJcbiAgfVxyXG4gIHN0YXRpYyBsYXllcktleSA9IExheWVyQ29uc3Qudmlld1xyXG4gIHByaXZhdGUgb3BlblZpZXdzOiBJVmlld1tdID0gW11cclxuIFxyXG4gIHB1YmxpYyBvcGVuVmlldyh2aWV3OiBhbnksIC4uLmFyZ3MpIHtcclxuICAgIGxldCBsYXN0VmlldzogTGF5YS5TcHJpdGVcclxuICAgIGNvbnN0IHR3ZWVuMSA9IG5ldyBMYXlhLlR3ZWVuKClcclxuICAgIGlmICh0aGlzLm9wZW5WaWV3cy5sZW5ndGgpIHtcclxuICAgICAgbGFzdFZpZXcgPSB0aGlzLm9wZW5WaWV3c1t0aGlzLm9wZW5WaWV3cy5sZW5ndGggLSAxXVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGFzdFZpZXcgPSB0aGlzLm93blNjZW5lXHJcbiAgICB9XHJcbiAgICBsYXN0Vmlldy54ID0gdGhpcy5vd25TY2VuZSA9PT0gbGFzdFZpZXcgPyAwIDogZGlzXHJcbiAgICB0d2VlbjEudG8oXHJcbiAgICAgIGxhc3RWaWV3LFxyXG4gICAgICB7IHg6IHRoaXMub3duU2NlbmUgPT09IGxhc3RWaWV3ID8gLWRpcyA6IDAgfSxcclxuICAgICAgdGltZSxcclxuICAgICAgbnVsbCxcclxuICAgICAgbmV3IExheWEuSGFuZGxlcihsYXN0VmlldywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChsYXN0VmlldyAhPT0gdGhpcy5vd25TY2VuZSkgbGFzdFZpZXcucmVtb3ZlU2VsZigpXHJcbiAgICAgIH0pLFxyXG4gICAgKVxyXG4gICAgdGhpcy5vcGVuVmlld3MucHVzaCh2aWV3KVxyXG4gICAgc3VwZXIub3BlblZpZXcuYXBwbHkodGhpcywgW3ZpZXcsIC4uLmFyZ3NdKVxyXG4gICAgY29uc3QgdHdlZW4yID0gbmV3IExheWEuVHdlZW4oKVxyXG4gICAgdmlldy54ID0gdGhpcy53aWR0aFxyXG4gICAgdHdlZW4yLnRvKFxyXG4gICAgICB2aWV3LFxyXG4gICAgICB7IHg6IGRpcyB9LFxyXG4gICAgICB0aW1lLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBuZXcgTGF5YS5IYW5kbGVyKHZpZXcsICgpID0+IHtcclxuICAgICAgICBpZiAodmlldy5hZnRlck9wZW4pIHtcclxuICAgICAgICAgIHZpZXcuYWZ0ZXJPcGVuLmNhbGwodmlldylcclxuICAgICAgICB9XHJcbiAgICAgIH0pLFxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb3NlVmlldyh2aWV3OiBhbnkpIHtcclxuICAgIGxldCBsYXN0Vmlld1xyXG4gICAgY29uc3QgdHdlZW4xID0gbmV3IExheWEuVHdlZW4oKVxyXG4gICAgdGhpcy5vcGVuVmlld3MucG9wKClcclxuICAgIGlmICh0aGlzLm9wZW5WaWV3cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxhc3RWaWV3ID0gdGhpcy5vcGVuVmlld3NbdGhpcy5vcGVuVmlld3MubGVuZ3RoIC0gMV1cclxuICAgICAgbGFzdFZpZXcuek9yZGVyID0gdmlldy56T3JkZXIgLSAxXHJcbiAgICAgIGxhc3RWaWV3LmxheWVyLmFkZENoaWxkKGxhc3RWaWV3KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGFzdFZpZXcgPSB0aGlzLm93blNjZW5lXHJcbiAgICB9XHJcblxyXG4gICAgbGFzdFZpZXcueCA9IGxhc3RWaWV3ID09PSB0aGlzLm93blNjZW5lID8gLWRpcyA6IDBcclxuXHJcbiAgICB0d2VlbjEudG8obGFzdFZpZXcsIHsgeDogbGFzdFZpZXcgPT09IHRoaXMub3duU2NlbmUgPyAwIDogZGlzIH0sIHRpbWUpXHJcbiAgICBjb25zdCB0d2VlbjIgPSBuZXcgTGF5YS5Ud2VlbigpXHJcbiAgICB2aWV3LnggPSBkaXNcclxuICAgIHR3ZWVuMi50byhcclxuICAgICAgdmlldyxcclxuICAgICAgeyB4OiB0aGlzLndpZHRoIH0sXHJcbiAgICAgIHRpbWUsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG5ldyBMYXlhLkhhbmRsZXIodGhpcywgKCkgPT4ge1xyXG4gICAgICAgIHN1cGVyLmNsb3NlVmlldyh2aWV3KVxyXG4gICAgICB9KSxcclxuICAgIClcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZU1vZGVse1xyXG4gICAgXHJcbn0iLCJpbXBvcnQgQmFzZUNvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlci9CYXNlQ29udHJvbGxlcidcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgS1VJIHtcclxuICBleHBvcnQgY2xhc3MgQmFzZVZpZXcgZXh0ZW5kcyBMYXlhLlZpZXcge1xyXG4gICAgcHVibGljIGNvbnRyb2xsZXI6IEJhc2VDb250cm9sbGVyXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgc3VwZXIoKVxyXG4gICAgfVxyXG4gICAgcHVibGljIHNldENvbnRyb2xsZXIoY3RybCkge1xyXG4gICAgICB0aGlzLmNvbnRyb2xsZXIgPSBjdHJsXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaW5pdCgpIHtcclxuICAgICAgdGhpcy5pbml0RGF0YSgpXHJcbiAgICAgIHRoaXMuaW5pdFJlcygpXHJcbiAgICAgIHRoaXMuaW5pdFZpZXcoKVxyXG4gICAgfVxyXG4gICAgcHVibGljIGluaXREYXRhKCkge31cclxuICAgIHB1YmxpYyBpbml0UmVzKCkge31cclxuICAgIHB1YmxpYyBpbml0VmlldygpIHt9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IERpc3BhdGNoZXIgfSBmcm9tICcuL2Rpc3BhdGNoZXIvRGlzcGF0Y2hlcidcclxuXHJcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlIHtcclxuICBwdWJsaWMgc3RhdGljIEluaXQoKTogdm9pZCB7XHJcblxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZGlzcGF0Y2hlcigpOiBEaXNwYXRjaGVyIHtcclxuICAgIHJldHVybiBEaXNwYXRjaGVyLkNyZWF0ZU9yR2V0KClcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE9ic2VydmVyIH0gZnJvbSAnLi9PYnNlcnZlcidcclxuaW1wb3J0IHsgU2luZ2xldG9uIH0gZnJvbSAnLi4vLi4vYmFzZS9TaW5nbGV0b24nXHJcbmV4cG9ydCBjbGFzcyBEaXNwYXRjaGVyIGV4dGVuZHMgU2luZ2xldG9uIHtcclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLl9vYnNlcnZlcnMgPSB7fVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5raI5oGv5YiX6KGoXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXJzOiBhbnlcclxuXHJcbiAgcHVibGljIE9ic2VydmUodG9waWNfOiBhbnksIG9ic2VydmVyXzogYW55LCBoYW5kbGVyXzogRnVuY3Rpb24pOiBPYnNlcnZlciB7XHJcbiAgICBpZiAoIXRoaXMuX29ic2VydmVyc1t0b3BpY19dKSB0aGlzLl9vYnNlcnZlcnNbdG9waWNfXSA9IFtdXHJcbiAgICBsZXQgb2JzZXJ2ZXI6IE9ic2VydmVyID0gbmV3IE9ic2VydmVyKHRvcGljXywgb2JzZXJ2ZXJfLCBoYW5kbGVyXylcclxuICAgIHRoaXMuX29ic2VydmVyc1t0b3BpY19dLnB1c2gob2JzZXJ2ZXIpXHJcbiAgICByZXR1cm4gb2JzZXJ2ZXIuUmV1c2UodG9waWNfLCBvYnNlcnZlcl8sIGhhbmRsZXJfKVxyXG4gIH1cclxuXHJcbiAgcHVibGljIE9ic2VydmVMaXN0KG9ic2VydmVyXzogYW55LCB0b3BpY3NfOiBhbnlbXSwgaGFuZGxlcnNfOiBhbnlbXSk6IE9ic2VydmVyW10ge1xyXG4gICAgbGV0IGxpc3Q6IE9ic2VydmVyW10gPSBbXVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3BpY3NfLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxpc3QucHVzaCh0aGlzLk9ic2VydmUodG9waWNzX1tpXSwgb2JzZXJ2ZXJfLCBoYW5kbGVyc19baV0pKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxpc3RcclxuICB9XHJcblxyXG4gIHB1YmxpYyBSZW1vdmVMaXN0KG9iczogT2JzZXJ2ZXJbXSk6IHZvaWQge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGhpcy5SZW1vdmUob2JzW2ldKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIFNlbmRNc2codG9waWNfOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55W10ge1xyXG4gICAgaWYgKCF0aGlzLl9vYnNlcnZlcnNbdG9waWNfXSkge1xyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGxldCByZXQ6IGFueVtdID0gW11cclxuICAgIHRoaXMuX29ic2VydmVyc1t0b3BpY19dLmZvckVhY2goXHJcbiAgICAgIChlbGVtZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgcmV0LnB1c2goZWxlbWVudC5SZWN2TXNnKC4uLmFyZ3MpKVxyXG4gICAgICB9LFxyXG4gICAgKVxyXG4gICAgcmV0dXJuIHJldFxyXG4gIH1cclxuXHJcbiAgcHVibGljIFJlbW92ZShvYnM6IE9ic2VydmVyKTogT2JzZXJ2ZXIge1xyXG4gICAgaWYgKG9icyA9PSBudWxsKSByZXR1cm5cclxuICAgIGxldCBhcnI6IGFueVtdID0gdGhpcy5fb2JzZXJ2ZXJzW29icy50b3BpY11cclxuXHJcbiAgICBpZiAoIWFycikgcmV0dXJuIG51bGxcclxuXHJcbiAgICBsZXQgaW5kOiBudW1iZXIgPSBhcnIuaW5kZXhPZihvYnMpXHJcbiAgICBpZiAoaW5kIDwgMCkgcmV0dXJuIG51bGxcclxuXHJcbiAgICBhcnIuc3BsaWNlKGluZCwgMSlcclxuICAgIHJldHVybiBvYnNcclxuICB9XHJcblxyXG4gIHB1YmxpYyBSZW1vdmVBbGwodG9waWM6IGFueSk6IHZvaWQge1xyXG4gICAgbGV0IGFycjogYW55W10gPSB0aGlzLl9vYnNlcnZlcnNbdG9waWNdXHJcbiAgICBpZiAoIWFycikgcmV0dXJuXHJcbiAgICBhcnIuc3BsaWNlKDAsIGFyci5sZW5ndGgpXHJcbiAgfVxyXG59XHJcbmNvbnN0IGRpc3BhdGNoZXIgPSBuZXcgRGlzcGF0Y2hlcigpXHJcbmV4cG9ydCB7IGRpc3BhdGNoZXIgfVxyXG4iLCJleHBvcnQgY2xhc3MgT2JzZXJ2ZXIge1xyXG4gIHB1YmxpYyB0b3BpYzogYW55XHJcbiAgcHVibGljIG9ic2VydmVyOiBhbnlcclxuICBwdWJsaWMgaGFuZGxlcjogRnVuY3Rpb25cclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRvcGljXzogYW55LCBvYnNlcnZlcl86IGFueSwgaGFuZGxlcl86IEZ1bmN0aW9uKSB7XHJcbiAgICB0aGlzLlJldXNlKHRvcGljXywgb2JzZXJ2ZXJfLCBoYW5kbGVyXylcclxuICB9XHJcblxyXG4gIHB1YmxpYyBSZXVzZSh0b3BpY186IGFueSwgb2JzZXJ2ZXJfOiBhbnksIGhhbmRsZXJfOiBGdW5jdGlvbik6IE9ic2VydmVyIHtcclxuICAgIHRoaXMudG9waWMgPSB0b3BpY19cclxuICAgIHRoaXMub2JzZXJ2ZXIgPSBvYnNlcnZlcl9cclxuICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXJfXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxuXHJcbiAgcHVibGljIFJlY3ZNc2coLi4uYXJnczogYW55W10pOiB2b2lkIHtcclxuICAgIGxldCByZXQ6IGFueVxyXG4gICAgaWYgKCF0aGlzLm9ic2VydmVyKSB7XHJcbiAgICAgIHJldCA9IHRoaXMuaGFuZGxlciguLi5hcmdzKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0ID0gdGhpcy5oYW5kbGVyLmFwcGx5KHRoaXMub2JzZXJ2ZXIsIGFyZ3MpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHVpIH0gZnJvbSAnLi4vLi4vLi4vLi4vdWkvbGF5YU1heFVJJ1xyXG5pbXBvcnQgQlBhZ2UgZnJvbSAnLi4vQlBhZ2UvQlBhZ2UnXHJcbmltcG9ydCB7IFZpZXdDb25zdCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvY29uc3QvVmlld0NvbnN0J1xyXG5pbXBvcnQgeyBCYXNlTGF5ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL212Yy9sYXllci9CYXNlTGF5ZXInXHJcbmltcG9ydCB7IFJlZ2lzdGVyTVZDLCBvcGVuVmlldyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvbXZjL012Y01ncidcclxuaW1wb3J0IEFQYWdlQ29udHJvbGxlciBmcm9tICcuL0FQYWdlQ29udHJvbGxlcidcclxuaW1wb3J0IEFQYWdlTW9kZWwgZnJvbSAnLi9BcGFnZU1vZGVsJ1xyXG5pbXBvcnQgQmFzZVRlc3QgZnJvbSAnLi4vQmFzZVRlc3QnXHJcbkBSZWdpc3Rlck1WQyhCYXNlTGF5ZXIsIEFQYWdlQ29udHJvbGxlciwgQVBhZ2VNb2RlbClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVBhZ2UgZXh0ZW5kcyB1aS52aWV3LkFQYWdlVUkge1xyXG4gIHN0YXRpYyB2aWV3S2V5ID0gVmlld0NvbnN0LkFQYWdlXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLmJ0bi5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgIG9wZW5WaWV3KEJQYWdlKVxyXG4gICAgfSlcclxuICAgIHRoaXMuYmFzZUJ0bi5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgIG9wZW5WaWV3KEJhc2VUZXN0KVxyXG4gICAgfSlcclxuICB9XHJcbiAgcHVibGljIGluaXQoKSB7XHJcbiAgICB0aGlzLmNvbnRyb2xsZXIuYWRkTGlzdGVuZXIoXHJcbiAgICAgICdjaGFuZ2UnLFxyXG4gICAgICBhcmdzID0+IHtcclxuICAgICAgICB0aGlzLmNvbnRlbnRzLnRleHQgPSBhcmdzWzBdXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcylcclxuICAgICAgfSxcclxuICAgICAgdGhpcyxcclxuICAgIClcclxuICB9XHJcbiAgcHVibGljIG9wZW5DYihhcmdzKSB7XHJcbiAgICB2YXIgaHRtbCA9IFwiPHNwYW4gc3R5bGU9J2ZvbnRTaXplOjMwJyBjb2xvcj0nIzY3ZmMyYyc+5a+M5paH5pysPC9zcGFuPlwiXHJcbiAgICBodG1sICs9IFwiPGltZyBzdHlsZT0naGVpZ2h0OjUwO3dpZHRoOjUwJyBzcmM9J0NoYXJhY3RlcnMvVGFua180LnBuZyc+PC9pbWc+XCJcclxuICAgIGh0bWwgKz0gXCI8c3BhbiBzdHlsZT0nZm9udFNpemU6MjAnIGNvbG9yPScjZmZmJz7mtYvor5U8L3NwYW4+XCJcclxudGhpcy5kZC5wb3MoMCwwKVxyXG4gICAgdGhpcy5kZC5zdHlsZS53aWR0aD02NDBcclxuICAgIHRoaXMuZGQuc3R5bGUuYWxpZ249J2NlbnRlcidcclxuXHJcbiAgICB0aGlzLmRkLmlubmVySFRNTCA9IGh0bWxcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuZGQpXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBCYXNlQ29udHJvbGxlciBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL212Yy9jb250cm9sbGVyL0Jhc2VDb250cm9sbGVyJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBUGFnZUNvbnRyb2xsZXIgZXh0ZW5kcyBCYXNlQ29udHJvbGxlciB7XHJcbiAgLyoqXHJcbiAgICpcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuICB9XHJcbiAgcHVibGljIGluaXQoKSB7XHJcbiAgICBzdXBlci5pbml0KClcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCBCYXNlTW9kZWwgZnJvbSBcIi4uLy4uLy4uLy4uL2NvcmUvbXZjL21vZGVsL0Jhc2VNb2RlbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVBhZ2VNb2RlbCBleHRlbmRzIEJhc2VNb2RlbHtcclxuICAgIFxyXG59IiwiaW1wb3J0IEFQYWdlIGZyb20gXCIuL0FQYWdlXCI7XHJcbmltcG9ydCBHYW1lQXBwIGZyb20gXCIuLi8uLi8uLi8uLi9jb3JlL2dhbWUvR2FtZUFwcFwiO1xyXG5pbXBvcnQgRWZmZWN0VXRpbHMgZnJvbSBcIi4uLy4uLy4uLy4uL2NvcmUvVXRpbHMvRWZmZWN0VXRpbHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3QgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbiAgICAvLyAvKiogQHByb3Age25hbWU6aW50VHlwZSwgdGlwczpcIuaVtOaVsOexu+Wei+ekuuS+i1wiLCB0eXBlOkludCwgZGVmYXVsdDoxMDAwfSovXHJcbiAgICAvLyBwdWJsaWMgaW50VHlwZTogbnVtYmVyID0gMTAwMDtcclxuICAgIC8vIC8qKiBAcHJvcCB7bmFtZTpudW1UeXBlLCB0aXBzOlwi5pWw5a2X57G75Z6L56S65L6LXCIsIHR5cGU6TnVtYmVyLCBkZWZhdWx0OjEwMDB9Ki9cclxuICAgIC8vIHB1YmxpYyBudW1UeXBlOiBudW1iZXIgPSAxMDAwO1xyXG4gICAgLy8gLyoqIEBwcm9wIHtuYW1lOnN0clR5cGUsIHRpcHM6XCLlrZfnrKbkuLLnsbvlnovnpLrkvotcIiwgdHlwZTpTdHJpbmcsIGRlZmF1bHQ6XCJoZWxsbyBsYXlhXCJ9Ki9cclxuICAgIC8vIHB1YmxpYyBzdHJUeXBlOiBzdHJpbmcgPSBcImhlbGxvIGxheWFcIjtcclxuICAgIC8vIC8qKiBAcHJvcCB7bmFtZTpib29sVHlwZSwgdGlwczpcIuW4g+WwlOexu+Wei+ekuuS+i1wiLCB0eXBlOkJvb2wsIGRlZmF1bHQ6dHJ1ZX0qL1xyXG4gICAgLy8gcHVibGljIGJvb2xUeXBlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIC8vIOabtOWkmuWPguaVsOivtOaYjuivt+iuv+mXrjogaHR0cHM6Ly9sZGMyLmxheWFib3guY29tL2RvYy8/bmF2PXpoLWFzLTItNC0wXHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpOyB9XHJcbiAgICBvbkF3YWtlKCl7XHJcbiAgICAgICAgdGhpcy5vd25lci5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsKCk9PntcclxuICAgICAgICBFZmZlY3RVdGlscy5tYWNJY29uU2hha2UodGhpcy5vd25lciwodGhpcy5vd25lciBhcyBMYXlhLlNwcml0ZSkueSwoKT0+e2NvbnNvbGUubG9nKDEpfSx0aGlzIClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCk6IHZvaWQge1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgdWkgfSBmcm9tICcuLi8uLi8uLi8uLi91aS9sYXlhTWF4VUknXHJcbmltcG9ydCB7IFZpZXdDb25zdCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvY29uc3QvVmlld0NvbnN0J1xyXG5pbXBvcnQgeyBEaWFsb2dMYXllciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvbXZjL2xheWVyL0RpYWxvZ0xheWVyJ1xyXG5pbXBvcnQgQlBhZ2VDb250cm9sbGVyIGZyb20gJy4vQlBhZ2VDb250cm9sbGVyJ1xyXG5pbXBvcnQgQlBhZ2VNb2RlbCBmcm9tICcuL0JQYWdlTW9kZWwnXHJcbmltcG9ydCB7IFJlZ2lzdGVyTVZDLCBjbG9zZVZpZXcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL212Yy9NdmNNZ3InXHJcbkBSZWdpc3Rlck1WQyhEaWFsb2dMYXllciwgQlBhZ2VDb250cm9sbGVyLCBCUGFnZU1vZGVsKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCUGFnZSBleHRlbmRzIHVpLnZpZXcuQlBhZ2VVSSB7XHJcbiAgc3RhdGljIHZpZXdLZXkgPSBWaWV3Q29uc3QuQlBhZ2VcclxuIFxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gIH1cclxuICBwdWJsaWMgaW5pdCgpIHtcclxuICAgIHRoaXMuY2xvc2VfYnRuLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcclxuICAgICAgY2xvc2VWaWV3KHRoaXMpXHJcbiAgICB9KVxyXG4gICAgdGhpcy5jaGFuZ2Uub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCkgPT4ge1xyXG4gICAgICB0aGlzLmNvbnRyb2xsZXIuZGlzcGF0Y2goJ2NoYW5nZScsIFsnI2VlMzMyMSddKVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEJhc2VDb250cm9sbGVyIGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvbXZjL2NvbnRyb2xsZXIvQmFzZUNvbnRyb2xsZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCUGFnZUNvbnRyb2xsZXIgZXh0ZW5kcyBCYXNlQ29udHJvbGxlciB7XHJcbiAgLyoqXHJcbiAgICpcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuICB9XHJcbiAgcHVibGljIGluaXQoKSB7XHJcbiAgICBzdXBlci5pbml0KClcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEJhc2VNb2RlbCBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL212Yy9tb2RlbC9CYXNlTW9kZWwnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCUGFnZU1vZGVsIGV4dGVuZHMgQmFzZU1vZGVsIHtcclxuICBwdWJsaWMgY29sb3I6IHN0cmluZ1xyXG59XHJcbiIsImltcG9ydCB7IHVpIH0gZnJvbSAnLi4vLi4vLi4vdWkvbGF5YU1heFVJJ1xyXG5pbXBvcnQgeyBJVmlldyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvbXZjL2ludGVyZmFjZS9JVmlldydcclxuaW1wb3J0IHsgVmlld0NvbnN0IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9jb25zdC9WaWV3Q29uc3QnXHJcbmltcG9ydCB7IEJhc2VMYXllciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvbXZjL2xheWVyL0Jhc2VMYXllcidcclxuaW1wb3J0IERpYWxvZ1Rlc3QgZnJvbSAnLi9EaWFsb2dUZXN0J1xyXG5pbXBvcnQgVmlld1Rlc3QgZnJvbSAnLi9WaWV3VGVzdCdcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9Mb2FkaW5nJ1xyXG5pbXBvcnQgeyBSZWdpc3Rlck1WQywgb3BlblZpZXcsIGNsb3NlVmlldyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvbXZjL012Y01ncidcclxuaW1wb3J0IHsgQ2xpY2sgfSBmcm9tICcuLi8uLi8uLi9jb3JlL212Yy9VSUV2ZW50J1xyXG5pbXBvcnQgR2FtZUFwcCBmcm9tICcuLi8uLi8uLi9jb3JlL2dhbWUvR2FtZUFwcCdcclxuQFJlZ2lzdGVyTVZDKEJhc2VMYXllcilcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZVRlc3QgZXh0ZW5kcyB1aS52aWV3LkJhc2VUZXN0VUkgaW1wbGVtZW50cyBJVmlldyB7XHJcbiAgc3RhdGljIHZpZXdLZXkgPSBWaWV3Q29uc3QuQmFzZVRlc3RcclxuICBwdWJsaWMgbW92ZVkgPSBmYWxzZVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy50aW1lckxvb3AoNTAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMudGFuay5pbmRleCA9IHRoaXMudGFuay5pbmRleCA9PT0gNyA/IDQgOiB0aGlzLnRhbmsuaW5kZXggKyAxXHJcbiAgICB9KVxyXG4gICAgdGhpcy50aW1lckxvb3AoMjUwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLm1vdmVZKSB7XHJcbiAgICAgICAgdGhpcy50YW5rLmNlbnRlclkgKz0gMVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGFuay5jZW50ZXJZIC09IDFcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm1vdmVZID0gIXRoaXMubW92ZVlcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5kaWFsb2dCdG4ub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCkgPT4ge30pXHJcbiAgICB0aGlzLnZpZXdCdG4ub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCkgPT4ge1xyXG4gICAgICBvcGVuVmlldyhWaWV3VGVzdCwgMSwgMilcclxuICAgIH0pXHJcbiAgICB0aGlzLmxvYWRpbmdCdG4ub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCkgPT4ge1xyXG4gICAgICBvcGVuVmlldyhMb2FkaW5nLCAxLCAyLCAzKVxyXG4gICAgfSlcclxuICAgIHRoaXMuY2xvc2VCdG4ub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCkgPT4ge1xyXG4gICAgICBjbG9zZVZpZXcodGhpcylcclxuICAgIH0pXHJcbiAgfVxyXG4gIEBDbGljaygnZGlhbG9nQnRuJylcclxuICBAQ2xpY2soJ2xvYWRpbmdCdG4nKVxyXG4gIHByaXZhdGUgYXN5bmMgdG9kbzEodHlwZSkge1xyXG4gICAgY29uc29sZS5sb2coYXdhaXQgR2FtZUFwcC5mZXRjaC5wb3N0KCdnZXQnLCB7IGE6IFsxLCAyXSwgYzogJ2hhaGFoYWhhJyB9KSlcclxuICB9XHJcbiAgcHVibGljIG9wZW5DYigpIHtcclxuICAgIGNvbnNvbGUubG9nKCdCYXNlVGVzdCBvcGVuJylcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgdWkgfSBmcm9tICcuLi8uLi8uLi91aS9sYXlhTWF4VUknXHJcbmltcG9ydCB7IElWaWV3IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvaW50ZXJmYWNlL0lWaWV3J1xyXG5pbXBvcnQgeyBWaWV3Q29uc3QgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2NvbnN0L1ZpZXdDb25zdCdcclxuaW1wb3J0IHsgQmFzZUxheWVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvbGF5ZXIvQmFzZUxheWVyJ1xyXG5pbXBvcnQgeyBSZWdpc3Rlck1WQywgY2xvc2VWaWV3IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvTXZjTWdyJ1xyXG5AUmVnaXN0ZXJNVkMoQmFzZUxheWVyKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgdWkudmlldy5Mb2FkaW5nVUkgaW1wbGVtZW50cyBJVmlldyB7XHJcbiAgc3RhdGljIHZpZXdLZXkgPSBWaWV3Q29uc3QuTG9hZGluZ1xyXG4gIHB1YmxpYyBtb3ZlWSA9IGZhbHNlXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnRpbWVyTG9vcCg1MDAsIHRoaXMsICgpID0+IHtcclxuICAgICAgdGhpcy50YW5rLmluZGV4ID0gdGhpcy50YW5rLmluZGV4ID09PSA3ID8gNCA6IHRoaXMudGFuay5pbmRleCArIDFcclxuICAgIH0pXHJcbiAgICB0aGlzLnRpbWVyTG9vcCgyNTAsIHRoaXMsICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMubW92ZVkpIHtcclxuICAgICAgICB0aGlzLnRhbmsuY2VudGVyWSArPSAxXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50YW5rLmNlbnRlclkgLT0gMVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubW92ZVkgPSAhdGhpcy5tb3ZlWVxyXG4gICAgfSlcclxuICAgIHRoaXMuYnRuX2Nsb3NlLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcclxuICAgICAgY2xvc2VWaWV3KHRoaXMpXHJcbiAgICB9KVxyXG4gIH1cclxuICBwdWJsaWMgb3BlbkNiKC4uLmFyZ3MpIHtcclxuICAgIGNvbnNvbGUubG9nKCdMb2FkaW5nIG9wZW4nLCBhcmdzKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyB1aSB9IGZyb20gJy4uLy4uLy4uL3VpL2xheWFNYXhVSSdcclxuaW1wb3J0IHsgSVZpZXcgfSBmcm9tICcuLi8uLi8uLi9jb3JlL212Yy9pbnRlcmZhY2UvSVZpZXcnXHJcbmltcG9ydCB7IFZpZXdDb25zdCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvY29uc3QvVmlld0NvbnN0J1xyXG5pbXBvcnQgeyBWaWV3TGF5ZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL212Yy9sYXllci9WaWV3TGF5ZXInXHJcbmltcG9ydCBWaWV3VGVzdDEgZnJvbSAnLi9WaWV3VGVzdDEnXHJcbmltcG9ydCB7IFJlZ2lzdGVyTVZDLCBjbG9zZVZpZXcsIG9wZW5WaWV3IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvTXZjTWdyJ1xyXG5AUmVnaXN0ZXJNVkMoVmlld0xheWVyKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3VGVzdCBleHRlbmRzIHVpLnZpZXcuVmlld1Rlc3RVSSBpbXBsZW1lbnRzIElWaWV3IHtcclxuICBzdGF0aWMgdmlld0tleSA9IFZpZXdDb25zdC5WaWV3VGVzdFxyXG4gIHB1YmxpYyBtb3ZlWSA9IGZhbHNlXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcblxyXG4gICAgdGhpcy50aW1lckxvb3AoNTAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMudGFuay5pbmRleCA9IHRoaXMudGFuay5pbmRleCA9PT0gNyA/IDQgOiB0aGlzLnRhbmsuaW5kZXggKyAxXHJcbiAgICB9KVxyXG4gICAgdGhpcy50aW1lckxvb3AoMjUwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLm1vdmVZKSB7XHJcbiAgICAgICAgdGhpcy50YW5rLmNlbnRlclkgKz0gMVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGFuay5jZW50ZXJZIC09IDFcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm1vdmVZID0gIXRoaXMubW92ZVlcclxuICAgIH0pXHJcbiAgICB0aGlzLmNsb3NlQnRuLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcclxuICAgICAgY2xvc2VWaWV3KHRoaXMpXHJcbiAgICB9KVxyXG4gICAgdGhpcy52aWV3QnRuLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcclxuICAgICAgb3BlblZpZXcoVmlld1Rlc3QxKVxyXG4gICAgfSlcclxuICB9XHJcbiAgcHVibGljIG9wZW5DYigpIHtcclxuICAgIGNvbnNvbGUubG9nKCdWaWV3VGVzdCBvcGVuJylcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgdWkgfSBmcm9tICcuLi8uLi8uLi91aS9sYXlhTWF4VUknXHJcbmltcG9ydCB7IElWaWV3IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvaW50ZXJmYWNlL0lWaWV3J1xyXG5pbXBvcnQgeyBWaWV3Q29uc3QgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2NvbnN0L1ZpZXdDb25zdCdcclxuaW1wb3J0IHsgVmlld0xheWVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvbGF5ZXIvVmlld0xheWVyJ1xyXG5pbXBvcnQgeyBSZWdpc3Rlck1WQywgY2xvc2VWaWV3IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvTXZjTWdyJ1xyXG5AUmVnaXN0ZXJNVkMoVmlld0xheWVyKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3VGVzdDEgZXh0ZW5kcyB1aS52aWV3LlZpZXdUZXN0MVVJIGltcGxlbWVudHMgSVZpZXcge1xyXG4gIHN0YXRpYyB2aWV3S2V5ID0gVmlld0NvbnN0LlZpZXdUZXN0MVxyXG4gIHB1YmxpYyBtb3ZlWSA9IGZhbHNlXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcblxyXG4gICAgdGhpcy50aW1lckxvb3AoNTAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMudGFuay5pbmRleCA9IHRoaXMudGFuay5pbmRleCA9PT0gNyA/IDQgOiB0aGlzLnRhbmsuaW5kZXggKyAxXHJcbiAgICB9KVxyXG4gICAgdGhpcy50aW1lckxvb3AoMjUwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLm1vdmVZKSB7XHJcbiAgICAgICAgdGhpcy50YW5rLmNlbnRlclkgKz0gMVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGFuay5jZW50ZXJZIC09IDFcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm1vdmVZID0gIXRoaXMubW92ZVlcclxuICAgIH0pXHJcbiAgICB0aGlzLmNsb3NlQnRuLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcclxuICAgICAgY2xvc2VWaWV3KHRoaXMpXHJcbiAgICB9KVxyXG4gIH1cclxuICBwdWJsaWMgb3BlbkNiKCkge1xyXG4gICAgY29uc29sZS5sb2coJ1ZpZXdUZXN0IG9wZW4nKVxyXG4gIH1cclxufVxyXG4iLCJlbnVtIEh0dHBNZXRob2Qge1xyXG4gIGdldCA9ICdHRVQnLFxyXG4gIHBvc3QgPSAnUE9TVCcsXHJcbn1cclxuZXhwb3J0IGNsYXNzIEZldGNoIHtcclxuICBwcml2YXRlIGJhc2VVcmwgPSAnJ1xyXG4gIHByaXZhdGUgY29udGVudFR5cGUgPSAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04J1xyXG4gIHN0YXRpYyBmZXRjaE1hcCA9IG5ldyBNYXAoKVxyXG4gIGNvbnN0cnVjdG9yKHsgdXJsIH0pIHtcclxuICAgIHRoaXMuYmFzZVVybCA9IHVybFxyXG4gIH1cclxuICBwdWJsaWMgc3RhdGljIGluaXQoa2V5LCB7IHVybCB9KSB7XHJcbiAgICBsZXQgZmV0Y2ggPSB0aGlzLmZldGNoTWFwLmdldChrZXkpXHJcbiAgICBpZiAoIWZldGNoKSB7XHJcbiAgICAgIGZldGNoID0gbmV3IEZldGNoKHsgdXJsIH0pXHJcbiAgICAgIHRoaXMuZmV0Y2hNYXAuc2V0KGtleSwgZmV0Y2gpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmV0Y2hcclxuICB9XHJcbiAgcHJpdmF0ZSBhc3luYyBzZW5kKGFwaTogc3RyaW5nLCB7IGJvZHksIG1ldGhvZCB9KSB7XHJcbiAgICBsZXQgdXJsID0gdGhpcy5iYXNlVXJsICsgYXBpXHJcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogdGhpcy5jb250ZW50VHlwZSxcclxuICAgIH0pXHJcbiAgICBsZXQgcmVzOiBSZXNwb25zZVxyXG4gICAgc3dpdGNoIChtZXRob2QpIHtcclxuICAgICAgY2FzZSBIdHRwTWV0aG9kLmdldDpcclxuICAgICAgICBpZiAoYm9keSkge1xyXG4gICAgICAgICAgdXJsICs9XHJcbiAgICAgICAgICAgICc/JyArXHJcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGJvZHkpXHJcbiAgICAgICAgICAgICAgLm1hcChpdGVtID0+IGl0ZW0uam9pbignPScpKVxyXG4gICAgICAgICAgICAgIC5qb2luKCcmJylcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzID0gYXdhaXQgZmV0Y2godXJsLCB7IGhlYWRlcnMsIG1ldGhvZCB9KVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGNhc2UgSHR0cE1ldGhvZC5wb3N0OlxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJlcyA9IGF3YWl0IGZldGNoKHVybCwgeyBib2R5LCBoZWFkZXJzLCBtZXRob2QgfSlcclxuICAgICAgICBicmVha1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMucmVzSGFuZGxlKHJlcylcclxuICB9XHJcbiAgcHVibGljIGFzeW5jIGdldChhcGk6IHN0cmluZywgcGFyYW1zOiBhbnkgPSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiB0aGlzLnNlbmQoYXBpLCB7IGJvZHk6IHBhcmFtcywgbWV0aG9kOiBIdHRwTWV0aG9kLmdldCB9KVxyXG4gIH1cclxuICBwdWJsaWMgYXN5bmMgcG9zdChhcGk6IHN0cmluZywgYm9keTogYW55ID0gdW5kZWZpbmVkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZW5kKGFwaSwgeyBib2R5OiBib2R5ID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiB1bmRlZmluZWQsIG1ldGhvZDogSHR0cE1ldGhvZC5wb3N0IH0pXHJcbiAgfVxyXG4gIHByaXZhdGUgcmVzSGFuZGxlKHJlczogUmVzcG9uc2UpIHtcclxuICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKVxyXG4gICAgaWYgKGNvbnRlbnRUeXBlKSB7XHJcbiAgICAgIGlmIChjb250ZW50VHlwZS5pbmRleE9mKCdqc29uJykgPiAtMSkge1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbigpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXMudGV4dCgpXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNpbmdsZXRvbiB9IGZyb20gJy4uL2NvcmUvYmFzZS9TaW5nbGV0b24nXHJcbmltcG9ydCB7IE9ic2VydmVyIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlL2Rpc3BhdGNoZXIvT2JzZXJ2ZXInXHJcbmltcG9ydCAqIGFzIGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnXHJcbi8qXHJcbiAgIHNvY2tldC5pbml0KC4uLilcclxuICAgc29ja2V0LmNvbm5lY3QoKVxyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb2NrZXQgZXh0ZW5kcyBTaW5nbGV0b24ge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy5vYnNlcnZlcnMgPSB7fVxyXG4gIH1cclxuICBwcml2YXRlIG5vbmNlPTFcclxuICBwcml2YXRlIGlwQWRkcmVzc1xyXG4gIHByaXZhdGUgc29ja2V0OiBhbnlcclxuICBwcml2YXRlIG9ic2VydmVyczogYW55XHJcbiAgcHJpdmF0ZSB0aW1lU3RhbXBcclxuICAvL2hhbmRsZXItLS0tXHJcbiAgcHJpdmF0ZSBjb25uZWN0U3VjY2Vzc0NhbGxiYWNrXHJcbiAgcHJpdmF0ZSBjb25uZWN0RmFpbGVkQ2FsbGJhY2tcclxuICBwcml2YXRlIGhlYXJ0YmVhdEZhaWxlZENhbGxiYWNrXHJcbiAgcHJpdmF0ZSBldmVudCA9ICdtZXNzYWdlJ1xyXG4gIHB1YmxpYyBpbml0KGlwLCBzdWNjZXNzQ2FsbGJhY2ssIGZhaWxlZENhbGxiYWNrLCBoZWFydGJlYXRGYWlsZWRDYWxsYmFjaykge1xyXG4gICAgdGhpcy5pcEFkZHJlc3MgPSBpcFxyXG4gICAgdGhpcy5jb25uZWN0U3VjY2Vzc0NhbGxiYWNrID0gc3VjY2Vzc0NhbGxiYWNrXHJcbiAgICB0aGlzLmNvbm5lY3RGYWlsZWRDYWxsYmFjayA9IGZhaWxlZENhbGxiYWNrXHJcbiAgICB0aGlzLmhlYXJ0YmVhdEZhaWxlZENhbGxiYWNrID0gaGVhcnRiZWF0RmFpbGVkQ2FsbGJhY2tcclxuICB9XHJcbiAgcHVibGljIGNvbm5lY3QoKSB7XHJcbiAgICB0aGlzLnNvY2tldCA9IGlvKHRoaXMuaXBBZGRyZXNzKVxyXG4gICAgdGhpcy5zb2NrZXQub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMudGltZVN0YW1wID0gRGF0ZS5ub3coKVxyXG4gICAgICBjb25zb2xlLmxvZygnd2Vic29ja2V0IGNvbm5lY3QuLi4nKVxyXG4gICAgICB0aGlzLmNvbm5lY3RTdWNjZXNzKClcclxuICAgIH0pXHJcbiAgICB0aGlzLnNvY2tldC5vbih0aGlzLmV2ZW50LCBkYXRhID0+IHtcclxuICAgICAgdGhpcy50aW1lU3RhbXAgPSBEYXRlLm5vdygpXHJcbiAgICAgIGRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKVxyXG4gICAgICB0aGlzLnJlY2VpdmVNZXNzYWdlKEpTT04ucGFyc2UoZGF0YSkpXHJcbiAgICB9KVxyXG4gICAgdGhpcy5zb2NrZXQub24oJ2Rpc2Nvbm5lY3QnLCB0aGlzLm9uRGlzY29ubmVjdClcclxuICB9XHJcbiAgcHVibGljIGRpc2Nvbm5lY3QoKSB7XHJcbiAgICB0aGlzLnNvY2tldC5kaXNjb25uZWN0KClcclxuICB9XHJcbiAgcHJpdmF0ZSBvbkRpc2Nvbm5lY3QoKSB7XHJcbiAgICBpZiAodGhpcy5jb25uZWN0RmFpbGVkQ2FsbGJhY2spIHRoaXMuY29ubmVjdEZhaWxlZENhbGxiYWNrKClcclxuICB9XHJcbiAgcHJpdmF0ZSBjb25uZWN0U3VjY2VzcygpIHtcclxuICAgIGlmICh0aGlzLmNvbm5lY3RTdWNjZXNzQ2FsbGJhY2spIHRoaXMuY29ubmVjdFN1Y2Nlc3NDYWxsYmFjaygpXHJcbiAgICB0aGlzLnNlbmQoJ2xvZ2luJywge30sICdDMlNfbG9naW4nKVxyXG4gICAgdGhpcy5zdGFydEhlYXJ0QmVhdCgpXHJcbiAgfVxyXG4gIHByaXZhdGUgc3RhcnRIZWFydEJlYXQoKSB7XHJcbiAgICBMYXlhLnRpbWVyLmxvb3AoNTAwMCwgdGhpcywgKCkgPT4ge1xyXG4gICAgICB0aGlzLnNlbmRIZWFydEJlYXQoKVxyXG4gICAgfSlcclxuICB9XHJcbiAgcHJpdmF0ZSBzZW5kSGVhcnRCZWF0KCkge1xyXG4gICAgdmFyIHYgPSBEYXRlLm5vdygpIC0gdGhpcy50aW1lU3RhbXBcclxuXHJcbiAgICBpZiAodiA+PSAzMDAwMCkge1xyXG4gICAgICBpZiAodGhpcy5oZWFydGJlYXRGYWlsZWRDYWxsYmFjaykgdGhpcy5oZWFydGJlYXRGYWlsZWRDYWxsYmFjaygpXHJcbiAgICB9XHJcbiAgICB0aGlzLnNlbmQoJ2hlYXJ0YmVhdCcsIHt9LCAnQzJTX2hlYXJ0YmVhdCcpXHJcbiAgfVxyXG4gIHByaXZhdGUgcmVjZWl2ZU1lc3NhZ2UoZGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coZGF0YS5oZWFkZXJzLm5vbmNlKVxyXG4gICAgaWYgKGRhdGEuaGVhZGVycy5ub25jZSAmJiBkYXRhLmhlYWRlcnMubm9uY2Uuc3RhcnRzV2l0aCgnUzJDXycpKSB7XHJcbiAgICAgIGZvciAobGV0IGsgaW4gdGhpcy5vYnNlcnZlcnMpIHtcclxuICAgICAgICBpZiAoZGF0YS5oZWFkZXJzLmZ1bmNfbmFtZSA9PSBrKSB7XHJcbiAgICAgICAgICB0aGlzLm9ic2VydmVyc1trXS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LlJlY3ZNc2coZGF0YSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKGxldCBrIGluIHRoaXMub2JzZXJ2ZXJzKSB7XHJcbiAgICAgICAgaWYgKGRhdGEuaGVhZGVycy5ub25jZSA9PSBrKSB7XHJcbiAgICAgICAgICB0aGlzLm9ic2VydmVyc1trXS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LlJlY3ZNc2coZGF0YSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBkZWxldGUgdGhpcy5vYnNlcnZlcnNba11cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcHVibGljIHNlbmRNZXNzYWdlKGZ1bmNOYW1lLCBvYnNlcnZlciwgZGF0YSwgY2FsbGJhY2sgPSBudWxsKSB7XHJcbiAgICB2YXIgbm9uY2UgPSAnQzJTXycgKyBmdW5jTmFtZSArIHRoaXMubm9uY2UrK1xyXG4gICAgaWYgKCF0aGlzLm9ic2VydmVyc1tub25jZV0pIHRoaXMub2JzZXJ2ZXJzW25vbmNlXSA9IFtdXHJcbiAgICB0aGlzLm9ic2VydmVyc1tub25jZV0ucHVzaChuZXcgT2JzZXJ2ZXIobm9uY2UsIG9ic2VydmVyLCBjYWxsYmFjaykpXHJcbiAgICB0aGlzLnNlbmQoZnVuY05hbWUsIGRhdGEsIG5vbmNlKVxyXG4gIH1cclxuICBwdWJsaWMgb2JzZXJ2ZXJNZXNzYWdlKGZ1bmNOYW1lLCBvYnNlcnZlciwgY2FsbGJhY2sgPSBudWxsKSB7XHJcbiAgICB2YXIga2V5ID0gZnVuY05hbWVcclxuICAgIGlmICghdGhpcy5vYnNlcnZlcnNba2V5XSkgdGhpcy5vYnNlcnZlcnNba2V5XSA9IFtdXHJcbiAgICB2YXIgb2JzID0gbmV3IE9ic2VydmVyKGtleSwgb2JzZXJ2ZXIsIGNhbGxiYWNrKVxyXG4gICAgdGhpcy5vYnNlcnZlcnNba2V5XS5wdXNoKG9icylcclxuICAgIHJldHVybiBvYnNcclxuICB9XHJcbiAgcHVibGljIHJlbW92ZShvYnM6IE9ic2VydmVyKSB7XHJcbiAgICBpZiAob2JzID09IG51bGwpIHJldHVyblxyXG4gICAgbGV0IGFyciA9IHRoaXMub2JzZXJ2ZXJzW29icy50b3BpY11cclxuICAgIGlmICghYXJyKSByZXR1cm4gbnVsbFxyXG4gICAgbGV0IGluZDogbnVtYmVyID0gYXJyLmluZGV4T2Yob2JzKVxyXG4gICAgaWYgKGluZCA8IDApIHJldHVybiBudWxsXHJcbiAgICBhcnIuc3BsaWNlKGluZCwgMSlcclxuICAgIGlmIChhcnIubGVuZ3RoID09IDApIGRlbGV0ZSB0aGlzLm9ic2VydmVyc1tvYnMudG9waWNdXHJcbiAgICByZXR1cm4gb2JzXHJcbiAgfVxyXG4gIHByaXZhdGUgc2VuZChmdW5jTmFtZSwgZGF0YSwgbm9uY2UpIHtcclxuICAgIHZhciBwYXJhbSA9IHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIHVpZDogJ2hlanVuamllJyxcclxuICAgICAgICBmdW5jX25hbWU6IGZ1bmNOYW1lLFxyXG4gICAgICAgIG5vbmNlOiBub25jZSxcclxuICAgICAgfSxcclxuICAgICAgcGFyYW1zOiBkYXRhLFxyXG4gICAgfVxyXG4gICAgdGhpcy50aW1lU3RhbXAgPSBEYXRlLm5vdygpXHJcbiAgICB0aGlzLnNvY2tldC5lbWl0KHRoaXMuZXZlbnQsIEpTT04uc3RyaW5naWZ5KHBhcmFtKSlcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2luZ2xldG9uIH0gZnJvbSAnLi4vLi4vY29yZS9iYXNlL1NpbmdsZXRvbidcclxuaW1wb3J0IE5ldFJlcXVlc3QgZnJvbSAnLi9OZXRSZXF1ZXN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU5ldCBleHRlbmRzIFNpbmdsZXRvbiB7XHJcbiAgcHJpdmF0ZSBzZXJ2ZXJVcmw6IHN0cmluZ1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gIH1cclxuICBwdWJsaWMgaW5pdFNlcnZlcih1cmw6IHN0cmluZykge1xyXG4gICAgdGhpcy5zZXJ2ZXJVcmwgPSB1cmxcclxuICB9XHJcbiAgcHVibGljIHNlbmQoYXBpOiBzdHJpbmcsIGJvZHlWYXJpYWJsZXM6IGFueSA9IG51bGwsIHVybFZhcmlhYmxlczogYW55ID0gJycsIG1ldGhvZDogc3RyaW5nID0gJ3Bvc3QnLCByZXNwb25zZVR5cGU6IHN0cmluZyA9ICdqc29uJywgaGVhZGVyPzogYW55W10pIHtcclxuICAgIHRoaXMuc2VuZEJ5VXJsKHRoaXMuc2VydmVyVXJsLCBhcGksIGJvZHlWYXJpYWJsZXMsIHVybFZhcmlhYmxlcywgbWV0aG9kLCByZXNwb25zZVR5cGUsIGhlYWRlcilcclxuICB9XHJcbiAgcHVibGljIHNlbmRQcm9taXNlKGFwaTogc3RyaW5nLCBib2R5VmFyaWFibGVzOiBhbnkgPSBudWxsLCB1cmxWYXJpYWJsZXM6IGFueSA9ICcnLCBtZXRob2Q6IHN0cmluZyA9ICdwb3N0JywgcmVzcG9uc2VUeXBlOiBzdHJpbmcgPSAnanNvbicsIGhlYWRlcj86IGFueVtdKSB7XHJcbiAgICB0aGlzLnNlbmRQcm9taXNlQnlVcmwodGhpcy5zZXJ2ZXJVcmwsIGFwaSwgYm9keVZhcmlhYmxlcywgdXJsVmFyaWFibGVzLCBtZXRob2QsIHJlc3BvbnNlVHlwZSwgaGVhZGVyKVxyXG4gIH1cclxuICBwdWJsaWMgc2VuZEJ5VXJsKHVybDogc3RyaW5nLCBhcGk6IHN0cmluZywgYm9keVZhcmlhYmxlczogYW55ID0gbnVsbCwgdXJsVmFyaWFibGVzOiBhbnkgPSAnJywgbWV0aG9kOiBzdHJpbmcgPSAncG9zdCcsIHJlc3BvbnNlVHlwZTogc3RyaW5nID0gJ2pzb24nLCBoZWFkZXI/OiBhbnlbXSkge1xyXG4gICAgbGV0IHJlcSA9IE5ldFJlcXVlc3QuQ3JlYXRlKGFwaSwgdXJsICsgYXBpICsgdXJsVmFyaWFibGVzLCBib2R5VmFyaWFibGVzLCBtZXRob2QsIHJlc3BvbnNlVHlwZSwgaGVhZGVyKVxyXG4gICAgcmVxLlNlbmQoKVxyXG4gIH1cclxuICBwdWJsaWMgYXN5bmMgc2VuZFByb21pc2VCeVVybCh1cmw6IHN0cmluZywgYXBpOiBzdHJpbmcsIGJvZHlWYXJpYWJsZXM6IGFueSA9IG51bGwsIHVybFZhcmlhYmxlczogYW55ID0gJycsIG1ldGhvZDogc3RyaW5nID0gJ3Bvc3QnLCByZXNwb25zZVR5cGU6IHN0cmluZyA9ICdqc29uJywgaGVhZGVyPzogYW55W10pIHtcclxuICAgIGxldCByZXEgPSBOZXRSZXF1ZXN0LkNyZWF0ZShhcGksIHVybCArIGFwaSArIHVybFZhcmlhYmxlcywgYm9keVZhcmlhYmxlcywgbWV0aG9kLCByZXNwb25zZVR5cGUsIGhlYWRlcilcclxuICAgIGNvbnN0IGdldCA9IGF3YWl0IHJlcS5TZW5kUHJvbWlzZSgpXHJcbiAgICByZXR1cm4gZ2V0XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBHYW1lQXBwIGZyb20gJy4uLy4uL2NvcmUvZ2FtZS9HYW1lQXBwJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV0UmVxdWVzdCB7XHJcbiAgcHJpdmF0ZSByZXE6IGxheWEubmV0Lkh0dHBSZXF1ZXN0XHJcbiAgcHJpdmF0ZSB1cmw6IHN0cmluZ1xyXG4gIHByaXZhdGUgZGF0YTogYW55XHJcbiAgcHJpdmF0ZSBtZXRob2Q6IHN0cmluZ1xyXG4gIHByaXZhdGUgcmVzcG9uc2VUeXBlOiBzdHJpbmdcclxuICBwcml2YXRlIGhlYWRlcnM6IGFueVtdXHJcbiAgcHJpdmF0ZSBhcGlQYXRoOiBzdHJpbmdcclxuICBwcml2YXRlIG1lc3NhZ2VLZXk6IGFueVxyXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XHJcbiAgICBsZXQgcmVxID0gbmV3IGxheWEubmV0Lkh0dHBSZXF1ZXN0KClcclxuICAgIHRoaXMucmVxID0gcmVxXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIENyZWF0ZShhcGlQYXRoOiBzdHJpbmcsIHVybDogc3RyaW5nLCBkYXRhPzogYW55LCBtZXRob2Q/OiBzdHJpbmcsIHJlc3BvbnNlVHlwZT86IHN0cmluZywgaGVhZGVycz86IGFueVtdLCBtZXNzYWdlS2V5Pyk6IE5ldFJlcXVlc3Qge1xyXG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgTmV0UmVxdWVzdCgpXHJcbiAgICByZXF1ZXN0LnVybCA9IHVybFxyXG4gICAgcmVxdWVzdC5kYXRhID0gZGF0YVxyXG4gICAgcmVxdWVzdC5tZXRob2QgPSBtZXRob2RcclxuICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gcmVzcG9uc2VUeXBlXHJcbiAgICByZXF1ZXN0LmhlYWRlcnMgPSBoZWFkZXJzXHJcbiAgICByZXF1ZXN0LmFwaVBhdGggPSBhcGlQYXRoXHJcbiAgICByZXF1ZXN0Lm1lc3NhZ2VLZXkgPSBtZXNzYWdlS2V5XHJcbiAgICByZXR1cm4gcmVxdWVzdFxyXG4gIH1cclxuICBwdWJsaWMgU2VuZCgpIHtcclxuICAgIGxldCByZXEgPSB0aGlzLnJlcVxyXG4gICAgbGV0IHVybCA9IHRoaXMudXJsXHJcbiAgICBsZXQgZGF0YSA9IHRoaXMuZGF0YVxyXG4gICAgbGV0IG1ldGhvZCA9IHRoaXMubWV0aG9kXHJcbiAgICBsZXQgcmVzcG9uc2VUeXBlID0gdGhpcy5yZXNwb25zZVR5cGVcclxuICAgIGxldCBoZWFkZXJzID0gdGhpcy5oZWFkZXJzIHx8IFsnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nXVxyXG4gICAgcmVxLm9uY2UobGF5YS5ldmVudHMuRXZlbnQuQ09NUExFVEUsIHRoaXMsIHRoaXMuY29tcGxldGVIYW5kbGVyKVxyXG4gICAgcmVxLm9uY2UobGF5YS5ldmVudHMuRXZlbnQuRVJST1IsIHRoaXMsIHRoaXMuZXJyb3JIYW5kbGVyKVxyXG4gICAgcmVxLnNlbmQodXJsLCBkYXRhLCBtZXRob2QsIHJlc3BvbnNlVHlwZSwgaGVhZGVycylcclxuICB9XHJcbiAgcHVibGljIGFzeW5jIFNlbmRQcm9taXNlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICBsZXQgcmVxID0gdGhpcy5yZXFcclxuICAgIGxldCB1cmwgPSB0aGlzLnVybFxyXG4gICAgbGV0IGRhdGEgPSB0aGlzLmRhdGFcclxuICAgIGxldCBtZXRob2QgPSB0aGlzLm1ldGhvZFxyXG4gICAgbGV0IHJlc3BvbnNlVHlwZSA9IHRoaXMucmVzcG9uc2VUeXBlXHJcbiAgICBsZXQgaGVhZGVycyA9IHRoaXMuaGVhZGVycyB8fCBbJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJ11cclxuICAgIGxldCBfcG9zdCA9IGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICBsZXQgX3Jlc29sdmUgPSBmdW5jdGlvbihvYmo6IGFueSkge1xyXG4gICAgICAgIHJlc29sdmUob2JqKVxyXG4gICAgICB9XHJcbiAgICAgIHJlcS5vbmNlKGxheWEuZXZlbnRzLkV2ZW50LkNPTVBMRVRFLCB0aGlzLCBfcmVzb2x2ZSlcclxuICAgICAgcmVxLm9uY2UobGF5YS5ldmVudHMuRXZlbnQuRVJST1IsIHRoaXMsIF9yZXNvbHZlKVxyXG4gICAgICByZXEuc2VuZCh1cmwsIGRhdGEsIG1ldGhvZCwgcmVzcG9uc2VUeXBlLCBoZWFkZXJzKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oX3Bvc3QpXHJcbiAgfVxyXG4gIHByaXZhdGUgY29tcGxldGVIYW5kbGVyKGRhdGE6IGFueSkge1xyXG4gICAgaWYgKHRoaXMubWVzc2FnZUtleSkge1xyXG4gICAgICBHYW1lQXBwLmRpc3BhdGNoZXIuU2VuZE1zZyh0aGlzLm1lc3NhZ2VLZXksIGRhdGEpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHByaXZhdGUgZXJyb3JIYW5kbGVyKGU6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcih0aGlzLm1lc3NhZ2VLZXksIGUpXHJcbiAgfVxyXG4gIHByaXZhdGUgcHJvY2Vzc0hhbmRsZXIoZGF0YTogYW55KSB7fVxyXG59XHJcbiIsImltcG9ydCB7IHVpIH0gZnJvbSAnLi4vdWkvbGF5YU1heFVJJ1xyXG5pbXBvcnQgQVBhZ2UgZnJvbSAnLi4vZ2FtZS91aS92aWV3L0FQYWdlL0FQYWdlJ1xyXG5pbXBvcnQgeyBzZXRVSVJvb3QsIG9wZW5WaWV3IH0gZnJvbSAnLi4vY29yZS9tdmMvTXZjTWdyJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluU2NlbmUgZXh0ZW5kcyB1aS5zY2VuZS5NYWluU2NlbmVVSSB7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgLy8gR2FtZUFwcC5pbml0KHRoaXMpXHJcbiAgICBjb25zdCBVSSA9IG5ldyBMYXlhLlNwcml0ZSgpXHJcbiAgICBVSS5uYW1lID0gJ1VJJ1xyXG4gICAgVUkud2lkdGggPSBMYXlhLnN0YWdlLndpZHRoXHJcbiAgICBVSS5oZWlnaHQgPSBMYXlhLnN0YWdlLmhlaWdodFxyXG4gICAgTGF5YS5zdGFnZS5hZGRDaGlsZChVSSlcclxuICAgIHNldFVJUm9vdChVSSlcclxuXHJcbiAgICBvcGVuVmlldyhBUGFnZSx7YToxLGI6Mn0pXHJcbiAgfVxyXG4gIG9uT3BlbmVkKCkge31cclxufVxyXG4iLCIvKipUaGlzIGNsYXNzIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IExheWFBaXJJREUsIHBsZWFzZSBkbyBub3QgbWFrZSBhbnkgbW9kaWZpY2F0aW9ucy4gKi9cbmltcG9ydCBWaWV3PUxheWEuVmlldztcclxuaW1wb3J0IERpYWxvZz1MYXlhLkRpYWxvZztcclxuaW1wb3J0IFNjZW5lPUxheWEuU2NlbmU7XHJcbmltcG9ydCAqIGFzIHYgZnJvbSBcIi4uL2NvcmUvbXZjL3ZpZXcvQmFzZVZpZXdcIjtcclxuaW1wb3J0IEJhc2VWaWV3ID12LktVSS5CYXNlVmlld1xudmFyIFJFRzogRnVuY3Rpb24gPSBMYXlhLkNsYXNzVXRpbHMucmVnQ2xhc3M7XG5leHBvcnQgbW9kdWxlIHVpLnNjZW5lIHtcclxuICAgIGV4cG9ydCBjbGFzcyBNYWluU2NlbmVVSSBleHRlbmRzIFNjZW5lIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFNjZW5lKFwic2NlbmUvTWFpblNjZW5lXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFJFRyhcInVpLnNjZW5lLk1haW5TY2VuZVVJXCIsTWFpblNjZW5lVUkpO1xyXG59XHJcbmV4cG9ydCBtb2R1bGUgdWkudmlldyB7XHJcbiAgICBleHBvcnQgY2xhc3MgQVBhZ2VVSSBleHRlbmRzIEJhc2VWaWV3IHtcclxuXHRcdHB1YmxpYyBidG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIGRkOmxheWEuaHRtbC5kb20uSFRNTERpdkVsZW1lbnQ7XG5cdFx0cHVibGljIGJhc2VCdG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIGNvbnRlbnRzOkxheWEuTGFiZWw7XG4gICAgICAgIHB1YmxpYyBzdGF0aWMgIHVpVmlldzphbnkgPXtcInR5cGVcIjpcIkJhc2VWaWV3XCIsXCJwcm9wc1wiOntcIndpZHRoXCI6NjQwLFwiaGVpZ2h0XCI6MTEzNn0sXCJjb21wSWRcIjoyLFwiY2hpbGRcIjpbe1widHlwZVwiOlwiUmVjdFwiLFwicHJvcHNcIjp7XCJ3aWR0aFwiOjY0MCxcIm5hbWVcIjpcInJcIixcImxpbmVXaWR0aFwiOjEsXCJoZWlnaHRcIjoxMTM2LFwiZmlsbENvbG9yXCI6XCIjZmJiYmJiXCJ9LFwiY29tcElkXCI6N30se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjo1NTUsXCJ4XCI6MjA4LFwid2lkdGhcIjoyMDAsXCJ2YXJcIjpcImJ0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiR29UbyBCUGFnZVwiLFwiaGVpZ2h0XCI6NTB9LFwiY29tcElkXCI6OH0se1widHlwZVwiOlwiSFRNTERpdkVsZW1lbnRcIixcInByb3BzXCI6e1wieVwiOjAsXCJ4XCI6MCxcIndpZHRoXCI6NjQ0LFwidmFyXCI6XCJkZFwiLFwiaW5uZXJIVE1MXCI6XCI8YnIvPjxzcGFuPiAg5rWL6K+V5rC05bmz5bGF5Lit5a+56b2QPC9zcGFuPlwiLFwiaGVpZ2h0XCI6MjY1LFwicnVudGltZVwiOlwibGF5YS5odG1sLmRvbS5IVE1MRGl2RWxlbWVudFwifSxcImNvbXBJZFwiOjIwfSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjY2OSxcInhcIjoyMDgsXCJ3aWR0aFwiOjIwMCxcInZhclwiOlwiYmFzZUJ0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiR29UbyBCYXNlXCIsXCJoZWlnaHRcIjo1MH0sXCJjb21wSWRcIjoxNSxcImNoaWxkXCI6W3tcInR5cGVcIjpcIkxhYmVsXCIsXCJwcm9wc1wiOntcInlcIjotNjI3LFwieFwiOjE5MCxcIndpZHRoXCI6MjAxLFwidmFyXCI6XCJjb250ZW50c1wiLFwidmFsaWduXCI6XCJtaWRkbGVcIixcInRleHRcIjpcInNzc3NcIixcImhlaWdodFwiOjUwMCxcImZvbnRTaXplXCI6NDAsXCJhbGlnblwiOlwiY2VudGVyXCJ9LFwiY29tcElkXCI6MTR9XX0se1widHlwZVwiOlwiTGFiZWxcIixcInByb3BzXCI6e1wieVwiOjEyMSxcInhcIjoyNzUuNSxcIndpZHRoXCI6NjMsXCJ2YWxpZ25cIjpcIm1pZGRsZVwiLFwidGV4dFwiOlwibGFiZWxcIixcImhlaWdodFwiOjIyLFwiYWxpZ25cIjpcImNlbnRlclwifSxcImNvbXBJZFwiOjI1fSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjEzMixcInhcIjo0MjYsXCJwcmVzZXRJRFwiOjEsXCJ3aWR0aFwiOjE5MixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcIuaMiemSruiEmuacrFwiLFwiaXNQcmVzZXRSb290XCI6dHJ1ZSxcImhlaWdodFwiOjkwfSxcImNvbXBJZFwiOjMxLFwiY2hpbGRcIjpbe1widHlwZVwiOlwiU2NyaXB0XCIsXCJwcm9wc1wiOntcInByZXNldElEXCI6MixcInlcIjoxLFwieFwiOjAsXCJydW50aW1lXCI6XCJnYW1lL3VpL3ZpZXcvQVBhZ2UvVGVzdC50c1wifSxcImNvbXBJZFwiOjMyfV19XSxcImxvYWRMaXN0XCI6W1wiY29tcC9idXR0b24ucG5nXCIsXCJwcmVmYWIvQnV0dG9uLnByZWZhYlwiXSxcImxvYWRMaXN0M0RcIjpbXX07XHJcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVZpZXcoQVBhZ2VVSS51aVZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFJFRyhcInVpLnZpZXcuQVBhZ2VVSVwiLEFQYWdlVUkpO1xyXG4gICAgZXhwb3J0IGNsYXNzIEJhc2VUZXN0VUkgZXh0ZW5kcyBWaWV3IHtcclxuXHRcdHB1YmxpYyB0YW5rOkxheWEuQ2xpcDtcblx0XHRwdWJsaWMgY2xvc2VCdG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIGRpYWxvZ0J0bjpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgbG9hZGluZ0J0bjpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgdmlld0J0bjpMYXlhLkJ1dHRvbjtcbiAgICAgICAgcHVibGljIHN0YXRpYyAgdWlWaWV3OmFueSA9e1widHlwZVwiOlwiVmlld1wiLFwicHJvcHNcIjp7XCJ3aWR0aFwiOjY0MCxcImhlaWdodFwiOjExMzZ9LFwiY29tcElkXCI6MixcImNoaWxkXCI6W3tcInR5cGVcIjpcIkltYWdlXCIsXCJwcm9wc1wiOntcInlcIjowLFwieFwiOjAsXCJ0b3BcIjowLFwic2tpblwiOlwiY29tcC9pbWFnZS5wbmdcIixcInJpZ2h0XCI6MCxcImxlZnRcIjowLFwiYm90dG9tXCI6MH0sXCJjb21wSWRcIjo4fSx7XCJ0eXBlXCI6XCJDbGlwXCIsXCJwcm9wc1wiOntcInlcIjowLFwieFwiOjAsXCJ2YXJcIjpcInRhbmtcIixcInNraW5cIjpcIkNoYXJhY3RlcnMvVGFua184LnBuZ1wiLFwiaW5kZXhcIjo0LFwiY2xpcFlcIjo0LFwiY2xpcFhcIjo0LFwiY2VudGVyWVwiOi0xLFwiY2VudGVyWFwiOjB9LFwiY29tcElkXCI6M30se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjozMjcsXCJ4XCI6MjgyLFwidmFyXCI6XCJjbG9zZUJ0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiY2xvc2VcIn0sXCJjb21wSWRcIjo0fSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjI1MixcInhcIjo0NzIsXCJ2YXJcIjpcImRpYWxvZ0J0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiZGlhbG9nXCJ9LFwiY29tcElkXCI6NX0se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjozMDQsXCJ4XCI6NDcyLFwidmFyXCI6XCJsb2FkaW5nQnRuXCIsXCJza2luXCI6XCJjb21wL2J1dHRvbi5wbmdcIixcImxhYmVsXCI6XCJiYXNlXCJ9LFwiY29tcElkXCI6Nn0se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjozNjIsXCJ4XCI6NDcyLFwidmFyXCI6XCJ2aWV3QnRuXCIsXCJza2luXCI6XCJjb21wL2J1dHRvbi5wbmdcIixcImxhYmVsXCI6XCJ2aWV3XCJ9LFwiY29tcElkXCI6N31dLFwibG9hZExpc3RcIjpbXCJjb21wL2ltYWdlLnBuZ1wiLFwiQ2hhcmFjdGVycy9UYW5rXzgucG5nXCIsXCJjb21wL2J1dHRvbi5wbmdcIl0sXCJsb2FkTGlzdDNEXCI6W119O1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVWaWV3KEJhc2VUZXN0VUkudWlWaWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSRUcoXCJ1aS52aWV3LkJhc2VUZXN0VUlcIixCYXNlVGVzdFVJKTtcclxuICAgIGV4cG9ydCBjbGFzcyBCUGFnZVVJIGV4dGVuZHMgQmFzZVZpZXcge1xyXG5cdFx0cHVibGljIGNoYW5nZTpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgY2xvc2VfYnRuOkxheWEuQnV0dG9uO1xuICAgICAgICBwdWJsaWMgc3RhdGljICB1aVZpZXc6YW55ID17XCJ0eXBlXCI6XCJCYXNlVmlld1wiLFwicHJvcHNcIjp7XCJ3aWR0aFwiOjMwMCxcImhlaWdodFwiOjExMzZ9LFwiY29tcElkXCI6MixcImNoaWxkXCI6W3tcInR5cGVcIjpcIlJlY3RcIixcInByb3BzXCI6e1wid2lkdGhcIjozMDAsXCJsaW5lV2lkdGhcIjoxLFwiaGVpZ2h0XCI6MTEzNixcImZpbGxDb2xvclwiOlwiI2NkZjlhNFwifSxcImNvbXBJZFwiOjN9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6NTM0LFwieFwiOjU5LFwid2lkdGhcIjoyMDAsXCJ2YXJcIjpcImNoYW5nZVwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiQ2hhbmdlQVBhZ2VcIixcImhlaWdodFwiOjUwfSxcImNvbXBJZFwiOjR9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6NjQ0LFwieFwiOjU5LFwid2lkdGhcIjoyMDAsXCJ2YXJcIjpcImNsb3NlX2J0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiQ2xvc2VcIixcImhlaWdodFwiOjUwfSxcImNvbXBJZFwiOjV9XSxcImxvYWRMaXN0XCI6W1wiY29tcC9idXR0b24ucG5nXCJdLFwibG9hZExpc3QzRFwiOltdfTtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVmlldyhCUGFnZVVJLnVpVmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUkVHKFwidWkudmlldy5CUGFnZVVJXCIsQlBhZ2VVSSk7XHJcbiAgICBleHBvcnQgY2xhc3MgRGlhbG9nVGVzdFVJIGV4dGVuZHMgVmlldyB7XHJcblx0XHRwdWJsaWMgYm94OkxheWEuQm94O1xuXHRcdHB1YmxpYyB0YW5rOkxheWEuQ2xpcDtcblx0XHRwdWJsaWMgY2xvc2VCdG46TGF5YS5CdXR0b247XG4gICAgICAgIHB1YmxpYyBzdGF0aWMgIHVpVmlldzphbnkgPXtcInR5cGVcIjpcIlZpZXdcIixcInByb3BzXCI6e1wid2lkdGhcIjo2NDAsXCJoZWlnaHRcIjoxMTM2fSxcImNvbXBJZFwiOjIsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJCb3hcIixcInByb3BzXCI6e1wid2lkdGhcIjoyMDAsXCJ2YXJcIjpcImJveFwiLFwiaGVpZ2h0XCI6MjAwLFwiY2VudGVyWVwiOjAsXCJjZW50ZXJYXCI6MH0sXCJjb21wSWRcIjo5LFwiY2hpbGRcIjpbe1widHlwZVwiOlwiSW1hZ2VcIixcInByb3BzXCI6e1widG9wXCI6MCxcInNraW5cIjpcImNvbXAvaW1hZ2UucG5nXCIsXCJyaWdodFwiOjAsXCJsZWZ0XCI6MCxcImJvdHRvbVwiOjB9LFwiY29tcElkXCI6MTB9LHtcInR5cGVcIjpcIkNsaXBcIixcInByb3BzXCI6e1wieVwiOjU1MCxcInhcIjozMDMsXCJ2YXJcIjpcInRhbmtcIixcInNraW5cIjpcIkNoYXJhY3RlcnMvVGFua183LnBuZ1wiLFwiaW5kZXhcIjo0LFwiY2xpcFlcIjo0LFwiY2xpcFhcIjo0LFwiY2VudGVyWVwiOi0xLFwiY2VudGVyWFwiOjB9LFwiY29tcElkXCI6M30se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjozOSxcInhcIjo2Mi41LFwidmFyXCI6XCJjbG9zZUJ0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiY2xvc2VcIn0sXCJjb21wSWRcIjo0fV19XSxcImxvYWRMaXN0XCI6W1wiY29tcC9pbWFnZS5wbmdcIixcIkNoYXJhY3RlcnMvVGFua183LnBuZ1wiLFwiY29tcC9idXR0b24ucG5nXCJdLFwibG9hZExpc3QzRFwiOltdfTtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVmlldyhEaWFsb2dUZXN0VUkudWlWaWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSRUcoXCJ1aS52aWV3LkRpYWxvZ1Rlc3RVSVwiLERpYWxvZ1Rlc3RVSSk7XHJcbiAgICBleHBvcnQgY2xhc3MgTG9hZGluZ1VJIGV4dGVuZHMgVmlldyB7XHJcblx0XHRwdWJsaWMgdGFuazpMYXlhLkNsaXA7XG5cdFx0cHVibGljIGJ0bl9jbG9zZTpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgYnRuX2Nvbm5lY3Q6TGF5YS5CdXR0b247XG4gICAgICAgIHB1YmxpYyBzdGF0aWMgIHVpVmlldzphbnkgPXtcInR5cGVcIjpcIlZpZXdcIixcInByb3BzXCI6e1wid2lkdGhcIjo2NDAsXCJoZWlnaHRcIjoxMTM2fSxcImNvbXBJZFwiOjIsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJJbWFnZVwiLFwicHJvcHNcIjp7XCJ0b3BcIjowLFwic2tpblwiOlwiQ2hhcmFjdGVycy9UYW5rXzcucG5nXCIsXCJyaWdodFwiOjAsXCJsZWZ0XCI6MCxcImJvdHRvbVwiOjB9LFwiY29tcElkXCI6MTd9LHtcInR5cGVcIjpcIkNsaXBcIixcInByb3BzXCI6e1widmFyXCI6XCJ0YW5rXCIsXCJza2luXCI6XCJDaGFyYWN0ZXJzL1RhbmtfNC5wbmdcIixcImluZGV4XCI6NCxcImNsaXBZXCI6NCxcImNsaXBYXCI6NCxcImNlbnRlcllcIjotMSxcImNlbnRlclhcIjowfSxcImNvbXBJZFwiOjN9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6MzI3LFwieFwiOjI4Mi41LFwidmFyXCI6XCJidG5fY2xvc2VcIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcImNsb3NlXCJ9LFwiY29tcElkXCI6NH0se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjoyMjIsXCJ4XCI6MjgyLjUsXCJ2YXJcIjpcImJ0bl9jb25uZWN0XCIsXCJza2luXCI6XCJjb21wL2J1dHRvbi5wbmdcIixcImxhYmVsXCI6XCJjb25uZWN0XCJ9LFwiY29tcElkXCI6NX1dLFwibG9hZExpc3RcIjpbXCJDaGFyYWN0ZXJzL1RhbmtfNy5wbmdcIixcIkNoYXJhY3RlcnMvVGFua180LnBuZ1wiLFwiY29tcC9idXR0b24ucG5nXCJdLFwibG9hZExpc3QzRFwiOltdfTtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVmlldyhMb2FkaW5nVUkudWlWaWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSRUcoXCJ1aS52aWV3LkxvYWRpbmdVSVwiLExvYWRpbmdVSSk7XHJcbiAgICBleHBvcnQgY2xhc3MgVmlld1Rlc3RVSSBleHRlbmRzIFZpZXcge1xyXG5cdFx0cHVibGljIHRhbms6TGF5YS5DbGlwO1xuXHRcdHB1YmxpYyBjbG9zZUJ0bjpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgdmlld0J0bjpMYXlhLkJ1dHRvbjtcbiAgICAgICAgcHVibGljIHN0YXRpYyAgdWlWaWV3OmFueSA9e1widHlwZVwiOlwiVmlld1wiLFwicHJvcHNcIjp7XCJ3aWR0aFwiOjY0MCxcImhlaWdodFwiOjExMzZ9LFwiY29tcElkXCI6MixcImNoaWxkXCI6W3tcInR5cGVcIjpcIkltYWdlXCIsXCJwcm9wc1wiOntcInlcIjowLFwieFwiOjAsXCJ0b3BcIjowLFwic2tpblwiOlwiY29tcC9pbWFnZS5wbmdcIixcInJpZ2h0XCI6MCxcImxlZnRcIjowLFwiYm90dG9tXCI6MH0sXCJjb21wSWRcIjo3fSx7XCJ0eXBlXCI6XCJDbGlwXCIsXCJwcm9wc1wiOntcInlcIjowLFwieFwiOjAsXCJ2YXJcIjpcInRhbmtcIixcInNraW5cIjpcIkNoYXJhY3RlcnMvJOeLvC5wbmdcIixcImluZGV4XCI6NCxcImNsaXBZXCI6NCxcImNsaXBYXCI6NCxcImNlbnRlcllcIjotMSxcImNlbnRlclhcIjowfSxcImNvbXBJZFwiOjN9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6MzI3LFwieFwiOjI4MixcInZhclwiOlwiY2xvc2VCdG5cIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcImNsb3NlXCJ9LFwiY29tcElkXCI6NH0se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjozODUsXCJ4XCI6MjgyLjUsXCJ2YXJcIjpcInZpZXdCdG5cIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcInZpZXdcIn0sXCJjb21wSWRcIjo1fV0sXCJsb2FkTGlzdFwiOltcImNvbXAvaW1hZ2UucG5nXCIsXCJDaGFyYWN0ZXJzLyTni7wucG5nXCIsXCJjb21wL2J1dHRvbi5wbmdcIl0sXCJsb2FkTGlzdDNEXCI6W119O1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVWaWV3KFZpZXdUZXN0VUkudWlWaWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSRUcoXCJ1aS52aWV3LlZpZXdUZXN0VUlcIixWaWV3VGVzdFVJKTtcclxuICAgIGV4cG9ydCBjbGFzcyBWaWV3VGVzdDFVSSBleHRlbmRzIFZpZXcge1xyXG5cdFx0cHVibGljIHRhbms6TGF5YS5DbGlwO1xuXHRcdHB1YmxpYyBjbG9zZUJ0bjpMYXlhLkJ1dHRvbjtcbiAgICAgICAgcHVibGljIHN0YXRpYyAgdWlWaWV3OmFueSA9e1widHlwZVwiOlwiVmlld1wiLFwicHJvcHNcIjp7XCJ3aWR0aFwiOjY0MCxcImhlaWdodFwiOjExMzZ9LFwiY29tcElkXCI6MixcImNoaWxkXCI6W3tcInR5cGVcIjpcIkltYWdlXCIsXCJwcm9wc1wiOntcInlcIjowLFwieFwiOjAsXCJ0b3BcIjowLFwic2tpblwiOlwiY29tcC9pbWFnZS5wbmdcIixcInJpZ2h0XCI6MCxcImxlZnRcIjowLFwiYm90dG9tXCI6MH0sXCJjb21wSWRcIjo2fSx7XCJ0eXBlXCI6XCJDbGlwXCIsXCJwcm9wc1wiOntcInlcIjowLFwieFwiOjAsXCJ2YXJcIjpcInRhbmtcIixcInNraW5cIjpcIkNoYXJhY3RlcnMvJOeLvC5wbmdcIixcImluZGV4XCI6NCxcImNsaXBZXCI6NCxcImNsaXBYXCI6NCxcImNlbnRlcllcIjotMSxcImNlbnRlclhcIjowfSxcImNvbXBJZFwiOjN9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6MzI3LFwieFwiOjI4MixcInZhclwiOlwiY2xvc2VCdG5cIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcImNsb3NlXCJ9LFwiY29tcElkXCI6NH1dLFwibG9hZExpc3RcIjpbXCJjb21wL2ltYWdlLnBuZ1wiLFwiQ2hhcmFjdGVycy8k54u8LnBuZ1wiLFwiY29tcC9idXR0b24ucG5nXCJdLFwibG9hZExpc3QzRFwiOltdfTtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVmlldyhWaWV3VGVzdDFVSS51aVZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFJFRyhcInVpLnZpZXcuVmlld1Rlc3QxVUlcIixWaWV3VGVzdDFVSSk7XHJcbn1cciIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=