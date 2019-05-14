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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWVDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvVXRpbHMvRWZmZWN0VXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvYmFzZS9TaW5nbGV0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY29uc3QvTGF5ZXJDb25zdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9jb25zdC9WaWV3Q29uc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZ2FtZS9HYW1lQXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2dhbWUvc2NyaXB0L0hMYWJlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9nYW1lL3V0aWxzL1N0cmluZ1V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZ2FtZS91dGlscy9UaW1lVXRpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9tdmMvQ29udHJvbGxlck1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvbXZjL012Y01nci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9tdmMvVUlFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9tdmMvVmlld01nci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9tdmMvY29udHJvbGxlci9CYXNlQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9tdmMvbGF5ZXIvQmFzZUxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL212Yy9sYXllci9EaWFsb2dMYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9tdmMvbGF5ZXIvVmlld0xheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL212Yy9tb2RlbC9CYXNlTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvbXZjL3ZpZXcvQmFzZVZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvc2VydmljZS9TZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3NlcnZpY2UvZGlzcGF0Y2hlci9EaXNwYXRjaGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3NlcnZpY2UvZGlzcGF0Y2hlci9PYnNlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9zdG9yZS9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3N0b3JlL3JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvc3RvcmUvc3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvc3RvcmUvc3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdWkvdmlldy9BUGFnZS9BUGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS91aS92aWV3L0FQYWdlL0FQYWdlQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS91aS92aWV3L0FQYWdlL0FwYWdlTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdWkvdmlldy9BUGFnZS9UZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3VpL3ZpZXcvQlBhZ2UvQlBhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdWkvdmlldy9CUGFnZS9CUGFnZUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdWkvdmlldy9CUGFnZS9CUGFnZU1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3VpL3ZpZXcvQmFzZVRlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdWkvdmlldy9Mb2FkaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3VpL3ZpZXcvVmlld1Rlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdWkvdmlldy9WaWV3VGVzdDEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ldC9GZXRjaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV0L1NvY2tldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV0L2h0dHAvR2FtZU5ldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV0L2h0dHAvTmV0UmVxdWVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUvTWFpblNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9sYXlhTWF4VUkudHMiLCJ3ZWJwYWNrOi8vL3dzIChpZ25vcmVkKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFF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LEVBQUMsZ0JBQWdCLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxXQUFXLEVBQUMsOEJBQThCLEVBQUMsUUFBUSxFQUFDLEdBQUcsRUFBQyxTQUFTLEVBQUMsOEJBQThCLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxTQUFTLEVBQUMsTUFBTSxFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLEdBQUcsRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sRUFBQyxpQkFBaUIsRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLGNBQWMsRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyw0QkFBNEIsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxpQkFBaUIsRUFBQyxzQkFBc0IsQ0FBQyxFQUFDLFlBQVksRUFBQyxFQUFFLEVBQUMsQ0FBQztZQU1seUMsY0FBQztTQUFBLENBWDRCLFFBQVEsR0FXcEM7UUFYWSxZQUFPLFVBV25CO1FBQ0QsR0FBRyxDQUFDLGlCQUFpQixFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9CO1lBQWdDLDhCQUFRO1lBU3BDO3VCQUFlLGlCQUFPO1lBQUEsQ0FBQztZQUN2QixtQ0FBYyxHQUFkO2dCQUNJLGlCQUFNLGNBQWMsV0FBRSxDQUFDO2dCQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2QyxDQUFDO1lBTGMsaUJBQU0sR0FBTSxFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLGdCQUFnQixFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsdUJBQXVCLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLE1BQU0sRUFBQyxpQkFBaUIsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLFdBQVcsRUFBQyxNQUFNLEVBQUMsaUJBQWlCLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxZQUFZLEVBQUMsTUFBTSxFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsU0FBUyxFQUFDLE1BQU0sRUFBQyxpQkFBaUIsRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLFVBQVUsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsU0FBUyxFQUFDLFNBQVMsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxFQUFDLFlBQVksRUFBQyxjQUFjLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsNEJBQTRCLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsZ0JBQWdCLEVBQUMsdUJBQXVCLEVBQUMsaUJBQWlCLENBQUMsRUFBQyxZQUFZLEVB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LE1BQU0sRUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxHQUFHLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsZ0JBQWdCLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyx1QkFBdUIsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsSUFBSSxFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsTUFBTSxFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxnQkFBZ0IsRUFBQyx1QkFBdUIsRUFBQyxpQkFBaUIsQ0FBQyxFQUFDLFlBQVksRUFBQyxFQUFFLEVBQUMsQ0FBQztZQU14NEIsbUJBQUM7U0FBQSxDQVppQyxRQUFRLEdBWXpDO1FBWlksaUJBQVksZUFZeEI7UUFDRCxHQUFHLENBQUMsc0JBQXNCLEVBQUMsWUFBWSxDQUFDLENBQUM7UUFDekM7WUFBK0IsNkJBQVE7WUFPbkM7dUJBQWUsaUJBQU87WUFBQSxDQUFDO1lBQ3ZCLGtDQUFjLEdBQWQ7Z0JBQ0ksaUJBQU0sY0FBYyxXQUFFLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3RDLENBQUM7WUFMYyxnQkFBTSxHQUFNLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyx1QkFBdUIsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsdUJBQXVCLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsV0FBVyxFQUFDLE1BQU0sRUFBQyxpQkFBaUIsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLGFBQWEsRUFBQyxNQUFNLEVBQUMsaUJBQWlCLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsdUJBQXVCLEVBQUMsdUJBQXVCLEVBQUMsaUJBQWlCLENBQUMsRUFBQyxZQUFZLEVBQUMsRUFBRSxFQUFDLENBQUM7WUFNdDVCLGdCQUFDO1NBQUEsQ0FaOEIsUUFBUSxHQVl0QztRQVpZLGNBQVMsWUFZckI7UUFDRCxHQUFHLENBQUMsbUJBQW1CLEVBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkM7WUFBZ0MsOEJBQVE7WUFPcEM7dUJBQWUsaUJBQU87WUFBQSxDQUFDO1lBQ3ZCLG1DQUFjLEdBQWQ7Z0JBQ0ksaUJBQU0sY0FBYyxXQUFFLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZDLENBQUM7WUFMYyxpQkFBTSxHQUFNLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsZ0JBQWdCLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxtQkFBbUIsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsTUFBTSxFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsU0FBUyxFQUFDLE1BQU0sRUFBQyxpQkFBaUIsRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxnQkFBZ0IsRUFBQyxtQkFBbUIsRUFBQyxpQkFBaUIsQ0FBQyxFQUFDLFlBQVksRUFBQyxFQUFFLEVBQUMsQ0FBQztZQU01NEIsaUJBQUM7U0FBQSxDQVorQixRQUFRLEdBWXZDO1FBWlksZUFBVSxhQVl0QjtRQUNELEdBQUcsQ0FBQyxvQkFBb0IsRUFBQyxVQUFVLENBQUMsQ0FBQztRQUNyQztZQUFpQywrQkFBUTtZQU1yQzt1QkFBZSxpQkFBTztZQUFBLENBQUM7WUFDdkIsb0NBQWMsR0FBZDtnQkFDSSxpQkFBTSxjQUFjLFdBQUUsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEMsQ0FBQztZQUxjLGtCQUFNLEdBQU0sRUFBQyxNQUFNLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxnQkFBZ0IsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLG1CQUFtQixFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxNQUFNLEVBQUMsaUJBQWlCLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsZ0JBQWdCLEVBQUMsbUJBQW1CLEVBQUMsaUJBQWlCLENBQUMsRUFBQyxZQUFZLEVBQUMsRUFBRSxFQUFDLENBQUM7WUFNMXhCLGtCQUFDO1NBQUEsQ0FYZ0MsUUFBUSxHQVd4QztRQVhZLGdCQUFXLGNBV3ZCO1FBQ0QsR0FBRyxDQUFDLHFCQUFxQixFQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNDLENBQUMsRUFsR2dCLElBQUksR0FBSixPQUFJLEtBQUosT0FBSSxRQWtHcEI7QUFBRCxDQUFDLEVBbEdhLEVBQUUsR0FBRixVQUFFLEtBQUYsVUFBRSxRQWtHZjs7Ozs7Ozs7Ozs7O0FDbkhELGUiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJpbmRleFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL01haW4udHNcIixcImxpYlwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIi8qKlRoaXMgY2xhc3MgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgTGF5YUFpcklERSwgcGxlYXNlIGRvIG5vdCBtYWtlIGFueSBtb2RpZmljYXRpb25zLiAqL1xyXG5pbXBvcnQgTWFpblNjZW5lIGZyb20gXCIuL3NjZW5lL01haW5TY2VuZVwiXG5pbXBvcnQgVGVzdCBmcm9tIFwiLi9nYW1lL3VpL3ZpZXcvQVBhZ2UvVGVzdFwiXG5pbXBvcnQgSExhYmVsIGZyb20gXCIuL2NvcmUvZ2FtZS9zY3JpcHQvSExhYmVsXCJcclxuLypcclxuKiDmuLjmiI/liJ3lp4vljJbphY3nva47XHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb25maWd7XHJcbiAgICBzdGF0aWMgd2lkdGg6bnVtYmVyPTY0MDtcclxuICAgIHN0YXRpYyBoZWlnaHQ6bnVtYmVyPTExMzY7XHJcbiAgICBzdGF0aWMgc2NhbGVNb2RlOnN0cmluZz1cInNob3dhbGxcIjtcclxuICAgIHN0YXRpYyBzY3JlZW5Nb2RlOnN0cmluZz1cIm5vbmVcIjtcclxuICAgIHN0YXRpYyBhbGlnblY6c3RyaW5nPVwibWlkZGxlXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25IOnN0cmluZz1cImNlbnRlclwiO1xyXG4gICAgc3RhdGljIHN0YXJ0U2NlbmU6YW55PVwic2NlbmUvTWFpblNjZW5lLnNjZW5lXCI7XHJcbiAgICBzdGF0aWMgc2NlbmVSb290OnN0cmluZz1cIlwiO1xyXG4gICAgc3RhdGljIGRlYnVnOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgc3RhdDpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIHBoeXNpY3NEZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIGV4cG9ydFNjZW5lVG9Kc29uOmJvb2xlYW49dHJ1ZTtcclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG4gICAgc3RhdGljIGluaXQoKXtcclxuICAgICAgICB2YXIgcmVnOiBGdW5jdGlvbiA9IExheWEuQ2xhc3NVdGlscy5yZWdDbGFzcztcclxuICAgICAgICByZWcoXCJzY2VuZS9NYWluU2NlbmUudHNcIixNYWluU2NlbmUpO1xuICAgICAgICByZWcoXCJnYW1lL3VpL3ZpZXcvQVBhZ2UvVGVzdC50c1wiLFRlc3QpO1xuICAgICAgICByZWcoXCJjb3JlL2dhbWUvc2NyaXB0L0hMYWJlbC50c1wiLEhMYWJlbCk7XHJcbiAgICB9XHJcbn1cclxuR2FtZUNvbmZpZy5pbml0KCk7IiwiaW1wb3J0IEdhbWVDb25maWcgZnJvbSAnLi9HYW1lQ29uZmlnJ1xyXG5jbGFzcyBNYWluIHtcclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvL+agueaNrklEReiuvue9ruWIneWni+WMluW8leaTjlxyXG4gICAgaWYgKHdpbmRvd1snTGF5YTNEJ10pIExheWEzRC5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0KVxyXG4gICAgZWxzZSBMYXlhLmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQsIExheWFbJ1dlYkdMJ10pXHJcbiAgICBMYXlhWydQaHlzaWNzJ10gJiYgTGF5YVsnUGh5c2ljcyddLmVuYWJsZSgpXHJcbiAgICBMYXlhWydEZWJ1Z1BhbmVsJ10gJiYgTGF5YVsnRGVidWdQYW5lbCddLmVuYWJsZSgpXHJcbiAgICAvLyBMYXlhLnN0YWdlLnNjYWxlTW9kZSA9IEdhbWVDb25maWcuc2NhbGVNb2RlO1xyXG4gICAgTGF5YS5zdGFnZS5zY2FsZU1vZGUgPSBHYW1lQ29uZmlnLnNjYWxlTW9kZVxyXG4gICAgTGF5YS5zdGFnZS5zY3JlZW5Nb2RlID0gR2FtZUNvbmZpZy5zY3JlZW5Nb2RlXHJcbiAgICBMYXlhLnN0YWdlLmFsaWduViA9IEdhbWVDb25maWcuYWxpZ25WXHJcbiAgICBMYXlhLnN0YWdlLmFsaWduSCA9IEdhbWVDb25maWcuYWxpZ25IXHJcbiAgICAvL+WFvOWuueW+ruS/oeS4jeaUr+aMgeWKoOi9vXNjZW5l5ZCO57yA5Zy65pmvXHJcbiAgICBMYXlhLlVSTC5leHBvcnRTY2VuZVRvSnNvbiA9IEdhbWVDb25maWcuZXhwb3J0U2NlbmVUb0pzb25cclxuXHJcbiAgICAvL+aJk+W8gOiwg+ivlemdouadv++8iOmAmui/h0lEReiuvue9ruiwg+ivleaooeW8j++8jOaIluiAhXVybOWcsOWdgOWinuWKoGRlYnVnPXRydWXlj4LmlbDvvIzlnYflj6/miZPlvIDosIPor5XpnaLmnb/vvIlcclxuICAgIGlmIChHYW1lQ29uZmlnLmRlYnVnIHx8IExheWEuVXRpbHMuZ2V0UXVlcnlTdHJpbmcoJ2RlYnVnJykgPT0gJ3RydWUnKSBMYXlhLmVuYWJsZURlYnVnUGFuZWwoKVxyXG4gICAgaWYgKEdhbWVDb25maWcucGh5c2ljc0RlYnVnICYmIExheWFbJ1BoeXNpY3NEZWJ1Z0RyYXcnXSkgTGF5YVsnUGh5c2ljc0RlYnVnRHJhdyddLmVuYWJsZSgpXHJcbiAgICBpZiAoR2FtZUNvbmZpZy5zdGF0KSBMYXlhLlN0YXQuc2hvdygpXHJcbiAgICBMYXlhLmFsZXJ0R2xvYmFsRXJyb3IgPSB0cnVlXHJcbiAgICAvL+a/gOa0u+i1hOa6kOeJiOacrOaOp+WItu+8jHZlcnNpb24uanNvbueUsUlEReWPkeW4g+WKn+iDveiHquWKqOeUn+aIkO+8jOWmguaenOayoeacieS5n+S4jeW9seWTjeWQjue7rea1geeoi1xyXG4gICAgTGF5YS5SZXNvdXJjZVZlcnNpb24uZW5hYmxlKCd2ZXJzaW9uLmpzb24nLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25WZXJzaW9uTG9hZGVkKSwgTGF5YS5SZXNvdXJjZVZlcnNpb24uRklMRU5BTUVfVkVSU0lPTilcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25WZXJzaW9uTG9hZGVkKCk6IHZvaWQge1xyXG4gICAgLy/mv4DmtLvlpKflsI/lm77mmKDlsITvvIzliqDovb3lsI/lm77nmoTml7blgJnvvIzlpoLmnpzlj5HnjrDlsI/lm77lnKjlpKflm77lkIjpm4bph4zpnaLvvIzliJnkvJjlhYjliqDovb3lpKflm77lkIjpm4bvvIzogIzkuI3mmK/lsI/lm75cclxuICAgIExheWEuQXRsYXNJbmZvTWFuYWdlci5lbmFibGUoJ2ZpbGVjb25maWcuanNvbicsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkNvbmZpZ0xvYWRlZCkpXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQ29uZmlnTG9hZGVkKCk6IHZvaWQge1xyXG4gICAgLy/liqDovb1JREXmjIflrprnmoTlnLrmma9cclxuICAgIEdhbWVDb25maWcuc3RhcnRTY2VuZSAmJiBMYXlhLlNjZW5lLm9wZW4oR2FtZUNvbmZpZy5zdGFydFNjZW5lKVxyXG4gIH1cclxufVxyXG4vL+a/gOa0u+WQr+WKqOexu1xyXG5uZXcgTWFpbigpXHJcbiIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWZmZWN0VXRpbHMgIHtcbiAgLyoqXG4gICAqIOexu+S8vG1hY+S4iuWbvuagh+S4iuS4i+aKluWKqOeahOaViOaenFxuICAgKiBAcGFyYW0ge1Nwcml0ZX0gb2JqIOaKluWKqOWvueixoVxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5pdFkg6KaB5oqW5Yqo55qE5a+56LGh55qE5Yid5aeLWeWAvO+8jOWOn+Wni+S9jee9rlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayDmipbliqjliqjnlLvlrozmiJDlm57osIPlh73mlbBcbiAgICogQHBhcmFtIHthbnl9IHRoaXNPYmog5Zue6LCD5Ye95pWwdGhpc+WvueixoVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBtYWNJY29uU2hha2Uob2JqLCBpbml0WSwgY2FsbGJhY2ssIHRoaXNPYmopIHtcbiAgICAvL+aKluWKqOmikeeOh1vml7bpl7TvvIznp7vliqjot53nprtd77yM5Y+v5L+u5pS5XG4gICAgbGV0IGFyciA9IFtbMjAsIDMwMF0sIFsxNSwgMzAwXSwgWzEwLCAzMDBdLCBbNSwgMzAwXV1cblxuICAgIGxldCBpbmRleCA9IDBcbiAgICB0b1NoYWtlKClcblxuICAgIGZ1bmN0aW9uIHRvU2hha2UoKSB7XG4gICAgICBpZiAoaW5kZXggPj0gYXJyLmxlbmd0aCkge1xuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjay5hcHBseSh0aGlzT2JqLCBbXSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIExheWEuVHdlZW4udG8oXG4gICAgICAgICAgb2JqLFxuICAgICAgICAgIHsgeTogaW5pdFkgLSBhcnJbaW5kZXhdWzBdIH0sXG4gICAgICAgICAgYXJyW2luZGV4XVsxXSxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUobnVsbCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxuICAgICAgICAgICAgICBvYmosXG4gICAgICAgICAgICAgIHsgeTogaW5pdFkgfSxcbiAgICAgICAgICAgICAgYXJyW2luZGV4XVsxXSxcbiAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZShudWxsLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICArK2luZGV4XG4gICAgICAgICAgICAgICAgdG9TaGFrZSgpXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pLFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOWQkeS4iuenu+WKqOa3oeWHuu+8iOW8ueWHuuahhu+8iVxuICAgKiBAcGFyYW0ge1Nwcml0ZX0gb2JqIOa3oeWHuuWvueixoVxuICAgKiBAcGFyYW0ge251bWJlcn0gdGltZSDmt6Hlh7rml7bpl7RcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZWFzZSDmt6Hlh7rlh73mlbBcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sg5reh5Ye65a6M5oiQ5Zue6LCD5Ye95pWwXG4gICAqIEBwYXJhbSB7YW55fSB0aGlzT2JqIOWbnuiwg+WHveaVsHRoaXPlr7nosaFcbiAgICogQHBhcmFtIHtBcnJheX0gYXJyRGF0YSDlm57osIPkvKDlj4JcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZmxvd091dChvYmosIHRpbWUgPSA1MDAsIGVhc2UgPSBudWxsLCBjYWxsYmFjayA9IG51bGwsIHRoaXNPYmogPSBudWxsLCBhcnJEYXRhID0gbnVsbCkge1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgTGF5YS5Ud2Vlbi50byhvYmosIHsgeTogb2JqLnkgLSAxNTAsIGFscGhhOiAwIH0sIHRpbWUsIGVhc2UsIExheWEuSGFuZGxlci5jcmVhdGUodGhpc09iaiwgY2FsbGJhY2ssIGFyckRhdGEpKVxuICAgIH0gZWxzZSB7XG4gICAgICBMYXlhLlR3ZWVuLnRvKG9iaiwgeyB5OiBvYmoueSAtIDE1MCwgYWxwaGE6IDAgfSwgdGltZSwgZWFzZSwgTGF5YS5IYW5kbGVyLmNyZWF0ZShvYmosIG9iai5yZW1vdmVTZWxmLCBhcnJEYXRhKSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5paH5pys5pWw5a2X5aKe5YeP5pWI5p6cXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydE51bSDlvIDlp4vmlbDlgLxcbiAgICogQHBhcmFtIHtudW1iZXJ9IGVuZE51bSDmuJDlj5jliLDnmoTmlbDlgLxcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sg5reh5Ye65a6M5oiQ5Zue6LCD5Ye95pWwXG4gICAqIEBwYXJhbSB7YW55fSB0aGlzT2JqIOWbnuiwg+WHveaVsHRoaXPlr7nosaFcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZmxvd051bShzdGFydE51bSwgZW5kTnVtLCBjYWxsYmFjaywgdGhpc09iaiA9IG51bGwpIHtcbiAgICBsZXQgY2hhbmdlID0gTWF0aC5hYnMoZW5kTnVtIC0gc3RhcnROdW0pXG4gICAgaWYgKGNoYW5nZSA8PSAwKSByZXR1cm5cbiAgICBsZXQgZXZlcnlDaGFuZ2UgPSBjaGFuZ2UgLyAoZW5kTnVtIC0gc3RhcnROdW0pXG4gICAgbGV0IGN1cnJOdW0gPSBzdGFydE51bVxuICAgIGxldCB0aW1lciA9IG5ldyBMYXlhLlRpbWVyKClcbiAgICB0aW1lci5sb29wKDMwLCB0aGlzLCBjaGFuZ2VGdW4pXG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VGdW4oKSB7XG4gICAgICBjdXJyTnVtICs9IGV2ZXJ5Q2hhbmdlXG4gICAgICAtLWNoYW5nZVxuICAgICAgaWYgKGNoYW5nZSA8IDApIHtcbiAgICAgICAgdGltZXIuY2xlYXJBbGwodGhpcylcbiAgICAgICAgdGltZXIgPSBudWxsXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjay5hcHBseSh0aGlzT2JqLCBbY3Vyck51bV0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOW8gOWni+mXqueDgVxuICAgKiBAcGFyYW0ge1Nwcml0ZX0gb2JqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhbHBoYVRpbWUg6Zeq54OB6aKR546HXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHN0YXJ0RmxpY2tlcihvYmosIGFscGhhVGltZSA9IDcwMCkge1xuICAgIG9iai5hbHBoYSA9IDFcbiAgICBMYXlhLlR3ZWVuLnRvKFxuICAgICAgb2JqLFxuICAgICAgeyBhbHBoYTogMCB9LFxuICAgICAgYWxwaGFUaW1lLFxuICAgICAgbnVsbCxcbiAgICAgIExheWEuSGFuZGxlci5jcmVhdGUoXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIExheWEuVHdlZW4udG8ob2JqLCB7IGFscGhhOiAxIH0sIGFscGhhVGltZSwgbnVsbCwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLnN0YXJ0RmxpY2tlciwgW29ial0pKVxuICAgICAgICB9LmJpbmQodGhpcyksXG4gICAgICApLFxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiDlgZzmraLliqjnlLvmiYDmnInliqjnlLvlkI7lrrnlmajkvY3nva7liJ3lp4vljJbliLDljp/kvY3vvIzlkKbliJnlj6/og73lh7rnjrDkvY3nva7mlLnlj5jnmoRidWdcbiAgICogQHBhcmFtIHtTcHJpdGV9IG9ialxuICAgKiBAcGFyYW0ge251bWJlcn0geFBvc1xuICAgKiBAcGFyYW0ge251bWJlcn0geVBvc1xuICAgKi9cbiAgcHVibGljIHN0YXRpYyBzdG9wRWZmZWN0KG9iaiwgeFBvcyA9IG51bGwsIHlQb3MgPSBudWxsKSB7XG4gICAgTGF5YS5Ud2Vlbi5jbGVhckFsbChvYmopXG4gICAgaWYgKHhQb3MgIT09IG51bGwgJiYgeVBvcyAhPT0gbnVsbCkge1xuICAgICAgb2JqLnBvcyh4UG9zLCB5UG9zKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDngrnlh7vmlL7lpKfnvKnlsI/mlYjmnpxcbiAgICogQHBhcmFtIHtMYXlhLlNwcml0ZX1cbiAgICogQHBhcmFtIHtib29sZWFufSBpc0NoYW5nZVhZIOWmguaenOS4reW/g+eCueaYr+mUmueCueS4jemcgOimgeS/ruaUueS9jee9rlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBjbGlja0VmZmVjdChzcCwgaXNDaGFuZ2VYWSA9IHRydWUpIHtcbiAgICBpZiAoIXNwKSByZXR1cm5cbiAgICBzcC5vZmYoTGF5YS5FdmVudC5NT1VTRV9ET1dOLCB0aGlzLCB0aGlzLmN1YmljSW5PdXRFZmZlY3QpXG4gICAgc3Aub24oTGF5YS5FdmVudC5NT1VTRV9ET1dOLCB0aGlzLCB0aGlzLmN1YmljSW5PdXRFZmZlY3QsIFtzcCwgaXNDaGFuZ2VYWV0pXG4gIH1cbiAgcHVibGljIHN0YXRpYyBjbGVhckNsaWNrRWZmZWN0KHNwKSB7XG4gICAgaWYgKCFzcCkgcmV0dXJuXG4gICAgc3Aub2ZmKExheWEuRXZlbnQuTU9VU0VfRE9XTiwgdGhpcywgdGhpcy5jdWJpY0luT3V0RWZmZWN0KVxuICB9XG4gIHB1YmxpYyBzdGF0aWMgY3ViaWNJbk91dEVmZmVjdChzcCwgaXNDaGFuZ2VYWSkge1xuICAgIGlmIChzcC5fYW5pQnV0dG9uRWZmZWN0KSByZXR1cm5cbiAgICBzcC5fYW5pQnV0dG9uRWZmZWN0ID0gdHJ1ZVxuICAgIGxldCBfeCA9IHNwLnhcbiAgICBsZXQgX3kgPSBzcC55XG4gICAgbGV0IF9zY2FYID0gc3Auc2NhbGVYXG4gICAgbGV0IF9zY2FZID0gc3Auc2NhbGVZXG4gICAgbGV0IF9iaWdYLCBfYmlnWVxuICAgIGlmICghaXNDaGFuZ2VYWSkge1xuICAgICAgX2JpZ1ggPSBfeCAtICgoc3Aud2lkdGggKiAwLjEpID4+IDEpXG4gICAgICBfYmlnWSA9IF95IC0gKChzcC5oZWlnaHQgKiAwLjEpID4+IDEpXG4gICAgfSBlbHNlIHtcbiAgICAgIF9iaWdYID0gX3hcbiAgICAgIF9iaWdZID0gX3lcbiAgICB9XG4gICAgTGF5YS5Ud2Vlbi50byhcbiAgICAgIHNwLFxuICAgICAgeyB4OiBfYmlnWCwgeTogX2JpZ1ksIHNjYWxlWDogMS4xICogX3NjYVgsIHNjYWxlWTogMS4xICogX3NjYVkgfSxcbiAgICAgIDEwMCxcbiAgICAgIG51bGwsXG4gICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcbiAgICAgICAgTGF5YS5Ud2Vlbi50byhcbiAgICAgICAgICBzcCxcbiAgICAgICAgICB7IHg6IF94LCB5OiBfeSwgc2NhbGVYOiBfc2NhWCwgc2NhbGVZOiBfc2NhWSB9LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFzcC5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgICAgc3AuX2FuaUJ1dHRvbkVmZmVjdCA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgIClcbiAgICAgIH0pLFxuICAgIClcbiAgfVxufVxuIiwiLyoqXHJcbiAqIG5hbWVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBTaW5nbGV0b24ge1xyXG4gIC8qKlxyXG4gICAqIGRlZmF1bHQgY29uc3RyYWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgX2luc3RhbmNlOiBhbnlcclxuICAvKipcclxuICAgKiBnZXQgaW5zdGFuY2Ugb3IgY3JlYXRlIG5ldyBpbnN0YW5jZVxyXG4gICAqIEByZXR1cm5zIHthbnl9XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBDcmVhdGVPckdldCguLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICBjb25zdCBpbnN0VDogYW55ID0gdGhpc1xyXG4gICAgcmV0dXJuIChpbnN0VC5faW5zdGFuY2UgPSBpbnN0VC5faW5zdGFuY2UgfHwgbmV3IGluc3RUKC4uLmFyZ3MpKVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZW51bSBMYXllckNvbnN0IHtcbiAgYmFzZSA9IDEsXG4gIGJhc2UxLFxuICB2aWV3LFxuICBzaGFyZSxcbiAgZGlhbG9nLFxuICBsb2FkaW5nLFxufVxuIiwiZXhwb3J0IGVudW0gVmlld0NvbnN0IHtcclxuICBNYWluID0gMSxcclxuICBMb2FkaW5nLFxyXG4gIFZpZXdUZXN0LFxyXG4gIFZpZXdUZXN0MSxcclxuICBEaWFsb2dUZXN0LFxyXG4gIEJhc2VUZXN0LFxyXG4gIEFQYWdlLFxyXG4gIEJQYWdlXHJcbn1cclxuIiwiaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvU2VydmljZSdcbmltcG9ydCB7IERpc3BhdGNoZXIgfSBmcm9tICcuLi9zZXJ2aWNlL2Rpc3BhdGNoZXIvRGlzcGF0Y2hlcidcbmltcG9ydCBTb2NrZXQgZnJvbSAnLi4vLi4vbmV0L1NvY2tldCdcbmltcG9ydCB7IFN0cmluZ1V0aWwgfSBmcm9tICcuL3V0aWxzL1N0cmluZ1V0aWwnXG5pbXBvcnQgeyBUaW1lVXRpbCB9IGZyb20gJy4vdXRpbHMvVGltZVV0aWwnXG5cbmltcG9ydCBHYW1lTmV0IGZyb20gJy4uLy4uL25ldC9odHRwL0dhbWVOZXQnXG5pbXBvcnQgeyBGZXRjaCB9IGZyb20gJy4uLy4uL25ldC9GZXRjaCdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVBcHAge1xuICAvLyDlhajlsYDphY3nva7mlbDmja5cbiAgcHVibGljIHN0YXRpYyBHbG9iYWxEYXRhOiBhbnkgPSBudWxsXG5cbiAgLyoqXG4gICAqIOWIneWni+WMluWHveaVsFxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgaW5pdCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgR2FtZUFwcC5HbG9iYWxEYXRhID0gTGF5YS5sb2FkZXIuZ2V0UmVzKCdjb25mL2dsb2JhbC5qc29uJylcbiAgICAgIC8v5bin6L2u6K+iXG4gICAgICBTZXJ2aWNlLkluaXQoKVxuICAgICAgcmVzb2x2ZSgpXG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGRpc3BhdGNoZXIoKTogRGlzcGF0Y2hlciB7XG4gICAgcmV0dXJuIFNlcnZpY2UuZGlzcGF0Y2hlclxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXQgU3RyaW5nVXRpbCgpOiBTdHJpbmdVdGlsIHtcbiAgICByZXR1cm4gU3RyaW5nVXRpbC5DcmVhdGVPckdldCgpXG4gIH1cbiAgcHVibGljIHN0YXRpYyBnZXQgVGltZVV0aWwoKTogVGltZVV0aWwge1xuICAgIHJldHVybiBUaW1lVXRpbC5DcmVhdGVPckdldCgpXG4gIH1cbiAgcHVibGljIHN0YXRpYyBnZXQgU29ja2V0KCk6IFNvY2tldCB7XG4gICAgcmV0dXJuIFNvY2tldC5DcmVhdGVPckdldCgpXG4gIH1cbiAgcHVibGljIHN0YXRpYyBnZXQgbmV0KCk6IEdhbWVOZXQge1xuICAgIHJldHVybiBHYW1lTmV0LkNyZWF0ZU9yR2V0KClcbiAgfVxuICBwdWJsaWMgc3RhdGljIGdldCBmZXRjaCgpOiBGZXRjaCB7XG4gICAgcmV0dXJuIEZldGNoLmluaXQoJ21haW4nLCB7IHVybDogJ2h0dHA6Ly8xMC4xLjEwMC45NzozMDAxLycgfSlcbiAgfVxufVxuIiwiLyoqXHJcbiAqIOWkmuivreiogExhYmVsXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBITGFiZWwgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgfVxyXG4gIC8qKiBAcHJvcCB7bmFtZTpMYW5ndWFnZUlELHR5cGU6c3RyaW5nfSovXHJcbiAgcHVibGljIExhbmd1YWdlSUQ6IHN0cmluZ1xyXG4gIC8qKiBAcHJvcCB7bmFtZTpJc0ZpdCx0eXBlOkJvb2x9Ki9cclxuICBwdWJsaWMgSXNGaXQ6IGJvb2xlYW4gPSB0cnVlXHJcbiAgLyoqIEBwcm9wIHtuYW1lOklzRmlsbCx0aXBzOlwiMSwwXCIsdHlwZTpCb29sfSovXHJcbiAgcHVibGljIElzRmlsbDogYm9vbGVhbiA9IGZhbHNlXHJcblxyXG4gIHByaXZhdGUgX2xhbmdMYWJlbDogTGF5YS5MYWJlbFxyXG4gIG9uQXdha2UoKSB7XHJcbiAgICB0aGlzLl9sYW5nTGFiZWwgPSB0aGlzLm93bmVyIGFzIExheWEuTGFiZWxcclxuICAgIHRoaXMubGFuZygpXHJcbiAgfVxyXG4gIHByaXZhdGUgbGFuZygpIHtcclxuICAgIGlmICh0aGlzLkxhbmd1YWdlSUQpIHtcclxuICAgICAgdGhpcy5fbGFuZ0xhYmVsLnRleHQgPSB0aGlzLkxhbmd1YWdlSURcclxuICAgIH1cclxuICAgIHRoaXMuZml0KClcclxuICB9XHJcbiAgcHVibGljIGZpdCgpIHtcclxuICAgIGlmICghdGhpcy5Jc0ZpdCkgcmV0dXJuXHJcbiAgICBpZiAoIXRoaXMuX2xhbmdMYWJlbC53b3JkV3JhcCkge1xyXG4gICAgICBpZiAodGhpcy5Jc0ZpbGwpIHtcclxuICAgICAgICBpZiAodGhpcy5fbGFuZ0xhYmVsWydfdGYnXS50ZXh0V2lkdGggPiB0aGlzLl9sYW5nTGFiZWwud2lkdGgpIHRoaXMuZml0U2hvcnRXaWR0aCgpXHJcbiAgICAgICAgZWxzZSB0aGlzLmZpdExvbmdXaWR0aCgpXHJcbiAgICAgIH0gZWxzZSB0aGlzLmZpdFNob3J0V2lkdGgoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuSXNGaWxsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xhbmdMYWJlbFsnX3RmJ10udGV4dEhlaWdodCA+IHRoaXMuX2xhbmdMYWJlbC5oZWlnaHQpIHRoaXMuZml0U2hvcnRIZWlnaHQoKVxyXG4gICAgICAgIGVsc2UgdGhpcy5maXRMb25nSGVpZ2h0KClcclxuICAgICAgfSBlbHNlIHRoaXMuZml0U2hvcnRIZWlnaHQoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmaXRTaG9ydFdpZHRoKCkge1xyXG4gICAgdmFyIGZsYWcgPSB0aGlzLl9sYW5nTGFiZWxbJ190ZiddLnRleHRXaWR0aCA+IHRoaXMuX2xhbmdMYWJlbC53aWR0aFxyXG4gICAgdmFyIGZTaXplID0gdGhpcy5fbGFuZ0xhYmVsLmZvbnRTaXplXHJcbiAgICB3aGlsZSAoZmxhZykge1xyXG4gICAgICBmU2l6ZSA9IGZTaXplIC0gMVxyXG4gICAgICBMYXlhLkJyb3dzZXIuY29udGV4dC5mb250ID0gZlNpemUgKyAncHggQXJpYWwnXHJcbiAgICAgIHZhciBicm93c2VyVGV4dCA9IExheWEuQnJvd3Nlci5jb250ZXh0Lm1lYXN1cmVUZXh0KHRoaXMuX2xhbmdMYWJlbC50ZXh0KVxyXG4gICAgICBmbGFnID0gYnJvd3NlclRleHQud2lkdGggPiB0aGlzLl9sYW5nTGFiZWwud2lkdGggJiYgZlNpemUgPiAxMlxyXG4gICAgfVxyXG4gICAgdGhpcy5fbGFuZ0xhYmVsLmZvbnRTaXplID0gZlNpemVcclxuICB9XHJcbiAgcHJpdmF0ZSBmaXRMb25nV2lkdGgoKSB7XHJcbiAgICB2YXIgZmxhZyA9IHRoaXMuX2xhbmdMYWJlbFsnX3RmJ10udGV4dFdpZHRoIDwgdGhpcy5fbGFuZ0xhYmVsLndpZHRoXHJcbiAgICB2YXIgZlNpemUgPSB0aGlzLl9sYW5nTGFiZWwuZm9udFNpemVcclxuICAgIHdoaWxlIChmbGFnKSB7XHJcbiAgICAgIGZTaXplID0gZlNpemUgKyAxXHJcbiAgICAgIExheWEuQnJvd3Nlci5jb250ZXh0LmZvbnQgPSBmU2l6ZSArICdweCBBcmlhbCdcclxuICAgICAgdmFyIGJyb3dzZXJUZXh0ID0gTGF5YS5Ccm93c2VyLmNvbnRleHQubWVhc3VyZVRleHQodGhpcy5fbGFuZ0xhYmVsLnRleHQpXHJcbiAgICAgIGZsYWcgPSBicm93c2VyVGV4dC53aWR0aCA8IHRoaXMuX2xhbmdMYWJlbC53aWR0aFxyXG4gICAgfVxyXG4gICAgdGhpcy5fbGFuZ0xhYmVsLmZvbnRTaXplID0gZlNpemVcclxuICB9XHJcbiAgcHJpdmF0ZSBmaXRTaG9ydEhlaWdodCgpIHtcclxuICAgIHZhciBmbGFnID0gdGhpcy5fbGFuZ0xhYmVsWydfdGYnXS50ZXh0SGVpZ2h0ID4gdGhpcy5fbGFuZ0xhYmVsLmhlaWdodFxyXG4gICAgdmFyIGZTaXplID0gdGhpcy5fbGFuZ0xhYmVsLmZvbnRTaXplXHJcbiAgICB3aGlsZSAoZmxhZykge1xyXG4gICAgICBmU2l6ZSA9IGZTaXplIC0gMVxyXG4gICAgICBMYXlhLkJyb3dzZXIuY29udGV4dC5mb250ID0gZlNpemUgKyAncHggQXJpYWwnXHJcbiAgICAgIHRoaXMuX2xhbmdMYWJlbC5mb250U2l6ZSA9IGZTaXplXHJcbiAgICAgIGZsYWcgPSB0aGlzLl9sYW5nTGFiZWxbJ190ZiddLnRleHRIZWlnaHQgPiB0aGlzLl9sYW5nTGFiZWwuaGVpZ2h0ICYmIGZTaXplID4gMTJcclxuICAgIH1cclxuICB9XHJcbiAgcHJpdmF0ZSBmaXRMb25nSGVpZ2h0KCkge1xyXG4gICAgdmFyIGZsYWcgPSB0aGlzLl9sYW5nTGFiZWxbJ190ZiddLnRleHRIZWlnaHQgPCB0aGlzLl9sYW5nTGFiZWwuaGVpZ2h0XHJcbiAgICB2YXIgZlNpemUgPSB0aGlzLl9sYW5nTGFiZWwuZm9udFNpemVcclxuICAgIHdoaWxlIChmbGFnKSB7XHJcbiAgICAgIGZTaXplID0gZlNpemUgKyAxXHJcbiAgICAgIExheWEuQnJvd3Nlci5jb250ZXh0LmZvbnQgPSBmU2l6ZSArICdweCBBcmlhbCdcclxuICAgICAgdGhpcy5fbGFuZ0xhYmVsLmZvbnRTaXplID0gZlNpemVcclxuICAgICAgZmxhZyA9IHRoaXMuX2xhbmdMYWJlbFsnX3RmJ10udGV4dEhlaWdodCA8IHRoaXMuX2xhbmdMYWJlbC5oZWlnaHRcclxuICAgIH1cclxuICAgIHRoaXMuX2xhbmdMYWJlbC5mb250U2l6ZSA9IGZTaXplIC0gMVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTaW5nbGV0b24gfSBmcm9tICcuLi8uLi9iYXNlL1NpbmdsZXRvbidcclxuXHJcbmV4cG9ydCBjbGFzcyBTdHJpbmdVdGlsIGV4dGVuZHMgU2luZ2xldG9uIHtcclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNpbmdsZXRvbiB9IGZyb20gJy4uLy4uL2Jhc2UvU2luZ2xldG9uJ1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpbWVVdGlsIGV4dGVuZHMgU2luZ2xldG9uIHtcclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgfVxyXG4gIC8v5Ymp5L2Z5pe26Ze06L2s5pe25YiG56eS77yI56eS77yJXHJcbiAgcHJpdmF0ZSBjaGFuZ2VUaW1lKHRpbWU6IG51bWJlcik6IHsgaG91cnM6IG51bWJlcjsgbWludXRlczogbnVtYmVyOyBzZWNvbmRzOiBudW1iZXIgfSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBob3VyczogTWF0aC5mbG9vcih0aW1lIC8gMzYwMCksXHJcbiAgICAgIG1pbnV0ZXM6IE1hdGguZmxvb3IoKHRpbWUgJSAzNjAwKSAvIDYwKSxcclxuICAgICAgc2Vjb25kczogdGltZSAlIDYwLFxyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiDlgJLorqHml7ZcclxuICAgKiBAcGFyYW0gdGltZSDml7bpl7TmiLPvvIhz77yJXHJcbiAgICogQHBhcmFtIGhvdXIg5pe2XHJcbiAgICogQHBhcmFtIG1pbnV0ZSDliIZcclxuICAgKiBAcGFyYW0gc2Vjb25kIOenklxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb3VudERvd24odGltZTogbnVtYmVyLCBob3VyOiBzdHJpbmcgPSAn5pe2JywgbWludXRlOiBzdHJpbmcgPSAn5YiGJywgc2Vjb25kOiBzdHJpbmcgPSAn56eSJyk6IHN0cmluZyB7XHJcbiAgICBsZXQgdGVtcCA9IHRoaXMuY2hhbmdlVGltZSh0aW1lKVxyXG4gICAgcmV0dXJuIGAke3RlbXAuaG91cnN9JHtob3VyfSR7dGVtcC5taW51dGVzfSR7bWludXRlfSR7dGVtcC5zZWNvbmRzfSR7c2Vjb25kfWBcclxuICB9XHJcbiAgLyoqXHJcbiAgICog5qC85byP5YyW5pe26Ze0XHJcbiAgICogQHBhcmFtIGRhdGUgRGF0ZVxyXG4gICAqIEBwYXJhbSBmb3JtYXQg5qC85byPXHJcbiAgICovXHJcbiAgcHVibGljIERhdGVGb3JtYXQoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcgPSAneXl5eS1NTS1kZCBoaDptbTpzcycpOiBzdHJpbmcge1xyXG4gICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcclxuICAgIGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDEgPiA5ID8gZGF0ZS5nZXRNb250aCgpICsgMSA6IGAwJHtkYXRlLmdldE1vbnRoKCkgKyAxfWBcclxuICAgIGxldCBtb250aDIgPSBkYXRlLmdldE1vbnRoKCkgKyAxXHJcbiAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCkgPiA5ID8gZGF0ZS5nZXREYXRlKCkgOiBgMCR7ZGF0ZS5nZXREYXRlKCl9YFxyXG4gICAgbGV0IGRheTIgPSBkYXRlLmdldERhdGUoKVxyXG4gICAgbGV0IGhvdXIgPSBkYXRlLmdldEhvdXJzKCkgPiA5ID8gZGF0ZS5nZXRIb3VycygpIDogYDAke2RhdGUuZ2V0SG91cnMoKX1gXHJcbiAgICBsZXQgaG91cjIgPSBkYXRlLmdldEhvdXJzKClcclxuICAgIGxldCBtaW51dGUgPSBkYXRlLmdldE1pbnV0ZXMoKSA+IDkgPyBkYXRlLmdldE1pbnV0ZXMoKSA6IGAwJHtkYXRlLmdldE1pbnV0ZXMoKX1gXHJcbiAgICBsZXQgbWludXRlMiA9IGRhdGUuZ2V0TWludXRlcygpXHJcbiAgICBsZXQgc2Vjb25kID0gZGF0ZS5nZXRTZWNvbmRzKCkgPiA5ID8gZGF0ZS5nZXRTZWNvbmRzKCkgOiBgMCR7ZGF0ZS5nZXRTZWNvbmRzKCl9YFxyXG4gICAgbGV0IHNlY29uZDIgPSBkYXRlLmdldFNlY29uZHMoKVxyXG5cclxuICAgIHJldHVybiBmb3JtYXRcclxuICAgICAgLnJlcGxhY2UoL3l5eXkvLCBgJHt5ZWFyfWApXHJcbiAgICAgIC5yZXBsYWNlKC9NTS8sIGAke21vbnRofWApXHJcbiAgICAgIC5yZXBsYWNlKC9NLywgYCR7bW9udGgyfWApXHJcbiAgICAgIC5yZXBsYWNlKC9kZC8sIGAke2RheX1gKVxyXG4gICAgICAucmVwbGFjZSgvZC8sIGAke2RheTJ9YClcclxuICAgICAgLnJlcGxhY2UoL2hoLywgYCR7aG91cn1gKVxyXG4gICAgICAucmVwbGFjZSgvaC8sIGAke2hvdXIyfWApXHJcbiAgICAgIC5yZXBsYWNlKC9tbS8sIGAke21pbnV0ZX1gKVxyXG4gICAgICAucmVwbGFjZSgvbS8sIGAke21pbnV0ZTJ9YClcclxuICAgICAgLnJlcGxhY2UoL3NzLywgYCR7c2Vjb25kfWApXHJcbiAgICAgIC5yZXBsYWNlKC9zLywgYCR7c2Vjb25kMn1gKVxyXG4gIH1cclxuICAvKipcclxuICAgKiDojrflj5blvZPliY11dGPlpKkw54K5XHJcbiAgICovXHJcbiAgcHVibGljIFVUQ0RhdGUoKTogRGF0ZSB7XHJcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpXHJcbiAgICBub3cuc2V0VVRDSG91cnMoMClcclxuICAgIG5vdy5zZXRVVENNaW51dGVzKDApXHJcbiAgICBub3cuc2V0VVRDU2Vjb25kcygwKVxyXG4gICAgbm93LnNldFVUQ01pbGxpc2Vjb25kcygwKVxyXG4gICAgcmV0dXJuIG5vd1xyXG4gIH1cclxuICAvKipcclxuICAgKiDojrflj5blvZPliY3ml7bpl7TliLDliLAxOTcwLTEtMeeahOWkqeaVsO+8iHV0Y++8iVxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXRVVENEYXRlKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gKDI0ICogNjAgKiA2MCAqIDEwMDApKVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgbW9kdWxlIG12YyB7XG4gIGNsYXNzIENvbnRyb2xsZXJNYW5hZ2VyIHtcbiAgICBwcml2YXRlIGNvbnRyb2xsZXJzID0gbmV3IE1hcCgpXG5cbiAgICBwdWJsaWMgcmVnaXN0ZXIobXZjKSB7XG4gICAgICBjb25zdCBrZXkgPSBtdmMudmlld0tleVxuICAgICAgaWYgKHRoaXMuaXNFeGlzdHMoa2V5KSkgcmV0dXJuXG4gICAgICBpZiAobXZjLkNvbnRyb2xsZXIpIHtcbiAgICAgICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBtdmMuQ29udHJvbGxlcigpXG4gICAgICAgIGNvbnRyb2xsZXIuc2V0VmlldyhtdmMudmlldylcbiAgICAgICAgaWYgKG12Yy5Nb2RlbCkge1xuICAgICAgICAgIGNvbnRyb2xsZXIuc2V0TW9kZWwobmV3IG12Yy5Nb2RlbCgpKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29udHJvbGxlcnMuc2V0KGtleSwgY29udHJvbGxlcilcbiAgICAgICAgbXZjLnZpZXcuc2V0Q29udHJvbGxlcihjb250cm9sbGVyKVxuICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgdW5yZWdpc3Rlcihjb250cm9sbGVyS2V5KSB7XG4gICAgICBpZiAoIXRoaXMuaXNFeGlzdHMoY29udHJvbGxlcktleSkpIHJldHVyblxuICAgICAgdGhpcy5jb250cm9sbGVycy5kZWxldGUoY29udHJvbGxlcktleSlcbiAgICB9XG4gICAgaXNFeGlzdHMoY29udHJvbGxlcktleSkge1xuICAgICAgcmV0dXJuIHRoaXMuY29udHJvbGxlcnMuaGFzKGNvbnRyb2xsZXJLZXkpXG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPluaMh+WumkNvbnRyb2xsZXLlr7nosaFcbiAgICAgKiBAcGFyYW0gIGNvbnRyb2xsZXJLZXkgQ29udHJvbGxlcuWUr+S4gOagh+ivhlxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgZ2V0Q29udHJvbGxlcihjb250cm9sbGVyS2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250cm9sbGVycy5nZXQoY29udHJvbGxlcktleSlcbiAgICB9XG4gIH1cblxuICBleHBvcnQgY29uc3QgY29udHJvbGxlck1nciA9IG5ldyBDb250cm9sbGVyTWFuYWdlcigpXG59XG4iLCJpbXBvcnQgKiBhcyB2IGZyb20gJy4vVmlld01ncidcclxuaW1wb3J0ICogYXMgYyBmcm9tICcuL0NvbnRyb2xsZXJNYW5hZ2VyJ1xyXG4vKipcclxuICogTVZDXHJcbiAqIFtcclxuICogIHtcclxuICogICAgdmlld0tleSxcclxuICogICAgVmlldyxcclxuICogICAgdmlldyxWaWV35a6e5L6LXHJcbiAqICAgIExheWVyLFxyXG4gKiAgICBsYXllcixMYXllcuWunuS+i1xyXG4gKiAgICBldmVudCxcclxuICogICAgQ29udHJvbGxlcixcclxuICogICAgTW9kZWxcclxuICogIH1cclxuICogXVxyXG4gKi9cclxuY29uc3QgTVZDID0gW11cclxuZXhwb3J0IGNvbnN0IGZpbmRCeVZpZXdLZXkgPSB2aWV3S2V5ID0+IE1WQy5maW5kKGl0ZW0gPT4gaXRlbS52aWV3S2V5ID09PSB2aWV3S2V5KVxyXG5leHBvcnQgY29uc3QgdXBkYXRlTVZDSXRlbSA9ICh7IHZpZXdLZXksIC4uLnByb3AgfSkgPT4ge1xyXG4gIGNvbnN0IGluZGV4ID0gTVZDLmZpbmRJbmRleChpdGVtID0+IGl0ZW0udmlld0tleSA9PT0gdmlld0tleSlcclxuICBsZXQgbXZjXHJcbiAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgIGNvbnN0IGl0ZW0gPSBNVkNbaW5kZXhdXHJcbiAgICBtdmMgPSB7IC4uLml0ZW0sIC4uLnByb3AgfVxyXG4gICAgTVZDLnNwbGljZShpbmRleCwgMSwgbXZjKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBtdmMgPSB7IHZpZXdLZXksIC4uLnByb3AgfVxyXG4gICAgTVZDLnB1c2gobXZjKVxyXG4gIH1cclxuICByZXR1cm4gbXZjXHJcbn1cclxubGV0IFVJID0gTGF5YS5zdGFnZVxyXG5jb25zdCBSZWdpc3Rlck1WQyA9IChMYXllciwgQ29udHJvbGxlciA9IG51bGwsIE1vZGVsID0gbnVsbCkgPT4ge1xyXG4gIHJldHVybiBWaWV3ID0+IHtcclxuICAgIHVwZGF0ZU1WQ0l0ZW0oe1xyXG4gICAgICB2aWV3S2V5OiBWaWV3LnZpZXdLZXksXHJcbiAgICAgIExheWVyLFxyXG4gICAgICBDb250cm9sbGVyLFxyXG4gICAgICBNb2RlbCxcclxuICAgICAgVmlldyxcclxuICAgIH0pXHJcbiAgICBjb25zb2xlLmxvZyhWaWV3LmFyZ21lbnRzKVxyXG4gICAgcmV0dXJuIFZpZXdcclxuICB9XHJcbn1cclxuY29uc3Qgc2V0VUlSb290ID0gcm9vdCA9PiB7XHJcbiAgVUkgPSByb290XHJcbn1cclxuY29uc3QgY29udHJvbGxlck1nciA9IGMubXZjLmNvbnRyb2xsZXJNZ3JcclxuY29uc3Qgdmlld01nciA9IHYubXZjLnZpZXdNZ3JcclxuY29uc3Qgb3BlblZpZXcgPSB2Lm12Yy5vcGVuVmlld1xyXG5jb25zdCBjbG9zZVZpZXcgPSB2Lm12Yy5jbG9zZVZpZXdcclxuZXhwb3J0IHsgdmlld01nciwgY29udHJvbGxlck1nciwgb3BlblZpZXcsIGNsb3NlVmlldywgUmVnaXN0ZXJNVkMsIHNldFVJUm9vdCwgTVZDLCBVSSB9XHJcbiIsImltcG9ydCB7IHVwZGF0ZU1WQ0l0ZW0gfSBmcm9tICcuL012Y01ncidcclxuXHJcbmV4cG9ydCBjb25zdCBDbGljayA9ICh1aSwgLi4uYXJncykgPT4ge1xyXG4gIHJldHVybiAoVmlldywgbmFtZSwgZGVzY3JpcHRvcikgPT4ge1xyXG4gICAgY29uc3QgRXZlbnRUeXBlID0gTGF5YS5FdmVudC5DTElDS1xyXG4gICAgY29uc3QgbXZjID0gdXBkYXRlTVZDSXRlbSh7IHZpZXdLZXk6IFZpZXcuY29uc3RydWN0b3Iudmlld0tleSB9KVxyXG4gICAgbXZjLmV2ZW50ID0gbXZjLmV2ZW50IHx8IHt9XHJcbiAgICBjb25zdCBldmVudCA9IG12Yy5ldmVudFxyXG4gICAgZXZlbnRbRXZlbnRUeXBlXSA9IGV2ZW50W0V2ZW50VHlwZV0gfHwge31cclxuICAgIGNvbnN0IGV2ZW50VUkgPSBldmVudFtFdmVudFR5cGVdXHJcbiAgICBldmVudFVJW3VpXSA9IGV2ZW50VUlbdWldIHx8IFtdXHJcbiAgICBldmVudFVJW3VpXS5wdXNoKHsgZnVuYzogZGVzY3JpcHRvci52YWx1ZSwgYXJnOiBhcmdzIH0pXHJcblxyXG4gICAgcmV0dXJuIGRlc2NyaXB0b3JcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBiaW5kRXZlbnQgPSBtdmMgPT4ge1xyXG4gIGlmIChtdmMuZXZlbnQpIHtcclxuICAgIE9iamVjdC5lbnRyaWVzKG12Yy5ldmVudCkuZm9yRWFjaChldmVudCA9PiB7XHJcbiAgICAgIGNvbnN0IHR5cGUgPSBldmVudFswXVxyXG4gICAgICBjb25zdCBldmVudFVJID0gZXZlbnRbMV1cclxuICAgICAgT2JqZWN0LmVudHJpZXMoZXZlbnRVSSkuZm9yRWFjaChldmVudFVJID0+IHtcclxuICAgICAgICBjb25zdCB1aSA9IGV2ZW50VUlbMF1cclxuICAgICAgICBjb25zdCBmdW5jID0gZXZlbnRVSVsxXVxyXG4gICAgICAgIGZ1bmMuZm9yRWFjaChmdW5jID0+IHtcclxuICAgICAgICAgIG12Yy52aWV3W3VpXS5vbih0eXBlLCBtdmMudmlldywgKCkgPT4ge1xyXG4gICAgICAgICAgICBmdW5jLmZ1bmMuYXBwbHkobXZjLnZpZXcsIGZ1bmMuYXJnKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSVZpZXcgfSBmcm9tICcuL2ludGVyZmFjZS9JVmlldydcblxuaW1wb3J0IHsgSUxheWVyIH0gZnJvbSAnLi9pbnRlcmZhY2UvSUxheWVyJ1xuXG5pbXBvcnQgeyBVSSwgY29udHJvbGxlck1nciwgZmluZEJ5Vmlld0tleSB9IGZyb20gJy4vTXZjTWdyJ1xuaW1wb3J0IHsgYmluZEV2ZW50IH0gZnJvbSAnLi9VSUV2ZW50J1xuXG5leHBvcnQgbW9kdWxlIG12YyB7XG4gIGNsYXNzIFZpZXdNZ3Ige1xuICAgIHByaXZhdGUgdmlld3M6IE1hcDxzdHJpbmcsIElWaWV3PiA9IG5ldyBNYXA8c3RyaW5nLCBJVmlldz4oKVxuICAgIHByaXZhdGUgbGF5ZXJzOiBNYXA8c3RyaW5nLCBJTGF5ZXI+ID0gbmV3IE1hcDxzdHJpbmcsIElMYXllcj4oKVxuICAgIHByaXZhdGUgb3BlblZpZXdzOiBNYXA8c3RyaW5nLCBJVmlldz4gPSBuZXcgTWFwPHN0cmluZywgSVZpZXc+KClcblxuICAgIHB1YmxpYyBnZXRWaWV3KGtleSk6IElWaWV3IHtcbiAgICAgIHJldHVybiB0aGlzLnZpZXdzLmdldChrZXkpXG4gICAgfVxuICAgIHB1YmxpYyBzZXRWaWV3KGtleSwgdmlldzogSVZpZXcpOiB2b2lkIHtcbiAgICAgIHRoaXMudmlld3Muc2V0KGtleSwgdmlldylcbiAgICB9XG4gICAgcHVibGljIGdldExheWVyKExheWVyKTogSUxheWVyIHtcbiAgICAgIGxldCBsYXllciA9IHRoaXMubGF5ZXJzLmdldChMYXllci5sYXllcktleSlcbiAgICAgIGlmIChsYXllcikgcmV0dXJuIGxheWVyXG4gICAgICBsYXllciA9IHRoaXMuY3JlYXRlTGF5ZXIoTGF5ZXIpXG4gICAgICB0aGlzLnNldExheWVyKExheWVyLmxheWVyS2V5LCBsYXllcilcbiAgICAgIHJldHVybiBsYXllclxuICAgIH1cbiAgICBwdWJsaWMgc2V0TGF5ZXIoa2V5LCBsYXllcjogSUxheWVyKTogdm9pZCB7XG4gICAgICB0aGlzLmxheWVycy5zZXQoa2V5LCBsYXllcilcbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlblZpZXcoVmlldywgLi4uYXJncyk6IHZvaWQge1xuICAgICAgbGV0IF92aWV3ID0gdGhpcy5vcGVuVmlld3MuZ2V0KFZpZXcudmlld0tleSlcbiAgICAgIGlmIChfdmlldykge1xuICAgICAgICBfdmlldy5vcGVuQ2IuYXBwbHkoX3ZpZXcsIGFyZ3MpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgX3ZpZXcgPSB0aGlzLmdldFZpZXcoVmlldy52aWV3S2V5KVxuICAgICAgaWYgKF92aWV3KSB7XG4gICAgICAgIF92aWV3LmxheWVyLm9wZW5WaWV3KF92aWV3LCAuLi5hcmdzKVxuICAgICAgICB0aGlzLm9wZW5WaWV3cy5zZXQoVmlldy52aWV3S2V5LCBfdmlldylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBfdmlldyA9IHRoaXMuY3JlYXRlVmlldyhWaWV3KVxuICAgICAgX3ZpZXcubGF5ZXIub3BlblZpZXcoX3ZpZXcsIC4uLmFyZ3MpXG4gICAgfVxuICAgIHByaXZhdGUgY3JlYXRlVmlldyhWaWV3KSB7XG4gICAgICBjb25zdCBtdmMgPSBmaW5kQnlWaWV3S2V5KFZpZXcudmlld0tleSlcbiAgICAgIGNvbnN0IGxheWVyID0gdGhpcy5nZXRMYXllcihtdmMuTGF5ZXIpXG5cbiAgICAgIGxldCBfdmlldyA9IG5ldyBtdmMuVmlldygpXG4gICAgICBfdmlldy5sYXllciA9IGxheWVyXG4gICAgICBtdmMudmlldyA9IF92aWV3XG4gICAgICBtdmMubGF5ZXIgPSBsYXllclxuICAgICAgYmluZEV2ZW50KG12YylcbiAgICAgIGNvbnRyb2xsZXJNZ3IucmVnaXN0ZXIobXZjKVxuXG4gICAgICB0aGlzLnNldFZpZXcobXZjLnZpZXdLZXksIF92aWV3KVxuICAgICAgaWYgKF92aWV3LmluaXQpIF92aWV3LmluaXQoKVxuICAgICAgcmV0dXJuIF92aWV3XG4gICAgfVxuICAgIHByaXZhdGUgY3JlYXRlTGF5ZXIoTGF5ZXIpIHtcbiAgICAgIGNvbnN0IF9sYXllciA9IG5ldyBMYXllcihVSSlcbiAgICAgIF9sYXllci56T3JkZXIgPSBMYXllci5sYXllcktleVxuICAgICAgVUkuYWRkQ2hpbGQoX2xheWVyKVxuICAgICAgcmV0dXJuIF9sYXllclxuICAgIH1cbiAgICBwdWJsaWMgY2xvc2VWaWV3KFZpZXdPcktleU9ySW5zOiBhbnksIC4uLmFyZ3MpOiB2b2lkIHtcbiAgICAgIGxldCBfdmlld1xuICAgICAgaWYgKFZpZXdPcktleU9ySW5zLnZpZXdLZXkpIHtcbiAgICAgICAgX3ZpZXcgPSB0aGlzLmdldFZpZXcoVmlld09yS2V5T3JJbnMudmlld0tleSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5nZXRWaWV3KFZpZXdPcktleU9ySW5zKSkge1xuICAgICAgICBfdmlldyA9IHRoaXMuZ2V0VmlldyhWaWV3T3JLZXlPcklucylcbiAgICAgIH0gZWxzZSBpZiAoVmlld09yS2V5T3JJbnMuY29uc3RydWN0b3Iudmlld0tleSkge1xuICAgICAgICBfdmlldyA9IHRoaXMuZ2V0VmlldyhWaWV3T3JLZXlPcklucy5jb25zdHJ1Y3Rvci52aWV3S2V5KVxuICAgICAgfVxuICAgICAgaWYgKF92aWV3KSB7XG4gICAgICAgIF92aWV3LmxheWVyLmNsb3NlVmlldyhfdmlldywgLi4uYXJncylcbiAgICAgICAgdGhpcy5vcGVuVmlld3MuZGVsZXRlKF92aWV3LmNvbnN0cnVjdG9yLnZpZXdLZXkpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgaXNPcGVuKFZpZXdPcktleU9ySW5zKTogYm9vbGVhbiB7XG4gICAgICBsZXQgX3ZpZXdcbiAgICAgIGlmIChWaWV3T3JLZXlPcklucy52aWV3S2V5KSB7XG4gICAgICAgIF92aWV3ID0gdGhpcy5vcGVuVmlld3MuZ2V0KFZpZXdPcktleU9ySW5zLnZpZXdLZXkpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3BlblZpZXdzLmdldChWaWV3T3JLZXlPcklucykpIHtcbiAgICAgICAgX3ZpZXcgPSB0aGlzLm9wZW5WaWV3cy5nZXQoVmlld09yS2V5T3JJbnMpXG4gICAgICB9IGVsc2UgaWYgKFZpZXdPcktleU9ySW5zLmNvbnN0cnVjdG9yLnZpZXdLZXkpIHtcbiAgICAgICAgX3ZpZXcgPSB0aGlzLm9wZW5WaWV3cy5nZXQoVmlld09yS2V5T3JJbnMuY29uc3RydWN0b3Iudmlld0tleSlcbiAgICAgIH1cbiAgICAgIHJldHVybiAhIV92aWV3XG4gICAgfVxuICB9XG4gIGV4cG9ydCBjb25zdCB2aWV3TWdyID0gbmV3IFZpZXdNZ3IoKVxuICBleHBvcnQgY29uc3Qgb3BlblZpZXcgPSAoVmlldywgLi4uYXJncykgPT4ge1xuICAgIHZpZXdNZ3Iub3BlblZpZXcoVmlldywgLi4uYXJncylcbiAgfVxuXG4gIGV4cG9ydCBjb25zdCBjbG9zZVZpZXcgPSAoVmlld09yS2V5T3JJbnMsIC4uLmFyZ3MpID0+IHtcbiAgICB2aWV3TWdyLmNsb3NlVmlldyhWaWV3T3JLZXlPcklucywgLi4uYXJncylcbiAgfVxufVxuIiwiaW1wb3J0IEJhc2VNb2RlbCBmcm9tICcuLi9tb2RlbC9CYXNlTW9kZWwnXG5pbXBvcnQgKiBhcyB2IGZyb20gJy4uL3ZpZXcvQmFzZVZpZXcnXG5pbXBvcnQgQmFzZVZpZXcgPSB2LktVSS5CYXNlVmlld1xuaW1wb3J0IEdhbWVBcHAgZnJvbSAnLi4vLi4vZ2FtZS9HYW1lQXBwJ1xuaW1wb3J0IHsgZGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uL3NlcnZpY2UvZGlzcGF0Y2hlci9EaXNwYXRjaGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlQ29udHJvbGxlciB7XG4gIHByaXZhdGUgbW9kZWw6IEJhc2VNb2RlbFxuICBwcml2YXRlIHZpZXc6IEJhc2VWaWV3XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubW9kZWwgPSBudWxsXG4gICAgdGhpcy52aWV3ID0gbnVsbFxuICAgIHRoaXMuaW5pdCgpXG4gIH1cbiAgcHVibGljIGluaXQoKSB7fVxuICBwdWJsaWMgc2V0TW9kZWwobW9kZWwpIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWxcbiAgfVxuICBwdWJsaWMgZ2V0TW9kZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWxcbiAgfVxuICBwdWJsaWMgc2V0Vmlldyh2aWV3KSB7XG4gICAgdGhpcy52aWV3ID0gdmlld1xuICB9XG4gIHB1YmxpYyBnZXRWaWV3KCkge1xuICAgIHJldHVybiB0aGlzLnZpZXdcbiAgfVxuXG4gIC8v55uR5ZCs5LqL5Lu2XG4gIHB1YmxpYyBhZGRMaXN0ZW5lcihrZXksIGNhbGxiYWNrLCBjYWxsZXIpIHtcbiAgICBkaXNwYXRjaGVyLk9ic2VydmUoa2V5LCBjYWxsZXIsIGNhbGxiYWNrKVxuICB9XG4gIC8v56e76Zmk55uR5ZCs55qE5LqL5Lu2XG4gIHB1YmxpYyByZW1vdmVMaXN0ZW5lcihrZXkpIHtcbiAgICBkaXNwYXRjaGVyLlJlbW92ZShrZXkpXG4gIH1cbiAgLy/op6blj5Hkuovku7ZcbiAgcHVibGljIGRpc3BhdGNoKGtleSwgLi4uYXJncykge1xuICAgIGRpc3BhdGNoZXIuU2VuZE1zZyhrZXksIGFyZ3MpXG4gIH1cbiAgLyoqXG4gICAqIOazqOWGjOS7juacjeWKoeWZqOi/lOWbnua2iOaBr+eahOebkeWQrFxuICAgKiBAcGFyYW0gIGNtZCDmtojmga/moIfor4ZcbiAgICogQHBhcmFtIGNhbGxiYWNrIOWkhOeQhuWHveaVsFxuICAgKiBAcGFyYW0gIHRoaXNPYmog5aSE55CG5Ye95pWw5omA5bGe5a+56LGhXG4gICAqL1xuICBvYnNlcnZlclNvY2tldE1zZyhjbWQsIGNhbGxiYWNrLCB0aGlzT2JqKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gY21kIOa2iOaBr+agh+ivhlxuICAgKiBAcGFyYW0gbXNnIOaVsOaNrlxuICAgKiBAcGFyYW0gY2FsbGJhY2sg5aSE55CG5Ye95pWwXG4gICAqIEBwYXJhbSB0aGlzT2JqIOWkhOeQhuWHveaVsOaJgOWxnuWvueixoVxuICAgKi9cbiAgc2VuZFNvY2tldE1zZyhjbWQsIG1zZywgY2FsbGJhY2ssIHRoaXNPYmopIHt9XG5cbiAgLyoqXG4gICAqIOWPkemAgea2iOaBr+WIsEh0dHDmnI3liqHnq69cbiAgICogQHBhcmFtICBjbWQg5raI5oGv5qCH6K+GIOS+i+WmgjogVXNlci5sb2dpblxuICAgKiBAcGFyYW0gIG1zZyDmtojmga/lj4LmlbAg5L6L5aaCOiBsZXQgbXNnOmFueSA9IHtcInVOYW1lXCI6dU5hbWUsIFwidVBhc3NcIjp1UGFzc307XG4gICAqL1xuICBzZW5kSHR0cE1zZyhjbWQsIG1zZykge31cbiAgLy/lkJHlhbbku5bmqKHlnZfpgJrorq9cbiAgcHVibGljIHNlbmRNZXNzYWdlKCkge31cbn1cbiIsImltcG9ydCB7IElWaWV3IH0gZnJvbSAnLi4vaW50ZXJmYWNlL0lWaWV3J1xyXG5pbXBvcnQgeyBMYXllckNvbnN0IH0gZnJvbSAnLi4vLi4vY29uc3QvTGF5ZXJDb25zdCdcclxuaW1wb3J0IHsgSUxheWVyIH0gZnJvbSAnLi4vaW50ZXJmYWNlL0lMYXllcidcclxuZXhwb3J0IGNsYXNzIEJhc2VMYXllciBleHRlbmRzIExheWEuU3ByaXRlIGltcGxlbWVudHMgSUxheWVyIHtcclxuICBwcm90ZWN0ZWQgb3duU2NlbmU6IExheWEuU2NlbmVcclxuICBjb25zdHJ1Y3RvcihzY2VuZTogTGF5YS5TY2VuZSkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy5vd25TY2VuZSA9IHNjZW5lXHJcbiAgICB0aGlzLndpZHRoID0gdGhpcy5vd25TY2VuZS53aWR0aFxyXG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLm93blNjZW5lLmhlaWdodFxyXG4gICAgdGhpcy5oaXRUZXN0UHJpb3IgPSB0cnVlXHJcbiAgICB0aGlzLm1vdXNlVGhyb3VnaCA9IHRydWVcclxuICAgIHRoaXMubW91c2VFbmFibGVkID0gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGxheWVyS2V5ID0gTGF5ZXJDb25zdC5iYXNlXHJcbiAgcHVibGljIG9wZW5WaWV3KHZpZXc6IElWaWV3LCAuLi5hcmdzKTogdm9pZCB7XHJcbiAgICBpZiAodmlldy5vcGVuQ2IpIHtcclxuICAgICAgdmlldy5vcGVuQ2IuYXBwbHkodmlldywgYXJncylcclxuICAgIH1cclxuICAgIHRoaXMubW91c2VUaHJvdWdoID0gZmFsc2VcclxuICAgIHRoaXMuYWRkQ2hpbGQodmlldylcclxuICB9XHJcbiAgcHVibGljIGNsb3NlVmlldyh2aWV3OiBJVmlldyk6IHZvaWQge1xyXG4gICAgaWYgKHZpZXcuY2xvc2VDYikge1xyXG4gICAgICB2aWV3LmNsb3NlQ2IoKVxyXG4gICAgfVxyXG4gICAgdGhpcy5yZW1vdmVDaGlsZCh2aWV3KVxyXG4gICAgdGhpcy5tb3VzZVRocm91Z2ggPSB0aGlzLl9jaGlsZHJlbi5sZW5ndGggPT09IDBcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQmFzZUxheWVyIH0gZnJvbSAnLi9CYXNlTGF5ZXInXHJcbmltcG9ydCB7IElMYXllciB9IGZyb20gJy4uL2ludGVyZmFjZS9JTGF5ZXInXHJcbmltcG9ydCB7IExheWVyQ29uc3QgfSBmcm9tICcuLi8uLi9jb25zdC9MYXllckNvbnN0J1xyXG5pbXBvcnQgeyBjbG9zZVZpZXcgfSBmcm9tICcuLi9NdmNNZ3InXHJcbmNsYXNzIE1hc2sgZXh0ZW5kcyBMYXlhLkltYWdlIHtcclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnNraW4gPSAnY29tcC9ibGFuay5wbmcnXHJcbiAgICB0aGlzLnNpemVHcmlkID0gJzIsMiwyLDInXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEaWFsb2dMYXllciBleHRlbmRzIEJhc2VMYXllciBpbXBsZW1lbnRzIElMYXllciB7XHJcbiAgLy8gcHJpdmF0ZSBtTWFza1xyXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBMYXlhLlNjZW5lKSB7XHJcbiAgICBzdXBlcihzY2VuZSlcclxuICB9XHJcbiAgc3RhdGljIGxheWVyS2V5ID0gTGF5ZXJDb25zdC5kaWFsb2dcclxuXHJcbiAgcHJpdmF0ZSBtYXNrczogTWFwPHN0cmluZywgTGF5YS5JbWFnZT4gPSBuZXcgTWFwKClcclxuXHJcbiAgcHVibGljIG9wZW5WaWV3KHZpZXc6IGFueSwgLi4uYXJnczogYW55W10pOiB2b2lkIHtcclxuICAgIGxldCBtYXNrID0gdGhpcy5tYXNrcy5nZXQodmlldy5jb25zdHJ1Y3Rvci52aWV3S2V5KVxyXG4gICAgaWYgKCFtYXNrKSB7XHJcbiAgICAgIG1hc2sgPSBuZXcgTWFzaygpXHJcbiAgICAgIG1hc2sub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgIGNsb3NlVmlldyh2aWV3KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgbWFzay53aWR0aCA9IHRoaXMud2lkdGhcclxuICAgIG1hc2suaGVpZ2h0ID0gdGhpcy5oZWlnaHRcclxuXHJcbiAgICB0aGlzLm1hc2tzLnNldCh2aWV3LmNvbnN0cnVjdG9yLnZpZXdLZXksIG1hc2spXHJcbiAgICB0aGlzLmFkZENoaWxkKG1hc2spXHJcbiAgICBzdXBlci5vcGVuVmlldy5hcHBseSh0aGlzLCBbdmlldywgLi4uYXJnc10pXHJcblxyXG4gICAgdmlldy5hbmNob3JYID0gMC41XHJcbiAgICB2aWV3LmFuY2hvclkgPSAwLjVcclxuICAgIHZpZXcueCA9IHZpZXcud2lkdGggLyAyXHJcbiAgICB2aWV3LnkgPSB2aWV3LmhlaWdodCAvIDJcclxuICAgIHZpZXcubW91c2VUaHJvdWdoID0gdHJ1ZVxyXG4gICAgbGV0IHR3ZWVuID0gbmV3IExheWEuVHdlZW4oKVxyXG4gICAgdmlldy5zY2FsZVggPSAwLjhcclxuICAgIHZpZXcuc2NhbGVZID0gMC44XHJcbiAgICB0d2Vlbi50byhcclxuICAgICAgdmlldyxcclxuICAgICAgeyBzY2FsZVg6IDEuMDUsIHNjYWxlWTogMS4wNSB9LFxyXG4gICAgICAxMDAsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG5ldyBMYXlhLkhhbmRsZXIodGhpcywgKCkgPT4ge1xyXG4gICAgICAgIGxldCB0d2VlbiA9IG5ldyBMYXlhLlR3ZWVuKClcclxuICAgICAgICB0d2Vlbi50byh2aWV3LCB7IHNjYWxlWDogMSwgc2NhbGVZOiAxIH0sIDEwMCwgbnVsbClcclxuICAgICAgfSksXHJcbiAgICApXHJcbiAgfVxyXG4gIHB1YmxpYyBjbG9zZVZpZXcodmlldzogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMubWFza3MuZ2V0KHZpZXcuY29uc3RydWN0b3Iudmlld0tleSkpXHJcbiAgICBzdXBlci5jbG9zZVZpZXcodmlldylcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQmFzZUxheWVyIH0gZnJvbSAnLi9CYXNlTGF5ZXInXHJcblxyXG5pbXBvcnQgeyBJVmlldyB9IGZyb20gJy4uL2ludGVyZmFjZS9JVmlldydcclxuXHJcbmltcG9ydCB7IExheWVyQ29uc3QgfSBmcm9tICcuLi8uLi9jb25zdC9MYXllckNvbnN0J1xyXG5cclxuY29uc3QgZGlzID0gMTAwXHJcbmNvbnN0IHRpbWUgPSAyNDBcclxuZXhwb3J0IGNsYXNzIFZpZXdMYXllciBleHRlbmRzIEJhc2VMYXllciB7XHJcbiAgY29uc3RydWN0b3Ioc2NlbmU6IExheWEuU2NlbmUpIHtcclxuICAgIHN1cGVyKHNjZW5lKVxyXG4gIH1cclxuICBzdGF0aWMgbGF5ZXJLZXkgPSBMYXllckNvbnN0LnZpZXdcclxuICBwcml2YXRlIG9wZW5WaWV3czogSVZpZXdbXSA9IFtdXHJcbiBcclxuICBwdWJsaWMgb3BlblZpZXcodmlldzogYW55LCAuLi5hcmdzKSB7XHJcbiAgICBsZXQgbGFzdFZpZXc6IExheWEuU3ByaXRlXHJcbiAgICBjb25zdCB0d2VlbjEgPSBuZXcgTGF5YS5Ud2VlbigpXHJcbiAgICBpZiAodGhpcy5vcGVuVmlld3MubGVuZ3RoKSB7XHJcbiAgICAgIGxhc3RWaWV3ID0gdGhpcy5vcGVuVmlld3NbdGhpcy5vcGVuVmlld3MubGVuZ3RoIC0gMV1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxhc3RWaWV3ID0gdGhpcy5vd25TY2VuZVxyXG4gICAgfVxyXG4gICAgbGFzdFZpZXcueCA9IHRoaXMub3duU2NlbmUgPT09IGxhc3RWaWV3ID8gMCA6IGRpc1xyXG4gICAgdHdlZW4xLnRvKFxyXG4gICAgICBsYXN0VmlldyxcclxuICAgICAgeyB4OiB0aGlzLm93blNjZW5lID09PSBsYXN0VmlldyA/IC1kaXMgOiAwIH0sXHJcbiAgICAgIHRpbWUsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG5ldyBMYXlhLkhhbmRsZXIobGFzdFZpZXcsICgpID0+IHtcclxuICAgICAgICBpZiAobGFzdFZpZXcgIT09IHRoaXMub3duU2NlbmUpIGxhc3RWaWV3LnJlbW92ZVNlbGYoKVxyXG4gICAgICB9KSxcclxuICAgIClcclxuICAgIHRoaXMub3BlblZpZXdzLnB1c2godmlldylcclxuICAgIHN1cGVyLm9wZW5WaWV3LmFwcGx5KHRoaXMsIFt2aWV3LCAuLi5hcmdzXSlcclxuICAgIGNvbnN0IHR3ZWVuMiA9IG5ldyBMYXlhLlR3ZWVuKClcclxuICAgIHZpZXcueCA9IHRoaXMud2lkdGhcclxuICAgIHR3ZWVuMi50byhcclxuICAgICAgdmlldyxcclxuICAgICAgeyB4OiBkaXMgfSxcclxuICAgICAgdGltZSxcclxuICAgICAgbnVsbCxcclxuICAgICAgbmV3IExheWEuSGFuZGxlcih2aWV3LCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHZpZXcuYWZ0ZXJPcGVuKSB7XHJcbiAgICAgICAgICB2aWV3LmFmdGVyT3Blbi5jYWxsKHZpZXcpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgIClcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9zZVZpZXcodmlldzogYW55KSB7XHJcbiAgICBsZXQgbGFzdFZpZXdcclxuICAgIGNvbnN0IHR3ZWVuMSA9IG5ldyBMYXlhLlR3ZWVuKClcclxuICAgIHRoaXMub3BlblZpZXdzLnBvcCgpXHJcbiAgICBpZiAodGhpcy5vcGVuVmlld3MubGVuZ3RoID4gMCkge1xyXG4gICAgICBsYXN0VmlldyA9IHRoaXMub3BlblZpZXdzW3RoaXMub3BlblZpZXdzLmxlbmd0aCAtIDFdXHJcbiAgICAgIGxhc3RWaWV3LnpPcmRlciA9IHZpZXcuek9yZGVyIC0gMVxyXG4gICAgICBsYXN0Vmlldy5sYXllci5hZGRDaGlsZChsYXN0VmlldylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxhc3RWaWV3ID0gdGhpcy5vd25TY2VuZVxyXG4gICAgfVxyXG5cclxuICAgIGxhc3RWaWV3LnggPSBsYXN0VmlldyA9PT0gdGhpcy5vd25TY2VuZSA/IC1kaXMgOiAwXHJcblxyXG4gICAgdHdlZW4xLnRvKGxhc3RWaWV3LCB7IHg6IGxhc3RWaWV3ID09PSB0aGlzLm93blNjZW5lID8gMCA6IGRpcyB9LCB0aW1lKVxyXG4gICAgY29uc3QgdHdlZW4yID0gbmV3IExheWEuVHdlZW4oKVxyXG4gICAgdmlldy54ID0gZGlzXHJcbiAgICB0d2VlbjIudG8oXHJcbiAgICAgIHZpZXcsXHJcbiAgICAgIHsgeDogdGhpcy53aWR0aCB9LFxyXG4gICAgICB0aW1lLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsICgpID0+IHtcclxuICAgICAgICBzdXBlci5jbG9zZVZpZXcodmlldylcclxuICAgICAgfSksXHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VNb2RlbHtcbiAgICBcbn0iLCJpbXBvcnQgQmFzZUNvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlci9CYXNlQ29udHJvbGxlcidcbmltcG9ydCBzdG9yZSBmcm9tICcuLi8uLi8uLi9nYW1lL3N0b3JlL3N0b3JlJ1xuXG5leHBvcnQgbmFtZXNwYWNlIEtVSSB7XG4gIGV4cG9ydCBjbGFzcyBCYXNlVmlldyBleHRlbmRzIExheWEuVmlldyB7XG4gICAgcHVibGljIGNvbnRyb2xsZXI6IEJhc2VDb250cm9sbGVyXG4gICAgcHVibGljIHVuc3Vic2NyaWJlXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpXG4gICAgfVxuICAgIHB1YmxpYyBzZXRDb250cm9sbGVyKGN0cmwpIHtcbiAgICAgIHRoaXMuY29udHJvbGxlciA9IGN0cmxcbiAgICB9XG4gICAgcHVibGljIGluaXQoKSB7XG4gICAgICB0aGlzLmluaXREYXRhKClcbiAgICAgIHRoaXMuaW5pdFJlcygpXG4gICAgICB0aGlzLmluaXRWaWV3KClcbiAgICB9XG4gICAgcHVibGljIGluaXREYXRhKCkge31cbiAgICBwdWJsaWMgaW5pdFJlcygpIHt9XG4gICAgcHVibGljIGluaXRWaWV3KCkge31cbiAgICBwdWJsaWMgb3BlbkNiKC4uLmFyZ3MpIHtcbiAgICAgIHRoaXMudXBkYXRlVmlldygpXG4gICAgICB0aGlzLnVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKHRoaXMudXBkYXRlVmlldy5iaW5kKHRoaXMpKVxuICAgIH1cbiAgICBwdWJsaWMgY2xvc2VDYiguLi5hcmdzKSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlKClcbiAgICB9XG4gICAgcHVibGljIHVwZGF0ZVZpZXcoKSB7fVxuICB9XG59XG4iLCJpbXBvcnQgeyBEaXNwYXRjaGVyIH0gZnJvbSAnLi9kaXNwYXRjaGVyL0Rpc3BhdGNoZXInXHJcblxyXG5leHBvcnQgY2xhc3MgU2VydmljZSB7XHJcbiAgcHVibGljIHN0YXRpYyBJbml0KCk6IHZvaWQge1xyXG5cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGRpc3BhdGNoZXIoKTogRGlzcGF0Y2hlciB7XHJcbiAgICByZXR1cm4gRGlzcGF0Y2hlci5DcmVhdGVPckdldCgpXHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBPYnNlcnZlciB9IGZyb20gJy4vT2JzZXJ2ZXInXG5pbXBvcnQgeyBTaW5nbGV0b24gfSBmcm9tICcuLi8uLi9iYXNlL1NpbmdsZXRvbidcbmV4cG9ydCBjbGFzcyBEaXNwYXRjaGVyIGV4dGVuZHMgU2luZ2xldG9uIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLl9vYnNlcnZlcnMgPSB7fVxuICB9XG5cbiAgLyoqXG4gICAqIOa2iOaBr+WIl+ihqFxuICAgKi9cbiAgcHJpdmF0ZSBfb2JzZXJ2ZXJzOiBhbnlcblxuICBwdWJsaWMgT2JzZXJ2ZSh0b3BpY186IGFueSwgb2JzZXJ2ZXJfOiBhbnksIGhhbmRsZXJfOiBGdW5jdGlvbik6IE9ic2VydmVyIHtcbiAgICBpZiAoIXRoaXMuX29ic2VydmVyc1t0b3BpY19dKSB0aGlzLl9vYnNlcnZlcnNbdG9waWNfXSA9IFtdXG4gICAgbGV0IG9ic2VydmVyOiBPYnNlcnZlciA9IG5ldyBPYnNlcnZlcih0b3BpY18sIG9ic2VydmVyXywgaGFuZGxlcl8pXG4gICAgdGhpcy5fb2JzZXJ2ZXJzW3RvcGljX10ucHVzaChvYnNlcnZlcilcbiAgICByZXR1cm4gb2JzZXJ2ZXIuUmV1c2UodG9waWNfLCBvYnNlcnZlcl8sIGhhbmRsZXJfKVxuICB9XG5cbiAgcHVibGljIE9ic2VydmVMaXN0KG9ic2VydmVyXzogYW55LCB0b3BpY3NfOiBhbnlbXSwgaGFuZGxlcnNfOiBhbnlbXSk6IE9ic2VydmVyW10ge1xuICAgIGxldCBsaXN0OiBPYnNlcnZlcltdID0gW11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvcGljc18ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpc3QucHVzaCh0aGlzLk9ic2VydmUodG9waWNzX1tpXSwgb2JzZXJ2ZXJfLCBoYW5kbGVyc19baV0pKVxuICAgIH1cbiAgICByZXR1cm4gbGlzdFxuICB9XG5cbiAgcHVibGljIFJlbW92ZUxpc3Qob2JzOiBPYnNlcnZlcltdKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuUmVtb3ZlKG9ic1tpXSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgU2VuZE1zZyh0b3BpY186IGFueSwgLi4uYXJnczogYW55W10pOiBhbnlbXSB7XG4gICAgaWYgKCF0aGlzLl9vYnNlcnZlcnNbdG9waWNfXSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBsZXQgcmV0OiBhbnlbXSA9IFtdXG4gICAgdGhpcy5fb2JzZXJ2ZXJzW3RvcGljX10uZm9yRWFjaChcbiAgICAgIChlbGVtZW50KTogdm9pZCA9PiB7XG4gICAgICAgIHJldC5wdXNoKGVsZW1lbnQuUmVjdk1zZyguLi5hcmdzKSlcbiAgICAgIH0sXG4gICAgKVxuICAgIHJldHVybiByZXRcbiAgfVxuXG4gIHB1YmxpYyBSZW1vdmUob2JzOiBPYnNlcnZlcik6IE9ic2VydmVyIHtcbiAgICBpZiAob2JzID09IG51bGwpIHJldHVyblxuICAgIGxldCBhcnI6IGFueVtdID0gdGhpcy5fb2JzZXJ2ZXJzW29icy50b3BpY11cblxuICAgIGlmICghYXJyKSByZXR1cm4gbnVsbFxuXG4gICAgbGV0IGluZDogbnVtYmVyID0gYXJyLmluZGV4T2Yob2JzKVxuICAgIGlmIChpbmQgPCAwKSByZXR1cm4gbnVsbFxuXG4gICAgYXJyLnNwbGljZShpbmQsIDEpXG4gICAgcmV0dXJuIG9ic1xuICB9XG5cbiAgcHVibGljIFJlbW92ZUFsbCh0b3BpYzogYW55KTogdm9pZCB7XG4gICAgbGV0IGFycjogYW55W10gPSB0aGlzLl9vYnNlcnZlcnNbdG9waWNdXG4gICAgaWYgKCFhcnIpIHJldHVyblxuICAgIGFyci5zcGxpY2UoMCwgYXJyLmxlbmd0aClcbiAgfVxufVxuY29uc3QgZGlzcGF0Y2hlciA9IG5ldyBEaXNwYXRjaGVyKClcbmV4cG9ydCB7IGRpc3BhdGNoZXIgfVxuIiwiZXhwb3J0IGNsYXNzIE9ic2VydmVyIHtcbiAgcHVibGljIHRvcGljOiBhbnlcbiAgcHVibGljIG9ic2VydmVyOiBhbnlcbiAgcHVibGljIGhhbmRsZXI6IEZ1bmN0aW9uXG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRvcGljXzogYW55LCBvYnNlcnZlcl86IGFueSwgaGFuZGxlcl86IEZ1bmN0aW9uKSB7XG4gICAgdGhpcy5SZXVzZSh0b3BpY18sIG9ic2VydmVyXywgaGFuZGxlcl8pXG4gIH1cblxuICBwdWJsaWMgUmV1c2UodG9waWNfOiBhbnksIG9ic2VydmVyXzogYW55LCBoYW5kbGVyXzogRnVuY3Rpb24pOiBPYnNlcnZlciB7XG4gICAgdGhpcy50b3BpYyA9IHRvcGljX1xuICAgIHRoaXMub2JzZXJ2ZXIgPSBvYnNlcnZlcl9cbiAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyX1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBwdWJsaWMgUmVjdk1zZyguLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xuICAgIGxldCByZXQ6IGFueVxuICAgIGlmICghdGhpcy5vYnNlcnZlcikge1xuICAgICAgcmV0ID0gdGhpcy5oYW5kbGVyKC4uLmFyZ3MpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldCA9IHRoaXMuaGFuZGxlci5hcHBseSh0aGlzLm9ic2VydmVyLCBhcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmV0XG4gIH1cbn1cbiIsImltcG9ydCB7IHN0YXRlIH0gZnJvbSAnLi9zdGF0ZSdcclxuZXhwb3J0IGVudW0gQUNUSU9OVFlQRSB7XHJcbiAgQ0hBTkdFX1RFU1REQVRBMSA9IDEsXHJcbiAgQ0hBTkdFX1RFU1REQVRBMixcclxuICBDSEFOR0VfVVNFUk5BTUUsXHJcbiAgQ0hBTkdFX1RPS0VOLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2hhbmdlRGF0YTEgPSBkYXRhMSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFDVElPTlRZUEUuQ0hBTkdFX1RFU1REQVRBMSxcclxuICAgIHRlc3REYXRhOiB7IC4uLnN0YXRlLnRlc3REYXRhLCBkYXRhMSB9LFxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgY2hhbmdlRGF0YTIgPSBkYXRhMiA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFDVElPTlRZUEUuQ0hBTkdFX1RFU1REQVRBMixcclxuICAgIHRlc3REYXRhOiB7IC4uLnN0YXRlLnRlc3REYXRhLCBkYXRhMiB9LFxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgY2hhbmdlVXNlcm5hbWUgPSBuYW1lID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQUNUSU9OVFlQRS5DSEFOR0VfVVNFUk5BTUUsXHJcbiAgICB1c2VyOiB7IG5hbWUgfSxcclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IGNoYW5nZVRva2VuID0gdG9rZW4gPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBQ1RJT05UWVBFLkNIQU5HRV9UT0tFTixcclxuICAgIHRva2VuLFxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBQ1RJT05UWVBFIH0gZnJvbSAnLi9hY3Rpb25zJ1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcclxuY29uc3QgY2hhbmdlVGVzdERhdGEgPSAoc3RhdGUgPSB7IGRhdGExOiAnZGF0YTEnLCBkYXRhMjogJ2RhdGEyJyB9LCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEFDVElPTlRZUEUuQ0hBTkdFX1RFU1REQVRBMTpcclxuICAgIGNhc2UgQUNUSU9OVFlQRS5DSEFOR0VfVEVTVERBVEEyOlxyXG4gICAgICByZXR1cm4geyAuLi5hY3Rpb24udGVzdERhdGEgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcbmNvbnN0IGNoYW5nZVVzZXJuYW1lID0gKHN0YXRlID0geyBuYW1lOiAnbm9yJyB9LCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEFDVElPTlRZUEUuQ0hBTkdFX1VTRVJOQU1FOlxyXG4gICAgICByZXR1cm4geyAuLi5hY3Rpb24udXNlciB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuY29uc3QgY2hhbmdlVG9rZW4gPSAoc3RhdGUgPSAnJywgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBBQ1RJT05UWVBFLkNIQU5HRV9UT0tFTjpcclxuICAgICAgcmV0dXJuIGFjdGlvbi50b2tlblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcbmNvbnN0IGNoYW5nZVRlc3REYXRhMSA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgcmV0dXJuIHN0YXRlXHJcbn1cclxuY29uc3QgcmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoeyB0ZXN0RGF0YTogY2hhbmdlVGVzdERhdGEsIHVzZXI6IGNoYW5nZVVzZXJuYW1lLCB0b2tlbjogY2hhbmdlVG9rZW4gfSlcclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcnNcclxuIiwiZXhwb3J0IGNvbnN0IHN0YXRlID0ge1xyXG4gIHRva2VuOiAnaGVsbG8nLFxyXG4gIHVzZXI6IHtcclxuICAgIG5hbWU6ICd0ZXN0MScsXHJcbiAgfSxcclxuICB0ZXN0RGF0YToge1xyXG4gICAgZGF0YTE6ICdkYXRhMScsXHJcbiAgICBkYXRhMjogJ2RhdGEyJyxcclxuICAgIHRlc3REYXRhMjoge1xyXG4gICAgICBkYXRhMTogJzExMScsXHJcbiAgICAgIHRlc3REYXRhMzoge1xyXG4gICAgICAgIGRhdGExOiAnMjIyJyxcclxuICAgICAgICB0ZXN0RGF0YTQ6ICczMzMnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCByZWR1Y2VycyBmcm9tICcuL3JlZHVjZXInXHJcbmltcG9ydCB7IHN0YXRlIH0gZnJvbSAnLi9zdGF0ZSdcclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2Vycywgc3RhdGUgYXMgYW55KVxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZVxyXG4iLCJpbXBvcnQgeyB1aSB9IGZyb20gJy4uLy4uLy4uLy4uL3VpL2xheWFNYXhVSSdcbmltcG9ydCBCUGFnZSBmcm9tICcuLi9CUGFnZS9CUGFnZSdcbmltcG9ydCB7IFZpZXdDb25zdCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvY29uc3QvVmlld0NvbnN0J1xuaW1wb3J0IHsgQmFzZUxheWVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9tdmMvbGF5ZXIvQmFzZUxheWVyJ1xuaW1wb3J0IHsgUmVnaXN0ZXJNVkMsIG9wZW5WaWV3IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9tdmMvTXZjTWdyJ1xuaW1wb3J0IEFQYWdlQ29udHJvbGxlciBmcm9tICcuL0FQYWdlQ29udHJvbGxlcidcbmltcG9ydCBBUGFnZU1vZGVsIGZyb20gJy4vQXBhZ2VNb2RlbCdcbmltcG9ydCBCYXNlVGVzdCBmcm9tICcuLi9CYXNlVGVzdCdcbmltcG9ydCAnLi4vLi4vLi4vc3RvcmUvc3RvcmUnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vLi4vLi4vc3RvcmUvc3RvcmUnXG5AUmVnaXN0ZXJNVkMoQmFzZUxheWVyLCBBUGFnZUNvbnRyb2xsZXIsIEFQYWdlTW9kZWwpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBUGFnZSBleHRlbmRzIHVpLnZpZXcuQVBhZ2VVSSB7XG4gIHN0YXRpYyB2aWV3S2V5ID0gVmlld0NvbnN0LkFQYWdlXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmJ0bi5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKSA9PiB7XG4gICAgICBvcGVuVmlldyhCUGFnZSlcbiAgICB9KVxuICAgIHRoaXMuYmFzZUJ0bi5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKSA9PiB7XG4gICAgICBvcGVuVmlldyhCYXNlVGVzdClcbiAgICB9KVxuICB9XG4gIHB1YmxpYyBpbml0KCkge1xuICAgIC8vIHRoaXMuY29udHJvbGxlci5hZGRMaXN0ZW5lcihcbiAgICAvLyAgICdjaGFuZ2UnLFxuICAgIC8vICAgYXJncyA9PiB7XG4gICAgLy8gICAgIHRoaXMuY29udGVudHMudGV4dCA9IGFyZ3NbMF1cbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2codGhpcylcbiAgICAvLyAgIH0sXG4gICAgLy8gICB0aGlzLFxuICAgIC8vIClcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVWaWV3KCkge1xuICAgIGNvbnN0IHsgdXNlciwgdG9rZW4sIHRlc3REYXRhIH0gPSBzdG9yZS5nZXRTdGF0ZSgpXG4gICAgdGhpcy5jb250ZW50cy50ZXh0ID0gdGVzdERhdGEuZGF0YTFcbiAgICAvLyB0aGlzLnVzZXJuYW1lLnRleHQgPSB1c2VyLm5hbWVcbiAgICAvLyB0aGlzLnRva2VuLnRleHQgPSB0b2tlblxuICB9XG4gIHB1YmxpYyBvcGVuQ2IoYXJncykge1xuICAgIHN1cGVyLm9wZW5DYigpXG4gICAgdmFyIGh0bWwgPSBcIjxzcGFuIHN0eWxlPSdmb250U2l6ZTozMCcgY29sb3I9JyM2N2ZjMmMnPuWvjOaWh+acrDwvc3Bhbj5cIlxuICAgIGh0bWwgKz0gXCI8aW1nIHN0eWxlPSdoZWlnaHQ6NTA7d2lkdGg6NTAnIHNyYz0nQ2hhcmFjdGVycy9UYW5rXzQucG5nJz48L2ltZz5cIlxuICAgIGh0bWwgKz0gXCI8c3BhbiBzdHlsZT0nZm9udFNpemU6MjAnIGNvbG9yPScjZmZmJz7mtYvor5U8L3NwYW4+XCJcbiAgICB0aGlzLmRkLnBvcygwLCAwKVxuICAgIHRoaXMuZGQuc3R5bGUud2lkdGggPSA2NDBcbiAgICB0aGlzLmRkLnN0eWxlLmFsaWduID0gJ2NlbnRlcidcblxuICAgIHRoaXMuZGQuaW5uZXJIVE1MID0gaHRtbFxuICAgIGNvbnNvbGUubG9nKHRoaXMuZGQpXG4gIH1cbn1cbiIsImltcG9ydCBCYXNlQ29udHJvbGxlciBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL212Yy9jb250cm9sbGVyL0Jhc2VDb250cm9sbGVyJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVBhZ2VDb250cm9sbGVyIGV4dGVuZHMgQmFzZUNvbnRyb2xsZXIge1xuICAvKipcbiAgICpcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgfVxuICBwdWJsaWMgaW5pdCgpIHtcbiAgICBzdXBlci5pbml0KClcbiAgfVxuXG59XG4iLCJpbXBvcnQgQmFzZU1vZGVsIGZyb20gXCIuLi8uLi8uLi8uLi9jb3JlL212Yy9tb2RlbC9CYXNlTW9kZWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVBhZ2VNb2RlbCBleHRlbmRzIEJhc2VNb2RlbHtcbiAgICBcbn0iLCJpbXBvcnQgQVBhZ2UgZnJvbSBcIi4vQVBhZ2VcIjtcbmltcG9ydCBHYW1lQXBwIGZyb20gXCIuLi8uLi8uLi8uLi9jb3JlL2dhbWUvR2FtZUFwcFwiO1xuaW1wb3J0IEVmZmVjdFV0aWxzIGZyb20gXCIuLi8uLi8uLi8uLi9jb3JlL1V0aWxzL0VmZmVjdFV0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3QgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XG4gICAgLy8gLyoqIEBwcm9wIHtuYW1lOmludFR5cGUsIHRpcHM6XCLmlbTmlbDnsbvlnovnpLrkvotcIiwgdHlwZTpJbnQsIGRlZmF1bHQ6MTAwMH0qL1xuICAgIC8vIHB1YmxpYyBpbnRUeXBlOiBudW1iZXIgPSAxMDAwO1xuICAgIC8vIC8qKiBAcHJvcCB7bmFtZTpudW1UeXBlLCB0aXBzOlwi5pWw5a2X57G75Z6L56S65L6LXCIsIHR5cGU6TnVtYmVyLCBkZWZhdWx0OjEwMDB9Ki9cbiAgICAvLyBwdWJsaWMgbnVtVHlwZTogbnVtYmVyID0gMTAwMDtcbiAgICAvLyAvKiogQHByb3Age25hbWU6c3RyVHlwZSwgdGlwczpcIuWtl+espuS4suexu+Wei+ekuuS+i1wiLCB0eXBlOlN0cmluZywgZGVmYXVsdDpcImhlbGxvIGxheWFcIn0qL1xuICAgIC8vIHB1YmxpYyBzdHJUeXBlOiBzdHJpbmcgPSBcImhlbGxvIGxheWFcIjtcbiAgICAvLyAvKiogQHByb3Age25hbWU6Ym9vbFR5cGUsIHRpcHM6XCLluIPlsJTnsbvlnovnpLrkvotcIiwgdHlwZTpCb29sLCBkZWZhdWx0OnRydWV9Ki9cbiAgICAvLyBwdWJsaWMgYm9vbFR5cGU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIC8vIOabtOWkmuWPguaVsOivtOaYjuivt+iuv+mXrjogaHR0cHM6Ly9sZGMyLmxheWFib3guY29tL2RvYy8/bmF2PXpoLWFzLTItNC0wXG4gICAgXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cbiAgICBvbkF3YWtlKCl7XG4gICAgICAgIHRoaXMub3duZXIub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLCgpPT57XG4gICAgICAgIEVmZmVjdFV0aWxzLm1hY0ljb25TaGFrZSh0aGlzLm93bmVyLCh0aGlzLm93bmVyIGFzIExheWEuU3ByaXRlKS55LCgpPT57Y29uc29sZS5sb2coMSl9LHRoaXMgKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBvbkRpc2FibGUoKTogdm9pZCB7XG4gICAgfVxufSIsImltcG9ydCB7IHVpIH0gZnJvbSAnLi4vLi4vLi4vLi4vdWkvbGF5YU1heFVJJ1xuaW1wb3J0IHsgVmlld0NvbnN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9jb25zdC9WaWV3Q29uc3QnXG5pbXBvcnQgeyBEaWFsb2dMYXllciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvbXZjL2xheWVyL0RpYWxvZ0xheWVyJ1xuaW1wb3J0IEJQYWdlQ29udHJvbGxlciBmcm9tICcuL0JQYWdlQ29udHJvbGxlcidcbmltcG9ydCBCUGFnZU1vZGVsIGZyb20gJy4vQlBhZ2VNb2RlbCdcbmltcG9ydCB7IFJlZ2lzdGVyTVZDLCBjbG9zZVZpZXcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL212Yy9NdmNNZ3InXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vLi4vLi4vc3RvcmUvc3RvcmUnXG5pbXBvcnQgeyBjaGFuZ2VEYXRhMSB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMnXG5AUmVnaXN0ZXJNVkMoRGlhbG9nTGF5ZXIsIEJQYWdlQ29udHJvbGxlciwgQlBhZ2VNb2RlbClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJQYWdlIGV4dGVuZHMgdWkudmlldy5CUGFnZVVJIHtcbiAgc3RhdGljIHZpZXdLZXkgPSBWaWV3Q29uc3QuQlBhZ2VcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gIH1cbiAgcHVibGljIGluaXQoKSB7XG4gICAgdGhpcy5jbG9zZV9idG4ub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCkgPT4ge1xuICAgICAgY2xvc2VWaWV3KHRoaXMpXG4gICAgfSlcbiAgICB0aGlzLmNoYW5nZS5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKSA9PiB7XG4gICAgICAvLyB0aGlzLmNvbnRyb2xsZXIuZGlzcGF0Y2goJ2NoYW5nZScsIFsnI2VlMzMyMSddKVxuICAgICAgc3RvcmUuZGlzcGF0Y2goY2hhbmdlRGF0YTEoJ2hlbGxvIHdvcmxkJykpXG4gICAgfSlcbiAgfVxuICBwdWJsaWMgdXBkYXRlVmlldygpIHtcbiAgICBjb25zdCB7IHVzZXIsIHRva2VuLCB0ZXN0RGF0YSB9ID0gc3RvcmUuZ2V0U3RhdGUoKVxuICAgIHRoaXMudXNlcm5hbWUudGV4dCA9IHVzZXIubmFtZVxuICAgIHRoaXMudG9rZW4udGV4dCA9IHRva2VuXG4gIH1cbn1cbiIsImltcG9ydCBCYXNlQ29udHJvbGxlciBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL212Yy9jb250cm9sbGVyL0Jhc2VDb250cm9sbGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCUGFnZUNvbnRyb2xsZXIgZXh0ZW5kcyBCYXNlQ29udHJvbGxlciB7XG4gIC8qKlxuICAgKlxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICB9XG4gIHB1YmxpYyBpbml0KCkge1xuICAgIHN1cGVyLmluaXQoKVxuICB9XG59XG4iLCJpbXBvcnQgQmFzZU1vZGVsIGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvbXZjL21vZGVsL0Jhc2VNb2RlbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQlBhZ2VNb2RlbCBleHRlbmRzIEJhc2VNb2RlbCB7XG4gIHB1YmxpYyBjb2xvcjogc3RyaW5nXG59XG4iLCJpbXBvcnQgeyB1aSB9IGZyb20gJy4uLy4uLy4uL3VpL2xheWFNYXhVSSdcbmltcG9ydCB7IElWaWV3IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvaW50ZXJmYWNlL0lWaWV3J1xuaW1wb3J0IHsgVmlld0NvbnN0IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9jb25zdC9WaWV3Q29uc3QnXG5pbXBvcnQgeyBCYXNlTGF5ZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL212Yy9sYXllci9CYXNlTGF5ZXInXG5pbXBvcnQgRGlhbG9nVGVzdCBmcm9tICcuL0RpYWxvZ1Rlc3QnXG5pbXBvcnQgVmlld1Rlc3QgZnJvbSAnLi9WaWV3VGVzdCdcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vTG9hZGluZydcbmltcG9ydCB7IFJlZ2lzdGVyTVZDLCBvcGVuVmlldywgY2xvc2VWaWV3IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvTXZjTWdyJ1xuaW1wb3J0IHsgQ2xpY2sgfSBmcm9tICcuLi8uLi8uLi9jb3JlL212Yy9VSUV2ZW50J1xuaW1wb3J0IEdhbWVBcHAgZnJvbSAnLi4vLi4vLi4vY29yZS9nYW1lL0dhbWVBcHAnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vLi4vc3RvcmUvc3RvcmUnXG5pbXBvcnQgeyBjaGFuZ2VUb2tlbiwgY2hhbmdlVXNlcm5hbWUgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJ1xuQFJlZ2lzdGVyTVZDKEJhc2VMYXllcilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VUZXN0IGV4dGVuZHMgdWkudmlldy5CYXNlVGVzdFVJIGltcGxlbWVudHMgSVZpZXcge1xuICBzdGF0aWMgdmlld0tleSA9IFZpZXdDb25zdC5CYXNlVGVzdFxuICBwdWJsaWMgbW92ZVkgPSBmYWxzZVxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy50aW1lckxvb3AoNTAwLCB0aGlzLCAoKSA9PiB7XG4gICAgICB0aGlzLnRhbmsuaW5kZXggPSB0aGlzLnRhbmsuaW5kZXggPT09IDcgPyA0IDogdGhpcy50YW5rLmluZGV4ICsgMVxuICAgIH0pXG4gICAgdGhpcy50aW1lckxvb3AoMjUwLCB0aGlzLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5tb3ZlWSkge1xuICAgICAgICB0aGlzLnRhbmsuY2VudGVyWSArPSAxXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRhbmsuY2VudGVyWSAtPSAxXG4gICAgICB9XG4gICAgICB0aGlzLm1vdmVZID0gIXRoaXMubW92ZVlcbiAgICB9KVxuXG4gICAgdGhpcy5kaWFsb2dCdG4ub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCkgPT4ge30pXG4gICAgdGhpcy52aWV3QnRuLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcbiAgICAgIG9wZW5WaWV3KFZpZXdUZXN0LCAxLCAyKVxuICAgIH0pXG4gICAgdGhpcy5sb2FkaW5nQnRuLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcbiAgICAgIG9wZW5WaWV3KExvYWRpbmcsIDEsIDIsIDMpXG4gICAgfSlcbiAgICB0aGlzLmNsb3NlQnRuLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcbiAgICAgIGNsb3NlVmlldyh0aGlzKVxuICAgIH0pXG4gIH1cbiAgQENsaWNrKCdkaWFsb2dCdG4nKVxuICBAQ2xpY2soJ2xvYWRpbmdCdG4nLCAxLCAyLCAzLCA0KVxuICBwcml2YXRlIGFzeW5jIHRvZG8xKC4uLnR5cGUpIHtcbiAgICBzdG9yZS5kaXNwYXRjaChjaGFuZ2VUb2tlbihNYXRoLnJhbmRvbSgpKSlcbiAgICBzdG9yZS5kaXNwYXRjaChjaGFuZ2VVc2VybmFtZShNYXRoLnJhbmRvbSgpKSlcbiAgICBjb25zb2xlLmxvZyh0eXBlKVxuICAgIGNvbnNvbGUubG9nKGF3YWl0IEdhbWVBcHAuZmV0Y2gucG9zdCgnZ2V0JywgeyBhOiBbMSwgMl0sIGM6ICdoYWhhaGFoYScgfSkpXG4gIH1cbiAgcHVibGljIG9wZW5DYigpIHtcbiAgICBzdXBlci5vcGVuQ2IoKVxuICAgIGNvbnNvbGUubG9nKCdCYXNlVGVzdCBvcGVuJylcbiAgfVxuICBwdWJsaWMgdXBkYXRlVmlldygpIHtcbiAgICBjb25zdCB7IHVzZXIsIHRva2VuLCB0ZXN0RGF0YSB9ID0gc3RvcmUuZ2V0U3RhdGUoKVxuICAgIHRoaXMudXNlcm5hbWUudGV4dCA9IHVzZXIubmFtZVxuICAgIHRoaXMudG9rZW4udGV4dCA9IHRva2VuXG4gIH1cbn1cbiIsImltcG9ydCB7IHVpIH0gZnJvbSAnLi4vLi4vLi4vdWkvbGF5YU1heFVJJ1xyXG5pbXBvcnQgeyBJVmlldyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvbXZjL2ludGVyZmFjZS9JVmlldydcclxuaW1wb3J0IHsgVmlld0NvbnN0IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9jb25zdC9WaWV3Q29uc3QnXHJcbmltcG9ydCB7IEJhc2VMYXllciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvbXZjL2xheWVyL0Jhc2VMYXllcidcclxuaW1wb3J0IHsgUmVnaXN0ZXJNVkMsIGNsb3NlVmlldyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvbXZjL012Y01ncidcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4uLy4uL3N0b3JlL3N0b3JlJ1xyXG5AUmVnaXN0ZXJNVkMoQmFzZUxheWVyKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgdWkudmlldy5Mb2FkaW5nVUkgaW1wbGVtZW50cyBJVmlldyB7XHJcbiAgc3RhdGljIHZpZXdLZXkgPSBWaWV3Q29uc3QuTG9hZGluZ1xyXG4gIHB1YmxpYyBtb3ZlWSA9IGZhbHNlXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnRpbWVyTG9vcCg1MDAsIHRoaXMsICgpID0+IHtcclxuICAgICAgdGhpcy50YW5rLmluZGV4ID0gdGhpcy50YW5rLmluZGV4ID09PSA3ID8gNCA6IHRoaXMudGFuay5pbmRleCArIDFcclxuICAgIH0pXHJcbiAgICB0aGlzLnRpbWVyTG9vcCgyNTAsIHRoaXMsICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMubW92ZVkpIHtcclxuICAgICAgICB0aGlzLnRhbmsuY2VudGVyWSArPSAxXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50YW5rLmNlbnRlclkgLT0gMVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubW92ZVkgPSAhdGhpcy5tb3ZlWVxyXG4gICAgfSlcclxuICAgIHRoaXMuYnRuX2Nsb3NlLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcclxuICAgICAgY2xvc2VWaWV3KHRoaXMpXHJcbiAgICB9KVxyXG4gIH1cclxuICBwdWJsaWMgb3BlbkNiKC4uLmFyZ3MpIHtcclxuICAgIHN1cGVyLm9wZW5DYigpXHJcbiAgICBjb25zb2xlLmxvZygnTG9hZGluZyBvcGVuJywgYXJncylcclxuICB9XHJcbiAgcHVibGljIHVwZGF0ZVZpZXcoKSB7XHJcbiAgICBjb25zdCB7IHVzZXIsIHRva2VuLCB0ZXN0RGF0YSB9ID0gc3RvcmUuZ2V0U3RhdGUoKVxyXG4gICAgdGhpcy51c2VybmFtZS50ZXh0ID0gdXNlci5uYW1lXHJcbiAgICB0aGlzLnRva2VuLnRleHQgPSB0b2tlblxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyB1aSB9IGZyb20gJy4uLy4uLy4uL3VpL2xheWFNYXhVSSdcbmltcG9ydCB7IElWaWV3IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvaW50ZXJmYWNlL0lWaWV3J1xuaW1wb3J0IHsgVmlld0NvbnN0IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9jb25zdC9WaWV3Q29uc3QnXG5pbXBvcnQgeyBWaWV3TGF5ZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL212Yy9sYXllci9WaWV3TGF5ZXInXG5pbXBvcnQgVmlld1Rlc3QxIGZyb20gJy4vVmlld1Rlc3QxJ1xuaW1wb3J0IHsgUmVnaXN0ZXJNVkMsIGNsb3NlVmlldywgb3BlblZpZXcgfSBmcm9tICcuLi8uLi8uLi9jb3JlL212Yy9NdmNNZ3InXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vLi4vc3RvcmUvc3RvcmUnXG5AUmVnaXN0ZXJNVkMoVmlld0xheWVyKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld1Rlc3QgZXh0ZW5kcyB1aS52aWV3LlZpZXdUZXN0VUkgaW1wbGVtZW50cyBJVmlldyB7XG4gIHN0YXRpYyB2aWV3S2V5ID0gVmlld0NvbnN0LlZpZXdUZXN0XG4gIHB1YmxpYyBtb3ZlWSA9IGZhbHNlXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcblxuICAgIHRoaXMudGltZXJMb29wKDUwMCwgdGhpcywgKCkgPT4ge1xuICAgICAgdGhpcy50YW5rLmluZGV4ID0gdGhpcy50YW5rLmluZGV4ID09PSA3ID8gNCA6IHRoaXMudGFuay5pbmRleCArIDFcbiAgICB9KVxuICAgIHRoaXMudGltZXJMb29wKDI1MCwgdGhpcywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMubW92ZVkpIHtcbiAgICAgICAgdGhpcy50YW5rLmNlbnRlclkgKz0gMVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50YW5rLmNlbnRlclkgLT0gMVxuICAgICAgfVxuICAgICAgdGhpcy5tb3ZlWSA9ICF0aGlzLm1vdmVZXG4gICAgfSlcbiAgICB0aGlzLmNsb3NlQnRuLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcbiAgICAgIGNsb3NlVmlldyh0aGlzKVxuICAgIH0pXG4gICAgdGhpcy52aWV3QnRuLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpID0+IHtcbiAgICAgIG9wZW5WaWV3KFZpZXdUZXN0MSlcbiAgICB9KVxuICB9XG4gIHB1YmxpYyBvcGVuQ2IoKSB7XG4gICAgc3VwZXIub3BlbkNiKClcbiAgICBjb25zb2xlLmxvZygnVmlld1Rlc3Qgb3BlbicpXG4gIH1cbiAgcHVibGljIHVwZGF0ZVZpZXcoKSB7XG4gICAgY29uc3QgeyB1c2VyLCB0b2tlbiwgdGVzdERhdGEgfSA9IHN0b3JlLmdldFN0YXRlKClcbiAgICB0aGlzLnVzZXJuYW1lLnRleHQgPSB1c2VyLm5hbWVcbiAgICB0aGlzLnRva2VuLnRleHQgPSB0b2tlblxuICB9XG59XG4iLCJpbXBvcnQgeyB1aSB9IGZyb20gJy4uLy4uLy4uL3VpL2xheWFNYXhVSSdcbmltcG9ydCB7IElWaWV3IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvaW50ZXJmYWNlL0lWaWV3J1xuaW1wb3J0IHsgVmlld0NvbnN0IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9jb25zdC9WaWV3Q29uc3QnXG5pbXBvcnQgeyBWaWV3TGF5ZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL212Yy9sYXllci9WaWV3TGF5ZXInXG5pbXBvcnQgeyBSZWdpc3Rlck1WQywgY2xvc2VWaWV3IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tdmMvTXZjTWdyJ1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uLy4uL3N0b3JlL3N0b3JlJ1xuQFJlZ2lzdGVyTVZDKFZpZXdMYXllcilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdUZXN0MSBleHRlbmRzIHVpLnZpZXcuVmlld1Rlc3QxVUkgaW1wbGVtZW50cyBJVmlldyB7XG4gIHN0YXRpYyB2aWV3S2V5ID0gVmlld0NvbnN0LlZpZXdUZXN0MVxuICBwdWJsaWMgbW92ZVkgPSBmYWxzZVxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLnRpbWVyTG9vcCg1MDAsIHRoaXMsICgpID0+IHtcbiAgICAgIHRoaXMudGFuay5pbmRleCA9IHRoaXMudGFuay5pbmRleCA9PT0gNyA/IDQgOiB0aGlzLnRhbmsuaW5kZXggKyAxXG4gICAgfSlcbiAgICB0aGlzLnRpbWVyTG9vcCgyNTAsIHRoaXMsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLm1vdmVZKSB7XG4gICAgICAgIHRoaXMudGFuay5jZW50ZXJZICs9IDFcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGFuay5jZW50ZXJZIC09IDFcbiAgICAgIH1cbiAgICAgIHRoaXMubW92ZVkgPSAhdGhpcy5tb3ZlWVxuICAgIH0pXG4gICAgdGhpcy5jbG9zZUJ0bi5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKSA9PiB7XG4gICAgICBjbG9zZVZpZXcodGhpcylcbiAgICB9KVxuICB9XG4gIHB1YmxpYyBvcGVuQ2IoKSB7XG4gICAgc3VwZXIub3BlbkNiKClcbiAgICBjb25zb2xlLmxvZygnVmlld1Rlc3Qgb3BlbicpXG4gIH1cbiAgcHVibGljIHVwZGF0ZVZpZXcoKSB7XG4gICAgY29uc3QgeyB1c2VyLCB0b2tlbiwgdGVzdERhdGEgfSA9IHN0b3JlLmdldFN0YXRlKClcbiAgICB0aGlzLnVzZXJuYW1lLnRleHQgPSB1c2VyLm5hbWVcbiAgICB0aGlzLnRva2VuLnRleHQgPSB0b2tlblxuICB9XG59XG4iLCJlbnVtIEh0dHBNZXRob2Qge1xyXG4gIGdldCA9ICdHRVQnLFxyXG4gIHBvc3QgPSAnUE9TVCcsXHJcbn1cclxuZXhwb3J0IGNsYXNzIEZldGNoIHtcclxuICBwcml2YXRlIGJhc2VVcmwgPSAnJ1xyXG4gIHByaXZhdGUgY29udGVudFR5cGUgPSAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04J1xyXG4gIHN0YXRpYyBmZXRjaE1hcCA9IG5ldyBNYXAoKVxyXG4gIGNvbnN0cnVjdG9yKHsgdXJsIH0pIHtcclxuICAgIHRoaXMuYmFzZVVybCA9IHVybFxyXG4gIH1cclxuICBwdWJsaWMgc3RhdGljIGluaXQoa2V5LCB7IHVybCB9KSB7XHJcbiAgICBsZXQgZmV0Y2ggPSB0aGlzLmZldGNoTWFwLmdldChrZXkpXHJcbiAgICBpZiAoIWZldGNoKSB7XHJcbiAgICAgIGZldGNoID0gbmV3IEZldGNoKHsgdXJsIH0pXHJcbiAgICAgIHRoaXMuZmV0Y2hNYXAuc2V0KGtleSwgZmV0Y2gpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmV0Y2hcclxuICB9XHJcbiAgcHJpdmF0ZSBhc3luYyBzZW5kKGFwaTogc3RyaW5nLCB7IGJvZHksIG1ldGhvZCB9KSB7XHJcbiAgICBsZXQgdXJsID0gdGhpcy5iYXNlVXJsICsgYXBpXHJcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogdGhpcy5jb250ZW50VHlwZSxcclxuICAgIH0pXHJcbiAgICBsZXQgcmVzOiBSZXNwb25zZVxyXG4gICAgc3dpdGNoIChtZXRob2QpIHtcclxuICAgICAgY2FzZSBIdHRwTWV0aG9kLmdldDpcclxuICAgICAgICBpZiAoYm9keSkge1xyXG4gICAgICAgICAgdXJsICs9XHJcbiAgICAgICAgICAgICc/JyArXHJcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGJvZHkpXHJcbiAgICAgICAgICAgICAgLm1hcChpdGVtID0+IGl0ZW0uam9pbignPScpKVxyXG4gICAgICAgICAgICAgIC5qb2luKCcmJylcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzID0gYXdhaXQgZmV0Y2godXJsLCB7IGhlYWRlcnMsIG1ldGhvZCB9KVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGNhc2UgSHR0cE1ldGhvZC5wb3N0OlxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJlcyA9IGF3YWl0IGZldGNoKHVybCwgeyBib2R5LCBoZWFkZXJzLCBtZXRob2QgfSlcclxuICAgICAgICBicmVha1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMucmVzSGFuZGxlKHJlcylcclxuICB9XHJcbiAgcHVibGljIGFzeW5jIGdldChhcGk6IHN0cmluZywgcGFyYW1zOiBhbnkgPSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiB0aGlzLnNlbmQoYXBpLCB7IGJvZHk6IHBhcmFtcywgbWV0aG9kOiBIdHRwTWV0aG9kLmdldCB9KVxyXG4gIH1cclxuICBwdWJsaWMgYXN5bmMgcG9zdChhcGk6IHN0cmluZywgYm9keTogYW55ID0gdW5kZWZpbmVkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZW5kKGFwaSwgeyBib2R5OiBib2R5ID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiB1bmRlZmluZWQsIG1ldGhvZDogSHR0cE1ldGhvZC5wb3N0IH0pXHJcbiAgfVxyXG4gIHByaXZhdGUgcmVzSGFuZGxlKHJlczogUmVzcG9uc2UpIHtcclxuICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKVxyXG4gICAgaWYgKGNvbnRlbnRUeXBlKSB7XHJcbiAgICAgIGlmIChjb250ZW50VHlwZS5pbmRleE9mKCdqc29uJykgPiAtMSkge1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbigpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXMudGV4dCgpXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNpbmdsZXRvbiB9IGZyb20gJy4uL2NvcmUvYmFzZS9TaW5nbGV0b24nXG5pbXBvcnQgeyBPYnNlcnZlciB9IGZyb20gJy4uL2NvcmUvc2VydmljZS9kaXNwYXRjaGVyL09ic2VydmVyJ1xuaW1wb3J0ICogYXMgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCdcbi8qXG4gICBzb2NrZXQuaW5pdCguLi4pXG4gICBzb2NrZXQuY29ubmVjdCgpXG4qL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29ja2V0IGV4dGVuZHMgU2luZ2xldG9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub2JzZXJ2ZXJzID0ge31cbiAgfVxuICBwcml2YXRlIG5vbmNlPTFcbiAgcHJpdmF0ZSBpcEFkZHJlc3NcbiAgcHJpdmF0ZSBzb2NrZXQ6IGFueVxuICBwcml2YXRlIG9ic2VydmVyczogYW55XG4gIHByaXZhdGUgdGltZVN0YW1wXG4gIC8vaGFuZGxlci0tLS1cbiAgcHJpdmF0ZSBjb25uZWN0U3VjY2Vzc0NhbGxiYWNrXG4gIHByaXZhdGUgY29ubmVjdEZhaWxlZENhbGxiYWNrXG4gIHByaXZhdGUgaGVhcnRiZWF0RmFpbGVkQ2FsbGJhY2tcbiAgcHJpdmF0ZSBldmVudCA9ICdtZXNzYWdlJ1xuICBwdWJsaWMgaW5pdChpcCwgc3VjY2Vzc0NhbGxiYWNrLCBmYWlsZWRDYWxsYmFjaywgaGVhcnRiZWF0RmFpbGVkQ2FsbGJhY2spIHtcbiAgICB0aGlzLmlwQWRkcmVzcyA9IGlwXG4gICAgdGhpcy5jb25uZWN0U3VjY2Vzc0NhbGxiYWNrID0gc3VjY2Vzc0NhbGxiYWNrXG4gICAgdGhpcy5jb25uZWN0RmFpbGVkQ2FsbGJhY2sgPSBmYWlsZWRDYWxsYmFja1xuICAgIHRoaXMuaGVhcnRiZWF0RmFpbGVkQ2FsbGJhY2sgPSBoZWFydGJlYXRGYWlsZWRDYWxsYmFja1xuICB9XG4gIHB1YmxpYyBjb25uZWN0KCkge1xuICAgIHRoaXMuc29ja2V0ID0gaW8odGhpcy5pcEFkZHJlc3MpXG4gICAgdGhpcy5zb2NrZXQub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICB0aGlzLnRpbWVTdGFtcCA9IERhdGUubm93KClcbiAgICAgIGNvbnNvbGUubG9nKCd3ZWJzb2NrZXQgY29ubmVjdC4uLicpXG4gICAgICB0aGlzLmNvbm5lY3RTdWNjZXNzKClcbiAgICB9KVxuICAgIHRoaXMuc29ja2V0Lm9uKHRoaXMuZXZlbnQsIGRhdGEgPT4ge1xuICAgICAgdGhpcy50aW1lU3RhbXAgPSBEYXRlLm5vdygpXG4gICAgICBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICAgIHRoaXMucmVjZWl2ZU1lc3NhZ2UoSlNPTi5wYXJzZShkYXRhKSlcbiAgICB9KVxuICAgIHRoaXMuc29ja2V0Lm9uKCdkaXNjb25uZWN0JywgdGhpcy5vbkRpc2Nvbm5lY3QpXG4gIH1cbiAgcHVibGljIGRpc2Nvbm5lY3QoKSB7XG4gICAgdGhpcy5zb2NrZXQuZGlzY29ubmVjdCgpXG4gIH1cbiAgcHJpdmF0ZSBvbkRpc2Nvbm5lY3QoKSB7XG4gICAgaWYgKHRoaXMuY29ubmVjdEZhaWxlZENhbGxiYWNrKSB0aGlzLmNvbm5lY3RGYWlsZWRDYWxsYmFjaygpXG4gIH1cbiAgcHJpdmF0ZSBjb25uZWN0U3VjY2VzcygpIHtcbiAgICBpZiAodGhpcy5jb25uZWN0U3VjY2Vzc0NhbGxiYWNrKSB0aGlzLmNvbm5lY3RTdWNjZXNzQ2FsbGJhY2soKVxuICAgIHRoaXMuc2VuZCgnbG9naW4nLCB7fSwgJ0MyU19sb2dpbicpXG4gICAgdGhpcy5zdGFydEhlYXJ0QmVhdCgpXG4gIH1cbiAgcHJpdmF0ZSBzdGFydEhlYXJ0QmVhdCgpIHtcbiAgICBMYXlhLnRpbWVyLmxvb3AoNTAwMCwgdGhpcywgKCkgPT4ge1xuICAgICAgdGhpcy5zZW5kSGVhcnRCZWF0KClcbiAgICB9KVxuICB9XG4gIHByaXZhdGUgc2VuZEhlYXJ0QmVhdCgpIHtcbiAgICB2YXIgdiA9IERhdGUubm93KCkgLSB0aGlzLnRpbWVTdGFtcFxuXG4gICAgaWYgKHYgPj0gMzAwMDApIHtcbiAgICAgIGlmICh0aGlzLmhlYXJ0YmVhdEZhaWxlZENhbGxiYWNrKSB0aGlzLmhlYXJ0YmVhdEZhaWxlZENhbGxiYWNrKClcbiAgICB9XG4gICAgdGhpcy5zZW5kKCdoZWFydGJlYXQnLCB7fSwgJ0MyU19oZWFydGJlYXQnKVxuICB9XG4gIHByaXZhdGUgcmVjZWl2ZU1lc3NhZ2UoZGF0YSkge1xuICAgIGNvbnNvbGUubG9nKGRhdGEuaGVhZGVycy5ub25jZSlcbiAgICBpZiAoZGF0YS5oZWFkZXJzLm5vbmNlICYmIGRhdGEuaGVhZGVycy5ub25jZS5zdGFydHNXaXRoKCdTMkNfJykpIHtcbiAgICAgIGZvciAobGV0IGsgaW4gdGhpcy5vYnNlcnZlcnMpIHtcbiAgICAgICAgaWYgKGRhdGEuaGVhZGVycy5mdW5jX25hbWUgPT0gaykge1xuICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzW2tdLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LlJlY3ZNc2coZGF0YSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGsgaW4gdGhpcy5vYnNlcnZlcnMpIHtcbiAgICAgICAgaWYgKGRhdGEuaGVhZGVycy5ub25jZSA9PSBrKSB7XG4gICAgICAgICAgdGhpcy5vYnNlcnZlcnNba10uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuUmVjdk1zZyhkYXRhKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgZGVsZXRlIHRoaXMub2JzZXJ2ZXJzW2tdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcHVibGljIHNlbmRNZXNzYWdlKGZ1bmNOYW1lLCBvYnNlcnZlciwgZGF0YSwgY2FsbGJhY2sgPSBudWxsKSB7XG4gICAgdmFyIG5vbmNlID0gJ0MyU18nICsgZnVuY05hbWUgKyB0aGlzLm5vbmNlKytcbiAgICBpZiAoIXRoaXMub2JzZXJ2ZXJzW25vbmNlXSkgdGhpcy5vYnNlcnZlcnNbbm9uY2VdID0gW11cbiAgICB0aGlzLm9ic2VydmVyc1tub25jZV0ucHVzaChuZXcgT2JzZXJ2ZXIobm9uY2UsIG9ic2VydmVyLCBjYWxsYmFjaykpXG4gICAgdGhpcy5zZW5kKGZ1bmNOYW1lLCBkYXRhLCBub25jZSlcbiAgfVxuICBwdWJsaWMgb2JzZXJ2ZXJNZXNzYWdlKGZ1bmNOYW1lLCBvYnNlcnZlciwgY2FsbGJhY2sgPSBudWxsKSB7XG4gICAgdmFyIGtleSA9IGZ1bmNOYW1lXG4gICAgaWYgKCF0aGlzLm9ic2VydmVyc1trZXldKSB0aGlzLm9ic2VydmVyc1trZXldID0gW11cbiAgICB2YXIgb2JzID0gbmV3IE9ic2VydmVyKGtleSwgb2JzZXJ2ZXIsIGNhbGxiYWNrKVxuICAgIHRoaXMub2JzZXJ2ZXJzW2tleV0ucHVzaChvYnMpXG4gICAgcmV0dXJuIG9ic1xuICB9XG4gIHB1YmxpYyByZW1vdmUob2JzOiBPYnNlcnZlcikge1xuICAgIGlmIChvYnMgPT0gbnVsbCkgcmV0dXJuXG4gICAgbGV0IGFyciA9IHRoaXMub2JzZXJ2ZXJzW29icy50b3BpY11cbiAgICBpZiAoIWFycikgcmV0dXJuIG51bGxcbiAgICBsZXQgaW5kOiBudW1iZXIgPSBhcnIuaW5kZXhPZihvYnMpXG4gICAgaWYgKGluZCA8IDApIHJldHVybiBudWxsXG4gICAgYXJyLnNwbGljZShpbmQsIDEpXG4gICAgaWYgKGFyci5sZW5ndGggPT0gMCkgZGVsZXRlIHRoaXMub2JzZXJ2ZXJzW29icy50b3BpY11cbiAgICByZXR1cm4gb2JzXG4gIH1cbiAgcHJpdmF0ZSBzZW5kKGZ1bmNOYW1lLCBkYXRhLCBub25jZSkge1xuICAgIHZhciBwYXJhbSA9IHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgdWlkOiAnaGVqdW5qaWUnLFxuICAgICAgICBmdW5jX25hbWU6IGZ1bmNOYW1lLFxuICAgICAgICBub25jZTogbm9uY2UsXG4gICAgICB9LFxuICAgICAgcGFyYW1zOiBkYXRhLFxuICAgIH1cbiAgICB0aGlzLnRpbWVTdGFtcCA9IERhdGUubm93KClcbiAgICB0aGlzLnNvY2tldC5lbWl0KHRoaXMuZXZlbnQsIEpTT04uc3RyaW5naWZ5KHBhcmFtKSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgU2luZ2xldG9uIH0gZnJvbSAnLi4vLi4vY29yZS9iYXNlL1NpbmdsZXRvbidcbmltcG9ydCBOZXRSZXF1ZXN0IGZyb20gJy4vTmV0UmVxdWVzdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU5ldCBleHRlbmRzIFNpbmdsZXRvbiB7XG4gIHByaXZhdGUgc2VydmVyVXJsOiBzdHJpbmdcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICB9XG4gIHB1YmxpYyBpbml0U2VydmVyKHVybDogc3RyaW5nKSB7XG4gICAgdGhpcy5zZXJ2ZXJVcmwgPSB1cmxcbiAgfVxuICBwdWJsaWMgc2VuZChhcGk6IHN0cmluZywgYm9keVZhcmlhYmxlczogYW55ID0gbnVsbCwgdXJsVmFyaWFibGVzOiBhbnkgPSAnJywgbWV0aG9kOiBzdHJpbmcgPSAncG9zdCcsIHJlc3BvbnNlVHlwZTogc3RyaW5nID0gJ2pzb24nLCBoZWFkZXI/OiBhbnlbXSkge1xuICAgIHRoaXMuc2VuZEJ5VXJsKHRoaXMuc2VydmVyVXJsLCBhcGksIGJvZHlWYXJpYWJsZXMsIHVybFZhcmlhYmxlcywgbWV0aG9kLCByZXNwb25zZVR5cGUsIGhlYWRlcilcbiAgfVxuICBwdWJsaWMgc2VuZFByb21pc2UoYXBpOiBzdHJpbmcsIGJvZHlWYXJpYWJsZXM6IGFueSA9IG51bGwsIHVybFZhcmlhYmxlczogYW55ID0gJycsIG1ldGhvZDogc3RyaW5nID0gJ3Bvc3QnLCByZXNwb25zZVR5cGU6IHN0cmluZyA9ICdqc29uJywgaGVhZGVyPzogYW55W10pIHtcbiAgICB0aGlzLnNlbmRQcm9taXNlQnlVcmwodGhpcy5zZXJ2ZXJVcmwsIGFwaSwgYm9keVZhcmlhYmxlcywgdXJsVmFyaWFibGVzLCBtZXRob2QsIHJlc3BvbnNlVHlwZSwgaGVhZGVyKVxuICB9XG4gIHB1YmxpYyBzZW5kQnlVcmwodXJsOiBzdHJpbmcsIGFwaTogc3RyaW5nLCBib2R5VmFyaWFibGVzOiBhbnkgPSBudWxsLCB1cmxWYXJpYWJsZXM6IGFueSA9ICcnLCBtZXRob2Q6IHN0cmluZyA9ICdwb3N0JywgcmVzcG9uc2VUeXBlOiBzdHJpbmcgPSAnanNvbicsIGhlYWRlcj86IGFueVtdKSB7XG4gICAgbGV0IHJlcSA9IE5ldFJlcXVlc3QuQ3JlYXRlKGFwaSwgdXJsICsgYXBpICsgdXJsVmFyaWFibGVzLCBib2R5VmFyaWFibGVzLCBtZXRob2QsIHJlc3BvbnNlVHlwZSwgaGVhZGVyKVxuICAgIHJlcS5TZW5kKClcbiAgfVxuICBwdWJsaWMgYXN5bmMgc2VuZFByb21pc2VCeVVybCh1cmw6IHN0cmluZywgYXBpOiBzdHJpbmcsIGJvZHlWYXJpYWJsZXM6IGFueSA9IG51bGwsIHVybFZhcmlhYmxlczogYW55ID0gJycsIG1ldGhvZDogc3RyaW5nID0gJ3Bvc3QnLCByZXNwb25zZVR5cGU6IHN0cmluZyA9ICdqc29uJywgaGVhZGVyPzogYW55W10pIHtcbiAgICBsZXQgcmVxID0gTmV0UmVxdWVzdC5DcmVhdGUoYXBpLCB1cmwgKyBhcGkgKyB1cmxWYXJpYWJsZXMsIGJvZHlWYXJpYWJsZXMsIG1ldGhvZCwgcmVzcG9uc2VUeXBlLCBoZWFkZXIpXG4gICAgY29uc3QgZ2V0ID0gYXdhaXQgcmVxLlNlbmRQcm9taXNlKClcbiAgICByZXR1cm4gZ2V0XG4gIH1cbn1cbiIsImltcG9ydCBHYW1lQXBwIGZyb20gJy4uLy4uL2NvcmUvZ2FtZS9HYW1lQXBwJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXRSZXF1ZXN0IHtcbiAgcHJpdmF0ZSByZXE6IGxheWEubmV0Lkh0dHBSZXF1ZXN0XG4gIHByaXZhdGUgdXJsOiBzdHJpbmdcbiAgcHJpdmF0ZSBkYXRhOiBhbnlcbiAgcHJpdmF0ZSBtZXRob2Q6IHN0cmluZ1xuICBwcml2YXRlIHJlc3BvbnNlVHlwZTogc3RyaW5nXG4gIHByaXZhdGUgaGVhZGVyczogYW55W11cbiAgcHJpdmF0ZSBhcGlQYXRoOiBzdHJpbmdcbiAgcHJpdmF0ZSBtZXNzYWdlS2V5OiBhbnlcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgcmVxID0gbmV3IGxheWEubmV0Lkh0dHBSZXF1ZXN0KClcbiAgICB0aGlzLnJlcSA9IHJlcVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBDcmVhdGUoYXBpUGF0aDogc3RyaW5nLCB1cmw6IHN0cmluZywgZGF0YT86IGFueSwgbWV0aG9kPzogc3RyaW5nLCByZXNwb25zZVR5cGU/OiBzdHJpbmcsIGhlYWRlcnM/OiBhbnlbXSwgbWVzc2FnZUtleT8pOiBOZXRSZXF1ZXN0IHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBOZXRSZXF1ZXN0KClcbiAgICByZXF1ZXN0LnVybCA9IHVybFxuICAgIHJlcXVlc3QuZGF0YSA9IGRhdGFcbiAgICByZXF1ZXN0Lm1ldGhvZCA9IG1ldGhvZFxuICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gcmVzcG9uc2VUeXBlXG4gICAgcmVxdWVzdC5oZWFkZXJzID0gaGVhZGVyc1xuICAgIHJlcXVlc3QuYXBpUGF0aCA9IGFwaVBhdGhcbiAgICByZXF1ZXN0Lm1lc3NhZ2VLZXkgPSBtZXNzYWdlS2V5XG4gICAgcmV0dXJuIHJlcXVlc3RcbiAgfVxuICBwdWJsaWMgU2VuZCgpIHtcbiAgICBsZXQgcmVxID0gdGhpcy5yZXFcbiAgICBsZXQgdXJsID0gdGhpcy51cmxcbiAgICBsZXQgZGF0YSA9IHRoaXMuZGF0YVxuICAgIGxldCBtZXRob2QgPSB0aGlzLm1ldGhvZFxuICAgIGxldCByZXNwb25zZVR5cGUgPSB0aGlzLnJlc3BvbnNlVHlwZVxuICAgIGxldCBoZWFkZXJzID0gdGhpcy5oZWFkZXJzIHx8IFsnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nXVxuICAgIHJlcS5vbmNlKGxheWEuZXZlbnRzLkV2ZW50LkNPTVBMRVRFLCB0aGlzLCB0aGlzLmNvbXBsZXRlSGFuZGxlcilcbiAgICByZXEub25jZShsYXlhLmV2ZW50cy5FdmVudC5FUlJPUiwgdGhpcywgdGhpcy5lcnJvckhhbmRsZXIpXG4gICAgcmVxLnNlbmQodXJsLCBkYXRhLCBtZXRob2QsIHJlc3BvbnNlVHlwZSwgaGVhZGVycylcbiAgfVxuICBwdWJsaWMgYXN5bmMgU2VuZFByb21pc2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICBsZXQgcmVxID0gdGhpcy5yZXFcbiAgICBsZXQgdXJsID0gdGhpcy51cmxcbiAgICBsZXQgZGF0YSA9IHRoaXMuZGF0YVxuICAgIGxldCBtZXRob2QgPSB0aGlzLm1ldGhvZFxuICAgIGxldCByZXNwb25zZVR5cGUgPSB0aGlzLnJlc3BvbnNlVHlwZVxuICAgIGxldCBoZWFkZXJzID0gdGhpcy5oZWFkZXJzIHx8IFsnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nXVxuICAgIGxldCBfcG9zdCA9IGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgbGV0IF9yZXNvbHZlID0gZnVuY3Rpb24ob2JqOiBhbnkpIHtcbiAgICAgICAgcmVzb2x2ZShvYmopXG4gICAgICB9XG4gICAgICByZXEub25jZShsYXlhLmV2ZW50cy5FdmVudC5DT01QTEVURSwgdGhpcywgX3Jlc29sdmUpXG4gICAgICByZXEub25jZShsYXlhLmV2ZW50cy5FdmVudC5FUlJPUiwgdGhpcywgX3Jlc29sdmUpXG4gICAgICByZXEuc2VuZCh1cmwsIGRhdGEsIG1ldGhvZCwgcmVzcG9uc2VUeXBlLCBoZWFkZXJzKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PihfcG9zdClcbiAgfVxuICBwcml2YXRlIGNvbXBsZXRlSGFuZGxlcihkYXRhOiBhbnkpIHtcbiAgICBpZiAodGhpcy5tZXNzYWdlS2V5KSB7XG4gICAgICBHYW1lQXBwLmRpc3BhdGNoZXIuU2VuZE1zZyh0aGlzLm1lc3NhZ2VLZXksIGRhdGEpXG4gICAgfVxuICB9XG4gIHByaXZhdGUgZXJyb3JIYW5kbGVyKGU6IGFueSkge1xuICAgIGNvbnNvbGUuZXJyb3IodGhpcy5tZXNzYWdlS2V5LCBlKVxuICB9XG4gIHByaXZhdGUgcHJvY2Vzc0hhbmRsZXIoZGF0YTogYW55KSB7fVxufVxuIiwiaW1wb3J0IHsgdWkgfSBmcm9tICcuLi91aS9sYXlhTWF4VUknXHJcbmltcG9ydCBBUGFnZSBmcm9tICcuLi9nYW1lL3VpL3ZpZXcvQVBhZ2UvQVBhZ2UnXHJcbmltcG9ydCB7IHNldFVJUm9vdCwgb3BlblZpZXcgfSBmcm9tICcuLi9jb3JlL212Yy9NdmNNZ3InXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5TY2VuZSBleHRlbmRzIHVpLnNjZW5lLk1haW5TY2VuZVVJIHtcclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICAvLyBHYW1lQXBwLmluaXQodGhpcylcclxuICAgIGNvbnN0IFVJID0gbmV3IExheWEuU3ByaXRlKClcclxuICAgIFVJLm5hbWUgPSAnVUknXHJcbiAgICBVSS53aWR0aCA9IExheWEuc3RhZ2Uud2lkdGhcclxuICAgIFVJLmhlaWdodCA9IExheWEuc3RhZ2UuaGVpZ2h0XHJcbiAgICBMYXlhLnN0YWdlLmFkZENoaWxkKFVJKVxyXG4gICAgc2V0VUlSb290KFVJKVxyXG5cclxuICAgIG9wZW5WaWV3KEFQYWdlLHthOjEsYjoyfSlcclxuICB9XHJcbiAgb25PcGVuZWQoKSB7fVxyXG59XHJcbiIsIi8qKlRoaXMgY2xhc3MgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgTGF5YUFpcklERSwgcGxlYXNlIGRvIG5vdCBtYWtlIGFueSBtb2RpZmljYXRpb25zLiAqL1xuaW1wb3J0IFZpZXc9TGF5YS5WaWV3O1xuaW1wb3J0IERpYWxvZz1MYXlhLkRpYWxvZztcbmltcG9ydCBTY2VuZT1MYXlhLlNjZW5lO1xuaW1wb3J0ICogYXMgdiBmcm9tIFwiLi4vY29yZS9tdmMvdmlldy9CYXNlVmlld1wiO1xuaW1wb3J0IEJhc2VWaWV3ID12LktVSS5CYXNlVmlld1xudmFyIFJFRzogRnVuY3Rpb24gPSBMYXlhLkNsYXNzVXRpbHMucmVnQ2xhc3M7XG5leHBvcnQgbW9kdWxlIHVpLnNjZW5lIHtcclxuICAgIGV4cG9ydCBjbGFzcyBNYWluU2NlbmVVSSBleHRlbmRzIFNjZW5lIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFNjZW5lKFwic2NlbmUvTWFpblNjZW5lXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFJFRyhcInVpLnNjZW5lLk1haW5TY2VuZVVJXCIsTWFpblNjZW5lVUkpO1xyXG59XHJcbmV4cG9ydCBtb2R1bGUgdWkudmlldyB7XHJcbiAgICBleHBvcnQgY2xhc3MgQVBhZ2VVSSBleHRlbmRzIEJhc2VWaWV3IHtcclxuXHRcdHB1YmxpYyBidG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIGRkOmxheWEuaHRtbC5kb20uSFRNTERpdkVsZW1lbnQ7XG5cdFx0cHVibGljIGJhc2VCdG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIGNvbnRlbnRzOkxheWEuTGFiZWw7XG4gICAgICAgIHB1YmxpYyBzdGF0aWMgIHVpVmlldzphbnkgPXtcInR5cGVcIjpcIkJhc2VWaWV3XCIsXCJwcm9wc1wiOntcIndpZHRoXCI6NjQwLFwiaGVpZ2h0XCI6MTEzNn0sXCJjb21wSWRcIjoyLFwiY2hpbGRcIjpbe1widHlwZVwiOlwiUmVjdFwiLFwicHJvcHNcIjp7XCJ3aWR0aFwiOjY0MCxcIm5hbWVcIjpcInJcIixcImxpbmVXaWR0aFwiOjEsXCJoZWlnaHRcIjoxMTM2LFwiZmlsbENvbG9yXCI6XCIjZmJiYmJiXCJ9LFwiY29tcElkXCI6N30se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjo1NTUsXCJ4XCI6MjA4LFwid2lkdGhcIjoyMDAsXCJ2YXJcIjpcImJ0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiR29UbyBCUGFnZVwiLFwiaGVpZ2h0XCI6NTB9LFwiY29tcElkXCI6OH0se1widHlwZVwiOlwiSFRNTERpdkVsZW1lbnRcIixcInByb3BzXCI6e1wieVwiOjAsXCJ4XCI6MCxcIndpZHRoXCI6NjQ0LFwidmFyXCI6XCJkZFwiLFwiaW5uZXJIVE1MXCI6XCI8YnIvPjxzcGFuPiAg5rWL6K+V5rC05bmz5bGF5Lit5a+56b2QPC9zcGFuPlwiLFwiaGVpZ2h0XCI6MjY1LFwicnVudGltZVwiOlwibGF5YS5odG1sLmRvbS5IVE1MRGl2RWxlbWVudFwifSxcImNvbXBJZFwiOjIwfSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjY2OSxcInhcIjoyMDgsXCJ3aWR0aFwiOjIwMCxcInZhclwiOlwiYmFzZUJ0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiR29UbyBCYXNlXCIsXCJoZWlnaHRcIjo1MH0sXCJjb21wSWRcIjoxNSxcImNoaWxkXCI6W3tcInR5cGVcIjpcIkxhYmVsXCIsXCJwcm9wc1wiOntcInlcIjotNjI3LFwieFwiOjE5MCxcIndpZHRoXCI6MjAxLFwidmFyXCI6XCJjb250ZW50c1wiLFwidmFsaWduXCI6XCJtaWRkbGVcIixcInRleHRcIjpcInNzc3NcIixcImhlaWdodFwiOjUwMCxcImZvbnRTaXplXCI6NDAsXCJhbGlnblwiOlwiY2VudGVyXCJ9LFwiY29tcElkXCI6MTR9XX0se1widHlwZVwiOlwiTGFiZWxcIixcInByb3BzXCI6e1wieVwiOjEyMSxcInhcIjoyNzUuNSxcIndpZHRoXCI6NjMsXCJ2YWxpZ25cIjpcIm1pZGRsZVwiLFwidGV4dFwiOlwibGFiZWxcIixcImhlaWdodFwiOjIyLFwiYWxpZ25cIjpcImNlbnRlclwifSxcImNvbXBJZFwiOjI1fSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjEzMixcInhcIjo0MjYsXCJwcmVzZXRJRFwiOjEsXCJ3aWR0aFwiOjE5MixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcIuaMiemSruiEmuacrFwiLFwiaXNQcmVzZXRSb290XCI6dHJ1ZSxcImhlaWdodFwiOjkwfSxcImNvbXBJZFwiOjMxLFwiY2hpbGRcIjpbe1widHlwZVwiOlwiU2NyaXB0XCIsXCJwcm9wc1wiOntcInByZXNldElEXCI6MixcInlcIjoxLFwieFwiOjAsXCJydW50aW1lXCI6XCJnYW1lL3VpL3ZpZXcvQVBhZ2UvVGVzdC50c1wifSxcImNvbXBJZFwiOjMyfV19XSxcImxvYWRMaXN0XCI6W1wiY29tcC9idXR0b24ucG5nXCIsXCJwcmVmYWIvQnV0dG9uLnByZWZhYlwiXSxcImxvYWRMaXN0M0RcIjpbXX07XHJcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVZpZXcoQVBhZ2VVSS51aVZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFJFRyhcInVpLnZpZXcuQVBhZ2VVSVwiLEFQYWdlVUkpO1xyXG4gICAgZXhwb3J0IGNsYXNzIEJhc2VUZXN0VUkgZXh0ZW5kcyBCYXNlVmlldyB7XHJcblx0XHRwdWJsaWMgdGFuazpMYXlhLkNsaXA7XG5cdFx0cHVibGljIGNsb3NlQnRuOkxheWEuQnV0dG9uO1xuXHRcdHB1YmxpYyBkaWFsb2dCdG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIGxvYWRpbmdCdG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIHZpZXdCdG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIHRva2VuOkxheWEuTGFiZWw7XG5cdFx0cHVibGljIHVzZXJuYW1lOkxheWEuTGFiZWw7XG4gICAgICAgIHB1YmxpYyBzdGF0aWMgIHVpVmlldzphbnkgPXtcInR5cGVcIjpcIkJhc2VWaWV3XCIsXCJwcm9wc1wiOntcIndpZHRoXCI6NjQwLFwiaGVpZ2h0XCI6MTEzNn0sXCJjb21wSWRcIjoyLFwiY2hpbGRcIjpbe1widHlwZVwiOlwiSW1hZ2VcIixcInByb3BzXCI6e1wieVwiOjAsXCJ4XCI6MCxcInRvcFwiOjAsXCJza2luXCI6XCJjb21wL2ltYWdlLnBuZ1wiLFwicmlnaHRcIjowLFwibGVmdFwiOjAsXCJib3R0b21cIjowfSxcImNvbXBJZFwiOjh9LHtcInR5cGVcIjpcIkNsaXBcIixcInByb3BzXCI6e1wieVwiOjAsXCJ4XCI6MCxcInZhclwiOlwidGFua1wiLFwic2tpblwiOlwiQ2hhcmFjdGVycy9UYW5rXzgucG5nXCIsXCJpbmRleFwiOjQsXCJjbGlwWVwiOjQsXCJjbGlwWFwiOjQsXCJjZW50ZXJZXCI6LTEsXCJjZW50ZXJYXCI6MH0sXCJjb21wSWRcIjozfSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjMyNyxcInhcIjoyODIsXCJ2YXJcIjpcImNsb3NlQnRuXCIsXCJza2luXCI6XCJjb21wL2J1dHRvbi5wbmdcIixcImxhYmVsXCI6XCJjbG9zZVwifSxcImNvbXBJZFwiOjR9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6MjUyLFwieFwiOjQ3MixcInZhclwiOlwiZGlhbG9nQnRuXCIsXCJza2luXCI6XCJjb21wL2J1dHRvbi5wbmdcIixcImxhYmVsXCI6XCJkaWFsb2dcIn0sXCJjb21wSWRcIjo1fSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjMwNCxcInhcIjo0NzIsXCJ2YXJcIjpcImxvYWRpbmdCdG5cIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcImJhc2VcIn0sXCJjb21wSWRcIjo2fSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjM2MixcInhcIjo0NzIsXCJ2YXJcIjpcInZpZXdCdG5cIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcInZpZXdcIn0sXCJjb21wSWRcIjo3fSx7XCJ0eXBlXCI6XCJMYWJlbFwiLFwicHJvcHNcIjp7XCJ5XCI6MTgxLFwieFwiOjEwNSxcInZhclwiOlwidG9rZW5cIixcInRleHRcIjpcInRva2VuXCIsXCJmb250U2l6ZVwiOjMwLFwiY29sb3JcIjpcIiNmZmZmZmZcIn0sXCJjb21wSWRcIjo5fSx7XCJ0eXBlXCI6XCJMYWJlbFwiLFwicHJvcHNcIjp7XCJ5XCI6MjU3LFwieFwiOjEwNSxcIndvcmRXcmFwXCI6dHJ1ZSxcIndpZHRoXCI6OTUsXCJ2YXJcIjpcInVzZXJuYW1lXCIsXCJ0ZXh0XCI6XCJ0b2tlblwiLFwiaGVpZ2h0XCI6NTEsXCJmb250U2l6ZVwiOjMwLFwiY29sb3JcIjpcIiNmZmZmZmZcIixcImJnQ29sb3JcIjpcIiNmZjc1NzNcIn0sXCJjb21wSWRcIjoxMCxcImNoaWxkXCI6W3tcInR5cGVcIjpcIlNjcmlwdFwiLFwicHJvcHNcIjp7XCJMYW5ndWFnZUlEXCI6XCJ0ZXN0dGVzdHRlc3RcIixcIklzRmlsbFwiOnRydWUsXCJydW50aW1lXCI6XCJjb3JlL2dhbWUvc2NyaXB0L0hMYWJlbC50c1wifSxcImNvbXBJZFwiOjEyfV19XSxcImxvYWRMaXN0XCI6W1wiY29tcC9pbWFnZS5wbmdcIixcIkNoYXJhY3RlcnMvVGFua184LnBuZ1wiLFwiY29tcC9idXR0b24ucG5nXCJdLFwibG9hZExpc3QzRFwiOltdfTtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVmlldyhCYXNlVGVzdFVJLnVpVmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUkVHKFwidWkudmlldy5CYXNlVGVzdFVJXCIsQmFzZVRlc3RVSSk7XHJcbiAgICBleHBvcnQgY2xhc3MgQlBhZ2VVSSBleHRlbmRzIEJhc2VWaWV3IHtcclxuXHRcdHB1YmxpYyBjaGFuZ2U6TGF5YS5CdXR0b247XG5cdFx0cHVibGljIGNsb3NlX2J0bjpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgdG9rZW46TGF5YS5MYWJlbDtcblx0XHRwdWJsaWMgdXNlcm5hbWU6TGF5YS5MYWJlbDtcbiAgICAgICAgcHVibGljIHN0YXRpYyAgdWlWaWV3OmFueSA9e1widHlwZVwiOlwiQmFzZVZpZXdcIixcInByb3BzXCI6e1wid2lkdGhcIjozMDAsXCJoZWlnaHRcIjoxMTM2fSxcImNvbXBJZFwiOjIsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJSZWN0XCIsXCJwcm9wc1wiOntcIndpZHRoXCI6MzAwLFwibGluZVdpZHRoXCI6MSxcImhlaWdodFwiOjExMzYsXCJmaWxsQ29sb3JcIjpcIiNjZGY5YTRcIn0sXCJjb21wSWRcIjozfSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjUzNCxcInhcIjo1OSxcIndpZHRoXCI6MjAwLFwidmFyXCI6XCJjaGFuZ2VcIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcIkNoYW5nZUFQYWdlXCIsXCJoZWlnaHRcIjo1MH0sXCJjb21wSWRcIjo0fSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjY0NCxcInhcIjo1OSxcIndpZHRoXCI6MjAwLFwidmFyXCI6XCJjbG9zZV9idG5cIixcInNraW5cIjpcImNvbXAvYnV0dG9uLnBuZ1wiLFwibGFiZWxcIjpcIkNsb3NlXCIsXCJoZWlnaHRcIjo1MH0sXCJjb21wSWRcIjo1fSx7XCJ0eXBlXCI6XCJMYWJlbFwiLFwicHJvcHNcIjp7XCJ5XCI6MTgxLFwieFwiOjEwNSxcInZhclwiOlwidG9rZW5cIixcInRleHRcIjpcInRva2VuXCIsXCJmb250U2l6ZVwiOjMwLFwiY29sb3JcIjpcIiMwMDAwMDBcIn0sXCJjb21wSWRcIjo3fSx7XCJ0eXBlXCI6XCJMYWJlbFwiLFwicHJvcHNcIjp7XCJ5XCI6MjU3LFwieFwiOjEwNSxcInZhclwiOlwidXNlcm5hbWVcIixcInRleHRcIjpcInRva2VuXCIsXCJmb250U2l6ZVwiOjMwLFwiY29sb3JcIjpcIiMwMDAwMDBcIn0sXCJjb21wSWRcIjo4fV0sXCJsb2FkTGlzdFwiOltcImNvbXAvYnV0dG9uLnBuZ1wiXSxcImxvYWRMaXN0M0RcIjpbXX07XHJcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVZpZXcoQlBhZ2VVSS51aVZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFJFRyhcInVpLnZpZXcuQlBhZ2VVSVwiLEJQYWdlVUkpO1xyXG4gICAgZXhwb3J0IGNsYXNzIERpYWxvZ1Rlc3RVSSBleHRlbmRzIEJhc2VWaWV3IHtcclxuXHRcdHB1YmxpYyBib3g6TGF5YS5Cb3g7XG5cdFx0cHVibGljIHRhbms6TGF5YS5DbGlwO1xuXHRcdHB1YmxpYyBjbG9zZUJ0bjpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgdG9rZW46TGF5YS5MYWJlbDtcblx0XHRwdWJsaWMgdXNlcm5hbWU6TGF5YS5MYWJlbDtcbiAgICAgICAgcHVibGljIHN0YXRpYyAgdWlWaWV3OmFueSA9e1widHlwZVwiOlwiQmFzZVZpZXdcIixcInByb3BzXCI6e1wid2lkdGhcIjo2NDAsXCJoZWlnaHRcIjoxMTM2fSxcImNvbXBJZFwiOjIsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJCb3hcIixcInByb3BzXCI6e1wid2lkdGhcIjoyMDAsXCJ2YXJcIjpcImJveFwiLFwiaGVpZ2h0XCI6MjAwLFwiY2VudGVyWVwiOjAsXCJjZW50ZXJYXCI6MH0sXCJjb21wSWRcIjo5LFwiY2hpbGRcIjpbe1widHlwZVwiOlwiSW1hZ2VcIixcInByb3BzXCI6e1widG9wXCI6MCxcInNraW5cIjpcImNvbXAvaW1hZ2UucG5nXCIsXCJyaWdodFwiOjAsXCJsZWZ0XCI6MCxcImJvdHRvbVwiOjB9LFwiY29tcElkXCI6MTB9LHtcInR5cGVcIjpcIkNsaXBcIixcInByb3BzXCI6e1wieVwiOjU1MCxcInhcIjozMDMsXCJ2YXJcIjpcInRhbmtcIixcInNraW5cIjpcIkNoYXJhY3RlcnMvVGFua183LnBuZ1wiLFwiaW5kZXhcIjo0LFwiY2xpcFlcIjo0LFwiY2xpcFhcIjo0LFwiY2VudGVyWVwiOi0xLFwiY2VudGVyWFwiOjB9LFwiY29tcElkXCI6M30se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjozOSxcInhcIjo2Mi41LFwidmFyXCI6XCJjbG9zZUJ0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiY2xvc2VcIn0sXCJjb21wSWRcIjo0fV19LHtcInR5cGVcIjpcIkxhYmVsXCIsXCJwcm9wc1wiOntcInlcIjoxODEsXCJ4XCI6MTA1LFwidmFyXCI6XCJ0b2tlblwiLFwidGV4dFwiOlwidG9rZW5cIixcImZvbnRTaXplXCI6MzAsXCJjb2xvclwiOlwiI2ZmZmZmZlwifSxcImNvbXBJZFwiOjEyfSx7XCJ0eXBlXCI6XCJMYWJlbFwiLFwicHJvcHNcIjp7XCJ5XCI6MjU3LFwieFwiOjEwNSxcInZhclwiOlwidXNlcm5hbWVcIixcInRleHRcIjpcInRva2VuXCIsXCJmb250U2l6ZVwiOjMwLFwiY29sb3JcIjpcIiNmZmZmZmZcIn0sXCJjb21wSWRcIjoxM31dLFwibG9hZExpc3RcIjpbXCJjb21wL2ltYWdlLnBuZ1wiLFwiQ2hhcmFjdGVycy9UYW5rXzcucG5nXCIsXCJjb21wL2J1dHRvbi5wbmdcIl0sXCJsb2FkTGlzdDNEXCI6W119O1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVWaWV3KERpYWxvZ1Rlc3RVSS51aVZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFJFRyhcInVpLnZpZXcuRGlhbG9nVGVzdFVJXCIsRGlhbG9nVGVzdFVJKTtcclxuICAgIGV4cG9ydCBjbGFzcyBMb2FkaW5nVUkgZXh0ZW5kcyBCYXNlVmlldyB7XHJcblx0XHRwdWJsaWMgdGFuazpMYXlhLkNsaXA7XG5cdFx0cHVibGljIGJ0bl9jbG9zZTpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgYnRuX2Nvbm5lY3Q6TGF5YS5CdXR0b247XG5cdFx0cHVibGljIHRva2VuOkxheWEuTGFiZWw7XG5cdFx0cHVibGljIHVzZXJuYW1lOkxheWEuTGFiZWw7XG4gICAgICAgIHB1YmxpYyBzdGF0aWMgIHVpVmlldzphbnkgPXtcInR5cGVcIjpcIkJhc2VWaWV3XCIsXCJwcm9wc1wiOntcIndpZHRoXCI6NjQwLFwiaGVpZ2h0XCI6MTEzNn0sXCJjb21wSWRcIjoyLFwiY2hpbGRcIjpbe1widHlwZVwiOlwiSW1hZ2VcIixcInByb3BzXCI6e1widG9wXCI6MCxcInNraW5cIjpcIkNoYXJhY3RlcnMvVGFua183LnBuZ1wiLFwicmlnaHRcIjowLFwibGVmdFwiOjAsXCJib3R0b21cIjowfSxcImNvbXBJZFwiOjE3fSx7XCJ0eXBlXCI6XCJDbGlwXCIsXCJwcm9wc1wiOntcInZhclwiOlwidGFua1wiLFwic2tpblwiOlwiQ2hhcmFjdGVycy9UYW5rXzQucG5nXCIsXCJpbmRleFwiOjQsXCJjbGlwWVwiOjQsXCJjbGlwWFwiOjQsXCJjZW50ZXJZXCI6LTEsXCJjZW50ZXJYXCI6MH0sXCJjb21wSWRcIjozfSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjMyNyxcInhcIjoyODIuNSxcInZhclwiOlwiYnRuX2Nsb3NlXCIsXCJza2luXCI6XCJjb21wL2J1dHRvbi5wbmdcIixcImxhYmVsXCI6XCJjbG9zZVwifSxcImNvbXBJZFwiOjR9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6MjIyLFwieFwiOjI4Mi41LFwidmFyXCI6XCJidG5fY29ubmVjdFwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiY29ubmVjdFwifSxcImNvbXBJZFwiOjV9LHtcInR5cGVcIjpcIkxhYmVsXCIsXCJwcm9wc1wiOntcInlcIjoxODEsXCJ4XCI6MTA1LFwidmFyXCI6XCJ0b2tlblwiLFwidGV4dFwiOlwidG9rZW5cIixcImZvbnRTaXplXCI6MzAsXCJjb2xvclwiOlwiI2ZmZmZmZlwifSxcImNvbXBJZFwiOjE4fSx7XCJ0eXBlXCI6XCJMYWJlbFwiLFwicHJvcHNcIjp7XCJ5XCI6MjU3LFwieFwiOjEwNSxcInZhclwiOlwidXNlcm5hbWVcIixcInRleHRcIjpcInRva2VuXCIsXCJmb250U2l6ZVwiOjMwLFwiY29sb3JcIjpcIiNmZmZmZmZcIn0sXCJjb21wSWRcIjoxOX1dLFwibG9hZExpc3RcIjpbXCJDaGFyYWN0ZXJzL1RhbmtfNy5wbmdcIixcIkNoYXJhY3RlcnMvVGFua180LnBuZ1wiLFwiY29tcC9idXR0b24ucG5nXCJdLFwibG9hZExpc3QzRFwiOltdfTtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVmlldyhMb2FkaW5nVUkudWlWaWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSRUcoXCJ1aS52aWV3LkxvYWRpbmdVSVwiLExvYWRpbmdVSSk7XHJcbiAgICBleHBvcnQgY2xhc3MgVmlld1Rlc3RVSSBleHRlbmRzIEJhc2VWaWV3IHtcclxuXHRcdHB1YmxpYyB0YW5rOkxheWEuQ2xpcDtcblx0XHRwdWJsaWMgY2xvc2VCdG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIHZpZXdCdG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIHRva2VuOkxheWEuTGFiZWw7XG5cdFx0cHVibGljIHVzZXJuYW1lOkxheWEuTGFiZWw7XG4gICAgICAgIHB1YmxpYyBzdGF0aWMgIHVpVmlldzphbnkgPXtcInR5cGVcIjpcIkJhc2VWaWV3XCIsXCJwcm9wc1wiOntcIndpZHRoXCI6NjQwLFwiaGVpZ2h0XCI6MTEzNn0sXCJjb21wSWRcIjoyLFwiY2hpbGRcIjpbe1widHlwZVwiOlwiSW1hZ2VcIixcInByb3BzXCI6e1wieVwiOjAsXCJ4XCI6MCxcInRvcFwiOjAsXCJza2luXCI6XCJjb21wL2ltYWdlLnBuZ1wiLFwicmlnaHRcIjowLFwibGVmdFwiOjAsXCJib3R0b21cIjowfSxcImNvbXBJZFwiOjd9LHtcInR5cGVcIjpcIkNsaXBcIixcInByb3BzXCI6e1wieVwiOjAsXCJ4XCI6MCxcInZhclwiOlwidGFua1wiLFwic2tpblwiOlwiQ2hhcmFjdGVycy8k54u8LnBuZ1wiLFwiaW5kZXhcIjo0LFwiY2xpcFlcIjo0LFwiY2xpcFhcIjo0LFwiY2VudGVyWVwiOi0xLFwiY2VudGVyWFwiOjB9LFwiY29tcElkXCI6M30se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjozMjcsXCJ4XCI6MjgyLFwidmFyXCI6XCJjbG9zZUJ0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiY2xvc2VcIn0sXCJjb21wSWRcIjo0fSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjM4NSxcInhcIjoyODIuNSxcInZhclwiOlwidmlld0J0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwidmlld1wifSxcImNvbXBJZFwiOjV9LHtcInR5cGVcIjpcIkxhYmVsXCIsXCJwcm9wc1wiOntcInlcIjoxODEsXCJ4XCI6MTA1LFwidmFyXCI6XCJ0b2tlblwiLFwidGV4dFwiOlwidG9rZW5cIixcImZvbnRTaXplXCI6MzAsXCJjb2xvclwiOlwiI2ZmZmZmZlwifSxcImNvbXBJZFwiOjl9LHtcInR5cGVcIjpcIkxhYmVsXCIsXCJwcm9wc1wiOntcInlcIjoyNTcsXCJ4XCI6MTA1LFwidmFyXCI6XCJ1c2VybmFtZVwiLFwidGV4dFwiOlwidG9rZW5cIixcImZvbnRTaXplXCI6MzAsXCJjb2xvclwiOlwiI2ZmZmZmZlwifSxcImNvbXBJZFwiOjEwfV0sXCJsb2FkTGlzdFwiOltcImNvbXAvaW1hZ2UucG5nXCIsXCJDaGFyYWN0ZXJzLyTni7wucG5nXCIsXCJjb21wL2J1dHRvbi5wbmdcIl0sXCJsb2FkTGlzdDNEXCI6W119O1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVWaWV3KFZpZXdUZXN0VUkudWlWaWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSRUcoXCJ1aS52aWV3LlZpZXdUZXN0VUlcIixWaWV3VGVzdFVJKTtcclxuICAgIGV4cG9ydCBjbGFzcyBWaWV3VGVzdDFVSSBleHRlbmRzIEJhc2VWaWV3IHtcclxuXHRcdHB1YmxpYyB0YW5rOkxheWEuQ2xpcDtcblx0XHRwdWJsaWMgY2xvc2VCdG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIHRva2VuOkxheWEuTGFiZWw7XG5cdFx0cHVibGljIHVzZXJuYW1lOkxheWEuTGFiZWw7XG4gICAgICAgIHB1YmxpYyBzdGF0aWMgIHVpVmlldzphbnkgPXtcInR5cGVcIjpcIkJhc2VWaWV3XCIsXCJwcm9wc1wiOntcIndpZHRoXCI6NjQwLFwiaGVpZ2h0XCI6MTEzNn0sXCJjb21wSWRcIjoyLFwiY2hpbGRcIjpbe1widHlwZVwiOlwiSW1hZ2VcIixcInByb3BzXCI6e1wieVwiOjAsXCJ4XCI6MCxcInRvcFwiOjAsXCJza2luXCI6XCJjb21wL2ltYWdlLnBuZ1wiLFwicmlnaHRcIjowLFwibGVmdFwiOjAsXCJib3R0b21cIjowfSxcImNvbXBJZFwiOjZ9LHtcInR5cGVcIjpcIkNsaXBcIixcInByb3BzXCI6e1wieVwiOjAsXCJ4XCI6MCxcInZhclwiOlwidGFua1wiLFwic2tpblwiOlwiQ2hhcmFjdGVycy8k54u8LnBuZ1wiLFwiaW5kZXhcIjo0LFwiY2xpcFlcIjo0LFwiY2xpcFhcIjo0LFwiY2VudGVyWVwiOi0xLFwiY2VudGVyWFwiOjB9LFwiY29tcElkXCI6M30se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjozMjcsXCJ4XCI6MjgyLFwidmFyXCI6XCJjbG9zZUJ0blwiLFwic2tpblwiOlwiY29tcC9idXR0b24ucG5nXCIsXCJsYWJlbFwiOlwiY2xvc2VcIn0sXCJjb21wSWRcIjo0fSx7XCJ0eXBlXCI6XCJMYWJlbFwiLFwicHJvcHNcIjp7XCJ5XCI6MTgxLFwieFwiOjEwNSxcInZhclwiOlwidG9rZW5cIixcInRleHRcIjpcInRva2VuXCIsXCJmb250U2l6ZVwiOjMwLFwiY29sb3JcIjpcIiNmZmZmZmZcIn0sXCJjb21wSWRcIjo3fSx7XCJ0eXBlXCI6XCJMYWJlbFwiLFwicHJvcHNcIjp7XCJ5XCI6MjU3LFwieFwiOjEwNSxcInZhclwiOlwidXNlcm5hbWVcIixcInRleHRcIjpcInRva2VuXCIsXCJmb250U2l6ZVwiOjMwLFwiY29sb3JcIjpcIiNmZmZmZmZcIn0sXCJjb21wSWRcIjo4fV0sXCJsb2FkTGlzdFwiOltcImNvbXAvaW1hZ2UucG5nXCIsXCJDaGFyYWN0ZXJzLyTni7wucG5nXCIsXCJjb21wL2J1dHRvbi5wbmdcIl0sXCJsb2FkTGlzdDNEXCI6W119O1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVWaWV3KFZpZXdUZXN0MVVJLnVpVmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUkVHKFwidWkudmlldy5WaWV3VGVzdDFVSVwiLFZpZXdUZXN0MVVJKTtcclxufVxyIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==