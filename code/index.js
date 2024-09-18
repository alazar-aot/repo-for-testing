// Import the express library
const express = require('express');

// Create an instance of the express application
const app = express();

// Define the port the server will listen on
const PORT = 3000;

// Create a route for the root URL ('/') that sends a response
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
