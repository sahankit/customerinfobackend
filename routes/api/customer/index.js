const express = require('express');
const perfy = require('perfy');
const customer = require('../../../src/customer');



const router = express.Router({ mergeParams: true });

// Toolkit endpoints
router.get('/', (req, res) => {
  const params = Object.assign({}, req.params);
  const query = Object.assign({}, req.query);
  perfy.exec((done) => {
    customer.fetchAllCustomer().then((data) => {
      res.status(200).send(data);
      const perf = done();
      console.log(perf);
    }).catch((err) => {
      res.status(500).send(err);
      const perf = done();
      console.log(perf);
    });
  });
});

router.get('/:custId', (req, res) => {
  const params = Object.assign({}, req.params);
  perfy.exec((done) => {
    customer.fetchCustomerAddress(params.custId).then((data) => {
      res.status(200).send(data);
      const perf = done();
      console.log(perf);
    }).catch((err) => {
      res.status(500).send(err);
      const perf = done();
      console.log(perf);
    });
  });
});

// Catch all other paths as invalid.
router.use((req, res) => {
  res.status(400).send({
    error: {
      status: 400,
      message: `Unexpected route for the api/toolkit endpoint.`
    }
  });
 });

module.exports = router;
