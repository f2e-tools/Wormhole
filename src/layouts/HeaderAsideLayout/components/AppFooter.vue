<template>
  <footer class="app-footer">
    <div class="app-footer__content">
      <div class="links__part">
        <div
          class="links__part--single"
          v-for="(item, index) in data"
          :key="index"
        >
          <h3>{{item.title}}</h3>
          <div>
            <p
              class="links__part--single--name"
              v-for="(link, index) in item.links"
            ><a
                :href="link.url"
                target="_blank"
              >{{link.name}}</a></p>
          </div>
        </div>
      </div>
      <div class="qrcode__part">
        <img
          src="~@/assets/wechat.png"
          alt="我的微信"
        >
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data () {
    return {
      data: [
        {
          title: '友情链接',
          links: [
            {name: 'Hilox', url: ''},
            {name: '前端乱炖', url: 'http://html-js.com/'},
            {name: '张鑫旭', url: 'https://www.zhangxinxu.com/'}
          ]
        },
        {
          title: '丁香园',
          links: [
            {name: '丁香园用户体验中心', url: 'http://dux.dxy.com/'},
            {name: '丁香园官网', url: 'http://www.dxy.cn/'},
            {name: '丁香医生', url: 'https://dxy.com'},
            {name: '丁香园招聘', url: 'https://www.zhipin.com/gongsi/8ff06625b3927f990Xd42A~~.html'}
          ]
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.app-footer {
  padding: 15px 0;
  width: 100%;
  height: 200px;
  background: #333;
  box-sizing: border-box;
}
.app-footer__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 1200px;
  height: 100%;
  @media (max-width: 1300px) {
    width: 1000px;
  }
}
.links__part {
  display: flex;
  &--single {
    margin-right: 70px;
    height: 100%;
    color: #fff;
    &--name {
      font-size: 14px;
    }
  }
}
.qrcode__part {
  img {
    width: 120px;
    height: 120px;
  }
}
</style>
