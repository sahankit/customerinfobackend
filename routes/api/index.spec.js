const server = require('../../app.js');
const request = require('supertest');
const chai = require('chai');

// eslint-disable-next-line no-unused-vars
const should = chai.should();

describe('Routes.api', () => {
  describe('/:version', () => {
    it('Returns http 400 and JSON error body if version is not recognized', (done) => {
      request(server)
        .get('/api/invalid')
        .expect(400)
        .expect((res) => {
          // eslint-disable-next-line no-unused-expressions
          res.should.be.json;
          res.body.should.have.property('error');
          res.body.error.should.have.property('message');
        })
        .end((err) => {
          if (err) {
            return done(err);
          }

          return done();
        });
    });
  });

  describe('/:version/:endpoint', () => {
    it('returns http 400 and JSON error body if api endpoint not recognized', (done) => {
      request(server)
        .get('/api/v1/invalid')
        .expect(400)
        .expect((res) => {
          // eslint-disable-next-line no-unused-expressions
          res.should.be.json;
          res.body.should.have.property('error');
          res.body.error.should.have.property('message');
        })
        .end((err) => {
          if (err) {
            return done(err);
          }

          return done();
        });
    });
  });
});
