const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const authRoutes = require('./routes/authRoutes');
const jwt = require("jsonwebtoken");


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
const uri = process.env.ATLAS_URI;
mongoose.connect(uri , {useNewUrlParser : true, useCreateIndex : true,useUnifiedTopology: true });

const connection  = mongoose.connection ;
connection.once('open', ()=>{
    console.log("database connection established succeesssfully");
})

var listener = app.listen(port, function(){
    console.log('Listening on port ' + port); 
});

app.use(authRoutes);