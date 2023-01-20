// importing express from node modules
const express = require('express')

const app = express()

//imports path
const path = require('path')

const api = require('./routes')

const PORT = process.env.port || 3001




