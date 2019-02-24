<template>
  <el-menu
    class="navbar"
    mode="horizontal"
  >
    <div
      class="user-profile-container"
      trigger="click"
    >
      <div class="user-profile-content">
        <div class="menu-icons">
          <span class="menu-icon">
            <i
              class="el-icon-search icon"
              @click="searchOpenEmit"
            />
          </span>
          <el-popover
            placement="bottom-start"
            width="450"
            trigger="hover"
          >
            <div
              class="popover--website"
              v-html="popoverWebsite"
            >
            </div>
            <span
              slot="reference"
              class="menu-icon"
            >
              <el-badge
                is-dot
                class="item"
              >
                <i class="el-icon-bell icon" />
              </el-badge>
            </span>
          </el-popover>
        </div>
        <el-dropdown>
          <div class="user-profile-body">
            <img
              class="user-avatar"
              src="https://img.alicdn.com/tfs/TB1ONhloamWBuNjy1XaXXXCbXXa-200-200.png"
            >
            <span class="user-name">周嘉炜</span>
          </div>
          <el-dropdown-menu
            slot="dropdown"
            class="user-dropdown"
          >
            <a
              href="https://github.com/AllenChinese"
              target="_blank"
            >
              <el-dropdown-item>我的主页</el-dropdown-item>
            </a>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </el-menu>
</template>
<script>
export default {
  name: 'NavBar',
  data () {
    return {
      popoverWebsite: '<p><b>Wormhole</b> 中整理了常用网站的快速链接入口，用两个层级来区分排版。其实，其中的链接多数是前端的工具和资料，如果你是一位后端开发，你也可以通过拉取我的项目，替换 data 文件中的数据，重新发布成 GitPage，就能打造你自己的工具库网站了。项目还提供 <b><i>`npm run d`</i></b> 一条命令行发布。希望能帮你提升效率 😊！ </p>'
    }
  },
  methods: {
    searchOpenEmit () {
      this.$emit('searchOpen')
    }
  }
};
</script>
<style lang="scss" scoped>
.navbar {
  position: relative;
  height: 64px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  &::before {
    content: "Wormhole";
    position: absolute;
    width: 100%;
    height: 64px;
    line-height: 64px;
    text-align: center;
    font-size: 20px;
    font-family: Courier, Monaco, monospace;
    font-weight: 600;
  }
  .user-profile-container {
    position: absolute;
    right: 20px;
    cursor: pointer;
    .user-profile-content {
      display: flex;
      padding: 20px 0;
    }
    .menu-icons {
      display: flex;
      align-items: center;
      .menu-icon {
        padding: 0 12px;
        .icon {
          display: inline-block;
          font-size: 18px;
          text-align: center;
        }
      }
    }
    .user-profile-body {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding-right: 14px;
    }
    .user-avatar {
      width: 24px;
      height: 24px;
      margin: 0 8px 0 12px;
      border-radius: 4px;
    }
    .user-name {
      color: rgba(0, 0, 0, 0.65);
    }
    .user-department {
      font-size: 12px;
      color: rgba(102, 102, 102, 0.65);
    }
    .el-icon-caret-bottom {
      position: absolute;
      right: 0;
      top: 13px;
      font-size: 12px;
    }
  }
}
.popover--website {
  letter-spacing: 2px;
}
</style>

