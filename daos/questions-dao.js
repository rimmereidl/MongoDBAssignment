const questionsModel = require('../models/questions/questions-model.js')
const findAllQuestions = () => questionsModel.find()
const findQuestionById = (qid) => questionsModel.findById(qid)
const findQuestionsForQuiz = (qid) => questionsModel.findOne({quizId: qid})
module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz }