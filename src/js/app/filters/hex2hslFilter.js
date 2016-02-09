/**
 * Convert a hex string to a HSL string
 */
/* global angular */
angular.module('patternlib').filter('hex2hslFilter', () => {
  return (hexParam) => {
    let shorthandRegex, hex, result, RGB, r, g, b, min, max, h, s, l, d;
    
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

    r = RGB.r / 255; 
    g = RGB.g / 255;
    b = RGB.b / 255;
    max = Math.max(r, g, b);
    min = Math.min(r, g, b);
    l = (max + min) / 2;

    if (max === min) { 
      h = s = 0;
    } else {
      d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
      default: throw Error('Unexpected value');
      }
      
      h = h / 6;
    }
    
    h = (h * 100 + 0.5) | 0;
    s = (s * 100 + 0.5) | 0;
    l = (l * 100 + 0.5) | 0;
    return `${h} ${s}% ${l}%`;
  };
});
