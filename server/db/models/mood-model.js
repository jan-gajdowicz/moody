const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Mood = new Schema({
  user: { type: String, required: true },
  date: { type: Date, required: true },
  emotions: {
    anxiety: { type: Number, required: false },
    confidence: { type: Number, required: false },
    happiness: { type: Number, required: false },
  },
})

module.exports = mongoose.model('moods', Mood)
