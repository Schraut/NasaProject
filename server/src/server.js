// Run api on a port specified by the environment or default to port 8000
const PORT = process.env.PORT || 8000

const app = require('./app');
const http = require('http');

const server = http.createServer(app);

const { loadPlanetsData } = require('./models/planets.model');

// Start server and load planets data
async function startServerAndLoadData() {
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Api is running on port ${PORT}`);
  })
}

startServerAndLoadData();


// Start api server, run:
// npm start