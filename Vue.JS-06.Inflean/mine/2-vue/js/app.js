import SearchModel from './models/SearchModel.js'
import KeyWordModel from './models/KeyWordModel.js'
import HistoryModel from './models/HistoryModel.js'

new Vue({
    el: '#app',
    data: {
        //  입력 data를 받아서 저장
        query: '',
        searchResult: [],
        keywords: [],
        history: [],
        submitted: false,
        tabs: ['추천 검색어', '최근 검색어'],
        selectedTab: '',
    },
    created() {
        this.selectedTab = this.tabs[0],
        this.fetchKeyword()
        this.fetchHistory()
    },
    methods: {
        onSubmit: function(e) {
            this.search()
        },
        onKeyup: function(e) {
            if(!this.query.length) this.resetForm()
        },
        onReset: function(e) {
            this.resetForm()
        },
        search: function () {
            SearchModel.list().then(data => {
                this.submitted = true
                this.searchResult = data
            })
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
        }
        
    },
})