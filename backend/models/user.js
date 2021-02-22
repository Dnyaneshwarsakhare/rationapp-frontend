const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : [true, 'Please enter an email'],
        unique : true,
        lowercase : true,
        validate: [ isEmail , 'please enter a valid email']
    },
    password : {
        type : String,
        required : [true, 'Please enter an password'],
        minlength : [6, 'length should be min 6 characters']
    },
});

//fire a function after a new user saved in db
userSchema.pre('save',async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next();
})


const User = mongoose.model('user', userSchema);

module.exports = User;