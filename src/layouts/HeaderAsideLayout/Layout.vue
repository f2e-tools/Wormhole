<template>
  <div class="app-wrapper">
    <div class="main-container">
      <nav-bar />
      <app-notice />
      <app-main />
    </div>
  </div>
</template>
<script>
import { AppMain, NavBar, AppNotice } from './components'
export default {
  name: 'Layout',
  components: {
    AppMain,
    NavBar,
    AppNotice
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

.main-container {
  min-height: 100vh;
  transition: margin-left 0.28s;
  // background-color: #f0f2f5;
}
</style>