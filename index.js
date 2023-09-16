const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const fs = require('fs');

// Function to get a random image file from a folder
function getRandomImage(folder) {
  const files = fs.readdirSync(folder);
  const randomIndex = Math.floor(Math.random() * files.length);
  const randomImage = files[randomIndex];
  return `${folder}/${randomImage}`;
}

// Define folders for each action
const actionFolders = {
  slap: './slap_images',
  hug: './hug_images',
  // Add more actions and their folders as needed
};

app.get('/', (req, res) => {
  res.send('Welcome to the Anime Action API!');
});

// Endpoint for the /slap action
app.get('/slap', (req, res) => {
  const randomImage = getRandomImage(actionFolders.slap);
  res.sendFile(randomImage);
});

// Endpoint for the /hug action
app.get('/hug', (req, res) => {
  const randomImage = getRandomImage(actionFolders.hug);
  res.sendFile(randomImage);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
