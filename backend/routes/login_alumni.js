const express = require('express')
const loginRoutes = express.Router();
const cors = require('cors')
//const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

let User = require('../models/userData');
loginRoutes.use(cors())

let var1;

process.env.SECRET_KEY = 'secret';
loginRoutes.route('/adda').post(function (req, res) {
    console.log("hell00");
    User.authenticate(req.body.email, req.body.password, function (error, user) {
        if (error || !user) {
          var err = new Error('Wrong email or password.');
          err.status = 401;
          console.log("not logged in");
        } else {
          res.header('Access-Control-Allow-Origin', '*');
          req.session.user = user;
          console.log("test login");
          console.log(req.session.user);
          return res.json({status : true,session: req.session});
          console.log("logged in."); 
        }
      });


    // User.findOne({ email: req.body.email }, function (err, user) {
    //     if (user) {
    //         if (user.password == req.body.password) {

    //         }
    //         else {
    //             var err = new Error("Password does not match.")
    //         }
    //     }
    //     else {
    //         var err = new Error("Email address does not exist.");
    //         err.status = 400;
    //     }
    // });
});

loginRoutes.route('/logout').get(function (req, res) {
  console.log("Get req");
  //console.log(var1);
  console.log(req.session);
  if(req.session)
  {
    console.log("logout");
    console.log(req.session);
    req.session.destroy();
    console.log("happy"+req.session);
    var1=req.session;
    return res.json({status : true,session: req.session});
  }
});

module.exports = loginRoutes;