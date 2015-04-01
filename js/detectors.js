/**
 * @fileoverview 각 환경별 앱을 실행시키는 액션객체들을 모아둔 파일
 * @dependency code-snipet.js, agentDetector.js
 * @author FE개발팀
 */
(function(exports) {
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
            var self = this,
                iframe;
            setTimeout(function () {
                iframe = self.getIframeMadeById('supportFrame');
                iframe.src = urlScheme;
            }, TIMEOUT.INTERVAL);
        },

        /**
         * iframe 생성
         * @param {string} id iframe ID
         * @returns {HTMLElement}
         */
        getIframeMadeById: function(id) {
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
         * callback함수를 time에 따라 지연실행
         * @param {string} time 지연시간
         * @param {string} url 호출 url
         * @param {function} callback 실행함수
         * @returns {number}
         */
        deferCallback: function(url, callback, time) {
            var clickedAt = new Date().getTime(),
                now,
                isPV = this.isPageVisibility();

            return setTimeout(function () {
                now = new Date().getTime();
                if (isPV && now - clickedAt < time + TIMEOUT.INTERVAL) {
                    callback(url);
                }
            }, time);
        },

        /**
         * check a webpage is visible or in focus
         * @returns {boolean}
         */
        isPageVisibility: function() {
            if (ne.util.isExisty(document.hidden)) {
                return !document.hidden;
            }
            if (ne.util.isExisty(document.webkitHidden)) {
                return !document.webkitHidden;
            }
            return true;
        }
    };

    /****************
     * Android series
     ****************/

    /**
     * 안드로이드 intent지원 불가 detector
     */
    var androidSchemeDetector = ne.util.extend({
        /**
         * detector type
         */
        type: 'scheme',

        /**
         * detector 실행
         * @param {object} context
         */
        run: function(context) {
            var storeURL = context.storeURL;
            this.deferCallback(storeURL, context.notFoundCallback, TIMEOUT.ANDROID);
            this.runAppWithIframe(context.urlScheme);
        }
    }, detector);

    /**
     * 안드로이드 intent지원 detector
     */
    var androidIntendDetector = {
        /**
         * detector type
         */
        type: 'intend',

        /**
         * detector 실행
         * @param {object} context
         */
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
        /**
         * detector type
         */
        type: 'ios',

        /**
         * 기본 앱페이지 이동함수
         * @param storeURL
         */
        moveTo: function(storeURL) {
            window.location.href = storeURL;
        },

        /**
         * visiblitychange  이벤트 등록
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
         *  pagehide 이벤트 등록
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
    }, detector);

    /****************
     * iOS series
     ****************/

    /**
     * ios 구버전 detector
     */
    var iosOlderDetector = ne.util.extend({
        /**
         * detector 실행
         * @param {object} context
         */
        run: function(context) {
            var storeURL = context.storeURL,
                callback = context.notFoundCallback || this.moveTo;
            this.tid = this.deferCallback(storeURL, callback, TIMEOUT.IOS_LONG);
            this.bindPagehideEvent();
            this.runAppWithIframe(context.urlScheme);
        }
    }, iosDetector);

    /**
     * ios 신버전 detector
     * @type {Object|void|*}
     */
    var iosRecentDetector = ne.util.extend({
        /**
         * detector 실행
         * @param {object} context
         */
        run: function(context) {
            var storeURL = context.storeURL,
                callback = context.notFoundCallback || this.moveTo;
            if (this.moveTo === callback) {
                this.tid = this.deferCallback(storeURL, callback, TIMEOUT.IOS_SHORT);
            } else {
                this.tid = this.deferCallback(storeURL, callback, TIMEOUT.IOS_LONG);
            }
            this.bindVisibilityChangeEvent();
            this.runAppWithIframe(context.urlScheme);
        }
    }, iosDetector);

    /****************
     * ETC
     ****************/

    /**
     * 기타 브라우저
     */
    var etcDetector = {
        type: 'etc',
        run: function() {
        }
    };

    ne.util.extend(exports, {
        androidSchemeDetector: androidSchemeDetector,
        androidIntendDetector: androidIntendDetector,
        iosOlderDetector: iosOlderDetector,
        iosRecentDetector: iosRecentDetector,
        etcDetector: etcDetector
    });

})(ne.component.appCaller);

