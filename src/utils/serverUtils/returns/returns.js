/* New item list */
const itemList = basket => basket.map(element => ({ itemName: element.name, itemPrice: element.price, itemCount: element.count }));

/* New object for quantity calcualtion */
const newQuantityObject = quantityObject => ({ name: quantityObject.name, price: quantityObject.value, count: quantityObject.count });

/* Total codes return receipt */
const returnTotalCodes = (basket, codes, total) => {
  const codeList = codes.map(element => ({ codeName: element.name }));

  return ({ itemList: itemList(basket), codeList, total });
};

/* Total quantity return receipt */
const returnTotalQuantity = (basket, quantity, total) => {
  const quantityList = quantity.map(element => ({ quantityName: element.name }));

  return ({ itemList: itemList(basket), quantityList, total });
};

/* No discounts receipt */
const returnTotalNoDiscount = (basket, total) => ({ itemList: itemList(basket), total, discount: 'No eligible discounts found!' });

module.exports = {
  returnTotalCodes,
  returnTotalQuantity,
  returnTotalNoDiscount,
  newQuantityObject,
};
