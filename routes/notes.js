const notes = require('express').Router()
// getting router from express

const {v4: uuidv4} = require('uuid')
// getting uuid

const {readAndAppend, readFromFile} = require('../lib/fsFunct')
// getting readandappedn and readfromfile 

const fs = require('fs')
// const { response } = require('express')
// const { request } = require('http')

notes.get('/', (request, response) =>
    readFromFile('./db/db.json').then((data) => response.json(JSON.parse(data)))
)

notes.post('/', (request,response) => {
    const {title, text} = request.body
    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        }
        const info = readAndAppend(newNote, './db/db.json')
        response.json(info)
    } else {
        response.json('Note Posting Error')
    }
})

notes.delete('/:id', (request, response) => {
    const id = request.params.id
    fs.readFile('./db/db.json', 'utf8', (error, data) => {
        const dbdata = JSON.parse(data)
        const filteredDBData = dbData.filter(note => note.id !== id)
        fs.writeFile('./db/db.json', JSON.stringify(filteredDBData), (error) => {
            response.json("Deleted!!!")
         })
    })
})

module.exports = notes