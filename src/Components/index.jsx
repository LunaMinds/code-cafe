import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import UIProvider from 'material-ui/styles/MuiThemeProvider'

import reduxer from '../Reducers'

const store = createStore(reduxer)

/**
 * @see https://github.com/callemall/material-ui#react-tap-event-plugin
 */
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import Home from './Home/index.jsx'
const entry = (
  <Provider store={store}>
    <UIProvider>
      <Home />
    </UIProvider>
  </Provider>
)

render(entry, document.getElementById('app'))
