# AppLoader
Launches an app on mobile web page.

## Feature
* Landing an app depending on installation
	* Launch an app when installed
	* Open store or Move to fallback url, when not installed

## Documentation
* **API** : [https://nhnent.github.io/tui.app-loader/latest](https://nhnent.github.io/tui.app-loader/latest)
* **Tutorial** : [https://github.com/nhnent/tui.app-loader/wiki](https://github.com/nhnent/tui.app-loader/wiki)
* **Example** - [https://nhnent.github.io/tui.app-loader/latest/tutorial-examples01-basic.html](https://nhnent.github.io/tui.app-loader/latest/tutorial-examples01-basic.html)

## Dependency
* [tui-code-snippet](https://github.com/nhnent/tui.code-snippet) >=1.2.5
* [ua-parser-js](https://github.com/faisalman/ua-parser-js) >=0.7.4

## Test environment
* Mobile
	* Chrome for android(Chromium 60)
	* Samsung browser(Chromium 37, 51)
	* Safari(iOS10)
	* Chrome Emulator

## Usage
### Use `npm`

Install the latest version using `npm` command:

```
$ npm install tui-app-loader --save
```

or want to install the each version:

```
$ npm install tui-app-loader@<version> --save
```

To access as module format in your code:

```javascript
var AppLoader = require('tui-app-loader');
var instance = new AppLoader(...);
```

### Use `bower`
Install the latest version using `bower` command:

```
$ bower install tui-app-loader
```

or want to install the each version:

```
$ bower install tui-app-loader#<tag>
```

To access as namespace format in your code:

```javascript
var instance = new tui.AppLoader(...);
```

### Download
* [Download bundle files from `dist` folder](https://github.com/nhnent/tui.app-loader/tree/production/dist)
* [Download all sources for each version](https://github.com/nhnent/tui.app-loader/releases)

## License
[MIT LICENSE](https://github.com/nhnent/tui.app-loader/blob/master/LICENSE)
