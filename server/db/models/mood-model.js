const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Mood = new Schema({
  user: { type: String, required: true },
  date: { type: Date, required: true },
  emotions: {
    anxiety: { type: String, required: false },
    confidence: { type: String, required: false },
    happiness: { type: String, required: false },
  },
})

module.exports = mongoose.model('moods', Mood)
