<template>
  <div id="app">
    <div class="container">
      <div class="col-md-6 offset-md-3">
        <h1 class="text-center mb-4">Todo Application</h1>
        <input type="text" class="form-control mb-4" v-model="userInput" @keyup.enter="addNewTodo">

        <div class="list-group mb-4">
          <!-- for문 -->
          <template v-for="todo in activeTodoList" > <!-- 필터 : state값이 active인 값만 넘겨줌 -->
            <!-- state변경을 위한 함수 연결 -->
            <button class="list-group-item text-left" @click="toggleTodoState(todo)">
              {{ todo.label }}
            </button>
          </template>
        </div>

        <div class="text-right">
          <button type="button" class="btn btn-sm" @click="changeCurrentState('active')">계획</button>
          <button type="button" class="btn btn-sm" @click="changeCurrentState('done')">완료</button>
          <button type="button" class="btn btn-sm" @click="changeCurrentState('all')">전체</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return{
      //  사용자 입력값을 받을 변수 선언
      userInput: '',
      //  입력받은 값을 저장할 배열 선언
      todoList:[],
      //  출력할 현재값 선언 및 초기값 선언
      currentStete: 'active',
    };
  },
  
  //  computed를 사용하면 html 태그안에서 activeTodoList처럼 변수로 사용가능
  //  like class의 getter함수
  computed: {
    //  JS 코드는 따로 분리하기
    activeTodoList() {
      //  currentState값이 all이면 전체항목 가져오고 아니면 currentState값과 동일한 값만 가져옴
      return this.todoList.filter(todo => this.currentStete === 'all' || todo.state ===this.currentStete)
    }
  },

  methods:{
    changeCurrentState(state){
      this.currentStete = state;
    },
    addNewTodo() {
      //  todoList를 배열에 넣고
      this.todoList.push({
        label : this.userInput,  //  JSON형식으로 상태값 표시
        state : 'active'
      });
      //  userInput값을 초기화
      this.userInput = '';
    },
    toggleTodoState(todo) { //  (prop : 클릭한 항목을 받을 변수)
      //  넘겨받은 todo.state JSON 값을 done, active로 번갈아 가면서 설정함
      todo.state = todo.state === 'active' ? 'done' : 'active';
    }
  },
  components: {

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
</style>
