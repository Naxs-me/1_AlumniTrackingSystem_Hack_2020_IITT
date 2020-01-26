const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

let collegeData = new Schema({
    collegeName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    collegeNo: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
});

collegeData.statics.authenticate = function (email, password, callback) {
    College.findOne({ email: email })
        .exec(function (err, college) {
            if (err) {
                return callback(err)
            } else if (!college) {
                var err = new Error('College not found.');
                err.status = 401;
                return callback(err);
            }
            bcrypt.compare(password, college.password, function (err, result) {
                if (result === true) {
                    return callback(null, college);
                } else {
                    return callback();
                }
            })
        });
}

collegeData.pre('save', function (next) {
    var college = this;
    bcrypt.hash(college.password, 10, function (err, hash) {
        if (err) {
            return next(err);
        }
        college.password = hash;
        next();
    })
});

var College = mongoose.model('collegeData', collegeData);

module.exports = College;