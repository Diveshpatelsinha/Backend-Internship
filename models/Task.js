const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    title:String,
    description:String,
    status:{type:String, default:"pending"},
    priority:{type:String, default:"medium"},
    dueDate:Date,
    createdBy:{type:mongoose.Schema.Types.ObjectId, ref:"User"}
},{timestamps:true})

module.exports = mongoose.model("Task",taskSchema)
