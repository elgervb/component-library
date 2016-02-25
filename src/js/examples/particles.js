
var settings = {
  number: 5,           // number of particles
  particleBlur: 1,     // number from 0 to 1 where 1 is no blur
  particleMinWidth: 5,
  particleMaxWidth: 25,
  particleOpacity: 1,
  trail: 1,            // number from 0 to 1
  velocityX: 10,
  velocityY: 10,
  width: window.innerWidth, 
  height: window.innerHeight
};

function Particle(settings) {
  var x, y, radius, vx, vy, color;
  
  // radius
  radius = Math.random()*settings.particleMaxWidth+settings.particleMinWidth;
  // position
  x = Math.max(radius+1, Math.min(settings.width-radius, Math.random() * settings.width));
  y = Math.max(radius+1, Math.min(settings.height-radius, Math.random() * settings.height));
  // velocity
  vx = Math.random()*settings.velocityX + ((settings.velocityX / 2) * -1);
  vy = Math.random()*settings.velocityY + ((settings.velocityY / 2) * -1);
  // color
  color = fillColor();
  
  console.log(x,y, radius);
  
  function fillColor() {
    // random colors
    var r = Math.random()*255>>0;
    var g = Math.random()*255>>0;
    var b = Math.random()*255>>0;
    return "rgba("+r+", "+g+", "+b+", "+settings.particleOpacity+")";
  }
  
  function draw(ctx) {
    var gradient;
    
    gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
    gradient.addColorStop(0, color);
    gradient.addColorStop(settings.particleBlur, color);
    gradient.addColorStop(1, "black");
    
    ctx.beginPath();
    ctx.fillStyle = gradient;
    ctx.arc(x, y, radius, Math.PI*2, false);
    ctx.fill(); 
    
    collisionDetectionCanvasBorders();
    
    x += vx;
    y += vy;
  }
  
  function collisionDetectionCanvasBorders() {
    if(x < radius) vx *= -1;
    if(y < radius) vy *= -1;
    if(x > settings.width-radius) vx *= -1;
    if(y > settings.height-radius) vy *= -1;
  }
  
  return {
    draw: draw
  }
}

var Canvas = function() {
  var ctx, particles = [];
  for(var i = 0; i < settings.number; i++)
  {
    add(Particle(settings));
  }
  
  function add(particle) {
    console.log('add particle nr ' + particles.length );
    particles.push(particle);
  }
  
  function create() {
    // dynamically create the canvas
    var c = document.createElement('canvas');

    ctx = c.getContext('2d');
    c.width = settings.width;
    c.height = settings.height;
    c.style.backgroundColor = 'blue';
    c.style.opacity = 1;
    c.style.position = 'fixed';
    c.style.left = 0;
    c.style.top = 0;
    c.id = 'particles';
    document.body.appendChild(c);
  }
  
  function draw() {
    var i;
    
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "rgba(52, 55, 60, "+settings.trail+")";
    ctx.fillRect(0, 0, settings.width, settings.height);
    ctx.globalCompositeOperation = "lighter";
    
    for(i = 0; i < particles.length; i++)
    {
      particles[i].draw(ctx);
    }
  }
  
  function remove() {
    particles.pop();
  }
  
  return  {
    add: add,
    create: create,
    draw: draw,
    remove: remove
  }
}

var canvas = Canvas();
canvas.create();
// update
setInterval(canvas.draw, 33);


// UI
document.querySelector('.btn-add-particle').addEventListener('mouseup', function() {
  canvas.add(Particle(settings));
});
document.querySelector('.btn-remove-particle').addEventListener('mouseup', function() {
  canvas.remove();
});
