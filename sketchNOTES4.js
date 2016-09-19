var ed = 100; // ellipse d
var ex = 100;
var ey = 100;

var speed = 1;

var rx = 200; // rectangle x
var ry = 200;
var rw = 100;
var rh = 100;

var ts = "find it";
var doonce = 0;
var score = 0;

var squarestate = 1;

function setup(){
  createCanvas(640,480);
}

function draw(){
  background(150);

  textSize(32);
  text(score, width/2, 32)

  textSize(32);
  text(ts, width/2, height/2);

  ellipse(ex,ey,ed);
  if(ex+50 > rx && ex < rx + rw+50 && ey < ry + rh+50 && ey+50 > ry){
    if(doonce == 1 && squarestate == 1){
      background(255,0,0,100);
      ts = "found it";
      score++;
      doonce = 1;
    }
    squarestate = 0;
  } else {

    if(squarestate == 1){ //if the circle hits the rectangle, the rectangle vanishes
      background(0, 255, 0, 100);
      ts = "find it";
      rect(rx,ry,rw,rh);
    }
    doonce = 1;
  }

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
