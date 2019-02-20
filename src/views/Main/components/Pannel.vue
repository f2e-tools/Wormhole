<template>
  <div class="pannel">
    <div
      class="pannel__item"
      v-for="item in wormhole"
      v:key="item.id"
    >
      <div class="pannel__item--title">
        <span>{{item.name}}</span>
      </div>
      <div class="pannel__item--links">
        <div
          class="link__item"
          v-for="(linkItem, index) in item.child || []"
          v:key="linkItem.id"
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
export default {
  name: 'pannel',
  data () {
    return {
      colorSet: [
        '#00a6ac',
        '#f15a22',
        '#009ad6',
        '#145b7d',
        '#525f42',
        '#b69968',
        '#00ae9d',
        '#ea66a6',
        '#130c0e',
        '#444693'
      ],
      wormhole: [
        {
          id: 1,
          name: '前端框架',
          icon: '',
          child: [
            {
              id: 1,
              name: 'React',
              link: 'https://react.docschina.org/',
              popover: {
                tags: ['中文','免费','重点'],
                description: '这是一段文字文字文字文字文字文字文字文字',
                visible: false
              }

            }, {
              id: 2,
              name: 'Vue',
              link: 'https://cn.vuejs.org/',
              popover: {
                tags: ['中文','免费','重点'],
                visible: false
              }
            }
          ]
        },
        {
          id: 2,
          name: 'UI 框架',
          icon: '',
          child: [
            {
              id: 3,
              name: 'iView',
              link: 'hhttp://v1.iviewui.com/'
            }
          ]
        }
      ]
    }
  },

  components: {
    PopoverContent
  },

  created () {
    this.wormhole = this.dataInit(this.wormhole)
  },

  methods: {
    /**
     * 数据处理，处理数据结构，保证 child:{popover:{visible: false}}
     * @param {Object} data - 获取的展示数据
     * @return {Object} data
     */
    dataInit (data) {
      data.map((current) => {
        if (current.child.length) {
          current.child.map((_current) => {
            if (!_current.popover) {
              _current.popover = {}
            }
            _current.popover.visible = false
          })
        }
      })
      console.log(data)
      return data
    },
    previewStyle () {
      let styleObj = { 'background-color': this.randomColor()}
      return styleObj
    },
    randomColor () {
      return this.colorSet[Math.round(Math.random() * (this.colorSet.length - 1))]
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
}
.pannel__item {
  display: flex;
  align-items: center;
  padding: 15px 0;
  &:not(:last-child) {
    border-bottom: 1px solid #eee;
  }
  &--title {
    flex-shrink: 0;
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
