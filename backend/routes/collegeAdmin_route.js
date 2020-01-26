const express = require('express')
const CA = express.Router();
const cors = require('cors')
//const jwt = require('jsonwebtoken')
//const bcrypt = require('bcrypt')
let Status = require('../models/status');
CA.use(cors())

process.env.SECRET_KEY = 'secret';
 
CA.route('/get').post(function(req, res) {
    Status.find({},function(err,status){
        console.log(status);
        return res.send(status);
    })
});

module.exports = CA;