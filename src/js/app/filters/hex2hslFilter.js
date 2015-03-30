/**
 * Convert a hex string to a HSL string
 */
app.filter("hex2hslFilter", function(){
  return function(hex, query){
    
    // convert to rgb
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    var RGB = result ? {
      'r': parseInt(result[1], 16),
      'g': parseInt(result[2], 16),
      'b': parseInt(result[3], 16)
      }
      : {'r':255,'g':255,'b':255};

    var r = RGB.r / 255, 
        g = RGB.g / 255,
        b = RGB.b / 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if (max == min) { h = s = 0; } 
    else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max){
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      
      h /= 6;
    }
    
    return ((h*100+0.5)|0) + " " + ((s*100+0.5)|0) + '% ' + ((l*100+0.5)|0) + '%';
  };
});