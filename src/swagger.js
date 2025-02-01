const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Good Hamburger API",
            version: "1.0.0",
            description: "API for managing burger orders",
        },
        servers: [
            { url: "http://localhost:3000", description: "Local Server" }
        ],
    },
    apis: ["./src/routes/*.js"], 
};

const swaggerSpec = swaggerJsDoc(options);

const setupSwagger = (app) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log("Swagger documentation available at http://localhost:3000/api-docs");
};

module.exports = setupSwagger;
