/* eslint-disable import/no-unassigned-import */

// ./play/preview.js
import './' // which is ./play/index.js
import preview from 'vue-play/preview'
import 'semantic-ui-css/semantic.min.css'

// actually render the scenarios in preview page
// when the preview page is ready
// it will tell the app interface what scenarios we have

preview()
