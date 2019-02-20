<template>
  <div class="popover__content">
    <div class="popover__content--tag">
      <span
        v-for="(tag, index) in popoverParams.tags"
        :key="index"
      >{{tag}}</span>
    </div>
    <div class="popover_content--des">
      <p>{{popoverParams.description}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'popoverContent',
  props: [
   'popoverParams'
  ]
}
</script>
<style lang="scss" scoped>
.popover__content {
  font-size: 14px;
  color: #555;
  &--tag {
    display: flex;
    flex-wrap: wrap;
    span {
      display: inline-block;
      margin: 2px 8px 0 0;
      border-radius: 10px;
      border: 1px solid #555;
      padding: 2px 10px;
      font-size: 12px;
    }
  }
}
</style>

