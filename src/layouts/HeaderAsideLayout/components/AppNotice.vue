<template>
  <div class="app-notice">
    <div class="notice__content">
      <div class="notice__content--left">
        <h1>Wormhole</h1>
        <p>打造你自己的工具库</p>
        <p>高效查阅，快乐coding</p>
      </div>
      <div class="notice__content--right">

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'appNotice'
}
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
    color: #fff;
    h1 {
      margin: 60px 0 30px;
      text-align: left;
      font-size: 38px;
      font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
    }
    p {
      text-align: left;
    }
  }
}
</style>
