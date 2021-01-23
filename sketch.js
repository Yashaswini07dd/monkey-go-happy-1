var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  fruitImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,600);


//creating sprite
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
 monkey.scale=0.2; 
  
  ground=createSprite(400,350,900,10)
  ground.velocityX=-1 ; 
  foodGroup=new Group()
  obstacleGroup=new Group()
}


function draw() {
background("white");
    
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
    
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  fruits();
  
  spawn_obstacles();
  
  monkey.collide(ground);
  
 drawSprites(); 
  stroke("white");
  textSize(20);
  fill("white")
  text("score"+score,500,50);
  
  var survivalTime = 0;
   stroke("black");
  textSize(20);
  fill("black");
   survivalTime=Math.ceil(frameCount/frameRate());
 text("survivalTime"+survivalTime,100,50);
 }
function spawn_obstacles(){
if(frameCount%120===0){
   obstacle=createSprite(300,320,10,40);
   obstacle.addImage( obstacleImage);
  obstacle.lifetime=150;
   obstacle.scale=0.1;
  obstacle.velocityX=-5;
  obstacleGroup.add(obstacle);
}
  }
function fruits(){
if(frameCount%80===0) {
  fruit=createSprite(350,220,10,40);
  fruit.y=random(120,200);
 fruit.addImage(fruitImage);
  fruit.lifetime=100 ;
  fruit.velocityX=-5 ;
fruit.scale=0.1;
  foodGroup.add(fruit);
    
     
 
}
}