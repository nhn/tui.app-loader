/*!
 * TOAST UI App Loader
 * @version 2.1.4
 * @author NHN. FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("tui-code-snippet"), require("ua-parser-js"));
	else if(typeof define === 'function' && define.amd)
		define(["tui-code-snippet", "ua-parser-js"], factory);
	else if(typeof exports === 'object')
		exports["AppLoader"] = factory(require("tui-code-snippet"), require("ua-parser-js"));
	else
		root["tui"] = root["tui"] || {}, root["tui"]["AppLoader"] = factory(root["tui"]["util"], root["UAParser"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_tui_code_snippet__, __WEBPACK_EXTERNAL_MODULE_ua_parser_js__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/appLoader.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/appLoader.js":
/*!*****************************!*\
  !*** ./src/js/appLoader.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * @fileoverview Load native app or move to install page\n * @dependency code-snippet.js, detectors.js, agentDetector.js\n * @author NHN. FE dev Lab <dl_javascript@nhn.com>\n */\n\n\n\nvar snippet = __webpack_require__(/*! tui-code-snippet */ \"tui-code-snippet\");\nvar UAParser = __webpack_require__(/*! ua-parser-js */ \"ua-parser-js\");\nvar Detector = __webpack_require__(/*! ./detectors */ \"./src/js/detectors.js\");\nvar iOSDetector = __webpack_require__(/*! ./iosDetectors */ \"./src/js/iosDetectors.js\");\nvar EtcDetector = __webpack_require__(/*! ./etcDetectors */ \"./src/js/etcDetectors.js\");\n\nvar defaultOptions = {\n  ios: {\n    scheme: '',\n    url: ''\n  },\n  android: {\n    scheme: '',\n    url: ''\n  }\n};\n\n/**\n * Mobile App loader\n * @constructor\n * @class\n * @param {object} options - Option object\n * @param {boolean} [options.usageStatistics=true] - Let us know the hostname. If you don't want to send the hostname, please set to false.\n * @see AppLoader#exec\n * @example <caption>node, commonjs</caption>\n * var Apploader = require('tui-app-loader');\n * var appLoader = new AppLoader();\n * appLoader.exec(...);\n * @example <caption>brower, global namespace</caption>\n * var appLoader = new tui.AppLoader();\n * appLoader.exec(...);\n */\nvar AppLoader = snippet.defineClass(/** @lends AppLoader.prototype */{\n  init: function(options) {\n    var agent = new UAParser().getResult();\n    var os = agent.os;\n\n    this.agent = agent;\n    this.ua = agent.ua;\n    this.osName = os.name;\n    this.osVersion = os.version;\n    this.detector = null;\n\n    options = snippet.extend({\n      usageStatistics: true\n    }, options);\n\n    if (options.usageStatistics) {\n      snippet.sendHostname('app-loader', 'UA-129987462-1');\n    }\n  },\n\n  /**\n     * Set Detector by OS\n     * @private\n     * @param {object} context The options\n     */\n  _setDetector: function(context) {\n    var osName = this.osName;\n    var isAndroid = (osName === 'Android');\n    var isIOS = (osName === 'iOS');\n\n    if (isAndroid) {\n      this._setAndroidDetector(context);\n    } else if (isIOS && context.iosStoreURL) {\n      this._setIOSDetector();\n    } else {\n      this._setEtcDetector(context);\n    }\n  },\n\n  /**\n     * Set IOS Detector\n     * @private\n     * @param {object} context The information for app\n     */\n  _setIOSDetector: function() {\n    var iosVersion = parseInt(this.osVersion, 10);\n    if (iosVersion > 8) {\n      this.detector = iOSDetector.iOS9AndLater;\n    } else if (iosVersion === 8) {\n      this.detector = iOSDetector.iOS8;\n    } else {\n      this.detector = iOSDetector.iOS7AndBefore;\n    }\n  },\n\n  /**\n     * Set android Detector\n     * @private\n     * @param {object} context The information for app\n     */\n  _setAndroidDetector: function(context) {\n    if (context.intentURI && this.doesBrowserSupportIntent()) {\n      this.detector = Detector.androidIntentDetector;\n    } else {\n      this.detector = Detector.androidSchemeDetector;\n    }\n  },\n\n  /**\n     * Set EtcDetector\n     * @private\n     * @param {object} context The information for app\n     */\n  _setEtcDetector: function(context) {\n    this.detector = EtcDetector;\n\n    setTimeout(function() {\n      if (context.etcCallback) {\n        context.etcCallback();\n      }\n    }, 100);\n  },\n\n  /**\n     * Run selected detector\n     * @private\n     * @param {object} context The information for app\n     */\n  _runDetector: function(context) {\n    if (this.detector && (this.detector !== EtcDetector)) {\n      this.detector.run(context);\n    }\n  },\n\n  /**\n     * Whether the intent is supported\n     * @returns {boolean}\n     * @private\n     */\n  doesBrowserSupportIntent: function() {\n    return !(/firefox|opr/i.test(this.agent.ua));\n  },\n\n  /**\n     * Call app\n     * @param {object} options The option for app\n     * @param {object} options.ios IOS app information\n     * @param {object} options.android Android information\n     * @param {object} options.timerSet A timer time set for callback deley time\n     * @param {Function} options.etcCallback If unsupportable mobile\n     * @param {Function} options.notFoundCallback It not found\n     *\n     * @example\n     * var loader = new tui.AppLoader();\n     * loader.exec({\n     *      ios: {\n     *          scheme: '<app-scheme>://', // iphone app scheme\n     *          url: 'https://itunes.apple.com/app/<id-app>', // app store url,\n     *          universalLink: 'app:///<universal-link>/'\n     *      },\n     *      android: {\n     *          intentURI: 'intent://<action>#Intent;scheme=<app-scheme>;package=<package-name>;end' // android intent uri\n     *      },\n     *      timerSet: { // optional values\n     *          ios: 2000, // default: 2000\n     *          android: 1000 // default: 800\n     *      },\n     *      notFoundCallback: function() { // if not installed\n     *          alert('not found');\n     *      },\n     *      etcCallback: function() { // if not mobile\n     *          alert('etc');\n     *      }\n     * });\n     */\n  exec: function(options) {\n    var timerSet, context;\n\n    options = snippet.extend(defaultOptions, options);\n    timerSet = options.timerSet;\n    context = {\n      urlScheme: options.ios.scheme,\n      iosStoreURL: options.ios.url,\n      universalLink: options.ios.universalLink,\n      intentURI: options.android.intentURI,\n      useIframe: options.android.useIframe,\n      onErrorIframe: options.android.onErrorIframe,\n      etcCallback: options.etcCallback,\n      notFoundCallback: options.notFoundCallback\n    };\n\n    this._setDetector(context);\n    if (timerSet) {\n      this._setTimerTime(timerSet);\n    }\n    this._runDetector(context);\n  },\n\n  /**\n     * Set timer time set\n     * @param {object} timerSet A set of timer times\n     * @private\n     */\n  _setTimerTime: function(timerSet) {\n    if (!this.detector.TIMEOUT) {\n      this.detector.TIMEOUT = {};\n    }\n    this.detector.TIMEOUT.IOS = timerSet.ios || this.detector.TIMEOUT.IOS;\n    this.detector.TIMEOUT.ANDROID = timerSet.android || this.detector.TIMEOUT.ANDROID;\n  }\n});\n\nmodule.exports = AppLoader;\n\n\n//# sourceURL=webpack://tui.AppLoader/./src/js/appLoader.js?");

/***/ }),

/***/ "./src/js/detectors.js":
/*!*****************************!*\
  !*** ./src/js/detectors.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * @fileoverview Mixin modules\n * @author NHN. FE dev Lab.<dl_javascript@nhn.com>\n */\n\n\n\nvar snippet = __webpack_require__(/*! tui-code-snippet */ \"tui-code-snippet\");\nvar ID_SUPPORT_FRAME = 'tui-support-frame';\n\n/**\n * @namespace Detector\n * @ignore\n */\nvar Detector = {\n  /**\n     * for timer\n     */\n  TIMEOUT: {\n    IOS: 2000,\n    ANDROID: 800,\n    INTERVAL: 100\n  },\n\n  /**\n     * Move page\n     * @param {string} url - URL\n     * @memberof Detector\n     */\n  moveTo: function(url) {\n    top.location.href = url;\n  },\n\n  /**\n     * Call app by iframe\n     * @param {string} url - App url\n     * @returns {HTMLElement} IFrame\n     */\n  runAppWithIframe: function(url) {\n    var iframe = this.createIFrameElement();\n\n    iframe.src = url;\n    document.body.appendChild(iframe);\n\n    return iframe;\n  },\n\n  /**\n     * Create iframe\n     * @returns {HTMLElement} IFrame\n     */\n  createIFrameElement: function() {\n    var iframe = document.createElement('iframe');\n    iframe.id = ID_SUPPORT_FRAME;\n    iframe.frameborder = '0';\n    iframe.width = '0';\n    iframe.height = '0';\n    iframe.style.display = 'none';\n\n    return iframe;\n  },\n\n  /**\n     * Defer call callback\n     * @param {function} callback A callback\n     * @param {number} time A delay time\n     * @returns {number|undefined} Timer id\n     */\n  deferCallback: function(callback, time) {/* eslint-disable consistent-return */\n    var clickedAt = new Date().getTime();\n    var self = this;\n\n    if (!snippet.isFunction(callback)) {\n      return;\n    }\n\n    return setTimeout(function() {\n      var now = new Date().getTime();\n      if (self.isPageVisible() && now - clickedAt < time + self.TIMEOUT.INTERVAL) {\n        callback();\n      }\n    }, time); /* eslint-enable consistent-return */\n  },\n\n  /**\n     * check a webpage is visible or in focus\n     * @returns {boolean} Page visibility\n     */\n  isPageVisible: function() {\n    if (snippet.isExisty(document.hidden)) {\n      return !document.hidden;\n    }\n    if (snippet.isExisty(document.webkitHidden)) {\n      return !document.webkitHidden;\n    }\n\n    return true;\n  }\n};\n\n/****************\n * Android series\n ****************/\n\n/**\n * Android intent less\n * @namespace Detector.androidSchemeDetector\n * @ignore\n */\nDetector.androidSchemeDetector = snippet.extend({\n  /**\n     * detector type\n     * @memberof Detector.androidSchemeDetector\n     */\n  type: 'scheme',\n\n  /**\n     * Run detector\n     * @deprecated\n     * @param {object} context - Data for running\n     * @memberof Detector.androidSchemeDetector\n     */\n  run: function(context) {\n    var notFoundCallback = context.notFoundCallback;\n\n    if (notFoundCallback) {\n      this.deferCallback(notFoundCallback, this.TIMEOUT.ANDROID);\n    }\n    this.runAppWithIframe(context.urlScheme);\n  }\n}, Detector);\n\n/**\n * Android intent\n * @namespace Detector.androidIntentDetector\n * @ignore\n */\nDetector.androidIntentDetector = snippet.extend({\n  /**\n     * detector type\n     * @memberof Detector.androidIntentDetector\n     */\n  type: 'intent',\n\n  // Force iframe\n  launchViaIframe: function(intentURI, notFoundCallback, onErrorIframe) {\n    var iframe = this.runAppWithIframe(intentURI), // Launch app via iframe\n      timeoutId = this.deferCallback(notFoundCallback, this.TIMEOUT.ANDROID);\n\n    setTimeout(function() {\n      try {\n        // Whether broswer supports intentURI with iframe and without error.\n        if (iframe && iframe.contentDocument.body) {\n          document.body.removeChild(iframe);\n        }\n      } catch (e) {\n        // If browser caught an error(accessing to error page in iframe),\n        //  this component cannot judge the app is installed or not.\n        document.body.removeChild(iframe);\n        clearTimeout(timeoutId);\n        if (snippet.isFunction(onErrorIframe)) {\n          onErrorIframe();\n        }\n      }\n    }, 100);\n  },\n\n  /**\n     * Run detector\n     * @param {object} context - Data for running\n     * @memberof Detector.androidIntentDetector\n     * @ignore\n     */\n  run: function(context) {\n    var notFoundCallback = context.notFoundCallback,\n      intentURI = context.intentURI;\n\n    if (context.useIframe) {\n      this.launchViaIframe(intentURI, notFoundCallback, context.onErrorIframe);\n    } else {\n      this.moveTo(intentURI);\n      this.deferCallback(notFoundCallback, this.TIMEOUT.ANDROID);\n    }\n  }\n}, Detector);\n\nmodule.exports = Detector;\n\n\n//# sourceURL=webpack://tui.AppLoader/./src/js/detectors.js?");

/***/ }),

/***/ "./src/js/etcDetectors.js":
/*!********************************!*\
  !*** ./src/js/etcDetectors.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * @fileoverview EtcDetector for unsupported env.\n * @author NHN. FE dev Lab.<dl_javascript@nhn.com>\n */\n\n\n\n/**\n * @namespace EtcDetector\n * @ignore\n */\nvar EtcDetector = {\n  /**\n     * @memberof EtcDetector\n     */\n  type: 'etc',\n  /**\n     * @memberof EtcDetector\n     */\n  run: function() {\n  }\n};\nmodule.exports = EtcDetector;\n\n\n//# sourceURL=webpack://tui.AppLoader/./src/js/etcDetectors.js?");

/***/ }),

/***/ "./src/js/iosDetectors.js":
/*!********************************!*\
  !*** ./src/js/iosDetectors.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * @fileoverview iOS Mixin modules\n * @dependency code-snippet.js, appLoader.js\n * @author NHN. FE dev Lab.<dl_javascript@nhn.com>\n */\n\n\n\nvar snippet = __webpack_require__(/*! tui-code-snippet */ \"tui-code-snippet\");\nvar Detector = __webpack_require__(/*! ./detectors */ \"./src/js/detectors.js\");\n\n/**\n * @namespace iOSDetector\n * @ignore\n */\nvar iOSDetector = snippet.extend({\n  /**\n     * visiblitychange event\n     * @memberof iOSDetector\n     */\n  bindVisibilityChangeEvent: function() {\n    var self = this;\n    document.addEventListener('visibilitychange', function clear() {\n      if (self.isPageVisible()) {\n        clearTimeout(self.tid);\n        document.removeEventListener('visibilitychange', clear);\n      }\n    });\n  },\n\n  /**\n     *  pagehide event\n     *  @memberof iOSDetector\n     */\n  bindPagehideEvent: function() {\n    var self = this;\n    window.addEventListener('pagehide', function clear() {\n      if (self.isPageVisible()) {\n        clearTimeout(self.tid);\n        window.removeEventListener('pagehide', clear);\n      }\n    });\n  }\n}, Detector);\n\n/**\n * open an app on iOS7 and Before\n * @namespace iOSDetector.iOS7AndBefore\n * @ignore\n */\niOSDetector.iOS7AndBefore = snippet.extend({\n  /**\n     * detector Run\n     * @param {object} context Data for app loading\n     * @memberof iOSDetector.iOS7AndBefore\n     */\n  run: function(context) {\n    var storeURL = context.iosStoreURL,\n      callback = context.notFoundCallback || snippet.bind(this.moveTo, this, storeURL);\n\n    this.tid = this.deferCallback(callback, this.TIMEOUT.IOS);\n    this.bindPagehideEvent();\n    this.runAppWithIframe(context.urlScheme);\n  }\n}, iOSDetector);\n\n/**\n * ios recent detector\n * @namespace iOSDetector.iOS8\n * @ignore\n */\niOSDetector.iOS8 = snippet.extend({\n  /**\n     * detector run\n     * @param {object} context Data for app loading\n     * @memberof iOSDetector.iOS8AndHigher\n     */\n  run: function(context) {\n    var storeURL = context.iosStoreURL,\n      notFoundCallback = context.notFoundCallback,\n      callback = notFoundCallback || snippet.bind(this.moveTo, this, storeURL);\n\n    this.tid = this.deferCallback(callback, this.TIMEOUT.IOS);\n    this.bindVisibilityChangeEvent();\n    this.runAppWithIframe(context.urlScheme);\n  }\n}, iOSDetector);\n\n/**\n * ios recent but safari prevent to call application via iframe src.\n * @ignore\n */\niOSDetector.iOS9AndLater = snippet.extend({\n  /**\n     * detector run\n     * @param {object} context Data for app loading\n     * @memberof iOSDetector.iOS9AndLater\n     */\n  run: function(context) {\n    var storeURL = context.iosStoreURL,\n      notFoundCallback = context.notFoundCallback,\n      callback = notFoundCallback || snippet.bind(this.moveTo, this, storeURL);\n\n    if (context.universalLink) {\n      this.moveTo(context.universalLink);\n    } else {\n      this.tid = this.deferCallback(callback, this.TIMEOUT.IOS);\n      this.bindVisibilityChangeEvent();\n      this.moveTo(context.urlScheme);\n    }\n  }\n}, iOSDetector);\n\nmodule.exports = iOSDetector;\n\n\n//# sourceURL=webpack://tui.AppLoader/./src/js/iosDetectors.js?");

/***/ }),

/***/ "tui-code-snippet":
/*!******************************************************************************************************************************!*\
  !*** external {"commonjs":"tui-code-snippet","commonjs2":"tui-code-snippet","amd":"tui-code-snippet","root":["tui","util"]} ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_tui_code_snippet__;\n\n//# sourceURL=webpack://tui.AppLoader/external_%7B%22commonjs%22:%22tui-code-snippet%22,%22commonjs2%22:%22tui-code-snippet%22,%22amd%22:%22tui-code-snippet%22,%22root%22:%5B%22tui%22,%22util%22%5D%7D?");

/***/ }),

/***/ "ua-parser-js":
/*!**************************************************************************************************************!*\
  !*** external {"commonjs":"ua-parser-js","commonjs2":"ua-parser-js","amd":"ua-parser-js","root":"UAParser"} ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_ua_parser_js__;\n\n//# sourceURL=webpack://tui.AppLoader/external_%7B%22commonjs%22:%22ua-parser-js%22,%22commonjs2%22:%22ua-parser-js%22,%22amd%22:%22ua-parser-js%22,%22root%22:%22UAParser%22%7D?");

/***/ })

/******/ });
});