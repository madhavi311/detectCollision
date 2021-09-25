var movingRect, fixedRect;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  //width of fixedRect/2=50/2=25
  fixedRect.shapeColor="green"
  movingRect=createSprite(400, 100, 50, 50)
  //width of movingRect/2=50/2=25
  movingRect.shapeColor="green"
  //add fixedRect.width/2+movingRect.width/2=25+25=50
}

function draw() {
  background(0); 
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
    && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 )
  {
movingRect.shapeColor="red"
fixedRect.shapeColor="red"
  }
  else{
    movingRect.shapeColor="green"
    fixedRect.shapeColor="green"
  }
  console.log(movingRect.x-fixedRect.x)
  drawSprites();
}