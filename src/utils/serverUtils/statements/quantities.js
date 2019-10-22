const { noCodesTotal } = require('../returns/formulas');
const { newQuantityObject } = require('../returns/returns');

const quantityStatements = (basket, quantity) => {
  const motionSensors = quantity.find(element => element.name === '3xMotionSensors');
  const smokeSensors = quantity.find(element => element.name === '2xSmokeSensors');

  switch (true) {
    case (!!motionSensors && !!smokeSensors && quantity.length === 2): {
      const newMotionSensor = newQuantityObject(motionSensors);
      const newSmokeSensor = newQuantityObject(smokeSensors);

      const combinedBaskets = basket.concat(newMotionSensor, newSmokeSensor);

      return noCodesTotal(combinedBaskets, quantity);
    }
    case (!!motionSensors && quantity.length === 1): {
      const newMotionSensorBasket = basket.concat(newQuantityObject(motionSensors));

      return noCodesTotal(newMotionSensorBasket, quantity);
    }
    case (!!smokeSensors && quantity.length === 1): {
      const newSmokeSensorBasket = basket.concat(newQuantityObject(smokeSensors));

      return noCodesTotal(newSmokeSensorBasket, quantity);
    }
    default:
      return ({ error: 'Invalid discounts!' });
  }
};

module.exports = { quantityStatements };
