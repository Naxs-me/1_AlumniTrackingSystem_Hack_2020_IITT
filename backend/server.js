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

app.use('/createEvent', CreateEvent);

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
