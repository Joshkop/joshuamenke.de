<template>
  <div id="left" :style="{background: getColor}">

    <a href="/" class="centered" :style="{color: getLinkColor}" >
      <span class="before" :style="{background: getDarkerColor}"></span>
      <h1>{{infos.personal.name}}</h1>
      <div class="ui divider print"></div>
    </a>
    <div class="segment" id="personal">
      <div class="subtitle" hidden>
        <div class="ui divider"></div>
        <h2>Persönliches</h2>
        <div class="ui divider"></div>
      </div>
      <div class="info">
        <i class="birthday circular icon" :style='{color: getDarkerColor, borderColor: getColor}'></i>
        <div>Geb. {{infos.personal.birthday}}</div>
      </div>
      <div class="info">
        <i class="home circular icon" :style='{color: getDarkerColor, borderColor: getColor}'></i>
        <a href="https://goo.gl/maps/JVHtcFxZz4q" :style="{color: getLinkColor}">
          <div>{{ infos.personal.street }}</div>
          <div>{{ infos.personal.zip}} {{infos.personal.city}}</div>
        </a>
      </div>
      <div class="info">
        <i class="text telephone circular icon" :style='{color: getDarkerColor, borderColor: getColor}'></i>
        <a :href="'tel:'+ infos.personal.mobile " :style="{color: getLinkColor}">{{ infos.personal.mobileText }}</a>
      </div>
      <div class="info">
        <i class="mail circular icon" :style='{color: getDarkerColor, borderColor: getColor}'></i>
        <a :href="'mailto:'+ infos.personal.email" :style="{color: getLinkColor}">{{ infos.personal.email }}</a>
      </div>
      <div class="info">
        <i class="browser circular icon" :style='{color: getDarkerColor, borderColor: getColor}'></i>
        <a :href="'http://' +  infos.personal.website " :style="{color: getLinkColor}">{{ infos.personal.website }}</a>
      </div>
    </div>

    <div class="segment" id="sprachen">
      <div class="subtitle">
        <div class="ui divider"></div>
        <h2>{{ infos.languages.name }}</h2>
        <div class="ui divider"></div>
      </div>
      <div v-for="(language, key, index) in infos.languages.data"
           class="info" :key="language.id">
        <span><b>{{ language.name }}</b></span>
        <span>{{ language.competence }}</span>
    </div>

    <div class="segment" id="kenntnisse">
      <div class="subtitle">
        <div class="ui divider"></div>
        <h2>{{ infos.skills.name }}</h2>
        <div class="ui divider"></div>
      </div>
      <div v-for="(skillCateg, index) in infos.skills.data" :key="skillCateg.id">
        <div v-for="skill in skillCateg.data"
          class="info" :key="skill.id">
          <span><b>{{ skill.name }}</b></span>
          <rating :count='skill.skillrating' :iconname="skill.icon" :color="getDarkerColor"></rating>
        </div>
        <div class="ui divider" v-if="index < infos.skills.data.length -1"></div>
      </div>
    </div>
    <div class="segment" id="hobbies">
      <div class="subtitle">
        <div class="ui divider"></div>
        <h2>{{infos.hobbies.name}}</h2>
        <div class="ui divider"></div>
      </div>
      <div class="info" v-for="hobby in infos.hobbies.data" :key="hobby.id">
        <b>{{hobby.name}}</b>
      </div>
    </div>
    <div class="page-break"></div>

    <div class="segment" id="links">
      <div>
        <div class="ui divider"></div>
        <h2>{{ infos.links.name }}</h2>
        <div class="ui divider"></div>
      </div>
      <div v-for="link in infos.links.data" class="info" :key="link.id">
        <i :class="link.icon + ' circular icon'" :style='{color: getDarkerColor, borderColor: getColor}'></i>
        <a :href="'http://www.' + link.link " :style="{color: getLinkColor}">{{ link.link }}</a>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
  import Rating from '@/components/Rating/Rating'
  import { mapGetters, mapState } from 'vuex'

  export default {
    name: 'info-side',
    props: [],
    components: {
      rating: Rating
    },
    computed: {
      ...mapGetters(['getColor', 'getDarkerColor', 'getLinkColor']),
      ...mapState({
        infos: state => state.resume.info
      })
    }
  }
</script>
<style lang="sass" scoped="">
  .print
    display: none
  #personal
    margin-top: 15px
    text-align: right
    padding-top: 15px
  #left
    padding: 30px
    color: #eee
    min-height: 100%

    .ui.divider
      border-color: #EEEEEE
      border-width: 1px
      border-bottom-width: 0
      opacity: 0.25
      &:first-child
        display: none
    h1
      margin-top: 0
      text-align: left

    i.circular.icon
      background: #eee
    a
      &.centered
        position: relative
        color: #fff !important
        padding-bottom: 0
        display: block
        width: 100%
        margin-bottom: 30px
        & > *
          position: relative
          z-index: 10
        .before
          position: absolute
          box-sizing: content-box
          width: 100%
          height: 100%
          padding: 30px
          left: -30px
          top: -30px
  @media print
    #app:not(.development)
      #left
        #personal
          padding-top: 0
        .print
          display: block
          border-width: 1.5px !important
        background: #ebebeb !important
        color: #292929 !important
        h1
          color: black
        a
          color: #292929 !important
          .before
            background: #ebebeb !important
        .circular.icon
          color: #292929 !important
          border-color: #292929 !important
        .ui.divider
          border-color: #292929 !important
</style>
