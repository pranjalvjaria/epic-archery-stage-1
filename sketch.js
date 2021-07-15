const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;

var computerBase,computerplayer;
var playerBase,player;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   computerBase = new ComputerBase(1400,random(450,height-450),180,150);
   playerBase = new PlayerBase(500,random(450,height-396),180,150)
   computerplayer = new ComputerPlayer(1400,computerBase.body.position.y-153,50,180)
   player = new Player(500,playerBase.body.position.y-153,50,180)


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   computerBase.display();
   playerBase.display();


   //display Player and computerplayer
   computerplayer.display();
   player.display();


}
