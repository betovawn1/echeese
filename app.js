const http = require('http')
const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('dist'))
app.use(express.static('src'))
app.listen(3030)

module.exports = app