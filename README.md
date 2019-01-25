# Vue.Js Study
* Vue.JS를 스터디하는 레파지토리 입니다.
* 기간 : 19년 1월 22

<br>

# 1. binding
* 단방향 data binding
* 양방향 data binding

<br>

# 2. directive : 라이브러리에서 DOM엘리먼트가 무언가를 수행하도록 지시하는 특수한 토큰
## (1) v-if / v-show(조건에 따라 엘리먼트를 화면에 표시)
## (1-1) v-else (v-if의 평가 결과가 거짓이면 엘리먼트를 표시)
## (2) v-for 
```vue
<li v-for="(value, key, index) in story" class="list-group-item">
  {{index}} : {{key}} : {{value}}
</li>
 ```
## (3) v-on
* :click or @
* :keyup.enter
* :keypress
* :keydown
## (4) v-bind or :
* 동적으로 바꾸기

<br>


