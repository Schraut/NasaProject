const { getAllLaunches, addNewLaunch, existsLaunchWithId, abortLaunchById } = require('../../models/launches.model');

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
  const launch = req.body;
  // Validate the data coming in
  if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target) {
    //
    return res.status(400).json({ error: 'Missing required launch property' })
  }
  launch.launchDate = new Date(launch.launchDate);
  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: 'Invalid launch date.'
    })
  }
  addNewLaunch(launch);
  return res.status(201).json(launch) // 201 means a new resource has been created.
}

function httpAbortLaunch(req, res) {
  const launchId = Number(req.params.id);

  if (!existsLaunchWithId(launchId)) {
    return res.status(404).json({
      error: `Launch not found or it doesn't exist.`
    })
  }

  const aborted = abortLaunchById(launchId)

  return res.status(200).json(aborted)
}

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunch,
  httpAbortLaunch
}