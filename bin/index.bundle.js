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
var store_1 = __webpack_require__(/*! ../../../game/store/store */ "./src/game/store/store.ts");
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
        BaseView.prototype.openCb = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            this.updateView();
            this.unsubscribe = store_1.default.subscribe(this.updateView.bind(this));
        };
        BaseView.prototype.closeCb = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            this.unsubscribe();
        };
        BaseView.prototype.updateView = function () { };
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

/***/ "./src/game/store/actions.ts":
/*!***********************************!*\
  !*** ./src/game/store/actions.ts ***!
  \***********************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
var state_1 = __webpack_require__(/*! ./state */ "./src/game/store/state.ts");
var ACTIONTYPE;
(function (ACTIONTYPE) {
    ACTIONTYPE[ACTIONTYPE["CHANGE_TESTDATA1"] = 1] = "CHANGE_TESTDATA1";
    ACTIONTYPE[ACTIONTYPE["CHANGE_TESTDATA2"] = 2] = "CHANGE_TESTDATA2";
    ACTIONTYPE[ACTIONTYPE["CHANGE_USERNAME"] = 3] = "CHANGE_USERNAME";
    ACTIONTYPE[ACTIONTYPE["CHANGE_TOKEN"] = 4] = "CHANGE_TOKEN";
})(ACTIONTYPE = exports.ACTIONTYPE || (exports.ACTIONTYPE = {}));
exports.changeData1 = function (data1) {
    return {
        type: ACTIONTYPE.CHANGE_TESTDATA1,
        testData: __assign({}, state_1.state.testData, { data1: data1 }),
    };
};
exports.changeData2 = function (data2) {
    return {
        type: ACTIONTYPE.CHANGE_TESTDATA2,
        testData: __assign({}, state_1.state.testData, { data2: data2 }),
    };
};
exports.changeUsername = function (name) {
    return {
        type: ACTIONTYPE.CHANGE_USERNAME,
        user: { name: name },
    };
};
exports.changeToken = function (token) {
    return {
        type: ACTIONTYPE.CHANGE_TOKEN,
        token: token,
    };
};


/***/ }),

/***/ "./src/game/store/reducer.ts":
/*!***********************************!*\
  !*** ./src/game/store/reducer.ts ***!
  \***********************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = __webpack_require__(/*! ./actions */ "./src/game/store/actions.ts");
var redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var changeTestData = function (state, action) {
    if (state === void 0) { state = { data1: 'data1', data2: 'data2' }; }
    switch (action.type) {
        case actions_1.ACTIONTYPE.CHANGE_TESTDATA1:
        case actions_1.ACTIONTYPE.CHANGE_TESTDATA2:
            return __assign({}, action.testData);
        default:
            return state;
    }
};
var changeUsername = function (state, action) {
    if (state === void 0) { state = { name: 'nor' }; }
    switch (action.type) {
        case actions_1.ACTIONTYPE.CHANGE_USERNAME:
            return __assign({}, action.user);
        default:
            return state;
    }
};
var changeToken = function (state, action) {
    if (state === void 0) { state = ''; }
    switch (action.type) {
        case actions_1.ACTIONTYPE.CHANGE_TOKEN:
            return action.token;
        default:
            return state;
    }
};
var changeTestData1 = function (state, action) {
    return state;
};
var reducers = redux_1.combineReducers({ testData: changeTestData, user: changeUsername, token: changeToken });
exports.default = reducers;


/***/ }),

/***/ "./src/game/store/state.ts":
/*!*********************************!*\
  !*** ./src/game/store/state.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.state = {
    token: 'hello',
    user: {
        name: 'test1',
    },
    testData: {
        data1: 'data1',
        data2: 'data2',
        testData2: {
            data1: '111',
            testData3: {
                data1: '222',
                testData4: '333',
            },
        },
    },
};


/***/ }),

/***/ "./src/game/store/store.ts":
/*!*********************************!*\
  !*** ./src/game/store/store.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var reducer_1 = __webpack_require__(/*! ./reducer */ "./src/game/store/reducer.ts");
var state_1 = __webpack_require__(/*! ./state */ "./src/game/store/state.ts");
var store = redux_1.createStore(reducer_1.default, state_1.state);
exports.default = store;


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
__webpack_require__(/*! ../../../store/store */ "./src/game/store/store.ts");
var store_1 = __webpack_require__(/*! ../../../store/store */ "./src/game/store/store.ts");
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
        // this.controller.addListener(
        //   'change',
        //   args => {
        //     this.contents.text = args[0]
        //     // console.log(this)
        //   },
        //   this,
        // )
    };
    APage.prototype.updateView = function () {
        var _a = store_1.default.getState(), user = _a.user, token = _a.token, testData = _a.testData;
        this.contents.text = testData.data1;
        // this.username.text = user.name
        // this.token.text = token
    };
    APage.prototype.openCb = function (args) {
        _super.prototype.openCb.call(this);
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
var store_1 = __webpack_require__(/*! ../../../store/store */ "./src/game/store/store.ts");
var actions_1 = __webpack_require__(/*! ../../../store/actions */ "./src/game/store/actions.ts");
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
            // this.controller.dispatch('change', ['#ee3321'])
            store_1.default.dispatch(actions_1.changeData1('hello world'));
        });
    };
    BPage.prototype.updateView = function () {
        var _a = store_1.default.getState(), user = _a.user, token = _a.token, testData = _a.testData;
        this.username.text = user.name;
        this.token.text = token;
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
var store_1 = __webpack_require__(/*! ../../store/store */ "./src/game/store/store.ts");
var actions_1 = __webpack_require__(/*! ../../store/actions */ "./src/game/store/actions.ts");
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
                        store_1.default.dispatch(actions_1.changeToken(Math.random()));
                        store_1.default.dispatch(actions_1.changeUsername(Math.random()));
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
        _super.prototype.openCb.call(this);
        console.log('BaseTest open');
    };
    BaseTest.prototype.updateView = function () {
        var _a = store_1.default.getState(), user = _a.user, token = _a.token, testData = _a.testData;
        this.username.text = user.name;
        this.token.text = token;
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
var store_1 = __webpack_require__(/*! ../../store/store */ "./src/game/store/store.ts");
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
        _super.prototype.openCb.call(this);
        console.log('Loading open', args);
    };
    Loading.prototype.updateView = function () {
        var _a = store_1.default.getState(), user = _a.user, token = _a.token, testData = _a.testData;
        this.username.text = user.name;
        this.token.text = token;
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
var store_1 = __webpack_require__(/*! ../../store/store */ "./src/game/store/store.ts");
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
        _super.prototype.openCb.call(this);
        console.log('ViewTest open');
    };
    ViewTest.prototype.updateView = function () {
        var _a = store_1.default.getState(), user = _a.user, token = _a.token, testData = _a.testData;
        this.username.text = user.name;
        this.token.text = token;
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
var store_1 = __webpack_require__(/*! ../../store/store */ "./src/game/store/store.ts");
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
        _super.prototype.openCb.call(this);
        console.log('ViewTest open');
    };
    ViewTest1.prototype.updateView = function () {
        var _a = store_1.default.getState(), user = _a.user, token = _a.token, testData = _a.testData;
        this.username.text = user.name;
        this.token.text = token;
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
            BaseTestUI.uiView = { "type": "BaseView", "props": { "width": 640, "height": 1136 }, "compId": 2, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "top": 0, "skin": "comp/image.png", "right": 0, "left": 0, "bottom": 0 }, "compId": 8 }, { "type": "Clip", "props": { "y": 0, "x": 0, "var": "tank", "skin": "Characters/Tank_8.png", "index": 4, "clipY": 4, "clipX": 4, "centerY": -1, "centerX": 0 }, "compId": 3 }, { "type": "Button", "props": { "y": 327, "x": 282, "var": "closeBtn", "skin": "comp/button.png", "label": "close" }, "compId": 4 }, { "type": "Button", "props": { "y": 252, "x": 472, "var": "dialogBtn", "skin": "comp/button.png", "label": "dialog" }, "compId": 5 }, { "type": "Button", "props": { "y": 304, "x": 472, "var": "loadingBtn", "skin": "comp/button.png", "label": "base" }, "compId": 6 }, { "type": "Button", "props": { "y": 362, "x": 472, "var": "viewBtn", "skin": "comp/button.png", "label": "view" }, "compId": 7 }, { "type": "Label", "props": { "y": 181, "x": 105, "var": "token", "text": "token", "fontSize": 30, "color": "#ffffff" }, "compId": 9 }, { "type": "Label", "props": { "y": 257, "x": 105, "var": "username", "text": "token", "fontSize": 30, "color": "#ffffff" }, "compId": 10 }], "loadList": ["comp/image.png", "Characters/Tank_8.png", "comp/button.png"], "loadList3D": [] };
            return BaseTestUI;
        }(BaseView));
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
            BPageUI.uiView = { "type": "BaseView", "props": { "width": 300, "height": 1136 }, "compId": 2, "child": [{ "type": "Rect", "props": { "width": 300, "lineWidth": 1, "height": 1136, "fillColor": "#cdf9a4" }, "compId": 3 }, { "type": "Button", "props": { "y": 534, "x": 59, "width": 200, "var": "change", "skin": "comp/button.png", "label": "ChangeAPage", "height": 50 }, "compId": 4 }, { "type": "Button", "props": { "y": 644, "x": 59, "width": 200, "var": "close_btn", "skin": "comp/button.png", "label": "Close", "height": 50 }, "compId": 5 }, { "type": "Label", "props": { "y": 181, "x": 105, "var": "token", "text": "token", "fontSize": 30, "color": "#000000" }, "compId": 7 }, { "type": "Label", "props": { "y": 257, "x": 105, "var": "username", "text": "token", "fontSize": 30, "color": "#000000" }, "compId": 8 }], "loadList": ["comp/button.png"], "loadList3D": [] };
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
            DialogTestUI.uiView = { "type": "BaseView", "props": { "width": 640, "height": 1136 }, "compId": 2, "child": [{ "type": "Box", "props": { "width": 200, "var": "box", "height": 200, "centerY": 0, "centerX": 0 }, "compId": 9, "child": [{ "type": "Image", "props": { "top": 0, "skin": "comp/image.png", "right": 0, "left": 0, "bottom": 0 }, "compId": 10 }, { "type": "Clip", "props": { "y": 550, "x": 303, "var": "tank", "skin": "Characters/Tank_7.png", "index": 4, "clipY": 4, "clipX": 4, "centerY": -1, "centerX": 0 }, "compId": 3 }, { "type": "Button", "props": { "y": 39, "x": 62.5, "var": "closeBtn", "skin": "comp/button.png", "label": "close" }, "compId": 4 }] }, { "type": "Label", "props": { "y": 181, "x": 105, "var": "token", "text": "token", "fontSize": 30, "color": "#ffffff" }, "compId": 12 }, { "type": "Label", "props": { "y": 257, "x": 105, "var": "username", "text": "token", "fontSize": 30, "color": "#ffffff" }, "compId": 13 }], "loadList": ["comp/image.png", "Characters/Tank_7.png", "comp/button.png"], "loadList3D": [] };
            return DialogTestUI;
        }(BaseView));
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
            LoadingUI.uiView = { "type": "BaseView", "props": { "width": 640, "height": 1136 }, "compId": 2, "child": [{ "type": "Image", "props": { "top": 0, "skin": "Characters/Tank_7.png", "right": 0, "left": 0, "bottom": 0 }, "compId": 17 }, { "type": "Clip", "props": { "var": "tank", "skin": "Characters/Tank_4.png", "index": 4, "clipY": 4, "clipX": 4, "centerY": -1, "centerX": 0 }, "compId": 3 }, { "type": "Button", "props": { "y": 327, "x": 282.5, "var": "btn_close", "skin": "comp/button.png", "label": "close" }, "compId": 4 }, { "type": "Button", "props": { "y": 222, "x": 282.5, "var": "btn_connect", "skin": "comp/button.png", "label": "connect" }, "compId": 5 }, { "type": "Label", "props": { "y": 181, "x": 105, "var": "token", "text": "token", "fontSize": 30, "color": "#ffffff" }, "compId": 18 }, { "type": "Label", "props": { "y": 257, "x": 105, "var": "username", "text": "token", "fontSize": 30, "color": "#ffffff" }, "compId": 19 }], "loadList": ["Characters/Tank_7.png", "Characters/Tank_4.png", "comp/button.png"], "loadList3D": [] };
            return LoadingUI;
        }(BaseView));
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
            ViewTestUI.uiView = { "type": "BaseView", "props": { "width": 640, "height": 1136 }, "compId": 2, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "top": 0, "skin": "comp/image.png", "right": 0, "left": 0, "bottom": 0 }, "compId": 7 }, { "type": "Clip", "props": { "y": 0, "x": 0, "var": "tank", "skin": "Characters/$狼.png", "index": 4, "clipY": 4, "clipX": 4, "centerY": -1, "centerX": 0 }, "compId": 3 }, { "type": "Button", "props": { "y": 327, "x": 282, "var": "closeBtn", "skin": "comp/button.png", "label": "close" }, "compId": 4 }, { "type": "Button", "props": { "y": 385, "x": 282.5, "var": "viewBtn", "skin": "comp/button.png", "label": "view" }, "compId": 5 }, { "type": "Label", "props": { "y": 181, "x": 105, "var": "token", "text": "token", "fontSize": 30, "color": "#ffffff" }, "compId": 9 }, { "type": "Label", "props": { "y": 257, "x": 105, "var": "username", "text": "token", "fontSize": 30, "color": "#ffffff" }, "compId": 10 }], "loadList": ["comp/image.png", "Characters/$狼.png", "comp/button.png"], "loadList3D": [] };
            return ViewTestUI;
        }(BaseView));
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
            ViewTest1UI.uiView = { "type": "BaseView", "props": { "width": 640, "height": 1136 }, "compId": 2, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "top": 0, "skin": "comp/image.png", "right": 0, "left": 0, "bottom": 0 }, "compId": 6 }, { "type": "Clip", "props": { "y": 0, "x": 0, "var": "tank", "skin": "Characters/$狼.png", "index": 4, "clipY": 4, "clipX": 4, "centerY": -1, "centerX": 0 }, "compId": 3 }, { "type": "Button", "props": { "y": 327, "x": 282, "var": "closeBtn", "skin": "comp/button.png", "label": "close" }, "compId": 4 }, { "type": "Label", "props": { "y": 181, "x": 105, "var": "token", "text": "token", "fontSize": 30, "color": "#ffffff" }, "compId": 7 }, { "type": "Label", "props": { "y": 257, "x": 105, "var": "username", "text": "token", "fontSize": 30, "color": "#ffffff" }, "compId": 8 }], "loadList": ["comp/image.png", "Characters/$狼.png", "comp/button.png"], "loadList3D": [] };
            return ViewTest1UI;
        }(BaseView));
        view.ViewTest1UI = ViewTest1UI;
        REG("ui.view.ViewTest1UI", ViewTest1UI);
    })(view = ui.view || (ui.view = {}));
})(ui = exports.ui || (exports.ui = {}));


/***/ }),

/***/ 2:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWVDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvVXRpbHMvRWZmZWN0VXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvYmFzZS9TaW5nbGV0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY29uc3QvTGF5ZXJDb25zdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9jb25zdC9WaWV3Q29uc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZ2FtZS9HYW1lQXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2dhbWUvdXRpbHMvU3RyaW5nVXRpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9nYW1lL3V0aWxzL1RpbWVVdGlsLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL212Yy9Db250cm9sbGVyTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9tdmMvTXZjTWdyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL212Yy9VSUV2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL212Yy9WaWV3TWdyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL212Yy9jb250cm9sbGVyL0Jhc2VDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL212Yy9sYXllci9CYXNlTGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvbXZjL2xheWVyL0RpYWxvZ0xheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL212Yy9sYXllci9WaWV3TGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvbXZjL21vZGVsL0Jhc2VNb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9tdmMvdmlldy9CYXNlVmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9zZXJ2aWNlL1NlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvc2VydmljZS9kaXNwYXRjaGVyL0Rpc3BhdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvc2VydmljZS9kaXNwYXRjaGVyL09ic2VydmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3N0b3JlL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvc3RvcmUvcmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9zdG9yZS9zdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9zdG9yZS9zdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS91aS92aWV3L0FQYWdlL0FQYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3VpL3ZpZXcvQVBhZ2UvQVBhZ2VDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3VpL3ZpZXcvQVBhZ2UvQXBhZ2VNb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS91aS92aWV3L0FQYWdlL1Rlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdWkvdmlldy9CUGFnZS9CUGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS91aS92aWV3L0JQYWdlL0JQYWdlQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS91aS92aWV3L0JQYWdlL0JQYWdlTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdWkvdmlldy9CYXNlVGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS91aS92aWV3L0xvYWRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdWkvdmlldy9WaWV3VGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS91aS92aWV3L1ZpZXdUZXN0MS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV0L0ZldGNoLnRzIiwid2VicGFjazovLy8uL3NyYy9uZXQvU29ja2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9uZXQvaHR0cC9HYW1lTmV0LnRzIiwid2VicGFjazovLy8uL3NyYy9uZXQvaHR0cC9OZXRSZXF1ZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZS9NYWluU2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2xheWFNYXhVSS50cyIsIndlYnBhY2s6Ly8vd3MgKGlnbm9yZWQpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBC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Q0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsV0FBVyxFQUFDLE1BQU0sRUFBQyxpQkFBaUIsRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLFlBQVksRUFBQyxNQUFNLEVBQUMsaUJBQWlCLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxTQUFTLEVBQUMsTUFBTSxFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFF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RUFBQyxHQUFHLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQyxFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxRQUFRLEVBQUMsR0FBRyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLGdCQUFnQixFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsdUJBQXVCLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLE1BQU0sRUFBQyxpQkFBaUIsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsZ0JBQWdCLEVBQUMsdUJBQXVCLEVBQUMsaUJBQWlCLENBQUMsRUFBQyxZQUFZLEVBQUMsRUFBRSxFQUFDLENBQUM7WUFNeDRCLG1CQUFDO1NBQUEsQ0FaaUMsUUFBUSxHQVl6QztRQVpZLGlCQUFZLGVBWXhCO1FBQ0QsR0FBRyxDQUFDLHNCQUFzQixFQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3pDO1lBQStCLDZCQUFRO1lBT25DO3VCQUFlLGlCQUFPO1lBQUEsQ0FBQztZQUN2QixrQ0FBYyxHQUFkO2dCQUNJLGlCQUFNLGNBQWMsV0FBRSxDQUFDO2dCQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0QyxDQUFDO1lBTGMsZ0JBQU0sR0FBTSxFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsdUJBQXVCLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLHVCQUF1QixFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLFdBQVcsRUFBQyxNQUFNLEVBQUMsaUJBQWlCLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxhQUFhLEVBQUMsTUFBTSxFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLHVCQUF1QixFQUFDLHVCQUF1QixFQUFDLGlCQUFpQixDQUFDLEVBQUMsWUFBWSxFQUFDLEVBQUUsRUFBQyxDQUFDO1lBTXQ1QixnQkFBQztTQUFBLENBWjhCLFFBQVEsR0FZdEM7UUFaWSxjQUFTLFlBWXJCO1FBQ0QsR0FBRyxDQUFDLG1CQUFtQixFQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25DO1lBQWdDLDhCQUFRO1lBT3BDO3VCQUFlLGlCQUFPO1lBQUEsQ0FBQztZQUN2QixtQ0FBYyxHQUFkO2dCQUNJLGlCQUFNLGNBQWMsV0FBRSxDQUFDO2dCQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2QyxDQUFDO1lBTGMsaUJBQU0sR0FBTSxFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLGdCQUFnQixFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsbUJBQW1CLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLE1BQU0sRUFBQyxpQkFBaUIsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQyxNQUFNLEVBQUMsaUJBQWlCLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsVUFBVSxF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InNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiaW5kZXhcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9NYWluLnRzXCIsXCJsaWJcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvKipUaGlzIGNsYXNzIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IExheWFBaXJJREUsIHBsZWFzZSBkbyBub3QgbWFrZSBhbnkgbW9kaWZpY2F0aW9ucy4gKi9cclxuaW1wb3J0IE1haW5TY2VuZSBmcm9tIFwiLi9zY2VuZS9NYWluU2NlbmVcIlxuaW1wb3J0IFRlc3QgZnJvbSBcIi4vZ2FtZS91aS92aWV3L0FQYWdlL1Rlc3RcIlxyXG4vKlxyXG4qIOa4uOaIj+WIneWni+WMlumFjee9rjtcclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbmZpZ3tcclxuICAgIHN0YXRpYyB3aWR0aDpudW1iZXI9NjQwO1xyXG4gICAgc3RhdGljIGhlaWdodDpudW1iZXI9MTEzNjtcclxuICAgIHN0YXRpYyBzY2FsZU1vZGU6c3RyaW5nPVwic2hvd2FsbFwiO1xyXG4gICAgc3RhdGljIHNjcmVlbk1vZGU6c3RyaW5nPVwibm9uZVwiO1xyXG4gICAgc3RhdGljIGFsaWduVjpzdHJpbmc9XCJtaWRkbGVcIjtcclxuICAgIHN0YXRpYyBhbGlnbkg6c3RyaW5nPVwiY2VudGVyXCI7XHJcbiAgICBzdGF0aWMgc3RhcnRTY2VuZTphbnk9XCJzY2VuZS9NYWluU2NlbmUuc2NlbmVcIjtcclxuICAgIHN0YXRpYyBzY2VuZVJvb3Q6c3RyaW5nPVwiXCI7XHJcbiAgICBzdGF0aWMgZGVidWc6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBzdGF0OmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgcGh5c2ljc0RlYnVnOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgZXhwb3J0U2NlbmVUb0pzb246Ym9vbGVhbj10cnVlO1xyXG4gICAgY29uc3RydWN0b3IoKXt9XHJcbiAgICBzdGF0aWMgaW5pdCgpe1xyXG4gICAgICAgIHZhciByZWc6IEZ1bmN0aW9uID0gTGF5YS5DbGFzc1V0aWxzLnJlZ0NsYXNzO1xyXG4gICAgICAgIHJlZyhcInNjZW5lL01haW5TY2VuZS50c1wiLE1haW5TY2VuZSk7XG4gICAgICAgIHJlZyhcImdhbWUvdWkvdmlldy9BUGFnZS9UZXN0LnRzXCIsVGVzdCk7XHJcbiAgICB9XHJcbn1cclxuR2FtZUNvbmZpZy5pbml0KCk7IiwiaW1wb3J0IEdhbWVDb25maWcgZnJvbSAnLi9HYW1lQ29uZmlnJ1xyXG5jbGFzcyBNYWluIHtcclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvL+agueaNrklEReiuvue9ruWIneWni+WMluW8leaTjlxyXG4gICAgaWYgKHdpbmRvd1snTGF5YTNEJ10pIExheWEzRC5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0KVxyXG4gICAgZWxzZSBMYXlhLmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQsIExheWFbJ1dlYkdMJ10pXHJcbiAgICBMYXlhWydQaHlzaWNzJ10gJiYgTGF5YVsnUGh5c2ljcyddLmVuYWJsZSgpXHJcbiAgICBMYXlhWydEZWJ1Z1BhbmVsJ10gJiYgTGF5YVsnRGVidWdQYW5lbCddLmVuYWJsZSgpXHJcbiAgICAvLyBMYXlhLnN0YWdlLnNjYWxlTW9kZSA9IEdhbWVDb25maWcuc2NhbGVNb2RlO1xyXG4gICAgTGF5YS5zdGFnZS5zY2FsZU1vZGUgPSBHYW1lQ29uZmlnLnNjYWxlTW9kZVxyXG4gICAgTGF5YS5zdGFnZS5zY3JlZW5Nb2RlID0gR2FtZUNvbmZpZy5zY3JlZW5Nb2RlXHJcbiAgICBMYXlhLnN0YWdlLmFsaWduViA9IEdhbWVDb25maWcuYWxpZ25WXHJcbiAgICBMYXlhLnN0YWdlLmFsaWduSCA9IEdhbWVDb25maWcuYWxpZ25IXHJcbiAgICAvL+WFvOWuueW+ruS/oeS4jeaUr+aMgeWKoOi9vXNjZW5l5ZCO57yA5Zy65pmvXHJcbiAgICBMYXlhLlVSTC5leHBvcnRTY2VuZVRvSnNvbiA9IEdhbWVDb25maWcuZXhwb3J0U2NlbmVUb0pzb25cclxuXHJcbiAgICAvL+aJk+W8gOiwg+ivlemdouadv++8iOmAmui/h0lEReiuvue9ruiwg+ivleaooeW8j++8jOaIluiAhXVybOWcsOWdgOWinuWKoGRlYnVnPXRydWXlj4LmlbDvvIzlnYflj6/miZPlvIDosIPor5XpnaLmnb/vvIlcclxuICAgIGlmIChHYW1lQ29uZmlnLmRlYnVnIHx8IExheWEuVXRpbHMuZ2V0UXVlcnlTdHJpbmcoJ2RlYnVnJykgPT0gJ3RydWUnKSBMYXlhLmVuYWJsZURlYnVnUGFuZWwoKVxyXG4gICAgaWYgKEdhbWVDb25maWcucGh5c2ljc0RlYnVnICYmIExheWFbJ1BoeXNpY3NEZWJ1Z0RyYXcnXSkgTGF5YVsnUGh5c2ljc0RlYnVnRHJhdyddLmVuYWJsZSgpXHJcbiAgICBpZiAoR2FtZUNvbmZpZy5zdGF0KSBMYXlhLlN0YXQuc2hvdygpXHJcbiAgICBMYXlhLmFsZXJ0R2xvYmFsRXJyb3IgPSB0cnVlXHJcbiAgICAvL+a/gOa0u+i1hOa6kOeJiOacrOaOp+WItu+8jHZlcnNpb24uanNvbueUsUlEReWPkeW4g+WKn+iDveiHquWKqOeUn+aIkO+8jOWmguaenOayoeacieS5n+S4jeW9seWTjeWQjue7rea1geeoi1xyXG4gICAgTGF5YS5SZXNvdXJjZVZlcnNpb24uZW5hYmxlKCd2ZXJzaW9uLmpzb24nLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25WZXJzaW9uTG9hZGVkKSwgTGF5YS5SZXNvdXJjZVZlcnNpb24uRklMRU5BTUVfVkVSU0lPTilcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25WZXJzaW9uTG9hZGVkKCk6IHZvaWQge1xyXG4gICAgLy/mv4DmtLvlpKflsI/lm77mmKDlsITvvIzliqDovb3lsI/lm77nmoTml7blgJnvvIzlpoLmnpzlj5HnjrDlsI/lm77lnKjlpKflm77lkIjpm4bph4zpnaLvvIzliJnkvJjlhYjliqDovb3lpKflm77lkIjpm4bvvIzogIzkuI3mmK/lsI/lm75cclxuICAgIExheWEuQXRsYXNJbmZvTWFuYWdlci5lbmFibGUoJ2ZpbGVjb25maWcuanNvbicsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkNvbmZpZ0xvYWRlZCkpXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQ29uZmlnTG9hZGVkKCk6IHZvaWQge1xyXG4gICAgLy/liqDovb1JREXmjIflrprnmoTlnLrmma9cclxuICAgIEdhbWVDb25maWcuc3RhcnRTY2VuZSAmJiBMYXlhLlNjZW5lLm9wZW4oR2FtZUNvbmZpZy5zdGFydFNjZW5lKVxyXG4gIH1cclxufVxyXG4vL+a/gOa0u+WQr+WKqOexu1xyXG5uZXcgTWFpbigpXHJcbiIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWZmZWN0VXRpbHMgIHtcbiAgLyoqXG4gICAqIOexu+S8vG1hY+S4iuWbvuagh+S4iuS4i+aKluWKqOeahOaViOaenFxuICAgKiBAcGFyYW0ge1Nwcml0ZX0gb2JqIOaKluWKqOWvueixoVxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5pdFkg6KaB5oqW5Yqo55qE5a+56LGh55qE5Yid5aeLWeWAvO+8jOWOn+Wni+S9jee9rlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayDmipbliqjliqjnlLvlrozmiJDlm57osIPlh73mlbBcbiAgICogQHBhcmFtIHthbnl9IHRoaXNPYmog5Zue6LCD5Ye95pWwdGhpc+WvueixoVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBtYWNJY29uU2hha2Uob2JqLCBpbml0WSwgY2FsbGJhY2ssIHRoaXNPYmopIHtcbiAgICAvL+aKluWKqOmikeeOh1vml7bpl7TvvIznp7vliqjot53nprtd77yM5Y+v5L+u5pS5XG4gICAgbGV0IGFyciA9IFtbMjAsIDMwMF0sIFsxNSwgMzAwXSwgWzEwLCAzMDBdLCBbNSwgMzAwXV1cblxuICAgIGxldCBpbmRleCA9IDBcbiAgICB0b1NoYWtlKClcblxuICAgIGZ1bmN0aW9uIHRvU2hha2UoKSB7XG4gICAgICBpZiAoaW5kZXggPj0gYXJyLmxlbmd0aCkge1xuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjay5hcHBseSh0aGlzT2JqLCBbXSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIExheWEuVHdlZW4udG8oXG4gICAgICAgICAgb2JqLFxuICAgICAgICAgIHsgeTogaW5pdFkgLSBhcnJbaW5kZXhdWzBdIH0sXG4gICAgICAgICAgYXJyW2luZGV4XVsxXSxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUobnVsbCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxuICAgICAgICAgICAgICBvYmosXG4gICAgICAgICAgICAgIHsgeTogaW5pdFkgfSxcbiAgICAgICAgICAgICAgYXJyW2luZGV4XVsxXSxcbiAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZShudWxsLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICArK2luZGV4XG4gICAgICAgICAgICAgICAgdG9TaGFrZSgpXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pLFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOWQkeS4iuenu+WKqOa3oeWHuu+8iOW8ueWHuuahhu+8iVxuICAgKiBAcGFyYW0ge1Nwcml0ZX0gb2JqIOa3oeWHuuWvueixoVxuICAgKiBAcGFyYW0ge251bWJlcn0gdGltZSDmt6Hlh7rml7bpl7RcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZWFzZSDmt6Hlh7rlh73mlbBcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sg5reh5Ye65a6M5oiQ5Zue6LCD5Ye95pWwXG4gICAqIEBwYXJhbSB7YW55fSB0aGlzT2JqIOWbnuiwg+WHveaVsHRoaXPlr7nosaFcbiAgICogQHBhcmFtIHtBcnJheX0gYXJyRGF0YSDlm57osIPkvKDlj4JcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZmxvd091dChvYmosIHRpbWUgPSA1MDAsIGVhc2UgPSBudWxsLCBjYWxsYmFjayA9IG51bGwsIHRoaXNPYmogPSBudWxsLCBhcnJEYXRhID0gbnVsbCkge1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgTGF5YS5Ud2Vlbi50byhvYmosIHsgeTogb2JqLnkgLSAxNTAsIGFscGhhOiAwIH0sIHRpbWUsIGVhc2UsIExheWEuSGFuZGxlci5jcmVhdGUodGhpc09iaiwgY2FsbGJhY2ssIGFyckRhdGEpKVxuICAgIH0gZWxzZSB7XG4gICAgICBMYXlhLlR3ZWVuLnRvKG9iaiwgeyB5OiBvYmoueSAtIDE1MCwgYWxwaGE6IDAgfSwgdGltZSwgZWFzZSwgTGF5YS5IYW5kbGVyLmNyZWF0ZShvYmosIG9iai5yZW1vdmVTZWxmLCBhcnJEYXRhKSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5paH5pys5pWw5a2X5aKe5YeP5pWI5p6cXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydE51bSDlvIDlp4vmlbDlgLxcbiAgICogQHBhcmFtIHtudW1iZXJ9IGVuZE51bSDmuJDlj5jliLDnmoTmlbDlgLxcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sg5reh5Ye65a6M5oiQ5Zue6LCD5Ye95pWwXG4gICAqIEBwYXJhbSB7YW55fSB0aGlzT2JqIOWbnuiwg+WHveaVsHRoaXPlr7nosaFcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZmxvd051bShzdGFydE51bSwgZW5kTnVtLCBjYWxsYmFjaywgdGhpc09iaiA9IG51bGwpIHtcbiAgICBsZXQgY2hhbmdlID0gTWF0aC5hYnMoZW5kTnVtIC0gc3RhcnROdW0pXG4gICAgaWYgKGNoYW5nZSA8PSAwKSByZXR1cm5cbiAgICBsZXQgZXZlcnlDaGFuZ2UgPSBjaGFuZ2UgLyAoZW5kTnVtIC0gc3RhcnROdW0pXG4gICAgbGV0IGN1cnJOdW0gPSBzdGFydE51bVxuICAgIGxldCB0aW1lciA9IG5ldyBMYXlhLlRpbWVyKClcbiAgICB0aW1lci5sb29wKDMwLCB0aGlzLCBjaGFuZ2VGdW4pXG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VGdW4oKSB7XG4gICAgICBjdXJyTnVtICs9IGV2ZXJ5Q2hhbmdlXG4gICAgICAtLWNoYW5nZVxuICAgICAgaWYgKGNoYW5nZSA8IDApIHtcbiAgICAgICAgdGltZXIuY2xlYXJBbGwodGhpcylcbiAgICAgICAgdGltZXIgPSBudWxsXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjay5hcHBseSh0aGlzT2JqLCBbY3Vyck51bV0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOW8gOWni+mXqueDgVxuICAgKiBAcGFyYW0ge1Nwcml0ZX0gb2JqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhbHBoYVRpbWUg6Zeq54OB6aKR546HXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHN0YXJ0RmxpY2tlcihvYmosIGFscGhhVGltZSA9IDcwMCkge1xuICAgIG9iai5hbHBoYSA9IDFcbiAgICBMYXlhLlR3ZWVuLnRvKFxuICAgICAgb2JqLFxuICAgICAgeyBhbHBoYTogMCB9LFxuICAgICAgYWxwaGFUaW1lLFxuICAgICAgbnVsbCxcbiAgICAgIExheWEuSGFuZGxlci5jcmVhdGUoXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIExheWEuVHdlZW4udG8ob2JqLCB7IGFscGhhOiAxIH0sIGFscGhhVGltZSwgbnVsbCwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLnN0YXJ0RmxpY2tlciwgW29ial0pKVxuICAgICAgICB9LmJpbmQodGhpcyksXG4gICAgICApLFxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiDlgZzmraLliqjnlLvmiYDmnInliqjnlLvlkI7lrrnlmajkvY3nva7liJ3lp4vljJbliLDljp/kvY3vvIzlkKbliJnlj6/og73lh7rnjrDkvY3nva7mlLnlj5jnmoRidWdcbiAgICogQHBhcmFtIHtTcHJpdGV9IG9ialxuICAgKiBAcGFyYW0ge251bWJlcn0geFBvc1xuICAgKiBAcGFyYW0ge251bWJlcn0geVBvc1xuICAgKi9cbiAgcHVibGljIHN0YXRpYyBzdG9wRWZmZWN0KG9iaiwgeFBvcyA9IG51bGwsIHlQb3MgPSBudWxsKSB7XG4gICAgTGF5YS5Ud2Vlbi5jbGVhckFsbChvYmopXG4gICAgaWYgKHhQb3MgIT09IG51bGwgJiYgeVBvcyAhPT0gbnVsbCkge1xuICAgICAgb2JqLnBvcyh4UG9zLCB5UG9zKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDngrnlh7vmlL7lpKfnvKnlsI/mlYjmnpxcbiAgICogQHBhcmFtIHtMYXlhLlNwcml0ZX1cbiAgICogQHBhcmFtIHtib29sZWFufSBpc0NoYW5nZVhZIOWmguaenOS4reW/g+eCueaYr+mUmueCueS4jemcgOimgeS/ruaUueS9jee9rlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBjbGlja0VmZmVjdChzcCwgaXNDaGFuZ2VYWSA9IHRydWUpIHtcbiAgICBpZiAoIXNwKSByZXR1cm5cbiAgICBzcC5vZmYoTGF5YS5FdmVudC5NT1VTRV9ET1dOLCB0aGlzLCB0aGlzLmN1YmljSW5PdXRFZmZlY3QpXG4gICAgc3Aub24oTGF5YS5FdmVudC5NT1VTRV9ET1dOLCB0aGlzLCB0aGlzLmN1YmljSW5PdXRFZmZlY3QsIFtzcCwgaXNDaGFuZ2VYWV0pXG4gIH1cbiAgcHVibGljIHN0YXRpYyBjbGVhckNsaWNrRWZmZWN0KHNwKSB7XG4gICAgaWYgKCFzcCkgcmV0dXJuXG4gICAgc3Aub2ZmKExheWEuRXZlbnQuTU9VU0VfRE9XTiwgdGhpcywgdGhpcy5jdWJpY0luT3V0RWZmZWN0KVxuICB9XG4gIHB1YmxpYyBzdGF0aWMgY3ViaWNJbk91dEVmZmVjdChzcCwgaXNDaGFuZ2VYWSkge1xuICAgIGlmIChzcC5fYW5pQnV0dG9uRWZmZWN0KSByZXR1cm5cbiAgICBzcC5fYW5pQnV0dG9uRWZmZWN0ID0gdHJ1ZVxuICAgIGxldCBfeCA9IHNwLnhcbiAgICBsZXQgX3kgPSBzcC55XG4gICAgbGV0IF9zY2FYID0gc3Auc2NhbGVYXG4gICAgbGV0IF9zY2FZID0gc3Auc2NhbGVZXG4gICAgbGV0IF9iaWdYLCBfYmlnWVxuICAgIGlmICghaXNDaGFuZ2VYWSkge1xuICAgICAgX2JpZ1ggPSBfeCAtICgoc3Aud2lkdGggKiAwLjEpID4+IDEpXG4gICAgICBfYmlnWSA9IF95IC0gKChzcC5oZWlnaHQgKiAwLjEpID4+IDEpXG4gICAgfSBlbHNlIHtcbiAgICAgIF9iaWdYID0gX3hcbiAgICAgIF9iaWdZID0gX3lcbiAgICB9XG4gICAgTGF5YS5Ud2Vlbi50byhcbiAgICAgIHNwLFxuICAgICAgeyB4OiBfYmlnWCwgeTogX2JpZ1ksIHNjYWxlWDogMS4xICogX3NjYVgsIHNjYWxlWTogMS4xICogX3NjYVkgfSxcbiAgICAgIDEwMCxcbiAgICAgIG51bGwsXG4gICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcbiAgICAgICAgTGF5YS5Ud2Vlbi50byhcbiAgICAgICAgICBzcCxcbiAgICAgICAgICB7IHg6IF94LCB5OiBfeSwgc2NhbGVYOiBfc2NhWCwgc2NhbGVZOiBfc2NhWSB9LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFzcC5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgICAgc3AuX2FuaUJ1dHRvbkVmZmVjdCA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgIClcbiAgICAgIH0pLFxuICAgIClcbiAgfVxufVxuIiwiLyoqXHJcbiAqIG5hbWVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBTaW5nbGV0b24ge1xyXG4gIC8qKlxyXG4gICAqIGRlZmF1bHQgY29uc3RyYWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgX2luc3RhbmNlOiBhbnlcclxuICAvKipcclxuICAgKiBnZXQgaW5zdGFuY2Ugb3IgY3JlYXRlIG5ldyBpbnN0YW5jZVxyXG4gICAqIEByZXR1cm5zIHthbnl9XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBDcmVhdGVPckdldCguLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICBjb25zdCBpbnN0VDogYW55ID0gdGhpc1xyXG4gICAgcmV0dXJuIChpbnN0VC5faW5zdGFuY2UgPSBpbnN0VC5faW5zdGFuY2UgfHwgbmV3IGluc3RUKC4uLmFyZ3MpKVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZW51bSBMYXllckNvbnN0IHtcbiAgYmFzZSA9IDEsXG4gIGJhc2UxLFxuICB2aWV3LFxuICBzaGFyZSxcbiAgZGlhbG9nLFxuICBsb2FkaW5nLFxufVxuIiwiZXhwb3J0IGVudW0gVmlld0NvbnN0IHtcclxuICBNYWluID0gMSxcclxuICBMb2FkaW5nLFxyXG4gIFZpZXdUZXN0LFxyXG4gIFZpZXdUZXN0MSxcclxuICBEaWFsb2dUZXN0LFxyXG4gIEJhc2VUZXN0LFxyXG4gIEFQYWdlLFxyXG4gIEJQYWdlXHJcbn1cclxuIiwiaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvU2VydmljZSdcbmltcG9ydCB7IERpc3BhdGNoZXIgfSBmcm9tICcuLi9zZXJ2aWNlL2Rpc3BhdGNoZXIvRGlzcGF0Y2hlcidcbmltcG9ydCBTb2NrZXQgZnJvbSAnLi4vLi4vbmV0L1NvY2tldCdcbmltcG9ydCB7IFN0cmluZ1V0aWwgfSBmcm9tICcuL3V0aWxzL1N0cmluZ1V0aWwnXG5pbXBvcnQgeyBUaW1lVXRpbCB9IGZyb20gJy4vdXRpbHMvVGltZVV0aWwnXG5cbmltcG9ydCBHYW1lTmV0IGZyb20gJy4uLy4uL25ldC9odHRwL0dhbWVOZXQnXG5pbXBvcnQgeyBGZXRjaCB9IGZyb20gJy4uLy4uL25ldC9GZXRjaCdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVBcHAge1xuICAvLyDlhajlsYDphY3nva7mlbDmja5cbiAgcHVibGljIHN0YXRpYyBHbG9iYWxEYXRhOiBhbnkgPSBudWxsXG5cbiAgLyoqXG4gICAqIOWIneWni+WMluWHveaVsFxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgaW5pdCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgR2FtZUFwcC5HbG9iYWxEYXRhID0gTGF5YS5sb2FkZXIuZ2V0UmVzKCdjb25mL2dsb2JhbC5qc29uJylcbiAgICAgIC8v5bin6L2u6K+iXG4gICAgICBTZXJ2aWNlLkluaXQoKVxuICAgICAgcmVzb2x2ZSgpXG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGRpc3BhdGNoZXIoKTogRGlzcGF0Y2hlciB7XG4gICAgcmV0dXJuIFNlcnZpY2UuZGlzcGF0Y2hlclxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXQgU3RyaW5nVXRpbCgpOiBTdHJpbmdVdGlsIHtcbiAgICByZXR1cm4gU3RyaW5nVXRpbC5DcmVhdGVPckdldCgpXG4gIH1cbiAgcHVibGljIHN0YXRpYyBnZXQgVGltZVV0aWwoKTogVGltZVV0aWwge1xuICAgIHJldHVybiBUaW1lVXRpbC5DcmVhdGVPckdldCgpXG4gIH1cbiAgcHVibGljIHN0YXRpYyBnZXQgU29ja2V0KCk6IFNvY2tldCB7XG4gICAgcmV0dXJuIFNvY2tldC5DcmVhdGVPckdldCgpXG4gIH1cbiAgcHVibGljIHN0YXRpYyBnZXQgbmV0KCk6IEdhbWVOZXQge1xuICAgIHJldHVybiBHYW1lTmV0LkNyZWF0ZU9yR2V0KClcbiAgfVxuICBwdWJsaWMgc3RhdGljIGdldCBmZXRjaCgpOiBGZXRjaCB7XG4gICAgcmV0dXJuIEZldGNoLmluaXQoJ21haW4nLCB7IHVybDogJ2h0dHA6Ly8xMC4xLjEwMC45NzozMDAxLycgfSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgU2luZ2xldG9uIH0gZnJvbSAnLi4vLi4vYmFzZS9TaW5nbGV0b24nXHJcblxyXG5leHBvcnQgY2xhc3MgU3RyaW5nVXRpbCBleHRlbmRzIFNpbmdsZXRvbiB7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTaW5nbGV0b24gfSBmcm9tICcuLi8uLi9iYXNlL1NpbmdsZXRvbidcclxuXHJcbmV4cG9ydCBjbGFzcyBUaW1lVXRpbCBleHRlbmRzIFNpbmdsZXRvbiB7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gIH1cclxuICAvL+WJqeS9meaXtumXtOi9rOaXtuWIhuenku+8iOenku+8iVxyXG4gIHByaXZhdGUgY2hhbmdlVGltZSh0aW1lOiBudW1iZXIpOiB7IGhvdXJzOiBudW1iZXI7IG1pbnV0ZXM6IG51bWJlcjsgc2Vjb25kczogbnVtYmVyIH0ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaG91cnM6IE1hdGguZmxvb3IodGltZSAvIDM2MDApLFxyXG4gICAgICBtaW51dGVzOiBNYXRoLmZsb29yKCh0aW1lICUgMzYwMCkgLyA2MCksXHJcbiAgICAgIHNlY29uZHM6IHRpbWUgJSA2MCxcclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICog5YCS6K6h5pe2XHJcbiAgICogQHBhcmFtIHRpbWUg5pe26Ze05oiz77yIc++8iVxyXG4gICAqIEBwYXJhbSBob3VyIOaXtlxyXG4gICAqIEBwYXJhbSBtaW51dGUg5YiGXHJcbiAgICogQHBhcmFtIHNlY29uZCDnp5JcclxuICAgKi9cclxuICBwdWJsaWMgY291bnREb3duKHRpbWU6IG51bWJlciwgaG91cjogc3RyaW5nID0gJ+aXticsIG1pbnV0ZTogc3RyaW5nID0gJ+WIhicsIHNlY29uZDogc3RyaW5nID0gJ+enkicpOiBzdHJpbmcge1xyXG4gICAgbGV0IHRlbXAgPSB0aGlzLmNoYW5nZVRpbWUodGltZSlcclxuICAgIHJldHVybiBgJHt0ZW1wLmhvdXJzfSR7aG91cn0ke3RlbXAubWludXRlc30ke21pbnV0ZX0ke3RlbXAuc2Vjb25kc30ke3NlY29uZH1gXHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIOagvOW8j+WMluaXtumXtFxyXG4gICAqIEBwYXJhbSBkYXRlIERhdGVcclxuICAgKiBAcGFyYW0gZm9ybWF0IOagvOW8j1xyXG4gICAqL1xyXG4gIHB1YmxpYyBEYXRlRm9ybWF0KGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nID0gJ3l5eXktTU0tZGQgaGg6bW06c3MnKTogc3RyaW5nIHtcclxuICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXHJcbiAgICBsZXQgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxID4gOSA/IGRhdGUuZ2V0TW9udGgoKSArIDEgOiBgMCR7ZGF0ZS5nZXRNb250aCgpICsgMX1gXHJcbiAgICBsZXQgbW9udGgyID0gZGF0ZS5nZXRNb250aCgpICsgMVxyXG4gICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpID4gOSA/IGRhdGUuZ2V0RGF0ZSgpIDogYDAke2RhdGUuZ2V0RGF0ZSgpfWBcclxuICAgIGxldCBkYXkyID0gZGF0ZS5nZXREYXRlKClcclxuICAgIGxldCBob3VyID0gZGF0ZS5nZXRIb3VycygpID4gOSA/IGRhdGUuZ2V0SG91cnMoKSA6IGAwJHtkYXRlLmdldEhvdXJzKCl9YFxyXG4gICAgbGV0IGhvdXIyID0gZGF0ZS5nZXRIb3VycygpXHJcbiAgICBsZXQgbWludXRlID0gZGF0ZS5nZXRNaW51dGVzKCkgPiA5ID8gZGF0ZS5nZXRNaW51dGVzKCkgOiBgMCR7ZGF0ZS5nZXRNaW51dGVzKCl9YFxyXG4gICAgbGV0IG1pbnV0ZTIgPSBkYXRlLmdldE1pbnV0ZXMoKVxyXG4gICAgbGV0IHNlY29uZCA9IGRhdGUuZ2V0U2Vjb25kcygpID4gOSA/IGRhdGUuZ2V0U2Vjb25kcygpIDogYDAke2RhdGUuZ2V0U2Vjb25kcygpfWBcclxuICAgIGxldCBzZWNvbmQyID0gZGF0ZS5nZXRTZWNvbmRzKClcclxuXHJcbiAgICByZXR1cm4gZm9ybWF0XHJcbiAgICAgIC5yZXBsYWNlKC95eXl5LywgYCR7eWVhcn1gKVxyXG4gICAgICAucmVwbGFjZSgvTU0vLCBgJHttb250aH1gKVxyXG4gICAgICAucmVwbGFjZSgvTS8sIGAke21vbnRoMn1gKVxyXG4gICAgICAucmVwbGFjZSgvZGQvLCBgJHtkYXl9YClcclxuICAgICAgLnJlcGxhY2UoL2QvLCBgJHtkYXkyfWApXHJcbiAgICAgIC5yZXBsYWNlKC9oaC8sIGAke2hvdXJ9YClcclxuICAgICAgLnJlcGxhY2UoL2gvLCBgJHtob3VyMn1gKVxyXG4gICAgICAucmVwbGFjZSgvbW0vLCBgJHttaW51dGV9YClcclxuICAgICAgLnJlcGxhY2UoL20vLCBgJHttaW51dGUyfWApXHJcbiAgICAgIC5yZXBsYWNlKC9zcy8sIGAke3NlY29uZH1gKVxyXG4gICAgICAucmVwbGFjZSgvcy8sIGAke3NlY29uZDJ9YClcclxuICB9XHJcbiAgLyoqXHJcbiAgICog6I635Y+W5b2T5YmNdXRj5aSpMOeCuVxyXG4gICAqL1xyXG4gIHB1YmxpYyBVVENEYXRlKCk6IERhdGUge1xyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKVxyXG4gICAgbm93LnNldFVUQ0hvdXJzKDApXHJcbiAgICBub3cuc2V0VVRDTWludXRlcygwKVxyXG4gICAgbm93LnNldFVUQ1NlY29uZHMoMClcclxuICAgIG5vdy5zZXRVVENNaWxsaXNlY29uZHMoMClcclxuICAgIHJldHVybiBub3dcclxuICB9XHJcbiAgLyoqXHJcbiAgICog6I635Y+W5b2T5YmN5pe26Ze05Yiw5YiwMTk3MC0xLTHnmoTlpKnmlbDvvIh1dGPvvIlcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0VVRDRGF0ZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvICgyNCAqIDYwICogNjAgKiAxMDAwKSlcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IG1vZHVsZSBtdmMge1xuICBjbGFzcyBDb250cm9sbGVyTWFuYWdlciB7XG4gICAgcHJpdmF0ZSBjb250cm9sbGVycyA9IG5ldyBNYXAoKVxuXG4gICAgcHVibGljIHJlZ2lzdGVyKG12Yykge1xuICAgICAgY29uc3Qga2V5ID0gbXZjLnZpZXdLZXlcbiAgICAgIGlmICh0aGlzLmlzRXhpc3RzKGtleSkpIHJldHVyblxuICAgICAgaWYgKG12Yy5Db250cm9sbGVyKSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgbXZjLkNvbnRyb2xsZXIoKVxuICAgICAgICBjb250cm9sbGVyLnNldFZpZXcobXZjLnZpZXcpXG4gICAgICAgIGlmIChtdmMuTW9kZWwpIHtcbiAgICAgICAgICBjb250cm9sbGVyLnNldE1vZGVsKG5ldyBtdmMuTW9kZWwoKSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJzLnNldChrZXksIGNvbnRyb2xsZXIpXG4gICAgICAgIG12Yy52aWV3LnNldENvbnRyb2xsZXIoY29udHJvbGxlcilcbiAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHVucmVnaXN0ZXIoY29udHJvbGxlcktleSkge1xuICAgICAgaWYgKCF0aGlzLmlzRXhpc3RzKGNvbnRyb2xsZXJLZXkpKSByZXR1cm5cbiAgICAgIHRoaXMuY29udHJvbGxlcnMuZGVsZXRlKGNvbnRyb2xsZXJLZXkpXG4gICAgfVxuICAgIGlzRXhpc3RzKGNvbnRyb2xsZXJLZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xsZXJzLmhhcyhjb250cm9sbGVyS2V5KVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5bmjIflrppDb250cm9sbGVy5a+56LGhXG4gICAgICogQHBhcmFtICBjb250cm9sbGVyS2V5IENvbnRyb2xsZXLllK/kuIDmoIfor4ZcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIGdldENvbnRyb2xsZXIoY29udHJvbGxlcktleSkge1xuICAgICAgcmV0dXJuIHRoaXMuY29udHJvbGxlcnMuZ2V0KGNvbnRyb2xsZXJLZXkpXG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGNvbnN0IGNvbnRyb2xsZXJNZ3IgPSBuZXcgQ29udHJvbGxlck1hbmFnZXIoKVxufVxuIiwiaW1wb3J0ICogYXMgdiBmcm9tICcuL1ZpZXdNZ3InXHJcbmltcG9ydCAqIGFzIGMgZnJvbSAnLi9Db250cm9sbGVyTWFuYWdlcidcclxuLyoqXHJcbiAqIE1WQ1xyXG4gKiBbXHJcbiAqICB7XHJcbiAqICAgIHZpZXdLZXksXHJcbiAqICAgIFZpZXcsXHJcbiAqICAgIHZpZXcsVmlld+WunuS+i1xyXG4gKiAgICBMYXllcixcclxuICogICAgbGF5ZXIsTGF5ZXLlrp7kvotcclxuICogICAgZXZlbnQsXHJcbiAqICAgIENvbnRyb2xsZXIsXHJcbiAqICAgIE1vZGVsXHJcbiAqICB9XHJcbiAqIF1cclxuICovXHJcbmNvbnN0IE1WQyA9IFtdXHJcbmV4cG9ydCBjb25zdCBmaW5kQnlWaWV3S2V5ID0gdmlld0tleSA9PiBNVkMuZmluZChpdGVtID0+IGl0ZW0udmlld0tleSA9PT0gdmlld0tleSlcclxuZXhwb3J0IGNvbnN0IHVwZGF0ZU1WQ0l0ZW0gPSAoeyB2aWV3S2V5LCAuLi5wcm9wIH0pID0+IHtcclxuICBjb25zdCBpbmRleCA9IE1WQy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnZpZXdLZXkgPT09IHZpZXdLZXkpXHJcbiAgbGV0IG12Y1xyXG4gIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICBjb25zdCBpdGVtID0gTVZDW2luZGV4XVxyXG4gICAgbXZjID0geyAuLi5pdGVtLCAuLi5wcm9wIH1cclxuICAgIE1WQy5zcGxpY2UoaW5kZXgsIDEsIG12YylcclxuICB9IGVsc2Uge1xyXG4gICAgbXZjID0geyB2aWV3S2V5LCAuLi5wcm9wIH1cclxuICAgIE1WQy5wdXNoKG12YylcclxuICB9XHJcbiAgcmV0dXJuIG12Y1xyXG59XHJcbmxldCBVSSA9IExheWEuc3RhZ2VcclxuY29uc3QgUmVnaXN0ZXJNVkMgPSAoTGF5ZXIsIENvbnRyb2xsZXIgPSBudWxsLCBNb2RlbCA9IG51bGwpID0+IHtcclxuICByZXR1cm4gVmlldyA9PiB7XHJcbiAgICB1cGRhdGVNVkNJdGVtKHtcclxuICAgICAgdmlld0tleTogVmlldy52aWV3S2V5LFxyXG4gICAgICBMYXllcixcclxuICAgICAgQ29udHJvbGxlcixcclxuICAgICAgTW9kZWwsXHJcbiAgICAgIFZpZXcsXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5jb25zdCBzZXRVSVJvb3QgPSByb290ID0+IHtcclxuICBVSSA9IHJvb3RcclxufVxyXG5jb25zdCBjb250cm9sbGVyTWdyID0gYy5tdmMuY29udHJvbGxlck1nclxyXG5jb25zdCB2aWV3TWdyID0gdi5tdmMudmlld01nclxyXG5jb25zdCBvcGVuVmlldyA9IHYubXZjLm9wZW5WaWV3XHJcbmNvbnN0IGNsb3NlVmlldyA9IHYubXZjLmNsb3NlVmlld1xyXG5leHBvcnQgeyB2aWV3TWdyLCBjb250cm9sbGVyTWdyLCBvcGVuVmlldywgY2xvc2VWaWV3LCBSZWdpc3Rlck1WQywgc2V0VUlSb290LCBNVkMsIFVJIH1cclxuIiwiaW1wb3J0IHsgdXBkYXRlTVZDSXRlbSB9IGZyb20gJy4vTXZjTWdyJ1xyXG5cclxuZXhwb3J0IGNvbnN0IENsaWNrID0gdWkgPT4ge1xyXG4gIHJldHVybiAoVmlldywgbmFtZSwgZGVzY3JpcHRvcikgPT4ge1xyXG4gICAgY29uc3QgRXZlbnRUeXBlID0gTGF5YS5FdmVudC5DTElDS1xyXG4gICAgY29uc3QgbXZjID0gdXBkYXRlTVZDSXRlbSh7IHZpZXdLZXk6IFZpZXcuY29uc3RydWN0b3Iudmlld0tleSB9KVxyXG4gICAgbXZjLmV2ZW50ID0gbXZjLmV2ZW50IHx8IHt9XHJcbiAgICBjb25zdCBldmVudCA9IG12Yy5ldmVudFxyXG4gICAgZXZlbnRbRXZlbnRUeXBlXSA9IGV2ZW50W0V2ZW50VHlwZV0gfHwge31cclxuICAgIGNvbnN0IGV2ZW50VUkgPSBldmVudFtFdmVudFR5cGVdXHJcbiAgICBldmVudFVJW3VpXSA9IGV2ZW50VUlbdWldIHx8IFtdXHJcbiAgICBldmVudFVJW3VpXS5wdXNoKGRlc2NyaXB0b3IudmFsdWUpXHJcblxyXG4gICAgcmV0dXJuIGRlc2NyaXB0b3JcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBiaW5kRXZlbnQgPSBtdmMgPT4ge1xyXG4gIGlmIChtdmMuZXZlbnQpIHtcclxuICAgIE9iamVjdC5lbnRyaWVzKG12Yy5ldmVudCkuZm9yRWFjaChldmVudCA9PiB7XHJcbiAgICAgIGNvbnN0IHR5cGUgPSBldmVudFswXVxyXG4gICAgICBjb25zdCBldmVudFVJID0gZXZlbnRbMV1cclxuICAgICAgT2JqZWN0LmVudHJpZXMoZXZlbnRVSSkuZm9yRWFjaChldmVudFVJID0+IHtcclxuICAgICAgICBjb25zdCB1aSA9IGV2ZW50VUlbMF1cclxuICAgICAgICBjb25zdCBmdW5jID0gZXZlbnRVSVsxXVxyXG4gICAgICAgIGZ1bmMuZm9yRWFjaChmdW5jID0+IHtcclxuICAgICAgICAgIG12Yy52aWV3W3VpXS5vbih0eXBlLCBtdmMudmlldywgZnVuYylcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSVZpZXcgfSBmcm9tICcuL2ludGVyZmFjZS9JVmlldydcblxuaW1wb3J0IHsgSUxheWVyIH0gZnJvbSAnLi9pbnRlcmZhY2UvSUxheWVyJ1xuXG5pbXBvcnQgeyBVSSwgY29udHJvbGxlck1nciwgZmluZEJ5Vmlld0tleSB9IGZyb20gJy4vTXZjTWdyJ1xuaW1wb3J0IHsgYmluZEV2ZW50IH0gZnJvbSAnLi9VSUV2ZW50J1xuXG5leHBvcnQgbW9kdWxlIG12YyB7XG4gIGNsYXNzIFZpZXdNZ3Ige1xuICAgIHByaXZhdGUgdmlld3M6IE1hcDxzdHJpbmcsIElWaWV3PiA9IG5ldyBNYXA8c3RyaW5nLCBJVmlldz4oKVxuICAgIHByaXZhdGUgbGF5ZXJzOiBNYXA8c3RyaW5nLCBJTGF5ZXI+ID0gbmV3IE1hcDxzdHJpbmcsIElMYXllcj4oKVxuICAgIHByaXZhdGUgb3BlblZpZXdzOiBNYXA8c3RyaW5nLCBJVmlldz4gPSBuZXcgTWFwPHN0cmluZywgSVZpZXc+KClcblxuICAgIHB1YmxpYyBnZXRWaWV3KGtleSk6IElWaWV3IHtcbiAgICAgIHJldHVybiB0aGlzLnZpZXdzLmdldChrZXkpXG4gICAgfVxuICAgIHB1YmxpYyBzZXRWaWV3KGtleSwgdmlldzogSVZpZXcpOiB2b2lkIHtcbiAgICAgIHRoaXMudmlld3Muc2V0KGtleSwgdmlldylcbiAgICB9XG4gICAgcHVibGljIGdldExheWVyKExheWVyKTogSUxheWVyIHtcbiAgICAgIGxldCBsYXllciA9IHRoaXMubGF5ZXJzLmdldChMYXllci5sYXllcktleSlcbiAgICAgIGlmIChsYXllcikgcmV0dXJuIGxheWVyXG4gICAgICBsYXllciA9IHRoaXMuY3JlYXRlTGF5ZXIoTGF5ZXIpXG4gICAgICB0aGlzLnNldExheWVyKExheWVyLmxheWVyS2V5LCBsYXllcilcbiAgICAgIHJldHVybiBsYXllclxuICAgIH1cbiAgICBwdWJsaWMgc2V0TGF5ZXIoa2V5LCBsYXllcjogSUxheWVyKTogdm9pZCB7XG4gICAgICB0aGlzLmxheWVycy5zZXQoa2V5LCBsYXllcilcbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlblZpZXcoVmlldywgLi4uYXJncyk6IHZvaWQge1xuICAgICAgbGV0IF92aWV3ID0gdGhpcy5vcGVuVmlld3MuZ2V0KFZpZXcudmlld0tleSlcbiAgICAgIGlmIChfdmlldykge1xuICAgICAgICBfdmlldy5vcGVuQ2IuYXBwbHkoX3ZpZXcsIGFyZ3MpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgX3ZpZXcgPSB0aGlzLmdldFZpZXcoVmlldy52aWV3S2V5KVxuICAgICAgaWYgKF92aWV3KSB7XG4gICAgICAgIF92aWV3LmxheWVyLm9wZW5WaWV3KF92aWV3LCAuLi5hcmdzKVxuICAgICAgICB0aGlzLm9wZW5WaWV3cy5zZXQoVmlldy52aWV3S2V5LCBfdmlldylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBfdmlldyA9IHRoaXMuY3JlYXRlVmlldyhWaWV3KVxuICAgICAgX3ZpZXcubGF5ZXIub3BlblZpZXcoX3ZpZXcsIC4uLmFyZ3MpXG4gICAgfVxuICAgIHByaXZhdGUgY3JlYXRlVmlldyhWaWV3KSB7XG4gICAgICBjb25zdCBtdmMgPSBmaW5kQnlWaWV3S2V5KFZpZXcudmlld0tleSlcbiAgICAgIGNvbnN0IGxheWVyID0gdGhpcy5nZXRMYXllcihtdmMuTGF5ZXIpXG5cbiAgICAgIGxldCBfdmlldyA9IG5ldyBtdmMuVmlldygpXG4gICAgICBfdmlldy5sYXllciA9IGxheWVyXG4gICAgICBtdmMudmlldyA9IF92aWV3XG4gICAgICBtdmMubGF5ZXIgPSBsYXllclxuICAgICAgYmluZEV2ZW50KG12YylcbiAgICAgIGNvbnRyb2xsZXJNZ3IucmVnaXN0ZXIobXZjKVxuXG4gICAgICB0aGlzLnNldFZpZXcobXZjLnZpZXdLZXksIF92aWV3KVxuICAgICAgaWYgKF92aWV3LmluaXQpIF92aWV3LmluaXQoKVxuICAgICAgcmV0dXJuIF92aWV3XG4gICAgfVxuICAgIHByaXZhdGUgY3JlYXRlTGF5ZXIoTGF5ZXIpIHtcbiAgICAgIGNvbnN0IF9sYXllciA9IG5ldyBMYXllcihVSSlcbiAgICAgIF9sYXllci56T3JkZXIgPSBMYXllci5sYXllcktleVxuICAgICAgVUkuYWRkQ2hpbGQoX2xheWVyKVxuICAgICAgcmV0dXJuIF9sYXllclxuICAgIH1cbiAgICBwdWJsaWMgY2xvc2VWaWV3KFZpZXdPcktleU9ySW5zOiBhbnksIC4uLmFyZ3MpOiB2b2lkIHtcbiAgICAgIGxldCBfdmlld1xuICAgICAgaWYgKFZpZXdPcktleU9ySW5zLnZpZXdLZXkpIHtcbiAgICAgICAgX3ZpZXcgPSB0aGlzLmdldFZpZXcoVmlld09yS2V5T3JJbnMudmlld0tleSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5nZXRWaWV3KFZpZXdPcktleU9ySW5zKSkge1xuICAgICAgICBfdmlldyA9IHRoaXMuZ2V0VmlldyhWaWV3T3JLZXlPcklucylcbiAgICAgIH0gZWxzZSBpZiAoVmlld09yS2V5T3JJbnMuY29uc3RydWN0b3Iudmlld0tleSkge1xuICAgICAgICBfdmlldyA9IHRoaXMuZ2V0VmlldyhWaWV3T3JLZXlPcklucy5jb25zdHJ1Y3Rvci52aWV3S2V5KVxuICAgICAgfVxuICAgICAgaWYgKF92aWV3KSB7XG4gICAgICAgIF92aWV3LmxheWVyLmNsb3NlVmlldyhfdmlldywgLi4uYXJncylcbiAgICAgICAgdGhpcy5vcGVuVmlld3MuZGVsZXRlKF92aWV3LmNvbnN0cnVjdG9yLnZpZXdLZXkpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgaXNPcGVuKFZpZXdPcktleU9ySW5zKTogYm9vbGVhbiB7XG4gICAgICBsZXQgX3ZpZXdcbiAgICAgIGlmIChWaWV3T3JLZXlPcklucy52aWV3S2V5KSB7XG4gICAgICAgIF92aWV3ID0gdGhpcy5vcGVuVmlld3MuZ2V0KFZpZXdPcktleU9ySW5zLnZpZXdLZXkpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3BlblZpZXdzLmdldChWaWV3T3JLZXlPcklucykpIHtcbiAgICAgICAgX3ZpZXcgPSB0aGlzLm9wZW5WaWV3cy5nZXQoVmlld09yS2V5T3JJbnMpXG4gICAgICB9IGVsc2UgaWYgKFZpZXdPcktleU9ySW5zLmNvbnN0cnVjdG9yLnZpZXdLZXkpIHtcbiAgICAgICAgX3ZpZXcgPSB0aGlzLm9wZW5WaWV3cy5nZXQoVmlld09yS2V5T3JJbnMuY29uc3RydWN0b3Iudmlld0tleSlcbiAgICAgIH1cbiAgICAgIHJldHVybiAhIV92aWV3XG4gICAgfVxuICB9XG4gIGV4cG9ydCBjb25zdCB2aWV3TWdyID0gbmV3IFZpZXdNZ3IoKVxuICBleHBvcnQgY29uc3Qgb3BlblZpZXcgPSAoVmlldywgLi4uYXJncykgPT4ge1xuICAgIHZpZXdNZ3Iub3BlblZpZXcoVmlldywgLi4uYXJncylcbiAgfVxuXG4gIGV4cG9ydCBjb25zdCBjbG9zZVZpZXcgPSAoVmlld09yS2V5T3JJbnMsIC4uLmFyZ3MpID0+IHtcbiAgICB2aWV3TWdyLmNsb3NlVmlldyhWaWV3T3JLZXlPcklucywgLi4uYXJncylcbiAgfVxufVxuIiwiaW1wb3J0IEJhc2VNb2RlbCBmcm9tICcuLi9tb2RlbC9CYXNlTW9kZWwnXG5pbXBvcnQgKiBhcyB2IGZyb20gJy4uL3ZpZXcvQmFzZVZpZXcnXG5pbXBvcnQgQmFzZVZpZXcgPSB2LktVSS5CYXNlVmlld1xuaW1wb3J0IEdhbWVBcHAgZnJvbSAnLi4vLi4vZ2FtZS9HYW1lQXBwJ1xuaW1wb3J0IHsgZGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uL3NlcnZpY2UvZGlzcGF0Y2hlci9EaXNwYXRjaGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlQ29udHJvbGxlciB7XG4gIHByaXZhdGUgbW9kZWw6IEJhc2VNb2RlbFxuICBwcml2YXRlIHZpZXc6IEJhc2VWaWV3XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubW9kZWwgPSBudWxsXG4gICAgdGhpcy52aWV3ID0gbnVsbFxuICAgIHRoaXMuaW5pdCgpXG4gIH1cbiAgcHVibGljIGluaXQoKSB7fVxuICBwdWJsaWMgc2V0TW9kZWwobW9kZWwpIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWxcbiAgfVxuICBwdWJsaWMgZ2V0TW9kZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWxcbiAgfVxuICBwdWJsaWMgc2V0Vmlldyh2aWV3KSB7XG4gICAgdGhpcy52aWV3ID0gdmlld1xuICB9XG4gIHB1YmxpYyBnZXRWaWV3KCkge1xuICAgIHJldHVybiB0aGlzLnZpZXdcbiAgfVxuXG4gIC8v55uR5ZCs5LqL5Lu2XG4gIHB1YmxpYyBhZGRMaXN0ZW5lcihrZXksIGNhbGxiYWNrLCBjYWxsZXIpIHtcbiAgICBkaXNwYXRjaGVyLk9ic2VydmUoa2V5LCBjYWxsZXIsIGNhbGxiYWNrKVxuICB9XG4gIC8v56e76Zmk55uR5ZCs55qE5LqL5Lu2XG4gIHB1YmxpYyByZW1vdmVMaXN0ZW5lcihrZXkpIHtcbiAgICBkaXNwYXRjaGVyLlJlbW92ZShrZXkpXG4gIH1cbiAgLy/op6blj5Hkuovku7ZcbiAgcHVibGljIGRpc3BhdGNoKGtleSwgLi4uYXJncykge1xuICAgIGRpc3BhdGNoZXIuU2VuZE1zZyhrZXksIGFyZ3MpXG4gIH1cbiAgLyoqXG4gICAqIOazqOWGjOS7juacjeWKoeWZqOi/lOWbnua2iOaBr+eahOebkeWQrFxuICAgKiBAcGFyYW0gIGNtZCDmtojmga/moIfor4ZcbiAgICogQHBhcmFtIGNhbGxiYWNrIOWkhOeQhuWHveaVsFxuICAgKiBAcGFyYW0gIHRoaXNPYmog5aSE55CG5Ye95pWw5omA5bGe5a+56LGhXG4gICAqL1xuICBvYnNlcnZlclNvY2tldE1zZyhjbWQsIGNhbGxiYWNrLCB0aGlzT2JqKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gY21kIOa2iOaBr+agh+ivhlxuICAgKiBAcGFyYW0gbXNnIOaVsOaNrlxuICAgKiBAcGFyYW0gY2FsbGJhY2sg5aSE55CG5Ye95pWwXG4gICAqIEBwYXJhbSB0aGlzT2JqIOWkhOeQhuWHveaVsOaJgOWxnuWvueixoVxuICAgKi9cbiAgc2VuZFNvY2tldE1zZyhjbWQsIG1zZywgY2FsbGJhY2ssIHRoaXNPYmopIHt9XG5cbiAgLyoqXG4gICAqIOWPkemAgea2iOaBr+WIsEh0dHDmnI3liqHnq69cbiAgICogQHBhcmFtICBjbWQg5raI5oGv5qCH6K+GIOS+i+WmgjogVXNlci5sb2dpblxuICAgKiBAcGFyYW0gIG1zZyDmtojmga/lj4LmlbAg5L6L5aaCOiBsZXQgbXNnOmFueSA9IHtcInVOYW1lXCI6dU5hbWUsIFwidVBhc3NcIjp1UGFzc307XG4gICAqL1xuICBzZW5kSHR0cE1zZyhjbWQsIG1zZykge31cbiAgLy/lkJHlhbbku5bmqKHlnZfpgJrorq9cbiAgcHVibGljIHNlbmRNZXNzYWdlKCkge31cbn1cbiIsImltcG9ydCB7IElWaWV3IH0gZnJvbSAnLi4vaW50ZXJmYWNlL0lWaWV3J1xyXG5pbXBvcnQgeyBMYXllckNvbnN0IH0gZnJvbSAnLi4vLi4vY29uc3QvTGF5ZXJDb25zdCdcclxuaW1wb3J0IHsgSUxheWVyIH0gZnJvbSAnLi4vaW50ZXJmYWNlL0lMYXllcidcclxuZXhwb3J0IGNsYXNzIEJhc2VMYXllciBleHRlbmRzIExheWEuU3ByaXRlIGltcGxlbWVudHMgSUxheWVyIHtcclxuICBwcm90ZWN0ZWQgb3duU2NlbmU6IExheWEuU2NlbmVcclxuICBjb25zdHJ1Y3RvcihzY2VuZTogTGF5YS5TY2VuZSkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy5vd25TY2VuZSA9IHNjZW5lXHJcbiAgICB0aGlzLndpZHRoID0gdGhpcy5vd25TY2VuZS53aWR0aFxyXG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLm93blNjZW5lLmhlaWdodFxyXG4gICAgdGhpcy5oaXRUZXN0UHJpb3IgPSB0cnVlXHJcbiAgICB0aGlzLm1vdXNlVGhyb3VnaCA9IHRydWVcclxuICAgIHRoaXMubW91c2VFbmFibGVkID0gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGxheWVyS2V5ID0gTGF5ZXJDb25zdC5iYXNlXHJcbiAgcHVibGljIG9wZW5WaWV3KHZpZXc6IElWaWV3LCAuLi5hcmdzKTogdm9pZCB7XHJcbiAgICBpZiAodmlldy5vcGVuQ2IpIHtcclxuICAgICAgdmlldy5vcGVuQ2IuYXBwbHkodmlldywgYXJncylcclxuICAgIH1cclxuICAgIHRoaXMubW91c2VUaHJvdWdoID0gZmFsc2VcclxuICAgIHRoaXMuYWRkQ2hpbGQodmlldylcclxuICB9XHJcbiAgcHVibGljIGNsb3NlVmlldyh2aWV3OiBJVmlldyk6IHZvaWQge1xyXG4gICAgaWYgKHZpZXcuY2xvc2VDYikge1xyXG4gICAgICB2aWV3LmNsb3NlQ2IoKVxyXG4gICAgfVxyXG4gICAgdGhpcy5yZW1vdmVDaGlsZCh2aWV3KVxyXG4gICAgdGhpcy5tb3VzZVRocm91Z2ggPSB0aGlzLl9jaGlsZHJlbi5sZW5ndGggPT09IDBcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQmFzZUxheWVyIH0gZnJvbSAnLi9CYXNlTGF5ZXInXHJcbmltcG9ydCB7IElMYXllciB9IGZyb20gJy4uL2ludGVyZmFjZS9JTGF5ZXInXHJcbmltcG9ydCB7IExheWVyQ29uc3QgfSBmcm9tICcuLi8uLi9jb25zdC9MYXllckNvbnN0J1xyXG5pbXBvcnQgeyBjbG9zZVZpZXcgfSBmcm9tICcuLi9NdmNNZ3InXHJcbmNsYXNzIE1hc2sgZXh0ZW5kcyBMYXlhLkltYWdlIHtcclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnNraW4gPSAnY29tcC9ibGFuay5wbmcnXHJcbiAgICB0aGlzLnNpemVHcmlkID0gJzIsMiwyLDInXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEaWFsb2dMYXllciBleHRlbmRzIEJhc2VMYXllciBpbXBsZW1lbnRzIElMYXllciB7XHJcbiAgLy8gcHJpdmF0ZSBtTWFza1xyXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBMYXlhLlNjZW5lKSB7XHJcbiAgICBzdXBlcihzY2VuZSlcclxuICB9XHJcbiAgc3RhdGljIGxheWVyS2V5ID0gTGF5ZXJDb25zdC5kaWFsb2dcclxuXHJcbiAgcHJpdmF0ZSBtYXNrczogTWFwPHN0cmluZywgTGF5YS5JbWFnZT4gPSBuZXcgTWFwKClcclxuXHJcbiAgcHVibGljIG9wZW5WaWV3KHZpZXc6IGFueSwgLi4uYXJnczogYW55W10pOiB2b2lkIHtcclxuICAgIGxldCBtYXNrID0gdGhpcy5tYXNrcy5nZXQodmlldy5jb25zdHJ1Y3Rvci52aWV3S2V5KVxyXG4gICAgaWYgKCFtYXNrKSB7XHJcbiAgICAgIG1hc2sgPSBuZXcgTWFzaygpXHJcbiAgICAgIG1hc2sub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgIGNsb3NlVmlldyh2aWV3KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgbWFzay53aWR0aCA9IHRoaXMud2lkdGhcclxuICAgIG1hc2suaGVpZ2h0ID0gdGhpcy5oZWlnaHRcclxuXHJcbiAgICB0aGlzLm1hc2tzLnNldCh2aWV3LmNvbnN0cnVjdG9yLnZpZXdLZXksIG1hc2spXHJcbiAgICB0aGlzLmFkZENoaWxkKG1hc2spXHJcbiAgICBzdXBlci5vcGVuVmlldy5hcHBseSh0aGlzLCBbdmlldywgLi4uYXJnc10pXHJcblxyXG4gICAgdmlldy5hbmNob3JYID0gMC41XHJcbiAgICB2aWV3LmFuY2hvclkgPSAwLjVcclxuICAgIHZpZXcueCA9IHZpZXcud2lkdGggLyAyXHJcbiAgICB2aWV3LnkgPSB2aWV3LmhlaWdodCAvIDJcclxuICAgIHZpZXcubW91c2VUaHJvdWdoID0gdHJ1ZVxyXG4gICAgbGV0IHR3ZWVuID0gbmV3IExheWEuVHdlZW4oKVxyXG4gICAgdmlldy5zY2FsZVggPSAwLjhcclxuICAgIHZpZXcuc2NhbGVZID0gMC44XHJcbiAgICB0d2Vlbi50byhcclxuICAgICAgdmlldyxcclxuICAgICAgeyBzY2FsZVg6IDEuMDUsIHNjYWxlWTogMS4wNSB9LFxyXG4gICAgICAxMDAsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG5ldyBMYXlhLkhhbmRsZXIodGhpcywgKCkgPT4ge1xyXG4gICAgICAgIGxldCB0d2VlbiA9IG5ldyBMYXlhLlR3ZWVuKClcclxuICAgICAgICB0d2Vlbi50byh2aWV3LCB7IHNjYWxlWDogMSwgc2NhbGVZOiAxIH0sIDEwMCwgbnVsbClcclxuICAgICAgfSksXHJcbiAgICApXHJcbiAgfVxyXG4gIHB1YmxpYyBjbG9zZVZpZXcodmlldzogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMubWFza3MuZ2V0KHZpZXcuY29uc3RydWN0b3Iudmlld0tleSkpXHJcbiAgICBzdXBlci5jbG9zZVZpZXcodmlldylcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQmFzZUxheWVyIH0gZnJvbSAnLi9CYXNlTGF5ZXInXHJcblxyXG5pbXBvcnQgeyBJVmlldyB9IGZyb20gJy4uL2ludGVyZmFjZS9JVmlldydcclxuXHJcbmltcG9ydCB7IExheWVyQ29uc3QgfSBmcm9tICcuLi8uLi9jb25zdC9MYXllckNvbnN0J1xyXG5cclxuY29uc3QgZGlzID0gMTAwXHJcbmNvbnN0IHRpbWUgPSAyNDBcclxuZXhwb3J0IGNsYXNzIFZpZXdMYXllciBleHRlbmRzIEJhc2VMYXllciB7XHJcbiAgY29uc3RydWN0b3Ioc2NlbmU6IExheWEuU2NlbmUpIHtcclxuICAgIHN1cGVyKHNjZW5lKVxyXG4gIH1cclxuICBzdGF0aWMgbGF5ZXJLZXkgPSBMYXllckNvbnN0LnZpZXdcclxuICBwcml2YXRlIG9wZW5WaWV3czogSVZpZXdbXSA9IFtdXHJcbiBcclxuICBwdWJsaWMgb3BlblZpZXcodmlldzogYW55LCAuLi5hcmdzKSB7XHJcbiAgICBsZXQgbGFzdFZpZXc6IExheWEuU3ByaXRlXHJcbiAgICBjb25zdCB0d2VlbjEgPSBuZXcgTGF5YS5Ud2VlbigpXHJcbiAgICBpZiAodGhpcy5vcGVuVmlld3MubGVuZ3RoKSB7XHJcbiAgICAgIGxhc3RWaWV3ID0gdGhpcy5vcGVuVmlld3NbdGhpcy5vcGVuVmlld3MubGVuZ3RoIC0gMV1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxhc3RWaWV3ID0gdGhpcy5vd25TY2VuZVxyXG4gICAgfVxyXG4gICAgbGFzdFZpZXcueCA9IHRoaXMub3duU2NlbmUgPT09IGxhc3RWaWV3ID8gMCA6IGRpc1xyXG4gICAgdHdlZW4xLnRvKFxyXG4gICAgICBsYXN0VmlldyxcclxuICAgICAgeyB4OiB0aGlzLm93blNjZW5lID09PSBsYXN0VmlldyA/IC1kaXMgOiAwIH0sXHJcbiAgICAgIHRpbWUsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG5ldyBMYXlhLkhhbmRsZXIobGFzdFZpZXcsICgpID0+IHtcclxuICAgICAgICBpZiAobGFzdFZpZXcgIT09IHRoaXMub3duU2NlbmUpIGxhc3RWaWV3LnJlbW92ZVNlbGYoKVxyXG4gICAgICB9KSxcclxuICAgIClcclxuICAgIHRoaXMub3BlblZpZXdzLnB1c2godmlldylcclxuICAgIHN1cGVyLm9wZW5WaWV3LmFwcGx5KHRoaXMsIFt2aWV3LCAuLi5hcmdzXSlcclxuICAgIGNvbnN0IHR3ZWVuMiA9IG5ldyBMYXlhLlR3ZWVuKClcclxuICAgIHZpZXcueCA9IHRoaXMud2lkdGhcclxuICAgIHR3ZWVuMi50byhcclxuICAgICAgdmlldyxcclxuICAgICAgeyB4OiBkaXMgfSxcclxuICAgICAgdGltZSxcclxuICAgICAgbnVsbCxcclxuICAgICAgbmV3IExheWEuSGFuZGxlcih2aWV3LCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHZpZXcuYWZ0ZXJPcGVuKSB7XHJcbiAgICAgICAgICB2aWV3LmFmdGVyT3Blbi5jYWxsKHZpZXcpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgIClcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9zZVZpZXcodmlldzogYW55KSB7XHJcbiAgICBsZXQgbGFzdFZpZXdcclxuICAgIGNvbnN0IHR3ZWVuMSA9IG5ldyBMYXlhLlR3ZWVuKClcclxuICAgIHRoaXMub3BlblZpZXdzLnBvcCgpXHJcbiAgICBpZiAodGhpcy5vcGVuVmlld3MubGVuZ3RoID4gMCkge1xyXG4gICAgICBsYXN0VmlldyA9IHRoaXMub3BlblZpZXdzW3RoaXMub3BlblZpZXdzLmxlbmd0aCAtIDFdXHJcbiAgICAgIGxhc3RWaWV3LnpPcmRlciA9IHZpZXcuek9yZGVyIC0gMVxyXG4gICAgICBsYXN0Vmlldy5sYXllci5hZGRDaGlsZChsYXN0VmlldylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxhc3RWaWV3ID0gdGhpcy5vd25TY2VuZVxyXG4gICAgfVxyXG5cclxuICAgIGxhc3RWaWV3LnggPSBsYXN0VmlldyA9PT0gdGhpcy5vd25TY2VuZSA/IC1kaXMgOiAwXHJcblxyXG4gICAgdHdlZW4xLnRvKGxhc3RWaWV3LCB7IHg6IGxhc3RWaWV3ID09PSB0aGlzLm93blNjZW5lID8gMCA6IGRpcyB9LCB0aW1lKVxyXG4gICAgY29uc3QgdHdlZW4yID0gbmV3IExheWEuVHdlZW4oKVxyXG4gICAgdmlldy54ID0gZGlzXHJcbiAgICB0d2VlbjIudG8oXHJcbiAgICAgIHZpZXcsXHJcbiAgICAgIHsgeDogdGhpcy53aWR0aCB9LFxyXG4gICAgICB0aW1lLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsICgpID0+IHtcclxuICAgICAgICBzdXBlci5jbG9zZVZpZXcodmlldylcclxuICAgICAgfSksXHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VNb2RlbHtcbiAgICBcbn0iLCJpbXBvcnQgQmFzZUNvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlci9CYXNlQ29udHJvbGxlcidcbmltcG9ydCBzdG9yZSBmcm9tICcuLi8uLi8uLi9nYW1lL3N0b3JlL3N0b3JlJ1xuXG5leHBvcnQgbmFtZXNwYWNlIEtVSSB7XG4gIGV4cG9ydCBjbGFzcyBCYXNlVmlldyBleHRlbmRzIExheWEuVmlldyB7XG4gICAgcHVibGljIGNvbnRyb2xsZXI6IEJhc2VDb250cm9sbGVyXG4gICAgcHVibGljIHVuc3Vic2NyaWJlXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpXG4gICAgfVxuICAgIHB1YmxpYyBzZXRDb250cm9sbGVyKGN0cmwpIHtcbiAgICAgIHRoaXMuY29udHJvbGxlciA9IGN0cmxcbiAgICB9XG4gICAgcHVibGljIGluaXQoKSB7XG4gICAgICB0aGlzLmluaXREYXRhKClcbiAgICAgIHRoaXMuaW5pdFJlcygpXG4gICAgICB0aGlzLmluaXRWaWV3KClcbiAgICB9XG4gICAgcHVibGljIGluaXREYXRhKCkge31cbiAgICBwdWJsaWMgaW5pdFJlcygpIHt9XG4gICAgcHVibGljIGluaXRWaWV3KCkge31cbiAgICBwdWJsaWMgb3BlbkNiKC4uLmFyZ3MpIHtcbiAgICAgIHRoaXMudXBkYXRlVmlldygpXG4gICAgICB0aGlzLnVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKHRoaXMudXBkYXRlVmlldy5iaW5kKHRoaXMpKVxuICAgIH1cbiAgICBwdWJsaWMgY2xvc2VDYiguLi5hcmdzKSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlKClcbiAgICB9XG4gICAgcHVibGljIHVwZGF0ZVZpZXcoKSB7fVxuICB9XG59XG4iLCJpbXBvcnQgeyBEaXNwYXRjaGVyIH0gZnJvbSAnLi9kaXNwYXRjaGVyL0Rpc3BhdGNoZXInXHJcblxyXG5leHBvcnQgY2xhc3MgU2VydmljZSB7XHJcbiAgcHVibGljIHN0YXRpYyBJbml0KCk6IHZvaWQge1xyXG5cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGRpc3BhdGNoZXIoKTogRGlzcGF0Y2hlciB7XHJcbiAgICByZXR1cm4gRGlzcGF0Y2hlci5DcmVhdGVPckdldCgpXHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBPYnNlcnZlciB9IGZyb20gJy4vT2JzZXJ2ZXInXG5pbXBvcnQgeyBTaW5nbGV0b24gfSBmcm9tICcuLi8uLi9iYXNlL1NpbmdsZXRvbidcbmV4cG9ydCBjbGFzcyBEaXNwYXRjaGVyIGV4dGVuZHMgU2luZ2xldG9uIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLl9vYnNlcnZlcnMgPSB7fVxuICB9XG5cbiAgLyoqXG4gICAqIOa2iOaBr+WIl+ihqFxuICAgKi9cbiAgcHJpdmF0ZSBfb2JzZXJ2ZXJzOiBhbnlcblxuICBwdWJsaWMgT2JzZXJ2ZSh0b3BpY186IGFueSwgb2JzZXJ2ZXJfOiBhbnksIGhhbmRsZXJfOiBGdW5jdGlvbik6IE9ic2VydmVyIHtcbiAgICBpZiAoIXRoaXMuX29ic2VydmVyc1t0b3BpY19dKSB0aGlzLl9vYnNlcnZlcnNbdG9waWNfXSA9IFtdXG4gICAgbGV0IG9ic2VydmVyOiBPYnNlcnZlciA9IG5ldyBPYnNlcnZlcih0b3BpY18sIG9ic2VydmVyXywgaGFuZGxlcl8pXG4gICAgdGhpcy5fb2JzZXJ2ZXJzW3RvcGljX10ucHVzaChvYnNlcnZlcilcbiAgICByZXR1cm4gb2JzZXJ2ZXIuUmV1c2UodG9waWNfLCBvYnNlcnZlcl8sIGhhbmRsZXJfKVxuICB9XG5cbiAgcHVibGljIE9ic2VydmVMaXN0KG9ic2VydmVyXzogYW55LCB0b3BpY3NfOiBhbnlbXSwgaGFuZGxlcnNfOiBhbnlbXSk6IE9ic2VydmVyW10ge1xuICAgIGxldCBsaXN0OiBPYnNlcnZlcltdID0gW11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvcGljc18ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpc3QucHVzaCh0aGlzLk9ic2VydmUodG9waWNzX1tpXSwgb2JzZXJ2ZXJfLCBoYW5kbGVyc19baV0pKVxuICAgIH1cbiAgICByZXR1cm4gbGlzdFxuICB9XG5cbiAgcHVibGljIFJlbW92ZUxpc3Qob2JzOiBPYnNlcnZlcltdKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuUmVtb3ZlKG9ic1tpXSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgU2VuZE1zZyh0b3BpY186IGFueSwgLi4uYXJnczogYW55W10pOiBhbnlbXSB7XG4gICAgaWYgKCF0aGlzLl9vYnNlcnZlcnNbdG9waWNfXSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBsZXQgcmV0OiBhbnlbXSA9IFtdXG4gICAgdGhpcy5fb2JzZXJ2ZXJzW3RvcGljX10uZm9yRWFjaChcbiAgICAgIChlbGVtZW50KTogdm9pZCA9PiB7XG4gICAgICAgIHJldC5wdXNoKGVsZW1lbnQuUmVjdk1zZyguLi5hcmdzKSlcbiAgICAgIH0sXG4gICAgKVxuICAgIHJldHVybiByZXRcbiAgfVxuXG4gIHB1YmxpYyBSZW1vdmUob2JzOiBPYnNlcnZlcik6IE9ic2VydmVyIHtcbiAgICBpZiAob2JzID09IG51bGwpIHJldHVyblxuICAgIGxldCBhcnI6IGFueVtdID0gdGhpcy5fb2JzZXJ2ZXJzW29icy50b3BpY11cblxuICAgIGlmICghYXJyKSByZXR1cm4gbnVsbFxuXG4gICAgbGV0IGluZDogbnVtYmVyID0gYXJyLmluZGV4T2Yob2JzKVxuICAgIGlmIChpbmQgPCAwKSByZXR1cm4gbnVsbFxuXG4gICAgYXJyLnNwbGljZShpbmQsIDEpXG4gICAgcmV0dXJuIG9ic1xuICB9XG5cbiAgcHVibGljIFJlbW92ZUFsbCh0b3BpYzogYW55KTogdm9pZCB7XG4gICAgbGV0IGFycjogYW55W10gPSB0aGlzLl9vYnNlcnZlcnNbdG9waWNdXG4gICAgaWYgKCFhcnIpIHJldHVyblxuICAgIGFyci5zcGxpY2UoMCwgYXJyLmxlbmd0aClcbiAgfVxufVxuY29uc3QgZGlzcGF0Y2hlciA9IG5ldyBEaXNwYXRjaGVyKClcbmV4cG9ydCB7IGRpc3BhdGNoZXIgfVxuIiwiZXhwb3J0IGNsYXNzIE9ic2VydmVyIHtcbiAgcHVibGljIHRvcGljOiBhbnlcbiAgcHVibGljIG9ic2VydmVyOiBhbnlcbiAgcHVibGljIGhhbmRsZXI6IEZ1bmN0aW9uXG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRvcGljXzogYW55LCBvYnNlcnZlcl86IGFueSwgaGFuZGxlcl86IEZ1bmN0aW9uKSB7XG4gICAgdGhpcy5SZXVzZSh0b3BpY18sIG9ic2VydmVyXywgaGFuZGxlcl8pXG4gIH1cblxuICBwdWJsaWMgUmV1c2UodG9waWNfOiBhbnksIG9ic2VydmVyXzogYW55LCBoYW5kbGVyXzogRnVuY3Rpb24pOiBPYnNlcnZlciB7XG4gICAgdGhpcy50b3BpYyA9IHRvcGljX1xuICAgIHRoaXMub2JzZXJ2ZXIgPSBvYnNlcnZlcl9cbiAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyX1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBwdWJsaWMgUmVjdk1zZyguLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xuICAgIGxldCByZXQ6IGFueVxuICAgIGlmICghdGhpcy5vYnNlcnZlcikge1xuICAgICAgcmV0ID0gdGhpcy5oYW5kbGVyKC4uLmFyZ3MpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldCA9IHRoaXMuaGFuZGxlci5hcHBseSh0aGlzLm9ic2VydmVyLCBhcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmV0XG4gIH1cbn1cbiIsImltcG9ydCB7IHN0YXRlIH0gZnJvbSAnLi9zdGF0ZSdcclxuZXhwb3J0IGVudW0gQUNUSU9OVFlQRSB7XHJcbiAgQ0hBTkdFX1RFU1REQVRBMSA9IDEsXHJcbiAgQ0hBTkdFX1RFU1REQVRBMixcclxuICBDSEFOR0VfVVNFUk5BTUUsXHJcbiAgQ0hBTkdFX1RPS0VOLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2hhbmdlRGF0YTEgPSBkYXRhMSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFDVElPTlRZUEUuQ0hBTkdFX1RFU1REQVRBMSxcclxuICAgIHRlc3REYXRhOiB7IC4uLnN0YXRlLnRlc3REYXRhLCBkYXRhMSB9LFxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgY2hhbmdlRGF0YTIgPSBkYXRhMiA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFDVElPTlRZUEUuQ0hBTkdFX1RFU1REQVRBMixcclxuICAgIHRlc3REYXRhOiB7IC4uLnN0YXRlLnRlc3REYXRhLCBkYXRhMiB9LFxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgY2hhbmdlVXNlcm5hbWUgPSBuYW1lID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQUNUSU9OVFlQRS5DSEFOR0VfVVNFUk5BTUUsXHJcbiAgICB1c2VyOiB7IG5hbWUgfSxcclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IGNoYW5nZVRva2VuID0gdG9rZW4gPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBQ1RJT05UWVBFLkNIQU5HRV9UT0tFTixcclxuICAgIHRva2VuLFxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBQ1RJT05UWVBFIH0gZnJvbSAnLi9hY3Rpb25zJ1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcclxuY29uc3QgY2hhbmdlVGVzdERhdGEgPSAoc3RhdGUgPSB7IGRhdGExOiAnZGF0YTEnLCBkYXRhMjogJ2RhdGEyJyB9LCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEFDVElPTlRZUEUuQ0hBTkdFX1RFU1REQVRBMTpcclxuICAgIGNhc2UgQUNUSU9OVFlQRS5DSEFOR0VfVEVTVERBVEEyOlxyXG4gICAgICByZXR1cm4geyAuLi5hY3Rpb24udGVzdERhdGEgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcbmNvbnN0IGNoYW5nZVVzZXJuYW1lID0gKHN0YXRlID0geyBuYW1lOiAnbm9yJyB9LCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEFDVElPTlRZUEUuQ0hBTkdFX1VTRVJOQU1FOlxyXG4gICAgICByZXR1cm4geyAuLi5hY3Rpb24udXNlciB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuY29uc3QgY2hhbmdlVG9rZW4gPSAoc3RhdGUgPSAnJywgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBBQ1RJT05UWVBFLkNIQU5HRV9UT0tFTjpcclxuICAgICAgcmV0dXJuIGFjdGlvbi50b2tlblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcbmNvbnN0IGNoYW5nZVRlc3REYXRhMSA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgcmV0dXJuIHN0YXRlXHJcbn1cclxuY29uc3QgcmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoeyB0ZXN0RGF0YTogY2hhbmdlVGVzdERhdGEsIHVzZXI6IGNoYW5nZVVzZXJuYW1lLCB0b2tlbjogY2hhbmdlVG9rZW4gfSlcclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcnNcclxuIiwiZXhwb3J0IGNvbnN0IHN0YXRlID0ge1xyXG4gIHRva2VuOiAnaGVsbG8nLFxyXG4gIHVzZXI6IHtcclxuICAgIG5hbWU6ICd0ZXN0MScsXHJcbiAgfSxcclxuICB0ZXN0RGF0YToge1xyXG4gICAgZGF0YTE6ICdkYXRhMScsXHJcbiAgICBkYXRhMjogJ2RhdGEyJyxcclxuICAgIHRlc3REYXRhMjoge1xyXG4gICAgICBkYXRhMTogJzExMScsXHJcbiAgICAgIHRlc3REYXRhMzoge1xyXG4gICAgICAgIGRhdGExOiAnMjIyJyxcclxuICAgICAgICB0ZXN0RGF0YTQ6ICczMzMnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCByZWR1Y2VycyBmcm9tICcuL3JlZHVjZXInXHJcbmltcG9ydCB7IHN0YXRlIH0gZnJvbSAnLi9zdGF0ZSdcclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2Vycywgc3RhdGUgYXMgYW55KVxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZVxyXG4iLCJpbXBvcnQgeyB1aSB9IGZyb20gJy4uLy4uLy4uLy4uL3VpL2xheWFNYXhVSSdcbmltcG9ydCBCUGFnZSBmcm9tICcuLi9CUGFnZS9CUGFnZSdcbmltcG9ydCB7IFZpZXdDb25zdCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvY29uc3QvVmlld0NvbnN0J1xuaW1wb3J0IHsgQmFzZUxheWVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9tdmMvbGF5ZXIvQmFzZUxheWVyJ1xuaW1wb3J0IHsgUmVnaXN0ZXJNVkMsIG9wZW5WaWV3IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9tdmMvTXZjTWdyJ1xuaW1wb3J0IEFQYWdlQ29udHJvbGxlciBmcm9tICcuL0FQYWdlQ29udHJvbGxlcidcbmltcG9ydCBBUGFnZU1vZGVsIGZyb20gJy4vQXBhZ2VNb2RlbCdcbmltcG9ydCBCYXNlVGVzdCBmcm9tICcuLi9CYXNlVGVzdCdcbmltcG9ydCAnLi4vLi4vLi4vc3RvcmUvc3RvcmUnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vLi4vLi4vc3RvcmUvc3RvcmUnXG5AUmVnaXN0ZXJNVkMoQmFzZUxheWVyLCBBUGFnZUNvbnRyb2xsZXIsIEFQYWdlTW9kZWwpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBUGFnZSBleHRlbmRzIHVpLnZpZXcuQVBhZ2VVSSB7XG4gIHN0YXRpYyB2aWV3S2V5ID0gVmlld0NvbnN0LkFQYWdlXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmJ0bi5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKSA9PiB7XG4gICAgICBvcGVuVmlldyhCUGFnZSlcbiAgICB9KVxuICAgIHRoaXMuYmFzZUJ0bi5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKSA9PiB7XG4gICAgICBvcGVuVmlldyhCYXNlVGVzdClcbiAgICB9KVxuICB9XG4gIHB1YmxpYyBpbml0KCkge1xuICAgIC8vIHRoaXMuY29udHJvbGxlci5hZGRMaXN0ZW5lcihcbiAgICAvLyAgICdjaGFuZ2UnLFxuICAgIC8vICAgYXJncyA9PiB7XG4gICAgLy8gICAgIHRoaXMuY29udGVudHMudGV4dCA9IGFyZ3NbMF1cbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2codGhpcylcbiAgICAvLyAgIH0sXG4gICAgLy8gICB0aGlzLFxuICAgIC8vIClcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVWaWV3KCkge1xuICAgIGNvbnN0IHsgdXNlciwgdG9rZW4sIHRlc3REYXRhIH0gPSBzdG9yZS5nZXRTdGF0ZSgpXG4gICAgdGhpcy5jb250ZW50cy50ZXh0ID0gdGVzdERhdGEuZGF0YTFcbiAgICAvLyB0aGlzLnVzZXJuYW1lLnRleHQgPSB1c2VyLm5hbWVcbiAgICAvLyB0aGlzLnRva2VuLnRleHQgPSB0b2tlblxuICB9XG4gIHB1YmxpYyBvcGVuQ2IoYXJncykge1xuICAgIHN1cGVyLm9wZW5DYigpXG4gICAgdmFyIGh0bWwgPSBcIjxzcGFuIHN0eWxlPSdmb250U2l6ZTozMCcgY29sb3I9JyM2N2ZjMmMnPuWvjOaWh+acrDwvc3Bhbj5cIlxuICAgIGh0bWwgKz0gXCI8aW1nIHN0eWxlPSdoZWlnaHQ6NTA7d2lkdGg6NTAnIHNyYz0nQ2hhcmFjdGVycy9UYW5rXzQucG5nJz48L2ltZz5cIlxuICAgIGh0bWwgKz0gXCI8c3BhbiBzdHlsZT0nZm9udFNpemU6MjAnIGNvbG9yPScjZmZmJz7mtYvor5U8L3NwYW4+XCJcbiAgICB0aGlzLmRkLnBvcygwLCAwKVxuICAgIHRoaXMuZGQuc3R5bGUud2lkdGggPSA2NDBcbiAgICB0aGlzLmRkLnN0eWxlLmFsaWduID0gJ2NlbnRlcidcblxuICAgIHRoaXMuZGQuaW5uZXJIVE1MID0gaHRtbFxuICAgIGNvbnNvbGUubG9nKHRoaXMuZGQpXG4gIH1cbn1cbiIsImltcG9ydCBCYXNlQ29udHJvbGxlciBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL212Yy9jb250cm9sbGVyL0Jhc2VDb250cm9sbGVyJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVBhZ2VDb250cm9sbGVyIGV4dGVuZHMgQmFzZUNvbnRyb2xsZXIge1xuICAvKipcbiAgICpcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgfVxuICBwdWJsaWMgaW5pdCgpIHtcbiAgICBzdXBlci5pbml0KClcbiAgfVxuXG59XG4iLCJpbXBvcnQgQmFzZU1vZGVsIGZyb20gXCIuLi8uLi8uLi8uLi9jb3JlL212Yy9tb2RlbC9CYXNlTW9kZWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVBhZ2VNb2RlbCBleHRlbmRzIEJhc2VNb2RlbHtcbiAgICBcbn0iLCJpbXBvcnQgQVBhZ2UgZnJvbSBcIi4vQVBhZ2VcIjtcbmltcG9ydCBHYW1lQXBwIGZyb20gXCIuLi8uLi8uLi8uLi9jb3JlL2dhbWUvR2FtZUFwcFwiO1xuaW1wb3J0IEVmZmVjdFV0aWxzIGZyb20gXCIuLi8uLi8uLi8uLi9jb3JlL1V0aWxzL0VmZmVjdFV0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3QgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XG4gICAgLy8gLyoqIEBwcm9wIHtuYW1lOmludFR5cGUsIHRpcHM6XCLmlbTmlbDnsbvlnovnpLrkvotcIiwgdHlwZTpJbnQsIGRlZmF1bHQ6MTAwMH0qL1xuICAgIC8vIHB1YmxpYyBpbnRUeXBlOiBudW1iZXIgPSAxMDAwO1xuICAgIC8vIC8qKiBAcHJvcCB7bmFtZTpudW1UeXBlLCB0aXBzOlwi5pWw5a2X57G75Z6L56S65L6LXCIsIHR5cGU6TnVtYmVyLCBkZWZhdWx0OjEwMDB9Ki9cbiAgICAvLyBwdWJsaWMgbnVtVHlwZTogbnVtYmVyID0gMTAwMDtcbiAgICAvLyAvKiogQHByb3Age25hbWU6c3RyVHlwZSwgdGlwczpcIuWtl+espuS4suexu+Wei+ekuuS+i1wiLCB0eXBlOlN0cmluZywgZGVmYXVsdDpcImhlbGxvIGxheWFcIn0qL1xuICAgIC8vIHB1YmxpYyBzdHJUeXBlOiBzdHJpbmcgPSBcImhlbGxvIGxheWFcIjtcbiAgICAvLyAvKiogQHByb3Age25hbWU6Ym9vbFR5cGUsIHRpcHM6XCLluIPlsJTnsbvlnovnpLrkvotcIiwgdHlwZTpCb29sLCBkZWZhdWx0OnRydWV9Ki9cbiAgICAvLyBwdWJsaWMgYm9vbFR5cGU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIC8vIOabtOWkmuWPguaVsOivtOaYjuivt+iuv+mXrjogaHR0cHM6Ly9sZGMyLmxheWFib3guY29tL2RvYy8/bmF2PXpoLWFzLTItNC0wXG4gICAgXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cbiAgICBvbkF3YWtlKCl7XG4gICAgICAgIHRoaXMub3duZXIub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLCgpPT57XG4gICAgICAgIEVmZmVjdFV0aWxzLm1hY0ljb25TaGFrZSh0aGlzLm93bmVyLCh0aGlzLm93bmVyIGFzIExheWEuU3ByaXRlKS55LCgpPT57Y29uc29sZS5sb2coMSl9LHRoaXMgKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBvbkRpc2FibGUoKTogdm9pZCB7XG4gICAgfVxufSIsImltcG9ydCB7IHVpIH0gZnJvbSAnLi4vLi4vLi4vLi4vdWkvbGF5YU1heFVJJ1xuaW1wb3J0IHsgVmlld0NvbnN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9jb25zdC9WaWV3Q29uc3QnXG5pbXBvcnQgeyBEaWFsb2dMYXllciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvbXZjL2xheWVyL0RpYWxvZ0xheWVyJ1xuaW1wb3J0IEJQYWdlQ29udHJvbGxlciBmcm9tICcuL0JQYWdlQ29udHJvbGxlcidcbmltcG9ydCBCUGFnZU1vZGVsIGZyb20gJy4vQlBhZ2VNb2RlbCdcbmltcG9ydCB7IFJlZ2lzdGVyTVZDLCBjbG9zZVZpZXcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL212Yy9NdmNNZ3InXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vLi4vLi4vc3RvcmUvc3RvcmUnXG5pbXBvcnQgeyBjaGFuZ2VEYXRhMSB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMnXG5AUmVnaXN0ZXJNVkMoRGlhbG9nTGF5ZXIsIEJQYWdlQ29udHJvbGxlciwgQlBhZ2VNb2RlbClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJQYWdlIGV4dGVuZHMgdWkudmlldy5CUGFnZVVJIHtcbiAgc3RhdGljIHZpZXdLZXkgPSBWaWV3Q29uc3QuQlBhZ2VcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gIH1cbiAgcHVibGljIGluaXQoKSB7XG4gICAgdGhpcy5jbG9zZV9idG4ub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCkgPT4ge1xuICAgICAgY2xvc2VWaWV3KHRoaXMpXG4gICAgfSlcbiAgICB0aGlzLmNoYW5nZS5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKSA9PiB7XG4gICAgICAvLyB0aGlzLmNvbnRyb2xsZXIuZGlzcGF0Y2goJ2NoYW5nZScsIFsnI2VlMzMyMSddKVxuICAgICAgc3RvcmUuZGlzcGF0Y2goY2hhbmdlRGF0YTEoJ2hlbGxvIHdvcmxkJykpXG4gICAgfSlcbiAgfVxuICBwdWJsaWMgdXBkYXRlVmlldygpIHtcbiAgICBjb25zdCB7IHVzZXIsIHRva2VuLCB0ZXN0RGF0YSB9ID0gc3RvcmUuZ2V0U3RhdGUoKVxuICAgIHRoaXMudXNlcm5hbWUudGV4dCA9IHVzZXIubmFtZVxuICAgIHRoaXMudG9rZW4udGV4dCA9IHRva2VuXG4gIH1cbn1cbiIsImltcG9ydCBCYXNlQ29udHJvbGxlciBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL212Yy9jb250cm9sbGVyL0Jhc2VDb250cm9sbGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCUGFnZUNvbnRyb2xsZXIgZXh0ZW5kcyBCYXNlQ29udHJvbGxlciB7XG4gIC8qKlxuICAgKlxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICB9XG4gIHB1YmxpYyBpbml0KCkge1xuICAgIHN1cGVyLmluaXQoKVxuICB9XG59XG4iLCJpbXBvcnQgQmFzZU1vZGVsIGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvbXZjL21vZGVsL0Jhc2VNb2RlbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQlBhZ2VNb2RlbCBleHRlbmRzIEJhc2VNb2RlbCB7XG4gIHB1YmxpYyBjb2xvcjogc3RyaW5nXG59XG4iLCJpbXBvcnQgeyB1aSB9IGZyb20gJy4uLy4uLy4uL3VpL2xheWFNYXhVSSdcbmltcG9ydCB7IElWaWV3IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvaW50ZXJmYWNlL0lWaWV3J1xuaW1wb3J0IHsgVmlld0NvbnN0IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9jb25zdC9WaWV3Q29uc3QnXG5pbXBvcnQgeyBCYXNlTGF5ZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL212Yy9sYXllci9CYXNlTGF5ZXInXG5pbXBvcnQgRGlhbG9nVGVzdCBmcm9tICcuL0RpYWxvZ1Rlc3QnXG5pbXBvcnQgVmlld1Rlc3QgZnJvbSAnLi9WaWV3VGVzdCdcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vTG9hZGluZydcbmltcG9ydCB7IFJlZ2lzdGVyTVZDLCBvcGVuVmlldywgY2xvc2VWaWV3IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvTXZjTWdyJ1xuaW1wb3J0IHsgQ2xpY2sgfSBmcm9tICcuLi8uLi8uLi9jb3JlL212Yy9VSUV2ZW50J1xuaW1wb3J0IEdhbWVBcHAgZnJvbSAnLi4vLi4vLi4vY29yZS9nYW1lL0dhbWVBcHAnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vLi4vc3RvcmUvc3RvcmUnXG5pbXBvcnQgeyBjaGFuZ2VUb2tlbiwgY2hhbmdlVXNlcm5hbWUgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJ1xuQFJlZ2lzdGVyTVZDKEJhc2VMYXllcilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VUZXN0IGV4dGVuZHMgdWkudmlldy5CYXNlVGVzdFVJIGltcGxlbWVudHMgSVZpZXcge1xuICBzdGF0aWMgdmlld0tleSA9IFZpZXdDb25zdC5CYXNlVGVzdFxuICBwdWJsaWMgbW92ZVkgPSBmYWxzZVxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy50aW1lckxvb3AoNTAwLCB0aGlzLCAoKSA9PiB7XG4gICAgICB0aGlzLnRhbmsuaW5kZXggPSB0aGlzLnRhbmsuaW5kZXggPT09IDcgPyA0IDogdGhpcy50YW5rLmluZGV4ICsgMVxuICAgIH0pXG4gICAgdGhpcy50aW1lckxvb3AoMjUwLCB0aGlzLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5tb3ZlWSkge1xuICAgICAgICB0aGlzLnRhbmsuY2VudGVyWSArPSAxXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRhbmsuY2VudGVyWSAtPSAxXG4gICAgICB9XG4gICAgICB0aGlzLm1vdmVZID0gIXRoaXMubW92ZVlcbiAgICB9KVxuXG4gICAgdGhpcy5kaWFsb2dCdG4ub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCkgPT4ge30pXG4gICAgdGhpcy52aWV3QnRuLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcbiAgICAgIG9wZW5WaWV3KFZpZXdUZXN0LCAxLCAyKVxuICAgIH0pXG4gICAgdGhpcy5sb2FkaW5nQnRuLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcbiAgICAgIG9wZW5WaWV3KExvYWRpbmcsIDEsIDIsIDMpXG4gICAgfSlcbiAgICB0aGlzLmNsb3NlQnRuLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcbiAgICAgIGNsb3NlVmlldyh0aGlzKVxuICAgIH0pXG4gIH1cbiAgQENsaWNrKCdkaWFsb2dCdG4nKVxuICBAQ2xpY2soJ2xvYWRpbmdCdG4nKVxuICBwcml2YXRlIGFzeW5jIHRvZG8xKHR5cGUpIHtcbiAgICBzdG9yZS5kaXNwYXRjaChjaGFuZ2VUb2tlbihNYXRoLnJhbmRvbSgpKSlcbiAgICBzdG9yZS5kaXNwYXRjaChjaGFuZ2VVc2VybmFtZShNYXRoLnJhbmRvbSgpKSlcbiAgICBjb25zb2xlLmxvZyhhd2FpdCBHYW1lQXBwLmZldGNoLnBvc3QoJ2dldCcsIHsgYTogWzEsIDJdLCBjOiAnaGFoYWhhaGEnIH0pKVxuICB9XG4gIHB1YmxpYyBvcGVuQ2IoKSB7XG4gICAgc3VwZXIub3BlbkNiKClcbiAgICBjb25zb2xlLmxvZygnQmFzZVRlc3Qgb3BlbicpXG4gIH1cbiAgcHVibGljIHVwZGF0ZVZpZXcoKSB7XG4gICAgY29uc3QgeyB1c2VyLCB0b2tlbiwgdGVzdERhdGEgfSA9IHN0b3JlLmdldFN0YXRlKClcbiAgICB0aGlzLnVzZXJuYW1lLnRleHQgPSB1c2VyLm5hbWVcbiAgICB0aGlzLnRva2VuLnRleHQgPSB0b2tlblxuICB9XG59XG4iLCJpbXBvcnQgeyB1aSB9IGZyb20gJy4uLy4uLy4uL3VpL2xheWFNYXhVSSdcclxuaW1wb3J0IHsgSVZpZXcgfSBmcm9tICcuLi8uLi8uLi9jb3JlL212Yy9pbnRlcmZhY2UvSVZpZXcnXHJcbmltcG9ydCB7IFZpZXdDb25zdCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvY29uc3QvVmlld0NvbnN0J1xyXG5pbXBvcnQgeyBCYXNlTGF5ZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL212Yy9sYXllci9CYXNlTGF5ZXInXHJcbmltcG9ydCB7IFJlZ2lzdGVyTVZDLCBjbG9zZVZpZXcgfSBmcm9tICcuLi8uLi8uLi9jb3JlL212Yy9NdmNNZ3InXHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi8uLi9zdG9yZS9zdG9yZSdcclxuQFJlZ2lzdGVyTVZDKEJhc2VMYXllcilcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGluZyBleHRlbmRzIHVpLnZpZXcuTG9hZGluZ1VJIGltcGxlbWVudHMgSVZpZXcge1xyXG4gIHN0YXRpYyB2aWV3S2V5ID0gVmlld0NvbnN0LkxvYWRpbmdcclxuICBwdWJsaWMgbW92ZVkgPSBmYWxzZVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy50aW1lckxvb3AoNTAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMudGFuay5pbmRleCA9IHRoaXMudGFuay5pbmRleCA9PT0gNyA/IDQgOiB0aGlzLnRhbmsuaW5kZXggKyAxXHJcbiAgICB9KVxyXG4gICAgdGhpcy50aW1lckxvb3AoMjUwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLm1vdmVZKSB7XHJcbiAgICAgICAgdGhpcy50YW5rLmNlbnRlclkgKz0gMVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGFuay5jZW50ZXJZIC09IDFcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm1vdmVZID0gIXRoaXMubW92ZVlcclxuICAgIH0pXHJcbiAgICB0aGlzLmJ0bl9jbG9zZS5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgIGNsb3NlVmlldyh0aGlzKVxyXG4gICAgfSlcclxuICB9XHJcbiAgcHVibGljIG9wZW5DYiguLi5hcmdzKSB7XHJcbiAgICBzdXBlci5vcGVuQ2IoKVxyXG4gICAgY29uc29sZS5sb2coJ0xvYWRpbmcgb3BlbicsIGFyZ3MpXHJcbiAgfVxyXG4gIHB1YmxpYyB1cGRhdGVWaWV3KCkge1xyXG4gICAgY29uc3QgeyB1c2VyLCB0b2tlbiwgdGVzdERhdGEgfSA9IHN0b3JlLmdldFN0YXRlKClcclxuICAgIHRoaXMudXNlcm5hbWUudGV4dCA9IHVzZXIubmFtZVxyXG4gICAgdGhpcy50b2tlbi50ZXh0ID0gdG9rZW5cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgdWkgfSBmcm9tICcuLi8uLi8uLi91aS9sYXlhTWF4VUknXG5pbXBvcnQgeyBJVmlldyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvbXZjL2ludGVyZmFjZS9JVmlldydcbmltcG9ydCB7IFZpZXdDb25zdCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvY29uc3QvVmlld0NvbnN0J1xuaW1wb3J0IHsgVmlld0xheWVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvbGF5ZXIvVmlld0xheWVyJ1xuaW1wb3J0IFZpZXdUZXN0MSBmcm9tICcuL1ZpZXdUZXN0MSdcbmltcG9ydCB7IFJlZ2lzdGVyTVZDLCBjbG9zZVZpZXcsIG9wZW5WaWV3IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvTXZjTWdyJ1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uLy4uL3N0b3JlL3N0b3JlJ1xuQFJlZ2lzdGVyTVZDKFZpZXdMYXllcilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdUZXN0IGV4dGVuZHMgdWkudmlldy5WaWV3VGVzdFVJIGltcGxlbWVudHMgSVZpZXcge1xuICBzdGF0aWMgdmlld0tleSA9IFZpZXdDb25zdC5WaWV3VGVzdFxuICBwdWJsaWMgbW92ZVkgPSBmYWxzZVxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLnRpbWVyTG9vcCg1MDAsIHRoaXMsICgpID0+IHtcbiAgICAgIHRoaXMudGFuay5pbmRleCA9IHRoaXMudGFuay5pbmRleCA9PT0gNyA/IDQgOiB0aGlzLnRhbmsuaW5kZXggKyAxXG4gICAgfSlcbiAgICB0aGlzLnRpbWVyTG9vcCgyNTAsIHRoaXMsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLm1vdmVZKSB7XG4gICAgICAgIHRoaXMudGFuay5jZW50ZXJZICs9IDFcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGFuay5jZW50ZXJZIC09IDFcbiAgICAgIH1cbiAgICAgIHRoaXMubW92ZVkgPSAhdGhpcy5tb3ZlWVxuICAgIH0pXG4gICAgdGhpcy5jbG9zZUJ0bi5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKSA9PiB7XG4gICAgICBjbG9zZVZpZXcodGhpcylcbiAgICB9KVxuICAgIHRoaXMudmlld0J0bi5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKSA9PiB7XG4gICAgICBvcGVuVmlldyhWaWV3VGVzdDEpXG4gICAgfSlcbiAgfVxuICBwdWJsaWMgb3BlbkNiKCkge1xuICAgIHN1cGVyLm9wZW5DYigpXG4gICAgY29uc29sZS5sb2coJ1ZpZXdUZXN0IG9wZW4nKVxuICB9XG4gIHB1YmxpYyB1cGRhdGVWaWV3KCkge1xuICAgIGNvbnN0IHsgdXNlciwgdG9rZW4sIHRlc3REYXRhIH0gPSBzdG9yZS5nZXRTdGF0ZSgpXG4gICAgdGhpcy51c2VybmFtZS50ZXh0ID0gdXNlci5uYW1lXG4gICAgdGhpcy50b2tlbi50ZXh0ID0gdG9rZW5cbiAgfVxufVxuIiwiaW1wb3J0IHsgdWkgfSBmcm9tICcuLi8uLi8uLi91aS9sYXlhTWF4VUknXG5pbXBvcnQgeyBJVmlldyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvbXZjL2ludGVyZmFjZS9JVmlldydcbmltcG9ydCB7IFZpZXdDb25zdCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvY29uc3QvVmlld0NvbnN0J1xuaW1wb3J0IHsgVmlld0xheWVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvbGF5ZXIvVmlld0xheWVyJ1xuaW1wb3J0IHsgUmVnaXN0ZXJNVkMsIGNsb3NlVmlldyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvbXZjL012Y01ncidcbmltcG9ydCBzdG9yZSBmcm9tICcuLi8uLi9zdG9yZS9zdG9yZSdcbkBSZWdpc3Rlck1WQyhWaWV3TGF5ZXIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3VGVzdDEgZXh0ZW5kcyB1aS52aWV3LlZpZXdUZXN0MVVJIGltcGxlbWVudHMgSVZpZXcge1xuICBzdGF0aWMgdmlld0tleSA9IFZpZXdDb25zdC5WaWV3VGVzdDFcbiAgcHVibGljIG1vdmVZID0gZmFsc2VcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgdGhpcy50aW1lckxvb3AoNTAwLCB0aGlzLCAoKSA9PiB7XG4gICAgICB0aGlzLnRhbmsuaW5kZXggPSB0aGlzLnRhbmsuaW5kZXggPT09IDcgPyA0IDogdGhpcy50YW5rLmluZGV4ICsgMVxuICAgIH0pXG4gICAgdGhpcy50aW1lckxvb3AoMjUwLCB0aGlzLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5tb3ZlWSkge1xuICAgICAgICB0aGlzLnRhbmsuY2VudGVyWSArPSAxXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRhbmsuY2VudGVyWSAtPSAxXG4gICAgICB9XG4gICAgICB0aGlzLm1vdmVZID0gIXRoaXMubW92ZVlcbiAgICB9KVxuICAgIHRoaXMuY2xvc2VCdG4ub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCkgPT4ge1xuICAgICAgY2xvc2VWaWV3KHRoaXMpXG4gICAgfSlcbiAgfVxuICBwdWJsaWMgb3BlbkNiKCkge1xuICAgIHN1cGVyLm9wZW5DYigpXG4gICAgY29uc29sZS5sb2coJ1ZpZXdUZXN0IG9wZW4nKVxuICB9XG4gIHB1YmxpYyB1cGRhdGVWaWV3KCkge1xuICAgIGNvbnN0IHsgdXNlciwgdG9rZW4sIHRlc3REYXRhIH0gPSBzdG9yZS5nZXRTdGF0ZSgpXG4gICAgdGhpcy51c2VybmFtZS50ZXh0ID0gdXNlci5uYW1lXG4gICAgdGhpcy50b2tlbi50ZXh0ID0gdG9rZW5cbiAgfVxufVxuIiwiZW51bSBIdHRwTWV0aG9kIHtcclxuICBnZXQgPSAnR0VUJyxcclxuICBwb3N0ID0gJ1BPU1QnLFxyXG59XHJcbmV4cG9ydCBjbGFzcyBGZXRjaCB7XHJcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJydcclxuICBwcml2YXRlIGNvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOCdcclxuICBzdGF0aWMgZmV0Y2hNYXAgPSBuZXcgTWFwKClcclxuICBjb25zdHJ1Y3Rvcih7IHVybCB9KSB7XHJcbiAgICB0aGlzLmJhc2VVcmwgPSB1cmxcclxuICB9XHJcbiAgcHVibGljIHN0YXRpYyBpbml0KGtleSwgeyB1cmwgfSkge1xyXG4gICAgbGV0IGZldGNoID0gdGhpcy5mZXRjaE1hcC5nZXQoa2V5KVxyXG4gICAgaWYgKCFmZXRjaCkge1xyXG4gICAgICBmZXRjaCA9IG5ldyBGZXRjaCh7IHVybCB9KVxyXG4gICAgICB0aGlzLmZldGNoTWFwLnNldChrZXksIGZldGNoKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZldGNoXHJcbiAgfVxyXG4gIHByaXZhdGUgYXN5bmMgc2VuZChhcGk6IHN0cmluZywgeyBib2R5LCBtZXRob2QgfSkge1xyXG4gICAgbGV0IHVybCA9IHRoaXMuYmFzZVVybCArIGFwaVxyXG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6IHRoaXMuY29udGVudFR5cGUsXHJcbiAgICB9KVxyXG4gICAgbGV0IHJlczogUmVzcG9uc2VcclxuICAgIHN3aXRjaCAobWV0aG9kKSB7XHJcbiAgICAgIGNhc2UgSHR0cE1ldGhvZC5nZXQ6XHJcbiAgICAgICAgaWYgKGJvZHkpIHtcclxuICAgICAgICAgIHVybCArPVxyXG4gICAgICAgICAgICAnPycgK1xyXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhib2R5KVxyXG4gICAgICAgICAgICAgIC5tYXAoaXRlbSA9PiBpdGVtLmpvaW4oJz0nKSlcclxuICAgICAgICAgICAgICAuam9pbignJicpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlcyA9IGF3YWl0IGZldGNoKHVybCwgeyBoZWFkZXJzLCBtZXRob2QgfSlcclxuICAgICAgICBicmVha1xyXG4gICAgICBjYXNlIEh0dHBNZXRob2QucG9zdDpcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIHsgYm9keSwgaGVhZGVycywgbWV0aG9kIH0pXHJcbiAgICAgICAgYnJlYWtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnJlc0hhbmRsZShyZXMpXHJcbiAgfVxyXG4gIHB1YmxpYyBhc3luYyBnZXQoYXBpOiBzdHJpbmcsIHBhcmFtczogYW55ID0gdW5kZWZpbmVkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZW5kKGFwaSwgeyBib2R5OiBwYXJhbXMsIG1ldGhvZDogSHR0cE1ldGhvZC5nZXQgfSlcclxuICB9XHJcbiAgcHVibGljIGFzeW5jIHBvc3QoYXBpOiBzdHJpbmcsIGJvZHk6IGFueSA9IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VuZChhcGksIHsgYm9keTogYm9keSA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogdW5kZWZpbmVkLCBtZXRob2Q6IEh0dHBNZXRob2QucG9zdCB9KVxyXG4gIH1cclxuICBwcml2YXRlIHJlc0hhbmRsZShyZXM6IFJlc3BvbnNlKSB7XHJcbiAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlcy5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJylcclxuICAgIGlmIChjb250ZW50VHlwZSkge1xyXG4gICAgICBpZiAoY29udGVudFR5cGUuaW5kZXhPZignanNvbicpID4gLTEpIHtcclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzLnRleHQoKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTaW5nbGV0b24gfSBmcm9tICcuLi9jb3JlL2Jhc2UvU2luZ2xldG9uJ1xuaW1wb3J0IHsgT2JzZXJ2ZXIgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2UvZGlzcGF0Y2hlci9PYnNlcnZlcidcbmltcG9ydCAqIGFzIGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnXG4vKlxuICAgc29ja2V0LmluaXQoLi4uKVxuICAgc29ja2V0LmNvbm5lY3QoKVxuKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvY2tldCBleHRlbmRzIFNpbmdsZXRvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9ic2VydmVycyA9IHt9XG4gIH1cbiAgcHJpdmF0ZSBub25jZT0xXG4gIHByaXZhdGUgaXBBZGRyZXNzXG4gIHByaXZhdGUgc29ja2V0OiBhbnlcbiAgcHJpdmF0ZSBvYnNlcnZlcnM6IGFueVxuICBwcml2YXRlIHRpbWVTdGFtcFxuICAvL2hhbmRsZXItLS0tXG4gIHByaXZhdGUgY29ubmVjdFN1Y2Nlc3NDYWxsYmFja1xuICBwcml2YXRlIGNvbm5lY3RGYWlsZWRDYWxsYmFja1xuICBwcml2YXRlIGhlYXJ0YmVhdEZhaWxlZENhbGxiYWNrXG4gIHByaXZhdGUgZXZlbnQgPSAnbWVzc2FnZSdcbiAgcHVibGljIGluaXQoaXAsIHN1Y2Nlc3NDYWxsYmFjaywgZmFpbGVkQ2FsbGJhY2ssIGhlYXJ0YmVhdEZhaWxlZENhbGxiYWNrKSB7XG4gICAgdGhpcy5pcEFkZHJlc3MgPSBpcFxuICAgIHRoaXMuY29ubmVjdFN1Y2Nlc3NDYWxsYmFjayA9IHN1Y2Nlc3NDYWxsYmFja1xuICAgIHRoaXMuY29ubmVjdEZhaWxlZENhbGxiYWNrID0gZmFpbGVkQ2FsbGJhY2tcbiAgICB0aGlzLmhlYXJ0YmVhdEZhaWxlZENhbGxiYWNrID0gaGVhcnRiZWF0RmFpbGVkQ2FsbGJhY2tcbiAgfVxuICBwdWJsaWMgY29ubmVjdCgpIHtcbiAgICB0aGlzLnNvY2tldCA9IGlvKHRoaXMuaXBBZGRyZXNzKVxuICAgIHRoaXMuc29ja2V0Lm9uKCdjb25uZWN0JywgKCkgPT4ge1xuICAgICAgdGhpcy50aW1lU3RhbXAgPSBEYXRlLm5vdygpXG4gICAgICBjb25zb2xlLmxvZygnd2Vic29ja2V0IGNvbm5lY3QuLi4nKVxuICAgICAgdGhpcy5jb25uZWN0U3VjY2VzcygpXG4gICAgfSlcbiAgICB0aGlzLnNvY2tldC5vbih0aGlzLmV2ZW50LCBkYXRhID0+IHtcbiAgICAgIHRoaXMudGltZVN0YW1wID0gRGF0ZS5ub3coKVxuICAgICAgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgICB0aGlzLnJlY2VpdmVNZXNzYWdlKEpTT04ucGFyc2UoZGF0YSkpXG4gICAgfSlcbiAgICB0aGlzLnNvY2tldC5vbignZGlzY29ubmVjdCcsIHRoaXMub25EaXNjb25uZWN0KVxuICB9XG4gIHB1YmxpYyBkaXNjb25uZWN0KCkge1xuICAgIHRoaXMuc29ja2V0LmRpc2Nvbm5lY3QoKVxuICB9XG4gIHByaXZhdGUgb25EaXNjb25uZWN0KCkge1xuICAgIGlmICh0aGlzLmNvbm5lY3RGYWlsZWRDYWxsYmFjaykgdGhpcy5jb25uZWN0RmFpbGVkQ2FsbGJhY2soKVxuICB9XG4gIHByaXZhdGUgY29ubmVjdFN1Y2Nlc3MoKSB7XG4gICAgaWYgKHRoaXMuY29ubmVjdFN1Y2Nlc3NDYWxsYmFjaykgdGhpcy5jb25uZWN0U3VjY2Vzc0NhbGxiYWNrKClcbiAgICB0aGlzLnNlbmQoJ2xvZ2luJywge30sICdDMlNfbG9naW4nKVxuICAgIHRoaXMuc3RhcnRIZWFydEJlYXQoKVxuICB9XG4gIHByaXZhdGUgc3RhcnRIZWFydEJlYXQoKSB7XG4gICAgTGF5YS50aW1lci5sb29wKDUwMDAsIHRoaXMsICgpID0+IHtcbiAgICAgIHRoaXMuc2VuZEhlYXJ0QmVhdCgpXG4gICAgfSlcbiAgfVxuICBwcml2YXRlIHNlbmRIZWFydEJlYXQoKSB7XG4gICAgdmFyIHYgPSBEYXRlLm5vdygpIC0gdGhpcy50aW1lU3RhbXBcblxuICAgIGlmICh2ID49IDMwMDAwKSB7XG4gICAgICBpZiAodGhpcy5oZWFydGJlYXRGYWlsZWRDYWxsYmFjaykgdGhpcy5oZWFydGJlYXRGYWlsZWRDYWxsYmFjaygpXG4gICAgfVxuICAgIHRoaXMuc2VuZCgnaGVhcnRiZWF0Jywge30sICdDMlNfaGVhcnRiZWF0JylcbiAgfVxuICBwcml2YXRlIHJlY2VpdmVNZXNzYWdlKGRhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhkYXRhLmhlYWRlcnMubm9uY2UpXG4gICAgaWYgKGRhdGEuaGVhZGVycy5ub25jZSAmJiBkYXRhLmhlYWRlcnMubm9uY2Uuc3RhcnRzV2l0aCgnUzJDXycpKSB7XG4gICAgICBmb3IgKGxldCBrIGluIHRoaXMub2JzZXJ2ZXJzKSB7XG4gICAgICAgIGlmIChkYXRhLmhlYWRlcnMuZnVuY19uYW1lID09IGspIHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVyc1trXS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5SZWN2TXNnKGRhdGEpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBrIGluIHRoaXMub2JzZXJ2ZXJzKSB7XG4gICAgICAgIGlmIChkYXRhLmhlYWRlcnMubm9uY2UgPT0gaykge1xuICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzW2tdLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LlJlY3ZNc2coZGF0YSlcbiAgICAgICAgICB9KVxuICAgICAgICAgIGRlbGV0ZSB0aGlzLm9ic2VydmVyc1trXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHB1YmxpYyBzZW5kTWVzc2FnZShmdW5jTmFtZSwgb2JzZXJ2ZXIsIGRhdGEsIGNhbGxiYWNrID0gbnVsbCkge1xuICAgIHZhciBub25jZSA9ICdDMlNfJyArIGZ1bmNOYW1lICsgdGhpcy5ub25jZSsrXG4gICAgaWYgKCF0aGlzLm9ic2VydmVyc1tub25jZV0pIHRoaXMub2JzZXJ2ZXJzW25vbmNlXSA9IFtdXG4gICAgdGhpcy5vYnNlcnZlcnNbbm9uY2VdLnB1c2gobmV3IE9ic2VydmVyKG5vbmNlLCBvYnNlcnZlciwgY2FsbGJhY2spKVxuICAgIHRoaXMuc2VuZChmdW5jTmFtZSwgZGF0YSwgbm9uY2UpXG4gIH1cbiAgcHVibGljIG9ic2VydmVyTWVzc2FnZShmdW5jTmFtZSwgb2JzZXJ2ZXIsIGNhbGxiYWNrID0gbnVsbCkge1xuICAgIHZhciBrZXkgPSBmdW5jTmFtZVxuICAgIGlmICghdGhpcy5vYnNlcnZlcnNba2V5XSkgdGhpcy5vYnNlcnZlcnNba2V5XSA9IFtdXG4gICAgdmFyIG9icyA9IG5ldyBPYnNlcnZlcihrZXksIG9ic2VydmVyLCBjYWxsYmFjaylcbiAgICB0aGlzLm9ic2VydmVyc1trZXldLnB1c2gob2JzKVxuICAgIHJldHVybiBvYnNcbiAgfVxuICBwdWJsaWMgcmVtb3ZlKG9iczogT2JzZXJ2ZXIpIHtcbiAgICBpZiAob2JzID09IG51bGwpIHJldHVyblxuICAgIGxldCBhcnIgPSB0aGlzLm9ic2VydmVyc1tvYnMudG9waWNdXG4gICAgaWYgKCFhcnIpIHJldHVybiBudWxsXG4gICAgbGV0IGluZDogbnVtYmVyID0gYXJyLmluZGV4T2Yob2JzKVxuICAgIGlmIChpbmQgPCAwKSByZXR1cm4gbnVsbFxuICAgIGFyci5zcGxpY2UoaW5kLCAxKVxuICAgIGlmIChhcnIubGVuZ3RoID09IDApIGRlbGV0ZSB0aGlzLm9ic2VydmVyc1tvYnMudG9waWNdXG4gICAgcmV0dXJuIG9ic1xuICB9XG4gIHByaXZhdGUgc2VuZChmdW5jTmFtZSwgZGF0YSwgbm9uY2UpIHtcbiAgICB2YXIgcGFyYW0gPSB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIHVpZDogJ2hlanVuamllJyxcbiAgICAgICAgZnVuY19uYW1lOiBmdW5jTmFtZSxcbiAgICAgICAgbm9uY2U6IG5vbmNlLFxuICAgICAgfSxcbiAgICAgIHBhcmFtczogZGF0YSxcbiAgICB9XG4gICAgdGhpcy50aW1lU3RhbXAgPSBEYXRlLm5vdygpXG4gICAgdGhpcy5zb2NrZXQuZW1pdCh0aGlzLmV2ZW50LCBKU09OLnN0cmluZ2lmeShwYXJhbSkpXG4gIH1cbn1cbiIsImltcG9ydCB7IFNpbmdsZXRvbiB9IGZyb20gJy4uLy4uL2NvcmUvYmFzZS9TaW5nbGV0b24nXG5pbXBvcnQgTmV0UmVxdWVzdCBmcm9tICcuL05ldFJlcXVlc3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVOZXQgZXh0ZW5kcyBTaW5nbGV0b24ge1xuICBwcml2YXRlIHNlcnZlclVybDogc3RyaW5nXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgfVxuICBwdWJsaWMgaW5pdFNlcnZlcih1cmw6IHN0cmluZykge1xuICAgIHRoaXMuc2VydmVyVXJsID0gdXJsXG4gIH1cbiAgcHVibGljIHNlbmQoYXBpOiBzdHJpbmcsIGJvZHlWYXJpYWJsZXM6IGFueSA9IG51bGwsIHVybFZhcmlhYmxlczogYW55ID0gJycsIG1ldGhvZDogc3RyaW5nID0gJ3Bvc3QnLCByZXNwb25zZVR5cGU6IHN0cmluZyA9ICdqc29uJywgaGVhZGVyPzogYW55W10pIHtcbiAgICB0aGlzLnNlbmRCeVVybCh0aGlzLnNlcnZlclVybCwgYXBpLCBib2R5VmFyaWFibGVzLCB1cmxWYXJpYWJsZXMsIG1ldGhvZCwgcmVzcG9uc2VUeXBlLCBoZWFkZXIpXG4gIH1cbiAgcHVibGljIHNlbmRQcm9taXNlKGFwaTogc3RyaW5nLCBib2R5VmFyaWFibGVzOiBhbnkgPSBudWxsLCB1cmxWYXJpYWJsZXM6IGFueSA9ICcnLCBtZXRob2Q6IHN0cmluZyA9ICdwb3N0JywgcmVzcG9uc2VUeXBlOiBzdHJpbmcgPSAnanNvbicsIGhlYWRlcj86IGFueVtdKSB7XG4gICAgdGhpcy5zZW5kUHJvbWlzZUJ5VXJsKHRoaXMuc2VydmVyVXJsLCBhcGksIGJvZHlWYXJpYWJsZXMsIHVybFZhcmlhYmxlcywgbWV0aG9kLCByZXNwb25zZVR5cGUsIGhlYWRlcilcbiAgfVxuICBwdWJsaWMgc2VuZEJ5VXJsKHVybDogc3RyaW5nLCBhcGk6IHN0cmluZywgYm9keVZhcmlhYmxlczogYW55ID0gbnVsbCwgdXJsVmFyaWFibGVzOiBhbnkgPSAnJywgbWV0aG9kOiBzdHJpbmcgPSAncG9zdCcsIHJlc3BvbnNlVHlwZTogc3RyaW5nID0gJ2pzb24nLCBoZWFkZXI/OiBhbnlbXSkge1xuICAgIGxldCByZXEgPSBOZXRSZXF1ZXN0LkNyZWF0ZShhcGksIHVybCArIGFwaSArIHVybFZhcmlhYmxlcywgYm9keVZhcmlhYmxlcywgbWV0aG9kLCByZXNwb25zZVR5cGUsIGhlYWRlcilcbiAgICByZXEuU2VuZCgpXG4gIH1cbiAgcHVibGljIGFzeW5jIHNlbmRQcm9taXNlQnlVcmwodXJsOiBzdHJpbmcsIGFwaTogc3RyaW5nLCBib2R5VmFyaWFibGVzOiBhbnkgPSBudWxsLCB1cmxWYXJpYWJsZXM6IGFueSA9ICcnLCBtZXRob2Q6IHN0cmluZyA9ICdwb3N0JywgcmVzcG9uc2VUeXBlOiBzdHJpbmcgPSAnanNvbicsIGhlYWRlcj86IGFueVtdKSB7XG4gICAgbGV0IHJlcSA9IE5ldFJlcXVlc3QuQ3JlYXRlKGFwaSwgdXJsICsgYXBpICsgdXJsVmFyaWFibGVzLCBib2R5VmFyaWFibGVzLCBtZXRob2QsIHJlc3BvbnNlVHlwZSwgaGVhZGVyKVxuICAgIGNvbnN0IGdldCA9IGF3YWl0IHJlcS5TZW5kUHJvbWlzZSgpXG4gICAgcmV0dXJuIGdldFxuICB9XG59XG4iLCJpbXBvcnQgR2FtZUFwcCBmcm9tICcuLi8uLi9jb3JlL2dhbWUvR2FtZUFwcCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV0UmVxdWVzdCB7XG4gIHByaXZhdGUgcmVxOiBsYXlhLm5ldC5IdHRwUmVxdWVzdFxuICBwcml2YXRlIHVybDogc3RyaW5nXG4gIHByaXZhdGUgZGF0YTogYW55XG4gIHByaXZhdGUgbWV0aG9kOiBzdHJpbmdcbiAgcHJpdmF0ZSByZXNwb25zZVR5cGU6IHN0cmluZ1xuICBwcml2YXRlIGhlYWRlcnM6IGFueVtdXG4gIHByaXZhdGUgYXBpUGF0aDogc3RyaW5nXG4gIHByaXZhdGUgbWVzc2FnZUtleTogYW55XG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgbGV0IHJlcSA9IG5ldyBsYXlhLm5ldC5IdHRwUmVxdWVzdCgpXG4gICAgdGhpcy5yZXEgPSByZXFcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgQ3JlYXRlKGFwaVBhdGg6IHN0cmluZywgdXJsOiBzdHJpbmcsIGRhdGE/OiBhbnksIG1ldGhvZD86IHN0cmluZywgcmVzcG9uc2VUeXBlPzogc3RyaW5nLCBoZWFkZXJzPzogYW55W10sIG1lc3NhZ2VLZXk/KTogTmV0UmVxdWVzdCB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgTmV0UmVxdWVzdCgpXG4gICAgcmVxdWVzdC51cmwgPSB1cmxcbiAgICByZXF1ZXN0LmRhdGEgPSBkYXRhXG4gICAgcmVxdWVzdC5tZXRob2QgPSBtZXRob2RcbiAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IHJlc3BvbnNlVHlwZVxuICAgIHJlcXVlc3QuaGVhZGVycyA9IGhlYWRlcnNcbiAgICByZXF1ZXN0LmFwaVBhdGggPSBhcGlQYXRoXG4gICAgcmVxdWVzdC5tZXNzYWdlS2V5ID0gbWVzc2FnZUtleVxuICAgIHJldHVybiByZXF1ZXN0XG4gIH1cbiAgcHVibGljIFNlbmQoKSB7XG4gICAgbGV0IHJlcSA9IHRoaXMucmVxXG4gICAgbGV0IHVybCA9IHRoaXMudXJsXG4gICAgbGV0IGRhdGEgPSB0aGlzLmRhdGFcbiAgICBsZXQgbWV0aG9kID0gdGhpcy5tZXRob2RcbiAgICBsZXQgcmVzcG9uc2VUeXBlID0gdGhpcy5yZXNwb25zZVR5cGVcbiAgICBsZXQgaGVhZGVycyA9IHRoaXMuaGVhZGVycyB8fCBbJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJ11cbiAgICByZXEub25jZShsYXlhLmV2ZW50cy5FdmVudC5DT01QTEVURSwgdGhpcywgdGhpcy5jb21wbGV0ZUhhbmRsZXIpXG4gICAgcmVxLm9uY2UobGF5YS5ldmVudHMuRXZlbnQuRVJST1IsIHRoaXMsIHRoaXMuZXJyb3JIYW5kbGVyKVxuICAgIHJlcS5zZW5kKHVybCwgZGF0YSwgbWV0aG9kLCByZXNwb25zZVR5cGUsIGhlYWRlcnMpXG4gIH1cbiAgcHVibGljIGFzeW5jIFNlbmRQcm9taXNlKCk6IFByb21pc2U8YW55PiB7XG4gICAgbGV0IHJlcSA9IHRoaXMucmVxXG4gICAgbGV0IHVybCA9IHRoaXMudXJsXG4gICAgbGV0IGRhdGEgPSB0aGlzLmRhdGFcbiAgICBsZXQgbWV0aG9kID0gdGhpcy5tZXRob2RcbiAgICBsZXQgcmVzcG9uc2VUeXBlID0gdGhpcy5yZXNwb25zZVR5cGVcbiAgICBsZXQgaGVhZGVycyA9IHRoaXMuaGVhZGVycyB8fCBbJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJ11cbiAgICBsZXQgX3Bvc3QgPSBmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGxldCBfcmVzb2x2ZSA9IGZ1bmN0aW9uKG9iajogYW55KSB7XG4gICAgICAgIHJlc29sdmUob2JqKVxuICAgICAgfVxuICAgICAgcmVxLm9uY2UobGF5YS5ldmVudHMuRXZlbnQuQ09NUExFVEUsIHRoaXMsIF9yZXNvbHZlKVxuICAgICAgcmVxLm9uY2UobGF5YS5ldmVudHMuRXZlbnQuRVJST1IsIHRoaXMsIF9yZXNvbHZlKVxuICAgICAgcmVxLnNlbmQodXJsLCBkYXRhLCBtZXRob2QsIHJlc3BvbnNlVHlwZSwgaGVhZGVycylcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oX3Bvc3QpXG4gIH1cbiAgcHJpdmF0ZSBjb21wbGV0ZUhhbmRsZXIoZGF0YTogYW55KSB7XG4gICAgaWYgKHRoaXMubWVzc2FnZUtleSkge1xuICAgICAgR2FtZUFwcC5kaXNwYXRjaGVyLlNlbmRNc2codGhpcy5tZXNzYWdlS2V5LCBkYXRhKVxuICAgIH1cbiAgfVxuICBwcml2YXRlIGVycm9ySGFuZGxlcihlOiBhbnkpIHtcbiAgICBjb25zb2xlLmVycm9yKHRoaXMubWVzc2FnZUtleSwgZSlcbiAgfVxuICBwcml2YXRlIHByb2Nlc3NIYW5kbGVyKGRhdGE6IGFueSkge31cbn1cbiIsImltcG9ydCB7IHVpIH0gZnJvbSAnLi4vdWkvbGF5YU1heFVJJ1xyXG5pbXBvcnQgQVBhZ2UgZnJvbSAnLi4vZ2FtZS91aS92aWV3L0FQYWdlL0FQYWdlJ1xyXG5pbXBvcnQgeyBzZXRVSVJvb3QsIG9wZW5WaWV3IH0gZnJvbSAnLi4vY29yZS9tdmMvTXZjTWdyJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluU2NlbmUgZXh0ZW5kcyB1aS5zY2VuZS5NYWluU2NlbmVVSSB7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgLy8gR2FtZUFwcC5pbml0KHRoaXMpXHJcbiAgICBjb25zdCBVSSA9IG5ldyBMYXlhLlNwcml0ZSgpXHJcbiAgICBVSS5uYW1lID0gJ1VJJ1xyXG4gICAgVUkud2lkdGggPSBMYXlhLnN0YWdlLndpZHRoXHJcbiAgICBVSS5oZWlnaHQgPSBMYXlhLnN0YWdlLmhlaWdodFxyXG4gICAgTGF5YS5zdGFnZS5hZGRDaGlsZChVSSlcclxuICAgIHNldFVJUm9vdChVSSlcclxuXHJcbiAgICBvcGVuVmlldyhBUGFnZSx7YToxLGI6Mn0pXHJcbiAgfVxyXG4gIG9uT3BlbmVkKCkge31cclxufVxyXG4iLCIvKipUaGlzIGNsYXNzIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IExheWFBaXJJREUsIHBsZWFzZSBkbyBub3QgbWFrZSBhbnkgbW9kaWZpY2F0aW9ucy4gKi9cbmltcG9ydCBWaWV3PUxheWEuVmlldztcbmltcG9ydCBEaWFsb2c9TGF5YS5EaWFsb2c7XG5pbXBvcnQgU2NlbmU9TGF5YS5TY2VuZTtcbmltcG9ydCAqIGFzIHYgZnJvbSBcIi4uL2NvcmUvbXZjL3ZpZXcvQmFzZVZpZXdcIjtcbmltcG9ydCBCYXNlVmlldyA9di5LVUkuQmFzZVZpZXdcbnZhciBSRUc6IEZ1bmN0aW9uID0gTGF5YS5DbGFzc1V0aWxzLnJlZ0NsYXNzO1xuZXhwb3J0IG1vZHVsZSB1aS5zY2VuZSB7XHJcbiAgICBleHBvcnQgY2xhc3MgTWFpblNjZW5lVUkgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRTY2VuZShcInNjZW5lL01haW5TY2VuZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSRUcoXCJ1aS5zY2VuZS5NYWluU2NlbmVVSVwiLE1haW5TY2VuZVVJKTtcclxufVxyXG5leHBvcnQgbW9kdWxlIHVpLnZpZXcge1xyXG4gICAgZXhwb3J0IGNsYXNzIEFQYWdlVUkgZXh0ZW5kcyBCYXNlVmlldyB7XHJcblx0XHRwdWJsaWMgYnRuOkxheWEuQnV0dG9uO1xuXHRcdHB1YmxpYyBkZDpsYXlhLmh0bWwuZG9tLkhUTUxEaXZFbGVtZW50O1xuXHRcdHB1YmxpYyBiYXNlQnRuOkxheWEuQnV0dG9uO1xuXHRcdHB1YmxpYyBjb250ZW50czpMYXlhLkxhYmVsO1xuICAgICAgICBwdWJsaWMgc3RhdGljICB1aVZpZXc6YW55ID17XCJ0eXBlXCI6XCJCYXNlVmlld1wiLFwicHJvcHNcIjp7XCJ3aWR0aFwiOjY0MCxcImhlaWdodFwiOjExMzZ9LFwiY29tcElkXCI6MixcImNoaWxkXCI6W3tcInR5cGVcIjpcIlJlY3RcIixcInByb3BzXCI6e1wid2lkdGhcIjo2NDAsXCJuYW1lXCI6XCJyXCIsXCJsaW5lV2lkdGhcIjoxLFwiaGVpZ2h0XCI6MTEzNixcImZpbGxDb2xvclwiOlwiI2ZiYmJiYlwifSxcImNvbXBJZFwiOjd9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6NTU1LFwieFwiOjIwOCxcIndpZHRoXCI6MjAwLFwidmFyXCI6XCJidG5cIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcIkdvVG8gQlBhZ2VcIixcImhlaWdodFwiOjUwfSxcImNvbXBJZFwiOjh9LHtcInR5cGVcIjpcIkhUTUxEaXZFbGVtZW50XCIsXCJwcm9wc1wiOntcInlcIjowLFwieFwiOjAsXCJ3aWR0aFwiOjY0NCxcInZhclwiOlwiZGRcIixcImlubmVySFRNTFwiOlwiPGJyLz48c3Bhbj4gIOa1i+ivleawtOW5s+WxheS4reWvuem9kDwvc3Bhbj5cIixcImhlaWdodFwiOjI2NSxcInJ1bnRpbWVcIjpcImxheWEuaHRtbC5kb20uSFRNTERpdkVsZW1lbnRcIn0sXCJjb21wSWRcIjoyMH0se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjo2NjksXCJ4XCI6MjA4LFwid2lkdGhcIjoyMDAsXCJ2YXJcIjpcImJhc2VCdG5cIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcIkdvVG8gQmFzZVwiLFwiaGVpZ2h0XCI6NTB9LFwiY29tcElkXCI6MTUsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJMYWJlbFwiLFwicHJvcHNcIjp7XCJ5XCI6LTYyNyxcInhcIjoxOTAsXCJ3aWR0aFwiOjIwMSxcInZhclwiOlwiY29udGVudHNcIixcInZhbGlnblwiOlwibWlkZGxlXCIsXCJ0ZXh0XCI6XCJzc3NzXCIsXCJoZWlnaHRcIjo1MDAsXCJmb250U2l6ZVwiOjQwLFwiYWxpZ25cIjpcImNlbnRlclwifSxcImNvbXBJZFwiOjE0fV19LHtcInR5cGVcIjpcIkxhYmVsXCIsXCJwcm9wc1wiOntcInlcIjoxMjEsXCJ4XCI6Mjc1LjUsXCJ3aWR0aFwiOjYzLFwidmFsaWduXCI6XCJtaWRkbGVcIixcInRleHRcIjpcImxhYmVsXCIsXCJoZWlnaHRcIjoyMixcImFsaWduXCI6XCJjZW50ZXJcIn0sXCJjb21wSWRcIjoyNX0se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjoxMzIsXCJ4XCI6NDI2LFwicHJlc2V0SURcIjoxLFwid2lkdGhcIjoxOTIsXCJza2luXCI6XCJjb21wL2J1dHRvbi5wbmdcIixcImxhYmVsXCI6XCLmjInpkq7ohJrmnKxcIixcImlzUHJlc2V0Um9vdFwiOnRydWUsXCJoZWlnaHRcIjo5MH0sXCJjb21wSWRcIjozMSxcImNoaWxkXCI6W3tcInR5cGVcIjpcIlNjcmlwdFwiLFwicHJvcHNcIjp7XCJwcmVzZXRJRFwiOjIsXCJ5XCI6MSxcInhcIjowLFwicnVudGltZVwiOlwiZ2FtZS91aS92aWV3L0FQYWdlL1Rlc3QudHNcIn0sXCJjb21wSWRcIjozMn1dfV0sXCJsb2FkTGlzdFwiOltcImNvbXAvYnV0dG9uLnBuZ1wiLFwicHJlZmFiL0J1dHRvbi5wcmVmYWJcIl0sXCJsb2FkTGlzdDNEXCI6W119O1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVWaWV3KEFQYWdlVUkudWlWaWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSRUcoXCJ1aS52aWV3LkFQYWdlVUlcIixBUGFnZVVJKTtcclxuICAgIGV4cG9ydCBjbGFzcyBCYXNlVGVzdFVJIGV4dGVuZHMgQmFzZVZpZXcge1xyXG5cdFx0cHVibGljIHRhbms6TGF5YS5DbGlwO1xuXHRcdHB1YmxpYyBjbG9zZUJ0bjpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgZGlhbG9nQnRuOkxheWEuQnV0dG9uO1xuXHRcdHB1YmxpYyBsb2FkaW5nQnRuOkxheWEuQnV0dG9uO1xuXHRcdHB1YmxpYyB2aWV3QnRuOkxheWEuQnV0dG9uO1xuXHRcdHB1YmxpYyB0b2tlbjpMYXlhLkxhYmVsO1xuXHRcdHB1YmxpYyB1c2VybmFtZTpMYXlhLkxhYmVsO1xuICAgICAgICBwdWJsaWMgc3RhdGljICB1aVZpZXc6YW55ID17XCJ0eXBlXCI6XCJCYXNlVmlld1wiLFwicHJvcHNcIjp7XCJ3aWR0aFwiOjY0MCxcImhlaWdodFwiOjExMzZ9LFwiY29tcElkXCI6MixcImNoaWxkXCI6W3tcInR5cGVcIjpcIkltYWdlXCIsXCJwcm9wc1wiOntcInlcIjowLFwieFwiOjAsXCJ0b3BcIjowLFwic2tpblwiOlwiY29tcC9pbWFnZS5wbmdcIixcInJpZ2h0XCI6MCxcImxlZnRcIjowLFwiYm90dG9tXCI6MH0sXCJjb21wSWRcIjo4fSx7XCJ0eXBlXCI6XCJDbGlwXCIsXCJwcm9wc1wiOntcInlcIjowLFwieFwiOjAsXCJ2YXJcIjpcInRhbmtcIixcInNraW5cIjpcIkNoYXJhY3RlcnMvVGFua184LnBuZ1wiLFwiaW5kZXhcIjo0LFwiY2xpcFlcIjo0LFwiY2xpcFhcIjo0LFwiY2VudGVyWVwiOi0xLFwiY2VudGVyWFwiOjB9LFwiY29tcElkXCI6M30se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjozMjcsXCJ4XCI6MjgyLFwidmFyXCI6XCJjbG9zZUJ0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiY2xvc2VcIn0sXCJjb21wSWRcIjo0fSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjI1MixcInhcIjo0NzIsXCJ2YXJcIjpcImRpYWxvZ0J0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiZGlhbG9nXCJ9LFwiY29tcElkXCI6NX0se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjozMDQsXCJ4XCI6NDcyLFwidmFyXCI6XCJsb2FkaW5nQnRuXCIsXCJza2luXCI6XCJjb21wL2J1dHRvbi5wbmdcIixcImxhYmVsXCI6XCJiYXNlXCJ9LFwiY29tcElkXCI6Nn0se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjozNjIsXCJ4XCI6NDcyLFwidmFyXCI6XCJ2aWV3QnRuXCIsXCJza2luXCI6XCJjb21wL2J1dHRvbi5wbmdcIixcImxhYmVsXCI6XCJ2aWV3XCJ9LFwiY29tcElkXCI6N30se1widHlwZVwiOlwiTGFiZWxcIixcInByb3BzXCI6e1wieVwiOjE4MSxcInhcIjoxMDUsXCJ2YXJcIjpcInRva2VuXCIsXCJ0ZXh0XCI6XCJ0b2tlblwiLFwiZm9udFNpemVcIjozMCxcImNvbG9yXCI6XCIjZmZmZmZmXCJ9LFwiY29tcElkXCI6OX0se1widHlwZVwiOlwiTGFiZWxcIixcInByb3BzXCI6e1wieVwiOjI1NyxcInhcIjoxMDUsXCJ2YXJcIjpcInVzZXJuYW1lXCIsXCJ0ZXh0XCI6XCJ0b2tlblwiLFwiZm9udFNpemVcIjozMCxcImNvbG9yXCI6XCIjZmZmZmZmXCJ9LFwiY29tcElkXCI6MTB9XSxcImxvYWRMaXN0XCI6W1wiY29tcC9pbWFnZS5wbmdcIixcIkNoYXJhY3RlcnMvVGFua184LnBuZ1wiLFwiY29tcC9idXR0b24ucG5nXCJdLFwibG9hZExpc3QzRFwiOltdfTtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVmlldyhCYXNlVGVzdFVJLnVpVmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUkVHKFwidWkudmlldy5CYXNlVGVzdFVJXCIsQmFzZVRlc3RVSSk7XHJcbiAgICBleHBvcnQgY2xhc3MgQlBhZ2VVSSBleHRlbmRzIEJhc2VWaWV3IHtcclxuXHRcdHB1YmxpYyBjaGFuZ2U6TGF5YS5CdXR0b247XG5cdFx0cHVibGljIGNsb3NlX2J0bjpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgdG9rZW46TGF5YS5MYWJlbDtcblx0XHRwdWJsaWMgdXNlcm5hbWU6TGF5YS5MYWJlbDtcbiAgICAgICAgcHVibGljIHN0YXRpYyAgdWlWaWV3OmFueSA9e1widHlwZVwiOlwiQmFzZVZpZXdcIixcInByb3BzXCI6e1wid2lkdGhcIjozMDAsXCJoZWlnaHRcIjoxMTM2fSxcImNvbXBJZFwiOjIsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJSZWN0XCIsXCJwcm9wc1wiOntcIndpZHRoXCI6MzAwLFwibGluZVdpZHRoXCI6MSxcImhlaWdodFwiOjExMzYsXCJmaWxsQ29sb3JcIjpcIiNjZGY5YTRcIn0sXCJjb21wSWRcIjozfSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjUzNCxcInhcIjo1OSxcIndpZHRoXCI6MjAwLFwidmFyXCI6XCJjaGFuZ2VcIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcIkNoYW5nZUFQYWdlXCIsXCJoZWlnaHRcIjo1MH0sXCJjb21wSWRcIjo0fSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjY0NCxcInhcIjo1OSxcIndpZHRoXCI6MjAwLFwidmFyXCI6XCJjbG9zZV9idG5cIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcIkNsb3NlXCIsXCJoZWlnaHRcIjo1MH0sXCJjb21wSWRcIjo1fSx7XCJ0eXBlXCI6XCJMYWJlbFwiLFwicHJvcHNcIjp7XCJ5XCI6MTgxLFwieFwiOjEwNSxcInZhclwiOlwidG9rZW5cIixcInRleHRcIjpcInRva2VuXCIsXCJmb250U2l6ZVwiOjMwLFwiY29sb3JcIjpcIiMwMDAwMDBcIn0sXCJjb21wSWRcIjo3fSx7XCJ0eXBlXCI6XCJMYWJlbFwiLFwicHJvcHNcIjp7XCJ5XCI6MjU3LFwieFwiOjEwNSxcInZhclwiOlwidXNlcm5hbWVcIixcInRleHRcIjpcInRva2VuXCIsXCJmb250U2l6ZVwiOjMwLFwiY29sb3JcIjpcIiMwMDAwMDBcIn0sXCJjb21wSWRcIjo4fV0sXCJsb2FkTGlzdFwiOltcImNvbXAvYnV0dG9uLnBuZ1wiXSxcImxvYWRMaXN0M0RcIjpbXX07XHJcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVZpZXcoQlBhZ2VVSS51aVZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFJFRyhcInVpLnZpZXcuQlBhZ2VVSVwiLEJQYWdlVUkpO1xyXG4gICAgZXhwb3J0IGNsYXNzIERpYWxvZ1Rlc3RVSSBleHRlbmRzIEJhc2VWaWV3IHtcclxuXHRcdHB1YmxpYyBib3g6TGF5YS5Cb3g7XG5cdFx0cHVibGljIHRhbms6TGF5YS5DbGlwO1xuXHRcdHB1YmxpYyBjbG9zZUJ0bjpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgdG9rZW46TGF5YS5MYWJlbDtcblx0XHRwdWJsaWMgdXNlcm5hbWU6TGF5YS5MYWJlbDtcbiAgICAgICAgcHVibGljIHN0YXRpYyAgdWlWaWV3OmFueSA9e1widHlwZVwiOlwiQmFzZVZpZXdcIixcInByb3BzXCI6e1wid2lkdGhcIjo2NDAsXCJoZWlnaHRcIjoxMTM2fSxcImNvbXBJZFwiOjIsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJCb3hcIixcInByb3BzXCI6e1wid2lkdGhcIjoyMDAsXCJ2YXJcIjpcImJveFwiLFwiaGVpZ2h0XCI6MjAwLFwiY2VudGVyWVwiOjAsXCJjZW50ZXJYXCI6MH0sXCJjb21wSWRcIjo5LFwiY2hpbGRcIjpbe1widHlwZVwiOlwiSW1hZ2VcIixcInByb3BzXCI6e1widG9wXCI6MCxcInNraW5cIjpcImNvbXAvaW1hZ2UucG5nXCIsXCJyaWdodFwiOjAsXCJsZWZ0XCI6MCxcImJvdHRvbVwiOjB9LFwiY29tcElkXCI6MTB9LHtcInR5cGVcIjpcIkNsaXBcIixcInByb3BzXCI6e1wieVwiOjU1MCxcInhcIjozMDMsXCJ2YXJcIjpcInRhbmtcIixcInNraW5cIjpcIkNoYXJhY3RlcnMvVGFua183LnBuZ1wiLFwiaW5kZXhcIjo0LFwiY2xpcFlcIjo0LFwiY2xpcFhcIjo0LFwiY2VudGVyWVwiOi0xLFwiY2VudGVyWFwiOjB9LFwiY29tcElkXCI6M30se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjozOSxcInhcIjo2Mi41LFwidmFyXCI6XCJjbG9zZUJ0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiY2xvc2VcIn0sXCJjb21wSWRcIjo0fV19LHtcInR5cGVcIjpcIkxhYmVsXCIsXCJwcm9wc1wiOntcInlcIjoxODEsXCJ4XCI6MTA1LFwidmFyXCI6XCJ0b2tlblwiLFwidGV4dFwiOlwidG9rZW5cIixcImZvbnRTaXplXCI6MzAsXCJjb2xvclwiOlwiI2ZmZmZmZlwifSxcImNvbXBJZFwiOjEyfSx7XCJ0eXBlXCI6XCJMYWJlbFwiLFwicHJvcHNcIjp7XCJ5XCI6MjU3LFwieFwiOjEwNSxcInZhclwiOlwidXNlcm5hbWVcIixcInRleHRcIjpcInRva2VuXCIsXCJmb250U2l6ZVwiOjMwLFwiY29sb3JcIjpcIiNmZmZmZmZcIn0sXCJjb21wSWRcIjoxM31dLFwibG9hZExpc3RcIjpbXCJjb21wL2ltYWdlLnBuZ1wiLFwiQ2hhcmFjdGVycy9UYW5rXzcucG5nXCIsXCJjb21wL2J1dHRvbi5wbmdcIl0sXCJsb2FkTGlzdDNEXCI6W119O1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVWaWV3KERpYWxvZ1Rlc3RVSS51aVZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFJFRyhcInVpLnZpZXcuRGlhbG9nVGVzdFVJXCIsRGlhbG9nVGVzdFVJKTtcclxuICAgIGV4cG9ydCBjbGFzcyBMb2FkaW5nVUkgZXh0ZW5kcyBCYXNlVmlldyB7XHJcblx0XHRwdWJsaWMgdGFuazpMYXlhLkNsaXA7XG5cdFx0cHVibGljIGJ0bl9jbG9zZTpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgYnRuX2Nvbm5lY3Q6TGF5YS5CdXR0b247XG5cdFx0cHVibGljIHRva2VuOkxheWEuTGFiZWw7XG5cdFx0cHVibGljIHVzZXJuYW1lOkxheWEuTGFiZWw7XG4gICAgICAgIHB1YmxpYyBzdGF0aWMgIHVpVmlldzphbnkgPXtcInR5cGVcIjpcIkJhc2VWaWV3XCIsXCJwcm9wc1wiOntcIndpZHRoXCI6NjQwLFwiaGVpZ2h0XCI6MTEzNn0sXCJjb21wSWRcIjoyLFwiY2hpbGRcIjpbe1widHlwZVwiOlwiSW1hZ2VcIixcInByb3BzXCI6e1widG9wXCI6MCxcInNraW5cIjpcIkNoYXJhY3RlcnMvVGFua183LnBuZ1wiLFwicmlnaHRcIjowLFwibGVmdFwiOjAsXCJib3R0b21cIjowfSxcImNvbXBJZFwiOjE3fSx7XCJ0eXBlXCI6XCJDbGlwXCIsXCJwcm9wc1wiOntcInZhclwiOlwidGFua1wiLFwic2tpblwiOlwiQ2hhcmFjdGVycy9UYW5rXzQucG5nXCIsXCJpbmRleFwiOjQsXCJjbGlwWVwiOjQsXCJjbGlwWFwiOjQsXCJjZW50ZXJZXCI6LTEsXCJjZW50ZXJYXCI6MH0sXCJjb21wSWRcIjozfSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjMyNyxcInhcIjoyODIuNSxcInZhclwiOlwiYnRuX2Nsb3NlXCIsXCJza2luXCI6XCJjb21wL2J1dHRvbi5wbmdcIixcImxhYmVsXCI6XCJjbG9zZVwifSxcImNvbXBJZFwiOjR9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6MjIyLFwieFwiOjI4Mi41LFwidmFyXCI6XCJidG5fY29ubmVjdFwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiY29ubmVjdFwifSxcImNvbXBJZFwiOjV9LHtcInR5cGVcIjpcIkxhYmVsXCIsXCJwcm9wc1wiOntcInlcIjoxODEsXCJ4XCI6MTA1LFwidmFyXCI6XCJ0b2tlblwiLFwidGV4dFwiOlwidG9rZW5cIixcImZvbnRTaXplXCI6MzAsXCJjb2xvclwiOlwiI2ZmZmZmZlwifSxcImNvbXBJZFwiOjE4fSx7XCJ0eXBlXCI6XCJMYWJlbFwiLFwicHJvcHNcIjp7XCJ5XCI6MjU3LFwieFwiOjEwNSxcInZhclwiOlwidXNlcm5hbWVcIixcInRleHRcIjpcInRva2VuXCIsXCJmb250U2l6ZVwiOjMwLFwiY29sb3JcIjpcIiNmZmZmZmZcIn0sXCJjb21wSWRcIjoxOX1dLFwibG9hZExpc3RcIjpbXCJDaGFyYWN0ZXJzL1RhbmtfNy5wbmdcIixcIkNoYXJhY3RlcnMvVGFua180LnBuZ1wiLFwiY29tcC9idXR0b24ucG5nXCJdLFwibG9hZExpc3QzRFwiOltdfTtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVmlldyhMb2FkaW5nVUkudWlWaWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSRUcoXCJ1aS52aWV3LkxvYWRpbmdVSVwiLExvYWRpbmdVSSk7XHJcbiAgICBleHBvcnQgY2xhc3MgVmlld1Rlc3RVSSBleHRlbmRzIEJhc2VWaWV3IHtcclxuXHRcdHB1YmxpYyB0YW5rOkxheWEuQ2xpcDtcblx0XHRwdWJsaWMgY2xvc2VCdG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIHZpZXdCdG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIHRva2VuOkxheWEuTGFiZWw7XG5cdFx0cHVibGljIHVzZXJuYW1lOkxheWEuTGFiZWw7XG4gICAgICAgIHB1YmxpYyBzdGF0aWMgIHVpVmlldzphbnkgPXtcInR5cGVcIjpcIkJhc2VWaWV3XCIsXCJwcm9wc1wiOntcIndpZHRoXCI6NjQwLFwiaGVpZ2h0XCI6MTEzNn0sXCJjb21wSWRcIjoyLFwiY2hpbGRcIjpbe1widHlwZVwiOlwiSW1hZ2VcIixcInByb3BzXCI6e1wieVwiOjAsXCJ4XCI6MCxcInRvcFwiOjAsXCJza2luXCI6XCJjb21wL2ltYWdlLnBuZ1wiLFwicmlnaHRcIjowLFwibGVmdFwiOjAsXCJib3R0b21cIjowfSxcImNvbXBJZFwiOjd9LHtcInR5cGVcIjpcIkNsaXBcIixcInByb3BzXCI6e1wieVwiOjAsXCJ4XCI6MCxcInZhclwiOlwidGFua1wiLFwic2tpblwiOlwiQ2hhcmFjdGVycy8k54u8LnBuZ1wiLFwiaW5kZXhcIjo0LFwiY2xpcFlcIjo0LFwiY2xpcFhcIjo0LFwiY2VudGVyWVwiOi0xLFwiY2VudGVyWFwiOjB9LFwiY29tcElkXCI6M30se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjozMjcsXCJ4XCI6MjgyLFwidmFyXCI6XCJjbG9zZUJ0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiY2xvc2VcIn0sXCJjb21wSWRcIjo0fSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjM4NSxcInhcIjoyODIuNSxcInZhclwiOlwidmlld0J0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwidmlld1wifSxcImNvbXBJZFwiOjV9LHtcInR5cGVcIjpcIkxhYmVsXCIsXCJwcm9wc1wiOntcInlcIjoxODEsXCJ4XCI6MTA1LFwidmFyXCI6XCJ0b2tlblwiLFwidGV4dFwiOlwidG9rZW5cIixcImZvbnRTaXplXCI6MzAsXCJjb2xvclwiOlwiI2ZmZmZmZlwifSxcImNvbXBJZFwiOjl9LHtcInR5cGVcIjpcIkxhYmVsXCIsXCJwcm9wc1wiOntcInlcIjoyNTcsXCJ4XCI6MTA1LFwidmFyXCI6XCJ1c2VybmFtZVwiLFwidGV4dFwiOlwidG9rZW5cIixcImZvbnRTaXplXCI6MzAsXCJjb2xvclwiOlwiI2ZmZmZmZlwifSxcImNvbXBJZFwiOjEwfV0sXCJsb2FkTGlzdFwiOltcImNvbXAvaW1hZ2UucG5nXCIsXCJDaGFyYWN0ZXJzLyTni7wucG5nXCIsXCJjb21wL2J1dHRvbi5wbmdcIl0sXCJsb2FkTGlzdDNEXCI6W119O1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVWaWV3KFZpZXdUZXN0VUkudWlWaWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSRUcoXCJ1aS52aWV3LlZpZXdUZXN0VUlcIixWaWV3VGVzdFVJKTtcclxuICAgIGV4cG9ydCBjbGFzcyBWaWV3VGVzdDFVSSBleHRlbmRzIEJhc2VWaWV3IHtcclxuXHRcdHB1YmxpYyB0YW5rOkxheWEuQ2xpcDtcblx0XHRwdWJsaWMgY2xvc2VCdG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIHRva2VuOkxheWEuTGFiZWw7XG5cdFx0cHVibGljIHVzZXJuYW1lOkxheWEuTGFiZWw7XG4gICAgICAgIHB1YmxpYyBzdGF0aWMgIHVpVmlldzphbnkgPXtcInR5cGVcIjpcIkJhc2VWaWV3XCIsXCJwcm9wc1wiOntcIndpZHRoXCI6NjQwLFwiaGVpZ2h0XCI6MTEzNn0sXCJjb21wSWRcIjoyLFwiY2hpbGRcIjpbe1widHlwZVwiOlwiSW1hZ2VcIixcInByb3BzXCI6e1wieVwiOjAsXCJ4XCI6MCxcInRvcFwiOjAsXCJza2luXCI6XCJjb21wL2ltYWdlLnBuZ1wiLFwicmlnaHRcIjowLFwibGVmdFwiOjAsXCJib3R0b21cIjowfSxcImNvbXBJZFwiOjZ9LHtcInR5cGVcIjpcIkNsaXBcIixcInByb3BzXCI6e1wieVwiOjAsXCJ4XCI6MCxcInZhclwiOlwidGFua1wiLFwic2tpblwiOlwiQ2hhcmFjdGVycy8k54u8LnBuZ1wiLFwiaW5kZXhcIjo0LFwiY2xpcFlcIjo0LFwiY2xpcFhcIjo0LFwiY2VudGVyWVwiOi0xLFwiY2VudGVyWFwiOjB9LFwiY29tcElkXCI6M30se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjozMjcsXCJ4XCI6MjgyLFwidmFyXCI6XCJjbG9zZUJ0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiY2xvc2VcIn0sXCJjb21wSWRcIjo0fSx7XCJ0eXBlXCI6XCJMYWJlbFwiLFwicHJvcHNcIjp7XCJ5XCI6MTgxLFwieFwiOjEwNSxcInZhclwiOlwidG9rZW5cIixcInRleHRcIjpcInRva2VuXCIsXCJmb250U2l6ZVwiOjMwLFwiY29sb3JcIjpcIiNmZmZmZmZcIn0sXCJjb21wSWRcIjo3fSx7XCJ0eXBlXCI6XCJMYWJlbFwiLFwicHJvcHNcIjp7XCJ5XCI6MjU3LFwieFwiOjEwNSxcInZhclwiOlwidXNlcm5hbWVcIixcInRleHRcIjpcInRva2VuXCIsXCJmb250U2l6ZVwiOjMwLFwiY29sb3JcIjpcIiNmZmZmZmZcIn0sXCJjb21wSWRcIjo4fV0sXCJsb2FkTGlzdFwiOltcImNvbXAvaW1hZ2UucG5nXCIsXCJDaGFyYWN0ZXJzLyTni7wucG5nXCIsXCJjb21wL2J1dHRvbi5wbmdcIl0sXCJsb2FkTGlzdDNEXCI6W119O1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVWaWV3KFZpZXdUZXN0MVVJLnVpVmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUkVHKFwidWkudmlldy5WaWV3VGVzdDFVSVwiLFZpZXdUZXN0MVVJKTtcclxufVxyIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==