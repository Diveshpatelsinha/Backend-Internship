const jwt = require("jsonwebtoken")

module.exports = (req,res,next)=>{
    const token = req.header("Authorization")

    if(!token) return res.json({msg:"no token"})

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        req.user = decoded.id
        next()
    }catch{
        res.json({msg:"token not valid"})
    }
}
