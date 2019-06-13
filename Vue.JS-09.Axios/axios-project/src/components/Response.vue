<template>
  <div class="response">
    <div v-if="hasResult">
      <div v-for="post in posts" v-bind:key="post.id">
        <h1>{{ post.title }}</h1>
        <p>{{ post.body }}</p>
      </div>
    </div>
    <button v-else v-on:click="searchTerm">글 불러오기</button>
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      posts: []
    }
  },
  computed: {
    hasResult: function () {
      return this.posts.length > 0
    }
  },
  methods: {
    searchTerm: function () {
      const baseURI = 'https://jsonplaceholder.typicode.com'
      this.$http.get(`${baseURI}/posts`)
      .then((response) => {
        console.log(response)
        this.posts = response.data
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
</style>
