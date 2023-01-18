const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const express = require('express');
const app = express();;

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'NodeSequelize practice',
            description: 'This is basic nodeSequelize project practice.',
            version: '1.0.0',
            contact: {
                email: 'vikasmaurya@nimapinfotech.com'
            }
        },
        servers: [
            {
                url: `https://localhost:3000`
            }
        ]
    },
    apis: ['./routes/courseRouter'],
    
}

const swaggerSpec = swaggerJsDoc(options);
module.exports = swaggerSpec;



////////////////////

app.get('./swagger.json', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

