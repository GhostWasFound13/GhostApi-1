const express = require('express');
const app = express();

// Import your route loader
const routes = require('./routes');

// Use the routes
app.use('/', routes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
