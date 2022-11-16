const { Router } = require('express');

module.exports = Router()
  .get('/teapot', (req, res, next) => {
    next({ status: 418, message: 'I am a teapot' });
  })

  .get('/payment', (req, res, next) => {
    next({ status: 402, message: 'Payment required' });
  });
