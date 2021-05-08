const User = require('../models/user');
const Stock = require('../models/stock');
const jwt = require('jsonwebtoken');
const { MongoClient } = require("mongodb");
const mongoose = require('mongoose');
const cors = require('cors');
const { response } = require('express');
const cookieParser = require("cookie-parser");
const bcrypt = require('bcrypt');

const handleErrors = (err) =>{
    console.log(err.message, err.code);
    let errors = {email :'', password :'',message:''};
    
    //incorrect email
    if(err.message === 'incorrect email'){
        errors.email = "Incorrect email";
        errors.message="Authentication Failed";
    }
    //incorrect password
    if(err.message === 'incorrect password'){
        errors.password = "Incorrect password";
        errors.message="Authentication Failed";
    }

    //duplicate error code
    
    
    

    //validation errors
    // if(err.message.includes('user validation failed')){
    //     Object.values(err.errors).forEach(({properties}) =>{
    //         errors[properties.path] = properties.message;
    //     });
    // }

    
    return errors;
}
const maxAge = 3*60*60*24;


module.exports.register_post = async (req ,res) => {
    const {firstname,lastname,mobileno,email,username,dob,gender,password} = req.body;
    let token;
    try{
        const emailTaken = await User.findOne({ email });
        if (emailTaken) return res.status(400).json({ err: "This Email is already in use!" });
        const user = await User.create({firstname,lastname,mobileno,email,username,dob,gender,password});
        token = user.generateAuthToken(user._id);
        res.cookie('jwt', token,{httpOnly : true, maxAge : maxAge*1000 });
        res.status(201).json({ user : user._id});
    }catch(err){
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}

module.exports.login_post = async (req ,res) => {
    const {email, password} = req.body;
    let token;
    try{
        const user = await User.login(email, password);
        token = user.generateAuthToken(user._id);
        res.cookie('jwt', token, { httpOnly : true, maxAge : maxAge*1000});
        res.status(200).json({user:user._id});
    }catch(err){
        const errors = handleErrors(err);
        res.status(400).json({ errors});
    }
}

module.exports.shopkeeper_get = (req ,res) => {
    res.json(req.rootUser);
    // const {username} = req.params.username;
    // User.findOne(username)
    // .then(
    //     user => res.json({user}),
    //     res.send(req.rootUser)
    // )
    // .catch(err => res.status(400).json("Error : " + err));
}

module.exports.update_post = (req ,res) => {
    User.findById(req.params.id)
    .then(user => {
        user.firstname = req.body.firstname;
        user.lastname = req.body.lastname;
        user.mobileno= req.body.mobileno;
        user.email = req.body.email;
        user.username = req.body.username;
        user.dob = Date.parse(req.body.dob);
        user.gender= req.body.gender;
        user.password = req.body.password;

        user.save()
        .then(()=> res.json('Profile Details updated'))
        .catch(err => res.status(400).json("Error :" +err));
    })
    .catch(err => res.status(400).json("Error : " + err));
}

module.exports.details_post = (req ,res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error : " + err));
}

module.exports.user_delete = (req ,res) => {
    User.findByIdAndDelete(req.params.id)
    .then(user => res.json("User deleted"))
    .catch(err => res.status(400).json("Error : " + err));
}

// module.exports.admin_dashboard = (req ,res) => {
//     var MongoClient = require('mongodb').MongoClient;

//     var dbName = "rationapp";
//     var port = "27017";
//     var host = "localhost";

//     function getNumOfDocs (collectionName, host, port, dbName, callback) {
//         MongoClient.connect("mongodb://" + host + ":" + port + "/" + dbName,{ useUnifiedTopology: true }, function (error, db){
//             if(error) return callback(error);

//             db.collection(users).estimatedDocumentCount({}, function(error, numOfDocs){
//                 if(error) return callback(error);

//                 db.close();
//                 callback(null, numOfDocs);
//             });
//         }); 
//     }
//     getNumOfDocs("users", host, port, dbName, function(err, count) {
//         if (err) {
//             return console.log(err.message);
//         }
//         console.log('number of documents', count);
//         res.json({count});
//     }); 
    
// }


module.exports.stock_get = (req ,res) => {
    Stock.find()
    .then(stocks => res.json(stocks))
    .catch(err => res.status(400).json("Error : " + err));
}

module.exports.rationUser_get = (req ,res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error : " + err));
}


module.exports.rationUser_post = (req ,res) => {
    const {email} = req.params.email;
    User.findOne(email)
    .then(user => {
        user.save()
        .then(()=> res.json('status updated'))
        .catch(err => res.status(400).json("Error :" +err));
    })
    .catch(err => res.status(400).json("Error : " + err));
}
