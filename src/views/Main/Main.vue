<template>
  <div class="main-container">
    <section class="pannel__wrapper">
      <Pannel/>
    </section>
  </div>
</template>
<script>
import {getMainList} from '../../http/apis/main'
import {Pannel} from './components'
export default {
  name: 'Main',
  components: {
    Pannel
  },
  methods: {
    async init () {
      let payload = {
        pageSize: 10,
        pageNo: 1,
        name: 'a'
      }
      let res = await getMainList(payload)
      console.log(res)
    }
  },

  mounted () {
     this.init()
  }
}
</script>
<style lang="scss" scoped>
.main-container {
  width: 100%;
  text-align: center;
  font-size: 32px;
  overflow: hidden;
}
.pannel__wrapper {
  margin-top: 50px;
}
</style>
