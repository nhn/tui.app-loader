/**
 * @fileoverview Mixin modules
 * @dependency code-snippet.js, appLoader.js
 * @author NHN Ent. FE dev team.<dl_javascript@nhnent.com>
 */
'use strict';
/**
 * @namespace Detector
 */
var Detector = {
    /**
     * for timer
     */
    TIMEOUT: {
        IOS_SHORT: 1000,
        IOS_LONG: 1000 * 2,
        ANDROID: 300,
        INTERVAL: 100
    },

    /**
     * Id for support frame
     */
    SUPPORT_FRAME_ID: 'tui-support-frame',

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
    runAppWithIframe: function (url) {
        var self = this,
            iframe = self.createSupportFrame();

        iframe.src = url;
        document.body.appendChild(iframe);
        return iframe;
    },

    /**
     * Create iframe
     * @returns {HTMLElement} IFrame
     */
    createSupportFrame: function () {
        var iframe = document.createElement('iframe');
        tui.util.extend(iframe, {
            id: this.SUPPORT_FRAME_ID,
            frameborder: '0',
            width: '0',
            height: '0'
        });
        iframe.style.display = 'none';
        return iframe;
    },

    /**
     * Defer call callback
     * @param {function} callback A callback
     * @param {number} time A delay time
     * @returns {number} Timer id
     */
    deferCallback: function (callback, time) {
        var clickedAt = new Date().getTime(),
            now,
            self = this;

        return setTimeout(function () {
            now = new Date().getTime();
            if (self.isPageVisibility() && now - clickedAt < time + self.TIMEOUT.INTERVAL) {
                callback();
            }
        }, time);
    },

    /**
     * check a webpage is visible or in focus
     * @returns {boolean} Page visibility
     */
    isPageVisibility: function () {
        if (tui.util.isExisty(document.hidden)) {
            return !document.hidden;
        }
        if (tui.util.isExisty(document.webkitHidden)) {
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
 */
Detector.androidSchemeDetector = tui.util.extend({
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
        var storeURL = context.androidStoreURL,
            notFoundCallback = context.notFoundCallback;

        if (storeURL || context.notFoundCallback) {
            this.deferCallback(notFoundCallback, this.TIMEOUT.ANDROID);
        }
        this.runAppWithIframe(context.urlScheme);
    }
}, Detector);


/**
 * Android intent
 * @namespace Detector.androidIntentDetector
 */
Detector.androidIntentDetector = tui.util.extend({
    /**
     * detector type
     * @memberof Detector.androidIntentDetector
     */
    type: 'intent',

    launchViaIframe: function(intentURI, notFoundCallback) {
        var iframe = this.runAppWithIframe(intentURI), // Launch app via iframe
            timeoutId = this.deferCallback(notFoundCallback, this.TIMEOUT.ANDROID),
            self = this,
            popup;

        setTimeout(function() {
            try { // Check the broswer supports iframe
                if (iframe && iframe.contentDocument.body) {
                    document.body.removeChild(iframe);
                }
            } catch (e) { // If not, open popup
                document.body.removeChild(iframe);
                clearTimeout(timeoutId);
                popup = window.open(intentURI);
                popup.addEventListener('unload', function() {
                    popup.close();
                    self.deferCallback(notFoundCallback, self.TIMEOUT.ANDROID);
                });
            }
        }, 100);
    },

    /**
     * Run detector
     * @param {object} context - Data for running
     * @memberof Detector.androidIntentDetector
     */
    run: function(context) {
        var notFoundCallback = context.notFoundCallback,
            intentURI = context.intentURI;

        if (context.useIframe) {
            this.launchViaIframe(intentURI, notFoundCallback || function() {});
        } else {
            this.moveTo(intentURI);
        }
    }
}, Detector);
module.exports = Detector;
