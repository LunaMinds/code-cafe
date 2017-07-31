import { shallow } from 'enzyme'
import React from 'react'

import { Login } from '../Login'

describe('<Login>', () => {
	let props
	const setup = () => shallow(<Login {...props} />)
	beforeEach(() => {
		props = {

		}
	})

	it('works', () => {
		expect(setup).not.toThrow()
	})
})
