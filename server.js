require("dotenv").config();

const app = require("./src/app");
const sequelize = require("./src/config/database");

const PORT = 3000;

sequelize.sync().then(() => {

  console.log("Banco SQLite conectado");

  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });

});