const { join } = require('path')
const express = require('express')

const app = express()

const dist = join(__dirname, 'dist')
app.use(express.static(dist))

module.exports = app
