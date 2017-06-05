<template>
  <div class="job" :style="{'border-color': color.string()}">
    <span class="before" :style="{background: color.string()}"></span>
    <h3 :style="{color: color.string()}">{{title}}</h3>
    <div class="info bold italic">
      <span>{{subtitle}}</span>
      <span style="white-space: nowrap">{{time}}</span>
    </div>
    <div class="text" v-html="text"></div>
  </div>
</template>

<script>
export default {
  name: 'job',
  props: ['title','subtitle','time','text','color']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

  h3
    margin-bottom: 5px !important
    margin-top: 0px !important
  .job
    border-left: solid 1px
    padding-bottom: 20px
    padding-left: 10px
    position: relative
    .before
      height: 10px
      width: 10px
      position: absolute
      border-radius: 50%
      left: 0
      top: 0
      border: solid 5px whitesmoke
      box-sizing: content-box
      transform: translate(-50%, 0px)
      margin-left: -1px
  @media print
    .job .before
      border-color: white

</style>
