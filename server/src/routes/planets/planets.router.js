const express = require('express');
// Controller
const { httpGetAllPlanets } = require('./planets.controller')
// Router
const planetsRouter = express.Router();
// GET
planetsRouter.get('/', httpGetAllPlanets);

module.exports = planetsRouter;