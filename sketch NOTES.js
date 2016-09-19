//var v;

function setup(){
  //v = 100;
  createCanvas(640, 480);
  //background('red'); // if the background was only in setup, every circle made with the mouse would stay there
  noCursor();
  smooth();
}

function draw (){
  //println("hi"); // this would print continously; put in setup
  //ellipse(width/2, height/2, 20); // in center of canvas
  //background (255, 0, 0, 100); // reprints the background so there is no fade
  //background(255, 0, 0, 10); //reprints the background so the circle fades
  //ellipse(mouseX, mouseY, 20); // follows mouse
  var mouseDist = dist(mouseX, mouseY, pmouseX, pmouseY);
  background(255, map(mouseDist, 0, 70, 0, 255),
  map(mouseDist, 0, 70, 0, 255)-mouseX, 5); // background becomes orange when mouse is moved
  strokeWeight(mouseDist); //the faster you move the mouse, the bigger the stroke gets
  line(mouseX, mouseY, pmouseX, pmouseY); //"pmouse" stores the previous position of your mouse; draws a line
  println("x: ", mouseX, "y: ", mouseY); // print the quardinates of your mouse
  
}
