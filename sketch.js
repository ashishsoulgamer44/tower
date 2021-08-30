const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1 , ground2
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,boxx1,boxx2,boxx3,boxx4,boxx5,boxx6,boxx7,boxx8,boxxx1,boxxx2,boxxx3,boxxx4
,boxxxx1


var hexa_image, hexa

var chain

function preload() {
    hexa_image=loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

//load
ground= new Ground(1000,250,300,20)
    ground2= new Ground(540,450,300,20)
    

   box1 = new Box(432,421,30,40);
   box2 = new Box(462,421,30,40);
   box3 = new Box(492,421,30,40);
   box4 = new Box(521,421,30,40);
   box5 = new Box(551,421,30,40);
   box6 = new Box(581,421,30,40);
   box7 = new Box(611,421,30,40); 
   boxx1 = new Box2(462,350,30,40);
   boxx2 = new Box2(492,350,30,40);
   boxx3 = new Box2(522,350,30,40);
   boxx4 = new Box2(552,350,30,40);
   boxx5 = new Box2(582,350,30,40);
   boxxx1 = new Box3(492,318,30,40);
   boxxx2 = new Box3(522,318,30,40);
   boxxx3 = new Box3(552,318,30,40);
   boxxxx1 = new Box4(522,294,30,40);
    box8 = new Box(897,214,30,40);
    box9 = new Box(927,214,30,40);
    box10 = new Box(957,214,30,40);
    box11 = new Box(987,214,30,40);
    box12 = new Box(1017,214,30,40);
    boxx6 = new Box2(927,176,30,40);
    boxx7 = new Box2(957,176,30,40);
    boxx8 = new Box2(987,176,30,40);
    boxxx4 = new Box3(957,130,30,40);





    hexa=Bodies.circle(50,200,20)
    World.add(world,hexa)

    chain=new Chain(hexa,{x:150,y:200})

}

function draw(){

    background ("black");
    text(mouseX+","+mouseY,36,31);
        noStroke();
        textSize(35)
        fill("white")
    

    Engine.update(engine);
    
 //display
ground.display();
ground2.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
boxx1.display();
boxx2.display();
boxx3.display();
boxx4.display();
boxx5.display();
boxxx1.display();
boxxx2.display();
boxxx3.display();
boxxxx1.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
boxx6.display();
boxx7.display();
boxx8.display();
boxxx4.display();


chain.display()

  

  
    imageMode(CENTER)
    image(hexa_image,hexa.position.x,hexa.position.y,40,40)
  

}

function mouseDragged(){
    Matter.Body.setPosition(hexa, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    chain.fly();
}

function keyPressed(){
    if(keyCode===32){
        chain.attach(hexa)
       }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}

