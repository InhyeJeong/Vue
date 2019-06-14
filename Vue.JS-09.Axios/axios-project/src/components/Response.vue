<template>
  <div class="response">
    <div v-if="hasResult">
      <div v-for="post in posts" v-bind:key="post.id">
        <h1>{{ post.categoryCode }}</h1>
        <p>{{ post.name }}</p>
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
    //  var apiUrls = apiList.baseUrl + apiMethod.apiUrl + apiMethod.apiQuery
    var apiUrls = 'https://dev-api.meditlink.com' + '/v1/colLabGroups/labs/_id/products' + ''
    var accessToken = 'Bearer' + 'dfdfdf'
    var ajaxOptions = {
      headers: {
        'Content-Type': 'text/plain', //  apiMethod.contentType,
        'x-meditlink-version': '2.1.0' + '', //  meditlinkVersion + apiList.buildVersion
        'Authorization' : accessToken
      }
    }
      this.$http.get(apiUrls, ajaxOptions)
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

.response {
    padding-top: 30px;
}
</style>
