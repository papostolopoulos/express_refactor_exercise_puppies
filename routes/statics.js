"use strict";

var express = require("express");
var router = express.Router();

router.route("/about")
  .get(function(req, res){
    res.render('about.ejs');
});

router.route("/contact")
.get(function(req, res) {
  res.render("contact.ejs");
});

module.exports = router;
