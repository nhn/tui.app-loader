#### intentURI의 스펙은 공식적으로 iframe을 지원하지 않는다고 명시되어있음.

1. 현재 Chromium 42버전(추정)이상부터 iframe을 통해 app 호출이 가능함. (Chromium-47까지 확인)

2. 언제 iframe을 사용하는 방식이 막힐지는 알 수 없음.
<br>따라서 컴포넌트가 지원하는 iframe방식은 비공식적인 방식
<br>`useIframe: true`옵션을 통해 적용 가능

3. iframe관련 이슈가 있음.
<br>iframe이 document에 추가된 이후 src속성을 변경하는 경우에는 app 수행이 차단됨
<br>iframe방식에서 src를 먼저 셋팅하고 그 이후 body에 append시키면 app수행이 됨. ___(다시 한번 강조 - 모든 버전이 되는것은 아님)___
<br>![iframe](https://cloud.githubusercontent.com/assets/12269563/12475773/7866eb2a-c068-11e5-945f-4c079be67817.jpeg)

4. iframe을 통해 호출하는 경우 `S.browser_fallback_url` 옵션 파라메타는 적용되지 않음
<br> 대안으로 컴포넌트에서 `notFoundCallback` 함수를 입력받음. (ios에서 notFound인 경우에도 발생함)
<br> 25~42 버전까지는 iframe방식에서 app의 설치유무를 판단할 수 없기때문에 notFoundCallback을 호출할 수 없음
<br> 대신 `onErrorIframe` 함수를 입력받아 수행함.
