/**
 * @fileoverview Load native app or move to install page
 * @dependency code-snippet.js, detectors.js, agentDetector.js
 * @author NHN. FE dev Lab <dl_javascript@nhn.com>
 */

'use strict';

var snippet = require('tui-code-snippet');
var UAParser = require('ua-parser-js');
var Detector = require('./detectors');
var iOSDetector = require('./iosDetectors');
var EtcDetector = require('./etcDetectors');

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
