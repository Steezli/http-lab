const request = require('supertest');
const server = require('../app');

describe('application routes', () => {
  it('check http routes', () => {
    return request(server)
      .get('/')
      .then(res => {
        expect(res.text).toEqual(expect.stringContaining('screw you brah'));
      });
  });
});
