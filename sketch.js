/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  ground1 = new Ground(600,height,1200,20)
	ground = new Ground(500,450,400,15);
	block1 = new Block(490,350,30,40);
	block2 = new Block(520,390,30,40);
	block3 = new Block(460,390,30,40);
	block4 = new Block(430,430,30,40);
  block5= new Block(460,430,30,40);
	block6 = new Block(490,430,30,40);
  block7 = new Block(520,430,30,40);
  block8 = new Block(550,430,30,40);
  block9 = new Block(490,390,30,40);
 // block10 = new Block(510,390,40,50);
 
  
  box=new Box(100,100);

 
 slingshot = new Slingshot(box.body,{x:110,y:465});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  text("x:"+mouseX,25,25);
  text("y:"+mouseY,25,50);
  
  ground1.display();
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
 // block10.display();
  box.display();
// poligon.display();
 // poligon.display();
  slingshot.display();
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(box.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
   // Matter.Body.setPosition(stone.body,{x:235,y:420})
    slingshot.attach(box.body);
  }
}*/





const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function preload() {
   
}

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,605,1200,20);
  	ground1 = new Ground(500,350,400,15);
   block1 = new Block(490,250,30,40);
	block2 = new Block(520,290,30,40);
	block3 = new Block(460,290,30,40);
	block4 = new Block(430,330,30,40);
  block5= new Block(460,330,30,40);
	block6 = new Block(490,330,30,40);
  block7 = new Block(520,330,30,40);
  block8 = new Block(550,330,30,40);
  block9 = new Block(490,290,30,40);
    box = new Box(800,50);
    slingshot = new Slingshot(box.body,{x:105,y:370});

    
}

function draw(){
    background(225,225,225);
    text("x:"+mouseX,25,25);
  text("y:"+mouseY,25,50);
    Engine.update(engine);
    
    block1.display();
    block2.display();
    ground.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    box.display();
    slingshot.display();  
   // platform.display();
    ground.display();
    ground1.display();
}

function mouseDragged(){
    Matter.Body.setPosition(box.body, {x: mouseX , y: mouseY});
  }
  
  
  function mouseReleased(){
    slingshot.fly();
  }
  
  function keyPressed(){
    if(keyCode === 32){
     // Matter.Body.setPosition(stone.body,{x:235,y:420})
      slingshot.attach(box.body);
    }
  }
  
  
  
