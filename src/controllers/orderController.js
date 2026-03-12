const Order = require("../models/orderModel");
const Item = require("../models/itemModel");
const { mapOrder } = require("../services/orderService");

exports.createOrder = async (req, res) => {
  try {

    const data = mapOrder(req.body);

    const order = await Order.create({
      orderId: data.orderId,
      value: data.value,
      creationDate: data.creationDate
    });

    for (const item of data.items) {
      await Item.create({
        ...item,
        orderId: order.orderId
      });
    }

    res.status(201).json(order);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getOrder = async (req, res) => {
  try {

    const order = await Order.findByPk(req.params.id, {
      include: Item
    });

    if (!order) {
      return res.status(404).json({ message: "Pedido não encontrado" });
    }

    res.json(order);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.listOrders = async (req, res) => {
  try {

    const orders = await Order.findAll({
      include: Item
    });

    res.json(orders);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateOrder = async (req, res) => {
  try {

    const data = mapOrder(req.body);

    const order = await Order.update(data, {
      where: { orderId: req.params.id }
    });

    res.json(order);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteOrder = async (req, res) => {
  try {

    await Order.destroy({
      where: { orderId: req.params.id }
    });

    res.json({ message: "Pedido removido" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};