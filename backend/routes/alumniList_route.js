const express = require('express')
const get_complaintRoutes = express.Router();
const cors = require('cors')
//const jwt = require('jsonwebtoken')
//const bcrypt = require('bcrypt')
let Complaints = require('../models/userData');
get_complaintRoutes.use(cors())

process.env.SECRET_KEY = 'secret';
 
get_complaintRoutes.route('/add').post(function(req, res) {
    console.log("get complaint");
    if (req.body.criteria == "Year")
    {
        Complaints.find({passout:req.body.search_name},function(err, complaints){
        return res.send(complaints);
    })
    }
    else if (req.body.criteria == "Department")
    {
        Complaints.find({dept:req.body.search_name},function(err, complaints){
            return res.send(complaints);
        })
    }
    else if (req.body.criteria == "College")
    {
        Complaints.find({collegeName:req.body.search_name},function(err, complaints){
            return res.send(complaints);
        })
    }
});

module.exports = get_complaintRoutes;