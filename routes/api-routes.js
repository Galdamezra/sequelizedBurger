var db = require("../models");

module.exports = function(app) {
  app.get("/", function(req, res) {
    db.Burger.findAll({
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  app.post("/", function(req, res) {
    db.Burger
  })
}
