const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let noticeData = new Schema({
    NoticeName: {
        type: String,
        required: true
    },
    Notice_desc: {
        type: String,
        required: true
    },
    Status: {
        type: String,
        required: true,
        default: "Active"
    },
    // Type: {
    //     type: String,
    //     default: "Public"
    // },
    Like: {
        type: Number,
        default: 0
    }
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


module.exports = mongoose.model('NoticeData', noticeData);