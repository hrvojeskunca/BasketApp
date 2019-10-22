const { percentDiscount, fixedOffFinalPrice, comboTotal } = require('../returns/formulas');

const codesStatements = (basket, codes) => {
  const twentyPercent = codes.find(element => element.name === '20%');
  const fivePercent = codes.find(element => element.name === '5%');
  const twentyEuroOFF = codes.find(element => element.name === '20EuroOff');

  switch (true) {
    case (!!twentyPercent && codes.length === 1):
      return percentDiscount(basket, codes, twentyPercent);
    case (!!fivePercent && !!twentyEuroOFF && codes.length === 2):
      return comboTotal(basket, codes, fivePercent, twentyEuroOFF);
    case (!!fivePercent && codes.length === 1):
      return percentDiscount(basket, codes, fivePercent);
    case (!!twentyEuroOFF && codes.length === 1):
      return fixedOffFinalPrice(basket, codes, twentyEuroOFF);
    default:
      return ({ error: 'Invalid discounts!' });
  }
};

module.exports = {
  codesStatements,
};
