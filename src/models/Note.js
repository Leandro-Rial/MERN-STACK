const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
    title: {
        type: String
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    author: {
        type: String
    },
}, {
    timestamps: true
})

module.exports = model('Note', noteSchema);