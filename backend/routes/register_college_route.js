const express = require('express')
const signUpRoutes = express.Router();
const cors = require('cors')

let College = require('./../models/collegeData');
signUpRoutes.use(cors())

process.env.SECRET_KEY = 'secret';

function getCollege(u,req,res,callback){
  u = College({
    collegeName: req.body.collegeName,
    collegeNo: req.body.collegeNo,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
    contactNo: req.body.contact,
  });

  callback(u,res);
}


signUpRoutes.route('/addCollege').post(function (req, res) {
  console.log("hello");
  var u;
  College.findOne({name: req.body.collegeName}, function(err,college){
    if(college){
      var err = new Error("Name is already taken.");
      err.status = 400;
      res.json({status:false,msg:'College already exists'});
    }
    else{
      getCollege(u,req,res,add_college);
      console.log("reached");
      res.json({status: true});
    }
  });

});
function add_college(u,res) {
  u.save()
    .then(res => console.log(res))
    .catch(err => console.log(err));
  console.log("colleges reached");
  
  
}

module.exports = signUpRoutes;