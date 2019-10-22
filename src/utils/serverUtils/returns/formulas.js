const { returnTotalCodes, returnTotalQuantity, returnTotalNoDiscount } = require('./returns');

/* No codes total calculation */
const noCodesTotal = (basket, discounts) => {
  let sum = 0;

  basket.forEach((element) => {
    sum += (element.price * element.count);
  });

  const total = sum.toFixed(2);

  return discounts ? returnTotalQuantity(basket, discounts, total) : returnTotalNoDiscount(basket, total);
};

/* Percent discount calculation */
const percentDiscount = (basket, codes, discount) => {
  let sum = 0;

  basket.forEach((element) => {
    sum += (element.price * element.count);
  });

  const totalNotFixed = sum - (sum * discount.value);
  const total = totalNotFixed.toFixed(2);

  return returnTotalCodes(basket, codes, total);
};

/* Fixed discount calculation */
const fixedOffFinalPrice = (basket, codes, discount) => {
  let sum = 0;

  basket.forEach((element) => {
    sum += (element.price * element.count);
  });

  const totalNotFixed = sum - discount.value;
  const total = totalNotFixed.toFixed(2);

  return returnTotalCodes(basket, codes, total);
};

/* Percent discount and fixed discount calculation */
const comboTotal = (basket, codes, percentDiscount, fixedDiscount) => {
  let sum = 0;

  basket.forEach((element) => {
    sum += (element.price * element.count);
  });

  const totalPercent = sum - (sum * percentDiscount.value);
  const totalNotFixed = totalPercent - fixedDiscount.value;
  const total = totalNotFixed.toFixed(2);

  return returnTotalCodes(basket, codes, total);
};

module.exports = {
  noCodesTotal,
  percentDiscount,
  fixedOffFinalPrice,
  comboTotal,
};
