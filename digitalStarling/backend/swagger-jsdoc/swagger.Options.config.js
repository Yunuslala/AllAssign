const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Ecommerce',
            version: '1.0.0',
            description: 'APIs for an Ecommerce App',
        },
        components: {
            securitySchemes: {
                bearerAuth: {        
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        }
    },
    apis: [
        './swagger-jsdoc/*.js',
    ]
};

module.exports = {
    options
}