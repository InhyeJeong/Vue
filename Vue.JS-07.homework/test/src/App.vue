<template>
  <div id="app">
    <div class="container">


      <h1 class="title">Select</h1>

      <select class="browser-default custom-select" v-bind="changeCategory" >
        <option selected >Open this select menu</option>
        <option value="1" v-for="data in selectLists" :key="data">{{data.category}}</option>
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

      <!--result-->
      <h1 class="title">Result</h1>
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
      userInput: ''
    }
  },
  methods: {
    onClick: function() {
      this.textResults.push({
        label : this.userInput,
        category : this.selectLists.category
      })
      this.userInput = '';
    },
    changeCategory: function(category) {
      this.selectLists.category = category
    },
    filterCategory: function(category) {
      return this.selectLists.filter(function(data) {
        return data.category === category
      })
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
</style>
