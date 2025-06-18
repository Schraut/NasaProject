const request = require('supertest');
const app = require('../../app');

describe('test GET /launches', () => {
  test('It should respond with 200 success. Yep', async () => {
    const response = await request(app)
      .get('/launches')
      .expect('Content-Type', /json/)
      .expect(200)
  });
});

describe('test POST /launch', () => {
  test('It should respond with 201 created', async () => {
    const response = await request(app)
      .post('/launches')
      .send({
        mission: 'USS Enterprise',
        rocket: 'NCC 1701-D',
        target: 'Kepler-186 f',
        launchDate: 'February 1, 2026'
      })
      .expect('Content-Type', /json/)
      .expect(201)
  });
});
