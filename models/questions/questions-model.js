const mongoose = require('mongoose')
const questionsSchema = require('./questions-schema.js')
const questionsModel = mongoose.model('QuestionsModel', questionsSchema)
module.exports = questionsModel
