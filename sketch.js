const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drops;
var umbrella,umbrellaImg;

function preload(){
    umbrellaImg=loadImage("umbrella.jpg");

}

function setup(){
    var canvas = createCanvas(400,1200);
    engine = Engine.create();
    world = engine.world;
    
    drops = new Drops(random(400,1200), random(400, 1200));
    umbrella = new Umbrella(200, 1100);

}

function draw(){
    background(0);

    drops.dipslay();
    umbrella.display();
    drawSprites();
    
}   

