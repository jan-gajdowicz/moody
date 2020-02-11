const Mood = require('../models/mood-model')

const createMood = (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a mood!',
    })
  }

  const mood = new Mood(body)

  if (!mood) {
    return res.status(400).json({
      success: false,
      error: 'No mood found.',
    })
  }

  mood
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: mood._id,
        message: 'Mood created.',
      })
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Mood not created!',
      })
    })
}

const updateMood = async (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      message: 'You must provide body to update!',
    })
  }

  Mood.findOne({ id: req.params.id }, (error, mood) => {
    if (error) {
      return res.status(404).json({
        error,
        message: 'Mood not found!',
      })
    }

    mood.date = body.date
    mood.user = body.user
    mood.emotions = body.emotions

    mood
      .save()
      .then(() => {
        return res.status(201).json({
          success: true,
          id: mood._id,
          message: 'Mood updated.',
        })
      })
      .catch(error => {
        return res.status(404).json({
          error,
          message: 'Mood not updated!',
        })
      })
  })
}

const deleteMood = async (res, req) => {
  await Mood.findOneAndDelete({ _id: req.params.id }, (err, mood) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }

    if (!mood) {
      return res.status(404).json({ success: false, error: 'Mood not found' })
    }

    return res.status(200).json({ success: true, data: mood })
  }).catch(err => console.log(err))
}

const getMoodById = async (req, res) => {
  await Mood.findOne({ _id: req.params.id }, (err, mood) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }

    if (!mood) {
      return res.status(404).json({ success: false, error: 'Mood not found' })
    }
    return res.status(200).json({ success: true, data: mood })
  }).catch(err => console.log(err))
}

const getMoods = async (req, res) => {
  await Mood.find({}, (err, moods) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!moods.length) {
      return res.status(404).json({ success: false, error: 'Mood not found' })
    }
    return res.status(200).json({ success: true, data: moods })
  }).catch(err => console.log(err))
}

module.exports = {
  createMood,
  updateMood,
  deleteMood,
  getMoods,
  getMoodById,
}
