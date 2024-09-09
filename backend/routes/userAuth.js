const jwt = require("jsonwebtoken")

const authenticateToken = (req,res,next) =>{
    const authheader = req.headers["authoriztion"];
    const token = authheader && authheader.split(" ")[1];

    if()
}