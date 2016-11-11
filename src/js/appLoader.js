/**
 * @fileoverview Load native app or move to install page
 * @dependency code-snippet.js, detectors.js, agentDetector.js
 * @author NHN Ent. FE dev Lab <dl_javascript@nhnent.com>
 */
'use strict';
var AgentDetector = require('./agentDetector');
var Detector = require('./detectors');
var iOSDetector = require('./iosDetectors');
var EtcDetector = require('./etcDetectors');
var ad = new AgentDetector();
/**
 * It works on mobile!
 * @constructor
 * @class
 * @see AppLoader#exec
 * @tutorial tutorial
 * @tutorial tutorial2
 */
var AppLoader = tui.util.defineClass(/** @lends AppLoader.prototype */{
    init: function() {
        this.agentDetector = ad;
        this.ua = ad.userAgent();
        this.os = ad.getOS();
        this.version = ad.version(ad.ios ? ad.device : 'Android');
    },

    static:{
        /**
         * Get first user agent (it will be browser name)
         * @memberof AppLoader
         * @return {string} user agent
         * @example
         * var AppLoader = tui.component.m.AppLoader;
         * var ua = AppLoader.getUserAgent(); // ex) 'safari'
         */
        getUserAgent: function() {
            return ad.userAgent();
        },

        /**
         * Get all user agents by array
         * @memberof AppLoader
         * @return {Array} agent strings
         * @example
         * var AppLoader = tui.component.m.AppLoader;
         * var uas = AppLoader.getUserAgents(); // ex) ['safari']
         */
        getUserAgents: function() {
            return ad.userAgents();
        },

        /**
         * Get OS
         * @memberof AppLoader
         * @return {string} os
         * @example
         * var AppLoader = tui.component.m.AppLoader;
         * var os = AppLoader.getOS(); //  'iOS' or 'AndroidOS'
         */
        getOS: function() {
            return ad.getOS();
        },

        /**
         * Get version
         * @memberof AppLoader
         * @param {string} type - os type
         * @return {number|string} version
         * @example
         *  getVersion('IOS');
         *  getVersion('Chrome');
         *  getVersion('Android');
         */
        getVersion: function(type) {
            return ad.version(type);
        }
    },

    /**
     * browser, device detector
     * @private
     */
    detector: {},
    /**
     * OS (android/ios/etc)
     * @private
     */
    os: null,
    /**
     * default options to run exec
     * @private
     */
    defaults: {
        name: '',
        ios: {
            scheme: '',
            url: '',
            useIOS9: false,
            syncToIOS9: false
        },
        android: {
            scheme: '',
            url: ''
        }
    },

    /**
     * Set os by Detector
     * @private
     * @param {object} context The options
     */
    _setDetector: function(context) {
        var ad = this.agentDetector;

        if (ad.android) { // Andriod
            this._setAndroidDetector(context);
        } else if (ad.ios && context.iosStoreURL) { // IOS
            this._setIOSDetector(context);
        } else { // ETC
           this._setEtcDetector(context);
        }
    },

    /**
     * Set IOS Detector
     * @private
     * @param {object} context The information for app
     */
    _setIOSDetector: function(context) {
        var iosVersion = parseInt(this.version, 10);
        if (context.useIOS9) {
            if (iosVersion > 8 || context.syncToIOS9) {
                this.detector = iOSDetector.iosFixDetector;
            } else {
                this.detector = (iosVersion === 8) ? iOSDetector.iosRecentDetector : iOSDetector.iosOlderDetector;
            }
        } else  if (iosVersion < 8) {
            this.detector = iOSDetector.iosOlderDetector;
        } else {
            this.detector = iOSDetector.iosRecentDetector;
        }
    },

    /**
     * Set android Detector
     * @private
     * @param {object} context The information for app
     */
    _setAndroidDetector: function(context) {
        var isNotIntent = (this.isIntentLess() || tui.util.isExisty(context.useUrlScheme)),
            isIntent = tui.util.isExisty(context.intentURI);
        if (isNotIntent) {
            this.detector = Detector.androidSchemeDetector;
        } else if (isIntent) {
            this.detector = Detector.androidIntentDetector;
        }
    },

    /**
     * Set EtcDetector
     * @private
     * @param {object} context The information for app
     */
    _setEtcDetector: function(context) {
        this.detector = EtcDetector;

        setTimeout(function () {
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
        if (this.detector && (this.detector.type !== EtcDetector.type)) {
            this.detector.run(context);
        }
    },

    /**
     * Whether the intent is supported
     * @returns {boolean}
     */
    isIntentLess: function() {
        var intentlessBrowsers = [
            'firefox',
            'opr'
        ];
        var blackListRegexp = new RegExp(intentlessBrowsers.join('|'), 'i'),
            app = this.agentDetector;
        return blackListRegexp.test(app.ua);
    },

    /**
     * Get os
     * @returns {string}
     */
    getOS: function() {
        return this.agentDetector.getOS();
    },

    /**
     * Call app
     * @param {object} options The option for app
     *  @param {object} options.ios IOS app information
     *  @param {object} options.android Android information
     *  @param {object} options.timerSet A timer time set for callback deley time
     *  @param {Function} options.etcCallback If unsupportable mobile
     *  @param {Function} options.notFoundCallback It not found
     *
     * @example
     * var loader = new tui.component.m.AppLoader();
     * loader.exec({
     *      ios: {
     *          scheme: 'fecheck://', // iphone app scheme
     *          url: 'itms-apps://itunes.apple.com/app/.....', // app store url,
     *          useIOS9: true,
     *          syncToIOS9: false,
     *          universalLink: 'app:///links/'
     *      },
     *      android: {
     *          intentURI: 'intent://home#Intent;scheme=fecheck;package=com.fecheck;end' // android intent uri
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

        options = tui.util.extend(this.defaults, options);
        timerSet = options.timerSet;
        context = {
            urlScheme: options.ios.scheme,
            iosStoreURL: options.ios.url,
            syncToIOS9: options.ios.syncToIOS9,
            useIOS9: options.ios.useIOS9,
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
