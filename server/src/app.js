const express = require('express');
// CORS - Cross-Origin Resource Sharing
const cors = require('cors');
const planetsRouter = require('./routes/planets/planets.router');
const app = express();


// In order to use local host at port 3000, cors is needed. It won't work without cors
app.use(cors({
  origin: 'http://localhost:3000'
}));
// checks content type which is json
app.use(express.json());
// connecting router to express
app.use(planetsRouter);

module.exports = app;