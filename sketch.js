var rect1, rect2; 

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 100, 100, 50)
  rect2 = createSprite(400, 300, 50, 70);

  rect1.debug = true; 
  rect2.debug = true; 
  
  rect1.velocityY = 1;
  rect2.velocityY = -1; 

}

function draw() {
  background(255,255,255);  

  //bounceOff(rect1, rect2);
   if (isTouching(rect1, rect2)){
     rect1.shapeColor = "red";
     rect2.shapeColor = "blue";
   }
   else{
     rect1.shapeColor ="green"
     rect2.shapeColor ="green"
   }
  drawSprites();
}