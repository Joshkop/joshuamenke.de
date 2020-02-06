<template>
  <div class="job" :style="{'border-color': color}" >
    <span class="before" :style="{background: color}"></span>
    <h3>{{title}}</h3>
    <div class="info bold italic">
      <span>{{subtitle}}</span>
      <span style="white-space: nowrap">{{time}}</span>
    </div>
    <div v-if="!collapse" v-html="text"></div>
  </div>
</template>

<script>
export default {
  name: 'job',
  props: ['title', 'subtitle', 'time', 'text', 'color'],
  data () {
    return {
      collapse: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  h3
    margin-bottom: 5px !important
    margin-top: 0 !important
  .job
    max-width:
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
    .bold
      font-weight: bold
    .italic
      font-style: italic
  @media print
    .job
      page-break-inside: avoid
      .before
        border-color: white !important
    #app:not(.development)
      .job
        border-color: #4a4a4a !important
        .before
          border-color: white !important
          background: #4A4A4A !important
        h3
          color: black !important
        .info
          color: #4A4A4A !important


</style>
