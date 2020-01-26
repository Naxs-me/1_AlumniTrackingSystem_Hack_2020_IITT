const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let noticeData = new Schema({
    userEmail: {
        type: String,
        required: true
    },
    college: {
        type: String,
        required: true
    },
    Status: {
        type: String,
        required: true,
        default: "Pending"
    }
});

module.exports = mongoose.model('status', noticeData);