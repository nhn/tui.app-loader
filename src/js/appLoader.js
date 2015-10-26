/**
 * @fileoverview Load native app or move to install page
 * @dependency code-snippet.js, detectors.js, agentDetector.js
 * @author NHN Ent. FE dev team.<dl_javascript@nhnent.com>
 */

var AgentDetector = require('./agentDetector');
var Detector = require('./detectors');
var iOSDetector = require('./iosDetectors');
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
            url: ''
        },
        android: {
            scheme: ''
        }
    },

    /****************
     * member methods
     ****************/

    /**
     * Initialize
     */
    init: function() {
        var ad = this.agentDetector = new AgentDetector();
        this.ua = ad.userAgent();
        this.os = ad.getOS();
        this.version = ad.version(ad.ios ? ad.device : 'Android');
    },

    /**
     * Set os by Detector
     * @param {object} context The options
     */
    setDetector: function(context) {
        var self = this,
            isNotIntend = (this.isIntentLess() || tui.util.isExisty(context.useUrlScheme)),
            isIntend = tui.util.isExisty(context.intentURI),
            store = context.storeURL,
            baseDetect = Detector,
            iOSDetect = iOSDetector,
            ad = this.agentDetector;

        if (ad.android && this.version >= context.andVersion) { // Andriod
            if (isNotIntend && store) {
                this.detector = baseDetect.androidSchemeDetector;
            } else if (isIntend) {
                this.detector = baseDetect.androidIntendDetector;
            }
        } else if (ad.ios && store) {// IOS
            if(parseInt(this.version.major, 10) < 8) {
                this.detector = iOSDetect.iosOlderDetector;
            } else {
                this.detector = iOSDetect.iosRecentDetector;
            }
        } else { // ETC
            setTimeout(function () {
                self.detector = baseDetect.etcDetector;
                if (context.etcCallback) {
                    context.etcCallback();
                }
            }, 100);
        }
    },

    /**
     * Run selected detector 
     */
    runDetector: function(context) {
        if(this.detector && (this.detector.type !== Detector.etcDetector.type)) {
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
     * @param options
     *
     * @example
     * var loader = new tui.component.AppLoader();
     * loader.exec({
     *      name: 'app', // application Name (ex. facebook, twitter, daum)
     *      ios: {
     *          scheme: 'fecheck://', // iphone app scheme
     *          url: 'itms-apps://itunes.apple.com/app/.....' // app store url
     *      },
     *      android: {
     *          scheme: 'intent://home#Intent;scheme=fecheck;package=com.fecheck;end' // android intent uri
     *      }
     *  });
     */
    exec: function(options) {
        options = tui.util.extend(this.defaults, options);
        var context = {
            appName: options.name,
            urlScheme: options.ios.scheme,
            storeURL: options.ios.url,
            intentURI: options.android.scheme,
            etcCallback: options.etcCallback,
            andVersion: options.android.version
        };
        this.setDetector(context);
        this.runDetector(context);
    }
});


