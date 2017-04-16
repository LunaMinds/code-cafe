import UIProvider from 'material-ui/styles/MuiThemeProvider'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import logger from 'redux-logger'
import React from 'react'

import reduxer from '../Reducers'

const store = createStore(
	reduxer,
	applyMiddleware(logger)
)

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
