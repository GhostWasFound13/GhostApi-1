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

// Array of random facts
const randomFacts = [
  'Bananas are berries, but strawberries are not.',
  'Honey never spoils; archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.',
  'Octopuses have three hearts.',
  'The Eiffel Tower can be 15 cm taller during the summer due to the expansion of the iron it is made of.',
  // Add more random facts as needed
];

// Function to get a random fact
function getRandomFact() {
  const randomIndex = Math.floor(Math.random() * randomFacts.length);
  return randomFacts[randomIndex];
}

// Define folders for each action
const actionFolders = {
  slap: './public/slap_gifs',
  hug: './public/hug_gifs',
  // Add more actions and their folders as needed
};

app.get('/', (req, res) => {
  res.send('Welcome to the Anime Action and Random Facts API!');
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

// Endpoint for a random fact
app.get('/randomfact', (req, res) => {
  const randomFact = getRandomFact();
  res.send(randomFact);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
