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
        //  입력받은 값을 다른 객체or변수에 넣어줄 때, 참조값x, just 값으로 넣어주기 때문에 renew메서드 필요
        renew: function(val){
            return JSON.parse(JSON.stringify(val));
        },
        open: function(id){
            for(var i in this.memos){
                //  id가 같으면 배열에 저장함
                if(this.memos[i].id === id){
                    //  JS에서 =연산자는 변수에 입력할때 참조값이 아닌 값으로 처리됨->renew메서드 필요
                    this.memo = this.renew(this.memos[i]);   
                    break;
                }
            }
            this.mode = 'edit'; 
        },
        write: function(){
            this.mode = 'write';
            //  빈값으로 초기화
            this.memo = {
                id:null,
                content: null,
                regDate: null
            };
        },
        save: function(){
            var id = this.memos.length + 1;
            //  저장 클릭시 내용 push
            //  저장 클릭시 local storage에 저장하게 끔
            if(this.mode === 'write') { //  write이면
                this.memos.push({
                    id : id,
                    content : this.memo.content,
                    regDate : new Date()
                });
            }
            else if(this.mode ==='edit') {  //  edit이면
                for(var i in this.memos ) {
                   if( this.memos[i].id === this.memo.id) {
                        //this.memo[i].content = this.memo.content
                        this.memo[i] = this.renew(this.memo);
                        break;
                   }
                }
            }
            

            this.mode = 'list';
            //  console에서 JSON형태로 파일 들어오는 것을 확인할 수 있음
            localStorage.setItem('memos', JSON.stringify(this.memos));
        },
        remove: function(){
            if(confirm('삭제하시겠습니까?')){
                for(var i in this.memos ) {
                    if( this.memos[i].id === this.memo.id) {
                        //this.memo[i].content = this.memo.id.content
                        this.memos.splice(i, 1);
                        break;
                    }
                }
                this.mode = 'list';
                localStorage.setItem('memos', JSON.stringify(this.memos));
            }
        }
    },
    //  vue.js의 기본적인 함수 created 앱이 실행될 때 바로 실행함.
    //  앱이 업데이트 될 때, 기존 내용이 사라지지 않도록 localStorage에서 Json get
    created: function(){
         var memos = localStorage.getItem('memos');
         if(memos) {
             this.memos = JSON.parse(memos);
         }
    }
})