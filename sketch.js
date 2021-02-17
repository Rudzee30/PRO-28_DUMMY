
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tr,b,bo,st,m,m2,m3,m4,m5,m6,m7,chai;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tr= new Tree(550,400,500,600);
	b= new Ground(400,550,800,250);
	bo=new Boy(170,600,200,300);
	st=new Stone(110,530,70,70);
	m=new Mango(600,160,60,60);
	m2=new Mango(480,200,65,65);
	m3=new Mango(590,280,55,55);
	m4=new Mango(700,230,65,65);
	m5=new Mango(750,350,70,70);
	m6=new Mango(500,370,55,55);
	m7=new Mango(380,310,60,60);
	chai=new Chain(st.body,{x:110,y:530});
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background("White");
  b.display();
  tr.display();
  bo.display();
  st.display();
  m.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  chai.display();
  

 
}
function mouseDragged(){
    Matter.Body.setPosition(st.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    chai.fly();
}


