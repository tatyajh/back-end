const express = require('express');
const router = express.Router();
const deliveryService = require('../services/users');

router.get('/', async (_req, res, next) => {
  try {
    const result = await deliveryService.get();
    res.json(result);
  } catch (error) {
    console.error('Error getting the users.', error);
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const data = { ...req.body };
    const result = await deliveryService.create(data);
    res.json(result);
  } catch (error) {
    console.error('Error creating a user.', error);
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const data = { ...req.params, ...req.body };
    const result = await deliveryService.update(data);
    res.json(result);
  } catch (error) {
    console.error('Error creating a user.', error);
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const data = { ...req.params };
    const result = await deliveryService.remove(data.id);
    res.json(result);
  } catch (error) {
    console.error('Error creating a user.', error);
    next(error);
  }
});

module.exports = router;
