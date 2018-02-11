HTML
```html
<button id='loaderBtn'>load</button>
```

Javascript
```js
var iosScheme = 'payco://open';
var intentURI = 'intent://open#Intent;scheme=payco;package=com.nhnent.payapp;end;';
var AppLoader = tui.component.m.AppLoader;
var loader = new AppLoader();
var btn = document.getElementById('loaderBtn');

btn.addEventListener('click', function() {
    loader.exec({
        ios: {
            scheme: iosScheme,
            url: "https://itunes.apple.com/kr/app/id924292102",
            useIOS9: true,
            syncToIOS9 : false
        },
        android: {
            intentURI: intentURI
        },
        etcCallback: function() {
            if (AppLoader.getOS() !== 'iOS' && AppLoader.getOS() !== 'Android') {
                alert('Run in mobile');
            }
        },
        notFoundCallback: function() {
            console.log('Not Found Application');
        }
    });
});
```

### 첫번째 시나리오 이슈 (앱 설치, Timer 2초)
1. Load버튼을 누름
2. 앱 실행 확인창
3. "열기"
4. 앱이 열리는 순간 "safari로 돌아가기" 누름 (AppLoader에 설정한 timer 시간 이내 이내 (기본값: 2초))
5. ***앱이 설치되어있음에도 불구하고 app store로 이동되어버림***

### 두번째 시나리오 이슈 (앱 미설치, Timer 2초)
1. Load버튼을 누름
2. `페이지를 열 수 없음` 얼럿창
3. "승인" 누름
4. `'App Store'에서 이 페이지를 열겠습니까?` <-- 얼럿창이 나타남
5. "취소" 누름
6. 다음에 다시 버튼을 눌러도 앱 스토어 이동이 되지 않음.

### 세번째 시나리오 이슈 (앱 미설치, Timer 1초)
* 첫번째 이슈로 인해 `AppLoader의 timer시간을 1초로 줄이게 됨`

    ```js
    timerSet: {
        ios: 1000
    },
    ```

1. Load버튼을 누름
2. `페이지를 열 수 없음` 얼럿창
3. "승인" 누름
4. `'App Store'에서 이 페이지를 열겠습니까?` <-- ***얼럿창이 나타나지 않음***
  * 로드 버튼을 눌렀을때의 사용자 액션을 기억하고있는 것으로 추측됨
  * Timer가 2초인 경우 `'App Store'에서 이 페이지를 열겠습니까?`얼럿창이 나타남
5. 앱스토어로 이동됨.

### 네번째 시나리오 이슈 (앱 미설치, Timer 1초)
1. `1`~`3`까지는 두번째 시나리오와 동일
2. "승인"을 누르지 않고 기다림
3. 앱스토어로 이동됨

참고: Timer가 2초인 경우에는 앱스토어 이동 확인 얼럿창이 뜨기때문에 바로 이동되지 않음

### 결론
Timer를 1초로 해도 이슈가 있고, 2초로 해도 이슈가 있음.

### 우회방안
1. Timer설정은 따로 하지 않아도 됨.
2. `notFoundCallback`은 아무 동작도 하지 않도록 지정

    ```js
        notFoundCallback: function() {}
    ```
3. 앱 스토어 이동 버튼을 따로 추가

    ```html
    <!--example-->
        <a href="https://itunes.apple.com/kr/app/id924292102"><button>Go to app store!</button></a>
    ```
