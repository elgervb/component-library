/* global angular */
/**
 * Convert a hex string to a RGB string
 */
angular.module('patternlib').filter('hex2rgbFilter', () => {
  return (hexParam) => {
    // Expand shorthand form (e.g. '03F') to full form (e.g. '0033FF')
    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    let hex = hexParam.replace(shorthandRegex, (m, r, g, b) => {
      return r + r + g + g + b + b;
    });

    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(result[3], 16)}` : null;
  };
});
