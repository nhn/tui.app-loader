/**
 * @fileoverview Mixin modules
 * @author NHN. FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

var extend = require('tui-code-snippet/object/extend');
var isExisty = require('tui-code-snippet/type/isExisty');
var isFunction = require('tui-code-snippet/type/isFunction');

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

    if (!isFunction(callback)) {
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
Detector.androidSchemeDetector = extend({
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
Detector.androidIntentDetector = extend({
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
}, Detector);

module.exports = Detector;
