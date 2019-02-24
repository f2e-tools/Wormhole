<template>
  <div class="GoogleSearch__container">
    <div
      class="search__content"
      @click.stop="searchOpenEmit"
    >
      <input
        class="search__content--input"
        v-model="searchVal"
        placeholder="Google Search"
        @keyup.enter="searchEvent"
      ></input>
      <div
        class="search__content--submit"
        @click="searchEvent"
      >Enter</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GoogleSearch',
  data () {
    return {
      searchVal: ''
    }
  },
  methods: {
    searchEvent () {
      let _val = this.searchVal
      window.open(`https://www.google.com/search?q=${_val}&oq=${_val}`, '_blank')
    },
    searchOpenEmit () {
      this.$emit('searchOpen')
    }
  }
}
</script>
<style lang="scss" scoped>
.GoogleSearch__container {
  z-index: 99;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
}
.search__content {
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 500px;
  height: 45px;
  box-sizing: border-box;
  &--input {
    outline: none;
    padding: 5px 10px;
    width: 420px;
    height: 45px;
    line-height: 45px;
  }
  &--submit {
    border-radius: 0 30px 30px 0;
    width: 80px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 18px;
    color: #fff;
    background-color: #00a6ac;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      background-color: #00aaac;
    }
  }
}
</style>

