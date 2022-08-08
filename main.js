import './style.css'
import { locale } from './locales'

document.querySelector('#app').innerHTML = `
  <div id="container">
    <h1>${locale.welcome}</h1>
    <h2>${locale.start}</h2>
  </div>

  <h2 class="level"></h2>
  <div class="tip"></div>
`

import('./game/input-box')