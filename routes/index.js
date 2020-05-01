const express = require('express');
const config = require('../config/config');
const api = require('./api');

const router = express.Router({ mergeParams: true });

// API path
router.use('/api/:version', api);

router.get('/', (req, res) => {
  res.render('index', {
    title: config.appName,
    environmentName: config.environmentName
  });
});

module.exports = router;
