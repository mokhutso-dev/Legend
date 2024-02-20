const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    task: String,
    description: String,
    status: String,
    date: Date,
})

const TaskModel = mongoose.model("Task", TaskSchema)

module.exports = TaskModel