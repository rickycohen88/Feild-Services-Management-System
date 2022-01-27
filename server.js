//Dependencies
require('dotenv').config();
const http = require("http");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
const Routes = require('./routes/index');
const mongoose = require("mongoose");
const socketio = require("socket.io");
const corsOptions = {
  origin: ["http://localhost:3000"],
  methods: ["GET", "PUT", "POST"],
  optionsSuccessStatus: 200,
};
// create a variable equal to an express instance.
const app = express();
//create a node.js http server using express
const server = http.createServer(app);
const PORT = process.env.PORT || 8080;
//create socket server to listen on our http server
const io = socketio(server, { cors: corsOptions });
io.use((next) => {
  //middleware for socketIO
  next();
});
io.on("connection", () => {
  //stuff to do
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));
app.use(
  session({
    secret: process.env.Session_Secret,
    resave: false,
    saveUninitialized: false,
    cookie:{
              maxAge:3600000,//1hour
           },
  })
);
app.use(passport.initialize());
app.use(passport.authenticate('session'));
// set up server to use routes folder for routing
app.use('/',Routes);

// Connect to the Mongo DB  _ heroku/local env var/ local database
mongoose.connect("mongodb://localhost:27017/materialTracker",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  }
);

// start the http server
server.listen(PORT, () => {
  console.log("app running on:", PORT);
});
