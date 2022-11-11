// テキスト「配列を使った描画」練習問題：折れ線グラフ
let scores = [];

function setup(){
  createCanvas(400, 400);
    // 配列をランダムに初期化する
    for(let i = 0; i < 10; i++){
      scores[i] = random(60, 100); // 60以上100未満のランダムな数を代入
    }
}

function draw(){
  background(240);

  // 横線を引く
  const n = 10;
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }

  // ここからが本番
  fill(0);
  const dx = width / scores.length;
  let px, py; // 線を引くために一つ前の点を覚えておく変数
  for(let i = 0; i < scores.length; i++){
    line(px, py, dx*i+dx/2, height-(scores[i]*4));
    px = dx*i+dx/2;
    py = height-(scores[i]*4);
    // console.log(py);
    // console.log(height-(scores[i]*4));
    circle(px, py, 5);
  }

  for(let i = 0; i < scores.length; i++){
    let s=round(scores[i]);
    if(dist(mouseX, mouseY, dx*i+dx/2, height-(scores[i]*4))<10){
      fill(212, 25, 25);
      if((height-(scores[i]*4)-5-(textAscent() + textDescent()))<0){
        text(s, dx*i+dx/2-20, height-(scores[i]*4)+10);
      }
      else{
        text(s, dx*i+dx/2-5, height-(scores[i]*4)-5);
      }
    }
  }
}