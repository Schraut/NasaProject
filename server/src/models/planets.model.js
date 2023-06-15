// This is needed to be able to read the data from the .csv file.
// It converts text input into arrays or objects and implements the node.js stream api.
// https://csv.js.org/parse/
const { parse } = require('csv-parse');
// parse needs a stream to be able to read the file
const fs = require('fs');

// This array will store the data that is coming in
const habitablePlanets = [];
const currentStatusOfPlanet = 'koi_disposition'
const stellarFlux = 'koi_insol'
const planetRadius = 'koi_prad'
const planetName = 'kepler_name'

function isPlanetHabitable(planet) {
  return planet[currentStatusOfPlanet] === 'CONFIRMED'
    && planet[stellarFlux] > 0.36
    && planet[stellarFlux] < 1.11
    && planet[planetRadius] < 1.6;
}

fs.createReadStream('kepler_data.csv')
  .pipe(parse({ // pipe connects the parse function with fs
    comment: '#',
    columns: true,
  }))
  .on('data', (data) => { // on is an event handler
    if (isPlanetHabitable(data)) {
      habitablePlanets.push(data);
    }

  })
  .on('error', (err) => {
    console.log(`Error: ${err}`)
  })
  .on('end', () => {
    console.log(`${habitablePlanets.length} habitable planets found :)`);
    console.log(habitablePlanets.map((planet) => {
      return planet[planetName];
    }))
    console.log('All complete');
  })

module.exports = {
  planets: habitablePlanets,
}