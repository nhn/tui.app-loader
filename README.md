Mobile App Loader
===============
모바일 앱 로더 컴포넌트<br>
안드로이드와 iOS환경의 모바일 웹 페이지에서 앱을 호출하는 컴포넌트로,<br>
앱의 설치 여부를 확인하여 
- 앱이 설치되었을 경우 해당 앱을 실행
- 앱이 설치되지 않았을 경우 앱 다운로드 페이지로 이동

시키는 기능을 제공한다.

## Feature
* 안드로이드와 iOS 환경의 웹페이지에서 앱 설치 여부를 판단
* 설치 여부에 따라 앱호출 또는 다운로드 페이지로 이동
* 안드로이드나 iOS환경이 아닐경우 또는 특정안드로이드 버전 이하의 경우, 미지원 환경에 대한 콜백을 제공

## Documentation
* **API** : https://github.nhnent.com/pages/fe/component-m-app-loader/1.0.0
* **Tutorial** : 준비중
* **Sample** - https://github.nhnent.com/pages/fe/component-m-app-loader/1.0.0/tutorial-tutorial.html
* **CI** : 준비중



## Dependency
* jquery: ~1.8.3
* code-snippet: ~1.0.2

## Test environment
* Mobile
	* Galaxy Note I(Android 2.3), II(Android 4.1)
	* Galaxy S III(Android 4.0), IV(Android 4.2.2)
	* iPhone 5S(iOS 8)
	* Chrome Emulator


## Download/Install
* Bower:
   * 최신버전 : `bower install "git+http://70327b4564c7a80eb61724056876b960290946dd:x-oauth-basic@github.nhnent.com/fe/component-m-app-loader.git#master"`
   * 특정버전 : `bower install "git+http://70327b4564c7a80eb61724056876b960290946dd:x-oauth-basic@github.nhnent.com/fe/component-m-app-loader.git[#tag]"`
* Download: https://github.nhnent.com/fe/component-m-app-loader

## History
| Version | Description | Date | Developer |
| ---- | ---- | ---- | ---- |
| 1.0.0a | defineNamespace적용 | 2015.05 | FE개발팀 이제인 <jein.yi@nhnent.com> |
| <a href="https://github.nhnent.com/pages/fe/component-m-app-loader/1.0.0">1.0.0</a> | 배포 | 2015.04 | FE개발팀 이제인 <jein.yi@nhnent.com> |
