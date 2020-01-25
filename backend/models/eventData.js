const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let eventData = new Schema({
    EventName: {
        type: String,
        required: true
    },
    Event_desc: {
        type: String,
        required: true
    },
    Location: {
        type: String,
        required: true
    },
    Contact: {
        type: Number,
        required: true
    },
    Date: {
        type: String,
        required: true
    },
    Time: {
        type: String,
        required: true
    },
    Status: {
        type: String,
        required: true,
        default: "Active"
    },
});

// complaintData.getComplaint = function (callback) {
//     User.findOne({ email: email })
//         .exec(function (err, user) {
//             if (err) {
//                 return callback(err)
//             } else if (!user) {
//                 var err = new Error('User not found.');
//                 err.status = 401;
//                 return callback(err);
//             }
//             bcrypt.compare(password, user.password, function (err, result) {
//                 if (result === true) {
//                     return callback(null, user);
//                 } else {
//                     return callback();
//                 }
//             })
//         });
// }


module.exports = mongoose.model('EventData', eventData);