<template>
  <div
    class="site-lottie"
    ref="siteLottie"
  >
  </div>
</template>
<script>
import Lottie from 'lottie-web'
import {default as SiteData} from '../data/lottie/site.json'
export default {
  name: 'siteLottie',
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
    initSite () {
      Lottie.loadAnimation({
        container: this.$refs.siteLottie,
        ...this.options,
        animationData: SiteData
      })
    }
  },

  mounted () {
    this.initSite()
  }
}
</script>
<style lang="scss" scoped>
.site-lottie {
  height: 100%;
}
</style>
