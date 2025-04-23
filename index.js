const express = require('express');
const app = express();

// Respond with "Hello World" when a GET request is made to the root "/"
app.get('/', (req, res) => {
  res.send('Hello from Nodejs App');
});

// Add this line to start the server
app.listen(3000, '0.0.0.0', () => {
  console.log('Server is running on port 3000');
});
