const express = require('express');
const Items = require('../models/items');

const router = express.Router();

router.get('/items', async (req, res) => {
  try {
    const items = await Items.find({});

    res.send({ items });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

router.post('/items', async (req, res) => {
  const items = new Items({
    ...req.body,
  });

  try {
    const item = await items.save();
    res.status(200).send({ item });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

module.exports = router;
