## Installation

### node

```javascript
var AppLoader = require('tui-app-loader');
var appLoader = new AppLoader();
appLoader.exec({ ... });
```

### browser
```html
<script src="https://uicdn.toast.com/tui.code-snippet/v1.3.0/tui-code-snippet.min.js"></script>
<script src="//cdn.rawgit.com/faisalman/ua-parser-js/v0.7.1/src/ua-parser.min.js"></script>
<script type="text/javascript" src="app-loader.js"></script>
<script>
var appLoader = new tui.AppLoader();
appLoader.exec({ ... });
</script>
...
```

## Set options for landing scheme
AppLoader runs on a iOS or Android device.  
Open an app when an app is installed, otherwise open an website.  
As an Android and iOS have a different deep-linking policy, you should set both scheme.

### iOS
* [`Universal link`](https://developer.apple.com/library/content/documentation/General/Conceptual/AppSearch/UniversalLinks.html) for `iOS9+`(**Recommended**): don't need to set an fallback url by `ios.url`. because universal link handles a fallback url. Unlike custom URL scheme, universal link is unique for app.
* `Custom URL scheme` for `<=iOS8`:  need to set an fallback url by `ios.url`.

### Android
* [`intentURI`](https://developer.chrome.com/multidevice/android/intents) for `Chromium 25+`(**Recommended**): don't need to set an fallback url, you could set fallback url by adding `S.browser_fallback_url=[encoded_full_url]` in intentURI.
* `urlScheme`: need to set an fallback url. AppLoader will land this scheme on an Android device, when `android.intentURI` exists, but `ios.scheme` option doesn't.

| option  | Environment | description |
| -- | -- | -- |
| ios.universalLink | iOS9+ | recommended |
| ios.scheme* | <=iOS8 | |
| ios.url | <=iOS8 | iOS fallback url of `ios.scheme`|
| android.intentURI | Android/Chromium25+ | recommended |
| notFoundCallback | all | Android fallbackURL, works when use `ios.scheme` <br> default: move to iOS store |
| etcCallback | !iOS && !Android | |
| timerSet | all | delay time(ms) on app loading <br> default: iOS(2000), Android(800) |

\* - can be used as  a replacement of **android.intentURI**. Android use it as a custom URI scheme.

## Example code

```javascript
var appLoader = new tui.AppLoader();
appLoader.exec({
     ios: {
         scheme: '<app-scheme>://',
         url: '<fallback-url>', // app store url
     },
     android: {
         intentURI: 'intent://<action>#Intent;scheme=<uri-scheme>;package=<package-name>;S.browser_fallback_url=<encoded-fallback-url>;end'
     },
     notFoundCallback: function(storeUrl) {
         alert('could not find app');
     },
     etcCallback: function() {
         alert('support iOS and Android only');
     }
});
```
