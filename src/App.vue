/* eslint-disable */
<template>
  <div id='app' :class='getNodeEnv'>
    <i
      class='exchange circular icon'
      @click='$store.commit("switchFlexDirection")'
      :style='{ color: getColor, borderColor: getColor }'
    >
    </i>
    <icon
      name='color'
      v-bind:style='{ color: getColor }'
      scale='4'
      id='colorpicker'
      @click.native='picker = !picker'
    >
    </icon>
    <i
      class='erase circular icon'
      @click='$store.commit("setBaseColor")'
      :style='{ color: getColor, borderColor: getColor }'
    ></i>
    <div id='slider' v-if='picker'>
      <slider-picker v-model='color'></slider-picker>
    </div>
    <div id='resume' :style='{ FlexDirection: getFlexDirection }'>
      <infoside></infoside>
      <exp-side></exp-side>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import InfoSide from '@/components/InfoSide/InfoSide'
import ExperienceSide from '@/components/ExperienceSide/ExperienceSide'
export default {
  name: 'app',
  components: {
    infoside: InfoSide,
    expSide: ExperienceSide
  },
  data () {
    return {
      picker: false
    }
  },
  computed: {
    ...mapGetters([
      'getColor',
      'getDarkerColor',
      'getFlexDirection',
      'getLinkColor',
      'getNodeEnv'
    ]),
    color: {
      get () {
        return this.$store.getters.getColor
      },
      set (val) {
        this.$store.commit('setColor', val.hex)
      }
    }
  }
}
</script>

<style lang='sass'>
.colto
  columns: 2px 2
  list-style-position: inside

#resume
  display: flex
  justify-content: center
  /*min-height: 100%*/
  padding: 30px



#colorpicker
  position: fixed
  left: 40px
  top: 5px

#slider
  position: fixed
  top: 50px
  left: 10px

.exchange
  position: fixed
  left: 10px
  top: 10px
.erase
  position: fixed
  top: 10px
  left: 80px


.right
  flex-direction: row-reverse

#right
  width: 650px
  padding: 30px
  padding-top: 5px
  background-color: whitesmoke
  min-height: 100%

.centered
  align-self: center
  text-align: center

.bold
  font-weight: bold

.italic
  font-style: italic

.info
  display: flex
  justify-content: space-between
  align-items: center
  padding-top: 3px
  padding-bottom: 3px

.inverted
  filter: invert(100%)

h2
  margin-top: 10px !important

@media all
  .page-break
    display: none


@media only screen and (max-width : 420px)
  #app > *:not(#resume)
    display: none
  #app
    width: 100%
  #resume
    padding: 0
    flex-direction: column !important
    #left, #right
      width: 100%
  .colto
    columns: auto 1
@media print
  #resume
    padding: 0
  .page-break
    display: block
    page-break-before: always
    position: relative
  #right
    background: transparent
  #right, #left
    position: relative
  #app > *:not(#resume)
    display: none
  #links
    padding-top: 5px
  #left
    width: 50%
  .colto
    font-size: 0.9em
</style>
