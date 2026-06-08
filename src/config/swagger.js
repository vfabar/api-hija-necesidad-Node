const swaggerJsDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Needs',
            version: '1.0.0',
            description: 'Documentación API Needs'
        },
        servers: [
            {
                url: 'http://localhost:8080/need-node',
                description: 'A través del API Gateway (Recomendado)'
            },
            {
                url: 'http://localhost:3000',
                description: 'Acceso directo local (Node)'
            }
        ]
    },
    apis: [__dirname + '/../routes/*.routes.js']
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;