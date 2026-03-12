const Order = require("../models/orderModel");
const { mapOrder } = require("../Services/orderService");

exports.createOrder = async (req, res) => {

  try {

    const mappedOrder = mapOrder(req.body);

    const order = new Order(mappedOrder);

    await order.save();

    res.status(201).json(order);

  } catch (error) {

    res.status(500).json({
      message: "Erro ao criar pedido",
      error: error.message
    });

  }

};

exports.getOrder = async (req, res) => {

  try {

    const order = await Order.findOne({
      orderId: req.params.id
    });

    if (!order) {
      return res.status(404).json({
        message: "Pedido não encontrado"
      });
    }

    res.json(order);

  } catch (error) {

    res.status(500).json({
      message: "Erro ao buscar pedido"
    });

  }

};

exports.listOrders = async (req, res) => {

  try {

    const orders = await Order.find();

    res.json(orders);

  } catch (error) {

    res.status(500).json({
      message: "Erro ao listar pedidos"
    });

  }

};

exports.updateOrder = async (req, res) => {

  try {

    const mappedOrder = mapOrder(req.body);

    const order = await Order.findOneAndUpdate(
      { orderId: req.params.id },
      mappedOrder,
      { new: true }
    );

    res.json(order);

  } catch (error) {

    res.status(500).json({
      message: "Erro ao atualizar pedido"
    });

  }

};

exports.deleteOrder = async (req, res) => {

  try {

    await Order.findOneAndDelete({
      orderId: req.params.id
    });

    res.json({
      message: "Pedido removido"
    });

  } catch (error) {

    res.status(500).json({
      message: "Erro ao deletar pedido"
    });

  }

};