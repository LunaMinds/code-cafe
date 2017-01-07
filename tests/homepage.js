const app = require('../server')

const port = 3000

exports['It prints "code-cafe" on the homepage'] = (browser) => {
	const server = app.listen(port)

	browser.url(`http://localhost:${port}`, () => {
		browser.expect.element('h1').text.to.match(/code(-| )cafe/i)
		browser.end()
		server.close()
	})
}
