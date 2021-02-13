var bullet , wall;
var speed , weight,thickness;

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22,83);
  
  bullet  = createSprite(50, 200, 50, 10);
  bullet .shapeColor=color(255,255,255);
  
  wall= createSprite(1300, 200, thickness, height/2);
  wall.shapeColor=color(80,80,80);

  
  bullet .velocityX=speed;
 
 
}

function draw() {
  background(0,0,0);  
  
  if(hascollide(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  if (damage>10){
    wall.shapeColor=color(255,0,0);  
  }

  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }

}
  
  
  
  
  
  drawSprites();
  

}

function hascollide (b1,w1){
bulletRightEdge=b1.x +b1.width;
wallLeftEdge=w1.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false;
}