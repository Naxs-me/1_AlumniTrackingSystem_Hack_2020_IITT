const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

let userData = new Schema({
    name: {
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
    collegeName: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    passout: {
        type: String,
        required: true
    },
    dept: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        required: true
    }
});

userData.statics.authenticate = function (email, password, callback) {
    User.findOne({ email: email })
        .exec(function (err, user) {
            if (err) {
                return callback(err)
            } else if (!user) {
                var err = new Error('User not found.');
                err.status = 401;
                return callback(err);
            }
            bcrypt.compare(password, user.password, function (err, result) {
                if (result === true) {
                    return callback(null, user);
                } else {
                    return callback();
                }
            })
        });
}

userData.pre('save', function (next) {
    var user = this;
    bcrypt.hash(user.password, 10, function (err, hash) {
        if (err) {
            return next(err);
        }
        user.password = hash;
        next();
    })
});

var User = mongoose.model('userData', userData);

module.exports = User;