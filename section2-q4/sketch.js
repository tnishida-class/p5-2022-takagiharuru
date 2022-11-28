// ボスニアヘルツェゴビナ国旗
function setup() {
  createCanvas(200, 100);
}

function draw(){
  noStroke();
  background(0,1,155);
  fill(250,200,0);
  triangle(53,0,153,0,153,100)

  fill(255);
  for(let c=0;c<120;c+=12.5){
    push();
    translate(c+34,c-1.3);
    rotate(PI*3/10);
    star(0,0,3.6,9.4,5);
    pop();
  }
}

function star(x,y,radius1,radius2,npoints){
  let angle=TWO_PI/npoints;
  let halfAngle=angle/2;
  beginShape();
  for(let a=0;a<TWO_PI;a+=angle){
    let sx=x+cos(a)*radius2;
    let sy=y+sin(a)*radius2;
    vertex(sx,sy);
    sx=x+cos(a+halfAngle)*radius1;
    sy=y+sin(a+halfAngle)*radius1;
    vertex(sx,sy);
  }
  endShape(CLOSE);
}//starは，ヒム・カンパニー『２：形(Form)』https://himco.jp/2019/07/31/%ef%bc%92%ef%bc%9a%e5%bd%a2form/#%E6%98%9F%E5%BD%A2，を見ました．