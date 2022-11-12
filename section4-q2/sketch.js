// テキスト「配列を使った描画」練習問題：円グラフ
let scores = [];
let total = 0;
function setup(){
  createCanvas(400, 400);

  // 配列をランダムに初期化する
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
    console.log(scores[i]);
  }

  // 円グラフを描くには割合が必要なので合計を計算しておく
  for(let i = 0; i < scores.length; i++){ 
    total += scores[i]; 
  }
}

function draw(){
  background(240);

  let ppi=0;
  for(let i = 1; i < scores.length; i++){
    ppi+=PI*2*(scores[i-1]/total);
    arc(width/2, height/2, width*0.8, height*0.8, -PI/2+ppi, PI*2*(scores[i]/total)-PI/2+ppi, PIE);
    // let s=round(scores[i], 1);//.0が出ない
    // let ix=width/2;
    // let iy=height/2;
    // textAlign(CENTER, CENTER);
    // text(s, ix+width*0.3*cos(PI*(scores[i]/total)-PI/2+ppi), iy+height*0.3*sin(PI*(scores[i]/total)-PI/2+ppi));
    // console.log(PI*(scores[i]/total)-PI/2+ppi);
    // console.log(ppi);
  }
  arc(width/2, height/2, width*0.8, height*0.8, -PI/2, PI*2*(scores[0]/total)-PI/2, PIE);
  // let s=round(scores[0], 1);
  // let ix=width/2;
  // let iy=height/2;
  // textAlign(CENTER, CENTER);
  // text(s, ix+width*0.3*cos(PI*(scores[0]/total)-PI/2), iy+height*0.3*sin(PI*(scores[0]/total)-PI/2));

  let ppi2=0;
  for(let i = 1; i < scores.length; i++){
    let r1, r2;
    ppi2+=PI*2*(scores[i-1]/total);
    r1=-PI/2+ppi2;
    r2=PI*2*(scores[i]/total)-PI/2+ppi2;
    let s=round(scores[i], 1);
    if(r1>=-PI/2 && r1<=PI/2 && r2>=-PI/2 && r2<=PI/2){
      if(((mouseX-width/2)*(mouseX-width/2)+(mouseY-height/2)*(mouseY-height/2))<(width*0.4)*(width*0.4) && mouseY>((mouseX-width/2)*tan(r1)+height/2) && mouseY<((mouseX-width/2)*tan(r2)+height/2)){
        text(s, mouseX-10, mouseY-5);
      }
    }
    else if(r1>=-PI/2 && r1<=PI/2 && r2>=PI/2 && r2<=PI*3/2){
      if(((mouseX-width/2)*(mouseX-width/2)+(mouseY-height/2)*(mouseY-height/2))<(width*0.4)*(width*0.4) && mouseY>((mouseX-width/2)*tan(r1)+height/2) && mouseY>((mouseX-width/2)*tan(r2)+height/2)){
        text(s, mouseX-10, mouseY-5);
      }
    }
    else if(r1>=PI/2 && r1<= PI*3/2 && r2>=PI/2 && r2<=PI*3/2){
      if(((mouseX-width/2)*(mouseX-width/2)+(mouseY-height/2)*(mouseY-height/2))<(width*0.4)*(width*0.4) && mouseY<((mouseX-width/2)*tan(r1)+height/2) && mouseY>((mouseX-width/2)*tan(r2)+height/2)){
        text(s, mouseX-10, mouseY-5);
      }
    }
    // console.log(r1);
    // console.log(r2);
    // console.log(tan(r1));
    // console.log(tan(r2));
  }//最後のパイの上で数値が表示されない時がある
  if(((mouseX-width/2)*(mouseX-width/2)+(mouseY-height/2)*(mouseY-height/2))<(width*0.4)*(width*0.4) && mouseY>((mouseX-width/2)*tan(-PI/2)+height/2) && mouseY<((mouseX-width/2)*tan(PI*2*(scores[0]/total)-PI/2)+height/2)){
    text(round(scores[0], 1), mouseX-10, mouseY-5);
  }
}