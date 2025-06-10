const express = require('express');
const path = require('path');
// CORS - Cross-Origin Resource Sharing
const cors = require('cors');
// Logging
const morgan = require('morgan');
const planetsRouter = require('./routes/planets/planets.router');
const launchesRouter = require('./routes/launches/launches.router');
const app = express();


// In order to use local host at port 3000, cors is needed. The server won't work without cors.
app.use(cors({
  origin: 'http://localhost:3000'
}));
// Logging
app.use(morgan('combined'));
// checks content type which is json
app.use(express.json());
/* 
* Run the app on one server instead of two.
* In order to do so, create a build from the client's package.json build script
* Then use express.static to connect app.js to the public folder that was created by the client's build script
*/
app.use(express.static(path.join(__dirname, '..', 'public')));
// connecting routers to express
app.use(planetsRouter);
app.use(launchesRouter);
// Connect public's index.html file
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})

module.exports = app;