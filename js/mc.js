(function(exports, app) {
    "use strict";

    var TIMEOUT = {
        IOS_SHORT: 1000,
        IOS_LONG: 1000 * 2,
        ANDROID: 100 * 3,
        INTERVAL: 100
    };

    /**
     * detectors 공통기능 모음
     */
    var detector = {
        /**
         * iframe을 통한 앱호출
         * @param {string} urlScheme iframe url
         */
        runAppWithIframe: function(urlScheme) {
            var self = this;
            setTimeout(function () {
                var iframe = self.getIframe('supportFrame');
                iframe.src = urlScheme;
            }, TIMEOUT.INTERVAL);
        },
        /**
         * iframe 생성
         * @param {string} id iframe ID
         * @returns {HTMLElement}
         */
        getIframe: function(id) {
            var iframe = document.createElement('iframe');
            ne.util.extend(iframe, {
                id: id,
                frameborder: '0',
                width: '0',
                height: '0'
            });
            iframe.style.display = 'none';
            document.body.appendChild(iframe);
            return iframe;
        },
        /**
         * fallback함수를 time에 따라 지연실행
         * @param {string} time 지연시간
         * @param {string} url 호출 url
         * @param {function} fallback 실행함수
         * @returns {number}
         */
        deferFallback: function(time, url, fallback) {
            var clickedAt = new Date().getTime(),
                self = this;

            return setTimeout(function () {
                var now = new Date().getTime();
                if (self.isPageVisibility() && now - clickedAt < time + TIMEOUT.INTERVAL) {
                    fallback(url);
                }
            }, time);
        },
        /**
         * check a webpage is visible or in focus
         * @returns {boolean}
         */
        isPageVisibility: function() {
            var attrs = ['hidden', 'webkitHidden'],
                i = 0,
                len = attrs.length;
            for(; i<len; i++) {
                if (ne.util.isExisty(document[attrs[i]])) {
                    return !document[attrs[i]];
                }
            }
            return true;
        }
    };

    /**
     * 안드로이드 intent지원 불가 detector
     */
    var androidSchemeDetector = ne.util.extend({
        type: 'scheme',
        run: function(context) {
            var storeURL = context.storeURL;
            this.deferFallback(TIMEOUT.ANDROID, storeURL, context.notFoundCallback);
            this.runAppWithIframe(context.urlScheme);
        }
    }, detector);

    /**
     * 안드로이드 intent지원 detector
     */
    var androidIntendDetector = {
        type: 'intend',
        run: function(context) {
            setTimeout(function () {
                top.location.href = context.intentURI;
            }, TIMEOUT.INTERVAL);
        }
    };

    /**
     * iosDetector 공통기능
     */
    var iosDetector = ne.util.extend({
        type: 'ios',
        moveTo: function(storeURL) {
            window.location.href = storeURL;
        },
        /**
         * visiblitychange  이벤트 등록
         */
        bindVisibilityChangeEvent: function() {
            document.addEventListener('visibilitychange', function clear() {
                if (this.isPageVisibility()) {
                    clearTimeout(this.tid);
                    document.removeEventListener('visibilitychange', clear);
                }
            });
        },
        /**
         *  pagehide 이벤트 등록
         */
        bindPagehideEvent: function() {
            var self = this;
            window.addEventListener('pagehide', function clear() {
                if (this.isPageVisibility()) {
                    clearTimeout(self.tid);
                    window.removeEventListener('pagehide', clear);
                }
            });
        }
    }, detector);

    /**
     * ios 구버전 detector
     */
    var iosOlderDetector = ne.util.extend({
        run: function(context) {
            var storeURL = context.storeURL,
                fallback = context.notFoundCallback || this.moveTo;
            this.tid = this.deferFallback(TIMEOUT.IOS_LONG, storeURL, fallback);
            this.bindPagehideEvent();
            this.runAppWithIframe(context.urlScheme);
        }
    }, iosDetector);

    /**
     * ios 신버전 detector
     * @type {Object|void|*}
     */
    var iosRecentDetector = ne.util.extend({
        run: function(context) {
            var storeURL = context.storeURL,
                fallback = context.notFoundCallback || this.moveTo;
            if (this.moveTo === fallback) {
                this.tid = this.deferFallback(TIMEOUT.IOS_SHORT, storeURL, fallback);
            } else {
                this.tid = this.deferFallback(TIMEOUT.IOS_LONG, storeURL, fallback);
            }
            this.bindVisibilityChangeEvent();
            this.runAppWithIframe(context.urlScheme);
        }
    }, iosDetector);

    /**
     * 기타 브라우저
     */
    var etcDetector = {
        type: 'etc',
        run: function() {
        }
    };


    var CallAppMobile = ne.util.defineClass(/** @lends CallAppMobile.prototype */{
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

            if (app.android) { // 안드로이드일경우 detector 셋팅
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
                        etcDetector.run = context.etcCallback;
                    }
                }, TIMEOUT.INTERVAL);
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
                intentURI: options.and.scheme
            };
            this.setDetector(context);
            this.runDetector(context);

        }
    });

    exports.appLoader = new CallAppMobile;

})(window, window.app);