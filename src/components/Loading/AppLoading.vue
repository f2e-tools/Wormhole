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
        renderer: 'svg',
        loop: true,
        autoplay: true
      }
    }
  },
  methods: {
    initAppLoading () {
      Lottie.loadAnimation({
        container: this.$refs.appLoading,
        ...this.options,
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

