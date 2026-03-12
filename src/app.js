const express = require("express");
const cors = require("cors");

const orderRoutes = require("./Routes/orderRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/order", orderRoutes);

module.exports = app;