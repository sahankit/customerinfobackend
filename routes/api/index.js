const LOGREF = '/api';
const express = require('express');

const LATEST_API_VERSION = 'v1';
const router = express.Router({ mergeParams: true });

// Handle CORS
router.use('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

// Set browser cache control
router.use('/*', (req, res, next) => {
  res.cacheControl({maxAge: 600 });
  next();
});

// Handle Options.
router.options('/*', (req, res) => {
  res.send(200);
});

// Enforce versioning of the API.
router.use('/', (req, res, next) => {
  const { version } = req.params;
  if (version.match(/v[1-9]/) === null) {
    res.status(400).send({
      error: {
        status: 400,
        message: `Version is not recognized (/api/${LATEST_API_VERSION})`
      }
    });
  }
  else {
    // No need to version here, since we are merging params down, the
    // individual route modules can check the version param.
    next();
  }
});

// API Endpoints (as individual modules)
router.use('/customer', require('./customer'));

// Catch all other paths as invalid.
router.use((req, res) => {
  res.status(400).send({
    error: {
      status: 400,
      message: 'Could not find the specified endpoint for this API.'
    }
  });
});

module.exports = router;
