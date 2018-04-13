# TOAST UI Component : App Loader
> Component that installs a specific app by determining whether an app is installed on mobile devices.

[![GitHub release](https://img.shields.io/github/release/nhnent/tui.app-loader.svg)](https://github.com/nhnent/tui.app-loader/releases/latest)
[![npm](https://img.shields.io/npm/v/tui-app-loader.svg)](https://www.npmjs.com/package/tui-app-loader)
[![GitHub license](https://img.shields.io/github/license/nhnent/tui.app-loader.svg)](https://github.com/nhnent/tui.app-loader/blob/production/LICENSE)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-ff69b4.svg)](https://github.com/nhnent/tui.project-name/labels/help%20wanted)
[![code with hearth by NHN Entertainment](https://img.shields.io/badge/%3C%2F%3E%20with%20%E2%99%A5%20by-NHN%20Entertainment-ff1414.svg)](https://github.com/nhnent)


## 🚩 Table of Contents
* [Features](#-features)
* [Examples](#-examples)
* [Install](#-install)
    * [Via Package Manager](#via-package-manager)
    * [Via Contents Delivery Network (CDN)](#via-contents-delivery-network-cdn)
    * [Download Source Files](#download-source-files)
* [Usage](#-usage)
    * [HTML](#html)
    * [JavaScript](#javascript)
* [Pull Request Steps](#-pull-request-steps)
    * [Setup](#setup)
    * [Develop](#develop)
    * [Pull Request Steps](#pull-request)
* [Documents](#-documents)
* [Contributing](#-contributing)
* [Dependency](#-dependency)
* [License](#-license)


## 🎨 Features
* Supports various options of url schemes for app calls.
* Supports `Universal link` that does not need to set fallback url for iOS9+.
* Supports  `intentURI` for Chromium 25+.
* Sets the time to delay app calls.


## 🐾 Examples
* [Basic](https://nhnent.github.io/tui.app-loader/latest/tutorial-example01-basic.html) : Example using default options.

More examples can be found on the left sidebar of each example page, and have fun with it.


## 💾 Install

TOAST UI products can be used by using the package manager or downloading the source directly.
However, we highly recommend using the package manager.

### Via Package Manager

TOAST UI products are registered in two package managers, [npm](https://www.npmjs.com/) and [bower](https://bower.io/).
You can conveniently install it using the commands provided by each package manager.
When using npm, be sure to use it in the environment [Node.js](https://nodejs.org/ko/) is installed.

#### npm

``` sh
$ npm install --save tui-app-loader # Latest version
$ npm install --save tui-app-loader@<version> # Specific version
```

#### bower

``` sh
$ bower install tui-app-loader # Latest version
$ bower install tui-app-loader#<tag> # Specific version
```

### Via Contents Delivery Network (CDN)
TOAST UI products are available over the CDN powered by [TOAST Cloud](https://www.toast.com).

You can use the CDN as below.

```html
<script src="https://uicdn.toast.com/tui-app-loader/latest/tui-app-loader.js"></script>
```

If you want to use a specific version, use the tag name instead of `latest` in the url's path.

The CDN directory has the following structure.

```
tui-app-loader/
├─ latest/
│  ├─ tui-app-loader.js
│  └─ tui-app-loader.min.js
├─ v2.1.0/
│  ├─ ...
```

### Download Source Files
* [Download bundle files](https://github.com/nhnent/tui.app-loader/tree/production/dist)
* [Download all sources for each version](https://github.com/nhnent/tui.app-loader/releases)


## 🔨 Usage

### HTML

This component does not require the container element.

### JavaScript

This component can be used by creating an instance with the constructor function.
To get the constructor function, you should import the module using one of the following ways depending on your environment.

#### Using namespace in browser environment
``` javascript
var AppLoader = tui.AppLoader;
```

#### Using module format in node environment
``` javascript
var AppLoader = require('tui-app-loader'); /* CommonJS */
```

``` javascript
import {AppLoader} from 'tui-app-loader'; /* ES6 */
```


You should call `exec` method with [options](http://nhnent.github.io/tui.app-loader/latest/AppLoader.html#exec) after creating an instance.

``` javascript
var instance = new AppLoader();

instance.exec({ ... });
```


## 🔧 Pull Request Steps

TOAST UI products are open source, so you can create a pull request(PR) after you fix issues.
Run npm scripts and develop yourself with the following process.

### Setup

Fork `develop` branch into your personal repository.
Clone it to local computer. Install node modules.
Before starting development, you should check to haveany errors.

``` sh
$ git clone https://github.com/{your-personal-repo}/tui.app-loader.git
$ cd tui.app-loader
$ npm install
$ npm run test
```

### Develop

Let's start development!
You can see your code is reflected as soon as you saving the codes by running a server.
Don't miss adding test cases and then make green rights.

#### Run webpack-dev-server

``` sh
$ npm run serve
$ npm run serve:ie8 # Run on Internet Explorer 8
```

#### Run karma test

``` sh
$ npm run test
```

### Pull Request

Before PR, check to test lastly and then check any errors.
If it has no error, commit and then push it!

For more information on PR's step, please see links of Contributing section.


## 📙 Documents
* [Getting Started](https://github.com/nhnent/tui.app-loader/blob/production/docs/getting-started.md)
* [Tutorials](https://github.com/nhnent/tui.app-loader/tree/production/docs)
* [APIs](https://nhnent.github.io/tui.app-loader/latest)

You can also see the older versions of API page on the [releases page](https://github.com/nhnent/tui.app-loader/releases).


## 💬 Contributing
* [Code of Conduct](https://github.com/nhnent/tui.app-loader/blob/production/CODE_OF_CONDUCT.md)
* [Contributing guideline](https://github.com/nhnent/tui.app-loader/blob/production/CONTRIBUTING.md)
* [Issue guideline](https://github.com/nhnent/tui.app-loader/blob/production/docs/ISSUE_TEMPLATE.md)
* [Commit convention](https://github.com/nhnent/tui.app-loader/blob/production/docs/COMMIT_MESSAGE_CONVENTION.md)


## 🔩 Dependency
* [tui-code-snippet](https://github.com/nhnent/tui.code-snippet) >=1.3.0
* [ua-parser-js](https://github.com/faisalman/ua-parser-js) >=0.7.4


## 📜 License

This software is licensed under the [MIT](https://github.com/nhnent/tui.app-loader/blob/production/LICENSE) © [NHN Entertainment](https://github.com/nhnent).
