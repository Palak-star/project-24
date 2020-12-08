
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,420,800,30)
    leftrect = new dustbin(535,365,10,80)
    rightrect = new dustbin(665,365,10,80)
    centerect = new dustbin(600,400,120,10)

    paper = new Paper(200,400,70,70)
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  ground.display();
  leftrect.display();
  rightrect.display();
  centerect.display();
   paper.display();

  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paper.body,paper.body.position,{x:160,y:-125});

  }
}

