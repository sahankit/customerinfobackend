const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.cacheControl('no-cache');
  res.status(200)
    .send('ACTIVE');
});

module.exports = router;
