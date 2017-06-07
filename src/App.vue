<template>
  <div id="app">
    <i class="exchange circular icon" v-on:click="right = !right"></i>
    <icon name="color" v-bind:style="{color: compBasecolor.string()}" scale="4" id="colorpicker"
          @click.native="picker = !picker"></icon>
    <i class="erase circular icon" @click="setBaseColor()"></i>
    <div id="slider" v-if="picker">
      <slider-picker v-model="color"></slider-picker>
    </div>

    <div id="content" :class="{right: this.right}">
      <div id="left" :style="{background: compBasecolor.string()}">

        <a href="/" class="centered">
          <span class="before" :style="{background: compBasecolor.darken(0.3).string()}"></span>
          <h1>Joshua Menke</h1>
          <!--<img class="ui small image centered" src="./assets/profile.png" alt="Joshua Menke" width="150px" height="200px">-->
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
        <div class="page-break"></div>

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
  import Color from 'color'
  import Job from '@/components/Job'
  import Rating from '@/components/Rating'
  let basecolor = Color.hsl([120, 33, 34])
  let rightBool = true
  export default {
    name: 'app',
    components: {
      job: Job,
      rating: Rating
    },

    data () {
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
            title: 'Programmierer und Datenerfasser',
            subtitle: 'Fachverlag für Verbraucherinformationen',
            time: '08/2015 - 01/2017',
            text: 'Programmierung von Datenverarbeitungsskripts, Crawlern zur Datensammlung und weiteren Automatisierungshilfen. Des Weiteren die Entwicklung einer umfangreichen Eingabemaske für Produktdaten mit automatischer Datensammlung von Amazon und Weiterverarbeitung zu importfähigen CSV Dateien.'
          },
          {
            id: 1,
            title: 'Imbissverkäufer',
            subtitle: 'Bratwursthaus GmbH & Co. KG',
            time: '08/2015 - 01/2017',
            text: 'Verkauf und Zubereitung von Imbissspeisen im Bratwursthaus direkt im Bermuda3eck in Bochum.'
          },
          {
            id: 3,
            title: 'Aufseher',
            subtitle: 'Grundschule Bochum Westenfeld',
            time: '04/2013 - 02/2014',
            text: 'Mitleitung der Technik AG, in der Grundschülern die Welt der Technik näher gebracht werden soll. Dabei vor allem Helfen beim Durchführen von Experimenten, Erklären auftretender naturwissenschaftlicher Phänomene und Aufpassen auf die Schüler.'
          },
          {
            id: 4,
            title: 'Eis- & Bierverkäufer',
            subtitle: 'Edmund Goebgens Stadion- und Veranstaltungsservice GmbH',
            time: '03/2012 - 06/2012',
            text: 'Verkauf von Eis und Bier in Stadien wie der Veltins Arena in Gelsenkirchen oder der Lanxess Arena in Köln. Dabei hauptsächlich im Umgang mit einem Bauchladen zwischen den Sitzreihen.'
          },
          {
            id: 5,
            title: 'Praktikum im Bereich IT',
            subtitle: 'Faber Datentechnik',
            time: '11/2011 - 11/2011',
            text: 'Zweiwöchiges Praktikum im Bereich Hardware. Dabei vor allem Montage von Installation von Computern. Dazu auch kleine Reparaturarbeiten und Fehleranalysen.'
          },
          {
            id: 6,
            title: 'Praktikum im Bereich IT',
            subtitle: 'DOGEWO21, Dortmund',
            time: '02/2010 - 02/2010',
            text: 'Einwöchiges Praktikum im Bereich Software. In erster Linie das Erstellen von Exceltabellen und die Unterstützung des IT-Supports vor Ort.'
          }
        ],
        education: [
          {
            id: 1,
            title: 'Bachelor of Science (B.Sc.), Wirtschaftsinformatik',
            subtitle: 'Universität Duisburg-Essen, Standort Essen',
            time: '10/2014 - 02/2017'
          },
          {
            id: 2,
            title: 'Abitur',
            subtitle: 'Hellwegschule, Bochum',
            time: '02/2010 - 05/2014',
            text: `Prüfungsfächer:
                    <ul class="colto">
                    <li>Sozialwissenschaften LK</li>
                    <li>Englisch GK</li>
                    <li>Mathe LK</li>
                    <li>Technik GK mündlich</li>
</ul>Abschlussnote: 2,8`
          },
          {
            id: 3,
            title: 'Gymnasium',
            subtitle: 'Internatsschule Schloss Neubeuern, Bayern',
            time: '09/2005 - 02/2010'
          }
        ]
      }
    },
    beforeCreate () {
      if (localStorage.getItem('color')) {
        basecolor = Color(localStorage.getItem('color'))
      } else {
        basecolor = Color.hsl([120, 33, 34])
      }
      if (localStorage.getItem('right')) {
        rightBool = (localStorage.getItem('right') === 'true')
      } else {
        rightBool = true
      }
      console.log('create - ' + basecolor)
      window.onbeforeunload = () => {
        console.log('destroy - ' + this.color.hex)
        localStorage.setItem('color', this.color.hex)
        localStorage.setItem('right', this.right)
      }
    },
    beforeDestroy () {
      console.log('destroy - ' + this.color.hex)
      localStorage.setItem('color', this.color.hex)
      localStorage.setItem('right', this.right)
    },
    computed: {
      compBasecolor: function () {
        [].slice.call(document.getElementsByTagName('a')).forEach((elem) => {
          elem.style.color = Color(this.color.hex).lighten(0.7).saturate(1).string()
        });
        [].slice.call(document.querySelectorAll('i.circular.icon')).forEach((elem) => {
          elem.style.color = Color(this.color.hex).darken(0.3).string()
          elem.style.borderColor = Color(this.color.hex).darken(0.3).string()
        })
        return Color(this.color.hex)
      }
    },
    mounted () {
      [].slice.call(document.getElementsByTagName('a')).forEach((elem) => {
        elem.style.color = Color(this.color.hex).lighten(0.7).saturate(1).string()
      });
      [].slice.call(document.querySelectorAll('i.circular.icon')).forEach((elem) => {
        elem.style.color = Color(this.color.hex).darken(0.3).string()
        elem.style.borderColor = Color(this.color.hex).darken(0.3).string()
      })
    },
    methods: {
      setBaseColor: function () {
        let c = Color.hsl([120, 33, 34])
        this.color = {
          hex: c.hex(),
          hsl: c.hsl().object(),
          hsv: c.hsv().object(),
          rgba: c.rgb().object(),
          a: 1
        }
      }
    }

  }

</script>

<style lang="sass">
  .colto
    columns: 2px 2
    list-style-position: inside

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
    #app > *:not(#content)
      display: none
    #app
      width: 100%
    #content
      padding: 0
      flex-direction: column
      #left, #right
        width: 100%
    .colto
      columns: auto 1
  @media print
    #content
      padding: 0
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
    #links
      padding-top: 5px
    #left
      width: 50%
    .colto
      font-size: 0.9em

</style>
