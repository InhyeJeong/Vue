var app = new Vue({
    el: '#app',
    data: {
        memos: [
            {
                id:1,
                content:'메모 #1',
                regDate : new Date()
            },
            {
                id:2,
                content:'메모 #2',
                regDate : new Date()
            },
            {
                id:3,
                content:'메모 #3',
                regDate : new Date()
            }

        ]
    }
})