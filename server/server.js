const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./db')
const moodRouter = require('./db/routes/mood-router')

db.on('error', console.error.bind(console, 'Mongo DB connection error'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', moodRouter)

app.listen(port, () => console.log('server running at   ' + port))
