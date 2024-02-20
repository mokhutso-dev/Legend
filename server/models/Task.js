const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    task: String,
    descrption: String,
    status: String,
    date: Date,
})

const userModel = mongoose.model("Task", UserSchema)

module.exports = userModel