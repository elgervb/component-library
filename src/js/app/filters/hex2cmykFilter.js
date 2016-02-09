/* global angular */
/**
 * Convert a hex string to a CMYK string
 */
angular.module('patternlib').filter('hex2cmykFilter', () => {
  return (hexParam) => {
    let shorthandRegex, result, hex, RGB, r, g, b;
    
    // convert to rgb
    shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hexParam.replace(shorthandRegex, (m, red, green, blue) => {
      return red + red + green + green + blue + blue;
    });

    result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    RGB = result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : {r: 255, g: 255, b: 255};
  
    result = {c: 0, m: 0, y: 0, k: 0};
    r = RGB.r / 255;
    g = RGB.g / 255;
    b = RGB.b / 255;
    result.k = Math.min(1 - r, 1 - g, 1 - b);
    result.c = (1 - r - result.k) / (1 - result.k);
    result.m = (1 - g - result.k) / (1 - result.k);
    result.y = (1 - b - result.k) / (1 - result.k);
    
    result.c = Math.round(result.c * 100);
    result.m = Math.round(result.m * 100);
    result.y = Math.round(result.y * 100);
    result.k = Math.round(result.k * 100);
    
    return `${result.c} ${result.m} ${result.y} ${result.k}`;
  };
});
