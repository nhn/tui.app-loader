# 요약
**웹뷰에서 앱로더가 동작하지 않는 이슈는 프론트엔드에서 해결할 수 없고, 어플리케이션에서 직접 핸들링해 주어야 함.**

# 원인
1. 안드로이드 버전 4.4부터 웹뷰가 Chromium 기반으로 변경.
(https://developer.android.com/intl/ko/guide/webapps/migrating.html)

2. 그래서 User-Agent에 "Chrome" 이 포함되기 때문에, 프론트에서는 크롬 브라우저라고 판단.

3. 현재 Chromium기반 웹뷰는 Chrome for Android의 스펙인 IntentURI를 지원하지 않음.
(IntentURI - https://developer.chrome.com/multidevice/android/intents)

4. 따라서 기존의 앱로더처럼 동작을 수행하기 위해서는 어플리케이션 내부 코드를 변경.

5. 어플리케이션 내부 코드에서, 웹뷰로 들어가는 URI를 파싱하여 intentURI인 경우 따로 처리하는 로직이 필요.

6. 이러한 웹뷰의 경우 커스터마이징 요소들이 많기때문에 프론트엔드에서 지원할 수 있는 범위가 아니라고 판단됨.


# 해결

이번 이슈는 안드로이드 어플리케이션 프로토타이핑을 통해 아래와 같은 웹뷰클라이언트 구현으로 URI를 핸들링하였으며,

테스트를 통해 웹뷰 내부 앱로더의 정상 동작을 확인하였음.

```java
public class MyWebViewClient extends WebViewClient {
    public static final String INTENT_URI_START = "intent:";
    public static final String INTENT_FALLBACK_URL = "browser_fallback_url";
    public static final String URI_SCHEME_MARKET = "market://details?id=";

    @Override
    public boolean shouldOverrideUrlLoading(WebView view, String uri) {
        if (uri.toLowerCase().startsWith(INTENT_URI_START)) {
            Intent parsedIntent = null;
            try {
                parsedIntent = Intent.parseUri(uri, 0);
                startActivity(parsedIntent);
            } catch(ActivityNotFoundException | URISyntaxException e) {
                return doFallback(view, parsedIntent);
            }
        } else {
            view.loadUrl(uri);
        }
        return true;
    }

    public boolean doFallback(WebView view, Intent parsedIntent) {
        if (parsedIntent == null) {
            return false;
        }

        String fallbackUrl = parsedIntent.getStringExtra(INTENT_FALLBACK_URL);
        if (fallbackUrl != null) {
            view.loadUrl(fallbackUrl);
            return true;
        }

        String packageName = parsedIntent.getPackage();
        if (packageName != null) {
            startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse(URI_SCHEME_MARKET + packageName)));
            return true;
        }
        return false;
    }
}
```
