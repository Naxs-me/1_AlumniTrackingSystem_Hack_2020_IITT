const express = require('express')
const Like = express.Router();
const cors = require('cors')
//const jwt = require('jsonwebtoken')
//const bcrypt = require('bcrypt')
let Complaints = require('../models/eventData');
Like.use(cors())

process.env.SECRET_KEY = 'secret';
 
Like.route('/like').post(function(req, res) {
    console.log("cheack");
    Complaints.findByIdAndUpdate({_id: req.body.id},{$inc:{Like:1}},function (error,counter){
        if(error)
            console.log("error");
        else
        {
            console.log("no error");
            console.log(counter);
            counter["Like"]+=1;
            return res.send(counter);
        }
    });
});

module.exports = Like;