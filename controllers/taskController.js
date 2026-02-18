const Task = require("../models/Task")

exports.getTasks = async (req,res)=>{
    const {status,priority,sort,order} = req.query

    let filter = {createdBy:req.user}
    if(status) filter.status=status
    if(priority) filter.priority=priority

    let sortObj={}
    if(sort) sortObj[sort] = order=="desc" ? -1 : 1

    const tasks = await Task.find(filter).sort(sortObj)
    res.json(tasks)
}

exports.createTask = async (req,res)=>{
    if(!req.body.title){
        console.log("title missing")  
    }

    const task = await Task.create({
        ...req.body,
        createdBy:req.user
    })

    res.json(task)
}


exports.updateTask = async (req,res)=>{
    const task = await Task.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json(task)
}

exports.deleteTask = async (req,res)=>{
    await Task.findByIdAndDelete(req.params.id)
    res.json({msg:"deleted"})
}
