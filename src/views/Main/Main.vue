<template>
  <div class="Main">Main</div>
</template>
<script>
import {getMainList} from '../../http/apis/main'
export default {
  name: 'Main',
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
.Main {
  text-align: center;
  font-size: 32px;
}
</style>
