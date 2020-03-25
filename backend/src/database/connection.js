// Faz a conexão com o banco de dados
const knex = require('knex');
const configuration = require('../../knexfile');

// Escolhe a conexão de development no arquivo knexfile
const connection = knex(configuration.development);

module.exports = connection;