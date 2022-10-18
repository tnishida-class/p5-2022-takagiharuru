// テキスト「アニメーションの基本」
let x, y, vy;
const g = 1; // 重力加速度
const jump = 20;
const size = 20

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width - size / 2;
  y = height - size / 2;
  vy = 0;
}

function draw(){
  background(160, 192, 255);
  ellipse(x, y, size, size);
  y += vy;

  if(y < height - size / 2){
    vy += g;
  }
  else{
    vy = 0;
  }

  if(keyIsDown(LEFT_ARROW)){x -= 5;}
  if(keyIsDown(RIGHT_ARROW)){x += 5;}

}

function keyPressed(){
  if(key==" "){
    vy = -jump;  
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
