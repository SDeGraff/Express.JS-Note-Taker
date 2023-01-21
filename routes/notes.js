const notes = require('express').Router()

const {v4: uuidv4} = require('uuid')

const {readAndAppend, readFromFil} = require('../note/fsFunction')

const fs = require('fs')
const { response } = require('express')

notes.get('/', (request, response) =>
    readFromFile('./db/db.json').then((data) => response.json(JSON.parse(data)))
)

