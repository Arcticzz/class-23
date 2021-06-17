const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var tower;

function preload(){
    background1 = loadImage("background.gif")
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    tower = new Tower(150,360,150,400);
    ground = new Ground(600,580,1200,30)
    canon = new Canon(190,90,50,50)
}

function draw(){
    background(0);
    image(background1, 0,0, width, height)
    Engine.update(engine);

    tower.display();
    ground.display()
    canon.display();
}