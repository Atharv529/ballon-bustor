
  
  var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage,bbi;
var score; 
var redG,bluG,greenG,pinkG,bbG,aroG;               
 var END = 0;

var gameState ="PLAY";

function preload(){ 
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png")
 green_balloonImage = loadImage("green_balloon0.png")
 pink_balloonImage = loadImage("pink_balloon0.png")  
 bbi = loadImage("download.png") 
}
 


function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  score = 0;
  
  redG = new Group();
  bluG = new Group();
  greenG = new Group();
  pinkG = new Group();
  bbG = new Group();
  aroG = new Group();
   
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
 background(0);
  
  
  
  
  if(gameState === "PLAY"){
    scene.velocityX = -3
    
    
    if (scene.x < 0){
      scene.x = scene.width/2;
    }
    
    bow.y = World.mouseY
    
    if (keyDown("space")) {
    createArrow();
  }
    
     if (aroG.isTouching(redG)){
    redG.destroyEach();
    aroG.destroyEach();
    score = score + 10;
  }
  
    
  if (aroG.isTouching(greenG)){
    greenG.destroyEach();
    aroG.destroyEach();
    score = score + 10;
  }
    
     if (aroG.isTouching(bluG)){
    bluG.destroyEach();
    aroG.destroyEach();
    score = score + 10;
  }
    
     if (aroG.isTouching(bbG)){
    bbG.destroyEach();
    aroG.destroyEach();
    score = score + 10;
  }
    
    if (aroG.isTouching(pinkG)){
    pinkG.destroyEach();
    aroG.destroyEach();
    score = score + 10;
  }
    
    var select_balloon = Math.round(random(1,5));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    }
     else if (select_balloon == 2) {
      blueBalloon();
     }
     else if (select_balloon == 3) {
      greenBalloon();
     }
      else if (select_balloon == 4) {
      pinkBalloon();
     }
      else if (select_balloon == 5) {
        bb();
      }
  }
  }
  
 if (gameState === "END"){
   text("GAME OVER",200,200)
   aroG.destroyEach();
   redG.destroyEach();
   greenG.destroyEach();
   pinkG.destroyEach();
   bbG.destroyEach();
   bluG.destroEach();
   
 }
  
if(score === 100){
    gameState = "END";
  }
 
    
  drawSprites();
  text("score:"+score,350,30)
}






// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  aroG.add(arrow);
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redG.add(red);

}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage )
  blue.velocityX = 3;
  blue.lifetime = 150
  blue.scale = 0.1;
  bluG.add(blue);
}
  

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage )
  green.velocityX = 3;
  green.lifetime = 150
  green.scale = 0.1;
  greenG.add(green);
}

function pinkBalloon() {
    var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage( pink_balloonImage )
  pink.velocityX = 3;
  pink.lifetime = 150
 pink.scale= 1.0;
 pinkG.add(pink);
}

function bb() {
  var blu = createSprite(0,Math.round(random(20, 370)), 10, 10);  blu.addImage( bbi )
  blu.velocityX = 3;
  blu.lifetime = 150
 blu.scale= 0.6;
  bbG.add(blu);
}
