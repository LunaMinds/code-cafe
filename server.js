const { join } = require('path')
const express = require('express')

const { port } = require('./config')

const app = express()

const dist = join(__dirname, 'dist')
app.use(express.static(dist))

app.listen(port, () => {
	console.log(`Server started on port: ${port}`)
})
