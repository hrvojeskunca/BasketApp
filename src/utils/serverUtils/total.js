const { quantityStatements } = require('./statements/quantities');
const { codesStatements } = require('./statements/codes');
const { noCodesTotal } = require('./returns/formulas');

const checkout = (userBasket) => {
  try {
    const { basket, codes, quantity } = userBasket;

    switch (true) {
      case (codes.length !== 0):
        return codesStatements(basket, codes);
      case (quantity.length !== 0):
        return quantityStatements(basket, quantity);
      default:
        return noCodesTotal(basket);
    }
  } catch (e) {
    return ({ error: 'No basket found!' });
  }
};

module.exports = {
  checkout,
};
