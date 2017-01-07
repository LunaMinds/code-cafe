import React from 'react'
import { render } from 'react-dom'
import UIProvider from 'material-ui/styles/MuiThemeProvider'

/**
 * @see https://github.com/callemall/material-ui#react-tap-event-plugin
 */
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import Home from './Home/index.jsx'
const entry = <UIProvider><Home /></UIProvider>

render(entry, document.getElementById('app'))
