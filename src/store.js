import Vue from "vue";
import Vuex from "vuex";
import Color from "color";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: localStorage.getItem("state")
    ? JSON.parse(localStorage.getItem("state"))
    : {
        style: {
          color: Color("#3a7371"),
          baseColor: Color("#3a7371"),
          reverse: true
        },
        resume: {
          info: {
            personal: {
              name: "Joshua Menke",
              birthday: "13.10.1994",
              street: "Kortumstr. 30",
              city: "Bochum",
              zip: "44787",
              country: "Germany",
              mobile: 4917660890700,
              mobileText: "+49 176 - 60 89 0700",
              email: "kontakt@joshuamenke.de",
              website: "joshuamenke.de"
            },
            languages: {
              name: "Sprachen",
              data: [
                { id: 1, name: "Deutsch", competence: "Muttersprache" },
                { id: 2, name: "Englisch", competence: "Fließend" }
              ]
            },
            skills: {
              name: "Kenntnisse",
              data: [
                {
                  id: 1,
                  name: "programming languages",
                  data: [
                    {
                      id: 1,
                      name: "Python",
                      skillrating: 4,
                      icon: "python"
                    },
                    {
                      id: 2,
                      name: "Java",
                      skillrating: 2,
                      icon: "java"
                    },
                    {
                      id: 3,
                      name: "JavaScript",
                      skillrating: 4,
                      icon: "javascript"
                    },
                    {
                      id: 4,
                      name: "HTML",
                      skillrating: 4,
                      icon: "html"
                    },
                    {
                      id: 5,
                      name: "CSS",
                      skillrating: 3,
                      icon: "css3"
                    }
                  ]
                },
                {
                  id: 2,
                  name: "office skills",
                  data: [
                    {
                      id: 1,
                      name: "MS Office",
                      skillrating: 4,
                      icon: "office"
                    },
                    {
                      id: 2,
                      name: "Linux",
                      skillrating: 3,
                      icon: "linux"
                    }
                  ]
                }
              ]
            },
            hobbies: {
              name: "Interessen & Hobbies",
              data: [
                { id: 1, name: "Computer / Programmieren" },
                { id: 2, name: "Elektronische Musik" },
                { id: 3, name: "Kochen" }
              ]
            },
            links: {
              name: "Links",
              data: [
                {
                  id: 1,
                  name: "Github",
                  link: "github.com/Joshkop",
                  icon: "github"
                },
                {
                  id: 2,
                  name: "LinkedIn",
                  link: "linkedin.com/in/Joshkop",
                  icon: "linkedin"
                },
                {
                  id: 3,
                  name: "Facebook",
                  link: "facebook.com/Joshkop",
                  icon: "facebook"
                },
                {
                  id: 4,
                  name: "Twitter",
                  link: "twitter.com/_Joshkop",
                  icon: "twitter"
                }
              ]
            }
          },
          experience: {
            jobs: {
              name: "Berufserfahrung",
              id: 1,
              data: [
                {
                  id: 1,
                  show: true,
                  name: "Stellvertretender Stationsleiter",
                  time: "03/2018 - laufend",
                  institution: `Aral Tankstelle, Hernerstr. 403 Bochum`,
                  text: `<ul>
                            <li>Vertretung des Stationsleiters im Falle dessen Abwesenheit
                            <ul>
                              <li>
                                Bestellen von Waren und Verbrauchsgütern
                              </li>
                              <li>
                                Führen von Bewerbungsgesprächen bei Personalbedarf
                              </li>
                            </ul>
                            </li>
                            <li>Einarbeitung neuer Mitarbeiter</li>
                            <li>Aufgabenverteilung und generelle Führung der Mitarbeiter
                            <li>Warenlieferung: Annahme, Kontrolle, Verräumung sowie Wareneingänge im WWS</li>
                            <li>Einteilung der Schichten nach Bedarfs- und Personalplanung</li>
                          </ul>`
                },
                {
                  id: 2,
                  show: true,
                  name: "Tankstellenmitarbeiter",
                  time: "07/2017 - 03/2018",
                  institution: `Aral Tankstelle, Hernerstr. 403 Bochum`,
                  text: `<ul>
<li>Generelle Tätigkeiten im Bereich Kassieren und Umgang mit Kunden</li>
<li>Zubereitung von belegten Speisen</li>
<li> Instandhaltung des Verkaufsraums</li>
</ul>`
                },
                {
                  id: 3,
                  show: true,
                  name: "Programmierer und Datenerfasser",
                  institution: "Fachverlag für Verbraucherinformationen",
                  time: "08/2015 - 01/2017",
                  text: `<ul>
<li>Programmierung von Datenverarbeitungsskripts, Crawlern zur Datensammlung und weiteren Automatisierungshilfen</li>
<li>Entwicklung einer umfangreichen Eingabemaske für Produktdaten mit automatisierter Datensammlung von Amazon</li>
</ul>`
                },
                {
                  id: 4,
                  show: false,
                  name: "Imbissverkäufer",
                  institution: "Bratwursthaus GmbH & Co. KG",
                  time: "08/2015 - 01/2017",
                  text:
                    "Verkauf und Zubereitung von Imbissspeisen im Bratwursthaus direkt im Bermuda3eck in Bochum."
                },
                {
                  id: 5,
                  show: true,
                  name: "Leiter der Technik AG",
                  institution: "Grundschule Bochum Westenfeld",
                  time: "04/2013 - 02/2014",
                  text: `<ul>
<li>Grundschülern die Welt der Technik vermitteln</li>
<li>Durchführung und Erläuterung von Experimenten</li>
<li>pädagogische Betreuung der Schüler</li>
</ul>`
                },
                {
                  id: 6,
                  show: true,
                  name: "Eis- & Bierverkäufer",
                  institution:
                    "Edmund Goebgens Stadion- und Veranstaltungsservice GmbH",
                  time: "03/2012 - 06/2012",
                  text:
                    "Verkauf von Eis und Bier in Stadien wie der Veltins Arena in Gelsenkirchen oder der Lanxess Arena in Köln. Dabei hauptsächlich im Umgang mit einem Bauchladen zwischen den Sitzreihen."
                },
                {
                  id: 7,
                  show: true,
                  name: "Praktikum im Bereich IT",
                  institution: "Faber Datentechnik",
                  time: "11/2011 - 11/2011",
                  text: `<ul>
<li>Zweiwöchiges Praktikum im Bereich Hardware</li>
<li>Montage und Installation von Computern</li>
<li>Reparaturarbeiten und Fehleranalysen</li>`
                },
                {
                  id: 8,
                  show: true,
                  name: "Praktikum im Bereich IT",
                  institution: "DOGEWO21, Dortmund",
                  time: "02/2010 - 02/2010",
                  text: `<ul>
<li>Einwöchiges Praktikum im Bereich Software</li>
<li>Erstellen von Excel-Tabellen</li>
<li>Unterstützung des IT-Supports vor Ort</li>
</ul>`
                }
              ]
            },
            education: {
              id: 2,
              name: "Bildungsweg",
              data: [
                {
                  id: 1,
                  show: true,
                  name: "Ausbildung zum Kaufmann im Einzelhandel",
                  institution: "Louis-Baare-Berufskolleg; IHK Bochum",
                  time: "09/2018 - 01/2020",
                  text: `Abschlussnoten:
                      <ul>
                        <li>Berufsschule: 1,9</li>
                        <li>IHK: 2</li>
                      </ul>
                  `
                },
                {
                  id: 2,
                  show: true,
                  name: "Bachelor of Science (B.Sc.), Wirtschaftsinformatik",
                  institution: "Universität Duisburg-Essen, Standort Essen",
                  time: "10/2014 - 10/2015",
                  text: "Ohne Abschluss"
                },
                {
                  id: 3,
                  show: true,
                  name: "Abitur",
                  institution: "Hellwegschule, Bochum",
                  time: "02/2010 - 05/2014",
                  text: `Prüfungsfächer
                    <ul class="colto">
                    <li>Sozialwissenschaften LK</li>
                    <li>Englisch GK</li>
                    <li>Mathe LK</li>
                    <li>Technik GK mündlich</li>
</ul>Abschlussnote: 2,8`
                },
                {
                  id: 4,
                  show: true,
                  name: "Gymnasium",
                  institution: "Internatsschule Schloss Neubeuern, Bayern",
                  time: "09/2005 - 02/2010"
                }
              ]
            }
          }
        }
      },
  getters: {
    getColor: state => {
      return state.style.color.string();
    },
    getLinkColor: state => {
      return state.style.color
        .lighten(0.7)
        .saturate(1)
        .string();
    },
    getDarkerColor: state => {
      return state.style.color.darken(0.3).string();
    },
    getFlexDirection: state => {
      return state.style.reverse ? "row-reverse" : "row";
    },
    getNodeEnv: state => {
      return process.env.NODE_ENV;
    }
  },
  mutations: {
    setColor(state, color) {
      state.style.color = Color(color);
    },
    setBaseColor(state) {
      state.style.color = Color(state.style.baseColor);
    },
    switchFlexDirection(state) {
      state.style.reverse = !state.style.reverse;
    }
  }
});

export default store;
