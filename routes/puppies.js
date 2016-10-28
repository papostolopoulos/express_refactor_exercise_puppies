"use strict";

var express = require("express");
var router = express.Router();
var app = express();
var puppyJs = require("../models/puppy");
var puppiesArr = puppyJs.puppiesArr;
var Puppy = puppyJs.Puppy;


var counter = 1;

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


//GOT FROM APP.JS, MIGHT NEED TO MODIFY
// app.get("/puppies/:id", function(req, res){
//
//   for(var i = 0; i < puppies.length; i++){
//     if(puppies[i].id === Number(req.params.id)){
//       res.send(puppies[i]);
//     }
//   }
// });

module.exports = router;
