const express = require('express')
const MoodController = require('../controllers/mood-controller')

const router = express.Router()

router.post('/mood', MoodController.createMood)
router.put('/mood/:id', MoodController.updateMood)
router.delete('/mood/:id', MoodController.deleteMood)
router.get('/mood/:id', MoodController.getMoodById)
router.get('/moods', MoodController.getMoods)

module.exports = router
