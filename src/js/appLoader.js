/**
 * @fileoverview Load native app or move to install page
 * @dependency code-snippet.js, detectors.js, agentDetector.js
 * @author NHN Ent. FE dev team.<dl_javascript@nhnent.com>
 */

var AgentDetector = require('./agentDetector');
var Detector = require('./detectors');
var iOSDetector = require('./iosDetectors');
var EtcDetector = require('./etcDetectors');
var ad = new AgentDetector();
/**
 * @constructor
 * @class
 */
var AppLoader = tui.util.defineClass(/** @lends AppLoader.prototype */{

    /****************
     * member fields
     ****************/

    /**
     * browser, device detector
     */
    detector: null,
    /**
     * OS (android/ios/etc)
     */
    os: null,
    /**
     * default options to run exec
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
            scheme: ''
        }
    },

    /*****************
     * static members
     *****************/
    static:{
        /**
         * Get first user agent (it will be browser name)
         * @memberof AppLoader
         * @function getUserAgent
         * @return {string}
         */
        getUserAgent: function() {
            return ad.userAgent();
        },

        /**
         * Get all user agents by array
         * @memberof AppLoader
         * @function getUserAgents
         * @return {Array} agent strings
         */
        getUserAgents: function() {
            return ad.userAgents();
        },

        /**
         * Get OS
         * @memberof AppLoader
         * @function getOS
         * @return {string}
         */
        getOS: function() {
            return ad.getOS();
        },

        /**
         * Get version
         * @memberof AppLoader
         * @function getVersion
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

    /****************
     * member methods
     ****************/

    /**
     * Initialize
     */
    init: function() {
        this.agentDetector = ad;
        this.ua = ad.userAgent();
        this.os = ad.getOS();
        this.version = ad.version(ad.ios ? ad.device : 'Android');
    },

    /**
     * Set os by Detector
     * @private
     * @param {object} context The options
     */
    _setDetector: function(context) {
        var ad = this.agentDetector;

        if (ad.android && this.version >= context.androidVersion) { // Andriod
            this._setAndroidDetector(context);
        } else if (ad.ios && context.storeURL ) { // IOS
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
        } else  {
            if (iosVersion < 8) {
                this.detector = iOSDetector.iosOlderDetector;
            } else {
                this.detector = iOSDetector.iosRecentDetector;
            }
        }
    },

    /**
     * Set android Detector
     * @private
     * @param {object} context The information for app
     */
    _setAndroidDetector: function(context) {
        var isNotIntend = (this.isIntentLess() || tui.util.isExisty(context.useUrlScheme)),
            isIntend = tui.util.isExisty(context.intentURI);
        if (isNotIntend && store) {
            this.detector = Detector.androidSchemeDetector;
        } else if (isIntend) {
            this.detector = Detector.androidIntendDetector;
        }
    },

    /**
     * Set EtcDetector
     * @private
     * @param {object} context The information for app
     */
    _setEtcDetector: function(context) {
        var self = this;
        setTimeout(function () {
            self.detector = EtcDetector;
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
        if(this.detector && (this.detector.type !== EtcDetector.type)) {
            this.detector.run(context);
        }
    },

    /**
     * Whether intent supported
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
     *  @param {string} options.name An application name
     *  @param {object} options.ios IOS app information
     *  @param {object} options.android Android information
     *  @param {object} options.timerSet A timer time set for callback deley time
     *  @param {function} options.etcCallback
     *  @param {function} options.notFoundCallback
     *
     * @example
     * var loader = new tui.component.m.AppLoader();
     * loader.exec({
     *      ios: {
     *          scheme: 'fecheck://', // iphone app scheme
     *          url: 'itms-apps://itunes.apple.com/app/.....', // app store url,
     *          useIOS9: true,
     *          syncIOS9: false,
     *          universalLink: 'app:///links/'
     *      },
     *      android: {
     *          scheme: 'intent://home#Intent;scheme=fecheck;package=com.fecheck;end' // android intent uri
     *      },
     *      timerSet: {
     *          ios: {
     *              long: 3000,
     *              short: 2000
     *          },
     *          android: 1000
     *      },
     *      notFoundCallback: function() {
     *          alert('not found');
     *      },
     *      etcCallback: function() {
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
            storeURL: options.ios.url,
            syncToIOS9: options.ios.syncToIOS9,
            useIOS9: options.ios.useIOS9,
            universalLink: options.ios.universalLink,
            intentURI: options.android.scheme,
            androidVersion: options.android.version,
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
     */
    _setTimerTime: function(timerSet) {
        this.detector.TIMEOUT.IOS_SHORT = timerSet.ios.short || this.detector.TIMEOUT.IOS_SHORT;
        this.detector.TIMEOUT.IOS_LONG = timerSet.ios.long || this.detector.TIMEOUT.IOS_LONG;
        this.detector.TIMEOUT.ANDROID = timerSet.android || this.detector.TIMEOUT.ANDROID;
    }
});

module.exports = AppLoader;

