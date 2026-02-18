require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("mongo connected"))
.catch(err=>console.log(err))

app.get("/", (req,res)=>{
    res.send("API running")
})

app.listen(process.env.PORT, ()=>{
    console.log("server started")
})
app.use("/api/auth", require("./routes/authRoutes"))

app.use("/api/tasks", require("./routes/taskRoutes"))
