"use strict";
//Set variables needed
const PORT = 8000;
const express = require("express");
const app = express();
var supertest = require("supertest");
var bodyParser = require("body-parser");
var path = require("path")
var ejs = require("ejs");
var myObj = {};
var counter = 1;
var puppies = [];

app.set("view engine", "ejs");

//What to display in root (localhost:8000);
app.get("/", function(req,res){
  res.send(puppies);
});

//What to display in localhost:8000/about
app.get('/about', function(req, res){
  res.render('about.ejs');
});

//What to display in localhost:8000/contact
app.get('/contact', function(req, res){
  res.render('contact.ejs');
});


app.get("/contact", function (req, res) {
  res.send("paras.")
});

app.get("/puppies/new", function (req, res) {
  res.render("form");
});

app.get("/puppies/:id", function(req, res){

  for(var i = 0; i < puppies.length; i++){
    if(puppies[i].id === Number(req.params.id)){
      res.send(puppies[i]);
    }
  }
});

//Puppies page
app.get("/puppies", function (req, res) {
  myObj = {
    "name": req.query.name,
    "age": req.query.age,
    "id": counter
  };

if(myObj.name){
  puppies.push(myObj);
  counter++;
}
  res.status(302).send(puppies);
});


//Listen to the server
app.listen(PORT, function(){
  console.log(`Server is listening on ${PORT}`);
});


module.exports = {
  app,
  puppies
};

/*
### Background
Your task is to build an application that allows the user
to see a list of puppies as well as add and see individual
puppies.
You should use an array of `puppies` to create and display
puppies (while you are building this, think why an array
may not be the best long term solution for storing data).

## Routes

You'll need the following `puppies` routes:

* `get` `/` to display information about all of the puppies.
* `get` `/puppies/new` to get a form to save a new puppy
(each puppy should have an id which increments, a name
and an age)
* `get` `/puppies` to save a puppy to your `puppies` array.
* `get` `/puppies/:id` to find a puppy by id in the array
of `puppies` and display it.

You'll need the following `site` related routes:

* `get` `/about` serve a static about your page.
* `get` `/contact` serve a static `contact` page.

## Getting started

Start your node application by using the same steps we did in
class:

- fork and clone this repository
- run `npm install` to install dependencies
- make sure you have a `views` folder for your application (you will want to have subfolders for your site views and puppies views)
- make your first commit!
- Start in your app.js by including the proper dependencies and middleware

When you're done - give this puppy a high five!

![http://cutepuppyclub.com/wp-content/uploads/2015/05/648b42e4-ef9e-41e2-9844-f02c61cbe1cc.jpg](http://cutepuppyclub.com/wp-content/uploads/2015/05/648b42e4-ef9e-41e2-9844-f02c61cbe1cc.jpg)
*/
