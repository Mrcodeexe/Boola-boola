var bullet, wall;
var speed, weight, thicc;

function setup() {
  createCanvas(800,400);
bullet=createSprite(30, 200, thicc, height/2);
  wall=createSprite(600, 200, thicc, height/2);
  speed=Math.round(random(55,90));
  thicc=random(22,83);
  weight=random(400,1500)
}

function draw() {
  bullet.velocityX=speed;
  background(255,255,255);
  

  if(hasCollided(bullet, wall)){

bullet.velocityX=0;
var Damage=0.5*speed*weight*speed/(thicc*thicc*thicc)

if(Damage>10){
wall.shapeColor=color(255,0,0);

}

if(Damage<10){

  wall.shapeColor=color(0,255,0);
}


  }

  
  drawSprites();
}

function hasCollided(lbullet,lwall){
bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x
if(bulletRightEdge>=wallLeftEdge){

  return true;
}

return false;

}