const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, 
        minlength : [2, "Le titre doit contenir plus de deux caractères"],
        maxlength : [30, "Le titre doit contenir moins de 30 caractères"]
    },
    text: {
        type: String,
        required: true
    },
    color: {
        type: String,
        default: "black", 
        enum: ["red", "green", "yellow", "blue", "yellow", "pink", "purple", "black"]
    },
    creationDate: {
        type: Date,
        default: Date.now
    },
    updateDate: {
        type: Date
    }

})

module.exports = mongoose.model('Note', noteSchema)