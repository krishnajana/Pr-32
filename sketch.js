const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var bg ;

function preload() {
     getBackgroundImg();
     backgroundImg=loadImage(bg);
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    //if(backgroundImg){
        //background(backgroundImg);
  //  }
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON=await response.json();
   var dateTime=responseJSON.datetime
    hour=dateTime.slice(11,13)
   
    
  if(hour>=04 && hour<=06){
    bg="sunrise1.png";
   }else if(hour>=06 && hour<=08){
    bg="sunrise2.png"; 
   }else if(hour>=23 && hour==0){
    bg="sunset10.png";
   }else if(hour==0 && hour<=03){
    bg="sunset11.png";
   }else{
    bg="sunset12.png";
   }
   backgroundImg=loadImage(getBackgroundImg)
       }

  
 



