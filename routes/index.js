const path = require("path");
const express = require('express');
const router = require("express").Router();
const emailRoutes = require("./serverEmail/emailRoutes");
const userRoutes = require("./databaseRoutes/userRoutes");
const passport = require("../authentication/passport");



router.get("/",function(req,res){res.sendFile(path.join(__dirname,"../authentication/login.html"))});
router.get("/authorize",function(req,res){res.sendFile(path.join(__dirname,"../authentication/login.html"))});
router.post("/authorize",
  passport.authenticate('local'),
  function(req,res){
    console.log(res);
    res.status(200).json({next:"/dashboard"});
  }
);
router.use(function(req,res,next){
  if(req.user){
    console.log(req.user);
    return next();
  }
  else{
    res.status(401).end;
  }
});
router.use(express.static("client/build"));
router.use(emailRoutes);
router.use(userRoutes);
router.get("/dashboard",function(req,res){
  console.log(res);
  res.sendFile(path.join(__dirname,"../client/build/index.html"))
});
router.get("*", function (req, res) {
  res.sendFile(path.join(__dirname,"../authentication/login.html"));
});
router.post("*", function (req, res) {
  res.status(404).end;
});
router.put("*", function (req, res) {
  res.status(404).end;
});
router.delete("*", function (req, res) {
  res.status(404).end;
});

module.exports = router;
