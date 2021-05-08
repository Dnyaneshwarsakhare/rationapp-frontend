const jwt = require("jsonwebtoken");
const User = require("../models/user");

const requireAuth = async (req, res, next) => {
    try{
        const token = req.cookies.jwt;
        const verifyToken = jwt.verify(token, 'dnynu secret', function(err, decodedToken){
            if (err) {console.log(err)} ;
            console.log(decodedToken);
        });

        const rootUser = await User.findOne({ _id : verifyToken._id, "tokens.token":token });
        
        if(!rootUser){ throw new Error('User not found')}
        req.token = token ;
        req.rootUser = rootUser;
        res.userID = rootUser._id;

        next();

    }catch(err){
        res.status(401).send("Unauthorised");
        console.log(err);
    }
}
//check current user



module.exports = requireAuth;



// module.exports = function requireAuth(req,res,next) {
    

    // const token = req.cookies.jwt;
    // // const verifyToken = jwt.verify(token, 'dnynu secret');
    // // const rootUser = await User.findOne({ _id: verifyToken._id})
    // if(token){
    //    jwt.verify(token, 'dnynu secret',(err, decodedToken)=>{
    //        if(err){
    //            console.log(err.message);
    //            return res.redirect('/login');
    //        }else{
    //            console.log(decodedToken);
    //         //    req.token = token;
    //         //    req.rootUser = rootUser;
    //         //    req.userID = rootUser._id;
    //            next();
    //        }
    //    })
    // }
    // else{
    //      return res.redirect('/login');        
    // }