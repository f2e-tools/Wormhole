<template>
  <div
    class="back-top"
    v-if="isBackTopShow"
    ref="backTop"
    @click="backTopEvent"
  >
    <div class="content"></div>
  </div>
</template>
<script>
export default {
  name: 'backTop',
  data () {
    return {
      isBackTopShow: false,
      minThreshold: 0,
      maxThreshold: 1000
    }
  },
  methods: {
    backTopToggle () {
      if (window.scrollY >= this.maxThreshold && !this.isBackTopShow) {
        this.isBackTopShow = true
      }else if (window.scrollY === this.minThreshold) {
        this.isBackTopShow = false
      }
    },

    backTopEvent () {
      // scrollTo(0, 0)
      let timer = null
      cancelAnimationFrame(timer)
      timer = requestAnimationFrame (function fn () {
      var oTop = document.body.scrollTop
            || document.documentElement.scrollTop
        if (oTop > 0) {
          scrollTo(0, oTop - 80)
          timer = requestAnimationFrame(fn)
        }else {
          cancelAnimationFrame(timer)
        }
      })
    }
  },
  mounted () {
    window.addEventListener('scroll', this.backTopToggle, true)
  }
}
</script>
<style lang="scss" scoped>
.back-top {
  position: fixed;
  bottom: 70px;
  right: 10vw;
  cursor: pointer;
  @media (max-width: 1400px) {
    right: 5vh;
  }
  .content {
    width: 65px;
    height: 65px;
    background: url("~@/assets/rocket.png") no-repeat 0 0;
    background-size: contain;
  }
}
</style>

