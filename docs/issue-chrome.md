(2016. 1. 20 업데이트)
# 안드로이드 크롬 지원 기능 정리

| 브라우저                   | Iframe + scheme/intentURI | IntentURI | 마켓 이동 | Callback 지원 | Fallback URL 지원 |
|---------------------------|------------------------|------------|---------|--------------|------------------|
| Chrome for Android 25~42  | X                      | O          | O       | X*           | X*               |
| Chrome for Android 42~    | O*                      | O          | O       | O            | O                |
| 웹뷰 기본 (커스터마이징X)     | X                      | X          | X       | X            | X                |
| 웹뷰 커스터마이징            | ?                       | ?         | ?        | ?           | ?                |

_( X* : 기본적으로 컴포넌트에서 지원할 수 없으나, 특정 조건에 대한 우회방안은 있음)_

_( ? : 웹뷰 커스터마이징에 따라 지원될 수 있음 — 해당 어플리케이션 내부 웹뷰의 URI 핸들링방식에 따라 지원 가능)_

___( O* : <br> iframe을 body에 붙이기 전 src속성을 intentURI로 지정하면 동작함 <br> body에 붙인 이후 src속성을 변경하면 동작하지 않음 )___


**참고: Kitkat(android 4.4) 부터는 기본 WebView가 Chromium 30 기반으로 도는 것 같아요. userAgnet 값에도 `Chrome/30.0.0.0`이 찍히구요. android 버전 4.4 이상이 50%가 넘어가는 상황이라 facebook, Naver, Daum 브라우져등에서 쓰는 기본웹뷰들은 Chromium으로 봐도 되지 않을까 싶네요. Rollipop부터는 Chromium 37+ 인 것 같구요..**
# 이슈

* 안드로이드의 기본 웹뷰에서는 앱로더의 기능은 전부 지원되지 않는다.
  * [안드로이드 웹뷰에서 앱 로더가 수행되지 않는 이슈](https://github.com/nhnent/tui.component.m-app-loader/wiki/%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C-%EC%9B%B9%EB%B7%B0%EC%97%90%EC%84%9C-%EC%95%B1%EB%A1%9C%EB%8D%94%EA%B0%80-%EC%88%98%ED%96%89%EB%90%98%EC%A7%80-%EC%95%8A%EB%8A%94-%EC%9D%B4%EC%8A%88)

* Chrome for Android 25~42에서 callback과 fallback url지원은 *팝업을 통한 우회가 가능*하다.
  * [안드로이드에서 app 실행 또는 fallback url 기능 지원](https://github.com/nhnent/tui.component.m-app-loader/wiki/%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C-APP-%EC%8B%A4%ED%96%89-%EB%98%90%EB%8A%94-%ED%8A%B9%EC%A0%95-url%EB%A1%9C-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%9D%B4%EB%8F%99)

* IntentURI의 iframe지원?
  * [Chromium의 intentURI와 iframe](https://github.com/nhnent/tui.component.m-app-loader/wiki/Chromium%EC%9D%98-intentURI%EC%99%80-iframe)

# 관련 참고 링크

**Intent URI**
* 가이드 페이지 - https://developer.chrome.com/multidevice/android/intents

**크롬 25 ~ 42 버전 관련 이슈**
* intentURI가 올바르지 않을 때 발생하는 페이지 깨짐(ERR_UNKNOWN_URL_SCHEME)
* 크롬 이슈
  * https://code.google.com/p/chromium/issues/detail?id=331571
  * https://code.google.com/p/chromium/issues/detail?id=477456
* 이슈 해설 - https://paul.kinlan.me/deep-app-linking-on-android-and-chrome/
