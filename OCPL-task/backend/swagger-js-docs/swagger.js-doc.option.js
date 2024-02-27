const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'todo',
            version: '1.0.0',
            description: 'APIs for an todo App',
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
        './swagger-js-docs/*.js',
    ]
};

module.exports = {
    options
}