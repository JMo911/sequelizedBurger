var orm = require("../config/orm");
import Sequelize from 'sequelize';
import sequelize from '../config/connection'

var burger = {
  all: function(cb) {
    burger.findAll().then(burgers =>res.json(burgers));
    // orm.all("burgers", function(res) {
    //   cb(res);
    // });
  },
  create: function(name, cb) {
    // orm.create("burgers", ["burger_name", "devoured"], [name, false], cb);
    burger.create({
      burgername: Sequelize.STRING,
      devoured: false
    })
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("burgers", {
      devoured: true
    }, condition, cb);
  }
};

module.exports = burger;
