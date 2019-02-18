<template>
  <div class="pannel">
    <div class="pannel__item" v-for="item in wormhole" v:key="item.id">
      <div class="pannel__item--title">
        <span>{{item.name}}</span>
      </div>
      <div class="pannel__item--links">
        <div class="link__item" v-for="linkItem in item.child || []" v:key="linkItem.id">
          <a class="link__item--content" :href="linkItem.link">
            <div class="link__item--preview">{{linkItem.name.slice(0,1) || 'W'}}</div>
            <div class="link__item--title">{{linkItem.name}}</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'pannel',
  data () {
    return {
      wormhole: [
        {
          id: 1,
          name: '前端框架',
          icon: '',
          child: [
            {
              id: 1,
              name: 'React',
              link: 'https://react.docschina.org/'
            }, {
              id: 2,
              name: 'Vue',
              link: 'https://cn.vuejs.org/'
            }
          ]
        },
        {
          id: 2,
          name: 'UI 框架',
          icon: '',
          child: [
            {
              id: 1,
              name: 'iView',
              link: 'hhttp://v1.iviewui.com/'
            }
          ]
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.pannel {
  margin: 0 auto;
  padding: 0 20px;
  border-radius: 20px;
  width: 1200px;
  height: auto;
  box-sizing: border-box;
  color: #555;
  background-color: #fff;
}
.pannel__item {
  display: flex;
  align-items: center;
  padding: 15px 0;
  &:not(:last-child) {
    border-bottom: 1px solid #eee;
  }
  &--title {
    margin: 0 15px 0 0;
    font-size: 16px;
  }
  &--links {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .link__item {
      padding-right: 10px;
      &--content {
        display: flex;
        align-items: center;
        margin-right: 8px;
        padding: 8px;
        font-size: 14px;
      }
      &--preview {
        border-radius: 50%;
        margin-right: 8px;
        width: 25px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        color: #fff;
        font-weight: 800;
        background-color: #00a6ac;
      }
    }
  }
}
</style>
