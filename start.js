const app = require('./app');
const config = require('./config/config');
const Server = require('./support/server');

const server = new Server(app);

  server.startInStandaloneMode();
