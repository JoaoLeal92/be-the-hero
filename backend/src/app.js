const express = require('express');
// Importa módulo de segurança CORS
const cors = require('cors');
// Importa as rotas disponíveis do arquivo routes.js
const routes = require('./routes');
const { errors } = require('celebrate')

const app = express();

app.use(cors());
// Informa ao backend que as requisições serão feitas em formato json
app.use(express.json());
app.use(routes);
app.use(errors());


module.exports = app;
/*
url ==> rota/recurso (ex.: localhost:3333/users)
*/

/* 
* Métodos HTTP
*
* GET: Buscar informação no backend
* POST: Criar informação no backend
* PUT: Alterar informação no backend
* DELETE: Deletar informação no backend 
*/

/* 
* Tipos de parâmetros:
*
* Query Params: Parâmetros nomeados enviados na rota após "?" (Filros, paginação)
* Route Params: Parâmetros utilizados para identificar recursos
* Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/* 
* Comunicação com bancos de dados
*
* Drivers: SELECT * FROM users
* Query Builder: table('users').select('*').where()
*/
