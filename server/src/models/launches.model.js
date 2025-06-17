const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: 'Kepler Exploration X',
  rocket: 'Explorer IS1',
  launchDate: new Date('December 27, 2029'),
  target: 'Kepler-442 b',
  customer: ['Me', 'NASA'],
  upcoming: true,
  success: true
}

launches.set(launch.flightNumber, launch);

function existsLaunchWithId(launchId) {
  console.log(`Launch exists? `, launches.has(launchId))
  return launches.has(launchId)
}

function getAllLaunches() {
  return Array.from(launches.values())
}

function addNewLaunch(launch) {
  latestFlightNumber++
  launches.set(latestFlightNumber, Object.assign(launch, {
    flightNumber: latestFlightNumber,
    success: true,
    upcoming: true,
    customers: ['Me', 'NASA'],
  }))
}

function abortLaunchById(launchId) {
  const aborted = launches.get(launchId)
  aborted.upcoming = false;
  aborted.success = false;
  return aborted
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
  existsLaunchWithId,
  abortLaunchById
}