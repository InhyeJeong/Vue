<template>
  <div id="app">
    <div class="container">


      <h1 class="title">Select</h1>

      <!--select-->
      <select class="browser-default custom-select" v-model="selected">
        <option selected >Open this select menu</option>
        <option v-for="data in selectLists"
                :key="data">{{data.category}}
        </option>
      </select>
      <br><br>

      <!--textarea-->
      <div class="form-group shadow-textarea">
        <label for="exampleFormControlTextarea6" class="title">TextArea</label>
        <textarea v-model="userInput" class="form-control z-depth-1" id="exampleFormControlTextarea6" rows="3" placeholder="Write something here..."></textarea>
      </div>

      <!--btn-->
      <button type="submit" class="btn btn-light-blue" @click="onClick">Submit</button>
      <br><br>
      <hr>
      <!--filter-->
      <h1 class="title">Filter</h1>
      <br>

      <select class="browser-default custom-select"
              v-model="textResults"
              @change="filterCategory">
        <option selected >Open this select menu</option>
        <option v-for="data in selectLists"
                :key="data">{{data.category}}
        </option>
      </select>
      
      <br><br>
      <!--result-->
      <h1 class="title">Result</h1>
      
      <ul class="list-group">
        <li v-for="data in textResults" :key="data" class="list-group-item">내용 : {{data.label}} | 카테고리 : {{data.category}}</li>
      </ul>

      <p>{{textResults}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      selectLists:[
        {category:'동료'},
        {category:'친구'},
        {category:'가족'}
      ],
      textResults:[],
      userInput: '',
      selected: '',
      selectedResults:''
    }
  },
  methods: {
    onClick: function() {
      this.textResults.push({
        label : this.userInput,
        category : this.selected
      })
      this.userInput = '';
    },
    filterCategory: function(category) {
      this.textResults.filter(function(data) {
        return data.category === category
      })
    },
    selectedResult: function () {

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
  font-size: 30px
}

.btn {
  float: right;
}
</style>