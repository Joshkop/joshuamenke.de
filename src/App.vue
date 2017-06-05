<template>
  <div id="app">
    <i class="exchange circular icon" v-on:click="right = !right"></i>
    <icon name="color" v-bind:style="{color: compBasecolor.string()}" scale="4" id="colorpicker" @click.native="picker = !picker"></icon>
    <div id="slider" v-if="picker">
      <slider-picker v-model="color"></slider-picker>
    </div>

    <div id="content" v-bind:class="{right: this.right}">
      <div id="left" v-bind:style="{background: compBasecolor.string()}">

        <a href="/" class="centered">
          <h1>Joshua Menke</h1>
          <img class="ui small image centered" src="https://unsplash.it/200" alt="Joshua Menke">
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
            <div class="rating">
              <icon name="python" scale="1.6" style="color: #eee;"></icon>
              <icon name="python" scale="1.6" style="color: #eee;"></icon>
              <icon name="python" scale="1.6" style="color: #eee;"></icon>
              <icon name="python" scale="1.6" style="color: #eee;"></icon>
              <icon name="python" scale="1.6" style="color: darkgreen;"></icon>
            </div>
          </div>
          <div class="info">
            <span><b>Java</b></span>
            <div class="rating">
              <icon name="java" scale="1.6" style="color: #eee"></icon>
              <icon name="java" scale="1.6" style="color: #eee"></icon>
              <icon name="java" scale="1.6" style="color: darkgreen"></icon>
              <icon name="java" scale="1.6" style="color: darkgreen"></icon>
              <icon name="java" scale="1.6" style="color: darkgreen"></icon>
            </div>
          </div>
          <div class="info">
            <span><b>JavaScript</b></span>
            <div class="rating">
              <icon name="javascript" scale="1.6" style="color: #eee"></icon>
              <icon name="javascript" scale="1.6" style="color: #eee"></icon>
              <icon name="javascript" scale="1.6" style="color: #eee"></icon>
              <icon name="javascript" scale="1.6" style="color: #eee"></icon>
              <icon name="javascript" scale="1.6" style="colo.string()r: darkgreen"></icon>
            </div>
          </div>
          <div class="info">
            <span><b>HTML</b></span>
            <div class="rating">
              <icon name="html" scale="1.6" style="color: #eee"></icon>
              <icon name="html" scale="1.6" style="color: #eee"></icon>
              <icon name="html" scale="1.6" style="color: #eee"></icon>
              <icon name="html" scale="1.6" style="color: #eee"></icon>
              <icon name="html" scale="1.6" style="color: darkgreen"></icon>
            </div>
          </div>
          <div class="info">
            <span><b>CSS</b></span>
            <div class="rating">
              <icon name="css3" scale="1.6" style="color: #eee"></icon>
              <icon name="css3" scale="1.6" style="color: #eee"></icon>
              <icon name="css3" scale="1.6" style="color: #eee"></icon>
              <icon name="css3" scale="1.6" style="color: darkgreen"></icon>
              <icon name="css3" scale="1.6" style="color: darkgreen"></icon>
            </div>
          </div>
          <div class="ui divider"></div>
          <div class="info">
            <span><b>MS Office</b></span>
            <div class="rating">
              <icon name="office" scale="1.6" style="color: #eee"></icon>
              <icon name="office" scale="1.6" style="color: #eee"></icon>
              <icon name="office" scale="1.6" style="color: #eee"></icon>
              <icon name="office" scale="1.6" style="color: #eee"></icon>
              <icon name="office" scale="1.6" style="color: darkgreen"></icon>
            </div>
          </div>
          <div class="info">
            <span><b>Linux</b></span>
            <div class="rating">
              <icon name="linux" scale="1.6" style="color: #eee"></icon>
              <icon name="linux" scale="1.6" style="color: #eee"></icon>
              <icon name="linux" scale="1.6" style="color: #eee"></icon>
              <icon name="linux" scale="1.6" style="color: darkgreen"></icon>
              <icon name="linux" scale="1.6" style="color: darkgreen"></icon>

            </div>
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

          <div class="beruf">
            <h3>Programmierer und Datenerfasser</h3>
            <div class="info bold italic">
              <span>Fachverlag für Verbraucherinformationen</span>
              <span>08/2015 - 01/2017</span>
            </div>
            <div class="text">
              Sammeln und bearbeiten von Daten sowie die Programmierung von Datenverarbeitungsskripts und Eingabeoberflächen.

            </div>
          </div>
          <div class="beruf">
            <h3>Technik AG</h3>
            <div class="info bold italic">
              <span>Grundschule Bochum Westenfeld</span>
              <span>04/2013 - 02/2014</span>
            </div>
            <div class="text">Mitleitung der Technik AG, in der Grundschülern die Welt der Technik
näher gebracht werden soll. Dabei unterrichte Ich mit einem weiteren Schüler
diese Grundschüler und lies diese Experimente unter unserer Beobachtung
und Leitung durchführen.

          </div>
          </div>
          <div class="beruf">
            <h3>Verkäufer</h3>
            <div class="info bold italic">
              <span>Edmund Goebgens Stadion- und Veranstaltungsservice GmbH</span>
              <span>03/2012 - 06/2012</span>
            </div>
            <div class="text">
              Verkauf von Lebensmitteln, vor allem Eis und Bier, in Stadien wie der Veltins Arena in Gelsenkirchen oder Lanxess Arena in Köln. Dabei verkaufte ich hauptsächlich in den Sitzplatzreihen mit Bauchladen.

            </div>
          </div>
          <div class="beruf">
            <h3>Praktikum im Bereich IT</h3>
            <div class="info bold italic">
              <span>Faber Datentechnik</span>
              <span>11/2011 - 11/2011</span>
            </div>
            <div class="text">Praktikum vom 07.11 – 18.11.11 im Bereich IT. Dabei vor allem Einführung in
die Welt der Hardware und Montage von Computern.

          </div>
          </div>
          <div class="beruf">
            <h3>Praktikum im Bereich IT</h3>
            <div class="info bold italic">
              <span>DOGEWO21</span>
              <span>02/2010 - 02/2010</span>
            </div>
            <div class="text">Praktikum vom 22.02 – 26.02.10 im Bereich IT. Dabei vor allem Software
Lösungen und Fehlerbehebung.

          </div>
          </div>
        </div>
        <div class="segment" id="bildung">
          <div class="subtitle">
            <div class="ui divider"></div>
            <h2>Bildungsweg</h2>
            <div class="ui divider"></div>
          </div>

          <div class="bildung">
            <h3>Bachelor of Science (B.Sc.), Wirtschaftsinformatik</h3>
            <div class="info bold italic">
              <span>Universität Duisburg-Essen, Standort Essen</span>
              <span>10/2014 - 02/2017</span>
            </div>
            <div class="text">Vorzeitig Beendet.</div>
          </div>
          <div class="bildung">
            <h3>Abitur</h3>
            <div class="info bold italic">
              <span>Hellwegschule Bochum</span>
              <span>02/2010 - 05/2014</span>
            </div>
            <div class="text">Abschlussnote: 2,8</div>
          </div>
          <div class="bildung">
            <h3>Gymnasium</h3>
            <div class="info bold italic">
              <span>Internatsschule Schloss Neubeuern, Bayern</span>
              <span>09/2005 - 02/2010</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Color  from 'color'
  const basecolor = Color.hsl([120,33,34])
  export default {
    name: 'app',
    data() {
      return {
        right: true,
        picker: false,

        color: {
            hex: basecolor.hex(),
            hsl: basecolor.hsl().object(),
            hsv: basecolor.hsv().object(),
            rgba: basecolor.rgb().object(),
            a: 1
        }
      }
    },

    computed: {
          compBasecolor: function () {
            return Color(this.color.hex)
          },
          darkerbase: function () {
              return Color.hsl([this.color.hsl.h, this.color.hsl.l+0.15, this.color.hsl.l-0.14])
          },
          linkcolor: function ()  {
              return Color.hsl([this.color.hsl.h, this.color.hsl.l +0.42, this.color.hsl.l-0.27])
          }
      }

  }


</script>

<style lang="sass">
  $basecolor:  hsl(120,33,34)
  $darkerbase: hsl(hue($basecolor),saturation($basecolor)+15, lightness($basecolor)-14)
  $linkcolor: hsl(hue($basecolor),saturation($basecolor)+42, lightness($basecolor)+27)
  #content
    display: flex
    justify-content: center
    /*min-height: 100%*/
    padding: 30px
  #personal
    margin-top: 15px
    text-align: right
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
    display: flex
    flex-direction: column
    .ui.divider
      border-color: #EEEEEE
      border-width: 1px
      border-bottom-width: 0
      opacity: 0.25
      &:first-child
        display: none

    i.circular.icon
      border-color: $darkerbase
      background: #eee
      color: $darkerbase
    a
      color: $linkcolor
      &.centered
        position: relative
        color: #fff
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
        &:before
          content: ""
          position: absolute
          box-sizing: content-box
          background: $darkerbase
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
    display: flex
    flex-direction: column
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
  .rating
    display: flex
    justify-content: space-around
    img
      margin-left: 2px
    .svg-icon
      margin-right: 3px
  .inverted
    filter: invert(100%)
  h2
    margin-top: 10px !important
  h3
    margin-bottom: 5px !important
    color: $basecolor
  .beruf, .bildung
    border-left: solid 1px $basecolor
    padding-bottom: 20px
    padding-left: 10px
    position: relative
    &:before
      content: ''
      height: 10px
      width: 10px
      position: absolute
      background: $basecolor
      border-radius: 50%
      left: 0
      top: 0
      border: solid 5px whitesmoke
      box-sizing: content-box
      transform: translate(-50%, 0px)
      margin-left: -1px
  @media print
    #app
      padding: 0
    .segment, .subtitle
      page-break-inside: avoid
      position: relative
      page-break-before: auto
      page-break-after: auto
      /*overflow: auto*/
    /*#bildung*/
      /*margin-top: 230px*/
    /*#hobbies*/
      /*margin-top: 75px*/
    #right
      background: transparent
    .beruf, .bildung
      &:before
        border-color: white




</style>

