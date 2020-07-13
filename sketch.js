//add gravity, stone effects, fix points system, make monkey bigger or smaller using "life var", or gone. 
//Global Variables
var monkey, monkey_running
var background1, invisibleground, banana, stone, gameover,restart,ground,bangroup,stonegroup,score,life,death,jump

function preload(){
  
monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png", "Monkey_10.png");
  
background1 = loadImage ("jungle.jpg");
banana = loadImage ("Banana.png");
stone = loadImage ("stone.png");


}


function setup() {
  createCanvas(600,300);
  
  ground = createSprite(400,280,1200,20);
  ground.addImage("ground",background1);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  monkey = createSprite (100,280,20,20);
  monkey.addAnimation("monkey is running",               monkey_running);
  
  monkey.scale=0.1;
  
  
  invisibleGround = createSprite(200,285,400,10);
  invisibleGround.visible = false;
  
  bangroup=new Group();
  stonegroup = new Group();
  
  score = 0
  life = 0;
  death = 0;
  jump = 0;
  
}


function draw(){
 background(0); 
 
 if(keyDown("space")&& jump === 0) {
    monkey.velocityY = -10;

  }
  
  monkey.velocityY = monkey.velocityY + 1
  
  if (ground.x < 100){
    ground.x = ground.width/2;
  }
  
  monkey.collide(invisibleGround);
  

  
  //score 
  text(score,300,100);
  
  spawnbananas();
  spawnstones();
  drawSprites();
  
  if (monkey.isTouching(bangroup))
  {
  score = score + 1;
  bangroup.destroyEach();
  life = life+1;

    if (life === 2)
    {
      monkey.scale = monkey.scale * 2
    }
  }
  
  if (monkey.isTouching(stonegroup))
      {
        death = death +1
        if (death ===1)
        {
          monkey.scale = monkey.scale/2;
          stonegroup.destroyEach();
        }
        
        if (death===2)
        {
         monkey.destroy();
         stonegroup.destroyEach();
         bangroup.destroyEach();
         ground.velocityX =0;
         text("You Lose! Press restart to play again!",100,50);
        }
        
      }
  
  stroke("white");
  fill("white");
  textSize = 20
  text(score,300,50);
  
}

function spawnbananas() {
  //write code here to spawn the clouds
  if (frameCount % 200 === 0) {
    var banana1 = createSprite(600,200,40,10);
    banana1.y = Math.round(random(200,270));
    banana1.addImage("banana",banana);
    banana1.scale = 0.05;
   
    banana1.velocityX=-3;
     //assign lifetime to the variable
    banana1.lifetime = 250;
    //group
    bangroup.add(banana1);
    
  }
}


function spawnstones() {
  //write code here to spawn the stones
  if (frameCount % 160 === 0) {
    var stone1 = createSprite(600,280,50,40);
    
    stone1.addImage("stone",stone);
    stone1.scale = 0.2;
   
    
     //assign lifetime to the variable
    stone1.lifetime = 250;
    
    stone1.velocityX = -4;
    
    //grouping
    stonegroup.add(stone1);
  }
}
















