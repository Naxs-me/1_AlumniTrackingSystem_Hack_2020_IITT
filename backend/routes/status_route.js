const express = require('express')
const noticeRoutes = express.Router();
const cors = require('cors')
let User = require('../models/status');
noticeRoutes.use(cors())

process.env.SECRET_KEY = 'secret';
 
noticeRoutes.route('/addStatus').post(function(req, res) {
  console.log(req.session);

  var u = User({
    userEmail: req.body.userEmail,
    college: req.body.college
  });
  console.log(u);
  u.save()
    .then(res => console.log(res))
    .catch(err => console.log(err));
  console.log("status added");
});

module.exports = noticeRoutes;