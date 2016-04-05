/**
 * @fileoverview iOS Mixin modules
 * @dependency code-snippet.js, appLoader.js
 * @author NHN Ent. FE dev team.<dl_javascript@nhnent.com>
 */
 'use strict';
var Detector = require('./detectors');

/**
 * @namespace iOSDetector
 */
var iOSDetector = tui.util.extend({
    /**
     * detector type
     * @memberof iOSDetector
     */
    type: 'ios',

    /**
     * visiblitychange event
     * @memberof iOSDetector
     */
    bindVisibilityChangeEvent: function() {
        var self = this;
        document.addEventListener('visibilitychange', function clear() {
            if (self.isPageVisibility()) {
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
            if (self.isPageVisibility()) {
                clearTimeout(self.tid);
                window.removeEventListener('pagehide', clear);
            }
        });
    }
}, Detector);

/**
 * ios old detector
 * @namespace iOSDetector.iosOlderDetector
 */
iOSDetector.iosOlderDetector = tui.util.extend({
    /**
     * detector Run
     * @param {object} context Data for app loading
     * @memberof iOSDetector.iosOlderDetector
     */
    run: function(context) {
        var storeURL = context.iosStoreURL,
            callback = context.notFoundCallback || tui.util.bind(this.moveTo, this, storeURL);

        this.tid = this.deferCallback(callback, this.TIMEOUT.IOS);
        this.bindPagehideEvent();
        this.runAppWithIframe(context.urlScheme);
    }
}, iOSDetector);

/**
 * ios recent detector
 * @namespace iOSDetector.iosRecentDetector
 */
iOSDetector.iosRecentDetector = tui.util.extend({
    /**
     * detector run
     * @param {object} context Data for app loading
     * @memberof iOSDetector.iosRecentDetector
     */
    run: function(context) {
        var storeURL = context.iosStoreURL,
            notFoundCallback = context.notFoundCallback,
            callback = notFoundCallback || tui.util.bind(this.moveTo, this, storeURL);

        this.tid = this.deferCallback(callback, this.TIMEOUT.IOS);
        this.bindVisibilityChangeEvent();
        this.runAppWithIframe(context.urlScheme);
    }
}, iOSDetector);

/**
 * ios recent but safari prevent to call application via iframe src.
 */
iOSDetector.iosFixDetector = tui.util.extend({
    /**
     * detector run
     * @param {object} context Data for app loading
     * @memberof iOSDetector.iosFixDetector
     */
    run: function(context) {
        var storeURL = context.iosStoreURL,
            notFoundCallback = context.notFoundCallback,
            callback = notFoundCallback || tui.util.bind(this.moveTo, this, storeURL);

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
