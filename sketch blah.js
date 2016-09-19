var ed = 100; // ellipse d
var ex = 100;
var ey = 100;

var speed = 1;

function setup(){
  createCanvas(640,480);
}

function draw(){
  background(150);

  ellipse(ex,ey,ed);

  if(keyIsPressed){
    if(key == "w"){
      println("forward");
      ey-=speed;
    }
    if(key == "d"){
      println("right");
      ex+=speed;
    }
    if(key == "a"){
      println("left");
      ex-=speed;
    }
    if(key == "s"){
      println("back");
      ey+=speed;
    }
  }
}
