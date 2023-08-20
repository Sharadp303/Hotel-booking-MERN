const jwt= require("jsonwebtoken")

async function verifyToken(req,res,next){
    // console.log(req.cookies)
    
    const token = req.headers['access-token'];

    if(!token){
        console.log("HEllo")
        return res.status(401).json("Not authorised")
    }

    jwt.verify(token,process.env.SECRET,(err,data)=>{
        if(err){
        return res.status(403).json("Invalid token")      
        }
        req.tokendata=data;
        next()
    })

}

async function isAdmin(req,res,next)
{
    console.log(req.tokendata)
    if(req.tokendata.isAdmin){
        next()
    }
    else{
        return res.status(401).json("Not authorised")
    }
}

module.exports={verifyToken,isAdmin}