import {play} from 'vue-play'

import Job from './Job'
import Color from 'color'

play('Job')
  .add('Sample', h => h(Job, {
    props: {
      title: 'Test Title',
      subtitle: 'Test Subtitle',
      time: '10/2017 - 11/2017',
      color: Color('red'),
      text: 'Mitleitung der Technik AG, in der Grundschülern die Welt der Technik näher gebracht werden soll. Dabei vor allem Helfen beim Durchführen von Experimenten, Erklären auftretender naturwissenschaftlicher Phänomene und Aufpassen auf die Schüler.'
    }
  }))
