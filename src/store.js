import Vue from 'vue'
import Vuex from 'vuex'
import Color from 'color'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: (localStorage.getItem('state')) ? JSON.parse(localStorage.getItem('state')) : {
    style: {
      color: Color('#3a733a'),
      baseColor: Color('#3a733a'),
      reverse: true
    },
    resume: {
      info: {
        personal: {
          name: 'Joshua Menke',
          birthday: '13.10.1994',
          street: 'Kortumstr. 30',
          city: 'Bochum',
          zip: '44787',
          country: 'Germany',
          mobile: 4917660890700,
          mobileText: '+49 176 - 60 89 0700',
          email: 'kontakt@joshuamenke.de',
          website: 'joshuamenke.de'
        },
        languages: {
          name: 'Sprachen',
          data: [
            {id: 1, name: 'Deutsch', competence: 'Muttersprache'},
            {id: 2, name: 'Englisch', competence: 'Fließend'}
          ]
        },
        skills: {
          name: 'Kenntnisse',
          data: [
            {
              id: 1,
              name: 'programming languages',
              data: [
                {
                  id: 1,
                  name: 'Python',
                  skillrating: 4,
                  icon: 'python'
                },
                {
                  id: 2,
                  name: 'Java',
                  skillrating: 2,
                  icon: 'java'
                },
                {
                  id: 3,
                  name: 'JavaScript',
                  skillrating: 4,
                  icon: 'javascript'
                },
                {
                  id: 4,
                  name: 'HTML',
                  skillrating: 4,
                  icon: 'html'
                },
                {
                  id: 5,
                  name: 'CSS',
                  skillrating: 3,
                  icon: 'css3'
                }
              ]
            },
            {
              id: 2,
              name: 'office skills',
              data: [
                {
                  id: 1,
                  name: 'MS Office',
                  skillrating: 4,
                  icon: 'office'
                },
                {
                  id: 2,
                  name: 'Linux',
                  skillrating: 3,
                  icon: 'linux'
                }
              ]
            }
          ]
        },
        hobbies: {
          name: 'Interessen & Hobbies',
          data: [
            {id: 1, name: 'Computer / Programmieren'},
            {id: 2, name: 'Elektronische Musik'},
            {id: 3, name: 'Kochen'}
          ]
        },
        links: {
          name: 'Links',
          data: [
            {
              id: 1,
              name: 'Github',
              link: 'github.com/Joshkop',
              icon: 'github'
            },
            {
              id: 2,
              name: 'LinkedIn',
              link: 'linkedin.com/in/Joshkop',
              icon: 'linkedin'
            },
            {
              id: 3,
              name: 'Facebook',
              link: 'facebook.com/Joshkop',
              icon: 'facebook'
            },
            {
              id: 4,
              name: 'Twitter',
              link: 'twitter.com/_Joshkop',
              icon: 'twitter'
            }
          ]
        }
      },
      experience: {
        jobs: {
          name: 'Berufserfahrung',
          id: 1,
          data: [
            {
              id: 1,
              name: 'Programmierer und Datenerfasser',
              institution: 'Fachverlag für Verbraucherinformationen',
              time: '08/2015 - 01/2017',
              text: 'Programmierung von Datenverarbeitungsskripts, Crawlern zur Datensammlung und weiteren Automatisierungshilfen. Des Weiteren die Entwicklung einer umfangreichen Eingabemaske für Produktdaten mit automatischer Datensammlung von Amazon und Weiterverarbeitung zu importfähigen CSV Dateien.'
            },
            {
              id: 2,
              name: 'Imbissverkäufer',
              institution: 'Bratwursthaus GmbH & Co. KG',
              time: '08/2015 - 01/2017',
              text: 'Verkauf und Zubereitung von Imbissspeisen im Bratwursthaus direkt im Bermuda3eck in Bochum.'
            },
            {
              id: 3,
              name: 'Aufseher',
              institution: 'Grundschule Bochum Westenfeld',
              time: '04/2013 - 02/2014',
              text: 'Mitleitung der Technik AG, in der Grundschülern die Welt der Technik näher gebracht werden soll. Dabei vor allem Helfen beim Durchführen von Experimenten, Erklären auftretender naturwissenschaftlicher Phänomene und Aufpassen auf die Schüler.'
            },
            {
              id: 4,
              name: 'Eis- & Bierverkäufer',
              institution: 'Edmund Goebgens Stadion- und Veranstaltungsservice GmbH',
              time: '03/2012 - 06/2012',
              text: 'Verkauf von Eis und Bier in Stadien wie der Veltins Arena in Gelsenkirchen oder der Lanxess Arena in Köln. Dabei hauptsächlich im Umgang mit einem Bauchladen zwischen den Sitzreihen.'
            },
            {
              id: 5,
              name: 'Praktikum im Bereich IT',
              institution: 'Faber Datentechnik',
              time: '11/2011 - 11/2011',
              text: 'Zweiwöchiges Praktikum im Bereich Hardware. Dabei vor allem Montage von Installation von Computern. Dazu auch kleine Reparaturarbeiten und Fehleranalysen.'
            },
            {
              id: 6,
              name: 'Praktikum im Bereich IT',
              institution: 'DOGEWO21, Dortmund',
              time: '02/2010 - 02/2010',
              text: 'Einwöchiges Praktikum im Bereich Software. In erster Linie das Erstellen von Exceltabellen und die Unterstützung des IT-Supports vor Ort.'
            }
          ]
        },
        education: {
          id: 2,
          name: 'Bildungsweg',
          data: [
            {
              id: 1,
              name: 'Bachelor of Science (B.Sc.), Wirtschaftsinformatik',
              institution: 'Universität Duisburg-Essen, Standort Essen',
              time: '10/2014 - 02/2017'
            },
            {
              id: 2,
              name: 'Abitur',
              institution: 'Hellwegschule, Bochum',
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
              name: 'Gymnasium',
              institution: 'Internatsschule Schloss Neubeuern, Bayern',
              time: '09/2005 - 02/2010'
            }
          ]
        }
      }
    }
  },
  getters: {
    getColor: state => {
      return state.style.color.string()
    },
    getLinkColor: state => {
      return state.style.color.lighten(0.7).saturate(1).string()
    },
    getDarkerColor: state => {
      return state.style.color.darken(0.3).string()
    },
    getFlexDirection: state => {
      return state.style.reverse ? 'row-reverse' : 'row'
    },
    getNodeEnv: state => {
      return process.env.NODE_ENV
    }
  },
  mutations: {
    setColor (state, color) {
      state.style.color = Color(color)
    },
    setBaseColor (state) {
      state.style.color = Color(state.style.baseColor)
    },
    switchFlexDirection (state) {
      state.style.reverse = !state.style.reverse
    }
  }
})

export default store
