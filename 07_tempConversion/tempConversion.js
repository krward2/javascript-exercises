const convertToCelsius = function (temp) {
  const CONVERSION_FACTOR = 5 / 9;
  return ((temp - 32) * CONVERSION_FACTOR).toFixed(2);
};

const convertToFahrenheit = function (temp) {
  const CONVERSION_FACTOR = 9 / 5;
  return (temp * CONVERSION_FACTOR + 32).toFixed(2);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
