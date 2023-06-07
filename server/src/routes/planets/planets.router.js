const express = require('express');
// Controller
const { getAllPlanets } = require('./planets.controller')
// Router
const planetsRouter = express.Router();
// GET
planetsRouter.get('/planets', getAllPlanets);

module.exports = planetsRouter;