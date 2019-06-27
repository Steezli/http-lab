const request = require('supertest');
const server = require('../app');

describe('application routes', () => {
  it('returns index page at /index.html', () => {
    return request(server)
      .get('/index.html')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.text).toEqual(expect.stringContaining('a trap!'));
      });
  });

  it('returns 404 not found if not index.html', () => {
    return request(server)
      .get('/test.html')
      .then(res => {
        expect(res.status).toEqual(404);
        expect(res.text).toEqual(expect.stringContaining('Page Not Found!'));
      });
  });
});
