const server = require('../app.js');
const config = require('../config/config.js');
const chai = require('chai');
const request = require('supertest');

const { assert } = chai;

// Supertest allows you to run your server in unit tests to verify end-user behavior
// Documentation: https://www.npmjs.com/package/supertest

describe('Routes.index', () => {
  beforeEach(() => {
    // Code here will run before each test (e.g. mock objects)
  });

  afterEach(() => {
    // Code here will run after each test (e.g. clean up mocks)
  });

  it('returns http 200', (done) => {
    request(server)
      .get('/')
      .expect(200)
      .end((err) => {
        if (err) {
          return done(err);
        }

        return done();
      });
  });

  it('displays the app name', (done) => {
    request(server)
      .get('/')
      .expect((res) => {
        const { appName } = config;
        assert(res.text.includes(appName));
      })
      .end((err) => {
        if (err) {
          return done(err);
        }

        return done();
      });
  });
});
