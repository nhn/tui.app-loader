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
            isNotIntend = (this.isIntentLess() || ne.util.isExisty(context.useUrlScheme)),
            isIntend = ne.util.isExisty(context.intentURI),
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
            andVersion: options.android.version
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
        this.moveTo(context.urlScheme);
        //this.runAppWithIframe(context.urlScheme);
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
        this.moveTo(context.urlScheme);
        //this.runAppWithIframe(context.urlScheme);
    }
}, iOSDetector);

module.exports = iOSDetector;

},{"./detectors":4}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsInNyYy9qcy9hZ2VudERldGVjdG9yLmpzIiwic3JjL2pzL2FwcExvYWRlci5qcyIsInNyYy9qcy9kZXRlY3RvcnMuanMiLCJzcmMvanMvZXRjRGV0ZWN0b3JzLmpzIiwic3JjL2pzL2lvc0RldGVjdG9ycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcldBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJuZS51dGlsLmRlZmluZU5hbWVzcGFjZSgnbmUuY29tcG9uZW50Lm0uQXBwTG9hZGVyJywgcmVxdWlyZSgnLi9zcmMvanMvYXBwTG9hZGVyJykpO1xuIiwiLyoqXG4qIEBmaWxlb3ZlcnZpZXcgVGhlIGV4dHJhY3RvciBhbmQgZGV0ZWN0b3IgdXNlciBhZ2VudCBieSBkZXZpY2UgaW5mby4gXG4qIEBkZXBlbmRlbmN5IGNvZGUtc25pcHBldC5qcywgYXBwTG9hZGVyLmpzXG4qIEBhdXRob3IgTkhOIEVudGVydGFpbiBtZW50LiBGRSBkZXYgdGVhbS5cbiovXG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnZhciBBZ2VudERldGVjdG9yID0gbmUudXRpbC5kZWZpbmVDbGFzcygvKipAbGVuZHMgQWdlbnREZXRlY3Rvci5wcm90b3R5cGUgKi97XG4gICAgY2FjaGU6IHt9LFxuICAgIC8qKioqKioqKioqKioqKipcbiAgICAgKiBSZWdFeHAgcHJvY2Vzc2luZyBzdGFydCA6IG9yaWdpbmFsIC0g7Lac7LKYIG1vYmlsZS1kZXRlY3QuanMgQGxpbmsgW2h0dHBzOi8vZ2l0aHViLmNvbS9oZ29lYmwvbW9iaWxlLWRldGVjdC5qc11cbiAgICAgKioqKioqKioqKioqKioqL1xuICAgIC8qKlxuICAgICAqIEVhY2ggZGV2aWNlIGluZm8gYW5kIG9zIHJlZyBzdHJpbmdcbiAgICAgKi9cbiAgICBtb2JpbGVSZWdUZXh0OiB7XG4gICAgICAgICdwaG9uZXMnOiB7XG4gICAgICAgICAgICAnaVBob25lJzogJ1xcXFxiaVBob25lXFxcXGJ8XFxcXGJpUG9kXFxcXGInLFxuICAgICAgICAgICAgJ0JsYWNrQmVycnknOiAnQmxhY2tCZXJyeXxcXFxcYkJCMTBcXFxcYnxyaW1bMC05XSsnLFxuICAgICAgICAgICAgJ0hUQyc6ICdIVEN8SFRDLiooU2Vuc2F0aW9ufEV2b3xWaXNpb258RXhwbG9yZXJ8NjgwMHw4MTAwfDg5MDB8QTcyNzJ8UzUxMGV8QzExMGV8TGVnZW5kfERlc2lyZXxUODI4Mil8QVBYNTE1Q0tUfFF0ZWs5MDkwfEFQQTkyOTJLVHxIRF9taW5pfFNlbnNhdGlvbi4qWjcxMGV8UEc4NjEwMHxaNzE1ZXxEZXNpcmUuKihBODE4MXxIRCl8QURSNjIwMHxBRFI2NDAwTHxBRFI2NDI1fDAwMUhUfEluc3BpcmUgNEd8QW5kcm9pZC4qXFxcXGJFVk9cXFxcYnxULU1vYmlsZSBHMXxaNTIwbScsXG4gICAgICAgICAgICAnTmV4dXMnOiAnTmV4dXMgT25lfE5leHVzIFN8R2FsYXh5LipOZXh1c3xBbmRyb2lkLipOZXh1cy4qTW9iaWxlfE5leHVzIDR8TmV4dXMgNXxOZXh1cyA2JyxcbiAgICAgICAgICAgICdEZWxsJzogJ0RlbGwuKlN0cmVha3xEZWxsLipBZXJvfERlbGwuKlZlbnVlfERFTEwuKlZlbnVlIFByb3xEZWxsIEZsYXNofERlbGwgU21va2V8RGVsbCBNaW5pIDNpWHxYQ0QyOHxYQ0QzNXxcXFxcYjAwMURMXFxcXGJ8XFxcXGIxMDFETFxcXFxifFxcXFxiR1MwMVxcXFxiJyxcbiAgICAgICAgICAgICdNb3Rvcm9sYSc6ICdNb3Rvcm9sYXxEUk9JRFh8RFJPSUQgQklPTklDfFxcXFxiRHJvaWRcXFxcYi4qQnVpbGR8QW5kcm9pZC4qWG9vbXxIUkkzOXxNT1QtfEExMjYwfEExNjgwfEE1NTV8QTg1M3xBODU1fEE5NTN8QTk1NXxBOTU2fE1vdG9yb2xhLipFTEVDVFJJRll8TW90b3JvbGEuKmkxfGk4Njd8aTk0MHxNQjIwMHxNQjMwMHxNQjUwMXxNQjUwMnxNQjUwOHxNQjUxMXxNQjUyMHxNQjUyNXxNQjUyNnxNQjYxMXxNQjYxMnxNQjYzMnxNQjgxMHxNQjg1NXxNQjg2MHxNQjg2MXxNQjg2NXxNQjg3MHxNRTUwMXxNRTUwMnxNRTUxMXxNRTUyNXxNRTYwMHxNRTYzMnxNRTcyMnxNRTgxMXxNRTg2MHxNRTg2M3xNRTg2NXxNVDYyMHxNVDcxMHxNVDcxNnxNVDcyMHxNVDgxMHxNVDg3MHxNVDkxN3xNb3Rvcm9sYS4qVElUQU5JVU18V1g0MzV8V1g0NDV8WFQzMDB8WFQzMDF8WFQzMTF8WFQzMTZ8WFQzMTd8WFQzMTl8WFQzMjB8WFQzOTB8WFQ1MDJ8WFQ1MzB8WFQ1MzF8WFQ1MzJ8WFQ1MzV8WFQ2MDN8WFQ2MTB8WFQ2MTF8WFQ2MTV8WFQ2ODF8WFQ3MDF8WFQ3MDJ8WFQ3MTF8WFQ3MjB8WFQ4MDB8WFQ4MDZ8WFQ4NjB8WFQ4NjJ8WFQ4NzV8WFQ4ODJ8WFQ4ODN8WFQ4OTR8WFQ5MDF8WFQ5MDd8WFQ5MDl8WFQ5MTB8WFQ5MTJ8WFQ5Mjh8WFQ5MjZ8WFQ5MTV8WFQ5MTl8WFQ5MjUnLFxuICAgICAgICAgICAgJ1NhbXN1bmcnOiAnU2Ftc3VuZ3xTR0gtSTMzN3xCR1QtUzUyMzB8R1QtQjIxMDB8R1QtQjI3MDB8R1QtQjI3MTB8R1QtQjMyMTB8R1QtQjMzMTB8R1QtQjM0MTB8R1QtQjM3MzB8R1QtQjM3NDB8R1QtQjU1MTB8R1QtQjU1MTJ8R1QtQjU3MjJ8R1QtQjY1MjB8R1QtQjczMDB8R1QtQjczMjB8R1QtQjczMzB8R1QtQjczNTB8R1QtQjc1MTB8R1QtQjc3MjJ8R1QtQjc4MDB8R1QtQzMwMTB8R1QtQzMwMTF8R1QtQzMwNjB8R1QtQzMyMDB8R1QtQzMyMTJ8R1QtQzMyMTJJfEdULUMzMjYyfEdULUMzMjIyfEdULUMzMzAwfEdULUMzMzAwS3xHVC1DMzMwM3xHVC1DMzMwM0t8R1QtQzMzMTB8R1QtQzMzMjJ8R1QtQzMzMzB8R1QtQzMzNTB8R1QtQzM1MDB8R1QtQzM1MTB8R1QtQzM1MzB8R1QtQzM2MzB8R1QtQzM3ODB8R1QtQzUwMTB8R1QtQzUyMTJ8R1QtQzY2MjB8R1QtQzY2MjV8R1QtQzY3MTJ8R1QtRTEwNTB8R1QtRTEwNzB8R1QtRTEwNzV8R1QtRTEwODB8R1QtRTEwODF8R1QtRTEwODV8R1QtRTEwODd8R1QtRTExMDB8R1QtRTExMDd8R1QtRTExMTB8R1QtRTExMjB8R1QtRTExMjV8R1QtRTExMzB8R1QtRTExNjB8R1QtRTExNzB8R1QtRTExNzV8R1QtRTExODB8R1QtRTExODJ8R1QtRTEyMDB8R1QtRTEyMTB8R1QtRTEyMjV8R1QtRTEyMzB8R1QtRTEzOTB8R1QtRTIxMDB8R1QtRTIxMjB8R1QtRTIxMjF8R1QtRTIxNTJ8R1QtRTIyMjB8R1QtRTIyMjJ8R1QtRTIyMzB8R1QtRTIyMzJ8R1QtRTIyNTB8R1QtRTIzNzB8R1QtRTI1NTB8R1QtRTI2NTJ8R1QtRTMyMTB8R1QtRTMyMTN8R1QtSTU1MDB8R1QtSTU1MDN8R1QtSTU3MDB8R1QtSTU4MDB8R1QtSTU4MDF8R1QtSTY0MTB8R1QtSTY0MjB8R1QtSTcxMTB8R1QtSTc0MTB8R1QtSTc1MDB8R1QtSTgwMDB8R1QtSTgxNTB8R1QtSTgxNjB8R1QtSTgxOTB8R1QtSTgzMjB8R1QtSTgzMzB8R1QtSTgzNTB8R1QtSTg1MzB8R1QtSTg3MDB8R1QtSTg3MDN8R1QtSTg5MTB8R1QtSTkwMDB8R1QtSTkwMDF8R1QtSTkwMDN8R1QtSTkwMTB8R1QtSTkwMjB8R1QtSTkwMjN8R1QtSTkwNzB8R1QtSTkwODJ8R1QtSTkxMDB8R1QtSTkxMDN8R1QtSTkyMjB8R1QtSTkyNTB8R1QtSTkzMDB8R1QtSTkzMDV8R1QtSTk1MDB8R1QtSTk1MDV8R1QtTTM1MTB8R1QtTTU2NTB8R1QtTTc1MDB8R1QtTTc2MDB8R1QtTTc2MDN8R1QtTTg4MDB8R1QtTTg5MTB8R1QtTjcwMDB8R1QtUzMxMTB8R1QtUzMzMTB8R1QtUzMzNTB8R1QtUzMzNTN8R1QtUzMzNzB8R1QtUzM2NTB8R1QtUzM2NTN8R1QtUzM3NzB8R1QtUzM4NTB8R1QtUzUyMTB8R1QtUzUyMjB8R1QtUzUyMjl8R1QtUzUyMzB8R1QtUzUyMzN8R1QtUzUyNTB8R1QtUzUyNTN8R1QtUzUyNjB8R1QtUzUyNjN8R1QtUzUyNzB8R1QtUzUzMDB8R1QtUzUzMzB8R1QtUzUzNTB8R1QtUzUzNjB8R1QtUzUzNjN8R1QtUzUzNjl8R1QtUzUzODB8R1QtUzUzODBEfEdULVM1NTYwfEdULVM1NTcwfEdULVM1NjAwfEdULVM1NjAzfEdULVM1NjEwfEdULVM1NjIwfEdULVM1NjYwfEdULVM1NjcwfEdULVM1NjkwfEdULVM1NzUwfEdULVM1NzgwfEdULVM1ODMwfEdULVM1ODM5fEdULVM2MTAyfEdULVM2NTAwfEdULVM3MDcwfEdULVM3MjAwfEdULVM3MjIwfEdULVM3MjMwfEdULVM3MjMzfEdULVM3MjUwfEdULVM3NTAwfEdULVM3NTMwfEdULVM3NTUwfEdULVM3NTYyfEdULVM3NzEwfEdULVM4MDAwfEdULVM4MDAzfEdULVM4NTAwfEdULVM4NTMwfEdULVM4NjAwfFNDSC1BMzEwfFNDSC1BNTMwfFNDSC1BNTcwfFNDSC1BNjEwfFNDSC1BNjMwfFNDSC1BNjUwfFNDSC1BNzkwfFNDSC1BNzk1fFNDSC1BODUwfFNDSC1BODcwfFNDSC1BODkwfFNDSC1BOTMwfFNDSC1BOTUwfFNDSC1BOTcwfFNDSC1BOTkwfFNDSC1JMTAwfFNDSC1JMTEwfFNDSC1JNDAwfFNDSC1JNDA1fFNDSC1JNTAwfFNDSC1JNTEwfFNDSC1JNTE1fFNDSC1JNjAwfFNDSC1JNzMwfFNDSC1JNzYwfFNDSC1JNzcwfFNDSC1JODMwfFNDSC1JOTEwfFNDSC1JOTIwfFNDSC1JOTU5fFNDSC1MQzExfFNDSC1OMTUwfFNDSC1OMzAwfFNDSC1SMTAwfFNDSC1SMzAwfFNDSC1SMzUxfFNDSC1SNDAwfFNDSC1SNDEwfFNDSC1UMzAwfFNDSC1VMzEwfFNDSC1VMzIwfFNDSC1VMzUwfFNDSC1VMzYwfFNDSC1VMzY1fFNDSC1VMzcwfFNDSC1VMzgwfFNDSC1VNDEwfFNDSC1VNDMwfFNDSC1VNDUwfFNDSC1VNDYwfFNDSC1VNDcwfFNDSC1VNDkwfFNDSC1VNTQwfFNDSC1VNTUwfFNDSC1VNjIwfFNDSC1VNjQwfFNDSC1VNjUwfFNDSC1VNjYwfFNDSC1VNzAwfFNDSC1VNzQwfFNDSC1VNzUwfFNDSC1VODEwfFNDSC1VODIwfFNDSC1VOTAwfFNDSC1VOTQwfFNDSC1VOTYwfFNDUy0yNlVDfFNHSC1BMTA3fFNHSC1BMTE3fFNHSC1BMTI3fFNHSC1BMTM3fFNHSC1BMTU3fFNHSC1BMTY3fFNHSC1BMTc3fFNHSC1BMTg3fFNHSC1BMTk3fFNHSC1BMjI3fFNHSC1BMjM3fFNHSC1BMjU3fFNHSC1BNDM3fFNHSC1BNTE3fFNHSC1BNTk3fFNHSC1BNjM3fFNHSC1BNjU3fFNHSC1BNjY3fFNHSC1BNjg3fFNHSC1BNjk3fFNHSC1BNzA3fFNHSC1BNzE3fFNHSC1BNzI3fFNHSC1BNzM3fFNHSC1BNzQ3fFNHSC1BNzY3fFNHSC1BNzc3fFNHSC1BNzk3fFNHSC1BODE3fFNHSC1BODI3fFNHSC1BODM3fFNHSC1BODQ3fFNHSC1BODY3fFNHSC1BODc3fFNHSC1BODg3fFNHSC1BODk3fFNHSC1BOTI3fFNHSC1CMTAwfFNHSC1CMTMwfFNHSC1CMjAwfFNHSC1CMjIwfFNHSC1DMTAwfFNHSC1DMTEwfFNHSC1DMTIwfFNHSC1DMTMwfFNHSC1DMTQwfFNHSC1DMTYwfFNHSC1DMTcwfFNHSC1DMTgwfFNHSC1DMjAwfFNHSC1DMjA3fFNHSC1DMjEwfFNHSC1DMjI1fFNHSC1DMjMwfFNHSC1DNDE3fFNHSC1DNDUwfFNHSC1EMzA3fFNHSC1EMzQ3fFNHSC1EMzU3fFNHSC1ENDA3fFNHSC1ENDE1fFNHSC1ENzgwfFNHSC1EODA3fFNHSC1EOTgwfFNHSC1FMTA1fFNHSC1FMjAwfFNHSC1FMzE1fFNHSC1FMzE2fFNHSC1FMzE3fFNHSC1FMzM1fFNHSC1FNTkwfFNHSC1FNjM1fFNHSC1FNzE1fFNHSC1FODkwfFNHSC1GMzAwfFNHSC1GNDgwfFNHSC1JMjAwfFNHSC1JMzAwfFNHSC1JMzIwfFNHSC1JNTUwfFNHSC1JNTc3fFNHSC1JNjAwfFNHSC1JNjA3fFNHSC1JNjE3fFNHSC1JNjI3fFNHSC1JNjM3fFNHSC1JNjc3fFNHSC1JNzAwfFNHSC1JNzE3fFNHSC1JNzI3fFNHSC1pNzQ3TXxTR0gtSTc3N3xTR0gtSTc4MHxTR0gtSTgyN3xTR0gtSTg0N3xTR0gtSTg1N3xTR0gtSTg5NnxTR0gtSTg5N3xTR0gtSTkwMHxTR0gtSTkwN3xTR0gtSTkxN3xTR0gtSTkyN3xTR0gtSTkzN3xTR0gtSTk5N3xTR0gtSjE1MHxTR0gtSjIwMHxTR0gtTDE3MHxTR0gtTDcwMHxTR0gtTTExMHxTR0gtTTE1MHxTR0gtTTIwMHxTR0gtTjEwNXxTR0gtTjUwMHxTR0gtTjYwMHxTR0gtTjYyMHxTR0gtTjYyNXxTR0gtTjcwMHxTR0gtTjcxMHxTR0gtUDEwN3xTR0gtUDIwN3xTR0gtUDMwMHxTR0gtUDMxMHxTR0gtUDUyMHxTR0gtUDczNXxTR0gtUDc3N3xTR0gtUTEwNXxTR0gtUjIxMHxTR0gtUjIyMHxTR0gtUjIyNXxTR0gtUzEwNXxTR0gtUzMwN3xTR0gtVDEwOXxTR0gtVDExOXxTR0gtVDEzOXxTR0gtVDIwOXxTR0gtVDIxOXxTR0gtVDIyOXxTR0gtVDIzOXxTR0gtVDI0OXxTR0gtVDI1OXxTR0gtVDMwOXxTR0gtVDMxOXxTR0gtVDMyOXxTR0gtVDMzOXxTR0gtVDM0OXxTR0gtVDM1OXxTR0gtVDM2OXxTR0gtVDM3OXxTR0gtVDQwOXxTR0gtVDQyOXxTR0gtVDQzOXxTR0gtVDQ1OXxTR0gtVDQ2OXxTR0gtVDQ3OXxTR0gtVDQ5OXxTR0gtVDUwOXxTR0gtVDUxOXxTR0gtVDUzOXxTR0gtVDU1OXxTR0gtVDU4OXxTR0gtVDYwOXxTR0gtVDYxOXxTR0gtVDYyOXxTR0gtVDYzOXxTR0gtVDY1OXxTR0gtVDY2OXxTR0gtVDY3OXxTR0gtVDcwOXxTR0gtVDcxOXxTR0gtVDcyOXxTR0gtVDczOXxTR0gtVDc0NnxTR0gtVDc0OXxTR0gtVDc1OXxTR0gtVDc2OXxTR0gtVDgwOXxTR0gtVDgxOXxTR0gtVDgzOXxTR0gtVDkxOXxTR0gtVDkyOXxTR0gtVDkzOXxTR0gtVDk1OXxTR0gtVDk4OXxTR0gtVTEwMHxTR0gtVTIwMHxTR0gtVTgwMHxTR0gtVjIwNXxTR0gtVjIwNnxTR0gtWDEwMHxTR0gtWDEwNXxTR0gtWDEyMHxTR0gtWDE0MHxTR0gtWDQyNnxTR0gtWDQyN3xTR0gtWDQ3NXxTR0gtWDQ5NXxTR0gtWDQ5N3xTR0gtWDUwN3xTR0gtWDYwMHxTR0gtWDYxMHxTR0gtWDYyMHxTR0gtWDYzMHxTR0gtWDcwMHxTR0gtWDgyMHxTR0gtWDg5MHxTR0gtWjEzMHxTR0gtWjE1MHxTR0gtWjE3MHxTR0gtWlgxMHxTR0gtWlgyMHxTSFctTTExMHxTUEgtQTEyMHxTUEgtQTQwMHxTUEgtQTQyMHxTUEgtQTQ2MHxTUEgtQTUwMHxTUEgtQTU2MHxTUEgtQTYwMHxTUEgtQTYyMHxTUEgtQTY2MHxTUEgtQTcwMHxTUEgtQTc0MHxTUEgtQTc2MHxTUEgtQTc5MHxTUEgtQTgwMHxTUEgtQTgyMHxTUEgtQTg0MHxTUEgtQTg4MHxTUEgtQTkwMHxTUEgtQTk0MHxTUEgtQTk2MHxTUEgtRDYwMHxTUEgtRDcwMHxTUEgtRDcxMHxTUEgtRDcyMHxTUEgtSTMwMHxTUEgtSTMyNXxTUEgtSTMzMHxTUEgtSTM1MHxTUEgtSTUwMHxTUEgtSTYwMHxTUEgtSTcwMHxTUEgtTDcwMHxTUEgtTTEwMHxTUEgtTTIyMHxTUEgtTTI0MHxTUEgtTTMwMHxTUEgtTTMwNXxTUEgtTTMyMHxTUEgtTTMzMHxTUEgtTTM1MHxTUEgtTTM2MHxTUEgtTTM3MHxTUEgtTTM4MHxTUEgtTTUxMHxTUEgtTTU0MHxTUEgtTTU1MHxTUEgtTTU2MHxTUEgtTTU3MHxTUEgtTTU4MHxTUEgtTTYxMHxTUEgtTTYyMHxTUEgtTTYzMHxTUEgtTTgwMHxTUEgtTTgxMHxTUEgtTTg1MHxTUEgtTTkwMHxTUEgtTTkxMHxTUEgtTTkyMHxTUEgtTTkzMHxTUEgtTjEwMHxTUEgtTjIwMHxTUEgtTjI0MHxTUEgtTjMwMHxTUEgtTjQwMHxTUEgtWjQwMHxTV0MtRTEwMHxTQ0gtaTkwOXxHVC1ONzEwMHxHVC1ONzEwNXxTQ0gtSTUzNXxTTS1OOTAwQXxTR0gtSTMxN3xTR0gtVDk5OUx8R1QtUzUzNjBCfEdULUk4MjYyfEdULVM2ODAyfEdULVM2MzEyfEdULVM2MzEwfEdULVM1MzEyfEdULVM1MzEwfEdULUk5MTA1fEdULUk4NTEwfEdULVM2NzkwTnxTTS1HNzEwNXxTTS1OOTAwNXxHVC1TNTMwMXxHVC1JOTI5NXxHVC1JOTE5NXxTTS1DMTAxfEdULVM3MzkyfEdULVM3NTYwfEdULUI3NjEwfEdULUk1NTEwfEdULVM3NTgyfEdULVM3NTMwRXxHVC1JODc1MHxTTS1HOTAwNlZ8U00tRzkwMDhWfFNNLUc5MDA5RHxTTS1HOTAwQXxTTS1HOTAwRHxTTS1HOTAwRnxTTS1HOTAwSHxTTS1HOTAwSXxTTS1HOTAwSnxTTS1HOTAwS3xTTS1HOTAwTHxTTS1HOTAwTXxTTS1HOTAwUHxTTS1HOTAwUjR8U00tRzkwMFN8U00tRzkwMFR8U00tRzkwMFZ8U00tRzkwMFc4JyxcbiAgICAgICAgICAgICdMRyc6ICdcXFxcYkxHXFxcXGI7fExHWy0gXT8oQzgwMHxDOTAwfEU0MDB8RTYxMHxFOTAwfEUtOTAwfEYxNjB8RjE4MEt8RjE4MEx8RjE4MFN8NzMwfDg1NXxMMTYwfExTNzQwfExTODQwfExTOTcwfExVNjIwMHxNUzY5MHxNUzY5NXxNUzc3MHxNUzg0MHxNUzg3MHxNUzkxMHxQNTAwfFA3MDB8UDcwNXxWTTY5NnxBUzY4MHxBUzY5NXxBWDg0MHxDNzI5fEU5NzB8R1M1MDV8MjcyfEMzOTV8RTczOUJLfEU5NjB8TDU1Q3xMNzVDfExTNjk2fExTODYwfFA3NjlCS3xQMzUwfFA1MDB8UDUwOXxQODcwfFVOMjcyfFVTNzMwfFZTODQwfFZTOTUwfExOMjcyfExONTEwfExTNjcwfExTODU1fExXNjkwfE1OMjcwfE1ONTEwfFA1MDl8UDc2OXxQOTMwfFVOMjAwfFVOMjcwfFVONTEwfFVONjEwfFVTNjcwfFVTNzQwfFVTNzYwfFVYMjY1fFVYODQwfFZOMjcxfFZONTMwfFZTNjYwfFZTNzAwfFZTNzQwfFZTNzUwfFZTOTEwfFZTOTIwfFZTOTMwfFZYOTIwMHxWWDExMDAwfEFYODQwQXxMVzc3MHxQNTA2fFA5MjV8UDk5OXxFNjEyfEQ5NTV8RDgwMiknLFxuICAgICAgICAgICAgJ1NvbnknOiAnU29ueVNUfFNvbnlMVHxTb255RXJpY3Nzb258U29ueUVyaWNzc29uTFQxNWl2fExUMThpfEUxMGl8TFQyOGh8TFQyNnd8U29ueUVyaWNzc29uTVQyN2l8QzUzMDN8QzY5MDJ8QzY5MDN8QzY5MDZ8QzY5NDN8RDI1MzMnLFxuICAgICAgICAgICAgJ0FzdXMnOiAnQXN1cy4qR2FsYXh5fFBhZEZvbmUuKk1vYmlsZScsXG4gICAgICAgICAgICAnTWljcm9tYXgnOiAnTWljcm9tYXguKlxcXFxiKEEyMTB8QTkyfEE4OHxBNzJ8QTExMXxBMTEwUXxBMTE1fEExMTZ8QTExMHxBOTBTfEEyNnxBNTF8QTM1fEE1NHxBMjV8QTI3fEE4OXxBNjh8QTY1fEE1N3xBOTApXFxcXGInLFxuICAgICAgICAgICAgJ1BhbG0nOiAnUGFsbVNvdXJjZXxQYWxtJyxcbiAgICAgICAgICAgICdWZXJ0dSc6ICdWZXJ0dXxWZXJ0dS4qTHRkfFZlcnR1LipBc2NlbnR8VmVydHUuKkF5eHRhfFZlcnR1LipDb25zdGVsbGF0aW9uKEZ8UXVlc3QpP3xWZXJ0dS4qTW9uaWthfFZlcnR1LipTaWduYXR1cmUnLFxuICAgICAgICAgICAgJ1BhbnRlY2gnOiAnUEFOVEVDSHxJTS1BODUwU3xJTS1BODQwU3xJTS1BODMwTHxJTS1BODMwS3xJTS1BODMwU3xJTS1BODIwTHxJTS1BODEwS3xJTS1BODEwU3xJTS1BODAwU3xJTS1UMTAwS3xJTS1BNzI1THxJTS1BNzgwTHxJTS1BNzc1Q3xJTS1BNzcwS3xJTS1BNzYwU3xJTS1BNzUwS3xJTS1BNzQwU3xJTS1BNzMwU3xJTS1BNzIwTHxJTS1BNzEwS3xJTS1BNjkwTHxJTS1BNjkwU3xJTS1BNjUwU3xJTS1BNjMwS3xJTS1BNjAwU3xWRUdBIFBUTDIxfFBUMDAzfFA4MDEwfEFEUjkxMEx8UDYwMzB8UDYwMjB8UDkwNzB8UDQxMDB8UDkwNjB8UDUwMDB8Q0RNODk5MnxUWFQ4MDQ1fEFEUjg5OTV8SVMxMVBUfFAyMDMwfFA2MDEwfFA4MDAwfFBUMDAyfElTMDZ8Q0RNODk5OXxQOTA1MHxQVDAwMXxUWFQ4MDQwfFAyMDIwfFA5MDIwfFAyMDAwfFA3MDQwfFA3MDAwfEM3OTAnLFxuICAgICAgICAgICAgJ0ZseSc6ICdJUTIzMHxJUTQ0NHxJUTQ1MHxJUTQ0MHxJUTQ0MnxJUTQ0MXxJUTI0NXxJUTI1NnxJUTIzNnxJUTI1NXxJUTIzNXxJUTI0NXxJUTI3NXxJUTI0MHxJUTI4NXxJUTI4MHxJUTI3MHxJUTI2MHxJUTI1MCcsXG4gICAgICAgICAgICAnV2lrbyc6ICdLSVRFIDRHfEhJR0hXQVl8R0VUQVdBWXxTVEFJUldBWXxEQVJLU0lERXxEQVJLRlVMTHxEQVJLTklHSFR8REFSS01PT058U0xJREV8V0FYIDRHfFJBSU5CT1d8QkxPT018U1VOU0VUfEdPQXxMRU5OWXxCQVJSWXxJR0dZfE9aWll8Q0lOSyBGSVZFfENJTksgUEVBWHxDSU5LIFBFQVggMnxDSU5LIFNMSU18Q0lOSyBTTElNIDJ8Q0lOSyArfENJTksgS0lOR3xDSU5LIFBFQVh8Q0lOSyBTTElNfFNVQkxJTScsXG4gICAgICAgICAgICAnaU1vYmlsZSc6ICdpLW1vYmlsZSAoSVF8aS1TVFlMRXxpZGVhfFpBQXxIaXR6KScsXG4gICAgICAgICAgICAnU2ltVmFsbGV5JzogJ1xcXFxiKFNQLTgwfFhULTkzMHxTWC0zNDB8WFQtOTMwfFNYLTMxMHxTUC0zNjB8U1A2MHxTUFQtODAwfFNQLTEyMHxTUFQtODAwfFNQLTE0MHxTUFgtNXxTUFgtOHxTUC0xMDB8U1BYLTh8U1BYLTEyKVxcXFxiJyxcbiAgICAgICAgICAgICdXb2xmZ2FuZyc6ICdBVC1CMjREfEFULUFTNTBIRHxBVC1BUzQwV3xBVC1BUzU1SER8QVQtQVM0NXEyfEFULUIyNkR8QVQtQVM1MFEnLFxuICAgICAgICAgICAgJ0FsY2F0ZWwnOiAnQWxjYXRlbCcsXG4gICAgICAgICAgICAnTmludGVuZG8nOiAnTmludGVuZG8gM0RTJyxcbiAgICAgICAgICAgICdBbW9pJzogJ0Ftb2knLFxuICAgICAgICAgICAgJ0lOUSc6ICdJTlEnLFxuICAgICAgICAgICAgJ0dlbmVyaWNQaG9uZSc6ICdUYXBhdGFsa3xQREE7fFNBR0VNfFxcXFxibW1wXFxcXGJ8cG9ja2V0fFxcXFxicHNwXFxcXGJ8c3ltYmlhbnxTbWFydHBob25lfHNtYXJ0Zm9ufHRyZW98dXAuYnJvd3Nlcnx1cC5saW5rfHZvZGFmb25lfFxcXFxid2FwXFxcXGJ8bm9raWF8U2VyaWVzNDB8U2VyaWVzNjB8UzYwfFNvbnlFcmljc3NvbnxOOTAwfE1BVUkuKldBUC4qQnJvd3NlcidcbiAgICAgICAgfSxcbiAgICAgICAgJ29zcyc6IHtcbiAgICAgICAgICAgICdBbmRyb2lkT1MnOiAnQW5kcm9pZCcsXG4gICAgICAgICAgICAnQmxhY2tCZXJyeU9TJzogJ2JsYWNrYmVycnl8XFxcXGJCQjEwXFxcXGJ8cmltIHRhYmxldCBvcycsXG4gICAgICAgICAgICAnUGFsbU9TJzogJ1BhbG1PU3xhdmFudGdvfGJsYXplcnxlbGFpbmV8aGlwdG9wfHBhbG18cGx1Y2tlcnx4aWlubycsXG4gICAgICAgICAgICAnU3ltYmlhbk9TJzogJ1N5bWJpYW58U3ltYk9TfFNlcmllczYwfFNlcmllczQwfFNZQi1bMC05XSt8XFxcXGJTNjBcXFxcYicsXG4gICAgICAgICAgICAnV2luZG93c01vYmlsZU9TJzogJ1dpbmRvd3MgQ0UuKihQUEN8U21hcnRwaG9uZXxNb2JpbGV8WzAtOV17M314WzAtOV17M30pfFdpbmRvdyBNb2JpbGV8V2luZG93cyBQaG9uZSBbMC05Ll0rfFdDRTsnLFxuICAgICAgICAgICAgJ1dpbmRvd3NQaG9uZU9TJzogJ1dpbmRvd3MgUGhvbmUgOC4wfFdpbmRvd3MgUGhvbmUgT1N8WEJMV1A3fFp1bmVXUDd8V2luZG93cyBOVCA2LlsyM107IEFSTTsnLFxuICAgICAgICAgICAgJ2lPUyc6ICdcXFxcYmlQaG9uZS4qTW9iaWxlfFxcXFxiaVBvZHxcXFxcYmlQYWQnLFxuICAgICAgICAgICAgJ01lZUdvT1MnOiAnTWVlR28nLFxuICAgICAgICAgICAgJ01hZW1vT1MnOiAnTWFlbW8nLFxuICAgICAgICAgICAgJ0phdmFPUyc6ICdKMk1FXFwvfFxcXFxiTUlEUFxcXFxifFxcXFxiQ0xEQ1xcXFxiJyxcbiAgICAgICAgICAgICd3ZWJPUyc6ICd3ZWJPU3xocHdPUycsXG4gICAgICAgICAgICAnYmFkYU9TJzogJ1xcXFxiQmFkYVxcXFxiJyxcbiAgICAgICAgICAgICdCUkVXT1MnOiAnQlJFVydcbiAgICAgICAgfSxcbiAgICAgICAgJ3Vhcyc6IHtcbiAgICAgICAgICAgICdDaHJvbWUnOiAnXFxcXGJDck1vXFxcXGJ8Q3JpT1N8QW5kcm9pZC4qQ2hyb21lXFwvWy4wLTldKiAoTW9iaWxlKT8nLFxuICAgICAgICAgICAgJ0RvbGZpbic6ICdcXFxcYkRvbGZpblxcXFxiJyxcbiAgICAgICAgICAgICdPcGVyYSc6ICdPcGVyYS4qTWluaXxPcGVyYS4qTW9iaXxBbmRyb2lkLipPcGVyYXxNb2JpbGUuKk9QUlxcL1swLTkuXSt8Q29hc3RcXC9bMC05Ll0rJyxcbiAgICAgICAgICAgICdTa3lmaXJlJzogJ1NreWZpcmUnLFxuICAgICAgICAgICAgJ0lFJzogJ0lFTW9iaWxlfE1TSUVNb2JpbGUnLFxuICAgICAgICAgICAgJ0ZpcmVmb3gnOiAnZmVubmVjfGZpcmVmb3guKm1hZW1vfChNb2JpbGV8VGFibGV0KS4qRmlyZWZveHxGaXJlZm94LipNb2JpbGUnLFxuICAgICAgICAgICAgJ0JvbHQnOiAnYm9sdCcsXG4gICAgICAgICAgICAnVGVhU2hhcmsnOiAndGVhc2hhcmsnLFxuICAgICAgICAgICAgJ0JsYXplcic6ICdCbGF6ZXInLFxuICAgICAgICAgICAgJ1NhZmFyaSc6ICdWZXJzaW9uLipNb2JpbGUuKlNhZmFyaXxTYWZhcmkuKk1vYmlsZXxNb2JpbGVTYWZhcmknLFxuICAgICAgICAgICAgJ1RpemVuJzogJ1RpemVuJyxcbiAgICAgICAgICAgICdVQ0Jyb3dzZXInOiAnVUMuKkJyb3dzZXJ8VUNXRUInLFxuICAgICAgICAgICAgJ2JhaWR1Ym94YXBwJzogJ2JhaWR1Ym94YXBwJyxcbiAgICAgICAgICAgICdiYWlkdWJyb3dzZXInOiAnYmFpZHVicm93c2VyJyxcbiAgICAgICAgICAgICdEaWlnb0Jyb3dzZXInOiAnRGlpZ29Ccm93c2VyJyxcbiAgICAgICAgICAgICdQdWZmaW4nOiAnUHVmZmluJyxcbiAgICAgICAgICAgICdNZXJjdXJ5JzogJ1xcXFxiTWVyY3VyeVxcXFxiJyxcbiAgICAgICAgICAgICdPYmlnb0Jyb3dzZXInOiAnT2JpZ28nLFxuICAgICAgICAgICAgJ05ldEZyb250JzogJ05GLUJyb3dzZXInLFxuICAgICAgICAgICAgJ0dlbmVyaWNCcm93c2VyJzogJ05va2lhQnJvd3NlcnxPdmlCcm93c2VyfE9uZUJyb3dzZXJ8VHdvbmt5QmVhbUJyb3dzZXJ8U0VNQy4qQnJvd3NlcnxGbHlGbG93fE1pbmltb3xOZXRGcm9udHxOb3ZhcnJhLVZpc2lvbnxNUVFCcm93c2VyfE1pY3JvTWVzc2VuZ2VyJ1xuICAgICAgICB9LFxuICAgICAgICAncHJvcHMnOiB7XG4gICAgICAgICAgICAnTW9iaWxlJzogJ01vYmlsZVxcL1tWRVJdJyxcbiAgICAgICAgICAgICdCdWlsZCc6ICdCdWlsZFxcL1tWRVJdJyxcbiAgICAgICAgICAgICdWZXJzaW9uJzogJ1ZlcnNpb25cXC9bVkVSXScsXG4gICAgICAgICAgICAnVmVuZG9ySUQnOiAnVmVuZG9ySURcXC9bVkVSXScsXG4gICAgICAgICAgICAnaVBhZCc6ICdpUGFkLipDUFVbYS16IF0rW1ZFUl0nLFxuICAgICAgICAgICAgJ2lQaG9uZSc6ICdpUGhvbmUuKkNQVVthLXogXStbVkVSXScsXG4gICAgICAgICAgICAnaVBvZCc6ICdpUG9kLipDUFVbYS16IF0rW1ZFUl0nLFxuICAgICAgICAgICAgJ0tpbmRsZSc6ICdLaW5kbGVcXC9bVkVSXScsXG4gICAgICAgICAgICAnQ2hyb21lJzogW1xuICAgICAgICAgICAgICAgICdDaHJvbWVcXC9bVkVSXScsXG4gICAgICAgICAgICAgICAgJ0NyaU9TXFwvW1ZFUl0nLFxuICAgICAgICAgICAgICAgICdDck1vXFwvW1ZFUl0nXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgJ0NvYXN0JzogW1xuICAgICAgICAgICAgICAgICdDb2FzdFxcL1tWRVJdJ1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICdEb2xmaW4nOiAnRG9sZmluXFwvW1ZFUl0nLFxuICAgICAgICAgICAgJ0ZpcmVmb3gnOiAnRmlyZWZveFxcL1tWRVJdJyxcbiAgICAgICAgICAgICdGZW5uZWMnOiAnRmVubmVjXFwvW1ZFUl0nLFxuICAgICAgICAgICAgJ0lFJzogW1xuICAgICAgICAgICAgICAgICdJRU1vYmlsZVxcL1tWRVJdOycsXG4gICAgICAgICAgICAgICAgJ0lFTW9iaWxlIFtWRVJdJyxcbiAgICAgICAgICAgICAgICAnTVNJRSBbVkVSXTsnXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgJ05ldEZyb250JzogJ05ldEZyb250XFwvW1ZFUl0nLFxuICAgICAgICAgICAgJ05va2lhQnJvd3Nlcic6ICdOb2tpYUJyb3dzZXJcXC9bVkVSXScsXG4gICAgICAgICAgICAnT3BlcmEnOiBbXG4gICAgICAgICAgICAgICAgJyBPUFJcXC9bVkVSXScsXG4gICAgICAgICAgICAgICAgJ09wZXJhIE1pbmlcXC9bVkVSXScsXG4gICAgICAgICAgICAgICAgJ1ZlcnNpb25cXC9bVkVSXSdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAnT3BlcmEgTWluaSc6ICdPcGVyYSBNaW5pXFwvW1ZFUl0nLFxuICAgICAgICAgICAgJ09wZXJhIE1vYmknOiAnVmVyc2lvblxcL1tWRVJdJyxcbiAgICAgICAgICAgICdVQyBCcm93c2VyJzogJ1VDIEJyb3dzZXJbVkVSXScsXG4gICAgICAgICAgICAnTVFRQnJvd3Nlcic6ICdNUVFCcm93c2VyXFwvW1ZFUl0nLFxuICAgICAgICAgICAgJ01pY3JvTWVzc2VuZ2VyJzogJ01pY3JvTWVzc2VuZ2VyXFwvW1ZFUl0nLFxuICAgICAgICAgICAgJ2JhaWR1Ym94YXBwJzogJ2JhaWR1Ym94YXBwXFwvW1ZFUl0nLFxuICAgICAgICAgICAgJ2JhaWR1YnJvd3Nlcic6ICdiYWlkdWJyb3dzZXJcXC9bVkVSXScsXG4gICAgICAgICAgICAnSXJvbic6ICdJcm9uXFwvW1ZFUl0nLFxuICAgICAgICAgICAgJ1NhZmFyaSc6IFtcbiAgICAgICAgICAgICAgICAnVmVyc2lvblxcL1tWRVJdJyxcbiAgICAgICAgICAgICAgICAnU2FmYXJpXFwvW1ZFUl0nXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgJ1NreWZpcmUnOiAnU2t5ZmlyZVxcL1tWRVJdJyxcbiAgICAgICAgICAgICdUaXplbic6ICdUaXplblxcL1tWRVJdJyxcbiAgICAgICAgICAgICdXZWJraXQnOiAnd2Via2l0WyBcXC9dW1ZFUl0nLFxuICAgICAgICAgICAgJ0dlY2tvJzogJ0dlY2tvXFwvW1ZFUl0nLFxuICAgICAgICAgICAgJ1RyaWRlbnQnOiAnVHJpZGVudFxcL1tWRVJdJyxcbiAgICAgICAgICAgICdQcmVzdG8nOiAnUHJlc3RvXFwvW1ZFUl0nLFxuICAgICAgICAgICAgJ2lPUyc6ICcgXFxcXGJpP09TXFxcXGIgW1ZFUl1bIDtdezF9JyxcbiAgICAgICAgICAgICdBbmRyb2lkJzogJ0FuZHJvaWQgW1ZFUl0nLFxuICAgICAgICAgICAgJ0JsYWNrQmVycnknOiBbXG4gICAgICAgICAgICAgICAgJ0JsYWNrQmVycnlbXFxcXHddK1xcL1tWRVJdJyxcbiAgICAgICAgICAgICAgICAnQmxhY2tCZXJyeS4qVmVyc2lvblxcL1tWRVJdJyxcbiAgICAgICAgICAgICAgICAnVmVyc2lvblxcL1tWRVJdJ1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICdCUkVXJzogJ0JSRVcgW1ZFUl0nLFxuICAgICAgICAgICAgJ0phdmEnOiAnSmF2YVxcL1tWRVJdJyxcbiAgICAgICAgICAgICdXaW5kb3dzIFBob25lIE9TJzogW1xuICAgICAgICAgICAgICAgICdXaW5kb3dzIFBob25lIE9TIFtWRVJdJyxcbiAgICAgICAgICAgICAgICAnV2luZG93cyBQaG9uZSBbVkVSXSdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAnV2luZG93cyBQaG9uZSc6ICdXaW5kb3dzIFBob25lIFtWRVJdJyxcbiAgICAgICAgICAgICdXaW5kb3dzIENFJzogJ1dpbmRvd3MgQ0VcXC9bVkVSXScsXG4gICAgICAgICAgICAnV2luZG93cyBOVCc6ICdXaW5kb3dzIE5UIFtWRVJdJyxcbiAgICAgICAgICAgICdTeW1iaWFuJzogW1xuICAgICAgICAgICAgICAgICdTeW1iaWFuT1NcXC9bVkVSXScsXG4gICAgICAgICAgICAgICAgJ1N5bWJpYW5cXC9bVkVSXSdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAnd2ViT1MnOiBbXG4gICAgICAgICAgICAgICAgJ3dlYk9TXFwvW1ZFUl0nLFxuICAgICAgICAgICAgICAgICdocHdPU1xcL1tWRVJdOydcbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBCcm93c2VyIHVzZXJBZ2VudFxuICAgICAqL1xuICAgIHVhOiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCxcblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVcbiAgICAgKi9cbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5jb252ZXJ0KCk7XG5cbiAgICAgICAgdmFyIHJ1bGVzID0gdGhpcy5tb2JpbGVSZWdUZXh0O1xuICAgICAgICBydWxlcy5vc3MwID0ge1xuICAgICAgICAgICAgV2luZG93c1Bob25lT1M6IHJ1bGVzLm9zcy5XaW5kb3dzUGhvbmVPUyxcbiAgICAgICAgICAgIFdpbmRvd3NNb2JpbGVPUzogcnVsZXMub3NzLldpbmRvd3NNb2JpbGVPU1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRldmljZSA9ICB0aGlzLl9maW5kTWF0Y2gocnVsZXMucGhvbmVzLCB0aGlzLnVhKTtcbiAgICAgICAgdGhpcy5pb3MgPSB0aGlzLmlzSU9TKCk7XG4gICAgICAgIHRoaXMuYW5kcm9pZCA9IHRoaXMuaXNBbmRyb2lkKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvbnZlcnQgZGV2aWNlLCBvcywgYnJvd3NlciBpbmZvIHRvIHJlZyBlZGl0LlxuICAgICAqL1xuICAgIGNvbnZlcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcnVsZSxcbiAgICAgICAgICAgIG1vYmlsZURldGVjdFJ1bGVzID0gdGhpcy5tb2JpbGVSZWdUZXh0O1xuXG4gICAgICAgIHRoaXMuX3Byb3BDb252ZXJ0KCk7XG5cbiAgICAgICAgZm9yIChydWxlIGluIG1vYmlsZURldGVjdFJ1bGVzKSB7XG4gICAgICAgICAgICBpZihydWxlICE9PSAncHJvcHMnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29udmVydFRvUmVnRXhwKG1vYmlsZURldGVjdFJ1bGVzW3J1bGVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IHByb3BlcnR5IGJ5IGVhY2ggaW52aXJvbm1lbnRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9wcm9wQ29udmVydDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBrZXksXG4gICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBsZW4sXG4gICAgICAgICAgICB2ZXJQb3MsXG4gICAgICAgICAgICBoYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxcbiAgICAgICAgICAgIHJ1bGVzID0gdGhpcy5tb2JpbGVSZWdUZXh0LnByb3BzO1xuXG4gICAgICAgIGZvciAoa2V5IGluIHJ1bGVzKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcC5jYWxsKHJ1bGVzLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzID0gcnVsZXNba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoIW5lLnV0aWwuaXNBcnJheSh2YWx1ZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlcyA9IFt2YWx1ZXNdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZW4gPSB2YWx1ZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgdmVyUG9zID0gdmFsdWUuaW5kZXhPZignW1ZFUl0nKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZlclBvcyA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cmluZygwLCB2ZXJQb3MpICsgJyhbXFxcXHcuX1xcXFwrXSspJyArIHZhbHVlLnN1YnN0cmluZyh2ZXJQb3MgKyA1KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbaV0gPSBuZXcgUmVnRXhwKHZhbHVlLCAnaScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBydWxlc1trZXldID0gdmFsdWVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCB1c2VyQWdlbnRcbiAgICAgKi9cbiAgICB1c2VyQWdlbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAobmUudXRpbC5pc1VuZGVmaW5lZCh0aGlzLmNhY2hlLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUudXNlckFnZW50ID0gdGhpcy5fZmluZE1hdGNoKHRoaXMubW9iaWxlUmVnVGV4dC51YXMsIHRoaXMudWEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlLnVzZXJBZ2VudDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29udmVyIHRvIHJlZyBleHBcbiAgICAgKiBAcGFyYW0gb2JqZWN0XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfY29udmVydFRvUmVnRXhwOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICAgICAgdmFyIGhhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LFxuICAgICAgICAgICAga2V5O1xuICAgICAgICBmb3IgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wLmNhbGwob2JqZWN0LCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0W2tleV0gPSBuZXcgUmVnRXhwKG9iamVjdFtrZXldLCAnaScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEZpbmQgT1NcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBnZXRPUzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maW5kTWF0Y2godGhpcy5tb2JpbGVSZWdUZXh0Lm9zczAsIHRoaXMudWEpIHx8XG4gICAgICAgICAgICB0aGlzLl9maW5kTWF0Y2godGhpcy5tb2JpbGVSZWdUZXh0Lm9zcywgdGhpcy51YSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEZpbmQgbWF0Y2ggdXNlcmFnZW50XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfZmluZE1hdGNoOiBmdW5jdGlvbihydWxlcywgdXNlckFnZW50KSB7XG4gICAgICAgIHZhciBrZXksXG4gICAgICAgICAgICBoYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgICAgICAgZm9yIChrZXkgaW4gcnVsZXMpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wLmNhbGwocnVsZXMsIGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAocnVsZXNba2V5XS50ZXN0KHVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEZpbmQgdmVyc2lvblxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHZlcnNpb246IGZ1bmN0aW9uKHByb3BlcnR5TmFtZSkge1xuICAgICAgICB2YXIgdmVyc2lvbiA9IHRoaXMuX2dldFZlcnNpb25TdHIocHJvcGVydHlOYW1lLCB0aGlzLnVhKTtcbiAgICAgICAgcmV0dXJuIHZlcnNpb24gPyB0aGlzLl9wcmVwYXJlVmVyc2lvbk5vKHZlcnNpb24pIDogTmFOO1xuICAgIH0sXG4gICAgXG4gICAgLyoqXG4gICAgICogQ2hlY2sgdGhlIHZlcnNpb24gb2YgdGhlIGdpdmVuIHByb3BlcnR5IGluIHRoZSBVc2VyLUFnZW50LlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdXNlckFnZW50XG4gICAgICogQHJldHVybiB7U3RyaW5nfSB2ZXJzaW9uIG9yIDx0dD5udWxsPC90dD4gaWYgdmVyc2lvbiBub3QgZm91bmRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9nZXRWZXJzaW9uU3RyOiBmdW5jdGlvbihwcm9wZXJ0eU5hbWUsIHVzZXJBZ2VudCkge1xuICAgICAgICB2YXIgcHJvcHMgPSB0aGlzLm1vYmlsZVJlZ1RleHQucHJvcHMsXG4gICAgICAgICAgICBwYXR0ZXJucyxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBsZW4sXG4gICAgICAgICAgICBtYXRjaCxcbiAgICAgICAgICAgIGhhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4gICAgICAgIGlmIChoYXNPd25Qcm9wLmNhbGwocHJvcHMsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICAgIHBhdHRlcm5zID0gcHJvcHNbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgICAgIGxlbiA9IHBhdHRlcm5zLmxlbmd0aDtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICAgICAgbWF0Y2ggPSBwYXR0ZXJuc1tpXS5leGVjKHVzZXJBZ2VudCk7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaFsxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFByZXBhcmUgdGhlIHZlcnNpb24gbnVtYmVyLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2ZXJzaW9uXG4gICAgICogQHJldHVybiB7TnVtYmVyfSB0aGUgdmVyc2lvbiBudW1iZXIgYXMgYSBmbG9hdGluZyBudW1iZXJcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9wcmVwYXJlVmVyc2lvbk5vOiBmdW5jdGlvbih2ZXJzaW9uKSB7XG4gICAgICAgIHZhciBudW1iZXJzO1xuXG4gICAgICAgIG51bWJlcnMgPSB2ZXJzaW9uLnNwbGl0KC9bYS16Ll8gXFwvXFwtXS9pKTtcbiAgICAgICAgaWYgKG51bWJlcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB2ZXJzaW9uID0gbnVtYmVyc1swXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobnVtYmVycy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB2ZXJzaW9uID0gbnVtYmVyc1swXSArICcuJztcbiAgICAgICAgICAgIG51bWJlcnMuc2hpZnQoKTtcbiAgICAgICAgICAgIHZlcnNpb24gKz0gbnVtYmVycy5qb2luKCcnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTnVtYmVyKHZlcnNpb24pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIGlPUyBvciBub3RcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0lPUzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldE9TKCkgPT09ICdpT1MnO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIEFuZHJvaWQgb3Igbm90XG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNBbmRyb2lkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T1MoKSA9PT0gJ0FuZHJvaWRPUyc7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gIEFnZW50RGV0ZWN0b3I7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgTG9hZCBuYXRpdmUgYXBwIG9yIG1vdmUgdG8gaW5zdGFsbCBwYWdlXG4gKiBAZGVwZW5kZW5jeSBjb2RlLXNuaXBwZXQuanMsIGRldGVjdG9ycy5qcywgYWdlbnREZXRlY3Rvci5qc1xuICogQGF1dGhvciBOSE4gRW50LiBGRSBkZXYgdGVhbS48ZGxfamF2YXNjcmlwdEBuaG5lbnQuY29tPlxuICovXG5cbnZhciBBZ2VudERldGVjdG9yID0gcmVxdWlyZSgnLi9hZ2VudERldGVjdG9yJyk7XG52YXIgRGV0ZWN0b3IgPSByZXF1aXJlKCcuL2RldGVjdG9ycycpO1xudmFyIGlPU0RldGVjdG9yID0gcmVxdWlyZSgnLi9pb3NEZXRlY3RvcnMnKTtcbnZhciBFdGNEZXRlY3RvciA9IHJlcXVpcmUoJy4vZXRjRGV0ZWN0b3JzJyk7XG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICogQGNsYXNzXG4gKi9cbnZhciBBcHBMb2FkZXIgPSBuZS51dGlsLmRlZmluZUNsYXNzKC8qKiBAbGVuZHMgQXBwTG9hZGVyLnByb3RvdHlwZSAqL3tcblxuICAgIC8qKioqKioqKioqKioqKioqXG4gICAgICogbWVtYmVyIGZpZWxkc1xuICAgICAqKioqKioqKioqKioqKioqL1xuXG4gICAgLyoqXG4gICAgICogYnJvd3NlciwgZGV2aWNlIGRldGVjdG9yXG4gICAgICovXG4gICAgZGV0ZWN0b3I6IG51bGwsXG4gICAgLyoqXG4gICAgICogT1MgKGFuZHJvaWQvaW9zL2V0YylcbiAgICAgKi9cbiAgICBvczogbnVsbCxcbiAgICAvKipcbiAgICAgKiBkZWZhdWx0IG9wdGlvbnMgdG8gcnVuIGV4ZWNcbiAgICAgKi9cbiAgICBkZWZhdWx0czoge1xuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgaW9zOiB7XG4gICAgICAgICAgICBzY2hlbWU6ICcnLFxuICAgICAgICAgICAgdXJsOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBhbmRyb2lkOiB7XG4gICAgICAgICAgICBzY2hlbWU6ICcnXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqKioqKioqKioqKioqKipcbiAgICAgKiBtZW1iZXIgbWV0aG9kc1xuICAgICAqKioqKioqKioqKioqKioqL1xuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZVxuICAgICAqL1xuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYWQgPSB0aGlzLmFnZW50RGV0ZWN0b3IgPSBuZXcgQWdlbnREZXRlY3RvcigpO1xuICAgICAgICB0aGlzLnVhID0gYWQudXNlckFnZW50KCk7XG4gICAgICAgIHRoaXMub3MgPSBhZC5nZXRPUygpO1xuICAgICAgICB0aGlzLnZlcnNpb24gPSBhZC52ZXJzaW9uKGFkLmlvcyA/IGFkLmRldmljZSA6ICdBbmRyb2lkJyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldCBvcyBieSBEZXRlY3RvclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IFRoZSBvcHRpb25zXG4gICAgICovXG4gICAgc2V0RGV0ZWN0b3I6IGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgaXNOb3RJbnRlbmQgPSAodGhpcy5pc0ludGVudExlc3MoKSB8fCBuZS51dGlsLmlzRXhpc3R5KGNvbnRleHQudXNlVXJsU2NoZW1lKSksXG4gICAgICAgICAgICBpc0ludGVuZCA9IG5lLnV0aWwuaXNFeGlzdHkoY29udGV4dC5pbnRlbnRVUkkpLFxuICAgICAgICAgICAgc3RvcmUgPSBjb250ZXh0LnN0b3JlVVJMLFxuICAgICAgICAgICAgYmFzZURldGVjdCA9IERldGVjdG9yLFxuICAgICAgICAgICAgaU9TRGV0ZWN0ID0gaU9TRGV0ZWN0b3IsXG4gICAgICAgICAgICBhZCA9IHRoaXMuYWdlbnREZXRlY3RvcjtcblxuICAgICAgICBpZiAoYWQuYW5kcm9pZCAmJiB0aGlzLnZlcnNpb24gPj0gY29udGV4dC5hbmRWZXJzaW9uKSB7IC8vIEFuZHJpb2RcbiAgICAgICAgICAgIGlmIChpc05vdEludGVuZCAmJiBzdG9yZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGV0ZWN0b3IgPSBiYXNlRGV0ZWN0LmFuZHJvaWRTY2hlbWVEZXRlY3RvcjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNJbnRlbmQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRldGVjdG9yID0gYmFzZURldGVjdC5hbmRyb2lkSW50ZW5kRGV0ZWN0b3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoYWQuaW9zICYmIHN0b3JlKSB7Ly8gSU9TXG4gICAgICAgICAgICBpZihwYXJzZUludCh0aGlzLnZlcnNpb24ubWFqb3IsIDEwKSA8IDgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRldGVjdG9yID0gaU9TRGV0ZWN0Lmlvc09sZGVyRGV0ZWN0b3I7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGV0ZWN0b3IgPSBpT1NEZXRlY3QuaW9zUmVjZW50RGV0ZWN0b3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7IC8vIEVUQ1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5kZXRlY3RvciA9IGJhc2VEZXRlY3QuZXRjRGV0ZWN0b3I7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRleHQuZXRjQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5ldGNDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUnVuIHNlbGVjdGVkIGRldGVjdG9yIFxuICAgICAqL1xuICAgIHJ1bkRldGVjdG9yOiBmdW5jdGlvbihjb250ZXh0KSB7XG4gICAgICAgIGlmKHRoaXMuZGV0ZWN0b3IgJiYgKHRoaXMuZGV0ZWN0b3IudHlwZSAhPT0gRXRjRGV0ZWN0b3IudHlwZSkpIHtcbiAgICAgICAgICAgIHRoaXMuZGV0ZWN0b3IucnVuKGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgaW50ZW50IHN1cHBvcnRlZFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzSW50ZW50TGVzczogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpbnRlbnRsZXNzQnJvd3NlcnMgPSBbXG4gICAgICAgICAgICAnZmlyZWZveCcsXG4gICAgICAgICAgICAnb3ByJ1xuICAgICAgICBdO1xuICAgICAgICB2YXIgYmxhY2tMaXN0UmVnZXhwID0gbmV3IFJlZ0V4cChpbnRlbnRsZXNzQnJvd3NlcnMuam9pbignfCcpLCAnaScpLFxuICAgICAgICAgICAgYXBwID0gdGhpcy5hZ2VudERldGVjdG9yO1xuICAgICAgICByZXR1cm4gYmxhY2tMaXN0UmVnZXhwLnRlc3QoYXBwLnVhKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IG9zXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRPUzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFnZW50RGV0ZWN0b3IuZ2V0T1MoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2FsbCBhcHBcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiB2YXIgbG9hZGVyID0gbmV3IG5lLmNvbXBvbmVudC5BcHBMb2FkZXIoKTtcbiAgICAgKiBsb2FkZXIuZXhlYyh7XG4gICAgICogICAgICBuYW1lOiAnYXBwJywgLy8gYXBwbGljYXRpb24gTmFtZSAoZXguIGZhY2Vib29rLCB0d2l0dGVyLCBkYXVtKVxuICAgICAqICAgICAgaW9zOiB7XG4gICAgICogICAgICAgICAgc2NoZW1lOiAnZmVjaGVjazovLycsIC8vIGlwaG9uZSBhcHAgc2NoZW1lXG4gICAgICogICAgICAgICAgdXJsOiAnaXRtcy1hcHBzOi8vaXR1bmVzLmFwcGxlLmNvbS9hcHAvLi4uLi4nIC8vIGFwcCBzdG9yZSB1cmxcbiAgICAgKiAgICAgIH0sXG4gICAgICogICAgICBhbmRyb2lkOiB7XG4gICAgICogICAgICAgICAgc2NoZW1lOiAnaW50ZW50Oi8vaG9tZSNJbnRlbnQ7c2NoZW1lPWZlY2hlY2s7cGFja2FnZT1jb20uZmVjaGVjaztlbmQnIC8vIGFuZHJvaWQgaW50ZW50IHVyaVxuICAgICAqICAgICAgfVxuICAgICAqICB9KTtcbiAgICAgKi9cbiAgICBleGVjOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBuZS51dGlsLmV4dGVuZCh0aGlzLmRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgICAgdmFyIGNvbnRleHQgPSB7XG4gICAgICAgICAgICBhcHBOYW1lOiBvcHRpb25zLm5hbWUsXG4gICAgICAgICAgICB1cmxTY2hlbWU6IG9wdGlvbnMuaW9zLnNjaGVtZSxcbiAgICAgICAgICAgIHN0b3JlVVJMOiBvcHRpb25zLmlvcy51cmwsXG4gICAgICAgICAgICBpbnRlbnRVUkk6IG9wdGlvbnMuYW5kcm9pZC5zY2hlbWUsXG4gICAgICAgICAgICBldGNDYWxsYmFjazogb3B0aW9ucy5ldGNDYWxsYmFjayxcbiAgICAgICAgICAgIGFuZFZlcnNpb246IG9wdGlvbnMuYW5kcm9pZC52ZXJzaW9uXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0RGV0ZWN0b3IoY29udGV4dCk7XG4gICAgICAgIHRoaXMucnVuRGV0ZWN0b3IoY29udGV4dCk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwTG9hZGVyO1xuXG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgTWl4aW4gbW9kdWxlc1xuICogQGRlcGVuZGVuY3kgY29kZS1zbmlwcGV0LmpzLCBhcHBMb2FkZXIuanNcbiAqIEBhdXRob3IgTkhOIEVudC4gRkUgZGV2IHRlYW0uPGRsX2phdmFzY3JpcHRAbmhuZW50LmNvbT5cbiAqL1xuLyoqXG4gKiBAbmFtZXNwYWNlIERldGVjdG9yXG4gKi9cbnZhciBEZXRlY3RvciA9IHtcbiAgICAvKipcbiAgICAgKiBmb3IgdGltZXJcbiAgICAgKi9cbiAgICBUSU1FT1VUOiB7XG4gICAgICAgIElPU19TSE9SVDogMTAwMCxcbiAgICAgICAgSU9TX0xPTkc6IDEwMDAgKiAyLFxuICAgICAgICBBTkRST0lEOiAxMDAgKiAzLFxuICAgICAgICBJTlRFUlZBTDogMTAwXG4gICAgfSxcbiAgICBcbiAgICAvKipcbiAgICAgKiBDYWxsIGFwcCBieSBpZnJhbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsU2NoZW1lIGlmcmFtZSB1cmxcbiAgICAgKi9cbiAgICBydW5BcHBXaXRoSWZyYW1lOiBmdW5jdGlvbiAodXJsU2NoZW1lKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgICAgIGlmcmFtZTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZnJhbWUgPSBzZWxmLmdldElmcmFtZU1hZGVCeUlkKCdzdXBwb3J0RnJhbWUnKTtcbiAgICAgICAgICAgIGlmcmFtZS5zcmMgPSB1cmxTY2hlbWU7XG4gICAgICAgIH0sIHRoaXMuVElNRU9VVC5JTlRFUlZBTCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBpZnJhbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgaWZyYW1lIElEXG4gICAgICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIGdldElmcmFtZU1hZGVCeUlkOiBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdmFyIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgICBuZS51dGlsLmV4dGVuZChpZnJhbWUsIHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIGZyYW1lYm9yZGVyOiAnMCcsXG4gICAgICAgICAgICB3aWR0aDogJzAnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMCdcbiAgICAgICAgfSk7XG4gICAgICAgIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gICAgICAgIHJldHVybiBpZnJhbWU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERlZmVyIGNhbGwgY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGltZSBBIGRlbGF5IHRpbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIEEgdXJsIHRvIHJlcXVlc3RcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBBIGNhbGxiYWNrXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBkZWZlckNhbGxiYWNrOiBmdW5jdGlvbiAodXJsLCBjYWxsYmFjaywgdGltZSkge1xuICAgICAgICB2YXIgY2xpY2tlZEF0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgICAgICBub3csXG4gICAgICAgICAgICBzZWxmID0gdGhpcztcblxuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGlmIChzZWxmLmlzUGFnZVZpc2liaWxpdHkoKSAmJiBub3cgLSBjbGlja2VkQXQgPCB0aW1lICsgc2VsZi5USU1FT1VULklOVEVSVkFMKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodXJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGltZSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIGNoZWNrIGEgd2VicGFnZSBpcyB2aXNpYmxlIG9yIGluIGZvY3VzXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNQYWdlVmlzaWJpbGl0eTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAobmUudXRpbC5pc0V4aXN0eShkb2N1bWVudC5oaWRkZW4pKSB7XG4gICAgICAgICAgICByZXR1cm4gIWRvY3VtZW50LmhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmUudXRpbC5pc0V4aXN0eShkb2N1bWVudC53ZWJraXRIaWRkZW4pKSB7XG4gICAgICAgICAgICByZXR1cm4gIWRvY3VtZW50LndlYmtpdEhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59O1xuXG4vKioqKioqKioqKioqKioqKlxuICogQW5kcm9pZCBzZXJpZXNcbiAqKioqKioqKioqKioqKioqL1xuXG4vKipcbiAqIEFuZHJvaWQgaW50ZW50IGxlc3NcbiAqIEBuYW1lc3BhY2UgRGV0ZWN0b3IuYW5kcm9pZFNjaGVtZURldGVjdG9yXG4gKi9cbkRldGVjdG9yLmFuZHJvaWRTY2hlbWVEZXRlY3RvciA9IG5lLnV0aWwuZXh0ZW5kKHtcbiAgICAvKipcbiAgICAgKiBkZXRlY3RvciB0eXBlXG4gICAgICogQG1lbWJlcm9mIERldGVjdG9yLmFuZHJvaWRTY2hlbWVEZXRlY3RvclxuICAgICAqL1xuICAgIHR5cGU6ICdzY2hlbWUnLFxuXG4gICAgLyoqXG4gICAgICogUnVuIGRldGVjdG9yIFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0XG4gICAgICogQG1lbWJlcm9mIERldGVjdG9yLmFuZHJvaWRTY2hlbWVEZXRlY3RvclxuICAgICAqL1xuICAgIHJ1bjogZnVuY3Rpb24oY29udGV4dCkge1xuICAgICAgICB2YXIgc3RvcmVVUkwgPSBjb250ZXh0LnN0b3JlVVJMO1xuICAgICAgICB0aGlzLmRlZmVyQ2FsbGJhY2soc3RvcmVVUkwsIGNvbnRleHQubm90Rm91bmRDYWxsYmFjaywgdGhpcy5USU1FT1VULkFORFJPSUQpO1xuICAgICAgICB0aGlzLnJ1bkFwcFdpdGhJZnJhbWUoY29udGV4dC51cmxTY2hlbWUpO1xuICAgIH1cbn0sIERldGVjdG9yKTtcblxuXG4vKipcbiAqIEFuZHJvaWQgaW50ZW50XG4gKiBAbmFtZXNwYWNlIERldGVjdG9yLmFuZHJvaWRJbnRlbmREZXRlY3RvclxuICovXG5EZXRlY3Rvci5hbmRyb2lkSW50ZW5kRGV0ZWN0b3IgPSBuZS51dGlsLmV4dGVuZCh7XG4gICAgLyoqXG4gICAgICogZGV0ZWN0b3IgdHlwZVxuICAgICAqIEBtZW1iZXJvZiBEZXRlY3Rvci5hbmRyb2lkSW50ZW5kRGV0ZWN0b3JcbiAgICAgKi9cbiAgICB0eXBlOiAnaW50ZW5kJyxcblxuICAgIC8qKlxuICAgICAqIFJ1biBkZXRlY3RvciBcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dFxuICAgICAqIEBtZW1iZXJvZiBEZXRlY3Rvci5hbmRyb2lkSW50ZW5kRGV0ZWN0b3JcbiAgICAgKi9cbiAgICBydW46IGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0b3AubG9jYXRpb24uaHJlZiA9IGNvbnRleHQuaW50ZW50VVJJO1xuICAgICAgICB9LCB0aGlzLlRJTUVPVVQuSU5URVJWQUwpO1xuICAgIH1cbn0sIERldGVjdG9yKTtcbm1vZHVsZS5leHBvcnRzID0gRGV0ZWN0b3I7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgRXRjIG5vdCBzdXBwb3J0IGludmlyb25tZW50XG4gKiBAZGVwZW5kZW5jeSBjb2RlLXNuaXBwZXQuanNcbiAqIEBhdXRob3IgTkhOIEVudC4gRkUgZGV2IHRlYW0uPGRsX2phdmFzY3JpcHRAbmhuZW50LmNvbT5cbiAqL1xuXG4vKipcbiAqIEBuYW1lc3BhY2UgRXRjRGV0ZWN0b3JcbiAqL1xudmFyIEV0Y0RldGVjdG9yID0ge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXJvZiBFdGNEZXRlY3RvclxuICAgICAqL1xuICAgIHR5cGU6ICdldGMnLFxuICAgIC8qKlxuICAgICAqIEBtZW1iZXJvZiBFdGNEZXRlY3RvclxuICAgICAqL1xuICAgIHJ1bjogZnVuY3Rpb24oKSB7XG4gICAgfVxufTtcbm1vZHVsZS5leHBvcnRzID0gRXRjRGV0ZWN0b3I7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgaU9TIE1peGluIG1vZHVsZXNcbiAqIEBkZXBlbmRlbmN5IGNvZGUtc25pcHBldC5qcywgYXBwTG9hZGVyLmpzXG4gKiBAYXV0aG9yIE5ITiBFbnQuIEZFIGRldiB0ZWFtLjxkbF9qYXZhc2NyaXB0QG5obmVudC5jb20+XG4gKi9cbnZhciBEZXRlY3RvciA9IHJlcXVpcmUoJy4vZGV0ZWN0b3JzJyk7XG5cbi8qKlxuICogQG5hbWVzcGFjZSBpT1NEZXRlY3RvclxuICovXG52YXIgaU9TRGV0ZWN0b3IgPSBuZS51dGlsLmV4dGVuZCh7XG4gICAgLyoqXG4gICAgICogZGV0ZWN0b3IgdHlwZVxuICAgICAqIEBtZW1iZXJvZiBpT1NEZXRlY3RvclxuICAgICAqL1xuICAgIHR5cGU6ICdpb3MnLFxuXG4gICAgLyoqXG4gICAgICogZGVmYXVsdCBhcHAgcGFnZSBtb3ZlIGZ1bmN0aW5vXG4gICAgICogQHBhcmFtIHN0b3JlVVJMXG4gICAgICogQG1lbWJlcm9mIGlPU0RldGVjdG9yXG4gICAgICovXG4gICAgbW92ZVRvOiBmdW5jdGlvbihzdG9yZVVSTCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHN0b3JlVVJMO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiB2aXNpYmxpdHljaGFuZ2UgZXZlbnRcbiAgICAgKiBAbWVtYmVyb2YgaU9TRGV0ZWN0b3JcbiAgICAgKi9cbiAgICBiaW5kVmlzaWJpbGl0eUNoYW5nZUV2ZW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5pc1BhZ2VWaXNpYmlsaXR5KCkpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoc2VsZi50aWQpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBjbGVhcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiAgcGFnZWhpZGUgZXZlbnQgXG4gICAgICogIEBtZW1iZXJvZiBpT1NEZXRlY3RvclxuICAgICAqL1xuICAgIGJpbmRQYWdlaGlkZUV2ZW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncGFnZWhpZGUnLCBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLmlzUGFnZVZpc2liaWxpdHkoKSkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChzZWxmLnRpZCk7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BhZ2VoaWRlJywgY2xlYXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59LCBEZXRlY3Rvcik7XG5cbi8qKlxuICogaW9zIG9sZCBkZXRlY3RvclxuICogQG5hbWVzcGFjZSBpT1NEZXRlY3Rvci5pb3NPbGRlckRldGVjdG9yXG4gKi9cbmlPU0RldGVjdG9yLmlvc09sZGVyRGV0ZWN0b3IgPSBuZS51dGlsLmV4dGVuZCh7XG4gICAgLyoqXG4gICAgICogZGV0ZWN0b3IgUnVuXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHRcbiAgICAgKiBAbWVtYmVyb2YgaU9TRGV0ZWN0b3IuaW9zT2xkZXJEZXRlY3RvclxuICAgICAqL1xuICAgIHJ1bjogZnVuY3Rpb24oY29udGV4dCkge1xuICAgICAgICB2YXIgc3RvcmVVUkwgPSBjb250ZXh0LnN0b3JlVVJMLFxuICAgICAgICAgICAgY2FsbGJhY2sgPSBjb250ZXh0Lm5vdEZvdW5kQ2FsbGJhY2sgfHwgdGhpcy5tb3ZlVG87XG4gICAgICAgIHRoaXMudGlkID0gdGhpcy5kZWZlckNhbGxiYWNrKHN0b3JlVVJMLCBjYWxsYmFjaywgdGhpcy5USU1FT1VULklPU19MT05HKTtcbiAgICAgICAgdGhpcy5iaW5kUGFnZWhpZGVFdmVudCgpO1xuICAgICAgICB0aGlzLm1vdmVUbyhjb250ZXh0LnVybFNjaGVtZSk7XG4gICAgICAgIC8vdGhpcy5ydW5BcHBXaXRoSWZyYW1lKGNvbnRleHQudXJsU2NoZW1lKTtcbiAgICB9XG59LCBpT1NEZXRlY3Rvcik7XG5cbi8qKlxuICogaW9zIHJlY2VudCBkZXRlY3RvclxuICogQG5hbWVzcGFjZSBpT1NEZXRlY3Rvci5pb3NSZWNlbnREZXRlY3RvclxuICovXG5pT1NEZXRlY3Rvci5pb3NSZWNlbnREZXRlY3RvciA9IG5lLnV0aWwuZXh0ZW5kKHtcbiAgICAvKipcbiAgICAgKiBkZXRlY3RvciBydW5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dFxuICAgICAqIEBtZW1iZXJvZiBpT1NEZXRlY3Rvci5pb3NSZWNlbnREZXRlY3RvclxuICAgICAqL1xuICAgIHJ1bjogZnVuY3Rpb24oY29udGV4dCkge1xuICAgICAgICB2YXIgc3RvcmVVUkwgPSBjb250ZXh0LnN0b3JlVVJMLFxuICAgICAgICAgICAgY2FsbGJhY2sgPSBjb250ZXh0Lm5vdEZvdW5kQ2FsbGJhY2sgfHwgdGhpcy5tb3ZlVG87XG4gICAgICAgIGlmICh0aGlzLm1vdmVUbyA9PT0gY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMudGlkID0gdGhpcy5kZWZlckNhbGxiYWNrKHN0b3JlVVJMLCBjYWxsYmFjaywgdGhpcy5USU1FT1VULklPU19TSE9SVCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRpZCA9IHRoaXMuZGVmZXJDYWxsYmFjayhzdG9yZVVSTCwgY2FsbGJhY2ssIHRoaXMuVElNRU9VVC5JT1NfTE9ORyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iaW5kVmlzaWJpbGl0eUNoYW5nZUV2ZW50KCk7XG4gICAgICAgIHRoaXMubW92ZVRvKGNvbnRleHQudXJsU2NoZW1lKTtcbiAgICAgICAgLy90aGlzLnJ1bkFwcFdpdGhJZnJhbWUoY29udGV4dC51cmxTY2hlbWUpO1xuICAgIH1cbn0sIGlPU0RldGVjdG9yKTtcblxubW9kdWxlLmV4cG9ydHMgPSBpT1NEZXRlY3RvcjtcbiJdfQ==
