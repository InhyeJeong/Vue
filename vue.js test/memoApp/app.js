var app = new Vue({
    el: '#app',
    data: {
        mode : 'list',
        memo: {
            id:null,
            content: null,
            regDate: null
        },
        memos: []
    },
    methods: {
        write: function(){
            this.mode = 'write';
        },
        save: function(){
            var id = this.memos.length +1;
            //  저장 클릭시 내용 push
            //  저장 클릭시 local storage에 저장하게 끔
            this.memos.push({
                id : 4,
                content : this.memo.content,
                regDate : new Date()
            });
            this.memo.content = null;
            this.mode = 'list';
            //  console에서 JSON형태로 파일 들어오는 것을 확인할 수 있음
            localStorage.setItem('memos', JSON.stringify(this.memos));
        },
        cancle: function(){
            this.mode = 'list';
        }
    },
    //  vue.js의 기본적인 함수 created 앱이 실행될 때 바로 실행함.
    created: function(){
         var memos = localStorage.getItem('memos');
         if(memos) {
             this.memos = JSON.parse(memos);
         }

    }
})