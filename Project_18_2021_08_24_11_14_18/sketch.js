var bananaImg, obstacleImg, monkeyAni, obstacleGrp, bananaGrp, survivalTime, monkey, ground, scene, score, back

function preload() {
  monkeyAni = loadAnimation("Monkey_01","Monkey_02","Monkey_03","Monkey_04","Monkey_05","Monkey_06","Monkey_07","Monkey_08","Monkey_09","Monkey_10");
  
  scene = loadImage("jungle.jpg");
}

function setup() {
  createCanvas(400, 400);
  
  back = createSprite(200, 200, 400, 400);
  back.addImage(scene);
  back.x = back.width/2;
  
  ground = createSprite(200, 380, 400, 30);
  ground.visible = false;
  ground.x = ground.width/2;
  
  monkey = createSprite(70, 330, 20, 30);
  monkey.addAnimation("monkey", monkeyAni);
  
  bananaGrp = createGroup();
  
  obstacleGrp = createGroup();
  
  survivalTime = 0;
  
  score = 0;
}



function draw() {
  
  background("white");
  
  spawnFood();
  spawnObstacles();
  
   back.velocityX = -3;
  
  if(back.x < 0){
     back.x = back.width/2;
     }
  
  ground.velocityX = -3;
  
  if(ground.x < 0){
     ground.x = ground.width/2;
     }
 
  
  if(keyDown("space")) {
    
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  if(bananaGrp.isTouching(monkey)) {
    score = score + 2;
    
    bananaGrp.destroyEach();
  }
  
  if(obstacleGrp.isTouching(monkey)) {
    monkey.scale = 0.2;
  }
  
  switch(score){
    case 10: monkey.scale = 0.12;
      break;
    case 20: monkey.scale = 0.14;
      break;
    case 30: monkey.scale = 0.16;
      break;
    case 40: monkey.scale = 0.18;
      break;
    default: break;
  }
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score, 500, 50);
}

function spawnFood() {
  if(World.frameCount % 80 === 0) {
    var random = randomNumber(220, 300);
    var banana = createSprite(400, random, 20, 20);
    banana.setAnimation("Banana");
    banana.scale = 0.1;
    banana.velocityX = -3;
    
    banana.lifetime = 132;
    
    bananaGroup.add(banana);
}
  
}

function spawnObstacles() {
  if(World.frameCount % 300 === 0) {
    var obstacle = createSprite(400, 330, 30, 30);
    obstacle.setAnimation("Stone");
    obstacle.scale = 0.1;
    obstacle.velocityX = -6;
    obstacle.lifetime = 70;
    
    obstacleGroup.add(obstacle);
  }
}
  
