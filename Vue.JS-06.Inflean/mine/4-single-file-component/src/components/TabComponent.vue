<template>
  <ul class="tabs">
      <li v-for="(tab, index) in tabs" v-bind:key="index" v-bind:class="{active: tab === selectedTab}"
          v-on:click="onClickTab(tab)">
          {{tab}}
      </li>
  </ul>
</template>


<script>
export default {
  props: ['tabs', 'selectedTab'],
  methods: {
    onClickTab: function(tab) {
      this.$emit('@change', tab)
    }
  }
}
</script>
