# TypingChanger

> TypingChanger는 언어 변환키를 안 누르고 쓴 글자를 원글자로 바꾸어주는 자바스크립트 라이브러리입니다.

## 설치 및 사용방법

### node.js

```bash
npm install typingchanger
```

```js
const typingchanger = require("typingchanger");
```

## 사용법

### 영어 (오류 언어) > 한국어 (원언어)

한국어를 영어키로 입력하였을 경우를 한국어로 변경합니다.

```js
typingchanger.enTokr("dkssudgktpdy"); // 안녕하세요
```

### 한국어 (오류 언어) > 영어 (원언어) : 지원예정

영어를 한국어키로 입력하였을 경우를 영어로 변경합니다.

```js
typingchanger.krToen("ㅗ디ㅣㅐㅈ"); // hellow
```
