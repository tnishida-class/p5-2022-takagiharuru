//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls;

function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];
}

function draw(){
  background(160, 192, 255);
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    noStroke();
    fill(255);
    ellipse(b.x, b.y, b.size);
    fill(146, 182, 252);
    ellipse(b.x, b.y, b.size*0.95);

    noFill();
    stroke(220, 66, 255);//紫
    strokeWeight(b.size/30);
    arc(b.x, b.y, b.size*0.9, b.size*0.9, HALF_PI+QUARTER_PI, PI+HALF_PI);
    arc(b.x, b.y, b.size*0.9, b.size*0.9, QUARTER_PI, HALF_PI);
    arc(b.x, b.y, b.size*0.9, b.size*0.9, 0, PI/8);
    stroke(78, 221, 252);//青
    arc(b.x, b.y, b.size*0.85, b.size*0.85, PI+HALF_PI+QUARTER_PI, QUARTER_PI);
    arc(b.x, b.y, b.size*0.85, b.size*0.85, HALF_PI+QUARTER_PI, PI+QUARTER_PI);
    arc(b.x, b.y, b.size*0.85, b.size*0.85, PI*4/3, PI*3/2);
    stroke(218, 255, 153);//緑
    arc(b.x, b.y, b.size*0.9, b.size*0.9, HALF_PI, HALF_PI+QUARTER_PI);
    arc(b.x, b.y, b.size*0.9, b.size*0.9, PI+QUARTER_PI, PI+HALF_PI+QUARTER_PI);
    stroke(255);//白
    arc(b.x, b.y, b.size*0.87, b.size*0.87, PI, PI*5/3);
    arc(b.x, b.y, b.size*0.87, b.size*0.87, PI/4, PI*2/3);
    strokeWeight(b.size/40);
    arc(b.x, b.y, b.size*0.77, b.size*0.77, PI, PI*5/3);
    strokeWeight(b.size/70);
    stroke(250, 235, 105);//黄
    arc(b.x, b.y, b.size*0.95, b.size*0.95, 0, PI/3);
    arc(b.x, b.y, b.size*0.95, b.size*0.95, PI*7/8, PI*15/8);
    stroke(78, 221, 252);//青
    strokeWeight(b.size/10);
    arc(b.x, b.y, b.size*0.5, b.size*0.5, PI/2, PI);

    noStroke();
    fill(255);
    ellipse(b.x-b.size*0.33, b.y-b.size/5, b.size/4, b.size/4);
    ellipse(b.x+b.size*0.38, b.y+b.size/5, b.size/6, b.size/6);

    b.x += b.vx;
    b.y += b.vy;
  }
  // let b1={x:30, y:0, size:10, vx:0, vy:20};
  // balls.push(b1);
  // let b2={x:10, y:0, size:20, vx:0, vy:30};
  // balls.push(b2);
  // let b3={x:50, y:0, size:random(3, 10),vx:0, vy:10};
  // balls.push(b3);
  // let b4 ={x:70, y:0, size:10, vx:0, vy:20};
  // balls.push(b4);
  // let b5 = {x:90, y:0, size:20,vx:0, vy:30};
  // balls.push(b5);
  // let b6 = {x:130, y:0, size:40, vx:0, vy:50};
  // balls.push(b6);
  // let b7 = {x:200, y:0, size:random(7, 17),vx:0, vy:20};
  // balls.push(b7);
  // let b8 = {x:290, y:0, size:70, vx:0, vy:80};
  // balls.push(b8);
  // let b9 = {x:170, y:0, size:20,vx:0, vy:30};
  // balls.push(b9);
  // let b10 = {x:230, y:0, size:25, vx:0, vy:35};
  // balls.push(b10);
  // let b11 = {x:350, y:0, size:25, vx:0, vy:35};
  // let b12 = {x:380, y:0, size:random(7, 17),vx:0, vy:20};
  // let b13 = {x:410, y:0, size:20,vx:0, vy:30};
  // let b14 = {x:450, y:0, size:40, vx:0, vy:50};
  // let b15 = {x:490, y:0, size:20,vx:0, vy:30};
  // let b16 = {x:510, y:0, size:10, vx:0, vy:20};
  // let b17 = {x:530, y:0, size:random(3, 10),vx:0, vy:10};
  // let b18 = {x:550, y:0, size:10, vx:0, vy:20};
  // let b19 = {x:570, y:0, size:20, vx:0, vy:30};
  // balls.push(b11, b12, b13, b14, b15, b16, b17, b18, b19);

  if(mouseIsPressed){
    stroke(55, 250, 61);
    strokeWeight(5);
    fill(146, 182, 252);
    ellipse(mouseX, mouseY-60, 15, 40);
    strokeWeight(8);
    line(mouseX, mouseY-35, mouseX, mouseY+25);
    strokeWeight(2);
    // stroke(78, 221, 252);
    // arc(mouseX, mouseY-60, 5, 30, PI*7/5, PI*9/5);
    // stroke(220, 66, 255);
    // arc(mouseX, mouseY-60, 5, 30, PI/2, PI*3/5);
    // strokeWeight(1.5);
    // stroke(250, 235, 105);
    // arc(mouseX, mouseY-60, 7, 34, PI*3/5, PI*6/5);
    strokeWeight(1);
    stroke(255);
    arc(mouseX, mouseY-60, 5, 30, PI, PI*3/2);
    arc(mouseX, mouseY-60, 5, 30, PI/3, PI/2);
  }
}

function mouseDragged(){
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 5){
    const b = { x: mouseX, y: mouseY-55, size: random(10, 30), vx: -dx, vy: -dy };
    balls.push(b);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
