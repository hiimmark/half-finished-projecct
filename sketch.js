var ground,ball,roof
const Engine = Matter.Engine;
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

	var options ={
		isStatic : true
	}
	

	bob1Diameter = 40
	bob1 = new Bob(150,550);
	bob2 = new Bob(300,550)
	bob3 = new Bob(450,550)
	bob4 = new Bob(600,550)
	bob5 = new Bob(750,550)
	ground = Bodies.rectangle(450,100,500,30,options)
	World.add(world, ground);
	console.log(ground)
	rope1 = new Rope(bob1.body,ground.body,-bob1Diameter*2,0)

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  rope1.display()
  rect(ground.position.x, ground.position.y, 800,30)


  drawSprites();
 
}



