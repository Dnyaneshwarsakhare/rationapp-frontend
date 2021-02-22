const User = require('../models/user');

const handleErrors = (err) =>{
    console.log(err.message, err.code);
    let errors = {email :'', password :''};


    //duplicate error code
    if(err.code === 11000){
        errors.email = 'user already exist';
        return errors;
    }

    //validation errors
    if(err.message.includes('user validation failed')){
        Object.values(err.errors).forEach(({properties}) =>{
            errors[properties.path] = properties.message;
        });

    }
    return errors;
}

module.exports.register_get = (req ,res) => {
    res.render('register');
}
module.exports.login_get = (req ,res) => {
    res.render('login');
}

module.exports.register_post = async (req ,res) => {
    // const {email, password} = req.body;

    // try{
    //     const user = await User.create({email, password});
    //     res.status(201).json(user);
    // }catch(err){
    //     const errors = handleErrors(err);
    //     res.status(400).json({ errors });
    // }
}

module.exports.login_post = async (req ,res) => {
    const {email, password} = req.body;

    try{
        const user = await User.create({email, password});
        res.status(201).json(user);
    }catch(err){
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}
