const OS = require('os');
const cluster = require('cluster');
const fs = require('fs');
const https = require('https');

class Server {
  constructor(expressApp) {
    this.expressApp = expressApp;
  }

  startInStandaloneMode() {
    const activeApp = this.expressApp.listen(this.expressApp.get('port'), () => {
      const httpsConfig = this.expressApp.get('https');
        const httpsServer = https.createServer({
        }, this.expressApp)
          .listen(httpsConfig.port, () => {
           });
    });
  }
}

module.exports = Server;
