const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Mood = new Schema({
  user: { type: String, required: true },
  date: { type: Date, required: true },
  emotions: { type: Object, required: true },
})

module.exports = mongoose.model('moods', Mood)
