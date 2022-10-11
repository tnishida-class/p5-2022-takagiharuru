// 小手調べ
function setup(){
  createCanvas(100,100)
  for(let i = 10; i > 0; i--){
    if(i<=5){
      stroke(0,0,255);
    }
    else{
      stroke(255,0,0);
    }
    strokeWeight(1.5);
    ellipse(50,50,i*10)
  }
}
