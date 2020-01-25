const express = require('express')
const noticeRoutes = express.Router();
const cors = require('cors')
//const jwt = require('jsonwebtoken')
//const bcrypt = require('bcrypt')
let User = require('../models/noticeData');
noticeRoutes.use(cors())

process.env.SECRET_KEY = 'secret';
 
noticeRoutes.route('/add').post(function(req, res) {
  console.log("hello");
  console.log(req.session);

  var u = User({
    NoticeName: req.body.NoticeName,
    Notice_desc: req.body.Notice_desc
  });
  console.log(u);
  u.save()
    .then(res => console.log(res))
    .catch(err => console.log(err));
  console.log("notice added");
});

module.exports = noticeRoutes;