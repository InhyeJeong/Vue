<template>
  <div id="app">
    <div class="container">


      <h1 class="title">Select</h1>

      <!--select-->
      <select class="browser-default custom-select" v-model="selected">
        <option selected disabled  >Open this select menu</option>
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
      selectLists:[
        {category:'동료'},
        {category:'친구'},
        {category:'가족'}
      ],
      textResults:[],
      textFilterResults:[],
      userInput: '',
      selected: '',
      filterSelected: ''
    }
  },
  methods: {
    onClick: function() {
      this.textResults.push({
        label : this.userInput,
        category : this.selected
      })
      this.userInput = '';
      filterCategory()
    },
    filterCategory: function() {
      var self = this
      self.$nextTick(()=> {
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