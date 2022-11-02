// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
let sx, sy;
function setup(){
  createCanvas(400, 400);
  sx=120;
  sy=125;
}

function draw(){
  background(255);
  balloon("cinnamoroll", 100, 100, sx, sy);
}

function mouseClicked(){
  sx=mouseX;
  sy=mouseY;
}

function balloon(t, x, y, sx, sy){
  push();
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 10;
  noStroke();
  fill(255);
  ellipse(x, y, w+p*2, h+p*2);
  stroke(255);
  triangle(x+((w+p*2)/2)*cos(PI/3), y+((h+p*2)/2)*sin(PI/3), x+((w+p*2)/2)*cos(PI/2), y+((h+p*2)/2)*sin(PI/2), sx, sy);
  stroke(163, 121, 75);
  line(x+((w+p*2)/2)*cos(PI/3), y+((h+p*2)/2)*sin(PI/3), sx, sy);
  line(x+((w+p*2)/2)*cos(PI/2), y+((h+p*2)/2)*sin(PI/2), sx, sy);
  noFill();
  arc(x, y, w+p*2, h+p*2, PI/2, PI/5);
  fill(250, 207, 229);
  stroke(5, 203, 252);
  strokeWeight(2);
  text(t, x-(w/2), y+h/3);
  pop();
}