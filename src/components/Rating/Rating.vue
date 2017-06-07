<template>
  <div class="rating">
    <icon v-for="n in count"
          :name="iconname"
          scale="1.6"
          style="color: #eee;"
          :key="n">

    </icon>
    <icon v-for="n in (5 - count)"
          :name="iconname" scale="1.6"
          :style="{color: color.darken(0.2).string()}"
          :key="n">

    </icon>
  </div>
</template>
<script>
export default {
  name: 'job',
  props: ['count', 'iconname', 'color']
}
</script>

<style scoped lang="sass">
  .rating
    display: flex
    justify-content: space-around
    img
      margin-left: 2px
    .svg-icon
      margin-right: 3px
</style>
