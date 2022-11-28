// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let size;
let color;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
  color = 0;
}

function draw(){
  background(160+color, 192, 255);
  count = (count + 1) % cycle;
  // BLANK[1]
  noStroke();
  ellipse(width / 2, height / 2, size);
  stroke(0, 180, 150);
  ellipse(width / 2, height / 2, size-30);
  stroke(70, 190, 60);
  ellipse(width / 2, height / 2, size-60);
  stroke(170,200,2);
  ellipse(width/2, height/2, size-90);
  size = count;
  color+=0.95;
  if(color>95){color=0;}
  if(keyIsDown("N".charCodeAt(0))){
    count += 2;
    color += 95/49.225;
  }
}