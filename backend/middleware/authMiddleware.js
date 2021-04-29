
const jwt = require('jsonwebtoken');


 const requireAuth = (req, res, next) => {
// module.exports = function requireAuth(req,res,next) {
    

    const token = req.cookies.jwt;

    if(token){
       jwt.verify(token, 'dnynu secret',(err, decodedToken)=>{
           if(err){
               console.log(err.message);
               return res.redirect('/');
           }else{
               console.log(decodedToken);
               next();
           }
       })
    }
    else{
         return res.redirect('/');        
    }
}
//check current user



module.exports = {requireAuth};
