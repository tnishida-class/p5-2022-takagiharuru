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
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;

  }
  let b1={x:30, y:0, size:10, vx:0, vy:20};
  balls.push(b1);
  let b2={x:10, y:0, size:20, vx:0, vy:30};
  balls.push(b2);
  let b3={x:50, y:0, size:random(3, 10),vx:0, vy:10};
  balls.push(b3);
  let b4 ={x:70, y:0, size:10, vx:0, vy:20};
  balls.push(b4);
  let b5 = {x:90, y:0, size:20,vx:0, vy:30};
  balls.push(b5);
  let b6 = {x:130, y:0, size:40, vx:0, vy:50};
  balls.push(b6);
  let b7 = {x:200, y:0, size:random(7, 17),vx:0, vy:20};
  balls.push(b7);
  let b8 = {x:290, y:0, size:90, vx:0, vy:100};
  balls.push(b8);
  let b9 = {x:170, y:0, size:20,vx:0, vy:30};
  balls.push(b9);
  let b10 = {x:230, y:0, size:25, vx:0, vy:35};
  balls.push(b10);
  let b11 = {x:350, y:0, size:25, vx:0, vy:35};
  let b12 = {x:380, y:0, size:random(7, 17),vx:0, vy:20};
  let b13 = {x:410, y:0, size:20,vx:0, vy:30};
  let b14 = {x:450, y:0, size:40, vx:0, vy:50};
  let b15 = {x:490, y:0, size:20,vx:0, vy:30};
  let b16 = {x:510, y:0, size:10, vx:0, vy:20};
  let b17 = {x:530, y:0, size:random(3, 10),vx:0, vy:10};
  let b18 = {x:550, y:0, size:10, vx:0, vy:20};
  let b19 = {x:570, y:0, size:20, vx:0, vy:30};
  balls.push(b11, b12, b13, b14, b15, b16, b17, b18, b19);
}

function mouseDragged(){
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 5){
    const b = { x: mouseX, y: mouseY, size: 20, vx: dx, vy: dy };
    balls.push(b);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
