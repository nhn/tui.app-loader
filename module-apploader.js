/*!module-apploader v0.0.1 | NHN Entertainment*/
/**********
 * code-snippet.js
 **********/

/**
 * @fileoverview
 * @author FE개발팀
 */

(function(ne) {
    'use strict';
    /* istanbul ignore if */
    if (!ne) {
        ne = window.ne = {};
    }
    if (!ne.util) {
        ne.util = window.ne.util = {};
    }

    /**
     * 데이터 객체를 확장하는 메서드 (deep copy 는 하지 않는다)
     * @param {object} target - 확장될 객체
     * @param {...object} objects - 프로퍼티를 복사할 객체들
     * @return {object}
     * @memberOf ne.util
     */
    function extend(target, objects) {
        var source,
            prop,
            hasOwnProp = Object.prototype.hasOwnProperty,
            i,
            len;

        for (i = 1, len = arguments.length; i < len; i++) {
            source = arguments[i];
            for (prop in source) {
                if (hasOwnProp.call(source, prop)) {
                    target[prop] = source[prop];
                }
            }
        }
        return target;
    }

    /**
     * @type {number}
     */
    var lastId = 0;

    /**
     * 객체에 unique한 ID를 프로퍼티로 할당한다.
     * @param {object} obj - ID를 할당할 객체
     * @return {number}
     * @memberOf ne.util
     */
    function stamp(obj) {
        obj.__fe_id = obj.__fe_id || ++lastId;
        return obj.__fe_id;
    }

    /**
     * object#stamp로 UniqueID를 부여했었는지 여부 확인
     * @param {object} obj
     * @returns {boolean}
     * @memberOf ne.util
     */
    function hasStamp(obj) {
        return ne.util.isExisty(obj, '__fe_id');
    }

    function resetLastId() {
        lastId = 0;
    }

    /**
     * 객체를 전달받아 객체의 키목록을 배열로만들어 리턴해준다.
     * @param obj
     * @returns {Array}
     * @memberOf ne.util
     */
    var keys = function(obj) {
        var keys = [],
            key;

        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                keys.push(key);
            }
        }

        return keys;
    };


    /**
     *
     * 여러개의 json객체들을 대상으로 그것들이 동일한지 비교하여 리턴한다.
     * (출처) http://stackoverflow.com/questions/1068834/object-comparison-in-javascript
     *
     * @param {...object} object 비교할 객체 목록
     * @return {boolean} 파라미터로 전달받은 json객체들의 동일 여부
     * @example
     *
     var jsonObj1 = {name:'milk', price: 1000},
     jsonObj2 = {name:'milk', price: 1000},
     jsonObj3 = {name:'milk', price: 1000}

     ne.util.compareJSON(jsonObj1, jsonObj2, jsonObj3);
     => return true

     var jsonObj4 = {name:'milk', price: 1000},
     jsonObj5 = {name:'beer', price: 3000}

     ne.util.compareJSON(jsonObj4, jsonObj5);
     => return false

     * @memberOf ne.util
     */
    function compareJSON(object) {
        var leftChain,
            rightChain,
            argsLen = arguments.length,
            i;

        function isSameObject(x, y) {
            var p;

            // remember that NaN === NaN returns false
            // and isNaN(undefined) returns true
            if (isNaN(x) &&
                isNaN(y) &&
                ne.util.isNumber(x) &&
                ne.util.isNumber(y)) {
                return true;
            }

            // Compare primitives and functions.
            // Check if both arguments link to the same object.
            // Especially useful on step when comparing prototypes
            if (x === y) {
                return true;
            }

            // Works in case when functions are created in constructor.
            // Comparing dates is a common scenario. Another built-ins?
            // We can even handle functions passed across iframes
            if ((ne.util.isFunction(x) && ne.util.isFunction(y)) ||
                (x instanceof Date && y instanceof Date) ||
                (x instanceof RegExp && y instanceof RegExp) ||
                (x instanceof String && y instanceof String) ||
                (x instanceof Number && y instanceof Number)) {
                return x.toString() === y.toString();
            }

            // At last checking prototypes as good a we can
            if (!(x instanceof Object && y instanceof Object)) {
                return false;
            }

            if (x.isPrototypeOf(y) ||
                y.isPrototypeOf(x) ||
                x.constructor !== y.constructor ||
                x.prototype !== y.prototype) {
                return false;
            }

            // check for infinitive linking loops
            if (ne.util.inArray(x, leftChain) > -1 ||
                ne.util.inArray(y, rightChain) > -1) {
                return false;
            }

            // Quick checking of one object beeing a subset of another.
            for (p in y) {
                if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                    return false;
                }
                else if (typeof y[p] !== typeof x[p]) {
                    return false;
                }
            }

            //인풋 데이터 x의 오브젝트 키값으로 값을 순회하면서
            //hasOwnProperty, typeof 체크를 해서 비교하고 x[prop]값과 y[prop] 가 같은 객체인지 판별한다.
            for (p in x) {
                if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                    return false;
                }
                else if (typeof y[p] !== typeof x[p]) {
                    return false;
                }

                if (typeof(x[p]) === 'object' || typeof(x[p]) === 'function') {
                    leftChain.push(x);
                    rightChain.push(y);

                    if (!isSameObject(x[p], y[p])) {
                        return false;
                    }

                    leftChain.pop();
                    rightChain.pop();
                } else if (x[p] !== y[p]) {
                    return false;
                }
            }

            return true;
        }

        if (argsLen < 1) {
            return true;
        }

        for (i = 1; i < argsLen; i++) {
            leftChain = [];
            rightChain = [];

            if (!isSameObject(arguments[0], arguments[i])) {
                return false;
            }
        }

        return true;
    }

    ne.util.extend = extend;
    ne.util.stamp = stamp;
    ne.util.hasStamp = hasStamp;
    ne.util._resetLastId = resetLastId;
    ne.util.keys = Object.keys || keys;
    ne.util.compareJSON = compareJSON;
})(window.ne);
/**
 * @fileoverview 간단한 상속 시뮬레이션
 * @author FE개발팀
 */

(function(ne) {
    'use strict';
    /* istanbul ignore if */
    if (!ne) {
        ne = window.ne = {};
    }
    /* istanbul ignore if */
    if (!ne.util) {
        ne.util = window.ne.util = {};
    }



    /**
     * 전달된 객체를 prototype으로 사용하는 객체를 만들어 반환하는 메서드
     * @param {Object} obj
     * @return {Object}
     * @memberof ne.util
     */
    function createObject() {
        function F() {}

        return function(obj) {
            F.prototype = obj;
            return new F();
        };
    }

    /**
     * 단순 prototype 확장을 응용한 상속 메서드
     *
     * **주의점**
     *
     * 단순 프로토타입 확장 기능만 제공하므로 자식 생성자의 prototype을 덮어쓰면 안된다.
     *
     * @example
     * function Animal(leg) {
     *     this.leg = leg;
     * }
     *
     * Animal.prototype.growl = function() {
     *     // ...
     * };
     *
     * function Person(name) {
     *     this.name = name;
     * }
     *
     * // 상속
     * core.inherit(Person, Animal);
     *
     * // 이 이후부터는 프로퍼티 편집만으로 확장해야 한다.
     * Person.prototype.walk = function(direction) {
     *     // ...
     * };
     * @param {function} subType 자식 생성자 함수
     * @param {function} superType 부모 생성자 함수
     * @memberof ne.util
     */
    function inherit(subType, superType) {
        var prototype = ne.util.createObject(superType.prototype);
        prototype.constructor = subType;
        subType.prototype = prototype;
    }

    ne.util.createObject = createObject();
    ne.util.inherit = inherit;

})(window.ne);
/**
 * @fileoverview 클래스와 비슷한방식으로 생성자를 만들고 상속을 구현할 수 있는 메소드를 제공하는 모듈
 * @author FE개발팀
 * @dependency inheritance.js, object.js
 */

(function(ne) {
    'use strict';
    /* istanbul ignore if */
    if (!ne) {
        ne = window.ne = {};
    }
    /* istanbul ignore if */
    if (!ne.util) {
        ne.util = window.ne.util = {};
    }

    /**
     * 객체의 생성및 상속을 편하게 도와주는 메소드
     * @param {*} [parent] 상속받을 생성자.
     * @param {Object} props 생성할 생성자의프로토타입에 들어갈 멤버들
     * @param {Function} props.init 인스턴스가 생성될때 실행됨
     * @param {Object} props.static 생성자의 클래스 맴버형태로 들어갈 멤버들
     * @returns {*}
     * @example
     *
     * var Parent = defineClasss({
     *     init: function() {
     *         this.name = 'made by def';
     *     },
     *     method: function() {
     *         //..can do something with this
     *     },
     *     static: {
     *         staticMethod: function() {
     *              //..do something
     *         }
     *     }
     * });
     *
     * var Child = defineClass(Parent, {
     *     method2: function() {}
     * });
     *
     *
     * Parent.staticMethod();
     *
     * var parentInstance = new Parent();
     * console.log(parentInstance.name); //made by def
     * parentInstance.staticMethod(); // Error
     *
     *
     * var childInstance = new Child();
     * childInstance.method();
     * childInstance.method2();
     * @memberof ne.util
     *
     */
    var defineClass = function(parent, props) {
        var obj;

        if (!props) {
            props = parent;
            parent = null;
        }

        obj = props.init || function(){};

        if(parent) {
            ne.util.inherit(obj, parent);
        }

        if (props.hasOwnProperty('static')) {
            ne.util.extend(obj, props.static);
            delete props.static;
        }

        ne.util.extend(obj.prototype, props);

        return obj;
    };

    ne.util.defineClass = defineClass;

})(window.ne);

/**
 * @fileoverview 타입체크 모듈
 * @author FE개발팀
 */

(function(ne) {
    'use strict';
    /* istanbul ignore if */
    if (!ne) {
        ne = window.ne = {};
    }
    if (!ne.util) {
        ne.util = window.ne.util = {};
    }

    /**
     * 값이 정의되어 있는지 확인(null과 undefined가 아니면 true를 반환한다)
     * @param {*} obj
     * @param {(String|Array)} [key]
     * @returns {boolean}
     * @example
     *
     * var obj = {a: {b: {c: 1}}};
     * a 가 존재하는지 확인한다(존재함, true반환)
     * ne.util.isExisty(a);
     * => true;
     * a 에 속성 b 가 존재하는지 확인한다.(존재함, true반환)
     * ne.util.isExisty(a, 'b');
     * => true;
     * a 의 속성 b에 c가 존재하는지 확인한다.(존재함, true반환)
     * ne.util.isExisty(a, 'b.c');
     * => true;
     * a 의 속성 b에 d가 존재하는지 확인한다.(존재하지 않음, false반환)
     * ne.util.isExisty(a, 'b.d');
     * => false;
     * @memberOf ne.util
     */
    function isExisty(obj, key) {
        if (arguments.length < 2) {
            return !isNull(obj) && !isUndefined(obj);
        }
        if (!isObject(obj)) {
            return false;
        }

        key = isString(key) ? key.split('.') : key;

        if (!isArray(key)) {
            return false;
        }
        key.unshift(obj);

        var res = ne.util.reduce(key, function(acc, a) {
            if (!acc) {
                return;
            }
            return acc[a];
        });
        return !isNull(res) && !isUndefined(res);
    }

    /**
     * 인자가 undefiend 인지 체크하는 메서드
     * @param obj
     * @returns {boolean}
     * @memberOf ne.util
     */
    function isUndefined(obj) {
        return obj === undefined;
    }

    /**
     * 인자가 null 인지 체크하는 메서드
     * @param {*} obj
     * @returns {boolean}
     * @memberOf ne.util
     */
    function isNull(obj) {
        return obj === null;
    }

    /**
     * 인자가 null, undefined, false가 아닌지 확인하는 메서드
     * (0도 true로 간주한다)
     *
     * @param {*} obj
     * @return {boolean}
     * @memberOf ne.util
     */
    function isTruthy(obj) {
        return isExisty(obj) && obj !== false;
    }

    /**
     * 인자가 null, undefined, false인지 확인하는 메서드
     * (truthy의 반대값)
     * @param {*} obj
     * @return {boolean}
     * @memberOf ne.util
     */
    function isFalsy(obj) {
        return !isTruthy(obj);
    }


    var toString = Object.prototype.toString;

    /**
     * 인자가 arguments 객체인지 확인
     * @param {*} obj
     * @return {boolean}
     * @memberOf ne.util
     */
    function isArguments(obj) {
        var result = isExisty(obj) &&
            ((toString.call(obj) === '[object Arguments]') || !!obj.callee);

        return result;
    }

    /**
     * 인자가 배열인지 확인
     * @param {*} obj
     * @return {boolean}
     * @memberOf ne.util
     */
    function isArray(obj) {
        return toString.call(obj) === '[object Array]';
    }

    /**
     * 인자가 객체인지 확인하는 메서드
     * @param {*} obj
     * @return {boolean}
     * @memberOf ne.util
     */
    function isObject(obj) {
        return obj === Object(obj);
    }

    /**
     * 인자가 함수인지 확인하는 메서드
     * @param {*} obj
     * @return {boolean}
     * @memberOf ne.util
     */
    function isFunction(obj) {
        return toString.call(obj) === '[object Function]';
    }

    /**
     * 인자가 숫자인지 확인하는 메서드
     * @param {*} obj
     * @return {boolean}
     * @memberOf ne.util
     */
    function isNumber(obj) {
        return toString.call(obj) === '[object Number]';
    }

    /**
     * 인자가 문자열인지 확인하는 메서드
     * @param obj
     * @return {boolean}
     * @memberOf ne.util
     */
    function isString(obj) {
        return toString.call(obj) === '[object String]';
    }

    /**
     * 인자가 불리언 타입인지 확인하는 메서드
     * @param {*} obj
     * @return {boolean}
     * @memberOf ne.util
     */
    function isBoolean(obj) {
        return toString.call(obj) === '[object Boolean]';
    }

    /**
     * 인자가 HTML Node 인지 검사한다. (Text Node 도 포함)
     * @param {HTMLElement} html
     * @return {Boolean} HTMLElement 인지 여부
     * @memberOf ne.util
     */
    function isHTMLNode(html) {
        if (typeof(HTMLElement) === 'object') {
            return (html && (html instanceof HTMLElement || !!html.nodeType));
        }
        return !!(html && html.nodeType);
    }
    /**
     * 인자가 HTML Tag 인지 검사한다. (Text Node 제외)
     * @param {HTMLElement} html
     * @return {Boolean} HTMLElement 인지 여부
     * @memberOf ne.util
     */
    function isHTMLTag(html) {
        if (typeof(HTMLElement) === 'object') {
            return (html && (html instanceof HTMLElement));
        }
        return !!(html && html.nodeType && html.nodeType === 1);
    }
    /**
     * null, undefined 여부와 순회 가능한 객체의 순회가능 갯수가 0인지 체크한다.
     * @param {*} obj 평가할 대상
     * @return {boolean}
     * @memberOf ne.util
     */
    function isEmpty(obj) {
        var key,
            hasKey = false;

        if (!isExisty(obj)) {
            return true;
        }

        if (isString(obj) && obj === '') {
            return true;
        }

        if (isArray(obj) || isArguments(obj)) {
            return obj.length === 0;
        }

        if (isObject(obj) && !isFunction(obj)) {
            ne.util.forEachOwnProperties(obj, function() {
                hasKey = true;
                return false;
            });

            return !hasKey;
        }

        return true;

    }

    /**
     * isEmpty 메서드와 반대로 동작한다.
     * @param {*} obj 평가할 대상
     * @return {boolean}
     * @memberOf ne.util
     */
    function isNotEmpty(obj) {
        return !isEmpty(obj);
    }


    ne.util.isExisty = isExisty;
    ne.util.isUndefined = isUndefined;
    ne.util.isNull = isNull;
    ne.util.isTruthy = isTruthy;
    ne.util.isFalsy = isFalsy;
    ne.util.isArguments = isArguments;
    ne.util.isArray = Array.isArray || isArray;
    ne.util.isObject = isObject;
    ne.util.isFunction = isFunction;
    ne.util.isNumber = isNumber;
    ne.util.isString = isString;
    ne.util.isBoolean = isBoolean;
    ne.util.isHTMLNode = isHTMLNode;
    ne.util.isHTMLTag = isHTMLTag;
    ne.util.isEmpty = isEmpty;
    ne.util.isNotEmpty = isNotEmpty;

})(window.ne);
/**********
 * detector.js
 **********/

/**
 * @fileoverview 각 환경별 앱을 실행시키는 액션객체들을 모아둔 파일
 * @dependency code-snipet.js, ua.js
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
        deferFallback: function(url, fallback, time) {
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
            this.deferFallback(storeURL, context.notFoundCallback, TIMEOUT.ANDROID);
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
                fallback = context.notFoundCallback || this.moveTo;
            this.tid = this.deferFallback(storeURL, fallback, TIMEOUT.IOS_LONG);
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
                fallback = context.notFoundCallback || this.moveTo;
            if (this.moveTo === fallback) {
                this.tid = this.deferFallback(storeURL, fallback, TIMEOUT.IOS_SHORT);
            } else {
                this.tid = this.deferFallback(storeURL, fallback, TIMEOUT.IOS_LONG);
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

})(window);


/**********
 * ua.js
 **********/

/**
 * @fileoverview  각 환경별 정보를 저장하고 있는 값객체 및 그 값들을 통한 userAgent정보를 추출해주는 객체
 * @dependency code-snippet.js
 */
(function(exports) {
    /***************
     * RegExp processing start : original - 출처 mobile-detect.js @link [https://github.com/hgoebl/mobile-detect.js]
     ***************/
    var mobileRegText = {
        "phones": {
            "iPhone": "\\biPhone\\b|\\biPod\\b",
            "BlackBerry": "BlackBerry|\\bBB10\\b|rim[0-9]+",
            "HTC": "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m",
            "Nexus": "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
            "Dell": "Dell.*Streak|Dell.*Aero|Dell.*Venue|DELL.*Venue Pro|Dell Flash|Dell Smoke|Dell Mini 3iX|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
            "Motorola": "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925",
            "Samsung": "Samsung|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8",
            "LG": "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802)",
            "Sony": "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
            "Asus": "Asus.*Galaxy|PadFone.*Mobile",
            "Micromax": "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
            "Palm": "PalmSource|Palm",
            "Vertu": "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
            "Pantech": "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
            "Fly": "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
            "Wiko": "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
            "iMobile": "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
            "SimValley": "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
            "Wolfgang": "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
            "Alcatel": "Alcatel",
            "Nintendo": "Nintendo 3DS",
            "Amoi": "Amoi",
            "INQ": "INQ",
            "GenericPhone": "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
        },
        "oss": {
            "AndroidOS": "Android",
            "BlackBerryOS": "blackberry|\\bBB10\\b|rim tablet os",
            "PalmOS": "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
            "SymbianOS": "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
            "WindowsMobileOS": "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",
            "WindowsPhoneOS": "Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
            "iOS": "\\biPhone.*Mobile|\\biPod|\\biPad",
            "MeeGoOS": "MeeGo",
            "MaemoOS": "Maemo",
            "JavaOS": "J2ME\/|\\bMIDP\\b|\\bCLDC\\b",
            "webOS": "webOS|hpwOS",
            "badaOS": "\\bBada\\b",
            "BREWOS": "BREW"
        },
        "uas": {
            "Chrome": "\\bCrMo\\b|CriOS|Android.*Chrome\/[.0-9]* (Mobile)?",
            "Dolfin": "\\bDolfin\\b",
            "Opera": "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR\/[0-9.]+|Coast\/[0-9.]+",
            "Skyfire": "Skyfire",
            "IE": "IEMobile|MSIEMobile",
            "Firefox": "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile",
            "Bolt": "bolt",
            "TeaShark": "teashark",
            "Blazer": "Blazer",
            "Safari": "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
            "Tizen": "Tizen",
            "UCBrowser": "UC.*Browser|UCWEB",
            "baiduboxapp": "baiduboxapp",
            "baidubrowser": "baidubrowser",
            "DiigoBrowser": "DiigoBrowser",
            "Puffin": "Puffin",
            "Mercury": "\\bMercury\\b",
            "ObigoBrowser": "Obigo",
            "NetFront": "NF-Browser",
            "GenericBrowser": "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger"
        },
        "props": {
            "Mobile": "Mobile\/[VER]",
            "Build": "Build\/[VER]",
            "Version": "Version\/[VER]",
            "VendorID": "VendorID\/[VER]",
            "iPad": "iPad.*CPU[a-z ]+[VER]",
            "iPhone": "iPhone.*CPU[a-z ]+[VER]",
            "iPod": "iPod.*CPU[a-z ]+[VER]",
            "Kindle": "Kindle\/[VER]",
            "Chrome": [
                "Chrome\/[VER]",
                "CriOS\/[VER]",
                "CrMo\/[VER]"
            ],
            "Coast": [
                "Coast\/[VER]"
            ],
            "Dolfin": "Dolfin\/[VER]",
            "Firefox": "Firefox\/[VER]",
            "Fennec": "Fennec\/[VER]",
            "IE": [
                "IEMobile\/[VER];",
                "IEMobile [VER]",
                "MSIE [VER];"
            ],
            "NetFront": "NetFront\/[VER]",
            "NokiaBrowser": "NokiaBrowser\/[VER]",
            "Opera": [
                " OPR\/[VER]",
                "Opera Mini\/[VER]",
                "Version\/[VER]"
            ],
            "Opera Mini": "Opera Mini\/[VER]",
            "Opera Mobi": "Version\/[VER]",
            "UC Browser": "UC Browser[VER]",
            "MQQBrowser": "MQQBrowser\/[VER]",
            "MicroMessenger": "MicroMessenger\/[VER]",
            "baiduboxapp": "baiduboxapp\/[VER]",
            "baidubrowser": "baidubrowser\/[VER]",
            "Iron": "Iron\/[VER]",
            "Safari": [
                "Version\/[VER]",
                "Safari\/[VER]"
            ],
            "Skyfire": "Skyfire\/[VER]",
            "Tizen": "Tizen\/[VER]",
            "Webkit": "webkit[ \/][VER]",
            "Gecko": "Gecko\/[VER]",
            "Trident": "Trident\/[VER]",
            "Presto": "Presto\/[VER]",
            "iOS": " \\bi?OS\\b [VER][ ;]{1}",
            "Android": "Android [VER]",
            "BlackBerry": [
                "BlackBerry[\\w]+\/[VER]",
                "BlackBerry.*Version\/[VER]",
                "Version\/[VER]"
            ],
            "BREW": "BREW [VER]",
            "Java": "Java\/[VER]",
            "Windows Phone OS": [
                "Windows Phone OS [VER]",
                "Windows Phone [VER]"
            ],
            "Windows Phone": "Windows Phone [VER]",
            "Windows CE": "Windows CE\/[VER]",
            "Windows NT": "Windows NT [VER]",
            "Symbian": [
                "SymbianOS\/[VER]",
                "Symbian\/[VER]"
            ],
            "webOS": [
                "webOS\/[VER]",
                "hpwOS\/[VER];"
            ]
        }
    };
    mobileRegText.oss0 = {
        WindowsPhoneOS: mobileRegText.oss.WindowsPhoneOS,
        WindowsMobileOS: mobileRegText.oss.WindowsMobileOS
    };

    var ua = window.navigator.userAgent,
        cache = {},
        hasOwnProp = Object.prototype.hasOwnProperty;

    // 각 디바이스, os, broswer의 정보를 정규식으로 전환한다.
    (function init() {
        var key, values, value, i, len, verPos, mobileDetectRules = mobileRegText;
        for (key in mobileDetectRules.props) {
            if (hasOwnProp.call(mobileDetectRules.props, key)) {
                values = mobileDetectRules.props[key];
                if (!ne.util.isArray(values)) {
                    values = [values];
                }
                len = values.length;
                for (i = 0; i < len; ++i) {
                    value = values[i];
                    verPos = value.indexOf('[VER]');
                    if (verPos >= 0) {
                        value = value.substring(0, verPos) + '([\\w._\\+]+)' + value.substring(verPos + 5);
                    }
                    values[i] = new RegExp(value, 'i');
                }
                mobileDetectRules.props[key] = values;
            }
        }

        convertToRegExp(mobileDetectRules.oss);
        convertToRegExp(mobileDetectRules.phones);
        convertToRegExp(mobileDetectRules.tablets);
        convertToRegExp(mobileDetectRules.uas);
        convertToRegExp(mobileDetectRules.utils);

        // copy some patterns to oss0 which are tested first (see issue#15)
        mobileDetectRules.oss0 = {
            WindowsPhoneOS: mobileDetectRules.oss.WindowsPhoneOS,
            WindowsMobileOS: mobileDetectRules.oss.WindowsMobileOS
        };
    }());
    /****************
     * RegExp processing end : original - mobile-detect.js @link [https://github.com/hgoebl/mobile-detect.js]
     ****************/


    /****************
     * Device, OS, Browser Information collecting
     ****************/

    /**
     * userAgent 를 받아온다
     * @returns {*}
     */
    function getUserAgent() {
        if (cache.userAgent === undefined) {
            cache.userAgent = findMatch(mobileRegText.uas, this.ua);
        }
        return cache.userAgent;
    }

    /**
     * OS를 찾는다
     * @returns {*}
     */
    function getOS() {
        return findMatch(mobileRegText.oss0, ua) ||
            findMatch(mobileRegText.oss, ua);
    }

    /**
     * 버전을 찾는다
     * @returns {*}
     */
    function getVersion(propertyName) {
        var version = getVersionStr(propertyName, ua);
        return version ? prepareVersionNo(version) : NaN;
    }
    /**
     * Check the version of the given property in the User-Agent.
     * @param {String} propertyName
     * @param {String} userAgent
     * @return {String} version or <tt>null</tt> if version not found
     * @private
     */
    function getVersionStr(propertyName, userAgent) {
        var props = mobileRegText.props, patterns, i, len, match;
        if (hasOwnProp.call(props, propertyName)) {
            patterns = props[propertyName];
            len = patterns.length;
            for (i = 0; i < len; ++i) {
                match = patterns[i].exec(userAgent);
                if (match !== null) {
                    return match[1];
                }
            }
        }
        return null;
    };

    /**
     * Prepare the version number.
     * @param {String} version
     * @return {Number} the version number as a floating number
     * @private
     */
    function prepareVersionNo(version) {
        var numbers;

        numbers = version.split(/[a-z._ \/\-]/i);
        if (numbers.length === 1) {
            version = numbers[0];
        }
        if (numbers.length > 1) {
            version = numbers[0] + '.';
            numbers.shift();
            version += numbers.join('');
        }
        return Number(version);
    };

    /**
     * rules 와 맞는 값을 찾는다.
     */
    function findMatch(rules, userAgent) {
        var key;
        for (key in rules) {
            if (hasOwnProp.call(rules, key)) {
                if (rules[key].test(userAgent)) {
                    return key;
                }
            }
        }
        return null;
    }

    /**
     * iOS 여부 판단
     * @returns {boolean}
     */
    function isIOS() {
        return getOS() === 'iOS';
    }

    /**
     * 안드로이드 여부 판단
     * @returns {boolean}
     */
    function isAndroid() {
        return getOS() === 'AndroidOS';
    }

    /**
     * 정규식으로 전환한다
     * @param object
     */
    function convertToRegExp(object) {
        for (var key in object) {
            if (hasOwnProp.call(object, key)) {
                object[key] = new RegExp(object[key], 'i');
            }
        }
    }

    exports.app = {
        userAgent: getUserAgent,
        getOS: getOS,
        ua: ua,
        device: findMatch(mobileRegText.phones, ua),
        version: getVersion,
        ios: isIOS(),
        android: isAndroid()
    };

})(window);
/**********
 * mc.js
 **********/

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