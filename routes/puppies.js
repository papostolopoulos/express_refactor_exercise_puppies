"use strict";

var express = require("express");
var router = express.Router();
var app = express();
var puppyJs = require("../models/puppy");
var puppiesArr = puppyJs.puppiesArr;
var Puppy = puppyJs.Puppy;

//What to display in localhost:8000/form
router.route("/new")
.get(function(req, res) {
  res.render("form");
});

var counter = 1;

//DISPLAY PUPPIES
router.route("/puppies_form")
.get(function (req, res) {
  console.log("Inside the router.route");
  var newPuppy = new Puppy(req.query.name, req.query.age, counter);

if(newPuppy){
  puppiesArr.push(newPuppy);
  counter++;
}
  res.send(puppiesArr); //res.status(302).send(puppies);
});

//What to display in root (localhost:8000);
router.route("/")
.get(function(req,res){
  res.send(puppiesArr);
});

//What to display in puppies/{num}
router.route("/:id")
.get(function(req, res) {
  for(let i = 0; i < puppiesArr.length; i++){
      if(puppiesArr[i].id === Number(req.params.id)){
        res.send(puppiesArr[i]);
      }
    }
});

module.exports = router;
