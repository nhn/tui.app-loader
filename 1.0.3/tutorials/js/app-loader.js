(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
var AppLoader = require('./src/js/appLoader');
var m = tui.util.defineNamespace('tui.component.m');

m.AppLoader = AppLoader;

},{"./src/js/appLoader":3}],2:[function(require,module,exports){
/**
* @fileoverview The extractor and detector user agent by device info.
* @dependency code-snippet.js, appLoader.js
* @author NHN Entertain ment. FE dev team.
*/
'use strict';
/**
 * @constructor
 */
var AgentDetector = tui.util.defineClass(/**@lends AgentDetector.prototype */{
    cache: {},
    /**
     * @link https://github.com/hgoebl/mobile-detect.js
     * @license https://github.com/hgoebl/mobile-detect.js/blob/master/LICENSE
     **/
     
    /**
     * Each device info and os reg string
     */
    mobileRegText: {
        'phones': {
            'iPhone': '\\biPhone\\b|\\biPod\\b',
            'BlackBerry': 'BlackBerry|\\bBB10\\b|rim[0-9]+',
            'HTC': 'HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m',
            'Nexus': 'Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6',
            'Dell': 'Dell.*Streak|Dell.*Aero|Dell.*Venue|DELL.*Venue Pro|Dell Flash|Dell Smoke|Dell Mini 3iX|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b',
            'Motorola': 'Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925',
            'Samsung': 'Samsung|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8',
            'LG': '\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802)',
            'Sony': 'SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533',
            'Asus': 'Asus.*Galaxy|PadFone.*Mobile',
            'Micromax': 'Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b',
            'Palm': 'PalmSource|Palm',
            'Vertu': 'Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature',
            'Pantech': 'PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790',
            'Fly': 'IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250',
            'Wiko': 'KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM',
            'iMobile': 'i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)',
            'SimValley': '\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b',
            'Wolfgang': 'AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q',
            'Alcatel': 'Alcatel',
            'Nintendo': 'Nintendo 3DS',
            'Amoi': 'Amoi',
            'INQ': 'INQ',
            'GenericPhone': 'Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser'
        },
        'oss': {
            'AndroidOS': 'Android',
            'BlackBerryOS': 'blackberry|\\bBB10\\b|rim tablet os',
            'PalmOS': 'PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino',
            'SymbianOS': 'Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b',
            'WindowsMobileOS': 'Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;',
            'WindowsPhoneOS': 'Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;',
            'iOS': '\\biPhone.*Mobile|\\biPod|\\biPad',
            'MeeGoOS': 'MeeGo',
            'MaemoOS': 'Maemo',
            'JavaOS': 'J2ME\/|\\bMIDP\\b|\\bCLDC\\b',
            'webOS': 'webOS|hpwOS',
            'badaOS': '\\bBada\\b',
            'BREWOS': 'BREW'
        },
        'uas': {
            'Chrome': '\\bCrMo\\b|CriOS|Android.*Chrome\/[.0-9]* (Mobile)?',
            'Dolfin': '\\bDolfin\\b',
            'Opera': 'Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR\/[0-9.]+|Coast\/[0-9.]+',
            'Skyfire': 'Skyfire',
            'IE': 'IEMobile|MSIEMobile',
            'Firefox': 'fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile',
            'Bolt': 'bolt',
            'TeaShark': 'teashark',
            'Blazer': 'Blazer',
            'Safari': 'Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari',
            'Tizen': 'Tizen',
            'UCBrowser': 'UC.*Browser|UCWEB',
            'baiduboxapp': 'baiduboxapp',
            'baidubrowser': 'baidubrowser',
            'DiigoBrowser': 'DiigoBrowser',
            'Puffin': 'Puffin',
            'Mercury': '\\bMercury\\b',
            'ObigoBrowser': 'Obigo',
            'NetFront': 'NF-Browser',
            'GenericBrowser': 'NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger'
        },
        'props': {
            'Mobile': 'Mobile\/[VER]',
            'Build': 'Build\/[VER]',
            'Version': 'Version\/[VER]',
            'VendorID': 'VendorID\/[VER]',
            'iPad': 'iPad.*CPU[a-z ]+[VER]',
            'iPhone': 'iPhone.*CPU[a-z ]+[VER]',
            'iPod': 'iPod.*CPU[a-z ]+[VER]',
            'Kindle': 'Kindle\/[VER]',
            'Chrome': [
                'Chrome\/[VER]',
                'CriOS\/[VER]',
                'CrMo\/[VER]'
            ],
            'Coast': [
                'Coast\/[VER]'
            ],
            'Dolfin': 'Dolfin\/[VER]',
            'Firefox': 'Firefox\/[VER]',
            'Fennec': 'Fennec\/[VER]',
            'IE': [
                'IEMobile\/[VER];',
                'IEMobile [VER]',
                'MSIE [VER];'
            ],
            'NetFront': 'NetFront\/[VER]',
            'NokiaBrowser': 'NokiaBrowser\/[VER]',
            'Opera': [
                ' OPR\/[VER]',
                'Opera Mini\/[VER]',
                'Version\/[VER]'
            ],
            'Opera Mini': 'Opera Mini\/[VER]',
            'Opera Mobi': 'Version\/[VER]',
            'UC Browser': 'UC Browser[VER]',
            'MQQBrowser': 'MQQBrowser\/[VER]',
            'MicroMessenger': 'MicroMessenger\/[VER]',
            'baiduboxapp': 'baiduboxapp\/[VER]',
            'baidubrowser': 'baidubrowser\/[VER]',
            'Iron': 'Iron\/[VER]',
            'Safari': [
                'Version\/[VER]',
                'Safari\/[VER]'
            ],
            'Skyfire': 'Skyfire\/[VER]',
            'Tizen': 'Tizen\/[VER]',
            'Webkit': 'webkit[ \/][VER]',
            'Gecko': 'Gecko\/[VER]',
            'Trident': 'Trident\/[VER]',
            'Presto': 'Presto\/[VER]',
            'iOS': ' \\bi?OS\\b [VER][ ;]{1}',
            'Android': 'Android [VER]',
            'BlackBerry': [
                'BlackBerry[\\w]+\/[VER]',
                'BlackBerry.*Version\/[VER]',
                'Version\/[VER]'
            ],
            'BREW': 'BREW [VER]',
            'Java': 'Java\/[VER]',
            'Windows Phone OS': [
                'Windows Phone OS [VER]',
                'Windows Phone [VER]'
            ],
            'Windows Phone': 'Windows Phone [VER]',
            'Windows CE': 'Windows CE\/[VER]',
            'Windows NT': 'Windows NT [VER]',
            'Symbian': [
                'SymbianOS\/[VER]',
                'Symbian\/[VER]'
            ],
            'webOS': [
                'webOS\/[VER]',
                'hpwOS\/[VER];'
            ]
        }
    },

    /**
     * Browser userAgent
     */
    ua: window.navigator.userAgent,

    /**
     * Initialize
     */
    init: function() {
        var rules;
        this.convert();
        rules = this.mobileRegText;
        rules.oss0 = {
            WindowsPhoneOS: rules.oss.WindowsPhoneOS,
            WindowsMobileOS: rules.oss.WindowsMobileOS
        };
        this.device =  this._findMatch(rules.phones, this.ua);
        this.ios = this.isIOS();
        this.android = this.isAndroid();
    },

    /**
     * Convert device, os, browser info to reg edit.
     */
    convert: function() {
        var rule,
            mobileDetectRules = this.mobileRegText;

        this._propConvert();

        for (rule in mobileDetectRules) {
            if (rule !== 'props') {
                this._convertToRegExp(mobileDetectRules[rule]);
            }
        }
    },

    /**
     * Convert property by each invironment
     * @private
     */
    _propConvert: function() {
        var key,
            values,
            value,
            i,
            len,
            verPos,
            hasOwnProp = Object.prototype.hasOwnProperty,
            rules = this.mobileRegText.props;

        for (key in rules) {
            if (hasOwnProp.call(rules, key)) {
                values = rules[key];
                if (!tui.util.isArray(values)) {
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
                rules[key] = values;
            }
        }
    },

    /**
     * Get userAgent
     */
    userAgent: function() {
        if (tui.util.isUndefined(this.cache.userAgent)) {
            this.cache.userAgent = this._findMatch(this.mobileRegText.uas, this.ua);
        }
        return this.cache.userAgent;
    },

    /**
     * Returns all detected user-agent strings.
     * <br>
     * The array is empty or contains one or more of following keys:<br>
     * <br><tt>Chrome, Dolfin, Opera, Skyfire, IE, Firefox, Bolt, TeaShark, Blazer, Safari,
     * Tizen, UCBrowser, baiduboxapp, baidubrowser, DiigoBrowser, Puffin, Mercury,
     * ObigoBrowser, NetFront, GenericBrowser</tt><br>
     * <br>
     * In most cases calling {@link MobileDetect#userAgent} will be sufficient. But there are rare
     * cases where a mobile device pretends to be more than one particular browser. You can get the
     * list of all matches with {@link MobileDetect#userAgents} or check for a particular value by
     * providing one of the defined keys as first argument to {@link MobileDetect#is}.
     *
     * @returns {Array} the array of detected user-agent keys or <tt>[]</tt>
     * @function MobileDetect#userAgents
     */
    userAgents: function () {
        if (tui.util.isUndefined(this.cache.userAgents)) {
            this.cache.userAgents = this._findMatches(this.mobileRegText.uas, this.ua);
        }
        return this.cache.userAgents;
    },

    /**
     * Conver to reg exp
     * @param object
     * @private
     */
    _convertToRegExp: function(object) {
        var hasOwnProp = Object.prototype.hasOwnProperty,
            key;
        for (key in object) {
            if (hasOwnProp.call(object, key)) {
                object[key] = new RegExp(object[key], 'i');
            }
        }
    },

    /**
     * Find OS
     * @returns {*}
     */
    getOS: function() {
        return this._findMatch(this.mobileRegText.oss0, this.ua) ||
            this._findMatch(this.mobileRegText.oss, this.ua);
    },

    /**
     * Find match useragent
     * @private
     */
    _findMatch: function(rules, userAgent) {
        var key,
            hasOwnProp = Object.prototype.hasOwnProperty;
        for (key in rules) {
            if (hasOwnProp.call(rules, key)) {
                if (rules[key].test(userAgent)) {
                    return key;
                }
            }
        }
        return null;
    },

    /**
     * Test userAgent string against a set of rules and return an array of matched keys.
     * @param {Object} rules (key is String, value is RegExp)
     * @param {String} userAgent the navigator.userAgent (or HTTP-Header 'User-Agent').
     * @returns {Array} an array of matched keys, may be empty when there is no match, but not <tt>null</tt>
     * @private
     */
    _findMatches: function(rules, userAgent) {
        var result = [],
            hasOwnProp = Object.prototype.hasOwnProperty;
        for (var key in rules) {
            if (hasOwnProp.call(rules, key)) {
                if (rules[key].test(userAgent)) {
                    result.push(key);
                }
            }
        }
        return result;
    },

    /**
     * Find version
     * @returns {*}
     */
    version: function(propertyName) {
        var version = this._getVersionStr(propertyName, this.ua);
        return version ? this._prepareVersionNo(version) : NaN;
    },

    /**
     * Check the version of the given property in the User-Agent.
     * @param {String} propertyName
     * @param {String} userAgent
     * @return {String} version or <tt>null</tt> if version not found
     * @private
     */
    _getVersionStr: function(propertyName, userAgent) {
        var props = this.mobileRegText.props,
            patterns,
            i,
            len,
            match,
            hasOwnProp = Object.prototype.hasOwnProperty;

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
    },

    /**
     * Prepare the version number.
     * @param {String} version
     * @return {Number} the version number as a floating number
     * @private
     */
    _prepareVersionNo: function(version) {
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
    },

    /**
     * Whether iOS or not
     * @returns {boolean}
     */
    isIOS: function() {
        return this.getOS() === 'iOS';
    },

    /**
     * Whether Android or not
     * @returns {boolean}
     */
    isAndroid: function() {
        return this.getOS() === 'AndroidOS';
    }
});

module.exports =  AgentDetector;

},{}],3:[function(require,module,exports){
/**
 * @fileoverview Load native app or move to install page
 * @dependency code-snippet.js, detectors.js, agentDetector.js
 * @author NHN Ent. FE dev team.<dl_javascript@nhnent.com>
 */
'use strict';
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
    /*****************
     * static members
     *****************/
    static:{
        /**
         * Get first user agent (it will be browser name)
         * @api
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
         * @api
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
         * @api
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
         * @api
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

    /****************
     * member fields
     ****************/

    /**
     * browser, device detector
     */
    detector: {},
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
            scheme: '',
            url: ''
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
     * @api
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

},{"./agentDetector":2,"./detectors":4,"./etcDetectors":5,"./iosDetectors":6}],4:[function(require,module,exports){
/**
 * @fileoverview Mixin modules
 * @dependency code-snippet.js, appLoader.js
 * @author NHN Ent. FE dev team.<dl_javascript@nhnent.com>
 */
'use strict';
/**
 * @namespace Detector
 */
var Detector = {
    /**
     * for timer
     */
    TIMEOUT: {
        IOS: 2000,
        ANDROID: 800,
        INTERVAL: 100
    },

    /**
     * Id for support frame
     */
    SUPPORT_FRAME_ID: 'tui-support-frame',

    /**
     * Move page
     * @param {string} url - URL
     * @memberof Detector
     */
    moveTo: function(url) {
        top.location.href = url;
    },

    /**
     * Call app by iframe
     * @param {string} url - App url
     * @returns {HTMLElement} IFrame
     */
    runAppWithIframe: function (url) {
        var self = this,
            iframe = self.createSupportFrame();

        iframe.src = url;
        document.body.appendChild(iframe);
        return iframe;
    },

    /**
     * Create iframe
     * @returns {HTMLElement} IFrame
     */
    createSupportFrame: function () {
        var iframe = document.createElement('iframe');
        tui.util.extend(iframe, {
            id: this.SUPPORT_FRAME_ID,
            frameborder: '0',
            width: '0',
            height: '0'
        });
        iframe.style.display = 'none';
        return iframe;
    },

    /**
     * Defer call callback
     * @param {function} callback A callback
     * @param {number} time A delay time
     * @returns {number|undefined} Timer id
     */
    deferCallback: function (callback, time) {
        var clickedAt = new Date().getTime(),
            now,
            self = this;

        if (!tui.util.isFunction(callback)) {
            return;
        }

        return setTimeout(function () {
            now = new Date().getTime();
            if (self.isPageVisibility() && now - clickedAt < time + self.TIMEOUT.INTERVAL) {
                callback();
            }
        }, time);
    },

    /**
     * check a webpage is visible or in focus
     * @returns {boolean} Page visibility
     */
    isPageVisibility: function () {
        if (tui.util.isExisty(document.hidden)) {
            return !document.hidden;
        }
        if (tui.util.isExisty(document.webkitHidden)) {
            return !document.webkitHidden;
        }
        return true;
    }
};

/****************
 * Android series
 ****************/

/**
 * Android intent less
 * @namespace Detector.androidSchemeDetector
 */
Detector.androidSchemeDetector = tui.util.extend({
    /**
     * detector type
     * @memberof Detector.androidSchemeDetector
     */
    type: 'scheme',

    /**
     * Run detector
     * @deprecated
     * @param {object} context - Data for running
     * @memberof Detector.androidSchemeDetector
     */
    run: function(context) {
        var notFoundCallback = context.notFoundCallback;

        if (notFoundCallback) {
            this.deferCallback(notFoundCallback, this.TIMEOUT.ANDROID);
        }
        this.runAppWithIframe(context.urlScheme);
    }
}, Detector);


/**
 * Android intent
 * @namespace Detector.androidIntentDetector
 */
Detector.androidIntentDetector = tui.util.extend({
    /**
     * detector type
     * @memberof Detector.androidIntentDetector
     */
    type: 'intent',

    // Force iframe
    launchViaIframe: function(intentURI, notFoundCallback, onErrorIframe) {
        var iframe = this.runAppWithIframe(intentURI), // Launch app via iframe
            timeoutId = this.deferCallback(notFoundCallback, this.TIMEOUT.ANDROID);

        setTimeout(function() {
            try {
                // Whether broswer supports intentURI with iframe and without error.
                if (iframe && iframe.contentDocument.body) {
                    document.body.removeChild(iframe);
                }
            } catch (e) {
                // If browser caught an error(accessing to error page in iframe),
                //  this component cannot judge the app is installed or not.
                document.body.removeChild(iframe);
                clearTimeout(timeoutId);
                if (tui.util.isFunction(onErrorIframe)) {
                    onErrorIframe();
                }
            }
        }, 100);
    },

    /**
     * Run detector
     * @param {object} context - Data for running
     * @memberof Detector.androidIntentDetector
     */
    run: function(context) {
        var notFoundCallback = context.notFoundCallback,
            intentURI = context.intentURI;

        if (context.useIframe) {
            this.launchViaIframe(intentURI, notFoundCallback, context.onErrorIframe);
        } else {
            this.moveTo(intentURI);
            this.deferCallback(notFoundCallback, this.TIMEOUT.ANDROID);
        }
    }
}, Detector);
module.exports = Detector;

},{}],5:[function(require,module,exports){
/**
 * @fileoverview Etc not support invironment
 * @dependency code-snippet.js
 * @author NHN Ent. FE dev team.<dl_javascript@nhnent.com>
 */
'use strict';
/**
 * @namespace EtcDetector
 */
var EtcDetector = {
    /**
     * @memberof EtcDetector
     */
    type: 'etc',
    /**
     * @memberof EtcDetector
     */
    run: function() {
    }
};
module.exports = EtcDetector;

},{}],6:[function(require,module,exports){
/**
 * @fileoverview iOS Mixin modules
 * @dependency code-snippet.js, appLoader.js
 * @author NHN Ent. FE dev team.<dl_javascript@nhnent.com>
 */
 'use strict';
var Detector = require('./detectors');

/**
 * @namespace iOSDetector
 */
var iOSDetector = tui.util.extend({
    /**
     * detector type
     * @memberof iOSDetector
     */
    type: 'ios',

    /**
     * visiblitychange event
     * @memberof iOSDetector
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
     *  pagehide event
     *  @memberof iOSDetector
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
}, Detector);

/**
 * ios old detector
 * @namespace iOSDetector.iosOlderDetector
 */
iOSDetector.iosOlderDetector = tui.util.extend({
    /**
     * detector Run
     * @param {object} context Data for app loading
     * @memberof iOSDetector.iosOlderDetector
     */
    run: function(context) {
        var storeURL = context.iosStoreURL,
            callback = context.notFoundCallback || tui.util.bind(this.moveTo, this, storeURL);

        this.tid = this.deferCallback(callback, this.TIMEOUT.IOS);
        this.bindPagehideEvent();
        this.runAppWithIframe(context.urlScheme);
    }
}, iOSDetector);

/**
 * ios recent detector
 * @namespace iOSDetector.iosRecentDetector
 */
iOSDetector.iosRecentDetector = tui.util.extend({
    /**
     * detector run
     * @param {object} context Data for app loading
     * @memberof iOSDetector.iosRecentDetector
     */
    run: function(context) {
        var storeURL = context.iosStoreURL,
            notFoundCallback = context.notFoundCallback,
            callback = notFoundCallback || tui.util.bind(this.moveTo, this, storeURL);

        this.tid = this.deferCallback(callback, this.TIMEOUT.IOS);
        this.bindVisibilityChangeEvent();
        this.runAppWithIframe(context.urlScheme);
    }
}, iOSDetector);

/**
 * ios recent but safari prevent to call application via iframe src.
 */
iOSDetector.iosFixDetector = tui.util.extend({
    /**
     * detector run
     * @param {object} context Data for app loading
     * @memberof iOSDetector.iosFixDetector
     */
    run: function(context) {
        var storeURL = context.iosStoreURL,
            notFoundCallback = context.notFoundCallback,
            callback = notFoundCallback || tui.util.bind(this.moveTo, this, storeURL);

        if (context.universalLink) {
            this.moveTo(context.universalLink);
        } else {
            this.tid = this.deferCallback(callback, this.TIMEOUT.IOS);
            this.bindVisibilityChangeEvent();
            this.moveTo(context.urlScheme);
        }
    }
}, iOSDetector);

module.exports = iOSDetector;

},{"./detectors":4}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsInNyYy9qcy9hZ2VudERldGVjdG9yLmpzIiwic3JjL2pzL2FwcExvYWRlci5qcyIsInNyYy9qcy9kZXRlY3RvcnMuanMiLCJzcmMvanMvZXRjRGV0ZWN0b3JzLmpzIiwic3JjL2pzL2lvc0RldGVjdG9ycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcbnZhciBBcHBMb2FkZXIgPSByZXF1aXJlKCcuL3NyYy9qcy9hcHBMb2FkZXInKTtcbnZhciBtID0gdHVpLnV0aWwuZGVmaW5lTmFtZXNwYWNlKCd0dWkuY29tcG9uZW50Lm0nKTtcblxubS5BcHBMb2FkZXIgPSBBcHBMb2FkZXI7XG4iLCIvKipcbiogQGZpbGVvdmVydmlldyBUaGUgZXh0cmFjdG9yIGFuZCBkZXRlY3RvciB1c2VyIGFnZW50IGJ5IGRldmljZSBpbmZvLlxuKiBAZGVwZW5kZW5jeSBjb2RlLXNuaXBwZXQuanMsIGFwcExvYWRlci5qc1xuKiBAYXV0aG9yIE5ITiBFbnRlcnRhaW4gbWVudC4gRkUgZGV2IHRlYW0uXG4qL1xuJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIEFnZW50RGV0ZWN0b3IgPSB0dWkudXRpbC5kZWZpbmVDbGFzcygvKipAbGVuZHMgQWdlbnREZXRlY3Rvci5wcm90b3R5cGUgKi97XG4gICAgY2FjaGU6IHt9LFxuICAgIC8qKlxuICAgICAqIEBsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9oZ29lYmwvbW9iaWxlLWRldGVjdC5qc1xuICAgICAqIEBsaWNlbnNlIGh0dHBzOi8vZ2l0aHViLmNvbS9oZ29lYmwvbW9iaWxlLWRldGVjdC5qcy9ibG9iL21hc3Rlci9MSUNFTlNFXG4gICAgICoqL1xuICAgICBcbiAgICAvKipcbiAgICAgKiBFYWNoIGRldmljZSBpbmZvIGFuZCBvcyByZWcgc3RyaW5nXG4gICAgICovXG4gICAgbW9iaWxlUmVnVGV4dDoge1xuICAgICAgICAncGhvbmVzJzoge1xuICAgICAgICAgICAgJ2lQaG9uZSc6ICdcXFxcYmlQaG9uZVxcXFxifFxcXFxiaVBvZFxcXFxiJyxcbiAgICAgICAgICAgICdCbGFja0JlcnJ5JzogJ0JsYWNrQmVycnl8XFxcXGJCQjEwXFxcXGJ8cmltWzAtOV0rJyxcbiAgICAgICAgICAgICdIVEMnOiAnSFRDfEhUQy4qKFNlbnNhdGlvbnxFdm98VmlzaW9ufEV4cGxvcmVyfDY4MDB8ODEwMHw4OTAwfEE3MjcyfFM1MTBlfEMxMTBlfExlZ2VuZHxEZXNpcmV8VDgyODIpfEFQWDUxNUNLVHxRdGVrOTA5MHxBUEE5MjkyS1R8SERfbWluaXxTZW5zYXRpb24uKlo3MTBlfFBHODYxMDB8WjcxNWV8RGVzaXJlLiooQTgxODF8SEQpfEFEUjYyMDB8QURSNjQwMEx8QURSNjQyNXwwMDFIVHxJbnNwaXJlIDRHfEFuZHJvaWQuKlxcXFxiRVZPXFxcXGJ8VC1Nb2JpbGUgRzF8WjUyMG0nLFxuICAgICAgICAgICAgJ05leHVzJzogJ05leHVzIE9uZXxOZXh1cyBTfEdhbGF4eS4qTmV4dXN8QW5kcm9pZC4qTmV4dXMuKk1vYmlsZXxOZXh1cyA0fE5leHVzIDV8TmV4dXMgNicsXG4gICAgICAgICAgICAnRGVsbCc6ICdEZWxsLipTdHJlYWt8RGVsbC4qQWVyb3xEZWxsLipWZW51ZXxERUxMLipWZW51ZSBQcm98RGVsbCBGbGFzaHxEZWxsIFNtb2tlfERlbGwgTWluaSAzaVh8WENEMjh8WENEMzV8XFxcXGIwMDFETFxcXFxifFxcXFxiMTAxRExcXFxcYnxcXFxcYkdTMDFcXFxcYicsXG4gICAgICAgICAgICAnTW90b3JvbGEnOiAnTW90b3JvbGF8RFJPSURYfERST0lEIEJJT05JQ3xcXFxcYkRyb2lkXFxcXGIuKkJ1aWxkfEFuZHJvaWQuKlhvb218SFJJMzl8TU9ULXxBMTI2MHxBMTY4MHxBNTU1fEE4NTN8QTg1NXxBOTUzfEE5NTV8QTk1NnxNb3Rvcm9sYS4qRUxFQ1RSSUZZfE1vdG9yb2xhLippMXxpODY3fGk5NDB8TUIyMDB8TUIzMDB8TUI1MDF8TUI1MDJ8TUI1MDh8TUI1MTF8TUI1MjB8TUI1MjV8TUI1MjZ8TUI2MTF8TUI2MTJ8TUI2MzJ8TUI4MTB8TUI4NTV8TUI4NjB8TUI4NjF8TUI4NjV8TUI4NzB8TUU1MDF8TUU1MDJ8TUU1MTF8TUU1MjV8TUU2MDB8TUU2MzJ8TUU3MjJ8TUU4MTF8TUU4NjB8TUU4NjN8TUU4NjV8TVQ2MjB8TVQ3MTB8TVQ3MTZ8TVQ3MjB8TVQ4MTB8TVQ4NzB8TVQ5MTd8TW90b3JvbGEuKlRJVEFOSVVNfFdYNDM1fFdYNDQ1fFhUMzAwfFhUMzAxfFhUMzExfFhUMzE2fFhUMzE3fFhUMzE5fFhUMzIwfFhUMzkwfFhUNTAyfFhUNTMwfFhUNTMxfFhUNTMyfFhUNTM1fFhUNjAzfFhUNjEwfFhUNjExfFhUNjE1fFhUNjgxfFhUNzAxfFhUNzAyfFhUNzExfFhUNzIwfFhUODAwfFhUODA2fFhUODYwfFhUODYyfFhUODc1fFhUODgyfFhUODgzfFhUODk0fFhUOTAxfFhUOTA3fFhUOTA5fFhUOTEwfFhUOTEyfFhUOTI4fFhUOTI2fFhUOTE1fFhUOTE5fFhUOTI1JyxcbiAgICAgICAgICAgICdTYW1zdW5nJzogJ1NhbXN1bmd8U0dILUkzMzd8QkdULVM1MjMwfEdULUIyMTAwfEdULUIyNzAwfEdULUIyNzEwfEdULUIzMjEwfEdULUIzMzEwfEdULUIzNDEwfEdULUIzNzMwfEdULUIzNzQwfEdULUI1NTEwfEdULUI1NTEyfEdULUI1NzIyfEdULUI2NTIwfEdULUI3MzAwfEdULUI3MzIwfEdULUI3MzMwfEdULUI3MzUwfEdULUI3NTEwfEdULUI3NzIyfEdULUI3ODAwfEdULUMzMDEwfEdULUMzMDExfEdULUMzMDYwfEdULUMzMjAwfEdULUMzMjEyfEdULUMzMjEySXxHVC1DMzI2MnxHVC1DMzIyMnxHVC1DMzMwMHxHVC1DMzMwMEt8R1QtQzMzMDN8R1QtQzMzMDNLfEdULUMzMzEwfEdULUMzMzIyfEdULUMzMzMwfEdULUMzMzUwfEdULUMzNTAwfEdULUMzNTEwfEdULUMzNTMwfEdULUMzNjMwfEdULUMzNzgwfEdULUM1MDEwfEdULUM1MjEyfEdULUM2NjIwfEdULUM2NjI1fEdULUM2NzEyfEdULUUxMDUwfEdULUUxMDcwfEdULUUxMDc1fEdULUUxMDgwfEdULUUxMDgxfEdULUUxMDg1fEdULUUxMDg3fEdULUUxMTAwfEdULUUxMTA3fEdULUUxMTEwfEdULUUxMTIwfEdULUUxMTI1fEdULUUxMTMwfEdULUUxMTYwfEdULUUxMTcwfEdULUUxMTc1fEdULUUxMTgwfEdULUUxMTgyfEdULUUxMjAwfEdULUUxMjEwfEdULUUxMjI1fEdULUUxMjMwfEdULUUxMzkwfEdULUUyMTAwfEdULUUyMTIwfEdULUUyMTIxfEdULUUyMTUyfEdULUUyMjIwfEdULUUyMjIyfEdULUUyMjMwfEdULUUyMjMyfEdULUUyMjUwfEdULUUyMzcwfEdULUUyNTUwfEdULUUyNjUyfEdULUUzMjEwfEdULUUzMjEzfEdULUk1NTAwfEdULUk1NTAzfEdULUk1NzAwfEdULUk1ODAwfEdULUk1ODAxfEdULUk2NDEwfEdULUk2NDIwfEdULUk3MTEwfEdULUk3NDEwfEdULUk3NTAwfEdULUk4MDAwfEdULUk4MTUwfEdULUk4MTYwfEdULUk4MTkwfEdULUk4MzIwfEdULUk4MzMwfEdULUk4MzUwfEdULUk4NTMwfEdULUk4NzAwfEdULUk4NzAzfEdULUk4OTEwfEdULUk5MDAwfEdULUk5MDAxfEdULUk5MDAzfEdULUk5MDEwfEdULUk5MDIwfEdULUk5MDIzfEdULUk5MDcwfEdULUk5MDgyfEdULUk5MTAwfEdULUk5MTAzfEdULUk5MjIwfEdULUk5MjUwfEdULUk5MzAwfEdULUk5MzA1fEdULUk5NTAwfEdULUk5NTA1fEdULU0zNTEwfEdULU01NjUwfEdULU03NTAwfEdULU03NjAwfEdULU03NjAzfEdULU04ODAwfEdULU04OTEwfEdULU43MDAwfEdULVMzMTEwfEdULVMzMzEwfEdULVMzMzUwfEdULVMzMzUzfEdULVMzMzcwfEdULVMzNjUwfEdULVMzNjUzfEdULVMzNzcwfEdULVMzODUwfEdULVM1MjEwfEdULVM1MjIwfEdULVM1MjI5fEdULVM1MjMwfEdULVM1MjMzfEdULVM1MjUwfEdULVM1MjUzfEdULVM1MjYwfEdULVM1MjYzfEdULVM1MjcwfEdULVM1MzAwfEdULVM1MzMwfEdULVM1MzUwfEdULVM1MzYwfEdULVM1MzYzfEdULVM1MzY5fEdULVM1MzgwfEdULVM1MzgwRHxHVC1TNTU2MHxHVC1TNTU3MHxHVC1TNTYwMHxHVC1TNTYwM3xHVC1TNTYxMHxHVC1TNTYyMHxHVC1TNTY2MHxHVC1TNTY3MHxHVC1TNTY5MHxHVC1TNTc1MHxHVC1TNTc4MHxHVC1TNTgzMHxHVC1TNTgzOXxHVC1TNjEwMnxHVC1TNjUwMHxHVC1TNzA3MHxHVC1TNzIwMHxHVC1TNzIyMHxHVC1TNzIzMHxHVC1TNzIzM3xHVC1TNzI1MHxHVC1TNzUwMHxHVC1TNzUzMHxHVC1TNzU1MHxHVC1TNzU2MnxHVC1TNzcxMHxHVC1TODAwMHxHVC1TODAwM3xHVC1TODUwMHxHVC1TODUzMHxHVC1TODYwMHxTQ0gtQTMxMHxTQ0gtQTUzMHxTQ0gtQTU3MHxTQ0gtQTYxMHxTQ0gtQTYzMHxTQ0gtQTY1MHxTQ0gtQTc5MHxTQ0gtQTc5NXxTQ0gtQTg1MHxTQ0gtQTg3MHxTQ0gtQTg5MHxTQ0gtQTkzMHxTQ0gtQTk1MHxTQ0gtQTk3MHxTQ0gtQTk5MHxTQ0gtSTEwMHxTQ0gtSTExMHxTQ0gtSTQwMHxTQ0gtSTQwNXxTQ0gtSTUwMHxTQ0gtSTUxMHxTQ0gtSTUxNXxTQ0gtSTYwMHxTQ0gtSTczMHxTQ0gtSTc2MHxTQ0gtSTc3MHxTQ0gtSTgzMHxTQ0gtSTkxMHxTQ0gtSTkyMHxTQ0gtSTk1OXxTQ0gtTEMxMXxTQ0gtTjE1MHxTQ0gtTjMwMHxTQ0gtUjEwMHxTQ0gtUjMwMHxTQ0gtUjM1MXxTQ0gtUjQwMHxTQ0gtUjQxMHxTQ0gtVDMwMHxTQ0gtVTMxMHxTQ0gtVTMyMHxTQ0gtVTM1MHxTQ0gtVTM2MHxTQ0gtVTM2NXxTQ0gtVTM3MHxTQ0gtVTM4MHxTQ0gtVTQxMHxTQ0gtVTQzMHxTQ0gtVTQ1MHxTQ0gtVTQ2MHxTQ0gtVTQ3MHxTQ0gtVTQ5MHxTQ0gtVTU0MHxTQ0gtVTU1MHxTQ0gtVTYyMHxTQ0gtVTY0MHxTQ0gtVTY1MHxTQ0gtVTY2MHxTQ0gtVTcwMHxTQ0gtVTc0MHxTQ0gtVTc1MHxTQ0gtVTgxMHxTQ0gtVTgyMHxTQ0gtVTkwMHxTQ0gtVTk0MHxTQ0gtVTk2MHxTQ1MtMjZVQ3xTR0gtQTEwN3xTR0gtQTExN3xTR0gtQTEyN3xTR0gtQTEzN3xTR0gtQTE1N3xTR0gtQTE2N3xTR0gtQTE3N3xTR0gtQTE4N3xTR0gtQTE5N3xTR0gtQTIyN3xTR0gtQTIzN3xTR0gtQTI1N3xTR0gtQTQzN3xTR0gtQTUxN3xTR0gtQTU5N3xTR0gtQTYzN3xTR0gtQTY1N3xTR0gtQTY2N3xTR0gtQTY4N3xTR0gtQTY5N3xTR0gtQTcwN3xTR0gtQTcxN3xTR0gtQTcyN3xTR0gtQTczN3xTR0gtQTc0N3xTR0gtQTc2N3xTR0gtQTc3N3xTR0gtQTc5N3xTR0gtQTgxN3xTR0gtQTgyN3xTR0gtQTgzN3xTR0gtQTg0N3xTR0gtQTg2N3xTR0gtQTg3N3xTR0gtQTg4N3xTR0gtQTg5N3xTR0gtQTkyN3xTR0gtQjEwMHxTR0gtQjEzMHxTR0gtQjIwMHxTR0gtQjIyMHxTR0gtQzEwMHxTR0gtQzExMHxTR0gtQzEyMHxTR0gtQzEzMHxTR0gtQzE0MHxTR0gtQzE2MHxTR0gtQzE3MHxTR0gtQzE4MHxTR0gtQzIwMHxTR0gtQzIwN3xTR0gtQzIxMHxTR0gtQzIyNXxTR0gtQzIzMHxTR0gtQzQxN3xTR0gtQzQ1MHxTR0gtRDMwN3xTR0gtRDM0N3xTR0gtRDM1N3xTR0gtRDQwN3xTR0gtRDQxNXxTR0gtRDc4MHxTR0gtRDgwN3xTR0gtRDk4MHxTR0gtRTEwNXxTR0gtRTIwMHxTR0gtRTMxNXxTR0gtRTMxNnxTR0gtRTMxN3xTR0gtRTMzNXxTR0gtRTU5MHxTR0gtRTYzNXxTR0gtRTcxNXxTR0gtRTg5MHxTR0gtRjMwMHxTR0gtRjQ4MHxTR0gtSTIwMHxTR0gtSTMwMHxTR0gtSTMyMHxTR0gtSTU1MHxTR0gtSTU3N3xTR0gtSTYwMHxTR0gtSTYwN3xTR0gtSTYxN3xTR0gtSTYyN3xTR0gtSTYzN3xTR0gtSTY3N3xTR0gtSTcwMHxTR0gtSTcxN3xTR0gtSTcyN3xTR0gtaTc0N018U0dILUk3Nzd8U0dILUk3ODB8U0dILUk4Mjd8U0dILUk4NDd8U0dILUk4NTd8U0dILUk4OTZ8U0dILUk4OTd8U0dILUk5MDB8U0dILUk5MDd8U0dILUk5MTd8U0dILUk5Mjd8U0dILUk5Mzd8U0dILUk5OTd8U0dILUoxNTB8U0dILUoyMDB8U0dILUwxNzB8U0dILUw3MDB8U0dILU0xMTB8U0dILU0xNTB8U0dILU0yMDB8U0dILU4xMDV8U0dILU41MDB8U0dILU42MDB8U0dILU42MjB8U0dILU42MjV8U0dILU43MDB8U0dILU43MTB8U0dILVAxMDd8U0dILVAyMDd8U0dILVAzMDB8U0dILVAzMTB8U0dILVA1MjB8U0dILVA3MzV8U0dILVA3Nzd8U0dILVExMDV8U0dILVIyMTB8U0dILVIyMjB8U0dILVIyMjV8U0dILVMxMDV8U0dILVMzMDd8U0dILVQxMDl8U0dILVQxMTl8U0dILVQxMzl8U0dILVQyMDl8U0dILVQyMTl8U0dILVQyMjl8U0dILVQyMzl8U0dILVQyNDl8U0dILVQyNTl8U0dILVQzMDl8U0dILVQzMTl8U0dILVQzMjl8U0dILVQzMzl8U0dILVQzNDl8U0dILVQzNTl8U0dILVQzNjl8U0dILVQzNzl8U0dILVQ0MDl8U0dILVQ0Mjl8U0dILVQ0Mzl8U0dILVQ0NTl8U0dILVQ0Njl8U0dILVQ0Nzl8U0dILVQ0OTl8U0dILVQ1MDl8U0dILVQ1MTl8U0dILVQ1Mzl8U0dILVQ1NTl8U0dILVQ1ODl8U0dILVQ2MDl8U0dILVQ2MTl8U0dILVQ2Mjl8U0dILVQ2Mzl8U0dILVQ2NTl8U0dILVQ2Njl8U0dILVQ2Nzl8U0dILVQ3MDl8U0dILVQ3MTl8U0dILVQ3Mjl8U0dILVQ3Mzl8U0dILVQ3NDZ8U0dILVQ3NDl8U0dILVQ3NTl8U0dILVQ3Njl8U0dILVQ4MDl8U0dILVQ4MTl8U0dILVQ4Mzl8U0dILVQ5MTl8U0dILVQ5Mjl8U0dILVQ5Mzl8U0dILVQ5NTl8U0dILVQ5ODl8U0dILVUxMDB8U0dILVUyMDB8U0dILVU4MDB8U0dILVYyMDV8U0dILVYyMDZ8U0dILVgxMDB8U0dILVgxMDV8U0dILVgxMjB8U0dILVgxNDB8U0dILVg0MjZ8U0dILVg0Mjd8U0dILVg0NzV8U0dILVg0OTV8U0dILVg0OTd8U0dILVg1MDd8U0dILVg2MDB8U0dILVg2MTB8U0dILVg2MjB8U0dILVg2MzB8U0dILVg3MDB8U0dILVg4MjB8U0dILVg4OTB8U0dILVoxMzB8U0dILVoxNTB8U0dILVoxNzB8U0dILVpYMTB8U0dILVpYMjB8U0hXLU0xMTB8U1BILUExMjB8U1BILUE0MDB8U1BILUE0MjB8U1BILUE0NjB8U1BILUE1MDB8U1BILUE1NjB8U1BILUE2MDB8U1BILUE2MjB8U1BILUE2NjB8U1BILUE3MDB8U1BILUE3NDB8U1BILUE3NjB8U1BILUE3OTB8U1BILUE4MDB8U1BILUE4MjB8U1BILUE4NDB8U1BILUE4ODB8U1BILUE5MDB8U1BILUE5NDB8U1BILUE5NjB8U1BILUQ2MDB8U1BILUQ3MDB8U1BILUQ3MTB8U1BILUQ3MjB8U1BILUkzMDB8U1BILUkzMjV8U1BILUkzMzB8U1BILUkzNTB8U1BILUk1MDB8U1BILUk2MDB8U1BILUk3MDB8U1BILUw3MDB8U1BILU0xMDB8U1BILU0yMjB8U1BILU0yNDB8U1BILU0zMDB8U1BILU0zMDV8U1BILU0zMjB8U1BILU0zMzB8U1BILU0zNTB8U1BILU0zNjB8U1BILU0zNzB8U1BILU0zODB8U1BILU01MTB8U1BILU01NDB8U1BILU01NTB8U1BILU01NjB8U1BILU01NzB8U1BILU01ODB8U1BILU02MTB8U1BILU02MjB8U1BILU02MzB8U1BILU04MDB8U1BILU04MTB8U1BILU04NTB8U1BILU05MDB8U1BILU05MTB8U1BILU05MjB8U1BILU05MzB8U1BILU4xMDB8U1BILU4yMDB8U1BILU4yNDB8U1BILU4zMDB8U1BILU40MDB8U1BILVo0MDB8U1dDLUUxMDB8U0NILWk5MDl8R1QtTjcxMDB8R1QtTjcxMDV8U0NILUk1MzV8U00tTjkwMEF8U0dILUkzMTd8U0dILVQ5OTlMfEdULVM1MzYwQnxHVC1JODI2MnxHVC1TNjgwMnxHVC1TNjMxMnxHVC1TNjMxMHxHVC1TNTMxMnxHVC1TNTMxMHxHVC1JOTEwNXxHVC1JODUxMHxHVC1TNjc5ME58U00tRzcxMDV8U00tTjkwMDV8R1QtUzUzMDF8R1QtSTkyOTV8R1QtSTkxOTV8U00tQzEwMXxHVC1TNzM5MnxHVC1TNzU2MHxHVC1CNzYxMHxHVC1JNTUxMHxHVC1TNzU4MnxHVC1TNzUzMEV8R1QtSTg3NTB8U00tRzkwMDZWfFNNLUc5MDA4VnxTTS1HOTAwOUR8U00tRzkwMEF8U00tRzkwMER8U00tRzkwMEZ8U00tRzkwMEh8U00tRzkwMEl8U00tRzkwMEp8U00tRzkwMEt8U00tRzkwMEx8U00tRzkwME18U00tRzkwMFB8U00tRzkwMFI0fFNNLUc5MDBTfFNNLUc5MDBUfFNNLUc5MDBWfFNNLUc5MDBXOCcsXG4gICAgICAgICAgICAnTEcnOiAnXFxcXGJMR1xcXFxiO3xMR1stIF0/KEM4MDB8QzkwMHxFNDAwfEU2MTB8RTkwMHxFLTkwMHxGMTYwfEYxODBLfEYxODBMfEYxODBTfDczMHw4NTV8TDE2MHxMUzc0MHxMUzg0MHxMUzk3MHxMVTYyMDB8TVM2OTB8TVM2OTV8TVM3NzB8TVM4NDB8TVM4NzB8TVM5MTB8UDUwMHxQNzAwfFA3MDV8Vk02OTZ8QVM2ODB8QVM2OTV8QVg4NDB8QzcyOXxFOTcwfEdTNTA1fDI3MnxDMzk1fEU3MzlCS3xFOTYwfEw1NUN8TDc1Q3xMUzY5NnxMUzg2MHxQNzY5Qkt8UDM1MHxQNTAwfFA1MDl8UDg3MHxVTjI3MnxVUzczMHxWUzg0MHxWUzk1MHxMTjI3MnxMTjUxMHxMUzY3MHxMUzg1NXxMVzY5MHxNTjI3MHxNTjUxMHxQNTA5fFA3Njl8UDkzMHxVTjIwMHxVTjI3MHxVTjUxMHxVTjYxMHxVUzY3MHxVUzc0MHxVUzc2MHxVWDI2NXxVWDg0MHxWTjI3MXxWTjUzMHxWUzY2MHxWUzcwMHxWUzc0MHxWUzc1MHxWUzkxMHxWUzkyMHxWUzkzMHxWWDkyMDB8VlgxMTAwMHxBWDg0MEF8TFc3NzB8UDUwNnxQOTI1fFA5OTl8RTYxMnxEOTU1fEQ4MDIpJyxcbiAgICAgICAgICAgICdTb255JzogJ1NvbnlTVHxTb255TFR8U29ueUVyaWNzc29ufFNvbnlFcmljc3NvbkxUMTVpdnxMVDE4aXxFMTBpfExUMjhofExUMjZ3fFNvbnlFcmljc3Nvbk1UMjdpfEM1MzAzfEM2OTAyfEM2OTAzfEM2OTA2fEM2OTQzfEQyNTMzJyxcbiAgICAgICAgICAgICdBc3VzJzogJ0FzdXMuKkdhbGF4eXxQYWRGb25lLipNb2JpbGUnLFxuICAgICAgICAgICAgJ01pY3JvbWF4JzogJ01pY3JvbWF4LipcXFxcYihBMjEwfEE5MnxBODh8QTcyfEExMTF8QTExMFF8QTExNXxBMTE2fEExMTB8QTkwU3xBMjZ8QTUxfEEzNXxBNTR8QTI1fEEyN3xBODl8QTY4fEE2NXxBNTd8QTkwKVxcXFxiJyxcbiAgICAgICAgICAgICdQYWxtJzogJ1BhbG1Tb3VyY2V8UGFsbScsXG4gICAgICAgICAgICAnVmVydHUnOiAnVmVydHV8VmVydHUuKkx0ZHxWZXJ0dS4qQXNjZW50fFZlcnR1LipBeXh0YXxWZXJ0dS4qQ29uc3RlbGxhdGlvbihGfFF1ZXN0KT98VmVydHUuKk1vbmlrYXxWZXJ0dS4qU2lnbmF0dXJlJyxcbiAgICAgICAgICAgICdQYW50ZWNoJzogJ1BBTlRFQ0h8SU0tQTg1MFN8SU0tQTg0MFN8SU0tQTgzMEx8SU0tQTgzMEt8SU0tQTgzMFN8SU0tQTgyMEx8SU0tQTgxMEt8SU0tQTgxMFN8SU0tQTgwMFN8SU0tVDEwMEt8SU0tQTcyNUx8SU0tQTc4MEx8SU0tQTc3NUN8SU0tQTc3MEt8SU0tQTc2MFN8SU0tQTc1MEt8SU0tQTc0MFN8SU0tQTczMFN8SU0tQTcyMEx8SU0tQTcxMEt8SU0tQTY5MEx8SU0tQTY5MFN8SU0tQTY1MFN8SU0tQTYzMEt8SU0tQTYwMFN8VkVHQSBQVEwyMXxQVDAwM3xQODAxMHxBRFI5MTBMfFA2MDMwfFA2MDIwfFA5MDcwfFA0MTAwfFA5MDYwfFA1MDAwfENETTg5OTJ8VFhUODA0NXxBRFI4OTk1fElTMTFQVHxQMjAzMHxQNjAxMHxQODAwMHxQVDAwMnxJUzA2fENETTg5OTl8UDkwNTB8UFQwMDF8VFhUODA0MHxQMjAyMHxQOTAyMHxQMjAwMHxQNzA0MHxQNzAwMHxDNzkwJyxcbiAgICAgICAgICAgICdGbHknOiAnSVEyMzB8SVE0NDR8SVE0NTB8SVE0NDB8SVE0NDJ8SVE0NDF8SVEyNDV8SVEyNTZ8SVEyMzZ8SVEyNTV8SVEyMzV8SVEyNDV8SVEyNzV8SVEyNDB8SVEyODV8SVEyODB8SVEyNzB8SVEyNjB8SVEyNTAnLFxuICAgICAgICAgICAgJ1dpa28nOiAnS0lURSA0R3xISUdIV0FZfEdFVEFXQVl8U1RBSVJXQVl8REFSS1NJREV8REFSS0ZVTEx8REFSS05JR0hUfERBUktNT09OfFNMSURFfFdBWCA0R3xSQUlOQk9XfEJMT09NfFNVTlNFVHxHT0F8TEVOTll8QkFSUll8SUdHWXxPWlpZfENJTksgRklWRXxDSU5LIFBFQVh8Q0lOSyBQRUFYIDJ8Q0lOSyBTTElNfENJTksgU0xJTSAyfENJTksgK3xDSU5LIEtJTkd8Q0lOSyBQRUFYfENJTksgU0xJTXxTVUJMSU0nLFxuICAgICAgICAgICAgJ2lNb2JpbGUnOiAnaS1tb2JpbGUgKElRfGktU1RZTEV8aWRlYXxaQUF8SGl0eiknLFxuICAgICAgICAgICAgJ1NpbVZhbGxleSc6ICdcXFxcYihTUC04MHxYVC05MzB8U1gtMzQwfFhULTkzMHxTWC0zMTB8U1AtMzYwfFNQNjB8U1BULTgwMHxTUC0xMjB8U1BULTgwMHxTUC0xNDB8U1BYLTV8U1BYLTh8U1AtMTAwfFNQWC04fFNQWC0xMilcXFxcYicsXG4gICAgICAgICAgICAnV29sZmdhbmcnOiAnQVQtQjI0RHxBVC1BUzUwSER8QVQtQVM0MFd8QVQtQVM1NUhEfEFULUFTNDVxMnxBVC1CMjZEfEFULUFTNTBRJyxcbiAgICAgICAgICAgICdBbGNhdGVsJzogJ0FsY2F0ZWwnLFxuICAgICAgICAgICAgJ05pbnRlbmRvJzogJ05pbnRlbmRvIDNEUycsXG4gICAgICAgICAgICAnQW1vaSc6ICdBbW9pJyxcbiAgICAgICAgICAgICdJTlEnOiAnSU5RJyxcbiAgICAgICAgICAgICdHZW5lcmljUGhvbmUnOiAnVGFwYXRhbGt8UERBO3xTQUdFTXxcXFxcYm1tcFxcXFxifHBvY2tldHxcXFxcYnBzcFxcXFxifHN5bWJpYW58U21hcnRwaG9uZXxzbWFydGZvbnx0cmVvfHVwLmJyb3dzZXJ8dXAubGlua3x2b2RhZm9uZXxcXFxcYndhcFxcXFxifG5va2lhfFNlcmllczQwfFNlcmllczYwfFM2MHxTb255RXJpY3Nzb258TjkwMHxNQVVJLipXQVAuKkJyb3dzZXInXG4gICAgICAgIH0sXG4gICAgICAgICdvc3MnOiB7XG4gICAgICAgICAgICAnQW5kcm9pZE9TJzogJ0FuZHJvaWQnLFxuICAgICAgICAgICAgJ0JsYWNrQmVycnlPUyc6ICdibGFja2JlcnJ5fFxcXFxiQkIxMFxcXFxifHJpbSB0YWJsZXQgb3MnLFxuICAgICAgICAgICAgJ1BhbG1PUyc6ICdQYWxtT1N8YXZhbnRnb3xibGF6ZXJ8ZWxhaW5lfGhpcHRvcHxwYWxtfHBsdWNrZXJ8eGlpbm8nLFxuICAgICAgICAgICAgJ1N5bWJpYW5PUyc6ICdTeW1iaWFufFN5bWJPU3xTZXJpZXM2MHxTZXJpZXM0MHxTWUItWzAtOV0rfFxcXFxiUzYwXFxcXGInLFxuICAgICAgICAgICAgJ1dpbmRvd3NNb2JpbGVPUyc6ICdXaW5kb3dzIENFLiooUFBDfFNtYXJ0cGhvbmV8TW9iaWxlfFswLTldezN9eFswLTldezN9KXxXaW5kb3cgTW9iaWxlfFdpbmRvd3MgUGhvbmUgWzAtOS5dK3xXQ0U7JyxcbiAgICAgICAgICAgICdXaW5kb3dzUGhvbmVPUyc6ICdXaW5kb3dzIFBob25lIDguMHxXaW5kb3dzIFBob25lIE9TfFhCTFdQN3xadW5lV1A3fFdpbmRvd3MgTlQgNi5bMjNdOyBBUk07JyxcbiAgICAgICAgICAgICdpT1MnOiAnXFxcXGJpUGhvbmUuKk1vYmlsZXxcXFxcYmlQb2R8XFxcXGJpUGFkJyxcbiAgICAgICAgICAgICdNZWVHb09TJzogJ01lZUdvJyxcbiAgICAgICAgICAgICdNYWVtb09TJzogJ01hZW1vJyxcbiAgICAgICAgICAgICdKYXZhT1MnOiAnSjJNRVxcL3xcXFxcYk1JRFBcXFxcYnxcXFxcYkNMRENcXFxcYicsXG4gICAgICAgICAgICAnd2ViT1MnOiAnd2ViT1N8aHB3T1MnLFxuICAgICAgICAgICAgJ2JhZGFPUyc6ICdcXFxcYkJhZGFcXFxcYicsXG4gICAgICAgICAgICAnQlJFV09TJzogJ0JSRVcnXG4gICAgICAgIH0sXG4gICAgICAgICd1YXMnOiB7XG4gICAgICAgICAgICAnQ2hyb21lJzogJ1xcXFxiQ3JNb1xcXFxifENyaU9TfEFuZHJvaWQuKkNocm9tZVxcL1suMC05XSogKE1vYmlsZSk/JyxcbiAgICAgICAgICAgICdEb2xmaW4nOiAnXFxcXGJEb2xmaW5cXFxcYicsXG4gICAgICAgICAgICAnT3BlcmEnOiAnT3BlcmEuKk1pbml8T3BlcmEuKk1vYml8QW5kcm9pZC4qT3BlcmF8TW9iaWxlLipPUFJcXC9bMC05Ll0rfENvYXN0XFwvWzAtOS5dKycsXG4gICAgICAgICAgICAnU2t5ZmlyZSc6ICdTa3lmaXJlJyxcbiAgICAgICAgICAgICdJRSc6ICdJRU1vYmlsZXxNU0lFTW9iaWxlJyxcbiAgICAgICAgICAgICdGaXJlZm94JzogJ2Zlbm5lY3xmaXJlZm94LiptYWVtb3woTW9iaWxlfFRhYmxldCkuKkZpcmVmb3h8RmlyZWZveC4qTW9iaWxlJyxcbiAgICAgICAgICAgICdCb2x0JzogJ2JvbHQnLFxuICAgICAgICAgICAgJ1RlYVNoYXJrJzogJ3RlYXNoYXJrJyxcbiAgICAgICAgICAgICdCbGF6ZXInOiAnQmxhemVyJyxcbiAgICAgICAgICAgICdTYWZhcmknOiAnVmVyc2lvbi4qTW9iaWxlLipTYWZhcml8U2FmYXJpLipNb2JpbGV8TW9iaWxlU2FmYXJpJyxcbiAgICAgICAgICAgICdUaXplbic6ICdUaXplbicsXG4gICAgICAgICAgICAnVUNCcm93c2VyJzogJ1VDLipCcm93c2VyfFVDV0VCJyxcbiAgICAgICAgICAgICdiYWlkdWJveGFwcCc6ICdiYWlkdWJveGFwcCcsXG4gICAgICAgICAgICAnYmFpZHVicm93c2VyJzogJ2JhaWR1YnJvd3NlcicsXG4gICAgICAgICAgICAnRGlpZ29Ccm93c2VyJzogJ0RpaWdvQnJvd3NlcicsXG4gICAgICAgICAgICAnUHVmZmluJzogJ1B1ZmZpbicsXG4gICAgICAgICAgICAnTWVyY3VyeSc6ICdcXFxcYk1lcmN1cnlcXFxcYicsXG4gICAgICAgICAgICAnT2JpZ29Ccm93c2VyJzogJ09iaWdvJyxcbiAgICAgICAgICAgICdOZXRGcm9udCc6ICdORi1Ccm93c2VyJyxcbiAgICAgICAgICAgICdHZW5lcmljQnJvd3Nlcic6ICdOb2tpYUJyb3dzZXJ8T3ZpQnJvd3NlcnxPbmVCcm93c2VyfFR3b25reUJlYW1Ccm93c2VyfFNFTUMuKkJyb3dzZXJ8Rmx5Rmxvd3xNaW5pbW98TmV0RnJvbnR8Tm92YXJyYS1WaXNpb258TVFRQnJvd3NlcnxNaWNyb01lc3NlbmdlcidcbiAgICAgICAgfSxcbiAgICAgICAgJ3Byb3BzJzoge1xuICAgICAgICAgICAgJ01vYmlsZSc6ICdNb2JpbGVcXC9bVkVSXScsXG4gICAgICAgICAgICAnQnVpbGQnOiAnQnVpbGRcXC9bVkVSXScsXG4gICAgICAgICAgICAnVmVyc2lvbic6ICdWZXJzaW9uXFwvW1ZFUl0nLFxuICAgICAgICAgICAgJ1ZlbmRvcklEJzogJ1ZlbmRvcklEXFwvW1ZFUl0nLFxuICAgICAgICAgICAgJ2lQYWQnOiAnaVBhZC4qQ1BVW2EteiBdK1tWRVJdJyxcbiAgICAgICAgICAgICdpUGhvbmUnOiAnaVBob25lLipDUFVbYS16IF0rW1ZFUl0nLFxuICAgICAgICAgICAgJ2lQb2QnOiAnaVBvZC4qQ1BVW2EteiBdK1tWRVJdJyxcbiAgICAgICAgICAgICdLaW5kbGUnOiAnS2luZGxlXFwvW1ZFUl0nLFxuICAgICAgICAgICAgJ0Nocm9tZSc6IFtcbiAgICAgICAgICAgICAgICAnQ2hyb21lXFwvW1ZFUl0nLFxuICAgICAgICAgICAgICAgICdDcmlPU1xcL1tWRVJdJyxcbiAgICAgICAgICAgICAgICAnQ3JNb1xcL1tWRVJdJ1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICdDb2FzdCc6IFtcbiAgICAgICAgICAgICAgICAnQ29hc3RcXC9bVkVSXSdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAnRG9sZmluJzogJ0RvbGZpblxcL1tWRVJdJyxcbiAgICAgICAgICAgICdGaXJlZm94JzogJ0ZpcmVmb3hcXC9bVkVSXScsXG4gICAgICAgICAgICAnRmVubmVjJzogJ0Zlbm5lY1xcL1tWRVJdJyxcbiAgICAgICAgICAgICdJRSc6IFtcbiAgICAgICAgICAgICAgICAnSUVNb2JpbGVcXC9bVkVSXTsnLFxuICAgICAgICAgICAgICAgICdJRU1vYmlsZSBbVkVSXScsXG4gICAgICAgICAgICAgICAgJ01TSUUgW1ZFUl07J1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICdOZXRGcm9udCc6ICdOZXRGcm9udFxcL1tWRVJdJyxcbiAgICAgICAgICAgICdOb2tpYUJyb3dzZXInOiAnTm9raWFCcm93c2VyXFwvW1ZFUl0nLFxuICAgICAgICAgICAgJ09wZXJhJzogW1xuICAgICAgICAgICAgICAgICcgT1BSXFwvW1ZFUl0nLFxuICAgICAgICAgICAgICAgICdPcGVyYSBNaW5pXFwvW1ZFUl0nLFxuICAgICAgICAgICAgICAgICdWZXJzaW9uXFwvW1ZFUl0nXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgJ09wZXJhIE1pbmknOiAnT3BlcmEgTWluaVxcL1tWRVJdJyxcbiAgICAgICAgICAgICdPcGVyYSBNb2JpJzogJ1ZlcnNpb25cXC9bVkVSXScsXG4gICAgICAgICAgICAnVUMgQnJvd3Nlcic6ICdVQyBCcm93c2VyW1ZFUl0nLFxuICAgICAgICAgICAgJ01RUUJyb3dzZXInOiAnTVFRQnJvd3NlclxcL1tWRVJdJyxcbiAgICAgICAgICAgICdNaWNyb01lc3Nlbmdlcic6ICdNaWNyb01lc3NlbmdlclxcL1tWRVJdJyxcbiAgICAgICAgICAgICdiYWlkdWJveGFwcCc6ICdiYWlkdWJveGFwcFxcL1tWRVJdJyxcbiAgICAgICAgICAgICdiYWlkdWJyb3dzZXInOiAnYmFpZHVicm93c2VyXFwvW1ZFUl0nLFxuICAgICAgICAgICAgJ0lyb24nOiAnSXJvblxcL1tWRVJdJyxcbiAgICAgICAgICAgICdTYWZhcmknOiBbXG4gICAgICAgICAgICAgICAgJ1ZlcnNpb25cXC9bVkVSXScsXG4gICAgICAgICAgICAgICAgJ1NhZmFyaVxcL1tWRVJdJ1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICdTa3lmaXJlJzogJ1NreWZpcmVcXC9bVkVSXScsXG4gICAgICAgICAgICAnVGl6ZW4nOiAnVGl6ZW5cXC9bVkVSXScsXG4gICAgICAgICAgICAnV2Via2l0JzogJ3dlYmtpdFsgXFwvXVtWRVJdJyxcbiAgICAgICAgICAgICdHZWNrbyc6ICdHZWNrb1xcL1tWRVJdJyxcbiAgICAgICAgICAgICdUcmlkZW50JzogJ1RyaWRlbnRcXC9bVkVSXScsXG4gICAgICAgICAgICAnUHJlc3RvJzogJ1ByZXN0b1xcL1tWRVJdJyxcbiAgICAgICAgICAgICdpT1MnOiAnIFxcXFxiaT9PU1xcXFxiIFtWRVJdWyA7XXsxfScsXG4gICAgICAgICAgICAnQW5kcm9pZCc6ICdBbmRyb2lkIFtWRVJdJyxcbiAgICAgICAgICAgICdCbGFja0JlcnJ5JzogW1xuICAgICAgICAgICAgICAgICdCbGFja0JlcnJ5W1xcXFx3XStcXC9bVkVSXScsXG4gICAgICAgICAgICAgICAgJ0JsYWNrQmVycnkuKlZlcnNpb25cXC9bVkVSXScsXG4gICAgICAgICAgICAgICAgJ1ZlcnNpb25cXC9bVkVSXSdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAnQlJFVyc6ICdCUkVXIFtWRVJdJyxcbiAgICAgICAgICAgICdKYXZhJzogJ0phdmFcXC9bVkVSXScsXG4gICAgICAgICAgICAnV2luZG93cyBQaG9uZSBPUyc6IFtcbiAgICAgICAgICAgICAgICAnV2luZG93cyBQaG9uZSBPUyBbVkVSXScsXG4gICAgICAgICAgICAgICAgJ1dpbmRvd3MgUGhvbmUgW1ZFUl0nXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgJ1dpbmRvd3MgUGhvbmUnOiAnV2luZG93cyBQaG9uZSBbVkVSXScsXG4gICAgICAgICAgICAnV2luZG93cyBDRSc6ICdXaW5kb3dzIENFXFwvW1ZFUl0nLFxuICAgICAgICAgICAgJ1dpbmRvd3MgTlQnOiAnV2luZG93cyBOVCBbVkVSXScsXG4gICAgICAgICAgICAnU3ltYmlhbic6IFtcbiAgICAgICAgICAgICAgICAnU3ltYmlhbk9TXFwvW1ZFUl0nLFxuICAgICAgICAgICAgICAgICdTeW1iaWFuXFwvW1ZFUl0nXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgJ3dlYk9TJzogW1xuICAgICAgICAgICAgICAgICd3ZWJPU1xcL1tWRVJdJyxcbiAgICAgICAgICAgICAgICAnaHB3T1NcXC9bVkVSXTsnXG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQnJvd3NlciB1c2VyQWdlbnRcbiAgICAgKi9cbiAgICB1YTogd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQsXG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplXG4gICAgICovXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBydWxlcztcbiAgICAgICAgdGhpcy5jb252ZXJ0KCk7XG4gICAgICAgIHJ1bGVzID0gdGhpcy5tb2JpbGVSZWdUZXh0O1xuICAgICAgICBydWxlcy5vc3MwID0ge1xuICAgICAgICAgICAgV2luZG93c1Bob25lT1M6IHJ1bGVzLm9zcy5XaW5kb3dzUGhvbmVPUyxcbiAgICAgICAgICAgIFdpbmRvd3NNb2JpbGVPUzogcnVsZXMub3NzLldpbmRvd3NNb2JpbGVPU1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRldmljZSA9ICB0aGlzLl9maW5kTWF0Y2gocnVsZXMucGhvbmVzLCB0aGlzLnVhKTtcbiAgICAgICAgdGhpcy5pb3MgPSB0aGlzLmlzSU9TKCk7XG4gICAgICAgIHRoaXMuYW5kcm9pZCA9IHRoaXMuaXNBbmRyb2lkKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvbnZlcnQgZGV2aWNlLCBvcywgYnJvd3NlciBpbmZvIHRvIHJlZyBlZGl0LlxuICAgICAqL1xuICAgIGNvbnZlcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcnVsZSxcbiAgICAgICAgICAgIG1vYmlsZURldGVjdFJ1bGVzID0gdGhpcy5tb2JpbGVSZWdUZXh0O1xuXG4gICAgICAgIHRoaXMuX3Byb3BDb252ZXJ0KCk7XG5cbiAgICAgICAgZm9yIChydWxlIGluIG1vYmlsZURldGVjdFJ1bGVzKSB7XG4gICAgICAgICAgICBpZiAocnVsZSAhPT0gJ3Byb3BzJykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbnZlcnRUb1JlZ0V4cChtb2JpbGVEZXRlY3RSdWxlc1tydWxlXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29udmVydCBwcm9wZXJ0eSBieSBlYWNoIGludmlyb25tZW50XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfcHJvcENvbnZlcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIga2V5LFxuICAgICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgbGVuLFxuICAgICAgICAgICAgdmVyUG9zLFxuICAgICAgICAgICAgaGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksXG4gICAgICAgICAgICBydWxlcyA9IHRoaXMubW9iaWxlUmVnVGV4dC5wcm9wcztcblxuICAgICAgICBmb3IgKGtleSBpbiBydWxlcykge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3AuY2FsbChydWxlcywga2V5KSkge1xuICAgICAgICAgICAgICAgIHZhbHVlcyA9IHJ1bGVzW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKCF0dWkudXRpbC5pc0FycmF5KHZhbHVlcykpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzID0gW3ZhbHVlc107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlbiA9IHZhbHVlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWVzW2ldO1xuICAgICAgICAgICAgICAgICAgICB2ZXJQb3MgPSB2YWx1ZS5pbmRleE9mKCdbVkVSXScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmVyUG9zID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3Vic3RyaW5nKDAsIHZlclBvcykgKyAnKFtcXFxcdy5fXFxcXCtdKyknICsgdmFsdWUuc3Vic3RyaW5nKHZlclBvcyArIDUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc1tpXSA9IG5ldyBSZWdFeHAodmFsdWUsICdpJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJ1bGVzW2tleV0gPSB2YWx1ZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IHVzZXJBZ2VudFxuICAgICAqL1xuICAgIHVzZXJBZ2VudDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0dWkudXRpbC5pc1VuZGVmaW5lZCh0aGlzLmNhY2hlLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUudXNlckFnZW50ID0gdGhpcy5fZmluZE1hdGNoKHRoaXMubW9iaWxlUmVnVGV4dC51YXMsIHRoaXMudWEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlLnVzZXJBZ2VudDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbGwgZGV0ZWN0ZWQgdXNlci1hZ2VudCBzdHJpbmdzLlxuICAgICAqIDxicj5cbiAgICAgKiBUaGUgYXJyYXkgaXMgZW1wdHkgb3IgY29udGFpbnMgb25lIG9yIG1vcmUgb2YgZm9sbG93aW5nIGtleXM6PGJyPlxuICAgICAqIDxicj48dHQ+Q2hyb21lLCBEb2xmaW4sIE9wZXJhLCBTa3lmaXJlLCBJRSwgRmlyZWZveCwgQm9sdCwgVGVhU2hhcmssIEJsYXplciwgU2FmYXJpLFxuICAgICAqIFRpemVuLCBVQ0Jyb3dzZXIsIGJhaWR1Ym94YXBwLCBiYWlkdWJyb3dzZXIsIERpaWdvQnJvd3NlciwgUHVmZmluLCBNZXJjdXJ5LFxuICAgICAqIE9iaWdvQnJvd3NlciwgTmV0RnJvbnQsIEdlbmVyaWNCcm93c2VyPC90dD48YnI+XG4gICAgICogPGJyPlxuICAgICAqIEluIG1vc3QgY2FzZXMgY2FsbGluZyB7QGxpbmsgTW9iaWxlRGV0ZWN0I3VzZXJBZ2VudH0gd2lsbCBiZSBzdWZmaWNpZW50LiBCdXQgdGhlcmUgYXJlIHJhcmVcbiAgICAgKiBjYXNlcyB3aGVyZSBhIG1vYmlsZSBkZXZpY2UgcHJldGVuZHMgdG8gYmUgbW9yZSB0aGFuIG9uZSBwYXJ0aWN1bGFyIGJyb3dzZXIuIFlvdSBjYW4gZ2V0IHRoZVxuICAgICAqIGxpc3Qgb2YgYWxsIG1hdGNoZXMgd2l0aCB7QGxpbmsgTW9iaWxlRGV0ZWN0I3VzZXJBZ2VudHN9IG9yIGNoZWNrIGZvciBhIHBhcnRpY3VsYXIgdmFsdWUgYnlcbiAgICAgKiBwcm92aWRpbmcgb25lIG9mIHRoZSBkZWZpbmVkIGtleXMgYXMgZmlyc3QgYXJndW1lbnQgdG8ge0BsaW5rIE1vYmlsZURldGVjdCNpc30uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IHRoZSBhcnJheSBvZiBkZXRlY3RlZCB1c2VyLWFnZW50IGtleXMgb3IgPHR0PltdPC90dD5cbiAgICAgKiBAZnVuY3Rpb24gTW9iaWxlRGV0ZWN0I3VzZXJBZ2VudHNcbiAgICAgKi9cbiAgICB1c2VyQWdlbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0dWkudXRpbC5pc1VuZGVmaW5lZCh0aGlzLmNhY2hlLnVzZXJBZ2VudHMpKSB7XG4gICAgICAgICAgICB0aGlzLmNhY2hlLnVzZXJBZ2VudHMgPSB0aGlzLl9maW5kTWF0Y2hlcyh0aGlzLm1vYmlsZVJlZ1RleHQudWFzLCB0aGlzLnVhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZS51c2VyQWdlbnRzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb252ZXIgdG8gcmVnIGV4cFxuICAgICAqIEBwYXJhbSBvYmplY3RcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9jb252ZXJ0VG9SZWdFeHA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgICAgICB2YXIgaGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksXG4gICAgICAgICAgICBrZXk7XG4gICAgICAgIGZvciAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3AuY2FsbChvYmplY3QsIGtleSkpIHtcbiAgICAgICAgICAgICAgICBvYmplY3Rba2V5XSA9IG5ldyBSZWdFeHAob2JqZWN0W2tleV0sICdpJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRmluZCBPU1xuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldE9TOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbmRNYXRjaCh0aGlzLm1vYmlsZVJlZ1RleHQub3NzMCwgdGhpcy51YSkgfHxcbiAgICAgICAgICAgIHRoaXMuX2ZpbmRNYXRjaCh0aGlzLm1vYmlsZVJlZ1RleHQub3NzLCB0aGlzLnVhKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRmluZCBtYXRjaCB1c2VyYWdlbnRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9maW5kTWF0Y2g6IGZ1bmN0aW9uKHJ1bGVzLCB1c2VyQWdlbnQpIHtcbiAgICAgICAgdmFyIGtleSxcbiAgICAgICAgICAgIGhhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICAgICAgICBmb3IgKGtleSBpbiBydWxlcykge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3AuY2FsbChydWxlcywga2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChydWxlc1trZXldLnRlc3QodXNlckFnZW50KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGVzdCB1c2VyQWdlbnQgc3RyaW5nIGFnYWluc3QgYSBzZXQgb2YgcnVsZXMgYW5kIHJldHVybiBhbiBhcnJheSBvZiBtYXRjaGVkIGtleXMuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJ1bGVzIChrZXkgaXMgU3RyaW5nLCB2YWx1ZSBpcyBSZWdFeHApXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHVzZXJBZ2VudCB0aGUgbmF2aWdhdG9yLnVzZXJBZ2VudCAob3IgSFRUUC1IZWFkZXIgJ1VzZXItQWdlbnQnKS5cbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IGFuIGFycmF5IG9mIG1hdGNoZWQga2V5cywgbWF5IGJlIGVtcHR5IHdoZW4gdGhlcmUgaXMgbm8gbWF0Y2gsIGJ1dCBub3QgPHR0Pm51bGw8L3R0PlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2ZpbmRNYXRjaGVzOiBmdW5jdGlvbihydWxlcywgdXNlckFnZW50KSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXSxcbiAgICAgICAgICAgIGhhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcnVsZXMpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wLmNhbGwocnVsZXMsIGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAocnVsZXNba2V5XS50ZXN0KHVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRmluZCB2ZXJzaW9uXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgdmVyc2lvbjogZnVuY3Rpb24ocHJvcGVydHlOYW1lKSB7XG4gICAgICAgIHZhciB2ZXJzaW9uID0gdGhpcy5fZ2V0VmVyc2lvblN0cihwcm9wZXJ0eU5hbWUsIHRoaXMudWEpO1xuICAgICAgICByZXR1cm4gdmVyc2lvbiA/IHRoaXMuX3ByZXBhcmVWZXJzaW9uTm8odmVyc2lvbikgOiBOYU47XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrIHRoZSB2ZXJzaW9uIG9mIHRoZSBnaXZlbiBwcm9wZXJ0eSBpbiB0aGUgVXNlci1BZ2VudC5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHVzZXJBZ2VudFxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gdmVyc2lvbiBvciA8dHQ+bnVsbDwvdHQ+IGlmIHZlcnNpb24gbm90IGZvdW5kXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfZ2V0VmVyc2lvblN0cjogZnVuY3Rpb24ocHJvcGVydHlOYW1lLCB1c2VyQWdlbnQpIHtcbiAgICAgICAgdmFyIHByb3BzID0gdGhpcy5tb2JpbGVSZWdUZXh0LnByb3BzLFxuICAgICAgICAgICAgcGF0dGVybnMsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgbGVuLFxuICAgICAgICAgICAgbWF0Y2gsXG4gICAgICAgICAgICBoYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuICAgICAgICBpZiAoaGFzT3duUHJvcC5jYWxsKHByb3BzLCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgICBwYXR0ZXJucyA9IHByb3BzW3Byb3BlcnR5TmFtZV07XG4gICAgICAgICAgICBsZW4gPSBwYXR0ZXJucy5sZW5ndGg7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgICAgIG1hdGNoID0gcGF0dGVybnNbaV0uZXhlYyh1c2VyQWdlbnQpO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hbMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBQcmVwYXJlIHRoZSB2ZXJzaW9uIG51bWJlci5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmVyc2lvblxuICAgICAqIEByZXR1cm4ge051bWJlcn0gdGhlIHZlcnNpb24gbnVtYmVyIGFzIGEgZmxvYXRpbmcgbnVtYmVyXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfcHJlcGFyZVZlcnNpb25ObzogZnVuY3Rpb24odmVyc2lvbikge1xuICAgICAgICB2YXIgbnVtYmVycztcblxuICAgICAgICBudW1iZXJzID0gdmVyc2lvbi5zcGxpdCgvW2Etei5fIFxcL1xcLV0vaSk7XG4gICAgICAgIGlmIChudW1iZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdmVyc2lvbiA9IG51bWJlcnNbMF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG51bWJlcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdmVyc2lvbiA9IG51bWJlcnNbMF0gKyAnLic7XG4gICAgICAgICAgICBudW1iZXJzLnNoaWZ0KCk7XG4gICAgICAgICAgICB2ZXJzaW9uICs9IG51bWJlcnMuam9pbignJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE51bWJlcih2ZXJzaW9uKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBpT1Mgb3Igbm90XG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNJT1M6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRPUygpID09PSAnaU9TJztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBBbmRyb2lkIG9yIG5vdFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzQW5kcm9pZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldE9TKCkgPT09ICdBbmRyb2lkT1MnO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICBBZ2VudERldGVjdG9yO1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IExvYWQgbmF0aXZlIGFwcCBvciBtb3ZlIHRvIGluc3RhbGwgcGFnZVxuICogQGRlcGVuZGVuY3kgY29kZS1zbmlwcGV0LmpzLCBkZXRlY3RvcnMuanMsIGFnZW50RGV0ZWN0b3IuanNcbiAqIEBhdXRob3IgTkhOIEVudC4gRkUgZGV2IHRlYW0uPGRsX2phdmFzY3JpcHRAbmhuZW50LmNvbT5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xudmFyIEFnZW50RGV0ZWN0b3IgPSByZXF1aXJlKCcuL2FnZW50RGV0ZWN0b3InKTtcbnZhciBEZXRlY3RvciA9IHJlcXVpcmUoJy4vZGV0ZWN0b3JzJyk7XG52YXIgaU9TRGV0ZWN0b3IgPSByZXF1aXJlKCcuL2lvc0RldGVjdG9ycycpO1xudmFyIEV0Y0RldGVjdG9yID0gcmVxdWlyZSgnLi9ldGNEZXRlY3RvcnMnKTtcbnZhciBhZCA9IG5ldyBBZ2VudERldGVjdG9yKCk7XG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICogQGNsYXNzXG4gKi9cbnZhciBBcHBMb2FkZXIgPSB0dWkudXRpbC5kZWZpbmVDbGFzcygvKiogQGxlbmRzIEFwcExvYWRlci5wcm90b3R5cGUgKi97XG4gICAgLyoqKioqKioqKioqKioqKioqXG4gICAgICogc3RhdGljIG1lbWJlcnNcbiAgICAgKioqKioqKioqKioqKioqKiovXG4gICAgc3RhdGljOntcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBmaXJzdCB1c2VyIGFnZW50IChpdCB3aWxsIGJlIGJyb3dzZXIgbmFtZSlcbiAgICAgICAgICogQGFwaVxuICAgICAgICAgKiBAbWVtYmVyb2YgQXBwTG9hZGVyXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gdXNlciBhZ2VudFxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiB2YXIgQXBwTG9hZGVyID0gdHVpLmNvbXBvbmVudC5tLkFwcExvYWRlcjtcbiAgICAgICAgICogdmFyIHVhID0gQXBwTG9hZGVyLmdldFVzZXJBZ2VudCgpOyAvLyBleCkgJ3NhZmFyaSdcbiAgICAgICAgICovXG4gICAgICAgIGdldFVzZXJBZ2VudDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gYWQudXNlckFnZW50KCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBhbGwgdXNlciBhZ2VudHMgYnkgYXJyYXlcbiAgICAgICAgICogQGFwaVxuICAgICAgICAgKiBAbWVtYmVyb2YgQXBwTG9hZGVyXG4gICAgICAgICAqIEByZXR1cm4ge0FycmF5fSBhZ2VudCBzdHJpbmdzXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIHZhciBBcHBMb2FkZXIgPSB0dWkuY29tcG9uZW50Lm0uQXBwTG9hZGVyO1xuICAgICAgICAgKiB2YXIgdWFzID0gQXBwTG9hZGVyLmdldFVzZXJBZ2VudHMoKTsgLy8gZXgpIFsnc2FmYXJpJ11cbiAgICAgICAgICovXG4gICAgICAgIGdldFVzZXJBZ2VudHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIGFkLnVzZXJBZ2VudHMoKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IE9TXG4gICAgICAgICAqIEBhcGlcbiAgICAgICAgICogQG1lbWJlcm9mIEFwcExvYWRlclxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IG9zXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIHZhciBBcHBMb2FkZXIgPSB0dWkuY29tcG9uZW50Lm0uQXBwTG9hZGVyO1xuICAgICAgICAgKiB2YXIgb3MgPSBBcHBMb2FkZXIuZ2V0T1MoKTsgLy8gICdpT1MnIG9yICdBbmRyb2lkT1MnXG4gICAgICAgICAqL1xuICAgICAgICBnZXRPUzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gYWQuZ2V0T1MoKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IHZlcnNpb25cbiAgICAgICAgICogQGFwaVxuICAgICAgICAgKiBAbWVtYmVyb2YgQXBwTG9hZGVyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gb3MgdHlwZVxuICAgICAgICAgKiBAcmV0dXJuIHtudW1iZXJ8c3RyaW5nfSB2ZXJzaW9uXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqICBnZXRWZXJzaW9uKCdJT1MnKTtcbiAgICAgICAgICogIGdldFZlcnNpb24oJ0Nocm9tZScpO1xuICAgICAgICAgKiAgZ2V0VmVyc2lvbignQW5kcm9pZCcpO1xuICAgICAgICAgKi9cbiAgICAgICAgZ2V0VmVyc2lvbjogZnVuY3Rpb24odHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIGFkLnZlcnNpb24odHlwZSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqKioqKioqKioqKioqKipcbiAgICAgKiBtZW1iZXIgZmllbGRzXG4gICAgICoqKioqKioqKioqKioqKiovXG5cbiAgICAvKipcbiAgICAgKiBicm93c2VyLCBkZXZpY2UgZGV0ZWN0b3JcbiAgICAgKi9cbiAgICBkZXRlY3Rvcjoge30sXG4gICAgLyoqXG4gICAgICogT1MgKGFuZHJvaWQvaW9zL2V0YylcbiAgICAgKi9cbiAgICBvczogbnVsbCxcbiAgICAvKipcbiAgICAgKiBkZWZhdWx0IG9wdGlvbnMgdG8gcnVuIGV4ZWNcbiAgICAgKi9cbiAgICBkZWZhdWx0czoge1xuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgaW9zOiB7XG4gICAgICAgICAgICBzY2hlbWU6ICcnLFxuICAgICAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgICAgIHVzZUlPUzk6IGZhbHNlLFxuICAgICAgICAgICAgc3luY1RvSU9TOTogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgYW5kcm9pZDoge1xuICAgICAgICAgICAgc2NoZW1lOiAnJyxcbiAgICAgICAgICAgIHVybDogJydcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKioqKioqKioqKioqKioqKlxuICAgICAqIG1lbWJlciBtZXRob2RzXG4gICAgICoqKioqKioqKioqKioqKiovXG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplXG4gICAgICovXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuYWdlbnREZXRlY3RvciA9IGFkO1xuICAgICAgICB0aGlzLnVhID0gYWQudXNlckFnZW50KCk7XG4gICAgICAgIHRoaXMub3MgPSBhZC5nZXRPUygpO1xuICAgICAgICB0aGlzLnZlcnNpb24gPSBhZC52ZXJzaW9uKGFkLmlvcyA/IGFkLmRldmljZSA6ICdBbmRyb2lkJyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldCBvcyBieSBEZXRlY3RvclxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgVGhlIG9wdGlvbnNcbiAgICAgKi9cbiAgICBfc2V0RGV0ZWN0b3I6IGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGFkID0gdGhpcy5hZ2VudERldGVjdG9yO1xuXG4gICAgICAgIGlmIChhZC5hbmRyb2lkKSB7IC8vIEFuZHJpb2RcbiAgICAgICAgICAgIHRoaXMuX3NldEFuZHJvaWREZXRlY3Rvcihjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIGlmIChhZC5pb3MgJiYgY29udGV4dC5pb3NTdG9yZVVSTCkgeyAvLyBJT1NcbiAgICAgICAgICAgIHRoaXMuX3NldElPU0RldGVjdG9yKGNvbnRleHQpO1xuICAgICAgICB9IGVsc2UgeyAvLyBFVENcbiAgICAgICAgICAgdGhpcy5fc2V0RXRjRGV0ZWN0b3IoY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IElPUyBEZXRlY3RvclxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgVGhlIGluZm9ybWF0aW9uIGZvciBhcHBcbiAgICAgKi9cbiAgICBfc2V0SU9TRGV0ZWN0b3I6IGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGlvc1ZlcnNpb24gPSBwYXJzZUludCh0aGlzLnZlcnNpb24sIDEwKTtcbiAgICAgICAgaWYgKGNvbnRleHQudXNlSU9TOSkge1xuICAgICAgICAgICAgaWYgKGlvc1ZlcnNpb24gPiA4IHx8IGNvbnRleHQuc3luY1RvSU9TOSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGV0ZWN0b3IgPSBpT1NEZXRlY3Rvci5pb3NGaXhEZXRlY3RvcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXRlY3RvciA9IChpb3NWZXJzaW9uID09PSA4KSA/IGlPU0RldGVjdG9yLmlvc1JlY2VudERldGVjdG9yIDogaU9TRGV0ZWN0b3IuaW9zT2xkZXJEZXRlY3RvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlICBpZiAoaW9zVmVyc2lvbiA8IDgpIHtcbiAgICAgICAgICAgIHRoaXMuZGV0ZWN0b3IgPSBpT1NEZXRlY3Rvci5pb3NPbGRlckRldGVjdG9yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZXRlY3RvciA9IGlPU0RldGVjdG9yLmlvc1JlY2VudERldGVjdG9yO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldCBhbmRyb2lkIERldGVjdG9yXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCBUaGUgaW5mb3JtYXRpb24gZm9yIGFwcFxuICAgICAqL1xuICAgIF9zZXRBbmRyb2lkRGV0ZWN0b3I6IGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGlzTm90SW50ZW50ID0gKHRoaXMuaXNJbnRlbnRMZXNzKCkgfHwgdHVpLnV0aWwuaXNFeGlzdHkoY29udGV4dC51c2VVcmxTY2hlbWUpKSxcbiAgICAgICAgICAgIGlzSW50ZW50ID0gdHVpLnV0aWwuaXNFeGlzdHkoY29udGV4dC5pbnRlbnRVUkkpO1xuICAgICAgICBpZiAoaXNOb3RJbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZGV0ZWN0b3IgPSBEZXRlY3Rvci5hbmRyb2lkU2NoZW1lRGV0ZWN0b3I7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNJbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZGV0ZWN0b3IgPSBEZXRlY3Rvci5hbmRyb2lkSW50ZW50RGV0ZWN0b3I7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IEV0Y0RldGVjdG9yXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCBUaGUgaW5mb3JtYXRpb24gZm9yIGFwcFxuICAgICAqL1xuICAgIF9zZXRFdGNEZXRlY3RvcjogZnVuY3Rpb24oY29udGV4dCkge1xuICAgICAgICB0aGlzLmRldGVjdG9yID0gRXRjRGV0ZWN0b3I7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoY29udGV4dC5ldGNDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZXRjQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUnVuIHNlbGVjdGVkIGRldGVjdG9yXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCBUaGUgaW5mb3JtYXRpb24gZm9yIGFwcFxuICAgICAqL1xuICAgIF9ydW5EZXRlY3RvcjogZnVuY3Rpb24oY29udGV4dCkge1xuICAgICAgICBpZiAodGhpcy5kZXRlY3RvciAmJiAodGhpcy5kZXRlY3Rvci50eXBlICE9PSBFdGNEZXRlY3Rvci50eXBlKSkge1xuICAgICAgICAgICAgdGhpcy5kZXRlY3Rvci5ydW4oY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBpbnRlbnQgc3VwcG9ydGVkXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNJbnRlbnRMZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGludGVudGxlc3NCcm93c2VycyA9IFtcbiAgICAgICAgICAgICdmaXJlZm94JyxcbiAgICAgICAgICAgICdvcHInXG4gICAgICAgIF07XG4gICAgICAgIHZhciBibGFja0xpc3RSZWdleHAgPSBuZXcgUmVnRXhwKGludGVudGxlc3NCcm93c2Vycy5qb2luKCd8JyksICdpJyksXG4gICAgICAgICAgICBhcHAgPSB0aGlzLmFnZW50RGV0ZWN0b3I7XG4gICAgICAgIHJldHVybiBibGFja0xpc3RSZWdleHAudGVzdChhcHAudWEpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgb3NcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldE9TOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWdlbnREZXRlY3Rvci5nZXRPUygpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDYWxsIGFwcFxuICAgICAqIEBhcGlcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBUaGUgb3B0aW9uIGZvciBhcHBcbiAgICAgKiAgQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMuaW9zIElPUyBhcHAgaW5mb3JtYXRpb25cbiAgICAgKiAgQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMuYW5kcm9pZCBBbmRyb2lkIGluZm9ybWF0aW9uXG4gICAgICogIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zLnRpbWVyU2V0IEEgdGltZXIgdGltZSBzZXQgZm9yIGNhbGxiYWNrIGRlbGV5IHRpbWVcbiAgICAgKiAgQHBhcmFtIHtGdW5jdGlvbn0gb3B0aW9ucy5ldGNDYWxsYmFjayBJZiB1bnN1cHBvcnRhYmxlIG1vYmlsZVxuICAgICAqICBAcGFyYW0ge0Z1bmN0aW9ufSBvcHRpb25zLm5vdEZvdW5kQ2FsbGJhY2sgSXQgbm90IGZvdW5kXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIHZhciBsb2FkZXIgPSBuZXcgdHVpLmNvbXBvbmVudC5tLkFwcExvYWRlcigpO1xuICAgICAqIGxvYWRlci5leGVjKHtcbiAgICAgKiAgICAgIGlvczoge1xuICAgICAqICAgICAgICAgIHNjaGVtZTogJ2ZlY2hlY2s6Ly8nLCAvLyBpcGhvbmUgYXBwIHNjaGVtZVxuICAgICAqICAgICAgICAgIHVybDogJ2l0bXMtYXBwczovL2l0dW5lcy5hcHBsZS5jb20vYXBwLy4uLi4uJywgLy8gYXBwIHN0b3JlIHVybCxcbiAgICAgKiAgICAgICAgICB1c2VJT1M5OiB0cnVlLFxuICAgICAqICAgICAgICAgIHN5bmNUb0lPUzk6IGZhbHNlLFxuICAgICAqICAgICAgICAgIHVuaXZlcnNhbExpbms6ICdhcHA6Ly8vbGlua3MvJ1xuICAgICAqICAgICAgfSxcbiAgICAgKiAgICAgIGFuZHJvaWQ6IHtcbiAgICAgKiAgICAgICAgICBpbnRlbnRVUkk6ICdpbnRlbnQ6Ly9ob21lI0ludGVudDtzY2hlbWU9ZmVjaGVjaztwYWNrYWdlPWNvbS5mZWNoZWNrO2VuZCcgLy8gYW5kcm9pZCBpbnRlbnQgdXJpXG4gICAgICogICAgICB9LFxuICAgICAqICAgICAgdGltZXJTZXQ6IHsgLy8gb3B0aW9uYWwgdmFsdWVzXG4gICAgICogICAgICAgICAgaW9zOiAyMDAwLCAvLyBkZWZhdWx0OiAyMDAwXG4gICAgICogICAgICAgICAgYW5kcm9pZDogMTAwMCAvLyBkZWZhdWx0OiA4MDBcbiAgICAgKiAgICAgIH0sXG4gICAgICogICAgICBub3RGb3VuZENhbGxiYWNrOiBmdW5jdGlvbigpIHsgLy8gaWYgbm90IGluc3RhbGxlZFxuICAgICAqICAgICAgICAgIGFsZXJ0KCdub3QgZm91bmQnKTtcbiAgICAgKiAgICAgIH0sXG4gICAgICogICAgICBldGNDYWxsYmFjazogZnVuY3Rpb24oKSB7IC8vIGlmIG5vdCBtb2JpbGVcbiAgICAgKiAgICAgICAgICBhbGVydCgnZXRjJyk7XG4gICAgICogICAgICB9XG4gICAgICogfSk7XG4gICAgICovXG4gICAgZXhlYzogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICB2YXIgdGltZXJTZXQsIGNvbnRleHQ7XG5cbiAgICAgICAgb3B0aW9ucyA9IHR1aS51dGlsLmV4dGVuZCh0aGlzLmRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgICAgdGltZXJTZXQgPSBvcHRpb25zLnRpbWVyU2V0O1xuICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgdXJsU2NoZW1lOiBvcHRpb25zLmlvcy5zY2hlbWUsXG4gICAgICAgICAgICBpb3NTdG9yZVVSTDogb3B0aW9ucy5pb3MudXJsLFxuICAgICAgICAgICAgc3luY1RvSU9TOTogb3B0aW9ucy5pb3Muc3luY1RvSU9TOSxcbiAgICAgICAgICAgIHVzZUlPUzk6IG9wdGlvbnMuaW9zLnVzZUlPUzksXG4gICAgICAgICAgICB1bml2ZXJzYWxMaW5rOiBvcHRpb25zLmlvcy51bml2ZXJzYWxMaW5rLFxuICAgICAgICAgICAgaW50ZW50VVJJOiBvcHRpb25zLmFuZHJvaWQuaW50ZW50VVJJLFxuICAgICAgICAgICAgdXNlSWZyYW1lOiBvcHRpb25zLmFuZHJvaWQudXNlSWZyYW1lLFxuICAgICAgICAgICAgb25FcnJvcklmcmFtZTogb3B0aW9ucy5hbmRyb2lkLm9uRXJyb3JJZnJhbWUsXG4gICAgICAgICAgICBldGNDYWxsYmFjazogb3B0aW9ucy5ldGNDYWxsYmFjayxcbiAgICAgICAgICAgIG5vdEZvdW5kQ2FsbGJhY2s6IG9wdGlvbnMubm90Rm91bmRDYWxsYmFja1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3NldERldGVjdG9yKGNvbnRleHQpO1xuICAgICAgICBpZiAodGltZXJTZXQpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldFRpbWVyVGltZSh0aW1lclNldCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcnVuRGV0ZWN0b3IoY29udGV4dCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0aW1lciB0aW1lIHNldFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0aW1lclNldCBBIHNldCBvZiB0aW1lciB0aW1lc1xuICAgICAqL1xuICAgIF9zZXRUaW1lclRpbWU6IGZ1bmN0aW9uKHRpbWVyU2V0KSB7XG4gICAgICAgIGlmICghdGhpcy5kZXRlY3Rvci5USU1FT1VUKSB7XG4gICAgICAgICAgICB0aGlzLmRldGVjdG9yLlRJTUVPVVQgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRldGVjdG9yLlRJTUVPVVQuSU9TID0gdGltZXJTZXQuaW9zIHx8IHRoaXMuZGV0ZWN0b3IuVElNRU9VVC5JT1M7XG4gICAgICAgIHRoaXMuZGV0ZWN0b3IuVElNRU9VVC5BTkRST0lEID0gdGltZXJTZXQuYW5kcm9pZCB8fCB0aGlzLmRldGVjdG9yLlRJTUVPVVQuQU5EUk9JRDtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcHBMb2FkZXI7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgTWl4aW4gbW9kdWxlc1xuICogQGRlcGVuZGVuY3kgY29kZS1zbmlwcGV0LmpzLCBhcHBMb2FkZXIuanNcbiAqIEBhdXRob3IgTkhOIEVudC4gRkUgZGV2IHRlYW0uPGRsX2phdmFzY3JpcHRAbmhuZW50LmNvbT5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAbmFtZXNwYWNlIERldGVjdG9yXG4gKi9cbnZhciBEZXRlY3RvciA9IHtcbiAgICAvKipcbiAgICAgKiBmb3IgdGltZXJcbiAgICAgKi9cbiAgICBUSU1FT1VUOiB7XG4gICAgICAgIElPUzogMjAwMCxcbiAgICAgICAgQU5EUk9JRDogODAwLFxuICAgICAgICBJTlRFUlZBTDogMTAwXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIElkIGZvciBzdXBwb3J0IGZyYW1lXG4gICAgICovXG4gICAgU1VQUE9SVF9GUkFNRV9JRDogJ3R1aS1zdXBwb3J0LWZyYW1lJyxcblxuICAgIC8qKlxuICAgICAqIE1vdmUgcGFnZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSBVUkxcbiAgICAgKiBAbWVtYmVyb2YgRGV0ZWN0b3JcbiAgICAgKi9cbiAgICBtb3ZlVG86IGZ1bmN0aW9uKHVybCkge1xuICAgICAgICB0b3AubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2FsbCBhcHAgYnkgaWZyYW1lXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIEFwcCB1cmxcbiAgICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IElGcmFtZVxuICAgICAqL1xuICAgIHJ1bkFwcFdpdGhJZnJhbWU6IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgaWZyYW1lID0gc2VsZi5jcmVhdGVTdXBwb3J0RnJhbWUoKTtcblxuICAgICAgICBpZnJhbWUuc3JjID0gdXJsO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gICAgICAgIHJldHVybiBpZnJhbWU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBpZnJhbWVcbiAgICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IElGcmFtZVxuICAgICAqL1xuICAgIGNyZWF0ZVN1cHBvcnRGcmFtZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgICAgIHR1aS51dGlsLmV4dGVuZChpZnJhbWUsIHtcbiAgICAgICAgICAgIGlkOiB0aGlzLlNVUFBPUlRfRlJBTUVfSUQsXG4gICAgICAgICAgICBmcmFtZWJvcmRlcjogJzAnLFxuICAgICAgICAgICAgd2lkdGg6ICcwJyxcbiAgICAgICAgICAgIGhlaWdodDogJzAnXG4gICAgICAgIH0pO1xuICAgICAgICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgcmV0dXJuIGlmcmFtZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGVmZXIgY2FsbCBjYWxsYmFja1xuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIEEgY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZSBBIGRlbGF5IHRpbWVcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfHVuZGVmaW5lZH0gVGltZXIgaWRcbiAgICAgKi9cbiAgICBkZWZlckNhbGxiYWNrOiBmdW5jdGlvbiAoY2FsbGJhY2ssIHRpbWUpIHtcbiAgICAgICAgdmFyIGNsaWNrZWRBdCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgbm93LFxuICAgICAgICAgICAgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCF0dWkudXRpbC5pc0Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBpZiAoc2VsZi5pc1BhZ2VWaXNpYmlsaXR5KCkgJiYgbm93IC0gY2xpY2tlZEF0IDwgdGltZSArIHNlbGYuVElNRU9VVC5JTlRFUlZBTCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRpbWUpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBjaGVjayBhIHdlYnBhZ2UgaXMgdmlzaWJsZSBvciBpbiBmb2N1c1xuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBQYWdlIHZpc2liaWxpdHlcbiAgICAgKi9cbiAgICBpc1BhZ2VWaXNpYmlsaXR5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0dWkudXRpbC5pc0V4aXN0eShkb2N1bWVudC5oaWRkZW4pKSB7XG4gICAgICAgICAgICByZXR1cm4gIWRvY3VtZW50LmhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHVpLnV0aWwuaXNFeGlzdHkoZG9jdW1lbnQud2Via2l0SGlkZGVuKSkge1xuICAgICAgICAgICAgcmV0dXJuICFkb2N1bWVudC53ZWJraXRIaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufTtcblxuLyoqKioqKioqKioqKioqKipcbiAqIEFuZHJvaWQgc2VyaWVzXG4gKioqKioqKioqKioqKioqKi9cblxuLyoqXG4gKiBBbmRyb2lkIGludGVudCBsZXNzXG4gKiBAbmFtZXNwYWNlIERldGVjdG9yLmFuZHJvaWRTY2hlbWVEZXRlY3RvclxuICovXG5EZXRlY3Rvci5hbmRyb2lkU2NoZW1lRGV0ZWN0b3IgPSB0dWkudXRpbC5leHRlbmQoe1xuICAgIC8qKlxuICAgICAqIGRldGVjdG9yIHR5cGVcbiAgICAgKiBAbWVtYmVyb2YgRGV0ZWN0b3IuYW5kcm9pZFNjaGVtZURldGVjdG9yXG4gICAgICovXG4gICAgdHlwZTogJ3NjaGVtZScsXG5cbiAgICAvKipcbiAgICAgKiBSdW4gZGV0ZWN0b3JcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IC0gRGF0YSBmb3IgcnVubmluZ1xuICAgICAqIEBtZW1iZXJvZiBEZXRlY3Rvci5hbmRyb2lkU2NoZW1lRGV0ZWN0b3JcbiAgICAgKi9cbiAgICBydW46IGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgICAgICAgdmFyIG5vdEZvdW5kQ2FsbGJhY2sgPSBjb250ZXh0Lm5vdEZvdW5kQ2FsbGJhY2s7XG5cbiAgICAgICAgaWYgKG5vdEZvdW5kQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuZGVmZXJDYWxsYmFjayhub3RGb3VuZENhbGxiYWNrLCB0aGlzLlRJTUVPVVQuQU5EUk9JRCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ydW5BcHBXaXRoSWZyYW1lKGNvbnRleHQudXJsU2NoZW1lKTtcbiAgICB9XG59LCBEZXRlY3Rvcik7XG5cblxuLyoqXG4gKiBBbmRyb2lkIGludGVudFxuICogQG5hbWVzcGFjZSBEZXRlY3Rvci5hbmRyb2lkSW50ZW50RGV0ZWN0b3JcbiAqL1xuRGV0ZWN0b3IuYW5kcm9pZEludGVudERldGVjdG9yID0gdHVpLnV0aWwuZXh0ZW5kKHtcbiAgICAvKipcbiAgICAgKiBkZXRlY3RvciB0eXBlXG4gICAgICogQG1lbWJlcm9mIERldGVjdG9yLmFuZHJvaWRJbnRlbnREZXRlY3RvclxuICAgICAqL1xuICAgIHR5cGU6ICdpbnRlbnQnLFxuXG4gICAgLy8gRm9yY2UgaWZyYW1lXG4gICAgbGF1bmNoVmlhSWZyYW1lOiBmdW5jdGlvbihpbnRlbnRVUkksIG5vdEZvdW5kQ2FsbGJhY2ssIG9uRXJyb3JJZnJhbWUpIHtcbiAgICAgICAgdmFyIGlmcmFtZSA9IHRoaXMucnVuQXBwV2l0aElmcmFtZShpbnRlbnRVUkkpLCAvLyBMYXVuY2ggYXBwIHZpYSBpZnJhbWVcbiAgICAgICAgICAgIHRpbWVvdXRJZCA9IHRoaXMuZGVmZXJDYWxsYmFjayhub3RGb3VuZENhbGxiYWNrLCB0aGlzLlRJTUVPVVQuQU5EUk9JRCk7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy8gV2hldGhlciBicm9zd2VyIHN1cHBvcnRzIGludGVudFVSSSB3aXRoIGlmcmFtZSBhbmQgd2l0aG91dCBlcnJvci5cbiAgICAgICAgICAgICAgICBpZiAoaWZyYW1lICYmIGlmcmFtZS5jb250ZW50RG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIC8vIElmIGJyb3dzZXIgY2F1Z2h0IGFuIGVycm9yKGFjY2Vzc2luZyB0byBlcnJvciBwYWdlIGluIGlmcmFtZSksXG4gICAgICAgICAgICAgICAgLy8gIHRoaXMgY29tcG9uZW50IGNhbm5vdCBqdWRnZSB0aGUgYXBwIGlzIGluc3RhbGxlZCBvciBub3QuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgICAgICAgICAgICAgIGlmICh0dWkudXRpbC5pc0Z1bmN0aW9uKG9uRXJyb3JJZnJhbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3JJZnJhbWUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJ1biBkZXRlY3RvclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IC0gRGF0YSBmb3IgcnVubmluZ1xuICAgICAqIEBtZW1iZXJvZiBEZXRlY3Rvci5hbmRyb2lkSW50ZW50RGV0ZWN0b3JcbiAgICAgKi9cbiAgICBydW46IGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgICAgICAgdmFyIG5vdEZvdW5kQ2FsbGJhY2sgPSBjb250ZXh0Lm5vdEZvdW5kQ2FsbGJhY2ssXG4gICAgICAgICAgICBpbnRlbnRVUkkgPSBjb250ZXh0LmludGVudFVSSTtcblxuICAgICAgICBpZiAoY29udGV4dC51c2VJZnJhbWUpIHtcbiAgICAgICAgICAgIHRoaXMubGF1bmNoVmlhSWZyYW1lKGludGVudFVSSSwgbm90Rm91bmRDYWxsYmFjaywgY29udGV4dC5vbkVycm9ySWZyYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubW92ZVRvKGludGVudFVSSSk7XG4gICAgICAgICAgICB0aGlzLmRlZmVyQ2FsbGJhY2sobm90Rm91bmRDYWxsYmFjaywgdGhpcy5USU1FT1VULkFORFJPSUQpO1xuICAgICAgICB9XG4gICAgfVxufSwgRGV0ZWN0b3IpO1xubW9kdWxlLmV4cG9ydHMgPSBEZXRlY3RvcjtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBFdGMgbm90IHN1cHBvcnQgaW52aXJvbm1lbnRcbiAqIEBkZXBlbmRlbmN5IGNvZGUtc25pcHBldC5qc1xuICogQGF1dGhvciBOSE4gRW50LiBGRSBkZXYgdGVhbS48ZGxfamF2YXNjcmlwdEBuaG5lbnQuY29tPlxuICovXG4ndXNlIHN0cmljdCc7XG4vKipcbiAqIEBuYW1lc3BhY2UgRXRjRGV0ZWN0b3JcbiAqL1xudmFyIEV0Y0RldGVjdG9yID0ge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXJvZiBFdGNEZXRlY3RvclxuICAgICAqL1xuICAgIHR5cGU6ICdldGMnLFxuICAgIC8qKlxuICAgICAqIEBtZW1iZXJvZiBFdGNEZXRlY3RvclxuICAgICAqL1xuICAgIHJ1bjogZnVuY3Rpb24oKSB7XG4gICAgfVxufTtcbm1vZHVsZS5leHBvcnRzID0gRXRjRGV0ZWN0b3I7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgaU9TIE1peGluIG1vZHVsZXNcbiAqIEBkZXBlbmRlbmN5IGNvZGUtc25pcHBldC5qcywgYXBwTG9hZGVyLmpzXG4gKiBAYXV0aG9yIE5ITiBFbnQuIEZFIGRldiB0ZWFtLjxkbF9qYXZhc2NyaXB0QG5obmVudC5jb20+XG4gKi9cbiAndXNlIHN0cmljdCc7XG52YXIgRGV0ZWN0b3IgPSByZXF1aXJlKCcuL2RldGVjdG9ycycpO1xuXG4vKipcbiAqIEBuYW1lc3BhY2UgaU9TRGV0ZWN0b3JcbiAqL1xudmFyIGlPU0RldGVjdG9yID0gdHVpLnV0aWwuZXh0ZW5kKHtcbiAgICAvKipcbiAgICAgKiBkZXRlY3RvciB0eXBlXG4gICAgICogQG1lbWJlcm9mIGlPU0RldGVjdG9yXG4gICAgICovXG4gICAgdHlwZTogJ2lvcycsXG5cbiAgICAvKipcbiAgICAgKiB2aXNpYmxpdHljaGFuZ2UgZXZlbnRcbiAgICAgKiBAbWVtYmVyb2YgaU9TRGV0ZWN0b3JcbiAgICAgKi9cbiAgICBiaW5kVmlzaWJpbGl0eUNoYW5nZUV2ZW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5pc1BhZ2VWaXNpYmlsaXR5KCkpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoc2VsZi50aWQpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBjbGVhcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiAgcGFnZWhpZGUgZXZlbnRcbiAgICAgKiAgQG1lbWJlcm9mIGlPU0RldGVjdG9yXG4gICAgICovXG4gICAgYmluZFBhZ2VoaWRlRXZlbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwYWdlaGlkZScsIGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgICAgICAgaWYgKHNlbGYuaXNQYWdlVmlzaWJpbGl0eSgpKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHNlbGYudGlkKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncGFnZWhpZGUnLCBjbGVhcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0sIERldGVjdG9yKTtcblxuLyoqXG4gKiBpb3Mgb2xkIGRldGVjdG9yXG4gKiBAbmFtZXNwYWNlIGlPU0RldGVjdG9yLmlvc09sZGVyRGV0ZWN0b3JcbiAqL1xuaU9TRGV0ZWN0b3IuaW9zT2xkZXJEZXRlY3RvciA9IHR1aS51dGlsLmV4dGVuZCh7XG4gICAgLyoqXG4gICAgICogZGV0ZWN0b3IgUnVuXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgRGF0YSBmb3IgYXBwIGxvYWRpbmdcbiAgICAgKiBAbWVtYmVyb2YgaU9TRGV0ZWN0b3IuaW9zT2xkZXJEZXRlY3RvclxuICAgICAqL1xuICAgIHJ1bjogZnVuY3Rpb24oY29udGV4dCkge1xuICAgICAgICB2YXIgc3RvcmVVUkwgPSBjb250ZXh0Lmlvc1N0b3JlVVJMLFxuICAgICAgICAgICAgY2FsbGJhY2sgPSBjb250ZXh0Lm5vdEZvdW5kQ2FsbGJhY2sgfHwgdHVpLnV0aWwuYmluZCh0aGlzLm1vdmVUbywgdGhpcywgc3RvcmVVUkwpO1xuXG4gICAgICAgIHRoaXMudGlkID0gdGhpcy5kZWZlckNhbGxiYWNrKGNhbGxiYWNrLCB0aGlzLlRJTUVPVVQuSU9TKTtcbiAgICAgICAgdGhpcy5iaW5kUGFnZWhpZGVFdmVudCgpO1xuICAgICAgICB0aGlzLnJ1bkFwcFdpdGhJZnJhbWUoY29udGV4dC51cmxTY2hlbWUpO1xuICAgIH1cbn0sIGlPU0RldGVjdG9yKTtcblxuLyoqXG4gKiBpb3MgcmVjZW50IGRldGVjdG9yXG4gKiBAbmFtZXNwYWNlIGlPU0RldGVjdG9yLmlvc1JlY2VudERldGVjdG9yXG4gKi9cbmlPU0RldGVjdG9yLmlvc1JlY2VudERldGVjdG9yID0gdHVpLnV0aWwuZXh0ZW5kKHtcbiAgICAvKipcbiAgICAgKiBkZXRlY3RvciBydW5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCBEYXRhIGZvciBhcHAgbG9hZGluZ1xuICAgICAqIEBtZW1iZXJvZiBpT1NEZXRlY3Rvci5pb3NSZWNlbnREZXRlY3RvclxuICAgICAqL1xuICAgIHJ1bjogZnVuY3Rpb24oY29udGV4dCkge1xuICAgICAgICB2YXIgc3RvcmVVUkwgPSBjb250ZXh0Lmlvc1N0b3JlVVJMLFxuICAgICAgICAgICAgbm90Rm91bmRDYWxsYmFjayA9IGNvbnRleHQubm90Rm91bmRDYWxsYmFjayxcbiAgICAgICAgICAgIGNhbGxiYWNrID0gbm90Rm91bmRDYWxsYmFjayB8fCB0dWkudXRpbC5iaW5kKHRoaXMubW92ZVRvLCB0aGlzLCBzdG9yZVVSTCk7XG5cbiAgICAgICAgdGhpcy50aWQgPSB0aGlzLmRlZmVyQ2FsbGJhY2soY2FsbGJhY2ssIHRoaXMuVElNRU9VVC5JT1MpO1xuICAgICAgICB0aGlzLmJpbmRWaXNpYmlsaXR5Q2hhbmdlRXZlbnQoKTtcbiAgICAgICAgdGhpcy5ydW5BcHBXaXRoSWZyYW1lKGNvbnRleHQudXJsU2NoZW1lKTtcbiAgICB9XG59LCBpT1NEZXRlY3Rvcik7XG5cbi8qKlxuICogaW9zIHJlY2VudCBidXQgc2FmYXJpIHByZXZlbnQgdG8gY2FsbCBhcHBsaWNhdGlvbiB2aWEgaWZyYW1lIHNyYy5cbiAqL1xuaU9TRGV0ZWN0b3IuaW9zRml4RGV0ZWN0b3IgPSB0dWkudXRpbC5leHRlbmQoe1xuICAgIC8qKlxuICAgICAqIGRldGVjdG9yIHJ1blxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IERhdGEgZm9yIGFwcCBsb2FkaW5nXG4gICAgICogQG1lbWJlcm9mIGlPU0RldGVjdG9yLmlvc0ZpeERldGVjdG9yXG4gICAgICovXG4gICAgcnVuOiBmdW5jdGlvbihjb250ZXh0KSB7XG4gICAgICAgIHZhciBzdG9yZVVSTCA9IGNvbnRleHQuaW9zU3RvcmVVUkwsXG4gICAgICAgICAgICBub3RGb3VuZENhbGxiYWNrID0gY29udGV4dC5ub3RGb3VuZENhbGxiYWNrLFxuICAgICAgICAgICAgY2FsbGJhY2sgPSBub3RGb3VuZENhbGxiYWNrIHx8IHR1aS51dGlsLmJpbmQodGhpcy5tb3ZlVG8sIHRoaXMsIHN0b3JlVVJMKTtcblxuICAgICAgICBpZiAoY29udGV4dC51bml2ZXJzYWxMaW5rKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVUbyhjb250ZXh0LnVuaXZlcnNhbExpbmspO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aWQgPSB0aGlzLmRlZmVyQ2FsbGJhY2soY2FsbGJhY2ssIHRoaXMuVElNRU9VVC5JT1MpO1xuICAgICAgICAgICAgdGhpcy5iaW5kVmlzaWJpbGl0eUNoYW5nZUV2ZW50KCk7XG4gICAgICAgICAgICB0aGlzLm1vdmVUbyhjb250ZXh0LnVybFNjaGVtZSk7XG4gICAgICAgIH1cbiAgICB9XG59LCBpT1NEZXRlY3Rvcik7XG5cbm1vZHVsZS5leHBvcnRzID0gaU9TRGV0ZWN0b3I7XG4iXX0=
