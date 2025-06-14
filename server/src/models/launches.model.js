const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: 'Kepler Exploration X',
  rocket: 'Explorer IS1',
  launchDate: new Date('December 27, 2029'),
  destination: 'Kepler-442 b',
  customer: ['Me', 'NASA'],
  upcoming: true,
  success: true
}

launches.set(launch.flightNumber, launch);
module.exports = {
  launches,
}