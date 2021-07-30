const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, ground;

function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;
p1 = new P(300,300,50,50)
   
}

function draw(){

    p1.display()
    
    background(0);
    Engine.update(engine);
    
}
