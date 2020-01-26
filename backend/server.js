const express = require('express');
const sessionRoutes = express.Router();
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const PORT = 4000;
const MongoStore = require('connect-mongo')(session);
const path = require('path');

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/atsDatabase', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function () {
  console.log("MongoDB database connection established successfully");
});

app.use(
  session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: connection
    }),
    cookie: {
      httpOnly: false,
      secure: false,
    }
  })
);

// app.get("/cookie", (req, res) => {
//   const options = {
//     secure: false,
//     httpOnly: false,
//     domain: ".your.domain.com"
//   }
//   return res
//     .cookie("cookieName", "cookieValue", options)
//     .status(200)
//     .send("cookie sent")
// })

var CreateEvent = require('./routes/event_route.js')
var notices = require('./routes/notice_route')
var get_notices = require('./routes/get_notice')
var get_complaints = require('./routes/get_complaint')
var Like = require('./routes/Like')
var registerCollegeRoute = require('./routes/register_college_route')
var registerUserRoute = require('./routes/register_user_route')
var loginAlumni = require('./routes/login_alumni')
var loginCollege = require('./routes/login_college')

app.use('/createEvent', CreateEvent);
app.use('/Create_Notice', notices);
app.use('/', get_notices);
app.use('/', get_complaints);
app.use('/',Like);
app.use('/register',registerCollegeRoute);
app.use('/register',registerUserRoute);
app.use('/Login',loginAlumni);
app.use('/Login',loginCollege);

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
