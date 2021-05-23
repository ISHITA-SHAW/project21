var  wall, thickness;
var bullet,speed, weight;

function setup() {
 createCanvas(800,400);
 
 wall= createSprite(1200,200,thickness,height/2);
wall.shapeColor = color(80,80,80)
 thtickness = random(22,83);
speed = random(223,321)
weight= random(30,52)
bullet.velocityX = speed;
}
function draw(){
background("black");
if (wall.x-bullet.x < (bullet.width+wall.width)/2){
  bullet.velocityX = 0;
  var deformation = 0.5* weight* speed *speed/22509;
  if(deformaton>180)
  bullet.shapeColor = "white"
  if (deformation<180 && >100){
    bullet.shapeColor = "white";
  }
  if (deformtaion<100){
    bullet.shapeColor = "white";
  }
}
if (hascollided(bullet,wall))
{
  bullet.velocityX = 0;
  var damage = 0.5*weight *speed*speed/(thickness,thickness,thickness);
}
if(damage>10){
  wall.shapeColor = "red";
}
if (damage<10){
  wall.shapeColor = "green";
}
drawSprites();
}
function hascollided(lbullet,lwall){
bulletRightEdge =lbullet.x+lbullet.width;
wallLeftEdge = lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{
   return true
}
return false
  
}