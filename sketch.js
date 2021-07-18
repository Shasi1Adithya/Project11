
var track;
var trackImg;
var surfer
var surferrAnimation
var leftB,rightB


function preload(){
  //pre-load images
  trackImg = loadImage("path.png");
  surferrAnimation = loadAnimation('Runner-1.png','Runner-2.png')

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track = createSprite(200,200,200,200);
  track.addImage(trackImg)
  track.velocityY = 2


  //create runner sprite
  surfer = createSprite(200,300,50,100)
  surfer.addAnimation("running",surferrAnimation)
  surfer.scale= 0.1
    
  leftB=createSprite(50,300,10,100)
  rightB=createSprite(350,300,10,100)
leftB.visible=false
rightB.visible=false

}

function draw() {
  background(0);
  surfer.x =mouseX
  surfer.collide(leftB)
  surfer.collide(rightB)
  
  if(track.y > 400) {
    track.y = 200
  }

  drawSprites();

}
