
const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger.json'; // Path where swagger.json will be generated
const endpointsFiles = ['./routes/*.js']; // Your route files

const doc = {
  info: {
    title: 'API Documentation', // Title of your API
    description: 'This is the API documentation generated for our project.', // Description of the API
  },
  host: 'localhost:3000', // Your server's host and port
  schemes: ['http'], // The protocol (http or https)
  definitions: {} // Definitions for your API models (optional)
};

// Generate swagger.json file
swaggerAutogen(outputFile, endpointsFiles, doc);
