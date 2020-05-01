const express = require('express');
const fs = require('fs');
const path = require('path');

const BUILD_INFO_FILE_PATH = '../config/build-info.js';

let buildInfo;
if (fs.existsSync(path.join(__dirname, BUILD_INFO_FILE_PATH))) {
  // eslint-disable-next-line
  buildInfo = require(BUILD_INFO_FILE_PATH);
}
else {
   buildInfo = { version: 'unknown' };
}

const router = express.Router();

router.get('/', (req, res) => {
  res.cacheControl('no-cache');
  res.status(200)
    .type('json')
    .send(buildInfo);
});

module.exports = router;
