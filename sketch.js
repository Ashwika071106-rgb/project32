
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world, engine;
var ground,ground1,ground2,ground3,ground4, ground5;
var plinko = [];
var particles = [];

function preload()
{
	
}

function setup() {
	createCanvas(580, 800);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(290,height,580,60);
	ground1 = new Ground(90,620,30,300);
	ground2 = new Ground(190,620,30,300);
	ground3 = new Ground(290,620,30,300);
	ground4 = new Ground(390,620,30,300);
	ground5 = new Ground(490,620,30,300);

	for(var j = 40; j<=580-320; j+=40){
		plinko.push(new Plinko(j,40));
	}
	

	for(var j = 20; j<=580; j+=40){
		plinko.push(new Plinko(j,75));
	}
	
	for(var j = 40; j<=580-320; j+=40){
		plinko.push(new Plinko(j,110));
	}
	
	for(var j = 20; j<=580; j+=40){
		plinko.push(new Plinko(j,140));
	}
	
	
	if(frameCount % 60 === 0){
		particles.push(new Particle(random(280,300),10));
	}


	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);

	ground.display();
	ground1.display();
	ground2.display();
	ground3.display();
	ground4.display();
	ground5.display();

	
	stroke("brown")
	strokeWeight(10);
	line(0,0,0,800);
	line(0,0,580,0);
	line(580,0,580,800);
	line(0,800,580,800);

	for(var j = 0; j<= plinko.length; j++){
		plinko[j].display();
	}
		
	for(var  k = 0; k<= particles.length; k++){
		particles[k].display();
	}

	
	//particles.display();


	
	//keyPressed();
	drawSprites();
	
}

