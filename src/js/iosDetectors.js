/**
 * @fileoverview iOS Mixin modules
 */

'use strict';

var extend = require('tui-code-snippet/object/extend');
var bind = require('./util').bind;

var Detector = require('./detectors');

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
