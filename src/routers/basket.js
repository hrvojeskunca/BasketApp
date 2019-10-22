const express = require('express');
const Basket = require('../models/basket');
const { checkout } = require('../utils/serverUtils/total');

const router = express.Router();

router.get('/basket', async (req, res) => {
  try {
    const baskets = await Basket.find({});

    res.send({ baskets });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

router.get('/basket/checkout/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const basket = await Basket.findById(id);
    const receipt = await checkout(basket);

    res.send({ receipt });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

router.post('/basket', async (req, res) => {
  const basket = new Basket({
    ...req.body,
  });

  try {
    const singleBasket = await basket.save();
    res.send({ singleBasket });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

module.exports = router;
