<template>
  <div id="app">
    <i class="exchange circular icon" v-on:click="right = !right"></i>
    <icon name="color" v-bind:style="{color: compBasecolor.string()}" scale="4" id="colorpicker"
          @click.native="picker = !picker"></icon>
    <div id="slider" v-if="picker">
      <slider-picker v-model="color"></slider-picker>
    </div>

    <div id="content" :class="{right: this.right}">
      <div id="left" :style="{background: compBasecolor.string()}">

        <a href="/" class="centered">
          <span class="before" :style="{background: compBasecolor.darken(0.3).string()}"></span>
          <h1>Joshua Menke</h1>
          <img class="ui small image centered" src="https://unsplash.it/200" alt="Joshua Menke" width="200px" height="200px">
        </a>


        <div class="segment" id="personal">
          <div class="subtitle" hidden>
            <div class="ui divider"></div>
            <h2>Persönliches</h2>
            <div class="ui divider"></div>
          </div>
          <div class="info">
            <i class="birthday circular icon"></i>
            <div>Geb. 13.10.1994</div>
          </div>
          <div class="info">
            <i class="home circular icon"></i>
            <a href="https://goo.gl/maps/JVHtcFxZz4q">
              <div>Kortumstr. 30</div>
              <div>44787 Bochum</div>
            </a>
          </div>
          <div class="info">
            <i class="text telephone circular icon"></i>
            <a href="tel:+4917660890700">+49 176 - 60 89 0700</a>
          </div>
          <div class="info">
            <i class="mail circular icon"></i>
            <a href="mailto:kontakt@joshuamenke.de">kontakt@joshuamenke.de</a>
          </div>
          <div class="info">
            <i class="browser circular icon"></i>
            <a href="http://joshuamenke.de">joshuamenke.de</a>
          </div>
        </div>

        <div class="segment" id="sprachen">
          <div class="subtitle">
            <div class="ui divider"></div>
            <h2>Sprachen</h2>
            <div class="ui divider"></div>
          </div>
          <div class="info">
            <span><b>Deutsch</b></span>
            <span>Muttersprache</span>
          </div>
          <div class="info">
            <span><b>Englisch</b></span>
            <span>Fließend</span>
          </div>
        </div>

        <div class="segment" id="kenntnisse">
          <div class="subtitle">
            <div class="ui divider"></div>
            <h2>Kenntnisse</h2>
            <div class="ui divider"></div>
          </div>
          <div class="info">
            <span><b>Python</b></span>
            <rating :count=4 iconname="python" :color="compBasecolor"></rating>
          </div>
          <div class="info">
            <span><b>Java</b></span>
            <div class="rating">
              <rating :count=2 iconname="java" :color="compBasecolor"></rating>
            </div>
          </div>
          <div class="info">
            <span><b>JavaScript</b></span>
            <rating :count=4 iconname="javascript" :color="compBasecolor"></rating>
          </div>
          <div class="info">
            <span><b>HTML</b></span>
            <rating :count=4 iconname="html" :color="compBasecolor"></rating>
          </div>
          <div class="info">
            <span><b>CSS</b></span>
            <rating :count=3 iconname="css3" :color="compBasecolor"></rating>
          </div>
          <div class="ui divider"></div>
          <div class="info">
            <span><b>MS Office</b></span>
            <rating :count=4 iconname="office" :color="compBasecolor"></rating>
          </div>
          <div class="info">
            <span><b>Linux</b></span>
            <rating :count=3 iconname="linux" :color="compBasecolor"></rating>
          </div>
        </div>
        <div class="page-break"></div>
        <div class="segment" id="hobbies">
          <div class="subtitle">
            <div class="ui divider"></div>
            <h2>Interessen & Hobbies</h2>
            <div class="ui divider"></div>
          </div>
          <div class="info"><b>Computer / Programmieren</b></div>
          <div class="info"><b>Elektronische Musik</b></div>
          <div class="info"><b>Kochen</b></div>
        </div>

        <div class="segment" id="links">
          <div>
            <div class="ui divider"></div>
            <h2>Links</h2>
            <div class="ui divider"></div>
          </div>
          <div class="info">
            <i class="github circular icon"></i>
            <a href="http://www.github.com/Joshkop">github.com/Joshkop</a>
          </div>
          <div class="info">
            <i class="linkedin circular icon"></i>
            <a href="http://www.linkedin.com/in/Joshkop">linkedin.com/in/Joshkop</a>
          </div>
          <div class="info">
            <i class="facebook circular icon"></i>
            <a href="https://www.facebook.com/Joshkop">facebook.com/Joshkop</a>
          </div>
          <div class="info">
            <i class="twitter circular icon"></i>
            <a href="https://www.twitter.com/_Joshkop">twitter.com/_Joshkop</a>
          </div>
        </div>
      </div>
      <div id="right">
        <div class="segment" id="berufe">
          <div class="subtitle">
            <div class="ui divider"></div>
            <h2>Berufserfahrung</h2>
            <div class="ui divider"></div>
          </div>
          <job v-for="(job, index) in jobs" :title="job.title" :subtitle="job.subtitle" :time="job.time" :key="job.id"
               :index="index" :text="job.text" :color="compBasecolor"></job>
        </div>
        <div class="page-break"></div>
        <div class="segment" id="bildung">
          <div class="subtitle">
            <div class="ui divider"></div>
            <h2>Bildungsweg</h2>
            <div class="ui divider"></div>
          </div>
          <job v-for="(job, index) in education" :title="job.title" :subtitle="job.subtitle" :time="job.time"
               :key="job.id" :index="index" :text="job.text" :color="compBasecolor"></job>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Color  from 'color'
  import Job from 'components/Job'
  import Rating from 'components/Rating'
  let basecolor = Color.hsl([120, 33, 34])
  let rightBool = true
  export default {
    name: 'app',
    components: {
      job: Job,
      rating: Rating,
    },

    data() {
      return {
        right: rightBool,
        picker: false,
        color: {
          hex: basecolor.hex(),
          hsl: basecolor.hsl().object(),
          hsv: basecolor.hsv().object(),
          rgba: basecolor.rgb().object(),
          a: 1
        },
        jobs: [
          {
            id: 1,
            title: "Programmierer und Datenerfasser",
            subtitle: "Fachverlag für Verbraucherinformationen",
            time: "08/2015 - 01/2017",
            text: "Sammeln und bearbeiten von Daten sowie die Programmierung von Datenverarbeitungsskripts und Eingabeoberflächen."
          },
          {
            id: 2,
            title: "Technik AG",
            subtitle: "Grundschule Bochum Westenfeld",
            time: "04/2013 - 02/2014",
            text: "Mitleitung der Technik AG, in der Grundschülern die Welt der Technik näher gebracht werden soll. Dabei unterrichte Ich mit einem weiteren Schüler diese Grundschüler und lies diese Experimente unter unserer Beobachtung und Leitung durchführen."
          },
          {
            id: 3,
            title: "Verkäufer",
            subtitle: "Edmund Goebgens Stadion- und Veranstaltungsservice GmbH",
            time: "03/2012 - 06/2012",
            text: "Verkauf von Lebensmitteln, vor allem Eis und Bier, in Stadien wie der Veltins Arena in Gelsenkirchen oder Lanxess Arena in Köln. Dabei verkaufte ich hauptsächlich in den Sitzplatzreihen mit Bauchladen."
          },
          {
            id: 4,
            title: "Praktikum im Bereich IT",
            subtitle: "Faber Datentechnik",
            time: "11/2011 - 11/2011",
            text: "Praktikum vom 07.11 – 18.11.11 im Bereich IT. Dabei vor allem Einführung in die Welt der Hardware und Montage von Computern."
          },
          {
            id: 5,
            title: "Praktikum im Bereich IT",
            subtitle: "DOGEWO21, Dortmund",
            time: "02/2010 - 02/2010",
            text: "Praktikum vom 22.02 – 26.02.10 im Bereich IT. Dabei vor allem Software Lösungen und Fehlerbehebung."
          },
        ],
        education: [
          {
            id: 1,
            title: "Bachelor of Science (B.Sc.), Wirtschaftsinformatik",
            subtitle: "Universität Duisburg-Essen, Standort Essen",
            time: "10/2014 - 02/2017",
          },
          {
            id: 2,
            title: "Abitur",
            subtitle: "Hellwegschule, Bochum",
            time: "02/2010 - 05/2014",
            text: "Abschlussnote: 2,8"
          },
          {
            id: 3,
            title: "Gymnasium",
            subtitle: "Internatsschule Schloss Neubeuern, Bayern",
            time: "09/2005 - 02/2010",
          },
        ]
      }
    },
    beforeCreate() {
      if (localStorage.getItem('color')) {
        basecolor = Color(localStorage.getItem('color'))
      }
      else {
        basecolor = Color.hsl([120, 33, 34])
      }
      if (localStorage.getItem('right')) {
        rightBool = (localStorage.getItem('right') === "true")
      }
      else {
        rightBool = true
      }
      console.log("create - " + basecolor)
      window.onbeforeunload = () => {
        console.log("destroy - " + this.color.hex)
        localStorage.setItem('color', this.color.hex)
        localStorage.setItem('right', this.right)
      }
    },
    beforeDestroy() {
      console.log("destroy - " + this.color.hex)
      localStorage.setItem('color', this.color.hex)
      localStorage.setItem('right', this.right)
    },
    computed: {
      compBasecolor: function () {
        [].slice.call(document.getElementsByTagName("a")).forEach((elem) => {
          elem.style.color = Color(this.color.hex).lighten(0.7).saturate(1).string()
        });
        [].slice.call(document.querySelectorAll("i.circular.icon")).forEach((elem) => {
          elem.style.color = Color(this.color.hex).darken(0.3).string();
          elem.style.borderColor = Color(this.color.hex).darken(0.3).string();
        })
        return Color(this.color.hex)
      },
    },
    mounted() {
      [].slice.call(document.getElementsByTagName("a")).forEach((elem) => {
        elem.style.color = Color(this.color.hex).lighten(0.7).saturate(1).string()
      });
      [].slice.call(document.querySelectorAll("i.circular.icon")).forEach((elem) => {
        elem.style.color = Color(this.color.hex).darken(0.3).string();
        elem.style.borderColor = Color(this.color.hex).darken(0.3).string();
      })
    }

  }


</script>

<style lang="sass">
  $basecolor: hsl(120, 33, 34)
  $darkerbase: hsl(hue($basecolor), saturation($basecolor)+15, lightness($basecolor)-14)
  $linkcolor: hsl(hue($basecolor), saturation($basecolor)+42, lightness($basecolor)+27)
  #content
    display: flex
    justify-content: center
    /*min-height: 100%*/
    padding: 30px

  #personal
    margin-top: 15px
    text-align: right
    padding-top: 15px

  #colorpicker
    position: fixed
    left: 40px
    top: 6px

  #slider
    position: fixed
    top: 50px
    left: 10px

  .exchange
    position: fixed
    left: 10px
    top: 10px

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
    i.circular.icon
      border-color: $darkerbase
      background: #eee
      color: $darkerbase
    a
      &.centered
        position: relative
        color: #fff !important
        padding-bottom: 15px
        display: block
        width: 100%
        margin-bottom: 30px
        img
          border-radius: 5px
          box-shadow: 0 8px 6px -6px black
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

  @media print
    #content
      padding: 0
    /*overflow: auto*/
    /*#bildung*/
      /*margin-top: 230px*/
    /*#hobbies*/
      /*margin-top: 75px*/
    .page-break
      display: block
      page-break-before: always
      position: relative

    #right
      background: transparent
    #right, #left
      position: relative
    #app > *:not(#content)
      display: none
    #hobbies
      padding-top: 5px


</style>

