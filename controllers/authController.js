const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.register = async (req,res)=>{
    try{
        const {name,email,password} = req.body

        const userExist = await User.findOne({email})
     if(userExist) return res.status(200).json({msg:"user already exists"})


        const hash = await bcrypt.hash(password,10)

        const user = await User.create({
            name,
            email,
            password:hash
        })

        res.json({msg:"registered"})
    }catch(err){
        res.json(err)
    }
}

exports.login = async (req,res)=>{
    const {email,password} = req.body

    const user = await User.findOne({email})
    if(!user) return res.status(201).json({msg:"user not found"})


    const match = await bcrypt.compare(password,user.password)
    if(!match) return res.json({msg:"wrong password"})

    const token = jwt.sign({id:user._id},process.env.JWT_SECRET)

    res.json({token})
}
