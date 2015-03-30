/**
 * @fileoverview 모바일 앱을 호출하는 객체. 들어오는 값및 ua를 통해 추출한 환경 값에 따라 다른 detector를 설정하여, 앱 호출 역할을 위임한다.
 * @dependency code-snippet.js, detector.js, ua.js
 */
(function(exports, app) {
    "use strict";

    var CallAppMobile = ne.util.defineClass(/** @lends CallAppMobile.prototype */{

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
            and: {
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
            this.ua = app.userAgent();
            this.os = app.getOS();
            this.version = app.version(app.ios ? app.device : 'Android');
        },

        /***
         * Detector를 os에 따라 선택
         * @param {object} context 옵션값
         */
        setDetector: function(context) {

            var self = this,
                isNotIntend = (this.isIntentLess() || ne.util.isExisty(context.useUrlScheme)),
                isIntend = ne.util.isExisty(context.intentURI),
                store = context.storeURL;
            if (app.android && this.version >= context.andVersion) { // 안드로이드일경우 detector 셋팅
                if (isNotIntend && store) {
                    this.detector = androidSchemeDetector;
                } else if (isIntend) {
                    this.detector = androidIntendDetector;
                }
            } else if (app.ios && store) {// IOS일경우 detector 셋팅
                if(parseInt(this.version.major, 10) < 8) {
                    this.detector = iosOlderDetector;
                } else {
                    this.detector = iosRecentDetector;
                }
            } else { //기타 환경일경우 detector 셋팅
                setTimeout(function () {
                    self.detector = etcDetector;
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
            if(this.detector && (this.detector.type !== etcDetector.type)) {
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
            var blackListRegexp = new RegExp(intentlessBrowsers.join('|'), "i");
            return blackListRegexp.test(app.ua);
        },

        /**
         * 앱을 호출한다.
         * @param options
         * @exmaple
         * appLoader.exec({
         *      name: 'app', // application Name (ex. facebook, twitter, daum)
         *      ios: {
         *          scheme: 'fecheck://', // iphone app scheme
         *          url: 'itms-apps://itunes.apple.com/app/.....' // app store url
         *      },
         *      and: {
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
                intentURI: options.and.scheme,
                etcCallback: options.etcCallback,
                andVersion: options.and.version
            };
            this.setDetector(context);
            this.runDetector(context);

        }
    });

    exports.appLoader = new CallAppMobile;

})(window, window.app);