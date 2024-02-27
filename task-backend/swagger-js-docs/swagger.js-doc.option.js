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
    operationsSorter: 'alpha',  // Sort operations alphabetically
  showRequestHeaders: false,  // Hide request headers
  showRequestBodyDescription: true,
    apis: [
        './swagger-js-docs/*.js',
    ]
};

module.exports = {
    options
}