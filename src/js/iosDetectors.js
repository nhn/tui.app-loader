/**
 * @fileoverview iOS Mixin modules
 * @dependency code-snippet.js, appLoader.js
 * @author NHN. FE dev Lab.<dl_javascript@nhn.com>
 */

'use strict';

var snippet = require('tui-code-snippet');
var Detector = require('./detectors');

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
