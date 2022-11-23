// Using https://rickandmortyapi.com/api fetch all characters from episode 7.
// documentation can be found here: https://rickandmortyapi.com/documentation/#rest

// RUN npm install IN THIS FOLDER BEFORE RUNNING YOUR CODE!
const fetch = require("node-fetch");

async function getCharactersFromEpisode(episodeNumber) {
  const characterURL = "https://rickandmortyapi.com/api/character/";
  const charactersIDs = await fetch(
    `https://rickandmortyapi.com/api/episode/${episodeNumber}`
  )
    .then((response) => response.json())
    .then((episode) =>
      episode.characters.map((charURL) => charURL.replace(characterURL, ""))
    )
    .then((id) => id.map((nr) => +nr));

  const characterPromises = charactersIDs.map((id) =>
    fetch(`${characterURL}${id}`).then((res) => res.json())
  );

  return Promise.all(characterPromises);
}

getCharactersFromEpisode(7).then((characters) =>
  characters.forEach((character) => console.log(character.name))
);
 