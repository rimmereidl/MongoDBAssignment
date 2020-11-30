const questionsModel = require('../models/questions/questions-model.js')
const findAllQuestions = () => questionsModel.find()
const findQuestionById = (qid) => questionsModel.findById(qid)
const findQuestionsForQuiz = (qzid) => questionsModel.findById(qzid)
module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz }