/**
 * @fileovrview 모바일 앱을 호출하는 객체. 들어오는 값및 ua를 통해 추출한 환경 값에 따라 다른 detector를 설정하여, 앱 호출 역할을 위임한다.
 * @dependency code-snippet.js, appLoader.js
 * @author FE개발팀
 */
/**
 * @namespace ne.component.AppLoader.Detector
 */
ne.component.AppLoader.Detector = {
    /**
     * for timer
     */
    TIMEOUT: {
        IOS_SHORT: 1000,
        IOS_LONG: 1000 * 2,
        ANDROID: 100 * 3,
        INTERVAL: 100
    },
    
    /**
     * iframe을 통한 앱호출
     * @param {string} urlScheme iframe url
     */
    runAppWithIframe: function (urlScheme) {
        var self = this,
            iframe;
        setTimeout(function () {
            iframe = self.getIframeMadeById('supportFrame');
            iframe.src = urlScheme;
        }, this.TIMEOUT.INTERVAL);
    },

    /**
     * iframe 생성
     * @param {string} id iframe ID
     * @returns {HTMLElement}
     */
    getIframeMadeById: function (id) {
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
    deferCallback: function (url, callback, time) {
        var clickedAt = new Date().getTime(),
            now,
            isPV = this.isPageVisibility(),
            self = this;

        return setTimeout(function () {
            now = new Date().getTime();
            if (isPV && now - clickedAt < time + self.TIMEOUT.INTERVAL) {
                callback(url);
            }
        }, time);
    },

    /**
     * check a webpage is visible or in focus
     * @returns {boolean}
     */
    isPageVisibility: function () {
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
 * @namespace ne.component.AppLoader.Detector.androidSchemeDetector
 */
ne.component.AppLoader.Detector.androidSchemeDetector = ne.util.extend({
    /**
     * detector type
     * @memberof ne.component.AppLoader.Detector.androidSchemeDetector
     */
    type: 'scheme',

    /**
     * detector 실행
     * @param {object} context
     * @memberof ne.component.AppLoader.Detector.androidSchemeDetector
     */
    run: function(context) {
        var storeURL = context.storeURL;
        this.deferCallback(storeURL, context.notFoundCallback, this.TIMEOUT.ANDROID);
        this.runAppWithIframe(context.urlScheme);
    }
}, ne.component.AppLoader.Detector);


/**
 * 안드로이드 intent지원 detector
 * @namespace ne.component.AppLoader.Detector.androidIntendDetector
 */
ne.component.AppLoader.Detector.androidIntendDetector = ne.util.extend({
    /**
     * detector type
     * @memberof ne.component.AppLoader.Detector.androidIntendDetector
     */
    type: 'intend',

    /**
     * detector 실행
     * @param {object} context
     * @memberof ne.component.AppLoader.Detector.androidIntendDetector
     */
    run: function(context) {
        setTimeout(function () {
            top.location.href = context.intentURI;
        }, this.TIMEOUT.INTERVAL);
    }
}, ne.component.AppLoader.Detector);

/**
 * iosDetector 공통기능
 * @namespace ne.component.AppLoader.iOSDetector
 */
ne.component.AppLoader.iOSDetector = ne.util.extend({
    /**
     * detector type
     * @memberof ne.component.AppLoader.iOSDetector
     */
    type: 'ios',

    /**
     * 기본 앱페이지 이동함수
     * @param storeURL
     * @memberof ne.component.AppLoader.iOSDetector
     */
    moveTo: function(storeURL) {
        window.location.href = storeURL;
    },

    /**
     * visiblitychange  이벤트 등록
     * @memberof ne.component.AppLoader.iOSDetector
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
     *  @memberof ne.component.AppLoader.iOSDetector
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
}, ne.component.AppLoader.Detector);

/****************
 * iOS series
 ****************/

/**
 * ios 구버전 detector
 * @namespace ne.component.AppLoader.iOSDetector.iosOlderDetector
 */
ne.component.AppLoader.iOSDetector.iosOlderDetector = ne.util.extend({
    /**
     * detector 실행
     * @param {object} context
     * @memberof ne.component.AppLoader.iOSDetector.iosOlderDetector
     */
    run: function(context) {
        var storeURL = context.storeURL,
            callback = context.notFoundCallback || this.moveTo;
        this.tid = this.deferCallback(storeURL, callback, this.TIMEOUT.IOS_LONG);
        this.bindPagehideEvent();
        this.runAppWithIframe(context.urlScheme);
    }
}, ne.component.AppLoader.iOSDetector);

/**
 * ios 구버전 detector
 * @namespace ne.component.AppLoader.iOSDetector.iosRecentDetector
 */
ne.component.AppLoader.iOSDetector.iosRecentDetector = ne.util.extend({
    /**
     * detector 실행
     * @param {object} context
     * @memberof ne.component.AppLoader.iOSDetector.iosRecentDetector
     */
    run: function(context) {
        var storeURL = context.storeURL,
            callback = context.notFoundCallback || this.moveTo;
        if (this.moveTo === callback) {
            this.tid = this.deferCallback(storeURL, callback, this.TIMEOUT.IOS_SHORT);
        } else {
            this.tid = this.deferCallback(storeURL, callback, this.TIMEOUT.IOS_LONG);
        }
        this.bindVisibilityChangeEvent();
        this.runAppWithIframe(context.urlScheme);
    }
}, ne.component.AppLoader.iOSDetector);

/****************
 * ETC
 ****************/

/**
 * 기타 미지원 환경
 * @namespace ne.component.AppLoader.etcDetector
 */
ne.component.AppLoader.Detector.etcDetector = {
    /**
     * @memberof ne.component.AppLoader.etcDetector
     */
    type: 'etc',
    /**
     * @memberof ne.component.AppLoader.etcDetector
     */
    run: function() {
    }
};
