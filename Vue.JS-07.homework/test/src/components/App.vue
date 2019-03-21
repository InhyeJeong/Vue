<template>
  <div id="app">
    <div class="container">

      <!-- 윤근: Chrome 개발자 도구에서 콘솔로보면
      vue.runtime.esm.js?2b0e:619 [Vue warn]: Avoid using non-primitive value as key, use string/number value instead.
      요 에러가 여러개 발생해요.
      -->

      <h1 class="title">Select</h1>

      <!-- 윤근: 아래 select, textarea, btn, result 주석은 불필요한 주석이에요. -->
      <!--select-->
      <select class="browser-default custom-select" v-model="selected">
        <option selected disabled  >Open this select menu</option>
        <option v-for="data in selectLists"
                :key="data">{{data.category}}
        </option>
      </select>
      <!-- 윤근: 간격만을 위해 br을 쓰는건 안좋아요. -->
      <br><br>

      <!--textarea-->
      <div class="form-group shadow-textarea">
        <!-- 윤근: 웹에서 긁어오면서 id (exampleFormControlTextarea6) 안바꾸셨어요. -->
        <label for="exampleFormControlTextarea6" class="title">TextArea</label>
        <textarea v-model="userInput" class="form-control z-depth-1" id="exampleFormControlTextarea6" rows="3" placeholder="Write something here..."></textarea>
      </div>

      <!--btn-->
      <button type="submit" class="btn btn-light-blue" @click="onClick">Submit</button>
      <br><br>
      <hr>

      <!--result-->
      <h1 class="title">Result</h1>

      <select class="browser-default custom-select"
            v-model="filterSelected"
            @change="filterCategory()">
        <option selected >All</option>
        <option v-for="data in selectLists"
              :key="data">{{data.category}}
        </option>
      </select>

      <ul v-if="filterSelected==='All'" class="list-group">
        <li v-for="data in textResults" :key="data" class="list-group-item">내용 : {{data.label}} | 카테고리 : {{data.category}}</li>
      </ul>


      <ul v-else class="list-group">
        <li v-for="data in textFilterResults" :key="data" class="list-group-item">내용 : {{data.label}} | 카테고리 : {{data.category}}</li>
      </ul>
      <!-- 윤근: id dv 보다는 resultDiv가 나을 것 같습니다. -->
      <div id="dv" ref="dv"></div>
      <br><br>


      <!--console-->
      <p>{{textFilterResults}}</p>
      {{$data}}

    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      /* 윤근: 변수명을 지을 때는 해당 변수와 관련된 타입 혹은 컴포넌트 보다는 변수가 담는 데이터의 의미를 고려하는게 더 좋아요.
        예를 들면, 아래와 같이 바꾸는게 더 좋다고 생각해요.
       */
      selectLists:[ // e.g. categoryList 혹은 categorySelectList (개인적으로는 categoryList가 더 좋다 생각해요)
        {category:'동료'},
        {category:'친구'},
        {category:'가족'}
      ],
      textResults:[], // e.g. mailResults, mailList, mailBox (전 mailList와 mailBox를 고민하다가 mailBox를 썼네요.)
      textFilterResults:[], // e.g. filteredMailList, filteredMailBox
      userInput: '',
      selected: '', // e.g. selectedCategory, selectedTargetCategory, targetCategory, recipient
      filterSelected: ''
    }
  },
  methods: {
    // 함수명도 onClick 보다는 더 좋은 함수명이 있을 것 같아요.
    onClick: function() {
      /* 윤근: 요구사항에 시간 역순(최근 시간순)으로 리스팅 하라는게 있으니
               push 말고 unshift를 써야 할 것 같아요. */
      this.textResults.push({
        label : this.userInput,
        category : this.selected
      })
      this.userInput = '';
      this.filterCategory()
    },
    filterCategory: function() {
      var self = this
      self.$nextTick(()=> {
        /* 윤근: 이건 개인적인 의견인데, filter, map, reduce와 같은 함수들은
                 보통 function(data){~~~}보다 data => ~~~ 를 더 많이 쓰는 것 같아요. (지금 이 nextTick 처럼요.)
                 그리고 파라미터 네이밍도 data 보다는 textResults의 원소들이니 result나 textResult 를 쓰는게 더 좋을 것 같아요. */
        // e.g. this.textFilterResults = this.textResults.filter(mail => mail.category === self.filterSelected)
        this.textFilterResults = this.textResults.filter(function(data) {
            return data.category === self.filterSelected
        })
      })
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.shadow-textarea textarea.form-control::placeholder {
    font-weight: 300;
}
.shadow-textarea textarea.form-control {
    padding-left: 0.8rem;
}
.title {
  font-weight: bold;
  font-size: 30px
}

.btn {
  float: right;
}
</style>
