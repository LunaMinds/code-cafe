const app = require('./server')

const { port } = require('./config')

app.listen(port, () => {
	console.log(`Server started on port: ${port}`)
})
