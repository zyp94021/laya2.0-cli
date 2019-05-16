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
        console.log(View.argments);
        return View;
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
exports.ActionTypes = {
    loginRequest: 'loginRequest',
    loginSuccess: 'loginSuccess',
    loginFail: 'loginFail',
    getTodoRequest: 'getTodoRequest',
    addTodoRequest: 'addTodoRequest',
    addTodo: 'addTodo',
    deleteTodo: 'deleteTodo',
    deleteTodoRequest: 'deleteTodoRequest',
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
var reducers = redux_1.combineReducers({ testData: changeTestData, user: changeUsername, token: changeToken, todo: exports.todo });
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
function watchRequestTodo() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.takeEvery(actions_1.ActionTypes.getTodoRequest, getTodos)];
            case 1:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.ActionTypes.addTodoRequest, addTodos)];
            case 2:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.ActionTypes.deleteTodoRequest, deleteTodos)];
            case 3:
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
    todo: [],
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
sagaMiddleware.run(sagas_1.default);
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
var actions_1 = __webpack_require__(/*! ../../../store/actions */ "./src/game/store/actions.ts");
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
            store_1.default.dispatch(actions_1.actionRequest(actions_1.ActionTypes.deleteTodoRequest, box.dataSource.id));
        }
    };
    APage.prototype.addTodo = function () {
        if (this.addInput.text !== '') {
            store_1.default.dispatch(actions_1.actionRequest(actions_1.ActionTypes.addTodoRequest, this.addInput.text));
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
    APage.prototype.updateView = function () {
        var _a = store_1.default.getState(), user = _a.user, token = _a.token, testData = _a.testData, todo = _a.todo;
        this.contents.text = testData.data1;
        // this.username.text = user.name
        // this.token.text = token
        this.todoList.array = todo;
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
        store_1.default.dispatch(actions_1.actionRequest(actions_1.ActionTypes.getTodoRequest));
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
                        store_1.default.dispatch(actions_1.changeToken(Math.random()));
                        store_1.default.dispatch(actions_1.changeUsername(Math.random()));
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
            APageUI.uiView = { "type": "BaseView", "props": { "width": 640, "height": 1136 }, "compId": 2, "child": [{ "type": "Rect", "props": { "width": 640, "name": "r", "lineWidth": 1, "height": 1136, "fillColor": "#fbbbbb" }, "compId": 7 }, { "type": "Button", "props": { "y": 555, "x": 208, "width": 200, "var": "btn", "skin": "comp/button.png", "label": "GoTo BPage", "height": 50 }, "compId": 8 }, { "type": "HTMLDivElement", "props": { "y": 0, "x": 0, "width": 644, "var": "dd", "innerHTML": "<br/><span>  测试水平居中对齐</span>", "height": 265, "runtime": "laya.html.dom.HTMLDivElement" }, "compId": 20 }, { "type": "Button", "props": { "y": 669, "x": 208, "width": 200, "var": "baseBtn", "skin": "comp/button.png", "label": "GoTo Base", "height": 50 }, "compId": 15, "child": [{ "type": "Label", "props": { "y": -627, "x": 190, "width": 201, "var": "contents", "valign": "middle", "text": "ssss", "height": 500, "fontSize": 40, "align": "center" }, "compId": 14 }] }, { "type": "Label", "props": { "y": 121, "x": 275.5, "width": 63, "valign": "middle", "text": "label", "height": 22, "align": "center" }, "compId": 25 }, { "type": "Button", "props": { "y": 132, "x": 426, "presetID": 1, "width": 192, "skin": "comp/button.png", "label": "按钮脚本", "isPresetRoot": true, "height": 90 }, "compId": 31, "child": [{ "type": "Script", "props": { "presetID": 2, "y": 1, "x": 0, "runtime": "game/ui/view/APage/Test.ts" }, "compId": 32 }] }, { "type": "List", "props": { "y": 132, "x": 30, "width": 260, "var": "todoList", "repeatX": 1, "height": 308 }, "compId": 49, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 77, "renderType": "render", "height": 34 }, "compId": 52, "child": [{ "type": "Label", "props": { "y": 7, "x": 0, "text": "label", "renderType": "render", "name": "label", "fontSize": 20 }, "compId": 50 }, { "type": "Button", "props": { "y": 5, "x": 54, "width": 23, "var": "deleteBtn", "skin": "comp/button.png", "label": "x", "height": 23 }, "compId": 53 }] }] }, { "type": "Box", "props": { "y": 422, "x": 208, "width": 225, "height": 22 }, "compId": 54, "child": [{ "type": "TextInput", "props": { "var": "addInput", "skin": "comp/textinput.png" }, "compId": 51 }, { "type": "Button", "props": { "y": -1, "x": 147, "var": "addBtn", "skin": "comp/button.png", "label": "add" }, "compId": 55 }] }], "loadList": ["comp/button.png", "prefab/Button.prefab", "comp/textinput.png"], "loadList3D": [] };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWVDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvVXRpbHMvRWZmZWN0VXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvYmFzZS9TaW5nbGV0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY29uc3QvTGF5ZXJDb25zdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9jb25zdC9WaWV3Q29uc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZ2FtZS9HYW1lQXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2dhbWUvc2NyaXB0L0hMYWJlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9nYW1lL3V0aWxzL1N0cmluZ1V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZ2FtZS91dGlscy9UaW1lVXRpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9tdmMvQ29udHJvbGxlck1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvbXZjL012Y01nci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9tdmMvVUlFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9tdmMvVmlld01nci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9tdmMvY29udHJvbGxlci9CYXNlQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9tdmMvbGF5ZXIvQmFzZUxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL212Yy9sYXllci9EaWFsb2dMYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9tdmMvbGF5ZXIvVmlld0xheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL212Yy9tb2RlbC9CYXNlTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvbXZjL3ZpZXcvQmFzZVZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvc2VydmljZS9TZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3NlcnZpY2UvZGlzcGF0Y2hlci9EaXNwYXRjaGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3NlcnZpY2UvZGlzcGF0Y2hlci9PYnNlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9zdG9yZS9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3N0b3JlL3JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvc3RvcmUvc2FnYXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvc3RvcmUvc3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvc3RvcmUvc3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdWkvdmlldy9BUGFnZS9BUGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS91aS92aWV3L0FQYWdlL0FQYWdlQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS91aS92aWV3L0FQYWdlL0FwYWdlTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdWkvdmlldy9BUGFnZS9UZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3VpL3ZpZXcvQlBhZ2UvQlBhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdWkvdmlldy9CUGFnZS9CUGFnZUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdWkvdmlldy9CUGFnZS9CUGFnZU1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3VpL3ZpZXcvQmFzZVRlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdWkvdmlldy9Mb2FkaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3VpL3ZpZXcvVmlld1Rlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdWkvdmlldy9WaWV3VGVzdDEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ldC9GZXRjaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV0L1NvY2tldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV0L2h0dHAvR2FtZU5ldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV0L2h0dHAvTmV0UmVxdWVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUvTWFpblNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9sYXlhTWF4VUkudHMiLCJ3ZWJwYWNrOi8vL3dzIChpZ25vcmVkKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBZ0IsdUJBQXVCO0FBQ3ZDOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdEpBLGdHQUFnRztBQUNoRywyRkFBeUM7QUFDekMsc0dBQTRDO0FBQzVDLHdHQUE4QztBQUM5Qzs7RUFFRTtBQUNGO0lBYUk7SUFBYyxDQUFDO0lBQ1IsZUFBSSxHQUFYO1FBQ0ksSUFBSSxHQUFHLEdBQWEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDN0MsR0FBRyxDQUFDLG9CQUFvQixFQUFDLG1CQUFTLENBQUMsQ0FBQztRQUNwQyxHQUFHLENBQUMsNEJBQTRCLEVBQUMsY0FBSSxDQUFDLENBQUM7UUFDdkMsR0FBRyxDQUFDLDRCQUE0QixFQUFDLGdCQUFNLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBbEJNLGdCQUFLLEdBQVEsR0FBRyxDQUFDO0lBQ2pCLGlCQUFNLEdBQVEsSUFBSSxDQUFDO0lBQ25CLG9CQUFTLEdBQVEsU0FBUyxDQUFDO0lBQzNCLHFCQUFVLEdBQVEsTUFBTSxDQUFDO0lBQ3pCLGlCQUFNLEdBQVEsUUFBUSxDQUFDO0lBQ3ZCLGlCQUFNLEdBQVEsUUFBUSxDQUFDO0lBQ3ZCLHFCQUFVLEdBQUssdUJBQXVCLENBQUM7SUFDdkMsb0JBQVMsR0FBUSxFQUFFLENBQUM7SUFDcEIsZ0JBQUssR0FBUyxLQUFLLENBQUM7SUFDcEIsZUFBSSxHQUFTLEtBQUssQ0FBQztJQUNuQix1QkFBWSxHQUFTLEtBQUssQ0FBQztJQUMzQiw0QkFBaUIsR0FBUyxJQUFJLENBQUM7SUFRMUMsaUJBQUM7Q0FBQTtrQkFwQm9CLFVBQVU7QUFxQi9CLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDNUJsQixrRkFBcUM7QUFDckM7SUFDRTtRQUNFLGNBQWM7UUFDZCxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFVLENBQUMsS0FBSyxFQUFFLG9CQUFVLENBQUMsTUFBTSxDQUFDOztZQUNqRSxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFVLENBQUMsS0FBSyxFQUFFLG9CQUFVLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRTtRQUMzQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBRTtRQUNqRCwrQ0FBK0M7UUFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsb0JBQVUsQ0FBQyxTQUFTO1FBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLG9CQUFVLENBQUMsVUFBVTtRQUM3QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxvQkFBVSxDQUFDLE1BQU07UUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsb0JBQVUsQ0FBQyxNQUFNO1FBQ3JDLG9CQUFvQjtRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLG9CQUFVLENBQUMsaUJBQWlCO1FBRXpELG9EQUFvRDtRQUNwRCxJQUFJLG9CQUFVLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU07WUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7UUFDN0YsSUFBSSxvQkFBVSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUM7WUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxNQUFNLEVBQUU7UUFDMUYsSUFBSSxvQkFBVSxDQUFDLElBQUk7WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtRQUNyQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSTtRQUM1QixnREFBZ0Q7UUFDaEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztJQUNySSxDQUFDO0lBRU8sOEJBQWUsR0FBdkI7UUFDRSwrQ0FBK0M7UUFDL0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7SUFFTyw2QkFBYyxHQUF0QjtRQUNFLFlBQVk7UUFDWixvQkFBVSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxvQkFBVSxDQUFDLFVBQVUsQ0FBQztJQUNqRSxDQUFDO0lBQ0gsV0FBQztBQUFELENBQUM7QUFDRCxPQUFPO0FBQ1AsSUFBSSxJQUFJLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztBQ25DVjtJQUFBO0lBd0tBLENBQUM7SUF2S0M7Ozs7OztPQU1HO0lBQ1csd0JBQVksR0FBMUIsVUFBMkIsR0FBRyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTztRQUN0RCxtQkFBbUI7UUFDbkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVyRCxJQUFJLEtBQUssR0FBRyxDQUFDO1FBQ2IsT0FBTyxFQUFFO1FBRVQsU0FBUyxPQUFPO1lBQ2QsSUFBSSxLQUFLLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTtnQkFDdkIsUUFBUSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQzthQUN4QztpQkFBTTtnQkFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDWCxHQUFHLEVBQ0gsRUFBRSxDQUFDLEVBQUUsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUM1QixHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ2IsSUFBSSxFQUNKLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtvQkFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQ1gsR0FBRyxFQUNILEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUNaLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDYixJQUFJLEVBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO3dCQUN4QixFQUFFLEtBQUs7d0JBQ1AsT0FBTyxFQUFFO29CQUNYLENBQUMsQ0FBQyxDQUNIO2dCQUNILENBQUMsQ0FBQyxDQUNIO2FBQ0Y7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ1csbUJBQU8sR0FBckIsVUFBc0IsR0FBRyxFQUFFLElBQVUsRUFBRSxJQUFXLEVBQUUsUUFBZSxFQUFFLE9BQWMsRUFBRSxPQUFjO1FBQXhFLGlDQUFVO1FBQUUsa0NBQVc7UUFBRSwwQ0FBZTtRQUFFLHdDQUFjO1FBQUUsd0NBQWM7UUFDakcsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM5RzthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ2hIO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNXLG1CQUFPLEdBQXJCLFVBQXNCLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQWM7UUFBZCx3Q0FBYztRQUM5RCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7UUFDeEMsSUFBSSxNQUFNLElBQUksQ0FBQztZQUFFLE9BQU07UUFDdkIsSUFBSSxXQUFXLEdBQUcsTUFBTSxHQUFHLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztRQUM5QyxJQUFJLE9BQU8sR0FBRyxRQUFRO1FBQ3RCLElBQUksS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtRQUM1QixLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDO1FBRS9CLFNBQVMsU0FBUztZQUNoQixPQUFPLElBQUksV0FBVztZQUN0QixFQUFFLE1BQU07WUFDUixJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ2QsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLEtBQUssR0FBRyxJQUFJO2FBQ2I7aUJBQU07Z0JBQ0wsUUFBUSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDL0M7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDVyx3QkFBWSxHQUExQixVQUEyQixHQUFHLEVBQUUsU0FBZTtRQUFmLDJDQUFlO1FBQzdDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUNYLEdBQUcsRUFDSCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFDWixTQUFTLEVBQ1QsSUFBSSxFQUNKLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUNqQixJQUFJLEVBQ0o7WUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDeEcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FDYixDQUNGO0lBQ0gsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ1csc0JBQVUsR0FBeEIsVUFBeUIsR0FBRyxFQUFFLElBQVcsRUFBRSxJQUFXO1FBQXhCLGtDQUFXO1FBQUUsa0NBQVc7UUFDcEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO1FBQ3hCLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQ2xDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztTQUNwQjtJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ1csdUJBQVcsR0FBekIsVUFBMEIsRUFBRSxFQUFFLFVBQWlCO1FBQWpCLDhDQUFpQjtRQUM3QyxJQUFJLENBQUMsRUFBRTtZQUFFLE9BQU07UUFDZixFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDMUQsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFDYSw0QkFBZ0IsR0FBOUIsVUFBK0IsRUFBRTtRQUMvQixJQUFJLENBQUMsRUFBRTtZQUFFLE9BQU07UUFDZixFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDNUQsQ0FBQztJQUNhLDRCQUFnQixHQUE5QixVQUErQixFQUFFLEVBQUUsVUFBVTtRQUE3QyxpQkFrQ0M7UUFqQ0MsSUFBSSxFQUFFLENBQUMsZ0JBQWdCO1lBQUUsT0FBTTtRQUMvQixFQUFFLENBQUMsZ0JBQWdCLEdBQUcsSUFBSTtRQUMxQixJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNiLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ2IsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLE1BQU07UUFDckIsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLE1BQU07UUFDckIsSUFBSSxLQUFLLEVBQUUsS0FBSztRQUNoQixJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsS0FBSyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEMsS0FBSyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEM7YUFBTTtZQUNMLEtBQUssR0FBRyxFQUFFO1lBQ1YsS0FBSyxHQUFHLEVBQUU7U0FDWDtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUNYLEVBQUUsRUFDRixFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHLEtBQUssRUFBRSxFQUNoRSxHQUFHLEVBQ0gsSUFBSSxFQUNKLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtZQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDWCxFQUFFLEVBQ0YsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQzlDLEdBQUcsRUFDSCxJQUFJLEVBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSSxFQUFFO2dCQUN4QixJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRTtvQkFDakIsRUFBRSxDQUFDLGdCQUFnQixHQUFHLEtBQUs7aUJBQzVCO1lBQ0gsQ0FBQyxDQUFDLENBQ0g7UUFDSCxDQUFDLENBQUMsQ0FDSDtJQUNILENBQUM7SUFDSCxrQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6S0Q7O0dBRUc7QUFDSDtJQUNFOztPQUVHO0lBQ0g7SUFBZSxDQUFDO0lBR2hCOzs7T0FHRztJQUNXLHFCQUFXLEdBQXpCO1FBQTBCLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQseUJBQWM7O1FBQ3RDLElBQU0sS0FBSyxHQUFRLElBQUk7UUFDdkIsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsU0FBUSxLQUFLLFlBQUwsS0FBSyxrQkFBSSxJQUFJLEtBQUMsQ0FBQztJQUNsRSxDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDO0FBZlksOEJBQVM7Ozs7Ozs7Ozs7Ozs7OztBQ0h0QixJQUFZLFVBT1g7QUFQRCxXQUFZLFVBQVU7SUFDcEIsMkNBQVE7SUFDUiw2Q0FBSztJQUNMLDJDQUFJO0lBQ0osNkNBQUs7SUFDTCwrQ0FBTTtJQUNOLGlEQUFPO0FBQ1QsQ0FBQyxFQVBXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBT3JCOzs7Ozs7Ozs7Ozs7Ozs7QUNQRCxJQUFZLFNBU1g7QUFURCxXQUFZLFNBQVM7SUFDbkIseUNBQVE7SUFDUiwrQ0FBTztJQUNQLGlEQUFRO0lBQ1IsbURBQVM7SUFDVCxxREFBVTtJQUNWLGlEQUFRO0lBQ1IsMkNBQUs7SUFDTCwyQ0FBSztBQUNQLENBQUMsRUFUVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQVNwQjs7Ozs7Ozs7Ozs7Ozs7O0FDVEQsK0ZBQTRDO0FBRTVDLGtGQUFxQztBQUNyQyx3R0FBK0M7QUFDL0Msa0dBQTJDO0FBRTNDLCtGQUE0QztBQUM1QywrRUFBdUM7QUFDdkM7SUFBQTtJQW9DQSxDQUFDO0lBaENDOzs7T0FHRztJQUNXLFlBQUksR0FBbEI7UUFDRSxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztZQUMzRCxLQUFLO1lBQ0wsaUJBQU8sQ0FBQyxJQUFJLEVBQUU7WUFDZCxPQUFPLEVBQUU7UUFDWCxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsc0JBQWtCLHFCQUFVO2FBQTVCO1lBQ0UsT0FBTyxpQkFBTyxDQUFDLFVBQVU7UUFDM0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBa0IscUJBQVU7YUFBNUI7WUFDRSxPQUFPLHVCQUFVLENBQUMsV0FBVyxFQUFFO1FBQ2pDLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWtCLG1CQUFRO2FBQTFCO1lBQ0UsT0FBTyxtQkFBUSxDQUFDLFdBQVcsRUFBRTtRQUMvQixDQUFDOzs7T0FBQTtJQUNELHNCQUFrQixpQkFBTTthQUF4QjtZQUNFLE9BQU8sZ0JBQU0sQ0FBQyxXQUFXLEVBQUU7UUFDN0IsQ0FBQzs7O09BQUE7SUFDRCxzQkFBa0IsY0FBRzthQUFyQjtZQUNFLE9BQU8saUJBQU8sQ0FBQyxXQUFXLEVBQUU7UUFDOUIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBa0IsZ0JBQUs7YUFBdkI7WUFDRSxPQUFPLGFBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLHNCQUFzQixFQUFFLENBQUM7UUFDNUQsQ0FBQzs7O09BQUE7SUFsQ0QsU0FBUztJQUNLLGtCQUFVLEdBQVEsSUFBSTtJQWtDdEMsY0FBQztDQUFBO2tCQXBDb0IsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1I1Qjs7R0FFRztBQUNIO0lBQW9DLDBCQUFXO0lBQzdDO1FBQUEsWUFDRSxpQkFBTyxTQUNSO1FBR0Qsa0NBQWtDO1FBQzNCLFdBQUssR0FBWSxJQUFJO1FBQzVCLDhDQUE4QztRQUN2QyxZQUFNLEdBQVksS0FBSzs7SUFOOUIsQ0FBQztJQVNELHdCQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFtQjtRQUMxQyxJQUFJLENBQUMsSUFBSSxFQUFFO0lBQ2IsQ0FBQztJQUNPLHFCQUFJLEdBQVo7UUFDRSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVU7U0FDdkM7UUFDRCxJQUFJLENBQUMsR0FBRyxFQUFFO0lBQ1osQ0FBQztJQUNNLG9CQUFHLEdBQVY7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFNO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRTtZQUM3QixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2YsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUs7b0JBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRTs7b0JBQzdFLElBQUksQ0FBQyxZQUFZLEVBQUU7YUFDekI7O2dCQUFNLElBQUksQ0FBQyxhQUFhLEVBQUU7U0FDNUI7YUFBTTtZQUNMLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDZixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTTtvQkFBRSxJQUFJLENBQUMsY0FBYyxFQUFFOztvQkFDaEYsSUFBSSxDQUFDLGFBQWEsRUFBRTthQUMxQjs7Z0JBQU0sSUFBSSxDQUFDLGNBQWMsRUFBRTtTQUM3QjtJQUNILENBQUM7SUFFTyw4QkFBYSxHQUFyQjtRQUNFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSztRQUNuRSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVE7UUFDcEMsT0FBTyxJQUFJLEVBQUU7WUFDWCxLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLEtBQUssR0FBRyxVQUFVO1lBQzlDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztZQUN4RSxJQUFJLEdBQUcsV0FBVyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssSUFBSSxLQUFLLEdBQUcsRUFBRTtTQUMvRDtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEtBQUs7SUFDbEMsQ0FBQztJQUNPLDZCQUFZLEdBQXBCO1FBQ0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLO1FBQ25FLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUTtRQUNwQyxPQUFPLElBQUksRUFBRTtZQUNYLEtBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsS0FBSyxHQUFHLFVBQVU7WUFDOUMsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQ3hFLElBQUksR0FBRyxXQUFXLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSztTQUNqRDtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEtBQUs7SUFDbEMsQ0FBQztJQUNPLCtCQUFjLEdBQXRCO1FBQ0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNO1FBQ3JFLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUTtRQUNwQyxPQUFPLElBQUksRUFBRTtZQUNYLEtBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsS0FBSyxHQUFHLFVBQVU7WUFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsS0FBSztZQUNoQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksS0FBSyxHQUFHLEVBQUU7U0FDaEY7SUFDSCxDQUFDO0lBQ08sOEJBQWEsR0FBckI7UUFDRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU07UUFDckUsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRO1FBQ3BDLE9BQU8sSUFBSSxFQUFFO1lBQ1gsS0FBSyxHQUFHLEtBQUssR0FBRyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxLQUFLLEdBQUcsVUFBVTtZQUM5QyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxLQUFLO1lBQ2hDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU07U0FDbEU7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxLQUFLLEdBQUcsQ0FBQztJQUN0QyxDQUFDO0lBQ0gsYUFBQztBQUFELENBQUMsQ0FoRm1DLElBQUksQ0FBQyxNQUFNLEdBZ0Y5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRkQsa0dBQWdEO0FBRWhEO0lBQWdDLDhCQUFTO0lBQ3ZDO2VBQ0UsaUJBQU87SUFDVCxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLENBSitCLHFCQUFTLEdBSXhDO0FBSlksZ0NBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGdkIsa0dBQWdEO0FBRWhEO0lBQThCLDRCQUFTO0lBQ3JDO2VBQ0UsaUJBQU87SUFDVCxDQUFDO0lBQ0QsYUFBYTtJQUNMLDZCQUFVLEdBQWxCLFVBQW1CLElBQVk7UUFDN0IsT0FBTztZQUNMLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDOUIsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3ZDLE9BQU8sRUFBRSxJQUFJLEdBQUcsRUFBRTtTQUNuQjtJQUNILENBQUM7SUFDRDs7Ozs7O09BTUc7SUFDSSw0QkFBUyxHQUFoQixVQUFpQixJQUFZLEVBQUUsSUFBa0IsRUFBRSxNQUFvQixFQUFFLE1BQW9CO1FBQTlELGlDQUFrQjtRQUFFLHFDQUFvQjtRQUFFLHFDQUFvQjtRQUMzRixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztRQUNoQyxPQUFPLEtBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFRO0lBQy9FLENBQUM7SUFDRDs7OztPQUlHO0lBQ0ksNkJBQVUsR0FBakIsVUFBa0IsSUFBVSxFQUFFLE1BQXNDO1FBQXRDLHVEQUFzQztRQUNsRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFO1FBQzdCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUU7UUFDckYsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFJLElBQUksQ0FBQyxPQUFPLEVBQUk7UUFDcEUsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUN6QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQUksSUFBSSxDQUFDLFFBQVEsRUFBSTtRQUN4RSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFO1FBQzNCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBSSxJQUFJLENBQUMsVUFBVSxFQUFJO1FBQ2hGLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7UUFDL0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFJLElBQUksQ0FBQyxVQUFVLEVBQUk7UUFDaEYsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTtRQUUvQixPQUFPLE1BQU07YUFDVixPQUFPLENBQUMsTUFBTSxFQUFFLEtBQUcsSUFBTSxDQUFDO2FBQzFCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBRyxLQUFPLENBQUM7YUFDekIsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFHLE1BQVEsQ0FBQzthQUN6QixPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUcsR0FBSyxDQUFDO2FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBRyxJQUFNLENBQUM7YUFDdkIsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFHLElBQU0sQ0FBQzthQUN4QixPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUcsS0FBTyxDQUFDO2FBQ3hCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBRyxNQUFRLENBQUM7YUFDMUIsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFHLE9BQVMsQ0FBQzthQUMxQixPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUcsTUFBUSxDQUFDO2FBQzFCLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBRyxPQUFTLENBQUM7SUFDL0IsQ0FBQztJQUNEOztPQUVHO0lBQ0ksMEJBQU8sR0FBZDtRQUNFLElBQU0sR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFO1FBQ3RCLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFDekIsT0FBTyxHQUFHO0lBQ1osQ0FBQztJQUNEOztPQUVHO0lBQ0ksNkJBQVUsR0FBakI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDLENBdkU2QixxQkFBUyxHQXVFdEM7QUF2RVksNEJBQVE7Ozs7Ozs7Ozs7Ozs7OztBQ0ZyQixJQUFjLEdBQUcsQ0FtQ2hCO0FBbkNELFdBQWMsS0FBRztJQUNmO1FBQUE7WUFDVSxnQkFBVyxHQUFHLElBQUksR0FBRyxFQUFFO1FBOEJqQyxDQUFDO1FBNUJRLG9DQUFRLEdBQWYsVUFBZ0IsR0FBRztZQUNqQixJQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTztZQUN2QixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO2dCQUFFLE9BQU07WUFDOUIsSUFBSSxHQUFHLENBQUMsVUFBVSxFQUFFO2dCQUNsQixJQUFNLFVBQVUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxVQUFVLEVBQUU7Z0JBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDNUIsSUFBSSxHQUFHLENBQUMsS0FBSyxFQUFFO29CQUNiLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ3JDO2dCQUNELElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUM7Z0JBQ3JDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQzthQUNuQztRQUNILENBQUM7UUFDTSxzQ0FBVSxHQUFqQixVQUFrQixhQUFhO1lBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQztnQkFBRSxPQUFNO1lBQ3pDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUN4QyxDQUFDO1FBQ0Qsb0NBQVEsR0FBUixVQUFTLGFBQWE7WUFDcEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7UUFDNUMsQ0FBQztRQUNEOzs7O1dBSUc7UUFDSCx5Q0FBYSxHQUFiLFVBQWMsYUFBYTtZQUN6QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztRQUM1QyxDQUFDO1FBQ0gsd0JBQUM7SUFBRCxDQUFDO0lBRVksbUJBQWEsR0FBRyxJQUFJLGlCQUFpQixFQUFFO0FBQ3RELENBQUMsRUFuQ2EsR0FBRyxHQUFILFdBQUcsS0FBSCxXQUFHLFFBbUNoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0QsMEVBQThCO0FBQzlCLDhGQUF3QztBQUN4Qzs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUNILElBQU0sR0FBRyxHQUFHLEVBQUU7QUFvQ2dFLGtCQUFHO0FBbkNwRSxxQkFBYSxHQUFHLGlCQUFPLElBQUksVUFBRyxDQUFDLElBQUksQ0FBQyxjQUFJLElBQUksV0FBSSxDQUFDLE9BQU8sS0FBSyxPQUFPLEVBQXhCLENBQXdCLENBQUMsRUFBMUMsQ0FBMEM7QUFDckUscUJBQWEsR0FBRyxVQUFDLEVBQW9CO0lBQWxCLHdCQUFPLEVBQUUsOEJBQU87SUFDOUMsSUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxjQUFJLElBQUksV0FBSSxDQUFDLE9BQU8sS0FBSyxPQUFPLEVBQXhCLENBQXdCLENBQUM7SUFDN0QsSUFBSSxHQUFHO0lBQ1AsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDZCxJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ3ZCLEdBQUcsZ0JBQVEsSUFBSSxFQUFLLElBQUksQ0FBRTtRQUMxQixHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO0tBQzFCO1NBQU07UUFDTCxHQUFHLGNBQUssT0FBTyxhQUFLLElBQUksQ0FBRTtRQUMxQixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztLQUNkO0lBQ0QsT0FBTyxHQUFHO0FBQ1osQ0FBQztBQUNELElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLO0FBcUJnRSxnQkFBRTtBQXBCckYsSUFBTSxXQUFXLEdBQUcsVUFBQyxLQUFLLEVBQUUsVUFBaUIsRUFBRSxLQUFZO0lBQS9CLDhDQUFpQjtJQUFFLG9DQUFZO0lBQ3pELE9BQU8sY0FBSTtRQUNULHFCQUFhLENBQUM7WUFDWixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsS0FBSztZQUNMLFVBQVU7WUFDVixLQUFLO1lBQ0wsSUFBSTtTQUNMLENBQUM7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDMUIsT0FBTyxJQUFJO0lBQ2IsQ0FBQztBQUNILENBQUM7QUFRcUQsa0NBQVc7QUFQakUsSUFBTSxTQUFTLEdBQUcsY0FBSTtJQUNwQixlQUFFLEdBQUcsSUFBSTtBQUNYLENBQUM7QUFLa0UsOEJBQVM7QUFKNUUsSUFBTSxhQUFhLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFhO0FBSXZCLHNDQUFhO0FBSC9CLElBQU0sT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTztBQUdwQiwwQkFBTztBQUZoQixJQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVE7QUFFRSw0QkFBUTtBQUR6QyxJQUFNLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVM7QUFDVSw4QkFBUzs7Ozs7Ozs7Ozs7Ozs7O0FDckRwRCwrRUFBd0M7QUFFM0IsYUFBSyxHQUFHLFVBQUMsRUFBRTtJQUFFLGNBQU87U0FBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1FBQVAsNkJBQU87O0lBQy9CLE9BQU8sVUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVU7UUFDNUIsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO1FBQ2xDLElBQU0sR0FBRyxHQUFHLHNCQUFhLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNoRSxHQUFHLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLElBQUksRUFBRTtRQUMzQixJQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSztRQUN2QixLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUU7UUFDekMsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNoQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUU7UUFDL0IsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUV2RCxPQUFPLFVBQVU7SUFDbkIsQ0FBQztBQUNILENBQUM7QUFFWSxpQkFBUyxHQUFHLGFBQUc7SUFDMUIsSUFBSSxHQUFHLENBQUMsS0FBSyxFQUFFO1FBQ2IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUs7WUFDckMsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLGlCQUFPO2dCQUNyQyxJQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQUk7b0JBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUU7d0JBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQztvQkFDckMsQ0FBQyxDQUFDO2dCQUNKLENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQztLQUNIO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDN0JELCtFQUEyRDtBQUMzRCxrRkFBcUM7QUFFckMsSUFBYyxHQUFHLENBOEZoQjtBQTlGRCxXQUFjLEtBQUc7SUFDZjtRQUFBO1lBQ1UsVUFBSyxHQUF1QixJQUFJLEdBQUcsRUFBaUI7WUFDcEQsV0FBTSxHQUF3QixJQUFJLEdBQUcsRUFBa0I7WUFDdkQsY0FBUyxHQUF1QixJQUFJLEdBQUcsRUFBaUI7UUFpRmxFLENBQUM7UUEvRVEseUJBQU8sR0FBZCxVQUFlLEdBQUc7WUFDaEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDNUIsQ0FBQztRQUNNLHlCQUFPLEdBQWQsVUFBZSxHQUFHLEVBQUUsSUFBVztZQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDO1FBQzNCLENBQUM7UUFDTSwwQkFBUSxHQUFmLFVBQWdCLEtBQUs7WUFDbkIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUMzQyxJQUFJLEtBQUs7Z0JBQUUsT0FBTyxLQUFLO1lBQ3ZCLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDO1lBQ3BDLE9BQU8sS0FBSztRQUNkLENBQUM7UUFDTSwwQkFBUSxHQUFmLFVBQWdCLEdBQUcsRUFBRSxLQUFhO1lBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUM7UUFDN0IsQ0FBQztRQUVNLDBCQUFRLEdBQWYsVUFBZ0IsSUFBSTs7WUFBRSxjQUFPO2lCQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87Z0JBQVAsNkJBQU87O1lBQzNCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDNUMsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQztnQkFDL0IsT0FBTTthQUNQO1lBQ0QsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNsQyxJQUFJLEtBQUssRUFBRTtnQkFDVCxXQUFLLENBQUMsS0FBSyxFQUFDLFFBQVEsWUFBQyxLQUFLLFNBQUssSUFBSSxHQUFDO2dCQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztnQkFDdkMsT0FBTTthQUNQO1lBQ0QsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQzdCLFdBQUssQ0FBQyxLQUFLLEVBQUMsUUFBUSxZQUFDLEtBQUssU0FBSyxJQUFJLEdBQUM7UUFDdEMsQ0FBQztRQUNPLDRCQUFVLEdBQWxCLFVBQW1CLElBQUk7WUFDckIsSUFBTSxHQUFHLEdBQUcsc0JBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ3ZDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUV0QyxJQUFJLEtBQUssR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUU7WUFDMUIsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLO1lBQ25CLEdBQUcsQ0FBQyxJQUFJLEdBQUcsS0FBSztZQUNoQixHQUFHLENBQUMsS0FBSyxHQUFHLEtBQUs7WUFDakIsbUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDZCxzQkFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7WUFFM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztZQUNoQyxJQUFJLEtBQUssQ0FBQyxJQUFJO2dCQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUU7WUFDNUIsT0FBTyxLQUFLO1FBQ2QsQ0FBQztRQUNPLDZCQUFXLEdBQW5CLFVBQW9CLEtBQUs7WUFDdkIsSUFBTSxNQUFNLEdBQUcsSUFBSSxLQUFLLENBQUMsV0FBRSxDQUFDO1lBQzVCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLFFBQVE7WUFDOUIsV0FBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDbkIsT0FBTyxNQUFNO1FBQ2YsQ0FBQztRQUNNLDJCQUFTLEdBQWhCLFVBQWlCLGNBQW1COztZQUFFLGNBQU87aUJBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztnQkFBUCw2QkFBTzs7WUFDM0MsSUFBSSxLQUFLO1lBQ1QsSUFBSSxjQUFjLENBQUMsT0FBTyxFQUFFO2dCQUMxQixLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO2FBQzdDO2lCQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRTtnQkFDdkMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDO2FBQ3JDO2lCQUFNLElBQUksY0FBYyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUU7Z0JBQzdDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO2FBQ3pEO1lBQ0QsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsV0FBSyxDQUFDLEtBQUssRUFBQyxTQUFTLFlBQUMsS0FBSyxTQUFLLElBQUksR0FBQztnQkFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7Z0JBQ2hELE9BQU07YUFDUDtRQUNILENBQUM7UUFDTSx3QkFBTSxHQUFiLFVBQWMsY0FBYztZQUMxQixJQUFJLEtBQUs7WUFDVCxJQUFJLGNBQWMsQ0FBQyxPQUFPLEVBQUU7Z0JBQzFCLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO2FBQ25EO2lCQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUU7Z0JBQzdDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUM7YUFDM0M7aUJBQU0sSUFBSSxjQUFjLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRTtnQkFDN0MsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO2FBQy9EO1lBQ0QsT0FBTyxDQUFDLENBQUMsS0FBSztRQUNoQixDQUFDO1FBQ0gsY0FBQztJQUFELENBQUM7SUFDWSxhQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUU7SUFDdkIsY0FBUSxHQUFHLFVBQUMsSUFBSTtRQUFFLGNBQU87YUFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1lBQVAsNkJBQU87O1FBQ3BDLGFBQU8sQ0FBQyxRQUFRLE9BQWhCLGFBQU8sR0FBVSxJQUFJLFNBQUssSUFBSSxHQUFDO0lBQ2pDLENBQUM7SUFFWSxlQUFTLEdBQUcsVUFBQyxjQUFjO1FBQUUsY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCw2QkFBTzs7UUFDL0MsYUFBTyxDQUFDLFNBQVMsT0FBakIsYUFBTyxHQUFXLGNBQWMsU0FBSyxJQUFJLEdBQUM7SUFDNUMsQ0FBQztBQUNILENBQUMsRUE5RmEsR0FBRyxHQUFILFdBQUcsS0FBSCxXQUFHLFFBOEZoQjs7Ozs7Ozs7Ozs7Ozs7O0FDakdELGlJQUFnRTtBQUVoRTtJQUdFO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSTtRQUNoQixJQUFJLENBQUMsSUFBSSxFQUFFO0lBQ2IsQ0FBQztJQUNNLDZCQUFJLEdBQVgsY0FBZSxDQUFDO0lBQ1QsaUNBQVEsR0FBZixVQUFnQixLQUFLO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSztJQUNwQixDQUFDO0lBQ00saUNBQVEsR0FBZjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUs7SUFDbkIsQ0FBQztJQUNNLGdDQUFPLEdBQWQsVUFBZSxJQUFJO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSTtJQUNsQixDQUFDO0lBQ00sZ0NBQU8sR0FBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUk7SUFDbEIsQ0FBQztJQUVELE1BQU07SUFDQyxvQ0FBVyxHQUFsQixVQUFtQixHQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU07UUFDdEMsdUJBQVUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUM7SUFDM0MsQ0FBQztJQUNELFNBQVM7SUFDRix1Q0FBYyxHQUFyQixVQUFzQixHQUFHO1FBQ3ZCLHVCQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUN4QixDQUFDO0lBQ0QsTUFBTTtJQUNDLGlDQUFRLEdBQWYsVUFBZ0IsR0FBRztRQUFFLGNBQU87YUFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1lBQVAsNkJBQU87O1FBQzFCLHVCQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUNEOzs7OztPQUtHO0lBQ0gsMENBQWlCLEdBQWpCLFVBQWtCLEdBQUcsRUFBRSxRQUFRLEVBQUUsT0FBTyxJQUFHLENBQUM7SUFFNUM7Ozs7O09BS0c7SUFDSCxzQ0FBYSxHQUFiLFVBQWMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsT0FBTyxJQUFHLENBQUM7SUFFN0M7Ozs7T0FJRztJQUNILG9DQUFXLEdBQVgsVUFBWSxHQUFHLEVBQUUsR0FBRyxJQUFHLENBQUM7SUFDeEIsU0FBUztJQUNGLG9DQUFXLEdBQWxCLGNBQXNCLENBQUM7SUFDekIscUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9ERCx1R0FBbUQ7QUFFbkQ7SUFBK0IsNkJBQVc7SUFFeEMsbUJBQVksS0FBaUI7UUFBN0IsWUFDRSxpQkFBTyxTQU9SO1FBTkMsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLO1FBQ3JCLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLO1FBQ2hDLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO1FBQ2xDLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSTtRQUN4QixLQUFJLENBQUMsWUFBWSxHQUFHLElBQUk7UUFDeEIsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJOztJQUMxQixDQUFDO0lBR00sNEJBQVEsR0FBZixVQUFnQixJQUFXO1FBQUUsY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCw2QkFBTzs7UUFDbEMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztTQUM5QjtRQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ00sNkJBQVMsR0FBaEIsVUFBaUIsSUFBVztRQUMxQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sRUFBRTtTQUNmO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDO0lBQ2pELENBQUM7SUFkTSxrQkFBUSxHQUFHLHVCQUFVLENBQUMsSUFBSTtJQWVuQyxnQkFBQztDQUFBLENBM0I4QixJQUFJLENBQUMsTUFBTSxHQTJCekM7QUEzQlksOEJBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIdEIsOEZBQXVDO0FBRXZDLHVHQUFtRDtBQUNuRCxnRkFBcUM7QUFDckM7SUFBbUIsd0JBQVU7SUFDM0I7UUFBQSxZQUNFLGlCQUFPLFNBR1I7UUFGQyxLQUFJLENBQUMsSUFBSSxHQUFHLGdCQUFnQjtRQUM1QixLQUFJLENBQUMsUUFBUSxHQUFHLFNBQVM7O0lBQzNCLENBQUM7SUFDSCxXQUFDO0FBQUQsQ0FBQyxDQU5rQixJQUFJLENBQUMsS0FBSyxHQU01QjtBQUNEO0lBQWlDLCtCQUFTO0lBQ3hDLGdCQUFnQjtJQUNoQixxQkFBWSxLQUFpQjtRQUE3QixZQUNFLGtCQUFNLEtBQUssQ0FBQyxTQUNiO1FBR08sV0FBSyxHQUE0QixJQUFJLEdBQUcsRUFBRTs7SUFIbEQsQ0FBQztJQUtNLDhCQUFRLEdBQWYsVUFBZ0IsSUFBUztRQUFFLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQsNkJBQWM7O1FBQ3ZDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFDakIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUU7Z0JBQzlCLGtCQUFTLENBQUMsSUFBSSxDQUFDO1lBQ2pCLENBQUMsQ0FBQztTQUNIO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNO1FBRXpCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztRQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUNuQixpQkFBTSxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLFNBQUssSUFBSSxFQUFFO1FBRTNDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRztRQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUc7UUFDbEIsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUM7UUFDdkIsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJO1FBQ3hCLElBQUksS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUc7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHO1FBQ2pCLEtBQUssQ0FBQyxFQUFFLENBQ04sSUFBSSxFQUNKLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQzlCLEdBQUcsRUFDSCxJQUFJLEVBQ0osSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtZQUNyQixJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDNUIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDO1FBQ3JELENBQUMsQ0FBQyxDQUNIO0lBQ0gsQ0FBQztJQUNNLCtCQUFTLEdBQWhCLFVBQWlCLElBQVM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFELGlCQUFNLFNBQVMsWUFBQyxJQUFJLENBQUM7SUFDdkIsQ0FBQztJQXpDTSxvQkFBUSxHQUFHLHVCQUFVLENBQUMsTUFBTTtJQTBDckMsa0JBQUM7Q0FBQSxDQS9DZ0MscUJBQVMsR0ErQ3pDO0FBL0NZLGtDQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWHhCLDhGQUF1QztBQUl2Qyx1R0FBbUQ7QUFFbkQsSUFBTSxHQUFHLEdBQUcsR0FBRztBQUNmLElBQU0sSUFBSSxHQUFHLEdBQUc7QUFDaEI7SUFBK0IsNkJBQVM7SUFDdEMsbUJBQVksS0FBaUI7UUFBN0IsWUFDRSxrQkFBTSxLQUFLLENBQUMsU0FDYjtRQUVPLGVBQVMsR0FBWSxFQUFFOztJQUYvQixDQUFDO0lBSU0sNEJBQVEsR0FBZixVQUFnQixJQUFTO1FBQXpCLGlCQWlDQztRQWpDMEIsY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCw2QkFBTzs7UUFDaEMsSUFBSSxRQUFxQjtRQUN6QixJQUFNLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDL0IsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUN6QixRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDckQ7YUFBTTtZQUNMLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUTtTQUN6QjtRQUNELFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRztRQUNqRCxNQUFNLENBQUMsRUFBRSxDQUNQLFFBQVEsRUFDUixFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUM1QyxJQUFJLEVBQ0osSUFBSSxFQUNKLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDekIsSUFBSSxRQUFRLEtBQUssS0FBSSxDQUFDLFFBQVE7Z0JBQUUsUUFBUSxDQUFDLFVBQVUsRUFBRTtRQUN2RCxDQUFDLENBQUMsQ0FDSDtRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN6QixpQkFBTSxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLFNBQUssSUFBSSxFQUFFO1FBQzNDLElBQU0sTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtRQUMvQixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLO1FBQ25CLE1BQU0sQ0FBQyxFQUFFLENBQ1AsSUFBSSxFQUNKLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUNWLElBQUksRUFDSixJQUFJLEVBQ0osSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtZQUNyQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUMxQjtRQUNILENBQUMsQ0FBQyxDQUNIO0lBQ0gsQ0FBQztJQUVNLDZCQUFTLEdBQWhCLFVBQWlCLElBQVM7UUFBMUIsaUJBMEJDO1FBekJDLElBQUksUUFBUTtRQUNaLElBQU0sTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtRQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNwQixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM3QixRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDcEQsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDakMsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1NBQ2xDO2FBQU07WUFDTCxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVE7U0FDekI7UUFFRCxRQUFRLENBQUMsQ0FBQyxHQUFHLFFBQVEsS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVsRCxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxRQUFRLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLENBQUM7UUFDdEUsSUFBTSxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQy9CLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRztRQUNaLE1BQU0sQ0FBQyxFQUFFLENBQ1AsSUFBSSxFQUNKLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFDakIsSUFBSSxFQUNKLElBQUksRUFDSixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ3JCLGlCQUFNLFNBQVMsYUFBQyxJQUFJLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQ0g7SUFDSCxDQUFDO0lBaEVNLGtCQUFRLEdBQUcsdUJBQVUsQ0FBQyxJQUFJO0lBaUVuQyxnQkFBQztDQUFBLENBckU4QixxQkFBUyxHQXFFdkM7QUFyRVksOEJBQVM7Ozs7Ozs7Ozs7Ozs7OztBQ1J0QjtJQUFBO0lBRUEsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNERCxnR0FBNkM7QUFFN0MsSUFBaUIsR0FBRyxDQTJCbkI7QUEzQkQsV0FBaUIsR0FBRztJQUNsQjtRQUE4Qiw0QkFBUztRQUdyQzttQkFDRSxpQkFBTztRQUNULENBQUM7UUFDTSxnQ0FBYSxHQUFwQixVQUFxQixJQUFJO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSTtRQUN4QixDQUFDO1FBQ00sdUJBQUksR0FBWDtZQUNFLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUNqQixDQUFDO1FBQ00sMkJBQVEsR0FBZixjQUFtQixDQUFDO1FBQ2IsMEJBQU8sR0FBZCxjQUFrQixDQUFDO1FBQ1osMkJBQVEsR0FBZixjQUFtQixDQUFDO1FBQ2IseUJBQU0sR0FBYjtZQUFjLGNBQU87aUJBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztnQkFBUCx5QkFBTzs7WUFDbkIsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixJQUFJLENBQUMsV0FBVyxHQUFHLGVBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEUsQ0FBQztRQUNNLDBCQUFPLEdBQWQ7WUFBZSxjQUFPO2lCQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87Z0JBQVAseUJBQU87O1lBQ3BCLElBQUksQ0FBQyxXQUFXLEVBQUU7UUFDcEIsQ0FBQztRQUNNLDZCQUFVLEdBQWpCLGNBQXFCLENBQUM7UUFDeEIsZUFBQztJQUFELENBQUMsQ0F6QjZCLElBQUksQ0FBQyxJQUFJLEdBeUJ0QztJQXpCWSxZQUFRLFdBeUJwQjtBQUNILENBQUMsRUEzQmdCLEdBQUcsR0FBSCxXQUFHLEtBQUgsV0FBRyxRQTJCbkI7Ozs7Ozs7Ozs7Ozs7OztBQzlCRCxxSEFBb0Q7QUFFcEQ7SUFBQTtJQVNBLENBQUM7SUFSZSxZQUFJLEdBQWxCO0lBRUEsQ0FBQztJQUVELHNCQUFrQixxQkFBVTthQUE1QjtZQUNFLE9BQU8sdUJBQVUsQ0FBQyxXQUFXLEVBQUU7UUFDakMsQ0FBQzs7O09BQUE7SUFFSCxjQUFDO0FBQUQsQ0FBQztBQVRZLDBCQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnBCLG9HQUFxQztBQUNyQyxrR0FBZ0Q7QUFDaEQ7SUFBZ0MsOEJBQVM7SUFDdkM7UUFBQSxZQUNFLGlCQUFPLFNBRVI7UUFEQyxLQUFJLENBQUMsVUFBVSxHQUFHLEVBQUU7O0lBQ3RCLENBQUM7SUFPTSw0QkFBTyxHQUFkLFVBQWUsTUFBVyxFQUFFLFNBQWMsRUFBRSxRQUFrQjtRQUM1RCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7WUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUU7UUFDMUQsSUFBSSxRQUFRLEdBQWEsSUFBSSxtQkFBUSxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDO1FBQ2xFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN0QyxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUM7SUFDcEQsQ0FBQztJQUVNLGdDQUFXLEdBQWxCLFVBQW1CLFNBQWMsRUFBRSxPQUFjLEVBQUUsU0FBZ0I7UUFDakUsSUFBSSxJQUFJLEdBQWUsRUFBRTtRQUN6QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM3RDtRQUNELE9BQU8sSUFBSTtJQUNiLENBQUM7SUFFTSwrQkFBVSxHQUFqQixVQUFrQixHQUFlO1FBQy9CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztJQUVNLDRCQUFPLEdBQWQsVUFBZSxNQUFXO1FBQUUsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCw2QkFBYzs7UUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDNUIsT0FBTyxJQUFJO1NBQ1o7UUFFRCxJQUFJLEdBQUcsR0FBVSxFQUFFO1FBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUM3QixVQUFDLE9BQU87WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLE9BQWYsT0FBTyxFQUFZLElBQUksRUFBRTtRQUNwQyxDQUFDLENBQ0Y7UUFDRCxPQUFPLEdBQUc7SUFDWixDQUFDO0lBRU0sMkJBQU0sR0FBYixVQUFjLEdBQWE7UUFDekIsSUFBSSxHQUFHLElBQUksSUFBSTtZQUFFLE9BQU07UUFDdkIsSUFBSSxHQUFHLEdBQVUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBRTNDLElBQUksQ0FBQyxHQUFHO1lBQUUsT0FBTyxJQUFJO1FBRXJCLElBQUksR0FBRyxHQUFXLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ2xDLElBQUksR0FBRyxHQUFHLENBQUM7WUFBRSxPQUFPLElBQUk7UUFFeEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ2xCLE9BQU8sR0FBRztJQUNaLENBQUM7SUFFTSw4QkFBUyxHQUFoQixVQUFpQixLQUFVO1FBQ3pCLElBQUksR0FBRyxHQUFVLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxHQUFHO1lBQUUsT0FBTTtRQUNoQixHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQzNCLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQ0FoRStCLHFCQUFTLEdBZ0V4QztBQWhFWSxnQ0FBVTtBQWlFdkIsSUFBTSxVQUFVLEdBQUcsSUFBSSxVQUFVLEVBQUU7QUFDMUIsZ0NBQVU7Ozs7Ozs7Ozs7Ozs7OztBQ3BFbkI7SUFLRSxrQkFBbUIsTUFBVyxFQUFFLFNBQWMsRUFBRSxRQUFrQjtRQUNoRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDO0lBQ3pDLENBQUM7SUFFTSx3QkFBSyxHQUFaLFVBQWEsTUFBVyxFQUFFLFNBQWMsRUFBRSxRQUFrQjtRQUMxRCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU07UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUTtRQUN2QixPQUFPLElBQUk7SUFDYixDQUFDO0lBRU0sMEJBQU8sR0FBZDtRQUFlLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQseUJBQWM7O1FBQzNCLElBQUksR0FBUTtRQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxPQUFaLElBQUksRUFBWSxJQUFJLENBQUM7U0FDNUI7YUFBTTtZQUNMLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQztTQUM5QztRQUNELE9BQU8sR0FBRztJQUNaLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQztBQXpCWSw0QkFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBckIsOEVBQStCO0FBQy9CLElBQVksVUFLWDtBQUxELFdBQVksVUFBVTtJQUNwQixtRUFBb0I7SUFDcEIsbUVBQWdCO0lBQ2hCLGlFQUFlO0lBQ2YsMkRBQVk7QUFDZCxDQUFDLEVBTFcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFLckI7QUFDWSxtQkFBVyxHQUFHO0lBQ3pCLFlBQVksRUFBRSxjQUFjO0lBQzVCLFlBQVksRUFBRSxjQUFjO0lBQzVCLFNBQVMsRUFBRSxXQUFXO0lBQ3RCLGNBQWMsRUFBRSxnQkFBZ0I7SUFDaEMsY0FBYyxFQUFFLGdCQUFnQjtJQUNoQyxPQUFPLEVBQUUsU0FBUztJQUNsQixVQUFVLEVBQUUsWUFBWTtJQUN4QixpQkFBaUIsRUFBRSxtQkFBbUI7Q0FDdkM7QUFDWSxtQkFBVyxHQUFHLGVBQUs7SUFDOUIsT0FBTztRQUNMLElBQUksRUFBRSxVQUFVLENBQUMsZ0JBQWdCO1FBQ2pDLFFBQVEsZUFBTyxhQUFLLENBQUMsUUFBUSxJQUFFLEtBQUssVUFBRTtLQUN2QztBQUNILENBQUM7QUFDWSxtQkFBVyxHQUFHLGVBQUs7SUFDOUIsT0FBTztRQUNMLElBQUksRUFBRSxVQUFVLENBQUMsZ0JBQWdCO1FBQ2pDLFFBQVEsZUFBTyxhQUFLLENBQUMsUUFBUSxJQUFFLEtBQUssVUFBRTtLQUN2QztBQUNILENBQUM7QUFDWSxzQkFBYyxHQUFHLGNBQUk7SUFDaEMsT0FBTztRQUNMLElBQUksRUFBRSxVQUFVLENBQUMsZUFBZTtRQUNoQyxJQUFJLEVBQUUsRUFBRSxJQUFJLFFBQUU7S0FDZjtBQUNILENBQUM7QUFDWSxtQkFBVyxHQUFHLGVBQUs7SUFDOUIsT0FBTztRQUNMLElBQUksRUFBRSxVQUFVLENBQUMsWUFBWTtRQUM3QixLQUFLO0tBQ047QUFDSCxDQUFDO0FBRVkscUJBQWEsR0FBRyxVQUFDLElBQUksRUFBRSxPQUFRLElBQUssUUFBQztJQUNoRCxJQUFJO0lBQ0osT0FBTztDQUNSLENBQUMsRUFIK0MsQ0FHL0M7QUFDVyxlQUFPLEdBQUcsaUJBQU8sSUFBSSxRQUFDO0lBQ2pDLElBQUksRUFBRSxtQkFBVyxDQUFDLE9BQU87SUFDekIsT0FBTztDQUNSLENBQUMsRUFIZ0MsQ0FHaEM7QUFDVyxrQkFBVSxHQUFHLGlCQUFPLElBQUksUUFBQztJQUNwQyxJQUFJLEVBQUUsbUJBQVcsQ0FBQyxVQUFVO0lBQzVCLE9BQU87Q0FDUixDQUFDLEVBSG1DLENBR25DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JERixvRkFBbUQ7QUFDbkQsbUZBQWtEO0FBQ2xELElBQU0sY0FBYyxHQUFHLFVBQUMsS0FBMEMsRUFBRSxNQUFNO0lBQWxELGtDQUFVLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTtJQUNoRSxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxvQkFBVSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pDLEtBQUssb0JBQVUsQ0FBQyxnQkFBZ0I7WUFDOUIsb0JBQVksTUFBTSxDQUFDLFFBQVEsRUFBRTtRQUMvQjtZQUNFLE9BQU8sS0FBSztLQUNmO0FBQ0gsQ0FBQztBQUNELElBQU0sY0FBYyxHQUFHLFVBQUMsS0FBdUIsRUFBRSxNQUFNO0lBQS9CLGtDQUFVLElBQUksRUFBRSxLQUFLLEVBQUU7SUFDN0MsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssb0JBQVUsQ0FBQyxlQUFlO1lBQzdCLG9CQUFZLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDM0I7WUFDRSxPQUFPLEtBQUs7S0FDZjtBQUNILENBQUM7QUFDRCxJQUFNLFdBQVcsR0FBRyxVQUFDLEtBQVUsRUFBRSxNQUFNO0lBQWxCLGtDQUFVO0lBQzdCLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLG9CQUFVLENBQUMsWUFBWTtZQUMxQixPQUFPLE1BQU0sQ0FBQyxLQUFLO1FBQ3JCO1lBQ0UsT0FBTyxLQUFLO0tBQ2Y7QUFDSCxDQUFDO0FBQ0QsSUFBTSxlQUFlLEdBQUcsVUFBQyxLQUFLLEVBQUUsTUFBTTtJQUNwQyxPQUFPLEtBQUs7QUFDZCxDQUFDO0FBQ1ksWUFBSSxHQUFHLFVBQUMsS0FBaUIsRUFBRSxNQUFpQjtJQUFwQyxrQ0FBaUI7SUFDcEMsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUsscUJBQVcsQ0FBQyxPQUFPO1lBQ3RCLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBSyxNQUFNLENBQUMsT0FBTyxTQUFFLENBQUMsQ0FBSyxLQUFLLFFBQUssTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUN4RixLQUFLLHFCQUFXLENBQUMsVUFBVTtZQUN6QixPQUFXLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBSSxJQUFJLFdBQUksQ0FBQyxFQUFFLEtBQUssTUFBTSxDQUFDLE9BQU8sRUFBMUIsQ0FBMEIsQ0FBQyxTQUFDO1FBQzlEO1lBQ0UsT0FBTyxLQUFLO0tBQ2Y7QUFDSCxDQUFDO0FBQ0QsSUFBTSxRQUFRLEdBQUcsdUJBQWUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLElBQUksZ0JBQUUsQ0FBQztBQUM5RyxrQkFBZSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDdkIsaUJBcUNBOztBQXJDQSxvSUFBeUQ7QUFDekQsaUdBQTZDO0FBQzdDLG9GQUE0RDtBQUM1RCxJQUFNLFVBQVUsR0FBRztJQUFZLHVDQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7U0FBQTtBQUV4RCxJQUFNLFdBQVcsR0FBRyxVQUFNLE9BQU87O1FBQy9CLHVDQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ3pCLE9BQU8sRUFBRSxPQUFPO2FBQ2pCLENBQUM7O0tBQUE7QUFFSixJQUFNLGNBQWMsR0FBRyxVQUFNLE9BQU87O1FBQ2xDLHVDQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQzVCLEVBQUUsRUFBRSxPQUFPO2FBQ1osQ0FBQzs7S0FBQTtBQUVKLFNBQVUsUUFBUTs7OztvQkFDRCxxQkFBTSxjQUFJLENBQUMsVUFBVSxDQUFDOztnQkFBL0IsTUFBTSxHQUFHLFNBQXNCO2dCQUNyQyxxQkFBTSxhQUFHLENBQUMsaUJBQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQUksSUFBSSxRQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUF4QyxDQUF3QyxDQUFDLENBQUMsQ0FBQzs7Z0JBQWhGLFNBQWdGOzs7O0NBQ2pGO0FBQ0QsU0FBVSxRQUFRLENBQUMsTUFBTTs7OztvQkFDQyxxQkFBTSxjQUFJLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUM7O2dCQUF6RCxLQUFrQixTQUF1QyxFQUF2RCxFQUFFLFVBQUUsT0FBTztnQkFDbkIscUJBQU0sYUFBRyxDQUFDLGlCQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsTUFBRSxPQUFPLFdBQUUsQ0FBQyxDQUFDLENBQUM7O2dCQUFyQyxTQUFxQzs7OztDQUN0QztBQUNELFNBQVUsV0FBVyxDQUFDLE1BQU07Ozs7b0JBQ1gscUJBQU0sY0FBSSxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDOztnQkFBakQsRUFBRSxHQUFLLFVBQTBDLElBQS9DO2dCQUNWLHFCQUFNLGFBQUcsQ0FBQyxvQkFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDOztnQkFBekIsU0FBeUI7Ozs7Q0FDMUI7QUFDRCxTQUFVLGdCQUFnQjs7O29CQUN4QixxQkFBTSxtQkFBUyxDQUFDLHFCQUFXLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQzs7Z0JBQXJELFNBQXFEO2dCQUNyRCxxQkFBTSxtQkFBUyxDQUFDLHFCQUFXLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQzs7Z0JBQXJELFNBQXFEO2dCQUNyRCxxQkFBTSxtQkFBUyxDQUFDLHFCQUFXLENBQUMsaUJBQWlCLEVBQUUsV0FBVyxDQUFDOztnQkFBM0QsU0FBMkQ7Ozs7Q0FDNUQ7QUFHRCxTQUF5QixRQUFROzs7b0JBQy9CLCtCQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzs7Z0JBQTNCLFNBQTJCOzs7O0NBQzVCO0FBRkQsMkJBRUM7Ozs7Ozs7Ozs7Ozs7OztBQ3BDWSxhQUFLLEdBQUc7SUFDbkIsS0FBSyxFQUFFLE9BQU87SUFDZCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsT0FBTztLQUNkO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsS0FBSyxFQUFFLE9BQU87UUFDZCxLQUFLLEVBQUUsT0FBTztRQUNkLFNBQVMsRUFBRTtZQUNULEtBQUssRUFBRSxLQUFLO1lBQ1osU0FBUyxFQUFFO2dCQUNULEtBQUssRUFBRSxLQUFLO2dCQUNaLFNBQVMsRUFBRSxLQUFLO2FBQ2pCO1NBQ0Y7S0FDRjtJQUNELElBQUksRUFBRSxFQUFFO0NBQ1Q7Ozs7Ozs7Ozs7Ozs7OztBQ2pCRCxtRkFBb0Q7QUFDcEQsb0ZBQWdDO0FBQ2hDLDhFQUErQjtBQUMvQiw0SEFBNkM7QUFDN0MsOEVBQThCO0FBQzlCLElBQU0sY0FBYyxHQUFHLG9CQUFvQixFQUFFO0FBQzdDLElBQU0sUUFBUSxHQUFHLHVCQUFlLENBQUMsY0FBYyxDQUFDO0FBQ2hELElBQU0sS0FBSyxHQUFHLG1CQUFXLENBQUMsaUJBQVEsRUFBRSxhQUFZLEVBQUUsUUFBUSxDQUFDO0FBQzNELGNBQWMsQ0FBQyxHQUFHLENBQUMsZUFBUSxDQUFDO0FBQzVCLGtCQUFlLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUcEIsK0ZBQTZDO0FBQzdDLDZGQUFrQztBQUNsQywrR0FBNEQ7QUFDNUQsdUhBQWdFO0FBQ2hFLGtHQUFtRTtBQUNuRSxvSEFBK0M7QUFDL0MscUdBQXFDO0FBQ3JDLDBGQUFrQztBQUNsQyw2RUFBNkI7QUFDN0IsMkZBQXdDO0FBQ3hDLGlHQUErRTtBQUUvRTtJQUFtQyx5QkFBZTtJQUVoRDtRQUFBLFlBQ0UsaUJBQU8sU0FXUjtRQVZDLEtBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUksRUFBRTtZQUNsQyxpQkFBUSxDQUFDLGVBQUssQ0FBQztRQUNqQixDQUFDLENBQUM7UUFDRixLQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFJLEVBQUU7WUFDdEMsaUJBQVEsQ0FBQyxrQkFBUSxDQUFDO1FBQ3BCLENBQUMsQ0FBQztRQUVGLEtBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFJLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQztRQUNyRSxLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFJLEVBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQztRQUM1RCxLQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFJLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQzs7SUFDdEQsQ0FBQztJQUNPLDBCQUFVLEdBQWxCLFVBQW1CLElBQWMsRUFBRSxLQUFLO1FBQ3RDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFlO1FBQ3hELElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVO1FBQ2xDLEtBQUssQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLE9BQU87SUFDakMsQ0FBQztJQUNPLDZCQUFhLEdBQXJCLFVBQXNCLENBQUM7UUFDckIsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxXQUFXLEVBQUU7WUFDaEMsSUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFrQjtZQUN2QyxlQUFLLENBQUMsUUFBUSxDQUFDLHVCQUFhLENBQUMscUJBQVcsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2hGO0lBQ0gsQ0FBQztJQUNPLHVCQUFPLEdBQWY7UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLEVBQUUsRUFBRTtZQUM3QixlQUFLLENBQUMsUUFBUSxDQUFDLHVCQUFhLENBQUMscUJBQVcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3RSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxFQUFFO1NBQ3hCO0lBQ0gsQ0FBQztJQUNNLG9CQUFJLEdBQVg7UUFDRSwrQkFBK0I7UUFDL0IsY0FBYztRQUNkLGNBQWM7UUFDZCxtQ0FBbUM7UUFDbkMsMkJBQTJCO1FBQzNCLE9BQU87UUFDUCxVQUFVO1FBQ1YsSUFBSTtJQUNOLENBQUM7SUFFTSwwQkFBVSxHQUFqQjtRQUNRLG1DQUFrRCxFQUFoRCxjQUFJLEVBQUUsZ0JBQUssRUFBRSxzQkFBUSxFQUFFLGNBQXlCO1FBQ3hELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLO1FBQ25DLGlDQUFpQztRQUNqQywwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSTtJQUM1QixDQUFDO0lBQ00sc0JBQU0sR0FBYixVQUFjLElBQUk7UUFDaEIsaUJBQU0sTUFBTSxXQUFFO1FBQ2QsSUFBSSxJQUFJLEdBQUcsc0RBQXNEO1FBQ2pFLElBQUksSUFBSSxvRUFBb0U7UUFDNUUsSUFBSSxJQUFJLGtEQUFrRDtRQUMxRCxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHO1FBQ3pCLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxRQUFRO1FBRTlCLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFHLElBQUk7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBRXBCLGVBQUssQ0FBQyxRQUFRLENBQUMsdUJBQWEsQ0FBQyxxQkFBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUE5RE0sYUFBTyxHQUFHLHFCQUFTLENBQUMsS0FBSztJQURiLEtBQUs7UUFEekIsb0JBQVcsQ0FBQyxxQkFBUyxFQUFFLHlCQUFlLEVBQUUsb0JBQVUsQ0FBQztPQUMvQixLQUFLLENBZ0V6QjtJQUFELFlBQUM7Q0FBQSxDQWhFa0MsY0FBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBZ0VqRDtrQkFoRW9CLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaMUIsZ0pBQTJFO0FBQzNFO0lBQTZDLG1DQUFjO0lBQ3pEOztPQUVHO0lBQ0g7ZUFDRSxpQkFBTztJQUNULENBQUM7SUFDTSw4QkFBSSxHQUFYO1FBQ0UsaUJBQU0sSUFBSSxXQUFFO0lBQ2QsQ0FBQztJQUVILHNCQUFDO0FBQUQsQ0FBQyxDQVg0Qyx3QkFBYyxHQVcxRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaRCx1SEFBNkQ7QUFFN0Q7SUFBd0MsOEJBQVM7SUFBakQ7O0lBRUEsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FBQyxDQUZ1QyxtQkFBUyxHQUVoRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGRCxxSEFBNkQ7QUFFN0Q7SUFBa0Msd0JBQVc7SUFDekMsb0VBQW9FO0lBQ3BFLGlDQUFpQztJQUNqQyx1RUFBdUU7SUFDdkUsaUNBQWlDO0lBQ2pDLGdGQUFnRjtJQUNoRix5Q0FBeUM7SUFDekMsc0VBQXNFO0lBQ3RFLG1DQUFtQztJQUNuQywyREFBMkQ7SUFFM0Q7ZUFBZ0IsaUJBQU87SUFBRSxDQUFDO0lBQzFCLHNCQUFPLEdBQVA7UUFBQSxpQkFJQztRQUhHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDLElBQUksRUFBQztZQUNwQyxxQkFBVyxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsS0FBSyxFQUFFLEtBQUksQ0FBQyxLQUFxQixDQUFDLENBQUMsRUFBQyxjQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUMsRUFBQyxLQUFJLENBQUU7UUFDN0YsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUNELHVCQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsd0JBQVMsR0FBVDtJQUNBLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQyxDQXRCaUMsSUFBSSxDQUFDLE1BQU0sR0FzQjVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCRCwrRkFBNkM7QUFDN0MsK0dBQTREO0FBQzVELDZIQUFvRTtBQUNwRSxvSEFBK0M7QUFDL0MscUdBQXFDO0FBQ3JDLGtHQUFvRTtBQUNwRSwyRkFBd0M7QUFDeEMsaUdBQW9EO0FBRXBEO0lBQW1DLHlCQUFlO0lBRWhEO2VBQ0UsaUJBQU87SUFDVCxDQUFDO0lBQ00sb0JBQUksR0FBWDtRQUFBLGlCQVFDO1FBUEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFO1lBQ3hDLGtCQUFTLENBQUMsS0FBSSxDQUFDO1FBQ2pCLENBQUMsQ0FBQztRQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRTtZQUNyQyxrREFBa0Q7WUFDbEQsZUFBSyxDQUFDLFFBQVEsQ0FBQyxxQkFBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFDTSwwQkFBVSxHQUFqQjtRQUNRLG1DQUE0QyxFQUExQyxjQUFJLEVBQUUsZ0JBQUssRUFBRSxzQkFBNkI7UUFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUk7UUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSztJQUN6QixDQUFDO0lBakJNLGFBQU8sR0FBRyxxQkFBUyxDQUFDLEtBQUs7SUFEYixLQUFLO1FBRHpCLG9CQUFXLENBQUMseUJBQVcsRUFBRSx5QkFBZSxFQUFFLG9CQUFVLENBQUM7T0FDakMsS0FBSyxDQW1CekI7SUFBRCxZQUFDO0NBQUEsQ0FuQmtDLGNBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQW1CakQ7a0JBbkJvQixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVDFCLGdKQUEyRTtBQUUzRTtJQUE2QyxtQ0FBYztJQUN6RDs7T0FFRztJQUNIO2VBQ0UsaUJBQU87SUFDVCxDQUFDO0lBQ00sOEJBQUksR0FBWDtRQUNFLGlCQUFNLElBQUksV0FBRTtJQUNkLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQ0FWNEMsd0JBQWMsR0FVMUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkQsdUhBQTREO0FBRTVEO0lBQXdDLDhCQUFTO0lBQWpEOztJQUVBLENBQUM7SUFBRCxpQkFBQztBQUFELENBQUMsQ0FGdUMsbUJBQVMsR0FFaEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKRCw0RkFBMEM7QUFFMUMsNEdBQXlEO0FBQ3pELG9IQUE2RDtBQUU3RCx5RkFBaUM7QUFDakMsc0ZBQStCO0FBQy9CLCtGQUEyRTtBQUMzRSxrR0FBaUQ7QUFDakQsb0dBQWdEO0FBQ2hELHdGQUFxQztBQUNyQyw4RkFBaUU7QUFFakU7SUFBc0MsNEJBQWtCO0lBR3REO1FBQUEsWUFDRSxpQkFBTyxTQXVCUjtRQXpCTSxXQUFLLEdBQUcsS0FBSztRQUdsQixLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxLQUFJLEVBQUU7WUFDeEIsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUM7UUFDbkUsQ0FBQyxDQUFDO1FBQ0YsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsS0FBSSxFQUFFO1lBQ3hCLElBQUksS0FBSSxDQUFDLEtBQUssRUFBRTtnQkFDZCxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDO2FBQ3ZCO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUM7YUFDdkI7WUFDRCxLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSSxDQUFDLEtBQUs7UUFDMUIsQ0FBQyxDQUFDO1FBRUYsS0FBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSSxFQUFFLGNBQU8sQ0FBQyxDQUFDO1FBQ25ELEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUksRUFBRTtZQUN0QyxpQkFBUSxDQUFDLGtCQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUM7UUFDRixLQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFJLEVBQUU7WUFDekMsaUJBQVEsQ0FBQyxpQkFBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQztRQUNGLEtBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUksRUFBRTtZQUN2QyxrQkFBUyxDQUFDLEtBQUksQ0FBQztRQUNqQixDQUFDLENBQUM7O0lBQ0osQ0FBQztJQUdhLHdCQUFLLEdBQW5CO1FBQW9CLGNBQU87YUFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1lBQVAseUJBQU87Ozs7Ozs7d0JBQ3pCLGVBQUssQ0FBQyxRQUFRLENBQUMscUJBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQzt3QkFDMUMsZUFBSyxDQUFDLFFBQVEsQ0FBQyx3QkFBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO3dCQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQzt3QkFDakIsa0JBQU8sRUFBQyxHQUFHO3dCQUFDLHFCQUFNLGlCQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDOzt3QkFBekUsY0FBWSxTQUE2RCxFQUFDOzs7OztLQUMzRTtJQUNNLHlCQUFNLEdBQWI7UUFDRSxpQkFBTSxNQUFNLFdBQUU7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBQ00sNkJBQVUsR0FBakI7UUFDUSxtQ0FBNEMsRUFBMUMsY0FBSSxFQUFFLGdCQUFLLEVBQUUsc0JBQTZCO1FBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJO1FBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUs7SUFDekIsQ0FBQztJQTNDTSxnQkFBTyxHQUFHLHFCQUFTLENBQUMsUUFBUTtJQTZCbkM7UUFGQyxlQUFLLENBQUMsV0FBVyxDQUFDO1FBQ2xCLGVBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3lDQU0vQjtJQW5Da0IsUUFBUTtRQUQ1QixvQkFBVyxDQUFDLHFCQUFTLENBQUM7T0FDRixRQUFRLENBNkM1QjtJQUFELGVBQUM7Q0FBQSxDQTdDcUMsY0FBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBNkN2RDtrQkE3Q29CLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiN0IsNEZBQTBDO0FBRTFDLDRHQUF5RDtBQUN6RCxvSEFBNkQ7QUFDN0QsK0ZBQWlFO0FBQ2pFLHdGQUFxQztBQUVyQztJQUFxQywyQkFBaUI7SUFHcEQ7UUFBQSxZQUNFLGlCQUFPLFNBZVI7UUFqQk0sV0FBSyxHQUFHLEtBQUs7UUFHbEIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsS0FBSSxFQUFFO1lBQ3hCLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDO1FBQ25FLENBQUMsQ0FBQztRQUNGLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEtBQUksRUFBRTtZQUN4QixJQUFJLEtBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2QsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQzthQUN2QjtpQkFBTTtnQkFDTCxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDO2FBQ3ZCO1lBQ0QsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUksQ0FBQyxLQUFLO1FBQzFCLENBQUMsQ0FBQztRQUNGLEtBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUksRUFBRTtZQUN4QyxrQkFBUyxDQUFDLEtBQUksQ0FBQztRQUNqQixDQUFDLENBQUM7O0lBQ0osQ0FBQztJQUNNLHdCQUFNLEdBQWI7UUFBYyxjQUFPO2FBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztZQUFQLHlCQUFPOztRQUNuQixpQkFBTSxNQUFNLFdBQUU7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQUNNLDRCQUFVLEdBQWpCO1FBQ1EsbUNBQTRDLEVBQTFDLGNBQUksRUFBRSxnQkFBSyxFQUFFLHNCQUE2QjtRQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSTtRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLO0lBQ3pCLENBQUM7SUEzQk0sZUFBTyxHQUFHLHFCQUFTLENBQUMsT0FBTztJQURmLE9BQU87UUFEM0Isb0JBQVcsQ0FBQyxxQkFBUyxDQUFDO09BQ0YsT0FBTyxDQTZCM0I7SUFBRCxjQUFDO0NBQUEsQ0E3Qm9DLGNBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQTZCckQ7a0JBN0JvQixPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUDVCLDRGQUEwQztBQUUxQyw0R0FBeUQ7QUFDekQsb0hBQTZEO0FBQzdELDRGQUFtQztBQUNuQywrRkFBMkU7QUFDM0Usd0ZBQXFDO0FBRXJDO0lBQXNDLDRCQUFrQjtJQUd0RDtRQUFBLFlBQ0UsaUJBQU8sU0FtQlI7UUFyQk0sV0FBSyxHQUFHLEtBQUs7UUFJbEIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsS0FBSSxFQUFFO1lBQ3hCLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDO1FBQ25FLENBQUMsQ0FBQztRQUNGLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEtBQUksRUFBRTtZQUN4QixJQUFJLEtBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2QsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQzthQUN2QjtpQkFBTTtnQkFDTCxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDO2FBQ3ZCO1lBQ0QsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUksQ0FBQyxLQUFLO1FBQzFCLENBQUMsQ0FBQztRQUNGLEtBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUksRUFBRTtZQUN2QyxrQkFBUyxDQUFDLEtBQUksQ0FBQztRQUNqQixDQUFDLENBQUM7UUFDRixLQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFJLEVBQUU7WUFDdEMsaUJBQVEsQ0FBQyxtQkFBUyxDQUFDO1FBQ3JCLENBQUMsQ0FBQzs7SUFDSixDQUFDO0lBQ00seUJBQU0sR0FBYjtRQUNFLGlCQUFNLE1BQU0sV0FBRTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFDTSw2QkFBVSxHQUFqQjtRQUNRLG1DQUE0QyxFQUExQyxjQUFJLEVBQUUsZ0JBQUssRUFBRSxzQkFBNkI7UUFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUk7UUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSztJQUN6QixDQUFDO0lBL0JNLGdCQUFPLEdBQUcscUJBQVMsQ0FBQyxRQUFRO0lBRGhCLFFBQVE7UUFENUIsb0JBQVcsQ0FBQyxxQkFBUyxDQUFDO09BQ0YsUUFBUSxDQWlDNUI7SUFBRCxlQUFDO0NBQUEsQ0FqQ3FDLGNBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQWlDdkQ7a0JBakNvQixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUjdCLDRGQUEwQztBQUUxQyw0R0FBeUQ7QUFDekQsb0hBQTZEO0FBQzdELCtGQUFpRTtBQUNqRSx3RkFBcUM7QUFFckM7SUFBdUMsNkJBQW1CO0lBR3hEO1FBQUEsWUFDRSxpQkFBTyxTQWdCUjtRQWxCTSxXQUFLLEdBQUcsS0FBSztRQUlsQixLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxLQUFJLEVBQUU7WUFDeEIsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUM7UUFDbkUsQ0FBQyxDQUFDO1FBQ0YsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsS0FBSSxFQUFFO1lBQ3hCLElBQUksS0FBSSxDQUFDLEtBQUssRUFBRTtnQkFDZCxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDO2FBQ3ZCO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUM7YUFDdkI7WUFDRCxLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSSxDQUFDLEtBQUs7UUFDMUIsQ0FBQyxDQUFDO1FBQ0YsS0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSSxFQUFFO1lBQ3ZDLGtCQUFTLENBQUMsS0FBSSxDQUFDO1FBQ2pCLENBQUMsQ0FBQzs7SUFDSixDQUFDO0lBQ00sMEJBQU0sR0FBYjtRQUNFLGlCQUFNLE1BQU0sV0FBRTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFDTSw4QkFBVSxHQUFqQjtRQUNRLG1DQUE0QyxFQUExQyxjQUFJLEVBQUUsZ0JBQUssRUFBRSxzQkFBNkI7UUFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUk7UUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSztJQUN6QixDQUFDO0lBNUJNLGlCQUFPLEdBQUcscUJBQVMsQ0FBQyxTQUFTO0lBRGpCLFNBQVM7UUFEN0Isb0JBQVcsQ0FBQyxxQkFBUyxDQUFDO09BQ0YsU0FBUyxDQThCN0I7SUFBRCxnQkFBQztDQUFBLENBOUJzQyxjQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsR0E4QnpEO2tCQTlCb0IsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQOUIsSUFBSyxVQUdKO0FBSEQsV0FBSyxVQUFVO0lBQ2IseUJBQVc7SUFDWCwyQkFBYTtBQUNmLENBQUMsRUFISSxVQUFVLEtBQVYsVUFBVSxRQUdkO0FBQ0Q7SUFJRSxlQUFZLEVBQU87WUFBTCxZQUFHO1FBSFQsWUFBTyxHQUFHLEVBQUU7UUFDWixnQkFBVyxHQUFHLGdDQUFnQztRQUdwRCxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUc7SUFDcEIsQ0FBQztJQUNhLFVBQUksR0FBbEIsVUFBbUIsR0FBRyxFQUFFLEVBQU87WUFBTCxZQUFHO1FBQzNCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsR0FBRyxPQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztTQUM5QjtRQUNELE9BQU8sS0FBSztJQUNkLENBQUM7SUFDYSxvQkFBSSxHQUFsQixVQUFtQixHQUFXLEVBQUUsRUFBZ0I7WUFBZCxjQUFJLEVBQUUsa0JBQU07Ozs7Ozt3QkFDeEMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRzt3QkFDdEIsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDOzRCQUMxQixjQUFjLEVBQUUsSUFBSSxDQUFDLFdBQVc7eUJBQ2pDLENBQUM7d0JBRU0sV0FBTTs7aUNBQ1AsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFmLHdCQUFjO2lDQVVkLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBaEIsd0JBQWU7Ozs7d0JBVGxCLElBQUksSUFBSSxFQUFFOzRCQUNSLEdBQUc7Z0NBQ0QsR0FBRztvQ0FDSCxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzt5Q0FDakIsR0FBRyxDQUFDLGNBQUksSUFBSSxXQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFkLENBQWMsQ0FBQzt5Q0FDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQzt5QkFDZjt3QkFDSyxxQkFBTSxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxXQUFFLE1BQU0sVUFBRSxDQUFDOzt3QkFBM0MsR0FBRyxHQUFHLFNBQXFDO3dCQUMzQyx3QkFBSzs0QkFHQyxxQkFBTSxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxRQUFFLE9BQU8sV0FBRSxNQUFNLFVBQUUsQ0FBQzs7d0JBQWpELEdBQUcsR0FBRyxTQUEyQzt3QkFDakQsd0JBQUs7NEJBRVQsc0JBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7Ozs7S0FDM0I7SUFDWSxtQkFBRyxHQUFoQixVQUFpQixHQUFXLEVBQUUsTUFBdUI7UUFBdkIsMkNBQXVCOzs7Z0JBQ25ELHNCQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDOzs7S0FDaEU7SUFDWSxvQkFBSSxHQUFqQixVQUFrQixHQUFXLEVBQUUsSUFBcUI7UUFBckIsdUNBQXFCOzs7Z0JBQ2xELHNCQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7OztLQUNsRztJQUNPLHlCQUFTLEdBQWpCLFVBQWtCLEdBQWE7UUFDN0IsSUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDO1FBQ25ELElBQUksV0FBVyxFQUFFO1lBQ2YsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNwQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUU7YUFDbEI7U0FDRjtRQUNELE9BQU8sR0FBRyxDQUFDLElBQUksRUFBRTtJQUNuQixDQUFDO0lBbERNLGNBQVEsR0FBRyxJQUFJLEdBQUcsRUFBRTtJQW1EN0IsWUFBQztDQUFBO0FBdERZLHNCQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSmxCLG9HQUFrRDtBQUNsRCw2SEFBOEQ7QUFDOUQscUdBQXNDO0FBQ3RDOzs7RUFHRTtBQUNGO0lBQW9DLDBCQUFTO0lBQzNDO1FBQUEsWUFDRSxpQkFBTyxTQUVSO1FBQ08sV0FBSyxHQUFDLENBQUM7UUFTUCxXQUFLLEdBQUcsU0FBUztRQVh2QixLQUFJLENBQUMsU0FBUyxHQUFHLEVBQUU7O0lBQ3JCLENBQUM7SUFXTSxxQkFBSSxHQUFYLFVBQVksRUFBRSxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsdUJBQXVCO1FBQ3RFLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRTtRQUNuQixJQUFJLENBQUMsc0JBQXNCLEdBQUcsZUFBZTtRQUM3QyxJQUFJLENBQUMscUJBQXFCLEdBQUcsY0FBYztRQUMzQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsdUJBQXVCO0lBQ3hELENBQUM7SUFDTSx3QkFBTyxHQUFkO1FBQUEsaUJBYUM7UUFaQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRTtZQUN4QixLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQztZQUNuQyxLQUFJLENBQUMsY0FBYyxFQUFFO1FBQ3ZCLENBQUMsQ0FBQztRQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsY0FBSTtZQUM3QixLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDM0IsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1lBQzNCLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUM7UUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUNqRCxDQUFDO0lBQ00sMkJBQVUsR0FBakI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtJQUMxQixDQUFDO0lBQ08sNkJBQVksR0FBcEI7UUFDRSxJQUFJLElBQUksQ0FBQyxxQkFBcUI7WUFBRSxJQUFJLENBQUMscUJBQXFCLEVBQUU7SUFDOUQsQ0FBQztJQUNPLCtCQUFjLEdBQXRCO1FBQ0UsSUFBSSxJQUFJLENBQUMsc0JBQXNCO1lBQUUsSUFBSSxDQUFDLHNCQUFzQixFQUFFO1FBQzlELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxXQUFXLENBQUM7UUFDbkMsSUFBSSxDQUFDLGNBQWMsRUFBRTtJQUN2QixDQUFDO0lBQ08sK0JBQWMsR0FBdEI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUU7WUFDMUIsS0FBSSxDQUFDLGFBQWEsRUFBRTtRQUN0QixDQUFDLENBQUM7SUFDSixDQUFDO0lBQ08sOEJBQWEsR0FBckI7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVM7UUFFbkMsSUFBSSxDQUFDLElBQUksS0FBSyxFQUFFO1lBQ2QsSUFBSSxJQUFJLENBQUMsdUJBQXVCO2dCQUFFLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtTQUNqRTtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsRUFBRSxlQUFlLENBQUM7SUFDN0MsQ0FBQztJQUNPLCtCQUFjLEdBQXRCLFVBQXVCLElBQUk7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMvQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMvRCxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQzVCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLElBQUksQ0FBQyxFQUFFO29CQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxpQkFBTzt3QkFDL0IsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7b0JBQ3ZCLENBQUMsQ0FBQztpQkFDSDthQUNGO1NBQ0Y7YUFBTTtZQUNMLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDNUIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUU7b0JBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGlCQUFPO3dCQUMvQixPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztvQkFDdkIsQ0FBQyxDQUFDO29CQUNGLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7aUJBQ3pCO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUFDTSw0QkFBVyxHQUFsQixVQUFtQixRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFlO1FBQWYsMENBQWU7UUFDMUQsSUFBSSxLQUFLLEdBQUcsTUFBTSxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRTtRQUN0RCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLG1CQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFDTSxnQ0FBZSxHQUF0QixVQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQWU7UUFBZiwwQ0FBZTtRQUN4RCxJQUFJLEdBQUcsR0FBRyxRQUFRO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztZQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtRQUNsRCxJQUFJLEdBQUcsR0FBRyxJQUFJLG1CQUFRLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7UUFDL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQzdCLE9BQU8sR0FBRztJQUNaLENBQUM7SUFDTSx1QkFBTSxHQUFiLFVBQWMsR0FBYTtRQUN6QixJQUFJLEdBQUcsSUFBSSxJQUFJO1lBQUUsT0FBTTtRQUN2QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDbkMsSUFBSSxDQUFDLEdBQUc7WUFBRSxPQUFPLElBQUk7UUFDckIsSUFBSSxHQUFHLEdBQVcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDbEMsSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUFFLE9BQU8sSUFBSTtRQUN4QixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDbEIsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUNyRCxPQUFPLEdBQUc7SUFDWixDQUFDO0lBQ08scUJBQUksR0FBWixVQUFhLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSztRQUNoQyxJQUFJLEtBQUssR0FBRztZQUNWLE9BQU8sRUFBRTtnQkFDUCxHQUFHLEVBQUUsVUFBVTtnQkFDZixTQUFTLEVBQUUsUUFBUTtnQkFDbkIsS0FBSyxFQUFFLEtBQUs7YUFDYjtZQUNELE1BQU0sRUFBRSxJQUFJO1NBQ2I7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQyxDQW5IbUMscUJBQVMsR0FtSDVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUhELHVHQUFxRDtBQUNyRCwyRkFBcUM7QUFFckM7SUFBcUMsMkJBQVM7SUFFNUM7ZUFDRSxpQkFBTztJQUNULENBQUM7SUFDTSw0QkFBVSxHQUFqQixVQUFrQixHQUFXO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRztJQUN0QixDQUFDO0lBQ00sc0JBQUksR0FBWCxVQUFZLEdBQVcsRUFBRSxhQUF5QixFQUFFLFlBQXNCLEVBQUUsTUFBdUIsRUFBRSxZQUE2QixFQUFFLE1BQWM7UUFBekgsb0RBQXlCO1FBQUUsZ0RBQXNCO1FBQUUsd0NBQXVCO1FBQUUsb0RBQTZCO1FBQ2hJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sQ0FBQztJQUNoRyxDQUFDO0lBQ00sNkJBQVcsR0FBbEIsVUFBbUIsR0FBVyxFQUFFLGFBQXlCLEVBQUUsWUFBc0IsRUFBRSxNQUF1QixFQUFFLFlBQTZCLEVBQUUsTUFBYztRQUF6SCxvREFBeUI7UUFBRSxnREFBc0I7UUFBRSx3Q0FBdUI7UUFBRSxvREFBNkI7UUFDdkksSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLENBQUM7SUFDdkcsQ0FBQztJQUNNLDJCQUFTLEdBQWhCLFVBQWlCLEdBQVcsRUFBRSxHQUFXLEVBQUUsYUFBeUIsRUFBRSxZQUFzQixFQUFFLE1BQXVCLEVBQUUsWUFBNkIsRUFBRSxNQUFjO1FBQXpILG9EQUF5QjtRQUFFLGdEQUFzQjtRQUFFLHdDQUF1QjtRQUFFLG9EQUE2QjtRQUNsSixJQUFJLEdBQUcsR0FBRyxvQkFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxZQUFZLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxDQUFDO1FBQ3ZHLEdBQUcsQ0FBQyxJQUFJLEVBQUU7SUFDWixDQUFDO0lBQ1ksa0NBQWdCLEdBQTdCLFVBQThCLEdBQVcsRUFBRSxHQUFXLEVBQUUsYUFBeUIsRUFBRSxZQUFzQixFQUFFLE1BQXVCLEVBQUUsWUFBNkIsRUFBRSxNQUFjO1FBQXpILG9EQUF5QjtRQUFFLGdEQUFzQjtRQUFFLHdDQUF1QjtRQUFFLG9EQUE2Qjs7Ozs7O3dCQUMzSixHQUFHLEdBQUcsb0JBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsWUFBWSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sQ0FBQzt3QkFDM0YscUJBQU0sR0FBRyxDQUFDLFdBQVcsRUFBRTs7d0JBQTdCLEdBQUcsR0FBRyxTQUF1Qjt3QkFDbkMsc0JBQU8sR0FBRzs7OztLQUNYO0lBQ0gsY0FBQztBQUFELENBQUMsQ0F2Qm9DLHFCQUFTLEdBdUI3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJELGlHQUE2QztBQUU3QztJQVNFO1FBQ0UsSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRTtRQUNwQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUc7SUFDaEIsQ0FBQztJQUVhLGlCQUFNLEdBQXBCLFVBQXFCLE9BQWUsRUFBRSxHQUFXLEVBQUUsSUFBVSxFQUFFLE1BQWUsRUFBRSxZQUFxQixFQUFFLE9BQWUsRUFBRSxVQUFXO1FBQ2pJLElBQUksT0FBTyxHQUFHLElBQUksVUFBVSxFQUFFO1FBQzlCLE9BQU8sQ0FBQyxHQUFHLEdBQUcsR0FBRztRQUNqQixPQUFPLENBQUMsSUFBSSxHQUFHLElBQUk7UUFDbkIsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNO1FBQ3ZCLE9BQU8sQ0FBQyxZQUFZLEdBQUcsWUFBWTtRQUNuQyxPQUFPLENBQUMsT0FBTyxHQUFHLE9BQU87UUFDekIsT0FBTyxDQUFDLE9BQU8sR0FBRyxPQUFPO1FBQ3pCLE9BQU8sQ0FBQyxVQUFVLEdBQUcsVUFBVTtRQUMvQixPQUFPLE9BQU87SUFDaEIsQ0FBQztJQUNNLHlCQUFJLEdBQVg7UUFDRSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRztRQUNsQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRztRQUNsQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSTtRQUNwQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTTtRQUN4QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWTtRQUNwQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDO1FBQ2xFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQ2hFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzFELEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE9BQU8sQ0FBQztJQUNwRCxDQUFDO0lBQ1ksZ0NBQVcsR0FBeEI7Ozs7Z0JBQ00sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHO2dCQUNkLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRztnQkFDZCxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUk7Z0JBQ2hCLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTTtnQkFDcEIsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZO2dCQUNoQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQztnQkFDOUQsS0FBSyxHQUFHLFVBQVMsT0FBTyxFQUFFLE1BQU07b0JBQ2xDLElBQUksUUFBUSxHQUFHLFVBQVMsR0FBUTt3QkFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQztvQkFDZCxDQUFDO29CQUNELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUM7b0JBQ3BELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUM7b0JBQ2pELEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE9BQU8sQ0FBQztnQkFDcEQsQ0FBQztnQkFDRCxzQkFBTyxJQUFJLE9BQU8sQ0FBTSxLQUFLLENBQUM7OztLQUMvQjtJQUNPLG9DQUFlLEdBQXZCLFVBQXdCLElBQVM7UUFDL0IsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLGlCQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztTQUNsRDtJQUNILENBQUM7SUFDTyxpQ0FBWSxHQUFwQixVQUFxQixDQUFNO1FBQ3pCLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNPLG1DQUFjLEdBQXRCLFVBQXVCLElBQVMsSUFBRyxDQUFDO0lBQ3RDLGlCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUQsc0ZBQW9DO0FBQ3BDLDBHQUErQztBQUMvQyx5RkFBd0Q7QUFDeEQ7SUFBdUMsNkJBQW9CO0lBQ3pEO1FBQUEsWUFDRSxpQkFBTyxTQVVSO1FBVEMscUJBQXFCO1FBQ3JCLElBQU0sRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUM1QixFQUFFLENBQUMsSUFBSSxHQUFHLElBQUk7UUFDZCxFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztRQUMzQixFQUFFLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtRQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7UUFDdkIsa0JBQVMsQ0FBQyxFQUFFLENBQUM7UUFFYixpQkFBUSxDQUFDLGVBQUssRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDOztJQUMzQixDQUFDO0lBQ0QsNEJBQVEsR0FBUixjQUFZLENBQUM7SUFDZixnQkFBQztBQUFELENBQUMsQ0Fkc0MsY0FBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBYzFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RELElBQU8sS0FBSyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDeEIsZ0dBQStDO0FBQy9DLElBQU8sUUFBUSxHQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUTtBQUMvQixJQUFJLEdBQUcsR0FBYSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztBQUM3QyxJQUFjLEVBQUUsQ0FTZjtBQVRELFdBQWMsRUFBRTtJQUFDLFNBQUssQ0FTckI7SUFUZ0IsZ0JBQUs7UUFDbEI7WUFBaUMsK0JBQUs7WUFDbEM7dUJBQWUsaUJBQU87WUFBQSxDQUFDO1lBQ3ZCLG9DQUFjLEdBQWQ7Z0JBQ0ksaUJBQU0sY0FBYyxXQUFFLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUN0QyxDQUFDO1lBQ0wsa0JBQUM7UUFBRCxDQUFDLENBTmdDLEtBQUssR0FNckM7UUFOWSxpQkFBVyxjQU12QjtRQUNELEdBQUcsQ0FBQyxzQkFBc0IsRUFBQyxXQUFXLENBQUMsQ0FBQztJQUM1QyxDQUFDLEVBVGdCLEtBQUssR0FBTCxRQUFLLEtBQUwsUUFBSyxRQVNyQjtBQUFELENBQUMsRUFUYSxFQUFFLEdBQUYsVUFBRSxLQUFGLFVBQUUsUUFTZjtBQUNELFdBQWMsRUFBRTtJQUFDLFFBQUksQ0FzR3BCO0lBdEdnQixlQUFJO1FBQ2pCO1lBQTZCLDJCQUFRO1lBVWpDO3VCQUFlLGlCQUFPO1lBQUEsQ0FBQztZQUN2QixnQ0FBYyxHQUFkO2dCQUNJLGlCQUFNLGNBQWMsV0FBRSxDQUFDO2dCQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQyxDQUFDO1lBTGMsY0FBTSxHQUFNLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sRUFBQyxHQUFHLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLFdBQVcsRUFBQyxTQUFTLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBQyxZQUFZLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxnQkFBZ0IsRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLFdBQVcsRUFBQyw4QkFBOEIsRUFBQyxRQUFRLEVBQUMsR0FBRyxFQUFDLFNBQVMsRUFBQyw4QkFBOEIsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQyxNQUFNLEVBQUMsaUJBQWlCLEVBQUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsR0FBRyxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsRUFBRSxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsY0FBYyxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLDRCQUE0QixFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxHQUFHLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxZQUFZLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxZQUFZLEVBQUMsUUFBUSxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQyxFQUFDLFFBQVEsRUFBQyxF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QUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLFdBQVcsRUFBQyxNQUFNLEVBQUMsaUJBQWlCLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxZQUFZLEVBQUMsTUFBTSxFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsU0FBUyxFQUFDLE1BQU0sRUFBQyxpQkFBaUIsRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLFVBQVUsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxV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Q3RDLENBQUM7WUFMYyxnQkFBTSxHQUFNLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyx1QkFBdUIsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsdUJBQXVCLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsV0FBVyxFQUFDLE1BQU0sRUFBQyxpQkFBaUIsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLGFBQWEsRUFBQyxNQUFNLEVBQUMsaUJBQWlCLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsdUJBQXVCLEVBQUMsdUJBQXVCLEVBQUMsaUJBQWlCLENBQUMsRUFBQyxZQUFZLEVBQUMsRUFBRSxFQUFDLENBQUM7WUFNdDVCLGdCQUFDO1NBQUEsQ0FaOEIsUUFBUSxHQVl0QztRQVpZLGNBQVMsWUFZckI7UUFDRCxHQUFHLENBQUMsbUJBQW1CLEVBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkM7WUFBZ0MsOEJBQVE7WUFPcEM7dUJBQWUsaUJBQU87WUFBQSxDQUFDO1lBQ3ZCLG1DQUFjLEdBQWQ7Z0JBQ0ksaUJBQU0sY0FBYyxXQUFFLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZDLENBQUM7WUFMYyxpQkFBTSxHQUFNLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsZ0JBQWdCLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxtQkFBbUIsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsTUFBTSxFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsU0FBUyxFQUFDLE1BQU0sRUFBQyxpQkFBaUIsRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxnQkFBZ0IsRUFBQyxtQkFBbUIsRUFBQyxpQkFBaUIsQ0FBQyxFQUFDLFlBQVksRUFBQyxFQUFFLEVBQUMsQ0FBQztZQU01NEIsaUJBQUM7U0FBQSxDQVorQixRQUFRLEdBWXZDO1FBWlksZUFBVSxhQVl0QjtRQUNELEdBQUcsQ0FBQyxvQkFBb0IsRUFBQyxVQUFVLENBQUMsQ0FBQztRQUNyQztZQUFpQywrQkFBUTtZQU1yQzt1QkFBZSxpQkFBTztZQUFBLENBQUM7WUFDdkIsb0NBQWMsR0FBZDtnQkFDSSxpQkFBTSxjQUFjLFdBQUUsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEMsQ0FBQztZQUxjLGtCQUFNLEdBQU0sRUFBQyxNQUFNLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxnQkFBZ0IsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLG1CQUFtQixFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxNQUFNLEVBQUMsaUJBQWlCLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsZ0JBQWdCLEVBQUMsbUJBQW1CLEVBQUMsaUJBQWlCLENBQUMsRUFBQyxZQUFZLEVBQUMsRUFBRSxFQUFDLENBQUM7WUFNMXhCLGtCQUFDO1NBQUEsQ0FYZ0MsUUFBUSxHQVd4QztRQVhZLGdCQUFXLGNBV3ZCO1FBQ0QsR0FBRyxDQUFDLHFCQUFxQixFQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNDLENBQUMsRUF0R2dCLElBQUksR0FBSixPQUFJLEtBQUosT0FBSSxRQXNHcEI7QUFBRCxDQUFDLEVBdEdhLEVBQUUsR0FBRixVQUFFLEtBQUYsVUFBRSxRQXNHZjs7Ozs7Ozs7Ozs7O0FDdkhELGUiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJpbmRleFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL01haW4udHNcIixcImxpYlwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIi8qKlRoaXMgY2xhc3MgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgTGF5YUFpcklERSwgcGxlYXNlIGRvIG5vdCBtYWtlIGFueSBtb2RpZmljYXRpb25zLiAqL1xyXG5pbXBvcnQgTWFpblNjZW5lIGZyb20gXCIuL3NjZW5lL01haW5TY2VuZVwiXG5pbXBvcnQgVGVzdCBmcm9tIFwiLi9nYW1lL3VpL3ZpZXcvQVBhZ2UvVGVzdFwiXG5pbXBvcnQgSExhYmVsIGZyb20gXCIuL2NvcmUvZ2FtZS9zY3JpcHQvSExhYmVsXCJcclxuLypcclxuKiDmuLjmiI/liJ3lp4vljJbphY3nva47XHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb25maWd7XHJcbiAgICBzdGF0aWMgd2lkdGg6bnVtYmVyPTY0MDtcclxuICAgIHN0YXRpYyBoZWlnaHQ6bnVtYmVyPTExMzY7XHJcbiAgICBzdGF0aWMgc2NhbGVNb2RlOnN0cmluZz1cInNob3dhbGxcIjtcclxuICAgIHN0YXRpYyBzY3JlZW5Nb2RlOnN0cmluZz1cIm5vbmVcIjtcclxuICAgIHN0YXRpYyBhbGlnblY6c3RyaW5nPVwibWlkZGxlXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25IOnN0cmluZz1cImNlbnRlclwiO1xyXG4gICAgc3RhdGljIHN0YXJ0U2NlbmU6YW55PVwic2NlbmUvTWFpblNjZW5lLnNjZW5lXCI7XHJcbiAgICBzdGF0aWMgc2NlbmVSb290OnN0cmluZz1cIlwiO1xyXG4gICAgc3RhdGljIGRlYnVnOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgc3RhdDpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIHBoeXNpY3NEZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIGV4cG9ydFNjZW5lVG9Kc29uOmJvb2xlYW49dHJ1ZTtcclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG4gICAgc3RhdGljIGluaXQoKXtcclxuICAgICAgICB2YXIgcmVnOiBGdW5jdGlvbiA9IExheWEuQ2xhc3NVdGlscy5yZWdDbGFzcztcclxuICAgICAgICByZWcoXCJzY2VuZS9NYWluU2NlbmUudHNcIixNYWluU2NlbmUpO1xuICAgICAgICByZWcoXCJnYW1lL3VpL3ZpZXcvQVBhZ2UvVGVzdC50c1wiLFRlc3QpO1xuICAgICAgICByZWcoXCJjb3JlL2dhbWUvc2NyaXB0L0hMYWJlbC50c1wiLEhMYWJlbCk7XHJcbiAgICB9XHJcbn1cclxuR2FtZUNvbmZpZy5pbml0KCk7IiwiaW1wb3J0IEdhbWVDb25maWcgZnJvbSAnLi9HYW1lQ29uZmlnJ1xyXG5jbGFzcyBNYWluIHtcclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvL+agueaNrklEReiuvue9ruWIneWni+WMluW8leaTjlxyXG4gICAgaWYgKHdpbmRvd1snTGF5YTNEJ10pIExheWEzRC5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0KVxyXG4gICAgZWxzZSBMYXlhLmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQsIExheWFbJ1dlYkdMJ10pXHJcbiAgICBMYXlhWydQaHlzaWNzJ10gJiYgTGF5YVsnUGh5c2ljcyddLmVuYWJsZSgpXHJcbiAgICBMYXlhWydEZWJ1Z1BhbmVsJ10gJiYgTGF5YVsnRGVidWdQYW5lbCddLmVuYWJsZSgpXHJcbiAgICAvLyBMYXlhLnN0YWdlLnNjYWxlTW9kZSA9IEdhbWVDb25maWcuc2NhbGVNb2RlO1xyXG4gICAgTGF5YS5zdGFnZS5zY2FsZU1vZGUgPSBHYW1lQ29uZmlnLnNjYWxlTW9kZVxyXG4gICAgTGF5YS5zdGFnZS5zY3JlZW5Nb2RlID0gR2FtZUNvbmZpZy5zY3JlZW5Nb2RlXHJcbiAgICBMYXlhLnN0YWdlLmFsaWduViA9IEdhbWVDb25maWcuYWxpZ25WXHJcbiAgICBMYXlhLnN0YWdlLmFsaWduSCA9IEdhbWVDb25maWcuYWxpZ25IXHJcbiAgICAvL+WFvOWuueW+ruS/oeS4jeaUr+aMgeWKoOi9vXNjZW5l5ZCO57yA5Zy65pmvXHJcbiAgICBMYXlhLlVSTC5leHBvcnRTY2VuZVRvSnNvbiA9IEdhbWVDb25maWcuZXhwb3J0U2NlbmVUb0pzb25cclxuXHJcbiAgICAvL+aJk+W8gOiwg+ivlemdouadv++8iOmAmui/h0lEReiuvue9ruiwg+ivleaooeW8j++8jOaIluiAhXVybOWcsOWdgOWinuWKoGRlYnVnPXRydWXlj4LmlbDvvIzlnYflj6/miZPlvIDosIPor5XpnaLmnb/vvIlcclxuICAgIGlmIChHYW1lQ29uZmlnLmRlYnVnIHx8IExheWEuVXRpbHMuZ2V0UXVlcnlTdHJpbmcoJ2RlYnVnJykgPT0gJ3RydWUnKSBMYXlhLmVuYWJsZURlYnVnUGFuZWwoKVxyXG4gICAgaWYgKEdhbWVDb25maWcucGh5c2ljc0RlYnVnICYmIExheWFbJ1BoeXNpY3NEZWJ1Z0RyYXcnXSkgTGF5YVsnUGh5c2ljc0RlYnVnRHJhdyddLmVuYWJsZSgpXHJcbiAgICBpZiAoR2FtZUNvbmZpZy5zdGF0KSBMYXlhLlN0YXQuc2hvdygpXHJcbiAgICBMYXlhLmFsZXJ0R2xvYmFsRXJyb3IgPSB0cnVlXHJcbiAgICAvL+a/gOa0u+i1hOa6kOeJiOacrOaOp+WItu+8jHZlcnNpb24uanNvbueUsUlEReWPkeW4g+WKn+iDveiHquWKqOeUn+aIkO+8jOWmguaenOayoeacieS5n+S4jeW9seWTjeWQjue7rea1geeoi1xyXG4gICAgTGF5YS5SZXNvdXJjZVZlcnNpb24uZW5hYmxlKCd2ZXJzaW9uLmpzb24nLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25WZXJzaW9uTG9hZGVkKSwgTGF5YS5SZXNvdXJjZVZlcnNpb24uRklMRU5BTUVfVkVSU0lPTilcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25WZXJzaW9uTG9hZGVkKCk6IHZvaWQge1xyXG4gICAgLy/mv4DmtLvlpKflsI/lm77mmKDlsITvvIzliqDovb3lsI/lm77nmoTml7blgJnvvIzlpoLmnpzlj5HnjrDlsI/lm77lnKjlpKflm77lkIjpm4bph4zpnaLvvIzliJnkvJjlhYjliqDovb3lpKflm77lkIjpm4bvvIzogIzkuI3mmK/lsI/lm75cclxuICAgIExheWEuQXRsYXNJbmZvTWFuYWdlci5lbmFibGUoJ2ZpbGVjb25maWcuanNvbicsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkNvbmZpZ0xvYWRlZCkpXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQ29uZmlnTG9hZGVkKCk6IHZvaWQge1xyXG4gICAgLy/liqDovb1JREXmjIflrprnmoTlnLrmma9cclxuICAgIEdhbWVDb25maWcuc3RhcnRTY2VuZSAmJiBMYXlhLlNjZW5lLm9wZW4oR2FtZUNvbmZpZy5zdGFydFNjZW5lKVxyXG4gIH1cclxufVxyXG4vL+a/gOa0u+WQr+WKqOexu1xyXG5uZXcgTWFpbigpXHJcbiIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWZmZWN0VXRpbHMgIHtcbiAgLyoqXG4gICAqIOexu+S8vG1hY+S4iuWbvuagh+S4iuS4i+aKluWKqOeahOaViOaenFxuICAgKiBAcGFyYW0ge1Nwcml0ZX0gb2JqIOaKluWKqOWvueixoVxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5pdFkg6KaB5oqW5Yqo55qE5a+56LGh55qE5Yid5aeLWeWAvO+8jOWOn+Wni+S9jee9rlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayDmipbliqjliqjnlLvlrozmiJDlm57osIPlh73mlbBcbiAgICogQHBhcmFtIHthbnl9IHRoaXNPYmog5Zue6LCD5Ye95pWwdGhpc+WvueixoVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBtYWNJY29uU2hha2Uob2JqLCBpbml0WSwgY2FsbGJhY2ssIHRoaXNPYmopIHtcbiAgICAvL+aKluWKqOmikeeOh1vml7bpl7TvvIznp7vliqjot53nprtd77yM5Y+v5L+u5pS5XG4gICAgbGV0IGFyciA9IFtbMjAsIDMwMF0sIFsxNSwgMzAwXSwgWzEwLCAzMDBdLCBbNSwgMzAwXV1cblxuICAgIGxldCBpbmRleCA9IDBcbiAgICB0b1NoYWtlKClcblxuICAgIGZ1bmN0aW9uIHRvU2hha2UoKSB7XG4gICAgICBpZiAoaW5kZXggPj0gYXJyLmxlbmd0aCkge1xuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjay5hcHBseSh0aGlzT2JqLCBbXSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIExheWEuVHdlZW4udG8oXG4gICAgICAgICAgb2JqLFxuICAgICAgICAgIHsgeTogaW5pdFkgLSBhcnJbaW5kZXhdWzBdIH0sXG4gICAgICAgICAgYXJyW2luZGV4XVsxXSxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUobnVsbCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxuICAgICAgICAgICAgICBvYmosXG4gICAgICAgICAgICAgIHsgeTogaW5pdFkgfSxcbiAgICAgICAgICAgICAgYXJyW2luZGV4XVsxXSxcbiAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZShudWxsLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICArK2luZGV4XG4gICAgICAgICAgICAgICAgdG9TaGFrZSgpXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pLFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOWQkeS4iuenu+WKqOa3oeWHuu+8iOW8ueWHuuahhu+8iVxuICAgKiBAcGFyYW0ge1Nwcml0ZX0gb2JqIOa3oeWHuuWvueixoVxuICAgKiBAcGFyYW0ge251bWJlcn0gdGltZSDmt6Hlh7rml7bpl7RcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZWFzZSDmt6Hlh7rlh73mlbBcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sg5reh5Ye65a6M5oiQ5Zue6LCD5Ye95pWwXG4gICAqIEBwYXJhbSB7YW55fSB0aGlzT2JqIOWbnuiwg+WHveaVsHRoaXPlr7nosaFcbiAgICogQHBhcmFtIHtBcnJheX0gYXJyRGF0YSDlm57osIPkvKDlj4JcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZmxvd091dChvYmosIHRpbWUgPSA1MDAsIGVhc2UgPSBudWxsLCBjYWxsYmFjayA9IG51bGwsIHRoaXNPYmogPSBudWxsLCBhcnJEYXRhID0gbnVsbCkge1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgTGF5YS5Ud2Vlbi50byhvYmosIHsgeTogb2JqLnkgLSAxNTAsIGFscGhhOiAwIH0sIHRpbWUsIGVhc2UsIExheWEuSGFuZGxlci5jcmVhdGUodGhpc09iaiwgY2FsbGJhY2ssIGFyckRhdGEpKVxuICAgIH0gZWxzZSB7XG4gICAgICBMYXlhLlR3ZWVuLnRvKG9iaiwgeyB5OiBvYmoueSAtIDE1MCwgYWxwaGE6IDAgfSwgdGltZSwgZWFzZSwgTGF5YS5IYW5kbGVyLmNyZWF0ZShvYmosIG9iai5yZW1vdmVTZWxmLCBhcnJEYXRhKSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5paH5pys5pWw5a2X5aKe5YeP5pWI5p6cXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydE51bSDlvIDlp4vmlbDlgLxcbiAgICogQHBhcmFtIHtudW1iZXJ9IGVuZE51bSDmuJDlj5jliLDnmoTmlbDlgLxcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sg5reh5Ye65a6M5oiQ5Zue6LCD5Ye95pWwXG4gICAqIEBwYXJhbSB7YW55fSB0aGlzT2JqIOWbnuiwg+WHveaVsHRoaXPlr7nosaFcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZmxvd051bShzdGFydE51bSwgZW5kTnVtLCBjYWxsYmFjaywgdGhpc09iaiA9IG51bGwpIHtcbiAgICBsZXQgY2hhbmdlID0gTWF0aC5hYnMoZW5kTnVtIC0gc3RhcnROdW0pXG4gICAgaWYgKGNoYW5nZSA8PSAwKSByZXR1cm5cbiAgICBsZXQgZXZlcnlDaGFuZ2UgPSBjaGFuZ2UgLyAoZW5kTnVtIC0gc3RhcnROdW0pXG4gICAgbGV0IGN1cnJOdW0gPSBzdGFydE51bVxuICAgIGxldCB0aW1lciA9IG5ldyBMYXlhLlRpbWVyKClcbiAgICB0aW1lci5sb29wKDMwLCB0aGlzLCBjaGFuZ2VGdW4pXG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VGdW4oKSB7XG4gICAgICBjdXJyTnVtICs9IGV2ZXJ5Q2hhbmdlXG4gICAgICAtLWNoYW5nZVxuICAgICAgaWYgKGNoYW5nZSA8IDApIHtcbiAgICAgICAgdGltZXIuY2xlYXJBbGwodGhpcylcbiAgICAgICAgdGltZXIgPSBudWxsXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjay5hcHBseSh0aGlzT2JqLCBbY3Vyck51bV0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOW8gOWni+mXqueDgVxuICAgKiBAcGFyYW0ge1Nwcml0ZX0gb2JqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhbHBoYVRpbWUg6Zeq54OB6aKR546HXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHN0YXJ0RmxpY2tlcihvYmosIGFscGhhVGltZSA9IDcwMCkge1xuICAgIG9iai5hbHBoYSA9IDFcbiAgICBMYXlhLlR3ZWVuLnRvKFxuICAgICAgb2JqLFxuICAgICAgeyBhbHBoYTogMCB9LFxuICAgICAgYWxwaGFUaW1lLFxuICAgICAgbnVsbCxcbiAgICAgIExheWEuSGFuZGxlci5jcmVhdGUoXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIExheWEuVHdlZW4udG8ob2JqLCB7IGFscGhhOiAxIH0sIGFscGhhVGltZSwgbnVsbCwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLnN0YXJ0RmxpY2tlciwgW29ial0pKVxuICAgICAgICB9LmJpbmQodGhpcyksXG4gICAgICApLFxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiDlgZzmraLliqjnlLvmiYDmnInliqjnlLvlkI7lrrnlmajkvY3nva7liJ3lp4vljJbliLDljp/kvY3vvIzlkKbliJnlj6/og73lh7rnjrDkvY3nva7mlLnlj5jnmoRidWdcbiAgICogQHBhcmFtIHtTcHJpdGV9IG9ialxuICAgKiBAcGFyYW0ge251bWJlcn0geFBvc1xuICAgKiBAcGFyYW0ge251bWJlcn0geVBvc1xuICAgKi9cbiAgcHVibGljIHN0YXRpYyBzdG9wRWZmZWN0KG9iaiwgeFBvcyA9IG51bGwsIHlQb3MgPSBudWxsKSB7XG4gICAgTGF5YS5Ud2Vlbi5jbGVhckFsbChvYmopXG4gICAgaWYgKHhQb3MgIT09IG51bGwgJiYgeVBvcyAhPT0gbnVsbCkge1xuICAgICAgb2JqLnBvcyh4UG9zLCB5UG9zKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDngrnlh7vmlL7lpKfnvKnlsI/mlYjmnpxcbiAgICogQHBhcmFtIHtMYXlhLlNwcml0ZX1cbiAgICogQHBhcmFtIHtib29sZWFufSBpc0NoYW5nZVhZIOWmguaenOS4reW/g+eCueaYr+mUmueCueS4jemcgOimgeS/ruaUueS9jee9rlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBjbGlja0VmZmVjdChzcCwgaXNDaGFuZ2VYWSA9IHRydWUpIHtcbiAgICBpZiAoIXNwKSByZXR1cm5cbiAgICBzcC5vZmYoTGF5YS5FdmVudC5NT1VTRV9ET1dOLCB0aGlzLCB0aGlzLmN1YmljSW5PdXRFZmZlY3QpXG4gICAgc3Aub24oTGF5YS5FdmVudC5NT1VTRV9ET1dOLCB0aGlzLCB0aGlzLmN1YmljSW5PdXRFZmZlY3QsIFtzcCwgaXNDaGFuZ2VYWV0pXG4gIH1cbiAgcHVibGljIHN0YXRpYyBjbGVhckNsaWNrRWZmZWN0KHNwKSB7XG4gICAgaWYgKCFzcCkgcmV0dXJuXG4gICAgc3Aub2ZmKExheWEuRXZlbnQuTU9VU0VfRE9XTiwgdGhpcywgdGhpcy5jdWJpY0luT3V0RWZmZWN0KVxuICB9XG4gIHB1YmxpYyBzdGF0aWMgY3ViaWNJbk91dEVmZmVjdChzcCwgaXNDaGFuZ2VYWSkge1xuICAgIGlmIChzcC5fYW5pQnV0dG9uRWZmZWN0KSByZXR1cm5cbiAgICBzcC5fYW5pQnV0dG9uRWZmZWN0ID0gdHJ1ZVxuICAgIGxldCBfeCA9IHNwLnhcbiAgICBsZXQgX3kgPSBzcC55XG4gICAgbGV0IF9zY2FYID0gc3Auc2NhbGVYXG4gICAgbGV0IF9zY2FZID0gc3Auc2NhbGVZXG4gICAgbGV0IF9iaWdYLCBfYmlnWVxuICAgIGlmICghaXNDaGFuZ2VYWSkge1xuICAgICAgX2JpZ1ggPSBfeCAtICgoc3Aud2lkdGggKiAwLjEpID4+IDEpXG4gICAgICBfYmlnWSA9IF95IC0gKChzcC5oZWlnaHQgKiAwLjEpID4+IDEpXG4gICAgfSBlbHNlIHtcbiAgICAgIF9iaWdYID0gX3hcbiAgICAgIF9iaWdZID0gX3lcbiAgICB9XG4gICAgTGF5YS5Ud2Vlbi50byhcbiAgICAgIHNwLFxuICAgICAgeyB4OiBfYmlnWCwgeTogX2JpZ1ksIHNjYWxlWDogMS4xICogX3NjYVgsIHNjYWxlWTogMS4xICogX3NjYVkgfSxcbiAgICAgIDEwMCxcbiAgICAgIG51bGwsXG4gICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcbiAgICAgICAgTGF5YS5Ud2Vlbi50byhcbiAgICAgICAgICBzcCxcbiAgICAgICAgICB7IHg6IF94LCB5OiBfeSwgc2NhbGVYOiBfc2NhWCwgc2NhbGVZOiBfc2NhWSB9LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFzcC5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgICAgc3AuX2FuaUJ1dHRvbkVmZmVjdCA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgIClcbiAgICAgIH0pLFxuICAgIClcbiAgfVxufVxuIiwiLyoqXHJcbiAqIG5hbWVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBTaW5nbGV0b24ge1xyXG4gIC8qKlxyXG4gICAqIGRlZmF1bHQgY29uc3RyYWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgX2luc3RhbmNlOiBhbnlcclxuICAvKipcclxuICAgKiBnZXQgaW5zdGFuY2Ugb3IgY3JlYXRlIG5ldyBpbnN0YW5jZVxyXG4gICAqIEByZXR1cm5zIHthbnl9XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBDcmVhdGVPckdldCguLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICBjb25zdCBpbnN0VDogYW55ID0gdGhpc1xyXG4gICAgcmV0dXJuIChpbnN0VC5faW5zdGFuY2UgPSBpbnN0VC5faW5zdGFuY2UgfHwgbmV3IGluc3RUKC4uLmFyZ3MpKVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZW51bSBMYXllckNvbnN0IHtcbiAgYmFzZSA9IDEsXG4gIGJhc2UxLFxuICB2aWV3LFxuICBzaGFyZSxcbiAgZGlhbG9nLFxuICBsb2FkaW5nLFxufVxuIiwiZXhwb3J0IGVudW0gVmlld0NvbnN0IHtcclxuICBNYWluID0gMSxcclxuICBMb2FkaW5nLFxyXG4gIFZpZXdUZXN0LFxyXG4gIFZpZXdUZXN0MSxcclxuICBEaWFsb2dUZXN0LFxyXG4gIEJhc2VUZXN0LFxyXG4gIEFQYWdlLFxyXG4gIEJQYWdlXHJcbn1cclxuIiwiaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvU2VydmljZSdcbmltcG9ydCB7IERpc3BhdGNoZXIgfSBmcm9tICcuLi9zZXJ2aWNlL2Rpc3BhdGNoZXIvRGlzcGF0Y2hlcidcbmltcG9ydCBTb2NrZXQgZnJvbSAnLi4vLi4vbmV0L1NvY2tldCdcbmltcG9ydCB7IFN0cmluZ1V0aWwgfSBmcm9tICcuL3V0aWxzL1N0cmluZ1V0aWwnXG5pbXBvcnQgeyBUaW1lVXRpbCB9IGZyb20gJy4vdXRpbHMvVGltZVV0aWwnXG5cbmltcG9ydCBHYW1lTmV0IGZyb20gJy4uLy4uL25ldC9odHRwL0dhbWVOZXQnXG5pbXBvcnQgeyBGZXRjaCB9IGZyb20gJy4uLy4uL25ldC9GZXRjaCdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVBcHAge1xuICAvLyDlhajlsYDphY3nva7mlbDmja5cbiAgcHVibGljIHN0YXRpYyBHbG9iYWxEYXRhOiBhbnkgPSBudWxsXG5cbiAgLyoqXG4gICAqIOWIneWni+WMluWHveaVsFxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgaW5pdCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgR2FtZUFwcC5HbG9iYWxEYXRhID0gTGF5YS5sb2FkZXIuZ2V0UmVzKCdjb25mL2dsb2JhbC5qc29uJylcbiAgICAgIC8v5bin6L2u6K+iXG4gICAgICBTZXJ2aWNlLkluaXQoKVxuICAgICAgcmVzb2x2ZSgpXG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGRpc3BhdGNoZXIoKTogRGlzcGF0Y2hlciB7XG4gICAgcmV0dXJuIFNlcnZpY2UuZGlzcGF0Y2hlclxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXQgU3RyaW5nVXRpbCgpOiBTdHJpbmdVdGlsIHtcbiAgICByZXR1cm4gU3RyaW5nVXRpbC5DcmVhdGVPckdldCgpXG4gIH1cbiAgcHVibGljIHN0YXRpYyBnZXQgVGltZVV0aWwoKTogVGltZVV0aWwge1xuICAgIHJldHVybiBUaW1lVXRpbC5DcmVhdGVPckdldCgpXG4gIH1cbiAgcHVibGljIHN0YXRpYyBnZXQgU29ja2V0KCk6IFNvY2tldCB7XG4gICAgcmV0dXJuIFNvY2tldC5DcmVhdGVPckdldCgpXG4gIH1cbiAgcHVibGljIHN0YXRpYyBnZXQgbmV0KCk6IEdhbWVOZXQge1xuICAgIHJldHVybiBHYW1lTmV0LkNyZWF0ZU9yR2V0KClcbiAgfVxuICBwdWJsaWMgc3RhdGljIGdldCBmZXRjaCgpOiBGZXRjaCB7XG4gICAgcmV0dXJuIEZldGNoLmluaXQoJ21haW4nLCB7IHVybDogJ2h0dHA6Ly9hY2djLmZ1bjozMDAxJyB9KVxuICB9XG59XG4iLCIvKipcclxuICog5aSa6K+t6KiATGFiZWxcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhMYWJlbCBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuICB9XHJcbiAgLyoqIEBwcm9wIHtuYW1lOkxhbmd1YWdlSUQsdHlwZTpzdHJpbmd9Ki9cclxuICBwdWJsaWMgTGFuZ3VhZ2VJRDogc3RyaW5nXHJcbiAgLyoqIEBwcm9wIHtuYW1lOklzRml0LHR5cGU6Qm9vbH0qL1xyXG4gIHB1YmxpYyBJc0ZpdDogYm9vbGVhbiA9IHRydWVcclxuICAvKiogQHByb3Age25hbWU6SXNGaWxsLHRpcHM6XCIxLDBcIix0eXBlOkJvb2x9Ki9cclxuICBwdWJsaWMgSXNGaWxsOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgcHJpdmF0ZSBfbGFuZ0xhYmVsOiBMYXlhLkxhYmVsXHJcbiAgb25Bd2FrZSgpIHtcclxuICAgIHRoaXMuX2xhbmdMYWJlbCA9IHRoaXMub3duZXIgYXMgTGF5YS5MYWJlbFxyXG4gICAgdGhpcy5sYW5nKClcclxuICB9XHJcbiAgcHJpdmF0ZSBsYW5nKCkge1xyXG4gICAgaWYgKHRoaXMuTGFuZ3VhZ2VJRCkge1xyXG4gICAgICB0aGlzLl9sYW5nTGFiZWwudGV4dCA9IHRoaXMuTGFuZ3VhZ2VJRFxyXG4gICAgfVxyXG4gICAgdGhpcy5maXQoKVxyXG4gIH1cclxuICBwdWJsaWMgZml0KCkge1xyXG4gICAgaWYgKCF0aGlzLklzRml0KSByZXR1cm5cclxuICAgIGlmICghdGhpcy5fbGFuZ0xhYmVsLndvcmRXcmFwKSB7XHJcbiAgICAgIGlmICh0aGlzLklzRmlsbCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9sYW5nTGFiZWxbJ190ZiddLnRleHRXaWR0aCA+IHRoaXMuX2xhbmdMYWJlbC53aWR0aCkgdGhpcy5maXRTaG9ydFdpZHRoKClcclxuICAgICAgICBlbHNlIHRoaXMuZml0TG9uZ1dpZHRoKClcclxuICAgICAgfSBlbHNlIHRoaXMuZml0U2hvcnRXaWR0aCgpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5Jc0ZpbGwpIHtcclxuICAgICAgICBpZiAodGhpcy5fbGFuZ0xhYmVsWydfdGYnXS50ZXh0SGVpZ2h0ID4gdGhpcy5fbGFuZ0xhYmVsLmhlaWdodCkgdGhpcy5maXRTaG9ydEhlaWdodCgpXHJcbiAgICAgICAgZWxzZSB0aGlzLmZpdExvbmdIZWlnaHQoKVxyXG4gICAgICB9IGVsc2UgdGhpcy5maXRTaG9ydEhlaWdodCgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZpdFNob3J0V2lkdGgoKSB7XHJcbiAgICB2YXIgZmxhZyA9IHRoaXMuX2xhbmdMYWJlbFsnX3RmJ10udGV4dFdpZHRoID4gdGhpcy5fbGFuZ0xhYmVsLndpZHRoXHJcbiAgICB2YXIgZlNpemUgPSB0aGlzLl9sYW5nTGFiZWwuZm9udFNpemVcclxuICAgIHdoaWxlIChmbGFnKSB7XHJcbiAgICAgIGZTaXplID0gZlNpemUgLSAxXHJcbiAgICAgIExheWEuQnJvd3Nlci5jb250ZXh0LmZvbnQgPSBmU2l6ZSArICdweCBBcmlhbCdcclxuICAgICAgdmFyIGJyb3dzZXJUZXh0ID0gTGF5YS5Ccm93c2VyLmNvbnRleHQubWVhc3VyZVRleHQodGhpcy5fbGFuZ0xhYmVsLnRleHQpXHJcbiAgICAgIGZsYWcgPSBicm93c2VyVGV4dC53aWR0aCA+IHRoaXMuX2xhbmdMYWJlbC53aWR0aCAmJiBmU2l6ZSA+IDEyXHJcbiAgICB9XHJcbiAgICB0aGlzLl9sYW5nTGFiZWwuZm9udFNpemUgPSBmU2l6ZVxyXG4gIH1cclxuICBwcml2YXRlIGZpdExvbmdXaWR0aCgpIHtcclxuICAgIHZhciBmbGFnID0gdGhpcy5fbGFuZ0xhYmVsWydfdGYnXS50ZXh0V2lkdGggPCB0aGlzLl9sYW5nTGFiZWwud2lkdGhcclxuICAgIHZhciBmU2l6ZSA9IHRoaXMuX2xhbmdMYWJlbC5mb250U2l6ZVxyXG4gICAgd2hpbGUgKGZsYWcpIHtcclxuICAgICAgZlNpemUgPSBmU2l6ZSArIDFcclxuICAgICAgTGF5YS5Ccm93c2VyLmNvbnRleHQuZm9udCA9IGZTaXplICsgJ3B4IEFyaWFsJ1xyXG4gICAgICB2YXIgYnJvd3NlclRleHQgPSBMYXlhLkJyb3dzZXIuY29udGV4dC5tZWFzdXJlVGV4dCh0aGlzLl9sYW5nTGFiZWwudGV4dClcclxuICAgICAgZmxhZyA9IGJyb3dzZXJUZXh0LndpZHRoIDwgdGhpcy5fbGFuZ0xhYmVsLndpZHRoXHJcbiAgICB9XHJcbiAgICB0aGlzLl9sYW5nTGFiZWwuZm9udFNpemUgPSBmU2l6ZVxyXG4gIH1cclxuICBwcml2YXRlIGZpdFNob3J0SGVpZ2h0KCkge1xyXG4gICAgdmFyIGZsYWcgPSB0aGlzLl9sYW5nTGFiZWxbJ190ZiddLnRleHRIZWlnaHQgPiB0aGlzLl9sYW5nTGFiZWwuaGVpZ2h0XHJcbiAgICB2YXIgZlNpemUgPSB0aGlzLl9sYW5nTGFiZWwuZm9udFNpemVcclxuICAgIHdoaWxlIChmbGFnKSB7XHJcbiAgICAgIGZTaXplID0gZlNpemUgLSAxXHJcbiAgICAgIExheWEuQnJvd3Nlci5jb250ZXh0LmZvbnQgPSBmU2l6ZSArICdweCBBcmlhbCdcclxuICAgICAgdGhpcy5fbGFuZ0xhYmVsLmZvbnRTaXplID0gZlNpemVcclxuICAgICAgZmxhZyA9IHRoaXMuX2xhbmdMYWJlbFsnX3RmJ10udGV4dEhlaWdodCA+IHRoaXMuX2xhbmdMYWJlbC5oZWlnaHQgJiYgZlNpemUgPiAxMlxyXG4gICAgfVxyXG4gIH1cclxuICBwcml2YXRlIGZpdExvbmdIZWlnaHQoKSB7XHJcbiAgICB2YXIgZmxhZyA9IHRoaXMuX2xhbmdMYWJlbFsnX3RmJ10udGV4dEhlaWdodCA8IHRoaXMuX2xhbmdMYWJlbC5oZWlnaHRcclxuICAgIHZhciBmU2l6ZSA9IHRoaXMuX2xhbmdMYWJlbC5mb250U2l6ZVxyXG4gICAgd2hpbGUgKGZsYWcpIHtcclxuICAgICAgZlNpemUgPSBmU2l6ZSArIDFcclxuICAgICAgTGF5YS5Ccm93c2VyLmNvbnRleHQuZm9udCA9IGZTaXplICsgJ3B4IEFyaWFsJ1xyXG4gICAgICB0aGlzLl9sYW5nTGFiZWwuZm9udFNpemUgPSBmU2l6ZVxyXG4gICAgICBmbGFnID0gdGhpcy5fbGFuZ0xhYmVsWydfdGYnXS50ZXh0SGVpZ2h0IDwgdGhpcy5fbGFuZ0xhYmVsLmhlaWdodFxyXG4gICAgfVxyXG4gICAgdGhpcy5fbGFuZ0xhYmVsLmZvbnRTaXplID0gZlNpemUgLSAxXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNpbmdsZXRvbiB9IGZyb20gJy4uLy4uL2Jhc2UvU2luZ2xldG9uJ1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0cmluZ1V0aWwgZXh0ZW5kcyBTaW5nbGV0b24ge1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2luZ2xldG9uIH0gZnJvbSAnLi4vLi4vYmFzZS9TaW5nbGV0b24nXHJcblxyXG5leHBvcnQgY2xhc3MgVGltZVV0aWwgZXh0ZW5kcyBTaW5nbGV0b24ge1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuICB9XHJcbiAgLy/liankvZnml7bpl7Tovazml7bliIbnp5LvvIjnp5LvvIlcclxuICBwcml2YXRlIGNoYW5nZVRpbWUodGltZTogbnVtYmVyKTogeyBob3VyczogbnVtYmVyOyBtaW51dGVzOiBudW1iZXI7IHNlY29uZHM6IG51bWJlciB9IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGhvdXJzOiBNYXRoLmZsb29yKHRpbWUgLyAzNjAwKSxcclxuICAgICAgbWludXRlczogTWF0aC5mbG9vcigodGltZSAlIDM2MDApIC8gNjApLFxyXG4gICAgICBzZWNvbmRzOiB0aW1lICUgNjAsXHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIOWAkuiuoeaXtlxyXG4gICAqIEBwYXJhbSB0aW1lIOaXtumXtOaIs++8iHPvvIlcclxuICAgKiBAcGFyYW0gaG91ciDml7ZcclxuICAgKiBAcGFyYW0gbWludXRlIOWIhlxyXG4gICAqIEBwYXJhbSBzZWNvbmQg56eSXHJcbiAgICovXHJcbiAgcHVibGljIGNvdW50RG93bih0aW1lOiBudW1iZXIsIGhvdXI6IHN0cmluZyA9ICfml7YnLCBtaW51dGU6IHN0cmluZyA9ICfliIYnLCBzZWNvbmQ6IHN0cmluZyA9ICfnp5InKTogc3RyaW5nIHtcclxuICAgIGxldCB0ZW1wID0gdGhpcy5jaGFuZ2VUaW1lKHRpbWUpXHJcbiAgICByZXR1cm4gYCR7dGVtcC5ob3Vyc30ke2hvdXJ9JHt0ZW1wLm1pbnV0ZXN9JHttaW51dGV9JHt0ZW1wLnNlY29uZHN9JHtzZWNvbmR9YFxyXG4gIH1cclxuICAvKipcclxuICAgKiDmoLzlvI/ljJbml7bpl7RcclxuICAgKiBAcGFyYW0gZGF0ZSBEYXRlXHJcbiAgICogQHBhcmFtIGZvcm1hdCDmoLzlvI9cclxuICAgKi9cclxuICBwdWJsaWMgRGF0ZUZvcm1hdChkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZyA9ICd5eXl5LU1NLWRkIGhoOm1tOnNzJyk6IHN0cmluZyB7XHJcbiAgICBsZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKVxyXG4gICAgbGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMSA+IDkgPyBkYXRlLmdldE1vbnRoKCkgKyAxIDogYDAke2RhdGUuZ2V0TW9udGgoKSArIDF9YFxyXG4gICAgbGV0IG1vbnRoMiA9IGRhdGUuZ2V0TW9udGgoKSArIDFcclxuICAgIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKSA+IDkgPyBkYXRlLmdldERhdGUoKSA6IGAwJHtkYXRlLmdldERhdGUoKX1gXHJcbiAgICBsZXQgZGF5MiA9IGRhdGUuZ2V0RGF0ZSgpXHJcbiAgICBsZXQgaG91ciA9IGRhdGUuZ2V0SG91cnMoKSA+IDkgPyBkYXRlLmdldEhvdXJzKCkgOiBgMCR7ZGF0ZS5nZXRIb3VycygpfWBcclxuICAgIGxldCBob3VyMiA9IGRhdGUuZ2V0SG91cnMoKVxyXG4gICAgbGV0IG1pbnV0ZSA9IGRhdGUuZ2V0TWludXRlcygpID4gOSA/IGRhdGUuZ2V0TWludXRlcygpIDogYDAke2RhdGUuZ2V0TWludXRlcygpfWBcclxuICAgIGxldCBtaW51dGUyID0gZGF0ZS5nZXRNaW51dGVzKClcclxuICAgIGxldCBzZWNvbmQgPSBkYXRlLmdldFNlY29uZHMoKSA+IDkgPyBkYXRlLmdldFNlY29uZHMoKSA6IGAwJHtkYXRlLmdldFNlY29uZHMoKX1gXHJcbiAgICBsZXQgc2Vjb25kMiA9IGRhdGUuZ2V0U2Vjb25kcygpXHJcblxyXG4gICAgcmV0dXJuIGZvcm1hdFxyXG4gICAgICAucmVwbGFjZSgveXl5eS8sIGAke3llYXJ9YClcclxuICAgICAgLnJlcGxhY2UoL01NLywgYCR7bW9udGh9YClcclxuICAgICAgLnJlcGxhY2UoL00vLCBgJHttb250aDJ9YClcclxuICAgICAgLnJlcGxhY2UoL2RkLywgYCR7ZGF5fWApXHJcbiAgICAgIC5yZXBsYWNlKC9kLywgYCR7ZGF5Mn1gKVxyXG4gICAgICAucmVwbGFjZSgvaGgvLCBgJHtob3VyfWApXHJcbiAgICAgIC5yZXBsYWNlKC9oLywgYCR7aG91cjJ9YClcclxuICAgICAgLnJlcGxhY2UoL21tLywgYCR7bWludXRlfWApXHJcbiAgICAgIC5yZXBsYWNlKC9tLywgYCR7bWludXRlMn1gKVxyXG4gICAgICAucmVwbGFjZSgvc3MvLCBgJHtzZWNvbmR9YClcclxuICAgICAgLnJlcGxhY2UoL3MvLCBgJHtzZWNvbmQyfWApXHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIOiOt+WPluW9k+WJjXV0Y+WkqTDngrlcclxuICAgKi9cclxuICBwdWJsaWMgVVRDRGF0ZSgpOiBEYXRlIHtcclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKClcclxuICAgIG5vdy5zZXRVVENIb3VycygwKVxyXG4gICAgbm93LnNldFVUQ01pbnV0ZXMoMClcclxuICAgIG5vdy5zZXRVVENTZWNvbmRzKDApXHJcbiAgICBub3cuc2V0VVRDTWlsbGlzZWNvbmRzKDApXHJcbiAgICByZXR1cm4gbm93XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIOiOt+WPluW9k+WJjeaXtumXtOWIsOWIsDE5NzAtMS0x55qE5aSp5pWw77yIdXRj77yJXHJcbiAgICovXHJcbiAgcHVibGljIGdldFVUQ0RhdGUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKERhdGUubm93KCkgLyAoMjQgKiA2MCAqIDYwICogMTAwMCkpXHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBtb2R1bGUgbXZjIHtcbiAgY2xhc3MgQ29udHJvbGxlck1hbmFnZXIge1xuICAgIHByaXZhdGUgY29udHJvbGxlcnMgPSBuZXcgTWFwKClcblxuICAgIHB1YmxpYyByZWdpc3RlcihtdmMpIHtcbiAgICAgIGNvbnN0IGtleSA9IG12Yy52aWV3S2V5XG4gICAgICBpZiAodGhpcy5pc0V4aXN0cyhrZXkpKSByZXR1cm5cbiAgICAgIGlmIChtdmMuQ29udHJvbGxlcikge1xuICAgICAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IG12Yy5Db250cm9sbGVyKClcbiAgICAgICAgY29udHJvbGxlci5zZXRWaWV3KG12Yy52aWV3KVxuICAgICAgICBpZiAobXZjLk1vZGVsKSB7XG4gICAgICAgICAgY29udHJvbGxlci5zZXRNb2RlbChuZXcgbXZjLk1vZGVsKCkpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb250cm9sbGVycy5zZXQoa2V5LCBjb250cm9sbGVyKVxuICAgICAgICBtdmMudmlldy5zZXRDb250cm9sbGVyKGNvbnRyb2xsZXIpXG4gICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyB1bnJlZ2lzdGVyKGNvbnRyb2xsZXJLZXkpIHtcbiAgICAgIGlmICghdGhpcy5pc0V4aXN0cyhjb250cm9sbGVyS2V5KSkgcmV0dXJuXG4gICAgICB0aGlzLmNvbnRyb2xsZXJzLmRlbGV0ZShjb250cm9sbGVyS2V5KVxuICAgIH1cbiAgICBpc0V4aXN0cyhjb250cm9sbGVyS2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250cm9sbGVycy5oYXMoY29udHJvbGxlcktleSlcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W5oyH5a6aQ29udHJvbGxlcuWvueixoVxuICAgICAqIEBwYXJhbSAgY29udHJvbGxlcktleSBDb250cm9sbGVy5ZSv5LiA5qCH6K+GXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBnZXRDb250cm9sbGVyKGNvbnRyb2xsZXJLZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xsZXJzLmdldChjb250cm9sbGVyS2V5KVxuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBjb25zdCBjb250cm9sbGVyTWdyID0gbmV3IENvbnRyb2xsZXJNYW5hZ2VyKClcbn1cbiIsImltcG9ydCAqIGFzIHYgZnJvbSAnLi9WaWV3TWdyJ1xyXG5pbXBvcnQgKiBhcyBjIGZyb20gJy4vQ29udHJvbGxlck1hbmFnZXInXHJcbi8qKlxyXG4gKiBNVkNcclxuICogW1xyXG4gKiAge1xyXG4gKiAgICB2aWV3S2V5LFxyXG4gKiAgICBWaWV3LFxyXG4gKiAgICB2aWV3LFZpZXflrp7kvotcclxuICogICAgTGF5ZXIsXHJcbiAqICAgIGxheWVyLExheWVy5a6e5L6LXHJcbiAqICAgIGV2ZW50LFxyXG4gKiAgICBDb250cm9sbGVyLFxyXG4gKiAgICBNb2RlbFxyXG4gKiAgfVxyXG4gKiBdXHJcbiAqL1xyXG5jb25zdCBNVkMgPSBbXVxyXG5leHBvcnQgY29uc3QgZmluZEJ5Vmlld0tleSA9IHZpZXdLZXkgPT4gTVZDLmZpbmQoaXRlbSA9PiBpdGVtLnZpZXdLZXkgPT09IHZpZXdLZXkpXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVNVkNJdGVtID0gKHsgdmlld0tleSwgLi4ucHJvcCB9KSA9PiB7XHJcbiAgY29uc3QgaW5kZXggPSBNVkMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS52aWV3S2V5ID09PSB2aWV3S2V5KVxyXG4gIGxldCBtdmNcclxuICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgY29uc3QgaXRlbSA9IE1WQ1tpbmRleF1cclxuICAgIG12YyA9IHsgLi4uaXRlbSwgLi4ucHJvcCB9XHJcbiAgICBNVkMuc3BsaWNlKGluZGV4LCAxLCBtdmMpXHJcbiAgfSBlbHNlIHtcclxuICAgIG12YyA9IHsgdmlld0tleSwgLi4ucHJvcCB9XHJcbiAgICBNVkMucHVzaChtdmMpXHJcbiAgfVxyXG4gIHJldHVybiBtdmNcclxufVxyXG5sZXQgVUkgPSBMYXlhLnN0YWdlXHJcbmNvbnN0IFJlZ2lzdGVyTVZDID0gKExheWVyLCBDb250cm9sbGVyID0gbnVsbCwgTW9kZWwgPSBudWxsKSA9PiB7XHJcbiAgcmV0dXJuIFZpZXcgPT4ge1xyXG4gICAgdXBkYXRlTVZDSXRlbSh7XHJcbiAgICAgIHZpZXdLZXk6IFZpZXcudmlld0tleSxcclxuICAgICAgTGF5ZXIsXHJcbiAgICAgIENvbnRyb2xsZXIsXHJcbiAgICAgIE1vZGVsLFxyXG4gICAgICBWaWV3LFxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKFZpZXcuYXJnbWVudHMpXHJcbiAgICByZXR1cm4gVmlld1xyXG4gIH1cclxufVxyXG5jb25zdCBzZXRVSVJvb3QgPSByb290ID0+IHtcclxuICBVSSA9IHJvb3RcclxufVxyXG5jb25zdCBjb250cm9sbGVyTWdyID0gYy5tdmMuY29udHJvbGxlck1nclxyXG5jb25zdCB2aWV3TWdyID0gdi5tdmMudmlld01nclxyXG5jb25zdCBvcGVuVmlldyA9IHYubXZjLm9wZW5WaWV3XHJcbmNvbnN0IGNsb3NlVmlldyA9IHYubXZjLmNsb3NlVmlld1xyXG5leHBvcnQgeyB2aWV3TWdyLCBjb250cm9sbGVyTWdyLCBvcGVuVmlldywgY2xvc2VWaWV3LCBSZWdpc3Rlck1WQywgc2V0VUlSb290LCBNVkMsIFVJIH1cclxuIiwiaW1wb3J0IHsgdXBkYXRlTVZDSXRlbSB9IGZyb20gJy4vTXZjTWdyJ1xyXG5cclxuZXhwb3J0IGNvbnN0IENsaWNrID0gKHVpLCAuLi5hcmdzKSA9PiB7XHJcbiAgcmV0dXJuIChWaWV3LCBuYW1lLCBkZXNjcmlwdG9yKSA9PiB7XHJcbiAgICBjb25zdCBFdmVudFR5cGUgPSBMYXlhLkV2ZW50LkNMSUNLXHJcbiAgICBjb25zdCBtdmMgPSB1cGRhdGVNVkNJdGVtKHsgdmlld0tleTogVmlldy5jb25zdHJ1Y3Rvci52aWV3S2V5IH0pXHJcbiAgICBtdmMuZXZlbnQgPSBtdmMuZXZlbnQgfHwge31cclxuICAgIGNvbnN0IGV2ZW50ID0gbXZjLmV2ZW50XHJcbiAgICBldmVudFtFdmVudFR5cGVdID0gZXZlbnRbRXZlbnRUeXBlXSB8fCB7fVxyXG4gICAgY29uc3QgZXZlbnRVSSA9IGV2ZW50W0V2ZW50VHlwZV1cclxuICAgIGV2ZW50VUlbdWldID0gZXZlbnRVSVt1aV0gfHwgW11cclxuICAgIGV2ZW50VUlbdWldLnB1c2goeyBmdW5jOiBkZXNjcmlwdG9yLnZhbHVlLCBhcmc6IGFyZ3MgfSlcclxuXHJcbiAgICByZXR1cm4gZGVzY3JpcHRvclxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGJpbmRFdmVudCA9IG12YyA9PiB7XHJcbiAgaWYgKG12Yy5ldmVudCkge1xyXG4gICAgT2JqZWN0LmVudHJpZXMobXZjLmV2ZW50KS5mb3JFYWNoKGV2ZW50ID0+IHtcclxuICAgICAgY29uc3QgdHlwZSA9IGV2ZW50WzBdXHJcbiAgICAgIGNvbnN0IGV2ZW50VUkgPSBldmVudFsxXVxyXG4gICAgICBPYmplY3QuZW50cmllcyhldmVudFVJKS5mb3JFYWNoKGV2ZW50VUkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVpID0gZXZlbnRVSVswXVxyXG4gICAgICAgIGNvbnN0IGZ1bmMgPSBldmVudFVJWzFdXHJcbiAgICAgICAgZnVuYy5mb3JFYWNoKGZ1bmMgPT4ge1xyXG4gICAgICAgICAgbXZjLnZpZXdbdWldLm9uKHR5cGUsIG12Yy52aWV3LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZ1bmMuZnVuYy5hcHBseShtdmMudmlldywgZnVuYy5hcmcpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJVmlldyB9IGZyb20gJy4vaW50ZXJmYWNlL0lWaWV3J1xuXG5pbXBvcnQgeyBJTGF5ZXIgfSBmcm9tICcuL2ludGVyZmFjZS9JTGF5ZXInXG5cbmltcG9ydCB7IFVJLCBjb250cm9sbGVyTWdyLCBmaW5kQnlWaWV3S2V5IH0gZnJvbSAnLi9NdmNNZ3InXG5pbXBvcnQgeyBiaW5kRXZlbnQgfSBmcm9tICcuL1VJRXZlbnQnXG5cbmV4cG9ydCBtb2R1bGUgbXZjIHtcbiAgY2xhc3MgVmlld01nciB7XG4gICAgcHJpdmF0ZSB2aWV3czogTWFwPHN0cmluZywgSVZpZXc+ID0gbmV3IE1hcDxzdHJpbmcsIElWaWV3PigpXG4gICAgcHJpdmF0ZSBsYXllcnM6IE1hcDxzdHJpbmcsIElMYXllcj4gPSBuZXcgTWFwPHN0cmluZywgSUxheWVyPigpXG4gICAgcHJpdmF0ZSBvcGVuVmlld3M6IE1hcDxzdHJpbmcsIElWaWV3PiA9IG5ldyBNYXA8c3RyaW5nLCBJVmlldz4oKVxuXG4gICAgcHVibGljIGdldFZpZXcoa2V5KTogSVZpZXcge1xuICAgICAgcmV0dXJuIHRoaXMudmlld3MuZ2V0KGtleSlcbiAgICB9XG4gICAgcHVibGljIHNldFZpZXcoa2V5LCB2aWV3OiBJVmlldyk6IHZvaWQge1xuICAgICAgdGhpcy52aWV3cy5zZXQoa2V5LCB2aWV3KVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0TGF5ZXIoTGF5ZXIpOiBJTGF5ZXIge1xuICAgICAgbGV0IGxheWVyID0gdGhpcy5sYXllcnMuZ2V0KExheWVyLmxheWVyS2V5KVxuICAgICAgaWYgKGxheWVyKSByZXR1cm4gbGF5ZXJcbiAgICAgIGxheWVyID0gdGhpcy5jcmVhdGVMYXllcihMYXllcilcbiAgICAgIHRoaXMuc2V0TGF5ZXIoTGF5ZXIubGF5ZXJLZXksIGxheWVyKVxuICAgICAgcmV0dXJuIGxheWVyXG4gICAgfVxuICAgIHB1YmxpYyBzZXRMYXllcihrZXksIGxheWVyOiBJTGF5ZXIpOiB2b2lkIHtcbiAgICAgIHRoaXMubGF5ZXJzLnNldChrZXksIGxheWVyKVxuICAgIH1cblxuICAgIHB1YmxpYyBvcGVuVmlldyhWaWV3LCAuLi5hcmdzKTogdm9pZCB7XG4gICAgICBsZXQgX3ZpZXcgPSB0aGlzLm9wZW5WaWV3cy5nZXQoVmlldy52aWV3S2V5KVxuICAgICAgaWYgKF92aWV3KSB7XG4gICAgICAgIF92aWV3Lm9wZW5DYi5hcHBseShfdmlldywgYXJncylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBfdmlldyA9IHRoaXMuZ2V0VmlldyhWaWV3LnZpZXdLZXkpXG4gICAgICBpZiAoX3ZpZXcpIHtcbiAgICAgICAgX3ZpZXcubGF5ZXIub3BlblZpZXcoX3ZpZXcsIC4uLmFyZ3MpXG4gICAgICAgIHRoaXMub3BlblZpZXdzLnNldChWaWV3LnZpZXdLZXksIF92aWV3KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIF92aWV3ID0gdGhpcy5jcmVhdGVWaWV3KFZpZXcpXG4gICAgICBfdmlldy5sYXllci5vcGVuVmlldyhfdmlldywgLi4uYXJncylcbiAgICB9XG4gICAgcHJpdmF0ZSBjcmVhdGVWaWV3KFZpZXcpIHtcbiAgICAgIGNvbnN0IG12YyA9IGZpbmRCeVZpZXdLZXkoVmlldy52aWV3S2V5KVxuICAgICAgY29uc3QgbGF5ZXIgPSB0aGlzLmdldExheWVyKG12Yy5MYXllcilcblxuICAgICAgbGV0IF92aWV3ID0gbmV3IG12Yy5WaWV3KClcbiAgICAgIF92aWV3LmxheWVyID0gbGF5ZXJcbiAgICAgIG12Yy52aWV3ID0gX3ZpZXdcbiAgICAgIG12Yy5sYXllciA9IGxheWVyXG4gICAgICBiaW5kRXZlbnQobXZjKVxuICAgICAgY29udHJvbGxlck1nci5yZWdpc3RlcihtdmMpXG5cbiAgICAgIHRoaXMuc2V0VmlldyhtdmMudmlld0tleSwgX3ZpZXcpXG4gICAgICBpZiAoX3ZpZXcuaW5pdCkgX3ZpZXcuaW5pdCgpXG4gICAgICByZXR1cm4gX3ZpZXdcbiAgICB9XG4gICAgcHJpdmF0ZSBjcmVhdGVMYXllcihMYXllcikge1xuICAgICAgY29uc3QgX2xheWVyID0gbmV3IExheWVyKFVJKVxuICAgICAgX2xheWVyLnpPcmRlciA9IExheWVyLmxheWVyS2V5XG4gICAgICBVSS5hZGRDaGlsZChfbGF5ZXIpXG4gICAgICByZXR1cm4gX2xheWVyXG4gICAgfVxuICAgIHB1YmxpYyBjbG9zZVZpZXcoVmlld09yS2V5T3JJbnM6IGFueSwgLi4uYXJncyk6IHZvaWQge1xuICAgICAgbGV0IF92aWV3XG4gICAgICBpZiAoVmlld09yS2V5T3JJbnMudmlld0tleSkge1xuICAgICAgICBfdmlldyA9IHRoaXMuZ2V0VmlldyhWaWV3T3JLZXlPcklucy52aWV3S2V5KVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmdldFZpZXcoVmlld09yS2V5T3JJbnMpKSB7XG4gICAgICAgIF92aWV3ID0gdGhpcy5nZXRWaWV3KFZpZXdPcktleU9ySW5zKVxuICAgICAgfSBlbHNlIGlmIChWaWV3T3JLZXlPcklucy5jb25zdHJ1Y3Rvci52aWV3S2V5KSB7XG4gICAgICAgIF92aWV3ID0gdGhpcy5nZXRWaWV3KFZpZXdPcktleU9ySW5zLmNvbnN0cnVjdG9yLnZpZXdLZXkpXG4gICAgICB9XG4gICAgICBpZiAoX3ZpZXcpIHtcbiAgICAgICAgX3ZpZXcubGF5ZXIuY2xvc2VWaWV3KF92aWV3LCAuLi5hcmdzKVxuICAgICAgICB0aGlzLm9wZW5WaWV3cy5kZWxldGUoX3ZpZXcuY29uc3RydWN0b3Iudmlld0tleSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBpc09wZW4oVmlld09yS2V5T3JJbnMpOiBib29sZWFuIHtcbiAgICAgIGxldCBfdmlld1xuICAgICAgaWYgKFZpZXdPcktleU9ySW5zLnZpZXdLZXkpIHtcbiAgICAgICAgX3ZpZXcgPSB0aGlzLm9wZW5WaWV3cy5nZXQoVmlld09yS2V5T3JJbnMudmlld0tleSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcGVuVmlld3MuZ2V0KFZpZXdPcktleU9ySW5zKSkge1xuICAgICAgICBfdmlldyA9IHRoaXMub3BlblZpZXdzLmdldChWaWV3T3JLZXlPcklucylcbiAgICAgIH0gZWxzZSBpZiAoVmlld09yS2V5T3JJbnMuY29uc3RydWN0b3Iudmlld0tleSkge1xuICAgICAgICBfdmlldyA9IHRoaXMub3BlblZpZXdzLmdldChWaWV3T3JLZXlPcklucy5jb25zdHJ1Y3Rvci52aWV3S2V5KVxuICAgICAgfVxuICAgICAgcmV0dXJuICEhX3ZpZXdcbiAgICB9XG4gIH1cbiAgZXhwb3J0IGNvbnN0IHZpZXdNZ3IgPSBuZXcgVmlld01ncigpXG4gIGV4cG9ydCBjb25zdCBvcGVuVmlldyA9IChWaWV3LCAuLi5hcmdzKSA9PiB7XG4gICAgdmlld01nci5vcGVuVmlldyhWaWV3LCAuLi5hcmdzKVxuICB9XG5cbiAgZXhwb3J0IGNvbnN0IGNsb3NlVmlldyA9IChWaWV3T3JLZXlPcklucywgLi4uYXJncykgPT4ge1xuICAgIHZpZXdNZ3IuY2xvc2VWaWV3KFZpZXdPcktleU9ySW5zLCAuLi5hcmdzKVxuICB9XG59XG4iLCJpbXBvcnQgQmFzZU1vZGVsIGZyb20gJy4uL21vZGVsL0Jhc2VNb2RlbCdcbmltcG9ydCAqIGFzIHYgZnJvbSAnLi4vdmlldy9CYXNlVmlldydcbmltcG9ydCBCYXNlVmlldyA9IHYuS1VJLkJhc2VWaWV3XG5pbXBvcnQgR2FtZUFwcCBmcm9tICcuLi8uLi9nYW1lL0dhbWVBcHAnXG5pbXBvcnQgeyBkaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vc2VydmljZS9kaXNwYXRjaGVyL0Rpc3BhdGNoZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VDb250cm9sbGVyIHtcbiAgcHJpdmF0ZSBtb2RlbDogQmFzZU1vZGVsXG4gIHByaXZhdGUgdmlldzogQmFzZVZpZXdcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tb2RlbCA9IG51bGxcbiAgICB0aGlzLnZpZXcgPSBudWxsXG4gICAgdGhpcy5pbml0KClcbiAgfVxuICBwdWJsaWMgaW5pdCgpIHt9XG4gIHB1YmxpYyBzZXRNb2RlbChtb2RlbCkge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbFxuICB9XG4gIHB1YmxpYyBnZXRNb2RlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbFxuICB9XG4gIHB1YmxpYyBzZXRWaWV3KHZpZXcpIHtcbiAgICB0aGlzLnZpZXcgPSB2aWV3XG4gIH1cbiAgcHVibGljIGdldFZpZXcoKSB7XG4gICAgcmV0dXJuIHRoaXMudmlld1xuICB9XG5cbiAgLy/nm5HlkKzkuovku7ZcbiAgcHVibGljIGFkZExpc3RlbmVyKGtleSwgY2FsbGJhY2ssIGNhbGxlcikge1xuICAgIGRpc3BhdGNoZXIuT2JzZXJ2ZShrZXksIGNhbGxlciwgY2FsbGJhY2spXG4gIH1cbiAgLy/np7vpmaTnm5HlkKznmoTkuovku7ZcbiAgcHVibGljIHJlbW92ZUxpc3RlbmVyKGtleSkge1xuICAgIGRpc3BhdGNoZXIuUmVtb3ZlKGtleSlcbiAgfVxuICAvL+inpuWPkeS6i+S7tlxuICBwdWJsaWMgZGlzcGF0Y2goa2V5LCAuLi5hcmdzKSB7XG4gICAgZGlzcGF0Y2hlci5TZW5kTXNnKGtleSwgYXJncylcbiAgfVxuICAvKipcbiAgICog5rOo5YaM5LuO5pyN5Yqh5Zmo6L+U5Zue5raI5oGv55qE55uR5ZCsXG4gICAqIEBwYXJhbSAgY21kIOa2iOaBr+agh+ivhlxuICAgKiBAcGFyYW0gY2FsbGJhY2sg5aSE55CG5Ye95pWwXG4gICAqIEBwYXJhbSAgdGhpc09iaiDlpITnkIblh73mlbDmiYDlsZ7lr7nosaFcbiAgICovXG4gIG9ic2VydmVyU29ja2V0TXNnKGNtZCwgY2FsbGJhY2ssIHRoaXNPYmopIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBjbWQg5raI5oGv5qCH6K+GXG4gICAqIEBwYXJhbSBtc2cg5pWw5o2uXG4gICAqIEBwYXJhbSBjYWxsYmFjayDlpITnkIblh73mlbBcbiAgICogQHBhcmFtIHRoaXNPYmog5aSE55CG5Ye95pWw5omA5bGe5a+56LGhXG4gICAqL1xuICBzZW5kU29ja2V0TXNnKGNtZCwgbXNnLCBjYWxsYmFjaywgdGhpc09iaikge31cblxuICAvKipcbiAgICog5Y+R6YCB5raI5oGv5YiwSHR0cOacjeWKoeerr1xuICAgKiBAcGFyYW0gIGNtZCDmtojmga/moIfor4Yg5L6L5aaCOiBVc2VyLmxvZ2luXG4gICAqIEBwYXJhbSAgbXNnIOa2iOaBr+WPguaVsCDkvovlpoI6IGxldCBtc2c6YW55ID0ge1widU5hbWVcIjp1TmFtZSwgXCJ1UGFzc1wiOnVQYXNzfTtcbiAgICovXG4gIHNlbmRIdHRwTXNnKGNtZCwgbXNnKSB7fVxuICAvL+WQkeWFtuS7luaooeWdl+mAmuiur1xuICBwdWJsaWMgc2VuZE1lc3NhZ2UoKSB7fVxufVxuIiwiaW1wb3J0IHsgSVZpZXcgfSBmcm9tICcuLi9pbnRlcmZhY2UvSVZpZXcnXHJcbmltcG9ydCB7IExheWVyQ29uc3QgfSBmcm9tICcuLi8uLi9jb25zdC9MYXllckNvbnN0J1xyXG5pbXBvcnQgeyBJTGF5ZXIgfSBmcm9tICcuLi9pbnRlcmZhY2UvSUxheWVyJ1xyXG5leHBvcnQgY2xhc3MgQmFzZUxheWVyIGV4dGVuZHMgTGF5YS5TcHJpdGUgaW1wbGVtZW50cyBJTGF5ZXIge1xyXG4gIHByb3RlY3RlZCBvd25TY2VuZTogTGF5YS5TY2VuZVxyXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBMYXlhLlNjZW5lKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLm93blNjZW5lID0gc2NlbmVcclxuICAgIHRoaXMud2lkdGggPSB0aGlzLm93blNjZW5lLndpZHRoXHJcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMub3duU2NlbmUuaGVpZ2h0XHJcbiAgICB0aGlzLmhpdFRlc3RQcmlvciA9IHRydWVcclxuICAgIHRoaXMubW91c2VUaHJvdWdoID0gdHJ1ZVxyXG4gICAgdGhpcy5tb3VzZUVuYWJsZWQgPSB0cnVlXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgbGF5ZXJLZXkgPSBMYXllckNvbnN0LmJhc2VcclxuICBwdWJsaWMgb3BlblZpZXcodmlldzogSVZpZXcsIC4uLmFyZ3MpOiB2b2lkIHtcclxuICAgIGlmICh2aWV3Lm9wZW5DYikge1xyXG4gICAgICB2aWV3Lm9wZW5DYi5hcHBseSh2aWV3LCBhcmdzKVxyXG4gICAgfVxyXG4gICAgdGhpcy5tb3VzZVRocm91Z2ggPSBmYWxzZVxyXG4gICAgdGhpcy5hZGRDaGlsZCh2aWV3KVxyXG4gIH1cclxuICBwdWJsaWMgY2xvc2VWaWV3KHZpZXc6IElWaWV3KTogdm9pZCB7XHJcbiAgICBpZiAodmlldy5jbG9zZUNiKSB7XHJcbiAgICAgIHZpZXcuY2xvc2VDYigpXHJcbiAgICB9XHJcbiAgICB0aGlzLnJlbW92ZUNoaWxkKHZpZXcpXHJcbiAgICB0aGlzLm1vdXNlVGhyb3VnaCA9IHRoaXMuX2NoaWxkcmVuLmxlbmd0aCA9PT0gMFxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBCYXNlTGF5ZXIgfSBmcm9tICcuL0Jhc2VMYXllcidcclxuaW1wb3J0IHsgSUxheWVyIH0gZnJvbSAnLi4vaW50ZXJmYWNlL0lMYXllcidcclxuaW1wb3J0IHsgTGF5ZXJDb25zdCB9IGZyb20gJy4uLy4uL2NvbnN0L0xheWVyQ29uc3QnXHJcbmltcG9ydCB7IGNsb3NlVmlldyB9IGZyb20gJy4uL012Y01ncidcclxuY2xhc3MgTWFzayBleHRlbmRzIExheWEuSW1hZ2Uge1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMuc2tpbiA9ICdjb21wL2JsYW5rLnBuZydcclxuICAgIHRoaXMuc2l6ZUdyaWQgPSAnMiwyLDIsMidcclxuICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIERpYWxvZ0xheWVyIGV4dGVuZHMgQmFzZUxheWVyIGltcGxlbWVudHMgSUxheWVyIHtcclxuICAvLyBwcml2YXRlIG1NYXNrXHJcbiAgY29uc3RydWN0b3Ioc2NlbmU6IExheWEuU2NlbmUpIHtcclxuICAgIHN1cGVyKHNjZW5lKVxyXG4gIH1cclxuICBzdGF0aWMgbGF5ZXJLZXkgPSBMYXllckNvbnN0LmRpYWxvZ1xyXG5cclxuICBwcml2YXRlIG1hc2tzOiBNYXA8c3RyaW5nLCBMYXlhLkltYWdlPiA9IG5ldyBNYXAoKVxyXG5cclxuICBwdWJsaWMgb3BlblZpZXcodmlldzogYW55LCAuLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgbGV0IG1hc2sgPSB0aGlzLm1hc2tzLmdldCh2aWV3LmNvbnN0cnVjdG9yLnZpZXdLZXkpXHJcbiAgICBpZiAoIW1hc2spIHtcclxuICAgICAgbWFzayA9IG5ldyBNYXNrKClcclxuICAgICAgbWFzay5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgY2xvc2VWaWV3KHZpZXcpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBtYXNrLndpZHRoID0gdGhpcy53aWR0aFxyXG4gICAgbWFzay5oZWlnaHQgPSB0aGlzLmhlaWdodFxyXG5cclxuICAgIHRoaXMubWFza3Muc2V0KHZpZXcuY29uc3RydWN0b3Iudmlld0tleSwgbWFzaylcclxuICAgIHRoaXMuYWRkQ2hpbGQobWFzaylcclxuICAgIHN1cGVyLm9wZW5WaWV3LmFwcGx5KHRoaXMsIFt2aWV3LCAuLi5hcmdzXSlcclxuXHJcbiAgICB2aWV3LmFuY2hvclggPSAwLjVcclxuICAgIHZpZXcuYW5jaG9yWSA9IDAuNVxyXG4gICAgdmlldy54ID0gdmlldy53aWR0aCAvIDJcclxuICAgIHZpZXcueSA9IHZpZXcuaGVpZ2h0IC8gMlxyXG4gICAgdmlldy5tb3VzZVRocm91Z2ggPSB0cnVlXHJcbiAgICBsZXQgdHdlZW4gPSBuZXcgTGF5YS5Ud2VlbigpXHJcbiAgICB2aWV3LnNjYWxlWCA9IDAuOFxyXG4gICAgdmlldy5zY2FsZVkgPSAwLjhcclxuICAgIHR3ZWVuLnRvKFxyXG4gICAgICB2aWV3LFxyXG4gICAgICB7IHNjYWxlWDogMS4wNSwgc2NhbGVZOiAxLjA1IH0sXHJcbiAgICAgIDEwMCxcclxuICAgICAgbnVsbCxcclxuICAgICAgbmV3IExheWEuSGFuZGxlcih0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHR3ZWVuID0gbmV3IExheWEuVHdlZW4oKVxyXG4gICAgICAgIHR3ZWVuLnRvKHZpZXcsIHsgc2NhbGVYOiAxLCBzY2FsZVk6IDEgfSwgMTAwLCBudWxsKVxyXG4gICAgICB9KSxcclxuICAgIClcclxuICB9XHJcbiAgcHVibGljIGNsb3NlVmlldyh2aWV3OiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5tYXNrcy5nZXQodmlldy5jb25zdHJ1Y3Rvci52aWV3S2V5KSlcclxuICAgIHN1cGVyLmNsb3NlVmlldyh2aWV3KVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBCYXNlTGF5ZXIgfSBmcm9tICcuL0Jhc2VMYXllcidcclxuXHJcbmltcG9ydCB7IElWaWV3IH0gZnJvbSAnLi4vaW50ZXJmYWNlL0lWaWV3J1xyXG5cclxuaW1wb3J0IHsgTGF5ZXJDb25zdCB9IGZyb20gJy4uLy4uL2NvbnN0L0xheWVyQ29uc3QnXHJcblxyXG5jb25zdCBkaXMgPSAxMDBcclxuY29uc3QgdGltZSA9IDI0MFxyXG5leHBvcnQgY2xhc3MgVmlld0xheWVyIGV4dGVuZHMgQmFzZUxheWVyIHtcclxuICBjb25zdHJ1Y3RvcihzY2VuZTogTGF5YS5TY2VuZSkge1xyXG4gICAgc3VwZXIoc2NlbmUpXHJcbiAgfVxyXG4gIHN0YXRpYyBsYXllcktleSA9IExheWVyQ29uc3Qudmlld1xyXG4gIHByaXZhdGUgb3BlblZpZXdzOiBJVmlld1tdID0gW11cclxuIFxyXG4gIHB1YmxpYyBvcGVuVmlldyh2aWV3OiBhbnksIC4uLmFyZ3MpIHtcclxuICAgIGxldCBsYXN0VmlldzogTGF5YS5TcHJpdGVcclxuICAgIGNvbnN0IHR3ZWVuMSA9IG5ldyBMYXlhLlR3ZWVuKClcclxuICAgIGlmICh0aGlzLm9wZW5WaWV3cy5sZW5ndGgpIHtcclxuICAgICAgbGFzdFZpZXcgPSB0aGlzLm9wZW5WaWV3c1t0aGlzLm9wZW5WaWV3cy5sZW5ndGggLSAxXVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGFzdFZpZXcgPSB0aGlzLm93blNjZW5lXHJcbiAgICB9XHJcbiAgICBsYXN0Vmlldy54ID0gdGhpcy5vd25TY2VuZSA9PT0gbGFzdFZpZXcgPyAwIDogZGlzXHJcbiAgICB0d2VlbjEudG8oXHJcbiAgICAgIGxhc3RWaWV3LFxyXG4gICAgICB7IHg6IHRoaXMub3duU2NlbmUgPT09IGxhc3RWaWV3ID8gLWRpcyA6IDAgfSxcclxuICAgICAgdGltZSxcclxuICAgICAgbnVsbCxcclxuICAgICAgbmV3IExheWEuSGFuZGxlcihsYXN0VmlldywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChsYXN0VmlldyAhPT0gdGhpcy5vd25TY2VuZSkgbGFzdFZpZXcucmVtb3ZlU2VsZigpXHJcbiAgICAgIH0pLFxyXG4gICAgKVxyXG4gICAgdGhpcy5vcGVuVmlld3MucHVzaCh2aWV3KVxyXG4gICAgc3VwZXIub3BlblZpZXcuYXBwbHkodGhpcywgW3ZpZXcsIC4uLmFyZ3NdKVxyXG4gICAgY29uc3QgdHdlZW4yID0gbmV3IExheWEuVHdlZW4oKVxyXG4gICAgdmlldy54ID0gdGhpcy53aWR0aFxyXG4gICAgdHdlZW4yLnRvKFxyXG4gICAgICB2aWV3LFxyXG4gICAgICB7IHg6IGRpcyB9LFxyXG4gICAgICB0aW1lLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBuZXcgTGF5YS5IYW5kbGVyKHZpZXcsICgpID0+IHtcclxuICAgICAgICBpZiAodmlldy5hZnRlck9wZW4pIHtcclxuICAgICAgICAgIHZpZXcuYWZ0ZXJPcGVuLmNhbGwodmlldylcclxuICAgICAgICB9XHJcbiAgICAgIH0pLFxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb3NlVmlldyh2aWV3OiBhbnkpIHtcclxuICAgIGxldCBsYXN0Vmlld1xyXG4gICAgY29uc3QgdHdlZW4xID0gbmV3IExheWEuVHdlZW4oKVxyXG4gICAgdGhpcy5vcGVuVmlld3MucG9wKClcclxuICAgIGlmICh0aGlzLm9wZW5WaWV3cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxhc3RWaWV3ID0gdGhpcy5vcGVuVmlld3NbdGhpcy5vcGVuVmlld3MubGVuZ3RoIC0gMV1cclxuICAgICAgbGFzdFZpZXcuek9yZGVyID0gdmlldy56T3JkZXIgLSAxXHJcbiAgICAgIGxhc3RWaWV3LmxheWVyLmFkZENoaWxkKGxhc3RWaWV3KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGFzdFZpZXcgPSB0aGlzLm93blNjZW5lXHJcbiAgICB9XHJcblxyXG4gICAgbGFzdFZpZXcueCA9IGxhc3RWaWV3ID09PSB0aGlzLm93blNjZW5lID8gLWRpcyA6IDBcclxuXHJcbiAgICB0d2VlbjEudG8obGFzdFZpZXcsIHsgeDogbGFzdFZpZXcgPT09IHRoaXMub3duU2NlbmUgPyAwIDogZGlzIH0sIHRpbWUpXHJcbiAgICBjb25zdCB0d2VlbjIgPSBuZXcgTGF5YS5Ud2VlbigpXHJcbiAgICB2aWV3LnggPSBkaXNcclxuICAgIHR3ZWVuMi50byhcclxuICAgICAgdmlldyxcclxuICAgICAgeyB4OiB0aGlzLndpZHRoIH0sXHJcbiAgICAgIHRpbWUsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG5ldyBMYXlhLkhhbmRsZXIodGhpcywgKCkgPT4ge1xyXG4gICAgICAgIHN1cGVyLmNsb3NlVmlldyh2aWV3KVxyXG4gICAgICB9KSxcclxuICAgIClcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZU1vZGVse1xuICAgIFxufSIsImltcG9ydCBCYXNlQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVyL0Jhc2VDb250cm9sbGVyJ1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uLy4uLy4uL2dhbWUvc3RvcmUvc3RvcmUnXG5cbmV4cG9ydCBuYW1lc3BhY2UgS1VJIHtcbiAgZXhwb3J0IGNsYXNzIEJhc2VWaWV3IGV4dGVuZHMgTGF5YS5WaWV3IHtcbiAgICBwdWJsaWMgY29udHJvbGxlcjogQmFzZUNvbnRyb2xsZXJcbiAgICBwdWJsaWMgdW5zdWJzY3JpYmVcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKClcbiAgICB9XG4gICAgcHVibGljIHNldENvbnRyb2xsZXIoY3RybCkge1xuICAgICAgdGhpcy5jb250cm9sbGVyID0gY3RybFxuICAgIH1cbiAgICBwdWJsaWMgaW5pdCgpIHtcbiAgICAgIHRoaXMuaW5pdERhdGEoKVxuICAgICAgdGhpcy5pbml0UmVzKClcbiAgICAgIHRoaXMuaW5pdFZpZXcoKVxuICAgIH1cbiAgICBwdWJsaWMgaW5pdERhdGEoKSB7fVxuICAgIHB1YmxpYyBpbml0UmVzKCkge31cbiAgICBwdWJsaWMgaW5pdFZpZXcoKSB7fVxuICAgIHB1YmxpYyBvcGVuQ2IoLi4uYXJncykge1xuICAgICAgdGhpcy51cGRhdGVWaWV3KClcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUodGhpcy51cGRhdGVWaWV3LmJpbmQodGhpcykpXG4gICAgfVxuICAgIHB1YmxpYyBjbG9zZUNiKC4uLmFyZ3MpIHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUoKVxuICAgIH1cbiAgICBwdWJsaWMgdXBkYXRlVmlldygpIHt9XG4gIH1cbn1cbiIsImltcG9ydCB7IERpc3BhdGNoZXIgfSBmcm9tICcuL2Rpc3BhdGNoZXIvRGlzcGF0Y2hlcidcclxuXHJcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlIHtcclxuICBwdWJsaWMgc3RhdGljIEluaXQoKTogdm9pZCB7XHJcblxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZGlzcGF0Y2hlcigpOiBEaXNwYXRjaGVyIHtcclxuICAgIHJldHVybiBEaXNwYXRjaGVyLkNyZWF0ZU9yR2V0KClcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE9ic2VydmVyIH0gZnJvbSAnLi9PYnNlcnZlcidcbmltcG9ydCB7IFNpbmdsZXRvbiB9IGZyb20gJy4uLy4uL2Jhc2UvU2luZ2xldG9uJ1xuZXhwb3J0IGNsYXNzIERpc3BhdGNoZXIgZXh0ZW5kcyBTaW5nbGV0b24ge1xuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuX29ic2VydmVycyA9IHt9XG4gIH1cblxuICAvKipcbiAgICog5raI5oGv5YiX6KGoXG4gICAqL1xuICBwcml2YXRlIF9vYnNlcnZlcnM6IGFueVxuXG4gIHB1YmxpYyBPYnNlcnZlKHRvcGljXzogYW55LCBvYnNlcnZlcl86IGFueSwgaGFuZGxlcl86IEZ1bmN0aW9uKTogT2JzZXJ2ZXIge1xuICAgIGlmICghdGhpcy5fb2JzZXJ2ZXJzW3RvcGljX10pIHRoaXMuX29ic2VydmVyc1t0b3BpY19dID0gW11cbiAgICBsZXQgb2JzZXJ2ZXI6IE9ic2VydmVyID0gbmV3IE9ic2VydmVyKHRvcGljXywgb2JzZXJ2ZXJfLCBoYW5kbGVyXylcbiAgICB0aGlzLl9vYnNlcnZlcnNbdG9waWNfXS5wdXNoKG9ic2VydmVyKVxuICAgIHJldHVybiBvYnNlcnZlci5SZXVzZSh0b3BpY18sIG9ic2VydmVyXywgaGFuZGxlcl8pXG4gIH1cblxuICBwdWJsaWMgT2JzZXJ2ZUxpc3Qob2JzZXJ2ZXJfOiBhbnksIHRvcGljc186IGFueVtdLCBoYW5kbGVyc186IGFueVtdKTogT2JzZXJ2ZXJbXSB7XG4gICAgbGV0IGxpc3Q6IE9ic2VydmVyW10gPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9waWNzXy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlzdC5wdXNoKHRoaXMuT2JzZXJ2ZSh0b3BpY3NfW2ldLCBvYnNlcnZlcl8sIGhhbmRsZXJzX1tpXSkpXG4gICAgfVxuICAgIHJldHVybiBsaXN0XG4gIH1cblxuICBwdWJsaWMgUmVtb3ZlTGlzdChvYnM6IE9ic2VydmVyW10pOiB2b2lkIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9icy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5SZW1vdmUob2JzW2ldKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBTZW5kTXNnKHRvcGljXzogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueVtdIHtcbiAgICBpZiAoIXRoaXMuX29ic2VydmVyc1t0b3BpY19dKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGxldCByZXQ6IGFueVtdID0gW11cbiAgICB0aGlzLl9vYnNlcnZlcnNbdG9waWNfXS5mb3JFYWNoKFxuICAgICAgKGVsZW1lbnQpOiB2b2lkID0+IHtcbiAgICAgICAgcmV0LnB1c2goZWxlbWVudC5SZWN2TXNnKC4uLmFyZ3MpKVxuICAgICAgfSxcbiAgICApXG4gICAgcmV0dXJuIHJldFxuICB9XG5cbiAgcHVibGljIFJlbW92ZShvYnM6IE9ic2VydmVyKTogT2JzZXJ2ZXIge1xuICAgIGlmIChvYnMgPT0gbnVsbCkgcmV0dXJuXG4gICAgbGV0IGFycjogYW55W10gPSB0aGlzLl9vYnNlcnZlcnNbb2JzLnRvcGljXVxuXG4gICAgaWYgKCFhcnIpIHJldHVybiBudWxsXG5cbiAgICBsZXQgaW5kOiBudW1iZXIgPSBhcnIuaW5kZXhPZihvYnMpXG4gICAgaWYgKGluZCA8IDApIHJldHVybiBudWxsXG5cbiAgICBhcnIuc3BsaWNlKGluZCwgMSlcbiAgICByZXR1cm4gb2JzXG4gIH1cblxuICBwdWJsaWMgUmVtb3ZlQWxsKHRvcGljOiBhbnkpOiB2b2lkIHtcbiAgICBsZXQgYXJyOiBhbnlbXSA9IHRoaXMuX29ic2VydmVyc1t0b3BpY11cbiAgICBpZiAoIWFycikgcmV0dXJuXG4gICAgYXJyLnNwbGljZSgwLCBhcnIubGVuZ3RoKVxuICB9XG59XG5jb25zdCBkaXNwYXRjaGVyID0gbmV3IERpc3BhdGNoZXIoKVxuZXhwb3J0IHsgZGlzcGF0Y2hlciB9XG4iLCJleHBvcnQgY2xhc3MgT2JzZXJ2ZXIge1xuICBwdWJsaWMgdG9waWM6IGFueVxuICBwdWJsaWMgb2JzZXJ2ZXI6IGFueVxuICBwdWJsaWMgaGFuZGxlcjogRnVuY3Rpb25cblxuICBwdWJsaWMgY29uc3RydWN0b3IodG9waWNfOiBhbnksIG9ic2VydmVyXzogYW55LCBoYW5kbGVyXzogRnVuY3Rpb24pIHtcbiAgICB0aGlzLlJldXNlKHRvcGljXywgb2JzZXJ2ZXJfLCBoYW5kbGVyXylcbiAgfVxuXG4gIHB1YmxpYyBSZXVzZSh0b3BpY186IGFueSwgb2JzZXJ2ZXJfOiBhbnksIGhhbmRsZXJfOiBGdW5jdGlvbik6IE9ic2VydmVyIHtcbiAgICB0aGlzLnRvcGljID0gdG9waWNfXG4gICAgdGhpcy5vYnNlcnZlciA9IG9ic2VydmVyX1xuICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXJfXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHB1YmxpYyBSZWN2TXNnKC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XG4gICAgbGV0IHJldDogYW55XG4gICAgaWYgKCF0aGlzLm9ic2VydmVyKSB7XG4gICAgICByZXQgPSB0aGlzLmhhbmRsZXIoLi4uYXJncylcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0ID0gdGhpcy5oYW5kbGVyLmFwcGx5KHRoaXMub2JzZXJ2ZXIsIGFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXRcbiAgfVxufVxuIiwiaW1wb3J0IHsgc3RhdGUgfSBmcm9tICcuL3N0YXRlJ1xyXG5leHBvcnQgZW51bSBBQ1RJT05UWVBFIHtcclxuICBDSEFOR0VfVEVTVERBVEExID0gMSxcclxuICBDSEFOR0VfVEVTVERBVEEyLFxyXG4gIENIQU5HRV9VU0VSTkFNRSxcclxuICBDSEFOR0VfVE9LRU4sXHJcbn1cclxuZXhwb3J0IGNvbnN0IEFjdGlvblR5cGVzID0ge1xyXG4gIGxvZ2luUmVxdWVzdDogJ2xvZ2luUmVxdWVzdCcsXHJcbiAgbG9naW5TdWNjZXNzOiAnbG9naW5TdWNjZXNzJyxcclxuICBsb2dpbkZhaWw6ICdsb2dpbkZhaWwnLFxyXG4gIGdldFRvZG9SZXF1ZXN0OiAnZ2V0VG9kb1JlcXVlc3QnLFxyXG4gIGFkZFRvZG9SZXF1ZXN0OiAnYWRkVG9kb1JlcXVlc3QnLFxyXG4gIGFkZFRvZG86ICdhZGRUb2RvJyxcclxuICBkZWxldGVUb2RvOiAnZGVsZXRlVG9kbycsXHJcbiAgZGVsZXRlVG9kb1JlcXVlc3Q6ICdkZWxldGVUb2RvUmVxdWVzdCcsXHJcbn1cclxuZXhwb3J0IGNvbnN0IGNoYW5nZURhdGExID0gZGF0YTEgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBQ1RJT05UWVBFLkNIQU5HRV9URVNUREFUQTEsXHJcbiAgICB0ZXN0RGF0YTogeyAuLi5zdGF0ZS50ZXN0RGF0YSwgZGF0YTEgfSxcclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IGNoYW5nZURhdGEyID0gZGF0YTIgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBQ1RJT05UWVBFLkNIQU5HRV9URVNUREFUQTIsXHJcbiAgICB0ZXN0RGF0YTogeyAuLi5zdGF0ZS50ZXN0RGF0YSwgZGF0YTIgfSxcclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IGNoYW5nZVVzZXJuYW1lID0gbmFtZSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFDVElPTlRZUEUuQ0hBTkdFX1VTRVJOQU1FLFxyXG4gICAgdXNlcjogeyBuYW1lIH0sXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBjaGFuZ2VUb2tlbiA9IHRva2VuID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQUNUSU9OVFlQRS5DSEFOR0VfVE9LRU4sXHJcbiAgICB0b2tlbixcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25SZXF1ZXN0ID0gKHR5cGUsIHBheWxvYWQ/KSA9PiAoe1xyXG4gIHR5cGUsXHJcbiAgcGF5bG9hZCxcclxufSlcclxuZXhwb3J0IGNvbnN0IGFkZFRvZG8gPSBwYXlsb2FkID0+ICh7XHJcbiAgdHlwZTogQWN0aW9uVHlwZXMuYWRkVG9kbyxcclxuICBwYXlsb2FkLFxyXG59KVxyXG5leHBvcnQgY29uc3QgZGVsZXRlVG9kbyA9IHBheWxvYWQgPT4gKHtcclxuICB0eXBlOiBBY3Rpb25UeXBlcy5kZWxldGVUb2RvLFxyXG4gIHBheWxvYWQsXHJcbn0pXHJcbiIsImltcG9ydCB7IEFDVElPTlRZUEUsIEFjdGlvblR5cGVzIH0gZnJvbSAnLi9hY3Rpb25zJ1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMsIEFueUFjdGlvbiB9IGZyb20gJ3JlZHV4J1xyXG5jb25zdCBjaGFuZ2VUZXN0RGF0YSA9IChzdGF0ZSA9IHsgZGF0YTE6ICdkYXRhMScsIGRhdGEyOiAnZGF0YTInIH0sIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQUNUSU9OVFlQRS5DSEFOR0VfVEVTVERBVEExOlxyXG4gICAgY2FzZSBBQ1RJT05UWVBFLkNIQU5HRV9URVNUREFUQTI6XHJcbiAgICAgIHJldHVybiB7IC4uLmFjdGlvbi50ZXN0RGF0YSB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuY29uc3QgY2hhbmdlVXNlcm5hbWUgPSAoc3RhdGUgPSB7IG5hbWU6ICdub3InIH0sIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQUNUSU9OVFlQRS5DSEFOR0VfVVNFUk5BTUU6XHJcbiAgICAgIHJldHVybiB7IC4uLmFjdGlvbi51c2VyIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG5jb25zdCBjaGFuZ2VUb2tlbiA9IChzdGF0ZSA9ICcnLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEFDVElPTlRZUEUuQ0hBTkdFX1RPS0VOOlxyXG4gICAgICByZXR1cm4gYWN0aW9uLnRva2VuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuY29uc3QgY2hhbmdlVGVzdERhdGExID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICByZXR1cm4gc3RhdGVcclxufVxyXG5leHBvcnQgY29uc3QgdG9kbyA9IChzdGF0ZTogYW55W10gPSBbXSwgYWN0aW9uOiBBbnlBY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEFjdGlvblR5cGVzLmFkZFRvZG86XHJcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZC5sZW5ndGggPiAxID8gWy4uLmFjdGlvbi5wYXlsb2FkXSA6IFsuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWRdXHJcbiAgICBjYXNlIEFjdGlvblR5cGVzLmRlbGV0ZVRvZG86XHJcbiAgICAgIHJldHVybiBbLi4uc3RhdGUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCAhPT0gYWN0aW9uLnBheWxvYWQpXVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcbmNvbnN0IHJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHsgdGVzdERhdGE6IGNoYW5nZVRlc3REYXRhLCB1c2VyOiBjaGFuZ2VVc2VybmFtZSwgdG9rZW46IGNoYW5nZVRva2VuLCB0b2RvIH0pXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJzXHJcbiIsImltcG9ydCB7IHRha2VFdmVyeSwgY2FsbCwgcHV0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xyXG5pbXBvcnQgR2FtZUFwcCBmcm9tICcuLi8uLi9jb3JlL2dhbWUvR2FtZUFwcCdcclxuaW1wb3J0IHsgYWRkVG9kbywgQWN0aW9uVHlwZXMsIGRlbGV0ZVRvZG8gfSBmcm9tICcuL2FjdGlvbnMnXHJcbmNvbnN0IGdldEFsbFRvZG8gPSBhc3luYyAoKSA9PiBHYW1lQXBwLmZldGNoLmdldCgnL2FsbCcpXHJcblxyXG5jb25zdCBwb3N0QWRkVG9kbyA9IGFzeW5jIHBheWxvYWQgPT5cclxuICBHYW1lQXBwLmZldGNoLnBvc3QoJy9hZGQnLCB7XHJcbiAgICBtZXNzYWdlOiBwYXlsb2FkLFxyXG4gIH0pXHJcblxyXG5jb25zdCBwb3N0RGVsZXRlVG9kbyA9IGFzeW5jIHBheWxvYWQgPT5cclxuICBHYW1lQXBwLmZldGNoLnBvc3QoJy9kZWxldGUnLCB7XHJcbiAgICBpZDogcGF5bG9hZCxcclxuICB9KVxyXG5cclxuZnVuY3Rpb24qIGdldFRvZG9zKCkge1xyXG4gIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZ2V0QWxsVG9kbylcclxuICB5aWVsZCBwdXQoYWRkVG9kbyhyZXN1bHQubWFwKGl0ZW0gPT4gKHsgaWQ6IGl0ZW0uaWQsIG1lc3NhZ2U6IGl0ZW0ubWVzc2FnZSB9KSkpKVxyXG59XHJcbmZ1bmN0aW9uKiBhZGRUb2RvcyhhY3Rpb24pIHtcclxuICBjb25zdCB7IGlkLCBtZXNzYWdlIH0gPSB5aWVsZCBjYWxsKHBvc3RBZGRUb2RvLCBhY3Rpb24ucGF5bG9hZClcclxuICB5aWVsZCBwdXQoYWRkVG9kbyhbeyBpZCwgbWVzc2FnZSB9XSkpXHJcbn1cclxuZnVuY3Rpb24qIGRlbGV0ZVRvZG9zKGFjdGlvbikge1xyXG4gIGNvbnN0IHsgaWQgfSA9IHlpZWxkIGNhbGwocG9zdERlbGV0ZVRvZG8sIGFjdGlvbi5wYXlsb2FkKVxyXG4gIHlpZWxkIHB1dChkZWxldGVUb2RvKGlkKSlcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hSZXF1ZXN0VG9kbygpIHtcclxuICB5aWVsZCB0YWtlRXZlcnkoQWN0aW9uVHlwZXMuZ2V0VG9kb1JlcXVlc3QsIGdldFRvZG9zKVxyXG4gIHlpZWxkIHRha2VFdmVyeShBY3Rpb25UeXBlcy5hZGRUb2RvUmVxdWVzdCwgYWRkVG9kb3MpXHJcbiAgeWllbGQgdGFrZUV2ZXJ5KEFjdGlvblR5cGVzLmRlbGV0ZVRvZG9SZXF1ZXN0LCBkZWxldGVUb2RvcylcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuICB5aWVsZCogW3dhdGNoUmVxdWVzdFRvZG8oKV1cclxufVxyXG4iLCJleHBvcnQgY29uc3Qgc3RhdGUgPSB7XHJcbiAgdG9rZW46ICdoZWxsbycsXHJcbiAgdXNlcjoge1xyXG4gICAgbmFtZTogJ3Rlc3QxJyxcclxuICB9LFxyXG4gIHRlc3REYXRhOiB7XHJcbiAgICBkYXRhMTogJ2RhdGExJyxcclxuICAgIGRhdGEyOiAnZGF0YTInLFxyXG4gICAgdGVzdERhdGEyOiB7XHJcbiAgICAgIGRhdGExOiAnMTExJyxcclxuICAgICAgdGVzdERhdGEzOiB7XHJcbiAgICAgICAgZGF0YTE6ICcyMjInLFxyXG4gICAgICAgIHRlc3REYXRhNDogJzMzMycsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdG9kbzogW10sXHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2VyJ1xyXG5pbXBvcnQgeyBzdGF0ZSB9IGZyb20gJy4vc3RhdGUnXHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJ1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi9zYWdhcydcclxuY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpXHJcbmNvbnN0IGVuaGFuY2VyID0gYXBwbHlNaWRkbGV3YXJlKHNhZ2FNaWRkbGV3YXJlKVxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCBzdGF0ZSBhcyBhbnksIGVuaGFuY2VyKVxyXG5zYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlXHJcbiIsImltcG9ydCB7IHVpIH0gZnJvbSAnLi4vLi4vLi4vLi4vdWkvbGF5YU1heFVJJ1xuaW1wb3J0IEJQYWdlIGZyb20gJy4uL0JQYWdlL0JQYWdlJ1xuaW1wb3J0IHsgVmlld0NvbnN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9jb25zdC9WaWV3Q29uc3QnXG5pbXBvcnQgeyBCYXNlTGF5ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL212Yy9sYXllci9CYXNlTGF5ZXInXG5pbXBvcnQgeyBSZWdpc3Rlck1WQywgb3BlblZpZXcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL212Yy9NdmNNZ3InXG5pbXBvcnQgQVBhZ2VDb250cm9sbGVyIGZyb20gJy4vQVBhZ2VDb250cm9sbGVyJ1xuaW1wb3J0IEFQYWdlTW9kZWwgZnJvbSAnLi9BcGFnZU1vZGVsJ1xuaW1wb3J0IEJhc2VUZXN0IGZyb20gJy4uL0Jhc2VUZXN0J1xuaW1wb3J0ICcuLi8uLi8uLi9zdG9yZS9zdG9yZSdcbmltcG9ydCBzdG9yZSBmcm9tICcuLi8uLi8uLi9zdG9yZS9zdG9yZSdcbmltcG9ydCB7IEFjdGlvblR5cGVzLCBhY3Rpb25SZXF1ZXN0LCBkZWxldGVUb2RvIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucydcbkBSZWdpc3Rlck1WQyhCYXNlTGF5ZXIsIEFQYWdlQ29udHJvbGxlciwgQVBhZ2VNb2RlbClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFQYWdlIGV4dGVuZHMgdWkudmlldy5BUGFnZVVJIHtcbiAgc3RhdGljIHZpZXdLZXkgPSBWaWV3Q29uc3QuQVBhZ2VcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuYnRuLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcbiAgICAgIG9wZW5WaWV3KEJQYWdlKVxuICAgIH0pXG4gICAgdGhpcy5iYXNlQnRuLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcbiAgICAgIG9wZW5WaWV3KEJhc2VUZXN0KVxuICAgIH0pXG5cbiAgICB0aGlzLnRvZG9MaXN0LnJlbmRlckhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMudXBkYXRlVG9kbylcbiAgICB0aGlzLnRvZG9MaXN0Lm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsIHRoaXMudG9kb0xpc3RDbGljaylcbiAgICB0aGlzLmFkZEJ0bi5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCB0aGlzLmFkZFRvZG8pXG4gIH1cbiAgcHJpdmF0ZSB1cGRhdGVUb2RvKGNlbGw6IExheWEuQm94LCBpbmRleCkge1xuICAgIGNvbnN0IGxhYmVsID0gY2VsbC5nZXRDaGlsZEJ5TmFtZSgnbGFiZWwnKSBhcyBMYXlhLkxhYmVsXG4gICAgY29uc3QgZGF0YVNvdXJjZSA9IGNlbGwuZGF0YVNvdXJjZVxuICAgIGxhYmVsLnRleHQgPSBkYXRhU291cmNlLm1lc3NhZ2VcbiAgfVxuICBwcml2YXRlIHRvZG9MaXN0Q2xpY2soZSkge1xuICAgIGlmIChlLnRhcmdldC52YXIgPT09ICdkZWxldGVCdG4nKSB7XG4gICAgICBjb25zdCBib3ggPSBlLnRhcmdldC5wYXJlbnQgYXMgTGF5YS5Cb3hcbiAgICAgIHN0b3JlLmRpc3BhdGNoKGFjdGlvblJlcXVlc3QoQWN0aW9uVHlwZXMuZGVsZXRlVG9kb1JlcXVlc3QsIGJveC5kYXRhU291cmNlLmlkKSlcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBhZGRUb2RvKCkge1xuICAgIGlmICh0aGlzLmFkZElucHV0LnRleHQgIT09ICcnKSB7XG4gICAgICBzdG9yZS5kaXNwYXRjaChhY3Rpb25SZXF1ZXN0KEFjdGlvblR5cGVzLmFkZFRvZG9SZXF1ZXN0LCB0aGlzLmFkZElucHV0LnRleHQpKVxuICAgICAgdGhpcy5hZGRJbnB1dC50ZXh0ID0gJydcbiAgICB9XG4gIH1cbiAgcHVibGljIGluaXQoKSB7XG4gICAgLy8gdGhpcy5jb250cm9sbGVyLmFkZExpc3RlbmVyKFxuICAgIC8vICAgJ2NoYW5nZScsXG4gICAgLy8gICBhcmdzID0+IHtcbiAgICAvLyAgICAgdGhpcy5jb250ZW50cy50ZXh0ID0gYXJnc1swXVxuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyh0aGlzKVxuICAgIC8vICAgfSxcbiAgICAvLyAgIHRoaXMsXG4gICAgLy8gKVxuICB9XG5cbiAgcHVibGljIHVwZGF0ZVZpZXcoKSB7XG4gICAgY29uc3QgeyB1c2VyLCB0b2tlbiwgdGVzdERhdGEsIHRvZG8gfSA9IHN0b3JlLmdldFN0YXRlKClcbiAgICB0aGlzLmNvbnRlbnRzLnRleHQgPSB0ZXN0RGF0YS5kYXRhMVxuICAgIC8vIHRoaXMudXNlcm5hbWUudGV4dCA9IHVzZXIubmFtZVxuICAgIC8vIHRoaXMudG9rZW4udGV4dCA9IHRva2VuXG4gICAgdGhpcy50b2RvTGlzdC5hcnJheSA9IHRvZG9cbiAgfVxuICBwdWJsaWMgb3BlbkNiKGFyZ3MpIHtcbiAgICBzdXBlci5vcGVuQ2IoKVxuICAgIHZhciBodG1sID0gXCI8c3BhbiBzdHlsZT0nZm9udFNpemU6MzAnIGNvbG9yPScjNjdmYzJjJz7lr4zmlofmnKw8L3NwYW4+XCJcbiAgICBodG1sICs9IFwiPGltZyBzdHlsZT0naGVpZ2h0OjUwO3dpZHRoOjUwJyBzcmM9J0NoYXJhY3RlcnMvVGFua180LnBuZyc+PC9pbWc+XCJcbiAgICBodG1sICs9IFwiPHNwYW4gc3R5bGU9J2ZvbnRTaXplOjIwJyBjb2xvcj0nI2ZmZic+5rWL6K+VPC9zcGFuPlwiXG4gICAgdGhpcy5kZC5wb3MoMCwgMClcbiAgICB0aGlzLmRkLnN0eWxlLndpZHRoID0gNjQwXG4gICAgdGhpcy5kZC5zdHlsZS5hbGlnbiA9ICdjZW50ZXInXG5cbiAgICB0aGlzLmRkLmlubmVySFRNTCA9IGh0bWxcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRkKVxuXG4gICAgc3RvcmUuZGlzcGF0Y2goYWN0aW9uUmVxdWVzdChBY3Rpb25UeXBlcy5nZXRUb2RvUmVxdWVzdCkpXG4gIH1cbn1cbiIsImltcG9ydCBCYXNlQ29udHJvbGxlciBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL212Yy9jb250cm9sbGVyL0Jhc2VDb250cm9sbGVyJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVBhZ2VDb250cm9sbGVyIGV4dGVuZHMgQmFzZUNvbnRyb2xsZXIge1xuICAvKipcbiAgICpcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgfVxuICBwdWJsaWMgaW5pdCgpIHtcbiAgICBzdXBlci5pbml0KClcbiAgfVxuXG59XG4iLCJpbXBvcnQgQmFzZU1vZGVsIGZyb20gXCIuLi8uLi8uLi8uLi9jb3JlL212Yy9tb2RlbC9CYXNlTW9kZWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVBhZ2VNb2RlbCBleHRlbmRzIEJhc2VNb2RlbHtcbiAgICBcbn0iLCJpbXBvcnQgQVBhZ2UgZnJvbSBcIi4vQVBhZ2VcIjtcbmltcG9ydCBHYW1lQXBwIGZyb20gXCIuLi8uLi8uLi8uLi9jb3JlL2dhbWUvR2FtZUFwcFwiO1xuaW1wb3J0IEVmZmVjdFV0aWxzIGZyb20gXCIuLi8uLi8uLi8uLi9jb3JlL1V0aWxzL0VmZmVjdFV0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3QgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XG4gICAgLy8gLyoqIEBwcm9wIHtuYW1lOmludFR5cGUsIHRpcHM6XCLmlbTmlbDnsbvlnovnpLrkvotcIiwgdHlwZTpJbnQsIGRlZmF1bHQ6MTAwMH0qL1xuICAgIC8vIHB1YmxpYyBpbnRUeXBlOiBudW1iZXIgPSAxMDAwO1xuICAgIC8vIC8qKiBAcHJvcCB7bmFtZTpudW1UeXBlLCB0aXBzOlwi5pWw5a2X57G75Z6L56S65L6LXCIsIHR5cGU6TnVtYmVyLCBkZWZhdWx0OjEwMDB9Ki9cbiAgICAvLyBwdWJsaWMgbnVtVHlwZTogbnVtYmVyID0gMTAwMDtcbiAgICAvLyAvKiogQHByb3Age25hbWU6c3RyVHlwZSwgdGlwczpcIuWtl+espuS4suexu+Wei+ekuuS+i1wiLCB0eXBlOlN0cmluZywgZGVmYXVsdDpcImhlbGxvIGxheWFcIn0qL1xuICAgIC8vIHB1YmxpYyBzdHJUeXBlOiBzdHJpbmcgPSBcImhlbGxvIGxheWFcIjtcbiAgICAvLyAvKiogQHByb3Age25hbWU6Ym9vbFR5cGUsIHRpcHM6XCLluIPlsJTnsbvlnovnpLrkvotcIiwgdHlwZTpCb29sLCBkZWZhdWx0OnRydWV9Ki9cbiAgICAvLyBwdWJsaWMgYm9vbFR5cGU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIC8vIOabtOWkmuWPguaVsOivtOaYjuivt+iuv+mXrjogaHR0cHM6Ly9sZGMyLmxheWFib3guY29tL2RvYy8/bmF2PXpoLWFzLTItNC0wXG4gICAgXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cbiAgICBvbkF3YWtlKCl7XG4gICAgICAgIHRoaXMub3duZXIub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLCgpPT57XG4gICAgICAgIEVmZmVjdFV0aWxzLm1hY0ljb25TaGFrZSh0aGlzLm93bmVyLCh0aGlzLm93bmVyIGFzIExheWEuU3ByaXRlKS55LCgpPT57Y29uc29sZS5sb2coMSl9LHRoaXMgKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBvbkRpc2FibGUoKTogdm9pZCB7XG4gICAgfVxufSIsImltcG9ydCB7IHVpIH0gZnJvbSAnLi4vLi4vLi4vLi4vdWkvbGF5YU1heFVJJ1xuaW1wb3J0IHsgVmlld0NvbnN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9jb25zdC9WaWV3Q29uc3QnXG5pbXBvcnQgeyBEaWFsb2dMYXllciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvbXZjL2xheWVyL0RpYWxvZ0xheWVyJ1xuaW1wb3J0IEJQYWdlQ29udHJvbGxlciBmcm9tICcuL0JQYWdlQ29udHJvbGxlcidcbmltcG9ydCBCUGFnZU1vZGVsIGZyb20gJy4vQlBhZ2VNb2RlbCdcbmltcG9ydCB7IFJlZ2lzdGVyTVZDLCBjbG9zZVZpZXcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL212Yy9NdmNNZ3InXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vLi4vLi4vc3RvcmUvc3RvcmUnXG5pbXBvcnQgeyBjaGFuZ2VEYXRhMSB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMnXG5AUmVnaXN0ZXJNVkMoRGlhbG9nTGF5ZXIsIEJQYWdlQ29udHJvbGxlciwgQlBhZ2VNb2RlbClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJQYWdlIGV4dGVuZHMgdWkudmlldy5CUGFnZVVJIHtcbiAgc3RhdGljIHZpZXdLZXkgPSBWaWV3Q29uc3QuQlBhZ2VcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICB9XG4gIHB1YmxpYyBpbml0KCkge1xuICAgIHRoaXMuY2xvc2VfYnRuLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcbiAgICAgIGNsb3NlVmlldyh0aGlzKVxuICAgIH0pXG4gICAgdGhpcy5jaGFuZ2Uub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCkgPT4ge1xuICAgICAgLy8gdGhpcy5jb250cm9sbGVyLmRpc3BhdGNoKCdjaGFuZ2UnLCBbJyNlZTMzMjEnXSlcbiAgICAgIHN0b3JlLmRpc3BhdGNoKGNoYW5nZURhdGExKCdoZWxsbyB3b3JsZCcpKVxuICAgIH0pXG4gIH1cbiAgcHVibGljIHVwZGF0ZVZpZXcoKSB7XG4gICAgY29uc3QgeyB1c2VyLCB0b2tlbiwgdGVzdERhdGEgfSA9IHN0b3JlLmdldFN0YXRlKClcbiAgICB0aGlzLnVzZXJuYW1lLnRleHQgPSB1c2VyLm5hbWVcbiAgICB0aGlzLnRva2VuLnRleHQgPSB0b2tlblxuICB9XG59XG4iLCJpbXBvcnQgQmFzZUNvbnRyb2xsZXIgZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9tdmMvY29udHJvbGxlci9CYXNlQ29udHJvbGxlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQlBhZ2VDb250cm9sbGVyIGV4dGVuZHMgQmFzZUNvbnRyb2xsZXIge1xuICAvKipcbiAgICpcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgfVxuICBwdWJsaWMgaW5pdCgpIHtcbiAgICBzdXBlci5pbml0KClcbiAgfVxufVxuIiwiaW1wb3J0IEJhc2VNb2RlbCBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL212Yy9tb2RlbC9CYXNlTW9kZWwnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJQYWdlTW9kZWwgZXh0ZW5kcyBCYXNlTW9kZWwge1xuICBwdWJsaWMgY29sb3I6IHN0cmluZ1xufVxuIiwiaW1wb3J0IHsgdWkgfSBmcm9tICcuLi8uLi8uLi91aS9sYXlhTWF4VUknXG5pbXBvcnQgeyBJVmlldyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvbXZjL2ludGVyZmFjZS9JVmlldydcbmltcG9ydCB7IFZpZXdDb25zdCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvY29uc3QvVmlld0NvbnN0J1xuaW1wb3J0IHsgQmFzZUxheWVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvbGF5ZXIvQmFzZUxheWVyJ1xuaW1wb3J0IERpYWxvZ1Rlc3QgZnJvbSAnLi9EaWFsb2dUZXN0J1xuaW1wb3J0IFZpZXdUZXN0IGZyb20gJy4vVmlld1Rlc3QnXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuL0xvYWRpbmcnXG5pbXBvcnQgeyBSZWdpc3Rlck1WQywgb3BlblZpZXcsIGNsb3NlVmlldyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvbXZjL012Y01ncidcbmltcG9ydCB7IENsaWNrIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvVUlFdmVudCdcbmltcG9ydCBHYW1lQXBwIGZyb20gJy4uLy4uLy4uL2NvcmUvZ2FtZS9HYW1lQXBwJ1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uLy4uL3N0b3JlL3N0b3JlJ1xuaW1wb3J0IHsgY2hhbmdlVG9rZW4sIGNoYW5nZVVzZXJuYW1lIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucydcbkBSZWdpc3Rlck1WQyhCYXNlTGF5ZXIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlVGVzdCBleHRlbmRzIHVpLnZpZXcuQmFzZVRlc3RVSSBpbXBsZW1lbnRzIElWaWV3IHtcbiAgc3RhdGljIHZpZXdLZXkgPSBWaWV3Q29uc3QuQmFzZVRlc3RcbiAgcHVibGljIG1vdmVZID0gZmFsc2VcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMudGltZXJMb29wKDUwMCwgdGhpcywgKCkgPT4ge1xuICAgICAgdGhpcy50YW5rLmluZGV4ID0gdGhpcy50YW5rLmluZGV4ID09PSA3ID8gNCA6IHRoaXMudGFuay5pbmRleCArIDFcbiAgICB9KVxuICAgIHRoaXMudGltZXJMb29wKDI1MCwgdGhpcywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMubW92ZVkpIHtcbiAgICAgICAgdGhpcy50YW5rLmNlbnRlclkgKz0gMVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50YW5rLmNlbnRlclkgLT0gMVxuICAgICAgfVxuICAgICAgdGhpcy5tb3ZlWSA9ICF0aGlzLm1vdmVZXG4gICAgfSlcblxuICAgIHRoaXMuZGlhbG9nQnRuLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHt9KVxuICAgIHRoaXMudmlld0J0bi5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKSA9PiB7XG4gICAgICBvcGVuVmlldyhWaWV3VGVzdCwgMSwgMilcbiAgICB9KVxuICAgIHRoaXMubG9hZGluZ0J0bi5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKSA9PiB7XG4gICAgICBvcGVuVmlldyhMb2FkaW5nLCAxLCAyLCAzKVxuICAgIH0pXG4gICAgdGhpcy5jbG9zZUJ0bi5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKSA9PiB7XG4gICAgICBjbG9zZVZpZXcodGhpcylcbiAgICB9KVxuICB9XG4gIEBDbGljaygnZGlhbG9nQnRuJylcbiAgQENsaWNrKCdsb2FkaW5nQnRuJywgMSwgMiwgMywgNClcbiAgcHJpdmF0ZSBhc3luYyB0b2RvMSguLi50eXBlKSB7XG4gICAgc3RvcmUuZGlzcGF0Y2goY2hhbmdlVG9rZW4oTWF0aC5yYW5kb20oKSkpXG4gICAgc3RvcmUuZGlzcGF0Y2goY2hhbmdlVXNlcm5hbWUoTWF0aC5yYW5kb20oKSkpXG4gICAgY29uc29sZS5sb2codHlwZSlcbiAgICBjb25zb2xlLmxvZyhhd2FpdCBHYW1lQXBwLmZldGNoLnBvc3QoJ2dldCcsIHsgYTogWzEsIDJdLCBjOiAnaGFoYWhhaGEnIH0pKVxuICB9XG4gIHB1YmxpYyBvcGVuQ2IoKSB7XG4gICAgc3VwZXIub3BlbkNiKClcbiAgICBjb25zb2xlLmxvZygnQmFzZVRlc3Qgb3BlbicpXG4gIH1cbiAgcHVibGljIHVwZGF0ZVZpZXcoKSB7XG4gICAgY29uc3QgeyB1c2VyLCB0b2tlbiwgdGVzdERhdGEgfSA9IHN0b3JlLmdldFN0YXRlKClcbiAgICB0aGlzLnVzZXJuYW1lLnRleHQgPSB1c2VyLm5hbWVcbiAgICB0aGlzLnRva2VuLnRleHQgPSB0b2tlblxuICB9XG59XG4iLCJpbXBvcnQgeyB1aSB9IGZyb20gJy4uLy4uLy4uL3VpL2xheWFNYXhVSSdcclxuaW1wb3J0IHsgSVZpZXcgfSBmcm9tICcuLi8uLi8uLi9jb3JlL212Yy9pbnRlcmZhY2UvSVZpZXcnXHJcbmltcG9ydCB7IFZpZXdDb25zdCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvY29uc3QvVmlld0NvbnN0J1xyXG5pbXBvcnQgeyBCYXNlTGF5ZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL212Yy9sYXllci9CYXNlTGF5ZXInXHJcbmltcG9ydCB7IFJlZ2lzdGVyTVZDLCBjbG9zZVZpZXcgfSBmcm9tICcuLi8uLi8uLi9jb3JlL212Yy9NdmNNZ3InXHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi8uLi9zdG9yZS9zdG9yZSdcclxuQFJlZ2lzdGVyTVZDKEJhc2VMYXllcilcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGluZyBleHRlbmRzIHVpLnZpZXcuTG9hZGluZ1VJIGltcGxlbWVudHMgSVZpZXcge1xyXG4gIHN0YXRpYyB2aWV3S2V5ID0gVmlld0NvbnN0LkxvYWRpbmdcclxuICBwdWJsaWMgbW92ZVkgPSBmYWxzZVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy50aW1lckxvb3AoNTAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMudGFuay5pbmRleCA9IHRoaXMudGFuay5pbmRleCA9PT0gNyA/IDQgOiB0aGlzLnRhbmsuaW5kZXggKyAxXHJcbiAgICB9KVxyXG4gICAgdGhpcy50aW1lckxvb3AoMjUwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLm1vdmVZKSB7XHJcbiAgICAgICAgdGhpcy50YW5rLmNlbnRlclkgKz0gMVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGFuay5jZW50ZXJZIC09IDFcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm1vdmVZID0gIXRoaXMubW92ZVlcclxuICAgIH0pXHJcbiAgICB0aGlzLmJ0bl9jbG9zZS5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgIGNsb3NlVmlldyh0aGlzKVxyXG4gICAgfSlcclxuICB9XHJcbiAgcHVibGljIG9wZW5DYiguLi5hcmdzKSB7XHJcbiAgICBzdXBlci5vcGVuQ2IoKVxyXG4gICAgY29uc29sZS5sb2coJ0xvYWRpbmcgb3BlbicsIGFyZ3MpXHJcbiAgfVxyXG4gIHB1YmxpYyB1cGRhdGVWaWV3KCkge1xyXG4gICAgY29uc3QgeyB1c2VyLCB0b2tlbiwgdGVzdERhdGEgfSA9IHN0b3JlLmdldFN0YXRlKClcclxuICAgIHRoaXMudXNlcm5hbWUudGV4dCA9IHVzZXIubmFtZVxyXG4gICAgdGhpcy50b2tlbi50ZXh0ID0gdG9rZW5cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgdWkgfSBmcm9tICcuLi8uLi8uLi91aS9sYXlhTWF4VUknXG5pbXBvcnQgeyBJVmlldyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvbXZjL2ludGVyZmFjZS9JVmlldydcbmltcG9ydCB7IFZpZXdDb25zdCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvY29uc3QvVmlld0NvbnN0J1xuaW1wb3J0IHsgVmlld0xheWVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvbGF5ZXIvVmlld0xheWVyJ1xuaW1wb3J0IFZpZXdUZXN0MSBmcm9tICcuL1ZpZXdUZXN0MSdcbmltcG9ydCB7IFJlZ2lzdGVyTVZDLCBjbG9zZVZpZXcsIG9wZW5WaWV3IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvTXZjTWdyJ1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uLy4uL3N0b3JlL3N0b3JlJ1xuQFJlZ2lzdGVyTVZDKFZpZXdMYXllcilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdUZXN0IGV4dGVuZHMgdWkudmlldy5WaWV3VGVzdFVJIGltcGxlbWVudHMgSVZpZXcge1xuICBzdGF0aWMgdmlld0tleSA9IFZpZXdDb25zdC5WaWV3VGVzdFxuICBwdWJsaWMgbW92ZVkgPSBmYWxzZVxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLnRpbWVyTG9vcCg1MDAsIHRoaXMsICgpID0+IHtcbiAgICAgIHRoaXMudGFuay5pbmRleCA9IHRoaXMudGFuay5pbmRleCA9PT0gNyA/IDQgOiB0aGlzLnRhbmsuaW5kZXggKyAxXG4gICAgfSlcbiAgICB0aGlzLnRpbWVyTG9vcCgyNTAsIHRoaXMsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLm1vdmVZKSB7XG4gICAgICAgIHRoaXMudGFuay5jZW50ZXJZICs9IDFcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGFuay5jZW50ZXJZIC09IDFcbiAgICAgIH1cbiAgICAgIHRoaXMubW92ZVkgPSAhdGhpcy5tb3ZlWVxuICAgIH0pXG4gICAgdGhpcy5jbG9zZUJ0bi5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKSA9PiB7XG4gICAgICBjbG9zZVZpZXcodGhpcylcbiAgICB9KVxuICAgIHRoaXMudmlld0J0bi5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKSA9PiB7XG4gICAgICBvcGVuVmlldyhWaWV3VGVzdDEpXG4gICAgfSlcbiAgfVxuICBwdWJsaWMgb3BlbkNiKCkge1xuICAgIHN1cGVyLm9wZW5DYigpXG4gICAgY29uc29sZS5sb2coJ1ZpZXdUZXN0IG9wZW4nKVxuICB9XG4gIHB1YmxpYyB1cGRhdGVWaWV3KCkge1xuICAgIGNvbnN0IHsgdXNlciwgdG9rZW4sIHRlc3REYXRhIH0gPSBzdG9yZS5nZXRTdGF0ZSgpXG4gICAgdGhpcy51c2VybmFtZS50ZXh0ID0gdXNlci5uYW1lXG4gICAgdGhpcy50b2tlbi50ZXh0ID0gdG9rZW5cbiAgfVxufVxuIiwiaW1wb3J0IHsgdWkgfSBmcm9tICcuLi8uLi8uLi91aS9sYXlhTWF4VUknXG5pbXBvcnQgeyBJVmlldyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvbXZjL2ludGVyZmFjZS9JVmlldydcbmltcG9ydCB7IFZpZXdDb25zdCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvY29uc3QvVmlld0NvbnN0J1xuaW1wb3J0IHsgVmlld0xheWVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvbGF5ZXIvVmlld0xheWVyJ1xuaW1wb3J0IHsgUmVnaXN0ZXJNVkMsIGNsb3NlVmlldyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvbXZjL012Y01ncidcbmltcG9ydCBzdG9yZSBmcm9tICcuLi8uLi9zdG9yZS9zdG9yZSdcbkBSZWdpc3Rlck1WQyhWaWV3TGF5ZXIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3VGVzdDEgZXh0ZW5kcyB1aS52aWV3LlZpZXdUZXN0MVVJIGltcGxlbWVudHMgSVZpZXcge1xuICBzdGF0aWMgdmlld0tleSA9IFZpZXdDb25zdC5WaWV3VGVzdDFcbiAgcHVibGljIG1vdmVZID0gZmFsc2VcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgdGhpcy50aW1lckxvb3AoNTAwLCB0aGlzLCAoKSA9PiB7XG4gICAgICB0aGlzLnRhbmsuaW5kZXggPSB0aGlzLnRhbmsuaW5kZXggPT09IDcgPyA0IDogdGhpcy50YW5rLmluZGV4ICsgMVxuICAgIH0pXG4gICAgdGhpcy50aW1lckxvb3AoMjUwLCB0aGlzLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5tb3ZlWSkge1xuICAgICAgICB0aGlzLnRhbmsuY2VudGVyWSArPSAxXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRhbmsuY2VudGVyWSAtPSAxXG4gICAgICB9XG4gICAgICB0aGlzLm1vdmVZID0gIXRoaXMubW92ZVlcbiAgICB9KVxuICAgIHRoaXMuY2xvc2VCdG4ub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCkgPT4ge1xuICAgICAgY2xvc2VWaWV3KHRoaXMpXG4gICAgfSlcbiAgfVxuICBwdWJsaWMgb3BlbkNiKCkge1xuICAgIHN1cGVyLm9wZW5DYigpXG4gICAgY29uc29sZS5sb2coJ1ZpZXdUZXN0IG9wZW4nKVxuICB9XG4gIHB1YmxpYyB1cGRhdGVWaWV3KCkge1xuICAgIGNvbnN0IHsgdXNlciwgdG9rZW4sIHRlc3REYXRhIH0gPSBzdG9yZS5nZXRTdGF0ZSgpXG4gICAgdGhpcy51c2VybmFtZS50ZXh0ID0gdXNlci5uYW1lXG4gICAgdGhpcy50b2tlbi50ZXh0ID0gdG9rZW5cbiAgfVxufVxuIiwiZW51bSBIdHRwTWV0aG9kIHtcclxuICBnZXQgPSAnR0VUJyxcclxuICBwb3N0ID0gJ1BPU1QnLFxyXG59XHJcbmV4cG9ydCBjbGFzcyBGZXRjaCB7XHJcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJydcclxuICBwcml2YXRlIGNvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOCdcclxuICBzdGF0aWMgZmV0Y2hNYXAgPSBuZXcgTWFwKClcclxuICBjb25zdHJ1Y3Rvcih7IHVybCB9KSB7XHJcbiAgICB0aGlzLmJhc2VVcmwgPSB1cmxcclxuICB9XHJcbiAgcHVibGljIHN0YXRpYyBpbml0KGtleSwgeyB1cmwgfSkge1xyXG4gICAgbGV0IGZldGNoID0gdGhpcy5mZXRjaE1hcC5nZXQoa2V5KVxyXG4gICAgaWYgKCFmZXRjaCkge1xyXG4gICAgICBmZXRjaCA9IG5ldyBGZXRjaCh7IHVybCB9KVxyXG4gICAgICB0aGlzLmZldGNoTWFwLnNldChrZXksIGZldGNoKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZldGNoXHJcbiAgfVxyXG4gIHByaXZhdGUgYXN5bmMgc2VuZChhcGk6IHN0cmluZywgeyBib2R5LCBtZXRob2QgfSkge1xyXG4gICAgbGV0IHVybCA9IHRoaXMuYmFzZVVybCArIGFwaVxyXG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6IHRoaXMuY29udGVudFR5cGUsXHJcbiAgICB9KVxyXG4gICAgbGV0IHJlczogUmVzcG9uc2VcclxuICAgIHN3aXRjaCAobWV0aG9kKSB7XHJcbiAgICAgIGNhc2UgSHR0cE1ldGhvZC5nZXQ6XHJcbiAgICAgICAgaWYgKGJvZHkpIHtcclxuICAgICAgICAgIHVybCArPVxyXG4gICAgICAgICAgICAnPycgK1xyXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhib2R5KVxyXG4gICAgICAgICAgICAgIC5tYXAoaXRlbSA9PiBpdGVtLmpvaW4oJz0nKSlcclxuICAgICAgICAgICAgICAuam9pbignJicpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlcyA9IGF3YWl0IGZldGNoKHVybCwgeyBoZWFkZXJzLCBtZXRob2QgfSlcclxuICAgICAgICBicmVha1xyXG4gICAgICBjYXNlIEh0dHBNZXRob2QucG9zdDpcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIHsgYm9keSwgaGVhZGVycywgbWV0aG9kIH0pXHJcbiAgICAgICAgYnJlYWtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnJlc0hhbmRsZShyZXMpXHJcbiAgfVxyXG4gIHB1YmxpYyBhc3luYyBnZXQoYXBpOiBzdHJpbmcsIHBhcmFtczogYW55ID0gdW5kZWZpbmVkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZW5kKGFwaSwgeyBib2R5OiBwYXJhbXMsIG1ldGhvZDogSHR0cE1ldGhvZC5nZXQgfSlcclxuICB9XHJcbiAgcHVibGljIGFzeW5jIHBvc3QoYXBpOiBzdHJpbmcsIGJvZHk6IGFueSA9IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VuZChhcGksIHsgYm9keTogYm9keSA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogdW5kZWZpbmVkLCBtZXRob2Q6IEh0dHBNZXRob2QucG9zdCB9KVxyXG4gIH1cclxuICBwcml2YXRlIHJlc0hhbmRsZShyZXM6IFJlc3BvbnNlKSB7XHJcbiAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlcy5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJylcclxuICAgIGlmIChjb250ZW50VHlwZSkge1xyXG4gICAgICBpZiAoY29udGVudFR5cGUuaW5kZXhPZignanNvbicpID4gLTEpIHtcclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzLnRleHQoKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTaW5nbGV0b24gfSBmcm9tICcuLi9jb3JlL2Jhc2UvU2luZ2xldG9uJ1xuaW1wb3J0IHsgT2JzZXJ2ZXIgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2UvZGlzcGF0Y2hlci9PYnNlcnZlcidcbmltcG9ydCAqIGFzIGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnXG4vKlxuICAgc29ja2V0LmluaXQoLi4uKVxuICAgc29ja2V0LmNvbm5lY3QoKVxuKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvY2tldCBleHRlbmRzIFNpbmdsZXRvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9ic2VydmVycyA9IHt9XG4gIH1cbiAgcHJpdmF0ZSBub25jZT0xXG4gIHByaXZhdGUgaXBBZGRyZXNzXG4gIHByaXZhdGUgc29ja2V0OiBhbnlcbiAgcHJpdmF0ZSBvYnNlcnZlcnM6IGFueVxuICBwcml2YXRlIHRpbWVTdGFtcFxuICAvL2hhbmRsZXItLS0tXG4gIHByaXZhdGUgY29ubmVjdFN1Y2Nlc3NDYWxsYmFja1xuICBwcml2YXRlIGNvbm5lY3RGYWlsZWRDYWxsYmFja1xuICBwcml2YXRlIGhlYXJ0YmVhdEZhaWxlZENhbGxiYWNrXG4gIHByaXZhdGUgZXZlbnQgPSAnbWVzc2FnZSdcbiAgcHVibGljIGluaXQoaXAsIHN1Y2Nlc3NDYWxsYmFjaywgZmFpbGVkQ2FsbGJhY2ssIGhlYXJ0YmVhdEZhaWxlZENhbGxiYWNrKSB7XG4gICAgdGhpcy5pcEFkZHJlc3MgPSBpcFxuICAgIHRoaXMuY29ubmVjdFN1Y2Nlc3NDYWxsYmFjayA9IHN1Y2Nlc3NDYWxsYmFja1xuICAgIHRoaXMuY29ubmVjdEZhaWxlZENhbGxiYWNrID0gZmFpbGVkQ2FsbGJhY2tcbiAgICB0aGlzLmhlYXJ0YmVhdEZhaWxlZENhbGxiYWNrID0gaGVhcnRiZWF0RmFpbGVkQ2FsbGJhY2tcbiAgfVxuICBwdWJsaWMgY29ubmVjdCgpIHtcbiAgICB0aGlzLnNvY2tldCA9IGlvKHRoaXMuaXBBZGRyZXNzKVxuICAgIHRoaXMuc29ja2V0Lm9uKCdjb25uZWN0JywgKCkgPT4ge1xuICAgICAgdGhpcy50aW1lU3RhbXAgPSBEYXRlLm5vdygpXG4gICAgICBjb25zb2xlLmxvZygnd2Vic29ja2V0IGNvbm5lY3QuLi4nKVxuICAgICAgdGhpcy5jb25uZWN0U3VjY2VzcygpXG4gICAgfSlcbiAgICB0aGlzLnNvY2tldC5vbih0aGlzLmV2ZW50LCBkYXRhID0+IHtcbiAgICAgIHRoaXMudGltZVN0YW1wID0gRGF0ZS5ub3coKVxuICAgICAgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgICB0aGlzLnJlY2VpdmVNZXNzYWdlKEpTT04ucGFyc2UoZGF0YSkpXG4gICAgfSlcbiAgICB0aGlzLnNvY2tldC5vbignZGlzY29ubmVjdCcsIHRoaXMub25EaXNjb25uZWN0KVxuICB9XG4gIHB1YmxpYyBkaXNjb25uZWN0KCkge1xuICAgIHRoaXMuc29ja2V0LmRpc2Nvbm5lY3QoKVxuICB9XG4gIHByaXZhdGUgb25EaXNjb25uZWN0KCkge1xuICAgIGlmICh0aGlzLmNvbm5lY3RGYWlsZWRDYWxsYmFjaykgdGhpcy5jb25uZWN0RmFpbGVkQ2FsbGJhY2soKVxuICB9XG4gIHByaXZhdGUgY29ubmVjdFN1Y2Nlc3MoKSB7XG4gICAgaWYgKHRoaXMuY29ubmVjdFN1Y2Nlc3NDYWxsYmFjaykgdGhpcy5jb25uZWN0U3VjY2Vzc0NhbGxiYWNrKClcbiAgICB0aGlzLnNlbmQoJ2xvZ2luJywge30sICdDMlNfbG9naW4nKVxuICAgIHRoaXMuc3RhcnRIZWFydEJlYXQoKVxuICB9XG4gIHByaXZhdGUgc3RhcnRIZWFydEJlYXQoKSB7XG4gICAgTGF5YS50aW1lci5sb29wKDUwMDAsIHRoaXMsICgpID0+IHtcbiAgICAgIHRoaXMuc2VuZEhlYXJ0QmVhdCgpXG4gICAgfSlcbiAgfVxuICBwcml2YXRlIHNlbmRIZWFydEJlYXQoKSB7XG4gICAgdmFyIHYgPSBEYXRlLm5vdygpIC0gdGhpcy50aW1lU3RhbXBcblxuICAgIGlmICh2ID49IDMwMDAwKSB7XG4gICAgICBpZiAodGhpcy5oZWFydGJlYXRGYWlsZWRDYWxsYmFjaykgdGhpcy5oZWFydGJlYXRGYWlsZWRDYWxsYmFjaygpXG4gICAgfVxuICAgIHRoaXMuc2VuZCgnaGVhcnRiZWF0Jywge30sICdDMlNfaGVhcnRiZWF0JylcbiAgfVxuICBwcml2YXRlIHJlY2VpdmVNZXNzYWdlKGRhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhkYXRhLmhlYWRlcnMubm9uY2UpXG4gICAgaWYgKGRhdGEuaGVhZGVycy5ub25jZSAmJiBkYXRhLmhlYWRlcnMubm9uY2Uuc3RhcnRzV2l0aCgnUzJDXycpKSB7XG4gICAgICBmb3IgKGxldCBrIGluIHRoaXMub2JzZXJ2ZXJzKSB7XG4gICAgICAgIGlmIChkYXRhLmhlYWRlcnMuZnVuY19uYW1lID09IGspIHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVyc1trXS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5SZWN2TXNnKGRhdGEpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBrIGluIHRoaXMub2JzZXJ2ZXJzKSB7XG4gICAgICAgIGlmIChkYXRhLmhlYWRlcnMubm9uY2UgPT0gaykge1xuICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzW2tdLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LlJlY3ZNc2coZGF0YSlcbiAgICAgICAgICB9KVxuICAgICAgICAgIGRlbGV0ZSB0aGlzLm9ic2VydmVyc1trXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHB1YmxpYyBzZW5kTWVzc2FnZShmdW5jTmFtZSwgb2JzZXJ2ZXIsIGRhdGEsIGNhbGxiYWNrID0gbnVsbCkge1xuICAgIHZhciBub25jZSA9ICdDMlNfJyArIGZ1bmNOYW1lICsgdGhpcy5ub25jZSsrXG4gICAgaWYgKCF0aGlzLm9ic2VydmVyc1tub25jZV0pIHRoaXMub2JzZXJ2ZXJzW25vbmNlXSA9IFtdXG4gICAgdGhpcy5vYnNlcnZlcnNbbm9uY2VdLnB1c2gobmV3IE9ic2VydmVyKG5vbmNlLCBvYnNlcnZlciwgY2FsbGJhY2spKVxuICAgIHRoaXMuc2VuZChmdW5jTmFtZSwgZGF0YSwgbm9uY2UpXG4gIH1cbiAgcHVibGljIG9ic2VydmVyTWVzc2FnZShmdW5jTmFtZSwgb2JzZXJ2ZXIsIGNhbGxiYWNrID0gbnVsbCkge1xuICAgIHZhciBrZXkgPSBmdW5jTmFtZVxuICAgIGlmICghdGhpcy5vYnNlcnZlcnNba2V5XSkgdGhpcy5vYnNlcnZlcnNba2V5XSA9IFtdXG4gICAgdmFyIG9icyA9IG5ldyBPYnNlcnZlcihrZXksIG9ic2VydmVyLCBjYWxsYmFjaylcbiAgICB0aGlzLm9ic2VydmVyc1trZXldLnB1c2gob2JzKVxuICAgIHJldHVybiBvYnNcbiAgfVxuICBwdWJsaWMgcmVtb3ZlKG9iczogT2JzZXJ2ZXIpIHtcbiAgICBpZiAob2JzID09IG51bGwpIHJldHVyblxuICAgIGxldCBhcnIgPSB0aGlzLm9ic2VydmVyc1tvYnMudG9waWNdXG4gICAgaWYgKCFhcnIpIHJldHVybiBudWxsXG4gICAgbGV0IGluZDogbnVtYmVyID0gYXJyLmluZGV4T2Yob2JzKVxuICAgIGlmIChpbmQgPCAwKSByZXR1cm4gbnVsbFxuICAgIGFyci5zcGxpY2UoaW5kLCAxKVxuICAgIGlmIChhcnIubGVuZ3RoID09IDApIGRlbGV0ZSB0aGlzLm9ic2VydmVyc1tvYnMudG9waWNdXG4gICAgcmV0dXJuIG9ic1xuICB9XG4gIHByaXZhdGUgc2VuZChmdW5jTmFtZSwgZGF0YSwgbm9uY2UpIHtcbiAgICB2YXIgcGFyYW0gPSB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIHVpZDogJ2hlanVuamllJyxcbiAgICAgICAgZnVuY19uYW1lOiBmdW5jTmFtZSxcbiAgICAgICAgbm9uY2U6IG5vbmNlLFxuICAgICAgfSxcbiAgICAgIHBhcmFtczogZGF0YSxcbiAgICB9XG4gICAgdGhpcy50aW1lU3RhbXAgPSBEYXRlLm5vdygpXG4gICAgdGhpcy5zb2NrZXQuZW1pdCh0aGlzLmV2ZW50LCBKU09OLnN0cmluZ2lmeShwYXJhbSkpXG4gIH1cbn1cbiIsImltcG9ydCB7IFNpbmdsZXRvbiB9IGZyb20gJy4uLy4uL2NvcmUvYmFzZS9TaW5nbGV0b24nXG5pbXBvcnQgTmV0UmVxdWVzdCBmcm9tICcuL05ldFJlcXVlc3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVOZXQgZXh0ZW5kcyBTaW5nbGV0b24ge1xuICBwcml2YXRlIHNlcnZlclVybDogc3RyaW5nXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgfVxuICBwdWJsaWMgaW5pdFNlcnZlcih1cmw6IHN0cmluZykge1xuICAgIHRoaXMuc2VydmVyVXJsID0gdXJsXG4gIH1cbiAgcHVibGljIHNlbmQoYXBpOiBzdHJpbmcsIGJvZHlWYXJpYWJsZXM6IGFueSA9IG51bGwsIHVybFZhcmlhYmxlczogYW55ID0gJycsIG1ldGhvZDogc3RyaW5nID0gJ3Bvc3QnLCByZXNwb25zZVR5cGU6IHN0cmluZyA9ICdqc29uJywgaGVhZGVyPzogYW55W10pIHtcbiAgICB0aGlzLnNlbmRCeVVybCh0aGlzLnNlcnZlclVybCwgYXBpLCBib2R5VmFyaWFibGVzLCB1cmxWYXJpYWJsZXMsIG1ldGhvZCwgcmVzcG9uc2VUeXBlLCBoZWFkZXIpXG4gIH1cbiAgcHVibGljIHNlbmRQcm9taXNlKGFwaTogc3RyaW5nLCBib2R5VmFyaWFibGVzOiBhbnkgPSBudWxsLCB1cmxWYXJpYWJsZXM6IGFueSA9ICcnLCBtZXRob2Q6IHN0cmluZyA9ICdwb3N0JywgcmVzcG9uc2VUeXBlOiBzdHJpbmcgPSAnanNvbicsIGhlYWRlcj86IGFueVtdKSB7XG4gICAgdGhpcy5zZW5kUHJvbWlzZUJ5VXJsKHRoaXMuc2VydmVyVXJsLCBhcGksIGJvZHlWYXJpYWJsZXMsIHVybFZhcmlhYmxlcywgbWV0aG9kLCByZXNwb25zZVR5cGUsIGhlYWRlcilcbiAgfVxuICBwdWJsaWMgc2VuZEJ5VXJsKHVybDogc3RyaW5nLCBhcGk6IHN0cmluZywgYm9keVZhcmlhYmxlczogYW55ID0gbnVsbCwgdXJsVmFyaWFibGVzOiBhbnkgPSAnJywgbWV0aG9kOiBzdHJpbmcgPSAncG9zdCcsIHJlc3BvbnNlVHlwZTogc3RyaW5nID0gJ2pzb24nLCBoZWFkZXI/OiBhbnlbXSkge1xuICAgIGxldCByZXEgPSBOZXRSZXF1ZXN0LkNyZWF0ZShhcGksIHVybCArIGFwaSArIHVybFZhcmlhYmxlcywgYm9keVZhcmlhYmxlcywgbWV0aG9kLCByZXNwb25zZVR5cGUsIGhlYWRlcilcbiAgICByZXEuU2VuZCgpXG4gIH1cbiAgcHVibGljIGFzeW5jIHNlbmRQcm9taXNlQnlVcmwodXJsOiBzdHJpbmcsIGFwaTogc3RyaW5nLCBib2R5VmFyaWFibGVzOiBhbnkgPSBudWxsLCB1cmxWYXJpYWJsZXM6IGFueSA9ICcnLCBtZXRob2Q6IHN0cmluZyA9ICdwb3N0JywgcmVzcG9uc2VUeXBlOiBzdHJpbmcgPSAnanNvbicsIGhlYWRlcj86IGFueVtdKSB7XG4gICAgbGV0IHJlcSA9IE5ldFJlcXVlc3QuQ3JlYXRlKGFwaSwgdXJsICsgYXBpICsgdXJsVmFyaWFibGVzLCBib2R5VmFyaWFibGVzLCBtZXRob2QsIHJlc3BvbnNlVHlwZSwgaGVhZGVyKVxuICAgIGNvbnN0IGdldCA9IGF3YWl0IHJlcS5TZW5kUHJvbWlzZSgpXG4gICAgcmV0dXJuIGdldFxuICB9XG59XG4iLCJpbXBvcnQgR2FtZUFwcCBmcm9tICcuLi8uLi9jb3JlL2dhbWUvR2FtZUFwcCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV0UmVxdWVzdCB7XG4gIHByaXZhdGUgcmVxOiBsYXlhLm5ldC5IdHRwUmVxdWVzdFxuICBwcml2YXRlIHVybDogc3RyaW5nXG4gIHByaXZhdGUgZGF0YTogYW55XG4gIHByaXZhdGUgbWV0aG9kOiBzdHJpbmdcbiAgcHJpdmF0ZSByZXNwb25zZVR5cGU6IHN0cmluZ1xuICBwcml2YXRlIGhlYWRlcnM6IGFueVtdXG4gIHByaXZhdGUgYXBpUGF0aDogc3RyaW5nXG4gIHByaXZhdGUgbWVzc2FnZUtleTogYW55XG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgbGV0IHJlcSA9IG5ldyBsYXlhLm5ldC5IdHRwUmVxdWVzdCgpXG4gICAgdGhpcy5yZXEgPSByZXFcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgQ3JlYXRlKGFwaVBhdGg6IHN0cmluZywgdXJsOiBzdHJpbmcsIGRhdGE/OiBhbnksIG1ldGhvZD86IHN0cmluZywgcmVzcG9uc2VUeXBlPzogc3RyaW5nLCBoZWFkZXJzPzogYW55W10sIG1lc3NhZ2VLZXk/KTogTmV0UmVxdWVzdCB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgTmV0UmVxdWVzdCgpXG4gICAgcmVxdWVzdC51cmwgPSB1cmxcbiAgICByZXF1ZXN0LmRhdGEgPSBkYXRhXG4gICAgcmVxdWVzdC5tZXRob2QgPSBtZXRob2RcbiAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IHJlc3BvbnNlVHlwZVxuICAgIHJlcXVlc3QuaGVhZGVycyA9IGhlYWRlcnNcbiAgICByZXF1ZXN0LmFwaVBhdGggPSBhcGlQYXRoXG4gICAgcmVxdWVzdC5tZXNzYWdlS2V5ID0gbWVzc2FnZUtleVxuICAgIHJldHVybiByZXF1ZXN0XG4gIH1cbiAgcHVibGljIFNlbmQoKSB7XG4gICAgbGV0IHJlcSA9IHRoaXMucmVxXG4gICAgbGV0IHVybCA9IHRoaXMudXJsXG4gICAgbGV0IGRhdGEgPSB0aGlzLmRhdGFcbiAgICBsZXQgbWV0aG9kID0gdGhpcy5tZXRob2RcbiAgICBsZXQgcmVzcG9uc2VUeXBlID0gdGhpcy5yZXNwb25zZVR5cGVcbiAgICBsZXQgaGVhZGVycyA9IHRoaXMuaGVhZGVycyB8fCBbJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJ11cbiAgICByZXEub25jZShsYXlhLmV2ZW50cy5FdmVudC5DT01QTEVURSwgdGhpcywgdGhpcy5jb21wbGV0ZUhhbmRsZXIpXG4gICAgcmVxLm9uY2UobGF5YS5ldmVudHMuRXZlbnQuRVJST1IsIHRoaXMsIHRoaXMuZXJyb3JIYW5kbGVyKVxuICAgIHJlcS5zZW5kKHVybCwgZGF0YSwgbWV0aG9kLCByZXNwb25zZVR5cGUsIGhlYWRlcnMpXG4gIH1cbiAgcHVibGljIGFzeW5jIFNlbmRQcm9taXNlKCk6IFByb21pc2U8YW55PiB7XG4gICAgbGV0IHJlcSA9IHRoaXMucmVxXG4gICAgbGV0IHVybCA9IHRoaXMudXJsXG4gICAgbGV0IGRhdGEgPSB0aGlzLmRhdGFcbiAgICBsZXQgbWV0aG9kID0gdGhpcy5tZXRob2RcbiAgICBsZXQgcmVzcG9uc2VUeXBlID0gdGhpcy5yZXNwb25zZVR5cGVcbiAgICBsZXQgaGVhZGVycyA9IHRoaXMuaGVhZGVycyB8fCBbJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJ11cbiAgICBsZXQgX3Bvc3QgPSBmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGxldCBfcmVzb2x2ZSA9IGZ1bmN0aW9uKG9iajogYW55KSB7XG4gICAgICAgIHJlc29sdmUob2JqKVxuICAgICAgfVxuICAgICAgcmVxLm9uY2UobGF5YS5ldmVudHMuRXZlbnQuQ09NUExFVEUsIHRoaXMsIF9yZXNvbHZlKVxuICAgICAgcmVxLm9uY2UobGF5YS5ldmVudHMuRXZlbnQuRVJST1IsIHRoaXMsIF9yZXNvbHZlKVxuICAgICAgcmVxLnNlbmQodXJsLCBkYXRhLCBtZXRob2QsIHJlc3BvbnNlVHlwZSwgaGVhZGVycylcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oX3Bvc3QpXG4gIH1cbiAgcHJpdmF0ZSBjb21wbGV0ZUhhbmRsZXIoZGF0YTogYW55KSB7XG4gICAgaWYgKHRoaXMubWVzc2FnZUtleSkge1xuICAgICAgR2FtZUFwcC5kaXNwYXRjaGVyLlNlbmRNc2codGhpcy5tZXNzYWdlS2V5LCBkYXRhKVxuICAgIH1cbiAgfVxuICBwcml2YXRlIGVycm9ySGFuZGxlcihlOiBhbnkpIHtcbiAgICBjb25zb2xlLmVycm9yKHRoaXMubWVzc2FnZUtleSwgZSlcbiAgfVxuICBwcml2YXRlIHByb2Nlc3NIYW5kbGVyKGRhdGE6IGFueSkge31cbn1cbiIsImltcG9ydCB7IHVpIH0gZnJvbSAnLi4vdWkvbGF5YU1heFVJJ1xyXG5pbXBvcnQgQVBhZ2UgZnJvbSAnLi4vZ2FtZS91aS92aWV3L0FQYWdlL0FQYWdlJ1xyXG5pbXBvcnQgeyBzZXRVSVJvb3QsIG9wZW5WaWV3IH0gZnJvbSAnLi4vY29yZS9tdmMvTXZjTWdyJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluU2NlbmUgZXh0ZW5kcyB1aS5zY2VuZS5NYWluU2NlbmVVSSB7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgLy8gR2FtZUFwcC5pbml0KHRoaXMpXHJcbiAgICBjb25zdCBVSSA9IG5ldyBMYXlhLlNwcml0ZSgpXHJcbiAgICBVSS5uYW1lID0gJ1VJJ1xyXG4gICAgVUkud2lkdGggPSBMYXlhLnN0YWdlLndpZHRoXHJcbiAgICBVSS5oZWlnaHQgPSBMYXlhLnN0YWdlLmhlaWdodFxyXG4gICAgTGF5YS5zdGFnZS5hZGRDaGlsZChVSSlcclxuICAgIHNldFVJUm9vdChVSSlcclxuXHJcbiAgICBvcGVuVmlldyhBUGFnZSx7YToxLGI6Mn0pXHJcbiAgfVxyXG4gIG9uT3BlbmVkKCkge31cclxufVxyXG4iLCIvKipUaGlzIGNsYXNzIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IExheWFBaXJJREUsIHBsZWFzZSBkbyBub3QgbWFrZSBhbnkgbW9kaWZpY2F0aW9ucy4gKi9cbmltcG9ydCBWaWV3PUxheWEuVmlldztcbmltcG9ydCBEaWFsb2c9TGF5YS5EaWFsb2c7XG5pbXBvcnQgU2NlbmU9TGF5YS5TY2VuZTtcbmltcG9ydCAqIGFzIHYgZnJvbSBcIi4uL2NvcmUvbXZjL3ZpZXcvQmFzZVZpZXdcIjtcbmltcG9ydCBCYXNlVmlldyA9di5LVUkuQmFzZVZpZXdcbnZhciBSRUc6IEZ1bmN0aW9uID0gTGF5YS5DbGFzc1V0aWxzLnJlZ0NsYXNzO1xuZXhwb3J0IG1vZHVsZSB1aS5zY2VuZSB7XHJcbiAgICBleHBvcnQgY2xhc3MgTWFpblNjZW5lVUkgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRTY2VuZShcInNjZW5lL01haW5TY2VuZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSRUcoXCJ1aS5zY2VuZS5NYWluU2NlbmVVSVwiLE1haW5TY2VuZVVJKTtcclxufVxyXG5leHBvcnQgbW9kdWxlIHVpLnZpZXcge1xyXG4gICAgZXhwb3J0IGNsYXNzIEFQYWdlVUkgZXh0ZW5kcyBCYXNlVmlldyB7XHJcblx0XHRwdWJsaWMgYnRuOkxheWEuQnV0dG9uO1xuXHRcdHB1YmxpYyBkZDpsYXlhLmh0bWwuZG9tLkhUTUxEaXZFbGVtZW50O1xuXHRcdHB1YmxpYyBiYXNlQnRuOkxheWEuQnV0dG9uO1xuXHRcdHB1YmxpYyBjb250ZW50czpMYXlhLkxhYmVsO1xuXHRcdHB1YmxpYyB0b2RvTGlzdDpMYXlhLkxpc3Q7XG5cdFx0cHVibGljIGRlbGV0ZUJ0bjpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgYWRkSW5wdXQ6TGF5YS5UZXh0SW5wdXQ7XG5cdFx0cHVibGljIGFkZEJ0bjpMYXlhLkJ1dHRvbjtcbiAgICAgICAgcHVibGljIHN0YXRpYyAgdWlWaWV3OmFueSA9e1widHlwZVwiOlwiQmFzZVZpZXdcIixcInByb3BzXCI6e1wid2lkdGhcIjo2NDAsXCJoZWlnaHRcIjoxMTM2fSxcImNvbXBJZFwiOjIsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJSZWN0XCIsXCJwcm9wc1wiOntcIndpZHRoXCI6NjQwLFwibmFtZVwiOlwiclwiLFwibGluZVdpZHRoXCI6MSxcImhlaWdodFwiOjExMzYsXCJmaWxsQ29sb3JcIjpcIiNmYmJiYmJcIn0sXCJjb21wSWRcIjo3fSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjU1NSxcInhcIjoyMDgsXCJ3aWR0aFwiOjIwMCxcInZhclwiOlwiYnRuXCIsXCJza2luXCI6XCJjb21wL2J1dHRvbi5wbmdcIixcImxhYmVsXCI6XCJHb1RvIEJQYWdlXCIsXCJoZWlnaHRcIjo1MH0sXCJjb21wSWRcIjo4fSx7XCJ0eXBlXCI6XCJIVE1MRGl2RWxlbWVudFwiLFwicHJvcHNcIjp7XCJ5XCI6MCxcInhcIjowLFwid2lkdGhcIjo2NDQsXCJ2YXJcIjpcImRkXCIsXCJpbm5lckhUTUxcIjpcIjxici8+PHNwYW4+ICDmtYvor5XmsLTlubPlsYXkuK3lr7npvZA8L3NwYW4+XCIsXCJoZWlnaHRcIjoyNjUsXCJydW50aW1lXCI6XCJsYXlhLmh0bWwuZG9tLkhUTUxEaXZFbGVtZW50XCJ9LFwiY29tcElkXCI6MjB9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6NjY5LFwieFwiOjIwOCxcIndpZHRoXCI6MjAwLFwidmFyXCI6XCJiYXNlQnRuXCIsXCJza2luXCI6XCJjb21wL2J1dHRvbi5wbmdcIixcImxhYmVsXCI6XCJHb1RvIEJhc2VcIixcImhlaWdodFwiOjUwfSxcImNvbXBJZFwiOjE1LFwiY2hpbGRcIjpbe1widHlwZVwiOlwiTGFiZWxcIixcInByb3BzXCI6e1wieVwiOi02MjcsXCJ4XCI6MTkwLFwid2lkdGhcIjoyMDEsXCJ2YXJcIjpcImNvbnRlbnRzXCIsXCJ2YWxpZ25cIjpcIm1pZGRsZVwiLFwidGV4dFwiOlwic3Nzc1wiLFwiaGVpZ2h0XCI6NTAwLFwiZm9udFNpemVcIjo0MCxcImFsaWduXCI6XCJjZW50ZXJcIn0sXCJjb21wSWRcIjoxNH1dfSx7XCJ0eXBlXCI6XCJMYWJlbFwiLFwicHJvcHNcIjp7XCJ5XCI6MTIxLFwieFwiOjI3NS41LFwid2lkdGhcIjo2MyxcInZhbGlnblwiOlwibWlkZGxlXCIsXCJ0ZXh0XCI6XCJsYWJlbFwiLFwiaGVpZ2h0XCI6MjIsXCJhbGlnblwiOlwiY2VudGVyXCJ9LFwiY29tcElkXCI6MjV9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6MTMyLFwieFwiOjQyNixcInByZXNldElEXCI6MSxcIndpZHRoXCI6MTkyLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwi5oyJ6ZKu6ISa5pysXCIsXCJpc1ByZXNldFJvb3RcIjp0cnVlLFwiaGVpZ2h0XCI6OTB9LFwiY29tcElkXCI6MzEsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJTY3JpcHRcIixcInByb3BzXCI6e1wicHJlc2V0SURcIjoyLFwieVwiOjEsXCJ4XCI6MCxcInJ1bnRpbWVcIjpcImdhbWUvdWkvdmlldy9BUGFnZS9UZXN0LnRzXCJ9LFwiY29tcElkXCI6MzJ9XX0se1widHlwZVwiOlwiTGlzdFwiLFwicHJvcHNcIjp7XCJ5XCI6MTMyLFwieFwiOjMwLFwid2lkdGhcIjoyNjAsXCJ2YXJcIjpcInRvZG9MaXN0XCIsXCJyZXBlYXRYXCI6MSxcImhlaWdodFwiOjMwOH0sXCJjb21wSWRcIjo0OSxcImNoaWxkXCI6W3tcInR5cGVcIjpcIkJveFwiLFwicHJvcHNcIjp7XCJ5XCI6MCxcInhcIjowLFwid2lkdGhcIjo3NyxcInJlbmRlclR5cGVcIjpcInJlbmRlclwiLFwiaGVpZ2h0XCI6MzR9LFwiY29tcElkXCI6NTIsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJMYWJlbFwiLFwicHJvcHNcIjp7XCJ5XCI6NyxcInhcIjowLFwidGV4dFwiOlwibGFiZWxcIixcInJlbmRlclR5cGVcIjpcInJlbmRlclwiLFwibmFtZVwiOlwibGFiZWxcIixcImZvbnRTaXplXCI6MjB9LFwiY29tcElkXCI6NTB9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6NSxcInhcIjo1NCxcIndpZHRoXCI6MjMsXCJ2YXJcIjpcImRlbGV0ZUJ0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwieFwiLFwiaGVpZ2h0XCI6MjN9LFwiY29tcElkXCI6NTN9XX1dfSx7XCJ0eXBlXCI6XCJCb3hcIixcInByb3BzXCI6e1wieVwiOjQyMixcInhcIjoyMDgsXCJ3aWR0aFwiOjIyNSxcImhlaWdodFwiOjIyfSxcImNvbXBJZFwiOjU0LFwiY2hpbGRcIjpbe1widHlwZVwiOlwiVGV4dElucHV0XCIsXCJwcm9wc1wiOntcInZhclwiOlwiYWRkSW5wdXRcIixcInNraW5cIjpcImNvbXAvdGV4dGlucHV0LnBuZ1wifSxcImNvbXBJZFwiOjUxfSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOi0xLFwieFwiOjE0NyxcInZhclwiOlwiYWRkQnRuXCIsXCJza2luXCI6XCJjb21wL2J1dHRvbi5wbmdcIixcImxhYmVsXCI6XCJhZGRcIn0sXCJjb21wSWRcIjo1NX1dfV0sXCJsb2FkTGlzdFwiOltcImNvbXAvYnV0dG9uLnBuZ1wiLFwicHJlZmFiL0J1dHRvbi5wcmVmYWJcIixcImNvbXAvdGV4dGlucHV0LnBuZ1wiXSxcImxvYWRMaXN0M0RcIjpbXX07XHJcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVZpZXcoQVBhZ2VVSS51aVZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFJFRyhcInVpLnZpZXcuQVBhZ2VVSVwiLEFQYWdlVUkpO1xyXG4gICAgZXhwb3J0IGNsYXNzIEJhc2VUZXN0VUkgZXh0ZW5kcyBCYXNlVmlldyB7XHJcblx0XHRwdWJsaWMgdGFuazpMYXlhLkNsaXA7XG5cdFx0cHVibGljIGNsb3NlQnRuOkxheWEuQnV0dG9uO1xuXHRcdHB1YmxpYyBkaWFsb2dCdG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIGxvYWRpbmdCdG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIHZpZXdCdG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIHRva2VuOkxheWEuTGFiZWw7XG5cdFx0cHVibGljIHVzZXJuYW1lOkxheWEuTGFiZWw7XG4gICAgICAgIHB1YmxpYyBzdGF0aWMgIHVpVmlldzphbnkgPXtcInR5cGVcIjpcIkJhc2VWaWV3XCIsXCJwcm9wc1wiOntcIndpZHRoXCI6NjQwLFwiaGVpZ2h0XCI6MTEzNn0sXCJjb21wSWRcIjoyLFwiY2hpbGRcIjpbe1widHlwZVwiOlwiSW1hZ2VcIixcInByb3BzXCI6e1wieVwiOjAsXCJ4XCI6MCxcInRvcFwiOjAsXCJza2luXCI6XCJjb21wL2ltYWdlLnBuZ1wiLFwicmlnaHRcIjowLFwibGVmdFwiOjAsXCJib3R0b21cIjowfSxcImNvbXBJZFwiOjh9LHtcInR5cGVcIjpcIkNsaXBcIixcInByb3BzXCI6e1wieVwiOjAsXCJ4XCI6MCxcInZhclwiOlwidGFua1wiLFwic2tpblwiOlwiQ2hhcmFjdGVycy9UYW5rXzgucG5nXCIsXCJpbmRleFwiOjQsXCJjbGlwWVwiOjQsXCJjbGlwWFwiOjQsXCJjZW50ZXJZXCI6LTEsXCJjZW50ZXJYXCI6MH0sXCJjb21wSWRcIjozfSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjMyNyxcInhcIjoyODIsXCJ2YXJcIjpcImNsb3NlQnRuXCIsXCJza2luXCI6XCJjb21wL2J1dHRvbi5wbmdcIixcImxhYmVsXCI6XCJjbG9zZVwifSxcImNvbXBJZFwiOjR9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6MjUyLFwieFwiOjQ3MixcInZhclwiOlwiZGlhbG9nQnRuXCIsXCJza2luXCI6XCJjb21wL2J1dHRvbi5wbmdcIixcImxhYmVsXCI6XCJkaWFsb2dcIn0sXCJjb21wSWRcIjo1fSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjMwNCxcInhcIjo0NzIsXCJ2YXJcIjpcImxvYWRpbmdCdG5cIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcImJhc2VcIn0sXCJjb21wSWRcIjo2fSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjM2MixcInhcIjo0NzIsXCJ2YXJcIjpcInZpZXdCdG5cIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcInZpZXdcIn0sXCJjb21wSWRcIjo3fSx7XCJ0eXBlXCI6XCJMYWJlbFwiLFwicHJvcHNcIjp7XCJ5XCI6MTgxLFwieFwiOjEwNSxcInZhclwiOlwidG9rZW5cIixcInRleHRcIjpcInRva2VuXCIsXCJmb250U2l6ZVwiOjMwLFwiY29sb3JcIjpcIiNmZmZmZmZcIn0sXCJjb21wSWRcIjo5fSx7XCJ0eXBlXCI6XCJMYWJlbFwiLFwicHJvcHNcIjp7XCJ5XCI6MjU3LFwieFwiOjEwNSxcIndvcmRXcmFwXCI6dHJ1ZSxcIndpZHRoXCI6OTUsXCJ2YXJcIjpcInVzZXJuYW1lXCIsXCJ0ZXh0XCI6XCJ0b2tlblwiLFwiaGVpZ2h0XCI6NTEsXCJmb250U2l6ZVwiOjMwLFwiY29sb3JcIjpcIiNmZmZmZmZcIixcImJnQ29sb3JcIjpcIiNmZjc1NzNcIn0sXCJjb21wSWRcIjoxMCxcImNoaWxkXCI6W3tcInR5cGVcIjpcIlNjcmlwdFwiLFwicHJvcHNcIjp7XCJMYW5ndWFnZUlEXCI6XCJ0ZXN0dGVzdHRlc3RcIixcIklzRmlsbFwiOnRydWUsXCJydW50aW1lXCI6XCJjb3JlL2dhbWUvc2NyaXB0L0hMYWJlbC50c1wifSxcImNvbXBJZFwiOjEyfV19XSxcImxvYWRMaXN0XCI6W1wiY29tcC9pbWFnZS5wbmdcIixcIkNoYXJhY3RlcnMvVGFua184LnBuZ1wiLFwiY29tcC9idXR0b24ucG5nXCJdLFwibG9hZExpc3QzRFwiOltdfTtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVmlldyhCYXNlVGVzdFVJLnVpVmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUkVHKFwidWkudmlldy5CYXNlVGVzdFVJXCIsQmFzZVRlc3RVSSk7XHJcbiAgICBleHBvcnQgY2xhc3MgQlBhZ2VVSSBleHRlbmRzIEJhc2VWaWV3IHtcclxuXHRcdHB1YmxpYyBjaGFuZ2U6TGF5YS5CdXR0b247XG5cdFx0cHVibGljIGNsb3NlX2J0bjpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgdG9rZW46TGF5YS5MYWJlbDtcblx0XHRwdWJsaWMgdXNlcm5hbWU6TGF5YS5MYWJlbDtcbiAgICAgICAgcHVibGljIHN0YXRpYyAgdWlWaWV3OmFueSA9e1widHlwZVwiOlwiQmFzZVZpZXdcIixcInByb3BzXCI6e1wid2lkdGhcIjozMDAsXCJoZWlnaHRcIjoxMTM2fSxcImNvbXBJZFwiOjIsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJSZWN0XCIsXCJwcm9wc1wiOntcIndpZHRoXCI6MzAwLFwibGluZVdpZHRoXCI6MSxcImhlaWdodFwiOjExMzYsXCJmaWxsQ29sb3JcIjpcIiNjZGY5YTRcIn0sXCJjb21wSWRcIjozfSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjUzNCxcInhcIjo1OSxcIndpZHRoXCI6MjAwLFwidmFyXCI6XCJjaGFuZ2VcIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcIkNoYW5nZUFQYWdlXCIsXCJoZWlnaHRcIjo1MH0sXCJjb21wSWRcIjo0fSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjY0NCxcInhcIjo1OSxcIndpZHRoXCI6MjAwLFwidmFyXCI6XCJjbG9zZV9idG5cIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcIkNsb3NlXCIsXCJoZWlnaHRcIjo1MH0sXCJjb21wSWRcIjo1fSx7XCJ0eXBlXCI6XCJMYWJlbFwiLFwicHJvcHNcIjp7XCJ5XCI6MTgxLFwieFwiOjEwNSxcInZhclwiOlwidG9rZW5cIixcInRleHRcIjpcInRva2VuXCIsXCJmb250U2l6ZVwiOjMwLFwiY29sb3JcIjpcIiMwMDAwMDBcIn0sXCJjb21wSWRcIjo3fSx7XCJ0eXBlXCI6XCJMYWJlbFwiLFwicHJvcHNcIjp7XCJ5XCI6MjU3LFwieFwiOjEwNSxcInZhclwiOlwidXNlcm5hbWVcIixcInRleHRcIjpcInRva2VuXCIsXCJmb250U2l6ZVwiOjMwLFwiY29sb3JcIjpcIiMwMDAwMDBcIn0sXCJjb21wSWRcIjo4fV0sXCJsb2FkTGlzdFwiOltcImNvbXAvYnV0dG9uLnBuZ1wiXSxcImxvYWRMaXN0M0RcIjpbXX07XHJcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVZpZXcoQlBhZ2VVSS51aVZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFJFRyhcInVpLnZpZXcuQlBhZ2VVSVwiLEJQYWdlVUkpO1xyXG4gICAgZXhwb3J0IGNsYXNzIERpYWxvZ1Rlc3RVSSBleHRlbmRzIEJhc2VWaWV3IHtcclxuXHRcdHB1YmxpYyBib3g6TGF5YS5Cb3g7XG5cdFx0cHVibGljIHRhbms6TGF5YS5DbGlwO1xuXHRcdHB1YmxpYyBjbG9zZUJ0bjpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgdG9rZW46TGF5YS5MYWJlbDtcblx0XHRwdWJsaWMgdXNlcm5hbWU6TGF5YS5MYWJlbDtcbiAgICAgICAgcHVibGljIHN0YXRpYyAgdWlWaWV3OmFueSA9e1widHlwZVwiOlwiQmFzZVZpZXdcIixcInByb3BzXCI6e1wid2lkdGhcIjo2NDAsXCJoZWlnaHRcIjoxMTM2fSxcImNvbXBJZFwiOjIsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJCb3hcIixcInByb3BzXCI6e1wid2lkdGhcIjoyMDAsXCJ2YXJcIjpcImJveFwiLFwiaGVpZ2h0XCI6MjAwLFwiY2VudGVyWVwiOjAsXCJjZW50ZXJYXCI6MH0sXCJjb21wSWRcIjo5LFwiY2hpbGRcIjpbe1widHlwZVwiOlwiSW1hZ2VcIixcInByb3BzXCI6e1widG9wXCI6MCxcInNraW5cIjpcImNvbXAvaW1hZ2UucG5nXCIsXCJyaWdodFwiOjAsXCJsZWZ0XCI6MCxcImJvdHRvbVwiOjB9LFwiY29tcElkXCI6MTB9LHtcInR5cGVcIjpcIkNsaXBcIixcInByb3BzXCI6e1wieVwiOjU1MCxcInhcIjozMDMsXCJ2YXJcIjpcInRhbmtcIixcInNraW5cIjpcIkNoYXJhY3RlcnMvVGFua183LnBuZ1wiLFwiaW5kZXhcIjo0LFwiY2xpcFlcIjo0LFwiY2xpcFhcIjo0LFwiY2VudGVyWVwiOi0xLFwiY2VudGVyWFwiOjB9LFwiY29tcElkXCI6M30se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjozOSxcInhcIjo2Mi41LFwidmFyXCI6XCJjbG9zZUJ0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiY2xvc2VcIn0sXCJjb21wSWRcIjo0fV19LHtcInR5cGVcIjpcIkxhYmVsXCIsXCJwcm9wc1wiOntcInlcIjoxODEsXCJ4XCI6MTA1LFwidmFyXCI6XCJ0b2tlblwiLFwidGV4dFwiOlwidG9rZW5cIixcImZvbnRTaXplXCI6MzAsXCJjb2xvclwiOlwiI2ZmZmZmZlwifSxcImNvbXBJZFwiOjEyfSx7XCJ0eXBlXCI6XCJMYWJlbFwiLFwicHJvcHNcIjp7XCJ5XCI6MjU3LFwieFwiOjEwNSxcInZhclwiOlwidXNlcm5hbWVcIixcInRleHRcIjpcInRva2VuXCIsXCJmb250U2l6ZVwiOjMwLFwiY29sb3JcIjpcIiNmZmZmZmZcIn0sXCJjb21wSWRcIjoxM31dLFwibG9hZExpc3RcIjpbXCJjb21wL2ltYWdlLnBuZ1wiLFwiQ2hhcmFjdGVycy9UYW5rXzcucG5nXCIsXCJjb21wL2J1dHRvbi5wbmdcIl0sXCJsb2FkTGlzdDNEXCI6W119O1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVWaWV3KERpYWxvZ1Rlc3RVSS51aVZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFJFRyhcInVpLnZpZXcuRGlhbG9nVGVzdFVJXCIsRGlhbG9nVGVzdFVJKTtcclxuICAgIGV4cG9ydCBjbGFzcyBMb2FkaW5nVUkgZXh0ZW5kcyBCYXNlVmlldyB7XHJcblx0XHRwdWJsaWMgdGFuazpMYXlhLkNsaXA7XG5cdFx0cHVibGljIGJ0bl9jbG9zZTpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgYnRuX2Nvbm5lY3Q6TGF5YS5CdXR0b247XG5cdFx0cHVibGljIHRva2VuOkxheWEuTGFiZWw7XG5cdFx0cHVibGljIHVzZXJuYW1lOkxheWEuTGFiZWw7XG4gICAgICAgIHB1YmxpYyBzdGF0aWMgIHVpVmlldzphbnkgPXtcInR5cGVcIjpcIkJhc2VWaWV3XCIsXCJwcm9wc1wiOntcIndpZHRoXCI6NjQwLFwiaGVpZ2h0XCI6MTEzNn0sXCJjb21wSWRcIjoyLFwiY2hpbGRcIjpbe1widHlwZVwiOlwiSW1hZ2VcIixcInByb3BzXCI6e1widG9wXCI6MCxcInNraW5cIjpcIkNoYXJhY3RlcnMvVGFua183LnBuZ1wiLFwicmlnaHRcIjowLFwibGVmdFwiOjAsXCJib3R0b21cIjowfSxcImNvbXBJZFwiOjE3fSx7XCJ0eXBlXCI6XCJDbGlwXCIsXCJwcm9wc1wiOntcInZhclwiOlwidGFua1wiLFwic2tpblwiOlwiQ2hhcmFjdGVycy9UYW5rXzQucG5nXCIsXCJpbmRleFwiOjQsXCJjbGlwWVwiOjQsXCJjbGlwWFwiOjQsXCJjZW50ZXJZXCI6LTEsXCJjZW50ZXJYXCI6MH0sXCJjb21wSWRcIjozfSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjMyNyxcInhcIjoyODIuNSxcInZhclwiOlwiYnRuX2Nsb3NlXCIsXCJza2luXCI6XCJjb21wL2J1dHRvbi5wbmdcIixcImxhYmVsXCI6XCJjbG9zZVwifSxcImNvbXBJZFwiOjR9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6MjIyLFwieFwiOjI4Mi41LFwidmFyXCI6XCJidG5fY29ubmVjdFwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiY29ubmVjdFwifSxcImNvbXBJZFwiOjV9LHtcInR5cGVcIjpcIkxhYmVsXCIsXCJwcm9wc1wiOntcInlcIjoxODEsXCJ4XCI6MTA1LFwidmFyXCI6XCJ0b2tlblwiLFwidGV4dFwiOlwidG9rZW5cIixcImZvbnRTaXplXCI6MzAsXCJjb2xvclwiOlwiI2ZmZmZmZlwifSxcImNvbXBJZFwiOjE4fSx7XCJ0eXBlXCI6XCJMYWJlbFwiLFwicHJvcHNcIjp7XCJ5XCI6MjU3LFwieFwiOjEwNSxcInZhclwiOlwidXNlcm5hbWVcIixcInRleHRcIjpcInRva2VuXCIsXCJmb250U2l6ZVwiOjMwLFwiY29sb3JcIjpcIiNmZmZmZmZcIn0sXCJjb21wSWRcIjoxOX1dLFwibG9hZExpc3RcIjpbXCJDaGFyYWN0ZXJzL1RhbmtfNy5wbmdcIixcIkNoYXJhY3RlcnMvVGFua180LnBuZ1wiLFwiY29tcC9idXR0b24ucG5nXCJdLFwibG9hZExpc3QzRFwiOltdfTtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVmlldyhMb2FkaW5nVUkudWlWaWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSRUcoXCJ1aS52aWV3LkxvYWRpbmdVSVwiLExvYWRpbmdVSSk7XHJcbiAgICBleHBvcnQgY2xhc3MgVmlld1Rlc3RVSSBleHRlbmRzIEJhc2VWaWV3IHtcclxuXHRcdHB1YmxpYyB0YW5rOkxheWEuQ2xpcDtcblx0XHRwdWJsaWMgY2xvc2VCdG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIHZpZXdCdG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIHRva2VuOkxheWEuTGFiZWw7XG5cdFx0cHVibGljIHVzZXJuYW1lOkxheWEuTGFiZWw7XG4gICAgICAgIHB1YmxpYyBzdGF0aWMgIHVpVmlldzphbnkgPXtcInR5cGVcIjpcIkJhc2VWaWV3XCIsXCJwcm9wc1wiOntcIndpZHRoXCI6NjQwLFwiaGVpZ2h0XCI6MTEzNn0sXCJjb21wSWRcIjoyLFwiY2hpbGRcIjpbe1widHlwZVwiOlwiSW1hZ2VcIixcInByb3BzXCI6e1wieVwiOjAsXCJ4XCI6MCxcInRvcFwiOjAsXCJza2luXCI6XCJjb21wL2ltYWdlLnBuZ1wiLFwicmlnaHRcIjowLFwibGVmdFwiOjAsXCJib3R0b21cIjowfSxcImNvbXBJZFwiOjd9LHtcInR5cGVcIjpcIkNsaXBcIixcInByb3BzXCI6e1wieVwiOjAsXCJ4XCI6MCxcInZhclwiOlwidGFua1wiLFwic2tpblwiOlwiQ2hhcmFjdGVycy8k54u8LnBuZ1wiLFwiaW5kZXhcIjo0LFwiY2xpcFlcIjo0LFwiY2xpcFhcIjo0LFwiY2VudGVyWVwiOi0xLFwiY2VudGVyWFwiOjB9LFwiY29tcElkXCI6M30se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjozMjcsXCJ4XCI6MjgyLFwidmFyXCI6XCJjbG9zZUJ0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiY2xvc2VcIn0sXCJjb21wSWRcIjo0fSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjM4NSxcInhcIjoyODIuNSxcInZhclwiOlwidmlld0J0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwidmlld1wifSxcImNvbXBJZFwiOjV9LHtcInR5cGVcIjpcIkxhYmVsXCIsXCJwcm9wc1wiOntcInlcIjoxODEsXCJ4XCI6MTA1LFwidmFyXCI6XCJ0b2tlblwiLFwidGV4dFwiOlwidG9rZW5cIixcImZvbnRTaXplXCI6MzAsXCJjb2xvclwiOlwiI2ZmZmZmZlwifSxcImNvbXBJZFwiOjl9LHtcInR5cGVcIjpcIkxhYmVsXCIsXCJwcm9wc1wiOntcInlcIjoyNTcsXCJ4XCI6MTA1LFwidmFyXCI6XCJ1c2VybmFtZVwiLFwidGV4dFwiOlwidG9rZW5cIixcImZvbnRTaXplXCI6MzAsXCJjb2xvclwiOlwiI2ZmZmZmZlwifSxcImNvbXBJZFwiOjEwfV0sXCJsb2FkTGlzdFwiOltcImNvbXAvaW1hZ2UucG5nXCIsXCJDaGFyYWN0ZXJzLyTni7wucG5nXCIsXCJjb21wL2J1dHRvbi5wbmdcIl0sXCJsb2FkTGlzdDNEXCI6W119O1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVWaWV3KFZpZXdUZXN0VUkudWlWaWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSRUcoXCJ1aS52aWV3LlZpZXdUZXN0VUlcIixWaWV3VGVzdFVJKTtcclxuICAgIGV4cG9ydCBjbGFzcyBWaWV3VGVzdDFVSSBleHRlbmRzIEJhc2VWaWV3IHtcclxuXHRcdHB1YmxpYyB0YW5rOkxheWEuQ2xpcDtcblx0XHRwdWJsaWMgY2xvc2VCdG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIHRva2VuOkxheWEuTGFiZWw7XG5cdFx0cHVibGljIHVzZXJuYW1lOkxheWEuTGFiZWw7XG4gICAgICAgIHB1YmxpYyBzdGF0aWMgIHVpVmlldzphbnkgPXtcInR5cGVcIjpcIkJhc2VWaWV3XCIsXCJwcm9wc1wiOntcIndpZHRoXCI6NjQwLFwiaGVpZ2h0XCI6MTEzNn0sXCJjb21wSWRcIjoyLFwiY2hpbGRcIjpbe1widHlwZVwiOlwiSW1hZ2VcIixcInByb3BzXCI6e1wieVwiOjAsXCJ4XCI6MCxcInRvcFwiOjAsXCJza2luXCI6XCJjb21wL2ltYWdlLnBuZ1wiLFwicmlnaHRcIjowLFwibGVmdFwiOjAsXCJib3R0b21cIjowfSxcImNvbXBJZFwiOjZ9LHtcInR5cGVcIjpcIkNsaXBcIixcInByb3BzXCI6e1wieVwiOjAsXCJ4XCI6MCxcInZhclwiOlwidGFua1wiLFwic2tpblwiOlwiQ2hhcmFjdGVycy8k54u8LnBuZ1wiLFwiaW5kZXhcIjo0LFwiY2xpcFlcIjo0LFwiY2xpcFhcIjo0LFwiY2VudGVyWVwiOi0xLFwiY2VudGVyWFwiOjB9LFwiY29tcElkXCI6M30se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjozMjcsXCJ4XCI6MjgyLFwidmFyXCI6XCJjbG9zZUJ0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiY2xvc2VcIn0sXCJjb21wSWRcIjo0fSx7XCJ0eXBlXCI6XCJMYWJlbFwiLFwicHJvcHNcIjp7XCJ5XCI6MTgxLFwieFwiOjEwNSxcInZhclwiOlwidG9rZW5cIixcInRleHRcIjpcInRva2VuXCIsXCJmb250U2l6ZVwiOjMwLFwiY29sb3JcIjpcIiNmZmZmZmZcIn0sXCJjb21wSWRcIjo3fSx7XCJ0eXBlXCI6XCJMYWJlbFwiLFwicHJvcHNcIjp7XCJ5XCI6MjU3LFwieFwiOjEwNSxcInZhclwiOlwidXNlcm5hbWVcIixcInRleHRcIjpcInRva2VuXCIsXCJmb250U2l6ZVwiOjMwLFwiY29sb3JcIjpcIiNmZmZmZmZcIn0sXCJjb21wSWRcIjo4fV0sXCJsb2FkTGlzdFwiOltcImNvbXAvaW1hZ2UucG5nXCIsXCJDaGFyYWN0ZXJzLyTni7wucG5nXCIsXCJjb21wL2J1dHRvbi5wbmdcIl0sXCJsb2FkTGlzdDNEXCI6W119O1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVWaWV3KFZpZXdUZXN0MVVJLnVpVmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUkVHKFwidWkudmlldy5WaWV3VGVzdDFVSVwiLFZpZXdUZXN0MVVJKTtcclxufVxyIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==