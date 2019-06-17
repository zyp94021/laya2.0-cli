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
var HLabel_1 = __webpack_require__(/*! ./core/game/script/HLabel */ "./src/core/game/script/HLabel.ts");
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
        reg("core/game/script/HLabel.ts", HLabel_1.default);
    };
    GameConfig.width = 1920;
    GameConfig.height = 1080;
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
    ViewConst[ViewConst["Login"] = 9] = "Login";
    ViewConst[ViewConst["LoginSuccess"] = 10] = "LoginSuccess";
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
    Object.defineProperty(GameApp, "socket", {
        get: function () {
            return Socket_1.Socket.init('main', { ip: 'http://acgc.fun:3001' });
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
            return Fetch_1.Fetch.init('main', { url: 'http://acgc.fun:3001' });
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

/***/ "./src/core/game/script/HLabel.ts":
/*!****************************************!*\
  !*** ./src/core/game/script/HLabel.ts ***!
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
/**
 * 多语言Label
 */
var HLabel = /** @class */ (function (_super) {
    __extends(HLabel, _super);
    function HLabel() {
        var _this = _super.call(this) || this;
        /** @prop {name:IsFit,type:Bool}*/
        _this.IsFit = true;
        /** @prop {name:IsFill,tips:"1,0",type:Bool}*/
        _this.IsFill = false;
        return _this;
    }
    HLabel.prototype.onAwake = function () {
        this._langLabel = this.owner;
        this.lang();
    };
    HLabel.prototype.lang = function () {
        if (this.LanguageID) {
            this._langLabel.text = this.LanguageID;
        }
        this.fit();
    };
    HLabel.prototype.fit = function () {
        if (!this.IsFit)
            return;
        if (!this._langLabel.wordWrap) {
            if (this.IsFill) {
                if (this._langLabel['_tf'].textWidth > this._langLabel.width)
                    this.fitShortWidth();
                else
                    this.fitLongWidth();
            }
            else
                this.fitShortWidth();
        }
        else {
            if (this.IsFill) {
                if (this._langLabel['_tf'].textHeight > this._langLabel.height)
                    this.fitShortHeight();
                else
                    this.fitLongHeight();
            }
            else
                this.fitShortHeight();
        }
    };
    HLabel.prototype.fitShortWidth = function () {
        var flag = this._langLabel['_tf'].textWidth > this._langLabel.width;
        var fSize = this._langLabel.fontSize;
        while (flag) {
            fSize = fSize - 1;
            Laya.Browser.context.font = fSize + 'px Arial';
            var browserText = Laya.Browser.context.measureText(this._langLabel.text);
            flag = browserText.width > this._langLabel.width && fSize > 12;
        }
        this._langLabel.fontSize = fSize;
    };
    HLabel.prototype.fitLongWidth = function () {
        var flag = this._langLabel['_tf'].textWidth < this._langLabel.width;
        var fSize = this._langLabel.fontSize;
        while (flag) {
            fSize = fSize + 1;
            Laya.Browser.context.font = fSize + 'px Arial';
            var browserText = Laya.Browser.context.measureText(this._langLabel.text);
            flag = browserText.width < this._langLabel.width;
        }
        this._langLabel.fontSize = fSize;
    };
    HLabel.prototype.fitShortHeight = function () {
        var flag = this._langLabel['_tf'].textHeight > this._langLabel.height;
        var fSize = this._langLabel.fontSize;
        while (flag) {
            fSize = fSize - 1;
            Laya.Browser.context.font = fSize + 'px Arial';
            this._langLabel.fontSize = fSize;
            flag = this._langLabel['_tf'].textHeight > this._langLabel.height && fSize > 12;
        }
    };
    HLabel.prototype.fitLongHeight = function () {
        var flag = this._langLabel['_tf'].textHeight < this._langLabel.height;
        var fSize = this._langLabel.fontSize;
        while (flag) {
            fSize = fSize + 1;
            Laya.Browser.context.font = fSize + 'px Arial';
            this._langLabel.fontSize = fSize;
            flag = this._langLabel['_tf'].textHeight < this._langLabel.height;
        }
        this._langLabel.fontSize = fSize - 1;
    };
    return HLabel;
}(Laya.Script));
exports.default = HLabel;


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
var RegisterMVC = function (Layer) {
    return function (View) {
        exports.updateMVCItem({
            viewKey: View.viewKey,
            Layer: Layer,
            View: View,
        });
        return View;
    };
};
exports.RegisterMVC = RegisterMVC;
var setUIRoot = function (root) {
    exports.UI = UI = root;
};
exports.setUIRoot = setUIRoot;
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
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return function (View, name, descriptor) {
        var EventType = Laya.Event.CLICK;
        var mvc = MvcMgr_1.updateMVCItem({ viewKey: View.constructor.viewKey });
        mvc.event = mvc.event || {};
        var event = mvc.event;
        event[EventType] = event[EventType] || {};
        var eventUI = event[EventType];
        eventUI[ui] = eventUI[ui] || [];
        eventUI[ui].push({ func: descriptor.value, arg: args });
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
                    mvc.view[ui].on(type, mvc.view, function () {
                        func.func.apply(mvc.view, func.arg);
                    });
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
                _view.onOpen.apply(_view, args);
                return;
            }
            _view = this.getView(View.viewKey);
            if (_view) {
                (_a = _view.layer).openView.apply(_a, [_view].concat(args));
                this.openViews.set(View.viewKey, _view);
                return;
            }
            _view = this.createView(View);
            this.openViews.set(View.viewKey, _view);
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
        if (view.onOpen) {
            view.onOpen.apply(view, args);
        }
        this.mouseThrough = false;
        this.addChild(view);
    };
    BaseLayer.prototype.closeView = function (view) {
        if (view.onClose) {
            view.onClose();
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
            var _this = _super.call(this) || this;
            _this.stateListener = [];
            return _this;
        }
        BaseView.prototype.init = function () {
            this.initData();
            this.initRes();
            this.initView();
        };
        BaseView.prototype.initData = function () { };
        BaseView.prototype.initRes = function () { };
        BaseView.prototype.initView = function () { };
        BaseView.prototype.onOpen = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            this.updateView(store_1.store.getState());
            this.unsubscribe = store_1.store.subscribe(function () { return _this.updateView.bind(_this)(store_1.store.getState()); });
        };
        BaseView.prototype.onClose = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            this.unsubscribe();
        };
        BaseView.prototype.updateView = function (state) {
            this.stateListener.forEach(function (element) {
                element.onStateChange(state);
            });
            this.onUpdateView(state);
        };
        BaseView.prototype.onUpdateView = function (state) { };
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
exports.ActionTypes = {
    loginRequest: 'loginRequest',
    loginSuccess: 'loginSuccess',
    loginFail: 'loginFail',
    getTodoRequest: 'getTodoRequest',
    addTodoRequest: 'addTodoRequest',
    addTodo: 'addTodo',
    deleteTodo: 'deleteTodo',
    deleteTodoRequest: 'deleteTodoRequest',
    registerRequest: 'registerRequest',
};
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
exports.actionRequest = function (type, payload) { return ({
    type: type,
    payload: payload,
}); };
exports.addTodo = function (payload) { return ({
    type: exports.ActionTypes.addTodo,
    payload: payload,
}); };
exports.deleteTodo = function (payload) { return ({
    type: exports.ActionTypes.deleteTodo,
    payload: payload,
}); };


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
var login = function (state, action) {
    if (state === void 0) { state = false; }
    switch (action.type) {
        case actions_1.ActionTypes.loginSuccess:
            return true;
        case actions_1.ActionTypes.loginFail:
            return false;
        default:
            return state;
    }
};
var changeTestData1 = function (state, action) {
    return state;
};
exports.todo = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case actions_1.ActionTypes.addTodo:
            return action.payload.length > 1 ? action.payload.slice() : state.concat(action.payload);
        case actions_1.ActionTypes.deleteTodo:
            return state.filter(function (item) { return item.id !== action.payload; }).slice();
        default:
            return state;
    }
};
var reducers = redux_1.combineReducers({ testData: changeTestData, user: changeUsername, token: changeToken, todo: exports.todo, login: login });
exports.default = reducers;


/***/ }),

/***/ "./src/game/store/sagas.ts":
/*!*********************************!*\
  !*** ./src/game/store/sagas.ts ***!
  \*********************************/
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var effects_1 = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
var GameApp_1 = __webpack_require__(/*! ../../core/game/GameApp */ "./src/core/game/GameApp.ts");
var actions_1 = __webpack_require__(/*! ./actions */ "./src/game/store/actions.ts");
var store_1 = __webpack_require__(/*! ./store */ "./src/game/store/store.ts");
var getAllTodo = function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, GameApp_1.default.fetch.get('/all')];
}); }); };
var postAddTodo = function (payload) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, GameApp_1.default.fetch.post('/add', {
                message: payload,
            })];
    });
}); };
var postDeleteTodo = function (payload) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, GameApp_1.default.fetch.post('/delete', {
                id: payload,
            })];
    });
}); };
var postLogin = function (payload) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, GameApp_1.default.fetch.post('/login', payload)];
}); }); };
var postRegister = function (payload) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, GameApp_1.default.fetch.post('/register', payload)];
}); }); };
function getTodos() {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.call(getAllTodo)];
            case 1:
                result = _a.sent();
                return [4 /*yield*/, effects_1.put(actions_1.addTodo(result.map(function (item) { return ({ id: item.id, message: item.message }); })))];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
function addTodos(action) {
    var _a, id, message;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, effects_1.call(postAddTodo, action.payload)];
            case 1:
                _a = _b.sent(), id = _a.id, message = _a.message;
                return [4 /*yield*/, effects_1.put(actions_1.addTodo([{ id: id, message: message }]))];
            case 2:
                _b.sent();
                return [2 /*return*/];
        }
    });
}
function deleteTodos(action) {
    var id;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.call(postDeleteTodo, action.payload)];
            case 1:
                id = (_a.sent()).id;
                return [4 /*yield*/, effects_1.put(actions_1.deleteTodo(id))];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
function login(action) {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.call(postLogin, action.payload)];
            case 1:
                result = _a.sent();
                console.log(result);
                if (result.code === 200) {
                    console.log('login success');
                    store_1.store.dispatch(actions_1.changeUsername(result.result.username));
                    store_1.store.dispatch(actions_1.changeToken(result.result.token));
                    store_1.store.dispatch({ type: actions_1.ActionTypes.loginSuccess });
                }
                else {
                    console.log('login fail');
                }
                return [2 /*return*/];
        }
    });
}
function register(action) {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.call(postRegister, action.payload)];
            case 1:
                result = _a.sent();
                console.log(result);
                return [2 /*return*/];
        }
    });
}
function watchRequestTodo() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.takeLatest(actions_1.ActionTypes.getTodoRequest, getTodos)];
            case 1:
                _a.sent();
                return [4 /*yield*/, effects_1.takeLatest(actions_1.ActionTypes.addTodoRequest, addTodos)];
            case 2:
                _a.sent();
                return [4 /*yield*/, effects_1.takeLatest(actions_1.ActionTypes.deleteTodoRequest, deleteTodos)];
            case 3:
                _a.sent();
                return [4 /*yield*/, effects_1.takeLatest(actions_1.ActionTypes.loginRequest, login)];
            case 4:
                _a.sent();
                return [4 /*yield*/, effects_1.takeLatest(actions_1.ActionTypes.registerRequest, register)];
            case 5:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
function rootSaga() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [5 /*yield**/, __values([watchRequestTodo()])];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.default = rootSaga;


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
        data1: 'data11111',
        data2: 'data2',
        testData2: {
            data1: '111',
            testData3: {
                data1: '222',
                testData4: '333',
            },
        },
    },
    todo: [],
    login: false,
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
var redux_saga_1 = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
var sagas_1 = __webpack_require__(/*! ./sagas */ "./src/game/store/sagas.ts");
var sagaMiddleware = redux_saga_1.default();
var enhancer = redux_1.applyMiddleware(sagaMiddleware);
var store = redux_1.createStore(reducer_1.default, state_1.state, enhancer);
exports.store = store;
sagaMiddleware.run(sagas_1.default);
var dispatch = store.dispatch;
exports.dispatch = dispatch;


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
var BaseTest_1 = __webpack_require__(/*! ../BaseTest */ "./src/game/ui/view/BaseTest.ts");
__webpack_require__(/*! ../../../store/store */ "./src/game/store/store.ts");
var store_1 = __webpack_require__(/*! ../../../store/store */ "./src/game/store/store.ts");
var actions_1 = __webpack_require__(/*! ../../../store/actions */ "./src/game/store/actions.ts");
var actions_2 = __webpack_require__(/*! ../../../store/actions */ "./src/game/store/actions.ts");
var GameApp_1 = __webpack_require__(/*! ../../../../core/game/GameApp */ "./src/core/game/GameApp.ts");
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
        _this.todoList.renderHandler = new Laya.Handler(_this, _this.updateTodo);
        _this.todoList.on(Laya.Event.CLICK, _this, _this.todoListClick);
        _this.addBtn.on(Laya.Event.CLICK, _this, _this.addTodo);
        _this.testBtn.on(Laya.Event.CLICK, _this, function () {
            store_1.store.dispatch(actions_2.changeData1(1));
            console.log('finished:', store_1.store.getState());
        });
        return _this;
    }
    APage.prototype.updateTodo = function (cell, index) {
        var label = cell.getChildByName('label');
        var dataSource = cell.dataSource;
        label.text = dataSource.message;
    };
    APage.prototype.todoListClick = function (e) {
        if (e.target.var === 'deleteBtn') {
            var box = e.target.parent;
            // store.dispatch(actionRequest(ActionTypes.deleteTodoRequest, box.dataSource.id))
            GameApp_1.default.socket.sendEvent('delete', { id: box.dataSource.id });
        }
    };
    APage.prototype.addTodo = function () {
        if (this.addInput.text !== '') {
            // store.dispatch(actionRequest(ActionTypes.addTodoRequest, this.addInput.text))
            GameApp_1.default.socket.sendEvent('add', { message: this.addInput.text });
            this.addInput.text = '';
        }
    };
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
    APage.prototype.onUpdateView = function (state) {
        console.log(state);
        var user = state.user, token = state.token, testData = state.testData, todo = state.todo;
        // this.contents.text = testData.data1
        // this.username.text = user.name
        // this.token.text = token
        this.todoList.array = todo;
    };
    APage.prototype.onOpen = function (args) {
        _super.prototype.onOpen.call(this);
        var html = "<span style='fontSize:30' color='#67fc2c'>富文本</span>";
        html += "<img style='height:50;width:50' src='Characters/Tank_4.png'></img>";
        html += "<span style='fontSize:20' color='#fff'>测试</span>";
        this.dd.pos(0, 0);
        this.dd.style.width = 640;
        this.dd.style.align = 'center';
        this.dd.innerHTML = html;
        console.log(this.dd);
        // store.dispatch(actionRequest(ActionTypes.getTodoRequest))
        GameApp_1.default.socket.sendEvent('all');
        GameApp_1.default.socket.addEvent('delete', this, this.returnDelete);
        GameApp_1.default.socket.addEvent('add', this, this.returnAdd);
        GameApp_1.default.socket.addEvent('all', this, function (result) {
            store_1.dispatch(actions_1.addTodo(result.map(function (item) { return ({ id: item.id, message: item.message }); })));
        });
    };
    APage.prototype.onClose = function () {
        GameApp_1.default.socket.removeEvent('delete');
        GameApp_1.default.socket.removeEvent('add');
        GameApp_1.default.socket.removeEvent('all');
    };
    APage.prototype.returnDelete = function (_a) {
        var id = _a.id;
        store_1.dispatch(actions_1.deleteTodo(id));
    };
    APage.prototype.returnAdd = function (_a) {
        var id = _a.id, message = _a.message;
        store_1.dispatch(actions_1.addTodo([{ id: id, message: message }]));
    };
    APage.viewKey = ViewConst_1.ViewConst.APage;
    APage = __decorate([
        MvcMgr_1.RegisterMVC(BaseLayer_1.BaseLayer)
    ], APage);
    return APage;
}(layaMaxUI_1.ui.view.APageUI));
exports.default = APage;


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
var BaseView_1 = __webpack_require__(/*! ../../../../core/mvc/view/BaseView */ "./src/core/mvc/view/BaseView.ts");
var Test = /** @class */ (function (_super) {
    __extends(Test, _super);
    function Test() {
        var _this = _super.call(this) || this;
        // /** @prop {name:intType, tips:"整数类型示例", type:Int, default:1000}*/
        // public intType: number = 1000;
        // /** @prop {name:numType, tips:"数字类型示例", type:Number, default:1000}*/
        // public numType: number = 1000;
        // /** @prop {name:strType, tips:"字符串类型示例", type:String, default:"hello laya"}*/
        // public strType: string = "hello laya";
        // /** @prop {name:boolType, tips:"布尔类型示例", type:Bool, default:true}*/
        // public boolType: boolean = true;
        // 更多参数说明请访问: https://ldc2.layabox.com/doc/?nav=zh-as-2-4-0
        // /** @prop {name:bindkey, tips:"bindkey", type:String}*/
        _this.bindkey = '';
        // /** @prop {name:bindVal, tips:"bindVal", type:String}*/
        _this.bindVal = '';
        _this.callArray = [];
        return _this;
    }
    Test.prototype.onAwake = function () {
        var _this = this;
        console.log(' == awake ');
        this.owner.on(Laya.Event.CLICK, this, function () {
            EffectUtils_1.default.macIconShake(_this.owner, _this.owner.y, function () {
                console.log(1);
            }, _this);
        });
        if (this.binding.length > 0) {
            this.callArray = this.binding.map(function (str) {
                var _a = str.split('|'), field = _a[0], pathStr = _a[1], mapper = _a[2];
                return { field: field, path: pathStr.split('.'), mapper: mapper ? eval(mapper) : undefined };
            });
            var owner = this.owner;
            while (owner) {
                if (owner instanceof BaseView_1.KUI.BaseView) {
                    break;
                }
                owner = this.owner.parent;
            }
            if (owner) {
                var view = owner;
                view.stateListener.push(this);
            }
        }
    };
    Test.prototype.onEnable = function () { };
    Test.prototype.onDisable = function () { };
    Test.prototype.onStateChange = function (state) {
        var _this = this;
        this.callArray.forEach(function (c) {
            var result = c.path.reduce(function (prev, p) { return (prev ? prev[p] : undefined); }, state);
            _this.owner[c.field] = c.mapper ? c.mapper(result) : result;
        });
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
            store_1.store.dispatch(actions_1.changeData1('hello world'));
        });
    };
    BPage.prototype.updateView = function () {
        var _a = store_1.store.getState(), user = _a.user, token = _a.token, testData = _a.testData;
        this.username.text = user.name;
        this.token.text = token;
    };
    BPage.viewKey = ViewConst_1.ViewConst.BPage;
    BPage = __decorate([
        MvcMgr_1.RegisterMVC(DialogLayer_1.DialogLayer)
    ], BPage);
    return BPage;
}(layaMaxUI_1.ui.view.BPageUI));
exports.default = BPage;


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
    BaseTest.prototype.todo1 = function () {
        var type = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            type[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        store_1.store.dispatch(actions_1.changeToken(Math.random()));
                        store_1.store.dispatch(actions_1.changeUsername(Math.random()));
                        console.log(type);
                        _b = (_a = console).log;
                        return [4 /*yield*/, GameApp_1.default.fetch.post('get', { a: [1, 2], c: 'hahahaha' })];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        return [2 /*return*/];
                }
            });
        });
    };
    BaseTest.prototype.onOpen = function () {
        _super.prototype.onOpen.call(this);
        console.log('BaseTest open');
    };
    BaseTest.prototype.updateView = function () {
        var _a = store_1.store.getState(), user = _a.user, token = _a.token, testData = _a.testData;
        this.username.text = user.name;
        this.token.text = token;
    };
    BaseTest.viewKey = ViewConst_1.ViewConst.BaseTest;
    __decorate([
        UIEvent_1.Click('dialogBtn'),
        UIEvent_1.Click('loadingBtn', 1, 2, 3, 4)
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
    Loading.prototype.onOpen = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        _super.prototype.onOpen.call(this);
        console.log('Loading open', args);
    };
    Loading.prototype.updateView = function () {
        var _a = store_1.store.getState(), user = _a.user, token = _a.token, testData = _a.testData;
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

/***/ "./src/game/ui/view/LoginView.ts":
/*!***************************************!*\
  !*** ./src/game/ui/view/LoginView.ts ***!
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
var MvcMgr_1 = __webpack_require__(/*! ../../../core/mvc/MvcMgr */ "./src/core/mvc/MvcMgr.ts");
var BaseLayer_1 = __webpack_require__(/*! ../../../core/mvc/layer/BaseLayer */ "./src/core/mvc/layer/BaseLayer.ts");
var store_1 = __webpack_require__(/*! ../../store/store */ "./src/game/store/store.ts");
var actions_1 = __webpack_require__(/*! ../../store/actions */ "./src/game/store/actions.ts");
var ViewConst_1 = __webpack_require__(/*! ../../../core/const/ViewConst */ "./src/core/const/ViewConst.ts");
var LoginView = /** @class */ (function (_super) {
    __extends(LoginView, _super);
    function LoginView() {
        var _this = _super.call(this) || this;
        _this.bindEvent();
        return _this;
    }
    LoginView.prototype.bindEvent = function () {
        var _this = this;
        this.loginBtn.on(Laya.Event.CLICK, this, function () {
            console.log(_this.usernameInput.text);
            console.log(_this.passwordInput.text);
            store_1.store.dispatch(actions_1.actionRequest(actions_1.ActionTypes.loginRequest, {
                username: _this.usernameInput.text,
                password: _this.passwordInput.text,
            }));
        });
        this.registerBtn.on(Laya.Event.CLICK, this, function () {
            store_1.store.dispatch(actions_1.actionRequest(actions_1.ActionTypes.registerRequest, {
                username: _this.usernameInput.text,
                password: _this.passwordInput.text,
            }));
        });
    };
    LoginView.viewKey = ViewConst_1.ViewConst.Login;
    LoginView = __decorate([
        MvcMgr_1.RegisterMVC(BaseLayer_1.BaseLayer)
    ], LoginView);
    return LoginView;
}(layaMaxUI_1.ui.view.LoginUI));
exports.LoginView = LoginView;


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
    ViewTest.prototype.onOpen = function () {
        _super.prototype.onOpen.call(this);
        console.log('ViewTest open');
    };
    ViewTest.prototype.updateView = function () {
        var _a = store_1.store.getState(), user = _a.user, token = _a.token, testData = _a.testData;
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
    ViewTest1.prototype.onOpen = function () {
        _super.prototype.onOpen.call(this);
        console.log('ViewTest open');
    };
    ViewTest1.prototype.updateView = function () {
        var _a = store_1.store.getState(), user = _a.user, token = _a.token, testData = _a.testData;
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
        return __awaiter(this, void 0, void 0, function () {
            var contentType;
            return __generator(this, function (_a) {
                contentType = res.headers.get('Content-Type');
                if (contentType) {
                    if (contentType.indexOf('json') > -1) {
                        return [2 /*return*/, res.json()];
                    }
                }
                return [2 /*return*/, res.text()];
            });
        });
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
var io = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
var store_1 = __webpack_require__(/*! ../game/store/store */ "./src/game/store/store.ts");
/*
   socket.init(...)
   socket.connect()
*/
var Socket = /** @class */ (function (_super) {
    __extends(Socket, _super);
    function Socket(ip, successCallback, failedCallback) {
        var _this_1 = _super.call(this) || this;
        _this_1.ipAddress = ip;
        _this_1.connectSuccessCallback = successCallback;
        _this_1.connectFailedCallback = failedCallback;
        return _this_1;
    }
    Socket.init = function (key, _a) {
        var ip = _a.ip, _b = _a.successCallback, successCallback = _b === void 0 ? null : _b, _c = _a.failedCallback, failedCallback = _c === void 0 ? null : _c;
        var socket = this.socketMap.get(key);
        if (!socket) {
            socket = new Socket(ip, successCallback, failedCallback);
            this.socketMap.set(key, socket);
        }
        return socket;
    };
    Socket.prototype.connect = function () {
        var _this_1 = this;
        var token = store_1.store.getState().token;
        console.log(token);
        this.socket = io(this.ipAddress, {
            query: {
                token: token,
            },
        });
        this.socket.on('connect', function () {
            console.log('websocket connect...');
            _this_1.connectSuccess();
        });
        this.socket.on('disconnect', this.onDisconnect);
    };
    Socket.prototype.addEvent = function (event, _this, callback) {
        this.socket.on(event, callback.bind(_this));
    };
    Socket.prototype.removeEvent = function (event) {
        this.socket.removeAllListeners(event);
    };
    Socket.prototype.sendEvent = function (event, message) {
        if (message === void 0) { message = null; }
        this.socket.emit(event, message);
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
    };
    Socket.socketMap = new Map();
    return Socket;
}(Singleton_1.Singleton));
exports.Socket = Socket;


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
var LoginView_1 = __webpack_require__(/*! ../game/ui/view/LoginView */ "./src/game/ui/view/LoginView.ts");
var store_1 = __webpack_require__(/*! ../game/store/store */ "./src/game/store/store.ts");
var actions_1 = __webpack_require__(/*! ../game/store/actions */ "./src/game/store/actions.ts");
var GameApp_1 = __webpack_require__(/*! ../core/game/GameApp */ "./src/core/game/GameApp.ts");
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
        // openView(APage,{a:1,b:2})
        // openView(LoginView)
        store_1.store.subscribe(function () { return _this.checkView.bind(_this)(store_1.store.getState()); });
        store_1.store.dispatch({ type: actions_1.ActionTypes.loginFail });
        return _this;
    }
    MainScene.prototype.checkView = function (state) {
        console.log(state);
        var login = state.login;
        console.log("login:" + login);
        if (login) {
            MvcMgr_1.closeView(LoginView_1.LoginView);
            if (!MvcMgr_1.viewMgr.isOpen(APage_1.default)) {
                GameApp_1.default.socket.connect();
                MvcMgr_1.openView(APage_1.default);
            }
        }
        else {
            if (!MvcMgr_1.viewMgr.isOpen(LoginView_1.LoginView)) {
                MvcMgr_1.openView(LoginView_1.LoginView);
            }
        }
    };
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
            APageUI.uiView = { "type": "BaseView", "props": { "width": 640, "height": 1136 }, "compId": 2, "child": [{ "type": "Rect", "props": { "width": 640, "name": "r", "lineWidth": 1, "height": 1136, "fillColor": "#fbbbbb" }, "compId": 7 }, { "type": "Button", "props": { "y": 555, "x": 208, "width": 200, "var": "btn", "skin": "comp/button.png", "label": "GoTo BPage", "height": 50 }, "compId": 8 }, { "type": "HTMLDivElement", "props": { "y": 0, "x": 0, "width": 644, "var": "dd", "innerHTML": "<br/><span>  测试水平居中对齐</span>", "height": 265, "runtime": "laya.html.dom.HTMLDivElement" }, "compId": 20 }, { "type": "Button", "props": { "y": 669, "x": 208, "width": 200, "var": "baseBtn", "skin": "comp/button.png", "label": "GoTo Base", "height": 50 }, "compId": 15, "child": [{ "type": "Label", "props": { "y": -627, "x": 190, "width": 201, "var": "contents", "valign": "middle", "text": "ssss", "height": 500, "fontSize": 40, "align": "center" }, "compId": 14 }] }, { "type": "Label", "props": { "y": 121, "x": 275.5, "width": 63, "valign": "middle", "text": "label", "height": 22, "align": "center" }, "compId": 25 }, { "type": "Button", "props": { "y": 132, "x": 426, "vector1": ["label", "aaa", "d", "d", "label:aaa"], "var": "testBtn", "presetID": 1, "binding": ["label|testData.data1", "labelColors|testData.data1|(x)=>x===1?\"#FB8\":\"#000\""], "width": 192, "skin": "comp/button.png", "label": "按钮脚本", "isPresetRoot": true, "height": 90 }, "compId": 31, "child": [{ "type": "Script", "props": { "vector1": ["label", "aaa", "d", "d", "label:aaa"], "presetID": 2, "mo": false, "bindkey": "label", "binding": ["label|testData.data1", "labelColors|testData.data1|(x)=>x===1?\"#FB8\":\"#000\""], "bindVal": "testData.data1", "y": 1, "x": 0, "runtime": "game/ui/view/APage/Test.ts" }, "compId": 32 }] }, { "type": "List", "props": { "y": 114, "x": 27, "width": 260, "var": "todoList", "vScrollBarSkin": "comp/vscroll.png", "repeatX": 1, "height": 308 }, "compId": 49, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 77, "renderType": "render", "height": 34 }, "compId": 52, "child": [{ "type": "Label", "props": { "y": 7, "x": 0, "text": "label", "renderType": "render", "name": "label", "fontSize": 20 }, "compId": 50 }, { "type": "Button", "props": { "y": 5, "x": 54, "width": 23, "var": "deleteBtn", "skin": "comp/button.png", "label": "x", "height": 23 }, "compId": 53 }] }] }, { "type": "Box", "props": { "y": 422, "x": 208, "width": 225, "height": 22 }, "compId": 54, "child": [{ "type": "TextInput", "props": { "var": "addInput", "skin": "comp/textinput.png" }, "compId": 51 }, { "type": "Button", "props": { "y": -1, "x": 147, "var": "addBtn", "skin": "comp/button.png", "label": "add" }, "compId": 55 }] }], "loadList": ["comp/button.png", "prefab/Button.prefab", "comp/vscroll.png", "comp/textinput.png"], "loadList3D": [] };
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
            BaseTestUI.uiView = { "type": "BaseView", "props": { "width": 640, "height": 1136 }, "compId": 2, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "top": 0, "skin": "comp/image.png", "right": 0, "left": 0, "bottom": 0 }, "compId": 8 }, { "type": "Clip", "props": { "y": 0, "x": 0, "var": "tank", "skin": "Characters/Tank_8.png", "index": 4, "clipY": 4, "clipX": 4, "centerY": -1, "centerX": 0 }, "compId": 3 }, { "type": "Button", "props": { "y": 327, "x": 282, "var": "closeBtn", "skin": "comp/button.png", "label": "close" }, "compId": 4 }, { "type": "Button", "props": { "y": 252, "x": 472, "var": "dialogBtn", "skin": "comp/button.png", "label": "dialog" }, "compId": 5 }, { "type": "Button", "props": { "y": 304, "x": 472, "var": "loadingBtn", "skin": "comp/button.png", "label": "base" }, "compId": 6 }, { "type": "Button", "props": { "y": 362, "x": 472, "var": "viewBtn", "skin": "comp/button.png", "label": "view" }, "compId": 7 }, { "type": "Label", "props": { "y": 181, "x": 105, "var": "token", "text": "token", "fontSize": 30, "color": "#ffffff" }, "compId": 9 }, { "type": "Label", "props": { "y": 257, "x": 105, "wordWrap": true, "width": 95, "var": "username", "text": "token", "height": 51, "fontSize": 30, "color": "#ffffff", "bgColor": "#ff7573" }, "compId": 10, "child": [{ "type": "Script", "props": { "LanguageID": "testtesttest", "IsFill": true, "runtime": "core/game/script/HLabel.ts" }, "compId": 12 }] }], "loadList": ["comp/image.png", "Characters/Tank_8.png", "comp/button.png"], "loadList3D": [] };
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
        var LoginUI = /** @class */ (function (_super) {
            __extends(LoginUI, _super);
            function LoginUI() {
                return _super.call(this) || this;
            }
            LoginUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(LoginUI.uiView);
            };
            LoginUI.uiView = { "type": "BaseView", "props": { "width": 1920, "height": 1080 }, "compId": 2, "child": [{ "type": "Sprite", "props": { "y": 1, "x": 0, "width": 1920, "height": 1080 }, "compId": 6, "child": [{ "type": "Rect", "props": { "width": 1920, "lineWidth": 1, "lineColor": "#ffffff", "height": 1080, "fillColor": "#868686" }, "compId": 7 }] }, { "type": "TextInput", "props": { "y": 419, "x": 850, "width": 279, "var": "usernameInput", "skin": "comp/textinput.png", "height": 48 }, "compId": 3 }, { "type": "TextInput", "props": { "y": 496, "x": 850, "width": 284, "var": "passwordInput", "skin": "comp/textinput.png", "height": 49 }, "compId": 4 }, { "type": "Button", "props": { "y": 641, "x": 975, "width": 159, "var": "loginBtn", "skin": "comp/button.png", "label": "login", "height": 49 }, "compId": 5 }, { "type": "Button", "props": { "y": 636, "x": 753, "width": 175, "var": "registerBtn", "skin": "comp/button.png", "label": "register", "height": 53 }, "compId": 8 }], "loadList": ["comp/textinput.png", "comp/button.png"], "loadList3D": [] };
            return LoginUI;
        }(BaseView));
        view.LoginUI = LoginUI;
        REG("ui.view.LoginUI", LoginUI);
        var LoginSuccessUI = /** @class */ (function (_super) {
            __extends(LoginSuccessUI, _super);
            function LoginSuccessUI() {
                return _super.call(this) || this;
            }
            LoginSuccessUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(LoginSuccessUI.uiView);
            };
            LoginSuccessUI.uiView = { "type": "BaseView", "props": { "width": 1920, "height": 1080 }, "compId": 2, "child": [{ "type": "Label", "props": { "y": 410, "x": 263, "text": "label", "fontSize": 50, "color": "#ffffff", "binding": ["text|user.name|(function(name){return \"name:\"+name})"] }, "compId": 3, "child": [{ "type": "Script", "props": { "binding": ["text|user.name|(function(name){return \"name:\"+name})"], "runtime": "game/ui/view/APage/Test.ts" }, "compId": 4 }] }, { "type": "Label", "props": { "y": 569, "x": 263, "text": "label", "fontSize": 50, "color": "#ffffff", "binding": ["text|token|(function(token){return 'token:'+token})"] }, "compId": 5, "child": [{ "type": "Script", "props": { "binding": ["text|token|(function(token){return 'token:'+token})"], "runtime": "game/ui/view/APage/Test.ts" }, "compId": 6 }] }], "loadList": [], "loadList3D": [] };
            return LoginSuccessUI;
        }(BaseView));
        view.LoginSuccessUI = LoginSuccessUI;
        REG("ui.view.LoginSuccessUI", LoginSuccessUI);
        var MapViewUI = /** @class */ (function (_super) {
            __extends(MapViewUI, _super);
            function MapViewUI() {
                return _super.call(this) || this;
            }
            MapViewUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(MapViewUI.uiView);
            };
            MapViewUI.uiView = { "type": "BaseView", "props": { "width": 1920, "height": 1080 }, "compId": 2, "child": [{ "type": "Clip", "props": { "skin": "Characters/Tank_3.png", "index": 0, "clipY": 4, "clipX": 4, "centerY": 0, "centerX": 0 }, "compId": 4 }], "loadList": ["Characters/Tank_3.png"], "loadList3D": [] };
            return MapViewUI;
        }(BaseView));
        view.MapViewUI = MapViewUI;
        REG("ui.view.MapViewUI", MapViewUI);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWVDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvVXRpbHMvRWZmZWN0VXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvYmFzZS9TaW5nbGV0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY29uc3QvTGF5ZXJDb25zdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9jb25zdC9WaWV3Q29uc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZ2FtZS9HYW1lQXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2dhbWUvc2NyaXB0L0hMYWJlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9nYW1lL3V0aWxzL1N0cmluZ1V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZ2FtZS91dGlscy9UaW1lVXRpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9tdmMvTXZjTWdyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL212Yy9VSUV2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL212Yy9WaWV3TWdyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL212Yy9sYXllci9CYXNlTGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvbXZjL2xheWVyL0RpYWxvZ0xheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL212Yy9sYXllci9WaWV3TGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvbXZjL3ZpZXcvQmFzZVZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvc2VydmljZS9TZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3NlcnZpY2UvZGlzcGF0Y2hlci9EaXNwYXRjaGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3NlcnZpY2UvZGlzcGF0Y2hlci9PYnNlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9zdG9yZS9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3N0b3JlL3JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvc3RvcmUvc2FnYXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvc3RvcmUvc3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvc3RvcmUvc3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdWkvdmlldy9BUGFnZS9BUGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS91aS92aWV3L0FQYWdlL1Rlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdWkvdmlldy9CUGFnZS9CUGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS91aS92aWV3L0Jhc2VUZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3VpL3ZpZXcvTG9hZGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS91aS92aWV3L0xvZ2luVmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS91aS92aWV3L1ZpZXdUZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3VpL3ZpZXcvVmlld1Rlc3QxLnRzIiwid2VicGFjazovLy8uL3NyYy9uZXQvRmV0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ldC9Tb2NrZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ldC9odHRwL0dhbWVOZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ldC9odHRwL05ldFJlcXVlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lL01haW5TY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvbGF5YU1heFVJLnRzIiwid2VicGFjazovLy93cyAoaWdub3JlZCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQWdCLHVCQUF1QjtBQUN2Qzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RKQSxnR0FBZ0c7QUFDaEcsMkZBQXlDO0FBQ3pDLHNHQUE0QztBQUM1Qyx3R0FBOEM7QUFDOUM7O0VBRUU7QUFDRjtJQWFJO0lBQWMsQ0FBQztJQUNSLGVBQUksR0FBWDtRQUNJLElBQUksR0FBRyxHQUFhLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQzdDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBQyxtQkFBUyxDQUFDLENBQUM7UUFDcEMsR0FBRyxDQUFDLDRCQUE0QixFQUFDLGNBQUksQ0FBQyxDQUFDO1FBQ3ZDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBQyxnQkFBTSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQWxCTSxnQkFBSyxHQUFRLElBQUksQ0FBQztJQUNsQixpQkFBTSxHQUFRLElBQUksQ0FBQztJQUNuQixvQkFBUyxHQUFRLFNBQVMsQ0FBQztJQUMzQixxQkFBVSxHQUFRLE1BQU0sQ0FBQztJQUN6QixpQkFBTSxHQUFRLFFBQVEsQ0FBQztJQUN2QixpQkFBTSxHQUFRLFFBQVEsQ0FBQztJQUN2QixxQkFBVSxHQUFLLHVCQUF1QixDQUFDO0lBQ3ZDLG9CQUFTLEdBQVEsRUFBRSxDQUFDO0lBQ3BCLGdCQUFLLEdBQVMsS0FBSyxDQUFDO0lBQ3BCLGVBQUksR0FBUyxLQUFLLENBQUM7SUFDbkIsdUJBQVksR0FBUyxLQUFLLENBQUM7SUFDM0IsNEJBQWlCLEdBQVMsSUFBSSxDQUFDO0lBUTFDLGlCQUFDO0NBQUE7a0JBcEJvQixVQUFVO0FBcUIvQixVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzVCbEIsa0ZBQXFDO0FBQ3JDO0lBQ0U7UUFDRSxjQUFjO1FBQ2QsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBVSxDQUFDLEtBQUssRUFBRSxvQkFBVSxDQUFDLE1BQU0sQ0FBQzs7WUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBVSxDQUFDLEtBQUssRUFBRSxvQkFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUU7UUFDM0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEVBQUU7UUFDakQsK0NBQStDO1FBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLG9CQUFVLENBQUMsU0FBUztRQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxvQkFBVSxDQUFDLFVBQVU7UUFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsb0JBQVUsQ0FBQyxNQUFNO1FBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLG9CQUFVLENBQUMsTUFBTTtRQUNyQyxvQkFBb0I7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxvQkFBVSxDQUFDLGlCQUFpQjtRQUV6RCxvREFBb0Q7UUFDcEQsSUFBSSxvQkFBVSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNO1lBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1FBQzdGLElBQUksb0JBQVUsQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDO1lBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsTUFBTSxFQUFFO1FBQzFGLElBQUksb0JBQVUsQ0FBQyxJQUFJO1lBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDckMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUk7UUFDNUIsZ0RBQWdEO1FBQ2hELElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUM7SUFDckksQ0FBQztJQUVPLDhCQUFlLEdBQXZCO1FBQ0UsK0NBQStDO1FBQy9DLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNqRyxDQUFDO0lBRU8sNkJBQWMsR0FBdEI7UUFDRSxZQUFZO1FBQ1osb0JBQVUsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsb0JBQVUsQ0FBQyxVQUFVLENBQUM7SUFDakUsQ0FBQztJQUNILFdBQUM7QUFBRCxDQUFDO0FBQ0QsT0FBTztBQUNQLElBQUksSUFBSSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7QUNuQ1Y7SUFBQTtJQXdLQSxDQUFDO0lBdktDOzs7Ozs7T0FNRztJQUNXLHdCQUFZLEdBQTFCLFVBQTJCLEdBQUcsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU87UUFDdEQsbUJBQW1CO1FBQ25CLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFckQsSUFBSSxLQUFLLEdBQUcsQ0FBQztRQUNiLE9BQU8sRUFBRTtRQUVULFNBQVMsT0FBTztZQUNkLElBQUksS0FBSyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3ZCLFFBQVEsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7YUFDeEM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQ1gsR0FBRyxFQUNILEVBQUUsQ0FBQyxFQUFFLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFDNUIsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNiLElBQUksRUFDSixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7b0JBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUNYLEdBQUcsRUFDSCxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFDWixHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ2IsSUFBSSxFQUNKLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTt3QkFDeEIsRUFBRSxLQUFLO3dCQUNQLE9BQU8sRUFBRTtvQkFDWCxDQUFDLENBQUMsQ0FDSDtnQkFDSCxDQUFDLENBQUMsQ0FDSDthQUNGO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNXLG1CQUFPLEdBQXJCLFVBQXNCLEdBQUcsRUFBRSxJQUFVLEVBQUUsSUFBVyxFQUFFLFFBQWUsRUFBRSxPQUFjLEVBQUUsT0FBYztRQUF4RSxpQ0FBVTtRQUFFLGtDQUFXO1FBQUUsMENBQWU7UUFBRSx3Q0FBYztRQUFFLHdDQUFjO1FBQ2pHLElBQUksUUFBUSxFQUFFO1lBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDOUc7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNoSDtJQUNILENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDVyxtQkFBTyxHQUFyQixVQUFzQixRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFjO1FBQWQsd0NBQWM7UUFDOUQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1FBQ3hDLElBQUksTUFBTSxJQUFJLENBQUM7WUFBRSxPQUFNO1FBQ3ZCLElBQUksV0FBVyxHQUFHLE1BQU0sR0FBRyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7UUFDOUMsSUFBSSxPQUFPLEdBQUcsUUFBUTtRQUN0QixJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDNUIsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQztRQUUvQixTQUFTLFNBQVM7WUFDaEIsT0FBTyxJQUFJLFdBQVc7WUFDdEIsRUFBRSxNQUFNO1lBQ1IsSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNkLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUNwQixLQUFLLEdBQUcsSUFBSTthQUNiO2lCQUFNO2dCQUNMLFFBQVEsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQy9DO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ1csd0JBQVksR0FBMUIsVUFBMkIsR0FBRyxFQUFFLFNBQWU7UUFBZiwyQ0FBZTtRQUM3QyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDWCxHQUFHLEVBQ0gsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQ1osU0FBUyxFQUNULElBQUksRUFDSixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FDakIsSUFBSSxFQUNKO1lBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3hHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQ2IsQ0FDRjtJQUNILENBQUM7SUFFRDs7Ozs7T0FLRztJQUNXLHNCQUFVLEdBQXhCLFVBQXlCLEdBQUcsRUFBRSxJQUFXLEVBQUUsSUFBVztRQUF4QixrQ0FBVztRQUFFLGtDQUFXO1FBQ3BELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUN4QixJQUFJLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtZQUNsQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7U0FDcEI7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNXLHVCQUFXLEdBQXpCLFVBQTBCLEVBQUUsRUFBRSxVQUFpQjtRQUFqQiw4Q0FBaUI7UUFDN0MsSUFBSSxDQUFDLEVBQUU7WUFBRSxPQUFNO1FBQ2YsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQzFELEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBQ2EsNEJBQWdCLEdBQTlCLFVBQStCLEVBQUU7UUFDL0IsSUFBSSxDQUFDLEVBQUU7WUFBRSxPQUFNO1FBQ2YsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQzVELENBQUM7SUFDYSw0QkFBZ0IsR0FBOUIsVUFBK0IsRUFBRSxFQUFFLFVBQVU7UUFBN0MsaUJBa0NDO1FBakNDLElBQUksRUFBRSxDQUFDLGdCQUFnQjtZQUFFLE9BQU07UUFDL0IsRUFBRSxDQUFDLGdCQUFnQixHQUFHLElBQUk7UUFDMUIsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDYixJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNiLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxNQUFNO1FBQ3JCLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxNQUFNO1FBQ3JCLElBQUksS0FBSyxFQUFFLEtBQUs7UUFDaEIsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLEtBQUssR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BDLEtBQUssR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RDO2FBQU07WUFDTCxLQUFLLEdBQUcsRUFBRTtZQUNWLEtBQUssR0FBRyxFQUFFO1NBQ1g7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDWCxFQUFFLEVBQ0YsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsR0FBRyxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsR0FBRyxLQUFLLEVBQUUsRUFDaEUsR0FBRyxFQUNILElBQUksRUFDSixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQ1gsRUFBRSxFQUNGLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUM5QyxHQUFHLEVBQ0gsSUFBSSxFQUNKLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUksRUFBRTtnQkFDeEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUU7b0JBQ2pCLEVBQUUsQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLO2lCQUM1QjtZQUNILENBQUMsQ0FBQyxDQUNIO1FBQ0gsQ0FBQyxDQUFDLENBQ0g7SUFDSCxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDektEOztHQUVHO0FBQ0g7SUFDRTs7T0FFRztJQUNIO0lBQWUsQ0FBQztJQUdoQjs7O09BR0c7SUFDVyxxQkFBVyxHQUF6QjtRQUEwQixjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLHlCQUFjOztRQUN0QyxJQUFNLEtBQUssR0FBUSxJQUFJO1FBQ3ZCLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLFNBQVEsS0FBSyxZQUFMLEtBQUssa0JBQUksSUFBSSxLQUFDLENBQUM7SUFDbEUsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQztBQWZZLDhCQUFTOzs7Ozs7Ozs7Ozs7Ozs7QUNIdEIsSUFBWSxVQU9YO0FBUEQsV0FBWSxVQUFVO0lBQ3BCLDJDQUFRO0lBQ1IsNkNBQUs7SUFDTCwyQ0FBSTtJQUNKLDZDQUFLO0lBQ0wsK0NBQU07SUFDTixpREFBTztBQUNULENBQUMsRUFQVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQU9yQjs7Ozs7Ozs7Ozs7Ozs7O0FDUEQsSUFBWSxTQVdYO0FBWEQsV0FBWSxTQUFTO0lBQ25CLHlDQUFRO0lBQ1IsK0NBQU87SUFDUCxpREFBUTtJQUNSLG1EQUFTO0lBQ1QscURBQVU7SUFDVixpREFBUTtJQUNSLDJDQUFLO0lBQ0wsMkNBQUs7SUFDTCwyQ0FBSztJQUNMLDBEQUFZO0FBQ2QsQ0FBQyxFQVhXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBV3BCOzs7Ozs7Ozs7Ozs7Ozs7QUNYRCwrRkFBNEM7QUFFNUMsa0ZBQXlDO0FBQ3pDLHdHQUErQztBQUMvQyxrR0FBMkM7QUFFM0MsK0ZBQTRDO0FBQzVDLCtFQUF1QztBQUN2QztJQUFBO0lBb0NBLENBQUM7SUFoQ0M7OztPQUdHO0lBQ1csWUFBSSxHQUFsQjtRQUNFLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDO1lBQzNELEtBQUs7WUFDTCxpQkFBTyxDQUFDLElBQUksRUFBRTtZQUNkLE9BQU8sRUFBRTtRQUNYLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxzQkFBa0IscUJBQVU7YUFBNUI7WUFDRSxPQUFPLGlCQUFPLENBQUMsVUFBVTtRQUMzQixDQUFDOzs7T0FBQTtJQUVELHNCQUFrQixxQkFBVTthQUE1QjtZQUNFLE9BQU8sdUJBQVUsQ0FBQyxXQUFXLEVBQUU7UUFDakMsQ0FBQzs7O09BQUE7SUFDRCxzQkFBa0IsbUJBQVE7YUFBMUI7WUFDRSxPQUFPLG1CQUFRLENBQUMsV0FBVyxFQUFFO1FBQy9CLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWtCLGlCQUFNO2FBQXhCO1lBQ0UsT0FBTyxlQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFBRSxzQkFBc0IsRUFBRSxDQUFDO1FBQzVELENBQUM7OztPQUFBO0lBQ0Qsc0JBQWtCLGNBQUc7YUFBckI7WUFDRSxPQUFPLGlCQUFPLENBQUMsV0FBVyxFQUFFO1FBQzlCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWtCLGdCQUFLO2FBQXZCO1lBQ0UsT0FBTyxhQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxzQkFBc0IsRUFBRSxDQUFDO1FBQzVELENBQUM7OztPQUFBO0lBbENELFNBQVM7SUFDSyxrQkFBVSxHQUFRLElBQUk7SUFrQ3RDLGNBQUM7Q0FBQTtrQkFwQ29CLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSNUI7O0dBRUc7QUFDSDtJQUFvQywwQkFBVztJQUM3QztRQUFBLFlBQ0UsaUJBQU8sU0FDUjtRQUdELGtDQUFrQztRQUMzQixXQUFLLEdBQVksSUFBSTtRQUM1Qiw4Q0FBOEM7UUFDdkMsWUFBTSxHQUFZLEtBQUs7O0lBTjlCLENBQUM7SUFTRCx3QkFBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBbUI7UUFDMUMsSUFBSSxDQUFDLElBQUksRUFBRTtJQUNiLENBQUM7SUFDTyxxQkFBSSxHQUFaO1FBQ0UsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVO1NBQ3ZDO1FBQ0QsSUFBSSxDQUFDLEdBQUcsRUFBRTtJQUNaLENBQUM7SUFDTSxvQkFBRyxHQUFWO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTTtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDN0IsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNmLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLO29CQUFFLElBQUksQ0FBQyxhQUFhLEVBQUU7O29CQUM3RSxJQUFJLENBQUMsWUFBWSxFQUFFO2FBQ3pCOztnQkFBTSxJQUFJLENBQUMsYUFBYSxFQUFFO1NBQzVCO2FBQU07WUFDTCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2YsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU07b0JBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRTs7b0JBQ2hGLElBQUksQ0FBQyxhQUFhLEVBQUU7YUFDMUI7O2dCQUFNLElBQUksQ0FBQyxjQUFjLEVBQUU7U0FDN0I7SUFDSCxDQUFDO0lBRU8sOEJBQWEsR0FBckI7UUFDRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUs7UUFDbkUsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRO1FBQ3BDLE9BQU8sSUFBSSxFQUFFO1lBQ1gsS0FBSyxHQUFHLEtBQUssR0FBRyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxLQUFLLEdBQUcsVUFBVTtZQUM5QyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFDeEUsSUFBSSxHQUFHLFdBQVcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUksS0FBSyxHQUFHLEVBQUU7U0FDL0Q7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxLQUFLO0lBQ2xDLENBQUM7SUFDTyw2QkFBWSxHQUFwQjtRQUNFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSztRQUNuRSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVE7UUFDcEMsT0FBTyxJQUFJLEVBQUU7WUFDWCxLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLEtBQUssR0FBRyxVQUFVO1lBQzlDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztZQUN4RSxJQUFJLEdBQUcsV0FBVyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUs7U0FDakQ7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxLQUFLO0lBQ2xDLENBQUM7SUFDTywrQkFBYyxHQUF0QjtRQUNFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTTtRQUNyRSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVE7UUFDcEMsT0FBTyxJQUFJLEVBQUU7WUFDWCxLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLEtBQUssR0FBRyxVQUFVO1lBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEtBQUs7WUFDaEMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLEtBQUssR0FBRyxFQUFFO1NBQ2hGO0lBQ0gsQ0FBQztJQUNPLDhCQUFhLEdBQXJCO1FBQ0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNO1FBQ3JFLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUTtRQUNwQyxPQUFPLElBQUksRUFBRTtZQUNYLEtBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsS0FBSyxHQUFHLFVBQVU7WUFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsS0FBSztZQUNoQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNO1NBQ2xFO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsS0FBSyxHQUFHLENBQUM7SUFDdEMsQ0FBQztJQUNILGFBQUM7QUFBRCxDQUFDLENBaEZtQyxJQUFJLENBQUMsTUFBTSxHQWdGOUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkZELGtHQUFnRDtBQUVoRDtJQUFnQyw4QkFBUztJQUN2QztlQUNFLGlCQUFPO0lBQ1QsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxDQUorQixxQkFBUyxHQUl4QztBQUpZLGdDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnZCLGtHQUFnRDtBQUVoRDtJQUE4Qiw0QkFBUztJQUNyQztlQUNFLGlCQUFPO0lBQ1QsQ0FBQztJQUNELGFBQWE7SUFDTCw2QkFBVSxHQUFsQixVQUFtQixJQUFZO1FBQzdCLE9BQU87WUFDTCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQzlCLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUN2QyxPQUFPLEVBQUUsSUFBSSxHQUFHLEVBQUU7U0FDbkI7SUFDSCxDQUFDO0lBQ0Q7Ozs7OztPQU1HO0lBQ0ksNEJBQVMsR0FBaEIsVUFBaUIsSUFBWSxFQUFFLElBQWtCLEVBQUUsTUFBb0IsRUFBRSxNQUFvQjtRQUE5RCxpQ0FBa0I7UUFBRSxxQ0FBb0I7UUFBRSxxQ0FBb0I7UUFDM0YsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDaEMsT0FBTyxLQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBUTtJQUMvRSxDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNJLDZCQUFVLEdBQWpCLFVBQWtCLElBQVUsRUFBRSxNQUFzQztRQUF0Qyx1REFBc0M7UUFDbEUsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRTtRQUM3QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFFO1FBQ3JGLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBSSxJQUFJLENBQUMsT0FBTyxFQUFJO1FBQ3BFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDekIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFJLElBQUksQ0FBQyxRQUFRLEVBQUk7UUFDeEUsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUMzQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQUksSUFBSSxDQUFDLFVBQVUsRUFBSTtRQUNoRixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFO1FBQy9CLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBSSxJQUFJLENBQUMsVUFBVSxFQUFJO1FBQ2hGLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7UUFFL0IsT0FBTyxNQUFNO2FBQ1YsT0FBTyxDQUFDLE1BQU0sRUFBRSxLQUFHLElBQU0sQ0FBQzthQUMxQixPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUcsS0FBTyxDQUFDO2FBQ3pCLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBRyxNQUFRLENBQUM7YUFDekIsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFHLEdBQUssQ0FBQzthQUN2QixPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUcsSUFBTSxDQUFDO2FBQ3ZCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBRyxJQUFNLENBQUM7YUFDeEIsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFHLEtBQU8sQ0FBQzthQUN4QixPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUcsTUFBUSxDQUFDO2FBQzFCLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBRyxPQUFTLENBQUM7YUFDMUIsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFHLE1BQVEsQ0FBQzthQUMxQixPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUcsT0FBUyxDQUFDO0lBQy9CLENBQUM7SUFDRDs7T0FFRztJQUNJLDBCQUFPLEdBQWQ7UUFDRSxJQUFNLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRTtRQUN0QixHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNsQixHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNwQixHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNwQixHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sR0FBRztJQUNaLENBQUM7SUFDRDs7T0FFRztJQUNJLDZCQUFVLEdBQWpCO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxDQXZFNkIscUJBQVMsR0F1RXRDO0FBdkVZLDRCQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZyQiwwRUFBOEI7QUFDOUI7Ozs7Ozs7Ozs7OztHQVlHO0FBQ0gsSUFBTSxHQUFHLEdBQUcsRUFBRTtBQWdDaUQsa0JBQUc7QUEvQnJELHFCQUFhLEdBQUcsaUJBQU8sSUFBSSxVQUFHLENBQUMsSUFBSSxDQUFDLGNBQUksSUFBSSxXQUFJLENBQUMsT0FBTyxLQUFLLE9BQU8sRUFBeEIsQ0FBd0IsQ0FBQyxFQUExQyxDQUEwQztBQUNyRSxxQkFBYSxHQUFHLFVBQUMsRUFBb0I7SUFBbEIsd0JBQU8sRUFBRSw4QkFBTztJQUM5QyxJQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLGNBQUksSUFBSSxXQUFJLENBQUMsT0FBTyxLQUFLLE9BQU8sRUFBeEIsQ0FBd0IsQ0FBQztJQUM3RCxJQUFJLEdBQUc7SUFDUCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtRQUNkLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDdkIsR0FBRyxnQkFBUSxJQUFJLEVBQUssSUFBSSxDQUFFO1FBQzFCLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7S0FDMUI7U0FBTTtRQUNMLEdBQUcsY0FBSyxPQUFPLGFBQUssSUFBSSxDQUFFO1FBQzFCLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0tBQ2Q7SUFDRCxPQUFPLEdBQUc7QUFDWixDQUFDO0FBQ0QsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUs7QUFpQmlELGdCQUFFO0FBaEJ0RSxJQUFNLFdBQVcsR0FBRyxlQUFLO0lBQ3ZCLE9BQU8sY0FBSTtRQUNULHFCQUFhLENBQUM7WUFDWixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsS0FBSztZQUNMLElBQUk7U0FDTCxDQUFDO1FBQ0YsT0FBTyxJQUFJO0lBQ2IsQ0FBQztBQUNILENBQUM7QUFPc0Msa0NBQVc7QUFObEQsSUFBTSxTQUFTLEdBQUcsY0FBSTtJQUNwQixlQUFFLEdBQUcsSUFBSTtBQUNYLENBQUM7QUFJbUQsOEJBQVM7QUFIN0QsSUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPO0FBR3BCLDBCQUFPO0FBRmhCLElBQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUTtBQUViLDRCQUFRO0FBRDFCLElBQU0sU0FBUyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUztBQUNMLDhCQUFTOzs7Ozs7Ozs7Ozs7Ozs7QUM5Q3JDLCtFQUF3QztBQUUzQixhQUFLLEdBQUcsVUFBQyxFQUFFO0lBQUUsY0FBTztTQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87UUFBUCw2QkFBTzs7SUFDL0IsT0FBTyxVQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVTtRQUM1QixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7UUFDbEMsSUFBTSxHQUFHLEdBQUcsc0JBQWEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2hFLEdBQUcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQzNCLElBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLO1FBQ3ZCLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRTtRQUN6QyxJQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRTtRQUMvQixPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDO1FBRXZELE9BQU8sVUFBVTtJQUNuQixDQUFDO0FBQ0gsQ0FBQztBQUVZLGlCQUFTLEdBQUcsYUFBRztJQUMxQixJQUFJLEdBQUcsQ0FBQyxLQUFLLEVBQUU7UUFDYixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBSztZQUNyQyxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDeEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsaUJBQU87Z0JBQ3JDLElBQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBSTtvQkFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRTt3QkFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDO29CQUNyQyxDQUFDLENBQUM7Z0JBQ0osQ0FBQyxDQUFDO1lBQ0osQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDO0tBQ0g7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM3QkQsK0VBQTRDO0FBQzVDLGtGQUFxQztBQUVyQyxJQUFjLEdBQUcsQ0E4RmhCO0FBOUZELFdBQWMsS0FBRztJQUNmO1FBQUE7WUFDVSxVQUFLLEdBQXVCLElBQUksR0FBRyxFQUFpQjtZQUNwRCxXQUFNLEdBQXdCLElBQUksR0FBRyxFQUFrQjtZQUN2RCxjQUFTLEdBQXVCLElBQUksR0FBRyxFQUFpQjtRQWlGbEUsQ0FBQztRQS9FUSx5QkFBTyxHQUFkLFVBQWUsR0FBRztZQUNoQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUM1QixDQUFDO1FBQ00seUJBQU8sR0FBZCxVQUFlLEdBQUcsRUFBRSxJQUFXO1lBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUM7UUFDM0IsQ0FBQztRQUNNLDBCQUFRLEdBQWYsVUFBZ0IsS0FBSztZQUNuQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1lBQzNDLElBQUksS0FBSztnQkFBRSxPQUFPLEtBQUs7WUFDdkIsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7WUFDcEMsT0FBTyxLQUFLO1FBQ2QsQ0FBQztRQUNNLDBCQUFRLEdBQWYsVUFBZ0IsR0FBRyxFQUFFLEtBQWE7WUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztRQUM3QixDQUFDO1FBRU0sMEJBQVEsR0FBZixVQUFnQixJQUFJOztZQUFFLGNBQU87aUJBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztnQkFBUCw2QkFBTzs7WUFDM0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUM1QyxJQUFJLEtBQUssRUFBRTtnQkFDVCxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDO2dCQUMvQixPQUFNO2FBQ1A7WUFDRCxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2xDLElBQUksS0FBSyxFQUFFO2dCQUNULFdBQUssQ0FBQyxLQUFLLEVBQUMsUUFBUSxZQUFDLEtBQUssU0FBSyxJQUFJLEdBQUM7Z0JBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO2dCQUN2QyxPQUFNO2FBQ1A7WUFDRCxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7WUFDdkMsV0FBSyxDQUFDLEtBQUssRUFBQyxRQUFRLFlBQUMsS0FBSyxTQUFLLElBQUksR0FBQztRQUN0QyxDQUFDO1FBQ08sNEJBQVUsR0FBbEIsVUFBbUIsSUFBSTtZQUNyQixJQUFNLEdBQUcsR0FBRyxzQkFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDdkMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBRXRDLElBQUksS0FBSyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksRUFBRTtZQUMxQixLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUs7WUFDbkIsR0FBRyxDQUFDLElBQUksR0FBRyxLQUFLO1lBQ2hCLEdBQUcsQ0FBQyxLQUFLLEdBQUcsS0FBSztZQUNqQixtQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUVkLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7WUFDaEMsSUFBSSxLQUFLLENBQUMsSUFBSTtnQkFBRSxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQzVCLE9BQU8sS0FBSztRQUNkLENBQUM7UUFDTyw2QkFBVyxHQUFuQixVQUFvQixLQUFLO1lBQ3ZCLElBQU0sTUFBTSxHQUFHLElBQUksS0FBSyxDQUFDLFdBQUUsQ0FBQztZQUM1QixNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxRQUFRO1lBQzlCLFdBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ25CLE9BQU8sTUFBTTtRQUNmLENBQUM7UUFDTSwyQkFBUyxHQUFoQixVQUFpQixjQUFtQjs7WUFBRSxjQUFPO2lCQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87Z0JBQVAsNkJBQU87O1lBQzNDLElBQUksS0FBSztZQUNULElBQUksY0FBYyxDQUFDLE9BQU8sRUFBRTtnQkFDMUIsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQzthQUM3QztpQkFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUU7Z0JBQ3ZDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQzthQUNyQztpQkFBTSxJQUFJLGNBQWMsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFO2dCQUM3QyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQzthQUN6RDtZQUNELElBQUksS0FBSyxFQUFFO2dCQUNULFdBQUssQ0FBQyxLQUFLLEVBQUMsU0FBUyxZQUFDLEtBQUssU0FBSyxJQUFJLEdBQUM7Z0JBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO2dCQUNoRCxPQUFNO2FBQ1A7UUFDSCxDQUFDO1FBQ00sd0JBQU0sR0FBYixVQUFjLGNBQWM7WUFDMUIsSUFBSSxLQUFLO1lBQ1QsSUFBSSxjQUFjLENBQUMsT0FBTyxFQUFFO2dCQUMxQixLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQzthQUNuRDtpQkFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFO2dCQUM3QyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDO2FBQzNDO2lCQUFNLElBQUksY0FBYyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUU7Z0JBQzdDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQzthQUMvRDtZQUNELE9BQU8sQ0FBQyxDQUFDLEtBQUs7UUFDaEIsQ0FBQztRQUNILGNBQUM7SUFBRCxDQUFDO0lBQ1ksYUFBTyxHQUFHLElBQUksT0FBTyxFQUFFO0lBQ3ZCLGNBQVEsR0FBRyxVQUFDLElBQUk7UUFBRSxjQUFPO2FBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztZQUFQLDZCQUFPOztRQUNwQyxhQUFPLENBQUMsUUFBUSxPQUFoQixhQUFPLEdBQVUsSUFBSSxTQUFLLElBQUksR0FBQztJQUNqQyxDQUFDO0lBRVksZUFBUyxHQUFHLFVBQUMsY0FBYztRQUFFLGNBQU87YUFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1lBQVAsNkJBQU87O1FBQy9DLGFBQU8sQ0FBQyxTQUFTLE9BQWpCLGFBQU8sR0FBVyxjQUFjLFNBQUssSUFBSSxHQUFDO0lBQzVDLENBQUM7QUFDSCxDQUFDLEVBOUZhLEdBQUcsR0FBSCxXQUFHLEtBQUgsV0FBRyxRQThGaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwR0QsdUdBQW1EO0FBRW5EO0lBQStCLDZCQUFXO0lBRXhDLG1CQUFZLEtBQWlCO1FBQTdCLFlBQ0UsaUJBQU8sU0FPUjtRQU5DLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSztRQUNyQixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSztRQUNoQyxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTtRQUNsQyxLQUFJLENBQUMsWUFBWSxHQUFHLElBQUk7UUFDeEIsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJO1FBQ3hCLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSTs7SUFDMUIsQ0FBQztJQUdNLDRCQUFRLEdBQWYsVUFBZ0IsSUFBVztRQUFFLGNBQU87YUFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1lBQVAsNkJBQU87O1FBQ2xDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7U0FDOUI7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUs7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUNNLDZCQUFTLEdBQWhCLFVBQWlCLElBQVc7UUFDMUIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLEVBQUU7U0FDZjtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQztJQUNqRCxDQUFDO0lBZE0sa0JBQVEsR0FBRyx1QkFBVSxDQUFDLElBQUk7SUFlbkMsZ0JBQUM7Q0FBQSxDQTNCOEIsSUFBSSxDQUFDLE1BQU0sR0EyQnpDO0FBM0JZLDhCQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSHRCLDhGQUF1QztBQUV2Qyx1R0FBbUQ7QUFDbkQsZ0ZBQXFDO0FBQ3JDO0lBQW1CLHdCQUFVO0lBQzNCO1FBQUEsWUFDRSxpQkFBTyxTQUdSO1FBRkMsS0FBSSxDQUFDLElBQUksR0FBRyxnQkFBZ0I7UUFDNUIsS0FBSSxDQUFDLFFBQVEsR0FBRyxTQUFTOztJQUMzQixDQUFDO0lBQ0gsV0FBQztBQUFELENBQUMsQ0FOa0IsSUFBSSxDQUFDLEtBQUssR0FNNUI7QUFDRDtJQUFpQywrQkFBUztJQUN4QyxnQkFBZ0I7SUFDaEIscUJBQVksS0FBaUI7UUFBN0IsWUFDRSxrQkFBTSxLQUFLLENBQUMsU0FDYjtRQUdPLFdBQUssR0FBNEIsSUFBSSxHQUFHLEVBQUU7O0lBSGxELENBQUM7SUFLTSw4QkFBUSxHQUFmLFVBQWdCLElBQVM7UUFBRSxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLDZCQUFjOztRQUN2QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQztRQUNuRCxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFO2dCQUM5QixrQkFBUyxDQUFDLElBQUksQ0FBQztZQUNqQixDQUFDLENBQUM7U0FDSDtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUs7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTTtRQUV6QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7UUFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDbkIsaUJBQU0sUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxTQUFLLElBQUksRUFBRTtRQUUzQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUc7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHO1FBQ2xCLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSTtRQUN4QixJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRztRQUNqQixLQUFLLENBQUMsRUFBRSxDQUNOLElBQUksRUFDSixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxFQUM5QixHQUFHLEVBQ0gsSUFBSSxFQUNKLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDckIsSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQzVCLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FDSDtJQUNILENBQUM7SUFDTSwrQkFBUyxHQUFoQixVQUFpQixJQUFTO1FBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxRCxpQkFBTSxTQUFTLFlBQUMsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUF6Q00sb0JBQVEsR0FBRyx1QkFBVSxDQUFDLE1BQU07SUEwQ3JDLGtCQUFDO0NBQUEsQ0EvQ2dDLHFCQUFTLEdBK0N6QztBQS9DWSxrQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1h4Qiw4RkFBdUM7QUFJdkMsdUdBQW1EO0FBRW5ELElBQU0sR0FBRyxHQUFHLEdBQUc7QUFDZixJQUFNLElBQUksR0FBRyxHQUFHO0FBQ2hCO0lBQStCLDZCQUFTO0lBQ3RDLG1CQUFZLEtBQWlCO1FBQTdCLFlBQ0Usa0JBQU0sS0FBSyxDQUFDLFNBQ2I7UUFFTyxlQUFTLEdBQVksRUFBRTs7SUFGL0IsQ0FBQztJQUlNLDRCQUFRLEdBQWYsVUFBZ0IsSUFBUztRQUF6QixpQkFpQ0M7UUFqQzBCLGNBQU87YUFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1lBQVAsNkJBQU87O1FBQ2hDLElBQUksUUFBcUI7UUFDekIsSUFBTSxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQy9CLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDekIsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ3JEO2FBQU07WUFDTCxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVE7U0FDekI7UUFDRCxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUc7UUFDakQsTUFBTSxDQUFDLEVBQUUsQ0FDUCxRQUFRLEVBQ1IsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFDNUMsSUFBSSxFQUNKLElBQUksRUFDSixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQ3pCLElBQUksUUFBUSxLQUFLLEtBQUksQ0FBQyxRQUFRO2dCQUFFLFFBQVEsQ0FBQyxVQUFVLEVBQUU7UUFDdkQsQ0FBQyxDQUFDLENBQ0g7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDekIsaUJBQU0sUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxTQUFLLElBQUksRUFBRTtRQUMzQyxJQUFNLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDL0IsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSztRQUNuQixNQUFNLENBQUMsRUFBRSxDQUNQLElBQUksRUFDSixFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFDVixJQUFJLEVBQ0osSUFBSSxFQUNKLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDckIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDMUI7UUFDSCxDQUFDLENBQUMsQ0FDSDtJQUNILENBQUM7SUFFTSw2QkFBUyxHQUFoQixVQUFpQixJQUFTO1FBQTFCLGlCQTBCQztRQXpCQyxJQUFJLFFBQVE7UUFDWixJQUFNLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDcEIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDN0IsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ3BELFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQ2pDLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztTQUNsQzthQUFNO1lBQ0wsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRO1NBQ3pCO1FBRUQsUUFBUSxDQUFDLENBQUMsR0FBRyxRQUFRLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFbEQsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsUUFBUSxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxDQUFDO1FBQ3RFLElBQU0sTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtRQUMvQixJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUc7UUFDWixNQUFNLENBQUMsRUFBRSxDQUNQLElBQUksRUFDSixFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQ2pCLElBQUksRUFDSixJQUFJLEVBQ0osSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtZQUNyQixpQkFBTSxTQUFTLGFBQUMsSUFBSSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUNIO0lBQ0gsQ0FBQztJQWhFTSxrQkFBUSxHQUFHLHVCQUFVLENBQUMsSUFBSTtJQWlFbkMsZ0JBQUM7Q0FBQSxDQXJFOEIscUJBQVMsR0FxRXZDO0FBckVZLDhCQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUnRCLGdHQUFpRDtBQUVqRCxJQUFpQixHQUFHLENBZ0NuQjtBQWhDRCxXQUFpQixHQUFHO0lBQ2xCO1FBQThCLDRCQUFTO1FBRXJDO1lBQUEsWUFDRSxpQkFBTyxTQUNSO1lBeUJNLG1CQUFhLEdBQWtDLEVBQUU7O1FBekJ4RCxDQUFDO1FBRU0sdUJBQUksR0FBWDtZQUNFLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUNqQixDQUFDO1FBQ00sMkJBQVEsR0FBZixjQUFtQixDQUFDO1FBQ2IsMEJBQU8sR0FBZCxjQUFrQixDQUFDO1FBQ1osMkJBQVEsR0FBZixjQUFtQixDQUFDO1FBQ2IseUJBQU0sR0FBYjtZQUFBLGlCQUdDO1lBSGEsY0FBTztpQkFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO2dCQUFQLHlCQUFPOztZQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLGFBQUssQ0FBQyxTQUFTLENBQUMsY0FBTSxZQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxhQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBNUMsQ0FBNEMsQ0FBQztRQUN4RixDQUFDO1FBQ00sMEJBQU8sR0FBZDtZQUFlLGNBQU87aUJBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztnQkFBUCx5QkFBTzs7WUFDcEIsSUFBSSxDQUFDLFdBQVcsRUFBRTtRQUNwQixDQUFDO1FBQ00sNkJBQVUsR0FBakIsVUFBa0IsS0FBVztZQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxpQkFBTztnQkFDaEMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFDOUIsQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDMUIsQ0FBQztRQUNNLCtCQUFZLEdBQW5CLFVBQW9CLEtBQVcsSUFBRyxDQUFDO1FBR3JDLGVBQUM7SUFBRCxDQUFDLENBOUI2QixJQUFJLENBQUMsSUFBSSxHQThCdEM7SUE5QlksWUFBUSxXQThCcEI7QUFDSCxDQUFDLEVBaENnQixHQUFHLEdBQUgsV0FBRyxLQUFILFdBQUcsUUFnQ25COzs7Ozs7Ozs7Ozs7Ozs7QUNsQ0QscUhBQW9EO0FBRXBEO0lBQUE7SUFTQSxDQUFDO0lBUmUsWUFBSSxHQUFsQjtJQUVBLENBQUM7SUFFRCxzQkFBa0IscUJBQVU7YUFBNUI7WUFDRSxPQUFPLHVCQUFVLENBQUMsV0FBVyxFQUFFO1FBQ2pDLENBQUM7OztPQUFBO0lBRUgsY0FBQztBQUFELENBQUM7QUFUWSwwQkFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZwQixvR0FBcUM7QUFDckMsa0dBQWdEO0FBQ2hEO0lBQWdDLDhCQUFTO0lBQ3ZDO1FBQUEsWUFDRSxpQkFBTyxTQUVSO1FBREMsS0FBSSxDQUFDLFVBQVUsR0FBRyxFQUFFOztJQUN0QixDQUFDO0lBT00sNEJBQU8sR0FBZCxVQUFlLE1BQVcsRUFBRSxTQUFjLEVBQUUsUUFBa0I7UUFDNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO1lBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFO1FBQzFELElBQUksUUFBUSxHQUFhLElBQUksbUJBQVEsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQztRQUNsRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdEMsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDO0lBQ3BELENBQUM7SUFFTSxnQ0FBVyxHQUFsQixVQUFtQixTQUFjLEVBQUUsT0FBYyxFQUFFLFNBQWdCO1FBQ2pFLElBQUksSUFBSSxHQUFlLEVBQUU7UUFDekIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDN0Q7UUFDRCxPQUFPLElBQUk7SUFDYixDQUFDO0lBRU0sK0JBQVUsR0FBakIsVUFBa0IsR0FBZTtRQUMvQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwQjtJQUNILENBQUM7SUFFTSw0QkFBTyxHQUFkLFVBQWUsTUFBVztRQUFFLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQsNkJBQWM7O1FBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzVCLE9BQU8sSUFBSTtTQUNaO1FBRUQsSUFBSSxHQUFHLEdBQVUsRUFBRTtRQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FDN0IsVUFBQyxPQUFPO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxPQUFmLE9BQU8sRUFBWSxJQUFJLEVBQUU7UUFDcEMsQ0FBQyxDQUNGO1FBQ0QsT0FBTyxHQUFHO0lBQ1osQ0FBQztJQUVNLDJCQUFNLEdBQWIsVUFBYyxHQUFhO1FBQ3pCLElBQUksR0FBRyxJQUFJLElBQUk7WUFBRSxPQUFNO1FBQ3ZCLElBQUksR0FBRyxHQUFVLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUUzQyxJQUFJLENBQUMsR0FBRztZQUFFLE9BQU8sSUFBSTtRQUVyQixJQUFJLEdBQUcsR0FBVyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUNsQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQUUsT0FBTyxJQUFJO1FBRXhCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNsQixPQUFPLEdBQUc7SUFDWixDQUFDO0lBRU0sOEJBQVMsR0FBaEIsVUFBaUIsS0FBVTtRQUN6QixJQUFJLEdBQUcsR0FBVSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUN2QyxJQUFJLENBQUMsR0FBRztZQUFFLE9BQU07UUFDaEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUMzQixDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLENBaEUrQixxQkFBUyxHQWdFeEM7QUFoRVksZ0NBQVU7QUFpRXZCLElBQU0sVUFBVSxHQUFHLElBQUksVUFBVSxFQUFFO0FBQzFCLGdDQUFVOzs7Ozs7Ozs7Ozs7Ozs7QUNwRW5CO0lBS0Usa0JBQW1CLE1BQVcsRUFBRSxTQUFjLEVBQUUsUUFBa0I7UUFDaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQztJQUN6QyxDQUFDO0lBRU0sd0JBQUssR0FBWixVQUFhLE1BQVcsRUFBRSxTQUFjLEVBQUUsUUFBa0I7UUFDMUQsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUztRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVE7UUFDdkIsT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUVNLDBCQUFPLEdBQWQ7UUFBZSxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLHlCQUFjOztRQUMzQixJQUFJLEdBQVE7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sT0FBWixJQUFJLEVBQVksSUFBSSxDQUFDO1NBQzVCO2FBQU07WUFDTCxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7U0FDOUM7UUFDRCxPQUFPLEdBQUc7SUFDWixDQUFDO0lBQ0gsZUFBQztBQUFELENBQUM7QUF6QlksNEJBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXJCLDhFQUErQjtBQUMvQixJQUFZLFVBS1g7QUFMRCxXQUFZLFVBQVU7SUFDcEIsbUVBQW9CO0lBQ3BCLG1FQUFnQjtJQUNoQixpRUFBZTtJQUNmLDJEQUFZO0FBQ2QsQ0FBQyxFQUxXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBS3JCO0FBQ1ksbUJBQVcsR0FBRztJQUN6QixZQUFZLEVBQUUsY0FBYztJQUM1QixZQUFZLEVBQUUsY0FBYztJQUM1QixTQUFTLEVBQUUsV0FBVztJQUN0QixjQUFjLEVBQUUsZ0JBQWdCO0lBQ2hDLGNBQWMsRUFBRSxnQkFBZ0I7SUFDaEMsT0FBTyxFQUFFLFNBQVM7SUFDbEIsVUFBVSxFQUFFLFlBQVk7SUFDeEIsaUJBQWlCLEVBQUUsbUJBQW1CO0lBQ3RDLGVBQWUsRUFBRSxpQkFBaUI7Q0FDbkM7QUFDWSxtQkFBVyxHQUFHLGVBQUs7SUFDOUIsT0FBTztRQUNMLElBQUksRUFBRSxVQUFVLENBQUMsZ0JBQWdCO1FBQ2pDLFFBQVEsZUFBTyxhQUFLLENBQUMsUUFBUSxJQUFFLEtBQUssVUFBRTtLQUN2QztBQUNILENBQUM7QUFDWSxtQkFBVyxHQUFHLGVBQUs7SUFDOUIsT0FBTztRQUNMLElBQUksRUFBRSxVQUFVLENBQUMsZ0JBQWdCO1FBQ2pDLFFBQVEsZUFBTyxhQUFLLENBQUMsUUFBUSxJQUFFLEtBQUssVUFBRTtLQUN2QztBQUNILENBQUM7QUFDWSxzQkFBYyxHQUFHLGNBQUk7SUFDaEMsT0FBTztRQUNMLElBQUksRUFBRSxVQUFVLENBQUMsZUFBZTtRQUNoQyxJQUFJLEVBQUUsRUFBRSxJQUFJLFFBQUU7S0FDZjtBQUNILENBQUM7QUFDWSxtQkFBVyxHQUFHLGVBQUs7SUFDOUIsT0FBTztRQUNMLElBQUksRUFBRSxVQUFVLENBQUMsWUFBWTtRQUM3QixLQUFLO0tBQ047QUFDSCxDQUFDO0FBRVkscUJBQWEsR0FBRyxVQUFDLElBQUksRUFBRSxPQUFRLElBQUssUUFBQztJQUNoRCxJQUFJO0lBQ0osT0FBTztDQUNSLENBQUMsRUFIK0MsQ0FHL0M7QUFDVyxlQUFPLEdBQUcsaUJBQU8sSUFBSSxRQUFDO0lBQ2pDLElBQUksRUFBRSxtQkFBVyxDQUFDLE9BQU87SUFDekIsT0FBTztDQUNSLENBQUMsRUFIZ0MsQ0FHaEM7QUFDVyxrQkFBVSxHQUFHLGlCQUFPLElBQUksUUFBQztJQUNwQyxJQUFJLEVBQUUsbUJBQVcsQ0FBQyxVQUFVO0lBQzVCLE9BQU87Q0FDUixDQUFDLEVBSG1DLENBR25DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RERixvRkFBbUQ7QUFDbkQsbUZBQWtEO0FBQ2xELElBQU0sY0FBYyxHQUFHLFVBQUMsS0FBMEMsRUFBRSxNQUFNO0lBQWxELGtDQUFVLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTtJQUNoRSxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxvQkFBVSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pDLEtBQUssb0JBQVUsQ0FBQyxnQkFBZ0I7WUFDOUIsb0JBQVksTUFBTSxDQUFDLFFBQVEsRUFBRTtRQUMvQjtZQUNFLE9BQU8sS0FBSztLQUNmO0FBQ0gsQ0FBQztBQUNELElBQU0sY0FBYyxHQUFHLFVBQUMsS0FBdUIsRUFBRSxNQUFNO0lBQS9CLGtDQUFVLElBQUksRUFBRSxLQUFLLEVBQUU7SUFDN0MsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssb0JBQVUsQ0FBQyxlQUFlO1lBQzdCLG9CQUFZLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDM0I7WUFDRSxPQUFPLEtBQUs7S0FDZjtBQUNILENBQUM7QUFDRCxJQUFNLFdBQVcsR0FBRyxVQUFDLEtBQVUsRUFBRSxNQUFNO0lBQWxCLGtDQUFVO0lBQzdCLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLG9CQUFVLENBQUMsWUFBWTtZQUMxQixPQUFPLE1BQU0sQ0FBQyxLQUFLO1FBQ3JCO1lBQ0UsT0FBTyxLQUFLO0tBQ2Y7QUFDSCxDQUFDO0FBQ0QsSUFBTSxLQUFLLEdBQUcsVUFBQyxLQUFhLEVBQUUsTUFBTTtJQUFyQixxQ0FBYTtJQUMxQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxxQkFBVyxDQUFDLFlBQVk7WUFDM0IsT0FBTyxJQUFJO1FBQ2IsS0FBSyxxQkFBVyxDQUFDLFNBQVM7WUFDeEIsT0FBTyxLQUFLO1FBQ2Q7WUFDRSxPQUFPLEtBQUs7S0FDZjtBQUNILENBQUM7QUFDRCxJQUFNLGVBQWUsR0FBRyxVQUFDLEtBQUssRUFBRSxNQUFNO0lBQ3BDLE9BQU8sS0FBSztBQUNkLENBQUM7QUFDWSxZQUFJLEdBQUcsVUFBQyxLQUFpQixFQUFFLE1BQWlCO0lBQXBDLGtDQUFpQjtJQUNwQyxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxxQkFBVyxDQUFDLE9BQU87WUFDdEIsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFLLE1BQU0sQ0FBQyxPQUFPLFNBQUUsQ0FBQyxDQUFLLEtBQUssUUFBSyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ3hGLEtBQUsscUJBQVcsQ0FBQyxVQUFVO1lBQ3pCLE9BQVcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxjQUFJLElBQUksV0FBSSxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQUMsT0FBTyxFQUExQixDQUEwQixDQUFDLFNBQUM7UUFDOUQ7WUFDRSxPQUFPLEtBQUs7S0FDZjtBQUNILENBQUM7QUFDRCxJQUFNLFFBQVEsR0FBRyx1QkFBZSxDQUFDLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsSUFBSSxnQkFBRSxLQUFLLFNBQUUsQ0FBQztBQUNySCxrQkFBZSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25EdkIsaUJBeURBOztBQXpEQSxvSUFBcUU7QUFDckUsaUdBQTZDO0FBQzdDLG9GQUF5RjtBQUN6Riw4RUFBK0I7QUFDL0IsSUFBTSxVQUFVLEdBQUc7SUFBWSx1Q0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1NBQUE7QUFFeEQsSUFBTSxXQUFXLEdBQUcsVUFBTSxPQUFPOztRQUMvQix1Q0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUN6QixPQUFPLEVBQUUsT0FBTzthQUNqQixDQUFDOztLQUFBO0FBRUosSUFBTSxjQUFjLEdBQUcsVUFBTSxPQUFPOztRQUNsQyx1Q0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUM1QixFQUFFLEVBQUUsT0FBTzthQUNaLENBQUM7O0tBQUE7QUFDSixJQUFNLFNBQVMsR0FBRyxVQUFNLE9BQU87SUFBSSx1Q0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQztTQUFBO0FBQ3hFLElBQU0sWUFBWSxHQUFHLFVBQU0sT0FBTztJQUFJLHVDQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDO1NBQUE7QUFDOUUsU0FBVSxRQUFROzs7O29CQUNELHFCQUFNLGNBQUksQ0FBQyxVQUFVLENBQUM7O2dCQUEvQixNQUFNLEdBQUcsU0FBc0I7Z0JBQ3JDLHFCQUFNLGFBQUcsQ0FBQyxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBSSxJQUFJLFFBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQXhDLENBQXdDLENBQUMsQ0FBQyxDQUFDOztnQkFBaEYsU0FBZ0Y7Ozs7Q0FDakY7QUFDRCxTQUFVLFFBQVEsQ0FBQyxNQUFNOzs7O29CQUNDLHFCQUFNLGNBQUksQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQzs7Z0JBQXpELEtBQWtCLFNBQXVDLEVBQXZELEVBQUUsVUFBRSxPQUFPO2dCQUNuQixxQkFBTSxhQUFHLENBQUMsaUJBQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxNQUFFLE9BQU8sV0FBRSxDQUFDLENBQUMsQ0FBQzs7Z0JBQXJDLFNBQXFDOzs7O0NBQ3RDO0FBQ0QsU0FBVSxXQUFXLENBQUMsTUFBTTs7OztvQkFDWCxxQkFBTSxjQUFJLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUM7O2dCQUFqRCxFQUFFLEdBQUssVUFBMEMsSUFBL0M7Z0JBQ1YscUJBQU0sYUFBRyxDQUFDLG9CQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7O2dCQUF6QixTQUF5Qjs7OztDQUMxQjtBQUNELFNBQVUsS0FBSyxDQUFDLE1BQU07Ozs7b0JBQ0wscUJBQU0sY0FBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDOztnQkFBOUMsTUFBTSxHQUFHLFNBQXFDO2dCQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztnQkFDbkIsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRTtvQkFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUM7b0JBQzVCLGFBQUssQ0FBQyxRQUFRLENBQUMsd0JBQWMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN0RCxhQUFLLENBQUMsUUFBUSxDQUFDLHFCQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDaEQsYUFBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxxQkFBVyxDQUFDLFlBQVksRUFBRSxDQUFDO2lCQUNuRDtxQkFBTTtvQkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQztpQkFDMUI7Ozs7Q0FDRjtBQUVELFNBQVUsUUFBUSxDQUFDLE1BQU07Ozs7b0JBQ1IscUJBQU0sY0FBSSxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDOztnQkFBakQsTUFBTSxHQUFHLFNBQXdDO2dCQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQzs7OztDQUNwQjtBQUNELFNBQVUsZ0JBQWdCOzs7b0JBQ3hCLHFCQUFNLG9CQUFVLENBQUMscUJBQVcsQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDOztnQkFBdEQsU0FBc0Q7Z0JBQ3RELHFCQUFNLG9CQUFVLENBQUMscUJBQVcsQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDOztnQkFBdEQsU0FBc0Q7Z0JBQ3RELHFCQUFNLG9CQUFVLENBQUMscUJBQVcsQ0FBQyxpQkFBaUIsRUFBRSxXQUFXLENBQUM7O2dCQUE1RCxTQUE0RDtnQkFDNUQscUJBQU0sb0JBQVUsQ0FBQyxxQkFBVyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUM7O2dCQUFqRCxTQUFpRDtnQkFDakQscUJBQU0sb0JBQVUsQ0FBQyxxQkFBVyxDQUFDLGVBQWUsRUFBRSxRQUFRLENBQUM7O2dCQUF2RCxTQUF1RDs7OztDQUN4RDtBQUVELFNBQXlCLFFBQVE7OztvQkFDL0IsK0JBQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDOztnQkFBM0IsU0FBMkI7Ozs7Q0FDNUI7QUFGRCwyQkFFQzs7Ozs7Ozs7Ozs7Ozs7O0FDeERZLGFBQUssR0FBRztJQUNuQixLQUFLLEVBQUUsT0FBTztJQUNkLElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxPQUFPO0tBQ2Q7SUFDRCxRQUFRLEVBQUU7UUFDUixLQUFLLEVBQUUsV0FBVztRQUNsQixLQUFLLEVBQUUsT0FBTztRQUNkLFNBQVMsRUFBRTtZQUNULEtBQUssRUFBRSxLQUFLO1lBQ1osU0FBUyxFQUFFO2dCQUNULEtBQUssRUFBRSxLQUFLO2dCQUNaLFNBQVMsRUFBRSxLQUFLO2FBQ2pCO1NBQ0Y7S0FDRjtJQUNELElBQUksRUFBRSxFQUFFO0lBQ1IsS0FBSyxFQUFFLEtBQUs7Q0FDYjs7Ozs7Ozs7Ozs7Ozs7O0FDbEJELG1GQUFvRDtBQUNwRCxvRkFBZ0M7QUFDaEMsOEVBQStCO0FBQy9CLDRIQUE2QztBQUM3Qyw4RUFBOEI7QUFDOUIsSUFBTSxjQUFjLEdBQUcsb0JBQW9CLEVBQUU7QUFDN0MsSUFBTSxRQUFRLEdBQUcsdUJBQWUsQ0FBQyxjQUFjLENBQUM7QUFDaEQsSUFBTSxLQUFLLEdBQUcsbUJBQVcsQ0FBQyxpQkFBUSxFQUFFLGFBQVksRUFBRSxRQUFRLENBQUM7QUFHbEQsc0JBQUs7QUFGZCxjQUFjLENBQUMsR0FBRyxDQUFDLGVBQVEsQ0FBQztBQUM1QixJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUTtBQUNmLDRCQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVnhCLCtGQUE2QztBQUM3Qyw2RkFBa0M7QUFDbEMsK0dBQTREO0FBQzVELHVIQUFnRTtBQUNoRSxrR0FBbUU7QUFDbkUsMEZBQWtDO0FBQ2xDLDZFQUE2QjtBQUM3QiwyRkFBc0Q7QUFDdEQsaUdBQXdGO0FBQ3hGLGlHQUFvRDtBQUNwRCx1R0FBbUQ7QUFFbkQ7SUFBbUMseUJBQWU7SUFFaEQ7UUFBQSxZQUNFLGlCQUFPLFNBZVI7UUFkQyxLQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFJLEVBQUU7WUFDbEMsaUJBQVEsQ0FBQyxlQUFLLENBQUM7UUFDakIsQ0FBQyxDQUFDO1FBQ0YsS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSSxFQUFFO1lBQ3RDLGlCQUFRLENBQUMsa0JBQVEsQ0FBQztRQUNwQixDQUFDLENBQUM7UUFFRixLQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUM7UUFDckUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSSxFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUM7UUFDNUQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSSxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUM7UUFDcEQsS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSSxFQUFFO1lBQ3RDLGFBQUssQ0FBQyxRQUFRLENBQUMscUJBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxhQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUMsQ0FBQyxDQUFDOztJQUNKLENBQUM7SUFDTywwQkFBVSxHQUFsQixVQUFtQixJQUFjLEVBQUUsS0FBSztRQUN0QyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBZTtRQUN4RCxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVTtRQUNsQyxLQUFLLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxPQUFPO0lBQ2pDLENBQUM7SUFDTyw2QkFBYSxHQUFyQixVQUFzQixDQUFDO1FBQ3JCLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssV0FBVyxFQUFFO1lBQ2hDLElBQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBa0I7WUFDdkMsa0ZBQWtGO1lBQ2xGLGlCQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztTQUM5RDtJQUNILENBQUM7SUFDTyx1QkFBTyxHQUFmO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxFQUFFLEVBQUU7WUFDN0IsZ0ZBQWdGO1lBQ2hGLGlCQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNoRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxFQUFFO1NBQ3hCO0lBQ0gsQ0FBQztJQUNNLG9CQUFJLEdBQVg7UUFDRSwrQkFBK0I7UUFDL0IsY0FBYztRQUNkLGNBQWM7UUFDZCxtQ0FBbUM7UUFDbkMsMkJBQTJCO1FBQzNCLE9BQU87UUFDUCxVQUFVO1FBQ1YsSUFBSTtJQUNOLENBQUM7SUFFTSw0QkFBWSxHQUFuQixVQUFvQixLQUFLO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ1YscUJBQUksRUFBRSxtQkFBSyxFQUFFLHlCQUFRLEVBQUUsaUJBQUksQ0FBVTtRQUM3QyxzQ0FBc0M7UUFDdEMsaUNBQWlDO1FBQ2pDLDBCQUEwQjtRQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJO0lBQzVCLENBQUM7SUFDTSxzQkFBTSxHQUFiLFVBQWMsSUFBSTtRQUNoQixpQkFBTSxNQUFNLFdBQUU7UUFDZCxJQUFJLElBQUksR0FBRyxzREFBc0Q7UUFDakUsSUFBSSxJQUFJLG9FQUFvRTtRQUM1RSxJQUFJLElBQUksa0RBQWtEO1FBQzFELElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUc7UUFDekIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFFBQVE7UUFFOUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsSUFBSTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFFcEIsNERBQTREO1FBRTVELGlCQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFDL0IsaUJBQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMxRCxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3BELGlCQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLGdCQUFNO1lBQ3pDLGdCQUFRLENBQUMsaUJBQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQUksSUFBSSxRQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUF4QyxDQUF3QyxDQUFDLENBQUMsQ0FBQztRQUNqRixDQUFDLENBQUM7SUFDSixDQUFDO0lBQ00sdUJBQU8sR0FBZDtRQUNFLGlCQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7UUFDcEMsaUJBQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztRQUNqQyxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO0lBQ25DLENBQUM7SUFDRCw0QkFBWSxHQUFaLFVBQWEsRUFBTTtZQUFKLFVBQUU7UUFDZixnQkFBUSxDQUFDLG9CQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELHlCQUFTLEdBQVQsVUFBVSxFQUFlO1lBQWIsVUFBRSxFQUFFLG9CQUFPO1FBQ3JCLGdCQUFRLENBQUMsaUJBQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxNQUFFLE9BQU8sV0FBRSxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBdkZNLGFBQU8sR0FBRyxxQkFBUyxDQUFDLEtBQUs7SUFEYixLQUFLO1FBRHpCLG9CQUFXLENBQUMscUJBQVMsQ0FBQztPQUNGLEtBQUssQ0F5RnpCO0lBQUQsWUFBQztDQUFBLENBekZrQyxjQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sR0F5RmpEO2tCQXpGb0IsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1YxQixxSEFBNEQ7QUFDNUQsa0hBQXdEO0FBRXhEO0lBQWtDLHdCQUFXO0lBcUIzQztRQUFBLFlBQ0UsaUJBQU8sU0FDUjtRQXRCRCxvRUFBb0U7UUFDcEUsaUNBQWlDO1FBQ2pDLHVFQUF1RTtRQUN2RSxpQ0FBaUM7UUFDakMsZ0ZBQWdGO1FBQ2hGLHlDQUF5QztRQUN6QyxzRUFBc0U7UUFDdEUsbUNBQW1DO1FBQ25DLDJEQUEyRDtRQUUzRCwwREFBMEQ7UUFDbkQsYUFBTyxHQUFXLEVBQUU7UUFDM0IsMERBQTBEO1FBQ25ELGFBQU8sR0FBVyxFQUFFO1FBS3BCLGVBQVMsR0FBdUQsRUFBRTs7SUFJekUsQ0FBQztJQUNELHNCQUFPLEdBQVA7UUFBQSxpQkErQkM7UUE5QkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFO1lBQ3BDLHFCQUFXLENBQUMsWUFBWSxDQUN0QixLQUFJLENBQUMsS0FBSyxFQUNULEtBQUksQ0FBQyxLQUFxQixDQUFDLENBQUMsRUFDN0I7Z0JBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDaEIsQ0FBQyxFQUNELEtBQUksQ0FDTDtRQUNILENBQUMsQ0FBQztRQUVGLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBRztnQkFDN0IsdUJBQXlDLEVBQXhDLGFBQUssRUFBRSxlQUFPLEVBQUUsY0FBd0I7Z0JBQy9DLE9BQU8sRUFBRSxLQUFLLFNBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUU7WUFDdkYsQ0FBQyxDQUFDO1lBRUYsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUs7WUFDdEIsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osSUFBSSxLQUFLLFlBQVksY0FBRyxDQUFDLFFBQVEsRUFBRTtvQkFDakMsTUFBSztpQkFDTjtnQkFDRCxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO2FBQzFCO1lBQ0QsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsSUFBTSxJQUFJLEdBQUcsS0FBcUI7Z0JBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUM5QjtTQUNGO0lBQ0gsQ0FBQztJQUVELHVCQUFRLEdBQVIsY0FBa0IsQ0FBQztJQUVuQix3QkFBUyxHQUFULGNBQW1CLENBQUM7SUFFcEIsNEJBQWEsR0FBYixVQUFjLEtBQVU7UUFBeEIsaUJBS0M7UUFKQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxXQUFDO1lBQ3RCLElBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSSxFQUFFLENBQUMsSUFBSyxRQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBNUIsQ0FBNEIsRUFBRSxLQUFLLENBQUM7WUFDOUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQzdELENBQUMsQ0FBQztJQUNKLENBQUM7SUFDSCxXQUFDO0FBQUQsQ0FBQyxDQW5FaUMsSUFBSSxDQUFDLE1BQU0sR0FtRTVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFRCwrRkFBNkM7QUFDN0MsK0dBQTREO0FBQzVELDZIQUFvRTtBQUNwRSxrR0FBb0U7QUFDcEUsMkZBQTRDO0FBQzVDLGlHQUFvRDtBQUVwRDtJQUFtQyx5QkFBZTtJQUVoRDtlQUNFLGlCQUFPO0lBQ1QsQ0FBQztJQUNNLG9CQUFJLEdBQVg7UUFBQSxpQkFRQztRQVBDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRTtZQUN4QyxrQkFBUyxDQUFDLEtBQUksQ0FBQztRQUNqQixDQUFDLENBQUM7UUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUU7WUFDckMsa0RBQWtEO1lBQ2xELGFBQUssQ0FBQyxRQUFRLENBQUMscUJBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUM7SUFDSixDQUFDO0lBQ00sMEJBQVUsR0FBakI7UUFDUSxpQ0FBNEMsRUFBMUMsY0FBSSxFQUFFLGdCQUFLLEVBQUUsc0JBQTZCO1FBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJO1FBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUs7SUFDekIsQ0FBQztJQWpCTSxhQUFPLEdBQUcscUJBQVMsQ0FBQyxLQUFLO0lBRGIsS0FBSztRQUR6QixvQkFBVyxDQUFDLHlCQUFXLENBQUM7T0FDSixLQUFLLENBbUJ6QjtJQUFELFlBQUM7Q0FBQSxDQW5Ca0MsY0FBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBbUJqRDtrQkFuQm9CLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1AxQiw0RkFBMEM7QUFFMUMsNEdBQXlEO0FBQ3pELG9IQUE2RDtBQUU3RCx5RkFBaUM7QUFDakMsc0ZBQStCO0FBQy9CLCtGQUEyRTtBQUMzRSxrR0FBaUQ7QUFDakQsb0dBQWdEO0FBQ2hELHdGQUF5QztBQUN6Qyw4RkFBaUU7QUFFakU7SUFBc0MsNEJBQWtCO0lBR3REO1FBQUEsWUFDRSxpQkFBTyxTQXVCUjtRQXpCTSxXQUFLLEdBQUcsS0FBSztRQUdsQixLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxLQUFJLEVBQUU7WUFDeEIsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUM7UUFDbkUsQ0FBQyxDQUFDO1FBQ0YsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsS0FBSSxFQUFFO1lBQ3hCLElBQUksS0FBSSxDQUFDLEtBQUssRUFBRTtnQkFDZCxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDO2FBQ3ZCO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUM7YUFDdkI7WUFDRCxLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSSxDQUFDLEtBQUs7UUFDMUIsQ0FBQyxDQUFDO1FBRUYsS0FBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSSxFQUFFLGNBQU8sQ0FBQyxDQUFDO1FBQ25ELEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUksRUFBRTtZQUN0QyxpQkFBUSxDQUFDLGtCQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUM7UUFDRixLQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFJLEVBQUU7WUFDekMsaUJBQVEsQ0FBQyxpQkFBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQztRQUNGLEtBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUksRUFBRTtZQUN2QyxrQkFBUyxDQUFDLEtBQUksQ0FBQztRQUNqQixDQUFDLENBQUM7O0lBQ0osQ0FBQztJQUdhLHdCQUFLLEdBQW5CO1FBQW9CLGNBQU87YUFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1lBQVAseUJBQU87Ozs7Ozs7d0JBQ3pCLGFBQUssQ0FBQyxRQUFRLENBQUMscUJBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQzt3QkFDMUMsYUFBSyxDQUFDLFFBQVEsQ0FBQyx3QkFBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO3dCQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQzt3QkFDakIsa0JBQU8sRUFBQyxHQUFHO3dCQUFDLHFCQUFNLGlCQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDOzt3QkFBekUsY0FBWSxTQUE2RCxFQUFDOzs7OztLQUMzRTtJQUNNLHlCQUFNLEdBQWI7UUFDRSxpQkFBTSxNQUFNLFdBQUU7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBQ00sNkJBQVUsR0FBakI7UUFDUSxpQ0FBNEMsRUFBMUMsY0FBSSxFQUFFLGdCQUFLLEVBQUUsc0JBQTZCO1FBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJO1FBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUs7SUFDekIsQ0FBQztJQTNDTSxnQkFBTyxHQUFHLHFCQUFTLENBQUMsUUFBUTtJQTZCbkM7UUFGQyxlQUFLLENBQUMsV0FBVyxDQUFDO1FBQ2xCLGVBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3lDQU0vQjtJQW5Da0IsUUFBUTtRQUQ1QixvQkFBVyxDQUFDLHFCQUFTLENBQUM7T0FDRixRQUFRLENBNkM1QjtJQUFELGVBQUM7Q0FBQSxDQTdDcUMsY0FBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBNkN2RDtrQkE3Q29CLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiN0IsNEZBQTBDO0FBRTFDLDRHQUF5RDtBQUN6RCxvSEFBNkQ7QUFDN0QsK0ZBQWlFO0FBQ2pFLHdGQUF5QztBQUV6QztJQUFxQywyQkFBaUI7SUFHcEQ7UUFBQSxZQUNFLGlCQUFPLFNBZVI7UUFqQk0sV0FBSyxHQUFHLEtBQUs7UUFHbEIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsS0FBSSxFQUFFO1lBQ3hCLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDO1FBQ25FLENBQUMsQ0FBQztRQUNGLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEtBQUksRUFBRTtZQUN4QixJQUFJLEtBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2QsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQzthQUN2QjtpQkFBTTtnQkFDTCxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDO2FBQ3ZCO1lBQ0QsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUksQ0FBQyxLQUFLO1FBQzFCLENBQUMsQ0FBQztRQUNGLEtBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUksRUFBRTtZQUN4QyxrQkFBUyxDQUFDLEtBQUksQ0FBQztRQUNqQixDQUFDLENBQUM7O0lBQ0osQ0FBQztJQUNNLHdCQUFNLEdBQWI7UUFBYyxjQUFPO2FBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztZQUFQLHlCQUFPOztRQUNuQixpQkFBTSxNQUFNLFdBQUU7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQUNNLDRCQUFVLEdBQWpCO1FBQ1EsaUNBQTRDLEVBQTFDLGNBQUksRUFBRSxnQkFBSyxFQUFFLHNCQUE2QjtRQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSTtRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLO0lBQ3pCLENBQUM7SUEzQk0sZUFBTyxHQUFHLHFCQUFTLENBQUMsT0FBTztJQURmLE9BQU87UUFEM0Isb0JBQVcsQ0FBQyxxQkFBUyxDQUFDO09BQ0YsT0FBTyxDQTZCM0I7SUFBRCxjQUFDO0NBQUEsQ0E3Qm9DLGNBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQTZCckQ7a0JBN0JvQixPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUDVCLDRGQUEwQztBQUMxQywrRkFBZ0U7QUFDaEUsb0hBQTZEO0FBQzdELHdGQUF5QztBQUN6Qyw4RkFBZ0U7QUFDaEUsNEdBQXlEO0FBRXpEO0lBQStCLDZCQUFlO0lBRTVDO1FBQUEsWUFDRSxpQkFBTyxTQUVSO1FBREMsS0FBSSxDQUFDLFNBQVMsRUFBRTs7SUFDbEIsQ0FBQztJQUNELDZCQUFTLEdBQVQ7UUFBQSxpQkFtQkM7UUFsQkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFO1lBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztZQUNwQyxhQUFLLENBQUMsUUFBUSxDQUNaLHVCQUFhLENBQUMscUJBQVcsQ0FBQyxZQUFZLEVBQUU7Z0JBQ3RDLFFBQVEsRUFBRSxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUk7Z0JBQ2pDLFFBQVEsRUFBRSxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUk7YUFDbEMsQ0FBQyxDQUNIO1FBQ0gsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFO1lBQzFDLGFBQUssQ0FBQyxRQUFRLENBQ1osdUJBQWEsQ0FBQyxxQkFBVyxDQUFDLGVBQWUsRUFBRTtnQkFDekMsUUFBUSxFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSTtnQkFDakMsUUFBUSxFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSTthQUNsQyxDQUFDLENBQ0g7UUFDSCxDQUFDLENBQUM7SUFDSixDQUFDO0lBeEJNLGlCQUFPLEdBQUcscUJBQVMsQ0FBQyxLQUFLO0lBRHJCLFNBQVM7UUFEckIsb0JBQVcsQ0FBQyxxQkFBUyxDQUFDO09BQ1YsU0FBUyxDQTBCckI7SUFBRCxnQkFBQztDQUFBLENBMUI4QixjQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sR0EwQjdDO0FBMUJZLDhCQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHRCLDRGQUEwQztBQUUxQyw0R0FBeUQ7QUFDekQsb0hBQTZEO0FBQzdELDRGQUFtQztBQUNuQywrRkFBMkU7QUFDM0Usd0ZBQXlDO0FBRXpDO0lBQXNDLDRCQUFrQjtJQUd0RDtRQUFBLFlBQ0UsaUJBQU8sU0FtQlI7UUFyQk0sV0FBSyxHQUFHLEtBQUs7UUFJbEIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsS0FBSSxFQUFFO1lBQ3hCLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDO1FBQ25FLENBQUMsQ0FBQztRQUNGLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEtBQUksRUFBRTtZQUN4QixJQUFJLEtBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2QsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQzthQUN2QjtpQkFBTTtnQkFDTCxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDO2FBQ3ZCO1lBQ0QsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUksQ0FBQyxLQUFLO1FBQzFCLENBQUMsQ0FBQztRQUNGLEtBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUksRUFBRTtZQUN2QyxrQkFBUyxDQUFDLEtBQUksQ0FBQztRQUNqQixDQUFDLENBQUM7UUFDRixLQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFJLEVBQUU7WUFDdEMsaUJBQVEsQ0FBQyxtQkFBUyxDQUFDO1FBQ3JCLENBQUMsQ0FBQzs7SUFDSixDQUFDO0lBQ00seUJBQU0sR0FBYjtRQUNFLGlCQUFNLE1BQU0sV0FBRTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFDTSw2QkFBVSxHQUFqQjtRQUNRLGlDQUE0QyxFQUExQyxjQUFJLEVBQUUsZ0JBQUssRUFBRSxzQkFBNkI7UUFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUk7UUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSztJQUN6QixDQUFDO0lBL0JNLGdCQUFPLEdBQUcscUJBQVMsQ0FBQyxRQUFRO0lBRGhCLFFBQVE7UUFENUIsb0JBQVcsQ0FBQyxxQkFBUyxDQUFDO09BQ0YsUUFBUSxDQWlDNUI7SUFBRCxlQUFDO0NBQUEsQ0FqQ3FDLGNBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQWlDdkQ7a0JBakNvQixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUjdCLDRGQUEwQztBQUUxQyw0R0FBeUQ7QUFDekQsb0hBQTZEO0FBQzdELCtGQUFpRTtBQUNqRSx3RkFBeUM7QUFFekM7SUFBdUMsNkJBQW1CO0lBR3hEO1FBQUEsWUFDRSxpQkFBTyxTQWdCUjtRQWxCTSxXQUFLLEdBQUcsS0FBSztRQUlsQixLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxLQUFJLEVBQUU7WUFDeEIsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUM7UUFDbkUsQ0FBQyxDQUFDO1FBQ0YsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsS0FBSSxFQUFFO1lBQ3hCLElBQUksS0FBSSxDQUFDLEtBQUssRUFBRTtnQkFDZCxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDO2FBQ3ZCO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUM7YUFDdkI7WUFDRCxLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSSxDQUFDLEtBQUs7UUFDMUIsQ0FBQyxDQUFDO1FBQ0YsS0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSSxFQUFFO1lBQ3ZDLGtCQUFTLENBQUMsS0FBSSxDQUFDO1FBQ2pCLENBQUMsQ0FBQzs7SUFDSixDQUFDO0lBQ00sMEJBQU0sR0FBYjtRQUNFLGlCQUFNLE1BQU0sV0FBRTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFDTSw4QkFBVSxHQUFqQjtRQUNRLGlDQUE0QyxFQUExQyxjQUFJLEVBQUUsZ0JBQUssRUFBRSxzQkFBNkI7UUFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUk7UUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSztJQUN6QixDQUFDO0lBNUJNLGlCQUFPLEdBQUcscUJBQVMsQ0FBQyxTQUFTO0lBRGpCLFNBQVM7UUFEN0Isb0JBQVcsQ0FBQyxxQkFBUyxDQUFDO09BQ0YsU0FBUyxDQThCN0I7SUFBRCxnQkFBQztDQUFBLENBOUJzQyxjQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsR0E4QnpEO2tCQTlCb0IsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQOUIsSUFBSyxVQUdKO0FBSEQsV0FBSyxVQUFVO0lBQ2IseUJBQVc7SUFDWCwyQkFBYTtBQUNmLENBQUMsRUFISSxVQUFVLEtBQVYsVUFBVSxRQUdkO0FBQ0Q7SUFJRSxlQUFZLEVBQU87WUFBTCxZQUFHO1FBSFQsWUFBTyxHQUFHLEVBQUU7UUFDWixnQkFBVyxHQUFHLGdDQUFnQztRQUdwRCxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUc7SUFDcEIsQ0FBQztJQUNhLFVBQUksR0FBbEIsVUFBbUIsR0FBRyxFQUFFLEVBQU87WUFBTCxZQUFHO1FBQzNCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsR0FBRyxPQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztTQUM5QjtRQUNELE9BQU8sS0FBSztJQUNkLENBQUM7SUFDYSxvQkFBSSxHQUFsQixVQUFtQixHQUFXLEVBQUUsRUFBZ0I7WUFBZCxjQUFJLEVBQUUsa0JBQU07Ozs7Ozt3QkFDeEMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRzt3QkFDdEIsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDOzRCQUMxQixjQUFjLEVBQUUsSUFBSSxDQUFDLFdBQVc7eUJBQ2pDLENBQUM7d0JBRU0sV0FBTTs7aUNBQ1AsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFmLHdCQUFjO2lDQVVkLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBaEIsd0JBQWU7Ozs7d0JBVGxCLElBQUksSUFBSSxFQUFFOzRCQUNSLEdBQUc7Z0NBQ0QsR0FBRztvQ0FDSCxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzt5Q0FDakIsR0FBRyxDQUFDLGNBQUksSUFBSSxXQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFkLENBQWMsQ0FBQzt5Q0FDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQzt5QkFDZjt3QkFDSyxxQkFBTSxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxXQUFFLE1BQU0sVUFBRSxDQUFDOzt3QkFBM0MsR0FBRyxHQUFHLFNBQXFDO3dCQUMzQyx3QkFBSzs0QkFHQyxxQkFBTSxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxRQUFFLE9BQU8sV0FBRSxNQUFNLFVBQUUsQ0FBQzs7d0JBQWpELEdBQUcsR0FBRyxTQUEyQzt3QkFDakQsd0JBQUs7NEJBRVQsc0JBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7Ozs7S0FDM0I7SUFDWSxtQkFBRyxHQUFoQixVQUFpQixHQUFXLEVBQUUsTUFBdUI7UUFBdkIsMkNBQXVCOzs7Z0JBQ25ELHNCQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDOzs7S0FDaEU7SUFDWSxvQkFBSSxHQUFqQixVQUFrQixHQUFXLEVBQUUsSUFBcUI7UUFBckIsdUNBQXFCOzs7Z0JBQ2xELHNCQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7OztLQUNsRztJQUNhLHlCQUFTLEdBQXZCLFVBQXdCLEdBQWE7Ozs7Z0JBQzdCLFdBQVcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUM7Z0JBQ25ELElBQUksV0FBVyxFQUFFO29CQUNmLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTt3QkFDcEMsc0JBQU8sR0FBRyxDQUFDLElBQUksRUFBRTtxQkFDbEI7aUJBQ0Y7Z0JBQ0Qsc0JBQU8sR0FBRyxDQUFDLElBQUksRUFBRTs7O0tBQ2xCO0lBbERNLGNBQVEsR0FBRyxJQUFJLEdBQUcsRUFBRTtJQW1EN0IsWUFBQztDQUFBO0FBdERZLHNCQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSmxCLG9HQUFrRDtBQUNsRCxxR0FBc0M7QUFDdEMsMEZBQTJDO0FBQzNDOzs7RUFHRTtBQUNGO0lBQTRCLDBCQUFTO0lBQ25DLGdCQUFZLEVBQUUsRUFBRSxlQUFlLEVBQUUsY0FBYztRQUEvQyxjQUNFLGlCQUFPLFNBSVI7UUFIQyxPQUFJLENBQUMsU0FBUyxHQUFHLEVBQUU7UUFDbkIsT0FBSSxDQUFDLHNCQUFzQixHQUFHLGVBQWU7UUFDN0MsT0FBSSxDQUFDLHFCQUFxQixHQUFHLGNBQWM7O0lBQzdDLENBQUM7SUFNYSxXQUFJLEdBQWxCLFVBQW1CLEdBQUcsRUFBRSxFQUFxRDtZQUFuRCxVQUFFLEVBQUUsdUJBQXNCLEVBQXRCLDJDQUFzQixFQUFFLHNCQUFxQixFQUFyQiwwQ0FBcUI7UUFDekUsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsRUFBRSxFQUFFLGVBQWUsRUFBRSxjQUFjLENBQUM7WUFDeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQztTQUNoQztRQUNELE9BQU8sTUFBTTtJQUNmLENBQUM7SUFDTSx3QkFBTyxHQUFkO1FBQUEsbUJBY0M7UUFiQyxJQUFNLEtBQUssR0FBRyxhQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSztRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQy9CLEtBQUssRUFBRTtnQkFDTCxLQUFLLEVBQUUsS0FBSzthQUNiO1NBQ0YsQ0FBQztRQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRTtZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDO1lBQ25DLE9BQUksQ0FBQyxjQUFjLEVBQUU7UUFDdkIsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDakQsQ0FBQztJQUNELHlCQUFRLEdBQVIsVUFBUyxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVE7UUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNELDRCQUFXLEdBQVgsVUFBWSxLQUFLO1FBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7SUFDdkMsQ0FBQztJQUNELDBCQUFTLEdBQVQsVUFBVSxLQUFLLEVBQUUsT0FBYztRQUFkLHdDQUFjO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUM7SUFDbEMsQ0FBQztJQUNNLDJCQUFVLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7SUFDMUIsQ0FBQztJQUNPLDZCQUFZLEdBQXBCO1FBQ0UsSUFBSSxJQUFJLENBQUMscUJBQXFCO1lBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUFFO0lBQzlELENBQUM7SUFDTywrQkFBYyxHQUF0QjtRQUNFLElBQUksSUFBSSxDQUFDLHNCQUFzQjtZQUFFLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtJQUNoRSxDQUFDO0lBekNNLGdCQUFTLEdBQUcsSUFBSSxHQUFHLEVBQUU7SUEwQzlCLGFBQUM7Q0FBQSxDQXJEMkIscUJBQVMsR0FxRHBDO0FBckRZLHdCQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQbkIsdUdBQXFEO0FBQ3JELDJGQUFxQztBQUVyQztJQUFxQywyQkFBUztJQUU1QztlQUNFLGlCQUFPO0lBQ1QsQ0FBQztJQUNNLDRCQUFVLEdBQWpCLFVBQWtCLEdBQVc7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHO0lBQ3RCLENBQUM7SUFDTSxzQkFBSSxHQUFYLFVBQVksR0FBVyxFQUFFLGFBQXlCLEVBQUUsWUFBc0IsRUFBRSxNQUF1QixFQUFFLFlBQTZCLEVBQUUsTUFBYztRQUF6SCxvREFBeUI7UUFBRSxnREFBc0I7UUFBRSx3Q0FBdUI7UUFBRSxvREFBNkI7UUFDaEksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxDQUFDO0lBQ2hHLENBQUM7SUFDTSw2QkFBVyxHQUFsQixVQUFtQixHQUFXLEVBQUUsYUFBeUIsRUFBRSxZQUFzQixFQUFFLE1BQXVCLEVBQUUsWUFBNkIsRUFBRSxNQUFjO1FBQXpILG9EQUF5QjtRQUFFLGdEQUFzQjtRQUFFLHdDQUF1QjtRQUFFLG9EQUE2QjtRQUN2SSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sQ0FBQztJQUN2RyxDQUFDO0lBQ00sMkJBQVMsR0FBaEIsVUFBaUIsR0FBVyxFQUFFLEdBQVcsRUFBRSxhQUF5QixFQUFFLFlBQXNCLEVBQUUsTUFBdUIsRUFBRSxZQUE2QixFQUFFLE1BQWM7UUFBekgsb0RBQXlCO1FBQUUsZ0RBQXNCO1FBQUUsd0NBQXVCO1FBQUUsb0RBQTZCO1FBQ2xKLElBQUksR0FBRyxHQUFHLG9CQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLFlBQVksRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLENBQUM7UUFDdkcsR0FBRyxDQUFDLElBQUksRUFBRTtJQUNaLENBQUM7SUFDWSxrQ0FBZ0IsR0FBN0IsVUFBOEIsR0FBVyxFQUFFLEdBQVcsRUFBRSxhQUF5QixFQUFFLFlBQXNCLEVBQUUsTUFBdUIsRUFBRSxZQUE2QixFQUFFLE1BQWM7UUFBekgsb0RBQXlCO1FBQUUsZ0RBQXNCO1FBQUUsd0NBQXVCO1FBQUUsb0RBQTZCOzs7Ozs7d0JBQzNKLEdBQUcsR0FBRyxvQkFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxZQUFZLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxDQUFDO3dCQUMzRixxQkFBTSxHQUFHLENBQUMsV0FBVyxFQUFFOzt3QkFBN0IsR0FBRyxHQUFHLFNBQXVCO3dCQUNuQyxzQkFBTyxHQUFHOzs7O0tBQ1g7SUFDSCxjQUFDO0FBQUQsQ0FBQyxDQXZCb0MscUJBQVMsR0F1QjdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkQsaUdBQTZDO0FBRTdDO0lBU0U7UUFDRSxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFO1FBQ3BDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRztJQUNoQixDQUFDO0lBRWEsaUJBQU0sR0FBcEIsVUFBcUIsT0FBZSxFQUFFLEdBQVcsRUFBRSxJQUFVLEVBQUUsTUFBZSxFQUFFLFlBQXFCLEVBQUUsT0FBZSxFQUFFLFVBQVc7UUFDakksSUFBSSxPQUFPLEdBQUcsSUFBSSxVQUFVLEVBQUU7UUFDOUIsT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFHO1FBQ2pCLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSTtRQUNuQixPQUFPLENBQUMsTUFBTSxHQUFHLE1BQU07UUFDdkIsT0FBTyxDQUFDLFlBQVksR0FBRyxZQUFZO1FBQ25DLE9BQU8sQ0FBQyxPQUFPLEdBQUcsT0FBTztRQUN6QixPQUFPLENBQUMsT0FBTyxHQUFHLE9BQU87UUFDekIsT0FBTyxDQUFDLFVBQVUsR0FBRyxVQUFVO1FBQy9CLE9BQU8sT0FBTztJQUNoQixDQUFDO0lBQ00seUJBQUksR0FBWDtRQUNFLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHO1FBQ2xCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHO1FBQ2xCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJO1FBQ3BCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNO1FBQ3hCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZO1FBQ3BDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUM7UUFDbEUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDaEUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDMUQsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsT0FBTyxDQUFDO0lBQ3BELENBQUM7SUFDWSxnQ0FBVyxHQUF4Qjs7OztnQkFDTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUc7Z0JBQ2QsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHO2dCQUNkLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSTtnQkFDaEIsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNO2dCQUNwQixZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVk7Z0JBQ2hDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDO2dCQUM5RCxLQUFLLEdBQUcsVUFBUyxPQUFPLEVBQUUsTUFBTTtvQkFDbEMsSUFBSSxRQUFRLEdBQUcsVUFBUyxHQUFRO3dCQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDO29CQUNkLENBQUM7b0JBQ0QsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQztvQkFDcEQsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQztvQkFDakQsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsT0FBTyxDQUFDO2dCQUNwRCxDQUFDO2dCQUNELHNCQUFPLElBQUksT0FBTyxDQUFNLEtBQUssQ0FBQzs7O0tBQy9CO0lBQ08sb0NBQWUsR0FBdkIsVUFBd0IsSUFBUztRQUMvQixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsaUJBQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO1NBQ2xEO0lBQ0gsQ0FBQztJQUNPLGlDQUFZLEdBQXBCLFVBQXFCLENBQU07UUFDekIsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ08sbUNBQWMsR0FBdEIsVUFBdUIsSUFBUyxJQUFHLENBQUM7SUFDdEMsaUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFRCxzRkFBb0M7QUFDcEMsMEdBQStDO0FBQy9DLHlGQUE0RTtBQUU1RSwwR0FBcUQ7QUFDckQsMEZBQTJDO0FBQzNDLGdHQUFtRDtBQUVuRCw4RkFBMkM7QUFDM0M7SUFBdUMsNkJBQW9CO0lBQ3pEO1FBQUEsWUFDRSxpQkFBTyxTQWFSO1FBWkMscUJBQXFCO1FBQ3JCLElBQU0sRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUM1QixFQUFFLENBQUMsSUFBSSxHQUFHLElBQUk7UUFDZCxFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztRQUMzQixFQUFFLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtRQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7UUFDdkIsa0JBQVMsQ0FBQyxFQUFFLENBQUM7UUFFYiw0QkFBNEI7UUFDNUIsc0JBQXNCO1FBQ3RCLGFBQUssQ0FBQyxTQUFTLENBQUMsY0FBTSxZQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxhQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBM0MsQ0FBMkMsQ0FBQztRQUNsRSxhQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLHFCQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7O0lBQ2pELENBQUM7SUFDRCw2QkFBUyxHQUFULFVBQVUsS0FBSztRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ1YsdUJBQUssQ0FBVTtRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVMsS0FBTyxDQUFDO1FBQzdCLElBQUksS0FBSyxFQUFFO1lBQ1Qsa0JBQVMsQ0FBQyxxQkFBUyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxnQkFBTyxDQUFDLE1BQU0sQ0FBQyxlQUFLLENBQUMsRUFBRTtnQkFDMUIsaUJBQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO2dCQUN4QixpQkFBUSxDQUFDLGVBQUssQ0FBQzthQUNoQjtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsZ0JBQU8sQ0FBQyxNQUFNLENBQUMscUJBQVMsQ0FBQyxFQUFFO2dCQUM5QixpQkFBUSxDQUFDLHFCQUFTLENBQUM7YUFDcEI7U0FDRjtJQUNILENBQUM7SUFDRCw0QkFBUSxHQUFSLGNBQVksQ0FBQztJQUNmLGdCQUFDO0FBQUQsQ0FBQyxDQWpDc0MsY0FBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBaUMxRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0QsSUFBTyxLQUFLLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUN4QixnR0FBK0M7QUFDL0MsSUFBTyxRQUFRLEdBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRO0FBQy9CLElBQUksR0FBRyxHQUFhLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO0FBQzdDLElBQWMsRUFBRSxDQVNmO0FBVEQsV0FBYyxFQUFFO0lBQUMsU0FBSyxDQVNyQjtJQVRnQixnQkFBSztRQUNsQjtZQUFpQywrQkFBSztZQUNsQzt1QkFBZSxpQkFBTztZQUFBLENBQUM7WUFDdkIsb0NBQWMsR0FBZDtnQkFDSSxpQkFBTSxjQUFjLFdBQUUsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQ3RDLENBQUM7WUFDTCxrQkFBQztRQUFELENBQUMsQ0FOZ0MsS0FBSyxHQU1yQztRQU5ZLGlCQUFXLGNBTXZCO1FBQ0QsR0FBRyxDQUFDLHNCQUFzQixFQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVDLENBQUMsRUFUZ0IsS0FBSyxHQUFMLFFBQUssS0FBTCxRQUFLLFFBU3JCO0FBQUQsQ0FBQyxFQVRhLEVBQUUsR0FBRixVQUFFLEtBQUYsVUFBRSxRQVNmO0FBQ0QsV0FBYyxFQUFFO0lBQUMsUUFBSSxDQXNJcEI7SUF0SWdCLGVBQUk7UUFDakI7WUFBNkIsMkJBQVE7WUFXakM7dUJBQWUsaUJBQU87WUFBQSxDQUFDO1lBQ3ZCLGdDQUFjLEdBQWQ7Z0JBQ0ksaUJBQU0sY0FBYyxXQUFFLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BDLENBQUM7WUFMYyxjQUFNLEdBQU0sRUFBQyxNQUFNLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxFQUFDLEdBQUcsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsV0FBVyxFQUFDLFNBQVMsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsaUJBQWlCLEVBQUMsT0FBTyxFQUFDLFlBQVksRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLGdCQUFnQixFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsV0FBVyxFQUFDLDhCQUE4QixFQUFDLFFBQVEsRUFBQyxHQUFHLEVBQUMsU0FBUyxFQUFDLDhCQUE4QixFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsU0FBUyxFQUFDLE1BQU0sRUFBQyxpQkFBaUIsRUFBQyxPQUFPLEVBQUMsV0FBVyxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxHQUFHLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQyxFQUFFLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLFNBQVMsRUFBQyxDQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxXQUFXLENBQUMsRUFBQyxLQUFLLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsc0JBQXNCLEVBQUMseURBQXlELENBQUMsRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sRUFBQyxpQkFBaUIsRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLGNBQWMsRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxXQUFXLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsU0FBUyxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsQ0FBQyxzQkFBc0IsRUFBQyx5REFBeUQsQ0FBQyxFQUFDLFNBQVMsRUFBQyxnQkFBZ0IsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLDRCQUE0QixFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxnQkFBZ0IsRUFBQyxrQkFBa0IsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxHQUFHLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxZQUFZLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxZQUFZLEVBQUMsUUFBUSxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBQyxFQUFFLEVBQUMsS0FBSyxFQUFDLFdBQVcsRUFBQyxNQUFNLEVBQUMsaUJBQWlCLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLFdBQVcsRUFBQyxPQUFPLEVBQUMsRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLE1BQU0sRUFBQyxvQkFBb0IsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUMsaUJBQWlCLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxpQkFBaUIsRUFBQyxzQkFBc0IsRUFBQyxrQkFBa0IsRUFBQyxvQkFBb0IsQ0FBQyxFQUFDLFlBQVksRUFBQyxFQUFFLEVBQUMsQ0FBQztZQU03N0UsY0FBQztTQUFBLENBaEI0QixRQUFRLEdBZ0JwQztRQWhCWSxZQUFPLFVBZ0JuQjtRQUNELEdBQUcsQ0FBQyxpQkFBaUIsRUFBQyxPQUFPLENBQUMsQ0FBQztRQUMvQjtZQUFnQyw4QkFBUTtZQVNwQzt1QkFBZSxpQkFBTztZQUFBLENBQUM7WUFDdkIsbUNBQWMsR0FBZDtnQkFDSSxpQkFBTSxjQUFjLFdBQUUsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkMsQ0FBQztZQUxjLGlCQUFNLEdBQU0sRUFBQyxNQUFNLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxnQkFBZ0IsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLHVCQUF1QixFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxNQUFNLEVBQUMsaUJBQWlCLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxXQUFXLEVBQUMsTUFBTSxFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsWUFBWSxFQUFDLE1BQU0sRUFBQyxpQkFBaUIsRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQyxNQUFNLEVBQUMsaUJBQWlCLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxVQUFVLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxFQUFFLEVBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsRUFBQyxZQUFZLEVBQUMsY0FBYyxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLDRCQUE0QixFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLGdCQUFnQixFQUFDLHVCQUF1QixFQUFDLGlCQUFpQixDQUFDLEVBQUMsWUFBWSxFQUFDLEVBQUUsRUFBQyxDQUFDO1lBTXJ6QyxpQkFBQztTQUFBLENBZCtCLFFBQVEsR0FjdkM7UUFkWSxlQUFVLGFBY3RCO1FBQ0QsR0FBRyxDQUFDLG9CQUFvQixFQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDO1lBQTZCLDJCQUFRO1lBTWpDO3VCQUFlLGlCQUFPO1lBQUEsQ0FBQztZQUN2QixnQ0FBYyxHQUFkO2dCQUNJLGlCQUFNLGNBQWMsV0FBRSxDQUFDO2dCQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQyxDQUFDO1lBTGMsY0FBTSxHQUFNLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxXQUFXLEVBQUMsU0FBUyxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLE1BQU0sRUFBQyxpQkFBaUIsRUFBQyxPQUFPLEVBQUMsYUFBYSxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxXQUFXLEVBQUMsTUFBTSxFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsaUJBQWlCLENBQUMsRUFBQyxZQUFZLEVBQUMsRUFBRSxFQUFDLENBQUM7WUFNNXZCLGNBQUM7U0FBQSxDQVg0QixRQUFRLEdBV3BDO1FBWFksWUFBTyxVQVduQjtRQUNELEdBQUcsQ0FBQyxpQkFBaUIsRUFBQyxPQUFPLENBQUMsQ0FBQztRQUMvQjtZQUFrQyxnQ0FBUTtZQU90Qzt1QkFBZSxpQkFBTztZQUFBLENBQUM7WUFDdkIscUNBQWMsR0FBZDtnQkFDSSxpQkFBTSxjQUFjLFdBQUUsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekMsQ0FBQztZQUxjLG1CQUFNLEdBQU0sRUFBQyxNQUFNLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQyxFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxRQUFRLEVBQUMsR0FBRyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLGdCQUFnQixFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsdUJBQXVCLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLE1BQU0sRUFBQyxpQkFBaUIsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsZ0JBQWdCLEVBQUMsdUJBQXVC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T0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLGdCQUFnQixFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsbUJBQW1CLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLE1BQU0sRUFBQyxpQkFBaUIsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQyxNQUFNLEVBQUMsaUJBQWlCLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsZ0JBQWdCLEVBQUMsbUJBQW1CLEVBQUMsaUJBQWlCLENBQUMsRUFBQyxZQUFZLEVBQUMsRUFBRSxFQUFDLENBQUM7WUFNNTRCLGlCQUFDO1NBQUEsQ0FaK0IsUUFBUSxHQVl2QztRQVpZLGVBQVUsYUFZdEI7UUFDRCxHQUFHLENBQUMsb0JBQW9CLEVBQUMsVUFBVSxDQUFDLENBQUM7UUFDckM7WUFBaUMsK0JBQVE7WUFNckM7dUJBQWUsaUJBQU87WUFBQSxDQUFDO1lBQ3ZCLG9DQUFjLEdBQWQ7Z0JBQ0ksaUJBQU0sY0FBYyxXQUFFLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hDLENBQUM7WUFMYyxrQkFBTSxHQUFNLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsZ0JBQWdCLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxtQkFBbUIsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsTUFBTSxFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLGdCQUFnQixFQUFDLG1CQUFtQixFQUFDLGlCQUFpQixDQUFDLEVBQUMsWUFBWSxFQUFDLEVBQUUsRUFBQyxDQUFDO1lBTTF4QixrQkFBQztTQUFBLENBWGdDLFFBQVEsR0FXeEM7UUFYWSxnQkFBVyxjQVd2QjtRQUNELEdBQUcsQ0FBQyxxQkFBcUIsRUFBQyxXQUFXLENBQUMsQ0FBQztJQUMzQyxDQUFDLEVBdElnQixJQUFJLEdBQUosT0FBSSxLQUFKLE9BQUksUUFzSXBCO0FBQUQsQ0FBQyxFQXRJYSxFQUFFLEdBQUYsVUFBRSxLQUFGLFVBQUUsUUFzSWY7Ozs7Ozs7Ozs7OztBQ3ZKRCxlIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiaW5kZXhcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9NYWluLnRzXCIsXCJsaWJcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvKipUaGlzIGNsYXNzIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IExheWFBaXJJREUsIHBsZWFzZSBkbyBub3QgbWFrZSBhbnkgbW9kaWZpY2F0aW9ucy4gKi9cclxuaW1wb3J0IE1haW5TY2VuZSBmcm9tIFwiLi9zY2VuZS9NYWluU2NlbmVcIlxuaW1wb3J0IFRlc3QgZnJvbSBcIi4vZ2FtZS91aS92aWV3L0FQYWdlL1Rlc3RcIlxuaW1wb3J0IEhMYWJlbCBmcm9tIFwiLi9jb3JlL2dhbWUvc2NyaXB0L0hMYWJlbFwiXHJcbi8qXHJcbiog5ri45oiP5Yid5aeL5YyW6YWN572uO1xyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29uZmlne1xyXG4gICAgc3RhdGljIHdpZHRoOm51bWJlcj0xOTIwO1xyXG4gICAgc3RhdGljIGhlaWdodDpudW1iZXI9MTA4MDtcclxuICAgIHN0YXRpYyBzY2FsZU1vZGU6c3RyaW5nPVwic2hvd2FsbFwiO1xyXG4gICAgc3RhdGljIHNjcmVlbk1vZGU6c3RyaW5nPVwibm9uZVwiO1xyXG4gICAgc3RhdGljIGFsaWduVjpzdHJpbmc9XCJtaWRkbGVcIjtcclxuICAgIHN0YXRpYyBhbGlnbkg6c3RyaW5nPVwiY2VudGVyXCI7XHJcbiAgICBzdGF0aWMgc3RhcnRTY2VuZTphbnk9XCJzY2VuZS9NYWluU2NlbmUuc2NlbmVcIjtcclxuICAgIHN0YXRpYyBzY2VuZVJvb3Q6c3RyaW5nPVwiXCI7XHJcbiAgICBzdGF0aWMgZGVidWc6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBzdGF0OmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgcGh5c2ljc0RlYnVnOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgZXhwb3J0U2NlbmVUb0pzb246Ym9vbGVhbj10cnVlO1xyXG4gICAgY29uc3RydWN0b3IoKXt9XHJcbiAgICBzdGF0aWMgaW5pdCgpe1xyXG4gICAgICAgIHZhciByZWc6IEZ1bmN0aW9uID0gTGF5YS5DbGFzc1V0aWxzLnJlZ0NsYXNzO1xyXG4gICAgICAgIHJlZyhcInNjZW5lL01haW5TY2VuZS50c1wiLE1haW5TY2VuZSk7XG4gICAgICAgIHJlZyhcImdhbWUvdWkvdmlldy9BUGFnZS9UZXN0LnRzXCIsVGVzdCk7XG4gICAgICAgIHJlZyhcImNvcmUvZ2FtZS9zY3JpcHQvSExhYmVsLnRzXCIsSExhYmVsKTtcclxuICAgIH1cclxufVxyXG5HYW1lQ29uZmlnLmluaXQoKTsiLCJpbXBvcnQgR2FtZUNvbmZpZyBmcm9tICcuL0dhbWVDb25maWcnXHJcbmNsYXNzIE1haW4ge1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8v5qC55o2uSURF6K6+572u5Yid5aeL5YyW5byV5pOOXHJcbiAgICBpZiAod2luZG93WydMYXlhM0QnXSkgTGF5YTNELmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQpXHJcbiAgICBlbHNlIExheWEuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCwgTGF5YVsnV2ViR0wnXSlcclxuICAgIExheWFbJ1BoeXNpY3MnXSAmJiBMYXlhWydQaHlzaWNzJ10uZW5hYmxlKClcclxuICAgIExheWFbJ0RlYnVnUGFuZWwnXSAmJiBMYXlhWydEZWJ1Z1BhbmVsJ10uZW5hYmxlKClcclxuICAgIC8vIExheWEuc3RhZ2Uuc2NhbGVNb2RlID0gR2FtZUNvbmZpZy5zY2FsZU1vZGU7XHJcbiAgICBMYXlhLnN0YWdlLnNjYWxlTW9kZSA9IEdhbWVDb25maWcuc2NhbGVNb2RlXHJcbiAgICBMYXlhLnN0YWdlLnNjcmVlbk1vZGUgPSBHYW1lQ29uZmlnLnNjcmVlbk1vZGVcclxuICAgIExheWEuc3RhZ2UuYWxpZ25WID0gR2FtZUNvbmZpZy5hbGlnblZcclxuICAgIExheWEuc3RhZ2UuYWxpZ25IID0gR2FtZUNvbmZpZy5hbGlnbkhcclxuICAgIC8v5YW85a655b6u5L+h5LiN5pSv5oyB5Yqg6L29c2NlbmXlkI7nvIDlnLrmma9cclxuICAgIExheWEuVVJMLmV4cG9ydFNjZW5lVG9Kc29uID0gR2FtZUNvbmZpZy5leHBvcnRTY2VuZVRvSnNvblxyXG5cclxuICAgIC8v5omT5byA6LCD6K+V6Z2i5p2/77yI6YCa6L+HSURF6K6+572u6LCD6K+V5qih5byP77yM5oiW6ICFdXJs5Zyw5Z2A5aKe5YqgZGVidWc9dHJ1ZeWPguaVsO+8jOWdh+WPr+aJk+W8gOiwg+ivlemdouadv++8iVxyXG4gICAgaWYgKEdhbWVDb25maWcuZGVidWcgfHwgTGF5YS5VdGlscy5nZXRRdWVyeVN0cmluZygnZGVidWcnKSA9PSAndHJ1ZScpIExheWEuZW5hYmxlRGVidWdQYW5lbCgpXHJcbiAgICBpZiAoR2FtZUNvbmZpZy5waHlzaWNzRGVidWcgJiYgTGF5YVsnUGh5c2ljc0RlYnVnRHJhdyddKSBMYXlhWydQaHlzaWNzRGVidWdEcmF3J10uZW5hYmxlKClcclxuICAgIGlmIChHYW1lQ29uZmlnLnN0YXQpIExheWEuU3RhdC5zaG93KClcclxuICAgIExheWEuYWxlcnRHbG9iYWxFcnJvciA9IHRydWVcclxuICAgIC8v5r+A5rS76LWE5rqQ54mI5pys5o6n5Yi277yMdmVyc2lvbi5qc29u55SxSURF5Y+R5biD5Yqf6IO96Ieq5Yqo55Sf5oiQ77yM5aaC5p6c5rKh5pyJ5Lmf5LiN5b2x5ZON5ZCO57ut5rWB56iLXHJcbiAgICBMYXlhLlJlc291cmNlVmVyc2lvbi5lbmFibGUoJ3ZlcnNpb24uanNvbicsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vblZlcnNpb25Mb2FkZWQpLCBMYXlhLlJlc291cmNlVmVyc2lvbi5GSUxFTkFNRV9WRVJTSU9OKVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblZlcnNpb25Mb2FkZWQoKTogdm9pZCB7XHJcbiAgICAvL+a/gOa0u+Wkp+Wwj+WbvuaYoOWwhO+8jOWKoOi9veWwj+WbvueahOaXtuWAme+8jOWmguaenOWPkeeOsOWwj+WbvuWcqOWkp+WbvuWQiOmbhumHjOmdou+8jOWImeS8mOWFiOWKoOi9veWkp+WbvuWQiOmbhu+8jOiAjOS4jeaYr+Wwj+WbvlxyXG4gICAgTGF5YS5BdGxhc0luZm9NYW5hZ2VyLmVuYWJsZSgnZmlsZWNvbmZpZy5qc29uJywgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uQ29uZmlnTG9hZGVkKSlcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Db25maWdMb2FkZWQoKTogdm9pZCB7XHJcbiAgICAvL+WKoOi9vUlEReaMh+WumueahOWcuuaZr1xyXG4gICAgR2FtZUNvbmZpZy5zdGFydFNjZW5lICYmIExheWEuU2NlbmUub3BlbihHYW1lQ29uZmlnLnN0YXJ0U2NlbmUpXHJcbiAgfVxyXG59XHJcbi8v5r+A5rS75ZCv5Yqo57G7XHJcbm5ldyBNYWluKClcclxuIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZmZlY3RVdGlscyAge1xuICAvKipcbiAgICog57G75Ly8bWFj5LiK5Zu+5qCH5LiK5LiL5oqW5Yqo55qE5pWI5p6cXG4gICAqIEBwYXJhbSB7U3ByaXRlfSBvYmog5oqW5Yqo5a+56LGhXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbml0WSDopoHmipbliqjnmoTlr7nosaHnmoTliJ3lp4tZ5YC877yM5Y6f5aeL5L2N572uXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIOaKluWKqOWKqOeUu+WujOaIkOWbnuiwg+WHveaVsFxuICAgKiBAcGFyYW0ge2FueX0gdGhpc09iaiDlm57osIPlh73mlbB0aGlz5a+56LGhXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIG1hY0ljb25TaGFrZShvYmosIGluaXRZLCBjYWxsYmFjaywgdGhpc09iaikge1xuICAgIC8v5oqW5Yqo6aKR546HW+aXtumXtO+8jOenu+WKqOi3neemu13vvIzlj6/kv67mlLlcbiAgICBsZXQgYXJyID0gW1syMCwgMzAwXSwgWzE1LCAzMDBdLCBbMTAsIDMwMF0sIFs1LCAzMDBdXVxuXG4gICAgbGV0IGluZGV4ID0gMFxuICAgIHRvU2hha2UoKVxuXG4gICAgZnVuY3Rpb24gdG9TaGFrZSgpIHtcbiAgICAgIGlmIChpbmRleCA+PSBhcnIubGVuZ3RoKSB7XG4gICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrLmFwcGx5KHRoaXNPYmosIFtdKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgTGF5YS5Ud2Vlbi50byhcbiAgICAgICAgICBvYmosXG4gICAgICAgICAgeyB5OiBpbml0WSAtIGFycltpbmRleF1bMF0gfSxcbiAgICAgICAgICBhcnJbaW5kZXhdWzFdLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZShudWxsLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIExheWEuVHdlZW4udG8oXG4gICAgICAgICAgICAgIG9iaixcbiAgICAgICAgICAgICAgeyB5OiBpbml0WSB9LFxuICAgICAgICAgICAgICBhcnJbaW5kZXhdWzFdLFxuICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKG51bGwsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICsraW5kZXhcbiAgICAgICAgICAgICAgICB0b1NoYWtlKClcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSksXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5ZCR5LiK56e75Yqo5reh5Ye677yI5by55Ye65qGG77yJXG4gICAqIEBwYXJhbSB7U3ByaXRlfSBvYmog5reh5Ye65a+56LGhXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lIOa3oeWHuuaXtumXtFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBlYXNlIOa3oeWHuuWHveaVsFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayDmt6Hlh7rlrozmiJDlm57osIPlh73mlbBcbiAgICogQHBhcmFtIHthbnl9IHRoaXNPYmog5Zue6LCD5Ye95pWwdGhpc+WvueixoVxuICAgKiBAcGFyYW0ge0FycmF5fSBhcnJEYXRhIOWbnuiwg+S8oOWPglxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBmbG93T3V0KG9iaiwgdGltZSA9IDUwMCwgZWFzZSA9IG51bGwsIGNhbGxiYWNrID0gbnVsbCwgdGhpc09iaiA9IG51bGwsIGFyckRhdGEgPSBudWxsKSB7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBMYXlhLlR3ZWVuLnRvKG9iaiwgeyB5OiBvYmoueSAtIDE1MCwgYWxwaGE6IDAgfSwgdGltZSwgZWFzZSwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzT2JqLCBjYWxsYmFjaywgYXJyRGF0YSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIExheWEuVHdlZW4udG8ob2JqLCB7IHk6IG9iai55IC0gMTUwLCBhbHBoYTogMCB9LCB0aW1lLCBlYXNlLCBMYXlhLkhhbmRsZXIuY3JlYXRlKG9iaiwgb2JqLnJlbW92ZVNlbGYsIGFyckRhdGEpKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDmlofmnKzmlbDlrZflop7lh4/mlYjmnpxcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0TnVtIOW8gOWni+aVsOWAvFxuICAgKiBAcGFyYW0ge251bWJlcn0gZW5kTnVtIOa4kOWPmOWIsOeahOaVsOWAvFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayDmt6Hlh7rlrozmiJDlm57osIPlh73mlbBcbiAgICogQHBhcmFtIHthbnl9IHRoaXNPYmog5Zue6LCD5Ye95pWwdGhpc+WvueixoVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBmbG93TnVtKHN0YXJ0TnVtLCBlbmROdW0sIGNhbGxiYWNrLCB0aGlzT2JqID0gbnVsbCkge1xuICAgIGxldCBjaGFuZ2UgPSBNYXRoLmFicyhlbmROdW0gLSBzdGFydE51bSlcbiAgICBpZiAoY2hhbmdlIDw9IDApIHJldHVyblxuICAgIGxldCBldmVyeUNoYW5nZSA9IGNoYW5nZSAvIChlbmROdW0gLSBzdGFydE51bSlcbiAgICBsZXQgY3Vyck51bSA9IHN0YXJ0TnVtXG4gICAgbGV0IHRpbWVyID0gbmV3IExheWEuVGltZXIoKVxuICAgIHRpbWVyLmxvb3AoMzAsIHRoaXMsIGNoYW5nZUZ1bilcblxuICAgIGZ1bmN0aW9uIGNoYW5nZUZ1bigpIHtcbiAgICAgIGN1cnJOdW0gKz0gZXZlcnlDaGFuZ2VcbiAgICAgIC0tY2hhbmdlXG4gICAgICBpZiAoY2hhbmdlIDwgMCkge1xuICAgICAgICB0aW1lci5jbGVhckFsbCh0aGlzKVxuICAgICAgICB0aW1lciA9IG51bGxcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrLmFwcGx5KHRoaXNPYmosIFtjdXJyTnVtXSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5byA5aeL6Zeq54OBXG4gICAqIEBwYXJhbSB7U3ByaXRlfSBvYmpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFscGhhVGltZSDpl6rng4HpopHnjodcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgc3RhcnRGbGlja2VyKG9iaiwgYWxwaGFUaW1lID0gNzAwKSB7XG4gICAgb2JqLmFscGhhID0gMVxuICAgIExheWEuVHdlZW4udG8oXG4gICAgICBvYmosXG4gICAgICB7IGFscGhhOiAwIH0sXG4gICAgICBhbHBoYVRpbWUsXG4gICAgICBudWxsLFxuICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZShcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgTGF5YS5Ud2Vlbi50byhvYmosIHsgYWxwaGE6IDEgfSwgYWxwaGFUaW1lLCBudWxsLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMuc3RhcnRGbGlja2VyLCBbb2JqXSkpXG4gICAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgICksXG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIOWBnOatouWKqOeUu+aJgOacieWKqOeUu+WQjuWuueWZqOS9jee9ruWIneWni+WMluWIsOWOn+S9je+8jOWQpuWImeWPr+iDveWHuueOsOS9jee9ruaUueWPmOeahGJ1Z1xuICAgKiBAcGFyYW0ge1Nwcml0ZX0gb2JqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4UG9zXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5UG9zXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHN0b3BFZmZlY3Qob2JqLCB4UG9zID0gbnVsbCwgeVBvcyA9IG51bGwpIHtcbiAgICBMYXlhLlR3ZWVuLmNsZWFyQWxsKG9iailcbiAgICBpZiAoeFBvcyAhPT0gbnVsbCAmJiB5UG9zICE9PSBudWxsKSB7XG4gICAgICBvYmoucG9zKHhQb3MsIHlQb3MpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOeCueWHu+aUvuWkp+e8qeWwj+aViOaenFxuICAgKiBAcGFyYW0ge0xheWEuU3ByaXRlfVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzQ2hhbmdlWFkg5aaC5p6c5Lit5b+D54K55piv6ZSa54K55LiN6ZyA6KaB5L+u5pS55L2N572uXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGNsaWNrRWZmZWN0KHNwLCBpc0NoYW5nZVhZID0gdHJ1ZSkge1xuICAgIGlmICghc3ApIHJldHVyblxuICAgIHNwLm9mZihMYXlhLkV2ZW50Lk1PVVNFX0RPV04sIHRoaXMsIHRoaXMuY3ViaWNJbk91dEVmZmVjdClcbiAgICBzcC5vbihMYXlhLkV2ZW50Lk1PVVNFX0RPV04sIHRoaXMsIHRoaXMuY3ViaWNJbk91dEVmZmVjdCwgW3NwLCBpc0NoYW5nZVhZXSlcbiAgfVxuICBwdWJsaWMgc3RhdGljIGNsZWFyQ2xpY2tFZmZlY3Qoc3ApIHtcbiAgICBpZiAoIXNwKSByZXR1cm5cbiAgICBzcC5vZmYoTGF5YS5FdmVudC5NT1VTRV9ET1dOLCB0aGlzLCB0aGlzLmN1YmljSW5PdXRFZmZlY3QpXG4gIH1cbiAgcHVibGljIHN0YXRpYyBjdWJpY0luT3V0RWZmZWN0KHNwLCBpc0NoYW5nZVhZKSB7XG4gICAgaWYgKHNwLl9hbmlCdXR0b25FZmZlY3QpIHJldHVyblxuICAgIHNwLl9hbmlCdXR0b25FZmZlY3QgPSB0cnVlXG4gICAgbGV0IF94ID0gc3AueFxuICAgIGxldCBfeSA9IHNwLnlcbiAgICBsZXQgX3NjYVggPSBzcC5zY2FsZVhcbiAgICBsZXQgX3NjYVkgPSBzcC5zY2FsZVlcbiAgICBsZXQgX2JpZ1gsIF9iaWdZXG4gICAgaWYgKCFpc0NoYW5nZVhZKSB7XG4gICAgICBfYmlnWCA9IF94IC0gKChzcC53aWR0aCAqIDAuMSkgPj4gMSlcbiAgICAgIF9iaWdZID0gX3kgLSAoKHNwLmhlaWdodCAqIDAuMSkgPj4gMSlcbiAgICB9IGVsc2Uge1xuICAgICAgX2JpZ1ggPSBfeFxuICAgICAgX2JpZ1kgPSBfeVxuICAgIH1cbiAgICBMYXlhLlR3ZWVuLnRvKFxuICAgICAgc3AsXG4gICAgICB7IHg6IF9iaWdYLCB5OiBfYmlnWSwgc2NhbGVYOiAxLjEgKiBfc2NhWCwgc2NhbGVZOiAxLjEgKiBfc2NhWSB9LFxuICAgICAgMTAwLFxuICAgICAgbnVsbCxcbiAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xuICAgICAgICBMYXlhLlR3ZWVuLnRvKFxuICAgICAgICAgIHNwLFxuICAgICAgICAgIHsgeDogX3gsIHk6IF95LCBzY2FsZVg6IF9zY2FYLCBzY2FsZVk6IF9zY2FZIH0sXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXNwLmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgICBzcC5fYW5pQnV0dG9uRWZmZWN0ID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgKVxuICAgICAgfSksXG4gICAgKVxuICB9XG59XG4iLCIvKipcclxuICogbmFtZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNpbmdsZXRvbiB7XHJcbiAgLyoqXHJcbiAgICogZGVmYXVsdCBjb25zdHJhY3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgcHVibGljIHN0YXRpYyBfaW5zdGFuY2U6IGFueVxyXG4gIC8qKlxyXG4gICAqIGdldCBpbnN0YW5jZSBvciBjcmVhdGUgbmV3IGluc3RhbmNlXHJcbiAgICogQHJldHVybnMge2FueX1cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIENyZWF0ZU9yR2V0KC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgIGNvbnN0IGluc3RUOiBhbnkgPSB0aGlzXHJcbiAgICByZXR1cm4gKGluc3RULl9pbnN0YW5jZSA9IGluc3RULl9pbnN0YW5jZSB8fCBuZXcgaW5zdFQoLi4uYXJncykpXHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBlbnVtIExheWVyQ29uc3Qge1xuICBiYXNlID0gMSxcbiAgYmFzZTEsXG4gIHZpZXcsXG4gIHNoYXJlLFxuICBkaWFsb2csXG4gIGxvYWRpbmcsXG59XG4iLCJleHBvcnQgZW51bSBWaWV3Q29uc3Qge1xyXG4gIE1haW4gPSAxLFxyXG4gIExvYWRpbmcsXHJcbiAgVmlld1Rlc3QsXHJcbiAgVmlld1Rlc3QxLFxyXG4gIERpYWxvZ1Rlc3QsXHJcbiAgQmFzZVRlc3QsXHJcbiAgQVBhZ2UsXHJcbiAgQlBhZ2UsXHJcbiAgTG9naW4sXHJcbiAgTG9naW5TdWNjZXNzXHJcbn1cclxuIiwiaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvU2VydmljZSdcbmltcG9ydCB7IERpc3BhdGNoZXIgfSBmcm9tICcuLi9zZXJ2aWNlL2Rpc3BhdGNoZXIvRGlzcGF0Y2hlcidcbmltcG9ydCB7IFNvY2tldCB9IGZyb20gJy4uLy4uL25ldC9Tb2NrZXQnXG5pbXBvcnQgeyBTdHJpbmdVdGlsIH0gZnJvbSAnLi91dGlscy9TdHJpbmdVdGlsJ1xuaW1wb3J0IHsgVGltZVV0aWwgfSBmcm9tICcuL3V0aWxzL1RpbWVVdGlsJ1xuXG5pbXBvcnQgR2FtZU5ldCBmcm9tICcuLi8uLi9uZXQvaHR0cC9HYW1lTmV0J1xuaW1wb3J0IHsgRmV0Y2ggfSBmcm9tICcuLi8uLi9uZXQvRmV0Y2gnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQXBwIHtcbiAgLy8g5YWo5bGA6YWN572u5pWw5o2uXG4gIHB1YmxpYyBzdGF0aWMgR2xvYmFsRGF0YTogYW55ID0gbnVsbFxuXG4gIC8qKlxuICAgKiDliJ3lp4vljJblh73mlbBcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGluaXQoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIEdhbWVBcHAuR2xvYmFsRGF0YSA9IExheWEubG9hZGVyLmdldFJlcygnY29uZi9nbG9iYWwuanNvbicpXG4gICAgICAvL+W4p+i9ruivolxuICAgICAgU2VydmljZS5Jbml0KClcbiAgICAgIHJlc29sdmUoKVxuICAgIH0pXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldCBkaXNwYXRjaGVyKCk6IERpc3BhdGNoZXIge1xuICAgIHJldHVybiBTZXJ2aWNlLmRpc3BhdGNoZXJcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IFN0cmluZ1V0aWwoKTogU3RyaW5nVXRpbCB7XG4gICAgcmV0dXJuIFN0cmluZ1V0aWwuQ3JlYXRlT3JHZXQoKVxuICB9XG4gIHB1YmxpYyBzdGF0aWMgZ2V0IFRpbWVVdGlsKCk6IFRpbWVVdGlsIHtcbiAgICByZXR1cm4gVGltZVV0aWwuQ3JlYXRlT3JHZXQoKVxuICB9XG4gIHB1YmxpYyBzdGF0aWMgZ2V0IHNvY2tldCgpOiBTb2NrZXQge1xuICAgIHJldHVybiBTb2NrZXQuaW5pdCgnbWFpbicsIHsgaXA6ICdodHRwOi8vYWNnYy5mdW46MzAwMScgfSlcbiAgfVxuICBwdWJsaWMgc3RhdGljIGdldCBuZXQoKTogR2FtZU5ldCB7XG4gICAgcmV0dXJuIEdhbWVOZXQuQ3JlYXRlT3JHZXQoKVxuICB9XG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGZldGNoKCk6IEZldGNoIHtcbiAgICByZXR1cm4gRmV0Y2guaW5pdCgnbWFpbicsIHsgdXJsOiAnaHR0cDovL2FjZ2MuZnVuOjMwMDEnIH0pXG4gIH1cbn1cbiIsIi8qKlxyXG4gKiDlpJror63oqIBMYWJlbFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSExhYmVsIGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gIH1cclxuICAvKiogQHByb3Age25hbWU6TGFuZ3VhZ2VJRCx0eXBlOnN0cmluZ30qL1xyXG4gIHB1YmxpYyBMYW5ndWFnZUlEOiBzdHJpbmdcclxuICAvKiogQHByb3Age25hbWU6SXNGaXQsdHlwZTpCb29sfSovXHJcbiAgcHVibGljIElzRml0OiBib29sZWFuID0gdHJ1ZVxyXG4gIC8qKiBAcHJvcCB7bmFtZTpJc0ZpbGwsdGlwczpcIjEsMFwiLHR5cGU6Qm9vbH0qL1xyXG4gIHB1YmxpYyBJc0ZpbGw6IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICBwcml2YXRlIF9sYW5nTGFiZWw6IExheWEuTGFiZWxcclxuICBvbkF3YWtlKCkge1xyXG4gICAgdGhpcy5fbGFuZ0xhYmVsID0gdGhpcy5vd25lciBhcyBMYXlhLkxhYmVsXHJcbiAgICB0aGlzLmxhbmcoKVxyXG4gIH1cclxuICBwcml2YXRlIGxhbmcoKSB7XHJcbiAgICBpZiAodGhpcy5MYW5ndWFnZUlEKSB7XHJcbiAgICAgIHRoaXMuX2xhbmdMYWJlbC50ZXh0ID0gdGhpcy5MYW5ndWFnZUlEXHJcbiAgICB9XHJcbiAgICB0aGlzLmZpdCgpXHJcbiAgfVxyXG4gIHB1YmxpYyBmaXQoKSB7XHJcbiAgICBpZiAoIXRoaXMuSXNGaXQpIHJldHVyblxyXG4gICAgaWYgKCF0aGlzLl9sYW5nTGFiZWwud29yZFdyYXApIHtcclxuICAgICAgaWYgKHRoaXMuSXNGaWxsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xhbmdMYWJlbFsnX3RmJ10udGV4dFdpZHRoID4gdGhpcy5fbGFuZ0xhYmVsLndpZHRoKSB0aGlzLmZpdFNob3J0V2lkdGgoKVxyXG4gICAgICAgIGVsc2UgdGhpcy5maXRMb25nV2lkdGgoKVxyXG4gICAgICB9IGVsc2UgdGhpcy5maXRTaG9ydFdpZHRoKClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLklzRmlsbCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9sYW5nTGFiZWxbJ190ZiddLnRleHRIZWlnaHQgPiB0aGlzLl9sYW5nTGFiZWwuaGVpZ2h0KSB0aGlzLmZpdFNob3J0SGVpZ2h0KClcclxuICAgICAgICBlbHNlIHRoaXMuZml0TG9uZ0hlaWdodCgpXHJcbiAgICAgIH0gZWxzZSB0aGlzLmZpdFNob3J0SGVpZ2h0KClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZml0U2hvcnRXaWR0aCgpIHtcclxuICAgIHZhciBmbGFnID0gdGhpcy5fbGFuZ0xhYmVsWydfdGYnXS50ZXh0V2lkdGggPiB0aGlzLl9sYW5nTGFiZWwud2lkdGhcclxuICAgIHZhciBmU2l6ZSA9IHRoaXMuX2xhbmdMYWJlbC5mb250U2l6ZVxyXG4gICAgd2hpbGUgKGZsYWcpIHtcclxuICAgICAgZlNpemUgPSBmU2l6ZSAtIDFcclxuICAgICAgTGF5YS5Ccm93c2VyLmNvbnRleHQuZm9udCA9IGZTaXplICsgJ3B4IEFyaWFsJ1xyXG4gICAgICB2YXIgYnJvd3NlclRleHQgPSBMYXlhLkJyb3dzZXIuY29udGV4dC5tZWFzdXJlVGV4dCh0aGlzLl9sYW5nTGFiZWwudGV4dClcclxuICAgICAgZmxhZyA9IGJyb3dzZXJUZXh0LndpZHRoID4gdGhpcy5fbGFuZ0xhYmVsLndpZHRoICYmIGZTaXplID4gMTJcclxuICAgIH1cclxuICAgIHRoaXMuX2xhbmdMYWJlbC5mb250U2l6ZSA9IGZTaXplXHJcbiAgfVxyXG4gIHByaXZhdGUgZml0TG9uZ1dpZHRoKCkge1xyXG4gICAgdmFyIGZsYWcgPSB0aGlzLl9sYW5nTGFiZWxbJ190ZiddLnRleHRXaWR0aCA8IHRoaXMuX2xhbmdMYWJlbC53aWR0aFxyXG4gICAgdmFyIGZTaXplID0gdGhpcy5fbGFuZ0xhYmVsLmZvbnRTaXplXHJcbiAgICB3aGlsZSAoZmxhZykge1xyXG4gICAgICBmU2l6ZSA9IGZTaXplICsgMVxyXG4gICAgICBMYXlhLkJyb3dzZXIuY29udGV4dC5mb250ID0gZlNpemUgKyAncHggQXJpYWwnXHJcbiAgICAgIHZhciBicm93c2VyVGV4dCA9IExheWEuQnJvd3Nlci5jb250ZXh0Lm1lYXN1cmVUZXh0KHRoaXMuX2xhbmdMYWJlbC50ZXh0KVxyXG4gICAgICBmbGFnID0gYnJvd3NlclRleHQud2lkdGggPCB0aGlzLl9sYW5nTGFiZWwud2lkdGhcclxuICAgIH1cclxuICAgIHRoaXMuX2xhbmdMYWJlbC5mb250U2l6ZSA9IGZTaXplXHJcbiAgfVxyXG4gIHByaXZhdGUgZml0U2hvcnRIZWlnaHQoKSB7XHJcbiAgICB2YXIgZmxhZyA9IHRoaXMuX2xhbmdMYWJlbFsnX3RmJ10udGV4dEhlaWdodCA+IHRoaXMuX2xhbmdMYWJlbC5oZWlnaHRcclxuICAgIHZhciBmU2l6ZSA9IHRoaXMuX2xhbmdMYWJlbC5mb250U2l6ZVxyXG4gICAgd2hpbGUgKGZsYWcpIHtcclxuICAgICAgZlNpemUgPSBmU2l6ZSAtIDFcclxuICAgICAgTGF5YS5Ccm93c2VyLmNvbnRleHQuZm9udCA9IGZTaXplICsgJ3B4IEFyaWFsJ1xyXG4gICAgICB0aGlzLl9sYW5nTGFiZWwuZm9udFNpemUgPSBmU2l6ZVxyXG4gICAgICBmbGFnID0gdGhpcy5fbGFuZ0xhYmVsWydfdGYnXS50ZXh0SGVpZ2h0ID4gdGhpcy5fbGFuZ0xhYmVsLmhlaWdodCAmJiBmU2l6ZSA+IDEyXHJcbiAgICB9XHJcbiAgfVxyXG4gIHByaXZhdGUgZml0TG9uZ0hlaWdodCgpIHtcclxuICAgIHZhciBmbGFnID0gdGhpcy5fbGFuZ0xhYmVsWydfdGYnXS50ZXh0SGVpZ2h0IDwgdGhpcy5fbGFuZ0xhYmVsLmhlaWdodFxyXG4gICAgdmFyIGZTaXplID0gdGhpcy5fbGFuZ0xhYmVsLmZvbnRTaXplXHJcbiAgICB3aGlsZSAoZmxhZykge1xyXG4gICAgICBmU2l6ZSA9IGZTaXplICsgMVxyXG4gICAgICBMYXlhLkJyb3dzZXIuY29udGV4dC5mb250ID0gZlNpemUgKyAncHggQXJpYWwnXHJcbiAgICAgIHRoaXMuX2xhbmdMYWJlbC5mb250U2l6ZSA9IGZTaXplXHJcbiAgICAgIGZsYWcgPSB0aGlzLl9sYW5nTGFiZWxbJ190ZiddLnRleHRIZWlnaHQgPCB0aGlzLl9sYW5nTGFiZWwuaGVpZ2h0XHJcbiAgICB9XHJcbiAgICB0aGlzLl9sYW5nTGFiZWwuZm9udFNpemUgPSBmU2l6ZSAtIDFcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2luZ2xldG9uIH0gZnJvbSAnLi4vLi4vYmFzZS9TaW5nbGV0b24nXHJcblxyXG5leHBvcnQgY2xhc3MgU3RyaW5nVXRpbCBleHRlbmRzIFNpbmdsZXRvbiB7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTaW5nbGV0b24gfSBmcm9tICcuLi8uLi9iYXNlL1NpbmdsZXRvbidcclxuXHJcbmV4cG9ydCBjbGFzcyBUaW1lVXRpbCBleHRlbmRzIFNpbmdsZXRvbiB7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gIH1cclxuICAvL+WJqeS9meaXtumXtOi9rOaXtuWIhuenku+8iOenku+8iVxyXG4gIHByaXZhdGUgY2hhbmdlVGltZSh0aW1lOiBudW1iZXIpOiB7IGhvdXJzOiBudW1iZXI7IG1pbnV0ZXM6IG51bWJlcjsgc2Vjb25kczogbnVtYmVyIH0ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaG91cnM6IE1hdGguZmxvb3IodGltZSAvIDM2MDApLFxyXG4gICAgICBtaW51dGVzOiBNYXRoLmZsb29yKCh0aW1lICUgMzYwMCkgLyA2MCksXHJcbiAgICAgIHNlY29uZHM6IHRpbWUgJSA2MCxcclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICog5YCS6K6h5pe2XHJcbiAgICogQHBhcmFtIHRpbWUg5pe26Ze05oiz77yIc++8iVxyXG4gICAqIEBwYXJhbSBob3VyIOaXtlxyXG4gICAqIEBwYXJhbSBtaW51dGUg5YiGXHJcbiAgICogQHBhcmFtIHNlY29uZCDnp5JcclxuICAgKi9cclxuICBwdWJsaWMgY291bnREb3duKHRpbWU6IG51bWJlciwgaG91cjogc3RyaW5nID0gJ+aXticsIG1pbnV0ZTogc3RyaW5nID0gJ+WIhicsIHNlY29uZDogc3RyaW5nID0gJ+enkicpOiBzdHJpbmcge1xyXG4gICAgbGV0IHRlbXAgPSB0aGlzLmNoYW5nZVRpbWUodGltZSlcclxuICAgIHJldHVybiBgJHt0ZW1wLmhvdXJzfSR7aG91cn0ke3RlbXAubWludXRlc30ke21pbnV0ZX0ke3RlbXAuc2Vjb25kc30ke3NlY29uZH1gXHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIOagvOW8j+WMluaXtumXtFxyXG4gICAqIEBwYXJhbSBkYXRlIERhdGVcclxuICAgKiBAcGFyYW0gZm9ybWF0IOagvOW8j1xyXG4gICAqL1xyXG4gIHB1YmxpYyBEYXRlRm9ybWF0KGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nID0gJ3l5eXktTU0tZGQgaGg6bW06c3MnKTogc3RyaW5nIHtcclxuICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXHJcbiAgICBsZXQgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxID4gOSA/IGRhdGUuZ2V0TW9udGgoKSArIDEgOiBgMCR7ZGF0ZS5nZXRNb250aCgpICsgMX1gXHJcbiAgICBsZXQgbW9udGgyID0gZGF0ZS5nZXRNb250aCgpICsgMVxyXG4gICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpID4gOSA/IGRhdGUuZ2V0RGF0ZSgpIDogYDAke2RhdGUuZ2V0RGF0ZSgpfWBcclxuICAgIGxldCBkYXkyID0gZGF0ZS5nZXREYXRlKClcclxuICAgIGxldCBob3VyID0gZGF0ZS5nZXRIb3VycygpID4gOSA/IGRhdGUuZ2V0SG91cnMoKSA6IGAwJHtkYXRlLmdldEhvdXJzKCl9YFxyXG4gICAgbGV0IGhvdXIyID0gZGF0ZS5nZXRIb3VycygpXHJcbiAgICBsZXQgbWludXRlID0gZGF0ZS5nZXRNaW51dGVzKCkgPiA5ID8gZGF0ZS5nZXRNaW51dGVzKCkgOiBgMCR7ZGF0ZS5nZXRNaW51dGVzKCl9YFxyXG4gICAgbGV0IG1pbnV0ZTIgPSBkYXRlLmdldE1pbnV0ZXMoKVxyXG4gICAgbGV0IHNlY29uZCA9IGRhdGUuZ2V0U2Vjb25kcygpID4gOSA/IGRhdGUuZ2V0U2Vjb25kcygpIDogYDAke2RhdGUuZ2V0U2Vjb25kcygpfWBcclxuICAgIGxldCBzZWNvbmQyID0gZGF0ZS5nZXRTZWNvbmRzKClcclxuXHJcbiAgICByZXR1cm4gZm9ybWF0XHJcbiAgICAgIC5yZXBsYWNlKC95eXl5LywgYCR7eWVhcn1gKVxyXG4gICAgICAucmVwbGFjZSgvTU0vLCBgJHttb250aH1gKVxyXG4gICAgICAucmVwbGFjZSgvTS8sIGAke21vbnRoMn1gKVxyXG4gICAgICAucmVwbGFjZSgvZGQvLCBgJHtkYXl9YClcclxuICAgICAgLnJlcGxhY2UoL2QvLCBgJHtkYXkyfWApXHJcbiAgICAgIC5yZXBsYWNlKC9oaC8sIGAke2hvdXJ9YClcclxuICAgICAgLnJlcGxhY2UoL2gvLCBgJHtob3VyMn1gKVxyXG4gICAgICAucmVwbGFjZSgvbW0vLCBgJHttaW51dGV9YClcclxuICAgICAgLnJlcGxhY2UoL20vLCBgJHttaW51dGUyfWApXHJcbiAgICAgIC5yZXBsYWNlKC9zcy8sIGAke3NlY29uZH1gKVxyXG4gICAgICAucmVwbGFjZSgvcy8sIGAke3NlY29uZDJ9YClcclxuICB9XHJcbiAgLyoqXHJcbiAgICog6I635Y+W5b2T5YmNdXRj5aSpMOeCuVxyXG4gICAqL1xyXG4gIHB1YmxpYyBVVENEYXRlKCk6IERhdGUge1xyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKVxyXG4gICAgbm93LnNldFVUQ0hvdXJzKDApXHJcbiAgICBub3cuc2V0VVRDTWludXRlcygwKVxyXG4gICAgbm93LnNldFVUQ1NlY29uZHMoMClcclxuICAgIG5vdy5zZXRVVENNaWxsaXNlY29uZHMoMClcclxuICAgIHJldHVybiBub3dcclxuICB9XHJcbiAgLyoqXHJcbiAgICog6I635Y+W5b2T5YmN5pe26Ze05Yiw5YiwMTk3MC0xLTHnmoTlpKnmlbDvvIh1dGPvvIlcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0VVRDRGF0ZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvICgyNCAqIDYwICogNjAgKiAxMDAwKSlcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgdiBmcm9tICcuL1ZpZXdNZ3InXHJcbi8qKlxyXG4gKiBNVkNcclxuICogW1xyXG4gKiAge1xyXG4gKiAgICB2aWV3S2V5LFxyXG4gKiAgICBWaWV3LFxyXG4gKiAgICB2aWV3LFZpZXflrp7kvotcclxuICogICAgTGF5ZXIsXHJcbiAqICAgIGxheWVyLExheWVy5a6e5L6LXHJcbiAqICAgIGV2ZW50LFxyXG4gKiAgfVxyXG4gKiBdXHJcbiAqL1xyXG5jb25zdCBNVkMgPSBbXVxyXG5leHBvcnQgY29uc3QgZmluZEJ5Vmlld0tleSA9IHZpZXdLZXkgPT4gTVZDLmZpbmQoaXRlbSA9PiBpdGVtLnZpZXdLZXkgPT09IHZpZXdLZXkpXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVNVkNJdGVtID0gKHsgdmlld0tleSwgLi4ucHJvcCB9KSA9PiB7XHJcbiAgY29uc3QgaW5kZXggPSBNVkMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS52aWV3S2V5ID09PSB2aWV3S2V5KVxyXG4gIGxldCBtdmNcclxuICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgY29uc3QgaXRlbSA9IE1WQ1tpbmRleF1cclxuICAgIG12YyA9IHsgLi4uaXRlbSwgLi4ucHJvcCB9XHJcbiAgICBNVkMuc3BsaWNlKGluZGV4LCAxLCBtdmMpXHJcbiAgfSBlbHNlIHtcclxuICAgIG12YyA9IHsgdmlld0tleSwgLi4ucHJvcCB9XHJcbiAgICBNVkMucHVzaChtdmMpXHJcbiAgfVxyXG4gIHJldHVybiBtdmNcclxufVxyXG5sZXQgVUkgPSBMYXlhLnN0YWdlXHJcbmNvbnN0IFJlZ2lzdGVyTVZDID0gTGF5ZXIgPT4ge1xyXG4gIHJldHVybiBWaWV3ID0+IHtcclxuICAgIHVwZGF0ZU1WQ0l0ZW0oe1xyXG4gICAgICB2aWV3S2V5OiBWaWV3LnZpZXdLZXksXHJcbiAgICAgIExheWVyLFxyXG4gICAgICBWaWV3LFxyXG4gICAgfSlcclxuICAgIHJldHVybiBWaWV3XHJcbiAgfVxyXG59XHJcbmNvbnN0IHNldFVJUm9vdCA9IHJvb3QgPT4ge1xyXG4gIFVJID0gcm9vdFxyXG59XHJcbmNvbnN0IHZpZXdNZ3IgPSB2Lm12Yy52aWV3TWdyXHJcbmNvbnN0IG9wZW5WaWV3ID0gdi5tdmMub3BlblZpZXdcclxuY29uc3QgY2xvc2VWaWV3ID0gdi5tdmMuY2xvc2VWaWV3XHJcbmV4cG9ydCB7IHZpZXdNZ3IsIG9wZW5WaWV3LCBjbG9zZVZpZXcsIFJlZ2lzdGVyTVZDLCBzZXRVSVJvb3QsIE1WQywgVUkgfVxyXG4iLCJpbXBvcnQgeyB1cGRhdGVNVkNJdGVtIH0gZnJvbSAnLi9NdmNNZ3InXHJcblxyXG5leHBvcnQgY29uc3QgQ2xpY2sgPSAodWksIC4uLmFyZ3MpID0+IHtcclxuICByZXR1cm4gKFZpZXcsIG5hbWUsIGRlc2NyaXB0b3IpID0+IHtcclxuICAgIGNvbnN0IEV2ZW50VHlwZSA9IExheWEuRXZlbnQuQ0xJQ0tcclxuICAgIGNvbnN0IG12YyA9IHVwZGF0ZU1WQ0l0ZW0oeyB2aWV3S2V5OiBWaWV3LmNvbnN0cnVjdG9yLnZpZXdLZXkgfSlcclxuICAgIG12Yy5ldmVudCA9IG12Yy5ldmVudCB8fCB7fVxyXG4gICAgY29uc3QgZXZlbnQgPSBtdmMuZXZlbnRcclxuICAgIGV2ZW50W0V2ZW50VHlwZV0gPSBldmVudFtFdmVudFR5cGVdIHx8IHt9XHJcbiAgICBjb25zdCBldmVudFVJID0gZXZlbnRbRXZlbnRUeXBlXVxyXG4gICAgZXZlbnRVSVt1aV0gPSBldmVudFVJW3VpXSB8fCBbXVxyXG4gICAgZXZlbnRVSVt1aV0ucHVzaCh7IGZ1bmM6IGRlc2NyaXB0b3IudmFsdWUsIGFyZzogYXJncyB9KVxyXG5cclxuICAgIHJldHVybiBkZXNjcmlwdG9yXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYmluZEV2ZW50ID0gbXZjID0+IHtcclxuICBpZiAobXZjLmV2ZW50KSB7XHJcbiAgICBPYmplY3QuZW50cmllcyhtdmMuZXZlbnQpLmZvckVhY2goZXZlbnQgPT4ge1xyXG4gICAgICBjb25zdCB0eXBlID0gZXZlbnRbMF1cclxuICAgICAgY29uc3QgZXZlbnRVSSA9IGV2ZW50WzFdXHJcbiAgICAgIE9iamVjdC5lbnRyaWVzKGV2ZW50VUkpLmZvckVhY2goZXZlbnRVSSA9PiB7XHJcbiAgICAgICAgY29uc3QgdWkgPSBldmVudFVJWzBdXHJcbiAgICAgICAgY29uc3QgZnVuYyA9IGV2ZW50VUlbMV1cclxuICAgICAgICBmdW5jLmZvckVhY2goZnVuYyA9PiB7XHJcbiAgICAgICAgICBtdmMudmlld1t1aV0ub24odHlwZSwgbXZjLnZpZXcsICgpID0+IHtcclxuICAgICAgICAgICAgZnVuYy5mdW5jLmFwcGx5KG12Yy52aWV3LCBmdW5jLmFyZylcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElWaWV3IH0gZnJvbSAnLi9pbnRlcmZhY2UvSVZpZXcnXG5cbmltcG9ydCB7IElMYXllciB9IGZyb20gJy4vaW50ZXJmYWNlL0lMYXllcidcblxuaW1wb3J0IHsgVUksIGZpbmRCeVZpZXdLZXkgfSBmcm9tICcuL012Y01ncidcbmltcG9ydCB7IGJpbmRFdmVudCB9IGZyb20gJy4vVUlFdmVudCdcblxuZXhwb3J0IG1vZHVsZSBtdmMge1xuICBjbGFzcyBWaWV3TWdyIHtcbiAgICBwcml2YXRlIHZpZXdzOiBNYXA8c3RyaW5nLCBJVmlldz4gPSBuZXcgTWFwPHN0cmluZywgSVZpZXc+KClcbiAgICBwcml2YXRlIGxheWVyczogTWFwPHN0cmluZywgSUxheWVyPiA9IG5ldyBNYXA8c3RyaW5nLCBJTGF5ZXI+KClcbiAgICBwcml2YXRlIG9wZW5WaWV3czogTWFwPHN0cmluZywgSVZpZXc+ID0gbmV3IE1hcDxzdHJpbmcsIElWaWV3PigpXG5cbiAgICBwdWJsaWMgZ2V0VmlldyhrZXkpOiBJVmlldyB7XG4gICAgICByZXR1cm4gdGhpcy52aWV3cy5nZXQoa2V5KVxuICAgIH1cbiAgICBwdWJsaWMgc2V0VmlldyhrZXksIHZpZXc6IElWaWV3KTogdm9pZCB7XG4gICAgICB0aGlzLnZpZXdzLnNldChrZXksIHZpZXcpXG4gICAgfVxuICAgIHB1YmxpYyBnZXRMYXllcihMYXllcik6IElMYXllciB7XG4gICAgICBsZXQgbGF5ZXIgPSB0aGlzLmxheWVycy5nZXQoTGF5ZXIubGF5ZXJLZXkpXG4gICAgICBpZiAobGF5ZXIpIHJldHVybiBsYXllclxuICAgICAgbGF5ZXIgPSB0aGlzLmNyZWF0ZUxheWVyKExheWVyKVxuICAgICAgdGhpcy5zZXRMYXllcihMYXllci5sYXllcktleSwgbGF5ZXIpXG4gICAgICByZXR1cm4gbGF5ZXJcbiAgICB9XG4gICAgcHVibGljIHNldExheWVyKGtleSwgbGF5ZXI6IElMYXllcik6IHZvaWQge1xuICAgICAgdGhpcy5sYXllcnMuc2V0KGtleSwgbGF5ZXIpXG4gICAgfVxuXG4gICAgcHVibGljIG9wZW5WaWV3KFZpZXcsIC4uLmFyZ3MpOiB2b2lkIHtcbiAgICAgIGxldCBfdmlldyA9IHRoaXMub3BlblZpZXdzLmdldChWaWV3LnZpZXdLZXkpXG4gICAgICBpZiAoX3ZpZXcpIHtcbiAgICAgICAgX3ZpZXcub25PcGVuLmFwcGx5KF92aWV3LCBhcmdzKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIF92aWV3ID0gdGhpcy5nZXRWaWV3KFZpZXcudmlld0tleSlcbiAgICAgIGlmIChfdmlldykge1xuICAgICAgICBfdmlldy5sYXllci5vcGVuVmlldyhfdmlldywgLi4uYXJncylcbiAgICAgICAgdGhpcy5vcGVuVmlld3Muc2V0KFZpZXcudmlld0tleSwgX3ZpZXcpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgX3ZpZXcgPSB0aGlzLmNyZWF0ZVZpZXcoVmlldylcbiAgICAgIHRoaXMub3BlblZpZXdzLnNldChWaWV3LnZpZXdLZXksIF92aWV3KVxuICAgICAgX3ZpZXcubGF5ZXIub3BlblZpZXcoX3ZpZXcsIC4uLmFyZ3MpXG4gICAgfVxuICAgIHByaXZhdGUgY3JlYXRlVmlldyhWaWV3KSB7XG4gICAgICBjb25zdCBtdmMgPSBmaW5kQnlWaWV3S2V5KFZpZXcudmlld0tleSlcbiAgICAgIGNvbnN0IGxheWVyID0gdGhpcy5nZXRMYXllcihtdmMuTGF5ZXIpXG5cbiAgICAgIGxldCBfdmlldyA9IG5ldyBtdmMuVmlldygpXG4gICAgICBfdmlldy5sYXllciA9IGxheWVyXG4gICAgICBtdmMudmlldyA9IF92aWV3XG4gICAgICBtdmMubGF5ZXIgPSBsYXllclxuICAgICAgYmluZEV2ZW50KG12YylcblxuICAgICAgdGhpcy5zZXRWaWV3KG12Yy52aWV3S2V5LCBfdmlldylcbiAgICAgIGlmIChfdmlldy5pbml0KSBfdmlldy5pbml0KClcbiAgICAgIHJldHVybiBfdmlld1xuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZUxheWVyKExheWVyKSB7XG4gICAgICBjb25zdCBfbGF5ZXIgPSBuZXcgTGF5ZXIoVUkpXG4gICAgICBfbGF5ZXIuek9yZGVyID0gTGF5ZXIubGF5ZXJLZXlcbiAgICAgIFVJLmFkZENoaWxkKF9sYXllcilcbiAgICAgIHJldHVybiBfbGF5ZXJcbiAgICB9XG4gICAgcHVibGljIGNsb3NlVmlldyhWaWV3T3JLZXlPckluczogYW55LCAuLi5hcmdzKTogdm9pZCB7XG4gICAgICBsZXQgX3ZpZXdcbiAgICAgIGlmIChWaWV3T3JLZXlPcklucy52aWV3S2V5KSB7XG4gICAgICAgIF92aWV3ID0gdGhpcy5nZXRWaWV3KFZpZXdPcktleU9ySW5zLnZpZXdLZXkpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZ2V0VmlldyhWaWV3T3JLZXlPcklucykpIHtcbiAgICAgICAgX3ZpZXcgPSB0aGlzLmdldFZpZXcoVmlld09yS2V5T3JJbnMpXG4gICAgICB9IGVsc2UgaWYgKFZpZXdPcktleU9ySW5zLmNvbnN0cnVjdG9yLnZpZXdLZXkpIHtcbiAgICAgICAgX3ZpZXcgPSB0aGlzLmdldFZpZXcoVmlld09yS2V5T3JJbnMuY29uc3RydWN0b3Iudmlld0tleSlcbiAgICAgIH1cbiAgICAgIGlmIChfdmlldykge1xuICAgICAgICBfdmlldy5sYXllci5jbG9zZVZpZXcoX3ZpZXcsIC4uLmFyZ3MpXG4gICAgICAgIHRoaXMub3BlblZpZXdzLmRlbGV0ZShfdmlldy5jb25zdHJ1Y3Rvci52aWV3S2V5KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGlzT3BlbihWaWV3T3JLZXlPcklucyk6IGJvb2xlYW4ge1xuICAgICAgbGV0IF92aWV3XG4gICAgICBpZiAoVmlld09yS2V5T3JJbnMudmlld0tleSkge1xuICAgICAgICBfdmlldyA9IHRoaXMub3BlblZpZXdzLmdldChWaWV3T3JLZXlPcklucy52aWV3S2V5KVxuICAgICAgfSBlbHNlIGlmICh0aGlzLm9wZW5WaWV3cy5nZXQoVmlld09yS2V5T3JJbnMpKSB7XG4gICAgICAgIF92aWV3ID0gdGhpcy5vcGVuVmlld3MuZ2V0KFZpZXdPcktleU9ySW5zKVxuICAgICAgfSBlbHNlIGlmIChWaWV3T3JLZXlPcklucy5jb25zdHJ1Y3Rvci52aWV3S2V5KSB7XG4gICAgICAgIF92aWV3ID0gdGhpcy5vcGVuVmlld3MuZ2V0KFZpZXdPcktleU9ySW5zLmNvbnN0cnVjdG9yLnZpZXdLZXkpXG4gICAgICB9XG4gICAgICByZXR1cm4gISFfdmlld1xuICAgIH1cbiAgfVxuICBleHBvcnQgY29uc3Qgdmlld01nciA9IG5ldyBWaWV3TWdyKClcbiAgZXhwb3J0IGNvbnN0IG9wZW5WaWV3ID0gKFZpZXcsIC4uLmFyZ3MpID0+IHtcbiAgICB2aWV3TWdyLm9wZW5WaWV3KFZpZXcsIC4uLmFyZ3MpXG4gIH1cblxuICBleHBvcnQgY29uc3QgY2xvc2VWaWV3ID0gKFZpZXdPcktleU9ySW5zLCAuLi5hcmdzKSA9PiB7XG4gICAgdmlld01nci5jbG9zZVZpZXcoVmlld09yS2V5T3JJbnMsIC4uLmFyZ3MpXG4gIH1cbn1cbiIsImltcG9ydCB7IElWaWV3IH0gZnJvbSAnLi4vaW50ZXJmYWNlL0lWaWV3J1xyXG5pbXBvcnQgeyBMYXllckNvbnN0IH0gZnJvbSAnLi4vLi4vY29uc3QvTGF5ZXJDb25zdCdcclxuaW1wb3J0IHsgSUxheWVyIH0gZnJvbSAnLi4vaW50ZXJmYWNlL0lMYXllcidcclxuZXhwb3J0IGNsYXNzIEJhc2VMYXllciBleHRlbmRzIExheWEuU3ByaXRlIGltcGxlbWVudHMgSUxheWVyIHtcclxuICBwcm90ZWN0ZWQgb3duU2NlbmU6IExheWEuU2NlbmVcclxuICBjb25zdHJ1Y3RvcihzY2VuZTogTGF5YS5TY2VuZSkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy5vd25TY2VuZSA9IHNjZW5lXHJcbiAgICB0aGlzLndpZHRoID0gdGhpcy5vd25TY2VuZS53aWR0aFxyXG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLm93blNjZW5lLmhlaWdodFxyXG4gICAgdGhpcy5oaXRUZXN0UHJpb3IgPSB0cnVlXHJcbiAgICB0aGlzLm1vdXNlVGhyb3VnaCA9IHRydWVcclxuICAgIHRoaXMubW91c2VFbmFibGVkID0gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGxheWVyS2V5ID0gTGF5ZXJDb25zdC5iYXNlXHJcbiAgcHVibGljIG9wZW5WaWV3KHZpZXc6IElWaWV3LCAuLi5hcmdzKTogdm9pZCB7XHJcbiAgICBpZiAodmlldy5vbk9wZW4pIHtcclxuICAgICAgdmlldy5vbk9wZW4uYXBwbHkodmlldywgYXJncylcclxuICAgIH1cclxuICAgIHRoaXMubW91c2VUaHJvdWdoID0gZmFsc2VcclxuICAgIHRoaXMuYWRkQ2hpbGQodmlldylcclxuICB9XHJcbiAgcHVibGljIGNsb3NlVmlldyh2aWV3OiBJVmlldyk6IHZvaWQge1xyXG4gICAgaWYgKHZpZXcub25DbG9zZSkge1xyXG4gICAgICB2aWV3Lm9uQ2xvc2UoKVxyXG4gICAgfVxyXG4gICAgdGhpcy5yZW1vdmVDaGlsZCh2aWV3KVxyXG4gICAgdGhpcy5tb3VzZVRocm91Z2ggPSB0aGlzLl9jaGlsZHJlbi5sZW5ndGggPT09IDBcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQmFzZUxheWVyIH0gZnJvbSAnLi9CYXNlTGF5ZXInXHJcbmltcG9ydCB7IElMYXllciB9IGZyb20gJy4uL2ludGVyZmFjZS9JTGF5ZXInXHJcbmltcG9ydCB7IExheWVyQ29uc3QgfSBmcm9tICcuLi8uLi9jb25zdC9MYXllckNvbnN0J1xyXG5pbXBvcnQgeyBjbG9zZVZpZXcgfSBmcm9tICcuLi9NdmNNZ3InXHJcbmNsYXNzIE1hc2sgZXh0ZW5kcyBMYXlhLkltYWdlIHtcclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnNraW4gPSAnY29tcC9ibGFuay5wbmcnXHJcbiAgICB0aGlzLnNpemVHcmlkID0gJzIsMiwyLDInXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEaWFsb2dMYXllciBleHRlbmRzIEJhc2VMYXllciBpbXBsZW1lbnRzIElMYXllciB7XHJcbiAgLy8gcHJpdmF0ZSBtTWFza1xyXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBMYXlhLlNjZW5lKSB7XHJcbiAgICBzdXBlcihzY2VuZSlcclxuICB9XHJcbiAgc3RhdGljIGxheWVyS2V5ID0gTGF5ZXJDb25zdC5kaWFsb2dcclxuXHJcbiAgcHJpdmF0ZSBtYXNrczogTWFwPHN0cmluZywgTGF5YS5JbWFnZT4gPSBuZXcgTWFwKClcclxuXHJcbiAgcHVibGljIG9wZW5WaWV3KHZpZXc6IGFueSwgLi4uYXJnczogYW55W10pOiB2b2lkIHtcclxuICAgIGxldCBtYXNrID0gdGhpcy5tYXNrcy5nZXQodmlldy5jb25zdHJ1Y3Rvci52aWV3S2V5KVxyXG4gICAgaWYgKCFtYXNrKSB7XHJcbiAgICAgIG1hc2sgPSBuZXcgTWFzaygpXHJcbiAgICAgIG1hc2sub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgIGNsb3NlVmlldyh2aWV3KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgbWFzay53aWR0aCA9IHRoaXMud2lkdGhcclxuICAgIG1hc2suaGVpZ2h0ID0gdGhpcy5oZWlnaHRcclxuXHJcbiAgICB0aGlzLm1hc2tzLnNldCh2aWV3LmNvbnN0cnVjdG9yLnZpZXdLZXksIG1hc2spXHJcbiAgICB0aGlzLmFkZENoaWxkKG1hc2spXHJcbiAgICBzdXBlci5vcGVuVmlldy5hcHBseSh0aGlzLCBbdmlldywgLi4uYXJnc10pXHJcblxyXG4gICAgdmlldy5hbmNob3JYID0gMC41XHJcbiAgICB2aWV3LmFuY2hvclkgPSAwLjVcclxuICAgIHZpZXcueCA9IHZpZXcud2lkdGggLyAyXHJcbiAgICB2aWV3LnkgPSB2aWV3LmhlaWdodCAvIDJcclxuICAgIHZpZXcubW91c2VUaHJvdWdoID0gdHJ1ZVxyXG4gICAgbGV0IHR3ZWVuID0gbmV3IExheWEuVHdlZW4oKVxyXG4gICAgdmlldy5zY2FsZVggPSAwLjhcclxuICAgIHZpZXcuc2NhbGVZID0gMC44XHJcbiAgICB0d2Vlbi50byhcclxuICAgICAgdmlldyxcclxuICAgICAgeyBzY2FsZVg6IDEuMDUsIHNjYWxlWTogMS4wNSB9LFxyXG4gICAgICAxMDAsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG5ldyBMYXlhLkhhbmRsZXIodGhpcywgKCkgPT4ge1xyXG4gICAgICAgIGxldCB0d2VlbiA9IG5ldyBMYXlhLlR3ZWVuKClcclxuICAgICAgICB0d2Vlbi50byh2aWV3LCB7IHNjYWxlWDogMSwgc2NhbGVZOiAxIH0sIDEwMCwgbnVsbClcclxuICAgICAgfSksXHJcbiAgICApXHJcbiAgfVxyXG4gIHB1YmxpYyBjbG9zZVZpZXcodmlldzogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMubWFza3MuZ2V0KHZpZXcuY29uc3RydWN0b3Iudmlld0tleSkpXHJcbiAgICBzdXBlci5jbG9zZVZpZXcodmlldylcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQmFzZUxheWVyIH0gZnJvbSAnLi9CYXNlTGF5ZXInXHJcblxyXG5pbXBvcnQgeyBJVmlldyB9IGZyb20gJy4uL2ludGVyZmFjZS9JVmlldydcclxuXHJcbmltcG9ydCB7IExheWVyQ29uc3QgfSBmcm9tICcuLi8uLi9jb25zdC9MYXllckNvbnN0J1xyXG5cclxuY29uc3QgZGlzID0gMTAwXHJcbmNvbnN0IHRpbWUgPSAyNDBcclxuZXhwb3J0IGNsYXNzIFZpZXdMYXllciBleHRlbmRzIEJhc2VMYXllciB7XHJcbiAgY29uc3RydWN0b3Ioc2NlbmU6IExheWEuU2NlbmUpIHtcclxuICAgIHN1cGVyKHNjZW5lKVxyXG4gIH1cclxuICBzdGF0aWMgbGF5ZXJLZXkgPSBMYXllckNvbnN0LnZpZXdcclxuICBwcml2YXRlIG9wZW5WaWV3czogSVZpZXdbXSA9IFtdXHJcbiBcclxuICBwdWJsaWMgb3BlblZpZXcodmlldzogYW55LCAuLi5hcmdzKSB7XHJcbiAgICBsZXQgbGFzdFZpZXc6IExheWEuU3ByaXRlXHJcbiAgICBjb25zdCB0d2VlbjEgPSBuZXcgTGF5YS5Ud2VlbigpXHJcbiAgICBpZiAodGhpcy5vcGVuVmlld3MubGVuZ3RoKSB7XHJcbiAgICAgIGxhc3RWaWV3ID0gdGhpcy5vcGVuVmlld3NbdGhpcy5vcGVuVmlld3MubGVuZ3RoIC0gMV1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxhc3RWaWV3ID0gdGhpcy5vd25TY2VuZVxyXG4gICAgfVxyXG4gICAgbGFzdFZpZXcueCA9IHRoaXMub3duU2NlbmUgPT09IGxhc3RWaWV3ID8gMCA6IGRpc1xyXG4gICAgdHdlZW4xLnRvKFxyXG4gICAgICBsYXN0VmlldyxcclxuICAgICAgeyB4OiB0aGlzLm93blNjZW5lID09PSBsYXN0VmlldyA/IC1kaXMgOiAwIH0sXHJcbiAgICAgIHRpbWUsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG5ldyBMYXlhLkhhbmRsZXIobGFzdFZpZXcsICgpID0+IHtcclxuICAgICAgICBpZiAobGFzdFZpZXcgIT09IHRoaXMub3duU2NlbmUpIGxhc3RWaWV3LnJlbW92ZVNlbGYoKVxyXG4gICAgICB9KSxcclxuICAgIClcclxuICAgIHRoaXMub3BlblZpZXdzLnB1c2godmlldylcclxuICAgIHN1cGVyLm9wZW5WaWV3LmFwcGx5KHRoaXMsIFt2aWV3LCAuLi5hcmdzXSlcclxuICAgIGNvbnN0IHR3ZWVuMiA9IG5ldyBMYXlhLlR3ZWVuKClcclxuICAgIHZpZXcueCA9IHRoaXMud2lkdGhcclxuICAgIHR3ZWVuMi50byhcclxuICAgICAgdmlldyxcclxuICAgICAgeyB4OiBkaXMgfSxcclxuICAgICAgdGltZSxcclxuICAgICAgbnVsbCxcclxuICAgICAgbmV3IExheWEuSGFuZGxlcih2aWV3LCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHZpZXcuYWZ0ZXJPcGVuKSB7XHJcbiAgICAgICAgICB2aWV3LmFmdGVyT3Blbi5jYWxsKHZpZXcpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgIClcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9zZVZpZXcodmlldzogYW55KSB7XHJcbiAgICBsZXQgbGFzdFZpZXdcclxuICAgIGNvbnN0IHR3ZWVuMSA9IG5ldyBMYXlhLlR3ZWVuKClcclxuICAgIHRoaXMub3BlblZpZXdzLnBvcCgpXHJcbiAgICBpZiAodGhpcy5vcGVuVmlld3MubGVuZ3RoID4gMCkge1xyXG4gICAgICBsYXN0VmlldyA9IHRoaXMub3BlblZpZXdzW3RoaXMub3BlblZpZXdzLmxlbmd0aCAtIDFdXHJcbiAgICAgIGxhc3RWaWV3LnpPcmRlciA9IHZpZXcuek9yZGVyIC0gMVxyXG4gICAgICBsYXN0Vmlldy5sYXllci5hZGRDaGlsZChsYXN0VmlldylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxhc3RWaWV3ID0gdGhpcy5vd25TY2VuZVxyXG4gICAgfVxyXG5cclxuICAgIGxhc3RWaWV3LnggPSBsYXN0VmlldyA9PT0gdGhpcy5vd25TY2VuZSA/IC1kaXMgOiAwXHJcblxyXG4gICAgdHdlZW4xLnRvKGxhc3RWaWV3LCB7IHg6IGxhc3RWaWV3ID09PSB0aGlzLm93blNjZW5lID8gMCA6IGRpcyB9LCB0aW1lKVxyXG4gICAgY29uc3QgdHdlZW4yID0gbmV3IExheWEuVHdlZW4oKVxyXG4gICAgdmlldy54ID0gZGlzXHJcbiAgICB0d2VlbjIudG8oXHJcbiAgICAgIHZpZXcsXHJcbiAgICAgIHsgeDogdGhpcy53aWR0aCB9LFxyXG4gICAgICB0aW1lLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsICgpID0+IHtcclxuICAgICAgICBzdXBlci5jbG9zZVZpZXcodmlldylcclxuICAgICAgfSksXHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHN0b3JlIH0gZnJvbSAnLi4vLi4vLi4vZ2FtZS9zdG9yZS9zdG9yZSdcblxuZXhwb3J0IG5hbWVzcGFjZSBLVUkge1xuICBleHBvcnQgY2xhc3MgQmFzZVZpZXcgZXh0ZW5kcyBMYXlhLlZpZXcge1xuICAgIHB1YmxpYyB1bnN1YnNjcmliZVxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKVxuICAgIH1cblxuICAgIHB1YmxpYyBpbml0KCkge1xuICAgICAgdGhpcy5pbml0RGF0YSgpXG4gICAgICB0aGlzLmluaXRSZXMoKVxuICAgICAgdGhpcy5pbml0VmlldygpXG4gICAgfVxuICAgIHB1YmxpYyBpbml0RGF0YSgpIHt9XG4gICAgcHVibGljIGluaXRSZXMoKSB7fVxuICAgIHB1YmxpYyBpbml0VmlldygpIHt9XG4gICAgcHVibGljIG9uT3BlbiguLi5hcmdzKSB7XG4gICAgICB0aGlzLnVwZGF0ZVZpZXcoc3RvcmUuZ2V0U3RhdGUoKSlcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVWaWV3LmJpbmQodGhpcykoc3RvcmUuZ2V0U3RhdGUoKSkpXG4gICAgfVxuICAgIHB1YmxpYyBvbkNsb3NlKC4uLmFyZ3MpIHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUoKVxuICAgIH1cbiAgICBwdWJsaWMgdXBkYXRlVmlldyhzdGF0ZT86IGFueSkge1xuICAgICAgdGhpcy5zdGF0ZUxpc3RlbmVyLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQub25TdGF0ZUNoYW5nZShzdGF0ZSlcbiAgICAgIH0pXG4gICAgICB0aGlzLm9uVXBkYXRlVmlldyhzdGF0ZSlcbiAgICB9XG4gICAgcHVibGljIG9uVXBkYXRlVmlldyhzdGF0ZT86IGFueSkge31cblxuICAgIHB1YmxpYyBzdGF0ZUxpc3RlbmVyOiB7IG9uU3RhdGVDaGFuZ2U6IEZ1bmN0aW9uIH1bXSA9IFtdXG4gIH1cbn1cbiIsImltcG9ydCB7IERpc3BhdGNoZXIgfSBmcm9tICcuL2Rpc3BhdGNoZXIvRGlzcGF0Y2hlcidcclxuXHJcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlIHtcclxuICBwdWJsaWMgc3RhdGljIEluaXQoKTogdm9pZCB7XHJcblxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZGlzcGF0Y2hlcigpOiBEaXNwYXRjaGVyIHtcclxuICAgIHJldHVybiBEaXNwYXRjaGVyLkNyZWF0ZU9yR2V0KClcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE9ic2VydmVyIH0gZnJvbSAnLi9PYnNlcnZlcidcbmltcG9ydCB7IFNpbmdsZXRvbiB9IGZyb20gJy4uLy4uL2Jhc2UvU2luZ2xldG9uJ1xuZXhwb3J0IGNsYXNzIERpc3BhdGNoZXIgZXh0ZW5kcyBTaW5nbGV0b24ge1xuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuX29ic2VydmVycyA9IHt9XG4gIH1cblxuICAvKipcbiAgICog5raI5oGv5YiX6KGoXG4gICAqL1xuICBwcml2YXRlIF9vYnNlcnZlcnM6IGFueVxuXG4gIHB1YmxpYyBPYnNlcnZlKHRvcGljXzogYW55LCBvYnNlcnZlcl86IGFueSwgaGFuZGxlcl86IEZ1bmN0aW9uKTogT2JzZXJ2ZXIge1xuICAgIGlmICghdGhpcy5fb2JzZXJ2ZXJzW3RvcGljX10pIHRoaXMuX29ic2VydmVyc1t0b3BpY19dID0gW11cbiAgICBsZXQgb2JzZXJ2ZXI6IE9ic2VydmVyID0gbmV3IE9ic2VydmVyKHRvcGljXywgb2JzZXJ2ZXJfLCBoYW5kbGVyXylcbiAgICB0aGlzLl9vYnNlcnZlcnNbdG9waWNfXS5wdXNoKG9ic2VydmVyKVxuICAgIHJldHVybiBvYnNlcnZlci5SZXVzZSh0b3BpY18sIG9ic2VydmVyXywgaGFuZGxlcl8pXG4gIH1cblxuICBwdWJsaWMgT2JzZXJ2ZUxpc3Qob2JzZXJ2ZXJfOiBhbnksIHRvcGljc186IGFueVtdLCBoYW5kbGVyc186IGFueVtdKTogT2JzZXJ2ZXJbXSB7XG4gICAgbGV0IGxpc3Q6IE9ic2VydmVyW10gPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9waWNzXy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlzdC5wdXNoKHRoaXMuT2JzZXJ2ZSh0b3BpY3NfW2ldLCBvYnNlcnZlcl8sIGhhbmRsZXJzX1tpXSkpXG4gICAgfVxuICAgIHJldHVybiBsaXN0XG4gIH1cblxuICBwdWJsaWMgUmVtb3ZlTGlzdChvYnM6IE9ic2VydmVyW10pOiB2b2lkIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9icy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5SZW1vdmUob2JzW2ldKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBTZW5kTXNnKHRvcGljXzogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueVtdIHtcbiAgICBpZiAoIXRoaXMuX29ic2VydmVyc1t0b3BpY19dKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGxldCByZXQ6IGFueVtdID0gW11cbiAgICB0aGlzLl9vYnNlcnZlcnNbdG9waWNfXS5mb3JFYWNoKFxuICAgICAgKGVsZW1lbnQpOiB2b2lkID0+IHtcbiAgICAgICAgcmV0LnB1c2goZWxlbWVudC5SZWN2TXNnKC4uLmFyZ3MpKVxuICAgICAgfSxcbiAgICApXG4gICAgcmV0dXJuIHJldFxuICB9XG5cbiAgcHVibGljIFJlbW92ZShvYnM6IE9ic2VydmVyKTogT2JzZXJ2ZXIge1xuICAgIGlmIChvYnMgPT0gbnVsbCkgcmV0dXJuXG4gICAgbGV0IGFycjogYW55W10gPSB0aGlzLl9vYnNlcnZlcnNbb2JzLnRvcGljXVxuXG4gICAgaWYgKCFhcnIpIHJldHVybiBudWxsXG5cbiAgICBsZXQgaW5kOiBudW1iZXIgPSBhcnIuaW5kZXhPZihvYnMpXG4gICAgaWYgKGluZCA8IDApIHJldHVybiBudWxsXG5cbiAgICBhcnIuc3BsaWNlKGluZCwgMSlcbiAgICByZXR1cm4gb2JzXG4gIH1cblxuICBwdWJsaWMgUmVtb3ZlQWxsKHRvcGljOiBhbnkpOiB2b2lkIHtcbiAgICBsZXQgYXJyOiBhbnlbXSA9IHRoaXMuX29ic2VydmVyc1t0b3BpY11cbiAgICBpZiAoIWFycikgcmV0dXJuXG4gICAgYXJyLnNwbGljZSgwLCBhcnIubGVuZ3RoKVxuICB9XG59XG5jb25zdCBkaXNwYXRjaGVyID0gbmV3IERpc3BhdGNoZXIoKVxuZXhwb3J0IHsgZGlzcGF0Y2hlciB9XG4iLCJleHBvcnQgY2xhc3MgT2JzZXJ2ZXIge1xuICBwdWJsaWMgdG9waWM6IGFueVxuICBwdWJsaWMgb2JzZXJ2ZXI6IGFueVxuICBwdWJsaWMgaGFuZGxlcjogRnVuY3Rpb25cblxuICBwdWJsaWMgY29uc3RydWN0b3IodG9waWNfOiBhbnksIG9ic2VydmVyXzogYW55LCBoYW5kbGVyXzogRnVuY3Rpb24pIHtcbiAgICB0aGlzLlJldXNlKHRvcGljXywgb2JzZXJ2ZXJfLCBoYW5kbGVyXylcbiAgfVxuXG4gIHB1YmxpYyBSZXVzZSh0b3BpY186IGFueSwgb2JzZXJ2ZXJfOiBhbnksIGhhbmRsZXJfOiBGdW5jdGlvbik6IE9ic2VydmVyIHtcbiAgICB0aGlzLnRvcGljID0gdG9waWNfXG4gICAgdGhpcy5vYnNlcnZlciA9IG9ic2VydmVyX1xuICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXJfXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHB1YmxpYyBSZWN2TXNnKC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XG4gICAgbGV0IHJldDogYW55XG4gICAgaWYgKCF0aGlzLm9ic2VydmVyKSB7XG4gICAgICByZXQgPSB0aGlzLmhhbmRsZXIoLi4uYXJncylcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0ID0gdGhpcy5oYW5kbGVyLmFwcGx5KHRoaXMub2JzZXJ2ZXIsIGFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXRcbiAgfVxufVxuIiwiaW1wb3J0IHsgc3RhdGUgfSBmcm9tICcuL3N0YXRlJ1xyXG5leHBvcnQgZW51bSBBQ1RJT05UWVBFIHtcclxuICBDSEFOR0VfVEVTVERBVEExID0gMSxcclxuICBDSEFOR0VfVEVTVERBVEEyLFxyXG4gIENIQU5HRV9VU0VSTkFNRSxcclxuICBDSEFOR0VfVE9LRU4sXHJcbn1cclxuZXhwb3J0IGNvbnN0IEFjdGlvblR5cGVzID0ge1xyXG4gIGxvZ2luUmVxdWVzdDogJ2xvZ2luUmVxdWVzdCcsXHJcbiAgbG9naW5TdWNjZXNzOiAnbG9naW5TdWNjZXNzJyxcclxuICBsb2dpbkZhaWw6ICdsb2dpbkZhaWwnLFxyXG4gIGdldFRvZG9SZXF1ZXN0OiAnZ2V0VG9kb1JlcXVlc3QnLFxyXG4gIGFkZFRvZG9SZXF1ZXN0OiAnYWRkVG9kb1JlcXVlc3QnLFxyXG4gIGFkZFRvZG86ICdhZGRUb2RvJyxcclxuICBkZWxldGVUb2RvOiAnZGVsZXRlVG9kbycsXHJcbiAgZGVsZXRlVG9kb1JlcXVlc3Q6ICdkZWxldGVUb2RvUmVxdWVzdCcsXHJcbiAgcmVnaXN0ZXJSZXF1ZXN0OiAncmVnaXN0ZXJSZXF1ZXN0JyxcclxufVxyXG5leHBvcnQgY29uc3QgY2hhbmdlRGF0YTEgPSBkYXRhMSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFDVElPTlRZUEUuQ0hBTkdFX1RFU1REQVRBMSxcclxuICAgIHRlc3REYXRhOiB7IC4uLnN0YXRlLnRlc3REYXRhLCBkYXRhMSB9LFxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgY2hhbmdlRGF0YTIgPSBkYXRhMiA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFDVElPTlRZUEUuQ0hBTkdFX1RFU1REQVRBMixcclxuICAgIHRlc3REYXRhOiB7IC4uLnN0YXRlLnRlc3REYXRhLCBkYXRhMiB9LFxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgY2hhbmdlVXNlcm5hbWUgPSBuYW1lID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQUNUSU9OVFlQRS5DSEFOR0VfVVNFUk5BTUUsXHJcbiAgICB1c2VyOiB7IG5hbWUgfSxcclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IGNoYW5nZVRva2VuID0gdG9rZW4gPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBQ1RJT05UWVBFLkNIQU5HRV9UT0tFTixcclxuICAgIHRva2VuLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvblJlcXVlc3QgPSAodHlwZSwgcGF5bG9hZD8pID0+ICh7XHJcbiAgdHlwZSxcclxuICBwYXlsb2FkLFxyXG59KVxyXG5leHBvcnQgY29uc3QgYWRkVG9kbyA9IHBheWxvYWQgPT4gKHtcclxuICB0eXBlOiBBY3Rpb25UeXBlcy5hZGRUb2RvLFxyXG4gIHBheWxvYWQsXHJcbn0pXHJcbmV4cG9ydCBjb25zdCBkZWxldGVUb2RvID0gcGF5bG9hZCA9PiAoe1xyXG4gIHR5cGU6IEFjdGlvblR5cGVzLmRlbGV0ZVRvZG8sXHJcbiAgcGF5bG9hZCxcclxufSlcclxuIiwiaW1wb3J0IHsgQUNUSU9OVFlQRSwgQWN0aW9uVHlwZXMgfSBmcm9tICcuL2FjdGlvbnMnXHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycywgQW55QWN0aW9uIH0gZnJvbSAncmVkdXgnXHJcbmNvbnN0IGNoYW5nZVRlc3REYXRhID0gKHN0YXRlID0geyBkYXRhMTogJ2RhdGExJywgZGF0YTI6ICdkYXRhMicgfSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBBQ1RJT05UWVBFLkNIQU5HRV9URVNUREFUQTE6XHJcbiAgICBjYXNlIEFDVElPTlRZUEUuQ0hBTkdFX1RFU1REQVRBMjpcclxuICAgICAgcmV0dXJuIHsgLi4uYWN0aW9uLnRlc3REYXRhIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG5jb25zdCBjaGFuZ2VVc2VybmFtZSA9IChzdGF0ZSA9IHsgbmFtZTogJ25vcicgfSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBBQ1RJT05UWVBFLkNIQU5HRV9VU0VSTkFNRTpcclxuICAgICAgcmV0dXJuIHsgLi4uYWN0aW9uLnVzZXIgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcbmNvbnN0IGNoYW5nZVRva2VuID0gKHN0YXRlID0gJycsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQUNUSU9OVFlQRS5DSEFOR0VfVE9LRU46XHJcbiAgICAgIHJldHVybiBhY3Rpb24udG9rZW5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG5jb25zdCBsb2dpbiA9IChzdGF0ZSA9IGZhbHNlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEFjdGlvblR5cGVzLmxvZ2luU3VjY2VzczpcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIGNhc2UgQWN0aW9uVHlwZXMubG9naW5GYWlsOlxyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG5jb25zdCBjaGFuZ2VUZXN0RGF0YTEgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHJldHVybiBzdGF0ZVxyXG59XHJcbmV4cG9ydCBjb25zdCB0b2RvID0gKHN0YXRlOiBhbnlbXSA9IFtdLCBhY3Rpb246IEFueUFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQWN0aW9uVHlwZXMuYWRkVG9kbzpcclxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkLmxlbmd0aCA+IDEgPyBbLi4uYWN0aW9uLnBheWxvYWRdIDogWy4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZF1cclxuICAgIGNhc2UgQWN0aW9uVHlwZXMuZGVsZXRlVG9kbzpcclxuICAgICAgcmV0dXJuIFsuLi5zdGF0ZS5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9PSBhY3Rpb24ucGF5bG9hZCldXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuY29uc3QgcmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoeyB0ZXN0RGF0YTogY2hhbmdlVGVzdERhdGEsIHVzZXI6IGNoYW5nZVVzZXJuYW1lLCB0b2tlbjogY2hhbmdlVG9rZW4sIHRvZG8sIGxvZ2luIH0pXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJzXHJcbiIsImltcG9ydCB7IHRha2VFdmVyeSwgY2FsbCwgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xyXG5pbXBvcnQgR2FtZUFwcCBmcm9tICcuLi8uLi9jb3JlL2dhbWUvR2FtZUFwcCdcclxuaW1wb3J0IHsgYWRkVG9kbywgQWN0aW9uVHlwZXMsIGRlbGV0ZVRvZG8sIGNoYW5nZVVzZXJuYW1lLCBjaGFuZ2VUb2tlbiB9IGZyb20gJy4vYWN0aW9ucydcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuL3N0b3JlJ1xyXG5jb25zdCBnZXRBbGxUb2RvID0gYXN5bmMgKCkgPT4gR2FtZUFwcC5mZXRjaC5nZXQoJy9hbGwnKVxyXG5cclxuY29uc3QgcG9zdEFkZFRvZG8gPSBhc3luYyBwYXlsb2FkID0+XHJcbiAgR2FtZUFwcC5mZXRjaC5wb3N0KCcvYWRkJywge1xyXG4gICAgbWVzc2FnZTogcGF5bG9hZCxcclxuICB9KVxyXG5cclxuY29uc3QgcG9zdERlbGV0ZVRvZG8gPSBhc3luYyBwYXlsb2FkID0+XHJcbiAgR2FtZUFwcC5mZXRjaC5wb3N0KCcvZGVsZXRlJywge1xyXG4gICAgaWQ6IHBheWxvYWQsXHJcbiAgfSlcclxuY29uc3QgcG9zdExvZ2luID0gYXN5bmMgcGF5bG9hZCA9PiBHYW1lQXBwLmZldGNoLnBvc3QoJy9sb2dpbicsIHBheWxvYWQpXHJcbmNvbnN0IHBvc3RSZWdpc3RlciA9IGFzeW5jIHBheWxvYWQgPT4gR2FtZUFwcC5mZXRjaC5wb3N0KCcvcmVnaXN0ZXInLCBwYXlsb2FkKVxyXG5mdW5jdGlvbiogZ2V0VG9kb3MoKSB7XHJcbiAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChnZXRBbGxUb2RvKVxyXG4gIHlpZWxkIHB1dChhZGRUb2RvKHJlc3VsdC5tYXAoaXRlbSA9PiAoeyBpZDogaXRlbS5pZCwgbWVzc2FnZTogaXRlbS5tZXNzYWdlIH0pKSkpXHJcbn1cclxuZnVuY3Rpb24qIGFkZFRvZG9zKGFjdGlvbikge1xyXG4gIGNvbnN0IHsgaWQsIG1lc3NhZ2UgfSA9IHlpZWxkIGNhbGwocG9zdEFkZFRvZG8sIGFjdGlvbi5wYXlsb2FkKVxyXG4gIHlpZWxkIHB1dChhZGRUb2RvKFt7IGlkLCBtZXNzYWdlIH1dKSlcclxufVxyXG5mdW5jdGlvbiogZGVsZXRlVG9kb3MoYWN0aW9uKSB7XHJcbiAgY29uc3QgeyBpZCB9ID0geWllbGQgY2FsbChwb3N0RGVsZXRlVG9kbywgYWN0aW9uLnBheWxvYWQpXHJcbiAgeWllbGQgcHV0KGRlbGV0ZVRvZG8oaWQpKVxyXG59XHJcbmZ1bmN0aW9uKiBsb2dpbihhY3Rpb24pIHtcclxuICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHBvc3RMb2dpbiwgYWN0aW9uLnBheWxvYWQpXHJcbiAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gIGlmIChyZXN1bHQuY29kZSA9PT0gMjAwKSB7XHJcbiAgICBjb25zb2xlLmxvZygnbG9naW4gc3VjY2VzcycpXHJcbiAgICBzdG9yZS5kaXNwYXRjaChjaGFuZ2VVc2VybmFtZShyZXN1bHQucmVzdWx0LnVzZXJuYW1lKSlcclxuICAgIHN0b3JlLmRpc3BhdGNoKGNoYW5nZVRva2VuKHJlc3VsdC5yZXN1bHQudG9rZW4pKVxyXG4gICAgc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25UeXBlcy5sb2dpblN1Y2Nlc3MgfSlcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5sb2coJ2xvZ2luIGZhaWwnKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHJlZ2lzdGVyKGFjdGlvbikge1xyXG4gIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocG9zdFJlZ2lzdGVyLCBhY3Rpb24ucGF5bG9hZClcclxuICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmVxdWVzdFRvZG8oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBY3Rpb25UeXBlcy5nZXRUb2RvUmVxdWVzdCwgZ2V0VG9kb3MpXHJcbiAgeWllbGQgdGFrZUxhdGVzdChBY3Rpb25UeXBlcy5hZGRUb2RvUmVxdWVzdCwgYWRkVG9kb3MpXHJcbiAgeWllbGQgdGFrZUxhdGVzdChBY3Rpb25UeXBlcy5kZWxldGVUb2RvUmVxdWVzdCwgZGVsZXRlVG9kb3MpXHJcbiAgeWllbGQgdGFrZUxhdGVzdChBY3Rpb25UeXBlcy5sb2dpblJlcXVlc3QsIGxvZ2luKVxyXG4gIHlpZWxkIHRha2VMYXRlc3QoQWN0aW9uVHlwZXMucmVnaXN0ZXJSZXF1ZXN0LCByZWdpc3RlcilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gIHlpZWxkKiBbd2F0Y2hSZXF1ZXN0VG9kbygpXVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBzdGF0ZSA9IHtcclxuICB0b2tlbjogJ2hlbGxvJyxcclxuICB1c2VyOiB7XHJcbiAgICBuYW1lOiAndGVzdDEnLFxyXG4gIH0sXHJcbiAgdGVzdERhdGE6IHtcclxuICAgIGRhdGExOiAnZGF0YTExMTExJyxcclxuICAgIGRhdGEyOiAnZGF0YTInLFxyXG4gICAgdGVzdERhdGEyOiB7XHJcbiAgICAgIGRhdGExOiAnMTExJyxcclxuICAgICAgdGVzdERhdGEzOiB7XHJcbiAgICAgICAgZGF0YTE6ICcyMjInLFxyXG4gICAgICAgIHRlc3REYXRhNDogJzMzMycsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdG9kbzogW10sXHJcbiAgbG9naW46IGZhbHNlLFxyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4vcmVkdWNlcidcclxuaW1wb3J0IHsgc3RhdGUgfSBmcm9tICcuL3N0YXRlJ1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSdcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4vc2FnYXMnXHJcbmNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKVxyXG5jb25zdCBlbmhhbmNlciA9IGFwcGx5TWlkZGxld2FyZShzYWdhTWlkZGxld2FyZSlcclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2Vycywgc3RhdGUgYXMgYW55LCBlbmhhbmNlcilcclxuc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKVxyXG5jb25zdCBkaXNwYXRjaCA9IHN0b3JlLmRpc3BhdGNoXHJcbmV4cG9ydCB7IHN0b3JlLCBkaXNwYXRjaCB9XHJcbiIsImltcG9ydCB7IHVpIH0gZnJvbSAnLi4vLi4vLi4vLi4vdWkvbGF5YU1heFVJJ1xuaW1wb3J0IEJQYWdlIGZyb20gJy4uL0JQYWdlL0JQYWdlJ1xuaW1wb3J0IHsgVmlld0NvbnN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9jb25zdC9WaWV3Q29uc3QnXG5pbXBvcnQgeyBCYXNlTGF5ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL212Yy9sYXllci9CYXNlTGF5ZXInXG5pbXBvcnQgeyBSZWdpc3Rlck1WQywgb3BlblZpZXcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL212Yy9NdmNNZ3InXG5pbXBvcnQgQmFzZVRlc3QgZnJvbSAnLi4vQmFzZVRlc3QnXG5pbXBvcnQgJy4uLy4uLy4uL3N0b3JlL3N0b3JlJ1xuaW1wb3J0IHsgc3RvcmUsIGRpc3BhdGNoIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvc3RvcmUnXG5pbXBvcnQgeyBBY3Rpb25UeXBlcywgYWN0aW9uUmVxdWVzdCwgZGVsZXRlVG9kbywgYWRkVG9kbyB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgeyBjaGFuZ2VEYXRhMSB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgR2FtZUFwcCBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2dhbWUvR2FtZUFwcCdcbkBSZWdpc3Rlck1WQyhCYXNlTGF5ZXIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBUGFnZSBleHRlbmRzIHVpLnZpZXcuQVBhZ2VVSSB7XG4gIHN0YXRpYyB2aWV3S2V5ID0gVmlld0NvbnN0LkFQYWdlXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmJ0bi5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKSA9PiB7XG4gICAgICBvcGVuVmlldyhCUGFnZSlcbiAgICB9KVxuICAgIHRoaXMuYmFzZUJ0bi5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKSA9PiB7XG4gICAgICBvcGVuVmlldyhCYXNlVGVzdClcbiAgICB9KVxuXG4gICAgdGhpcy50b2RvTGlzdC5yZW5kZXJIYW5kbGVyID0gbmV3IExheWEuSGFuZGxlcih0aGlzLCB0aGlzLnVwZGF0ZVRvZG8pXG4gICAgdGhpcy50b2RvTGlzdC5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCB0aGlzLnRvZG9MaXN0Q2xpY2spXG4gICAgdGhpcy5hZGRCdG4ub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgdGhpcy5hZGRUb2RvKVxuICAgIHRoaXMudGVzdEJ0bi5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKSA9PiB7XG4gICAgICBzdG9yZS5kaXNwYXRjaChjaGFuZ2VEYXRhMSgxKSlcbiAgICAgIGNvbnNvbGUubG9nKCdmaW5pc2hlZDonLCBzdG9yZS5nZXRTdGF0ZSgpKVxuICAgIH0pXG4gIH1cbiAgcHJpdmF0ZSB1cGRhdGVUb2RvKGNlbGw6IExheWEuQm94LCBpbmRleCkge1xuICAgIGNvbnN0IGxhYmVsID0gY2VsbC5nZXRDaGlsZEJ5TmFtZSgnbGFiZWwnKSBhcyBMYXlhLkxhYmVsXG4gICAgY29uc3QgZGF0YVNvdXJjZSA9IGNlbGwuZGF0YVNvdXJjZVxuICAgIGxhYmVsLnRleHQgPSBkYXRhU291cmNlLm1lc3NhZ2VcbiAgfVxuICBwcml2YXRlIHRvZG9MaXN0Q2xpY2soZSkge1xuICAgIGlmIChlLnRhcmdldC52YXIgPT09ICdkZWxldGVCdG4nKSB7XG4gICAgICBjb25zdCBib3ggPSBlLnRhcmdldC5wYXJlbnQgYXMgTGF5YS5Cb3hcbiAgICAgIC8vIHN0b3JlLmRpc3BhdGNoKGFjdGlvblJlcXVlc3QoQWN0aW9uVHlwZXMuZGVsZXRlVG9kb1JlcXVlc3QsIGJveC5kYXRhU291cmNlLmlkKSlcbiAgICAgIEdhbWVBcHAuc29ja2V0LnNlbmRFdmVudCgnZGVsZXRlJywgeyBpZDogYm94LmRhdGFTb3VyY2UuaWQgfSlcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBhZGRUb2RvKCkge1xuICAgIGlmICh0aGlzLmFkZElucHV0LnRleHQgIT09ICcnKSB7XG4gICAgICAvLyBzdG9yZS5kaXNwYXRjaChhY3Rpb25SZXF1ZXN0KEFjdGlvblR5cGVzLmFkZFRvZG9SZXF1ZXN0LCB0aGlzLmFkZElucHV0LnRleHQpKVxuICAgICAgR2FtZUFwcC5zb2NrZXQuc2VuZEV2ZW50KCdhZGQnLCB7IG1lc3NhZ2U6IHRoaXMuYWRkSW5wdXQudGV4dCB9KVxuICAgICAgdGhpcy5hZGRJbnB1dC50ZXh0ID0gJydcbiAgICB9XG4gIH1cbiAgcHVibGljIGluaXQoKSB7XG4gICAgLy8gdGhpcy5jb250cm9sbGVyLmFkZExpc3RlbmVyKFxuICAgIC8vICAgJ2NoYW5nZScsXG4gICAgLy8gICBhcmdzID0+IHtcbiAgICAvLyAgICAgdGhpcy5jb250ZW50cy50ZXh0ID0gYXJnc1swXVxuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyh0aGlzKVxuICAgIC8vICAgfSxcbiAgICAvLyAgIHRoaXMsXG4gICAgLy8gKVxuICB9XG5cbiAgcHVibGljIG9uVXBkYXRlVmlldyhzdGF0ZSkge1xuICAgIGNvbnNvbGUubG9nKHN0YXRlKVxuICAgIGNvbnN0IHsgdXNlciwgdG9rZW4sIHRlc3REYXRhLCB0b2RvIH0gPSBzdGF0ZVxuICAgIC8vIHRoaXMuY29udGVudHMudGV4dCA9IHRlc3REYXRhLmRhdGExXG4gICAgLy8gdGhpcy51c2VybmFtZS50ZXh0ID0gdXNlci5uYW1lXG4gICAgLy8gdGhpcy50b2tlbi50ZXh0ID0gdG9rZW5cbiAgICB0aGlzLnRvZG9MaXN0LmFycmF5ID0gdG9kb1xuICB9XG4gIHB1YmxpYyBvbk9wZW4oYXJncykge1xuICAgIHN1cGVyLm9uT3BlbigpXG4gICAgdmFyIGh0bWwgPSBcIjxzcGFuIHN0eWxlPSdmb250U2l6ZTozMCcgY29sb3I9JyM2N2ZjMmMnPuWvjOaWh+acrDwvc3Bhbj5cIlxuICAgIGh0bWwgKz0gXCI8aW1nIHN0eWxlPSdoZWlnaHQ6NTA7d2lkdGg6NTAnIHNyYz0nQ2hhcmFjdGVycy9UYW5rXzQucG5nJz48L2ltZz5cIlxuICAgIGh0bWwgKz0gXCI8c3BhbiBzdHlsZT0nZm9udFNpemU6MjAnIGNvbG9yPScjZmZmJz7mtYvor5U8L3NwYW4+XCJcbiAgICB0aGlzLmRkLnBvcygwLCAwKVxuICAgIHRoaXMuZGQuc3R5bGUud2lkdGggPSA2NDBcbiAgICB0aGlzLmRkLnN0eWxlLmFsaWduID0gJ2NlbnRlcidcblxuICAgIHRoaXMuZGQuaW5uZXJIVE1MID0gaHRtbFxuICAgIGNvbnNvbGUubG9nKHRoaXMuZGQpXG5cbiAgICAvLyBzdG9yZS5kaXNwYXRjaChhY3Rpb25SZXF1ZXN0KEFjdGlvblR5cGVzLmdldFRvZG9SZXF1ZXN0KSlcblxuICAgIEdhbWVBcHAuc29ja2V0LnNlbmRFdmVudCgnYWxsJylcbiAgICBHYW1lQXBwLnNvY2tldC5hZGRFdmVudCgnZGVsZXRlJywgdGhpcywgdGhpcy5yZXR1cm5EZWxldGUpXG4gICAgR2FtZUFwcC5zb2NrZXQuYWRkRXZlbnQoJ2FkZCcsIHRoaXMsIHRoaXMucmV0dXJuQWRkKVxuICAgIEdhbWVBcHAuc29ja2V0LmFkZEV2ZW50KCdhbGwnLCB0aGlzLCByZXN1bHQgPT4ge1xuICAgICAgZGlzcGF0Y2goYWRkVG9kbyhyZXN1bHQubWFwKGl0ZW0gPT4gKHsgaWQ6IGl0ZW0uaWQsIG1lc3NhZ2U6IGl0ZW0ubWVzc2FnZSB9KSkpKVxuICAgIH0pXG4gIH1cbiAgcHVibGljIG9uQ2xvc2UoKSB7XG4gICAgR2FtZUFwcC5zb2NrZXQucmVtb3ZlRXZlbnQoJ2RlbGV0ZScpXG4gICAgR2FtZUFwcC5zb2NrZXQucmVtb3ZlRXZlbnQoJ2FkZCcpXG4gICAgR2FtZUFwcC5zb2NrZXQucmVtb3ZlRXZlbnQoJ2FsbCcpXG4gIH1cbiAgcmV0dXJuRGVsZXRlKHsgaWQgfSkge1xuICAgIGRpc3BhdGNoKGRlbGV0ZVRvZG8oaWQpKVxuICB9XG4gIHJldHVybkFkZCh7IGlkLCBtZXNzYWdlIH0pIHtcbiAgICBkaXNwYXRjaChhZGRUb2RvKFt7IGlkLCBtZXNzYWdlIH1dKSlcbiAgfVxufVxuIiwiaW1wb3J0IEFQYWdlIGZyb20gJy4vQVBhZ2UnXG5pbXBvcnQgR2FtZUFwcCBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2dhbWUvR2FtZUFwcCdcbmltcG9ydCBFZmZlY3RVdGlscyBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL1V0aWxzL0VmZmVjdFV0aWxzJ1xuaW1wb3J0IHsgS1VJIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9tdmMvdmlldy9CYXNlVmlldydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdCBleHRlbmRzIExheWEuU2NyaXB0IHtcbiAgLy8gLyoqIEBwcm9wIHtuYW1lOmludFR5cGUsIHRpcHM6XCLmlbTmlbDnsbvlnovnpLrkvotcIiwgdHlwZTpJbnQsIGRlZmF1bHQ6MTAwMH0qL1xuICAvLyBwdWJsaWMgaW50VHlwZTogbnVtYmVyID0gMTAwMDtcbiAgLy8gLyoqIEBwcm9wIHtuYW1lOm51bVR5cGUsIHRpcHM6XCLmlbDlrZfnsbvlnovnpLrkvotcIiwgdHlwZTpOdW1iZXIsIGRlZmF1bHQ6MTAwMH0qL1xuICAvLyBwdWJsaWMgbnVtVHlwZTogbnVtYmVyID0gMTAwMDtcbiAgLy8gLyoqIEBwcm9wIHtuYW1lOnN0clR5cGUsIHRpcHM6XCLlrZfnrKbkuLLnsbvlnovnpLrkvotcIiwgdHlwZTpTdHJpbmcsIGRlZmF1bHQ6XCJoZWxsbyBsYXlhXCJ9Ki9cbiAgLy8gcHVibGljIHN0clR5cGU6IHN0cmluZyA9IFwiaGVsbG8gbGF5YVwiO1xuICAvLyAvKiogQHByb3Age25hbWU6Ym9vbFR5cGUsIHRpcHM6XCLluIPlsJTnsbvlnovnpLrkvotcIiwgdHlwZTpCb29sLCBkZWZhdWx0OnRydWV9Ki9cbiAgLy8gcHVibGljIGJvb2xUeXBlOiBib29sZWFuID0gdHJ1ZTtcbiAgLy8g5pu05aSa5Y+C5pWw6K+05piO6K+36K6/6ZeuOiBodHRwczovL2xkYzIubGF5YWJveC5jb20vZG9jLz9uYXY9emgtYXMtMi00LTBcblxuICAvLyAvKiogQHByb3Age25hbWU6YmluZGtleSwgdGlwczpcImJpbmRrZXlcIiwgdHlwZTpTdHJpbmd9Ki9cbiAgcHVibGljIGJpbmRrZXk6IHN0cmluZyA9ICcnXG4gIC8vIC8qKiBAcHJvcCB7bmFtZTpiaW5kVmFsLCB0aXBzOlwiYmluZFZhbFwiLCB0eXBlOlN0cmluZ30qL1xuICBwdWJsaWMgYmluZFZhbDogc3RyaW5nID0gJydcblxuICAvKiogQHByb3Age25hbWU6YmluZGluZyx0eXBlOlZlY3RvcixsYWJlczpiaW5kaW5nLHhDb3VudDoxLHNUeXBlOnN0cmluZ30qL1xuICBwdWJsaWMgYmluZGluZzogc3RyaW5nW10gLy8gdHlwZXM6XCJOb2RlLFN0cmluZyxOdW1iZXIsQm9vbGVhblwiLFxuXG4gIHB1YmxpYyBjYWxsQXJyYXk6IHsgZmllbGQ6IHN0cmluZzsgcGF0aDogYW55W107IG1hcHBlcjogRnVuY3Rpb24gfVtdID0gW11cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gIH1cbiAgb25Bd2FrZSgpIHtcbiAgICBjb25zb2xlLmxvZygnID09IGF3YWtlICcpXG4gICAgdGhpcy5vd25lci5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKSA9PiB7XG4gICAgICBFZmZlY3RVdGlscy5tYWNJY29uU2hha2UoXG4gICAgICAgIHRoaXMub3duZXIsXG4gICAgICAgICh0aGlzLm93bmVyIGFzIExheWEuU3ByaXRlKS55LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coMSlcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcyxcbiAgICAgIClcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuYmluZGluZy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmNhbGxBcnJheSA9IHRoaXMuYmluZGluZy5tYXAoc3RyID0+IHtcbiAgICAgICAgY29uc3QgW2ZpZWxkLCBwYXRoU3RyLCBtYXBwZXJdID0gc3RyLnNwbGl0KCd8JylcbiAgICAgICAgcmV0dXJuIHsgZmllbGQsIHBhdGg6IHBhdGhTdHIuc3BsaXQoJy4nKSwgbWFwcGVyOiBtYXBwZXIgPyBldmFsKG1hcHBlcikgOiB1bmRlZmluZWQgfVxuICAgICAgfSlcblxuICAgICAgbGV0IG93bmVyID0gdGhpcy5vd25lclxuICAgICAgd2hpbGUgKG93bmVyKSB7XG4gICAgICAgIGlmIChvd25lciBpbnN0YW5jZW9mIEtVSS5CYXNlVmlldykge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgb3duZXIgPSB0aGlzLm93bmVyLnBhcmVudFxuICAgICAgfVxuICAgICAgaWYgKG93bmVyKSB7XG4gICAgICAgIGNvbnN0IHZpZXcgPSBvd25lciBhcyBLVUkuQmFzZVZpZXdcbiAgICAgICAgdmlldy5zdGF0ZUxpc3RlbmVyLnB1c2godGhpcylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkVuYWJsZSgpOiB2b2lkIHt9XG5cbiAgb25EaXNhYmxlKCk6IHZvaWQge31cblxuICBvblN0YXRlQ2hhbmdlKHN0YXRlOiBhbnkpIHtcbiAgICB0aGlzLmNhbGxBcnJheS5mb3JFYWNoKGMgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYy5wYXRoLnJlZHVjZSgocHJldiwgcCkgPT4gKHByZXYgPyBwcmV2W3BdIDogdW5kZWZpbmVkKSwgc3RhdGUpXG4gICAgICB0aGlzLm93bmVyW2MuZmllbGRdID0gYy5tYXBwZXIgPyBjLm1hcHBlcihyZXN1bHQpIDogcmVzdWx0O1xuICAgIH0pXG4gIH1cbn1cbiIsImltcG9ydCB7IHVpIH0gZnJvbSAnLi4vLi4vLi4vLi4vdWkvbGF5YU1heFVJJ1xuaW1wb3J0IHsgVmlld0NvbnN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9jb25zdC9WaWV3Q29uc3QnXG5pbXBvcnQgeyBEaWFsb2dMYXllciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvbXZjL2xheWVyL0RpYWxvZ0xheWVyJ1xuaW1wb3J0IHsgUmVnaXN0ZXJNVkMsIGNsb3NlVmlldyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvbXZjL012Y01ncidcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvc3RvcmUnXG5pbXBvcnQgeyBjaGFuZ2VEYXRhMSB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMnXG5AUmVnaXN0ZXJNVkMoRGlhbG9nTGF5ZXIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCUGFnZSBleHRlbmRzIHVpLnZpZXcuQlBhZ2VVSSB7XG4gIHN0YXRpYyB2aWV3S2V5ID0gVmlld0NvbnN0LkJQYWdlXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgfVxuICBwdWJsaWMgaW5pdCgpIHtcbiAgICB0aGlzLmNsb3NlX2J0bi5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKSA9PiB7XG4gICAgICBjbG9zZVZpZXcodGhpcylcbiAgICB9KVxuICAgIHRoaXMuY2hhbmdlLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcbiAgICAgIC8vIHRoaXMuY29udHJvbGxlci5kaXNwYXRjaCgnY2hhbmdlJywgWycjZWUzMzIxJ10pXG4gICAgICBzdG9yZS5kaXNwYXRjaChjaGFuZ2VEYXRhMSgnaGVsbG8gd29ybGQnKSlcbiAgICB9KVxuICB9XG4gIHB1YmxpYyB1cGRhdGVWaWV3KCkge1xuICAgIGNvbnN0IHsgdXNlciwgdG9rZW4sIHRlc3REYXRhIH0gPSBzdG9yZS5nZXRTdGF0ZSgpXG4gICAgdGhpcy51c2VybmFtZS50ZXh0ID0gdXNlci5uYW1lXG4gICAgdGhpcy50b2tlbi50ZXh0ID0gdG9rZW5cbiAgfVxufVxuIiwiaW1wb3J0IHsgdWkgfSBmcm9tICcuLi8uLi8uLi91aS9sYXlhTWF4VUknXG5pbXBvcnQgeyBJVmlldyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvbXZjL2ludGVyZmFjZS9JVmlldydcbmltcG9ydCB7IFZpZXdDb25zdCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvY29uc3QvVmlld0NvbnN0J1xuaW1wb3J0IHsgQmFzZUxheWVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvbGF5ZXIvQmFzZUxheWVyJ1xuaW1wb3J0IERpYWxvZ1Rlc3QgZnJvbSAnLi9EaWFsb2dUZXN0J1xuaW1wb3J0IFZpZXdUZXN0IGZyb20gJy4vVmlld1Rlc3QnXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuL0xvYWRpbmcnXG5pbXBvcnQgeyBSZWdpc3Rlck1WQywgb3BlblZpZXcsIGNsb3NlVmlldyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvbXZjL012Y01ncidcbmltcG9ydCB7IENsaWNrIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvVUlFdmVudCdcbmltcG9ydCBHYW1lQXBwIGZyb20gJy4uLy4uLy4uL2NvcmUvZ2FtZS9HYW1lQXBwJ1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuLi8uLi9zdG9yZS9zdG9yZSdcbmltcG9ydCB7IGNoYW5nZVRva2VuLCBjaGFuZ2VVc2VybmFtZSB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnXG5AUmVnaXN0ZXJNVkMoQmFzZUxheWVyKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZVRlc3QgZXh0ZW5kcyB1aS52aWV3LkJhc2VUZXN0VUkgaW1wbGVtZW50cyBJVmlldyB7XG4gIHN0YXRpYyB2aWV3S2V5ID0gVmlld0NvbnN0LkJhc2VUZXN0XG4gIHB1YmxpYyBtb3ZlWSA9IGZhbHNlXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnRpbWVyTG9vcCg1MDAsIHRoaXMsICgpID0+IHtcbiAgICAgIHRoaXMudGFuay5pbmRleCA9IHRoaXMudGFuay5pbmRleCA9PT0gNyA/IDQgOiB0aGlzLnRhbmsuaW5kZXggKyAxXG4gICAgfSlcbiAgICB0aGlzLnRpbWVyTG9vcCgyNTAsIHRoaXMsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLm1vdmVZKSB7XG4gICAgICAgIHRoaXMudGFuay5jZW50ZXJZICs9IDFcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGFuay5jZW50ZXJZIC09IDFcbiAgICAgIH1cbiAgICAgIHRoaXMubW92ZVkgPSAhdGhpcy5tb3ZlWVxuICAgIH0pXG5cbiAgICB0aGlzLmRpYWxvZ0J0bi5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKSA9PiB7fSlcbiAgICB0aGlzLnZpZXdCdG4ub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCkgPT4ge1xuICAgICAgb3BlblZpZXcoVmlld1Rlc3QsIDEsIDIpXG4gICAgfSlcbiAgICB0aGlzLmxvYWRpbmdCdG4ub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCkgPT4ge1xuICAgICAgb3BlblZpZXcoTG9hZGluZywgMSwgMiwgMylcbiAgICB9KVxuICAgIHRoaXMuY2xvc2VCdG4ub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCkgPT4ge1xuICAgICAgY2xvc2VWaWV3KHRoaXMpXG4gICAgfSlcbiAgfVxuICBAQ2xpY2soJ2RpYWxvZ0J0bicpXG4gIEBDbGljaygnbG9hZGluZ0J0bicsIDEsIDIsIDMsIDQpXG4gIHByaXZhdGUgYXN5bmMgdG9kbzEoLi4udHlwZSkge1xuICAgIHN0b3JlLmRpc3BhdGNoKGNoYW5nZVRva2VuKE1hdGgucmFuZG9tKCkpKVxuICAgIHN0b3JlLmRpc3BhdGNoKGNoYW5nZVVzZXJuYW1lKE1hdGgucmFuZG9tKCkpKVxuICAgIGNvbnNvbGUubG9nKHR5cGUpXG4gICAgY29uc29sZS5sb2coYXdhaXQgR2FtZUFwcC5mZXRjaC5wb3N0KCdnZXQnLCB7IGE6IFsxLCAyXSwgYzogJ2hhaGFoYWhhJyB9KSlcbiAgfVxuICBwdWJsaWMgb25PcGVuKCkge1xuICAgIHN1cGVyLm9uT3BlbigpXG4gICAgY29uc29sZS5sb2coJ0Jhc2VUZXN0IG9wZW4nKVxuICB9XG4gIHB1YmxpYyB1cGRhdGVWaWV3KCkge1xuICAgIGNvbnN0IHsgdXNlciwgdG9rZW4sIHRlc3REYXRhIH0gPSBzdG9yZS5nZXRTdGF0ZSgpXG4gICAgdGhpcy51c2VybmFtZS50ZXh0ID0gdXNlci5uYW1lXG4gICAgdGhpcy50b2tlbi50ZXh0ID0gdG9rZW5cbiAgfVxufVxuIiwiaW1wb3J0IHsgdWkgfSBmcm9tICcuLi8uLi8uLi91aS9sYXlhTWF4VUknXHJcbmltcG9ydCB7IElWaWV3IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvaW50ZXJmYWNlL0lWaWV3J1xyXG5pbXBvcnQgeyBWaWV3Q29uc3QgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2NvbnN0L1ZpZXdDb25zdCdcclxuaW1wb3J0IHsgQmFzZUxheWVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvbGF5ZXIvQmFzZUxheWVyJ1xyXG5pbXBvcnQgeyBSZWdpc3Rlck1WQywgY2xvc2VWaWV3IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvTXZjTWdyJ1xyXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uLy4uL3N0b3JlL3N0b3JlJ1xyXG5AUmVnaXN0ZXJNVkMoQmFzZUxheWVyKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgdWkudmlldy5Mb2FkaW5nVUkgaW1wbGVtZW50cyBJVmlldyB7XHJcbiAgc3RhdGljIHZpZXdLZXkgPSBWaWV3Q29uc3QuTG9hZGluZ1xyXG4gIHB1YmxpYyBtb3ZlWSA9IGZhbHNlXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnRpbWVyTG9vcCg1MDAsIHRoaXMsICgpID0+IHtcclxuICAgICAgdGhpcy50YW5rLmluZGV4ID0gdGhpcy50YW5rLmluZGV4ID09PSA3ID8gNCA6IHRoaXMudGFuay5pbmRleCArIDFcclxuICAgIH0pXHJcbiAgICB0aGlzLnRpbWVyTG9vcCgyNTAsIHRoaXMsICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMubW92ZVkpIHtcclxuICAgICAgICB0aGlzLnRhbmsuY2VudGVyWSArPSAxXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50YW5rLmNlbnRlclkgLT0gMVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubW92ZVkgPSAhdGhpcy5tb3ZlWVxyXG4gICAgfSlcclxuICAgIHRoaXMuYnRuX2Nsb3NlLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcclxuICAgICAgY2xvc2VWaWV3KHRoaXMpXHJcbiAgICB9KVxyXG4gIH1cclxuICBwdWJsaWMgb25PcGVuKC4uLmFyZ3MpIHtcclxuICAgIHN1cGVyLm9uT3BlbigpXHJcbiAgICBjb25zb2xlLmxvZygnTG9hZGluZyBvcGVuJywgYXJncylcclxuICB9XHJcbiAgcHVibGljIHVwZGF0ZVZpZXcoKSB7XHJcbiAgICBjb25zdCB7IHVzZXIsIHRva2VuLCB0ZXN0RGF0YSB9ID0gc3RvcmUuZ2V0U3RhdGUoKVxyXG4gICAgdGhpcy51c2VybmFtZS50ZXh0ID0gdXNlci5uYW1lXHJcbiAgICB0aGlzLnRva2VuLnRleHQgPSB0b2tlblxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyB1aSB9IGZyb20gJy4uLy4uLy4uL3VpL2xheWFNYXhVSSdcclxuaW1wb3J0IHsgUmVnaXN0ZXJNVkMsIG9wZW5WaWV3IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvTXZjTWdyJ1xyXG5pbXBvcnQgeyBCYXNlTGF5ZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL212Yy9sYXllci9CYXNlTGF5ZXInXHJcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAnLi4vLi4vc3RvcmUvc3RvcmUnXHJcbmltcG9ydCB7IGFjdGlvblJlcXVlc3QsIEFjdGlvblR5cGVzIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucydcclxuaW1wb3J0IHsgVmlld0NvbnN0IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9jb25zdC9WaWV3Q29uc3QnXHJcbkBSZWdpc3Rlck1WQyhCYXNlTGF5ZXIpXHJcbmV4cG9ydCBjbGFzcyBMb2dpblZpZXcgZXh0ZW5kcyB1aS52aWV3LkxvZ2luVUkge1xyXG4gIHN0YXRpYyB2aWV3S2V5ID0gVmlld0NvbnN0LkxvZ2luXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLmJpbmRFdmVudCgpXHJcbiAgfVxyXG4gIGJpbmRFdmVudCgpIHtcclxuICAgIHRoaXMubG9naW5CdG4ub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXJuYW1lSW5wdXQudGV4dClcclxuICAgICAgY29uc29sZS5sb2codGhpcy5wYXNzd29yZElucHV0LnRleHQpXHJcbiAgICAgIHN0b3JlLmRpc3BhdGNoKFxyXG4gICAgICAgIGFjdGlvblJlcXVlc3QoQWN0aW9uVHlwZXMubG9naW5SZXF1ZXN0LCB7XHJcbiAgICAgICAgICB1c2VybmFtZTogdGhpcy51c2VybmFtZUlucHV0LnRleHQsXHJcbiAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZElucHV0LnRleHQsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIClcclxuICAgIH0pXHJcbiAgICB0aGlzLnJlZ2lzdGVyQnRuLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcclxuICAgICAgc3RvcmUuZGlzcGF0Y2goXHJcbiAgICAgICAgYWN0aW9uUmVxdWVzdChBY3Rpb25UeXBlcy5yZWdpc3RlclJlcXVlc3QsIHtcclxuICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lSW5wdXQudGV4dCxcclxuICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkSW5wdXQudGV4dCxcclxuICAgICAgICB9KSxcclxuICAgICAgKVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgdWkgfSBmcm9tICcuLi8uLi8uLi91aS9sYXlhTWF4VUknXG5pbXBvcnQgeyBJVmlldyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvbXZjL2ludGVyZmFjZS9JVmlldydcbmltcG9ydCB7IFZpZXdDb25zdCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvY29uc3QvVmlld0NvbnN0J1xuaW1wb3J0IHsgVmlld0xheWVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvbGF5ZXIvVmlld0xheWVyJ1xuaW1wb3J0IFZpZXdUZXN0MSBmcm9tICcuL1ZpZXdUZXN0MSdcbmltcG9ydCB7IFJlZ2lzdGVyTVZDLCBjbG9zZVZpZXcsIG9wZW5WaWV3IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvTXZjTWdyJ1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuLi8uLi9zdG9yZS9zdG9yZSdcbkBSZWdpc3Rlck1WQyhWaWV3TGF5ZXIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3VGVzdCBleHRlbmRzIHVpLnZpZXcuVmlld1Rlc3RVSSBpbXBsZW1lbnRzIElWaWV3IHtcbiAgc3RhdGljIHZpZXdLZXkgPSBWaWV3Q29uc3QuVmlld1Rlc3RcbiAgcHVibGljIG1vdmVZID0gZmFsc2VcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgdGhpcy50aW1lckxvb3AoNTAwLCB0aGlzLCAoKSA9PiB7XG4gICAgICB0aGlzLnRhbmsuaW5kZXggPSB0aGlzLnRhbmsuaW5kZXggPT09IDcgPyA0IDogdGhpcy50YW5rLmluZGV4ICsgMVxuICAgIH0pXG4gICAgdGhpcy50aW1lckxvb3AoMjUwLCB0aGlzLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5tb3ZlWSkge1xuICAgICAgICB0aGlzLnRhbmsuY2VudGVyWSArPSAxXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRhbmsuY2VudGVyWSAtPSAxXG4gICAgICB9XG4gICAgICB0aGlzLm1vdmVZID0gIXRoaXMubW92ZVlcbiAgICB9KVxuICAgIHRoaXMuY2xvc2VCdG4ub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCkgPT4ge1xuICAgICAgY2xvc2VWaWV3KHRoaXMpXG4gICAgfSlcbiAgICB0aGlzLnZpZXdCdG4ub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCkgPT4ge1xuICAgICAgb3BlblZpZXcoVmlld1Rlc3QxKVxuICAgIH0pXG4gIH1cbiAgcHVibGljIG9uT3BlbigpIHtcbiAgICBzdXBlci5vbk9wZW4oKVxuICAgIGNvbnNvbGUubG9nKCdWaWV3VGVzdCBvcGVuJylcbiAgfVxuICBwdWJsaWMgdXBkYXRlVmlldygpIHtcbiAgICBjb25zdCB7IHVzZXIsIHRva2VuLCB0ZXN0RGF0YSB9ID0gc3RvcmUuZ2V0U3RhdGUoKVxuICAgIHRoaXMudXNlcm5hbWUudGV4dCA9IHVzZXIubmFtZVxuICAgIHRoaXMudG9rZW4udGV4dCA9IHRva2VuXG4gIH1cbn1cbiIsImltcG9ydCB7IHVpIH0gZnJvbSAnLi4vLi4vLi4vdWkvbGF5YU1heFVJJ1xuaW1wb3J0IHsgSVZpZXcgfSBmcm9tICcuLi8uLi8uLi9jb3JlL212Yy9pbnRlcmZhY2UvSVZpZXcnXG5pbXBvcnQgeyBWaWV3Q29uc3QgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2NvbnN0L1ZpZXdDb25zdCdcbmltcG9ydCB7IFZpZXdMYXllciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvbXZjL2xheWVyL1ZpZXdMYXllcidcbmltcG9ydCB7IFJlZ2lzdGVyTVZDLCBjbG9zZVZpZXcgfSBmcm9tICcuLi8uLi8uLi9jb3JlL212Yy9NdmNNZ3InXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uLy4uL3N0b3JlL3N0b3JlJ1xuQFJlZ2lzdGVyTVZDKFZpZXdMYXllcilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdUZXN0MSBleHRlbmRzIHVpLnZpZXcuVmlld1Rlc3QxVUkgaW1wbGVtZW50cyBJVmlldyB7XG4gIHN0YXRpYyB2aWV3S2V5ID0gVmlld0NvbnN0LlZpZXdUZXN0MVxuICBwdWJsaWMgbW92ZVkgPSBmYWxzZVxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLnRpbWVyTG9vcCg1MDAsIHRoaXMsICgpID0+IHtcbiAgICAgIHRoaXMudGFuay5pbmRleCA9IHRoaXMudGFuay5pbmRleCA9PT0gNyA/IDQgOiB0aGlzLnRhbmsuaW5kZXggKyAxXG4gICAgfSlcbiAgICB0aGlzLnRpbWVyTG9vcCgyNTAsIHRoaXMsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLm1vdmVZKSB7XG4gICAgICAgIHRoaXMudGFuay5jZW50ZXJZICs9IDFcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGFuay5jZW50ZXJZIC09IDFcbiAgICAgIH1cbiAgICAgIHRoaXMubW92ZVkgPSAhdGhpcy5tb3ZlWVxuICAgIH0pXG4gICAgdGhpcy5jbG9zZUJ0bi5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKSA9PiB7XG4gICAgICBjbG9zZVZpZXcodGhpcylcbiAgICB9KVxuICB9XG4gIHB1YmxpYyBvbk9wZW4oKSB7XG4gICAgc3VwZXIub25PcGVuKClcbiAgICBjb25zb2xlLmxvZygnVmlld1Rlc3Qgb3BlbicpXG4gIH1cbiAgcHVibGljIHVwZGF0ZVZpZXcoKSB7XG4gICAgY29uc3QgeyB1c2VyLCB0b2tlbiwgdGVzdERhdGEgfSA9IHN0b3JlLmdldFN0YXRlKClcbiAgICB0aGlzLnVzZXJuYW1lLnRleHQgPSB1c2VyLm5hbWVcbiAgICB0aGlzLnRva2VuLnRleHQgPSB0b2tlblxuICB9XG59XG4iLCJlbnVtIEh0dHBNZXRob2Qge1xyXG4gIGdldCA9ICdHRVQnLFxyXG4gIHBvc3QgPSAnUE9TVCcsXHJcbn1cclxuZXhwb3J0IGNsYXNzIEZldGNoIHtcclxuICBwcml2YXRlIGJhc2VVcmwgPSAnJ1xyXG4gIHByaXZhdGUgY29udGVudFR5cGUgPSAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04J1xyXG4gIHN0YXRpYyBmZXRjaE1hcCA9IG5ldyBNYXAoKVxyXG4gIGNvbnN0cnVjdG9yKHsgdXJsIH0pIHtcclxuICAgIHRoaXMuYmFzZVVybCA9IHVybFxyXG4gIH1cclxuICBwdWJsaWMgc3RhdGljIGluaXQoa2V5LCB7IHVybCB9KSB7XHJcbiAgICBsZXQgZmV0Y2ggPSB0aGlzLmZldGNoTWFwLmdldChrZXkpXHJcbiAgICBpZiAoIWZldGNoKSB7XHJcbiAgICAgIGZldGNoID0gbmV3IEZldGNoKHsgdXJsIH0pXHJcbiAgICAgIHRoaXMuZmV0Y2hNYXAuc2V0KGtleSwgZmV0Y2gpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmV0Y2hcclxuICB9XHJcbiAgcHJpdmF0ZSBhc3luYyBzZW5kKGFwaTogc3RyaW5nLCB7IGJvZHksIG1ldGhvZCB9KSB7XHJcbiAgICBsZXQgdXJsID0gdGhpcy5iYXNlVXJsICsgYXBpXHJcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogdGhpcy5jb250ZW50VHlwZSxcclxuICAgIH0pXHJcbiAgICBsZXQgcmVzOiBSZXNwb25zZVxyXG4gICAgc3dpdGNoIChtZXRob2QpIHtcclxuICAgICAgY2FzZSBIdHRwTWV0aG9kLmdldDpcclxuICAgICAgICBpZiAoYm9keSkge1xyXG4gICAgICAgICAgdXJsICs9XHJcbiAgICAgICAgICAgICc/JyArXHJcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGJvZHkpXHJcbiAgICAgICAgICAgICAgLm1hcChpdGVtID0+IGl0ZW0uam9pbignPScpKVxyXG4gICAgICAgICAgICAgIC5qb2luKCcmJylcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzID0gYXdhaXQgZmV0Y2godXJsLCB7IGhlYWRlcnMsIG1ldGhvZCB9KVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGNhc2UgSHR0cE1ldGhvZC5wb3N0OlxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJlcyA9IGF3YWl0IGZldGNoKHVybCwgeyBib2R5LCBoZWFkZXJzLCBtZXRob2QgfSlcclxuICAgICAgICBicmVha1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMucmVzSGFuZGxlKHJlcylcclxuICB9XHJcbiAgcHVibGljIGFzeW5jIGdldChhcGk6IHN0cmluZywgcGFyYW1zOiBhbnkgPSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiB0aGlzLnNlbmQoYXBpLCB7IGJvZHk6IHBhcmFtcywgbWV0aG9kOiBIdHRwTWV0aG9kLmdldCB9KVxyXG4gIH1cclxuICBwdWJsaWMgYXN5bmMgcG9zdChhcGk6IHN0cmluZywgYm9keTogYW55ID0gdW5kZWZpbmVkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZW5kKGFwaSwgeyBib2R5OiBib2R5ID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiB1bmRlZmluZWQsIG1ldGhvZDogSHR0cE1ldGhvZC5wb3N0IH0pXHJcbiAgfVxyXG4gIHByaXZhdGUgYXN5bmMgcmVzSGFuZGxlKHJlczogUmVzcG9uc2UpIHtcclxuICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKVxyXG4gICAgaWYgKGNvbnRlbnRUeXBlKSB7XHJcbiAgICAgIGlmIChjb250ZW50VHlwZS5pbmRleE9mKCdqc29uJykgPiAtMSkge1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbigpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXMudGV4dCgpXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNpbmdsZXRvbiB9IGZyb20gJy4uL2NvcmUvYmFzZS9TaW5nbGV0b24nXG5pbXBvcnQgKiBhcyBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuLi9nYW1lL3N0b3JlL3N0b3JlJ1xuLypcbiAgIHNvY2tldC5pbml0KC4uLilcbiAgIHNvY2tldC5jb25uZWN0KClcbiovXG5leHBvcnQgY2xhc3MgU29ja2V0IGV4dGVuZHMgU2luZ2xldG9uIHtcbiAgY29uc3RydWN0b3IoaXAsIHN1Y2Nlc3NDYWxsYmFjaywgZmFpbGVkQ2FsbGJhY2spIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5pcEFkZHJlc3MgPSBpcFxuICAgIHRoaXMuY29ubmVjdFN1Y2Nlc3NDYWxsYmFjayA9IHN1Y2Nlc3NDYWxsYmFja1xuICAgIHRoaXMuY29ubmVjdEZhaWxlZENhbGxiYWNrID0gZmFpbGVkQ2FsbGJhY2tcbiAgfVxuICBwcml2YXRlIGlwQWRkcmVzc1xuICBwcml2YXRlIHNvY2tldDogYW55XG4gIHByaXZhdGUgY29ubmVjdFN1Y2Nlc3NDYWxsYmFja1xuICBwcml2YXRlIGNvbm5lY3RGYWlsZWRDYWxsYmFja1xuICBzdGF0aWMgc29ja2V0TWFwID0gbmV3IE1hcCgpXG4gIHB1YmxpYyBzdGF0aWMgaW5pdChrZXksIHsgaXAsIHN1Y2Nlc3NDYWxsYmFjayA9IG51bGwsIGZhaWxlZENhbGxiYWNrID0gbnVsbCB9KSB7XG4gICAgbGV0IHNvY2tldCA9IHRoaXMuc29ja2V0TWFwLmdldChrZXkpXG4gICAgaWYgKCFzb2NrZXQpIHtcbiAgICAgIHNvY2tldCA9IG5ldyBTb2NrZXQoaXAsIHN1Y2Nlc3NDYWxsYmFjaywgZmFpbGVkQ2FsbGJhY2spXG4gICAgICB0aGlzLnNvY2tldE1hcC5zZXQoa2V5LCBzb2NrZXQpXG4gICAgfVxuICAgIHJldHVybiBzb2NrZXRcbiAgfVxuICBwdWJsaWMgY29ubmVjdCgpIHtcbiAgICBjb25zdCB0b2tlbiA9IHN0b3JlLmdldFN0YXRlKCkudG9rZW5cbiAgICBjb25zb2xlLmxvZyh0b2tlbilcbiAgICB0aGlzLnNvY2tldCA9IGlvKHRoaXMuaXBBZGRyZXNzLCB7XG4gICAgICBxdWVyeToge1xuICAgICAgICB0b2tlbjogdG9rZW4sXG4gICAgICB9LFxuICAgIH0pXG4gICAgdGhpcy5zb2NrZXQub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnd2Vic29ja2V0IGNvbm5lY3QuLi4nKVxuICAgICAgdGhpcy5jb25uZWN0U3VjY2VzcygpXG4gICAgfSlcblxuICAgIHRoaXMuc29ja2V0Lm9uKCdkaXNjb25uZWN0JywgdGhpcy5vbkRpc2Nvbm5lY3QpXG4gIH1cbiAgYWRkRXZlbnQoZXZlbnQsIF90aGlzLCBjYWxsYmFjaykge1xuICAgIHRoaXMuc29ja2V0Lm9uKGV2ZW50LCBjYWxsYmFjay5iaW5kKF90aGlzKSlcbiAgfVxuICByZW1vdmVFdmVudChldmVudCkge1xuICAgIHRoaXMuc29ja2V0LnJlbW92ZUFsbExpc3RlbmVycyhldmVudClcbiAgfVxuICBzZW5kRXZlbnQoZXZlbnQsIG1lc3NhZ2UgPSBudWxsKSB7XG4gICAgdGhpcy5zb2NrZXQuZW1pdChldmVudCwgbWVzc2FnZSlcbiAgfVxuICBwdWJsaWMgZGlzY29ubmVjdCgpIHtcbiAgICB0aGlzLnNvY2tldC5kaXNjb25uZWN0KClcbiAgfVxuICBwcml2YXRlIG9uRGlzY29ubmVjdCgpIHtcbiAgICBpZiAodGhpcy5jb25uZWN0RmFpbGVkQ2FsbGJhY2spIHRoaXMuY29ubmVjdEZhaWxlZENhbGxiYWNrKClcbiAgfVxuICBwcml2YXRlIGNvbm5lY3RTdWNjZXNzKCkge1xuICAgIGlmICh0aGlzLmNvbm5lY3RTdWNjZXNzQ2FsbGJhY2spIHRoaXMuY29ubmVjdFN1Y2Nlc3NDYWxsYmFjaygpXG4gIH1cbn1cbiIsImltcG9ydCB7IFNpbmdsZXRvbiB9IGZyb20gJy4uLy4uL2NvcmUvYmFzZS9TaW5nbGV0b24nXG5pbXBvcnQgTmV0UmVxdWVzdCBmcm9tICcuL05ldFJlcXVlc3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVOZXQgZXh0ZW5kcyBTaW5nbGV0b24ge1xuICBwcml2YXRlIHNlcnZlclVybDogc3RyaW5nXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgfVxuICBwdWJsaWMgaW5pdFNlcnZlcih1cmw6IHN0cmluZykge1xuICAgIHRoaXMuc2VydmVyVXJsID0gdXJsXG4gIH1cbiAgcHVibGljIHNlbmQoYXBpOiBzdHJpbmcsIGJvZHlWYXJpYWJsZXM6IGFueSA9IG51bGwsIHVybFZhcmlhYmxlczogYW55ID0gJycsIG1ldGhvZDogc3RyaW5nID0gJ3Bvc3QnLCByZXNwb25zZVR5cGU6IHN0cmluZyA9ICdqc29uJywgaGVhZGVyPzogYW55W10pIHtcbiAgICB0aGlzLnNlbmRCeVVybCh0aGlzLnNlcnZlclVybCwgYXBpLCBib2R5VmFyaWFibGVzLCB1cmxWYXJpYWJsZXMsIG1ldGhvZCwgcmVzcG9uc2VUeXBlLCBoZWFkZXIpXG4gIH1cbiAgcHVibGljIHNlbmRQcm9taXNlKGFwaTogc3RyaW5nLCBib2R5VmFyaWFibGVzOiBhbnkgPSBudWxsLCB1cmxWYXJpYWJsZXM6IGFueSA9ICcnLCBtZXRob2Q6IHN0cmluZyA9ICdwb3N0JywgcmVzcG9uc2VUeXBlOiBzdHJpbmcgPSAnanNvbicsIGhlYWRlcj86IGFueVtdKSB7XG4gICAgdGhpcy5zZW5kUHJvbWlzZUJ5VXJsKHRoaXMuc2VydmVyVXJsLCBhcGksIGJvZHlWYXJpYWJsZXMsIHVybFZhcmlhYmxlcywgbWV0aG9kLCByZXNwb25zZVR5cGUsIGhlYWRlcilcbiAgfVxuICBwdWJsaWMgc2VuZEJ5VXJsKHVybDogc3RyaW5nLCBhcGk6IHN0cmluZywgYm9keVZhcmlhYmxlczogYW55ID0gbnVsbCwgdXJsVmFyaWFibGVzOiBhbnkgPSAnJywgbWV0aG9kOiBzdHJpbmcgPSAncG9zdCcsIHJlc3BvbnNlVHlwZTogc3RyaW5nID0gJ2pzb24nLCBoZWFkZXI/OiBhbnlbXSkge1xuICAgIGxldCByZXEgPSBOZXRSZXF1ZXN0LkNyZWF0ZShhcGksIHVybCArIGFwaSArIHVybFZhcmlhYmxlcywgYm9keVZhcmlhYmxlcywgbWV0aG9kLCByZXNwb25zZVR5cGUsIGhlYWRlcilcbiAgICByZXEuU2VuZCgpXG4gIH1cbiAgcHVibGljIGFzeW5jIHNlbmRQcm9taXNlQnlVcmwodXJsOiBzdHJpbmcsIGFwaTogc3RyaW5nLCBib2R5VmFyaWFibGVzOiBhbnkgPSBudWxsLCB1cmxWYXJpYWJsZXM6IGFueSA9ICcnLCBtZXRob2Q6IHN0cmluZyA9ICdwb3N0JywgcmVzcG9uc2VUeXBlOiBzdHJpbmcgPSAnanNvbicsIGhlYWRlcj86IGFueVtdKSB7XG4gICAgbGV0IHJlcSA9IE5ldFJlcXVlc3QuQ3JlYXRlKGFwaSwgdXJsICsgYXBpICsgdXJsVmFyaWFibGVzLCBib2R5VmFyaWFibGVzLCBtZXRob2QsIHJlc3BvbnNlVHlwZSwgaGVhZGVyKVxuICAgIGNvbnN0IGdldCA9IGF3YWl0IHJlcS5TZW5kUHJvbWlzZSgpXG4gICAgcmV0dXJuIGdldFxuICB9XG59XG4iLCJpbXBvcnQgR2FtZUFwcCBmcm9tICcuLi8uLi9jb3JlL2dhbWUvR2FtZUFwcCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV0UmVxdWVzdCB7XG4gIHByaXZhdGUgcmVxOiBsYXlhLm5ldC5IdHRwUmVxdWVzdFxuICBwcml2YXRlIHVybDogc3RyaW5nXG4gIHByaXZhdGUgZGF0YTogYW55XG4gIHByaXZhdGUgbWV0aG9kOiBzdHJpbmdcbiAgcHJpdmF0ZSByZXNwb25zZVR5cGU6IHN0cmluZ1xuICBwcml2YXRlIGhlYWRlcnM6IGFueVtdXG4gIHByaXZhdGUgYXBpUGF0aDogc3RyaW5nXG4gIHByaXZhdGUgbWVzc2FnZUtleTogYW55XG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgbGV0IHJlcSA9IG5ldyBsYXlhLm5ldC5IdHRwUmVxdWVzdCgpXG4gICAgdGhpcy5yZXEgPSByZXFcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgQ3JlYXRlKGFwaVBhdGg6IHN0cmluZywgdXJsOiBzdHJpbmcsIGRhdGE/OiBhbnksIG1ldGhvZD86IHN0cmluZywgcmVzcG9uc2VUeXBlPzogc3RyaW5nLCBoZWFkZXJzPzogYW55W10sIG1lc3NhZ2VLZXk/KTogTmV0UmVxdWVzdCB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgTmV0UmVxdWVzdCgpXG4gICAgcmVxdWVzdC51cmwgPSB1cmxcbiAgICByZXF1ZXN0LmRhdGEgPSBkYXRhXG4gICAgcmVxdWVzdC5tZXRob2QgPSBtZXRob2RcbiAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IHJlc3BvbnNlVHlwZVxuICAgIHJlcXVlc3QuaGVhZGVycyA9IGhlYWRlcnNcbiAgICByZXF1ZXN0LmFwaVBhdGggPSBhcGlQYXRoXG4gICAgcmVxdWVzdC5tZXNzYWdlS2V5ID0gbWVzc2FnZUtleVxuICAgIHJldHVybiByZXF1ZXN0XG4gIH1cbiAgcHVibGljIFNlbmQoKSB7XG4gICAgbGV0IHJlcSA9IHRoaXMucmVxXG4gICAgbGV0IHVybCA9IHRoaXMudXJsXG4gICAgbGV0IGRhdGEgPSB0aGlzLmRhdGFcbiAgICBsZXQgbWV0aG9kID0gdGhpcy5tZXRob2RcbiAgICBsZXQgcmVzcG9uc2VUeXBlID0gdGhpcy5yZXNwb25zZVR5cGVcbiAgICBsZXQgaGVhZGVycyA9IHRoaXMuaGVhZGVycyB8fCBbJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJ11cbiAgICByZXEub25jZShsYXlhLmV2ZW50cy5FdmVudC5DT01QTEVURSwgdGhpcywgdGhpcy5jb21wbGV0ZUhhbmRsZXIpXG4gICAgcmVxLm9uY2UobGF5YS5ldmVudHMuRXZlbnQuRVJST1IsIHRoaXMsIHRoaXMuZXJyb3JIYW5kbGVyKVxuICAgIHJlcS5zZW5kKHVybCwgZGF0YSwgbWV0aG9kLCByZXNwb25zZVR5cGUsIGhlYWRlcnMpXG4gIH1cbiAgcHVibGljIGFzeW5jIFNlbmRQcm9taXNlKCk6IFByb21pc2U8YW55PiB7XG4gICAgbGV0IHJlcSA9IHRoaXMucmVxXG4gICAgbGV0IHVybCA9IHRoaXMudXJsXG4gICAgbGV0IGRhdGEgPSB0aGlzLmRhdGFcbiAgICBsZXQgbWV0aG9kID0gdGhpcy5tZXRob2RcbiAgICBsZXQgcmVzcG9uc2VUeXBlID0gdGhpcy5yZXNwb25zZVR5cGVcbiAgICBsZXQgaGVhZGVycyA9IHRoaXMuaGVhZGVycyB8fCBbJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJ11cbiAgICBsZXQgX3Bvc3QgPSBmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGxldCBfcmVzb2x2ZSA9IGZ1bmN0aW9uKG9iajogYW55KSB7XG4gICAgICAgIHJlc29sdmUob2JqKVxuICAgICAgfVxuICAgICAgcmVxLm9uY2UobGF5YS5ldmVudHMuRXZlbnQuQ09NUExFVEUsIHRoaXMsIF9yZXNvbHZlKVxuICAgICAgcmVxLm9uY2UobGF5YS5ldmVudHMuRXZlbnQuRVJST1IsIHRoaXMsIF9yZXNvbHZlKVxuICAgICAgcmVxLnNlbmQodXJsLCBkYXRhLCBtZXRob2QsIHJlc3BvbnNlVHlwZSwgaGVhZGVycylcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oX3Bvc3QpXG4gIH1cbiAgcHJpdmF0ZSBjb21wbGV0ZUhhbmRsZXIoZGF0YTogYW55KSB7XG4gICAgaWYgKHRoaXMubWVzc2FnZUtleSkge1xuICAgICAgR2FtZUFwcC5kaXNwYXRjaGVyLlNlbmRNc2codGhpcy5tZXNzYWdlS2V5LCBkYXRhKVxuICAgIH1cbiAgfVxuICBwcml2YXRlIGVycm9ySGFuZGxlcihlOiBhbnkpIHtcbiAgICBjb25zb2xlLmVycm9yKHRoaXMubWVzc2FnZUtleSwgZSlcbiAgfVxuICBwcml2YXRlIHByb2Nlc3NIYW5kbGVyKGRhdGE6IGFueSkge31cbn1cbiIsImltcG9ydCB7IHVpIH0gZnJvbSAnLi4vdWkvbGF5YU1heFVJJ1xyXG5pbXBvcnQgQVBhZ2UgZnJvbSAnLi4vZ2FtZS91aS92aWV3L0FQYWdlL0FQYWdlJ1xyXG5pbXBvcnQgeyBzZXRVSVJvb3QsIG9wZW5WaWV3LCBjbG9zZVZpZXcsIHZpZXdNZ3IgfSBmcm9tICcuLi9jb3JlL212Yy9NdmNNZ3InXHJcbmltcG9ydCB7IE1hcFZpZXcgfSBmcm9tICcuLi9nYW1lL3VpL3ZpZXcvTWFwVmlldydcclxuaW1wb3J0IHsgTG9naW5WaWV3IH0gZnJvbSAnLi4vZ2FtZS91aS92aWV3L0xvZ2luVmlldydcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuLi9nYW1lL3N0b3JlL3N0b3JlJ1xyXG5pbXBvcnQgeyBBY3Rpb25UeXBlcyB9IGZyb20gJy4uL2dhbWUvc3RvcmUvYWN0aW9ucydcclxuaW1wb3J0IHsgTG9naW5TdWNjZXNzIH0gZnJvbSAnLi4vZ2FtZS91aS92aWV3L0xvZ2luU3VjY2VzcydcclxuaW1wb3J0IEdhbWVBcHAgZnJvbSAnLi4vY29yZS9nYW1lL0dhbWVBcHAnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluU2NlbmUgZXh0ZW5kcyB1aS5zY2VuZS5NYWluU2NlbmVVSSB7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgLy8gR2FtZUFwcC5pbml0KHRoaXMpXHJcbiAgICBjb25zdCBVSSA9IG5ldyBMYXlhLlNwcml0ZSgpXHJcbiAgICBVSS5uYW1lID0gJ1VJJ1xyXG4gICAgVUkud2lkdGggPSBMYXlhLnN0YWdlLndpZHRoXHJcbiAgICBVSS5oZWlnaHQgPSBMYXlhLnN0YWdlLmhlaWdodFxyXG4gICAgTGF5YS5zdGFnZS5hZGRDaGlsZChVSSlcclxuICAgIHNldFVJUm9vdChVSSlcclxuXHJcbiAgICAvLyBvcGVuVmlldyhBUGFnZSx7YToxLGI6Mn0pXHJcbiAgICAvLyBvcGVuVmlldyhMb2dpblZpZXcpXHJcbiAgICBzdG9yZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jaGVja1ZpZXcuYmluZCh0aGlzKShzdG9yZS5nZXRTdGF0ZSgpKSlcclxuICAgIHN0b3JlLmRpc3BhdGNoKHsgdHlwZTogQWN0aW9uVHlwZXMubG9naW5GYWlsIH0pXHJcbiAgfVxyXG4gIGNoZWNrVmlldyhzdGF0ZSkge1xyXG4gICAgY29uc29sZS5sb2coc3RhdGUpXHJcbiAgICBjb25zdCB7IGxvZ2luIH0gPSBzdGF0ZVxyXG4gICAgY29uc29sZS5sb2coYGxvZ2luOiR7bG9naW59YClcclxuICAgIGlmIChsb2dpbikge1xyXG4gICAgICBjbG9zZVZpZXcoTG9naW5WaWV3KVxyXG4gICAgICBpZiAoIXZpZXdNZ3IuaXNPcGVuKEFQYWdlKSkge1xyXG4gICAgICAgIEdhbWVBcHAuc29ja2V0LmNvbm5lY3QoKVxyXG4gICAgICAgIG9wZW5WaWV3KEFQYWdlKVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoIXZpZXdNZ3IuaXNPcGVuKExvZ2luVmlldykpIHtcclxuICAgICAgICBvcGVuVmlldyhMb2dpblZpZXcpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgb25PcGVuZWQoKSB7fVxyXG59XHJcbiIsIi8qKlRoaXMgY2xhc3MgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgTGF5YUFpcklERSwgcGxlYXNlIGRvIG5vdCBtYWtlIGFueSBtb2RpZmljYXRpb25zLiAqL1xuaW1wb3J0IFZpZXc9TGF5YS5WaWV3O1xuaW1wb3J0IERpYWxvZz1MYXlhLkRpYWxvZztcbmltcG9ydCBTY2VuZT1MYXlhLlNjZW5lO1xuaW1wb3J0ICogYXMgdiBmcm9tIFwiLi4vY29yZS9tdmMvdmlldy9CYXNlVmlld1wiO1xuaW1wb3J0IEJhc2VWaWV3ID12LktVSS5CYXNlVmlld1xudmFyIFJFRzogRnVuY3Rpb24gPSBMYXlhLkNsYXNzVXRpbHMucmVnQ2xhc3M7XG5leHBvcnQgbW9kdWxlIHVpLnNjZW5lIHtcclxuICAgIGV4cG9ydCBjbGFzcyBNYWluU2NlbmVVSSBleHRlbmRzIFNjZW5lIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFNjZW5lKFwic2NlbmUvTWFpblNjZW5lXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFJFRyhcInVpLnNjZW5lLk1haW5TY2VuZVVJXCIsTWFpblNjZW5lVUkpO1xyXG59XHJcbmV4cG9ydCBtb2R1bGUgdWkudmlldyB7XHJcbiAgICBleHBvcnQgY2xhc3MgQVBhZ2VVSSBleHRlbmRzIEJhc2VWaWV3IHtcclxuXHRcdHB1YmxpYyBidG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIGRkOmxheWEuaHRtbC5kb20uSFRNTERpdkVsZW1lbnQ7XG5cdFx0cHVibGljIGJhc2VCdG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIGNvbnRlbnRzOkxheWEuTGFiZWw7XG5cdFx0cHVibGljIHRlc3RCdG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIHRvZG9MaXN0OkxheWEuTGlzdDtcblx0XHRwdWJsaWMgZGVsZXRlQnRuOkxheWEuQnV0dG9uO1xuXHRcdHB1YmxpYyBhZGRJbnB1dDpMYXlhLlRleHRJbnB1dDtcblx0XHRwdWJsaWMgYWRkQnRuOkxheWEuQnV0dG9uO1xuICAgICAgICBwdWJsaWMgc3RhdGljICB1aVZpZXc6YW55ID17XCJ0eXBlXCI6XCJCYXNlVmlld1wiLFwicHJvcHNcIjp7XCJ3aWR0aFwiOjY0MCxcImhlaWdodFwiOjExMzZ9LFwiY29tcElkXCI6MixcImNoaWxkXCI6W3tcInR5cGVcIjpcIlJlY3RcIixcInByb3BzXCI6e1wid2lkdGhcIjo2NDAsXCJuYW1lXCI6XCJyXCIsXCJsaW5lV2lkdGhcIjoxLFwiaGVpZ2h0XCI6MTEzNixcImZpbGxDb2xvclwiOlwiI2ZiYmJiYlwifSxcImNvbXBJZFwiOjd9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6NTU1LFwieFwiOjIwOCxcIndpZHRoXCI6MjAwLFwidmFyXCI6XCJidG5cIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcIkdvVG8gQlBhZ2VcIixcImhlaWdodFwiOjUwfSxcImNvbXBJZFwiOjh9LHtcInR5cGVcIjpcIkhUTUxEaXZFbGVtZW50XCIsXCJwcm9wc1wiOntcInlcIjowLFwieFwiOjAsXCJ3aWR0aFwiOjY0NCxcInZhclwiOlwiZGRcIixcImlubmVySFRNTFwiOlwiPGJyLz48c3Bhbj4gIOa1i+ivleawtOW5s+WxheS4reWvuem9kDwvc3Bhbj5cIixcImhlaWdodFwiOjI2NSxcInJ1bnRpbWVcIjpcImxheWEuaHRtbC5kb20uSFRNTERpdkVsZW1lbnRcIn0sXCJjb21wSWRcIjoyMH0se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjo2NjksXCJ4XCI6MjA4LFwid2lkdGhcIjoyMDAsXCJ2YXJcIjpcImJhc2VCdG5cIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcIkdvVG8gQmFzZVwiLFwiaGVpZ2h0XCI6NTB9LFwiY29tcElkXCI6MTUsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJMYWJlbFwiLFwicHJvcHNcIjp7XCJ5XCI6LTYyNyxcInhcIjoxOTAsXCJ3aWR0aFwiOjIwMSxcInZhclwiOlwiY29udGVudHNcIixcInZhbGlnblwiOlwibWlkZGxlXCIsXCJ0ZXh0XCI6XCJzc3NzXCIsXCJoZWlnaHRcIjo1MDAsXCJmb250U2l6ZVwiOjQwLFwiYWxpZ25cIjpcImNlbnRlclwifSxcImNvbXBJZFwiOjE0fV19LHtcInR5cGVcIjpcIkxhYmVsXCIsXCJwcm9wc1wiOntcInlcIjoxMjEsXCJ4XCI6Mjc1LjUsXCJ3aWR0aFwiOjYzLFwidmFsaWduXCI6XCJtaWRkbGVcIixcInRleHRcIjpcImxhYmVsXCIsXCJoZWlnaHRcIjoyMixcImFsaWduXCI6XCJjZW50ZXJcIn0sXCJjb21wSWRcIjoyNX0se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjoxMzIsXCJ4XCI6NDI2LFwidmVjdG9yMVwiOltcImxhYmVsXCIsXCJhYWFcIixcImRcIixcImRcIixcImxhYmVsOmFhYVwiXSxcInZhclwiOlwidGVzdEJ0blwiLFwicHJlc2V0SURcIjoxLFwiYmluZGluZ1wiOltcImxhYmVsfHRlc3REYXRhLmRhdGExXCIsXCJsYWJlbENvbG9yc3x0ZXN0RGF0YS5kYXRhMXwoeCk9Png9PT0xP1xcXCIjRkI4XFxcIjpcXFwiIzAwMFxcXCJcIl0sXCJ3aWR0aFwiOjE5MixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcIuaMiemSruiEmuacrFwiLFwiaXNQcmVzZXRSb290XCI6dHJ1ZSxcImhlaWdodFwiOjkwfSxcImNvbXBJZFwiOjMxLFwiY2hpbGRcIjpbe1widHlwZVwiOlwiU2NyaXB0XCIsXCJwcm9wc1wiOntcInZlY3RvcjFcIjpbXCJsYWJlbFwiLFwiYWFhXCIsXCJkXCIsXCJkXCIsXCJsYWJlbDphYWFcIl0sXCJwcmVzZXRJRFwiOjIsXCJtb1wiOmZhbHNlLFwiYmluZGtleVwiOlwibGFiZWxcIixcImJpbmRpbmdcIjpbXCJsYWJlbHx0ZXN0RGF0YS5kYXRhMVwiLFwibGFiZWxDb2xvcnN8dGVzdERhdGEuZGF0YTF8KHgpPT54PT09MT9cXFwiI0ZCOFxcXCI6XFxcIiMwMDBcXFwiXCJdLFwiYmluZFZhbFwiOlwidGVzdERhdGEuZGF0YTFcIixcInlcIjoxLFwieFwiOjAsXCJydW50aW1lXCI6XCJnYW1lL3VpL3ZpZXcvQVBhZ2UvVGVzdC50c1wifSxcImNvbXBJZFwiOjMyfV19LHtcInR5cGVcIjpcIkxpc3RcIixcInByb3BzXCI6e1wieVwiOjExNCxcInhcIjoyNyxcIndpZHRoXCI6MjYwLFwidmFyXCI6XCJ0b2RvTGlzdFwiLFwidlNjcm9sbEJhclNraW5cIjpcImNvbXAvdnNjcm9sbC5wbmdcIixcInJlcGVhdFhcIjoxLFwiaGVpZ2h0XCI6MzA4fSxcImNvbXBJZFwiOjQ5LFwiY2hpbGRcIjpbe1widHlwZVwiOlwiQm94XCIsXCJwcm9wc1wiOntcInlcIjowLFwieFwiOjAsXCJ3aWR0aFwiOjc3LFwicmVuZGVyVHlwZVwiOlwicmVuZGVyXCIsXCJoZWlnaHRcIjozNH0sXCJjb21wSWRcIjo1MixcImNoaWxkXCI6W3tcInR5cGVcIjpcIkxhYmVsXCIsXCJwcm9wc1wiOntcInlcIjo3LFwieFwiOjAsXCJ0ZXh0XCI6XCJsYWJlbFwiLFwicmVuZGVyVHlwZVwiOlwicmVuZGVyXCIsXCJuYW1lXCI6XCJsYWJlbFwiLFwiZm9udFNpemVcIjoyMH0sXCJjb21wSWRcIjo1MH0se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjo1LFwieFwiOjU0LFwid2lkdGhcIjoyMyxcInZhclwiOlwiZGVsZXRlQnRuXCIsXCJza2luXCI6XCJjb21wL2J1dHRvbi5wbmdcIixcImxhYmVsXCI6XCJ4XCIsXCJoZWlnaHRcIjoyM30sXCJjb21wSWRcIjo1M31dfV19LHtcInR5cGVcIjpcIkJveFwiLFwicHJvcHNcIjp7XCJ5XCI6NDIyLFwieFwiOjIwOCxcIndpZHRoXCI6MjI1LFwiaGVpZ2h0XCI6MjJ9LFwiY29tcElkXCI6NTQsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJUZXh0SW5wdXRcIixcInByb3BzXCI6e1widmFyXCI6XCJhZGRJbnB1dFwiLFwic2tpblwiOlwiY29tcC90ZXh0aW5wdXQucG5nXCJ9LFwiY29tcElkXCI6NTF9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6LTEsXCJ4XCI6MTQ3LFwidmFyXCI6XCJhZGRCdG5cIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcImFkZFwifSxcImNvbXBJZFwiOjU1fV19XSxcImxvYWRMaXN0XCI6W1wiY29tcC9idXR0b24ucG5nXCIsXCJwcmVmYWIvQnV0dG9uLnByZWZhYlwiLFwiY29tcC92c2Nyb2xsLnBuZ1wiLFwiY29tcC90ZXh0aW5wdXQucG5nXCJdLFwibG9hZExpc3QzRFwiOltdfTtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVmlldyhBUGFnZVVJLnVpVmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUkVHKFwidWkudmlldy5BUGFnZVVJXCIsQVBhZ2VVSSk7XHJcbiAgICBleHBvcnQgY2xhc3MgQmFzZVRlc3RVSSBleHRlbmRzIEJhc2VWaWV3IHtcclxuXHRcdHB1YmxpYyB0YW5rOkxheWEuQ2xpcDtcblx0XHRwdWJsaWMgY2xvc2VCdG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIGRpYWxvZ0J0bjpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgbG9hZGluZ0J0bjpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgdmlld0J0bjpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgdG9rZW46TGF5YS5MYWJlbDtcblx0XHRwdWJsaWMgdXNlcm5hbWU6TGF5YS5MYWJlbDtcbiAgICAgICAgcHVibGljIHN0YXRpYyAgdWlWaWV3OmFueSA9e1widHlwZVwiOlwiQmFzZVZpZXdcIixcInByb3BzXCI6e1wid2lkdGhcIjo2NDAsXCJoZWlnaHRcIjoxMTM2fSxcImNvbXBJZFwiOjIsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJJbWFnZVwiLFwicHJvcHNcIjp7XCJ5XCI6MCxcInhcIjowLFwidG9wXCI6MCxcInNraW5cIjpcImNvbXAvaW1hZ2UucG5nXCIsXCJyaWdodFwiOjAsXCJsZWZ0XCI6MCxcImJvdHRvbVwiOjB9LFwiY29tcElkXCI6OH0se1widHlwZVwiOlwiQ2xpcFwiLFwicHJvcHNcIjp7XCJ5XCI6MCxcInhcIjowLFwidmFyXCI6XCJ0YW5rXCIsXCJza2luXCI6XCJDaGFyYWN0ZXJzL1RhbmtfOC5wbmdcIixcImluZGV4XCI6NCxcImNsaXBZXCI6NCxcImNsaXBYXCI6NCxcImNlbnRlcllcIjotMSxcImNlbnRlclhcIjowfSxcImNvbXBJZFwiOjN9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6MzI3LFwieFwiOjI4MixcInZhclwiOlwiY2xvc2VCdG5cIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcImNsb3NlXCJ9LFwiY29tcElkXCI6NH0se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjoyNTIsXCJ4XCI6NDcyLFwidmFyXCI6XCJkaWFsb2dCdG5cIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcImRpYWxvZ1wifSxcImNvbXBJZFwiOjV9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6MzA0LFwieFwiOjQ3MixcInZhclwiOlwibG9hZGluZ0J0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiYmFzZVwifSxcImNvbXBJZFwiOjZ9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6MzYyLFwieFwiOjQ3MixcInZhclwiOlwidmlld0J0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwidmlld1wifSxcImNvbXBJZFwiOjd9LHtcInR5cGVcIjpcIkxhYmVsXCIsXCJwcm9wc1wiOntcInlcIjoxODEsXCJ4XCI6MTA1LFwidmFyXCI6XCJ0b2tlblwiLFwidGV4dFwiOlwidG9rZW5cIixcImZvbnRTaXplXCI6MzAsXCJjb2xvclwiOlwiI2ZmZmZmZlwifSxcImNvbXBJZFwiOjl9LHtcInR5cGVcIjpcIkxhYmVsXCIsXCJwcm9wc1wiOntcInlcIjoyNTcsXCJ4XCI6MTA1LFwid29yZFdyYXBcIjp0cnVlLFwid2lkdGhcIjo5NSxcInZhclwiOlwidXNlcm5hbWVcIixcInRleHRcIjpcInRva2VuXCIsXCJoZWlnaHRcIjo1MSxcImZvbnRTaXplXCI6MzAsXCJjb2xvclwiOlwiI2ZmZmZmZlwiLFwiYmdDb2xvclwiOlwiI2ZmNzU3M1wifSxcImNvbXBJZFwiOjEwLFwiY2hpbGRcIjpbe1widHlwZVwiOlwiU2NyaXB0XCIsXCJwcm9wc1wiOntcIkxhbmd1YWdlSURcIjpcInRlc3R0ZXN0dGVzdFwiLFwiSXNGaWxsXCI6dHJ1ZSxcInJ1bnRpbWVcIjpcImNvcmUvZ2FtZS9zY3JpcHQvSExhYmVsLnRzXCJ9LFwiY29tcElkXCI6MTJ9XX1dLFwibG9hZExpc3RcIjpbXCJjb21wL2ltYWdlLnBuZ1wiLFwiQ2hhcmFjdGVycy9UYW5rXzgucG5nXCIsXCJjb21wL2J1dHRvbi5wbmdcIl0sXCJsb2FkTGlzdDNEXCI6W119O1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVWaWV3KEJhc2VUZXN0VUkudWlWaWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSRUcoXCJ1aS52aWV3LkJhc2VUZXN0VUlcIixCYXNlVGVzdFVJKTtcclxuICAgIGV4cG9ydCBjbGFzcyBCUGFnZVVJIGV4dGVuZHMgQmFzZVZpZXcge1xyXG5cdFx0cHVibGljIGNoYW5nZTpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgY2xvc2VfYnRuOkxheWEuQnV0dG9uO1xuXHRcdHB1YmxpYyB0b2tlbjpMYXlhLkxhYmVsO1xuXHRcdHB1YmxpYyB1c2VybmFtZTpMYXlhLkxhYmVsO1xuICAgICAgICBwdWJsaWMgc3RhdGljICB1aVZpZXc6YW55ID17XCJ0eXBlXCI6XCJCYXNlVmlld1wiLFwicHJvcHNcIjp7XCJ3aWR0aFwiOjMwMCxcImhlaWdodFwiOjExMzZ9LFwiY29tcElkXCI6MixcImNoaWxkXCI6W3tcInR5cGVcIjpcIlJlY3RcIixcInByb3BzXCI6e1wid2lkdGhcIjozMDAsXCJsaW5lV2lkdGhcIjoxLFwiaGVpZ2h0XCI6MTEzNixcImZpbGxDb2xvclwiOlwiI2NkZjlhNFwifSxcImNvbXBJZFwiOjN9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6NTM0LFwieFwiOjU5LFwid2lkdGhcIjoyMDAsXCJ2YXJcIjpcImNoYW5nZVwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiQ2hhbmdlQVBhZ2VcIixcImhlaWdodFwiOjUwfSxcImNvbXBJZFwiOjR9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6NjQ0LFwieFwiOjU5LFwid2lkdGhcIjoyMDAsXCJ2YXJcIjpcImNsb3NlX2J0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiQ2xvc2VcIixcImhlaWdodFwiOjUwfSxcImNvbXBJZFwiOjV9LHtcInR5cGVcIjpcIkxhYmVsXCIsXCJwcm9wc1wiOntcInlcIjoxODEsXCJ4XCI6MTA1LFwidmFyXCI6XCJ0b2tlblwiLFwidGV4dFwiOlwidG9rZW5cIixcImZvbnRTaXplXCI6MzAsXCJjb2xvclwiOlwiIzAwMDAwMFwifSxcImNvbXBJZFwiOjd9LHtcInR5cGVcIjpcIkxhYmVsXCIsXCJwcm9wc1wiOntcInlcIjoyNTcsXCJ4XCI6MTA1LFwidmFyXCI6XCJ1c2VybmFtZVwiLFwidGV4dFwiOlwidG9rZW5cIixcImZvbnRTaXplXCI6MzAsXCJjb2xvclwiOlwiIzAwMDAwMFwifSxcImNvbXBJZFwiOjh9XSxcImxvYWRMaXN0XCI6W1wiY29tcC9idXR0b24ucG5nXCJdLFwibG9hZExpc3QzRFwiOltdfTtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVmlldyhCUGFnZVVJLnVpVmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUkVHKFwidWkudmlldy5CUGFnZVVJXCIsQlBhZ2VVSSk7XHJcbiAgICBleHBvcnQgY2xhc3MgRGlhbG9nVGVzdFVJIGV4dGVuZHMgQmFzZVZpZXcge1xyXG5cdFx0cHVibGljIGJveDpMYXlhLkJveDtcblx0XHRwdWJsaWMgdGFuazpMYXlhLkNsaXA7XG5cdFx0cHVibGljIGNsb3NlQnRuOkxheWEuQnV0dG9uO1xuXHRcdHB1YmxpYyB0b2tlbjpMYXlhLkxhYmVsO1xuXHRcdHB1YmxpYyB1c2VybmFtZTpMYXlhLkxhYmVsO1xuICAgICAgICBwdWJsaWMgc3RhdGljICB1aVZpZXc6YW55ID17XCJ0eXBlXCI6XCJCYXNlVmlld1wiLFwicHJvcHNcIjp7XCJ3aWR0aFwiOjY0MCxcImhlaWdodFwiOjExMzZ9LFwiY29tcElkXCI6MixcImNoaWxkXCI6W3tcInR5cGVcIjpcIkJveFwiLFwicHJvcHNcIjp7XCJ3aWR0aFwiOjIwMCxcInZhclwiOlwiYm94XCIsXCJoZWlnaHRcIjoyMDAsXCJjZW50ZXJZXCI6MCxcImNlbnRlclhcIjowfSxcImNvbXBJZFwiOjksXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJJbWFnZVwiLFwicHJvcHNcIjp7XCJ0b3BcIjowLFwic2tpblwiOlwiY29tcC9pbWFnZS5wbmdcIixcInJpZ2h0XCI6MCxcImxlZnRcIjowLFwiYm90dG9tXCI6MH0sXCJjb21wSWRcIjoxMH0se1widHlwZVwiOlwiQ2xpcFwiLFwicHJvcHNcIjp7XCJ5XCI6NTUwLFwieFwiOjMwMyxcInZhclwiOlwidGFua1wiLFwic2tpblwiOlwiQ2hhcmFjdGVycy9UYW5rXzcucG5nXCIsXCJpbmRleFwiOjQsXCJjbGlwWVwiOjQsXCJjbGlwWFwiOjQsXCJjZW50ZXJZXCI6LTEsXCJjZW50ZXJYXCI6MH0sXCJjb21wSWRcIjozfSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjM5LFwieFwiOjYyLjUsXCJ2YXJcIjpcImNsb3NlQnRuXCIsXCJza2luXCI6XCJjb21wL2J1dHRvbi5wbmdcIixcImxhYmVsXCI6XCJjbG9zZVwifSxcImNvbXBJZFwiOjR9XX0se1widHlwZVwiOlwiTGFiZWxcIixcInByb3BzXCI6e1wieVwiOjE4MSxcInhcIjoxMDUsXCJ2YXJcIjpcInRva2VuXCIsXCJ0ZXh0XCI6XCJ0b2tlblwiLFwiZm9udFNpemVcIjozMCxcImNvbG9yXCI6XCIjZmZmZmZmXCJ9LFwiY29tcElkXCI6MTJ9LHtcInR5cGVcIjpcIkxhYmVsXCIsXCJwcm9wc1wiOntcInlcIjoyNTcsXCJ4XCI6MTA1LFwidmFyXCI6XCJ1c2VybmFtZVwiLFwidGV4dFwiOlwidG9rZW5cIixcImZvbnRTaXplXCI6MzAsXCJjb2xvclwiOlwiI2ZmZmZmZlwifSxcImNvbXBJZFwiOjEzfV0sXCJsb2FkTGlzdFwiOltcImNvbXAvaW1hZ2UucG5nXCIsXCJDaGFyYWN0ZXJzL1RhbmtfNy5wbmdcIixcImNvbXAvYnV0dG9uLnBuZ1wiXSxcImxvYWRMaXN0M0RcIjpbXX07XHJcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVZpZXcoRGlhbG9nVGVzdFVJLnVpVmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUkVHKFwidWkudmlldy5EaWFsb2dUZXN0VUlcIixEaWFsb2dUZXN0VUkpO1xyXG4gICAgZXhwb3J0IGNsYXNzIExvYWRpbmdVSSBleHRlbmRzIEJhc2VWaWV3IHtcclxuXHRcdHB1YmxpYyB0YW5rOkxheWEuQ2xpcDtcblx0XHRwdWJsaWMgYnRuX2Nsb3NlOkxheWEuQnV0dG9uO1xuXHRcdHB1YmxpYyBidG5fY29ubmVjdDpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgdG9rZW46TGF5YS5MYWJlbDtcblx0XHRwdWJsaWMgdXNlcm5hbWU6TGF5YS5MYWJlbDtcbiAgICAgICAgcHVibGljIHN0YXRpYyAgdWlWaWV3OmFueSA9e1widHlwZVwiOlwiQmFzZVZpZXdcIixcInByb3BzXCI6e1wid2lkdGhcIjo2NDAsXCJoZWlnaHRcIjoxMTM2fSxcImNvbXBJZFwiOjIsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJJbWFnZVwiLFwicHJvcHNcIjp7XCJ0b3BcIjowLFwic2tpblwiOlwiQ2hhcmFjdGVycy9UYW5rXzcucG5nXCIsXCJyaWdodFwiOjAsXCJsZWZ0XCI6MCxcImJvdHRvbVwiOjB9LFwiY29tcElkXCI6MTd9LHtcInR5cGVcIjpcIkNsaXBcIixcInByb3BzXCI6e1widmFyXCI6XCJ0YW5rXCIsXCJza2luXCI6XCJDaGFyYWN0ZXJzL1RhbmtfNC5wbmdcIixcImluZGV4XCI6NCxcImNsaXBZXCI6NCxcImNsaXBYXCI6NCxcImNlbnRlcllcIjotMSxcImNlbnRlclhcIjowfSxcImNvbXBJZFwiOjN9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6MzI3LFwieFwiOjI4Mi41LFwidmFyXCI6XCJidG5fY2xvc2VcIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcImNsb3NlXCJ9LFwiY29tcElkXCI6NH0se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjoyMjIsXCJ4XCI6MjgyLjUsXCJ2YXJcIjpcImJ0bl9jb25uZWN0XCIsXCJza2luXCI6XCJjb21wL2J1dHRvbi5wbmdcIixcImxhYmVsXCI6XCJjb25uZWN0XCJ9LFwiY29tcElkXCI6NX0se1widHlwZVwiOlwiTGFiZWxcIixcInByb3BzXCI6e1wieVwiOjE4MSxcInhcIjoxMDUsXCJ2YXJcIjpcInRva2VuXCIsXCJ0ZXh0XCI6XCJ0b2tlblwiLFwiZm9udFNpemVcIjozMCxcImNvbG9yXCI6XCIjZmZmZmZmXCJ9LFwiY29tcElkXCI6MTh9LHtcInR5cGVcIjpcIkxhYmVsXCIsXCJwcm9wc1wiOntcInlcIjoyNTcsXCJ4XCI6MTA1LFwidmFyXCI6XCJ1c2VybmFtZVwiLFwidGV4dFwiOlwidG9rZW5cIixcImZvbnRTaXplXCI6MzAsXCJjb2xvclwiOlwiI2ZmZmZmZlwifSxcImNvbXBJZFwiOjE5fV0sXCJsb2FkTGlzdFwiOltcIkNoYXJhY3RlcnMvVGFua183LnBuZ1wiLFwiQ2hhcmFjdGVycy9UYW5rXzQucG5nXCIsXCJjb21wL2J1dHRvbi5wbmdcIl0sXCJsb2FkTGlzdDNEXCI6W119O1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVWaWV3KExvYWRpbmdVSS51aVZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFJFRyhcInVpLnZpZXcuTG9hZGluZ1VJXCIsTG9hZGluZ1VJKTtcclxuICAgIGV4cG9ydCBjbGFzcyBMb2dpblVJIGV4dGVuZHMgQmFzZVZpZXcge1xyXG5cdFx0cHVibGljIHVzZXJuYW1lSW5wdXQ6TGF5YS5UZXh0SW5wdXQ7XG5cdFx0cHVibGljIHBhc3N3b3JkSW5wdXQ6TGF5YS5UZXh0SW5wdXQ7XG5cdFx0cHVibGljIGxvZ2luQnRuOkxheWEuQnV0dG9uO1xuXHRcdHB1YmxpYyByZWdpc3RlckJ0bjpMYXlhLkJ1dHRvbjtcbiAgICAgICAgcHVibGljIHN0YXRpYyAgdWlWaWV3OmFueSA9e1widHlwZVwiOlwiQmFzZVZpZXdcIixcInByb3BzXCI6e1wid2lkdGhcIjoxOTIwLFwiaGVpZ2h0XCI6MTA4MH0sXCJjb21wSWRcIjoyLFwiY2hpbGRcIjpbe1widHlwZVwiOlwiU3ByaXRlXCIsXCJwcm9wc1wiOntcInlcIjoxLFwieFwiOjAsXCJ3aWR0aFwiOjE5MjAsXCJoZWlnaHRcIjoxMDgwfSxcImNvbXBJZFwiOjYsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJSZWN0XCIsXCJwcm9wc1wiOntcIndpZHRoXCI6MTkyMCxcImxpbmVXaWR0aFwiOjEsXCJsaW5lQ29sb3JcIjpcIiNmZmZmZmZcIixcImhlaWdodFwiOjEwODAsXCJmaWxsQ29sb3JcIjpcIiM4Njg2ODZcIn0sXCJjb21wSWRcIjo3fV19LHtcInR5cGVcIjpcIlRleHRJbnB1dFwiLFwicHJvcHNcIjp7XCJ5XCI6NDE5LFwieFwiOjg1MCxcIndpZHRoXCI6Mjc5LFwidmFyXCI6XCJ1c2VybmFtZUlucHV0XCIsXCJza2luXCI6XCJjb21wL3RleHRpbnB1dC5wbmdcIixcImhlaWdodFwiOjQ4fSxcImNvbXBJZFwiOjN9LHtcInR5cGVcIjpcIlRleHRJbnB1dFwiLFwicHJvcHNcIjp7XCJ5XCI6NDk2LFwieFwiOjg1MCxcIndpZHRoXCI6Mjg0LFwidmFyXCI6XCJwYXNzd29yZElucHV0XCIsXCJza2luXCI6XCJjb21wL3RleHRpbnB1dC5wbmdcIixcImhlaWdodFwiOjQ5fSxcImNvbXBJZFwiOjR9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6NjQxLFwieFwiOjk3NSxcIndpZHRoXCI6MTU5LFwidmFyXCI6XCJsb2dpbkJ0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwibG9naW5cIixcImhlaWdodFwiOjQ5fSxcImNvbXBJZFwiOjV9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6NjM2LFwieFwiOjc1MyxcIndpZHRoXCI6MTc1LFwidmFyXCI6XCJyZWdpc3RlckJ0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwicmVnaXN0ZXJcIixcImhlaWdodFwiOjUzfSxcImNvbXBJZFwiOjh9XSxcImxvYWRMaXN0XCI6W1wiY29tcC90ZXh0aW5wdXQucG5nXCIsXCJjb21wL2J1dHRvbi5wbmdcIl0sXCJsb2FkTGlzdDNEXCI6W119O1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVWaWV3KExvZ2luVUkudWlWaWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSRUcoXCJ1aS52aWV3LkxvZ2luVUlcIixMb2dpblVJKTtcclxuICAgIGV4cG9ydCBjbGFzcyBMb2dpblN1Y2Nlc3NVSSBleHRlbmRzIEJhc2VWaWV3IHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljICB1aVZpZXc6YW55ID17XCJ0eXBlXCI6XCJCYXNlVmlld1wiLFwicHJvcHNcIjp7XCJ3aWR0aFwiOjE5MjAsXCJoZWlnaHRcIjoxMDgwfSxcImNvbXBJZFwiOjIsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJMYWJlbFwiLFwicHJvcHNcIjp7XCJ5XCI6NDEwLFwieFwiOjI2MyxcInRleHRcIjpcImxhYmVsXCIsXCJmb250U2l6ZVwiOjUwLFwiY29sb3JcIjpcIiNmZmZmZmZcIixcImJpbmRpbmdcIjpbXCJ0ZXh0fHVzZXIubmFtZXwoZnVuY3Rpb24obmFtZSl7cmV0dXJuIFxcXCJuYW1lOlxcXCIrbmFtZX0pXCJdfSxcImNvbXBJZFwiOjMsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJTY3JpcHRcIixcInByb3BzXCI6e1wiYmluZGluZ1wiOltcInRleHR8dXNlci5uYW1lfChmdW5jdGlvbihuYW1lKXtyZXR1cm4gXFxcIm5hbWU6XFxcIituYW1lfSlcIl0sXCJydW50aW1lXCI6XCJnYW1lL3VpL3ZpZXcvQVBhZ2UvVGVzdC50c1wifSxcImNvbXBJZFwiOjR9XX0se1widHlwZVwiOlwiTGFiZWxcIixcInByb3BzXCI6e1wieVwiOjU2OSxcInhcIjoyNjMsXCJ0ZXh0XCI6XCJsYWJlbFwiLFwiZm9udFNpemVcIjo1MCxcImNvbG9yXCI6XCIjZmZmZmZmXCIsXCJiaW5kaW5nXCI6W1widGV4dHx0b2tlbnwoZnVuY3Rpb24odG9rZW4pe3JldHVybiAndG9rZW46Jyt0b2tlbn0pXCJdfSxcImNvbXBJZFwiOjUsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJTY3JpcHRcIixcInByb3BzXCI6e1wiYmluZGluZ1wiOltcInRleHR8dG9rZW58KGZ1bmN0aW9uKHRva2VuKXtyZXR1cm4gJ3Rva2VuOicrdG9rZW59KVwiXSxcInJ1bnRpbWVcIjpcImdhbWUvdWkvdmlldy9BUGFnZS9UZXN0LnRzXCJ9LFwiY29tcElkXCI6Nn1dfV0sXCJsb2FkTGlzdFwiOltdLFwibG9hZExpc3QzRFwiOltdfTtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVmlldyhMb2dpblN1Y2Nlc3NVSS51aVZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFJFRyhcInVpLnZpZXcuTG9naW5TdWNjZXNzVUlcIixMb2dpblN1Y2Nlc3NVSSk7XHJcbiAgICBleHBvcnQgY2xhc3MgTWFwVmlld1VJIGV4dGVuZHMgQmFzZVZpZXcge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgIHVpVmlldzphbnkgPXtcInR5cGVcIjpcIkJhc2VWaWV3XCIsXCJwcm9wc1wiOntcIndpZHRoXCI6MTkyMCxcImhlaWdodFwiOjEwODB9LFwiY29tcElkXCI6MixcImNoaWxkXCI6W3tcInR5cGVcIjpcIkNsaXBcIixcInByb3BzXCI6e1wic2tpblwiOlwiQ2hhcmFjdGVycy9UYW5rXzMucG5nXCIsXCJpbmRleFwiOjAsXCJjbGlwWVwiOjQsXCJjbGlwWFwiOjQsXCJjZW50ZXJZXCI6MCxcImNlbnRlclhcIjowfSxcImNvbXBJZFwiOjR9XSxcImxvYWRMaXN0XCI6W1wiQ2hhcmFjdGVycy9UYW5rXzMucG5nXCJdLFwibG9hZExpc3QzRFwiOltdfTtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVmlldyhNYXBWaWV3VUkudWlWaWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSRUcoXCJ1aS52aWV3Lk1hcFZpZXdVSVwiLE1hcFZpZXdVSSk7XHJcbiAgICBleHBvcnQgY2xhc3MgVmlld1Rlc3RVSSBleHRlbmRzIEJhc2VWaWV3IHtcclxuXHRcdHB1YmxpYyB0YW5rOkxheWEuQ2xpcDtcblx0XHRwdWJsaWMgY2xvc2VCdG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIHZpZXdCdG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIHRva2VuOkxheWEuTGFiZWw7XG5cdFx0cHVibGljIHVzZXJuYW1lOkxheWEuTGFiZWw7XG4gICAgICAgIHB1YmxpYyBzdGF0aWMgIHVpVmlldzphbnkgPXtcInR5cGVcIjpcIkJhc2VWaWV3XCIsXCJwcm9wc1wiOntcIndpZHRoXCI6NjQwLFwiaGVpZ2h0XCI6MTEzNn0sXCJjb21wSWRcIjoyLFwiY2hpbGRcIjpbe1widHlwZVwiOlwiSW1hZ2VcIixcInByb3BzXCI6e1wieVwiOjAsXCJ4XCI6MCxcInRvcFwiOjAsXCJza2luXCI6XCJjb21wL2ltYWdlLnBuZ1wiLFwicmlnaHRcIjowLFwibGVmdFwiOjAsXCJib3R0b21cIjowfSxcImNvbXBJZFwiOjd9LHtcInR5cGVcIjpcIkNsaXBcIixcInByb3BzXCI6e1wieVwiOjAsXCJ4XCI6MCxcInZhclwiOlwidGFua1wiLFwic2tpblwiOlwiQ2hhcmFjdGVycy8k54u8LnBuZ1wiLFwiaW5kZXhcIjo0LFwiY2xpcFlcIjo0LFwiY2xpcFhcIjo0LFwiY2VudGVyWVwiOi0xLFwiY2VudGVyWFwiOjB9LFwiY29tcElkXCI6M30se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjozMjcsXCJ4XCI6MjgyLFwidmFyXCI6XCJjbG9zZUJ0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiY2xvc2VcIn0sXCJjb21wSWRcIjo0fSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjM4NSxcInhcIjoyODIuNSxcInZhclwiOlwidmlld0J0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwidmlld1wifSxcImNvbXBJZFwiOjV9LHtcInR5cGVcIjpcIkxhYmVsXCIsXCJwcm9wc1wiOntcInlcIjoxODEsXCJ4XCI6MTA1LFwidmFyXCI6XCJ0b2tlblwiLFwidGV4dFwiOlwidG9rZW5cIixcImZvbnRTaXplXCI6MzAsXCJjb2xvclwiOlwiI2ZmZmZmZlwifSxcImNvbXBJZFwiOjl9LHtcInR5cGVcIjpcIkxhYmVsXCIsXCJwcm9wc1wiOntcInlcIjoyNTcsXCJ4XCI6MTA1LFwidmFyXCI6XCJ1c2VybmFtZVwiLFwidGV4dFwiOlwidG9rZW5cIixcImZvbnRTaXplXCI6MzAsXCJjb2xvclwiOlwiI2ZmZmZmZlwifSxcImNvbXBJZFwiOjEwfV0sXCJsb2FkTGlzdFwiOltcImNvbXAvaW1hZ2UucG5nXCIsXCJDaGFyYWN0ZXJzLyTni7wucG5nXCIsXCJjb21wL2J1dHRvbi5wbmdcIl0sXCJsb2FkTGlzdDNEXCI6W119O1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVWaWV3KFZpZXdUZXN0VUkudWlWaWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSRUcoXCJ1aS52aWV3LlZpZXdUZXN0VUlcIixWaWV3VGVzdFVJKTtcclxuICAgIGV4cG9ydCBjbGFzcyBWaWV3VGVzdDFVSSBleHRlbmRzIEJhc2VWaWV3IHtcclxuXHRcdHB1YmxpYyB0YW5rOkxheWEuQ2xpcDtcblx0XHRwdWJsaWMgY2xvc2VCdG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIHRva2VuOkxheWEuTGFiZWw7XG5cdFx0cHVibGljIHVzZXJuYW1lOkxheWEuTGFiZWw7XG4gICAgICAgIHB1YmxpYyBzdGF0aWMgIHVpVmlldzphbnkgPXtcInR5cGVcIjpcIkJhc2VWaWV3XCIsXCJwcm9wc1wiOntcIndpZHRoXCI6NjQwLFwiaGVpZ2h0XCI6MTEzNn0sXCJjb21wSWRcIjoyLFwiY2hpbGRcIjpbe1widHlwZVwiOlwiSW1hZ2VcIixcInByb3BzXCI6e1wieVwiOjAsXCJ4XCI6MCxcInRvcFwiOjAsXCJza2luXCI6XCJjb21wL2ltYWdlLnBuZ1wiLFwicmlnaHRcIjowLFwibGVmdFwiOjAsXCJib3R0b21cIjowfSxcImNvbXBJZFwiOjZ9LHtcInR5cGVcIjpcIkNsaXBcIixcInByb3BzXCI6e1wieVwiOjAsXCJ4XCI6MCxcInZhclwiOlwidGFua1wiLFwic2tpblwiOlwiQ2hhcmFjdGVycy8k54u8LnBuZ1wiLFwiaW5kZXhcIjo0LFwiY2xpcFlcIjo0LFwiY2xpcFhcIjo0LFwiY2VudGVyWVwiOi0xLFwiY2VudGVyWFwiOjB9LFwiY29tcElkXCI6M30se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjozMjcsXCJ4XCI6MjgyLFwidmFyXCI6XCJjbG9zZUJ0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiY2xvc2VcIn0sXCJjb21wSWRcIjo0fSx7XCJ0eXBlXCI6XCJMYWJlbFwiLFwicHJvcHNcIjp7XCJ5XCI6MTgxLFwieFwiOjEwNSxcInZhclwiOlwidG9rZW5cIixcInRleHRcIjpcInRva2VuXCIsXCJmb250U2l6ZVwiOjMwLFwiY29sb3JcIjpcIiNmZmZmZmZcIn0sXCJjb21wSWRcIjo3fSx7XCJ0eXBlXCI6XCJMYWJlbFwiLFwicHJvcHNcIjp7XCJ5XCI6MjU3LFwieFwiOjEwNSxcInZhclwiOlwidXNlcm5hbWVcIixcInRleHRcIjpcInRva2VuXCIsXCJmb250U2l6ZVwiOjMwLFwiY29sb3JcIjpcIiNmZmZmZmZcIn0sXCJjb21wSWRcIjo4fV0sXCJsb2FkTGlzdFwiOltcImNvbXAvaW1hZ2UucG5nXCIsXCJDaGFyYWN0ZXJzLyTni7wucG5nXCIsXCJjb21wL2J1dHRvbi5wbmdcIl0sXCJsb2FkTGlzdDNEXCI6W119O1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVWaWV3KFZpZXdUZXN0MVVJLnVpVmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUkVHKFwidWkudmlldy5WaWV3VGVzdDFVSVwiLFZpZXdUZXN0MVVJKTtcclxufVxyIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==