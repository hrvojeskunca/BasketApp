const mongoose = require('mongoose');

const codesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  value: {
    type: Number,
    trim: true,
    required: true,
    validate(value) {
      if (value <= 0) {
        throw new Error('Value must be a positive number!');
      }
    },
  },
});

const Codes = mongoose.model('codes', codesSchema);

module.exports = Codes;
