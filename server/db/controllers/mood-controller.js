const Mood = require('../models/mood-model')

createMood = (req, res) => {
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

  mood.save().then(() => {
    return res
      .status(201)
      .json({
        success: true,
        id: mood._id,
        message: 'Mood created.',
      })
      .catch(error => {
        return res.status(400).json({
          error,
          message: 'Mood not created!',
        })
      })
  })
}

updateMood = async (req, res) => {
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

deleteMood = async (res, req) => {
  await Mood.
}
