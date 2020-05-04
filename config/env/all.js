const path = require('path');

const rootPath = path.normalize(`${__dirname}/../..`);

module.exports = {
  appName: 'customer-info',
  root: rootPath,
  port: process.env.PORT || 8080,
  https: {
    enabled: true,
    port: process.env.TLS_PORT || 8443
  },
  database:{
    host: "https://www.db4free.net",
    user: "ankit_sah",
    password: "Ankit@88",
    database: "customer_conviva"
  }
};
