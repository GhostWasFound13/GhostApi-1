const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// Define the /api/hug endpoint to serve a random GIF image
router.get('/hug', (req, res) => {
  // Get a list of all GIF files in the hug_images folder
  const imageDirectory = path.join(__dirname, '../public/hug');
  const gifFiles = fs.readdirSync(imageDirectory).filter(file => file.endsWith('.gif'));

  // Select a random GIF file
  const randomIndex = Math.floor(Math.random() * gifFiles.length);
  const randomGif = gifFiles[randomIndex];

  // Construct the path to the selected GIF
  const gifPath = path.join(imageDirectory, randomGif);

  // Set the response content type to 'image/gif'
  res.set('Content-Type', 'image/gif');

  // Serve the random GIF image
  res.sendFile(gifPath);
});

module.exports = router;
