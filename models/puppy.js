"use strict";
var Puppy = function(name, age, id) {
  this.name = name;
  this.age = age;
  this.id = id;
};
var puppiesArr = [];
// var polaris = new Puppy("Polaris", 2);
// var wilson = new Puppy("Wilson", 3);
// puppiesArr.push(polaris);
// puppiesArr.push(wilson);
// console.log(polaris, wilson);
// console.log(puppiesArr);


module.exports = {
  Puppy: Puppy,
  puppiesArr: puppiesArr
};


/*Create a Puppy class in puppy.js.
You can use either the ES6 class syntax, or
the older function Puppy() tactic for creating the class.

Any time a Puppy is created,
your code should create that object using new Puppy(name, age).

Furthermore, use module.exports and
require to export this class anywhere that you need to use it.

In addition to the Puppy class,
this file should create and export
the array that holds all the puppies.
Because this is a reference type,
we can require the array anywhere it needs to be used.*/












// var Puppy = (function() {
//   var nextId = 1;
//   return function (name, age) {
//     this.name = name;
//     this.age = age;
//     this.id = nextId++;
//   };
// })();
//
//
// var wilson = new Puppy("Wilson", 2);
// var polaris = new Puppy("Polaris", 3);
//
// console.log(wilson);
// console.log(polaris);
// console.log(counter);
