// importing express from node modules
const express = require('express')

const app = express()

//imports path
const path = require('path')

const api = require('./routes')

const PORT = process.env.port || 3001

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api', api)
app.use(express.static('public'))

app.get('/', (request, response) =>
    response.sendFile(path.join(__dirname, '/public/index.html'))    
)






