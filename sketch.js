var mario,marioRun1,marioRun2
var background,backgroundImage
var invisibleGround
function preload(){

marioRun1 = loadAnimation("Images/mario-run1.png,mario-run2.png");
backgroundImage = loadImage("Images/ground and sky.png");

}
  

function setup() {
  createCanvas(1532,747);


mario = createSprite(100,630,20,5);
 mario.addAnimation(marioRun1);

marioRun1.scale = 0.07;


}

function draw() {
  background(backgroundImage); 
  if(keyDown("space")&& mario.y >= 160) {
    mario.velocityY = -13;

}
mario.velocityY = mario.velocityY + 0.8

invisibleGround = createSprite(153,680,16000,5);
invisibleGround.visible = false;
mario.collide(invisibleGround);

  drawSprites();
}