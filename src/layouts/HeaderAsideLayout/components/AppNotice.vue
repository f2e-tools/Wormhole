<template>
  <div class="app-notice">
    <div class="notice__content">
      <div class="notice__content--left">
        <h1>{{notice.name}}</h1>
        <p>{{notice.p1}}</p>
        <p>{{notice.p2}}</p>
        <div
          class="notice__content--github"
          @click="linkToGithub"
        >
          <span class="btn">{{notice.git}}</span>
        </div>
      </div>
      <div class="notice__content--right">
        <site-lottie />
      </div>
    </div>
  </div>
</template>
<script>
import { SiteLottie } from '../../../components';
export default {
  name: 'appNotice',
  data() {
    return {
      notice: {
        name: 'Wormhole',
        p1: '打造你自己的工具库',
        p2: '高效查阅，快乐coding',
        git: 'GitHub',
        link: 'https://github.com/AllenChinese/Wormhole'
      }
    };
  },
  components: {
    SiteLottie
  },
  methods: {
    linkToGithub() {
      window.open(this.notice.link, '_blank');
    }
  }
};
</script>
<style lang="scss" scoped>
.app-notice {
  padding: 3vh;
  width: 100%;
  height: 300px;
  text-align: center;
  background-color: #00a6ac;
  box-sizing: border-box;
}
.notice__content {
  display: flex;
  margin: 0 auto;
  max-width: 1000px;
  width: 100%;
  height: 100%;
  // background-color: rebeccapurple;
  &--left,
  &--right {
    width: 50%;
    height: 100%;
  }
  &--left {
    padding: 0 50px;
    font-family: 'lucida grande', 'lucida sans unicode', lucida, helvetica,
      'Hiragino Sans GB', 'Microsoft YaHei', 'WenQuanYi Micro Hei', sans-serif;
    color: #fff;
    h1 {
      margin: 40px 0 30px;
      text-align: left;
      font-size: 42px;
    }
    p {
      line-height: 15px;
      text-align: left;
      letter-spacing: 1px;
    }
  }
  &--github {
    display: flex;
    margin-top: 20px;
    .btn {
      position: relative;
      display: inline-block;
      padding-left: 24px;
      border-radius: 12px;
      width: 76px;
      height: 24px;
      line-height: 24px;
      font-size: 12px;
      color: #515151;
      background-color: #fff;
      cursor: pointer;
      &::before {
        content: ' ';
        position: absolute;
        top: 50%;
        left: 10px;
        transform: translate3d(0, -50%, 0);
        width: 16px;
        height: 16px;
        background: url('~@/assets/github.png') no-repeat center center;
        background-size: contain;
      }
    }
  }
}
</style>
