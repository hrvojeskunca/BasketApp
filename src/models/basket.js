const mongoose = require('mongoose');
const validator = require('validator');

const basketSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Invalid email!');
      }
    },
  },
  creditCard: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isCreditCard(value)) {
        throw new Error('Invalid credit card number!');
      }
    },
  },
  basket: [{
    name: {
      type: String,
      trim: true,
      required: true,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
      validate(value) {
        if (value <= 0) {
          throw new Error('Price must be a positive number!');
        }
      },
    },
    count: {
      type: Number,
      trim: true,
      requred: true,
      validate(value) {
        if (value <= 0) {
          throw new Error('Count must be a postitive number!');
        }
      },
    },
  }],
  codes: [{
    name: {
      type: String,
      trim: true,
    },
    value: {
      type: Number,
      trim: true,
      validate(value) {
        if (value <= 0) {
          throw new Error('Value must be a positive number!');
        }
      },
    },
  }],
  quantity: [{
    name: {
      type: String,
      trim: true,
    },
    value: {
      type: Number,
      trim: true,
      validate(value) {
        if (value <= 0) {
          throw new Error('Value must be a positive number!');
        }
      },
    },
    count: {
      type: Number,
      trim: true,
      validate(value) {
        if (value <= 0) {
          throw new Error('Count must be a positive number!');
        }
      },
    },
  }],
});

const Basket = mongoose.model('userBasket', basketSchema);

module.exports = Basket;
