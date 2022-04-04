/*!
 * TOAST UI App Loader
 * @version 2.1.6
 * @author NHN Cloud. FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ua-parser-js"));
	else if(typeof define === 'function' && define.amd)
		define(["ua-parser-js"], factory);
	else if(typeof exports === 'object')
		exports["AppLoader"] = factory(require("ua-parser-js"));
	else
		root["tui"] = root["tui"] || {}, root["tui"]["AppLoader"] = factory(root["UAParser"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__11__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Extend the target object from other objects.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * @module object
 */

/**
 * Extend the target object from other objects.
 * @param {object} target - Object that will be extended
 * @param {...object} objects - Objects as sources
 * @returns {object} Extended object
 * @memberof module:object
 */
function extend(target, objects) { // eslint-disable-line no-unused-vars
  var hasOwnProp = Object.prototype.hasOwnProperty;
  var source, prop, i, len;

  for (i = 1, len = arguments.length; i < len; i += 1) {
    source = arguments[i];
    for (prop in source) {
      if (hasOwnProp.call(source, prop)) {
        target[prop] = source[prop];
      }
    }
  }

  return target;
}

module.exports = extend;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Check whether the given variable is undefined or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * Check whether the given variable is undefined or not.
 * If the given variable is undefined, returns true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is undefined?
 * @memberof module:type
 */
function isUndefined(obj) {
  return obj === undefined; // eslint-disable-line no-undefined
}

module.exports = isUndefined;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Mixin modules
 */



var extend = __webpack_require__(0);
var isExisty = __webpack_require__(12);
var isFunction = __webpack_require__(14);
var bind = __webpack_require__(3).bind;

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
  deferCallback: function(callback, time) {
    var clickedAt = new Date().getTime();
    var timer;

    if (isFunction(callback)) {
      timer = setTimeout(
        bind(function() {
          var now = new Date().getTime();
          if (this.isPageVisible() && now - clickedAt < time + this.TIMEOUT.INTERVAL) {
            callback();
          }
        }, this),
        time
      );
    }

    return timer;
  },

  /**
   * check a webpage is visible or in focus
   * @returns {boolean} Page visibility
   */
  isPageVisible: function() {
    if (isExisty(document.hidden)) {
      return !document.hidden;
    }
    if (isExisty(document.webkitHidden)) {
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
Detector.androidSchemeDetector = extend(
  {
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
  },
  Detector
);

/**
 * Android intent
 * @namespace Detector.androidIntentDetector
 * @ignore
 */
Detector.androidIntentDetector = extend(
  {
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
          if (isFunction(onErrorIframe)) {
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
  },
  Detector
);

module.exports = Detector;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Utility
 */



var utils = {
  /**
   * Create a new function that, when called, has its this keyword set to the provided value.
   * @param {function} fn A original function before binding
   * @param {*} obj context of function in arguments[0]
   * @returns {function} A new bound function with context that is in arguments[1]
   */
  bind: function(fn, obj) {
    var slice = Array.prototype.slice;
    var args;

    if (fn.bind) {
      return fn.bind.apply(fn, slice.call(arguments, 1));
    }

    args = slice.call(arguments, 2);

    return function() {
      return fn.apply(obj, args.length ? args.concat(slice.call(arguments)) : arguments);
    };
  }
};

module.exports = utils;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Load native app or move to install page
 */



var defineClass = __webpack_require__(5);
var extend = __webpack_require__(0);
var sendHostname = __webpack_require__(8);

var UAParser = __webpack_require__(11);
var Detector = __webpack_require__(2);
var iOSDetector = __webpack_require__(15);
var EtcDetector = __webpack_require__(16);

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
 * // ES6
 * import AppLoader from 'tui-app-loader'; // ES6
 *
 * // CommonJS
 * const AppLoader = require('tui-app-loader'); // CommonJS
 *
 * // Browser
 * const appLoader = new tui.AppLoader();
 *
 * const appLoader = new AppLoader();
 * appLoader.exec(...);
 */
var AppLoader = defineClass(
  /** @lends AppLoader.prototype */ {
    init: function(options) {
      var agent = new UAParser().getResult();
      var os = agent.os;

      this.agent = agent;
      this.ua = agent.ua;
      this.osName = os.name;
      this.osVersion = os.version;
      this.detector = null;

      options = extend(
        {
          usageStatistics: true
        },
        options
      );

      if (options.usageStatistics) {
        sendHostname('app-loader', 'UA-129987462-1');
      }
    },

    /**
     * Set Detector by OS
     * @private
     * @param {object} context The options
     */
    _setDetector: function(context) {
      var osName = this.osName;
      var isAndroid = osName === 'Android';
      var isIOS = osName === 'iOS';

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
      if (this.detector && this.detector !== EtcDetector) {
        this.detector.run(context);
      }
    },

    /**
     * Whether the intent is supported
     * @returns {boolean}
     * @private
     */
    doesBrowserSupportIntent: function() {
      return !/firefox|opr/i.test(this.ua);
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
     * const loader = new AppLoader();
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

      options = extend(defaultOptions, options);
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
  }
);

module.exports = AppLoader;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview
 * This module provides a function to make a constructor
 * that can inherit from the other constructors like the CLASS easily.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var inherit = __webpack_require__(6);
var extend = __webpack_require__(0);

/**
 * @module defineClass
 */

/**
 * Help a constructor to be defined and to inherit from the other constructors
 * @param {*} [parent] Parent constructor
 * @param {Object} props Members of constructor
 *  @param {Function} props.init Initialization method
 *  @param {Object} [props.static] Static members of constructor
 * @returns {*} Constructor
 * @memberof module:defineClass
 * @example
 * var defineClass = require('tui-code-snippet/defineClass/defineClass'); // node, commonjs
 *
 * //-- #2. Use property --//
 * var Parent = defineClass({
 *     init: function() { // constuructor
 *         this.name = 'made by def';
 *     },
 *     method: function() {
 *         // ...
 *     },
 *     static: {
 *         staticMethod: function() {
 *              // ...
 *         }
 *     }
 * });
 *
 * var Child = defineClass(Parent, {
 *     childMethod: function() {}
 * });
 *
 * Parent.staticMethod();
 *
 * var parentInstance = new Parent();
 * console.log(parentInstance.name); //made by def
 * parentInstance.staticMethod(); // Error
 *
 * var childInstance = new Child();
 * childInstance.method();
 * childInstance.childMethod();
 */
function defineClass(parent, props) {
  var obj;

  if (!props) {
    props = parent;
    parent = null;
  }

  obj = props.init || function() {};

  if (parent) {
    inherit(obj, parent);
  }

  if (props.hasOwnProperty('static')) {
    extend(obj, props['static']);
    delete props['static'];
  }

  extend(obj.prototype, props);

  return obj;
}

module.exports = defineClass;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Provide a simple inheritance in prototype-oriented.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var createObject = __webpack_require__(7);

/**
 * Provide a simple inheritance in prototype-oriented.
 * Caution :
 *  Don't overwrite the prototype of child constructor.
 *
 * @param {function} subType Child constructor
 * @param {function} superType Parent constructor
 * @memberof module:inheritance
 * @example
 * var inherit = require('tui-code-snippet/inheritance/inherit'); // node, commonjs
 *
 * // Parent constructor
 * function Animal(leg) {
 *     this.leg = leg;
 * }
 * Animal.prototype.growl = function() {
 *     // ...
 * };
 *
 * // Child constructor
 * function Person(name) {
 *     this.name = name;
 * }
 *
 * // Inheritance
 * inherit(Person, Animal);
 *
 * // After this inheritance, please use only the extending of property.
 * // Do not overwrite prototype.
 * Person.prototype.walk = function(direction) {
 *     // ...
 * };
 */
function inherit(subType, superType) {
  var prototype = createObject(superType.prototype);
  prototype.constructor = subType;
  subType.prototype = prototype;
}

module.exports = inherit;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Create a new object with the specified prototype object and properties.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * @module inheritance
 */

/**
 * Create a new object with the specified prototype object and properties.
 * @param {Object} obj This object will be a prototype of the newly-created object.
 * @returns {Object}
 * @memberof module:inheritance
 */
function createObject(obj) {
  function F() {} // eslint-disable-line require-jsdoc
  F.prototype = obj;

  return new F();
}

module.exports = createObject;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Send hostname on DOMContentLoaded.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var isUndefined = __webpack_require__(1);
var imagePing = __webpack_require__(9);

var ms7days = 7 * 24 * 60 * 60 * 1000;

/**
 * Check if the date has passed 7 days
 * @param {number} date - milliseconds
 * @returns {boolean}
 * @private
 */
function isExpired(date) {
  var now = new Date().getTime();

  return now - date > ms7days;
}

/**
 * Send hostname on DOMContentLoaded.
 * To prevent hostname set tui.usageStatistics to false.
 * @param {string} appName - application name
 * @param {string} trackingId - GA tracking ID
 * @ignore
 */
function sendHostname(appName, trackingId) {
  var url = 'https://www.google-analytics.com/collect';
  var hostname = location.hostname;
  var hitType = 'event';
  var eventCategory = 'use';
  var applicationKeyForStorage = 'TOAST UI ' + appName + ' for ' + hostname + ': Statistics';
  var date = window.localStorage.getItem(applicationKeyForStorage);

  // skip if the flag is defined and is set to false explicitly
  if (!isUndefined(window.tui) && window.tui.usageStatistics === false) {
    return;
  }

  // skip if not pass seven days old
  if (date && !isExpired(date)) {
    return;
  }

  window.localStorage.setItem(applicationKeyForStorage, new Date().getTime());

  setTimeout(function() {
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
      imagePing(url, {
        v: 1,
        t: hitType,
        tid: trackingId,
        cid: hostname,
        dp: hostname,
        dh: appName,
        el: appName,
        ec: eventCategory
      });
    }
  }, 1000);
}

module.exports = sendHostname;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Request image ping.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var forEachOwnProperties = __webpack_require__(10);

/**
 * @module request
 */

/**
 * Request image ping.
 * @param {String} url url for ping request
 * @param {Object} trackingInfo infos for make query string
 * @returns {HTMLElement}
 * @memberof module:request
 * @example
 * var imagePing = require('tui-code-snippet/request/imagePing'); // node, commonjs
 *
 * imagePing('https://www.google-analytics.com/collect', {
 *     v: 1,
 *     t: 'event',
 *     tid: 'trackingid',
 *     cid: 'cid',
 *     dp: 'dp',
 *     dh: 'dh'
 * });
 */
function imagePing(url, trackingInfo) {
  var trackingElement = document.createElement('img');
  var queryString = '';
  forEachOwnProperties(trackingInfo, function(value, key) {
    queryString += '&' + key + '=' + value;
  });
  queryString = queryString.substring(1);

  trackingElement.src = url + '?' + queryString;

  trackingElement.style.display = 'none';
  document.body.appendChild(trackingElement);
  document.body.removeChild(trackingElement);

  return trackingElement;
}

module.exports = imagePing;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Execute the provided callback once for each property of object which actually exist.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * Execute the provided callback once for each property of object which actually exist.
 * If the callback function returns false, the loop will be stopped.
 * Callback function(iteratee) is invoked with three arguments:
 *  1) The value of the property
 *  2) The name of the property
 *  3) The object being traversed
 * @param {Object} obj The object that will be traversed
 * @param {function} iteratee  Callback function
 * @param {Object} [context] Context(this) of callback function
 * @memberof module:collection
 * @example
 * var forEachOwnProperties = require('tui-code-snippet/collection/forEachOwnProperties'); // node, commonjs
 *
 * var sum = 0;
 *
 * forEachOwnProperties({a:1,b:2,c:3}, function(value){
 *     sum += value;
 * });
 * alert(sum); // 6
 */
function forEachOwnProperties(obj, iteratee, context) {
  var key;

  context = context || null;

  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (iteratee.call(context, obj[key], key, obj) === false) {
        break;
      }
    }
  }
}

module.exports = forEachOwnProperties;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__11__;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Check whether the given variable is existing or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var isUndefined = __webpack_require__(1);
var isNull = __webpack_require__(13);

/**
 * Check whether the given variable is existing or not.
 * If the given variable is not null and not undefined, returns true.
 * @param {*} param - Target for checking
 * @returns {boolean} Is existy?
 * @memberof module:type
 * @example
 * var isExisty = require('tui-code-snippet/type/isExisty'); // node, commonjs
 *
 * isExisty(''); //true
 * isExisty(0); //true
 * isExisty([]); //true
 * isExisty({}); //true
 * isExisty(null); //false
 * isExisty(undefined); //false
*/
function isExisty(param) {
  return !isUndefined(param) && !isNull(param);
}

module.exports = isExisty;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Check whether the given variable is null or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * Check whether the given variable is null or not.
 * If the given variable(arguments[0]) is null, returns true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is null?
 * @memberof module:type
 */
function isNull(obj) {
  return obj === null;
}

module.exports = isNull;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Check whether the given variable is a function or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * Check whether the given variable is a function or not.
 * If the given variable is a function, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is function?
 * @memberof module:type
 */
function isFunction(obj) {
  return obj instanceof Function;
}

module.exports = isFunction;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview iOS Mixin modules
 */



var extend = __webpack_require__(0);
var bind = __webpack_require__(3).bind;

var Detector = __webpack_require__(2);

/**
 * @namespace iOSDetector
 * @ignore
 */
var iOSDetector = extend(
  {
    /**
     * visiblitychange event
     * @memberof iOSDetector
     */
    bindVisibilityChangeEvent: function() {
      document.addEventListener(
        'visibilitychange',
        bind(function clear() {
          if (this.isPageVisible()) {
            clearTimeout(this.tid);
            document.removeEventListener('visibilitychange', clear);
          }
        }, this)
      );
    },

    /**
     *  pagehide event
     *  @memberof iOSDetector
     */
    bindPagehideEvent: function() {
      window.addEventListener(
        'pagehide',
        bind(function clear() {
          if (this.isPageVisible()) {
            clearTimeout(this.tid);
            window.removeEventListener('pagehide', clear);
          }
        }, this)
      );
    }
  },
  Detector
);

/**
 * open an app on iOS7 and Before
 * @namespace iOSDetector.iOS7AndBefore
 * @ignore
 */
iOSDetector.iOS7AndBefore = extend(
  {
    /**
     * detector Run
     * @param {object} context Data for app loading
     * @memberof iOSDetector.iOS7AndBefore
     */
    run: function(context) {
      var storeURL = context.iosStoreURL,
        callback = context.notFoundCallback || bind(this.moveTo, this, storeURL);

      this.tid = this.deferCallback(callback, this.TIMEOUT.IOS);
      this.bindPagehideEvent();
      this.runAppWithIframe(context.urlScheme);
    }
  },
  iOSDetector
);

/**
 * ios recent detector
 * @namespace iOSDetector.iOS8
 * @ignore
 */
iOSDetector.iOS8 = extend(
  {
    /**
     * detector run
     * @param {object} context Data for app loading
     * @memberof iOSDetector.iOS8AndHigher
     */
    run: function(context) {
      var storeURL = context.iosStoreURL,
        notFoundCallback = context.notFoundCallback,
        callback = notFoundCallback || bind(this.moveTo, this, storeURL);

      this.tid = this.deferCallback(callback, this.TIMEOUT.IOS);
      this.bindVisibilityChangeEvent();
      this.runAppWithIframe(context.urlScheme);
    }
  },
  iOSDetector
);

/**
 * ios recent but safari prevent to call application via iframe src.
 * @ignore
 */
iOSDetector.iOS9AndLater = extend(
  {
    /**
     * detector run
     * @param {object} context Data for app loading
     * @memberof iOSDetector.iOS9AndLater
     */
    run: function(context) {
      var storeURL = context.iosStoreURL,
        notFoundCallback = context.notFoundCallback,
        callback = notFoundCallback || bind(this.moveTo, this, storeURL);

      if (context.universalLink) {
        this.moveTo(context.universalLink);
      } else {
        this.tid = this.deferCallback(callback, this.TIMEOUT.IOS);
        this.bindVisibilityChangeEvent();
        this.moveTo(context.urlScheme);
      }
    }
  },
  iOSDetector
);

module.exports = iOSDetector;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview EtcDetector for unsupported env.
 */



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
  run: function() {}
};
module.exports = EtcDetector;


/***/ })
/******/ ]);
});