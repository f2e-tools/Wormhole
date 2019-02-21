<template>
  <div
    class="app-loading"
    ref="appLoading"
  ></div>
</template>
<script>
import Lottie from 'lottie-web'
import {default as AppLoadingData}  from '../../data/lottie/app-loading.json'
export default {
  name: 'appLoading',
  data () {
    return {
      options: {

      }
    }
  },
  methods: {
    initAppLoading () {
      Lottie.loadAnimation({
        container: this.$refs.appLoading,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: AppLoadingData
      })
    }
  },
  mounted () {
    this.initAppLoading()
  }
}
</script>
<style lang="scss" scoped>
.app-loading {
  width: 300px;
  height: auto;
}
</style>

