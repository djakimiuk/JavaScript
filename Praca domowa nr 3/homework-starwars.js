const films = require("./sw-films.json");
const planets = require("./sw-planets.json");
const people = require("./sw-people.json");
const starships = require("./sw-starships.json");

// count sum of all starships cost from episodes 4-6
console.log(
  "Sum of all starships cost from episodes 4 - 6 is: " +
    sumAllStarshipsCostFromEpisodes(4, 6)
);

function sumAllStarshipsCostFromEpisodes(startEp, endEp) {
  let sum = 0;
  let starshipURLarray = [];
  films
    .filter(
      (currentElement) =>
        currentElement.episode_id >= startEp &&
        currentElement.episode_id <= endEp
    )
    .forEach((currentElement) =>
      starshipURLarray.push(...currentElement.starships)
    );
  sum = starships
    .filter(
      (currentElement) =>
        starshipURLarray.includes(currentElement.url) &&
        currentElement.cost_in_credits * 1 ===
          parseFloat(currentElement.cost_in_credits)
    )
    .reduce((accumulator, currentElement) => {
      return accumulator + parseFloat(currentElement.cost_in_credits);
    }, 0);
  return sum;
}

// find the fastest starship you can afford having 8500000 credits

console.log(
  "Fastest ship I can get for up to 8500000 is: " + getFastestShipFor(8500000)
);

function getFastestShipFor(money) {
  let ship;
  ship = starships
    .filter(
      (currentElement) =>
        parseFloat(currentElement.cost_in_credits) <= money &&
        currentElement.max_atmosphering_speed * 1 ===
          parseFloat(currentElement.max_atmosphering_speed)
    )
    .sort(
      (a, b) =>
        parseFloat(b.max_atmosphering_speed) -
        parseFloat(a.max_atmosphering_speed)
    );
  return JSON.stringify(ship[0].name);
}

// find planet name with the lowest difference between the rotation period and orbital period

console.log(
  "Planet name with the lowest difference between the rotation period and orbital period is: " +
    getPlanetNameWithLowestDifference("rotation_period", "orbital_period")
);

function getPlanetNameWithLowestDifference(key1, key2) {
  let planetName;
  planetName = planets
    .filter(
      (currentElement) =>
        currentElement.rotation_period * 1 ===
          parseFloat(currentElement.rotation_period) &&
        currentElement.orbital_period * 1 ===
          parseFloat(currentElement.orbital_period)
    )
    .sort(
      (a, b) =>
        a.orbital_period -
        a.rotation_period -
        (b.orbital_period - b.rotation_period)
    );
  return JSON.stringify(planetName[0].name);
}

// map all starships with crew <= 4 that were created between 10 dec 2014 and 15 dec 2014

console.log(
  "Ships with max crew of 4 created between 10.12.2014 - 12.12.2014 number is: " +
    getCrewShipFrom(4, new Date(2014, 12, 10), new Date(2014, 12, 12)).length
);

function getCrewShipFrom(maxCrew, dateStart, dateEnd) {
  let ship;
  // TODO
  return ship;
}

// create an array of people’s names from episodes 1 and 5 sorted by the diameter of origin planet low to high

console.log(
  "People from ep 1 - 5 sorted by origin planet diameter low to high: " +
    getPeopleSortedByOriginPlanetDiameter(1, 5)
);

function getPeopleSortedByOriginPlanetDiameter(startEp, endEp) {
  let people;

  return people;
}
