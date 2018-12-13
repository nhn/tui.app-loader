/*!
 * tui-app-loader.js
 * @version 2.1.1
 * @author NHNEnt FE Development Lab <dl_javascript@nhnent.com>
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
		root["tui"] = root["tui"] || {}, root["tui"]["AppLoader"] = factory((root["tui"] && root["tui"]["util"]), root["UAParser"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * @fileoverview Load native app or move to install page
	 * @dependency code-snippet.js, detectors.js, agentDetector.js
	 * @author NHN Ent. FE dev Lab <dl_javascript@nhnent.com>
	 */

	'use strict';

	var snippet = __webpack_require__(1);
	var UAParser = __webpack_require__(2);
	var Detector = __webpack_require__(3);
	var iOSDetector = __webpack_require__(4);
	var EtcDetector = __webpack_require__(5);

	var defaultOptions = {
	    ios: {
	        scheme: '',
	        url: ''
	    },
	    android: {
	        scheme: '',
	        url: ''
	    }
	};

	/**
	 * Mobile App loader
	 * @constructor
	 * @class
	 * @param {object} options - Option object
	 * @param {boolean} [options.usageStatistics=true] - Let us know the hostname. If you don't want to send the hostname, please set to false.
	 * @see AppLoader#exec
	 * @example <caption>node, commonjs</caption>
	 * var Apploader = require('tui-app-loader');
	 * var appLoader = new AppLoader();
	 * appLoader.exec(...);
	 * @example <caption>brower, global namespace</caption>
	 * var appLoader = new tui.AppLoader();
	 * appLoader.exec(...);
	 */
	var AppLoader = snippet.defineClass(/** @lends AppLoader.prototype */{
	    init: function(options) {
	        var agent = new UAParser().getResult();
	        var os = agent.os;

	        this.agent = agent;
	        this.ua = agent.ua;
	        this.osName = os.name;
	        this.osVersion = os.version;
	        this.detector = null;

	        options = snippet.extend({
	            usageStatistics: true
	        }, options);

	        if (options.usageStatistics) {
	            snippet.sendHostname('app-loader', 'UA-129987462-1');
	        }
	    },

	    /**
	     * Set Detector by OS
	     * @private
	     * @param {object} context The options
	     */
	    _setDetector: function(context) {
	        var osName = this.osName;
	        var isAndroid = (osName === 'Android');
	        var isIOS = (osName === 'iOS');

	        if (isAndroid) {
	            this._setAndroidDetector(context);
	        } else if (isIOS && context.iosStoreURL) {
	            this._setIOSDetector();
	        } else {
	            this._setEtcDetector(context);
	        }
	    },

	    /**
	     * Set IOS Detector
	     * @private
	     * @param {object} context The information for app
	     */
	    _setIOSDetector: function() {
	        var iosVersion = parseInt(this.osVersion, 10);
	        if (iosVersion > 8) {
	            this.detector = iOSDetector.iOS9AndLater;
	        } else if (iosVersion === 8) {
	            this.detector = iOSDetector.iOS8;
	        } else {
	            this.detector = iOSDetector.iOS7AndBefore;
	        }
	    },

	    /**
	     * Set android Detector
	     * @private
	     * @param {object} context The information for app
	     */
	    _setAndroidDetector: function(context) {
	        if (context.intentURI && this.doesBrowserSupportIntent()) {
	            this.detector = Detector.androidIntentDetector;
	        } else {
	            this.detector = Detector.androidSchemeDetector;
	        }
	    },

	    /**
	     * Set EtcDetector
	     * @private
	     * @param {object} context The information for app
	     */
	    _setEtcDetector: function(context) {
	        this.detector = EtcDetector;

	        setTimeout(function() {
	            if (context.etcCallback) {
	                context.etcCallback();
	            }
	        }, 100);
	    },

	    /**
	     * Run selected detector
	     * @private
	     * @param {object} context The information for app
	     */
	    _runDetector: function(context) {
	        if (this.detector && (this.detector !== EtcDetector)) {
	            this.detector.run(context);
	        }
	    },

	    /**
	     * Whether the intent is supported
	     * @returns {boolean}
	     * @private
	     */
	    doesBrowserSupportIntent: function() {
	        return !(/firefox|opr/i.test(this.agent.ua));
	    },

	    /**
	     * Call app
	     * @param {object} options The option for app
	     * @param {object} options.ios IOS app information
	     * @param {object} options.android Android information
	     * @param {object} options.timerSet A timer time set for callback deley time
	     * @param {Function} options.etcCallback If unsupportable mobile
	     * @param {Function} options.notFoundCallback It not found
	     *
	     * @example
	     * var loader = new tui.AppLoader();
	     * loader.exec({
	     *      ios: {
	     *          scheme: '<app-scheme>://', // iphone app scheme
	     *          url: 'https://itunes.apple.com/app/<id-app>', // app store url,
	     *          universalLink: 'app:///<universal-link>/'
	     *      },
	     *      android: {
	     *          intentURI: 'intent://<action>#Intent;scheme=<app-scheme>;package=<package-name>;end' // android intent uri
	     *      },
	     *      timerSet: { // optional values
	     *          ios: 2000, // default: 2000
	     *          android: 1000 // default: 800
	     *      },
	     *      notFoundCallback: function() { // if not installed
	     *          alert('not found');
	     *      },
	     *      etcCallback: function() { // if not mobile
	     *          alert('etc');
	     *      }
	     * });
	     */
	    exec: function(options) {
	        var timerSet, context;

	        options = snippet.extend(defaultOptions, options);
	        timerSet = options.timerSet;
	        context = {
	            urlScheme: options.ios.scheme,
	            iosStoreURL: options.ios.url,
	            universalLink: options.ios.universalLink,
	            intentURI: options.android.intentURI,
	            useIframe: options.android.useIframe,
	            onErrorIframe: options.android.onErrorIframe,
	            etcCallback: options.etcCallback,
	            notFoundCallback: options.notFoundCallback
	        };

	        this._setDetector(context);
	        if (timerSet) {
	            this._setTimerTime(timerSet);
	        }
	        this._runDetector(context);
	    },

	    /**
	     * Set timer time set
	     * @param {object} timerSet A set of timer times
	     * @private
	     */
	    _setTimerTime: function(timerSet) {
	        if (!this.detector.TIMEOUT) {
	            this.detector.TIMEOUT = {};
	        }
	        this.detector.TIMEOUT.IOS = timerSet.ios || this.detector.TIMEOUT.IOS;
	        this.detector.TIMEOUT.ANDROID = timerSet.android || this.detector.TIMEOUT.ANDROID;
	    }
	});

	module.exports = AppLoader;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * @fileoverview Mixin modules
	 * @author NHN Ent. FE dev Lab.<dl_javascript@nhnent.com>
	 */

	'use strict';

	var snippet = __webpack_require__(1);
	var ID_SUPPORT_FRAME = 'tui-support-frame';

	/**
	 * @namespace Detector
	 * @ignore
	 */
	var Detector = {
	    /**
	     * for timer
	     */
	    TIMEOUT: {
	        IOS: 2000,
	        ANDROID: 800,
	        INTERVAL: 100
	    },

	    /**
	     * Move page
	     * @param {string} url - URL
	     * @memberof Detector
	     */
	    moveTo: function(url) {
	        top.location.href = url;
	    },

	    /**
	     * Call app by iframe
	     * @param {string} url - App url
	     * @returns {HTMLElement} IFrame
	     */
	    runAppWithIframe: function(url) {
	        var iframe = this.createIFrameElement();

	        iframe.src = url;
	        document.body.appendChild(iframe);

	        return iframe;
	    },

	    /**
	     * Create iframe
	     * @returns {HTMLElement} IFrame
	     */
	    createIFrameElement: function() {
	        var iframe = document.createElement('iframe');
	        iframe.id = ID_SUPPORT_FRAME;
	        iframe.frameborder = '0';
	        iframe.width = '0';
	        iframe.height = '0';
	        iframe.style.display = 'none';

	        return iframe;
	    },

	    /**
	     * Defer call callback
	     * @param {function} callback A callback
	     * @param {number} time A delay time
	     * @returns {number|undefined} Timer id
	     */
	    deferCallback: function(callback, time) {/* eslint-disable consistent-return */
	        var clickedAt = new Date().getTime();
	        var self = this;

	        if (!snippet.isFunction(callback)) {
	            return;
	        }

	        return setTimeout(function() {
	            var now = new Date().getTime();
	            if (self.isPageVisible() && now - clickedAt < time + self.TIMEOUT.INTERVAL) {
	                callback();
	            }
	        }, time); /* eslint-enable consistent-return */
	    },

	    /**
	     * check a webpage is visible or in focus
	     * @returns {boolean} Page visibility
	     */
	    isPageVisible: function() {
	        if (snippet.isExisty(document.hidden)) {
	            return !document.hidden;
	        }
	        if (snippet.isExisty(document.webkitHidden)) {
	            return !document.webkitHidden;
	        }

	        return true;
	    }
	};

	/****************
	 * Android series
	 ****************/

	/**
	 * Android intent less
	 * @namespace Detector.androidSchemeDetector
	 * @ignore
	 */
	Detector.androidSchemeDetector = snippet.extend({
	    /**
	     * detector type
	     * @memberof Detector.androidSchemeDetector
	     */
	    type: 'scheme',

	    /**
	     * Run detector
	     * @deprecated
	     * @param {object} context - Data for running
	     * @memberof Detector.androidSchemeDetector
	     */
	    run: function(context) {
	        var notFoundCallback = context.notFoundCallback;

	        if (notFoundCallback) {
	            this.deferCallback(notFoundCallback, this.TIMEOUT.ANDROID);
	        }
	        this.runAppWithIframe(context.urlScheme);
	    }
	}, Detector);

	/**
	 * Android intent
	 * @namespace Detector.androidIntentDetector
	 * @ignore
	 */
	Detector.androidIntentDetector = snippet.extend({
	    /**
	     * detector type
	     * @memberof Detector.androidIntentDetector
	     */
	    type: 'intent',

	    // Force iframe
	    launchViaIframe: function(intentURI, notFoundCallback, onErrorIframe) {
	        var iframe = this.runAppWithIframe(intentURI), // Launch app via iframe
	            timeoutId = this.deferCallback(notFoundCallback, this.TIMEOUT.ANDROID);

	        setTimeout(function() {
	            try {
	                // Whether broswer supports intentURI with iframe and without error.
	                if (iframe && iframe.contentDocument.body) {
	                    document.body.removeChild(iframe);
	                }
	            } catch (e) {
	                // If browser caught an error(accessing to error page in iframe),
	                //  this component cannot judge the app is installed or not.
	                document.body.removeChild(iframe);
	                clearTimeout(timeoutId);
	                if (snippet.isFunction(onErrorIframe)) {
	                    onErrorIframe();
	                }
	            }
	        }, 100);
	    },

	    /**
	     * Run detector
	     * @param {object} context - Data for running
	     * @memberof Detector.androidIntentDetector
	     * @ignore
	     */
	    run: function(context) {
	        var notFoundCallback = context.notFoundCallback,
	            intentURI = context.intentURI;

	        if (context.useIframe) {
	            this.launchViaIframe(intentURI, notFoundCallback, context.onErrorIframe);
	        } else {
	            this.moveTo(intentURI);
	            this.deferCallback(notFoundCallback, this.TIMEOUT.ANDROID);
	        }
	    }
	}, Detector);

	module.exports = Detector;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * @fileoverview iOS Mixin modules
	 * @dependency code-snippet.js, appLoader.js
	 * @author NHN Ent. FE dev Lab.<dl_javascript@nhnent.com>
	 */

	'use strict';

	var snippet = __webpack_require__(1);
	var Detector = __webpack_require__(3);

	/**
	 * @namespace iOSDetector
	 * @ignore
	 */
	var iOSDetector = snippet.extend({
	    /**
	     * visiblitychange event
	     * @memberof iOSDetector
	     */
	    bindVisibilityChangeEvent: function() {
	        var self = this;
	        document.addEventListener('visibilitychange', function clear() {
	            if (self.isPageVisible()) {
	                clearTimeout(self.tid);
	                document.removeEventListener('visibilitychange', clear);
	            }
	        });
	    },

	    /**
	     *  pagehide event
	     *  @memberof iOSDetector
	     */
	    bindPagehideEvent: function() {
	        var self = this;
	        window.addEventListener('pagehide', function clear() {
	            if (self.isPageVisible()) {
	                clearTimeout(self.tid);
	                window.removeEventListener('pagehide', clear);
	            }
	        });
	    }
	}, Detector);

	/**
	 * open an app on iOS7 and Before
	 * @namespace iOSDetector.iOS7AndBefore
	 * @ignore
	 */
	iOSDetector.iOS7AndBefore = snippet.extend({
	    /**
	     * detector Run
	     * @param {object} context Data for app loading
	     * @memberof iOSDetector.iOS7AndBefore
	     */
	    run: function(context) {
	        var storeURL = context.iosStoreURL,
	            callback = context.notFoundCallback || snippet.bind(this.moveTo, this, storeURL);

	        this.tid = this.deferCallback(callback, this.TIMEOUT.IOS);
	        this.bindPagehideEvent();
	        this.runAppWithIframe(context.urlScheme);
	    }
	}, iOSDetector);

	/**
	 * ios recent detector
	 * @namespace iOSDetector.iOS8
	 * @ignore
	 */
	iOSDetector.iOS8 = snippet.extend({
	    /**
	     * detector run
	     * @param {object} context Data for app loading
	     * @memberof iOSDetector.iOS8AndHigher
	     */
	    run: function(context) {
	        var storeURL = context.iosStoreURL,
	            notFoundCallback = context.notFoundCallback,
	            callback = notFoundCallback || snippet.bind(this.moveTo, this, storeURL);

	        this.tid = this.deferCallback(callback, this.TIMEOUT.IOS);
	        this.bindVisibilityChangeEvent();
	        this.runAppWithIframe(context.urlScheme);
	    }
	}, iOSDetector);

	/**
	 * ios recent but safari prevent to call application via iframe src.
	 * @ignore
	 */
	iOSDetector.iOS9AndLater = snippet.extend({
	    /**
	     * detector run
	     * @param {object} context Data for app loading
	     * @memberof iOSDetector.iOS9AndLater
	     */
	    run: function(context) {
	        var storeURL = context.iosStoreURL,
	            notFoundCallback = context.notFoundCallback,
	            callback = notFoundCallback || snippet.bind(this.moveTo, this, storeURL);

	        if (context.universalLink) {
	            this.moveTo(context.universalLink);
	        } else {
	            this.tid = this.deferCallback(callback, this.TIMEOUT.IOS);
	            this.bindVisibilityChangeEvent();
	            this.moveTo(context.urlScheme);
	        }
	    }
	}, iOSDetector);

	module.exports = iOSDetector;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	/**
	 * @fileoverview EtcDetector for unsupported env.
	 * @author NHN Ent. FE dev Lab.<dl_javascript@nhnent.com>
	 */

	'use strict';

	/**
	 * @namespace EtcDetector
	 * @ignore
	 */
	var EtcDetector = {
	    /**
	     * @memberof EtcDetector
	     */
	    type: 'etc',
	    /**
	     * @memberof EtcDetector
	     */
	    run: function() {
	    }
	};
	module.exports = EtcDetector;


/***/ })
/******/ ])
});
;