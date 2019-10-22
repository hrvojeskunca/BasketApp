const express = require('express');
const Codes = require('../models/codeDiscounts');
const Quantities = require('../models/quantityDiscounts');

const router = express.Router();

router.get('/discounts/codes', async (req, res) => {
  try {
    const codes = await Codes.find({});

    res.send({ codes });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

router.get('/discounts/quantities', async (req, res) => {
  try {
    const quantities = await Quantities.find({});

    res.send({ quantities });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});


router.post('/discounts/codes', async (req, res) => {
  const codes = new Codes({
    ...req.body,
  });

  try {
    const code = await codes.save();
    res.status(200).send({ code });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

router.post('/discounts/quantities', async (req, res) => {
  const quantities = new Quantities({
    ...req.body,
  });

  try {
    const quantity = await quantities.save();
    res.status(200).send({ quantity });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

module.exports = router;
