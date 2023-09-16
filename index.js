const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const fs = require('fs');

// Function to get a random GIF file from a folder
function getRandomGIF(folder) {
  const files = fs.readdirSync(folder).filter(file => file.endsWith('.gif'));
  const randomIndex = Math.floor(Math.random() * files.length);
  const randomGIF = files[randomIndex];
  return `${folder}/${randomGIF}`;
}

// Define folders for each action
const actionFolders = {
  slap: './public/slap_gifs',
  hug: './public/hug_gifs',
  // Add more actions and their folders as needed
};

app.get('/', (req, res) => {
  res.send('Welcome to the Anime Action API!');
});

// Endpoint for the /slap action
app.get('/slap', (req, res) => {
  const randomGIF = getRandomGIF(actionFolders.slap);
  res.sendFile(randomGIF);
});

// Endpoint for the /hug action
app.get('/hug', (req, res) => {
  const randomGIF = getRandomGIF(actionFolders.hug);
  res.sendFile(randomGIF);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
