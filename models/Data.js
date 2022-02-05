const mongoose = require('mongoose')
const DataSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    brand:{
        type: String,
        required : true
    }
})

module.exports= Data = mongoose.model('data', DataSchema)