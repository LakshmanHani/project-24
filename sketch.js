
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject,wastebin

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	var option={
		isStatic:false,
		restitution:0.3,
		friction:0.3,
		density:1.2
	}
	//Create the Bodies Here.
  paperObject = new Paper(200,600,20)
  wastebin = createSprite(600,600,30,30)
}


function draw() {
	Engine.update(engine)
  background(0);
  paperObject.display();
  function keyPressed(){
	  if(keyCode === UP_ARROW){
		  Matter.Body.applyForce(paperobject.body,paperObject.body.position,{z:85,y:-85})
	  }
  }
 
}



