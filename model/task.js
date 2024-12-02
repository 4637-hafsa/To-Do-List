const { timeStamp } = require("console")
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema(
    {
        task: String, 
        description: String
    }, { timestamps: true })

const Task = mongoose.model('Task', taskSchema)

module.exports = Task