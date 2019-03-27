<template>
  <form v-on:submit.prevent="onSubmit">
    <input type="text" v-model="inputValue" v-on:keyup="onKeyup" placeholder="검색어를 입력하세요" autofocus>
    <button v-show="inputValue.length" v-on:click="onReset" type="reset" class="btn-reset"></button>
  </form>
</template>

<script>
export default {
  props: ['value'],
  data() {
      return {
        inputValue: this.value
      }
  },
  methods: {
      onSubmit: function () {
        //  child -> parent
        this.$emit('@submit', this.inputValue.trim())
      },
      onKeyup: function () {
        if(!this.inputValue.length) this.onReset()
      },
      onReset: function () {
        this.inputValue = ''
        this.$emit('@reset')
      }
  },
}
</script>

<style>

</style>
