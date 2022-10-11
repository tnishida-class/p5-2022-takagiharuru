function setup() {
  createCanvas(128,128);
}

function draw() {
  background(255);
  strokeWeight(0);
  fill(124, 30, 128);
  triangle(12,120,116,120,116,10);
  fill(255);
  triangle(14,112,108,112,108,14);
  strokeWeight(1.25);
  stroke(240,153,180);
  fill(255);
  triangle(0,108,104,108,104,0);
  strokeWeight(0);
  fill(240,153,180);
  textSize(29);
  textFont("serif");
  text("46", 67, 105);
}