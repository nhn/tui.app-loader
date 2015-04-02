/**
 * @fileoverview 모바일 앱을 호출하는 객체. 들어오는 값및 ua를 통해 추출한 환경 값에 따라 다른 detector를 설정하여, 앱 호출 역할을 위임한다.
 * @dependency code-snippet.js, detectors.js, agentDetector.js
 * @author FE개발팀
 */
/* istanbul ignore if */
if (!ne) {
    ne = window.ne = {};
}
if (!ne.component) {
    ne.component = window.ne.component = {};
}
/**
 * @constructor
 */
ne.component.AppLoader = ne.util.defineClass(/** @lends ne.component.AppLoader.prototype */{

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
     * 초기화
     */
    init: function() {
        var ad = this.agentDetector = new ne.component.AppLoader.agentDetector();
        this.ua = ad.userAgent();
        this.os = ad.getOS();
        this.version = ad.version(ad.ios ? ad.device : 'Android');
    },

    /***
     * Detector를 os에 따라 선택
     * @param {object} context 옵션값
     */
    setDetector: function(context) {
        var self = this,
            isNotIntend = (this.isIntentLess() || ne.util.isExisty(context.useUrlScheme)),
            isIntend = ne.util.isExisty(context.intentURI),
            store = context.storeURL,
            baseDetect = ne.component.AppLoader.Detector,
            iOSDetect = ne.component.AppLoader.Detector,
            ad = this.agentDetector;

        if (ad.android && this.version >= context.andVersion) { // 안드로이드일경우 detector 셋팅
            if (isNotIntend && store) {
                this.detector = baseDetect.androidSchemeDetector;
            } else if (isIntend) {
                this.detector = baseDetect.androidIntendDetector;
            }
        } else if (ad.ios && store) {// IOS일경우 detector 셋팅
            if(parseInt(this.version.major, 10) < 8) {
                this.detector = iOSDetect.iosOlderDetector;
            } else {
                this.detector = iOSDetect.iosRecentDetector;
            }
        } else { //기타 환경일경우 detector 셋팅
            setTimeout(function () {
                self.detector = baseDetect.etcDetector;
                if (context.etcCallback) {
                    context.etcCallback();
                }
            }, 100);
        }
    },

    /**
     * 선택된 detector 실행
     */
    runDetector: function(context) {
        // detector.js 에 있는 etcDetector와 타입을 비교하여 etc의 경우 run을 실행하지 않는다.
        if(this.detector && (this.detector.type !== ne.component.AppLoader.Detector.etcDetector.type)) {
            this.detector.run(context);
        }
    },

    /**
     * intent 미지원 브라우저 여부 판별
     * @returns {boolean}
     */
    isIntentLess: function() {
        var intentlessBrowsers = [
            'firefox',
            'opr'
        ];
        var blackListRegexp = new RegExp(intentlessBrowsers.join('|'), 'i'),
            app = ne.component.AppLoader.agentDetector;
        return blackListRegexp.test(app.ua);
    },

    /**
     * 앱을 호출한다.
     * @param options
     * @exmaple
     * mobileCaller.exec({
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
        options = ne.util.extend(this.defaults, options);
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


