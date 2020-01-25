const express = require('express')
const eventRoutes = express.Router();
const cors = require('cors')
let User = require('../models/eventData');
eventRoutes.use(cors())

process.env.SECRET_KEY = 'secret';
 
eventRoutes.route('/add').post(function(req, res) {
  console.log("hello");
  console.log(req.session);

  var u = User({
    Name : req.body.Name,
    EventName: req.body.EventName,
    Event_desc: req.body.Event_desc,
    Location: req.body.Location,
    Contact: req.body.Contact,
    Date: req.body.Date,
    Time: req.body.Time
  });
  console.log(u);
  u.save()
    .then(res => console.log(res))
    .catch(err => console.log(err));
  console.log("event added");
});

module.exports = eventRoutes;