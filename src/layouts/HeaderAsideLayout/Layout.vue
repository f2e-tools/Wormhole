<template>
  <div class="app-wrapper">
    <div
      class="main-loading"
      v-if="isLoading"
    >
      <app-loading />
    </div>
    <div
      class="main-Search"
      v-if="isSearch"
      @click.stop="searchClose"
      @searchOpen="searchOpen"
    >
      <google-search />
    </div>
    <div class="main-container">
      <nav-bar @searchOpen="searchOpen" />
      <app-notice />
      <app-main />
      <app-footer />
    </div>
  </div>
</template>
<script>
import { AppMain, NavBar, AppNotice, AppFooter } from './components'
import { AppLoading, GoogleSearch } from '../../components'
export default {
  name: 'Layout',
  data () {
    return {
      isLoading: true,
      isSearch: false
    }
  },
  components: {
    AppMain,
    NavBar,
    AppNotice,
    AppLoading,
    AppFooter,
    GoogleSearch
  },
  mounted () {
    setTimeout(() => {
      this.isLoading = false
    }, 2000)
  },
  methods: {
    searchClose () {
      this.isSearch = false
    },
    searchOpen () {
      this.isSearch = true
    }
  }
}
</script>
<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
}
.main-loading {
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
}
.main-container {
  min-height: 100vh;
  transition: margin-left 0.28s;
  // background-color: #f0f2f5;
}
</style>