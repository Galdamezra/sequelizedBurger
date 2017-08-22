//set up model for interface with DATABASE

module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {

    burger_name: DataTypes.STRING,
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return Burger;
};


// var orm = require("../config/orm.js");
//
// var burger = {
//   all: function (bb) {
//     orm.all("burgers", function (res) {
//       bb(res);
//     });
//   },
//   //cols and vals are arrays
//   create: function (cols, vals, bb) {
//     orm.create("burgers", cols, vals, function (res) {
//       bb(res);
//     });
//   },
//   update: function (objColVals, condition, bb) {
//     orm.update("burgers", objColVals, condition, function (res) {
//       bb(res);
//     });
//   }
// };
//
// module.exports = burger;
