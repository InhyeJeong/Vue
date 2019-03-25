<template>
  <div id="app">
    <div class="container">
      <h1 class="title">Select</h1>
      <!--select-->
      <select class="browser-default custom-select" v-model="selected">
        <option value="" selected disabled>Open this select menu</option>
        <option v-for="data in categoryLists"
                :key="data.index">{{data.category}}
        </option>
      </select>

      <!--textarea-->
      <div class="form-group shadow-textarea">
        <label class="title">TextArea</label>
        <textarea v-model="userInput" class="form-control z-depth-1" rows="3" placeholder="Write something here..."></textarea>
      </div>
      <!--btn-->
      <button type="submit" class="btn btn-light-blue" @click="onSubmit()">Submit</button>
      <hr>
      <!--result-->
      <h1 class="title-result">Result</h1>
      
      <select class="browser-default custom-select"
              v-model="filterSelected"
              @change="filterCategory()">
        <option selected >All</option>
        <option v-for="data in categoryLists"
                :key="data.index"
                :value="data.category">{{data.category}}
        </option>
      </select>

      <ul v-if="filterSelected==='All'" class="list-group">
        <li v-for="data in mailBox" :key="data.index" class="list-group-item">내용 : {{data.label}} | 카테고리 : {{data.category}}</li>
      </ul>
      <ul v-else class="list-group">
        <li v-for="data in filteredMailBox" :key="data.index" class="list-group-item">내용 : {{data.label}} | 카테고리 : {{data.category}}</li>
      </ul>
      
      <!--console-->
      <p>{{filteredMailBox}}</p>
      {{$data}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      categoryLists:[
        {category:'동료', index:1},
        {category:'친구', index:2},
        {category:'가족', index:3}
      ],
      mailBox:[],
      filteredMailBox:[],
      userInput: '',
      selected: '',
      filterSelected: 'All'
    }
  },
  methods: {
    filterCategory: function() {
      var self = this
      this.filteredMailBox = this.mailBox.filter( data => {
          return data.category === self.filterSelected
      })
    },
    onSubmit: function() {
      //  validataion
      if(this.userInput.length === 0) {
        alert('내용을 입력하세요')
      } else if (this.selected === '') {
        alert('카테고리를 선택하세요')
      } else if (this.userInput.length > 0 && this.selected !== 0){
        this.mailBox.unshift({
        label : this.userInput,
        category : this.selected
      })
      this.userInput = '';
      }
    }
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
  font-size: 30px;
  padding-top: 20px;
}
.title-result { 
  font-weight: bold;
  font-size: 30px;
  padding-top: 50px;
}
.btn {
  float: right;
}
</style>