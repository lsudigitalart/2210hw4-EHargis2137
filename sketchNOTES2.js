var ed = 100; // ellipse d
var ex = 150;
var ey = 200;

var rx = 300; // rectangle x
var ry = ey;
var rw = ed;
var rh = ed;

function setup(){
  createCanvas(640,480);
  //background(0);
}

function draw(){
  //if(mouseIsPressed == true){ //"=" is defining; "==" is comparing
    //println('hi'); // when mouse is clicked, it prints 'hi'
  //}
  //if(mouseX<width/2){ //if mouse is on the right, the cirlce is blue; if left, red
    //fill (255, 45, 32);
    //ellipse(10, 10, 10);
  //} else {
    //fill(0, 45, 232);
    //ellipse(10,10,10);
  //}
  background(100);

  var mdist = dist(mouseX, mouseY, ex, ey);

  if(mdist < ed/2){
    fill (0);
    ellipse(ex,ey,ed); //when your mouse touches the circle, it turns black
  } else {
    fill(255);
  }
    ellipse(ex,ey,ed);

  if(mouseX>rx && mouseY < ry + rh && mouseX < rx + rw && mouseY > ry){ //when your mouse touches the rectangle, it turns red
    fill(255,0,0);
    rect(rx, ry, rw, rh);
  } else {
    fill(255);
  }
    rect(rx, ry, rw, rh);

  rectMode(CORNER);

}
function mouseReleased(){ // when the mouse is released, the background turns green
  background(0, 255, 0);
}

 function mousePressed(){ //"mousePressed" has to be a function
 background (255, 0, 0); // when the mouse is pressed, the background turns red
 }
