/**
 * tui-component-m-app-loader
 * @author NHNEnt FE Development Lab <dl_javascript@nhnent.com>
 * @version v1.0.3
 * @license 
 */
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
tui.util.defineNamespace('tui.component.m', {
    AppLoader: require('./src/js/appLoader')
});

},{"./src/js/appLoader":3}],2:[function(require,module,exports){
/**
* @fileoverview The extractor and detector user agent by device info.
* @dependency code-snippet.js, appLoader.js
* @author NHN Entertainment. FE dev Lab.
*/
'use strict';
/**
 * @constructor
 * @See {@link https://github.com/hgoebl/mobile-detect.js}
 * @license https://github.com/hgoebl/mobile-detect.js/blob/master/LICENSE
 * @ignore
 */
var AgentDetector = tui.util.defineClass(/**@lends AgentDetector.prototype */{
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
    cache: {},
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

},{"./agentDetector":2,"./detectors":4,"./etcDetectors":5,"./iosDetectors":6}],4:[function(require,module,exports){
/**
 * @fileoverview Mixin modules
 * @dependency code-snippet.js, appLoader.js
 * @author NHN Ent. FE dev Lab.<dl_javascript@nhnent.com>
 */
'use strict';
/**
 * @namespace Detector
 * @ignore
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
 * @ignore
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
 * @ignore
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
     * @ignore
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
 * @fileoverview EtcDetector for unsupported env.
 * @author NHN Ent. FE dev Lab.<dl_javascript@nhnent.com>
 */
'use strict';
/**
 * @namespace EtcDetector
 * @ignore
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
 * @author NHN Ent. FE dev Lab.<dl_javascript@nhnent.com>
 */
 'use strict';
var Detector = require('./detectors');

/**
 * @namespace iOSDetector
 * @ignore
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
 * @ignore
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
 * @ignore
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
 * @ignore
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsInNyYy9qcy9hZ2VudERldGVjdG9yLmpzIiwic3JjL2pzL2FwcExvYWRlci5qcyIsInNyYy9qcy9kZXRlY3RvcnMuanMiLCJzcmMvanMvZXRjRGV0ZWN0b3JzLmpzIiwic3JjL2pzL2lvc0RldGVjdG9ycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG50dWkudXRpbC5kZWZpbmVOYW1lc3BhY2UoJ3R1aS5jb21wb25lbnQubScsIHtcbiAgICBBcHBMb2FkZXI6IHJlcXVpcmUoJy4vc3JjL2pzL2FwcExvYWRlcicpXG59KTtcbiIsIi8qKlxuKiBAZmlsZW92ZXJ2aWV3IFRoZSBleHRyYWN0b3IgYW5kIGRldGVjdG9yIHVzZXIgYWdlbnQgYnkgZGV2aWNlIGluZm8uXG4qIEBkZXBlbmRlbmN5IGNvZGUtc25pcHBldC5qcywgYXBwTG9hZGVyLmpzXG4qIEBhdXRob3IgTkhOIEVudGVydGFpbm1lbnQuIEZFIGRldiBMYWIuXG4qL1xuJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBTZWUge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9oZ29lYmwvbW9iaWxlLWRldGVjdC5qc31cbiAqIEBsaWNlbnNlIGh0dHBzOi8vZ2l0aHViLmNvbS9oZ29lYmwvbW9iaWxlLWRldGVjdC5qcy9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKiBAaWdub3JlXG4gKi9cbnZhciBBZ2VudERldGVjdG9yID0gdHVpLnV0aWwuZGVmaW5lQ2xhc3MoLyoqQGxlbmRzIEFnZW50RGV0ZWN0b3IucHJvdG90eXBlICove1xuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcnVsZXM7XG4gICAgICAgIHRoaXMuY29udmVydCgpO1xuICAgICAgICBydWxlcyA9IHRoaXMubW9iaWxlUmVnVGV4dDtcbiAgICAgICAgcnVsZXMub3NzMCA9IHtcbiAgICAgICAgICAgIFdpbmRvd3NQaG9uZU9TOiBydWxlcy5vc3MuV2luZG93c1Bob25lT1MsXG4gICAgICAgICAgICBXaW5kb3dzTW9iaWxlT1M6IHJ1bGVzLm9zcy5XaW5kb3dzTW9iaWxlT1NcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5kZXZpY2UgPSAgdGhpcy5fZmluZE1hdGNoKHJ1bGVzLnBob25lcywgdGhpcy51YSk7XG4gICAgICAgIHRoaXMuaW9zID0gdGhpcy5pc0lPUygpO1xuICAgICAgICB0aGlzLmFuZHJvaWQgPSB0aGlzLmlzQW5kcm9pZCgpO1xuICAgIH0sXG4gICAgY2FjaGU6IHt9LFxuICAgIC8qKlxuICAgICAqIEVhY2ggZGV2aWNlIGluZm8gYW5kIG9zIHJlZyBzdHJpbmdcbiAgICAgKi9cbiAgICBtb2JpbGVSZWdUZXh0OiB7XG4gICAgICAgICdwaG9uZXMnOiB7XG4gICAgICAgICAgICAnaVBob25lJzogJ1xcXFxiaVBob25lXFxcXGJ8XFxcXGJpUG9kXFxcXGInLFxuICAgICAgICAgICAgJ0JsYWNrQmVycnknOiAnQmxhY2tCZXJyeXxcXFxcYkJCMTBcXFxcYnxyaW1bMC05XSsnLFxuICAgICAgICAgICAgJ0hUQyc6ICdIVEN8SFRDLiooU2Vuc2F0aW9ufEV2b3xWaXNpb258RXhwbG9yZXJ8NjgwMHw4MTAwfDg5MDB8QTcyNzJ8UzUxMGV8QzExMGV8TGVnZW5kfERlc2lyZXxUODI4Mil8QVBYNTE1Q0tUfFF0ZWs5MDkwfEFQQTkyOTJLVHxIRF9taW5pfFNlbnNhdGlvbi4qWjcxMGV8UEc4NjEwMHxaNzE1ZXxEZXNpcmUuKihBODE4MXxIRCl8QURSNjIwMHxBRFI2NDAwTHxBRFI2NDI1fDAwMUhUfEluc3BpcmUgNEd8QW5kcm9pZC4qXFxcXGJFVk9cXFxcYnxULU1vYmlsZSBHMXxaNTIwbScsXG4gICAgICAgICAgICAnTmV4dXMnOiAnTmV4dXMgT25lfE5leHVzIFN8R2FsYXh5LipOZXh1c3xBbmRyb2lkLipOZXh1cy4qTW9iaWxlfE5leHVzIDR8TmV4dXMgNXxOZXh1cyA2JyxcbiAgICAgICAgICAgICdEZWxsJzogJ0RlbGwuKlN0cmVha3xEZWxsLipBZXJvfERlbGwuKlZlbnVlfERFTEwuKlZlbnVlIFByb3xEZWxsIEZsYXNofERlbGwgU21va2V8RGVsbCBNaW5pIDNpWHxYQ0QyOHxYQ0QzNXxcXFxcYjAwMURMXFxcXGJ8XFxcXGIxMDFETFxcXFxifFxcXFxiR1MwMVxcXFxiJyxcbiAgICAgICAgICAgICdNb3Rvcm9sYSc6ICdNb3Rvcm9sYXxEUk9JRFh8RFJPSUQgQklPTklDfFxcXFxiRHJvaWRcXFxcYi4qQnVpbGR8QW5kcm9pZC4qWG9vbXxIUkkzOXxNT1QtfEExMjYwfEExNjgwfEE1NTV8QTg1M3xBODU1fEE5NTN8QTk1NXxBOTU2fE1vdG9yb2xhLipFTEVDVFJJRll8TW90b3JvbGEuKmkxfGk4Njd8aTk0MHxNQjIwMHxNQjMwMHxNQjUwMXxNQjUwMnxNQjUwOHxNQjUxMXxNQjUyMHxNQjUyNXxNQjUyNnxNQjYxMXxNQjYxMnxNQjYzMnxNQjgxMHxNQjg1NXxNQjg2MHxNQjg2MXxNQjg2NXxNQjg3MHxNRTUwMXxNRTUwMnxNRTUxMXxNRTUyNXxNRTYwMHxNRTYzMnxNRTcyMnxNRTgxMXxNRTg2MHxNRTg2M3xNRTg2NXxNVDYyMHxNVDcxMHxNVDcxNnxNVDcyMHxNVDgxMHxNVDg3MHxNVDkxN3xNb3Rvcm9sYS4qVElUQU5JVU18V1g0MzV8V1g0NDV8WFQzMDB8WFQzMDF8WFQzMTF8WFQzMTZ8WFQzMTd8WFQzMTl8WFQzMjB8WFQzOTB8WFQ1MDJ8WFQ1MzB8WFQ1MzF8WFQ1MzJ8WFQ1MzV8WFQ2MDN8WFQ2MTB8WFQ2MTF8WFQ2MTV8WFQ2ODF8WFQ3MDF8WFQ3MDJ8WFQ3MTF8WFQ3MjB8WFQ4MDB8WFQ4MDZ8WFQ4NjB8WFQ4NjJ8WFQ4NzV8WFQ4ODJ8WFQ4ODN8WFQ4OTR8WFQ5MDF8WFQ5MDd8WFQ5MDl8WFQ5MTB8WFQ5MTJ8WFQ5Mjh8WFQ5MjZ8WFQ5MTV8WFQ5MTl8WFQ5MjUnLFxuICAgICAgICAgICAgJ1NhbXN1bmcnOiAnU2Ftc3VuZ3xTR0gtSTMzN3xCR1QtUzUyMzB8R1QtQjIxMDB8R1QtQjI3MDB8R1QtQjI3MTB8R1QtQjMyMTB8R1QtQjMzMTB8R1QtQjM0MTB8R1QtQjM3MzB8R1QtQjM3NDB8R1QtQjU1MTB8R1QtQjU1MTJ8R1QtQjU3MjJ8R1QtQjY1MjB8R1QtQjczMDB8R1QtQjczMjB8R1QtQjczMzB8R1QtQjczNTB8R1QtQjc1MTB8R1QtQjc3MjJ8R1QtQjc4MDB8R1QtQzMwMTB8R1QtQzMwMTF8R1QtQzMwNjB8R1QtQzMyMDB8R1QtQzMyMTJ8R1QtQzMyMTJJfEdULUMzMjYyfEdULUMzMjIyfEdULUMzMzAwfEdULUMzMzAwS3xHVC1DMzMwM3xHVC1DMzMwM0t8R1QtQzMzMTB8R1QtQzMzMjJ8R1QtQzMzMzB8R1QtQzMzNTB8R1QtQzM1MDB8R1QtQzM1MTB8R1QtQzM1MzB8R1QtQzM2MzB8R1QtQzM3ODB8R1QtQzUwMTB8R1QtQzUyMTJ8R1QtQzY2MjB8R1QtQzY2MjV8R1QtQzY3MTJ8R1QtRTEwNTB8R1QtRTEwNzB8R1QtRTEwNzV8R1QtRTEwODB8R1QtRTEwODF8R1QtRTEwODV8R1QtRTEwODd8R1QtRTExMDB8R1QtRTExMDd8R1QtRTExMTB8R1QtRTExMjB8R1QtRTExMjV8R1QtRTExMzB8R1QtRTExNjB8R1QtRTExNzB8R1QtRTExNzV8R1QtRTExODB8R1QtRTExODJ8R1QtRTEyMDB8R1QtRTEyMTB8R1QtRTEyMjV8R1QtRTEyMzB8R1QtRTEzOTB8R1QtRTIxMDB8R1QtRTIxMjB8R1QtRTIxMjF8R1QtRTIxNTJ8R1QtRTIyMjB8R1QtRTIyMjJ8R1QtRTIyMzB8R1QtRTIyMzJ8R1QtRTIyNTB8R1QtRTIzNzB8R1QtRTI1NTB8R1QtRTI2NTJ8R1QtRTMyMTB8R1QtRTMyMTN8R1QtSTU1MDB8R1QtSTU1MDN8R1QtSTU3MDB8R1QtSTU4MDB8R1QtSTU4MDF8R1QtSTY0MTB8R1QtSTY0MjB8R1QtSTcxMTB8R1QtSTc0MTB8R1QtSTc1MDB8R1QtSTgwMDB8R1QtSTgxNTB8R1QtSTgxNjB8R1QtSTgxOTB8R1QtSTgzMjB8R1QtSTgzMzB8R1QtSTgzNTB8R1QtSTg1MzB8R1QtSTg3MDB8R1QtSTg3MDN8R1QtSTg5MTB8R1QtSTkwMDB8R1QtSTkwMDF8R1QtSTkwMDN8R1QtSTkwMTB8R1QtSTkwMjB8R1QtSTkwMjN8R1QtSTkwNzB8R1QtSTkwODJ8R1QtSTkxMDB8R1QtSTkxMDN8R1QtSTkyMjB8R1QtSTkyNTB8R1QtSTkzMDB8R1QtSTkzMDV8R1QtSTk1MDB8R1QtSTk1MDV8R1QtTTM1MTB8R1QtTTU2NTB8R1QtTTc1MDB8R1QtTTc2MDB8R1QtTTc2MDN8R1QtTTg4MDB8R1QtTTg5MTB8R1QtTjcwMDB8R1QtUzMxMTB8R1QtUzMzMTB8R1QtUzMzNTB8R1QtUzMzNTN8R1QtUzMzNzB8R1QtUzM2NTB8R1QtUzM2NTN8R1QtUzM3NzB8R1QtUzM4NTB8R1QtUzUyMTB8R1QtUzUyMjB8R1QtUzUyMjl8R1QtUzUyMzB8R1QtUzUyMzN8R1QtUzUyNTB8R1QtUzUyNTN8R1QtUzUyNjB8R1QtUzUyNjN8R1QtUzUyNzB8R1QtUzUzMDB8R1QtUzUzMzB8R1QtUzUzNTB8R1QtUzUzNjB8R1QtUzUzNjN8R1QtUzUzNjl8R1QtUzUzODB8R1QtUzUzODBEfEdULVM1NTYwfEdULVM1NTcwfEdULVM1NjAwfEdULVM1NjAzfEdULVM1NjEwfEdULVM1NjIwfEdULVM1NjYwfEdULVM1NjcwfEdULVM1NjkwfEdULVM1NzUwfEdULVM1NzgwfEdULVM1ODMwfEdULVM1ODM5fEdULVM2MTAyfEdULVM2NTAwfEdULVM3MDcwfEdULVM3MjAwfEdULVM3MjIwfEdULVM3MjMwfEdULVM3MjMzfEdULVM3MjUwfEdULVM3NTAwfEdULVM3NTMwfEdULVM3NTUwfEdULVM3NTYyfEdULVM3NzEwfEdULVM4MDAwfEdULVM4MDAzfEdULVM4NTAwfEdULVM4NTMwfEdULVM4NjAwfFNDSC1BMzEwfFNDSC1BNTMwfFNDSC1BNTcwfFNDSC1BNjEwfFNDSC1BNjMwfFNDSC1BNjUwfFNDSC1BNzkwfFNDSC1BNzk1fFNDSC1BODUwfFNDSC1BODcwfFNDSC1BODkwfFNDSC1BOTMwfFNDSC1BOTUwfFNDSC1BOTcwfFNDSC1BOTkwfFNDSC1JMTAwfFNDSC1JMTEwfFNDSC1JNDAwfFNDSC1JNDA1fFNDSC1JNTAwfFNDSC1JNTEwfFNDSC1JNTE1fFNDSC1JNjAwfFNDSC1JNzMwfFNDSC1JNzYwfFNDSC1JNzcwfFNDSC1JODMwfFNDSC1JOTEwfFNDSC1JOTIwfFNDSC1JOTU5fFNDSC1MQzExfFNDSC1OMTUwfFNDSC1OMzAwfFNDSC1SMTAwfFNDSC1SMzAwfFNDSC1SMzUxfFNDSC1SNDAwfFNDSC1SNDEwfFNDSC1UMzAwfFNDSC1VMzEwfFNDSC1VMzIwfFNDSC1VMzUwfFNDSC1VMzYwfFNDSC1VMzY1fFNDSC1VMzcwfFNDSC1VMzgwfFNDSC1VNDEwfFNDSC1VNDMwfFNDSC1VNDUwfFNDSC1VNDYwfFNDSC1VNDcwfFNDSC1VNDkwfFNDSC1VNTQwfFNDSC1VNTUwfFNDSC1VNjIwfFNDSC1VNjQwfFNDSC1VNjUwfFNDSC1VNjYwfFNDSC1VNzAwfFNDSC1VNzQwfFNDSC1VNzUwfFNDSC1VODEwfFNDSC1VODIwfFNDSC1VOTAwfFNDSC1VOTQwfFNDSC1VOTYwfFNDUy0yNlVDfFNHSC1BMTA3fFNHSC1BMTE3fFNHSC1BMTI3fFNHSC1BMTM3fFNHSC1BMTU3fFNHSC1BMTY3fFNHSC1BMTc3fFNHSC1BMTg3fFNHSC1BMTk3fFNHSC1BMjI3fFNHSC1BMjM3fFNHSC1BMjU3fFNHSC1BNDM3fFNHSC1BNTE3fFNHSC1BNTk3fFNHSC1BNjM3fFNHSC1BNjU3fFNHSC1BNjY3fFNHSC1BNjg3fFNHSC1BNjk3fFNHSC1BNzA3fFNHSC1BNzE3fFNHSC1BNzI3fFNHSC1BNzM3fFNHSC1BNzQ3fFNHSC1BNzY3fFNHSC1BNzc3fFNHSC1BNzk3fFNHSC1BODE3fFNHSC1BODI3fFNHSC1BODM3fFNHSC1BODQ3fFNHSC1BODY3fFNHSC1BODc3fFNHSC1BODg3fFNHSC1BODk3fFNHSC1BOTI3fFNHSC1CMTAwfFNHSC1CMTMwfFNHSC1CMjAwfFNHSC1CMjIwfFNHSC1DMTAwfFNHSC1DMTEwfFNHSC1DMTIwfFNHSC1DMTMwfFNHSC1DMTQwfFNHSC1DMTYwfFNHSC1DMTcwfFNHSC1DMTgwfFNHSC1DMjAwfFNHSC1DMjA3fFNHSC1DMjEwfFNHSC1DMjI1fFNHSC1DMjMwfFNHSC1DNDE3fFNHSC1DNDUwfFNHSC1EMzA3fFNHSC1EMzQ3fFNHSC1EMzU3fFNHSC1ENDA3fFNHSC1ENDE1fFNHSC1ENzgwfFNHSC1EODA3fFNHSC1EOTgwfFNHSC1FMTA1fFNHSC1FMjAwfFNHSC1FMzE1fFNHSC1FMzE2fFNHSC1FMzE3fFNHSC1FMzM1fFNHSC1FNTkwfFNHSC1FNjM1fFNHSC1FNzE1fFNHSC1FODkwfFNHSC1GMzAwfFNHSC1GNDgwfFNHSC1JMjAwfFNHSC1JMzAwfFNHSC1JMzIwfFNHSC1JNTUwfFNHSC1JNTc3fFNHSC1JNjAwfFNHSC1JNjA3fFNHSC1JNjE3fFNHSC1JNjI3fFNHSC1JNjM3fFNHSC1JNjc3fFNHSC1JNzAwfFNHSC1JNzE3fFNHSC1JNzI3fFNHSC1pNzQ3TXxTR0gtSTc3N3xTR0gtSTc4MHxTR0gtSTgyN3xTR0gtSTg0N3xTR0gtSTg1N3xTR0gtSTg5NnxTR0gtSTg5N3xTR0gtSTkwMHxTR0gtSTkwN3xTR0gtSTkxN3xTR0gtSTkyN3xTR0gtSTkzN3xTR0gtSTk5N3xTR0gtSjE1MHxTR0gtSjIwMHxTR0gtTDE3MHxTR0gtTDcwMHxTR0gtTTExMHxTR0gtTTE1MHxTR0gtTTIwMHxTR0gtTjEwNXxTR0gtTjUwMHxTR0gtTjYwMHxTR0gtTjYyMHxTR0gtTjYyNXxTR0gtTjcwMHxTR0gtTjcxMHxTR0gtUDEwN3xTR0gtUDIwN3xTR0gtUDMwMHxTR0gtUDMxMHxTR0gtUDUyMHxTR0gtUDczNXxTR0gtUDc3N3xTR0gtUTEwNXxTR0gtUjIxMHxTR0gtUjIyMHxTR0gtUjIyNXxTR0gtUzEwNXxTR0gtUzMwN3xTR0gtVDEwOXxTR0gtVDExOXxTR0gtVDEzOXxTR0gtVDIwOXxTR0gtVDIxOXxTR0gtVDIyOXxTR0gtVDIzOXxTR0gtVDI0OXxTR0gtVDI1OXxTR0gtVDMwOXxTR0gtVDMxOXxTR0gtVDMyOXxTR0gtVDMzOXxTR0gtVDM0OXxTR0gtVDM1OXxTR0gtVDM2OXxTR0gtVDM3OXxTR0gtVDQwOXxTR0gtVDQyOXxTR0gtVDQzOXxTR0gtVDQ1OXxTR0gtVDQ2OXxTR0gtVDQ3OXxTR0gtVDQ5OXxTR0gtVDUwOXxTR0gtVDUxOXxTR0gtVDUzOXxTR0gtVDU1OXxTR0gtVDU4OXxTR0gtVDYwOXxTR0gtVDYxOXxTR0gtVDYyOXxTR0gtVDYzOXxTR0gtVDY1OXxTR0gtVDY2OXxTR0gtVDY3OXxTR0gtVDcwOXxTR0gtVDcxOXxTR0gtVDcyOXxTR0gtVDczOXxTR0gtVDc0NnxTR0gtVDc0OXxTR0gtVDc1OXxTR0gtVDc2OXxTR0gtVDgwOXxTR0gtVDgxOXxTR0gtVDgzOXxTR0gtVDkxOXxTR0gtVDkyOXxTR0gtVDkzOXxTR0gtVDk1OXxTR0gtVDk4OXxTR0gtVTEwMHxTR0gtVTIwMHxTR0gtVTgwMHxTR0gtVjIwNXxTR0gtVjIwNnxTR0gtWDEwMHxTR0gtWDEwNXxTR0gtWDEyMHxTR0gtWDE0MHxTR0gtWDQyNnxTR0gtWDQyN3xTR0gtWDQ3NXxTR0gtWDQ5NXxTR0gtWDQ5N3xTR0gtWDUwN3xTR0gtWDYwMHxTR0gtWDYxMHxTR0gtWDYyMHxTR0gtWDYzMHxTR0gtWDcwMHxTR0gtWDgyMHxTR0gtWDg5MHxTR0gtWjEzMHxTR0gtWjE1MHxTR0gtWjE3MHxTR0gtWlgxMHxTR0gtWlgyMHxTSFctTTExMHxTUEgtQTEyMHxTUEgtQTQwMHxTUEgtQTQyMHxTUEgtQTQ2MHxTUEgtQTUwMHxTUEgtQTU2MHxTUEgtQTYwMHxTUEgtQTYyMHxTUEgtQTY2MHxTUEgtQTcwMHxTUEgtQTc0MHxTUEgtQTc2MHxTUEgtQTc5MHxTUEgtQTgwMHxTUEgtQTgyMHxTUEgtQTg0MHxTUEgtQTg4MHxTUEgtQTkwMHxTUEgtQTk0MHxTUEgtQTk2MHxTUEgtRDYwMHxTUEgtRDcwMHxTUEgtRDcxMHxTUEgtRDcyMHxTUEgtSTMwMHxTUEgtSTMyNXxTUEgtSTMzMHxTUEgtSTM1MHxTUEgtSTUwMHxTUEgtSTYwMHxTUEgtSTcwMHxTUEgtTDcwMHxTUEgtTTEwMHxTUEgtTTIyMHxTUEgtTTI0MHxTUEgtTTMwMHxTUEgtTTMwNXxTUEgtTTMyMHxTUEgtTTMzMHxTUEgtTTM1MHxTUEgtTTM2MHxTUEgtTTM3MHxTUEgtTTM4MHxTUEgtTTUxMHxTUEgtTTU0MHxTUEgtTTU1MHxTUEgtTTU2MHxTUEgtTTU3MHxTUEgtTTU4MHxTUEgtTTYxMHxTUEgtTTYyMHxTUEgtTTYzMHxTUEgtTTgwMHxTUEgtTTgxMHxTUEgtTTg1MHxTUEgtTTkwMHxTUEgtTTkxMHxTUEgtTTkyMHxTUEgtTTkzMHxTUEgtTjEwMHxTUEgtTjIwMHxTUEgtTjI0MHxTUEgtTjMwMHxTUEgtTjQwMHxTUEgtWjQwMHxTV0MtRTEwMHxTQ0gtaTkwOXxHVC1ONzEwMHxHVC1ONzEwNXxTQ0gtSTUzNXxTTS1OOTAwQXxTR0gtSTMxN3xTR0gtVDk5OUx8R1QtUzUzNjBCfEdULUk4MjYyfEdULVM2ODAyfEdULVM2MzEyfEdULVM2MzEwfEdULVM1MzEyfEdULVM1MzEwfEdULUk5MTA1fEdULUk4NTEwfEdULVM2NzkwTnxTTS1HNzEwNXxTTS1OOTAwNXxHVC1TNTMwMXxHVC1JOTI5NXxHVC1JOTE5NXxTTS1DMTAxfEdULVM3MzkyfEdULVM3NTYwfEdULUI3NjEwfEdULUk1NTEwfEdULVM3NTgyfEdULVM3NTMwRXxHVC1JODc1MHxTTS1HOTAwNlZ8U00tRzkwMDhWfFNNLUc5MDA5RHxTTS1HOTAwQXxTTS1HOTAwRHxTTS1HOTAwRnxTTS1HOTAwSHxTTS1HOTAwSXxTTS1HOTAwSnxTTS1HOTAwS3xTTS1HOTAwTHxTTS1HOTAwTXxTTS1HOTAwUHxTTS1HOTAwUjR8U00tRzkwMFN8U00tRzkwMFR8U00tRzkwMFZ8U00tRzkwMFc4JyxcbiAgICAgICAgICAgICdMRyc6ICdcXFxcYkxHXFxcXGI7fExHWy0gXT8oQzgwMHxDOTAwfEU0MDB8RTYxMHxFOTAwfEUtOTAwfEYxNjB8RjE4MEt8RjE4MEx8RjE4MFN8NzMwfDg1NXxMMTYwfExTNzQwfExTODQwfExTOTcwfExVNjIwMHxNUzY5MHxNUzY5NXxNUzc3MHxNUzg0MHxNUzg3MHxNUzkxMHxQNTAwfFA3MDB8UDcwNXxWTTY5NnxBUzY4MHxBUzY5NXxBWDg0MHxDNzI5fEU5NzB8R1M1MDV8MjcyfEMzOTV8RTczOUJLfEU5NjB8TDU1Q3xMNzVDfExTNjk2fExTODYwfFA3NjlCS3xQMzUwfFA1MDB8UDUwOXxQODcwfFVOMjcyfFVTNzMwfFZTODQwfFZTOTUwfExOMjcyfExONTEwfExTNjcwfExTODU1fExXNjkwfE1OMjcwfE1ONTEwfFA1MDl8UDc2OXxQOTMwfFVOMjAwfFVOMjcwfFVONTEwfFVONjEwfFVTNjcwfFVTNzQwfFVTNzYwfFVYMjY1fFVYODQwfFZOMjcxfFZONTMwfFZTNjYwfFZTNzAwfFZTNzQwfFZTNzUwfFZTOTEwfFZTOTIwfFZTOTMwfFZYOTIwMHxWWDExMDAwfEFYODQwQXxMVzc3MHxQNTA2fFA5MjV8UDk5OXxFNjEyfEQ5NTV8RDgwMiknLFxuICAgICAgICAgICAgJ1NvbnknOiAnU29ueVNUfFNvbnlMVHxTb255RXJpY3Nzb258U29ueUVyaWNzc29uTFQxNWl2fExUMThpfEUxMGl8TFQyOGh8TFQyNnd8U29ueUVyaWNzc29uTVQyN2l8QzUzMDN8QzY5MDJ8QzY5MDN8QzY5MDZ8QzY5NDN8RDI1MzMnLFxuICAgICAgICAgICAgJ0FzdXMnOiAnQXN1cy4qR2FsYXh5fFBhZEZvbmUuKk1vYmlsZScsXG4gICAgICAgICAgICAnTWljcm9tYXgnOiAnTWljcm9tYXguKlxcXFxiKEEyMTB8QTkyfEE4OHxBNzJ8QTExMXxBMTEwUXxBMTE1fEExMTZ8QTExMHxBOTBTfEEyNnxBNTF8QTM1fEE1NHxBMjV8QTI3fEE4OXxBNjh8QTY1fEE1N3xBOTApXFxcXGInLFxuICAgICAgICAgICAgJ1BhbG0nOiAnUGFsbVNvdXJjZXxQYWxtJyxcbiAgICAgICAgICAgICdWZXJ0dSc6ICdWZXJ0dXxWZXJ0dS4qTHRkfFZlcnR1LipBc2NlbnR8VmVydHUuKkF5eHRhfFZlcnR1LipDb25zdGVsbGF0aW9uKEZ8UXVlc3QpP3xWZXJ0dS4qTW9uaWthfFZlcnR1LipTaWduYXR1cmUnLFxuICAgICAgICAgICAgJ1BhbnRlY2gnOiAnUEFOVEVDSHxJTS1BODUwU3xJTS1BODQwU3xJTS1BODMwTHxJTS1BODMwS3xJTS1BODMwU3xJTS1BODIwTHxJTS1BODEwS3xJTS1BODEwU3xJTS1BODAwU3xJTS1UMTAwS3xJTS1BNzI1THxJTS1BNzgwTHxJTS1BNzc1Q3xJTS1BNzcwS3xJTS1BNzYwU3xJTS1BNzUwS3xJTS1BNzQwU3xJTS1BNzMwU3xJTS1BNzIwTHxJTS1BNzEwS3xJTS1BNjkwTHxJTS1BNjkwU3xJTS1BNjUwU3xJTS1BNjMwS3xJTS1BNjAwU3xWRUdBIFBUTDIxfFBUMDAzfFA4MDEwfEFEUjkxMEx8UDYwMzB8UDYwMjB8UDkwNzB8UDQxMDB8UDkwNjB8UDUwMDB8Q0RNODk5MnxUWFQ4MDQ1fEFEUjg5OTV8SVMxMVBUfFAyMDMwfFA2MDEwfFA4MDAwfFBUMDAyfElTMDZ8Q0RNODk5OXxQOTA1MHxQVDAwMXxUWFQ4MDQwfFAyMDIwfFA5MDIwfFAyMDAwfFA3MDQwfFA3MDAwfEM3OTAnLFxuICAgICAgICAgICAgJ0ZseSc6ICdJUTIzMHxJUTQ0NHxJUTQ1MHxJUTQ0MHxJUTQ0MnxJUTQ0MXxJUTI0NXxJUTI1NnxJUTIzNnxJUTI1NXxJUTIzNXxJUTI0NXxJUTI3NXxJUTI0MHxJUTI4NXxJUTI4MHxJUTI3MHxJUTI2MHxJUTI1MCcsXG4gICAgICAgICAgICAnV2lrbyc6ICdLSVRFIDRHfEhJR0hXQVl8R0VUQVdBWXxTVEFJUldBWXxEQVJLU0lERXxEQVJLRlVMTHxEQVJLTklHSFR8REFSS01PT058U0xJREV8V0FYIDRHfFJBSU5CT1d8QkxPT018U1VOU0VUfEdPQXxMRU5OWXxCQVJSWXxJR0dZfE9aWll8Q0lOSyBGSVZFfENJTksgUEVBWHxDSU5LIFBFQVggMnxDSU5LIFNMSU18Q0lOSyBTTElNIDJ8Q0lOSyArfENJTksgS0lOR3xDSU5LIFBFQVh8Q0lOSyBTTElNfFNVQkxJTScsXG4gICAgICAgICAgICAnaU1vYmlsZSc6ICdpLW1vYmlsZSAoSVF8aS1TVFlMRXxpZGVhfFpBQXxIaXR6KScsXG4gICAgICAgICAgICAnU2ltVmFsbGV5JzogJ1xcXFxiKFNQLTgwfFhULTkzMHxTWC0zNDB8WFQtOTMwfFNYLTMxMHxTUC0zNjB8U1A2MHxTUFQtODAwfFNQLTEyMHxTUFQtODAwfFNQLTE0MHxTUFgtNXxTUFgtOHxTUC0xMDB8U1BYLTh8U1BYLTEyKVxcXFxiJyxcbiAgICAgICAgICAgICdXb2xmZ2FuZyc6ICdBVC1CMjREfEFULUFTNTBIRHxBVC1BUzQwV3xBVC1BUzU1SER8QVQtQVM0NXEyfEFULUIyNkR8QVQtQVM1MFEnLFxuICAgICAgICAgICAgJ0FsY2F0ZWwnOiAnQWxjYXRlbCcsXG4gICAgICAgICAgICAnTmludGVuZG8nOiAnTmludGVuZG8gM0RTJyxcbiAgICAgICAgICAgICdBbW9pJzogJ0Ftb2knLFxuICAgICAgICAgICAgJ0lOUSc6ICdJTlEnLFxuICAgICAgICAgICAgJ0dlbmVyaWNQaG9uZSc6ICdUYXBhdGFsa3xQREE7fFNBR0VNfFxcXFxibW1wXFxcXGJ8cG9ja2V0fFxcXFxicHNwXFxcXGJ8c3ltYmlhbnxTbWFydHBob25lfHNtYXJ0Zm9ufHRyZW98dXAuYnJvd3Nlcnx1cC5saW5rfHZvZGFmb25lfFxcXFxid2FwXFxcXGJ8bm9raWF8U2VyaWVzNDB8U2VyaWVzNjB8UzYwfFNvbnlFcmljc3NvbnxOOTAwfE1BVUkuKldBUC4qQnJvd3NlcidcbiAgICAgICAgfSxcbiAgICAgICAgJ29zcyc6IHtcbiAgICAgICAgICAgICdBbmRyb2lkT1MnOiAnQW5kcm9pZCcsXG4gICAgICAgICAgICAnQmxhY2tCZXJyeU9TJzogJ2JsYWNrYmVycnl8XFxcXGJCQjEwXFxcXGJ8cmltIHRhYmxldCBvcycsXG4gICAgICAgICAgICAnUGFsbU9TJzogJ1BhbG1PU3xhdmFudGdvfGJsYXplcnxlbGFpbmV8aGlwdG9wfHBhbG18cGx1Y2tlcnx4aWlubycsXG4gICAgICAgICAgICAnU3ltYmlhbk9TJzogJ1N5bWJpYW58U3ltYk9TfFNlcmllczYwfFNlcmllczQwfFNZQi1bMC05XSt8XFxcXGJTNjBcXFxcYicsXG4gICAgICAgICAgICAnV2luZG93c01vYmlsZU9TJzogJ1dpbmRvd3MgQ0UuKihQUEN8U21hcnRwaG9uZXxNb2JpbGV8WzAtOV17M314WzAtOV17M30pfFdpbmRvdyBNb2JpbGV8V2luZG93cyBQaG9uZSBbMC05Ll0rfFdDRTsnLFxuICAgICAgICAgICAgJ1dpbmRvd3NQaG9uZU9TJzogJ1dpbmRvd3MgUGhvbmUgOC4wfFdpbmRvd3MgUGhvbmUgT1N8WEJMV1A3fFp1bmVXUDd8V2luZG93cyBOVCA2LlsyM107IEFSTTsnLFxuICAgICAgICAgICAgJ2lPUyc6ICdcXFxcYmlQaG9uZS4qTW9iaWxlfFxcXFxiaVBvZHxcXFxcYmlQYWQnLFxuICAgICAgICAgICAgJ01lZUdvT1MnOiAnTWVlR28nLFxuICAgICAgICAgICAgJ01hZW1vT1MnOiAnTWFlbW8nLFxuICAgICAgICAgICAgJ0phdmFPUyc6ICdKMk1FXFwvfFxcXFxiTUlEUFxcXFxifFxcXFxiQ0xEQ1xcXFxiJyxcbiAgICAgICAgICAgICd3ZWJPUyc6ICd3ZWJPU3xocHdPUycsXG4gICAgICAgICAgICAnYmFkYU9TJzogJ1xcXFxiQmFkYVxcXFxiJyxcbiAgICAgICAgICAgICdCUkVXT1MnOiAnQlJFVydcbiAgICAgICAgfSxcbiAgICAgICAgJ3Vhcyc6IHtcbiAgICAgICAgICAgICdDaHJvbWUnOiAnXFxcXGJDck1vXFxcXGJ8Q3JpT1N8QW5kcm9pZC4qQ2hyb21lXFwvWy4wLTldKiAoTW9iaWxlKT8nLFxuICAgICAgICAgICAgJ0RvbGZpbic6ICdcXFxcYkRvbGZpblxcXFxiJyxcbiAgICAgICAgICAgICdPcGVyYSc6ICdPcGVyYS4qTWluaXxPcGVyYS4qTW9iaXxBbmRyb2lkLipPcGVyYXxNb2JpbGUuKk9QUlxcL1swLTkuXSt8Q29hc3RcXC9bMC05Ll0rJyxcbiAgICAgICAgICAgICdTa3lmaXJlJzogJ1NreWZpcmUnLFxuICAgICAgICAgICAgJ0lFJzogJ0lFTW9iaWxlfE1TSUVNb2JpbGUnLFxuICAgICAgICAgICAgJ0ZpcmVmb3gnOiAnZmVubmVjfGZpcmVmb3guKm1hZW1vfChNb2JpbGV8VGFibGV0KS4qRmlyZWZveHxGaXJlZm94LipNb2JpbGUnLFxuICAgICAgICAgICAgJ0JvbHQnOiAnYm9sdCcsXG4gICAgICAgICAgICAnVGVhU2hhcmsnOiAndGVhc2hhcmsnLFxuICAgICAgICAgICAgJ0JsYXplcic6ICdCbGF6ZXInLFxuICAgICAgICAgICAgJ1NhZmFyaSc6ICdWZXJzaW9uLipNb2JpbGUuKlNhZmFyaXxTYWZhcmkuKk1vYmlsZXxNb2JpbGVTYWZhcmknLFxuICAgICAgICAgICAgJ1RpemVuJzogJ1RpemVuJyxcbiAgICAgICAgICAgICdVQ0Jyb3dzZXInOiAnVUMuKkJyb3dzZXJ8VUNXRUInLFxuICAgICAgICAgICAgJ2JhaWR1Ym94YXBwJzogJ2JhaWR1Ym94YXBwJyxcbiAgICAgICAgICAgICdiYWlkdWJyb3dzZXInOiAnYmFpZHVicm93c2VyJyxcbiAgICAgICAgICAgICdEaWlnb0Jyb3dzZXInOiAnRGlpZ29Ccm93c2VyJyxcbiAgICAgICAgICAgICdQdWZmaW4nOiAnUHVmZmluJyxcbiAgICAgICAgICAgICdNZXJjdXJ5JzogJ1xcXFxiTWVyY3VyeVxcXFxiJyxcbiAgICAgICAgICAgICdPYmlnb0Jyb3dzZXInOiAnT2JpZ28nLFxuICAgICAgICAgICAgJ05ldEZyb250JzogJ05GLUJyb3dzZXInLFxuICAgICAgICAgICAgJ0dlbmVyaWNCcm93c2VyJzogJ05va2lhQnJvd3NlcnxPdmlCcm93c2VyfE9uZUJyb3dzZXJ8VHdvbmt5QmVhbUJyb3dzZXJ8U0VNQy4qQnJvd3NlcnxGbHlGbG93fE1pbmltb3xOZXRGcm9udHxOb3ZhcnJhLVZpc2lvbnxNUVFCcm93c2VyfE1pY3JvTWVzc2VuZ2VyJ1xuICAgICAgICB9LFxuICAgICAgICAncHJvcHMnOiB7XG4gICAgICAgICAgICAnTW9iaWxlJzogJ01vYmlsZVxcL1tWRVJdJyxcbiAgICAgICAgICAgICdCdWlsZCc6ICdCdWlsZFxcL1tWRVJdJyxcbiAgICAgICAgICAgICdWZXJzaW9uJzogJ1ZlcnNpb25cXC9bVkVSXScsXG4gICAgICAgICAgICAnVmVuZG9ySUQnOiAnVmVuZG9ySURcXC9bVkVSXScsXG4gICAgICAgICAgICAnaVBhZCc6ICdpUGFkLipDUFVbYS16IF0rW1ZFUl0nLFxuICAgICAgICAgICAgJ2lQaG9uZSc6ICdpUGhvbmUuKkNQVVthLXogXStbVkVSXScsXG4gICAgICAgICAgICAnaVBvZCc6ICdpUG9kLipDUFVbYS16IF0rW1ZFUl0nLFxuICAgICAgICAgICAgJ0tpbmRsZSc6ICdLaW5kbGVcXC9bVkVSXScsXG4gICAgICAgICAgICAnQ2hyb21lJzogW1xuICAgICAgICAgICAgICAgICdDaHJvbWVcXC9bVkVSXScsXG4gICAgICAgICAgICAgICAgJ0NyaU9TXFwvW1ZFUl0nLFxuICAgICAgICAgICAgICAgICdDck1vXFwvW1ZFUl0nXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgJ0NvYXN0JzogW1xuICAgICAgICAgICAgICAgICdDb2FzdFxcL1tWRVJdJ1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICdEb2xmaW4nOiAnRG9sZmluXFwvW1ZFUl0nLFxuICAgICAgICAgICAgJ0ZpcmVmb3gnOiAnRmlyZWZveFxcL1tWRVJdJyxcbiAgICAgICAgICAgICdGZW5uZWMnOiAnRmVubmVjXFwvW1ZFUl0nLFxuICAgICAgICAgICAgJ0lFJzogW1xuICAgICAgICAgICAgICAgICdJRU1vYmlsZVxcL1tWRVJdOycsXG4gICAgICAgICAgICAgICAgJ0lFTW9iaWxlIFtWRVJdJyxcbiAgICAgICAgICAgICAgICAnTVNJRSBbVkVSXTsnXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgJ05ldEZyb250JzogJ05ldEZyb250XFwvW1ZFUl0nLFxuICAgICAgICAgICAgJ05va2lhQnJvd3Nlcic6ICdOb2tpYUJyb3dzZXJcXC9bVkVSXScsXG4gICAgICAgICAgICAnT3BlcmEnOiBbXG4gICAgICAgICAgICAgICAgJyBPUFJcXC9bVkVSXScsXG4gICAgICAgICAgICAgICAgJ09wZXJhIE1pbmlcXC9bVkVSXScsXG4gICAgICAgICAgICAgICAgJ1ZlcnNpb25cXC9bVkVSXSdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAnT3BlcmEgTWluaSc6ICdPcGVyYSBNaW5pXFwvW1ZFUl0nLFxuICAgICAgICAgICAgJ09wZXJhIE1vYmknOiAnVmVyc2lvblxcL1tWRVJdJyxcbiAgICAgICAgICAgICdVQyBCcm93c2VyJzogJ1VDIEJyb3dzZXJbVkVSXScsXG4gICAgICAgICAgICAnTVFRQnJvd3Nlcic6ICdNUVFCcm93c2VyXFwvW1ZFUl0nLFxuICAgICAgICAgICAgJ01pY3JvTWVzc2VuZ2VyJzogJ01pY3JvTWVzc2VuZ2VyXFwvW1ZFUl0nLFxuICAgICAgICAgICAgJ2JhaWR1Ym94YXBwJzogJ2JhaWR1Ym94YXBwXFwvW1ZFUl0nLFxuICAgICAgICAgICAgJ2JhaWR1YnJvd3Nlcic6ICdiYWlkdWJyb3dzZXJcXC9bVkVSXScsXG4gICAgICAgICAgICAnSXJvbic6ICdJcm9uXFwvW1ZFUl0nLFxuICAgICAgICAgICAgJ1NhZmFyaSc6IFtcbiAgICAgICAgICAgICAgICAnVmVyc2lvblxcL1tWRVJdJyxcbiAgICAgICAgICAgICAgICAnU2FmYXJpXFwvW1ZFUl0nXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgJ1NreWZpcmUnOiAnU2t5ZmlyZVxcL1tWRVJdJyxcbiAgICAgICAgICAgICdUaXplbic6ICdUaXplblxcL1tWRVJdJyxcbiAgICAgICAgICAgICdXZWJraXQnOiAnd2Via2l0WyBcXC9dW1ZFUl0nLFxuICAgICAgICAgICAgJ0dlY2tvJzogJ0dlY2tvXFwvW1ZFUl0nLFxuICAgICAgICAgICAgJ1RyaWRlbnQnOiAnVHJpZGVudFxcL1tWRVJdJyxcbiAgICAgICAgICAgICdQcmVzdG8nOiAnUHJlc3RvXFwvW1ZFUl0nLFxuICAgICAgICAgICAgJ2lPUyc6ICcgXFxcXGJpP09TXFxcXGIgW1ZFUl1bIDtdezF9JyxcbiAgICAgICAgICAgICdBbmRyb2lkJzogJ0FuZHJvaWQgW1ZFUl0nLFxuICAgICAgICAgICAgJ0JsYWNrQmVycnknOiBbXG4gICAgICAgICAgICAgICAgJ0JsYWNrQmVycnlbXFxcXHddK1xcL1tWRVJdJyxcbiAgICAgICAgICAgICAgICAnQmxhY2tCZXJyeS4qVmVyc2lvblxcL1tWRVJdJyxcbiAgICAgICAgICAgICAgICAnVmVyc2lvblxcL1tWRVJdJ1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICdCUkVXJzogJ0JSRVcgW1ZFUl0nLFxuICAgICAgICAgICAgJ0phdmEnOiAnSmF2YVxcL1tWRVJdJyxcbiAgICAgICAgICAgICdXaW5kb3dzIFBob25lIE9TJzogW1xuICAgICAgICAgICAgICAgICdXaW5kb3dzIFBob25lIE9TIFtWRVJdJyxcbiAgICAgICAgICAgICAgICAnV2luZG93cyBQaG9uZSBbVkVSXSdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAnV2luZG93cyBQaG9uZSc6ICdXaW5kb3dzIFBob25lIFtWRVJdJyxcbiAgICAgICAgICAgICdXaW5kb3dzIENFJzogJ1dpbmRvd3MgQ0VcXC9bVkVSXScsXG4gICAgICAgICAgICAnV2luZG93cyBOVCc6ICdXaW5kb3dzIE5UIFtWRVJdJyxcbiAgICAgICAgICAgICdTeW1iaWFuJzogW1xuICAgICAgICAgICAgICAgICdTeW1iaWFuT1NcXC9bVkVSXScsXG4gICAgICAgICAgICAgICAgJ1N5bWJpYW5cXC9bVkVSXSdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAnd2ViT1MnOiBbXG4gICAgICAgICAgICAgICAgJ3dlYk9TXFwvW1ZFUl0nLFxuICAgICAgICAgICAgICAgICdocHdPU1xcL1tWRVJdOydcbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBCcm93c2VyIHVzZXJBZ2VudFxuICAgICAqL1xuICAgIHVhOiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCxcblxuICAgIC8qKlxuICAgICAqIENvbnZlcnQgZGV2aWNlLCBvcywgYnJvd3NlciBpbmZvIHRvIHJlZyBlZGl0LlxuICAgICAqL1xuICAgIGNvbnZlcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcnVsZSxcbiAgICAgICAgICAgIG1vYmlsZURldGVjdFJ1bGVzID0gdGhpcy5tb2JpbGVSZWdUZXh0O1xuXG4gICAgICAgIHRoaXMuX3Byb3BDb252ZXJ0KCk7XG5cbiAgICAgICAgZm9yIChydWxlIGluIG1vYmlsZURldGVjdFJ1bGVzKSB7XG4gICAgICAgICAgICBpZiAocnVsZSAhPT0gJ3Byb3BzJykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbnZlcnRUb1JlZ0V4cChtb2JpbGVEZXRlY3RSdWxlc1tydWxlXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29udmVydCBwcm9wZXJ0eSBieSBlYWNoIGludmlyb25tZW50XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfcHJvcENvbnZlcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIga2V5LFxuICAgICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgbGVuLFxuICAgICAgICAgICAgdmVyUG9zLFxuICAgICAgICAgICAgaGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksXG4gICAgICAgICAgICBydWxlcyA9IHRoaXMubW9iaWxlUmVnVGV4dC5wcm9wcztcblxuICAgICAgICBmb3IgKGtleSBpbiBydWxlcykge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3AuY2FsbChydWxlcywga2V5KSkge1xuICAgICAgICAgICAgICAgIHZhbHVlcyA9IHJ1bGVzW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKCF0dWkudXRpbC5pc0FycmF5KHZhbHVlcykpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzID0gW3ZhbHVlc107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlbiA9IHZhbHVlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWVzW2ldO1xuICAgICAgICAgICAgICAgICAgICB2ZXJQb3MgPSB2YWx1ZS5pbmRleE9mKCdbVkVSXScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmVyUG9zID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3Vic3RyaW5nKDAsIHZlclBvcykgKyAnKFtcXFxcdy5fXFxcXCtdKyknICsgdmFsdWUuc3Vic3RyaW5nKHZlclBvcyArIDUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc1tpXSA9IG5ldyBSZWdFeHAodmFsdWUsICdpJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJ1bGVzW2tleV0gPSB2YWx1ZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IHVzZXJBZ2VudFxuICAgICAqL1xuICAgIHVzZXJBZ2VudDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0dWkudXRpbC5pc1VuZGVmaW5lZCh0aGlzLmNhY2hlLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUudXNlckFnZW50ID0gdGhpcy5fZmluZE1hdGNoKHRoaXMubW9iaWxlUmVnVGV4dC51YXMsIHRoaXMudWEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlLnVzZXJBZ2VudDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbGwgZGV0ZWN0ZWQgdXNlci1hZ2VudCBzdHJpbmdzLlxuICAgICAqIDxicj5cbiAgICAgKiBUaGUgYXJyYXkgaXMgZW1wdHkgb3IgY29udGFpbnMgb25lIG9yIG1vcmUgb2YgZm9sbG93aW5nIGtleXM6PGJyPlxuICAgICAqIDxicj48dHQ+Q2hyb21lLCBEb2xmaW4sIE9wZXJhLCBTa3lmaXJlLCBJRSwgRmlyZWZveCwgQm9sdCwgVGVhU2hhcmssIEJsYXplciwgU2FmYXJpLFxuICAgICAqIFRpemVuLCBVQ0Jyb3dzZXIsIGJhaWR1Ym94YXBwLCBiYWlkdWJyb3dzZXIsIERpaWdvQnJvd3NlciwgUHVmZmluLCBNZXJjdXJ5LFxuICAgICAqIE9iaWdvQnJvd3NlciwgTmV0RnJvbnQsIEdlbmVyaWNCcm93c2VyPC90dD48YnI+XG4gICAgICogPGJyPlxuICAgICAqIEluIG1vc3QgY2FzZXMgY2FsbGluZyB7QGxpbmsgTW9iaWxlRGV0ZWN0I3VzZXJBZ2VudH0gd2lsbCBiZSBzdWZmaWNpZW50LiBCdXQgdGhlcmUgYXJlIHJhcmVcbiAgICAgKiBjYXNlcyB3aGVyZSBhIG1vYmlsZSBkZXZpY2UgcHJldGVuZHMgdG8gYmUgbW9yZSB0aGFuIG9uZSBwYXJ0aWN1bGFyIGJyb3dzZXIuIFlvdSBjYW4gZ2V0IHRoZVxuICAgICAqIGxpc3Qgb2YgYWxsIG1hdGNoZXMgd2l0aCB7QGxpbmsgTW9iaWxlRGV0ZWN0I3VzZXJBZ2VudHN9IG9yIGNoZWNrIGZvciBhIHBhcnRpY3VsYXIgdmFsdWUgYnlcbiAgICAgKiBwcm92aWRpbmcgb25lIG9mIHRoZSBkZWZpbmVkIGtleXMgYXMgZmlyc3QgYXJndW1lbnQgdG8ge0BsaW5rIE1vYmlsZURldGVjdCNpc30uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IHRoZSBhcnJheSBvZiBkZXRlY3RlZCB1c2VyLWFnZW50IGtleXMgb3IgPHR0PltdPC90dD5cbiAgICAgKiBAZnVuY3Rpb24gTW9iaWxlRGV0ZWN0I3VzZXJBZ2VudHNcbiAgICAgKi9cbiAgICB1c2VyQWdlbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0dWkudXRpbC5pc1VuZGVmaW5lZCh0aGlzLmNhY2hlLnVzZXJBZ2VudHMpKSB7XG4gICAgICAgICAgICB0aGlzLmNhY2hlLnVzZXJBZ2VudHMgPSB0aGlzLl9maW5kTWF0Y2hlcyh0aGlzLm1vYmlsZVJlZ1RleHQudWFzLCB0aGlzLnVhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZS51c2VyQWdlbnRzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb252ZXIgdG8gcmVnIGV4cFxuICAgICAqIEBwYXJhbSBvYmplY3RcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9jb252ZXJ0VG9SZWdFeHA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgICAgICB2YXIgaGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksXG4gICAgICAgICAgICBrZXk7XG4gICAgICAgIGZvciAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3AuY2FsbChvYmplY3QsIGtleSkpIHtcbiAgICAgICAgICAgICAgICBvYmplY3Rba2V5XSA9IG5ldyBSZWdFeHAob2JqZWN0W2tleV0sICdpJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRmluZCBPU1xuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldE9TOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbmRNYXRjaCh0aGlzLm1vYmlsZVJlZ1RleHQub3NzMCwgdGhpcy51YSkgfHxcbiAgICAgICAgICAgIHRoaXMuX2ZpbmRNYXRjaCh0aGlzLm1vYmlsZVJlZ1RleHQub3NzLCB0aGlzLnVhKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRmluZCBtYXRjaCB1c2VyYWdlbnRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9maW5kTWF0Y2g6IGZ1bmN0aW9uKHJ1bGVzLCB1c2VyQWdlbnQpIHtcbiAgICAgICAgdmFyIGtleSxcbiAgICAgICAgICAgIGhhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICAgICAgICBmb3IgKGtleSBpbiBydWxlcykge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3AuY2FsbChydWxlcywga2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChydWxlc1trZXldLnRlc3QodXNlckFnZW50KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGVzdCB1c2VyQWdlbnQgc3RyaW5nIGFnYWluc3QgYSBzZXQgb2YgcnVsZXMgYW5kIHJldHVybiBhbiBhcnJheSBvZiBtYXRjaGVkIGtleXMuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJ1bGVzIChrZXkgaXMgU3RyaW5nLCB2YWx1ZSBpcyBSZWdFeHApXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHVzZXJBZ2VudCB0aGUgbmF2aWdhdG9yLnVzZXJBZ2VudCAob3IgSFRUUC1IZWFkZXIgJ1VzZXItQWdlbnQnKS5cbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IGFuIGFycmF5IG9mIG1hdGNoZWQga2V5cywgbWF5IGJlIGVtcHR5IHdoZW4gdGhlcmUgaXMgbm8gbWF0Y2gsIGJ1dCBub3QgPHR0Pm51bGw8L3R0PlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2ZpbmRNYXRjaGVzOiBmdW5jdGlvbihydWxlcywgdXNlckFnZW50KSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXSxcbiAgICAgICAgICAgIGhhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcnVsZXMpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wLmNhbGwocnVsZXMsIGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAocnVsZXNba2V5XS50ZXN0KHVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRmluZCB2ZXJzaW9uXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgdmVyc2lvbjogZnVuY3Rpb24ocHJvcGVydHlOYW1lKSB7XG4gICAgICAgIHZhciB2ZXJzaW9uID0gdGhpcy5fZ2V0VmVyc2lvblN0cihwcm9wZXJ0eU5hbWUsIHRoaXMudWEpO1xuICAgICAgICByZXR1cm4gdmVyc2lvbiA/IHRoaXMuX3ByZXBhcmVWZXJzaW9uTm8odmVyc2lvbikgOiBOYU47XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrIHRoZSB2ZXJzaW9uIG9mIHRoZSBnaXZlbiBwcm9wZXJ0eSBpbiB0aGUgVXNlci1BZ2VudC5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHVzZXJBZ2VudFxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gdmVyc2lvbiBvciA8dHQ+bnVsbDwvdHQ+IGlmIHZlcnNpb24gbm90IGZvdW5kXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfZ2V0VmVyc2lvblN0cjogZnVuY3Rpb24ocHJvcGVydHlOYW1lLCB1c2VyQWdlbnQpIHtcbiAgICAgICAgdmFyIHByb3BzID0gdGhpcy5tb2JpbGVSZWdUZXh0LnByb3BzLFxuICAgICAgICAgICAgcGF0dGVybnMsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgbGVuLFxuICAgICAgICAgICAgbWF0Y2gsXG4gICAgICAgICAgICBoYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuICAgICAgICBpZiAoaGFzT3duUHJvcC5jYWxsKHByb3BzLCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgICBwYXR0ZXJucyA9IHByb3BzW3Byb3BlcnR5TmFtZV07XG4gICAgICAgICAgICBsZW4gPSBwYXR0ZXJucy5sZW5ndGg7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgICAgIG1hdGNoID0gcGF0dGVybnNbaV0uZXhlYyh1c2VyQWdlbnQpO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hbMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBQcmVwYXJlIHRoZSB2ZXJzaW9uIG51bWJlci5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmVyc2lvblxuICAgICAqIEByZXR1cm4ge051bWJlcn0gdGhlIHZlcnNpb24gbnVtYmVyIGFzIGEgZmxvYXRpbmcgbnVtYmVyXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfcHJlcGFyZVZlcnNpb25ObzogZnVuY3Rpb24odmVyc2lvbikge1xuICAgICAgICB2YXIgbnVtYmVycztcblxuICAgICAgICBudW1iZXJzID0gdmVyc2lvbi5zcGxpdCgvW2Etei5fIFxcL1xcLV0vaSk7XG4gICAgICAgIGlmIChudW1iZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdmVyc2lvbiA9IG51bWJlcnNbMF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG51bWJlcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdmVyc2lvbiA9IG51bWJlcnNbMF0gKyAnLic7XG4gICAgICAgICAgICBudW1iZXJzLnNoaWZ0KCk7XG4gICAgICAgICAgICB2ZXJzaW9uICs9IG51bWJlcnMuam9pbignJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE51bWJlcih2ZXJzaW9uKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBpT1Mgb3Igbm90XG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNJT1M6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRPUygpID09PSAnaU9TJztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBBbmRyb2lkIG9yIG5vdFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzQW5kcm9pZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldE9TKCkgPT09ICdBbmRyb2lkT1MnO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICBBZ2VudERldGVjdG9yO1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IExvYWQgbmF0aXZlIGFwcCBvciBtb3ZlIHRvIGluc3RhbGwgcGFnZVxuICogQGRlcGVuZGVuY3kgY29kZS1zbmlwcGV0LmpzLCBkZXRlY3RvcnMuanMsIGFnZW50RGV0ZWN0b3IuanNcbiAqIEBhdXRob3IgTkhOIEVudC4gRkUgZGV2IExhYiA8ZGxfamF2YXNjcmlwdEBuaG5lbnQuY29tPlxuICovXG4ndXNlIHN0cmljdCc7XG52YXIgQWdlbnREZXRlY3RvciA9IHJlcXVpcmUoJy4vYWdlbnREZXRlY3RvcicpO1xudmFyIERldGVjdG9yID0gcmVxdWlyZSgnLi9kZXRlY3RvcnMnKTtcbnZhciBpT1NEZXRlY3RvciA9IHJlcXVpcmUoJy4vaW9zRGV0ZWN0b3JzJyk7XG52YXIgRXRjRGV0ZWN0b3IgPSByZXF1aXJlKCcuL2V0Y0RldGVjdG9ycycpO1xudmFyIGFkID0gbmV3IEFnZW50RGV0ZWN0b3IoKTtcbi8qKlxuICogSXQgd29ya3Mgb24gbW9iaWxlIVxuICogQGNvbnN0cnVjdG9yXG4gKiBAY2xhc3NcbiAqIEBzZWUgQXBwTG9hZGVyI2V4ZWNcbiAqIEB0dXRvcmlhbCB0dXRvcmlhbFxuICogQHR1dG9yaWFsIHR1dG9yaWFsMlxuICovXG52YXIgQXBwTG9hZGVyID0gdHVpLnV0aWwuZGVmaW5lQ2xhc3MoLyoqIEBsZW5kcyBBcHBMb2FkZXIucHJvdG90eXBlICove1xuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmFnZW50RGV0ZWN0b3IgPSBhZDtcbiAgICAgICAgdGhpcy51YSA9IGFkLnVzZXJBZ2VudCgpO1xuICAgICAgICB0aGlzLm9zID0gYWQuZ2V0T1MoKTtcbiAgICAgICAgdGhpcy52ZXJzaW9uID0gYWQudmVyc2lvbihhZC5pb3MgPyBhZC5kZXZpY2UgOiAnQW5kcm9pZCcpO1xuICAgIH0sXG5cbiAgICBzdGF0aWM6e1xuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IGZpcnN0IHVzZXIgYWdlbnQgKGl0IHdpbGwgYmUgYnJvd3NlciBuYW1lKVxuICAgICAgICAgKiBAbWVtYmVyb2YgQXBwTG9hZGVyXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gdXNlciBhZ2VudFxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiB2YXIgQXBwTG9hZGVyID0gdHVpLmNvbXBvbmVudC5tLkFwcExvYWRlcjtcbiAgICAgICAgICogdmFyIHVhID0gQXBwTG9hZGVyLmdldFVzZXJBZ2VudCgpOyAvLyBleCkgJ3NhZmFyaSdcbiAgICAgICAgICovXG4gICAgICAgIGdldFVzZXJBZ2VudDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gYWQudXNlckFnZW50KCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBhbGwgdXNlciBhZ2VudHMgYnkgYXJyYXlcbiAgICAgICAgICogQG1lbWJlcm9mIEFwcExvYWRlclxuICAgICAgICAgKiBAcmV0dXJuIHtBcnJheX0gYWdlbnQgc3RyaW5nc1xuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiB2YXIgQXBwTG9hZGVyID0gdHVpLmNvbXBvbmVudC5tLkFwcExvYWRlcjtcbiAgICAgICAgICogdmFyIHVhcyA9IEFwcExvYWRlci5nZXRVc2VyQWdlbnRzKCk7IC8vIGV4KSBbJ3NhZmFyaSddXG4gICAgICAgICAqL1xuICAgICAgICBnZXRVc2VyQWdlbnRzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBhZC51c2VyQWdlbnRzKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBPU1xuICAgICAgICAgKiBAbWVtYmVyb2YgQXBwTG9hZGVyXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gb3NcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogdmFyIEFwcExvYWRlciA9IHR1aS5jb21wb25lbnQubS5BcHBMb2FkZXI7XG4gICAgICAgICAqIHZhciBvcyA9IEFwcExvYWRlci5nZXRPUygpOyAvLyAgJ2lPUycgb3IgJ0FuZHJvaWRPUydcbiAgICAgICAgICovXG4gICAgICAgIGdldE9TOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBhZC5nZXRPUygpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgdmVyc2lvblxuICAgICAgICAgKiBAbWVtYmVyb2YgQXBwTG9hZGVyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gb3MgdHlwZVxuICAgICAgICAgKiBAcmV0dXJuIHtudW1iZXJ8c3RyaW5nfSB2ZXJzaW9uXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqICBnZXRWZXJzaW9uKCdJT1MnKTtcbiAgICAgICAgICogIGdldFZlcnNpb24oJ0Nocm9tZScpO1xuICAgICAgICAgKiAgZ2V0VmVyc2lvbignQW5kcm9pZCcpO1xuICAgICAgICAgKi9cbiAgICAgICAgZ2V0VmVyc2lvbjogZnVuY3Rpb24odHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIGFkLnZlcnNpb24odHlwZSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogYnJvd3NlciwgZGV2aWNlIGRldGVjdG9yXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBkZXRlY3Rvcjoge30sXG4gICAgLyoqXG4gICAgICogT1MgKGFuZHJvaWQvaW9zL2V0YylcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9zOiBudWxsLFxuICAgIC8qKlxuICAgICAqIGRlZmF1bHQgb3B0aW9ucyB0byBydW4gZXhlY1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZGVmYXVsdHM6IHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGlvczoge1xuICAgICAgICAgICAgc2NoZW1lOiAnJyxcbiAgICAgICAgICAgIHVybDogJycsXG4gICAgICAgICAgICB1c2VJT1M5OiBmYWxzZSxcbiAgICAgICAgICAgIHN5bmNUb0lPUzk6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIGFuZHJvaWQ6IHtcbiAgICAgICAgICAgIHNjaGVtZTogJycsXG4gICAgICAgICAgICB1cmw6ICcnXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IG9zIGJ5IERldGVjdG9yXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCBUaGUgb3B0aW9uc1xuICAgICAqL1xuICAgIF9zZXREZXRlY3RvcjogZnVuY3Rpb24oY29udGV4dCkge1xuICAgICAgICB2YXIgYWQgPSB0aGlzLmFnZW50RGV0ZWN0b3I7XG5cbiAgICAgICAgaWYgKGFkLmFuZHJvaWQpIHsgLy8gQW5kcmlvZFxuICAgICAgICAgICAgdGhpcy5fc2V0QW5kcm9pZERldGVjdG9yKGNvbnRleHQpO1xuICAgICAgICB9IGVsc2UgaWYgKGFkLmlvcyAmJiBjb250ZXh0Lmlvc1N0b3JlVVJMKSB7IC8vIElPU1xuICAgICAgICAgICAgdGhpcy5fc2V0SU9TRGV0ZWN0b3IoY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7IC8vIEVUQ1xuICAgICAgICAgICB0aGlzLl9zZXRFdGNEZXRlY3Rvcihjb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgSU9TIERldGVjdG9yXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCBUaGUgaW5mb3JtYXRpb24gZm9yIGFwcFxuICAgICAqL1xuICAgIF9zZXRJT1NEZXRlY3RvcjogZnVuY3Rpb24oY29udGV4dCkge1xuICAgICAgICB2YXIgaW9zVmVyc2lvbiA9IHBhcnNlSW50KHRoaXMudmVyc2lvbiwgMTApO1xuICAgICAgICBpZiAoY29udGV4dC51c2VJT1M5KSB7XG4gICAgICAgICAgICBpZiAoaW9zVmVyc2lvbiA+IDggfHwgY29udGV4dC5zeW5jVG9JT1M5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXRlY3RvciA9IGlPU0RldGVjdG9yLmlvc0ZpeERldGVjdG9yO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRldGVjdG9yID0gKGlvc1ZlcnNpb24gPT09IDgpID8gaU9TRGV0ZWN0b3IuaW9zUmVjZW50RGV0ZWN0b3IgOiBpT1NEZXRlY3Rvci5pb3NPbGRlckRldGVjdG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgIGlmIChpb3NWZXJzaW9uIDwgOCkge1xuICAgICAgICAgICAgdGhpcy5kZXRlY3RvciA9IGlPU0RldGVjdG9yLmlvc09sZGVyRGV0ZWN0b3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRldGVjdG9yID0gaU9TRGV0ZWN0b3IuaW9zUmVjZW50RGV0ZWN0b3I7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IGFuZHJvaWQgRGV0ZWN0b3JcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IFRoZSBpbmZvcm1hdGlvbiBmb3IgYXBwXG4gICAgICovXG4gICAgX3NldEFuZHJvaWREZXRlY3RvcjogZnVuY3Rpb24oY29udGV4dCkge1xuICAgICAgICB2YXIgaXNOb3RJbnRlbnQgPSAodGhpcy5pc0ludGVudExlc3MoKSB8fCB0dWkudXRpbC5pc0V4aXN0eShjb250ZXh0LnVzZVVybFNjaGVtZSkpLFxuICAgICAgICAgICAgaXNJbnRlbnQgPSB0dWkudXRpbC5pc0V4aXN0eShjb250ZXh0LmludGVudFVSSSk7XG4gICAgICAgIGlmIChpc05vdEludGVudCkge1xuICAgICAgICAgICAgdGhpcy5kZXRlY3RvciA9IERldGVjdG9yLmFuZHJvaWRTY2hlbWVEZXRlY3RvcjtcbiAgICAgICAgfSBlbHNlIGlmIChpc0ludGVudCkge1xuICAgICAgICAgICAgdGhpcy5kZXRlY3RvciA9IERldGVjdG9yLmFuZHJvaWRJbnRlbnREZXRlY3RvcjtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgRXRjRGV0ZWN0b3JcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IFRoZSBpbmZvcm1hdGlvbiBmb3IgYXBwXG4gICAgICovXG4gICAgX3NldEV0Y0RldGVjdG9yOiBmdW5jdGlvbihjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuZGV0ZWN0b3IgPSBFdGNEZXRlY3RvcjtcblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChjb250ZXh0LmV0Y0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5ldGNDYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDApO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSdW4gc2VsZWN0ZWQgZGV0ZWN0b3JcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IFRoZSBpbmZvcm1hdGlvbiBmb3IgYXBwXG4gICAgICovXG4gICAgX3J1bkRldGVjdG9yOiBmdW5jdGlvbihjb250ZXh0KSB7XG4gICAgICAgIGlmICh0aGlzLmRldGVjdG9yICYmICh0aGlzLmRldGVjdG9yLnR5cGUgIT09IEV0Y0RldGVjdG9yLnR5cGUpKSB7XG4gICAgICAgICAgICB0aGlzLmRldGVjdG9yLnJ1bihjb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBpbnRlbnQgaXMgc3VwcG9ydGVkXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNJbnRlbnRMZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGludGVudGxlc3NCcm93c2VycyA9IFtcbiAgICAgICAgICAgICdmaXJlZm94JyxcbiAgICAgICAgICAgICdvcHInXG4gICAgICAgIF07XG4gICAgICAgIHZhciBibGFja0xpc3RSZWdleHAgPSBuZXcgUmVnRXhwKGludGVudGxlc3NCcm93c2Vycy5qb2luKCd8JyksICdpJyksXG4gICAgICAgICAgICBhcHAgPSB0aGlzLmFnZW50RGV0ZWN0b3I7XG4gICAgICAgIHJldHVybiBibGFja0xpc3RSZWdleHAudGVzdChhcHAudWEpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgb3NcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldE9TOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWdlbnREZXRlY3Rvci5nZXRPUygpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDYWxsIGFwcFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIFRoZSBvcHRpb24gZm9yIGFwcFxuICAgICAqICBAcGFyYW0ge29iamVjdH0gb3B0aW9ucy5pb3MgSU9TIGFwcCBpbmZvcm1hdGlvblxuICAgICAqICBAcGFyYW0ge29iamVjdH0gb3B0aW9ucy5hbmRyb2lkIEFuZHJvaWQgaW5mb3JtYXRpb25cbiAgICAgKiAgQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMudGltZXJTZXQgQSB0aW1lciB0aW1lIHNldCBmb3IgY2FsbGJhY2sgZGVsZXkgdGltZVxuICAgICAqICBAcGFyYW0ge0Z1bmN0aW9ufSBvcHRpb25zLmV0Y0NhbGxiYWNrIElmIHVuc3VwcG9ydGFibGUgbW9iaWxlXG4gICAgICogIEBwYXJhbSB7RnVuY3Rpb259IG9wdGlvbnMubm90Rm91bmRDYWxsYmFjayBJdCBub3QgZm91bmRcbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogdmFyIGxvYWRlciA9IG5ldyB0dWkuY29tcG9uZW50Lm0uQXBwTG9hZGVyKCk7XG4gICAgICogbG9hZGVyLmV4ZWMoe1xuICAgICAqICAgICAgaW9zOiB7XG4gICAgICogICAgICAgICAgc2NoZW1lOiAnZmVjaGVjazovLycsIC8vIGlwaG9uZSBhcHAgc2NoZW1lXG4gICAgICogICAgICAgICAgdXJsOiAnaXRtcy1hcHBzOi8vaXR1bmVzLmFwcGxlLmNvbS9hcHAvLi4uLi4nLCAvLyBhcHAgc3RvcmUgdXJsLFxuICAgICAqICAgICAgICAgIHVzZUlPUzk6IHRydWUsXG4gICAgICogICAgICAgICAgc3luY1RvSU9TOTogZmFsc2UsXG4gICAgICogICAgICAgICAgdW5pdmVyc2FsTGluazogJ2FwcDovLy9saW5rcy8nXG4gICAgICogICAgICB9LFxuICAgICAqICAgICAgYW5kcm9pZDoge1xuICAgICAqICAgICAgICAgIGludGVudFVSSTogJ2ludGVudDovL2hvbWUjSW50ZW50O3NjaGVtZT1mZWNoZWNrO3BhY2thZ2U9Y29tLmZlY2hlY2s7ZW5kJyAvLyBhbmRyb2lkIGludGVudCB1cmlcbiAgICAgKiAgICAgIH0sXG4gICAgICogICAgICB0aW1lclNldDogeyAvLyBvcHRpb25hbCB2YWx1ZXNcbiAgICAgKiAgICAgICAgICBpb3M6IDIwMDAsIC8vIGRlZmF1bHQ6IDIwMDBcbiAgICAgKiAgICAgICAgICBhbmRyb2lkOiAxMDAwIC8vIGRlZmF1bHQ6IDgwMFxuICAgICAqICAgICAgfSxcbiAgICAgKiAgICAgIG5vdEZvdW5kQ2FsbGJhY2s6IGZ1bmN0aW9uKCkgeyAvLyBpZiBub3QgaW5zdGFsbGVkXG4gICAgICogICAgICAgICAgYWxlcnQoJ25vdCBmb3VuZCcpO1xuICAgICAqICAgICAgfSxcbiAgICAgKiAgICAgIGV0Y0NhbGxiYWNrOiBmdW5jdGlvbigpIHsgLy8gaWYgbm90IG1vYmlsZVxuICAgICAqICAgICAgICAgIGFsZXJ0KCdldGMnKTtcbiAgICAgKiAgICAgIH1cbiAgICAgKiB9KTtcbiAgICAgKi9cbiAgICBleGVjOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIHZhciB0aW1lclNldCwgY29udGV4dDtcblxuICAgICAgICBvcHRpb25zID0gdHVpLnV0aWwuZXh0ZW5kKHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgICAgICB0aW1lclNldCA9IG9wdGlvbnMudGltZXJTZXQ7XG4gICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICB1cmxTY2hlbWU6IG9wdGlvbnMuaW9zLnNjaGVtZSxcbiAgICAgICAgICAgIGlvc1N0b3JlVVJMOiBvcHRpb25zLmlvcy51cmwsXG4gICAgICAgICAgICBzeW5jVG9JT1M5OiBvcHRpb25zLmlvcy5zeW5jVG9JT1M5LFxuICAgICAgICAgICAgdXNlSU9TOTogb3B0aW9ucy5pb3MudXNlSU9TOSxcbiAgICAgICAgICAgIHVuaXZlcnNhbExpbms6IG9wdGlvbnMuaW9zLnVuaXZlcnNhbExpbmssXG4gICAgICAgICAgICBpbnRlbnRVUkk6IG9wdGlvbnMuYW5kcm9pZC5pbnRlbnRVUkksXG4gICAgICAgICAgICB1c2VJZnJhbWU6IG9wdGlvbnMuYW5kcm9pZC51c2VJZnJhbWUsXG4gICAgICAgICAgICBvbkVycm9ySWZyYW1lOiBvcHRpb25zLmFuZHJvaWQub25FcnJvcklmcmFtZSxcbiAgICAgICAgICAgIGV0Y0NhbGxiYWNrOiBvcHRpb25zLmV0Y0NhbGxiYWNrLFxuICAgICAgICAgICAgbm90Rm91bmRDYWxsYmFjazogb3B0aW9ucy5ub3RGb3VuZENhbGxiYWNrXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fc2V0RGV0ZWN0b3IoY29udGV4dCk7XG4gICAgICAgIGlmICh0aW1lclNldCkge1xuICAgICAgICAgICAgdGhpcy5fc2V0VGltZXJUaW1lKHRpbWVyU2V0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9ydW5EZXRlY3Rvcihjb250ZXh0KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRpbWVyIHRpbWUgc2V0XG4gICAgICogQHBhcmFtIHtvYmplY3R9IHRpbWVyU2V0IEEgc2V0IG9mIHRpbWVyIHRpbWVzXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfc2V0VGltZXJUaW1lOiBmdW5jdGlvbih0aW1lclNldCkge1xuICAgICAgICBpZiAoIXRoaXMuZGV0ZWN0b3IuVElNRU9VVCkge1xuICAgICAgICAgICAgdGhpcy5kZXRlY3Rvci5USU1FT1VUID0ge307XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXRlY3Rvci5USU1FT1VULklPUyA9IHRpbWVyU2V0LmlvcyB8fCB0aGlzLmRldGVjdG9yLlRJTUVPVVQuSU9TO1xuICAgICAgICB0aGlzLmRldGVjdG9yLlRJTUVPVVQuQU5EUk9JRCA9IHRpbWVyU2V0LmFuZHJvaWQgfHwgdGhpcy5kZXRlY3Rvci5USU1FT1VULkFORFJPSUQ7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwTG9hZGVyO1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IE1peGluIG1vZHVsZXNcbiAqIEBkZXBlbmRlbmN5IGNvZGUtc25pcHBldC5qcywgYXBwTG9hZGVyLmpzXG4gKiBAYXV0aG9yIE5ITiBFbnQuIEZFIGRldiBMYWIuPGRsX2phdmFzY3JpcHRAbmhuZW50LmNvbT5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAbmFtZXNwYWNlIERldGVjdG9yXG4gKiBAaWdub3JlXG4gKi9cbnZhciBEZXRlY3RvciA9IHtcbiAgICAvKipcbiAgICAgKiBmb3IgdGltZXJcbiAgICAgKi9cbiAgICBUSU1FT1VUOiB7XG4gICAgICAgIElPUzogMjAwMCxcbiAgICAgICAgQU5EUk9JRDogODAwLFxuICAgICAgICBJTlRFUlZBTDogMTAwXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIElkIGZvciBzdXBwb3J0IGZyYW1lXG4gICAgICovXG4gICAgU1VQUE9SVF9GUkFNRV9JRDogJ3R1aS1zdXBwb3J0LWZyYW1lJyxcblxuICAgIC8qKlxuICAgICAqIE1vdmUgcGFnZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSBVUkxcbiAgICAgKiBAbWVtYmVyb2YgRGV0ZWN0b3JcbiAgICAgKi9cbiAgICBtb3ZlVG86IGZ1bmN0aW9uKHVybCkge1xuICAgICAgICB0b3AubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2FsbCBhcHAgYnkgaWZyYW1lXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIEFwcCB1cmxcbiAgICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IElGcmFtZVxuICAgICAqL1xuICAgIHJ1bkFwcFdpdGhJZnJhbWU6IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgaWZyYW1lID0gc2VsZi5jcmVhdGVTdXBwb3J0RnJhbWUoKTtcblxuICAgICAgICBpZnJhbWUuc3JjID0gdXJsO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gICAgICAgIHJldHVybiBpZnJhbWU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBpZnJhbWVcbiAgICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IElGcmFtZVxuICAgICAqL1xuICAgIGNyZWF0ZVN1cHBvcnRGcmFtZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgICAgIHR1aS51dGlsLmV4dGVuZChpZnJhbWUsIHtcbiAgICAgICAgICAgIGlkOiB0aGlzLlNVUFBPUlRfRlJBTUVfSUQsXG4gICAgICAgICAgICBmcmFtZWJvcmRlcjogJzAnLFxuICAgICAgICAgICAgd2lkdGg6ICcwJyxcbiAgICAgICAgICAgIGhlaWdodDogJzAnXG4gICAgICAgIH0pO1xuICAgICAgICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgcmV0dXJuIGlmcmFtZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGVmZXIgY2FsbCBjYWxsYmFja1xuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIEEgY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZSBBIGRlbGF5IHRpbWVcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfHVuZGVmaW5lZH0gVGltZXIgaWRcbiAgICAgKi9cbiAgICBkZWZlckNhbGxiYWNrOiBmdW5jdGlvbiAoY2FsbGJhY2ssIHRpbWUpIHtcbiAgICAgICAgdmFyIGNsaWNrZWRBdCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgbm93LFxuICAgICAgICAgICAgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCF0dWkudXRpbC5pc0Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBpZiAoc2VsZi5pc1BhZ2VWaXNpYmlsaXR5KCkgJiYgbm93IC0gY2xpY2tlZEF0IDwgdGltZSArIHNlbGYuVElNRU9VVC5JTlRFUlZBTCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRpbWUpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBjaGVjayBhIHdlYnBhZ2UgaXMgdmlzaWJsZSBvciBpbiBmb2N1c1xuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBQYWdlIHZpc2liaWxpdHlcbiAgICAgKi9cbiAgICBpc1BhZ2VWaXNpYmlsaXR5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0dWkudXRpbC5pc0V4aXN0eShkb2N1bWVudC5oaWRkZW4pKSB7XG4gICAgICAgICAgICByZXR1cm4gIWRvY3VtZW50LmhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHVpLnV0aWwuaXNFeGlzdHkoZG9jdW1lbnQud2Via2l0SGlkZGVuKSkge1xuICAgICAgICAgICAgcmV0dXJuICFkb2N1bWVudC53ZWJraXRIaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufTtcblxuLyoqKioqKioqKioqKioqKipcbiAqIEFuZHJvaWQgc2VyaWVzXG4gKioqKioqKioqKioqKioqKi9cblxuLyoqXG4gKiBBbmRyb2lkIGludGVudCBsZXNzXG4gKiBAbmFtZXNwYWNlIERldGVjdG9yLmFuZHJvaWRTY2hlbWVEZXRlY3RvclxuICogQGlnbm9yZVxuICovXG5EZXRlY3Rvci5hbmRyb2lkU2NoZW1lRGV0ZWN0b3IgPSB0dWkudXRpbC5leHRlbmQoe1xuICAgIC8qKlxuICAgICAqIGRldGVjdG9yIHR5cGVcbiAgICAgKiBAbWVtYmVyb2YgRGV0ZWN0b3IuYW5kcm9pZFNjaGVtZURldGVjdG9yXG4gICAgICovXG4gICAgdHlwZTogJ3NjaGVtZScsXG5cbiAgICAvKipcbiAgICAgKiBSdW4gZGV0ZWN0b3JcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IC0gRGF0YSBmb3IgcnVubmluZ1xuICAgICAqIEBtZW1iZXJvZiBEZXRlY3Rvci5hbmRyb2lkU2NoZW1lRGV0ZWN0b3JcbiAgICAgKi9cbiAgICBydW46IGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgICAgICAgdmFyIG5vdEZvdW5kQ2FsbGJhY2sgPSBjb250ZXh0Lm5vdEZvdW5kQ2FsbGJhY2s7XG5cbiAgICAgICAgaWYgKG5vdEZvdW5kQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuZGVmZXJDYWxsYmFjayhub3RGb3VuZENhbGxiYWNrLCB0aGlzLlRJTUVPVVQuQU5EUk9JRCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ydW5BcHBXaXRoSWZyYW1lKGNvbnRleHQudXJsU2NoZW1lKTtcbiAgICB9XG59LCBEZXRlY3Rvcik7XG5cblxuLyoqXG4gKiBBbmRyb2lkIGludGVudFxuICogQG5hbWVzcGFjZSBEZXRlY3Rvci5hbmRyb2lkSW50ZW50RGV0ZWN0b3JcbiAqIEBpZ25vcmVcbiAqL1xuRGV0ZWN0b3IuYW5kcm9pZEludGVudERldGVjdG9yID0gdHVpLnV0aWwuZXh0ZW5kKHtcbiAgICAvKipcbiAgICAgKiBkZXRlY3RvciB0eXBlXG4gICAgICogQG1lbWJlcm9mIERldGVjdG9yLmFuZHJvaWRJbnRlbnREZXRlY3RvclxuICAgICAqL1xuICAgIHR5cGU6ICdpbnRlbnQnLFxuXG4gICAgLy8gRm9yY2UgaWZyYW1lXG4gICAgbGF1bmNoVmlhSWZyYW1lOiBmdW5jdGlvbihpbnRlbnRVUkksIG5vdEZvdW5kQ2FsbGJhY2ssIG9uRXJyb3JJZnJhbWUpIHtcbiAgICAgICAgdmFyIGlmcmFtZSA9IHRoaXMucnVuQXBwV2l0aElmcmFtZShpbnRlbnRVUkkpLCAvLyBMYXVuY2ggYXBwIHZpYSBpZnJhbWVcbiAgICAgICAgICAgIHRpbWVvdXRJZCA9IHRoaXMuZGVmZXJDYWxsYmFjayhub3RGb3VuZENhbGxiYWNrLCB0aGlzLlRJTUVPVVQuQU5EUk9JRCk7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy8gV2hldGhlciBicm9zd2VyIHN1cHBvcnRzIGludGVudFVSSSB3aXRoIGlmcmFtZSBhbmQgd2l0aG91dCBlcnJvci5cbiAgICAgICAgICAgICAgICBpZiAoaWZyYW1lICYmIGlmcmFtZS5jb250ZW50RG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIC8vIElmIGJyb3dzZXIgY2F1Z2h0IGFuIGVycm9yKGFjY2Vzc2luZyB0byBlcnJvciBwYWdlIGluIGlmcmFtZSksXG4gICAgICAgICAgICAgICAgLy8gIHRoaXMgY29tcG9uZW50IGNhbm5vdCBqdWRnZSB0aGUgYXBwIGlzIGluc3RhbGxlZCBvciBub3QuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgICAgICAgICAgICAgIGlmICh0dWkudXRpbC5pc0Z1bmN0aW9uKG9uRXJyb3JJZnJhbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3JJZnJhbWUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJ1biBkZXRlY3RvclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IC0gRGF0YSBmb3IgcnVubmluZ1xuICAgICAqIEBtZW1iZXJvZiBEZXRlY3Rvci5hbmRyb2lkSW50ZW50RGV0ZWN0b3JcbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgcnVuOiBmdW5jdGlvbihjb250ZXh0KSB7XG4gICAgICAgIHZhciBub3RGb3VuZENhbGxiYWNrID0gY29udGV4dC5ub3RGb3VuZENhbGxiYWNrLFxuICAgICAgICAgICAgaW50ZW50VVJJID0gY29udGV4dC5pbnRlbnRVUkk7XG5cbiAgICAgICAgaWYgKGNvbnRleHQudXNlSWZyYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmxhdW5jaFZpYUlmcmFtZShpbnRlbnRVUkksIG5vdEZvdW5kQ2FsbGJhY2ssIGNvbnRleHQub25FcnJvcklmcmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVUbyhpbnRlbnRVUkkpO1xuICAgICAgICAgICAgdGhpcy5kZWZlckNhbGxiYWNrKG5vdEZvdW5kQ2FsbGJhY2ssIHRoaXMuVElNRU9VVC5BTkRST0lEKTtcbiAgICAgICAgfVxuICAgIH1cbn0sIERldGVjdG9yKTtcbm1vZHVsZS5leHBvcnRzID0gRGV0ZWN0b3I7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgRXRjRGV0ZWN0b3IgZm9yIHVuc3VwcG9ydGVkIGVudi5cbiAqIEBhdXRob3IgTkhOIEVudC4gRkUgZGV2IExhYi48ZGxfamF2YXNjcmlwdEBuaG5lbnQuY29tPlxuICovXG4ndXNlIHN0cmljdCc7XG4vKipcbiAqIEBuYW1lc3BhY2UgRXRjRGV0ZWN0b3JcbiAqIEBpZ25vcmVcbiAqL1xudmFyIEV0Y0RldGVjdG9yID0ge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXJvZiBFdGNEZXRlY3RvclxuICAgICAqL1xuICAgIHR5cGU6ICdldGMnLFxuICAgIC8qKlxuICAgICAqIEBtZW1iZXJvZiBFdGNEZXRlY3RvclxuICAgICAqL1xuICAgIHJ1bjogZnVuY3Rpb24oKSB7XG4gICAgfVxufTtcbm1vZHVsZS5leHBvcnRzID0gRXRjRGV0ZWN0b3I7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgaU9TIE1peGluIG1vZHVsZXNcbiAqIEBkZXBlbmRlbmN5IGNvZGUtc25pcHBldC5qcywgYXBwTG9hZGVyLmpzXG4gKiBAYXV0aG9yIE5ITiBFbnQuIEZFIGRldiBMYWIuPGRsX2phdmFzY3JpcHRAbmhuZW50LmNvbT5cbiAqL1xuICd1c2Ugc3RyaWN0JztcbnZhciBEZXRlY3RvciA9IHJlcXVpcmUoJy4vZGV0ZWN0b3JzJyk7XG5cbi8qKlxuICogQG5hbWVzcGFjZSBpT1NEZXRlY3RvclxuICogQGlnbm9yZVxuICovXG52YXIgaU9TRGV0ZWN0b3IgPSB0dWkudXRpbC5leHRlbmQoe1xuICAgIC8qKlxuICAgICAqIGRldGVjdG9yIHR5cGVcbiAgICAgKiBAbWVtYmVyb2YgaU9TRGV0ZWN0b3JcbiAgICAgKi9cbiAgICB0eXBlOiAnaW9zJyxcblxuICAgIC8qKlxuICAgICAqIHZpc2libGl0eWNoYW5nZSBldmVudFxuICAgICAqIEBtZW1iZXJvZiBpT1NEZXRlY3RvclxuICAgICAqL1xuICAgIGJpbmRWaXNpYmlsaXR5Q2hhbmdlRXZlbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLmlzUGFnZVZpc2liaWxpdHkoKSkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChzZWxmLnRpZCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIGNsZWFyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqICBwYWdlaGlkZSBldmVudFxuICAgICAqICBAbWVtYmVyb2YgaU9TRGV0ZWN0b3JcbiAgICAgKi9cbiAgICBiaW5kUGFnZWhpZGVFdmVudDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BhZ2VoaWRlJywgZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5pc1BhZ2VWaXNpYmlsaXR5KCkpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoc2VsZi50aWQpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwYWdlaGlkZScsIGNsZWFyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSwgRGV0ZWN0b3IpO1xuXG4vKipcbiAqIGlvcyBvbGQgZGV0ZWN0b3JcbiAqIEBuYW1lc3BhY2UgaU9TRGV0ZWN0b3IuaW9zT2xkZXJEZXRlY3RvclxuICogQGlnbm9yZVxuICovXG5pT1NEZXRlY3Rvci5pb3NPbGRlckRldGVjdG9yID0gdHVpLnV0aWwuZXh0ZW5kKHtcbiAgICAvKipcbiAgICAgKiBkZXRlY3RvciBSdW5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCBEYXRhIGZvciBhcHAgbG9hZGluZ1xuICAgICAqIEBtZW1iZXJvZiBpT1NEZXRlY3Rvci5pb3NPbGRlckRldGVjdG9yXG4gICAgICovXG4gICAgcnVuOiBmdW5jdGlvbihjb250ZXh0KSB7XG4gICAgICAgIHZhciBzdG9yZVVSTCA9IGNvbnRleHQuaW9zU3RvcmVVUkwsXG4gICAgICAgICAgICBjYWxsYmFjayA9IGNvbnRleHQubm90Rm91bmRDYWxsYmFjayB8fCB0dWkudXRpbC5iaW5kKHRoaXMubW92ZVRvLCB0aGlzLCBzdG9yZVVSTCk7XG5cbiAgICAgICAgdGhpcy50aWQgPSB0aGlzLmRlZmVyQ2FsbGJhY2soY2FsbGJhY2ssIHRoaXMuVElNRU9VVC5JT1MpO1xuICAgICAgICB0aGlzLmJpbmRQYWdlaGlkZUV2ZW50KCk7XG4gICAgICAgIHRoaXMucnVuQXBwV2l0aElmcmFtZShjb250ZXh0LnVybFNjaGVtZSk7XG4gICAgfVxufSwgaU9TRGV0ZWN0b3IpO1xuXG4vKipcbiAqIGlvcyByZWNlbnQgZGV0ZWN0b3JcbiAqIEBuYW1lc3BhY2UgaU9TRGV0ZWN0b3IuaW9zUmVjZW50RGV0ZWN0b3JcbiAqIEBpZ25vcmVcbiAqL1xuaU9TRGV0ZWN0b3IuaW9zUmVjZW50RGV0ZWN0b3IgPSB0dWkudXRpbC5leHRlbmQoe1xuICAgIC8qKlxuICAgICAqIGRldGVjdG9yIHJ1blxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IERhdGEgZm9yIGFwcCBsb2FkaW5nXG4gICAgICogQG1lbWJlcm9mIGlPU0RldGVjdG9yLmlvc1JlY2VudERldGVjdG9yXG4gICAgICovXG4gICAgcnVuOiBmdW5jdGlvbihjb250ZXh0KSB7XG4gICAgICAgIHZhciBzdG9yZVVSTCA9IGNvbnRleHQuaW9zU3RvcmVVUkwsXG4gICAgICAgICAgICBub3RGb3VuZENhbGxiYWNrID0gY29udGV4dC5ub3RGb3VuZENhbGxiYWNrLFxuICAgICAgICAgICAgY2FsbGJhY2sgPSBub3RGb3VuZENhbGxiYWNrIHx8IHR1aS51dGlsLmJpbmQodGhpcy5tb3ZlVG8sIHRoaXMsIHN0b3JlVVJMKTtcblxuICAgICAgICB0aGlzLnRpZCA9IHRoaXMuZGVmZXJDYWxsYmFjayhjYWxsYmFjaywgdGhpcy5USU1FT1VULklPUyk7XG4gICAgICAgIHRoaXMuYmluZFZpc2liaWxpdHlDaGFuZ2VFdmVudCgpO1xuICAgICAgICB0aGlzLnJ1bkFwcFdpdGhJZnJhbWUoY29udGV4dC51cmxTY2hlbWUpO1xuICAgIH1cbn0sIGlPU0RldGVjdG9yKTtcblxuLyoqXG4gKiBpb3MgcmVjZW50IGJ1dCBzYWZhcmkgcHJldmVudCB0byBjYWxsIGFwcGxpY2F0aW9uIHZpYSBpZnJhbWUgc3JjLlxuICogQGlnbm9yZVxuICovXG5pT1NEZXRlY3Rvci5pb3NGaXhEZXRlY3RvciA9IHR1aS51dGlsLmV4dGVuZCh7XG4gICAgLyoqXG4gICAgICogZGV0ZWN0b3IgcnVuXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgRGF0YSBmb3IgYXBwIGxvYWRpbmdcbiAgICAgKiBAbWVtYmVyb2YgaU9TRGV0ZWN0b3IuaW9zRml4RGV0ZWN0b3JcbiAgICAgKi9cbiAgICBydW46IGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgICAgICAgdmFyIHN0b3JlVVJMID0gY29udGV4dC5pb3NTdG9yZVVSTCxcbiAgICAgICAgICAgIG5vdEZvdW5kQ2FsbGJhY2sgPSBjb250ZXh0Lm5vdEZvdW5kQ2FsbGJhY2ssXG4gICAgICAgICAgICBjYWxsYmFjayA9IG5vdEZvdW5kQ2FsbGJhY2sgfHwgdHVpLnV0aWwuYmluZCh0aGlzLm1vdmVUbywgdGhpcywgc3RvcmVVUkwpO1xuXG4gICAgICAgIGlmIChjb250ZXh0LnVuaXZlcnNhbExpbmspIHtcbiAgICAgICAgICAgIHRoaXMubW92ZVRvKGNvbnRleHQudW5pdmVyc2FsTGluayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRpZCA9IHRoaXMuZGVmZXJDYWxsYmFjayhjYWxsYmFjaywgdGhpcy5USU1FT1VULklPUyk7XG4gICAgICAgICAgICB0aGlzLmJpbmRWaXNpYmlsaXR5Q2hhbmdlRXZlbnQoKTtcbiAgICAgICAgICAgIHRoaXMubW92ZVRvKGNvbnRleHQudXJsU2NoZW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn0sIGlPU0RldGVjdG9yKTtcblxubW9kdWxlLmV4cG9ydHMgPSBpT1NEZXRlY3RvcjtcbiJdfQ==
