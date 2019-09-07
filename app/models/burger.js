var orm = require("../config/orm");
import Sequelize from 'sequelize';
import sequelize from '../config/connection'

class Burger extends Model{}
Burger.init({
  burger_name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: false},
  devoured: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    len: [5,40]
  }
}), {sequelize, modelName: 'burger'}

Burger.sync({force: true});

export default Burger;
