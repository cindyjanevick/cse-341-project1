
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API', // Title of your API
    description: 'Contacts API', // Description of the API
  },
  host: 'localhost:3000', // Your server's host and port
  schemes: ['http','http'], // The protocol (http or https)
  
};
const outputFile = './swagger.json'; // Path where swagger.json will be generated
const endpointsFiles = ['./routes/index.js']; // Your route files



// Generate swagger.json file
swaggerAutogen(outputFile, endpointsFiles, doc);
