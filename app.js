"use strict";
//Set variables needed
const PORT = 8000;
const express = require("express");
const app = express();
var routes = require("./routes/index");

//Listen to the server
app.listen(PORT, function(){
  console.log(`Server is listening on ${PORT} and for express REFACTOR puppies exercise`);
});

//app.sets
app.set("view engine", "ejs");
//app.uses
app.use("/", routes.statics);
app.use("/puppies", routes.puppies);
