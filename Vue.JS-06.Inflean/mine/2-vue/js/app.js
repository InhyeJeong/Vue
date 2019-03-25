new Vue({
    el: '#app',
    data: {
        //  입력 data를 받아서 저장
        query: ''
    },
    methods: {
        onSubmit: function(e) {
            
        },
        onKeyup: function() {
            if(!this.query.length) this.onReset()
        },
        onReset: function() {
            //  여기에서 this는 Vue instance
            this.query = '';
            //  todo 검색결과를 숨기는 ...
            debugger
        },
        
    },
})