//create all functions that will do routing for app

var express = require("express");
var router = express.Router();
var burger = require("../models/burgers.js");

// router.get("/", function (req, res) {
//   res.redirect("/burgers");
// });

router.get("/", function (req, res) {
  db.Burger.findAll()
    .then(function(dbBurger) {
      console.log(dbBurger);

      var hbsObject = { burger: dbBurger};
      return res.render("index", hbsObject);
    })
  //DELETE REFERENCE TO ORM ALL
  // burger.all(function(data) {
  //   var hbsObject = {
  //     burgers: data
  //   };
  //   console.log(hbsObject);
  //   res.render("index", hbsObject);
  // });
});

router.post("/", function (req, res) {

//DELETE REFERENCE TO ORM CREATE function
  // burger.create([
  //   "burger_name", "devoured"
  // ], [
  //   req.body.burger_name, req.body.devoured
  // ], function () {
  //   res.redirect("/");
  // });
});

router.put("/burgers/update/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  //DELETE REFERENCE TO ORM update
  // burger.update({
  //   devoured: req.body.devoured
  // }, condition, function() {
  //   res.redirect("/");
  // });
});


module.exports = router;
