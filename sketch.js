



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;



var engine,world;
var bgImg;
var bg;
var boy;
var snow1;
//var snow=[];



function preload(){
  bgImg = loadImage("snow1.jpg");
}





function setup() {
  createCanvas(800,400);

  

  engine = Engine.create();
	world = engine.world;

  
  var options={
    'isStatic':true
  }
  
  boy = Bodies.rectangle(400, 300, 50, 200,options);
  World.add(world,boy)

  snow1 = new Snow(620,250,10)


  
}

function draw() {
  
  background(bgImg); 
  Engine.update(engine);

rectMode(CENTER);
 rect(boy.position.x,boy.position.y,50,200)

 snow1.display();


}


function keyPressed(){
  if(keyCode === LEFT_ARROW){
    boy.position.x = boy.position.x-10;
  }
  if(keyCode === RIGHT_ARROW){
    boy.position.x = boy.position.x+10;
  }
}