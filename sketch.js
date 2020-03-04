var plane;
var laser;
var bubble;
var life = 100;
var kills = 0;
function setup() {
  createCanvas(800,400);
  plane = createSprite(200, 200, 35, 35);
  laser = createSprite(200,200,5,10);
  laser.visible = false;
  laser.fill = "purple";
  bubble = createSprite(Math.random, Math.random, 20,20);
}

function draw() {
  background(0,0,0);
  images()  
  if(keyDown("right")){
    plane.rotate = 5*PI/12;
    laser.rotate = 5*PI/12;
  }
  if(keyDown("left")){
    plane.rotate = 7*PI/12;
    laser.rotate = 7*PI/12;
  }
  if(keyDown("space")){
    laser.visible = true; 
    laser.velocityY = 5;
  }
  if(keyDown('l')){
    laser.destroy();
    var laser;
    laser = createSprite(200,200,5,10);
    laser.visible = false; 
  }
  if(keyDown('up')){
    plane.velocityY = 3;
    laser.velovityY = 3;
  }
  text("life: "+life, plane.x, plane.y + 10);
  text("kills: " + kills,100,100);
  if(laser.isTouching('bubble')){
    kills++;
  }
  if(bubble.isTouching(plane)){
    life--;
  }
  drawSprites();
}
function images(){
  plane.loadImage = "toppng.com-spaceship-png-144x664.png";
  bubble.loadImage = 'pngwave.png';
}