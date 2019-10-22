const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
    validate(value) {
      if (value <= 0) {
        throw new Error('Price must be a postitive number!');
      }
    },
  },
});

const Items = mongoose.model('items', itemSchema);

module.exports = Items;
