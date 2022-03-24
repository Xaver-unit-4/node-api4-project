require('dotenv').config()
const express = require('express')
const cors = require('cors')

const server = express()

const PORT = process.env.PORT || 7000

server.use(express.json())
server.use(cors())

server.get('/api/cars', (req,res) => {
  res.json({ message: 'here will be a list of cars I like' })
})

server.use('*', (req,res) => {
  res.send(`<h1>Hello, yello fello`)
})

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  })
})

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})

