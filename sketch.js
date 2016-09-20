//Emily Hargis
//Beer Pong
//Open with Safari

 var playerleft, playerright, ball;

var radius = 10;
var x = 350;
var speed = 5;
var direction = 1;

var ballstate = 1;

var doonce = 0;
var scoreleft = 0;
var scoreright = 0;
var directionsleft = "Controls:\n 'w' = up\n 's' = down";
var directionsright = "Controls:\n up arrow key = up\n down arrow key = down";
var score = 0;

var px = 100;
var py = 100;

var px2 = 600;
var py2 = 100;

var backg;
var swag = 100; //background fade

function setup(){
  createCanvas(700,650);
  background("background2.png");
  ellipseMode(RADIUS);

   playerleft = createSprite(20, 60);
   playerright = createSprite(20, 60);
   ball = createSprite(radius, radius);

   playerleft.addImage(loadImage("beer.png"));
   playerright.addImage(loadImage("beer.png"));
   ball.addImage(loadImage("pongball.png"));

   ball.setSpeed(speed,random(-70, 70));
   ball.position.x = 350;
   ball.position.y = 300;

   playerleft.immovable = true;
   playerright.immovable = true;

  //  ball.debug = true;
  //  playerleft.debug = true;
  //  playerright.debug = true;

   playerleft.scale = 2.5;
   playerright.scale = 2.5;

   playerleft.setCollider("rectangle", 0, 0, 13, 55);
   playerright.setCollider("rectangle", 0, 0, 13, 55);
   ball.setCollider("circle", 0, 0, 7, 7);

   backg = loadImage("background.png");
}

function draw(){

  //background(backg, 40); //figure out how to make it fade
  background(246, 149, 188, swag);

  //score text
  fill('white');
  textSize(32);
  text(scoreright, width/2+100, 60);
  text(scoreleft, width/2-330, 60);

  textSize(20);
  text(directionsleft, width/2-330, 580);
  text(directionsright, width/2+100, 580);

  //left player controls
   playerleft.position.x = px;
   playerleft.position.y = py;

   if(keyIsPressed){
     if(key == "w"){
       println("forward");
       py-=speed;
     }
     if(key == "s"){
       println("back");
       py+=speed;
     }
   }

   //right player controls
   playerright.position.x = px2;
   playerright.position.y = py2;

   if(keyIsPressed){
     if(keyCode == UP_ARROW){
       println("forward");
       py2-=speed;
     }
     if(keyCode == DOWN_ARROW){
       println("back");
       py2+=speed;
     }
   }

   //makes ball bounce
   ball.bounce(playerleft);
   ball.bounce(playerright);

   //records score and respawns ball in random direction
  if(ball.position.x<0) {
    ball.position.x = 350;
    ball.setSpeed(speed,random(-70, 70));
    scoreleft++;
    swag -= 15;
    background(246, 149, 188, swag);
  }
  if(ball.position.x>width) {
    ball.position.x = 350;
    ball.setSpeed(speed,random(-70, 70));
    scoreright++;
    swag -= 15;
    background(246, 149, 188, swag);
    }
  if(ball.position.y<0) {
    ball.position.y = 1;
    ball.velocity.y = abs(ball.velocity.y);
    }

  if(ball.position.y>height) {
    ball.position.y = height-1;
    ball.velocity.y = -abs(ball.velocity.y);
    }

  if(scoreleft == 10 || scoreright == 10){
    scoreleft = 0;
    scoreright = 0;
    swag = 100;
  }

   drawSprites();

}
