const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    firstname : {
        type : String,
        required : true,
        lowercase : true,
    },
    lastname : {
        type : String,
        required : true,
        lowercase : true, 
    },
    mobileno : {
        type : String,
        required : true,
        minlength : 10,
        maxlength : 10,
    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        validate: [ isEmail , 'Please enter a valid email']
    },
    username : {
        type : String,
        required : true,
        minlength : 5,
        unique : true,
        lowercase : true
    },
    dob : {
        type : Date,
        required : true,
    },
    gender : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
        minlength : 6
    },
    rationUser : [
        {
            email:{
                type : String,
                
            },
            name:{
                type : String,
                
            },
            totalFamilyMembers:{
                type : String,
               
            },
            rationType:{
                type : String,
              
            },
            status:{
                type : String,
               
            }
        }
    ],
    tokens : [
        {
            token:{
                type : String,
                required : true 
            }
        }
    ]
});

//fire a function after a new user saved in db
userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        const salt= await bcrypt.genSalt(12);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

//static method to login
userSchema.statics.login = async function(email, password ){
    const user = await User.findOne({email : email});
    if(user){
       const isMatch = await bcrypt.compare(password, user.password);
       if(isMatch){
           return user;
       }throw Error('incorrect password')
    }throw Error('incorrect email')
}



const maxAge = 3*60*60*24;
userSchema.methods.generateAuthToken = async function(id) {
    try{
        let token = jwt.sign({ _id: this._id }, 'dnynu secret',{
            expiresIn : maxAge
        });
        this.tokens = this.tokens.concat({token});
        await this.save();
        return token;
    }catch(err){
        console.log(err);
    }
}


const User = mongoose.model('user', userSchema);

module.exports = User;