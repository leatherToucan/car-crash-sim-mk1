var car,wall;
var speed,weight;

function setup() {
  createCanvas(800,400);
  car = createSprite(150, 200, 10, 10);
  wall = createSprite(750,200,20,100);
  
  speed = random(55,90);
  weight = random(400,1500);

  car.velocityX = speed;
}

function draw() {
  background(0); 
  
  if(car.isTouching(wall)){
    var deformation = (0.5*weight*speed*speed)/22500;

  if(deformation < 100){
    car.shapeColor="green";
  }
  if(deformation < 180 && deformation > 100){
    car.shapeColor="yellow";
  }
  if(deformation > 180){
    car.shapeColor="red";
  }
  car.velocityX = -0.25;
  
}
  drawSprites();
}