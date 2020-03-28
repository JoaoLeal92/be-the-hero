// Faz a conexão com o banco de dados
const knex = require('knex');
const configuration = require('../../knexfile');

const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;

// Escolhe a conexão de development no arquivo knexfile
const connection = knex(config);

module.exports = connection;