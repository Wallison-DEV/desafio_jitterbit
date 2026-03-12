# Order API – Jitterbit Test

API REST desenvolvida em **Node.js** para gerenciamento de pedidos.

O sistema permite:

* Criar pedidos
* Listar pedidos
* Buscar pedido por ID
* Atualizar pedidos
* Remover pedidos

Os dados são armazenados em um banco **SQLite local**, criado automaticamente ao iniciar o projeto.

---

# Tecnologias utilizadas

* Node.js
* Express
* SQLite
* Sequelize (ORM)
* Nodemon
* Dotenv

---

# Estrutura do projeto

```
order-api
│
├── src
│   ├── config
│   │   └── database.js
│   │
│   ├── controllers
│   │   └── orderController.js
│   │
│   ├── models
│   │   ├── orderModel.js
│   │   └── itemModel.js
│   │
│   ├── routes
│   │   └── orderRoutes.js
│   │
│   ├── services
│   │   └── orderService.js
│   │
│   └── app.js
│
├── .env
├── .gitignore
├── database.sqlite
├── package.json
├── server.js
└── README.md
```

---

# Instalação

Clone o repositório:

```
git clone https://github.com/seu-usuario/order-api.git
```

Entre na pasta do projeto:

```
cd order-api
```

Instale as dependências:

```
npm install
```

---

# Variáveis de ambiente

Crie o arquivo `.env` na raiz do projeto ou copie o exemplo:

```
cp .env.example .env
```

Conteúdo do `.env`:

```
PORT=3000
```

---

# Executando a aplicação

Inicie o servidor com:

```
npm run dev
```

O servidor será iniciado em:

```
http://localhost:3000
```

O banco **SQLite será criado automaticamente** na primeira execução.

---

# Estrutura do Pedido (entrada)

A API recebe dados neste formato:

```json
{
  "numeroPedido": "v10089015vdb-01",
  "valorTotal": 10000,
  "dataCriacao": "2023-07-19T12:24:11.5299601+00:00",
  "items": [
    {
      "idItem": "2434",
      "quantidadeItem": 1,
      "valorItem": 1000
    }
  ]
}
```

---

# Transformação de Dados

Antes de salvar no banco, os dados passam por **transformação (mapping)**:

```json
{
  "orderId": "v10089015vdb",
  "value": 10000,
  "creationDate": "2023-07-19T12:24:11.529Z",
  "items": [
    {
      "productId": 2434,
      "quantity": 1,
      "price": 1000
    }
  ]
}
```

---

# Endpoints da API

## Criar pedido

POST

```
http://localhost:3000/order
```

Body:

```json
{
  "numeroPedido": "v10089015vdb-01",
  "valorTotal": 10000,
  "dataCriacao": "2023-07-19T12:24:11.5299601+00:00",
  "items": [
    {
      "idItem": "2434",
      "quantidadeItem": 1,
      "valorItem": 1000
    }
  ]
}
```

---

## Buscar pedido por ID

GET

```
http://localhost:3000/order/{orderId}
```

Exemplo:

```
http://localhost:3000/order/v10089015vdb
```

---

## Listar pedidos

GET

```
http://localhost:3000/order/list
```

---

## Atualizar pedido

PUT

```
http://localhost:3000/order/{orderId}
```

---

## Deletar pedido

DELETE

```
http://localhost:3000/order/{orderId}
```

---

# Banco de dados

O projeto utiliza **SQLite**, criando automaticamente o arquivo:

```
database.sqlite
```

Tabelas criadas:

### Orders

| Campo        | Tipo   |
| ------------ | ------ |
| orderId      | string |
| value        | number |
| creationDate | date   |

### Items

| Campo     | Tipo   |
| --------- | ------ |
| id        | number |
| orderId   | string |
| productId | number |
| quantity  | number |
| price     | number |

---

# Testando a API

A API pode ser testada usando:

* Thunder Client (VSCode)
* Postman

---

# Testando com Thunder Client

## 1. Instalar extensão

No VSCode:

1. Abra **Extensions**
2. Pesquise **Thunder Client**
3. Clique em **Install**

---

## 2. Criar requisição

Clique no ícone do **Thunder Client** e depois em **New Request**.

---

## Criar pedido

Método:

```
POST
```

URL:

```
http://localhost:3000/order
```

Body (JSON):

```json
{
  "numeroPedido": "v10089015vdb-01",
  "valorTotal": 10000,
  "dataCriacao": "2023-07-19T12:24:11.5299601+00:00",
  "items": [
    {
      "idItem": "2434",
      "quantidadeItem": 1,
      "valorItem": 1000
    }
  ]
}
```

Clique em **Send**.

---

## Listar pedidos

Método:

```
GET
```

```
http://localhost:3000/order/list
```

---

## Buscar pedido

```
GET http://localhost:3000/order/v10089015vdb
```

---

## Atualizar pedido

```
PUT http://localhost:3000/order/v10089015vdb
```

---

## Deletar pedido

```
DELETE http://localhost:3000/order/v10089015vdb
```

---

# Testando com Postman

## 1. Instalar Postman

Download:

https://www.postman.com/downloads/

---

## 2. Criar requisição

Clique em **New → HTTP Request**

---

## Criar pedido

Método:

```
POST
```

URL:

```
http://localhost:3000/order
```

Body → **raw → JSON**

```json
{
  "numeroPedido": "v10089015vdb-01",
  "valorTotal": 10000,
  "dataCriacao": "2023-07-19T12:24:11.5299601+00:00",
  "items": [
    {
      "idItem": "2434",
      "quantidadeItem": 1,
      "valorItem": 1000
    }
  ]
}
```

Clique em **Send**.

---

## Outros endpoints

### Listar pedidos

```
GET http://localhost:3000/order/list
```

### Buscar pedido

```
GET http://localhost:3000/order/v10089015vdb
```

### Atualizar pedido

```
PUT http://localhost:3000/order/v10089015vdb
```

### Deletar pedido

```
DELETE http://localhost:3000/order/v10089015vdb
```

---

# Melhorias futuras

* Documentação com Swagger
* Testes automatizados
* Validação de dados
* Autenticação com JWT

---

# Autor

Wallison Kauê Alves Costa
Desenvolvedor Full Stack
