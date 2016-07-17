import React from 'react'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import UIProvider from 'material-ui/styles/MuiThemeProvider'

injectTapEventPlugin()

import Home from './Home/index.jsx'
const entry = <UIProvider><Home /></UIProvider>

render(entry, document.getElementById('app'))
