const path = require('path');

const rootPath = path.normalize(`${__dirname}/../..`);

module.exports = {
  appName: 'ads-content-service',
  root: rootPath,
  port: process.env.PORT || 8080,
  https: {
    enabled: true,
    port: process.env.TLS_PORT || 8443
  }
};
