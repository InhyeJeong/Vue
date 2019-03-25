import SearchModel from './models/SearchModel.js'

new Vue({
    el: '#app',
    data: {
        //  입력 data를 받아서 저장
        query: '',
        searchResult: [],
        submitted: false
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
        
    },
})