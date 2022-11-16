const request = require('supertest');
const app = require('../lib/app');

describe('error handling', () => {
  it.skip('/error/teapot should return a 418', async () => {
    const resp = await request(app).get('/error/teapot');
    expect(resp.status).toBe(418);
    expect(resp.body).toEqual({ message: 'I am a teapot', status: 418 });
  });
  it('/error/payment should return a 402', async () => {
    const resp = await request(app).get('/error/payment');
    expect(resp.status).toBe(402);
    expect(resp.body).toEqual({ status: 402, message: 'Payment required' });
  });
});
