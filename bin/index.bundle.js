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
            return Socket_1.Socket.init('main', { ip: 'http://localhost:3001' });
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
            return Fetch_1.Fetch.init('main', { url: 'http://localhost:3001' });
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

/***/ "./src/game/ui/view/LoginSuccess.ts":
/*!******************************************!*\
  !*** ./src/game/ui/view/LoginSuccess.ts ***!
  \******************************************/
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
var ViewConst_1 = __webpack_require__(/*! ../../../core/const/ViewConst */ "./src/core/const/ViewConst.ts");
var GameApp_1 = __webpack_require__(/*! ../../../core/game/GameApp */ "./src/core/game/GameApp.ts");
var store_1 = __webpack_require__(/*! ../../store/store */ "./src/game/store/store.ts");
var LoginSuccess = /** @class */ (function (_super) {
    __extends(LoginSuccess, _super);
    function LoginSuccess() {
        return _super.call(this) || this;
    }
    LoginSuccess.prototype.onOpen = function () {
        _super.prototype.onOpen.call(this);
        console.log("openSuccess:", store_1.store.getState());
        GameApp_1.default.socket.connect();
        GameApp_1.default.socket.addEvent('message', this, this.showMessage);
        GameApp_1.default.socket.sendEvent('message', { message: 'test' });
    };
    LoginSuccess.prototype.showMessage = function (message) {
        console.log(message);
    };
    LoginSuccess.viewKey = ViewConst_1.ViewConst.LoginSuccess;
    LoginSuccess = __decorate([
        MvcMgr_1.RegisterMVC(BaseLayer_1.BaseLayer)
    ], LoginSuccess);
    return LoginSuccess;
}(layaMaxUI_1.ui.view.LoginSuccessUI));
exports.LoginSuccess = LoginSuccess;


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
    Socket.prototype.sendEvent = function (event, message) {
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
var MvcMgr_1 = __webpack_require__(/*! ../core/mvc/MvcMgr */ "./src/core/mvc/MvcMgr.ts");
var LoginView_1 = __webpack_require__(/*! ../game/ui/view/LoginView */ "./src/game/ui/view/LoginView.ts");
var store_1 = __webpack_require__(/*! ../game/store/store */ "./src/game/store/store.ts");
var actions_1 = __webpack_require__(/*! ../game/store/actions */ "./src/game/store/actions.ts");
var LoginSuccess_1 = __webpack_require__(/*! ../game/ui/view/LoginSuccess */ "./src/game/ui/view/LoginSuccess.ts");
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
            if (!MvcMgr_1.viewMgr.isOpen(LoginSuccess_1.LoginSuccess)) {
                MvcMgr_1.openView(LoginSuccess_1.LoginSuccess);
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
            APageUI.uiView = { "type": "BaseView", "props": { "width": 640, "height": 1136 }, "compId": 2, "child": [{ "type": "Rect", "props": { "width": 640, "name": "r", "lineWidth": 1, "height": 1136, "fillColor": "#fbbbbb" }, "compId": 7 }, { "type": "Button", "props": { "y": 555, "x": 208, "width": 200, "var": "btn", "skin": "comp/button.png", "label": "GoTo BPage", "height": 50 }, "compId": 8 }, { "type": "HTMLDivElement", "props": { "y": 0, "x": 0, "width": 644, "var": "dd", "innerHTML": "<br/><span>  测试水平居中对齐</span>", "height": 265, "runtime": "laya.html.dom.HTMLDivElement" }, "compId": 20 }, { "type": "Button", "props": { "y": 669, "x": 208, "width": 200, "var": "baseBtn", "skin": "comp/button.png", "label": "GoTo Base", "height": 50 }, "compId": 15, "child": [{ "type": "Label", "props": { "y": -627, "x": 190, "width": 201, "var": "contents", "valign": "middle", "text": "ssss", "height": 500, "fontSize": 40, "align": "center" }, "compId": 14 }] }, { "type": "Label", "props": { "y": 121, "x": 275.5, "width": 63, "valign": "middle", "text": "label", "height": 22, "align": "center" }, "compId": 25 }, { "type": "Button", "props": { "y": 132, "x": 426, "vector1": ["label", "aaa", "d", "d", "label:aaa"], "var": "testBtn", "presetID": 1, "binding": ["label|testData.data1", "labelColors|testData.data1|(x)=>x===1?\"#FB8\":\"#000\""], "width": 192, "skin": "comp/button.png", "label": "按钮脚本", "isPresetRoot": true, "height": 90 }, "compId": 31, "child": [{ "type": "Script", "props": { "vector1": ["label", "aaa", "d", "d", "label:aaa"], "presetID": 2, "mo": false, "bindkey": "label", "binding": ["label|testData.data1", "labelColors|testData.data1|(x)=>x===1?\"#FB8\":\"#000\""], "bindVal": "testData.data1", "y": 1, "x": 0, "runtime": "game/ui/view/APage/Test.ts" }, "compId": 32 }] }, { "type": "List", "props": { "y": 132, "x": 30, "width": 260, "var": "todoList", "repeatX": 1, "height": 308 }, "compId": 49, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 77, "renderType": "render", "height": 34 }, "compId": 52, "child": [{ "type": "Label", "props": { "y": 7, "x": 0, "text": "label", "renderType": "render", "name": "label", "fontSize": 20 }, "compId": 50 }, { "type": "Button", "props": { "y": 5, "x": 54, "width": 23, "var": "deleteBtn", "skin": "comp/button.png", "label": "x", "height": 23 }, "compId": 53 }] }] }, { "type": "Box", "props": { "y": 422, "x": 208, "width": 225, "height": 22 }, "compId": 54, "child": [{ "type": "TextInput", "props": { "var": "addInput", "skin": "comp/textinput.png" }, "compId": 51 }, { "type": "Button", "props": { "y": -1, "x": 147, "var": "addBtn", "skin": "comp/button.png", "label": "add" }, "compId": 55 }] }], "loadList": ["comp/button.png", "prefab/Button.prefab", "comp/textinput.png"], "loadList3D": [] };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWVDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvVXRpbHMvRWZmZWN0VXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvYmFzZS9TaW5nbGV0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY29uc3QvTGF5ZXJDb25zdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9jb25zdC9WaWV3Q29uc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZ2FtZS9HYW1lQXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2dhbWUvc2NyaXB0L0hMYWJlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9nYW1lL3V0aWxzL1N0cmluZ1V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZ2FtZS91dGlscy9UaW1lVXRpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9tdmMvTXZjTWdyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL212Yy9VSUV2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL212Yy9WaWV3TWdyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL212Yy9sYXllci9CYXNlTGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvbXZjL3ZpZXcvQmFzZVZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvc2VydmljZS9TZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3NlcnZpY2UvZGlzcGF0Y2hlci9EaXNwYXRjaGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3NlcnZpY2UvZGlzcGF0Y2hlci9PYnNlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9zdG9yZS9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3N0b3JlL3JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvc3RvcmUvc2FnYXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvc3RvcmUvc3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvc3RvcmUvc3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdWkvdmlldy9BUGFnZS9UZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3VpL3ZpZXcvTG9naW5TdWNjZXNzLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3VpL3ZpZXcvTG9naW5WaWV3LnRzIiwid2VicGFjazovLy8uL3NyYy9uZXQvRmV0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ldC9Tb2NrZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ldC9odHRwL0dhbWVOZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ldC9odHRwL05ldFJlcXVlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lL01haW5TY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvbGF5YU1heFVJLnRzIiwid2VicGFjazovLy93cyAoaWdub3JlZCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LEVBQUMsR0FBRyxFQUFDLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsR0FBRyxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsRUFBRSxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxTQUFTLEVBQUMsQ0FBQyxPQUFPLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsV0FBVyxDQUFDLEVBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLHNCQUFzQixFQUFDLHlEQUF5RCxDQUFDLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLEVBQUMsaUJBQWlCLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxjQUFjLEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxPQUFPLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsV0FBVyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLENBQUMsc0JBQXNCLEVBQUMseURBQXlELENBQUMsRUFBQyxTQUFTLEVBQUMsZ0JBQWdCLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyw0QkFBNEIsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsR0FBRyxFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxFQUFFLEVBQUMsWUFBWSxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsWUFBWSxFQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsRUFBRSxFQUFDLEtBQUssRUFBQyxXQUFXLEVBQUMsTUFBTSxFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxXQUFXLEVBQUMsT0FBTyxFQUFDLEVBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxNQUFNLEVBQUMsb0JBQW9CLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxRQUFRLEVBQUMsTUFBTSxFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsaUJBQWlCLEVBQUMsc0JBQXNCLEVBQUMsb0JBQW9CLENBQUMsRUFBQyxZQUFZLEVBQUMsRUFBRSxFQUFDLENBQUM7WUFNdDRFLGNBQUM7U0FBQSxDQWhCNEIsUUFBUSxHQWdCcEM7UUFoQlksWUFBTyxVQWdCbkI7UUFDRCxHQUFHLENBQUMsaUJBQWlCLEVBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0I7WUFBZ0MsOEJBQVE7WUFTcEM7dUJBQWUsaUJBQU87WUFBQSxDQUFDO1lBQ3ZCLG1DQUFjLEdBQWQ7Z0JBQ0ksaUJBQU0sY0FBYyxXQUFFLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZDLENBQUM7WUFMYyxpQkFBTSxHQUFNLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsZ0JBQWdCLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyx1QkFBdUIsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsTUFBTSxFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsV0FBVyxFQUFDLE1BQU0sRUFBQyxpQkFBaUIsRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLFlBQVksRUFBQyxNQUFNLEVBQUMsaUJBQWlCLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxTQUFTLEVBQUMsTUFBTSxFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsVUFBVSxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsRUFBRSxFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsU0FBUyxFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxP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UUFBUSxFQUFDLElBQUksRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLHVCQUF1QixFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyx1QkFBdUIsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxXQUFXLEVBQUMsTUFBTSxFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsYUFBYSxFQUFDLE1BQU0sRUFBQyxpQkFBaUIsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyx1QkFBdUIsRUFBQyx1QkFBdUIsRUFBQyxpQkFBaUIsQ0FBQyxFQUFDLFlBQVksRUFBQyxFQUFFLEVBQUMsQ0FBQztZQU10NUIsZ0JBQUM7U0FBQSxDQVo4QixRQUFRLEdBWXRDO1FBWlksY0FBUyxZQVlyQjtRQUNELEdBQUcsQ0FBQyxtQkFBbUIsRUFBQyxTQUFTLENBQUMsQ0FBQztRQUNuQztZQUE2QiwyQkFBUTtZQU1qQzt1QkFBZSxpQkFBTztZQUFBLENBQUM7WUFDdkIsZ0NBQWMsR0FBZDtnQkFDSSxpQkFBTSxjQUFjLFdBQUUsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEMsQ0FBQztZQUxjLGNBQU0sR0FBTSxFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxFQUFDLE9BQU8sRUFBQyxJQUFJLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsV0FBVyxFQUFDLFNBQVMsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsV0FBVyxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxlQUFlLEVBQUMsTUFBTSxFQUFDLG9CQUFvQixFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsV0FBVyxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxlQUFlLEVBQUMsTUFBTSxFQUFDLG9CQUFvQixFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsTUFBTSxFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLGFBQWEsRUFBQyxNQUFN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QVMsRUFBQyxDQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxNQUFNLEVBQUMsaUJBQWlCLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxTQUFTLEVBQUMsTUFBTSxFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLGdCQUFnQixFQUFDLG1CQUFtQixFQUFDLGlCQUFpQixDQUFDLEVBQUMsWUFBWSxFQUFDLEVBQUUsRUFBQyxDQUFDO1lBTTU0QixpQkFBQztTQUFBLENBWitCLFFBQVEsR0FZdkM7UUFaWSxlQUFVLGFBWXRCO1FBQ0QsR0FBRyxDQUFDLG9CQUFvQixFQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDO1lBQWlDLCtCQUFRO1lBTXJDO3VCQUFlLGlCQUFPO1lBQUEsQ0FBQztZQUN2QixvQ0FBYyxHQUFkO2dCQUNJLGlCQUFNLGNBQWMsV0FBRSxDQUFDO2dCQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QyxDQUFDO1lBTGMsa0JBQU0sR0FBTSxFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLGdCQUFnQixFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsbUJBQW1CLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLE1BQU0sRUFBQyxpQkFBaUIsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxnQkFBZ0IsRUFBQyxtQkFBbUIsRUFBQyxpQkFBaUIsQ0FBQyxFQUFDLFlBQVksRUFBQyxFQUFFLEVBQUMsQ0FBQztZQU0xeEIsa0JBQUM7U0FBQSxDQVhnQyxRQUFRLEdBV3hDO1FBWFksZ0JBQVcsY0FXdkI7UUFDRCxHQUFHLENBQUMscUJBQXFCLEVBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0MsQ0FBQyxFQXRJZ0IsSUFBSSxHQUFKLE9BQUksS0FBSixPQUFJLFFBc0lwQjtBQUFELENBQUMsRUF0SWEsRUFBRSxHQUFGLFVBQUUsS0FBRixVQUFFLFFBc0lmOzs7Ozs7Ozs7Ozs7QUN2SkQsZSIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImluZGV4XCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvTWFpbi50c1wiLFwibGliXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLyoqVGhpcyBjbGFzcyBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBMYXlhQWlySURFLCBwbGVhc2UgZG8gbm90IG1ha2UgYW55IG1vZGlmaWNhdGlvbnMuICovXHJcbmltcG9ydCBNYWluU2NlbmUgZnJvbSBcIi4vc2NlbmUvTWFpblNjZW5lXCJcbmltcG9ydCBUZXN0IGZyb20gXCIuL2dhbWUvdWkvdmlldy9BUGFnZS9UZXN0XCJcbmltcG9ydCBITGFiZWwgZnJvbSBcIi4vY29yZS9nYW1lL3NjcmlwdC9ITGFiZWxcIlxyXG4vKlxyXG4qIOa4uOaIj+WIneWni+WMlumFjee9rjtcclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbmZpZ3tcclxuICAgIHN0YXRpYyB3aWR0aDpudW1iZXI9MTkyMDtcclxuICAgIHN0YXRpYyBoZWlnaHQ6bnVtYmVyPTEwODA7XHJcbiAgICBzdGF0aWMgc2NhbGVNb2RlOnN0cmluZz1cInNob3dhbGxcIjtcclxuICAgIHN0YXRpYyBzY3JlZW5Nb2RlOnN0cmluZz1cIm5vbmVcIjtcclxuICAgIHN0YXRpYyBhbGlnblY6c3RyaW5nPVwibWlkZGxlXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25IOnN0cmluZz1cImNlbnRlclwiO1xyXG4gICAgc3RhdGljIHN0YXJ0U2NlbmU6YW55PVwic2NlbmUvTWFpblNjZW5lLnNjZW5lXCI7XHJcbiAgICBzdGF0aWMgc2NlbmVSb290OnN0cmluZz1cIlwiO1xyXG4gICAgc3RhdGljIGRlYnVnOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgc3RhdDpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIHBoeXNpY3NEZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIGV4cG9ydFNjZW5lVG9Kc29uOmJvb2xlYW49dHJ1ZTtcclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG4gICAgc3RhdGljIGluaXQoKXtcclxuICAgICAgICB2YXIgcmVnOiBGdW5jdGlvbiA9IExheWEuQ2xhc3NVdGlscy5yZWdDbGFzcztcclxuICAgICAgICByZWcoXCJzY2VuZS9NYWluU2NlbmUudHNcIixNYWluU2NlbmUpO1xuICAgICAgICByZWcoXCJnYW1lL3VpL3ZpZXcvQVBhZ2UvVGVzdC50c1wiLFRlc3QpO1xuICAgICAgICByZWcoXCJjb3JlL2dhbWUvc2NyaXB0L0hMYWJlbC50c1wiLEhMYWJlbCk7XHJcbiAgICB9XHJcbn1cclxuR2FtZUNvbmZpZy5pbml0KCk7IiwiaW1wb3J0IEdhbWVDb25maWcgZnJvbSAnLi9HYW1lQ29uZmlnJ1xyXG5jbGFzcyBNYWluIHtcclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvL+agueaNrklEReiuvue9ruWIneWni+WMluW8leaTjlxyXG4gICAgaWYgKHdpbmRvd1snTGF5YTNEJ10pIExheWEzRC5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0KVxyXG4gICAgZWxzZSBMYXlhLmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQsIExheWFbJ1dlYkdMJ10pXHJcbiAgICBMYXlhWydQaHlzaWNzJ10gJiYgTGF5YVsnUGh5c2ljcyddLmVuYWJsZSgpXHJcbiAgICBMYXlhWydEZWJ1Z1BhbmVsJ10gJiYgTGF5YVsnRGVidWdQYW5lbCddLmVuYWJsZSgpXHJcbiAgICAvLyBMYXlhLnN0YWdlLnNjYWxlTW9kZSA9IEdhbWVDb25maWcuc2NhbGVNb2RlO1xyXG4gICAgTGF5YS5zdGFnZS5zY2FsZU1vZGUgPSBHYW1lQ29uZmlnLnNjYWxlTW9kZVxyXG4gICAgTGF5YS5zdGFnZS5zY3JlZW5Nb2RlID0gR2FtZUNvbmZpZy5zY3JlZW5Nb2RlXHJcbiAgICBMYXlhLnN0YWdlLmFsaWduViA9IEdhbWVDb25maWcuYWxpZ25WXHJcbiAgICBMYXlhLnN0YWdlLmFsaWduSCA9IEdhbWVDb25maWcuYWxpZ25IXHJcbiAgICAvL+WFvOWuueW+ruS/oeS4jeaUr+aMgeWKoOi9vXNjZW5l5ZCO57yA5Zy65pmvXHJcbiAgICBMYXlhLlVSTC5leHBvcnRTY2VuZVRvSnNvbiA9IEdhbWVDb25maWcuZXhwb3J0U2NlbmVUb0pzb25cclxuXHJcbiAgICAvL+aJk+W8gOiwg+ivlemdouadv++8iOmAmui/h0lEReiuvue9ruiwg+ivleaooeW8j++8jOaIluiAhXVybOWcsOWdgOWinuWKoGRlYnVnPXRydWXlj4LmlbDvvIzlnYflj6/miZPlvIDosIPor5XpnaLmnb/vvIlcclxuICAgIGlmIChHYW1lQ29uZmlnLmRlYnVnIHx8IExheWEuVXRpbHMuZ2V0UXVlcnlTdHJpbmcoJ2RlYnVnJykgPT0gJ3RydWUnKSBMYXlhLmVuYWJsZURlYnVnUGFuZWwoKVxyXG4gICAgaWYgKEdhbWVDb25maWcucGh5c2ljc0RlYnVnICYmIExheWFbJ1BoeXNpY3NEZWJ1Z0RyYXcnXSkgTGF5YVsnUGh5c2ljc0RlYnVnRHJhdyddLmVuYWJsZSgpXHJcbiAgICBpZiAoR2FtZUNvbmZpZy5zdGF0KSBMYXlhLlN0YXQuc2hvdygpXHJcbiAgICBMYXlhLmFsZXJ0R2xvYmFsRXJyb3IgPSB0cnVlXHJcbiAgICAvL+a/gOa0u+i1hOa6kOeJiOacrOaOp+WItu+8jHZlcnNpb24uanNvbueUsUlEReWPkeW4g+WKn+iDveiHquWKqOeUn+aIkO+8jOWmguaenOayoeacieS5n+S4jeW9seWTjeWQjue7rea1geeoi1xyXG4gICAgTGF5YS5SZXNvdXJjZVZlcnNpb24uZW5hYmxlKCd2ZXJzaW9uLmpzb24nLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25WZXJzaW9uTG9hZGVkKSwgTGF5YS5SZXNvdXJjZVZlcnNpb24uRklMRU5BTUVfVkVSU0lPTilcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25WZXJzaW9uTG9hZGVkKCk6IHZvaWQge1xyXG4gICAgLy/mv4DmtLvlpKflsI/lm77mmKDlsITvvIzliqDovb3lsI/lm77nmoTml7blgJnvvIzlpoLmnpzlj5HnjrDlsI/lm77lnKjlpKflm77lkIjpm4bph4zpnaLvvIzliJnkvJjlhYjliqDovb3lpKflm77lkIjpm4bvvIzogIzkuI3mmK/lsI/lm75cclxuICAgIExheWEuQXRsYXNJbmZvTWFuYWdlci5lbmFibGUoJ2ZpbGVjb25maWcuanNvbicsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkNvbmZpZ0xvYWRlZCkpXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQ29uZmlnTG9hZGVkKCk6IHZvaWQge1xyXG4gICAgLy/liqDovb1JREXmjIflrprnmoTlnLrmma9cclxuICAgIEdhbWVDb25maWcuc3RhcnRTY2VuZSAmJiBMYXlhLlNjZW5lLm9wZW4oR2FtZUNvbmZpZy5zdGFydFNjZW5lKVxyXG4gIH1cclxufVxyXG4vL+a/gOa0u+WQr+WKqOexu1xyXG5uZXcgTWFpbigpXHJcbiIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWZmZWN0VXRpbHMgIHtcbiAgLyoqXG4gICAqIOexu+S8vG1hY+S4iuWbvuagh+S4iuS4i+aKluWKqOeahOaViOaenFxuICAgKiBAcGFyYW0ge1Nwcml0ZX0gb2JqIOaKluWKqOWvueixoVxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5pdFkg6KaB5oqW5Yqo55qE5a+56LGh55qE5Yid5aeLWeWAvO+8jOWOn+Wni+S9jee9rlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayDmipbliqjliqjnlLvlrozmiJDlm57osIPlh73mlbBcbiAgICogQHBhcmFtIHthbnl9IHRoaXNPYmog5Zue6LCD5Ye95pWwdGhpc+WvueixoVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBtYWNJY29uU2hha2Uob2JqLCBpbml0WSwgY2FsbGJhY2ssIHRoaXNPYmopIHtcbiAgICAvL+aKluWKqOmikeeOh1vml7bpl7TvvIznp7vliqjot53nprtd77yM5Y+v5L+u5pS5XG4gICAgbGV0IGFyciA9IFtbMjAsIDMwMF0sIFsxNSwgMzAwXSwgWzEwLCAzMDBdLCBbNSwgMzAwXV1cblxuICAgIGxldCBpbmRleCA9IDBcbiAgICB0b1NoYWtlKClcblxuICAgIGZ1bmN0aW9uIHRvU2hha2UoKSB7XG4gICAgICBpZiAoaW5kZXggPj0gYXJyLmxlbmd0aCkge1xuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjay5hcHBseSh0aGlzT2JqLCBbXSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIExheWEuVHdlZW4udG8oXG4gICAgICAgICAgb2JqLFxuICAgICAgICAgIHsgeTogaW5pdFkgLSBhcnJbaW5kZXhdWzBdIH0sXG4gICAgICAgICAgYXJyW2luZGV4XVsxXSxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUobnVsbCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxuICAgICAgICAgICAgICBvYmosXG4gICAgICAgICAgICAgIHsgeTogaW5pdFkgfSxcbiAgICAgICAgICAgICAgYXJyW2luZGV4XVsxXSxcbiAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZShudWxsLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICArK2luZGV4XG4gICAgICAgICAgICAgICAgdG9TaGFrZSgpXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pLFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOWQkeS4iuenu+WKqOa3oeWHuu+8iOW8ueWHuuahhu+8iVxuICAgKiBAcGFyYW0ge1Nwcml0ZX0gb2JqIOa3oeWHuuWvueixoVxuICAgKiBAcGFyYW0ge251bWJlcn0gdGltZSDmt6Hlh7rml7bpl7RcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZWFzZSDmt6Hlh7rlh73mlbBcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sg5reh5Ye65a6M5oiQ5Zue6LCD5Ye95pWwXG4gICAqIEBwYXJhbSB7YW55fSB0aGlzT2JqIOWbnuiwg+WHveaVsHRoaXPlr7nosaFcbiAgICogQHBhcmFtIHtBcnJheX0gYXJyRGF0YSDlm57osIPkvKDlj4JcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZmxvd091dChvYmosIHRpbWUgPSA1MDAsIGVhc2UgPSBudWxsLCBjYWxsYmFjayA9IG51bGwsIHRoaXNPYmogPSBudWxsLCBhcnJEYXRhID0gbnVsbCkge1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgTGF5YS5Ud2Vlbi50byhvYmosIHsgeTogb2JqLnkgLSAxNTAsIGFscGhhOiAwIH0sIHRpbWUsIGVhc2UsIExheWEuSGFuZGxlci5jcmVhdGUodGhpc09iaiwgY2FsbGJhY2ssIGFyckRhdGEpKVxuICAgIH0gZWxzZSB7XG4gICAgICBMYXlhLlR3ZWVuLnRvKG9iaiwgeyB5OiBvYmoueSAtIDE1MCwgYWxwaGE6IDAgfSwgdGltZSwgZWFzZSwgTGF5YS5IYW5kbGVyLmNyZWF0ZShvYmosIG9iai5yZW1vdmVTZWxmLCBhcnJEYXRhKSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5paH5pys5pWw5a2X5aKe5YeP5pWI5p6cXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydE51bSDlvIDlp4vmlbDlgLxcbiAgICogQHBhcmFtIHtudW1iZXJ9IGVuZE51bSDmuJDlj5jliLDnmoTmlbDlgLxcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sg5reh5Ye65a6M5oiQ5Zue6LCD5Ye95pWwXG4gICAqIEBwYXJhbSB7YW55fSB0aGlzT2JqIOWbnuiwg+WHveaVsHRoaXPlr7nosaFcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZmxvd051bShzdGFydE51bSwgZW5kTnVtLCBjYWxsYmFjaywgdGhpc09iaiA9IG51bGwpIHtcbiAgICBsZXQgY2hhbmdlID0gTWF0aC5hYnMoZW5kTnVtIC0gc3RhcnROdW0pXG4gICAgaWYgKGNoYW5nZSA8PSAwKSByZXR1cm5cbiAgICBsZXQgZXZlcnlDaGFuZ2UgPSBjaGFuZ2UgLyAoZW5kTnVtIC0gc3RhcnROdW0pXG4gICAgbGV0IGN1cnJOdW0gPSBzdGFydE51bVxuICAgIGxldCB0aW1lciA9IG5ldyBMYXlhLlRpbWVyKClcbiAgICB0aW1lci5sb29wKDMwLCB0aGlzLCBjaGFuZ2VGdW4pXG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VGdW4oKSB7XG4gICAgICBjdXJyTnVtICs9IGV2ZXJ5Q2hhbmdlXG4gICAgICAtLWNoYW5nZVxuICAgICAgaWYgKGNoYW5nZSA8IDApIHtcbiAgICAgICAgdGltZXIuY2xlYXJBbGwodGhpcylcbiAgICAgICAgdGltZXIgPSBudWxsXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjay5hcHBseSh0aGlzT2JqLCBbY3Vyck51bV0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOW8gOWni+mXqueDgVxuICAgKiBAcGFyYW0ge1Nwcml0ZX0gb2JqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhbHBoYVRpbWUg6Zeq54OB6aKR546HXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHN0YXJ0RmxpY2tlcihvYmosIGFscGhhVGltZSA9IDcwMCkge1xuICAgIG9iai5hbHBoYSA9IDFcbiAgICBMYXlhLlR3ZWVuLnRvKFxuICAgICAgb2JqLFxuICAgICAgeyBhbHBoYTogMCB9LFxuICAgICAgYWxwaGFUaW1lLFxuICAgICAgbnVsbCxcbiAgICAgIExheWEuSGFuZGxlci5jcmVhdGUoXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIExheWEuVHdlZW4udG8ob2JqLCB7IGFscGhhOiAxIH0sIGFscGhhVGltZSwgbnVsbCwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLnN0YXJ0RmxpY2tlciwgW29ial0pKVxuICAgICAgICB9LmJpbmQodGhpcyksXG4gICAgICApLFxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiDlgZzmraLliqjnlLvmiYDmnInliqjnlLvlkI7lrrnlmajkvY3nva7liJ3lp4vljJbliLDljp/kvY3vvIzlkKbliJnlj6/og73lh7rnjrDkvY3nva7mlLnlj5jnmoRidWdcbiAgICogQHBhcmFtIHtTcHJpdGV9IG9ialxuICAgKiBAcGFyYW0ge251bWJlcn0geFBvc1xuICAgKiBAcGFyYW0ge251bWJlcn0geVBvc1xuICAgKi9cbiAgcHVibGljIHN0YXRpYyBzdG9wRWZmZWN0KG9iaiwgeFBvcyA9IG51bGwsIHlQb3MgPSBudWxsKSB7XG4gICAgTGF5YS5Ud2Vlbi5jbGVhckFsbChvYmopXG4gICAgaWYgKHhQb3MgIT09IG51bGwgJiYgeVBvcyAhPT0gbnVsbCkge1xuICAgICAgb2JqLnBvcyh4UG9zLCB5UG9zKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDngrnlh7vmlL7lpKfnvKnlsI/mlYjmnpxcbiAgICogQHBhcmFtIHtMYXlhLlNwcml0ZX1cbiAgICogQHBhcmFtIHtib29sZWFufSBpc0NoYW5nZVhZIOWmguaenOS4reW/g+eCueaYr+mUmueCueS4jemcgOimgeS/ruaUueS9jee9rlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBjbGlja0VmZmVjdChzcCwgaXNDaGFuZ2VYWSA9IHRydWUpIHtcbiAgICBpZiAoIXNwKSByZXR1cm5cbiAgICBzcC5vZmYoTGF5YS5FdmVudC5NT1VTRV9ET1dOLCB0aGlzLCB0aGlzLmN1YmljSW5PdXRFZmZlY3QpXG4gICAgc3Aub24oTGF5YS5FdmVudC5NT1VTRV9ET1dOLCB0aGlzLCB0aGlzLmN1YmljSW5PdXRFZmZlY3QsIFtzcCwgaXNDaGFuZ2VYWV0pXG4gIH1cbiAgcHVibGljIHN0YXRpYyBjbGVhckNsaWNrRWZmZWN0KHNwKSB7XG4gICAgaWYgKCFzcCkgcmV0dXJuXG4gICAgc3Aub2ZmKExheWEuRXZlbnQuTU9VU0VfRE9XTiwgdGhpcywgdGhpcy5jdWJpY0luT3V0RWZmZWN0KVxuICB9XG4gIHB1YmxpYyBzdGF0aWMgY3ViaWNJbk91dEVmZmVjdChzcCwgaXNDaGFuZ2VYWSkge1xuICAgIGlmIChzcC5fYW5pQnV0dG9uRWZmZWN0KSByZXR1cm5cbiAgICBzcC5fYW5pQnV0dG9uRWZmZWN0ID0gdHJ1ZVxuICAgIGxldCBfeCA9IHNwLnhcbiAgICBsZXQgX3kgPSBzcC55XG4gICAgbGV0IF9zY2FYID0gc3Auc2NhbGVYXG4gICAgbGV0IF9zY2FZID0gc3Auc2NhbGVZXG4gICAgbGV0IF9iaWdYLCBfYmlnWVxuICAgIGlmICghaXNDaGFuZ2VYWSkge1xuICAgICAgX2JpZ1ggPSBfeCAtICgoc3Aud2lkdGggKiAwLjEpID4+IDEpXG4gICAgICBfYmlnWSA9IF95IC0gKChzcC5oZWlnaHQgKiAwLjEpID4+IDEpXG4gICAgfSBlbHNlIHtcbiAgICAgIF9iaWdYID0gX3hcbiAgICAgIF9iaWdZID0gX3lcbiAgICB9XG4gICAgTGF5YS5Ud2Vlbi50byhcbiAgICAgIHNwLFxuICAgICAgeyB4OiBfYmlnWCwgeTogX2JpZ1ksIHNjYWxlWDogMS4xICogX3NjYVgsIHNjYWxlWTogMS4xICogX3NjYVkgfSxcbiAgICAgIDEwMCxcbiAgICAgIG51bGwsXG4gICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcbiAgICAgICAgTGF5YS5Ud2Vlbi50byhcbiAgICAgICAgICBzcCxcbiAgICAgICAgICB7IHg6IF94LCB5OiBfeSwgc2NhbGVYOiBfc2NhWCwgc2NhbGVZOiBfc2NhWSB9LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFzcC5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgICAgc3AuX2FuaUJ1dHRvbkVmZmVjdCA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgIClcbiAgICAgIH0pLFxuICAgIClcbiAgfVxufVxuIiwiLyoqXHJcbiAqIG5hbWVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBTaW5nbGV0b24ge1xyXG4gIC8qKlxyXG4gICAqIGRlZmF1bHQgY29uc3RyYWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgX2luc3RhbmNlOiBhbnlcclxuICAvKipcclxuICAgKiBnZXQgaW5zdGFuY2Ugb3IgY3JlYXRlIG5ldyBpbnN0YW5jZVxyXG4gICAqIEByZXR1cm5zIHthbnl9XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBDcmVhdGVPckdldCguLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICBjb25zdCBpbnN0VDogYW55ID0gdGhpc1xyXG4gICAgcmV0dXJuIChpbnN0VC5faW5zdGFuY2UgPSBpbnN0VC5faW5zdGFuY2UgfHwgbmV3IGluc3RUKC4uLmFyZ3MpKVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZW51bSBMYXllckNvbnN0IHtcbiAgYmFzZSA9IDEsXG4gIGJhc2UxLFxuICB2aWV3LFxuICBzaGFyZSxcbiAgZGlhbG9nLFxuICBsb2FkaW5nLFxufVxuIiwiZXhwb3J0IGVudW0gVmlld0NvbnN0IHtcclxuICBNYWluID0gMSxcclxuICBMb2FkaW5nLFxyXG4gIFZpZXdUZXN0LFxyXG4gIFZpZXdUZXN0MSxcclxuICBEaWFsb2dUZXN0LFxyXG4gIEJhc2VUZXN0LFxyXG4gIEFQYWdlLFxyXG4gIEJQYWdlLFxyXG4gIExvZ2luLFxyXG4gIExvZ2luU3VjY2Vzc1xyXG59XHJcbiIsImltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL1NlcnZpY2UnXG5pbXBvcnQgeyBEaXNwYXRjaGVyIH0gZnJvbSAnLi4vc2VydmljZS9kaXNwYXRjaGVyL0Rpc3BhdGNoZXInXG5pbXBvcnQgeyBTb2NrZXQgfSBmcm9tICcuLi8uLi9uZXQvU29ja2V0J1xuaW1wb3J0IHsgU3RyaW5nVXRpbCB9IGZyb20gJy4vdXRpbHMvU3RyaW5nVXRpbCdcbmltcG9ydCB7IFRpbWVVdGlsIH0gZnJvbSAnLi91dGlscy9UaW1lVXRpbCdcblxuaW1wb3J0IEdhbWVOZXQgZnJvbSAnLi4vLi4vbmV0L2h0dHAvR2FtZU5ldCdcbmltcG9ydCB7IEZldGNoIH0gZnJvbSAnLi4vLi4vbmV0L0ZldGNoJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUFwcCB7XG4gIC8vIOWFqOWxgOmFjee9ruaVsOaNrlxuICBwdWJsaWMgc3RhdGljIEdsb2JhbERhdGE6IGFueSA9IG51bGxcblxuICAvKipcbiAgICog5Yid5aeL5YyW5Ye95pWwXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBpbml0KCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBHYW1lQXBwLkdsb2JhbERhdGEgPSBMYXlhLmxvYWRlci5nZXRSZXMoJ2NvbmYvZ2xvYmFsLmpzb24nKVxuICAgICAgLy/luKfova7or6JcbiAgICAgIFNlcnZpY2UuSW5pdCgpXG4gICAgICByZXNvbHZlKClcbiAgICB9KVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXQgZGlzcGF0Y2hlcigpOiBEaXNwYXRjaGVyIHtcbiAgICByZXR1cm4gU2VydmljZS5kaXNwYXRjaGVyXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldCBTdHJpbmdVdGlsKCk6IFN0cmluZ1V0aWwge1xuICAgIHJldHVybiBTdHJpbmdVdGlsLkNyZWF0ZU9yR2V0KClcbiAgfVxuICBwdWJsaWMgc3RhdGljIGdldCBUaW1lVXRpbCgpOiBUaW1lVXRpbCB7XG4gICAgcmV0dXJuIFRpbWVVdGlsLkNyZWF0ZU9yR2V0KClcbiAgfVxuICBwdWJsaWMgc3RhdGljIGdldCBzb2NrZXQoKTogU29ja2V0IHtcbiAgICByZXR1cm4gU29ja2V0LmluaXQoJ21haW4nLCB7IGlwOiAnaHR0cDovL2xvY2FsaG9zdDozMDAxJyB9KVxuICB9XG4gIHB1YmxpYyBzdGF0aWMgZ2V0IG5ldCgpOiBHYW1lTmV0IHtcbiAgICByZXR1cm4gR2FtZU5ldC5DcmVhdGVPckdldCgpXG4gIH1cbiAgcHVibGljIHN0YXRpYyBnZXQgZmV0Y2goKTogRmV0Y2gge1xuICAgIHJldHVybiBGZXRjaC5pbml0KCdtYWluJywgeyB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDEnIH0pXG4gIH1cbn1cbiIsIi8qKlxyXG4gKiDlpJror63oqIBMYWJlbFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSExhYmVsIGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gIH1cclxuICAvKiogQHByb3Age25hbWU6TGFuZ3VhZ2VJRCx0eXBlOnN0cmluZ30qL1xyXG4gIHB1YmxpYyBMYW5ndWFnZUlEOiBzdHJpbmdcclxuICAvKiogQHByb3Age25hbWU6SXNGaXQsdHlwZTpCb29sfSovXHJcbiAgcHVibGljIElzRml0OiBib29sZWFuID0gdHJ1ZVxyXG4gIC8qKiBAcHJvcCB7bmFtZTpJc0ZpbGwsdGlwczpcIjEsMFwiLHR5cGU6Qm9vbH0qL1xyXG4gIHB1YmxpYyBJc0ZpbGw6IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICBwcml2YXRlIF9sYW5nTGFiZWw6IExheWEuTGFiZWxcclxuICBvbkF3YWtlKCkge1xyXG4gICAgdGhpcy5fbGFuZ0xhYmVsID0gdGhpcy5vd25lciBhcyBMYXlhLkxhYmVsXHJcbiAgICB0aGlzLmxhbmcoKVxyXG4gIH1cclxuICBwcml2YXRlIGxhbmcoKSB7XHJcbiAgICBpZiAodGhpcy5MYW5ndWFnZUlEKSB7XHJcbiAgICAgIHRoaXMuX2xhbmdMYWJlbC50ZXh0ID0gdGhpcy5MYW5ndWFnZUlEXHJcbiAgICB9XHJcbiAgICB0aGlzLmZpdCgpXHJcbiAgfVxyXG4gIHB1YmxpYyBmaXQoKSB7XHJcbiAgICBpZiAoIXRoaXMuSXNGaXQpIHJldHVyblxyXG4gICAgaWYgKCF0aGlzLl9sYW5nTGFiZWwud29yZFdyYXApIHtcclxuICAgICAgaWYgKHRoaXMuSXNGaWxsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xhbmdMYWJlbFsnX3RmJ10udGV4dFdpZHRoID4gdGhpcy5fbGFuZ0xhYmVsLndpZHRoKSB0aGlzLmZpdFNob3J0V2lkdGgoKVxyXG4gICAgICAgIGVsc2UgdGhpcy5maXRMb25nV2lkdGgoKVxyXG4gICAgICB9IGVsc2UgdGhpcy5maXRTaG9ydFdpZHRoKClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLklzRmlsbCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9sYW5nTGFiZWxbJ190ZiddLnRleHRIZWlnaHQgPiB0aGlzLl9sYW5nTGFiZWwuaGVpZ2h0KSB0aGlzLmZpdFNob3J0SGVpZ2h0KClcclxuICAgICAgICBlbHNlIHRoaXMuZml0TG9uZ0hlaWdodCgpXHJcbiAgICAgIH0gZWxzZSB0aGlzLmZpdFNob3J0SGVpZ2h0KClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZml0U2hvcnRXaWR0aCgpIHtcclxuICAgIHZhciBmbGFnID0gdGhpcy5fbGFuZ0xhYmVsWydfdGYnXS50ZXh0V2lkdGggPiB0aGlzLl9sYW5nTGFiZWwud2lkdGhcclxuICAgIHZhciBmU2l6ZSA9IHRoaXMuX2xhbmdMYWJlbC5mb250U2l6ZVxyXG4gICAgd2hpbGUgKGZsYWcpIHtcclxuICAgICAgZlNpemUgPSBmU2l6ZSAtIDFcclxuICAgICAgTGF5YS5Ccm93c2VyLmNvbnRleHQuZm9udCA9IGZTaXplICsgJ3B4IEFyaWFsJ1xyXG4gICAgICB2YXIgYnJvd3NlclRleHQgPSBMYXlhLkJyb3dzZXIuY29udGV4dC5tZWFzdXJlVGV4dCh0aGlzLl9sYW5nTGFiZWwudGV4dClcclxuICAgICAgZmxhZyA9IGJyb3dzZXJUZXh0LndpZHRoID4gdGhpcy5fbGFuZ0xhYmVsLndpZHRoICYmIGZTaXplID4gMTJcclxuICAgIH1cclxuICAgIHRoaXMuX2xhbmdMYWJlbC5mb250U2l6ZSA9IGZTaXplXHJcbiAgfVxyXG4gIHByaXZhdGUgZml0TG9uZ1dpZHRoKCkge1xyXG4gICAgdmFyIGZsYWcgPSB0aGlzLl9sYW5nTGFiZWxbJ190ZiddLnRleHRXaWR0aCA8IHRoaXMuX2xhbmdMYWJlbC53aWR0aFxyXG4gICAgdmFyIGZTaXplID0gdGhpcy5fbGFuZ0xhYmVsLmZvbnRTaXplXHJcbiAgICB3aGlsZSAoZmxhZykge1xyXG4gICAgICBmU2l6ZSA9IGZTaXplICsgMVxyXG4gICAgICBMYXlhLkJyb3dzZXIuY29udGV4dC5mb250ID0gZlNpemUgKyAncHggQXJpYWwnXHJcbiAgICAgIHZhciBicm93c2VyVGV4dCA9IExheWEuQnJvd3Nlci5jb250ZXh0Lm1lYXN1cmVUZXh0KHRoaXMuX2xhbmdMYWJlbC50ZXh0KVxyXG4gICAgICBmbGFnID0gYnJvd3NlclRleHQud2lkdGggPCB0aGlzLl9sYW5nTGFiZWwud2lkdGhcclxuICAgIH1cclxuICAgIHRoaXMuX2xhbmdMYWJlbC5mb250U2l6ZSA9IGZTaXplXHJcbiAgfVxyXG4gIHByaXZhdGUgZml0U2hvcnRIZWlnaHQoKSB7XHJcbiAgICB2YXIgZmxhZyA9IHRoaXMuX2xhbmdMYWJlbFsnX3RmJ10udGV4dEhlaWdodCA+IHRoaXMuX2xhbmdMYWJlbC5oZWlnaHRcclxuICAgIHZhciBmU2l6ZSA9IHRoaXMuX2xhbmdMYWJlbC5mb250U2l6ZVxyXG4gICAgd2hpbGUgKGZsYWcpIHtcclxuICAgICAgZlNpemUgPSBmU2l6ZSAtIDFcclxuICAgICAgTGF5YS5Ccm93c2VyLmNvbnRleHQuZm9udCA9IGZTaXplICsgJ3B4IEFyaWFsJ1xyXG4gICAgICB0aGlzLl9sYW5nTGFiZWwuZm9udFNpemUgPSBmU2l6ZVxyXG4gICAgICBmbGFnID0gdGhpcy5fbGFuZ0xhYmVsWydfdGYnXS50ZXh0SGVpZ2h0ID4gdGhpcy5fbGFuZ0xhYmVsLmhlaWdodCAmJiBmU2l6ZSA+IDEyXHJcbiAgICB9XHJcbiAgfVxyXG4gIHByaXZhdGUgZml0TG9uZ0hlaWdodCgpIHtcclxuICAgIHZhciBmbGFnID0gdGhpcy5fbGFuZ0xhYmVsWydfdGYnXS50ZXh0SGVpZ2h0IDwgdGhpcy5fbGFuZ0xhYmVsLmhlaWdodFxyXG4gICAgdmFyIGZTaXplID0gdGhpcy5fbGFuZ0xhYmVsLmZvbnRTaXplXHJcbiAgICB3aGlsZSAoZmxhZykge1xyXG4gICAgICBmU2l6ZSA9IGZTaXplICsgMVxyXG4gICAgICBMYXlhLkJyb3dzZXIuY29udGV4dC5mb250ID0gZlNpemUgKyAncHggQXJpYWwnXHJcbiAgICAgIHRoaXMuX2xhbmdMYWJlbC5mb250U2l6ZSA9IGZTaXplXHJcbiAgICAgIGZsYWcgPSB0aGlzLl9sYW5nTGFiZWxbJ190ZiddLnRleHRIZWlnaHQgPCB0aGlzLl9sYW5nTGFiZWwuaGVpZ2h0XHJcbiAgICB9XHJcbiAgICB0aGlzLl9sYW5nTGFiZWwuZm9udFNpemUgPSBmU2l6ZSAtIDFcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2luZ2xldG9uIH0gZnJvbSAnLi4vLi4vYmFzZS9TaW5nbGV0b24nXHJcblxyXG5leHBvcnQgY2xhc3MgU3RyaW5nVXRpbCBleHRlbmRzIFNpbmdsZXRvbiB7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTaW5nbGV0b24gfSBmcm9tICcuLi8uLi9iYXNlL1NpbmdsZXRvbidcclxuXHJcbmV4cG9ydCBjbGFzcyBUaW1lVXRpbCBleHRlbmRzIFNpbmdsZXRvbiB7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gIH1cclxuICAvL+WJqeS9meaXtumXtOi9rOaXtuWIhuenku+8iOenku+8iVxyXG4gIHByaXZhdGUgY2hhbmdlVGltZSh0aW1lOiBudW1iZXIpOiB7IGhvdXJzOiBudW1iZXI7IG1pbnV0ZXM6IG51bWJlcjsgc2Vjb25kczogbnVtYmVyIH0ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaG91cnM6IE1hdGguZmxvb3IodGltZSAvIDM2MDApLFxyXG4gICAgICBtaW51dGVzOiBNYXRoLmZsb29yKCh0aW1lICUgMzYwMCkgLyA2MCksXHJcbiAgICAgIHNlY29uZHM6IHRpbWUgJSA2MCxcclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICog5YCS6K6h5pe2XHJcbiAgICogQHBhcmFtIHRpbWUg5pe26Ze05oiz77yIc++8iVxyXG4gICAqIEBwYXJhbSBob3VyIOaXtlxyXG4gICAqIEBwYXJhbSBtaW51dGUg5YiGXHJcbiAgICogQHBhcmFtIHNlY29uZCDnp5JcclxuICAgKi9cclxuICBwdWJsaWMgY291bnREb3duKHRpbWU6IG51bWJlciwgaG91cjogc3RyaW5nID0gJ+aXticsIG1pbnV0ZTogc3RyaW5nID0gJ+WIhicsIHNlY29uZDogc3RyaW5nID0gJ+enkicpOiBzdHJpbmcge1xyXG4gICAgbGV0IHRlbXAgPSB0aGlzLmNoYW5nZVRpbWUodGltZSlcclxuICAgIHJldHVybiBgJHt0ZW1wLmhvdXJzfSR7aG91cn0ke3RlbXAubWludXRlc30ke21pbnV0ZX0ke3RlbXAuc2Vjb25kc30ke3NlY29uZH1gXHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIOagvOW8j+WMluaXtumXtFxyXG4gICAqIEBwYXJhbSBkYXRlIERhdGVcclxuICAgKiBAcGFyYW0gZm9ybWF0IOagvOW8j1xyXG4gICAqL1xyXG4gIHB1YmxpYyBEYXRlRm9ybWF0KGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nID0gJ3l5eXktTU0tZGQgaGg6bW06c3MnKTogc3RyaW5nIHtcclxuICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXHJcbiAgICBsZXQgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxID4gOSA/IGRhdGUuZ2V0TW9udGgoKSArIDEgOiBgMCR7ZGF0ZS5nZXRNb250aCgpICsgMX1gXHJcbiAgICBsZXQgbW9udGgyID0gZGF0ZS5nZXRNb250aCgpICsgMVxyXG4gICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpID4gOSA/IGRhdGUuZ2V0RGF0ZSgpIDogYDAke2RhdGUuZ2V0RGF0ZSgpfWBcclxuICAgIGxldCBkYXkyID0gZGF0ZS5nZXREYXRlKClcclxuICAgIGxldCBob3VyID0gZGF0ZS5nZXRIb3VycygpID4gOSA/IGRhdGUuZ2V0SG91cnMoKSA6IGAwJHtkYXRlLmdldEhvdXJzKCl9YFxyXG4gICAgbGV0IGhvdXIyID0gZGF0ZS5nZXRIb3VycygpXHJcbiAgICBsZXQgbWludXRlID0gZGF0ZS5nZXRNaW51dGVzKCkgPiA5ID8gZGF0ZS5nZXRNaW51dGVzKCkgOiBgMCR7ZGF0ZS5nZXRNaW51dGVzKCl9YFxyXG4gICAgbGV0IG1pbnV0ZTIgPSBkYXRlLmdldE1pbnV0ZXMoKVxyXG4gICAgbGV0IHNlY29uZCA9IGRhdGUuZ2V0U2Vjb25kcygpID4gOSA/IGRhdGUuZ2V0U2Vjb25kcygpIDogYDAke2RhdGUuZ2V0U2Vjb25kcygpfWBcclxuICAgIGxldCBzZWNvbmQyID0gZGF0ZS5nZXRTZWNvbmRzKClcclxuXHJcbiAgICByZXR1cm4gZm9ybWF0XHJcbiAgICAgIC5yZXBsYWNlKC95eXl5LywgYCR7eWVhcn1gKVxyXG4gICAgICAucmVwbGFjZSgvTU0vLCBgJHttb250aH1gKVxyXG4gICAgICAucmVwbGFjZSgvTS8sIGAke21vbnRoMn1gKVxyXG4gICAgICAucmVwbGFjZSgvZGQvLCBgJHtkYXl9YClcclxuICAgICAgLnJlcGxhY2UoL2QvLCBgJHtkYXkyfWApXHJcbiAgICAgIC5yZXBsYWNlKC9oaC8sIGAke2hvdXJ9YClcclxuICAgICAgLnJlcGxhY2UoL2gvLCBgJHtob3VyMn1gKVxyXG4gICAgICAucmVwbGFjZSgvbW0vLCBgJHttaW51dGV9YClcclxuICAgICAgLnJlcGxhY2UoL20vLCBgJHttaW51dGUyfWApXHJcbiAgICAgIC5yZXBsYWNlKC9zcy8sIGAke3NlY29uZH1gKVxyXG4gICAgICAucmVwbGFjZSgvcy8sIGAke3NlY29uZDJ9YClcclxuICB9XHJcbiAgLyoqXHJcbiAgICog6I635Y+W5b2T5YmNdXRj5aSpMOeCuVxyXG4gICAqL1xyXG4gIHB1YmxpYyBVVENEYXRlKCk6IERhdGUge1xyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKVxyXG4gICAgbm93LnNldFVUQ0hvdXJzKDApXHJcbiAgICBub3cuc2V0VVRDTWludXRlcygwKVxyXG4gICAgbm93LnNldFVUQ1NlY29uZHMoMClcclxuICAgIG5vdy5zZXRVVENNaWxsaXNlY29uZHMoMClcclxuICAgIHJldHVybiBub3dcclxuICB9XHJcbiAgLyoqXHJcbiAgICog6I635Y+W5b2T5YmN5pe26Ze05Yiw5YiwMTk3MC0xLTHnmoTlpKnmlbDvvIh1dGPvvIlcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0VVRDRGF0ZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvICgyNCAqIDYwICogNjAgKiAxMDAwKSlcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgdiBmcm9tICcuL1ZpZXdNZ3InXHJcbi8qKlxyXG4gKiBNVkNcclxuICogW1xyXG4gKiAge1xyXG4gKiAgICB2aWV3S2V5LFxyXG4gKiAgICBWaWV3LFxyXG4gKiAgICB2aWV3LFZpZXflrp7kvotcclxuICogICAgTGF5ZXIsXHJcbiAqICAgIGxheWVyLExheWVy5a6e5L6LXHJcbiAqICAgIGV2ZW50LFxyXG4gKiAgfVxyXG4gKiBdXHJcbiAqL1xyXG5jb25zdCBNVkMgPSBbXVxyXG5leHBvcnQgY29uc3QgZmluZEJ5Vmlld0tleSA9IHZpZXdLZXkgPT4gTVZDLmZpbmQoaXRlbSA9PiBpdGVtLnZpZXdLZXkgPT09IHZpZXdLZXkpXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVNVkNJdGVtID0gKHsgdmlld0tleSwgLi4ucHJvcCB9KSA9PiB7XHJcbiAgY29uc3QgaW5kZXggPSBNVkMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS52aWV3S2V5ID09PSB2aWV3S2V5KVxyXG4gIGxldCBtdmNcclxuICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgY29uc3QgaXRlbSA9IE1WQ1tpbmRleF1cclxuICAgIG12YyA9IHsgLi4uaXRlbSwgLi4ucHJvcCB9XHJcbiAgICBNVkMuc3BsaWNlKGluZGV4LCAxLCBtdmMpXHJcbiAgfSBlbHNlIHtcclxuICAgIG12YyA9IHsgdmlld0tleSwgLi4ucHJvcCB9XHJcbiAgICBNVkMucHVzaChtdmMpXHJcbiAgfVxyXG4gIHJldHVybiBtdmNcclxufVxyXG5sZXQgVUkgPSBMYXlhLnN0YWdlXHJcbmNvbnN0IFJlZ2lzdGVyTVZDID0gTGF5ZXIgPT4ge1xyXG4gIHJldHVybiBWaWV3ID0+IHtcclxuICAgIHVwZGF0ZU1WQ0l0ZW0oe1xyXG4gICAgICB2aWV3S2V5OiBWaWV3LnZpZXdLZXksXHJcbiAgICAgIExheWVyLFxyXG4gICAgICBWaWV3LFxyXG4gICAgfSlcclxuICAgIHJldHVybiBWaWV3XHJcbiAgfVxyXG59XHJcbmNvbnN0IHNldFVJUm9vdCA9IHJvb3QgPT4ge1xyXG4gIFVJID0gcm9vdFxyXG59XHJcbmNvbnN0IHZpZXdNZ3IgPSB2Lm12Yy52aWV3TWdyXHJcbmNvbnN0IG9wZW5WaWV3ID0gdi5tdmMub3BlblZpZXdcclxuY29uc3QgY2xvc2VWaWV3ID0gdi5tdmMuY2xvc2VWaWV3XHJcbmV4cG9ydCB7IHZpZXdNZ3IsIG9wZW5WaWV3LCBjbG9zZVZpZXcsIFJlZ2lzdGVyTVZDLCBzZXRVSVJvb3QsIE1WQywgVUkgfVxyXG4iLCJpbXBvcnQgeyB1cGRhdGVNVkNJdGVtIH0gZnJvbSAnLi9NdmNNZ3InXHJcblxyXG5leHBvcnQgY29uc3QgQ2xpY2sgPSAodWksIC4uLmFyZ3MpID0+IHtcclxuICByZXR1cm4gKFZpZXcsIG5hbWUsIGRlc2NyaXB0b3IpID0+IHtcclxuICAgIGNvbnN0IEV2ZW50VHlwZSA9IExheWEuRXZlbnQuQ0xJQ0tcclxuICAgIGNvbnN0IG12YyA9IHVwZGF0ZU1WQ0l0ZW0oeyB2aWV3S2V5OiBWaWV3LmNvbnN0cnVjdG9yLnZpZXdLZXkgfSlcclxuICAgIG12Yy5ldmVudCA9IG12Yy5ldmVudCB8fCB7fVxyXG4gICAgY29uc3QgZXZlbnQgPSBtdmMuZXZlbnRcclxuICAgIGV2ZW50W0V2ZW50VHlwZV0gPSBldmVudFtFdmVudFR5cGVdIHx8IHt9XHJcbiAgICBjb25zdCBldmVudFVJID0gZXZlbnRbRXZlbnRUeXBlXVxyXG4gICAgZXZlbnRVSVt1aV0gPSBldmVudFVJW3VpXSB8fCBbXVxyXG4gICAgZXZlbnRVSVt1aV0ucHVzaCh7IGZ1bmM6IGRlc2NyaXB0b3IudmFsdWUsIGFyZzogYXJncyB9KVxyXG5cclxuICAgIHJldHVybiBkZXNjcmlwdG9yXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYmluZEV2ZW50ID0gbXZjID0+IHtcclxuICBpZiAobXZjLmV2ZW50KSB7XHJcbiAgICBPYmplY3QuZW50cmllcyhtdmMuZXZlbnQpLmZvckVhY2goZXZlbnQgPT4ge1xyXG4gICAgICBjb25zdCB0eXBlID0gZXZlbnRbMF1cclxuICAgICAgY29uc3QgZXZlbnRVSSA9IGV2ZW50WzFdXHJcbiAgICAgIE9iamVjdC5lbnRyaWVzKGV2ZW50VUkpLmZvckVhY2goZXZlbnRVSSA9PiB7XHJcbiAgICAgICAgY29uc3QgdWkgPSBldmVudFVJWzBdXHJcbiAgICAgICAgY29uc3QgZnVuYyA9IGV2ZW50VUlbMV1cclxuICAgICAgICBmdW5jLmZvckVhY2goZnVuYyA9PiB7XHJcbiAgICAgICAgICBtdmMudmlld1t1aV0ub24odHlwZSwgbXZjLnZpZXcsICgpID0+IHtcclxuICAgICAgICAgICAgZnVuYy5mdW5jLmFwcGx5KG12Yy52aWV3LCBmdW5jLmFyZylcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElWaWV3IH0gZnJvbSAnLi9pbnRlcmZhY2UvSVZpZXcnXG5cbmltcG9ydCB7IElMYXllciB9IGZyb20gJy4vaW50ZXJmYWNlL0lMYXllcidcblxuaW1wb3J0IHsgVUksIGZpbmRCeVZpZXdLZXkgfSBmcm9tICcuL012Y01ncidcbmltcG9ydCB7IGJpbmRFdmVudCB9IGZyb20gJy4vVUlFdmVudCdcblxuZXhwb3J0IG1vZHVsZSBtdmMge1xuICBjbGFzcyBWaWV3TWdyIHtcbiAgICBwcml2YXRlIHZpZXdzOiBNYXA8c3RyaW5nLCBJVmlldz4gPSBuZXcgTWFwPHN0cmluZywgSVZpZXc+KClcbiAgICBwcml2YXRlIGxheWVyczogTWFwPHN0cmluZywgSUxheWVyPiA9IG5ldyBNYXA8c3RyaW5nLCBJTGF5ZXI+KClcbiAgICBwcml2YXRlIG9wZW5WaWV3czogTWFwPHN0cmluZywgSVZpZXc+ID0gbmV3IE1hcDxzdHJpbmcsIElWaWV3PigpXG5cbiAgICBwdWJsaWMgZ2V0VmlldyhrZXkpOiBJVmlldyB7XG4gICAgICByZXR1cm4gdGhpcy52aWV3cy5nZXQoa2V5KVxuICAgIH1cbiAgICBwdWJsaWMgc2V0VmlldyhrZXksIHZpZXc6IElWaWV3KTogdm9pZCB7XG4gICAgICB0aGlzLnZpZXdzLnNldChrZXksIHZpZXcpXG4gICAgfVxuICAgIHB1YmxpYyBnZXRMYXllcihMYXllcik6IElMYXllciB7XG4gICAgICBsZXQgbGF5ZXIgPSB0aGlzLmxheWVycy5nZXQoTGF5ZXIubGF5ZXJLZXkpXG4gICAgICBpZiAobGF5ZXIpIHJldHVybiBsYXllclxuICAgICAgbGF5ZXIgPSB0aGlzLmNyZWF0ZUxheWVyKExheWVyKVxuICAgICAgdGhpcy5zZXRMYXllcihMYXllci5sYXllcktleSwgbGF5ZXIpXG4gICAgICByZXR1cm4gbGF5ZXJcbiAgICB9XG4gICAgcHVibGljIHNldExheWVyKGtleSwgbGF5ZXI6IElMYXllcik6IHZvaWQge1xuICAgICAgdGhpcy5sYXllcnMuc2V0KGtleSwgbGF5ZXIpXG4gICAgfVxuXG4gICAgcHVibGljIG9wZW5WaWV3KFZpZXcsIC4uLmFyZ3MpOiB2b2lkIHtcbiAgICAgIGxldCBfdmlldyA9IHRoaXMub3BlblZpZXdzLmdldChWaWV3LnZpZXdLZXkpXG4gICAgICBpZiAoX3ZpZXcpIHtcbiAgICAgICAgX3ZpZXcub25PcGVuLmFwcGx5KF92aWV3LCBhcmdzKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIF92aWV3ID0gdGhpcy5nZXRWaWV3KFZpZXcudmlld0tleSlcbiAgICAgIGlmIChfdmlldykge1xuICAgICAgICBfdmlldy5sYXllci5vcGVuVmlldyhfdmlldywgLi4uYXJncylcbiAgICAgICAgdGhpcy5vcGVuVmlld3Muc2V0KFZpZXcudmlld0tleSwgX3ZpZXcpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgX3ZpZXcgPSB0aGlzLmNyZWF0ZVZpZXcoVmlldylcbiAgICAgIF92aWV3LmxheWVyLm9wZW5WaWV3KF92aWV3LCAuLi5hcmdzKVxuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZVZpZXcoVmlldykge1xuICAgICAgY29uc3QgbXZjID0gZmluZEJ5Vmlld0tleShWaWV3LnZpZXdLZXkpXG4gICAgICBjb25zdCBsYXllciA9IHRoaXMuZ2V0TGF5ZXIobXZjLkxheWVyKVxuXG4gICAgICBsZXQgX3ZpZXcgPSBuZXcgbXZjLlZpZXcoKVxuICAgICAgX3ZpZXcubGF5ZXIgPSBsYXllclxuICAgICAgbXZjLnZpZXcgPSBfdmlld1xuICAgICAgbXZjLmxheWVyID0gbGF5ZXJcbiAgICAgIGJpbmRFdmVudChtdmMpXG5cbiAgICAgIHRoaXMuc2V0VmlldyhtdmMudmlld0tleSwgX3ZpZXcpXG4gICAgICBpZiAoX3ZpZXcuaW5pdCkgX3ZpZXcuaW5pdCgpXG4gICAgICByZXR1cm4gX3ZpZXdcbiAgICB9XG4gICAgcHJpdmF0ZSBjcmVhdGVMYXllcihMYXllcikge1xuICAgICAgY29uc3QgX2xheWVyID0gbmV3IExheWVyKFVJKVxuICAgICAgX2xheWVyLnpPcmRlciA9IExheWVyLmxheWVyS2V5XG4gICAgICBVSS5hZGRDaGlsZChfbGF5ZXIpXG4gICAgICByZXR1cm4gX2xheWVyXG4gICAgfVxuICAgIHB1YmxpYyBjbG9zZVZpZXcoVmlld09yS2V5T3JJbnM6IGFueSwgLi4uYXJncyk6IHZvaWQge1xuICAgICAgbGV0IF92aWV3XG4gICAgICBpZiAoVmlld09yS2V5T3JJbnMudmlld0tleSkge1xuICAgICAgICBfdmlldyA9IHRoaXMuZ2V0VmlldyhWaWV3T3JLZXlPcklucy52aWV3S2V5KVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmdldFZpZXcoVmlld09yS2V5T3JJbnMpKSB7XG4gICAgICAgIF92aWV3ID0gdGhpcy5nZXRWaWV3KFZpZXdPcktleU9ySW5zKVxuICAgICAgfSBlbHNlIGlmIChWaWV3T3JLZXlPcklucy5jb25zdHJ1Y3Rvci52aWV3S2V5KSB7XG4gICAgICAgIF92aWV3ID0gdGhpcy5nZXRWaWV3KFZpZXdPcktleU9ySW5zLmNvbnN0cnVjdG9yLnZpZXdLZXkpXG4gICAgICB9XG4gICAgICBpZiAoX3ZpZXcpIHtcbiAgICAgICAgX3ZpZXcubGF5ZXIuY2xvc2VWaWV3KF92aWV3LCAuLi5hcmdzKVxuICAgICAgICB0aGlzLm9wZW5WaWV3cy5kZWxldGUoX3ZpZXcuY29uc3RydWN0b3Iudmlld0tleSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBpc09wZW4oVmlld09yS2V5T3JJbnMpOiBib29sZWFuIHtcbiAgICAgIGxldCBfdmlld1xuICAgICAgaWYgKFZpZXdPcktleU9ySW5zLnZpZXdLZXkpIHtcbiAgICAgICAgX3ZpZXcgPSB0aGlzLm9wZW5WaWV3cy5nZXQoVmlld09yS2V5T3JJbnMudmlld0tleSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcGVuVmlld3MuZ2V0KFZpZXdPcktleU9ySW5zKSkge1xuICAgICAgICBfdmlldyA9IHRoaXMub3BlblZpZXdzLmdldChWaWV3T3JLZXlPcklucylcbiAgICAgIH0gZWxzZSBpZiAoVmlld09yS2V5T3JJbnMuY29uc3RydWN0b3Iudmlld0tleSkge1xuICAgICAgICBfdmlldyA9IHRoaXMub3BlblZpZXdzLmdldChWaWV3T3JLZXlPcklucy5jb25zdHJ1Y3Rvci52aWV3S2V5KVxuICAgICAgfVxuICAgICAgcmV0dXJuICEhX3ZpZXdcbiAgICB9XG4gIH1cbiAgZXhwb3J0IGNvbnN0IHZpZXdNZ3IgPSBuZXcgVmlld01ncigpXG4gIGV4cG9ydCBjb25zdCBvcGVuVmlldyA9IChWaWV3LCAuLi5hcmdzKSA9PiB7XG4gICAgdmlld01nci5vcGVuVmlldyhWaWV3LCAuLi5hcmdzKVxuICB9XG5cbiAgZXhwb3J0IGNvbnN0IGNsb3NlVmlldyA9IChWaWV3T3JLZXlPcklucywgLi4uYXJncykgPT4ge1xuICAgIHZpZXdNZ3IuY2xvc2VWaWV3KFZpZXdPcktleU9ySW5zLCAuLi5hcmdzKVxuICB9XG59XG4iLCJpbXBvcnQgeyBJVmlldyB9IGZyb20gJy4uL2ludGVyZmFjZS9JVmlldydcclxuaW1wb3J0IHsgTGF5ZXJDb25zdCB9IGZyb20gJy4uLy4uL2NvbnN0L0xheWVyQ29uc3QnXHJcbmltcG9ydCB7IElMYXllciB9IGZyb20gJy4uL2ludGVyZmFjZS9JTGF5ZXInXHJcbmV4cG9ydCBjbGFzcyBCYXNlTGF5ZXIgZXh0ZW5kcyBMYXlhLlNwcml0ZSBpbXBsZW1lbnRzIElMYXllciB7XHJcbiAgcHJvdGVjdGVkIG93blNjZW5lOiBMYXlhLlNjZW5lXHJcbiAgY29uc3RydWN0b3Ioc2NlbmU6IExheWEuU2NlbmUpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMub3duU2NlbmUgPSBzY2VuZVxyXG4gICAgdGhpcy53aWR0aCA9IHRoaXMub3duU2NlbmUud2lkdGhcclxuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5vd25TY2VuZS5oZWlnaHRcclxuICAgIHRoaXMuaGl0VGVzdFByaW9yID0gdHJ1ZVxyXG4gICAgdGhpcy5tb3VzZVRocm91Z2ggPSB0cnVlXHJcbiAgICB0aGlzLm1vdXNlRW5hYmxlZCA9IHRydWVcclxuICB9XHJcblxyXG4gIHN0YXRpYyBsYXllcktleSA9IExheWVyQ29uc3QuYmFzZVxyXG4gIHB1YmxpYyBvcGVuVmlldyh2aWV3OiBJVmlldywgLi4uYXJncyk6IHZvaWQge1xyXG4gICAgaWYgKHZpZXcub25PcGVuKSB7XHJcbiAgICAgIHZpZXcub25PcGVuLmFwcGx5KHZpZXcsIGFyZ3MpXHJcbiAgICB9XHJcbiAgICB0aGlzLm1vdXNlVGhyb3VnaCA9IGZhbHNlXHJcbiAgICB0aGlzLmFkZENoaWxkKHZpZXcpXHJcbiAgfVxyXG4gIHB1YmxpYyBjbG9zZVZpZXcodmlldzogSVZpZXcpOiB2b2lkIHtcclxuICAgIGlmICh2aWV3Lm9uQ2xvc2UpIHtcclxuICAgICAgdmlldy5vbkNsb3NlKClcclxuICAgIH1cclxuICAgIHRoaXMucmVtb3ZlQ2hpbGQodmlldylcclxuICAgIHRoaXMubW91c2VUaHJvdWdoID0gdGhpcy5fY2hpbGRyZW4ubGVuZ3RoID09PSAwXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHN0b3JlIH0gZnJvbSAnLi4vLi4vLi4vZ2FtZS9zdG9yZS9zdG9yZSdcblxuZXhwb3J0IG5hbWVzcGFjZSBLVUkge1xuICBleHBvcnQgY2xhc3MgQmFzZVZpZXcgZXh0ZW5kcyBMYXlhLlZpZXcge1xuICAgIHB1YmxpYyB1bnN1YnNjcmliZVxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKVxuICAgIH1cblxuICAgIHB1YmxpYyBpbml0KCkge1xuICAgICAgdGhpcy5pbml0RGF0YSgpXG4gICAgICB0aGlzLmluaXRSZXMoKVxuICAgICAgdGhpcy5pbml0VmlldygpXG4gICAgfVxuICAgIHB1YmxpYyBpbml0RGF0YSgpIHt9XG4gICAgcHVibGljIGluaXRSZXMoKSB7fVxuICAgIHB1YmxpYyBpbml0VmlldygpIHt9XG4gICAgcHVibGljIG9uT3BlbiguLi5hcmdzKSB7XG4gICAgICB0aGlzLnVwZGF0ZVZpZXcoc3RvcmUuZ2V0U3RhdGUoKSlcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVWaWV3LmJpbmQodGhpcykoc3RvcmUuZ2V0U3RhdGUoKSkpXG4gICAgfVxuICAgIHB1YmxpYyBvbkNsb3NlKC4uLmFyZ3MpIHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUoKVxuICAgIH1cbiAgICBwdWJsaWMgdXBkYXRlVmlldyhzdGF0ZT86IGFueSkge1xuICAgICAgdGhpcy5zdGF0ZUxpc3RlbmVyLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQub25TdGF0ZUNoYW5nZShzdGF0ZSlcbiAgICAgIH0pXG4gICAgICB0aGlzLm9uVXBkYXRlVmlldyhzdGF0ZSlcbiAgICB9XG4gICAgcHVibGljIG9uVXBkYXRlVmlldyhzdGF0ZT86IGFueSkge31cblxuICAgIHB1YmxpYyBzdGF0ZUxpc3RlbmVyOiB7IG9uU3RhdGVDaGFuZ2U6IEZ1bmN0aW9uIH1bXSA9IFtdXG4gIH1cbn1cbiIsImltcG9ydCB7IERpc3BhdGNoZXIgfSBmcm9tICcuL2Rpc3BhdGNoZXIvRGlzcGF0Y2hlcidcclxuXHJcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlIHtcclxuICBwdWJsaWMgc3RhdGljIEluaXQoKTogdm9pZCB7XHJcblxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZGlzcGF0Y2hlcigpOiBEaXNwYXRjaGVyIHtcclxuICAgIHJldHVybiBEaXNwYXRjaGVyLkNyZWF0ZU9yR2V0KClcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE9ic2VydmVyIH0gZnJvbSAnLi9PYnNlcnZlcidcbmltcG9ydCB7IFNpbmdsZXRvbiB9IGZyb20gJy4uLy4uL2Jhc2UvU2luZ2xldG9uJ1xuZXhwb3J0IGNsYXNzIERpc3BhdGNoZXIgZXh0ZW5kcyBTaW5nbGV0b24ge1xuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuX29ic2VydmVycyA9IHt9XG4gIH1cblxuICAvKipcbiAgICog5raI5oGv5YiX6KGoXG4gICAqL1xuICBwcml2YXRlIF9vYnNlcnZlcnM6IGFueVxuXG4gIHB1YmxpYyBPYnNlcnZlKHRvcGljXzogYW55LCBvYnNlcnZlcl86IGFueSwgaGFuZGxlcl86IEZ1bmN0aW9uKTogT2JzZXJ2ZXIge1xuICAgIGlmICghdGhpcy5fb2JzZXJ2ZXJzW3RvcGljX10pIHRoaXMuX29ic2VydmVyc1t0b3BpY19dID0gW11cbiAgICBsZXQgb2JzZXJ2ZXI6IE9ic2VydmVyID0gbmV3IE9ic2VydmVyKHRvcGljXywgb2JzZXJ2ZXJfLCBoYW5kbGVyXylcbiAgICB0aGlzLl9vYnNlcnZlcnNbdG9waWNfXS5wdXNoKG9ic2VydmVyKVxuICAgIHJldHVybiBvYnNlcnZlci5SZXVzZSh0b3BpY18sIG9ic2VydmVyXywgaGFuZGxlcl8pXG4gIH1cblxuICBwdWJsaWMgT2JzZXJ2ZUxpc3Qob2JzZXJ2ZXJfOiBhbnksIHRvcGljc186IGFueVtdLCBoYW5kbGVyc186IGFueVtdKTogT2JzZXJ2ZXJbXSB7XG4gICAgbGV0IGxpc3Q6IE9ic2VydmVyW10gPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9waWNzXy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlzdC5wdXNoKHRoaXMuT2JzZXJ2ZSh0b3BpY3NfW2ldLCBvYnNlcnZlcl8sIGhhbmRsZXJzX1tpXSkpXG4gICAgfVxuICAgIHJldHVybiBsaXN0XG4gIH1cblxuICBwdWJsaWMgUmVtb3ZlTGlzdChvYnM6IE9ic2VydmVyW10pOiB2b2lkIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9icy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5SZW1vdmUob2JzW2ldKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBTZW5kTXNnKHRvcGljXzogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueVtdIHtcbiAgICBpZiAoIXRoaXMuX29ic2VydmVyc1t0b3BpY19dKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGxldCByZXQ6IGFueVtdID0gW11cbiAgICB0aGlzLl9vYnNlcnZlcnNbdG9waWNfXS5mb3JFYWNoKFxuICAgICAgKGVsZW1lbnQpOiB2b2lkID0+IHtcbiAgICAgICAgcmV0LnB1c2goZWxlbWVudC5SZWN2TXNnKC4uLmFyZ3MpKVxuICAgICAgfSxcbiAgICApXG4gICAgcmV0dXJuIHJldFxuICB9XG5cbiAgcHVibGljIFJlbW92ZShvYnM6IE9ic2VydmVyKTogT2JzZXJ2ZXIge1xuICAgIGlmIChvYnMgPT0gbnVsbCkgcmV0dXJuXG4gICAgbGV0IGFycjogYW55W10gPSB0aGlzLl9vYnNlcnZlcnNbb2JzLnRvcGljXVxuXG4gICAgaWYgKCFhcnIpIHJldHVybiBudWxsXG5cbiAgICBsZXQgaW5kOiBudW1iZXIgPSBhcnIuaW5kZXhPZihvYnMpXG4gICAgaWYgKGluZCA8IDApIHJldHVybiBudWxsXG5cbiAgICBhcnIuc3BsaWNlKGluZCwgMSlcbiAgICByZXR1cm4gb2JzXG4gIH1cblxuICBwdWJsaWMgUmVtb3ZlQWxsKHRvcGljOiBhbnkpOiB2b2lkIHtcbiAgICBsZXQgYXJyOiBhbnlbXSA9IHRoaXMuX29ic2VydmVyc1t0b3BpY11cbiAgICBpZiAoIWFycikgcmV0dXJuXG4gICAgYXJyLnNwbGljZSgwLCBhcnIubGVuZ3RoKVxuICB9XG59XG5jb25zdCBkaXNwYXRjaGVyID0gbmV3IERpc3BhdGNoZXIoKVxuZXhwb3J0IHsgZGlzcGF0Y2hlciB9XG4iLCJleHBvcnQgY2xhc3MgT2JzZXJ2ZXIge1xuICBwdWJsaWMgdG9waWM6IGFueVxuICBwdWJsaWMgb2JzZXJ2ZXI6IGFueVxuICBwdWJsaWMgaGFuZGxlcjogRnVuY3Rpb25cblxuICBwdWJsaWMgY29uc3RydWN0b3IodG9waWNfOiBhbnksIG9ic2VydmVyXzogYW55LCBoYW5kbGVyXzogRnVuY3Rpb24pIHtcbiAgICB0aGlzLlJldXNlKHRvcGljXywgb2JzZXJ2ZXJfLCBoYW5kbGVyXylcbiAgfVxuXG4gIHB1YmxpYyBSZXVzZSh0b3BpY186IGFueSwgb2JzZXJ2ZXJfOiBhbnksIGhhbmRsZXJfOiBGdW5jdGlvbik6IE9ic2VydmVyIHtcbiAgICB0aGlzLnRvcGljID0gdG9waWNfXG4gICAgdGhpcy5vYnNlcnZlciA9IG9ic2VydmVyX1xuICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXJfXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHB1YmxpYyBSZWN2TXNnKC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XG4gICAgbGV0IHJldDogYW55XG4gICAgaWYgKCF0aGlzLm9ic2VydmVyKSB7XG4gICAgICByZXQgPSB0aGlzLmhhbmRsZXIoLi4uYXJncylcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0ID0gdGhpcy5oYW5kbGVyLmFwcGx5KHRoaXMub2JzZXJ2ZXIsIGFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXRcbiAgfVxufVxuIiwiaW1wb3J0IHsgc3RhdGUgfSBmcm9tICcuL3N0YXRlJ1xyXG5leHBvcnQgZW51bSBBQ1RJT05UWVBFIHtcclxuICBDSEFOR0VfVEVTVERBVEExID0gMSxcclxuICBDSEFOR0VfVEVTVERBVEEyLFxyXG4gIENIQU5HRV9VU0VSTkFNRSxcclxuICBDSEFOR0VfVE9LRU4sXHJcbn1cclxuZXhwb3J0IGNvbnN0IEFjdGlvblR5cGVzID0ge1xyXG4gIGxvZ2luUmVxdWVzdDogJ2xvZ2luUmVxdWVzdCcsXHJcbiAgbG9naW5TdWNjZXNzOiAnbG9naW5TdWNjZXNzJyxcclxuICBsb2dpbkZhaWw6ICdsb2dpbkZhaWwnLFxyXG4gIGdldFRvZG9SZXF1ZXN0OiAnZ2V0VG9kb1JlcXVlc3QnLFxyXG4gIGFkZFRvZG9SZXF1ZXN0OiAnYWRkVG9kb1JlcXVlc3QnLFxyXG4gIGFkZFRvZG86ICdhZGRUb2RvJyxcclxuICBkZWxldGVUb2RvOiAnZGVsZXRlVG9kbycsXHJcbiAgZGVsZXRlVG9kb1JlcXVlc3Q6ICdkZWxldGVUb2RvUmVxdWVzdCcsXHJcbiAgcmVnaXN0ZXJSZXF1ZXN0OiAncmVnaXN0ZXJSZXF1ZXN0JyxcclxufVxyXG5leHBvcnQgY29uc3QgY2hhbmdlRGF0YTEgPSBkYXRhMSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFDVElPTlRZUEUuQ0hBTkdFX1RFU1REQVRBMSxcclxuICAgIHRlc3REYXRhOiB7IC4uLnN0YXRlLnRlc3REYXRhLCBkYXRhMSB9LFxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgY2hhbmdlRGF0YTIgPSBkYXRhMiA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFDVElPTlRZUEUuQ0hBTkdFX1RFU1REQVRBMixcclxuICAgIHRlc3REYXRhOiB7IC4uLnN0YXRlLnRlc3REYXRhLCBkYXRhMiB9LFxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgY2hhbmdlVXNlcm5hbWUgPSBuYW1lID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQUNUSU9OVFlQRS5DSEFOR0VfVVNFUk5BTUUsXHJcbiAgICB1c2VyOiB7IG5hbWUgfSxcclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IGNoYW5nZVRva2VuID0gdG9rZW4gPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBQ1RJT05UWVBFLkNIQU5HRV9UT0tFTixcclxuICAgIHRva2VuLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvblJlcXVlc3QgPSAodHlwZSwgcGF5bG9hZD8pID0+ICh7XHJcbiAgdHlwZSxcclxuICBwYXlsb2FkLFxyXG59KVxyXG5leHBvcnQgY29uc3QgYWRkVG9kbyA9IHBheWxvYWQgPT4gKHtcclxuICB0eXBlOiBBY3Rpb25UeXBlcy5hZGRUb2RvLFxyXG4gIHBheWxvYWQsXHJcbn0pXHJcbmV4cG9ydCBjb25zdCBkZWxldGVUb2RvID0gcGF5bG9hZCA9PiAoe1xyXG4gIHR5cGU6IEFjdGlvblR5cGVzLmRlbGV0ZVRvZG8sXHJcbiAgcGF5bG9hZCxcclxufSlcclxuIiwiaW1wb3J0IHsgQUNUSU9OVFlQRSwgQWN0aW9uVHlwZXMgfSBmcm9tICcuL2FjdGlvbnMnXHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycywgQW55QWN0aW9uIH0gZnJvbSAncmVkdXgnXHJcbmNvbnN0IGNoYW5nZVRlc3REYXRhID0gKHN0YXRlID0geyBkYXRhMTogJ2RhdGExJywgZGF0YTI6ICdkYXRhMicgfSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBBQ1RJT05UWVBFLkNIQU5HRV9URVNUREFUQTE6XHJcbiAgICBjYXNlIEFDVElPTlRZUEUuQ0hBTkdFX1RFU1REQVRBMjpcclxuICAgICAgcmV0dXJuIHsgLi4uYWN0aW9uLnRlc3REYXRhIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG5jb25zdCBjaGFuZ2VVc2VybmFtZSA9IChzdGF0ZSA9IHsgbmFtZTogJ25vcicgfSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBBQ1RJT05UWVBFLkNIQU5HRV9VU0VSTkFNRTpcclxuICAgICAgcmV0dXJuIHsgLi4uYWN0aW9uLnVzZXIgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcbmNvbnN0IGNoYW5nZVRva2VuID0gKHN0YXRlID0gJycsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQUNUSU9OVFlQRS5DSEFOR0VfVE9LRU46XHJcbiAgICAgIHJldHVybiBhY3Rpb24udG9rZW5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG5jb25zdCBsb2dpbiA9IChzdGF0ZSA9IGZhbHNlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEFjdGlvblR5cGVzLmxvZ2luU3VjY2VzczpcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIGNhc2UgQWN0aW9uVHlwZXMubG9naW5GYWlsOlxyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG5jb25zdCBjaGFuZ2VUZXN0RGF0YTEgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHJldHVybiBzdGF0ZVxyXG59XHJcbmV4cG9ydCBjb25zdCB0b2RvID0gKHN0YXRlOiBhbnlbXSA9IFtdLCBhY3Rpb246IEFueUFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQWN0aW9uVHlwZXMuYWRkVG9kbzpcclxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkLmxlbmd0aCA+IDEgPyBbLi4uYWN0aW9uLnBheWxvYWRdIDogWy4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZF1cclxuICAgIGNhc2UgQWN0aW9uVHlwZXMuZGVsZXRlVG9kbzpcclxuICAgICAgcmV0dXJuIFsuLi5zdGF0ZS5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9PSBhY3Rpb24ucGF5bG9hZCldXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuY29uc3QgcmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoeyB0ZXN0RGF0YTogY2hhbmdlVGVzdERhdGEsIHVzZXI6IGNoYW5nZVVzZXJuYW1lLCB0b2tlbjogY2hhbmdlVG9rZW4sIHRvZG8sIGxvZ2luIH0pXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJzXHJcbiIsImltcG9ydCB7IHRha2VFdmVyeSwgY2FsbCwgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xyXG5pbXBvcnQgR2FtZUFwcCBmcm9tICcuLi8uLi9jb3JlL2dhbWUvR2FtZUFwcCdcclxuaW1wb3J0IHsgYWRkVG9kbywgQWN0aW9uVHlwZXMsIGRlbGV0ZVRvZG8sIGNoYW5nZVVzZXJuYW1lLCBjaGFuZ2VUb2tlbiB9IGZyb20gJy4vYWN0aW9ucydcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuL3N0b3JlJ1xyXG5jb25zdCBnZXRBbGxUb2RvID0gYXN5bmMgKCkgPT4gR2FtZUFwcC5mZXRjaC5nZXQoJy9hbGwnKVxyXG5cclxuY29uc3QgcG9zdEFkZFRvZG8gPSBhc3luYyBwYXlsb2FkID0+XHJcbiAgR2FtZUFwcC5mZXRjaC5wb3N0KCcvYWRkJywge1xyXG4gICAgbWVzc2FnZTogcGF5bG9hZCxcclxuICB9KVxyXG5cclxuY29uc3QgcG9zdERlbGV0ZVRvZG8gPSBhc3luYyBwYXlsb2FkID0+XHJcbiAgR2FtZUFwcC5mZXRjaC5wb3N0KCcvZGVsZXRlJywge1xyXG4gICAgaWQ6IHBheWxvYWQsXHJcbiAgfSlcclxuY29uc3QgcG9zdExvZ2luID0gYXN5bmMgcGF5bG9hZCA9PiBHYW1lQXBwLmZldGNoLnBvc3QoJy9sb2dpbicsIHBheWxvYWQpXHJcbmNvbnN0IHBvc3RSZWdpc3RlciA9IGFzeW5jIHBheWxvYWQgPT4gR2FtZUFwcC5mZXRjaC5wb3N0KCcvcmVnaXN0ZXInLCBwYXlsb2FkKVxyXG5mdW5jdGlvbiogZ2V0VG9kb3MoKSB7XHJcbiAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChnZXRBbGxUb2RvKVxyXG4gIHlpZWxkIHB1dChhZGRUb2RvKHJlc3VsdC5tYXAoaXRlbSA9PiAoeyBpZDogaXRlbS5pZCwgbWVzc2FnZTogaXRlbS5tZXNzYWdlIH0pKSkpXHJcbn1cclxuZnVuY3Rpb24qIGFkZFRvZG9zKGFjdGlvbikge1xyXG4gIGNvbnN0IHsgaWQsIG1lc3NhZ2UgfSA9IHlpZWxkIGNhbGwocG9zdEFkZFRvZG8sIGFjdGlvbi5wYXlsb2FkKVxyXG4gIHlpZWxkIHB1dChhZGRUb2RvKFt7IGlkLCBtZXNzYWdlIH1dKSlcclxufVxyXG5mdW5jdGlvbiogZGVsZXRlVG9kb3MoYWN0aW9uKSB7XHJcbiAgY29uc3QgeyBpZCB9ID0geWllbGQgY2FsbChwb3N0RGVsZXRlVG9kbywgYWN0aW9uLnBheWxvYWQpXHJcbiAgeWllbGQgcHV0KGRlbGV0ZVRvZG8oaWQpKVxyXG59XHJcbmZ1bmN0aW9uKiBsb2dpbihhY3Rpb24pIHtcclxuICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHBvc3RMb2dpbiwgYWN0aW9uLnBheWxvYWQpXHJcbiAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gIGlmIChyZXN1bHQuY29kZSA9PT0gMjAwKSB7XHJcbiAgICBjb25zb2xlLmxvZygnbG9naW4gc3VjY2VzcycpXHJcbiAgICBzdG9yZS5kaXNwYXRjaChjaGFuZ2VVc2VybmFtZShyZXN1bHQucmVzdWx0LnVzZXJuYW1lKSlcclxuICAgIHN0b3JlLmRpc3BhdGNoKGNoYW5nZVRva2VuKHJlc3VsdC5yZXN1bHQudG9rZW4pKVxyXG4gICAgc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25UeXBlcy5sb2dpblN1Y2Nlc3MgfSlcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5sb2coJ2xvZ2luIGZhaWwnKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHJlZ2lzdGVyKGFjdGlvbikge1xyXG4gIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocG9zdFJlZ2lzdGVyLCBhY3Rpb24ucGF5bG9hZClcclxuICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmVxdWVzdFRvZG8oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBY3Rpb25UeXBlcy5nZXRUb2RvUmVxdWVzdCwgZ2V0VG9kb3MpXHJcbiAgeWllbGQgdGFrZUxhdGVzdChBY3Rpb25UeXBlcy5hZGRUb2RvUmVxdWVzdCwgYWRkVG9kb3MpXHJcbiAgeWllbGQgdGFrZUxhdGVzdChBY3Rpb25UeXBlcy5kZWxldGVUb2RvUmVxdWVzdCwgZGVsZXRlVG9kb3MpXHJcbiAgeWllbGQgdGFrZUxhdGVzdChBY3Rpb25UeXBlcy5sb2dpblJlcXVlc3QsIGxvZ2luKVxyXG4gIHlpZWxkIHRha2VMYXRlc3QoQWN0aW9uVHlwZXMucmVnaXN0ZXJSZXF1ZXN0LCByZWdpc3RlcilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gIHlpZWxkKiBbd2F0Y2hSZXF1ZXN0VG9kbygpXVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBzdGF0ZSA9IHtcclxuICB0b2tlbjogJ2hlbGxvJyxcclxuICB1c2VyOiB7XHJcbiAgICBuYW1lOiAndGVzdDEnLFxyXG4gIH0sXHJcbiAgdGVzdERhdGE6IHtcclxuICAgIGRhdGExOiAnZGF0YTExMTExJyxcclxuICAgIGRhdGEyOiAnZGF0YTInLFxyXG4gICAgdGVzdERhdGEyOiB7XHJcbiAgICAgIGRhdGExOiAnMTExJyxcclxuICAgICAgdGVzdERhdGEzOiB7XHJcbiAgICAgICAgZGF0YTE6ICcyMjInLFxyXG4gICAgICAgIHRlc3REYXRhNDogJzMzMycsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdG9kbzogW10sXHJcbiAgbG9naW46IGZhbHNlLFxyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4vcmVkdWNlcidcclxuaW1wb3J0IHsgc3RhdGUgfSBmcm9tICcuL3N0YXRlJ1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSdcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4vc2FnYXMnXHJcbmNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKVxyXG5jb25zdCBlbmhhbmNlciA9IGFwcGx5TWlkZGxld2FyZShzYWdhTWlkZGxld2FyZSlcclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2Vycywgc3RhdGUgYXMgYW55LCBlbmhhbmNlcilcclxuc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKVxyXG5jb25zdCBkaXNwYXRjaCA9IHN0b3JlLmRpc3BhdGNoXHJcbmV4cG9ydCB7IHN0b3JlLCBkaXNwYXRjaCB9XHJcbiIsImltcG9ydCBBUGFnZSBmcm9tICcuL0FQYWdlJ1xuaW1wb3J0IEdhbWVBcHAgZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9nYW1lL0dhbWVBcHAnXG5pbXBvcnQgRWZmZWN0VXRpbHMgZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9VdGlscy9FZmZlY3RVdGlscydcbmltcG9ydCB7IEtVSSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvbXZjL3ZpZXcvQmFzZVZpZXcnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3QgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XG4gIC8vIC8qKiBAcHJvcCB7bmFtZTppbnRUeXBlLCB0aXBzOlwi5pW05pWw57G75Z6L56S65L6LXCIsIHR5cGU6SW50LCBkZWZhdWx0OjEwMDB9Ki9cbiAgLy8gcHVibGljIGludFR5cGU6IG51bWJlciA9IDEwMDA7XG4gIC8vIC8qKiBAcHJvcCB7bmFtZTpudW1UeXBlLCB0aXBzOlwi5pWw5a2X57G75Z6L56S65L6LXCIsIHR5cGU6TnVtYmVyLCBkZWZhdWx0OjEwMDB9Ki9cbiAgLy8gcHVibGljIG51bVR5cGU6IG51bWJlciA9IDEwMDA7XG4gIC8vIC8qKiBAcHJvcCB7bmFtZTpzdHJUeXBlLCB0aXBzOlwi5a2X56ym5Liy57G75Z6L56S65L6LXCIsIHR5cGU6U3RyaW5nLCBkZWZhdWx0OlwiaGVsbG8gbGF5YVwifSovXG4gIC8vIHB1YmxpYyBzdHJUeXBlOiBzdHJpbmcgPSBcImhlbGxvIGxheWFcIjtcbiAgLy8gLyoqIEBwcm9wIHtuYW1lOmJvb2xUeXBlLCB0aXBzOlwi5biD5bCU57G75Z6L56S65L6LXCIsIHR5cGU6Qm9vbCwgZGVmYXVsdDp0cnVlfSovXG4gIC8vIHB1YmxpYyBib29sVHlwZTogYm9vbGVhbiA9IHRydWU7XG4gIC8vIOabtOWkmuWPguaVsOivtOaYjuivt+iuv+mXrjogaHR0cHM6Ly9sZGMyLmxheWFib3guY29tL2RvYy8/bmF2PXpoLWFzLTItNC0wXG5cbiAgLy8gLyoqIEBwcm9wIHtuYW1lOmJpbmRrZXksIHRpcHM6XCJiaW5ka2V5XCIsIHR5cGU6U3RyaW5nfSovXG4gIHB1YmxpYyBiaW5ka2V5OiBzdHJpbmcgPSAnJ1xuICAvLyAvKiogQHByb3Age25hbWU6YmluZFZhbCwgdGlwczpcImJpbmRWYWxcIiwgdHlwZTpTdHJpbmd9Ki9cbiAgcHVibGljIGJpbmRWYWw6IHN0cmluZyA9ICcnXG5cbiAgLyoqIEBwcm9wIHtuYW1lOmJpbmRpbmcsdHlwZTpWZWN0b3IsbGFiZXM6YmluZGluZyx4Q291bnQ6MSxzVHlwZTpzdHJpbmd9Ki9cbiAgcHVibGljIGJpbmRpbmc6IHN0cmluZ1tdIC8vIHR5cGVzOlwiTm9kZSxTdHJpbmcsTnVtYmVyLEJvb2xlYW5cIixcblxuICBwdWJsaWMgY2FsbEFycmF5OiB7IGZpZWxkOiBzdHJpbmc7IHBhdGg6IGFueVtdOyBtYXBwZXI6IEZ1bmN0aW9uIH1bXSA9IFtdXG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICB9XG4gIG9uQXdha2UoKSB7XG4gICAgY29uc29sZS5sb2coJyA9PSBhd2FrZSAnKVxuICAgIHRoaXMub3duZXIub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCkgPT4ge1xuICAgICAgRWZmZWN0VXRpbHMubWFjSWNvblNoYWtlKFxuICAgICAgICB0aGlzLm93bmVyLFxuICAgICAgICAodGhpcy5vd25lciBhcyBMYXlhLlNwcml0ZSkueSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKDEpXG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMsXG4gICAgICApXG4gICAgfSlcblxuICAgIGlmICh0aGlzLmJpbmRpbmcubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5jYWxsQXJyYXkgPSB0aGlzLmJpbmRpbmcubWFwKHN0ciA9PiB7XG4gICAgICAgIGNvbnN0IFtmaWVsZCwgcGF0aFN0ciwgbWFwcGVyXSA9IHN0ci5zcGxpdCgnfCcpXG4gICAgICAgIHJldHVybiB7IGZpZWxkLCBwYXRoOiBwYXRoU3RyLnNwbGl0KCcuJyksIG1hcHBlcjogbWFwcGVyID8gZXZhbChtYXBwZXIpIDogdW5kZWZpbmVkIH1cbiAgICAgIH0pXG5cbiAgICAgIGxldCBvd25lciA9IHRoaXMub3duZXJcbiAgICAgIHdoaWxlIChvd25lcikge1xuICAgICAgICBpZiAob3duZXIgaW5zdGFuY2VvZiBLVUkuQmFzZVZpZXcpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIG93bmVyID0gdGhpcy5vd25lci5wYXJlbnRcbiAgICAgIH1cbiAgICAgIGlmIChvd25lcikge1xuICAgICAgICBjb25zdCB2aWV3ID0gb3duZXIgYXMgS1VJLkJhc2VWaWV3XG4gICAgICAgIHZpZXcuc3RhdGVMaXN0ZW5lci5wdXNoKHRoaXMpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25FbmFibGUoKTogdm9pZCB7fVxuXG4gIG9uRGlzYWJsZSgpOiB2b2lkIHt9XG5cbiAgb25TdGF0ZUNoYW5nZShzdGF0ZTogYW55KSB7XG4gICAgdGhpcy5jYWxsQXJyYXkuZm9yRWFjaChjID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGMucGF0aC5yZWR1Y2UoKHByZXYsIHApID0+IChwcmV2ID8gcHJldltwXSA6IHVuZGVmaW5lZCksIHN0YXRlKVxuICAgICAgdGhpcy5vd25lcltjLmZpZWxkXSA9IGMubWFwcGVyID8gYy5tYXBwZXIocmVzdWx0KSA6IHJlc3VsdDtcbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgeyB1aSB9IGZyb20gJy4uLy4uLy4uL3VpL2xheWFNYXhVSSdcclxuaW1wb3J0IHsgUmVnaXN0ZXJNVkMgfSBmcm9tICcuLi8uLi8uLi9jb3JlL212Yy9NdmNNZ3InXHJcbmltcG9ydCB7IEJhc2VMYXllciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvbXZjL2xheWVyL0Jhc2VMYXllcidcclxuaW1wb3J0IHsgVmlld0NvbnN0IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9jb25zdC9WaWV3Q29uc3QnXHJcbmltcG9ydCBHYW1lQXBwIGZyb20gJy4uLy4uLy4uL2NvcmUvZ2FtZS9HYW1lQXBwJ1xyXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uLy4uL3N0b3JlL3N0b3JlJ1xyXG5AUmVnaXN0ZXJNVkMoQmFzZUxheWVyKVxyXG5leHBvcnQgY2xhc3MgTG9naW5TdWNjZXNzIGV4dGVuZHMgdWkudmlldy5Mb2dpblN1Y2Nlc3NVSSB7XHJcbiAgc3RhdGljIHZpZXdLZXkgPSBWaWV3Q29uc3QuTG9naW5TdWNjZXNzXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgfVxyXG4gIG9uT3BlbigpIHtcclxuICAgIHN1cGVyLm9uT3BlbigpXHJcbiAgICBjb25zb2xlLmxvZyhgb3BlblN1Y2Nlc3M6YCwgc3RvcmUuZ2V0U3RhdGUoKSlcclxuICAgIEdhbWVBcHAuc29ja2V0LmNvbm5lY3QoKVxyXG4gICAgR2FtZUFwcC5zb2NrZXQuYWRkRXZlbnQoJ21lc3NhZ2UnLCB0aGlzLCB0aGlzLnNob3dNZXNzYWdlKVxyXG4gICAgR2FtZUFwcC5zb2NrZXQuc2VuZEV2ZW50KCdtZXNzYWdlJywgeyBtZXNzYWdlOiAndGVzdCcgfSlcclxuICB9XHJcbiAgc2hvd01lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgY29uc29sZS5sb2cobWVzc2FnZSlcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgdWkgfSBmcm9tICcuLi8uLi8uLi91aS9sYXlhTWF4VUknXHJcbmltcG9ydCB7IFJlZ2lzdGVyTVZDLCBvcGVuVmlldyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvbXZjL012Y01ncidcclxuaW1wb3J0IHsgQmFzZUxheWVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvbGF5ZXIvQmFzZUxheWVyJ1xyXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uLy4uL3N0b3JlL3N0b3JlJ1xyXG5pbXBvcnQgeyBhY3Rpb25SZXF1ZXN0LCBBY3Rpb25UeXBlcyB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnXHJcbmltcG9ydCB7IFZpZXdDb25zdCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvY29uc3QvVmlld0NvbnN0J1xyXG5AUmVnaXN0ZXJNVkMoQmFzZUxheWVyKVxyXG5leHBvcnQgY2xhc3MgTG9naW5WaWV3IGV4dGVuZHMgdWkudmlldy5Mb2dpblVJIHtcclxuICBzdGF0aWMgdmlld0tleSA9IFZpZXdDb25zdC5Mb2dpblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy5iaW5kRXZlbnQoKVxyXG4gIH1cclxuICBiaW5kRXZlbnQoKSB7XHJcbiAgICB0aGlzLmxvZ2luQnRuLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2codGhpcy51c2VybmFtZUlucHV0LnRleHQpXHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucGFzc3dvcmRJbnB1dC50ZXh0KVxyXG4gICAgICBzdG9yZS5kaXNwYXRjaChcclxuICAgICAgICBhY3Rpb25SZXF1ZXN0KEFjdGlvblR5cGVzLmxvZ2luUmVxdWVzdCwge1xyXG4gICAgICAgICAgdXNlcm5hbWU6IHRoaXMudXNlcm5hbWVJbnB1dC50ZXh0LFxyXG4gICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmRJbnB1dC50ZXh0LFxyXG4gICAgICAgIH0pLFxyXG4gICAgICApXHJcbiAgICB9KVxyXG4gICAgdGhpcy5yZWdpc3RlckJ0bi5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgIHN0b3JlLmRpc3BhdGNoKFxyXG4gICAgICAgIGFjdGlvblJlcXVlc3QoQWN0aW9uVHlwZXMucmVnaXN0ZXJSZXF1ZXN0LCB7XHJcbiAgICAgICAgICB1c2VybmFtZTogdGhpcy51c2VybmFtZUlucHV0LnRleHQsXHJcbiAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZElucHV0LnRleHQsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIClcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbiIsImVudW0gSHR0cE1ldGhvZCB7XHJcbiAgZ2V0ID0gJ0dFVCcsXHJcbiAgcG9zdCA9ICdQT1NUJyxcclxufVxyXG5leHBvcnQgY2xhc3MgRmV0Y2gge1xyXG4gIHByaXZhdGUgYmFzZVVybCA9ICcnXHJcbiAgcHJpdmF0ZSBjb250ZW50VHlwZSA9ICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VVRGLTgnXHJcbiAgc3RhdGljIGZldGNoTWFwID0gbmV3IE1hcCgpXHJcbiAgY29uc3RydWN0b3IoeyB1cmwgfSkge1xyXG4gICAgdGhpcy5iYXNlVXJsID0gdXJsXHJcbiAgfVxyXG4gIHB1YmxpYyBzdGF0aWMgaW5pdChrZXksIHsgdXJsIH0pIHtcclxuICAgIGxldCBmZXRjaCA9IHRoaXMuZmV0Y2hNYXAuZ2V0KGtleSlcclxuICAgIGlmICghZmV0Y2gpIHtcclxuICAgICAgZmV0Y2ggPSBuZXcgRmV0Y2goeyB1cmwgfSlcclxuICAgICAgdGhpcy5mZXRjaE1hcC5zZXQoa2V5LCBmZXRjaClcclxuICAgIH1cclxuICAgIHJldHVybiBmZXRjaFxyXG4gIH1cclxuICBwcml2YXRlIGFzeW5jIHNlbmQoYXBpOiBzdHJpbmcsIHsgYm9keSwgbWV0aG9kIH0pIHtcclxuICAgIGxldCB1cmwgPSB0aGlzLmJhc2VVcmwgKyBhcGlcclxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiB0aGlzLmNvbnRlbnRUeXBlLFxyXG4gICAgfSlcclxuICAgIGxldCByZXM6IFJlc3BvbnNlXHJcbiAgICBzd2l0Y2ggKG1ldGhvZCkge1xyXG4gICAgICBjYXNlIEh0dHBNZXRob2QuZ2V0OlxyXG4gICAgICAgIGlmIChib2R5KSB7XHJcbiAgICAgICAgICB1cmwgKz1cclxuICAgICAgICAgICAgJz8nICtcclxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoYm9keSlcclxuICAgICAgICAgICAgICAubWFwKGl0ZW0gPT4gaXRlbS5qb2luKCc9JykpXHJcbiAgICAgICAgICAgICAgLmpvaW4oJyYnKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIHsgaGVhZGVycywgbWV0aG9kIH0pXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgY2FzZSBIdHRwTWV0aG9kLnBvc3Q6XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmVzID0gYXdhaXQgZmV0Y2godXJsLCB7IGJvZHksIGhlYWRlcnMsIG1ldGhvZCB9KVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5yZXNIYW5kbGUocmVzKVxyXG4gIH1cclxuICBwdWJsaWMgYXN5bmMgZ2V0KGFwaTogc3RyaW5nLCBwYXJhbXM6IGFueSA9IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VuZChhcGksIHsgYm9keTogcGFyYW1zLCBtZXRob2Q6IEh0dHBNZXRob2QuZ2V0IH0pXHJcbiAgfVxyXG4gIHB1YmxpYyBhc3luYyBwb3N0KGFwaTogc3RyaW5nLCBib2R5OiBhbnkgPSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiB0aGlzLnNlbmQoYXBpLCB7IGJvZHk6IGJvZHkgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IHVuZGVmaW5lZCwgbWV0aG9kOiBIdHRwTWV0aG9kLnBvc3QgfSlcclxuICB9XHJcbiAgcHJpdmF0ZSBhc3luYyByZXNIYW5kbGUocmVzOiBSZXNwb25zZSkge1xyXG4gICAgY29uc3QgY29udGVudFR5cGUgPSByZXMuaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpXHJcbiAgICBpZiAoY29udGVudFR5cGUpIHtcclxuICAgICAgaWYgKGNvbnRlbnRUeXBlLmluZGV4T2YoJ2pzb24nKSA+IC0xKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcy50ZXh0KClcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2luZ2xldG9uIH0gZnJvbSAnLi4vY29yZS9iYXNlL1NpbmdsZXRvbidcbmltcG9ydCAqIGFzIGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uL2dhbWUvc3RvcmUvc3RvcmUnXG4vKlxuICAgc29ja2V0LmluaXQoLi4uKVxuICAgc29ja2V0LmNvbm5lY3QoKVxuKi9cbmV4cG9ydCBjbGFzcyBTb2NrZXQgZXh0ZW5kcyBTaW5nbGV0b24ge1xuICBjb25zdHJ1Y3RvcihpcCwgc3VjY2Vzc0NhbGxiYWNrLCBmYWlsZWRDYWxsYmFjaykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmlwQWRkcmVzcyA9IGlwXG4gICAgdGhpcy5jb25uZWN0U3VjY2Vzc0NhbGxiYWNrID0gc3VjY2Vzc0NhbGxiYWNrXG4gICAgdGhpcy5jb25uZWN0RmFpbGVkQ2FsbGJhY2sgPSBmYWlsZWRDYWxsYmFja1xuICB9XG4gIHByaXZhdGUgaXBBZGRyZXNzXG4gIHByaXZhdGUgc29ja2V0OiBhbnlcbiAgcHJpdmF0ZSBjb25uZWN0U3VjY2Vzc0NhbGxiYWNrXG4gIHByaXZhdGUgY29ubmVjdEZhaWxlZENhbGxiYWNrXG4gIHN0YXRpYyBzb2NrZXRNYXAgPSBuZXcgTWFwKClcbiAgcHVibGljIHN0YXRpYyBpbml0KGtleSwgeyBpcCwgc3VjY2Vzc0NhbGxiYWNrID0gbnVsbCwgZmFpbGVkQ2FsbGJhY2sgPSBudWxsIH0pIHtcbiAgICBsZXQgc29ja2V0ID0gdGhpcy5zb2NrZXRNYXAuZ2V0KGtleSlcbiAgICBpZiAoIXNvY2tldCkge1xuICAgICAgc29ja2V0ID0gbmV3IFNvY2tldChpcCwgc3VjY2Vzc0NhbGxiYWNrLCBmYWlsZWRDYWxsYmFjaylcbiAgICAgIHRoaXMuc29ja2V0TWFwLnNldChrZXksIHNvY2tldClcbiAgICB9XG4gICAgcmV0dXJuIHNvY2tldFxuICB9XG4gIHB1YmxpYyBjb25uZWN0KCkge1xuICAgIGNvbnN0IHRva2VuID0gc3RvcmUuZ2V0U3RhdGUoKS50b2tlblxuICAgIGNvbnNvbGUubG9nKHRva2VuKVxuICAgIHRoaXMuc29ja2V0ID0gaW8odGhpcy5pcEFkZHJlc3MsIHtcbiAgICAgIHF1ZXJ5OiB7XG4gICAgICAgIHRva2VuOiB0b2tlbixcbiAgICAgIH0sXG4gICAgfSlcbiAgICB0aGlzLnNvY2tldC5vbignY29ubmVjdCcsICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCd3ZWJzb2NrZXQgY29ubmVjdC4uLicpXG4gICAgICB0aGlzLmNvbm5lY3RTdWNjZXNzKClcbiAgICB9KVxuXG4gICAgdGhpcy5zb2NrZXQub24oJ2Rpc2Nvbm5lY3QnLCB0aGlzLm9uRGlzY29ubmVjdClcbiAgfVxuICBhZGRFdmVudChldmVudCwgX3RoaXMsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5zb2NrZXQub24oZXZlbnQsIGNhbGxiYWNrLmJpbmQoX3RoaXMpKVxuICB9XG4gIHNlbmRFdmVudChldmVudCwgbWVzc2FnZSkge1xuICAgIHRoaXMuc29ja2V0LmVtaXQoZXZlbnQsIG1lc3NhZ2UpXG4gIH1cbiAgcHVibGljIGRpc2Nvbm5lY3QoKSB7XG4gICAgdGhpcy5zb2NrZXQuZGlzY29ubmVjdCgpXG4gIH1cbiAgcHJpdmF0ZSBvbkRpc2Nvbm5lY3QoKSB7XG4gICAgaWYgKHRoaXMuY29ubmVjdEZhaWxlZENhbGxiYWNrKSB0aGlzLmNvbm5lY3RGYWlsZWRDYWxsYmFjaygpXG4gIH1cbiAgcHJpdmF0ZSBjb25uZWN0U3VjY2VzcygpIHtcbiAgICBpZiAodGhpcy5jb25uZWN0U3VjY2Vzc0NhbGxiYWNrKSB0aGlzLmNvbm5lY3RTdWNjZXNzQ2FsbGJhY2soKVxuICB9XG59XG4iLCJpbXBvcnQgeyBTaW5nbGV0b24gfSBmcm9tICcuLi8uLi9jb3JlL2Jhc2UvU2luZ2xldG9uJ1xuaW1wb3J0IE5ldFJlcXVlc3QgZnJvbSAnLi9OZXRSZXF1ZXN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTmV0IGV4dGVuZHMgU2luZ2xldG9uIHtcbiAgcHJpdmF0ZSBzZXJ2ZXJVcmw6IHN0cmluZ1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gIH1cbiAgcHVibGljIGluaXRTZXJ2ZXIodXJsOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNlcnZlclVybCA9IHVybFxuICB9XG4gIHB1YmxpYyBzZW5kKGFwaTogc3RyaW5nLCBib2R5VmFyaWFibGVzOiBhbnkgPSBudWxsLCB1cmxWYXJpYWJsZXM6IGFueSA9ICcnLCBtZXRob2Q6IHN0cmluZyA9ICdwb3N0JywgcmVzcG9uc2VUeXBlOiBzdHJpbmcgPSAnanNvbicsIGhlYWRlcj86IGFueVtdKSB7XG4gICAgdGhpcy5zZW5kQnlVcmwodGhpcy5zZXJ2ZXJVcmwsIGFwaSwgYm9keVZhcmlhYmxlcywgdXJsVmFyaWFibGVzLCBtZXRob2QsIHJlc3BvbnNlVHlwZSwgaGVhZGVyKVxuICB9XG4gIHB1YmxpYyBzZW5kUHJvbWlzZShhcGk6IHN0cmluZywgYm9keVZhcmlhYmxlczogYW55ID0gbnVsbCwgdXJsVmFyaWFibGVzOiBhbnkgPSAnJywgbWV0aG9kOiBzdHJpbmcgPSAncG9zdCcsIHJlc3BvbnNlVHlwZTogc3RyaW5nID0gJ2pzb24nLCBoZWFkZXI/OiBhbnlbXSkge1xuICAgIHRoaXMuc2VuZFByb21pc2VCeVVybCh0aGlzLnNlcnZlclVybCwgYXBpLCBib2R5VmFyaWFibGVzLCB1cmxWYXJpYWJsZXMsIG1ldGhvZCwgcmVzcG9uc2VUeXBlLCBoZWFkZXIpXG4gIH1cbiAgcHVibGljIHNlbmRCeVVybCh1cmw6IHN0cmluZywgYXBpOiBzdHJpbmcsIGJvZHlWYXJpYWJsZXM6IGFueSA9IG51bGwsIHVybFZhcmlhYmxlczogYW55ID0gJycsIG1ldGhvZDogc3RyaW5nID0gJ3Bvc3QnLCByZXNwb25zZVR5cGU6IHN0cmluZyA9ICdqc29uJywgaGVhZGVyPzogYW55W10pIHtcbiAgICBsZXQgcmVxID0gTmV0UmVxdWVzdC5DcmVhdGUoYXBpLCB1cmwgKyBhcGkgKyB1cmxWYXJpYWJsZXMsIGJvZHlWYXJpYWJsZXMsIG1ldGhvZCwgcmVzcG9uc2VUeXBlLCBoZWFkZXIpXG4gICAgcmVxLlNlbmQoKVxuICB9XG4gIHB1YmxpYyBhc3luYyBzZW5kUHJvbWlzZUJ5VXJsKHVybDogc3RyaW5nLCBhcGk6IHN0cmluZywgYm9keVZhcmlhYmxlczogYW55ID0gbnVsbCwgdXJsVmFyaWFibGVzOiBhbnkgPSAnJywgbWV0aG9kOiBzdHJpbmcgPSAncG9zdCcsIHJlc3BvbnNlVHlwZTogc3RyaW5nID0gJ2pzb24nLCBoZWFkZXI/OiBhbnlbXSkge1xuICAgIGxldCByZXEgPSBOZXRSZXF1ZXN0LkNyZWF0ZShhcGksIHVybCArIGFwaSArIHVybFZhcmlhYmxlcywgYm9keVZhcmlhYmxlcywgbWV0aG9kLCByZXNwb25zZVR5cGUsIGhlYWRlcilcbiAgICBjb25zdCBnZXQgPSBhd2FpdCByZXEuU2VuZFByb21pc2UoKVxuICAgIHJldHVybiBnZXRcbiAgfVxufVxuIiwiaW1wb3J0IEdhbWVBcHAgZnJvbSAnLi4vLi4vY29yZS9nYW1lL0dhbWVBcHAnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ldFJlcXVlc3Qge1xuICBwcml2YXRlIHJlcTogbGF5YS5uZXQuSHR0cFJlcXVlc3RcbiAgcHJpdmF0ZSB1cmw6IHN0cmluZ1xuICBwcml2YXRlIGRhdGE6IGFueVxuICBwcml2YXRlIG1ldGhvZDogc3RyaW5nXG4gIHByaXZhdGUgcmVzcG9uc2VUeXBlOiBzdHJpbmdcbiAgcHJpdmF0ZSBoZWFkZXJzOiBhbnlbXVxuICBwcml2YXRlIGFwaVBhdGg6IHN0cmluZ1xuICBwcml2YXRlIG1lc3NhZ2VLZXk6IGFueVxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgIGxldCByZXEgPSBuZXcgbGF5YS5uZXQuSHR0cFJlcXVlc3QoKVxuICAgIHRoaXMucmVxID0gcmVxXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIENyZWF0ZShhcGlQYXRoOiBzdHJpbmcsIHVybDogc3RyaW5nLCBkYXRhPzogYW55LCBtZXRob2Q/OiBzdHJpbmcsIHJlc3BvbnNlVHlwZT86IHN0cmluZywgaGVhZGVycz86IGFueVtdLCBtZXNzYWdlS2V5Pyk6IE5ldFJlcXVlc3Qge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IE5ldFJlcXVlc3QoKVxuICAgIHJlcXVlc3QudXJsID0gdXJsXG4gICAgcmVxdWVzdC5kYXRhID0gZGF0YVxuICAgIHJlcXVlc3QubWV0aG9kID0gbWV0aG9kXG4gICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSByZXNwb25zZVR5cGVcbiAgICByZXF1ZXN0LmhlYWRlcnMgPSBoZWFkZXJzXG4gICAgcmVxdWVzdC5hcGlQYXRoID0gYXBpUGF0aFxuICAgIHJlcXVlc3QubWVzc2FnZUtleSA9IG1lc3NhZ2VLZXlcbiAgICByZXR1cm4gcmVxdWVzdFxuICB9XG4gIHB1YmxpYyBTZW5kKCkge1xuICAgIGxldCByZXEgPSB0aGlzLnJlcVxuICAgIGxldCB1cmwgPSB0aGlzLnVybFxuICAgIGxldCBkYXRhID0gdGhpcy5kYXRhXG4gICAgbGV0IG1ldGhvZCA9IHRoaXMubWV0aG9kXG4gICAgbGV0IHJlc3BvbnNlVHlwZSA9IHRoaXMucmVzcG9uc2VUeXBlXG4gICAgbGV0IGhlYWRlcnMgPSB0aGlzLmhlYWRlcnMgfHwgWydDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbiddXG4gICAgcmVxLm9uY2UobGF5YS5ldmVudHMuRXZlbnQuQ09NUExFVEUsIHRoaXMsIHRoaXMuY29tcGxldGVIYW5kbGVyKVxuICAgIHJlcS5vbmNlKGxheWEuZXZlbnRzLkV2ZW50LkVSUk9SLCB0aGlzLCB0aGlzLmVycm9ySGFuZGxlcilcbiAgICByZXEuc2VuZCh1cmwsIGRhdGEsIG1ldGhvZCwgcmVzcG9uc2VUeXBlLCBoZWFkZXJzKVxuICB9XG4gIHB1YmxpYyBhc3luYyBTZW5kUHJvbWlzZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIGxldCByZXEgPSB0aGlzLnJlcVxuICAgIGxldCB1cmwgPSB0aGlzLnVybFxuICAgIGxldCBkYXRhID0gdGhpcy5kYXRhXG4gICAgbGV0IG1ldGhvZCA9IHRoaXMubWV0aG9kXG4gICAgbGV0IHJlc3BvbnNlVHlwZSA9IHRoaXMucmVzcG9uc2VUeXBlXG4gICAgbGV0IGhlYWRlcnMgPSB0aGlzLmhlYWRlcnMgfHwgWydDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbiddXG4gICAgbGV0IF9wb3N0ID0gZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBsZXQgX3Jlc29sdmUgPSBmdW5jdGlvbihvYmo6IGFueSkge1xuICAgICAgICByZXNvbHZlKG9iailcbiAgICAgIH1cbiAgICAgIHJlcS5vbmNlKGxheWEuZXZlbnRzLkV2ZW50LkNPTVBMRVRFLCB0aGlzLCBfcmVzb2x2ZSlcbiAgICAgIHJlcS5vbmNlKGxheWEuZXZlbnRzLkV2ZW50LkVSUk9SLCB0aGlzLCBfcmVzb2x2ZSlcbiAgICAgIHJlcS5zZW5kKHVybCwgZGF0YSwgbWV0aG9kLCByZXNwb25zZVR5cGUsIGhlYWRlcnMpXG4gICAgfVxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KF9wb3N0KVxuICB9XG4gIHByaXZhdGUgY29tcGxldGVIYW5kbGVyKGRhdGE6IGFueSkge1xuICAgIGlmICh0aGlzLm1lc3NhZ2VLZXkpIHtcbiAgICAgIEdhbWVBcHAuZGlzcGF0Y2hlci5TZW5kTXNnKHRoaXMubWVzc2FnZUtleSwgZGF0YSlcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBlcnJvckhhbmRsZXIoZTogYW55KSB7XG4gICAgY29uc29sZS5lcnJvcih0aGlzLm1lc3NhZ2VLZXksIGUpXG4gIH1cbiAgcHJpdmF0ZSBwcm9jZXNzSGFuZGxlcihkYXRhOiBhbnkpIHt9XG59XG4iLCJpbXBvcnQgeyB1aSB9IGZyb20gJy4uL3VpL2xheWFNYXhVSSdcclxuaW1wb3J0IEFQYWdlIGZyb20gJy4uL2dhbWUvdWkvdmlldy9BUGFnZS9BUGFnZSdcclxuaW1wb3J0IHsgc2V0VUlSb290LCBvcGVuVmlldywgY2xvc2VWaWV3LCB2aWV3TWdyIH0gZnJvbSAnLi4vY29yZS9tdmMvTXZjTWdyJ1xyXG5pbXBvcnQgeyBNYXBWaWV3IH0gZnJvbSAnLi4vZ2FtZS91aS92aWV3L01hcFZpZXcnXHJcbmltcG9ydCB7IExvZ2luVmlldyB9IGZyb20gJy4uL2dhbWUvdWkvdmlldy9Mb2dpblZpZXcnXHJcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAnLi4vZ2FtZS9zdG9yZS9zdG9yZSdcclxuaW1wb3J0IHsgQWN0aW9uVHlwZXMgfSBmcm9tICcuLi9nYW1lL3N0b3JlL2FjdGlvbnMnXHJcbmltcG9ydCB7IExvZ2luU3VjY2VzcyB9IGZyb20gJy4uL2dhbWUvdWkvdmlldy9Mb2dpblN1Y2Nlc3MnXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5TY2VuZSBleHRlbmRzIHVpLnNjZW5lLk1haW5TY2VuZVVJIHtcclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICAvLyBHYW1lQXBwLmluaXQodGhpcylcclxuICAgIGNvbnN0IFVJID0gbmV3IExheWEuU3ByaXRlKClcclxuICAgIFVJLm5hbWUgPSAnVUknXHJcbiAgICBVSS53aWR0aCA9IExheWEuc3RhZ2Uud2lkdGhcclxuICAgIFVJLmhlaWdodCA9IExheWEuc3RhZ2UuaGVpZ2h0XHJcbiAgICBMYXlhLnN0YWdlLmFkZENoaWxkKFVJKVxyXG4gICAgc2V0VUlSb290KFVJKVxyXG5cclxuICAgIC8vIG9wZW5WaWV3KEFQYWdlLHthOjEsYjoyfSlcclxuICAgIC8vIG9wZW5WaWV3KExvZ2luVmlldylcclxuICAgIHN0b3JlLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNoZWNrVmlldy5iaW5kKHRoaXMpKHN0b3JlLmdldFN0YXRlKCkpKVxyXG4gICAgc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25UeXBlcy5sb2dpbkZhaWwgfSlcclxuICB9XHJcbiAgY2hlY2tWaWV3KHN0YXRlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhzdGF0ZSlcclxuICAgIGNvbnN0IHsgbG9naW4gfSA9IHN0YXRlXHJcbiAgICBjb25zb2xlLmxvZyhgbG9naW46JHtsb2dpbn1gKVxyXG4gICAgaWYgKGxvZ2luKSB7XHJcbiAgICAgIGNsb3NlVmlldyhMb2dpblZpZXcpXHJcbiAgICAgIGlmICghdmlld01nci5pc09wZW4oTG9naW5TdWNjZXNzKSkge1xyXG4gICAgICAgIG9wZW5WaWV3KExvZ2luU3VjY2VzcylcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCF2aWV3TWdyLmlzT3BlbihMb2dpblZpZXcpKSB7XHJcbiAgICAgICAgb3BlblZpZXcoTG9naW5WaWV3KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIG9uT3BlbmVkKCkge31cclxufVxyXG4iLCIvKipUaGlzIGNsYXNzIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IExheWFBaXJJREUsIHBsZWFzZSBkbyBub3QgbWFrZSBhbnkgbW9kaWZpY2F0aW9ucy4gKi9cbmltcG9ydCBWaWV3PUxheWEuVmlldztcbmltcG9ydCBEaWFsb2c9TGF5YS5EaWFsb2c7XG5pbXBvcnQgU2NlbmU9TGF5YS5TY2VuZTtcbmltcG9ydCAqIGFzIHYgZnJvbSBcIi4uL2NvcmUvbXZjL3ZpZXcvQmFzZVZpZXdcIjtcbmltcG9ydCBCYXNlVmlldyA9di5LVUkuQmFzZVZpZXdcbnZhciBSRUc6IEZ1bmN0aW9uID0gTGF5YS5DbGFzc1V0aWxzLnJlZ0NsYXNzO1xuZXhwb3J0IG1vZHVsZSB1aS5zY2VuZSB7XHJcbiAgICBleHBvcnQgY2xhc3MgTWFpblNjZW5lVUkgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRTY2VuZShcInNjZW5lL01haW5TY2VuZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSRUcoXCJ1aS5zY2VuZS5NYWluU2NlbmVVSVwiLE1haW5TY2VuZVVJKTtcclxufVxyXG5leHBvcnQgbW9kdWxlIHVpLnZpZXcge1xyXG4gICAgZXhwb3J0IGNsYXNzIEFQYWdlVUkgZXh0ZW5kcyBCYXNlVmlldyB7XHJcblx0XHRwdWJsaWMgYnRuOkxheWEuQnV0dG9uO1xuXHRcdHB1YmxpYyBkZDpsYXlhLmh0bWwuZG9tLkhUTUxEaXZFbGVtZW50O1xuXHRcdHB1YmxpYyBiYXNlQnRuOkxheWEuQnV0dG9uO1xuXHRcdHB1YmxpYyBjb250ZW50czpMYXlhLkxhYmVsO1xuXHRcdHB1YmxpYyB0ZXN0QnRuOkxheWEuQnV0dG9uO1xuXHRcdHB1YmxpYyB0b2RvTGlzdDpMYXlhLkxpc3Q7XG5cdFx0cHVibGljIGRlbGV0ZUJ0bjpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgYWRkSW5wdXQ6TGF5YS5UZXh0SW5wdXQ7XG5cdFx0cHVibGljIGFkZEJ0bjpMYXlhLkJ1dHRvbjtcbiAgICAgICAgcHVibGljIHN0YXRpYyAgdWlWaWV3OmFueSA9e1widHlwZVwiOlwiQmFzZVZpZXdcIixcInByb3BzXCI6e1wid2lkdGhcIjo2NDAsXCJoZWlnaHRcIjoxMTM2fSxcImNvbXBJZFwiOjIsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJSZWN0XCIsXCJwcm9wc1wiOntcIndpZHRoXCI6NjQwLFwibmFtZVwiOlwiclwiLFwibGluZVdpZHRoXCI6MSxcImhlaWdodFwiOjExMzYsXCJmaWxsQ29sb3JcIjpcIiNmYmJiYmJcIn0sXCJjb21wSWRcIjo3fSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjU1NSxcInhcIjoyMDgsXCJ3aWR0aFwiOjIwMCxcInZhclwiOlwiYnRuXCIsXCJza2luXCI6XCJjb21wL2J1dHRvbi5wbmdcIixcImxhYmVsXCI6XCJHb1RvIEJQYWdlXCIsXCJoZWlnaHRcIjo1MH0sXCJjb21wSWRcIjo4fSx7XCJ0eXBlXCI6XCJIVE1MRGl2RWxlbWVudFwiLFwicHJvcHNcIjp7XCJ5XCI6MCxcInhcIjowLFwid2lkdGhcIjo2NDQsXCJ2YXJcIjpcImRkXCIsXCJpbm5lckhUTUxcIjpcIjxici8+PHNwYW4+ICDmtYvor5XmsLTlubPlsYXkuK3lr7npvZA8L3NwYW4+XCIsXCJoZWlnaHRcIjoyNjUsXCJydW50aW1lXCI6XCJsYXlhLmh0bWwuZG9tLkhUTUxEaXZFbGVtZW50XCJ9LFwiY29tcElkXCI6MjB9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6NjY5LFwieFwiOjIwOCxcIndpZHRoXCI6MjAwLFwidmFyXCI6XCJiYXNlQnRuXCIsXCJza2luXCI6XCJjb21wL2J1dHRvbi5wbmdcIixcImxhYmVsXCI6XCJHb1RvIEJhc2VcIixcImhlaWdodFwiOjUwfSxcImNvbXBJZFwiOjE1LFwiY2hpbGRcIjpbe1widHlwZVwiOlwiTGFiZWxcIixcInByb3BzXCI6e1wieVwiOi02MjcsXCJ4XCI6MTkwLFwid2lkdGhcIjoyMDEsXCJ2YXJcIjpcImNvbnRlbnRzXCIsXCJ2YWxpZ25cIjpcIm1pZGRsZVwiLFwidGV4dFwiOlwic3Nzc1wiLFwiaGVpZ2h0XCI6NTAwLFwiZm9udFNpemVcIjo0MCxcImFsaWduXCI6XCJjZW50ZXJcIn0sXCJjb21wSWRcIjoxNH1dfSx7XCJ0eXBlXCI6XCJMYWJlbFwiLFwicHJvcHNcIjp7XCJ5XCI6MTIxLFwieFwiOjI3NS41LFwid2lkdGhcIjo2MyxcInZhbGlnblwiOlwibWlkZGxlXCIsXCJ0ZXh0XCI6XCJsYWJlbFwiLFwiaGVpZ2h0XCI6MjIsXCJhbGlnblwiOlwiY2VudGVyXCJ9LFwiY29tcElkXCI6MjV9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6MTMyLFwieFwiOjQyNixcInZlY3RvcjFcIjpbXCJsYWJlbFwiLFwiYWFhXCIsXCJkXCIsXCJkXCIsXCJsYWJlbDphYWFcIl0sXCJ2YXJcIjpcInRlc3RCdG5cIixcInByZXNldElEXCI6MSxcImJpbmRpbmdcIjpbXCJsYWJlbHx0ZXN0RGF0YS5kYXRhMVwiLFwibGFiZWxDb2xvcnN8dGVzdERhdGEuZGF0YTF8KHgpPT54PT09MT9cXFwiI0ZCOFxcXCI6XFxcIiMwMDBcXFwiXCJdLFwid2lkdGhcIjoxOTIsXCJza2luXCI6XCJjb21wL2J1dHRvbi5wbmdcIixcImxhYmVsXCI6XCLmjInpkq7ohJrmnKxcIixcImlzUHJlc2V0Um9vdFwiOnRydWUsXCJoZWlnaHRcIjo5MH0sXCJjb21wSWRcIjozMSxcImNoaWxkXCI6W3tcInR5cGVcIjpcIlNjcmlwdFwiLFwicHJvcHNcIjp7XCJ2ZWN0b3IxXCI6W1wibGFiZWxcIixcImFhYVwiLFwiZFwiLFwiZFwiLFwibGFiZWw6YWFhXCJdLFwicHJlc2V0SURcIjoyLFwibW9cIjpmYWxzZSxcImJpbmRrZXlcIjpcImxhYmVsXCIsXCJiaW5kaW5nXCI6W1wibGFiZWx8dGVzdERhdGEuZGF0YTFcIixcImxhYmVsQ29sb3JzfHRlc3REYXRhLmRhdGExfCh4KT0+eD09PTE/XFxcIiNGQjhcXFwiOlxcXCIjMDAwXFxcIlwiXSxcImJpbmRWYWxcIjpcInRlc3REYXRhLmRhdGExXCIsXCJ5XCI6MSxcInhcIjowLFwicnVudGltZVwiOlwiZ2FtZS91aS92aWV3L0FQYWdlL1Rlc3QudHNcIn0sXCJjb21wSWRcIjozMn1dfSx7XCJ0eXBlXCI6XCJMaXN0XCIsXCJwcm9wc1wiOntcInlcIjoxMzIsXCJ4XCI6MzAsXCJ3aWR0aFwiOjI2MCxcInZhclwiOlwidG9kb0xpc3RcIixcInJlcGVhdFhcIjoxLFwiaGVpZ2h0XCI6MzA4fSxcImNvbXBJZFwiOjQ5LFwiY2hpbGRcIjpbe1widHlwZVwiOlwiQm94XCIsXCJwcm9wc1wiOntcInlcIjowLFwieFwiOjAsXCJ3aWR0aFwiOjc3LFwicmVuZGVyVHlwZVwiOlwicmVuZGVyXCIsXCJoZWlnaHRcIjozNH0sXCJjb21wSWRcIjo1MixcImNoaWxkXCI6W3tcInR5cGVcIjpcIkxhYmVsXCIsXCJwcm9wc1wiOntcInlcIjo3LFwieFwiOjAsXCJ0ZXh0XCI6XCJsYWJlbFwiLFwicmVuZGVyVHlwZVwiOlwicmVuZGVyXCIsXCJuYW1lXCI6XCJsYWJlbFwiLFwiZm9udFNpemVcIjoyMH0sXCJjb21wSWRcIjo1MH0se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjo1LFwieFwiOjU0LFwid2lkdGhcIjoyMyxcInZhclwiOlwiZGVsZXRlQnRuXCIsXCJza2luXCI6XCJjb21wL2J1dHRvbi5wbmdcIixcImxhYmVsXCI6XCJ4XCIsXCJoZWlnaHRcIjoyM30sXCJjb21wSWRcIjo1M31dfV19LHtcInR5cGVcIjpcIkJveFwiLFwicHJvcHNcIjp7XCJ5XCI6NDIyLFwieFwiOjIwOCxcIndpZHRoXCI6MjI1LFwiaGVpZ2h0XCI6MjJ9LFwiY29tcElkXCI6NTQsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJUZXh0SW5wdXRcIixcInByb3BzXCI6e1widmFyXCI6XCJhZGRJbnB1dFwiLFwic2tpblwiOlwiY29tcC90ZXh0aW5wdXQucG5nXCJ9LFwiY29tcElkXCI6NTF9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6LTEsXCJ4XCI6MTQ3LFwidmFyXCI6XCJhZGRCdG5cIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcImFkZFwifSxcImNvbXBJZFwiOjU1fV19XSxcImxvYWRMaXN0XCI6W1wiY29tcC9idXR0b24ucG5nXCIsXCJwcmVmYWIvQnV0dG9uLnByZWZhYlwiLFwiY29tcC90ZXh0aW5wdXQucG5nXCJdLFwibG9hZExpc3QzRFwiOltdfTtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVmlldyhBUGFnZVVJLnVpVmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUkVHKFwidWkudmlldy5BUGFnZVVJXCIsQVBhZ2VVSSk7XHJcbiAgICBleHBvcnQgY2xhc3MgQmFzZVRlc3RVSSBleHRlbmRzIEJhc2VWaWV3IHtcclxuXHRcdHB1YmxpYyB0YW5rOkxheWEuQ2xpcDtcblx0XHRwdWJsaWMgY2xvc2VCdG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIGRpYWxvZ0J0bjpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgbG9hZGluZ0J0bjpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgdmlld0J0bjpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgdG9rZW46TGF5YS5MYWJlbDtcblx0XHRwdWJsaWMgdXNlcm5hbWU6TGF5YS5MYWJlbDtcbiAgICAgICAgcHVibGljIHN0YXRpYyAgdWlWaWV3OmFueSA9e1widHlwZVwiOlwiQmFzZVZpZXdcIixcInByb3BzXCI6e1wid2lkdGhcIjo2NDAsXCJoZWlnaHRcIjoxMTM2fSxcImNvbXBJZFwiOjIsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJJbWFnZVwiLFwicHJvcHNcIjp7XCJ5XCI6MCxcInhcIjowLFwidG9wXCI6MCxcInNraW5cIjpcImNvbXAvaW1hZ2UucG5nXCIsXCJyaWdodFwiOjAsXCJsZWZ0XCI6MCxcImJvdHRvbVwiOjB9LFwiY29tcElkXCI6OH0se1widHlwZVwiOlwiQ2xpcFwiLFwicHJvcHNcIjp7XCJ5XCI6MCxcInhcIjowLFwidmFyXCI6XCJ0YW5rXCIsXCJza2luXCI6XCJDaGFyYWN0ZXJzL1RhbmtfOC5wbmdcIixcImluZGV4XCI6NCxcImNsaXBZXCI6NCxcImNsaXBYXCI6NCxcImNlbnRlcllcIjotMSxcImNlbnRlclhcIjowfSxcImNvbXBJZFwiOjN9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6MzI3LFwieFwiOjI4MixcInZhclwiOlwiY2xvc2VCdG5cIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcImNsb3NlXCJ9LFwiY29tcElkXCI6NH0se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjoyNTIsXCJ4XCI6NDcyLFwidmFyXCI6XCJkaWFsb2dCdG5cIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcImRpYWxvZ1wifSxcImNvbXBJZFwiOjV9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6MzA0LFwieFwiOjQ3MixcInZhclwiOlwibG9hZGluZ0J0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiYmFzZVwifSxcImNvbXBJZFwiOjZ9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6MzYyLFwieFwiOjQ3MixcInZhclwiOlwidmlld0J0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwidmlld1wifSxcImNvbXBJZFwiOjd9LHtcInR5cGVcIjpcIkxhYmVsXCIsXCJwcm9wc1wiOntcInlcIjoxODEsXCJ4XCI6MTA1LFwidmFyXCI6XCJ0b2tlblwiLFwidGV4dFwiOlwidG9rZW5cIixcImZvbnRTaXplXCI6MzAsXCJjb2xvclwiOlwiI2ZmZmZmZlwifSxcImNvbXBJZFwiOjl9LHtcInR5cGVcIjpcIkxhYmVsXCIsXCJwcm9wc1wiOntcInlcIjoyNTcsXCJ4XCI6MTA1LFwid29yZFdyYXBcIjp0cnVlLFwid2lkdGhcIjo5NSxcInZhclwiOlwidXNlcm5hbWVcIixcInRleHRcIjpcInRva2VuXCIsXCJoZWlnaHRcIjo1MSxcImZvbnRTaXplXCI6MzAsXCJjb2xvclwiOlwiI2ZmZmZmZlwiLFwiYmdDb2xvclwiOlwiI2ZmNzU3M1wifSxcImNvbXBJZFwiOjEwLFwiY2hpbGRcIjpbe1widHlwZVwiOlwiU2NyaXB0XCIsXCJwcm9wc1wiOntcIkxhbmd1YWdlSURcIjpcInRlc3R0ZXN0dGVzdFwiLFwiSXNGaWxsXCI6dHJ1ZSxcInJ1bnRpbWVcIjpcImNvcmUvZ2FtZS9zY3JpcHQvSExhYmVsLnRzXCJ9LFwiY29tcElkXCI6MTJ9XX1dLFwibG9hZExpc3RcIjpbXCJjb21wL2ltYWdlLnBuZ1wiLFwiQ2hhcmFjdGVycy9UYW5rXzgucG5nXCIsXCJjb21wL2J1dHRvbi5wbmdcIl0sXCJsb2FkTGlzdDNEXCI6W119O1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVWaWV3KEJhc2VUZXN0VUkudWlWaWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSRUcoXCJ1aS52aWV3LkJhc2VUZXN0VUlcIixCYXNlVGVzdFVJKTtcclxuICAgIGV4cG9ydCBjbGFzcyBCUGFnZVVJIGV4dGVuZHMgQmFzZVZpZXcge1xyXG5cdFx0cHVibGljIGNoYW5nZTpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgY2xvc2VfYnRuOkxheWEuQnV0dG9uO1xuXHRcdHB1YmxpYyB0b2tlbjpMYXlhLkxhYmVsO1xuXHRcdHB1YmxpYyB1c2VybmFtZTpMYXlhLkxhYmVsO1xuICAgICAgICBwdWJsaWMgc3RhdGljICB1aVZpZXc6YW55ID17XCJ0eXBlXCI6XCJCYXNlVmlld1wiLFwicHJvcHNcIjp7XCJ3aWR0aFwiOjMwMCxcImhlaWdodFwiOjExMzZ9LFwiY29tcElkXCI6MixcImNoaWxkXCI6W3tcInR5cGVcIjpcIlJlY3RcIixcInByb3BzXCI6e1wid2lkdGhcIjozMDAsXCJsaW5lV2lkdGhcIjoxLFwiaGVpZ2h0XCI6MTEzNixcImZpbGxDb2xvclwiOlwiI2NkZjlhNFwifSxcImNvbXBJZFwiOjN9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6NTM0LFwieFwiOjU5LFwid2lkdGhcIjoyMDAsXCJ2YXJcIjpcImNoYW5nZVwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiQ2hhbmdlQVBhZ2VcIixcImhlaWdodFwiOjUwfSxcImNvbXBJZFwiOjR9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6NjQ0LFwieFwiOjU5LFwid2lkdGhcIjoyMDAsXCJ2YXJcIjpcImNsb3NlX2J0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiQ2xvc2VcIixcImhlaWdodFwiOjUwfSxcImNvbXBJZFwiOjV9LHtcInR5cGVcIjpcIkxhYmVsXCIsXCJwcm9wc1wiOntcInlcIjoxODEsXCJ4XCI6MTA1LFwidmFyXCI6XCJ0b2tlblwiLFwidGV4dFwiOlwidG9rZW5cIixcImZvbnRTaXplXCI6MzAsXCJjb2xvclwiOlwiIzAwMDAwMFwifSxcImNvbXBJZFwiOjd9LHtcInR5cGVcIjpcIkxhYmVsXCIsXCJwcm9wc1wiOntcInlcIjoyNTcsXCJ4XCI6MTA1LFwidmFyXCI6XCJ1c2VybmFtZVwiLFwidGV4dFwiOlwidG9rZW5cIixcImZvbnRTaXplXCI6MzAsXCJjb2xvclwiOlwiIzAwMDAwMFwifSxcImNvbXBJZFwiOjh9XSxcImxvYWRMaXN0XCI6W1wiY29tcC9idXR0b24ucG5nXCJdLFwibG9hZExpc3QzRFwiOltdfTtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVmlldyhCUGFnZVVJLnVpVmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUkVHKFwidWkudmlldy5CUGFnZVVJXCIsQlBhZ2VVSSk7XHJcbiAgICBleHBvcnQgY2xhc3MgRGlhbG9nVGVzdFVJIGV4dGVuZHMgQmFzZVZpZXcge1xyXG5cdFx0cHVibGljIGJveDpMYXlhLkJveDtcblx0XHRwdWJsaWMgdGFuazpMYXlhLkNsaXA7XG5cdFx0cHVibGljIGNsb3NlQnRuOkxheWEuQnV0dG9uO1xuXHRcdHB1YmxpYyB0b2tlbjpMYXlhLkxhYmVsO1xuXHRcdHB1YmxpYyB1c2VybmFtZTpMYXlhLkxhYmVsO1xuICAgICAgICBwdWJsaWMgc3RhdGljICB1aVZpZXc6YW55ID17XCJ0eXBlXCI6XCJCYXNlVmlld1wiLFwicHJvcHNcIjp7XCJ3aWR0aFwiOjY0MCxcImhlaWdodFwiOjExMzZ9LFwiY29tcElkXCI6MixcImNoaWxkXCI6W3tcInR5cGVcIjpcIkJveFwiLFwicHJvcHNcIjp7XCJ3aWR0aFwiOjIwMCxcInZhclwiOlwiYm94XCIsXCJoZWlnaHRcIjoyMDAsXCJjZW50ZXJZXCI6MCxcImNlbnRlclhcIjowfSxcImNvbXBJZFwiOjksXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJJbWFnZVwiLFwicHJvcHNcIjp7XCJ0b3BcIjowLFwic2tpblwiOlwiY29tcC9pbWFnZS5wbmdcIixcInJpZ2h0XCI6MCxcImxlZnRcIjowLFwiYm90dG9tXCI6MH0sXCJjb21wSWRcIjoxMH0se1widHlwZVwiOlwiQ2xpcFwiLFwicHJvcHNcIjp7XCJ5XCI6NTUwLFwieFwiOjMwMyxcInZhclwiOlwidGFua1wiLFwic2tpblwiOlwiQ2hhcmFjdGVycy9UYW5rXzcucG5nXCIsXCJpbmRleFwiOjQsXCJjbGlwWVwiOjQsXCJjbGlwWFwiOjQsXCJjZW50ZXJZXCI6LTEsXCJjZW50ZXJYXCI6MH0sXCJjb21wSWRcIjozfSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjM5LFwieFwiOjYyLjUsXCJ2YXJcIjpcImNsb3NlQnRuXCIsXCJza2luXCI6XCJjb21wL2J1dHRvbi5wbmdcIixcImxhYmVsXCI6XCJjbG9zZVwifSxcImNvbXBJZFwiOjR9XX0se1widHlwZVwiOlwiTGFiZWxcIixcInByb3BzXCI6e1wieVwiOjE4MSxcInhcIjoxMDUsXCJ2YXJcIjpcInRva2VuXCIsXCJ0ZXh0XCI6XCJ0b2tlblwiLFwiZm9udFNpemVcIjozMCxcImNvbG9yXCI6XCIjZmZmZmZmXCJ9LFwiY29tcElkXCI6MTJ9LHtcInR5cGVcIjpcIkxhYmVsXCIsXCJwcm9wc1wiOntcInlcIjoyNTcsXCJ4XCI6MTA1LFwidmFyXCI6XCJ1c2VybmFtZVwiLFwidGV4dFwiOlwidG9rZW5cIixcImZvbnRTaXplXCI6MzAsXCJjb2xvclwiOlwiI2ZmZmZmZlwifSxcImNvbXBJZFwiOjEzfV0sXCJsb2FkTGlzdFwiOltcImNvbXAvaW1hZ2UucG5nXCIsXCJDaGFyYWN0ZXJzL1RhbmtfNy5wbmdcIixcImNvbXAvYnV0dG9uLnBuZ1wiXSxcImxvYWRMaXN0M0RcIjpbXX07XHJcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVZpZXcoRGlhbG9nVGVzdFVJLnVpVmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUkVHKFwidWkudmlldy5EaWFsb2dUZXN0VUlcIixEaWFsb2dUZXN0VUkpO1xyXG4gICAgZXhwb3J0IGNsYXNzIExvYWRpbmdVSSBleHRlbmRzIEJhc2VWaWV3IHtcclxuXHRcdHB1YmxpYyB0YW5rOkxheWEuQ2xpcDtcblx0XHRwdWJsaWMgYnRuX2Nsb3NlOkxheWEuQnV0dG9uO1xuXHRcdHB1YmxpYyBidG5fY29ubmVjdDpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgdG9rZW46TGF5YS5MYWJlbDtcblx0XHRwdWJsaWMgdXNlcm5hbWU6TGF5YS5MYWJlbDtcbiAgICAgICAgcHVibGljIHN0YXRpYyAgdWlWaWV3OmFueSA9e1widHlwZVwiOlwiQmFzZVZpZXdcIixcInByb3BzXCI6e1wid2lkdGhcIjo2NDAsXCJoZWlnaHRcIjoxMTM2fSxcImNvbXBJZFwiOjIsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJJbWFnZVwiLFwicHJvcHNcIjp7XCJ0b3BcIjowLFwic2tpblwiOlwiQ2hhcmFjdGVycy9UYW5rXzcucG5nXCIsXCJyaWdodFwiOjAsXCJsZWZ0XCI6MCxcImJvdHRvbVwiOjB9LFwiY29tcElkXCI6MTd9LHtcInR5cGVcIjpcIkNsaXBcIixcInByb3BzXCI6e1widmFyXCI6XCJ0YW5rXCIsXCJza2luXCI6XCJDaGFyYWN0ZXJzL1RhbmtfNC5wbmdcIixcImluZGV4XCI6NCxcImNsaXBZXCI6NCxcImNsaXBYXCI6NCxcImNlbnRlcllcIjotMSxcImNlbnRlclhcIjowfSxcImNvbXBJZFwiOjN9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6MzI3LFwieFwiOjI4Mi41LFwidmFyXCI6XCJidG5fY2xvc2VcIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcImNsb3NlXCJ9LFwiY29tcElkXCI6NH0se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjoyMjIsXCJ4XCI6MjgyLjUsXCJ2YXJcIjpcImJ0bl9jb25uZWN0XCIsXCJza2luXCI6XCJjb21wL2J1dHRvbi5wbmdcIixcImxhYmVsXCI6XCJjb25uZWN0XCJ9LFwiY29tcElkXCI6NX0se1widHlwZVwiOlwiTGFiZWxcIixcInByb3BzXCI6e1wieVwiOjE4MSxcInhcIjoxMDUsXCJ2YXJcIjpcInRva2VuXCIsXCJ0ZXh0XCI6XCJ0b2tlblwiLFwiZm9udFNpemVcIjozMCxcImNvbG9yXCI6XCIjZmZmZmZmXCJ9LFwiY29tcElkXCI6MTh9LHtcInR5cGVcIjpcIkxhYmVsXCIsXCJwcm9wc1wiOntcInlcIjoyNTcsXCJ4XCI6MTA1LFwidmFyXCI6XCJ1c2VybmFtZVwiLFwidGV4dFwiOlwidG9rZW5cIixcImZvbnRTaXplXCI6MzAsXCJjb2xvclwiOlwiI2ZmZmZmZlwifSxcImNvbXBJZFwiOjE5fV0sXCJsb2FkTGlzdFwiOltcIkNoYXJhY3RlcnMvVGFua183LnBuZ1wiLFwiQ2hhcmFjdGVycy9UYW5rXzQucG5nXCIsXCJjb21wL2J1dHRvbi5wbmdcIl0sXCJsb2FkTGlzdDNEXCI6W119O1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVWaWV3KExvYWRpbmdVSS51aVZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFJFRyhcInVpLnZpZXcuTG9hZGluZ1VJXCIsTG9hZGluZ1VJKTtcclxuICAgIGV4cG9ydCBjbGFzcyBMb2dpblVJIGV4dGVuZHMgQmFzZVZpZXcge1xyXG5cdFx0cHVibGljIHVzZXJuYW1lSW5wdXQ6TGF5YS5UZXh0SW5wdXQ7XG5cdFx0cHVibGljIHBhc3N3b3JkSW5wdXQ6TGF5YS5UZXh0SW5wdXQ7XG5cdFx0cHVibGljIGxvZ2luQnRuOkxheWEuQnV0dG9uO1xuXHRcdHB1YmxpYyByZWdpc3RlckJ0bjpMYXlhLkJ1dHRvbjtcbiAgICAgICAgcHVibGljIHN0YXRpYyAgdWlWaWV3OmFueSA9e1widHlwZVwiOlwiQmFzZVZpZXdcIixcInByb3BzXCI6e1wid2lkdGhcIjoxOTIwLFwiaGVpZ2h0XCI6MTA4MH0sXCJjb21wSWRcIjoyLFwiY2hpbGRcIjpbe1widHlwZVwiOlwiU3ByaXRlXCIsXCJwcm9wc1wiOntcInlcIjoxLFwieFwiOjAsXCJ3aWR0aFwiOjE5MjAsXCJoZWlnaHRcIjoxMDgwfSxcImNvbXBJZFwiOjYsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJSZWN0XCIsXCJwcm9wc1wiOntcIndpZHRoXCI6MTkyMCxcImxpbmVXaWR0aFwiOjEsXCJsaW5lQ29sb3JcIjpcIiNmZmZmZmZcIixcImhlaWdodFwiOjEwODAsXCJmaWxsQ29sb3JcIjpcIiM4Njg2ODZcIn0sXCJjb21wSWRcIjo3fV19LHtcInR5cGVcIjpcIlRleHRJbnB1dFwiLFwicHJvcHNcIjp7XCJ5XCI6NDE5LFwieFwiOjg1MCxcIndpZHRoXCI6Mjc5LFwidmFyXCI6XCJ1c2VybmFtZUlucHV0XCIsXCJza2luXCI6XCJjb21wL3RleHRpbnB1dC5wbmdcIixcImhlaWdodFwiOjQ4fSxcImNvbXBJZFwiOjN9LHtcInR5cGVcIjpcIlRleHRJbnB1dFwiLFwicHJvcHNcIjp7XCJ5XCI6NDk2LFwieFwiOjg1MCxcIndpZHRoXCI6Mjg0LFwidmFyXCI6XCJwYXNzd29yZElucHV0XCIsXCJza2luXCI6XCJjb21wL3RleHRpbnB1dC5wbmdcIixcImhlaWdodFwiOjQ5fSxcImNvbXBJZFwiOjR9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6NjQxLFwieFwiOjk3NSxcIndpZHRoXCI6MTU5LFwidmFyXCI6XCJsb2dpbkJ0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwibG9naW5cIixcImhlaWdodFwiOjQ5fSxcImNvbXBJZFwiOjV9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6NjM2LFwieFwiOjc1MyxcIndpZHRoXCI6MTc1LFwidmFyXCI6XCJyZWdpc3RlckJ0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwicmVnaXN0ZXJcIixcImhlaWdodFwiOjUzfSxcImNvbXBJZFwiOjh9XSxcImxvYWRMaXN0XCI6W1wiY29tcC90ZXh0aW5wdXQucG5nXCIsXCJjb21wL2J1dHRvbi5wbmdcIl0sXCJsb2FkTGlzdDNEXCI6W119O1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVWaWV3KExvZ2luVUkudWlWaWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSRUcoXCJ1aS52aWV3LkxvZ2luVUlcIixMb2dpblVJKTtcclxuICAgIGV4cG9ydCBjbGFzcyBMb2dpblN1Y2Nlc3NVSSBleHRlbmRzIEJhc2VWaWV3IHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljICB1aVZpZXc6YW55ID17XCJ0eXBlXCI6XCJCYXNlVmlld1wiLFwicHJvcHNcIjp7XCJ3aWR0aFwiOjE5MjAsXCJoZWlnaHRcIjoxMDgwfSxcImNvbXBJZFwiOjIsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJMYWJlbFwiLFwicHJvcHNcIjp7XCJ5XCI6NDEwLFwieFwiOjI2MyxcInRleHRcIjpcImxhYmVsXCIsXCJmb250U2l6ZVwiOjUwLFwiY29sb3JcIjpcIiNmZmZmZmZcIixcImJpbmRpbmdcIjpbXCJ0ZXh0fHVzZXIubmFtZXwoZnVuY3Rpb24obmFtZSl7cmV0dXJuIFxcXCJuYW1lOlxcXCIrbmFtZX0pXCJdfSxcImNvbXBJZFwiOjMsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJTY3JpcHRcIixcInByb3BzXCI6e1wiYmluZGluZ1wiOltcInRleHR8dXNlci5uYW1lfChmdW5jdGlvbihuYW1lKXtyZXR1cm4gXFxcIm5hbWU6XFxcIituYW1lfSlcIl0sXCJydW50aW1lXCI6XCJnYW1lL3VpL3ZpZXcvQVBhZ2UvVGVzdC50c1wifSxcImNvbXBJZFwiOjR9XX0se1widHlwZVwiOlwiTGFiZWxcIixcInByb3BzXCI6e1wieVwiOjU2OSxcInhcIjoyNjMsXCJ0ZXh0XCI6XCJsYWJlbFwiLFwiZm9udFNpemVcIjo1MCxcImNvbG9yXCI6XCIjZmZmZmZmXCIsXCJiaW5kaW5nXCI6W1widGV4dHx0b2tlbnwoZnVuY3Rpb24odG9rZW4pe3JldHVybiAndG9rZW46Jyt0b2tlbn0pXCJdfSxcImNvbXBJZFwiOjUsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJTY3JpcHRcIixcInByb3BzXCI6e1wiYmluZGluZ1wiOltcInRleHR8dG9rZW58KGZ1bmN0aW9uKHRva2VuKXtyZXR1cm4gJ3Rva2VuOicrdG9rZW59KVwiXSxcInJ1bnRpbWVcIjpcImdhbWUvdWkvdmlldy9BUGFnZS9UZXN0LnRzXCJ9LFwiY29tcElkXCI6Nn1dfV0sXCJsb2FkTGlzdFwiOltdLFwibG9hZExpc3QzRFwiOltdfTtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVmlldyhMb2dpblN1Y2Nlc3NVSS51aVZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFJFRyhcInVpLnZpZXcuTG9naW5TdWNjZXNzVUlcIixMb2dpblN1Y2Nlc3NVSSk7XHJcbiAgICBleHBvcnQgY2xhc3MgTWFwVmlld1VJIGV4dGVuZHMgQmFzZVZpZXcge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgIHVpVmlldzphbnkgPXtcInR5cGVcIjpcIkJhc2VWaWV3XCIsXCJwcm9wc1wiOntcIndpZHRoXCI6MTkyMCxcImhlaWdodFwiOjEwODB9LFwiY29tcElkXCI6MixcImNoaWxkXCI6W3tcInR5cGVcIjpcIkNsaXBcIixcInByb3BzXCI6e1wic2tpblwiOlwiQ2hhcmFjdGVycy9UYW5rXzMucG5nXCIsXCJpbmRleFwiOjAsXCJjbGlwWVwiOjQsXCJjbGlwWFwiOjQsXCJjZW50ZXJZXCI6MCxcImNlbnRlclhcIjowfSxcImNvbXBJZFwiOjR9XSxcImxvYWRMaXN0XCI6W1wiQ2hhcmFjdGVycy9UYW5rXzMucG5nXCJdLFwibG9hZExpc3QzRFwiOltdfTtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVmlldyhNYXBWaWV3VUkudWlWaWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSRUcoXCJ1aS52aWV3Lk1hcFZpZXdVSVwiLE1hcFZpZXdVSSk7XHJcbiAgICBleHBvcnQgY2xhc3MgVmlld1Rlc3RVSSBleHRlbmRzIEJhc2VWaWV3IHtcclxuXHRcdHB1YmxpYyB0YW5rOkxheWEuQ2xpcDtcblx0XHRwdWJsaWMgY2xvc2VCdG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIHZpZXdCdG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIHRva2VuOkxheWEuTGFiZWw7XG5cdFx0cHVibGljIHVzZXJuYW1lOkxheWEuTGFiZWw7XG4gICAgICAgIHB1YmxpYyBzdGF0aWMgIHVpVmlldzphbnkgPXtcInR5cGVcIjpcIkJhc2VWaWV3XCIsXCJwcm9wc1wiOntcIndpZHRoXCI6NjQwLFwiaGVpZ2h0XCI6MTEzNn0sXCJjb21wSWRcIjoyLFwiY2hpbGRcIjpbe1widHlwZVwiOlwiSW1hZ2VcIixcInByb3BzXCI6e1wieVwiOjAsXCJ4XCI6MCxcInRvcFwiOjAsXCJza2luXCI6XCJjb21wL2ltYWdlLnBuZ1wiLFwicmlnaHRcIjowLFwibGVmdFwiOjAsXCJib3R0b21cIjowfSxcImNvbXBJZFwiOjd9LHtcInR5cGVcIjpcIkNsaXBcIixcInByb3BzXCI6e1wieVwiOjAsXCJ4XCI6MCxcInZhclwiOlwidGFua1wiLFwic2tpblwiOlwiQ2hhcmFjdGVycy8k54u8LnBuZ1wiLFwiaW5kZXhcIjo0LFwiY2xpcFlcIjo0LFwiY2xpcFhcIjo0LFwiY2VudGVyWVwiOi0xLFwiY2VudGVyWFwiOjB9LFwiY29tcElkXCI6M30se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjozMjcsXCJ4XCI6MjgyLFwidmFyXCI6XCJjbG9zZUJ0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiY2xvc2VcIn0sXCJjb21wSWRcIjo0fSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjM4NSxcInhcIjoyODIuNSxcInZhclwiOlwidmlld0J0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwidmlld1wifSxcImNvbXBJZFwiOjV9LHtcInR5cGVcIjpcIkxhYmVsXCIsXCJwcm9wc1wiOntcInlcIjoxODEsXCJ4XCI6MTA1LFwidmFyXCI6XCJ0b2tlblwiLFwidGV4dFwiOlwidG9rZW5cIixcImZvbnRTaXplXCI6MzAsXCJjb2xvclwiOlwiI2ZmZmZmZlwifSxcImNvbXBJZFwiOjl9LHtcInR5cGVcIjpcIkxhYmVsXCIsXCJwcm9wc1wiOntcInlcIjoyNTcsXCJ4XCI6MTA1LFwidmFyXCI6XCJ1c2VybmFtZVwiLFwidGV4dFwiOlwidG9rZW5cIixcImZvbnRTaXplXCI6MzAsXCJjb2xvclwiOlwiI2ZmZmZmZlwifSxcImNvbXBJZFwiOjEwfV0sXCJsb2FkTGlzdFwiOltcImNvbXAvaW1hZ2UucG5nXCIsXCJDaGFyYWN0ZXJzLyTni7wucG5nXCIsXCJjb21wL2J1dHRvbi5wbmdcIl0sXCJsb2FkTGlzdDNEXCI6W119O1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVWaWV3KFZpZXdUZXN0VUkudWlWaWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSRUcoXCJ1aS52aWV3LlZpZXdUZXN0VUlcIixWaWV3VGVzdFVJKTtcclxuICAgIGV4cG9ydCBjbGFzcyBWaWV3VGVzdDFVSSBleHRlbmRzIEJhc2VWaWV3IHtcclxuXHRcdHB1YmxpYyB0YW5rOkxheWEuQ2xpcDtcblx0XHRwdWJsaWMgY2xvc2VCdG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIHRva2VuOkxheWEuTGFiZWw7XG5cdFx0cHVibGljIHVzZXJuYW1lOkxheWEuTGFiZWw7XG4gICAgICAgIHB1YmxpYyBzdGF0aWMgIHVpVmlldzphbnkgPXtcInR5cGVcIjpcIkJhc2VWaWV3XCIsXCJwcm9wc1wiOntcIndpZHRoXCI6NjQwLFwiaGVpZ2h0XCI6MTEzNn0sXCJjb21wSWRcIjoyLFwiY2hpbGRcIjpbe1widHlwZVwiOlwiSW1hZ2VcIixcInByb3BzXCI6e1wieVwiOjAsXCJ4XCI6MCxcInRvcFwiOjAsXCJza2luXCI6XCJjb21wL2ltYWdlLnBuZ1wiLFwicmlnaHRcIjowLFwibGVmdFwiOjAsXCJib3R0b21cIjowfSxcImNvbXBJZFwiOjZ9LHtcInR5cGVcIjpcIkNsaXBcIixcInByb3BzXCI6e1wieVwiOjAsXCJ4XCI6MCxcInZhclwiOlwidGFua1wiLFwic2tpblwiOlwiQ2hhcmFjdGVycy8k54u8LnBuZ1wiLFwiaW5kZXhcIjo0LFwiY2xpcFlcIjo0LFwiY2xpcFhcIjo0LFwiY2VudGVyWVwiOi0xLFwiY2VudGVyWFwiOjB9LFwiY29tcElkXCI6M30se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjozMjcsXCJ4XCI6MjgyLFwidmFyXCI6XCJjbG9zZUJ0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiY2xvc2VcIn0sXCJjb21wSWRcIjo0fSx7XCJ0eXBlXCI6XCJMYWJlbFwiLFwicHJvcHNcIjp7XCJ5XCI6MTgxLFwieFwiOjEwNSxcInZhclwiOlwidG9rZW5cIixcInRleHRcIjpcInRva2VuXCIsXCJmb250U2l6ZVwiOjMwLFwiY29sb3JcIjpcIiNmZmZmZmZcIn0sXCJjb21wSWRcIjo3fSx7XCJ0eXBlXCI6XCJMYWJlbFwiLFwicHJvcHNcIjp7XCJ5XCI6MjU3LFwieFwiOjEwNSxcInZhclwiOlwidXNlcm5hbWVcIixcInRleHRcIjpcInRva2VuXCIsXCJmb250U2l6ZVwiOjMwLFwiY29sb3JcIjpcIiNmZmZmZmZcIn0sXCJjb21wSWRcIjo4fV0sXCJsb2FkTGlzdFwiOltcImNvbXAvaW1hZ2UucG5nXCIsXCJDaGFyYWN0ZXJzLyTni7wucG5nXCIsXCJjb21wL2J1dHRvbi5wbmdcIl0sXCJsb2FkTGlzdDNEXCI6W119O1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVWaWV3KFZpZXdUZXN0MVVJLnVpVmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUkVHKFwidWkudmlldy5WaWV3VGVzdDFVSVwiLFZpZXdUZXN0MVVJKTtcclxufVxyIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==