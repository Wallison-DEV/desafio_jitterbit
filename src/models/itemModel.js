const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Order = require("./orderModel");

const Item = sequelize.define("Item", {

  productId: {
    type: DataTypes.INTEGER
  },

  quantity: {
    type: DataTypes.INTEGER
  },

  price: {
    type: DataTypes.INTEGER
  }

});

Order.hasMany(Item, { foreignKey: "orderId" });
Item.belongsTo(Order, { foreignKey: "orderId" });

module.exports = Item;