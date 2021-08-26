
function preload(){
  //pre-load images
  //Moving background
  path=createSprite(200,200);
  path.path.png(pathImg);
  pathImg.velocityY=-5
}

function setup(){
  createCanvas(400,400);
  //create sprites here
Runner1=createSprite(40,190,13,13);
Runner2=createSprite(40,190,13,13);
//move left and right
if (keyDown("RIGHT"))
if (keyDown("LEFT"))
}

function draw() {
  background(0);
//code to reset background
if(path.y>400){
  path.y=height/2
}
}
