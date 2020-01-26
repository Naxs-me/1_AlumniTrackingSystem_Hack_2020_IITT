const express = require('express')
const signUpRoutes = express.Router();
const cors = require('cors')

let User = require('./../models/userData');
signUpRoutes.use(cors())

process.env.SECRET_KEY = 'secret';

function getUser(u,req,res,callback){
  u = User({
    collegeName: req.body.collegeName,
    email: req.body.email,
    password: req.body.password,
    contactNo: req.body.contact,
    name: req.body.name,
    passout: req.body.passout,
    dept: req.body.dept,
    degree: req.body.degree
  });

  callback(u,res);
}


signUpRoutes.route('/addUser').post(function (req, res) {
  console.log("hello");
  var u;
  User.findOne({name: req.body.name}, function(err,user){
    if(user){
      var err = new Error("Name is already taken.");
      err.status = 400;
      res.json({status:false,msg:'User already exists'});
    }
    else{
      getUser(u,req,res,add_user);
      console.log("reached");
      res.json({status: true});
    }
  });

});
function add_user(u,res) {
  u.save()
    .then(res => console.log(res))
    .catch(err => console.log(err));
  console.log("users reached");
  
  
}

module.exports = signUpRoutes;