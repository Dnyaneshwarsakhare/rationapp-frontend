const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    product : {
        type : String,
        required : true,
        unique : true,
    },
    totalStock : {
        type : String,
        required : true,
    },
    soldStock : {
        type : String,
        required : true,
    },
    availableStock : {
        type : String,
        required : true,
    },
});

const Stock = mongoose.model('stocks', stockSchema);

module.exports = Stock;