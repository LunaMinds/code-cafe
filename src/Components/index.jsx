import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import UIProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { createStore, applyMiddleware } from 'redux'
import { render } from 'react-dom'
import logger from 'redux-logger'
import reduxer from '../Reducers'
import Login from './Login.jsx'
import Home from './Home.jsx'
import React from 'react'
import {
	createNetworkInterface,
	ApolloProvider,
	ApolloClient,
} from 'react-apollo'

import {
	BrowserRouter,
	Redirect,
	Route,
} from 'react-router-dom'

const client = new ApolloClient({
	networkInterface: createNetworkInterface({
		uri: 'https://api.graph.cool/simple/v1/cj5r6vi6wr2ow0122qppic7dq',
	}),
})

const store = createStore(
	reduxer,
	applyMiddleware(logger)
)

/**
 * @see https://github.com/callemall/material-ui#react-tap-event-plugin
 */
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

const Main = () => (
	<BrowserRouter>
		<div>
			<Route exact path="/login" component={Login}></Route>
			<Route exact path="/" component={Home}></Route>
			<Redirect exact to="/login"></Redirect>
		</div>
	</BrowserRouter>
)

const entry = (
	<ApolloProvider client={client} store={store}>
		<UIProvider muiTheme={getMuiTheme(lightBaseTheme)}>
			<Main />
		</UIProvider>
	</ApolloProvider>
)

render(entry, document.getElementById('app'))
