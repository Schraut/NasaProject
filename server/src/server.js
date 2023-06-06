// Run api on a port specified by the environment or default to port 8000
const PORT = process.env.PORT || 8000

const app = require('./app');
const http = require('http');

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Api is running on port ${PORT}`)
})

// Start api server, run:
// npm start