const request = require('supertest');
const app = require('../');

describe('GET /estudiantes', function() {
  it('se encuentra los estudiantes vacios', function() {
    return request(app)
      .get('/estudiantes')
      .expect(200)
      .expect('Content-Type',/json/)
      .expect([])
    })
})