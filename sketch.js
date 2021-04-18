var bg,bg2,form,system,code,security, val1, val2, val3;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  textSize(50);
  if(score < 3){
  background(bg);
  text("Score: " + score, 480, 50);
  }
  else if(score > 3){
    background(bg2)
    text("TREASURE UNLOCKED", 480, 250);
  }
  clues();
  security.display();

  // Add code to display score in the middle of the screen
  

  // Add code to display the end screen


  drawSprites()
}