## Install

``` sh
$ npm install --save tui-app-loader # Latest version
$ npm install --save tui-app-loader@<version> # Specific version
```

It can also be installed by using bower or downloaded by CDN. Please refer to the [💾 Install](https://github.com/nhn/tui.app-loader#-install).

## Usage

```javascript
import AppLoader from 'tui-app-loader';

const appLoader = new AppLoader();
appLoader.exec({ ... });
```

It can also be used by namespace or CommonJS module. Please refer to the [🔨 Usage](https://github.com/nhn/tui.app-loader#-usage).

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
const appLoader = new AppLoader();
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

For more information about the API, please see [here](https://nhn.github.io/tui.app-loader/latest/AppLoader).
