var vm = new Vue({
  data : {
    a:1
  },
  created: function() {
    //  this는 vm을 가리킴
    console.log('a is: ' + this.a);
  }
})
