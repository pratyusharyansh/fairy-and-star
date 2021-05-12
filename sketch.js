const Engine = Matter.Engine ;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ground,ball;


var engine, world;

function setup() {
  createCanvas(400,400);
  //Creation of Engine for our game
  engine = Engine.create();
  //linking our engine to our game world
  world = engine.world;
  //creation of Body in our game world
  object = Bodies.rectangle(200,100,50,50);
  //add newly created body to our game world
  World.add(world,object);

  console.log(object);
  console.log(object.position.x);
  console.log(object.position.y);
  // add properties for bodies inside our game (Making ground static)
  var ground_options = {
    isStatic : true 
  }
  ground=Bodies.rectangle(200,390,400,50,ground_options);
  World.add(world,ground);
  // add properties for bodies inside our game (Making ball bouncy)
  var ball_options={
    restitution : 100.0
  }
  ball=Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
  
}
///byee take care Amruta teacher closing this session


function draw() {
  background("black");  
  //updating our engine
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x , ground.position.y ,400,50);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
}