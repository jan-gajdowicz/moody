import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
})

export const insertMood = payload => api.post('/mood', payload)
export const getAllMoods = () => api.get('/moods')
export const updateMoodById = (id, payload) => api.put(`/mood/${id}`, payload)
export const deleteMoodById = id => api.delete(`/mood/${id}`)
export const getMoodById = id => api.get(`/mood/${id}`)

const apis = {
  insertMood,
  getAllMoods,
  updateMoodById,
  deleteMoodById,
  getMoodById,
}

export default apis
