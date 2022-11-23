// Using https://rickandmortyapi.com/api fetch all characters from episode 7.
// documentation can be found here: https://rickandmortyapi.com/documentation/#rest

// RUN npm install IN THIS FOLDER BEFORE RUNNING YOUR CODE!
const fetch = require("node-fetch");

function getCharactersFromEpisode(episodeNumber) {
  const episodesURL = fetch(
    `https://rickandmortyapi.com/api/episode/${episodeNumber}`
  );
  const characters = fetch(`https://rickandmortyapi.com/api/character/`);
  const somearray = [];
  const resultCharacters = somearray.push(
    episodesURL
      .then((response) => response.json())
      .then((episode) => episode.characters)
  );

  return console.log(somearray);
}

getCharactersFromEpisode(7);
// .then((characters) =>
//   characters.forEach((character) => console.log(character))
// );
