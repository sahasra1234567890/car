function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(255,255,255);  
  background('black')
car1=createSprite(20,300,10,10)
car2=createSprite(20,100,10,10)
car3=createSprite(20, 200,10,10);
wall=createSprite(700,10,90,800)

car1.velocityX=3
car2.velocityX=3
car3.velocityX=3

drawSprites();
}




