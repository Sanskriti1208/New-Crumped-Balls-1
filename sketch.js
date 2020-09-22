
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, ground1;
var dust1, dust2, dust3;
function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	ball = new waste(54, 310, 30, 30);
	ground1 = new ground(400, 350, 900, 20);
	dust1 = new dustbin(700, 330, 100, 20);
	dust2 = new dustbin(650, 305, 20, 70);
	dust3 = new dustbin(750, 305, 20, 70);
	Engine.run(engine);
}
function draw() {
  rectMode(CENTER);
  background(0); 
  drawSprites();
  ball.display();
  ground1.display();
  dust1.display();
  dust2.display();
  dust3.display();
  textSize(18);
  text("Throw the waste in the dustbin by clicking up arrow.", 200, 400);
  text("Click refresh button to play the game once again.", 200, 430);
}
function keyPressed(){
	if (keyDown(UP_ARROW)){
		Matter.Body.applyForce(ball.body, ball.body.position,{x:60, y:-35})
	}
}



