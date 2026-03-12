const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Order = sequelize.define("Order", {

  orderId: {
    type: DataTypes.STRING,
    primaryKey: true
  },

  value: {
    type: DataTypes.INTEGER
  },

  creationDate: {
    type: DataTypes.DATE
  }

});

module.exports = Order;