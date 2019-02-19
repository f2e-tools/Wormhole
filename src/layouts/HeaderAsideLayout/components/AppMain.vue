<template>
  <section class="app-main">
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view />
    </transition>
  </section>
</template>
<script>
export default {
  name: 'AppMain'
}
</script>
<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - 64px);
  background: url("~@/assets/star-bg.svg") no-repeat 0 0;
  background-color: #f0f2f5;
  background-size: cover;
}
</style>
