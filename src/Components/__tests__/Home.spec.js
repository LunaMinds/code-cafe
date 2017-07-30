import { shallow } from 'enzyme'
import React from 'react'

import Home from '../Home'

describe('<Home>', () => {
	let props
	const setup = () => shallow(<Home {...props} />)

	beforeEach(() => {
		props = {

		}
	})

	it('is a component', () => {
		expect(setup).not.toThrow()
	})
})
