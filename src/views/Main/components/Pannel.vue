<template>
  <div class="pannel">
    <div
      class="pannel__item"
      v-for="item in wormhole"
      v:key="item.id"
    >
      <div class="pannel__item--title">
        <img
          :style="iconStyle"
          :src="item.icon"
          :alt="item.name"
        >
        <span>{{item.name}}</span>
      </div>
      <div class="pannel__item--links">
        <div
          class="link__item"
          v-for="(linkItem, index) in item.child || []"
          :key="linkItem.id"
        >
          <el-popover
            placement="bottom-start"
            width="200"
            trigger="manual"
            v-model="linkItem.popover.visible"
          >
            <popover-content :popoverParams="linkItem.popover" />
            <a
              slot="reference"
              @mouseenter="mouseenterEvent(linkItem.popover)"
              @mouseleave="mouseleaveEvent(linkItem.popover)"
              class="link__item--content"
              :href="linkItem.link"
              target="_blank"
            >
              <div
                class="link__item--preview"
                :style="previewStyle()"
              >{{linkItem.name.slice(0,1).toLocaleUpperCase() || 'W'}}</div>
              <div class="link__item--title">{{linkItem.name}}</div>
            </a>
          </el-popover>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { PopoverContent } from '../../../components'
import { colorSet } from '../../../data/colorSet'
import { wormhole } from '../../../data/wormhole'
export default {
  name: 'pannel',
  data () {
    return {
      wormhole: [],
      iconStyle: {
        marginRight: '8px',
        width: '18px',
        height: '18px'
      }
    }
  },

  components: {
    PopoverContent
  },

  created () {
    this.wormhole = this.dataInit(wormhole)
  },

  methods: {
    /**
     * 数据处理，处理数据结构，保证 child:{popover:{visible: false}}
     * @param {Object} data - 获取的展示数据
     * @return {Object} data
     */
    dataInit (data) {
      data.map((ele) => {
        if (ele.child.length) {
          ele.child.map((_ele) => {
            if (!_ele.popover) {
              _ele.popover = {}
            }
            _ele.popover.visible = false
          })
        }
      })
      return data
    },
    previewStyle () {
      let styleObj = { 'background-color': this.randomColor()}
      return styleObj
    },
    randomColor () {
      return colorSet[Math.round(Math.random() * (colorSet.length - 1))]
    },
    mouseenterEvent (popover) {
      if (popover.tags || popover.description) {
        popover.visible = true
      }
    },
    mouseleaveEvent (popover) {
     popover.visible = false
    }
  }
}
</script>
<style lang="scss" scoped>
.pannel {
  margin: 0 auto;
  padding: 0 20px;
  border-radius: 10px;
  width: 1200px;
  height: auto;
  box-sizing: border-box;
  color: #555;
  background-color: rgba(255, 255, 255, 0.3);
  @media (max-width: 1300px) {
    width: 1000px;
  }
}
.pannel__item {
  display: flex;
  align-items: center;
  padding: 15px 0;
  &:not(:last-child) {
    border-bottom: 1px solid #eee;
  }
  &--title {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    margin: 0 15px 0 0;
    min-width: 110px;
    font-size: 15px;
    font-family: Georgia, "Times New Roman", Times, serif;
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
        width: 160px;
        font-size: 14px;
      }
      &--preview {
        flex-shrink: 0;
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
      &--title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
