var DustbinImg, PaperImg
var dustbinSprite, paperSprite
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	//DustbinImg= loadImage("dustbingreen.png")
	//PaperImg= loadImage("paper.png")
}

function setup() {
	createCanvas(1000, 500);
	rectMode(CENTER);

	//paperSprite= createSprite(200, 430, 20,20)
	//paperSprite.addImage(PaperImg)
	//paperSprite.scale=0.3

	//dustbinSprite=createSprite(915,384,50,50)
    //dustbinSprite.addImage(DustbinImg)
    //dustbinSprite.scale=0.35


	engine = Engine.create();
	world = engine.world;

	
	HorizontalBox1 = new GarbageCan(915,438,100,10)
	VerticalBox1 = new GarbageCan(870,400,10,100)
	VerticalBox2 = new GarbageCan(960,380,10,130)
	VerticalBox3 = new GarbageCan(1000,250,15,1000)
    Ground1= new ground(width/2,450,width,15)
    paperObject= new Paper(200,430,20)
	GarbagecanImgNew = new GarbageCanImg(915,438,100,10)
	//Create the Bodies Here.
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
 // Engine.update(engine)
 
 //dustbinSprite.x= HorizontalBox1.body.position.x
// dustbinSprite.y= HorizontalBox1.body.position.y
  HorizontalBox1.display()
  
  VerticalBox1.display()
  VerticalBox2.display()
  VerticalBox3.display()
  GarbagecanImgNew.display()
  paperObject.display()
  Ground1.display()
  
  //paperSprite.x=paperObject.body.position.x
// paperSprite.y=paperObject.body.position.y
  drawSprites();
}



function keyPressed() {
	if (keyCode===UP_ARROW) {
	   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:33,y:-26});
	   
	 }
   }