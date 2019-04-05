# 실습 UI 개발로 배워보는 순수 Javascript와 VueJS 개발
* https://www.inflearn.com/course/%EC%88%9C%EC%88%98js-vuejs-%EA%B0%9C%EB%B0%9C-%EA%B0%95%EC%A2%8C/

## 이 프로젝트의 tech stack
```vue
lights-server, JavaScript, VueJS, MVC -> MVVM pattern
```

## 1. 요구사항 분석
<p align="center">
<img src="./images/first.png" width="600" >	
</p>

### 1) export default란?
* 하나의 .vue 파일이 하나의 독립적인 컴포넌트를 정의 한다
* https://kr.vuejs.org/v2/guide/single-file-components.html

### 2) [Model](./mine/1-vanilla/js/models)
* HistroryModel.js
* KeywordModel.js
* SearchModel.js
### 3) [View](./mine/1-vanilla/js/views)
* FormView.js
* ResultView.js
* View.js
### 4) [Controller](./mine/1-vanilla/js/controllers)
* MainControllers.js

## 2. 단일 컴포넌트(.vue)
* 가독성과 유지보수의 편리함
### 1) 설치방법
#### (1) cmd
**npm install -g vue-cli**

**vue**
* init
* list
* build
* help

**vue list**

**vue init webpack-simple**

**npm install**
* 개발서버를 띄우려면 설치해야함

**npm run dev**
* 브라우저에 창 뜬 것 확인

### 2) 싱글 파일 컴포넌트
#### (1) 기본 설정
* main.js : 어플리케이션 진입점

```javascript
import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

```

* App.vue : 메인 어플리케이션 (template/script/style)
* index.html : style link 연결, viewport 설정

```html
<head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  :
```
#### (2) single file component
* [App.vue](./mine/4-single-file-component/src/App.vue)
```vue
<template>
  <div>
    <header>
      <h2 class="container">검색</h2>
    </header>
    <div class="container">
      <search-form v-bind:value="query" v-on:@submit="onSubmit"
        v-on:@reset="onReset"></search-form>

      <div class="content">
        <div v-if="submitted">
          <search-result v-bind:data="searchResult" v-bind:query="query"></search-result>
        </div>
        <div v-else>
          <tabs v-bind:tabs="tabs" v-bind:selected-tab="selectedTab" v-on:@change="onClickTab"></tabs>
          <div v-if="selectedTab === tabs[0]">
            <list v-bind:data="keywords" type="keywords" v-on:@click="onClickKeyword"></list>
          </div>
          <div v-else>
            <list v-bind:data="history" type="history" v-on:@click="onClickKeyword"
              v-on:@remove="onClickRemoveHistory"></list>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HistoryModel from './models/HistoryModel.js'
import SearchModel from './models/SearchModel.js'
import KeywordModel from './models/KeywordModel.js'

import FormComponent from './components/FormComponent.vue'
import ResultComponent from './components/ResultComponent.vue'
import ListComponent from './components/ListComponent.vue'
import TabComponent from './components/TabComponent.vue'
export default {
  name: 'app',
  data () {
    return {
      query: '',
      submitted: false,
      tabs: ['추천 검색어', '최근 검색어'],
      selectedTab: '',
      keywords: [],
      history: [],
      searchResult: []
    }
  },
  components: {
    'search-form': FormComponent,
    'search-result': ResultComponent,
    'list': ListComponent,
    'tabs': TabComponent
  },
  created() {
    this.selectedTab = this.tabs[0]
    this.fetchKeyword()
    this.fetchHistory()
  },
  methods: {
    onSubmit(query) {
      this.query = query
      this.search()
    },
    onReset(e) {
      this.resetForm()
    },
    onClickTab(tab) {
      this.selectedTab = tab
    },
    onClickKeyword(keyword) {
      this.query = keyword;
      this.search()
    },
    onClickRemoveHistory(keyword) {
      HistoryModel.remove(keyword)
      this.fetchHistory()
    },
    fetchKeyword() {
      KeywordModel.list().then(data => {
        this.keywords = data
      })
    },
    fetchHistory() {
      HistoryModel.list().then(data => {
        this.history = data
      })
    },
    search() {
      SearchModel.list().then(data => {
        this.submitted = true
        this.searchResult = data
      })
      HistoryModel.add(this.query)
      this.fetchHistory()
    },
    resetForm() {
      this.query = ''
      this.submitted = false
      this.searchResult = []
    }
  }
}
</script>
```

* [FormComponent.vue](./mine/4-single-file-component/src/components/FormComponent.vue)
```vue
<template>
  <form v-on:submit.prevent="onSubmit">
    <input type="text" v-model="inputValue" v-on:keyup="onKeyup" placeholder="검색어를 입력하세요" autofocus>
    <button v-show="inputValue.length" v-on:click="onReset" type="reset" class="btn-reset"></button>
  </form>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      inputValue: this.value
    }
  },
  methods: {
    onSubmit: function () {
      //  child -> parent
      this.$emit('@submit', this.inputValue.trim())
    },
    onKeyup: function () {
      if(!this.inputValue.length) this.onReset()
    },
    onReset: function () {
      this.inputValue = ''
      this.$emit('@reset')
    }
  },
}
</script>
```

* [ListComponent.vue](./mine/4-single-file-component/src/components/ListComponent.vue)
* [ResultComponent.vue](./mine/4-single-file-component/src/components/ResultComponent.vue)
* [TabComponent.vue](./mine/4-single-file-component/src/components/TabComponent.vue)


