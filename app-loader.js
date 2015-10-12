(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
ne.util.defineNamespace('ne.component.m.AppLoader', require('./src/js/appLoader'));

},{"./src/js/appLoader":3}],2:[function(require,module,exports){
/**
* @fileoverview The extractor and detector user agent by device info. 
* @dependency code-snippet.js, appLoader.js
* @author NHN Entertain ment. FE dev team.
*/

/**
 * @constructor
 */
var AgentDetector = ne.util.defineClass(/**@lends AgentDetector.prototype */{
    cache: {},
    /***************
     * RegExp processing start : original - 출처 mobile-detect.js @link [https://github.com/hgoebl/mobile-detect.js]
     ***************/
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
        this.convert();

        var rules = this.mobileRegText;
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
            if(rule !== 'props') {
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
                rules[key] = values;
            }
        }
    },

    /**
     * Get userAgent
     */
    userAgent: function() {
        if (ne.util.isUndefined(this.cache.userAgent)) {
            this.cache.userAgent = this._findMatch(this.mobileRegText.uas, this.ua);
        }
        return this.cache.userAgent;
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

var AgentDetector = require('./agentDetector');
var Detector = require('./detectors');
var iOSDetector = require('./iosDetectors');
var EtcDetector = require('./etcDetectors');
/**
 * @constructor
 * @class
 */
var AppLoader = ne.util.defineClass(/** @lends AppLoader.prototype */{

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
            isNotIntend = (this.isIntentLess() || ne.util.isExisty(context.useUrlScheme)),
            isIntend = ne.util.isExisty(context.intentURI),
            store = context.storeURL,
            ad = this.agentDetector,
            iosVersion = parseInt(this.version.major, 10);

        if (ad.android && this.version >= context.andVersion) { // Andriod
            if (isNotIntend && store) {
                this.detector = Detector.androidSchemeDetector;
            } else if (isIntend) {
                this.detector = Detector.androidIntendDetector;
            }
        } else if (ad.ios && store) {// IOS
            if (context.useIOS9 && context.syncToIOS9) {
                this.detector = iOSDetector.iosFixDetector;
            } else if (context.useIOS9 && iosVersion > 8) {
                this.detector = iOSDetector.iosFixDetector;
            } else  {
                if (iosVersion < 8) {
                    this.detector = iOSDetector.iosOlderDetector;
                } else {    
                    this.detector = iOSDetector.iosRecentDetector;
                }
            }
       } else { // ETC
            setTimeout(function () {
                self.detector = EtcDetector;
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
     * @param options
     *
     * @example
     * var loader = new ne.component.AppLoader();
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
        options = ne.util.extend(this.defaults, options);
        var context = {
            appName: options.name,
            urlScheme: options.ios.scheme,
            storeURL: options.ios.url,
            intentURI: options.android.scheme,
            etcCallback: options.etcCallback,
            andVersion: options.android.version,
            syncToIOS9: options.ios.syncToIOS9,
            useIOS9: options.ios.useIOS9
        };
        this.setDetector(context);
        this.runDetector(context);
    }
});

module.exports = AppLoader;


},{"./agentDetector":2,"./detectors":4,"./etcDetectors":5,"./iosDetectors":6}],4:[function(require,module,exports){
/**
 * @fileoverview Mixin modules
 * @dependency code-snippet.js, appLoader.js
 * @author NHN Ent. FE dev team.<dl_javascript@nhnent.com>
 */
/**
 * @namespace Detector
 */
var Detector = {
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
     * Call app by iframe
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
     * Create iframe
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
     * Defer call callback
     * @param {string} time A delay time
     * @param {string} url A url to request
     * @param {function} callback A callback
     * @returns {number}
     */
    deferCallback: function (url, callback, time) {
        var clickedAt = new Date().getTime(),
            now,
            self = this;

        return setTimeout(function () {
            now = new Date().getTime();
            if (self.isPageVisibility() && now - clickedAt < time + self.TIMEOUT.INTERVAL) {
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
 * Android intent less
 * @namespace Detector.androidSchemeDetector
 */
Detector.androidSchemeDetector = ne.util.extend({
    /**
     * detector type
     * @memberof Detector.androidSchemeDetector
     */
    type: 'scheme',

    /**
     * Run detector 
     * @param {object} context
     * @memberof Detector.androidSchemeDetector
     */
    run: function(context) {
        var storeURL = context.storeURL;
        this.deferCallback(storeURL, context.notFoundCallback, this.TIMEOUT.ANDROID);
        this.runAppWithIframe(context.urlScheme);
    }
}, Detector);


/**
 * Android intent
 * @namespace Detector.androidIntendDetector
 */
Detector.androidIntendDetector = ne.util.extend({
    /**
     * detector type
     * @memberof Detector.androidIntendDetector
     */
    type: 'intend',

    /**
     * Run detector 
     * @param {object} context
     * @memberof Detector.androidIntendDetector
     */
    run: function(context) {
        setTimeout(function () {
            top.location.href = context.intentURI;
        }, this.TIMEOUT.INTERVAL);
    }
}, Detector);
module.exports = Detector;

},{}],5:[function(require,module,exports){
/**
 * @fileoverview Etc not support invironment
 * @dependency code-snippet.js
 * @author NHN Ent. FE dev team.<dl_javascript@nhnent.com>
 */

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
var Detector = require('./detectors');

/**
 * @namespace iOSDetector
 */
var iOSDetector = ne.util.extend({
    /**
     * detector type
     * @memberof iOSDetector
     */
    type: 'ios',

    /**
     * default app page move functino
     * @param storeURL
     * @memberof iOSDetector
     */
    moveTo: function(storeURL) {
        console.log('s', storeURL);
        window.location.href = storeURL;
    },

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
iOSDetector.iosOlderDetector = ne.util.extend({
    /**
     * detector Run
     * @param {object} context
     * @memberof iOSDetector.iosOlderDetector
     */
    run: function(context) {
        var storeURL = context.storeURL,
            callback = context.notFoundCallback || this.moveTo;
        this.tid = this.deferCallback(storeURL, callback, this.TIMEOUT.IOS_LONG);
        this.bindPagehideEvent();
        this.runAppWithIframe(context.urlScheme);
    }
}, iOSDetector);

/**
 * ios recent detector
 * @namespace iOSDetector.iosRecentDetector
 */
iOSDetector.iosRecentDetector = ne.util.extend({
    /**
     * detector run
     * @param {object} context
     * @memberof iOSDetector.iosRecentDetector
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
}, iOSDetector);

/**
 * ios recent but safari prevent to call application via iframe src. 
 */
iOSDetector.iosFixDetector = ne.util.extend({
    /**
     * detector run
     * @param {object} context
     * @memberof iOSDetector.iosFixDetector
     */
    run: function(context) {
        this.bindVisibilityChangeEvent();
        this.moveTo(context.storeURL); 
    } 
}, iOSDetector);

module.exports = iOSDetector;

},{"./detectors":4}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsInNyYy9qcy9hZ2VudERldGVjdG9yLmpzIiwic3JjL2pzL2FwcExvYWRlci5qcyIsInNyYy9qcy9kZXRlY3RvcnMuanMiLCJzcmMvanMvZXRjRGV0ZWN0b3JzLmpzIiwic3JjL2pzL2lvc0RldGVjdG9ycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcldBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibmUudXRpbC5kZWZpbmVOYW1lc3BhY2UoJ25lLmNvbXBvbmVudC5tLkFwcExvYWRlcicsIHJlcXVpcmUoJy4vc3JjL2pzL2FwcExvYWRlcicpKTtcbiIsIi8qKlxuKiBAZmlsZW92ZXJ2aWV3IFRoZSBleHRyYWN0b3IgYW5kIGRldGVjdG9yIHVzZXIgYWdlbnQgYnkgZGV2aWNlIGluZm8uIFxuKiBAZGVwZW5kZW5jeSBjb2RlLXNuaXBwZXQuanMsIGFwcExvYWRlci5qc1xuKiBAYXV0aG9yIE5ITiBFbnRlcnRhaW4gbWVudC4gRkUgZGV2IHRlYW0uXG4qL1xuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICovXG52YXIgQWdlbnREZXRlY3RvciA9IG5lLnV0aWwuZGVmaW5lQ2xhc3MoLyoqQGxlbmRzIEFnZW50RGV0ZWN0b3IucHJvdG90eXBlICove1xuICAgIGNhY2hlOiB7fSxcbiAgICAvKioqKioqKioqKioqKioqXG4gICAgICogUmVnRXhwIHByb2Nlc3Npbmcgc3RhcnQgOiBvcmlnaW5hbCAtIOy2nOyymCBtb2JpbGUtZGV0ZWN0LmpzIEBsaW5rIFtodHRwczovL2dpdGh1Yi5jb20vaGdvZWJsL21vYmlsZS1kZXRlY3QuanNdXG4gICAgICoqKioqKioqKioqKioqKi9cbiAgICAvKipcbiAgICAgKiBFYWNoIGRldmljZSBpbmZvIGFuZCBvcyByZWcgc3RyaW5nXG4gICAgICovXG4gICAgbW9iaWxlUmVnVGV4dDoge1xuICAgICAgICAncGhvbmVzJzoge1xuICAgICAgICAgICAgJ2lQaG9uZSc6ICdcXFxcYmlQaG9uZVxcXFxifFxcXFxiaVBvZFxcXFxiJyxcbiAgICAgICAgICAgICdCbGFja0JlcnJ5JzogJ0JsYWNrQmVycnl8XFxcXGJCQjEwXFxcXGJ8cmltWzAtOV0rJyxcbiAgICAgICAgICAgICdIVEMnOiAnSFRDfEhUQy4qKFNlbnNhdGlvbnxFdm98VmlzaW9ufEV4cGxvcmVyfDY4MDB8ODEwMHw4OTAwfEE3MjcyfFM1MTBlfEMxMTBlfExlZ2VuZHxEZXNpcmV8VDgyODIpfEFQWDUxNUNLVHxRdGVrOTA5MHxBUEE5MjkyS1R8SERfbWluaXxTZW5zYXRpb24uKlo3MTBlfFBHODYxMDB8WjcxNWV8RGVzaXJlLiooQTgxODF8SEQpfEFEUjYyMDB8QURSNjQwMEx8QURSNjQyNXwwMDFIVHxJbnNwaXJlIDRHfEFuZHJvaWQuKlxcXFxiRVZPXFxcXGJ8VC1Nb2JpbGUgRzF8WjUyMG0nLFxuICAgICAgICAgICAgJ05leHVzJzogJ05leHVzIE9uZXxOZXh1cyBTfEdhbGF4eS4qTmV4dXN8QW5kcm9pZC4qTmV4dXMuKk1vYmlsZXxOZXh1cyA0fE5leHVzIDV8TmV4dXMgNicsXG4gICAgICAgICAgICAnRGVsbCc6ICdEZWxsLipTdHJlYWt8RGVsbC4qQWVyb3xEZWxsLipWZW51ZXxERUxMLipWZW51ZSBQcm98RGVsbCBGbGFzaHxEZWxsIFNtb2tlfERlbGwgTWluaSAzaVh8WENEMjh8WENEMzV8XFxcXGIwMDFETFxcXFxifFxcXFxiMTAxRExcXFxcYnxcXFxcYkdTMDFcXFxcYicsXG4gICAgICAgICAgICAnTW90b3JvbGEnOiAnTW90b3JvbGF8RFJPSURYfERST0lEIEJJT05JQ3xcXFxcYkRyb2lkXFxcXGIuKkJ1aWxkfEFuZHJvaWQuKlhvb218SFJJMzl8TU9ULXxBMTI2MHxBMTY4MHxBNTU1fEE4NTN8QTg1NXxBOTUzfEE5NTV8QTk1NnxNb3Rvcm9sYS4qRUxFQ1RSSUZZfE1vdG9yb2xhLippMXxpODY3fGk5NDB8TUIyMDB8TUIzMDB8TUI1MDF8TUI1MDJ8TUI1MDh8TUI1MTF8TUI1MjB8TUI1MjV8TUI1MjZ8TUI2MTF8TUI2MTJ8TUI2MzJ8TUI4MTB8TUI4NTV8TUI4NjB8TUI4NjF8TUI4NjV8TUI4NzB8TUU1MDF8TUU1MDJ8TUU1MTF8TUU1MjV8TUU2MDB8TUU2MzJ8TUU3MjJ8TUU4MTF8TUU4NjB8TUU4NjN8TUU4NjV8TVQ2MjB8TVQ3MTB8TVQ3MTZ8TVQ3MjB8TVQ4MTB8TVQ4NzB8TVQ5MTd8TW90b3JvbGEuKlRJVEFOSVVNfFdYNDM1fFdYNDQ1fFhUMzAwfFhUMzAxfFhUMzExfFhUMzE2fFhUMzE3fFhUMzE5fFhUMzIwfFhUMzkwfFhUNTAyfFhUNTMwfFhUNTMxfFhUNTMyfFhUNTM1fFhUNjAzfFhUNjEwfFhUNjExfFhUNjE1fFhUNjgxfFhUNzAxfFhUNzAyfFhUNzExfFhUNzIwfFhUODAwfFhUODA2fFhUODYwfFhUODYyfFhUODc1fFhUODgyfFhUODgzfFhUODk0fFhUOTAxfFhUOTA3fFhUOTA5fFhUOTEwfFhUOTEyfFhUOTI4fFhUOTI2fFhUOTE1fFhUOTE5fFhUOTI1JyxcbiAgICAgICAgICAgICdTYW1zdW5nJzogJ1NhbXN1bmd8U0dILUkzMzd8QkdULVM1MjMwfEdULUIyMTAwfEdULUIyNzAwfEdULUIyNzEwfEdULUIzMjEwfEdULUIzMzEwfEdULUIzNDEwfEdULUIzNzMwfEdULUIzNzQwfEdULUI1NTEwfEdULUI1NTEyfEdULUI1NzIyfEdULUI2NTIwfEdULUI3MzAwfEdULUI3MzIwfEdULUI3MzMwfEdULUI3MzUwfEdULUI3NTEwfEdULUI3NzIyfEdULUI3ODAwfEdULUMzMDEwfEdULUMzMDExfEdULUMzMDYwfEdULUMzMjAwfEdULUMzMjEyfEdULUMzMjEySXxHVC1DMzI2MnxHVC1DMzIyMnxHVC1DMzMwMHxHVC1DMzMwMEt8R1QtQzMzMDN8R1QtQzMzMDNLfEdULUMzMzEwfEdULUMzMzIyfEdULUMzMzMwfEdULUMzMzUwfEdULUMzNTAwfEdULUMzNTEwfEdULUMzNTMwfEdULUMzNjMwfEdULUMzNzgwfEdULUM1MDEwfEdULUM1MjEyfEdULUM2NjIwfEdULUM2NjI1fEdULUM2NzEyfEdULUUxMDUwfEdULUUxMDcwfEdULUUxMDc1fEdULUUxMDgwfEdULUUxMDgxfEdULUUxMDg1fEdULUUxMDg3fEdULUUxMTAwfEdULUUxMTA3fEdULUUxMTEwfEdULUUxMTIwfEdULUUxMTI1fEdULUUxMTMwfEdULUUxMTYwfEdULUUxMTcwfEdULUUxMTc1fEdULUUxMTgwfEdULUUxMTgyfEdULUUxMjAwfEdULUUxMjEwfEdULUUxMjI1fEdULUUxMjMwfEdULUUxMzkwfEdULUUyMTAwfEdULUUyMTIwfEdULUUyMTIxfEdULUUyMTUyfEdULUUyMjIwfEdULUUyMjIyfEdULUUyMjMwfEdULUUyMjMyfEdULUUyMjUwfEdULUUyMzcwfEdULUUyNTUwfEdULUUyNjUyfEdULUUzMjEwfEdULUUzMjEzfEdULUk1NTAwfEdULUk1NTAzfEdULUk1NzAwfEdULUk1ODAwfEdULUk1ODAxfEdULUk2NDEwfEdULUk2NDIwfEdULUk3MTEwfEdULUk3NDEwfEdULUk3NTAwfEdULUk4MDAwfEdULUk4MTUwfEdULUk4MTYwfEdULUk4MTkwfEdULUk4MzIwfEdULUk4MzMwfEdULUk4MzUwfEdULUk4NTMwfEdULUk4NzAwfEdULUk4NzAzfEdULUk4OTEwfEdULUk5MDAwfEdULUk5MDAxfEdULUk5MDAzfEdULUk5MDEwfEdULUk5MDIwfEdULUk5MDIzfEdULUk5MDcwfEdULUk5MDgyfEdULUk5MTAwfEdULUk5MTAzfEdULUk5MjIwfEdULUk5MjUwfEdULUk5MzAwfEdULUk5MzA1fEdULUk5NTAwfEdULUk5NTA1fEdULU0zNTEwfEdULU01NjUwfEdULU03NTAwfEdULU03NjAwfEdULU03NjAzfEdULU04ODAwfEdULU04OTEwfEdULU43MDAwfEdULVMzMTEwfEdULVMzMzEwfEdULVMzMzUwfEdULVMzMzUzfEdULVMzMzcwfEdULVMzNjUwfEdULVMzNjUzfEdULVMzNzcwfEdULVMzODUwfEdULVM1MjEwfEdULVM1MjIwfEdULVM1MjI5fEdULVM1MjMwfEdULVM1MjMzfEdULVM1MjUwfEdULVM1MjUzfEdULVM1MjYwfEdULVM1MjYzfEdULVM1MjcwfEdULVM1MzAwfEdULVM1MzMwfEdULVM1MzUwfEdULVM1MzYwfEdULVM1MzYzfEdULVM1MzY5fEdULVM1MzgwfEdULVM1MzgwRHxHVC1TNTU2MHxHVC1TNTU3MHxHVC1TNTYwMHxHVC1TNTYwM3xHVC1TNTYxMHxHVC1TNTYyMHxHVC1TNTY2MHxHVC1TNTY3MHxHVC1TNTY5MHxHVC1TNTc1MHxHVC1TNTc4MHxHVC1TNTgzMHxHVC1TNTgzOXxHVC1TNjEwMnxHVC1TNjUwMHxHVC1TNzA3MHxHVC1TNzIwMHxHVC1TNzIyMHxHVC1TNzIzMHxHVC1TNzIzM3xHVC1TNzI1MHxHVC1TNzUwMHxHVC1TNzUzMHxHVC1TNzU1MHxHVC1TNzU2MnxHVC1TNzcxMHxHVC1TODAwMHxHVC1TODAwM3xHVC1TODUwMHxHVC1TODUzMHxHVC1TODYwMHxTQ0gtQTMxMHxTQ0gtQTUzMHxTQ0gtQTU3MHxTQ0gtQTYxMHxTQ0gtQTYzMHxTQ0gtQTY1MHxTQ0gtQTc5MHxTQ0gtQTc5NXxTQ0gtQTg1MHxTQ0gtQTg3MHxTQ0gtQTg5MHxTQ0gtQTkzMHxTQ0gtQTk1MHxTQ0gtQTk3MHxTQ0gtQTk5MHxTQ0gtSTEwMHxTQ0gtSTExMHxTQ0gtSTQwMHxTQ0gtSTQwNXxTQ0gtSTUwMHxTQ0gtSTUxMHxTQ0gtSTUxNXxTQ0gtSTYwMHxTQ0gtSTczMHxTQ0gtSTc2MHxTQ0gtSTc3MHxTQ0gtSTgzMHxTQ0gtSTkxMHxTQ0gtSTkyMHxTQ0gtSTk1OXxTQ0gtTEMxMXxTQ0gtTjE1MHxTQ0gtTjMwMHxTQ0gtUjEwMHxTQ0gtUjMwMHxTQ0gtUjM1MXxTQ0gtUjQwMHxTQ0gtUjQxMHxTQ0gtVDMwMHxTQ0gtVTMxMHxTQ0gtVTMyMHxTQ0gtVTM1MHxTQ0gtVTM2MHxTQ0gtVTM2NXxTQ0gtVTM3MHxTQ0gtVTM4MHxTQ0gtVTQxMHxTQ0gtVTQzMHxTQ0gtVTQ1MHxTQ0gtVTQ2MHxTQ0gtVTQ3MHxTQ0gtVTQ5MHxTQ0gtVTU0MHxTQ0gtVTU1MHxTQ0gtVTYyMHxTQ0gtVTY0MHxTQ0gtVTY1MHxTQ0gtVTY2MHxTQ0gtVTcwMHxTQ0gtVTc0MHxTQ0gtVTc1MHxTQ0gtVTgxMHxTQ0gtVTgyMHxTQ0gtVTkwMHxTQ0gtVTk0MHxTQ0gtVTk2MHxTQ1MtMjZVQ3xTR0gtQTEwN3xTR0gtQTExN3xTR0gtQTEyN3xTR0gtQTEzN3xTR0gtQTE1N3xTR0gtQTE2N3xTR0gtQTE3N3xTR0gtQTE4N3xTR0gtQTE5N3xTR0gtQTIyN3xTR0gtQTIzN3xTR0gtQTI1N3xTR0gtQTQzN3xTR0gtQTUxN3xTR0gtQTU5N3xTR0gtQTYzN3xTR0gtQTY1N3xTR0gtQTY2N3xTR0gtQTY4N3xTR0gtQTY5N3xTR0gtQTcwN3xTR0gtQTcxN3xTR0gtQTcyN3xTR0gtQTczN3xTR0gtQTc0N3xTR0gtQTc2N3xTR0gtQTc3N3xTR0gtQTc5N3xTR0gtQTgxN3xTR0gtQTgyN3xTR0gtQTgzN3xTR0gtQTg0N3xTR0gtQTg2N3xTR0gtQTg3N3xTR0gtQTg4N3xTR0gtQTg5N3xTR0gtQTkyN3xTR0gtQjEwMHxTR0gtQjEzMHxTR0gtQjIwMHxTR0gtQjIyMHxTR0gtQzEwMHxTR0gtQzExMHxTR0gtQzEyMHxTR0gtQzEzMHxTR0gtQzE0MHxTR0gtQzE2MHxTR0gtQzE3MHxTR0gtQzE4MHxTR0gtQzIwMHxTR0gtQzIwN3xTR0gtQzIxMHxTR0gtQzIyNXxTR0gtQzIzMHxTR0gtQzQxN3xTR0gtQzQ1MHxTR0gtRDMwN3xTR0gtRDM0N3xTR0gtRDM1N3xTR0gtRDQwN3xTR0gtRDQxNXxTR0gtRDc4MHxTR0gtRDgwN3xTR0gtRDk4MHxTR0gtRTEwNXxTR0gtRTIwMHxTR0gtRTMxNXxTR0gtRTMxNnxTR0gtRTMxN3xTR0gtRTMzNXxTR0gtRTU5MHxTR0gtRTYzNXxTR0gtRTcxNXxTR0gtRTg5MHxTR0gtRjMwMHxTR0gtRjQ4MHxTR0gtSTIwMHxTR0gtSTMwMHxTR0gtSTMyMHxTR0gtSTU1MHxTR0gtSTU3N3xTR0gtSTYwMHxTR0gtSTYwN3xTR0gtSTYxN3xTR0gtSTYyN3xTR0gtSTYzN3xTR0gtSTY3N3xTR0gtSTcwMHxTR0gtSTcxN3xTR0gtSTcyN3xTR0gtaTc0N018U0dILUk3Nzd8U0dILUk3ODB8U0dILUk4Mjd8U0dILUk4NDd8U0dILUk4NTd8U0dILUk4OTZ8U0dILUk4OTd8U0dILUk5MDB8U0dILUk5MDd8U0dILUk5MTd8U0dILUk5Mjd8U0dILUk5Mzd8U0dILUk5OTd8U0dILUoxNTB8U0dILUoyMDB8U0dILUwxNzB8U0dILUw3MDB8U0dILU0xMTB8U0dILU0xNTB8U0dILU0yMDB8U0dILU4xMDV8U0dILU41MDB8U0dILU42MDB8U0dILU42MjB8U0dILU42MjV8U0dILU43MDB8U0dILU43MTB8U0dILVAxMDd8U0dILVAyMDd8U0dILVAzMDB8U0dILVAzMTB8U0dILVA1MjB8U0dILVA3MzV8U0dILVA3Nzd8U0dILVExMDV8U0dILVIyMTB8U0dILVIyMjB8U0dILVIyMjV8U0dILVMxMDV8U0dILVMzMDd8U0dILVQxMDl8U0dILVQxMTl8U0dILVQxMzl8U0dILVQyMDl8U0dILVQyMTl8U0dILVQyMjl8U0dILVQyMzl8U0dILVQyNDl8U0dILVQyNTl8U0dILVQzMDl8U0dILVQzMTl8U0dILVQzMjl8U0dILVQzMzl8U0dILVQzNDl8U0dILVQzNTl8U0dILVQzNjl8U0dILVQzNzl8U0dILVQ0MDl8U0dILVQ0Mjl8U0dILVQ0Mzl8U0dILVQ0NTl8U0dILVQ0Njl8U0dILVQ0Nzl8U0dILVQ0OTl8U0dILVQ1MDl8U0dILVQ1MTl8U0dILVQ1Mzl8U0dILVQ1NTl8U0dILVQ1ODl8U0dILVQ2MDl8U0dILVQ2MTl8U0dILVQ2Mjl8U0dILVQ2Mzl8U0dILVQ2NTl8U0dILVQ2Njl8U0dILVQ2Nzl8U0dILVQ3MDl8U0dILVQ3MTl8U0dILVQ3Mjl8U0dILVQ3Mzl8U0dILVQ3NDZ8U0dILVQ3NDl8U0dILVQ3NTl8U0dILVQ3Njl8U0dILVQ4MDl8U0dILVQ4MTl8U0dILVQ4Mzl8U0dILVQ5MTl8U0dILVQ5Mjl8U0dILVQ5Mzl8U0dILVQ5NTl8U0dILVQ5ODl8U0dILVUxMDB8U0dILVUyMDB8U0dILVU4MDB8U0dILVYyMDV8U0dILVYyMDZ8U0dILVgxMDB8U0dILVgxMDV8U0dILVgxMjB8U0dILVgxNDB8U0dILVg0MjZ8U0dILVg0Mjd8U0dILVg0NzV8U0dILVg0OTV8U0dILVg0OTd8U0dILVg1MDd8U0dILVg2MDB8U0dILVg2MTB8U0dILVg2MjB8U0dILVg2MzB8U0dILVg3MDB8U0dILVg4MjB8U0dILVg4OTB8U0dILVoxMzB8U0dILVoxNTB8U0dILVoxNzB8U0dILVpYMTB8U0dILVpYMjB8U0hXLU0xMTB8U1BILUExMjB8U1BILUE0MDB8U1BILUE0MjB8U1BILUE0NjB8U1BILUE1MDB8U1BILUE1NjB8U1BILUE2MDB8U1BILUE2MjB8U1BILUE2NjB8U1BILUE3MDB8U1BILUE3NDB8U1BILUE3NjB8U1BILUE3OTB8U1BILUE4MDB8U1BILUE4MjB8U1BILUE4NDB8U1BILUE4ODB8U1BILUE5MDB8U1BILUE5NDB8U1BILUE5NjB8U1BILUQ2MDB8U1BILUQ3MDB8U1BILUQ3MTB8U1BILUQ3MjB8U1BILUkzMDB8U1BILUkzMjV8U1BILUkzMzB8U1BILUkzNTB8U1BILUk1MDB8U1BILUk2MDB8U1BILUk3MDB8U1BILUw3MDB8U1BILU0xMDB8U1BILU0yMjB8U1BILU0yNDB8U1BILU0zMDB8U1BILU0zMDV8U1BILU0zMjB8U1BILU0zMzB8U1BILU0zNTB8U1BILU0zNjB8U1BILU0zNzB8U1BILU0zODB8U1BILU01MTB8U1BILU01NDB8U1BILU01NTB8U1BILU01NjB8U1BILU01NzB8U1BILU01ODB8U1BILU02MTB8U1BILU02MjB8U1BILU02MzB8U1BILU04MDB8U1BILU04MTB8U1BILU04NTB8U1BILU05MDB8U1BILU05MTB8U1BILU05MjB8U1BILU05MzB8U1BILU4xMDB8U1BILU4yMDB8U1BILU4yNDB8U1BILU4zMDB8U1BILU40MDB8U1BILVo0MDB8U1dDLUUxMDB8U0NILWk5MDl8R1QtTjcxMDB8R1QtTjcxMDV8U0NILUk1MzV8U00tTjkwMEF8U0dILUkzMTd8U0dILVQ5OTlMfEdULVM1MzYwQnxHVC1JODI2MnxHVC1TNjgwMnxHVC1TNjMxMnxHVC1TNjMxMHxHVC1TNTMxMnxHVC1TNTMxMHxHVC1JOTEwNXxHVC1JODUxMHxHVC1TNjc5ME58U00tRzcxMDV8U00tTjkwMDV8R1QtUzUzMDF8R1QtSTkyOTV8R1QtSTkxOTV8U00tQzEwMXxHVC1TNzM5MnxHVC1TNzU2MHxHVC1CNzYxMHxHVC1JNTUxMHxHVC1TNzU4MnxHVC1TNzUzMEV8R1QtSTg3NTB8U00tRzkwMDZWfFNNLUc5MDA4VnxTTS1HOTAwOUR8U00tRzkwMEF8U00tRzkwMER8U00tRzkwMEZ8U00tRzkwMEh8U00tRzkwMEl8U00tRzkwMEp8U00tRzkwMEt8U00tRzkwMEx8U00tRzkwME18U00tRzkwMFB8U00tRzkwMFI0fFNNLUc5MDBTfFNNLUc5MDBUfFNNLUc5MDBWfFNNLUc5MDBXOCcsXG4gICAgICAgICAgICAnTEcnOiAnXFxcXGJMR1xcXFxiO3xMR1stIF0/KEM4MDB8QzkwMHxFNDAwfEU2MTB8RTkwMHxFLTkwMHxGMTYwfEYxODBLfEYxODBMfEYxODBTfDczMHw4NTV8TDE2MHxMUzc0MHxMUzg0MHxMUzk3MHxMVTYyMDB8TVM2OTB8TVM2OTV8TVM3NzB8TVM4NDB8TVM4NzB8TVM5MTB8UDUwMHxQNzAwfFA3MDV8Vk02OTZ8QVM2ODB8QVM2OTV8QVg4NDB8QzcyOXxFOTcwfEdTNTA1fDI3MnxDMzk1fEU3MzlCS3xFOTYwfEw1NUN8TDc1Q3xMUzY5NnxMUzg2MHxQNzY5Qkt8UDM1MHxQNTAwfFA1MDl8UDg3MHxVTjI3MnxVUzczMHxWUzg0MHxWUzk1MHxMTjI3MnxMTjUxMHxMUzY3MHxMUzg1NXxMVzY5MHxNTjI3MHxNTjUxMHxQNTA5fFA3Njl8UDkzMHxVTjIwMHxVTjI3MHxVTjUxMHxVTjYxMHxVUzY3MHxVUzc0MHxVUzc2MHxVWDI2NXxVWDg0MHxWTjI3MXxWTjUzMHxWUzY2MHxWUzcwMHxWUzc0MHxWUzc1MHxWUzkxMHxWUzkyMHxWUzkzMHxWWDkyMDB8VlgxMTAwMHxBWDg0MEF8TFc3NzB8UDUwNnxQOTI1fFA5OTl8RTYxMnxEOTU1fEQ4MDIpJyxcbiAgICAgICAgICAgICdTb255JzogJ1NvbnlTVHxTb255TFR8U29ueUVyaWNzc29ufFNvbnlFcmljc3NvbkxUMTVpdnxMVDE4aXxFMTBpfExUMjhofExUMjZ3fFNvbnlFcmljc3Nvbk1UMjdpfEM1MzAzfEM2OTAyfEM2OTAzfEM2OTA2fEM2OTQzfEQyNTMzJyxcbiAgICAgICAgICAgICdBc3VzJzogJ0FzdXMuKkdhbGF4eXxQYWRGb25lLipNb2JpbGUnLFxuICAgICAgICAgICAgJ01pY3JvbWF4JzogJ01pY3JvbWF4LipcXFxcYihBMjEwfEE5MnxBODh8QTcyfEExMTF8QTExMFF8QTExNXxBMTE2fEExMTB8QTkwU3xBMjZ8QTUxfEEzNXxBNTR8QTI1fEEyN3xBODl8QTY4fEE2NXxBNTd8QTkwKVxcXFxiJyxcbiAgICAgICAgICAgICdQYWxtJzogJ1BhbG1Tb3VyY2V8UGFsbScsXG4gICAgICAgICAgICAnVmVydHUnOiAnVmVydHV8VmVydHUuKkx0ZHxWZXJ0dS4qQXNjZW50fFZlcnR1LipBeXh0YXxWZXJ0dS4qQ29uc3RlbGxhdGlvbihGfFF1ZXN0KT98VmVydHUuKk1vbmlrYXxWZXJ0dS4qU2lnbmF0dXJlJyxcbiAgICAgICAgICAgICdQYW50ZWNoJzogJ1BBTlRFQ0h8SU0tQTg1MFN8SU0tQTg0MFN8SU0tQTgzMEx8SU0tQTgzMEt8SU0tQTgzMFN8SU0tQTgyMEx8SU0tQTgxMEt8SU0tQTgxMFN8SU0tQTgwMFN8SU0tVDEwMEt8SU0tQTcyNUx8SU0tQTc4MEx8SU0tQTc3NUN8SU0tQTc3MEt8SU0tQTc2MFN8SU0tQTc1MEt8SU0tQTc0MFN8SU0tQTczMFN8SU0tQTcyMEx8SU0tQTcxMEt8SU0tQTY5MEx8SU0tQTY5MFN8SU0tQTY1MFN8SU0tQTYzMEt8SU0tQTYwMFN8VkVHQSBQVEwyMXxQVDAwM3xQODAxMHxBRFI5MTBMfFA2MDMwfFA2MDIwfFA5MDcwfFA0MTAwfFA5MDYwfFA1MDAwfENETTg5OTJ8VFhUODA0NXxBRFI4OTk1fElTMTFQVHxQMjAzMHxQNjAxMHxQODAwMHxQVDAwMnxJUzA2fENETTg5OTl8UDkwNTB8UFQwMDF8VFhUODA0MHxQMjAyMHxQOTAyMHxQMjAwMHxQNzA0MHxQNzAwMHxDNzkwJyxcbiAgICAgICAgICAgICdGbHknOiAnSVEyMzB8SVE0NDR8SVE0NTB8SVE0NDB8SVE0NDJ8SVE0NDF8SVEyNDV8SVEyNTZ8SVEyMzZ8SVEyNTV8SVEyMzV8SVEyNDV8SVEyNzV8SVEyNDB8SVEyODV8SVEyODB8SVEyNzB8SVEyNjB8SVEyNTAnLFxuICAgICAgICAgICAgJ1dpa28nOiAnS0lURSA0R3xISUdIV0FZfEdFVEFXQVl8U1RBSVJXQVl8REFSS1NJREV8REFSS0ZVTEx8REFSS05JR0hUfERBUktNT09OfFNMSURFfFdBWCA0R3xSQUlOQk9XfEJMT09NfFNVTlNFVHxHT0F8TEVOTll8QkFSUll8SUdHWXxPWlpZfENJTksgRklWRXxDSU5LIFBFQVh8Q0lOSyBQRUFYIDJ8Q0lOSyBTTElNfENJTksgU0xJTSAyfENJTksgK3xDSU5LIEtJTkd8Q0lOSyBQRUFYfENJTksgU0xJTXxTVUJMSU0nLFxuICAgICAgICAgICAgJ2lNb2JpbGUnOiAnaS1tb2JpbGUgKElRfGktU1RZTEV8aWRlYXxaQUF8SGl0eiknLFxuICAgICAgICAgICAgJ1NpbVZhbGxleSc6ICdcXFxcYihTUC04MHxYVC05MzB8U1gtMzQwfFhULTkzMHxTWC0zMTB8U1AtMzYwfFNQNjB8U1BULTgwMHxTUC0xMjB8U1BULTgwMHxTUC0xNDB8U1BYLTV8U1BYLTh8U1AtMTAwfFNQWC04fFNQWC0xMilcXFxcYicsXG4gICAgICAgICAgICAnV29sZmdhbmcnOiAnQVQtQjI0RHxBVC1BUzUwSER8QVQtQVM0MFd8QVQtQVM1NUhEfEFULUFTNDVxMnxBVC1CMjZEfEFULUFTNTBRJyxcbiAgICAgICAgICAgICdBbGNhdGVsJzogJ0FsY2F0ZWwnLFxuICAgICAgICAgICAgJ05pbnRlbmRvJzogJ05pbnRlbmRvIDNEUycsXG4gICAgICAgICAgICAnQW1vaSc6ICdBbW9pJyxcbiAgICAgICAgICAgICdJTlEnOiAnSU5RJyxcbiAgICAgICAgICAgICdHZW5lcmljUGhvbmUnOiAnVGFwYXRhbGt8UERBO3xTQUdFTXxcXFxcYm1tcFxcXFxifHBvY2tldHxcXFxcYnBzcFxcXFxifHN5bWJpYW58U21hcnRwaG9uZXxzbWFydGZvbnx0cmVvfHVwLmJyb3dzZXJ8dXAubGlua3x2b2RhZm9uZXxcXFxcYndhcFxcXFxifG5va2lhfFNlcmllczQwfFNlcmllczYwfFM2MHxTb255RXJpY3Nzb258TjkwMHxNQVVJLipXQVAuKkJyb3dzZXInXG4gICAgICAgIH0sXG4gICAgICAgICdvc3MnOiB7XG4gICAgICAgICAgICAnQW5kcm9pZE9TJzogJ0FuZHJvaWQnLFxuICAgICAgICAgICAgJ0JsYWNrQmVycnlPUyc6ICdibGFja2JlcnJ5fFxcXFxiQkIxMFxcXFxifHJpbSB0YWJsZXQgb3MnLFxuICAgICAgICAgICAgJ1BhbG1PUyc6ICdQYWxtT1N8YXZhbnRnb3xibGF6ZXJ8ZWxhaW5lfGhpcHRvcHxwYWxtfHBsdWNrZXJ8eGlpbm8nLFxuICAgICAgICAgICAgJ1N5bWJpYW5PUyc6ICdTeW1iaWFufFN5bWJPU3xTZXJpZXM2MHxTZXJpZXM0MHxTWUItWzAtOV0rfFxcXFxiUzYwXFxcXGInLFxuICAgICAgICAgICAgJ1dpbmRvd3NNb2JpbGVPUyc6ICdXaW5kb3dzIENFLiooUFBDfFNtYXJ0cGhvbmV8TW9iaWxlfFswLTldezN9eFswLTldezN9KXxXaW5kb3cgTW9iaWxlfFdpbmRvd3MgUGhvbmUgWzAtOS5dK3xXQ0U7JyxcbiAgICAgICAgICAgICdXaW5kb3dzUGhvbmVPUyc6ICdXaW5kb3dzIFBob25lIDguMHxXaW5kb3dzIFBob25lIE9TfFhCTFdQN3xadW5lV1A3fFdpbmRvd3MgTlQgNi5bMjNdOyBBUk07JyxcbiAgICAgICAgICAgICdpT1MnOiAnXFxcXGJpUGhvbmUuKk1vYmlsZXxcXFxcYmlQb2R8XFxcXGJpUGFkJyxcbiAgICAgICAgICAgICdNZWVHb09TJzogJ01lZUdvJyxcbiAgICAgICAgICAgICdNYWVtb09TJzogJ01hZW1vJyxcbiAgICAgICAgICAgICdKYXZhT1MnOiAnSjJNRVxcL3xcXFxcYk1JRFBcXFxcYnxcXFxcYkNMRENcXFxcYicsXG4gICAgICAgICAgICAnd2ViT1MnOiAnd2ViT1N8aHB3T1MnLFxuICAgICAgICAgICAgJ2JhZGFPUyc6ICdcXFxcYkJhZGFcXFxcYicsXG4gICAgICAgICAgICAnQlJFV09TJzogJ0JSRVcnXG4gICAgICAgIH0sXG4gICAgICAgICd1YXMnOiB7XG4gICAgICAgICAgICAnQ2hyb21lJzogJ1xcXFxiQ3JNb1xcXFxifENyaU9TfEFuZHJvaWQuKkNocm9tZVxcL1suMC05XSogKE1vYmlsZSk/JyxcbiAgICAgICAgICAgICdEb2xmaW4nOiAnXFxcXGJEb2xmaW5cXFxcYicsXG4gICAgICAgICAgICAnT3BlcmEnOiAnT3BlcmEuKk1pbml8T3BlcmEuKk1vYml8QW5kcm9pZC4qT3BlcmF8TW9iaWxlLipPUFJcXC9bMC05Ll0rfENvYXN0XFwvWzAtOS5dKycsXG4gICAgICAgICAgICAnU2t5ZmlyZSc6ICdTa3lmaXJlJyxcbiAgICAgICAgICAgICdJRSc6ICdJRU1vYmlsZXxNU0lFTW9iaWxlJyxcbiAgICAgICAgICAgICdGaXJlZm94JzogJ2Zlbm5lY3xmaXJlZm94LiptYWVtb3woTW9iaWxlfFRhYmxldCkuKkZpcmVmb3h8RmlyZWZveC4qTW9iaWxlJyxcbiAgICAgICAgICAgICdCb2x0JzogJ2JvbHQnLFxuICAgICAgICAgICAgJ1RlYVNoYXJrJzogJ3RlYXNoYXJrJyxcbiAgICAgICAgICAgICdCbGF6ZXInOiAnQmxhemVyJyxcbiAgICAgICAgICAgICdTYWZhcmknOiAnVmVyc2lvbi4qTW9iaWxlLipTYWZhcml8U2FmYXJpLipNb2JpbGV8TW9iaWxlU2FmYXJpJyxcbiAgICAgICAgICAgICdUaXplbic6ICdUaXplbicsXG4gICAgICAgICAgICAnVUNCcm93c2VyJzogJ1VDLipCcm93c2VyfFVDV0VCJyxcbiAgICAgICAgICAgICdiYWlkdWJveGFwcCc6ICdiYWlkdWJveGFwcCcsXG4gICAgICAgICAgICAnYmFpZHVicm93c2VyJzogJ2JhaWR1YnJvd3NlcicsXG4gICAgICAgICAgICAnRGlpZ29Ccm93c2VyJzogJ0RpaWdvQnJvd3NlcicsXG4gICAgICAgICAgICAnUHVmZmluJzogJ1B1ZmZpbicsXG4gICAgICAgICAgICAnTWVyY3VyeSc6ICdcXFxcYk1lcmN1cnlcXFxcYicsXG4gICAgICAgICAgICAnT2JpZ29Ccm93c2VyJzogJ09iaWdvJyxcbiAgICAgICAgICAgICdOZXRGcm9udCc6ICdORi1Ccm93c2VyJyxcbiAgICAgICAgICAgICdHZW5lcmljQnJvd3Nlcic6ICdOb2tpYUJyb3dzZXJ8T3ZpQnJvd3NlcnxPbmVCcm93c2VyfFR3b25reUJlYW1Ccm93c2VyfFNFTUMuKkJyb3dzZXJ8Rmx5Rmxvd3xNaW5pbW98TmV0RnJvbnR8Tm92YXJyYS1WaXNpb258TVFRQnJvd3NlcnxNaWNyb01lc3NlbmdlcidcbiAgICAgICAgfSxcbiAgICAgICAgJ3Byb3BzJzoge1xuICAgICAgICAgICAgJ01vYmlsZSc6ICdNb2JpbGVcXC9bVkVSXScsXG4gICAgICAgICAgICAnQnVpbGQnOiAnQnVpbGRcXC9bVkVSXScsXG4gICAgICAgICAgICAnVmVyc2lvbic6ICdWZXJzaW9uXFwvW1ZFUl0nLFxuICAgICAgICAgICAgJ1ZlbmRvcklEJzogJ1ZlbmRvcklEXFwvW1ZFUl0nLFxuICAgICAgICAgICAgJ2lQYWQnOiAnaVBhZC4qQ1BVW2EteiBdK1tWRVJdJyxcbiAgICAgICAgICAgICdpUGhvbmUnOiAnaVBob25lLipDUFVbYS16IF0rW1ZFUl0nLFxuICAgICAgICAgICAgJ2lQb2QnOiAnaVBvZC4qQ1BVW2EteiBdK1tWRVJdJyxcbiAgICAgICAgICAgICdLaW5kbGUnOiAnS2luZGxlXFwvW1ZFUl0nLFxuICAgICAgICAgICAgJ0Nocm9tZSc6IFtcbiAgICAgICAgICAgICAgICAnQ2hyb21lXFwvW1ZFUl0nLFxuICAgICAgICAgICAgICAgICdDcmlPU1xcL1tWRVJdJyxcbiAgICAgICAgICAgICAgICAnQ3JNb1xcL1tWRVJdJ1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICdDb2FzdCc6IFtcbiAgICAgICAgICAgICAgICAnQ29hc3RcXC9bVkVSXSdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAnRG9sZmluJzogJ0RvbGZpblxcL1tWRVJdJyxcbiAgICAgICAgICAgICdGaXJlZm94JzogJ0ZpcmVmb3hcXC9bVkVSXScsXG4gICAgICAgICAgICAnRmVubmVjJzogJ0Zlbm5lY1xcL1tWRVJdJyxcbiAgICAgICAgICAgICdJRSc6IFtcbiAgICAgICAgICAgICAgICAnSUVNb2JpbGVcXC9bVkVSXTsnLFxuICAgICAgICAgICAgICAgICdJRU1vYmlsZSBbVkVSXScsXG4gICAgICAgICAgICAgICAgJ01TSUUgW1ZFUl07J1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICdOZXRGcm9udCc6ICdOZXRGcm9udFxcL1tWRVJdJyxcbiAgICAgICAgICAgICdOb2tpYUJyb3dzZXInOiAnTm9raWFCcm93c2VyXFwvW1ZFUl0nLFxuICAgICAgICAgICAgJ09wZXJhJzogW1xuICAgICAgICAgICAgICAgICcgT1BSXFwvW1ZFUl0nLFxuICAgICAgICAgICAgICAgICdPcGVyYSBNaW5pXFwvW1ZFUl0nLFxuICAgICAgICAgICAgICAgICdWZXJzaW9uXFwvW1ZFUl0nXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgJ09wZXJhIE1pbmknOiAnT3BlcmEgTWluaVxcL1tWRVJdJyxcbiAgICAgICAgICAgICdPcGVyYSBNb2JpJzogJ1ZlcnNpb25cXC9bVkVSXScsXG4gICAgICAgICAgICAnVUMgQnJvd3Nlcic6ICdVQyBCcm93c2VyW1ZFUl0nLFxuICAgICAgICAgICAgJ01RUUJyb3dzZXInOiAnTVFRQnJvd3NlclxcL1tWRVJdJyxcbiAgICAgICAgICAgICdNaWNyb01lc3Nlbmdlcic6ICdNaWNyb01lc3NlbmdlclxcL1tWRVJdJyxcbiAgICAgICAgICAgICdiYWlkdWJveGFwcCc6ICdiYWlkdWJveGFwcFxcL1tWRVJdJyxcbiAgICAgICAgICAgICdiYWlkdWJyb3dzZXInOiAnYmFpZHVicm93c2VyXFwvW1ZFUl0nLFxuICAgICAgICAgICAgJ0lyb24nOiAnSXJvblxcL1tWRVJdJyxcbiAgICAgICAgICAgICdTYWZhcmknOiBbXG4gICAgICAgICAgICAgICAgJ1ZlcnNpb25cXC9bVkVSXScsXG4gICAgICAgICAgICAgICAgJ1NhZmFyaVxcL1tWRVJdJ1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICdTa3lmaXJlJzogJ1NreWZpcmVcXC9bVkVSXScsXG4gICAgICAgICAgICAnVGl6ZW4nOiAnVGl6ZW5cXC9bVkVSXScsXG4gICAgICAgICAgICAnV2Via2l0JzogJ3dlYmtpdFsgXFwvXVtWRVJdJyxcbiAgICAgICAgICAgICdHZWNrbyc6ICdHZWNrb1xcL1tWRVJdJyxcbiAgICAgICAgICAgICdUcmlkZW50JzogJ1RyaWRlbnRcXC9bVkVSXScsXG4gICAgICAgICAgICAnUHJlc3RvJzogJ1ByZXN0b1xcL1tWRVJdJyxcbiAgICAgICAgICAgICdpT1MnOiAnIFxcXFxiaT9PU1xcXFxiIFtWRVJdWyA7XXsxfScsXG4gICAgICAgICAgICAnQW5kcm9pZCc6ICdBbmRyb2lkIFtWRVJdJyxcbiAgICAgICAgICAgICdCbGFja0JlcnJ5JzogW1xuICAgICAgICAgICAgICAgICdCbGFja0JlcnJ5W1xcXFx3XStcXC9bVkVSXScsXG4gICAgICAgICAgICAgICAgJ0JsYWNrQmVycnkuKlZlcnNpb25cXC9bVkVSXScsXG4gICAgICAgICAgICAgICAgJ1ZlcnNpb25cXC9bVkVSXSdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAnQlJFVyc6ICdCUkVXIFtWRVJdJyxcbiAgICAgICAgICAgICdKYXZhJzogJ0phdmFcXC9bVkVSXScsXG4gICAgICAgICAgICAnV2luZG93cyBQaG9uZSBPUyc6IFtcbiAgICAgICAgICAgICAgICAnV2luZG93cyBQaG9uZSBPUyBbVkVSXScsXG4gICAgICAgICAgICAgICAgJ1dpbmRvd3MgUGhvbmUgW1ZFUl0nXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgJ1dpbmRvd3MgUGhvbmUnOiAnV2luZG93cyBQaG9uZSBbVkVSXScsXG4gICAgICAgICAgICAnV2luZG93cyBDRSc6ICdXaW5kb3dzIENFXFwvW1ZFUl0nLFxuICAgICAgICAgICAgJ1dpbmRvd3MgTlQnOiAnV2luZG93cyBOVCBbVkVSXScsXG4gICAgICAgICAgICAnU3ltYmlhbic6IFtcbiAgICAgICAgICAgICAgICAnU3ltYmlhbk9TXFwvW1ZFUl0nLFxuICAgICAgICAgICAgICAgICdTeW1iaWFuXFwvW1ZFUl0nXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgJ3dlYk9TJzogW1xuICAgICAgICAgICAgICAgICd3ZWJPU1xcL1tWRVJdJyxcbiAgICAgICAgICAgICAgICAnaHB3T1NcXC9bVkVSXTsnXG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQnJvd3NlciB1c2VyQWdlbnRcbiAgICAgKi9cbiAgICB1YTogd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQsXG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplXG4gICAgICovXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuY29udmVydCgpO1xuXG4gICAgICAgIHZhciBydWxlcyA9IHRoaXMubW9iaWxlUmVnVGV4dDtcbiAgICAgICAgcnVsZXMub3NzMCA9IHtcbiAgICAgICAgICAgIFdpbmRvd3NQaG9uZU9TOiBydWxlcy5vc3MuV2luZG93c1Bob25lT1MsXG4gICAgICAgICAgICBXaW5kb3dzTW9iaWxlT1M6IHJ1bGVzLm9zcy5XaW5kb3dzTW9iaWxlT1NcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5kZXZpY2UgPSAgdGhpcy5fZmluZE1hdGNoKHJ1bGVzLnBob25lcywgdGhpcy51YSk7XG4gICAgICAgIHRoaXMuaW9zID0gdGhpcy5pc0lPUygpO1xuICAgICAgICB0aGlzLmFuZHJvaWQgPSB0aGlzLmlzQW5kcm9pZCgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IGRldmljZSwgb3MsIGJyb3dzZXIgaW5mbyB0byByZWcgZWRpdC5cbiAgICAgKi9cbiAgICBjb252ZXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJ1bGUsXG4gICAgICAgICAgICBtb2JpbGVEZXRlY3RSdWxlcyA9IHRoaXMubW9iaWxlUmVnVGV4dDtcblxuICAgICAgICB0aGlzLl9wcm9wQ29udmVydCgpO1xuXG4gICAgICAgIGZvciAocnVsZSBpbiBtb2JpbGVEZXRlY3RSdWxlcykge1xuICAgICAgICAgICAgaWYocnVsZSAhPT0gJ3Byb3BzJykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbnZlcnRUb1JlZ0V4cChtb2JpbGVEZXRlY3RSdWxlc1tydWxlXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29udmVydCBwcm9wZXJ0eSBieSBlYWNoIGludmlyb25tZW50XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfcHJvcENvbnZlcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIga2V5LFxuICAgICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgbGVuLFxuICAgICAgICAgICAgdmVyUG9zLFxuICAgICAgICAgICAgaGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksXG4gICAgICAgICAgICBydWxlcyA9IHRoaXMubW9iaWxlUmVnVGV4dC5wcm9wcztcblxuICAgICAgICBmb3IgKGtleSBpbiBydWxlcykge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3AuY2FsbChydWxlcywga2V5KSkge1xuICAgICAgICAgICAgICAgIHZhbHVlcyA9IHJ1bGVzW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKCFuZS51dGlsLmlzQXJyYXkodmFsdWVzKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgPSBbdmFsdWVzXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVuID0gdmFsdWVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIHZlclBvcyA9IHZhbHVlLmluZGV4T2YoJ1tWRVJdJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2ZXJQb3MgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zdWJzdHJpbmcoMCwgdmVyUG9zKSArICcoW1xcXFx3Ll9cXFxcK10rKScgKyB2YWx1ZS5zdWJzdHJpbmcodmVyUG9zICsgNSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzW2ldID0gbmV3IFJlZ0V4cCh2YWx1ZSwgJ2knKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcnVsZXNba2V5XSA9IHZhbHVlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdXNlckFnZW50XG4gICAgICovXG4gICAgdXNlckFnZW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKG5lLnV0aWwuaXNVbmRlZmluZWQodGhpcy5jYWNoZS51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICB0aGlzLmNhY2hlLnVzZXJBZ2VudCA9IHRoaXMuX2ZpbmRNYXRjaCh0aGlzLm1vYmlsZVJlZ1RleHQudWFzLCB0aGlzLnVhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZS51c2VyQWdlbnQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvbnZlciB0byByZWcgZXhwXG4gICAgICogQHBhcmFtIG9iamVjdFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2NvbnZlcnRUb1JlZ0V4cDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICAgIHZhciBoYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxcbiAgICAgICAgICAgIGtleTtcbiAgICAgICAgZm9yIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcC5jYWxsKG9iamVjdCwga2V5KSkge1xuICAgICAgICAgICAgICAgIG9iamVjdFtrZXldID0gbmV3IFJlZ0V4cChvYmplY3Rba2V5XSwgJ2knKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBGaW5kIE9TXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgZ2V0T1M6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmluZE1hdGNoKHRoaXMubW9iaWxlUmVnVGV4dC5vc3MwLCB0aGlzLnVhKSB8fFxuICAgICAgICAgICAgdGhpcy5fZmluZE1hdGNoKHRoaXMubW9iaWxlUmVnVGV4dC5vc3MsIHRoaXMudWEpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBGaW5kIG1hdGNoIHVzZXJhZ2VudFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2ZpbmRNYXRjaDogZnVuY3Rpb24ocnVsZXMsIHVzZXJBZ2VudCkge1xuICAgICAgICB2YXIga2V5LFxuICAgICAgICAgICAgaGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG4gICAgICAgIGZvciAoa2V5IGluIHJ1bGVzKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcC5jYWxsKHJ1bGVzLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJ1bGVzW2tleV0udGVzdCh1c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBGaW5kIHZlcnNpb25cbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICB2ZXJzaW9uOiBmdW5jdGlvbihwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgdmFyIHZlcnNpb24gPSB0aGlzLl9nZXRWZXJzaW9uU3RyKHByb3BlcnR5TmFtZSwgdGhpcy51YSk7XG4gICAgICAgIHJldHVybiB2ZXJzaW9uID8gdGhpcy5fcHJlcGFyZVZlcnNpb25Obyh2ZXJzaW9uKSA6IE5hTjtcbiAgICB9LFxuICAgIFxuICAgIC8qKlxuICAgICAqIENoZWNrIHRoZSB2ZXJzaW9uIG9mIHRoZSBnaXZlbiBwcm9wZXJ0eSBpbiB0aGUgVXNlci1BZ2VudC5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHVzZXJBZ2VudFxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gdmVyc2lvbiBvciA8dHQ+bnVsbDwvdHQ+IGlmIHZlcnNpb24gbm90IGZvdW5kXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfZ2V0VmVyc2lvblN0cjogZnVuY3Rpb24ocHJvcGVydHlOYW1lLCB1c2VyQWdlbnQpIHtcbiAgICAgICAgdmFyIHByb3BzID0gdGhpcy5tb2JpbGVSZWdUZXh0LnByb3BzLFxuICAgICAgICAgICAgcGF0dGVybnMsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgbGVuLFxuICAgICAgICAgICAgbWF0Y2gsXG4gICAgICAgICAgICBoYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuICAgICAgICBpZiAoaGFzT3duUHJvcC5jYWxsKHByb3BzLCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgICBwYXR0ZXJucyA9IHByb3BzW3Byb3BlcnR5TmFtZV07XG4gICAgICAgICAgICBsZW4gPSBwYXR0ZXJucy5sZW5ndGg7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgICAgIG1hdGNoID0gcGF0dGVybnNbaV0uZXhlYyh1c2VyQWdlbnQpO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hbMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBQcmVwYXJlIHRoZSB2ZXJzaW9uIG51bWJlci5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmVyc2lvblxuICAgICAqIEByZXR1cm4ge051bWJlcn0gdGhlIHZlcnNpb24gbnVtYmVyIGFzIGEgZmxvYXRpbmcgbnVtYmVyXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfcHJlcGFyZVZlcnNpb25ObzogZnVuY3Rpb24odmVyc2lvbikge1xuICAgICAgICB2YXIgbnVtYmVycztcblxuICAgICAgICBudW1iZXJzID0gdmVyc2lvbi5zcGxpdCgvW2Etei5fIFxcL1xcLV0vaSk7XG4gICAgICAgIGlmIChudW1iZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdmVyc2lvbiA9IG51bWJlcnNbMF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG51bWJlcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdmVyc2lvbiA9IG51bWJlcnNbMF0gKyAnLic7XG4gICAgICAgICAgICBudW1iZXJzLnNoaWZ0KCk7XG4gICAgICAgICAgICB2ZXJzaW9uICs9IG51bWJlcnMuam9pbignJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE51bWJlcih2ZXJzaW9uKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBpT1Mgb3Igbm90XG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNJT1M6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRPUygpID09PSAnaU9TJztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBBbmRyb2lkIG9yIG5vdFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzQW5kcm9pZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldE9TKCkgPT09ICdBbmRyb2lkT1MnO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICBBZ2VudERldGVjdG9yO1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IExvYWQgbmF0aXZlIGFwcCBvciBtb3ZlIHRvIGluc3RhbGwgcGFnZVxuICogQGRlcGVuZGVuY3kgY29kZS1zbmlwcGV0LmpzLCBkZXRlY3RvcnMuanMsIGFnZW50RGV0ZWN0b3IuanNcbiAqIEBhdXRob3IgTkhOIEVudC4gRkUgZGV2IHRlYW0uPGRsX2phdmFzY3JpcHRAbmhuZW50LmNvbT5cbiAqL1xuXG52YXIgQWdlbnREZXRlY3RvciA9IHJlcXVpcmUoJy4vYWdlbnREZXRlY3RvcicpO1xudmFyIERldGVjdG9yID0gcmVxdWlyZSgnLi9kZXRlY3RvcnMnKTtcbnZhciBpT1NEZXRlY3RvciA9IHJlcXVpcmUoJy4vaW9zRGV0ZWN0b3JzJyk7XG52YXIgRXRjRGV0ZWN0b3IgPSByZXF1aXJlKCcuL2V0Y0RldGVjdG9ycycpO1xuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBjbGFzc1xuICovXG52YXIgQXBwTG9hZGVyID0gbmUudXRpbC5kZWZpbmVDbGFzcygvKiogQGxlbmRzIEFwcExvYWRlci5wcm90b3R5cGUgKi97XG5cbiAgICAvKioqKioqKioqKioqKioqKlxuICAgICAqIG1lbWJlciBmaWVsZHNcbiAgICAgKioqKioqKioqKioqKioqKi9cblxuICAgIC8qKlxuICAgICAqIGJyb3dzZXIsIGRldmljZSBkZXRlY3RvclxuICAgICAqL1xuICAgIGRldGVjdG9yOiBudWxsLFxuICAgIC8qKlxuICAgICAqIE9TIChhbmRyb2lkL2lvcy9ldGMpXG4gICAgICovXG4gICAgb3M6IG51bGwsXG4gICAgLyoqXG4gICAgICogZGVmYXVsdCBvcHRpb25zIHRvIHJ1biBleGVjXG4gICAgICovXG4gICAgZGVmYXVsdHM6IHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGlvczoge1xuICAgICAgICAgICAgc2NoZW1lOiAnJyxcbiAgICAgICAgICAgIHVybDogJycsXG4gICAgICAgICAgICB1c2VJT1M5OiBmYWxzZSxcbiAgICAgICAgICAgIHN5bmNUb0lPUzk6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIGFuZHJvaWQ6IHtcbiAgICAgICAgICAgIHNjaGVtZTogJydcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKioqKioqKioqKioqKioqKlxuICAgICAqIG1lbWJlciBtZXRob2RzXG4gICAgICoqKioqKioqKioqKioqKiovXG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplXG4gICAgICovXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhZCA9IHRoaXMuYWdlbnREZXRlY3RvciA9IG5ldyBBZ2VudERldGVjdG9yKCk7XG4gICAgICAgIHRoaXMudWEgPSBhZC51c2VyQWdlbnQoKTtcbiAgICAgICAgdGhpcy5vcyA9IGFkLmdldE9TKCk7XG4gICAgICAgIHRoaXMudmVyc2lvbiA9IGFkLnZlcnNpb24oYWQuaW9zID8gYWQuZGV2aWNlIDogJ0FuZHJvaWQnKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IG9zIGJ5IERldGVjdG9yXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgVGhlIG9wdGlvbnNcbiAgICAgKi9cbiAgICBzZXREZXRlY3RvcjogZnVuY3Rpb24oY29udGV4dCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICBpc05vdEludGVuZCA9ICh0aGlzLmlzSW50ZW50TGVzcygpIHx8IG5lLnV0aWwuaXNFeGlzdHkoY29udGV4dC51c2VVcmxTY2hlbWUpKSxcbiAgICAgICAgICAgIGlzSW50ZW5kID0gbmUudXRpbC5pc0V4aXN0eShjb250ZXh0LmludGVudFVSSSksXG4gICAgICAgICAgICBzdG9yZSA9IGNvbnRleHQuc3RvcmVVUkwsXG4gICAgICAgICAgICBhZCA9IHRoaXMuYWdlbnREZXRlY3RvcixcbiAgICAgICAgICAgIGlvc1ZlcnNpb24gPSBwYXJzZUludCh0aGlzLnZlcnNpb24ubWFqb3IsIDEwKTtcblxuICAgICAgICBpZiAoYWQuYW5kcm9pZCAmJiB0aGlzLnZlcnNpb24gPj0gY29udGV4dC5hbmRWZXJzaW9uKSB7IC8vIEFuZHJpb2RcbiAgICAgICAgICAgIGlmIChpc05vdEludGVuZCAmJiBzdG9yZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGV0ZWN0b3IgPSBEZXRlY3Rvci5hbmRyb2lkU2NoZW1lRGV0ZWN0b3I7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzSW50ZW5kKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXRlY3RvciA9IERldGVjdG9yLmFuZHJvaWRJbnRlbmREZXRlY3RvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChhZC5pb3MgJiYgc3RvcmUpIHsvLyBJT1NcbiAgICAgICAgICAgIGlmIChjb250ZXh0LnVzZUlPUzkgJiYgY29udGV4dC5zeW5jVG9JT1M5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXRlY3RvciA9IGlPU0RldGVjdG9yLmlvc0ZpeERldGVjdG9yO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0LnVzZUlPUzkgJiYgaW9zVmVyc2lvbiA+IDgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRldGVjdG9yID0gaU9TRGV0ZWN0b3IuaW9zRml4RGV0ZWN0b3I7XG4gICAgICAgICAgICB9IGVsc2UgIHtcbiAgICAgICAgICAgICAgICBpZiAoaW9zVmVyc2lvbiA8IDgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXRlY3RvciA9IGlPU0RldGVjdG9yLmlvc09sZGVyRGV0ZWN0b3I7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGV0ZWN0b3IgPSBpT1NEZXRlY3Rvci5pb3NSZWNlbnREZXRlY3RvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgfSBlbHNlIHsgLy8gRVRDXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmRldGVjdG9yID0gRXRjRGV0ZWN0b3I7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRleHQuZXRjQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5ldGNDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUnVuIHNlbGVjdGVkIGRldGVjdG9yIFxuICAgICAqL1xuICAgIHJ1bkRldGVjdG9yOiBmdW5jdGlvbihjb250ZXh0KSB7XG4gICAgICAgIGlmKHRoaXMuZGV0ZWN0b3IgJiYgKHRoaXMuZGV0ZWN0b3IudHlwZSAhPT0gRXRjRGV0ZWN0b3IudHlwZSkpIHtcbiAgICAgICAgICAgIHRoaXMuZGV0ZWN0b3IucnVuKGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgaW50ZW50IHN1cHBvcnRlZFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzSW50ZW50TGVzczogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpbnRlbnRsZXNzQnJvd3NlcnMgPSBbXG4gICAgICAgICAgICAnZmlyZWZveCcsXG4gICAgICAgICAgICAnb3ByJ1xuICAgICAgICBdO1xuICAgICAgICB2YXIgYmxhY2tMaXN0UmVnZXhwID0gbmV3IFJlZ0V4cChpbnRlbnRsZXNzQnJvd3NlcnMuam9pbignfCcpLCAnaScpLFxuICAgICAgICAgICAgYXBwID0gdGhpcy5hZ2VudERldGVjdG9yO1xuICAgICAgICByZXR1cm4gYmxhY2tMaXN0UmVnZXhwLnRlc3QoYXBwLnVhKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IG9zXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRPUzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFnZW50RGV0ZWN0b3IuZ2V0T1MoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2FsbCBhcHBcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiB2YXIgbG9hZGVyID0gbmV3IG5lLmNvbXBvbmVudC5BcHBMb2FkZXIoKTtcbiAgICAgKiBsb2FkZXIuZXhlYyh7XG4gICAgICogICAgICBuYW1lOiAnYXBwJywgLy8gYXBwbGljYXRpb24gTmFtZSAoZXguIGZhY2Vib29rLCB0d2l0dGVyLCBkYXVtKVxuICAgICAqICAgICAgaW9zOiB7XG4gICAgICogICAgICAgICAgc2NoZW1lOiAnZmVjaGVjazovLycsIC8vIGlwaG9uZSBhcHAgc2NoZW1lXG4gICAgICogICAgICAgICAgdXJsOiAnaXRtcy1hcHBzOi8vaXR1bmVzLmFwcGxlLmNvbS9hcHAvLi4uLi4nIC8vIGFwcCBzdG9yZSB1cmxcbiAgICAgKiAgICAgIH0sXG4gICAgICogICAgICBhbmRyb2lkOiB7XG4gICAgICogICAgICAgICAgc2NoZW1lOiAnaW50ZW50Oi8vaG9tZSNJbnRlbnQ7c2NoZW1lPWZlY2hlY2s7cGFja2FnZT1jb20uZmVjaGVjaztlbmQnIC8vIGFuZHJvaWQgaW50ZW50IHVyaVxuICAgICAqICAgICAgfVxuICAgICAqICB9KTtcbiAgICAgKi9cbiAgICBleGVjOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBuZS51dGlsLmV4dGVuZCh0aGlzLmRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgICAgdmFyIGNvbnRleHQgPSB7XG4gICAgICAgICAgICBhcHBOYW1lOiBvcHRpb25zLm5hbWUsXG4gICAgICAgICAgICB1cmxTY2hlbWU6IG9wdGlvbnMuaW9zLnNjaGVtZSxcbiAgICAgICAgICAgIHN0b3JlVVJMOiBvcHRpb25zLmlvcy51cmwsXG4gICAgICAgICAgICBpbnRlbnRVUkk6IG9wdGlvbnMuYW5kcm9pZC5zY2hlbWUsXG4gICAgICAgICAgICBldGNDYWxsYmFjazogb3B0aW9ucy5ldGNDYWxsYmFjayxcbiAgICAgICAgICAgIGFuZFZlcnNpb246IG9wdGlvbnMuYW5kcm9pZC52ZXJzaW9uLFxuICAgICAgICAgICAgc3luY1RvSU9TOTogb3B0aW9ucy5pb3Muc3luY1RvSU9TOSxcbiAgICAgICAgICAgIHVzZUlPUzk6IG9wdGlvbnMuaW9zLnVzZUlPUzlcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXREZXRlY3Rvcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy5ydW5EZXRlY3Rvcihjb250ZXh0KTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcHBMb2FkZXI7XG5cbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBNaXhpbiBtb2R1bGVzXG4gKiBAZGVwZW5kZW5jeSBjb2RlLXNuaXBwZXQuanMsIGFwcExvYWRlci5qc1xuICogQGF1dGhvciBOSE4gRW50LiBGRSBkZXYgdGVhbS48ZGxfamF2YXNjcmlwdEBuaG5lbnQuY29tPlxuICovXG4vKipcbiAqIEBuYW1lc3BhY2UgRGV0ZWN0b3JcbiAqL1xudmFyIERldGVjdG9yID0ge1xuICAgIC8qKlxuICAgICAqIGZvciB0aW1lclxuICAgICAqL1xuICAgIFRJTUVPVVQ6IHtcbiAgICAgICAgSU9TX1NIT1JUOiAxMDAwLFxuICAgICAgICBJT1NfTE9ORzogMTAwMCAqIDIsXG4gICAgICAgIEFORFJPSUQ6IDEwMCAqIDMsXG4gICAgICAgIElOVEVSVkFMOiAxMDBcbiAgICB9LFxuICAgIFxuICAgIC8qKlxuICAgICAqIENhbGwgYXBwIGJ5IGlmcmFtZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxTY2hlbWUgaWZyYW1lIHVybFxuICAgICAqL1xuICAgIHJ1bkFwcFdpdGhJZnJhbWU6IGZ1bmN0aW9uICh1cmxTY2hlbWUpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgaWZyYW1lO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmcmFtZSA9IHNlbGYuZ2V0SWZyYW1lTWFkZUJ5SWQoJ3N1cHBvcnRGcmFtZScpO1xuICAgICAgICAgICAgaWZyYW1lLnNyYyA9IHVybFNjaGVtZTtcbiAgICAgICAgfSwgdGhpcy5USU1FT1VULklOVEVSVkFMKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGlmcmFtZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBpZnJhbWUgSURcbiAgICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgZ2V0SWZyYW1lTWFkZUJ5SWQ6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB2YXIgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgICAgIG5lLnV0aWwuZXh0ZW5kKGlmcmFtZSwge1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgZnJhbWVib3JkZXI6ICcwJyxcbiAgICAgICAgICAgIHdpZHRoOiAnMCcsXG4gICAgICAgICAgICBoZWlnaHQ6ICcwJ1xuICAgICAgICB9KTtcbiAgICAgICAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgICAgICAgcmV0dXJuIGlmcmFtZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGVmZXIgY2FsbCBjYWxsYmFja1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0aW1lIEEgZGVsYXkgdGltZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgQSB1cmwgdG8gcmVxdWVzdFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIEEgY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGRlZmVyQ2FsbGJhY2s6IGZ1bmN0aW9uICh1cmwsIGNhbGxiYWNrLCB0aW1lKSB7XG4gICAgICAgIHZhciBjbGlja2VkQXQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgICAgIG5vdyxcbiAgICAgICAgICAgIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgaWYgKHNlbGYuaXNQYWdlVmlzaWJpbGl0eSgpICYmIG5vdyAtIGNsaWNrZWRBdCA8IHRpbWUgKyBzZWxmLlRJTUVPVVQuSU5URVJWQUwpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh1cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aW1lKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogY2hlY2sgYSB3ZWJwYWdlIGlzIHZpc2libGUgb3IgaW4gZm9jdXNcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc1BhZ2VWaXNpYmlsaXR5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChuZS51dGlsLmlzRXhpc3R5KGRvY3VtZW50LmhpZGRlbikpIHtcbiAgICAgICAgICAgIHJldHVybiAhZG9jdW1lbnQuaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZS51dGlsLmlzRXhpc3R5KGRvY3VtZW50LndlYmtpdEhpZGRlbikpIHtcbiAgICAgICAgICAgIHJldHVybiAhZG9jdW1lbnQud2Via2l0SGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn07XG5cbi8qKioqKioqKioqKioqKioqXG4gKiBBbmRyb2lkIHNlcmllc1xuICoqKioqKioqKioqKioqKiovXG5cbi8qKlxuICogQW5kcm9pZCBpbnRlbnQgbGVzc1xuICogQG5hbWVzcGFjZSBEZXRlY3Rvci5hbmRyb2lkU2NoZW1lRGV0ZWN0b3JcbiAqL1xuRGV0ZWN0b3IuYW5kcm9pZFNjaGVtZURldGVjdG9yID0gbmUudXRpbC5leHRlbmQoe1xuICAgIC8qKlxuICAgICAqIGRldGVjdG9yIHR5cGVcbiAgICAgKiBAbWVtYmVyb2YgRGV0ZWN0b3IuYW5kcm9pZFNjaGVtZURldGVjdG9yXG4gICAgICovXG4gICAgdHlwZTogJ3NjaGVtZScsXG5cbiAgICAvKipcbiAgICAgKiBSdW4gZGV0ZWN0b3IgXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHRcbiAgICAgKiBAbWVtYmVyb2YgRGV0ZWN0b3IuYW5kcm9pZFNjaGVtZURldGVjdG9yXG4gICAgICovXG4gICAgcnVuOiBmdW5jdGlvbihjb250ZXh0KSB7XG4gICAgICAgIHZhciBzdG9yZVVSTCA9IGNvbnRleHQuc3RvcmVVUkw7XG4gICAgICAgIHRoaXMuZGVmZXJDYWxsYmFjayhzdG9yZVVSTCwgY29udGV4dC5ub3RGb3VuZENhbGxiYWNrLCB0aGlzLlRJTUVPVVQuQU5EUk9JRCk7XG4gICAgICAgIHRoaXMucnVuQXBwV2l0aElmcmFtZShjb250ZXh0LnVybFNjaGVtZSk7XG4gICAgfVxufSwgRGV0ZWN0b3IpO1xuXG5cbi8qKlxuICogQW5kcm9pZCBpbnRlbnRcbiAqIEBuYW1lc3BhY2UgRGV0ZWN0b3IuYW5kcm9pZEludGVuZERldGVjdG9yXG4gKi9cbkRldGVjdG9yLmFuZHJvaWRJbnRlbmREZXRlY3RvciA9IG5lLnV0aWwuZXh0ZW5kKHtcbiAgICAvKipcbiAgICAgKiBkZXRlY3RvciB0eXBlXG4gICAgICogQG1lbWJlcm9mIERldGVjdG9yLmFuZHJvaWRJbnRlbmREZXRlY3RvclxuICAgICAqL1xuICAgIHR5cGU6ICdpbnRlbmQnLFxuXG4gICAgLyoqXG4gICAgICogUnVuIGRldGVjdG9yIFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0XG4gICAgICogQG1lbWJlcm9mIERldGVjdG9yLmFuZHJvaWRJbnRlbmREZXRlY3RvclxuICAgICAqL1xuICAgIHJ1bjogZnVuY3Rpb24oY29udGV4dCkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRvcC5sb2NhdGlvbi5ocmVmID0gY29udGV4dC5pbnRlbnRVUkk7XG4gICAgICAgIH0sIHRoaXMuVElNRU9VVC5JTlRFUlZBTCk7XG4gICAgfVxufSwgRGV0ZWN0b3IpO1xubW9kdWxlLmV4cG9ydHMgPSBEZXRlY3RvcjtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBFdGMgbm90IHN1cHBvcnQgaW52aXJvbm1lbnRcbiAqIEBkZXBlbmRlbmN5IGNvZGUtc25pcHBldC5qc1xuICogQGF1dGhvciBOSE4gRW50LiBGRSBkZXYgdGVhbS48ZGxfamF2YXNjcmlwdEBuaG5lbnQuY29tPlxuICovXG5cbi8qKlxuICogQG5hbWVzcGFjZSBFdGNEZXRlY3RvclxuICovXG52YXIgRXRjRGV0ZWN0b3IgPSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlcm9mIEV0Y0RldGVjdG9yXG4gICAgICovXG4gICAgdHlwZTogJ2V0YycsXG4gICAgLyoqXG4gICAgICogQG1lbWJlcm9mIEV0Y0RldGVjdG9yXG4gICAgICovXG4gICAgcnVuOiBmdW5jdGlvbigpIHtcbiAgICB9XG59O1xubW9kdWxlLmV4cG9ydHMgPSBFdGNEZXRlY3RvcjtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBpT1MgTWl4aW4gbW9kdWxlc1xuICogQGRlcGVuZGVuY3kgY29kZS1zbmlwcGV0LmpzLCBhcHBMb2FkZXIuanNcbiAqIEBhdXRob3IgTkhOIEVudC4gRkUgZGV2IHRlYW0uPGRsX2phdmFzY3JpcHRAbmhuZW50LmNvbT5cbiAqL1xudmFyIERldGVjdG9yID0gcmVxdWlyZSgnLi9kZXRlY3RvcnMnKTtcblxuLyoqXG4gKiBAbmFtZXNwYWNlIGlPU0RldGVjdG9yXG4gKi9cbnZhciBpT1NEZXRlY3RvciA9IG5lLnV0aWwuZXh0ZW5kKHtcbiAgICAvKipcbiAgICAgKiBkZXRlY3RvciB0eXBlXG4gICAgICogQG1lbWJlcm9mIGlPU0RldGVjdG9yXG4gICAgICovXG4gICAgdHlwZTogJ2lvcycsXG5cbiAgICAvKipcbiAgICAgKiBkZWZhdWx0IGFwcCBwYWdlIG1vdmUgZnVuY3Rpbm9cbiAgICAgKiBAcGFyYW0gc3RvcmVVUkxcbiAgICAgKiBAbWVtYmVyb2YgaU9TRGV0ZWN0b3JcbiAgICAgKi9cbiAgICBtb3ZlVG86IGZ1bmN0aW9uKHN0b3JlVVJMKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzJywgc3RvcmVVUkwpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHN0b3JlVVJMO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiB2aXNpYmxpdHljaGFuZ2UgZXZlbnRcbiAgICAgKiBAbWVtYmVyb2YgaU9TRGV0ZWN0b3JcbiAgICAgKi9cbiAgICBiaW5kVmlzaWJpbGl0eUNoYW5nZUV2ZW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5pc1BhZ2VWaXNpYmlsaXR5KCkpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoc2VsZi50aWQpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBjbGVhcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiAgcGFnZWhpZGUgZXZlbnQgXG4gICAgICogIEBtZW1iZXJvZiBpT1NEZXRlY3RvclxuICAgICAqL1xuICAgIGJpbmRQYWdlaGlkZUV2ZW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncGFnZWhpZGUnLCBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLmlzUGFnZVZpc2liaWxpdHkoKSkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChzZWxmLnRpZCk7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BhZ2VoaWRlJywgY2xlYXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59LCBEZXRlY3Rvcik7XG5cbi8qKlxuICogaW9zIG9sZCBkZXRlY3RvclxuICogQG5hbWVzcGFjZSBpT1NEZXRlY3Rvci5pb3NPbGRlckRldGVjdG9yXG4gKi9cbmlPU0RldGVjdG9yLmlvc09sZGVyRGV0ZWN0b3IgPSBuZS51dGlsLmV4dGVuZCh7XG4gICAgLyoqXG4gICAgICogZGV0ZWN0b3IgUnVuXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHRcbiAgICAgKiBAbWVtYmVyb2YgaU9TRGV0ZWN0b3IuaW9zT2xkZXJEZXRlY3RvclxuICAgICAqL1xuICAgIHJ1bjogZnVuY3Rpb24oY29udGV4dCkge1xuICAgICAgICB2YXIgc3RvcmVVUkwgPSBjb250ZXh0LnN0b3JlVVJMLFxuICAgICAgICAgICAgY2FsbGJhY2sgPSBjb250ZXh0Lm5vdEZvdW5kQ2FsbGJhY2sgfHwgdGhpcy5tb3ZlVG87XG4gICAgICAgIHRoaXMudGlkID0gdGhpcy5kZWZlckNhbGxiYWNrKHN0b3JlVVJMLCBjYWxsYmFjaywgdGhpcy5USU1FT1VULklPU19MT05HKTtcbiAgICAgICAgdGhpcy5iaW5kUGFnZWhpZGVFdmVudCgpO1xuICAgICAgICB0aGlzLnJ1bkFwcFdpdGhJZnJhbWUoY29udGV4dC51cmxTY2hlbWUpO1xuICAgIH1cbn0sIGlPU0RldGVjdG9yKTtcblxuLyoqXG4gKiBpb3MgcmVjZW50IGRldGVjdG9yXG4gKiBAbmFtZXNwYWNlIGlPU0RldGVjdG9yLmlvc1JlY2VudERldGVjdG9yXG4gKi9cbmlPU0RldGVjdG9yLmlvc1JlY2VudERldGVjdG9yID0gbmUudXRpbC5leHRlbmQoe1xuICAgIC8qKlxuICAgICAqIGRldGVjdG9yIHJ1blxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0XG4gICAgICogQG1lbWJlcm9mIGlPU0RldGVjdG9yLmlvc1JlY2VudERldGVjdG9yXG4gICAgICovXG4gICAgcnVuOiBmdW5jdGlvbihjb250ZXh0KSB7XG4gICAgICAgIHZhciBzdG9yZVVSTCA9IGNvbnRleHQuc3RvcmVVUkwsXG4gICAgICAgICAgICBjYWxsYmFjayA9IGNvbnRleHQubm90Rm91bmRDYWxsYmFjayB8fCB0aGlzLm1vdmVUbztcbiAgICAgICAgaWYgKHRoaXMubW92ZVRvID09PSBjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy50aWQgPSB0aGlzLmRlZmVyQ2FsbGJhY2soc3RvcmVVUkwsIGNhbGxiYWNrLCB0aGlzLlRJTUVPVVQuSU9TX1NIT1JUKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGlkID0gdGhpcy5kZWZlckNhbGxiYWNrKHN0b3JlVVJMLCBjYWxsYmFjaywgdGhpcy5USU1FT1VULklPU19MT05HKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJpbmRWaXNpYmlsaXR5Q2hhbmdlRXZlbnQoKTtcbiAgICAgICAgdGhpcy5ydW5BcHBXaXRoSWZyYW1lKGNvbnRleHQudXJsU2NoZW1lKTtcbiAgICB9XG59LCBpT1NEZXRlY3Rvcik7XG5cbi8qKlxuICogaW9zIHJlY2VudCBidXQgc2FmYXJpIHByZXZlbnQgdG8gY2FsbCBhcHBsaWNhdGlvbiB2aWEgaWZyYW1lIHNyYy4gXG4gKi9cbmlPU0RldGVjdG9yLmlvc0ZpeERldGVjdG9yID0gbmUudXRpbC5leHRlbmQoe1xuICAgIC8qKlxuICAgICAqIGRldGVjdG9yIHJ1blxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0XG4gICAgICogQG1lbWJlcm9mIGlPU0RldGVjdG9yLmlvc0ZpeERldGVjdG9yXG4gICAgICovXG4gICAgcnVuOiBmdW5jdGlvbihjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuYmluZFZpc2liaWxpdHlDaGFuZ2VFdmVudCgpO1xuICAgICAgICB0aGlzLm1vdmVUbyhjb250ZXh0LnN0b3JlVVJMKTsgXG4gICAgfSBcbn0sIGlPU0RldGVjdG9yKTtcblxubW9kdWxlLmV4cG9ydHMgPSBpT1NEZXRlY3RvcjtcbiJdfQ==
