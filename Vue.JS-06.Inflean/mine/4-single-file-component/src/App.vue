<template>
  <div>
    <header>
      <h2 class="container">검색</h2>
    </header>
    <div class="container">
      <search-form v-bind:value="query" v-on:@submit="onSubmit" v-on:@reset="onReset"></search-form>
    </div>
  </div>
</template>

<script>
import SearchModel from './models/SearchModel.js'
import KeyWordModel from './models/KeyWordModel.js'
import HistoryModel from './models/HistoryModel.js'

import FormComponent from './components/FormComponent.vue'

export default {
  name: 'app',
  data () {
    return {
      query: '',
      searchResult: [],
      keywords: [],
      history: [],
      submitted: false,
      tabs: ['추천 검색어', '최근 검색어'],
      selectedTab: '',
    }
  },
  components: {
    'search-form' : FormComponent
  },
  methods: {
    onSubmit: function(query) {
            this.query = query
            this.search()
    },
    onReset: function(e) {
        this.resetForm()
    },
    //  검색될때마다 호출됨
    search: function () {
        SearchModel.list().then(data => {
            this.submitted = true
            this.searchResult = data
        })
        HistoryModel.add(this.query)
        this.fetchHistory()
    },
    resetForm: function() {
        //  여기에서 this는 Vue instance
        this.query = ''
        //  todo 검색결과를 숨기는 ...
        this.submitted = false
        this.searchResult = []
    },
    onClickTab: function(tab) {
        this.selectedTab = tab
    },
    onClickKeyword: function (keyword) {
        this.query = keyword
        this.search()
    },
    fetchKeyword: function () {
        KeyWordModel.list().then(data => {
            this.keywords = data
        })
    },
    fetchHistory: function () {
        HistoryModel.list().then(data => {
            this.history = data
        })
    },
    onclickRemoveHistory: function (keyword) {
        HistoryModel.remove(keyword)
        this.fetchHistory()
    }
  },
}
</script>

<style>
</style>
