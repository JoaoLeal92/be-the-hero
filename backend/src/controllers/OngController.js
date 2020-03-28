// Pacote utilizado para gerar ids aleatórios para cada ONG
const crypto = require('crypto');
// Importa as conexões com o banco de dados
const connection = require('../database/connection');

const generateUniqueId = require('../utils/generateUniqueId')

// Exporta os métodos para serem utilizadosn no arquivo routes
module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*')
    
        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = generateUniqueId();
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
        // const queryParams = request.query;
        // console.log(queryParams)
    
        // const routeParams = request.params;
        // console.log(routeParams)
    
        return response.json({ id });
    }
};