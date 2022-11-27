// 最終課題を制作しよう
let colorVari1, colorVari2, colorVari3 = [];
let state, sState;
let stars = [], shootingStars = [];
let bInt, v, l, pileVx;

function setup(){
  createCanvas(400, 400);
  colorMode(HSL, 360, 100, 100, 100);
  colorVari1 = [250, 248, 246, 244, 242, 240, 238, 236, 234, 232, 230, 225, 220, 210, 200, 190, 180, 170, 50];
  colorVari2 = [color(215, 50, 60, 100), color(215, 60, 50, 100), color(215, 90, 30, 100), color(215, 70, 40, 100)];
  for(let i = 0; i < 4; i++){
    let brightness = 30 - i * 5;
    colorVari3.push(color(215, 60, brightness, 100));
  }
  state = 0, sState = 0;
  bInt = 120, v = 10, l = 0, pileVx = 0;
}

function draw(){
  let ex = width / 2, a = width * 1.5, b = height * 0.45;

  background(0);

  if(state == 0){
    sky(170, 260, 280, 300, 310, 325, 210, 190, 180, 70, 60, 40, 60, ex, a, b);

    mountain(height * 0.25, 0.012, 1, 0, 10, colorVari2[0], 0);
    mountain(height * 0.3, 0.012, 1, 1, 20, colorVari2[1], 10);
    mountain(height * 0.42, 0.012, 2, 0.3, 40, colorVari2[3], 30);
    mountain(height * 0.42, 0.012, 2, -0.2, 40, colorVari2[3], 30);
    mountain(height * 0.42, 0.012, 2, 0, 70, colorVari2[2], 20);

    flow(0, -0.2, 1.2, 0.55, 1.2, 500, 0.0015, 5);

    luminous();
    reflection(145, 80, height * 0.55);
    reflection2(255, 80, height * 0.55);
  }

  if(state == 1){
    push();
    for(let i = 0; i < stars.length; i++){
      let s = stars[i];
      noStroke();
      fill(s.c, 90, 90, 100);
      rotatedStar(s.x, s.y, s.s, s.s * 2);
      rotatedStar(s.x, height * 1.1 - s.y, s.s, s.s * 2);
    }

    if(sState == 1){
      let ss = shootingStars[0];
      fill(200, 80, 90, 100);
      star(ss.x, ss.y, ss.s, ss.s * 2, 5);
      star(ss.x, height * 1.1 - ss.y, ss.s, ss.s * 2, 5);

      strokeWeight(1);
      stroke(200, 80, 90, bInt);
      line(ss.x - 3 + l, ss.y - 3 + l, ss.x - 3, ss.y - 3);
      line(ss.x - 3 + l, height * 1.1 - (ss.y - 3 + l), ss.x - 3, height * 1.1 - (ss.y - 3));
      bInt -= 30;
      ss.x += v;
      ss.y += v;
      ss.s -= 0.24
      l -= v;

      pileVx += v;
      if(pileVx > 40){
        shootingStars.shift();
        sState = 0;
        pileVx = 0;
        bInt = 120;
        l = 0;
      }
    }
    pop();

    mountain(height * 0.25, 0.012, 1, 0, 10, colorVari3[3], 0);
    mountain(height * 0.3, 0.012, 1, 1, 20, colorVari3[2], 10);
    mountain(height * 0.42, 0.012, 2, 0.3, 40, colorVari3[1], 30);
    mountain(height * 0.42, 0.012, 2, -0.2, 40, colorVari3[1], 30);
    mountain(height * 0.42, 0.012, 2, 0, 70, colorVari3[0], 20);

    reversedmountain(height * 0.85, 0.012, 1, 0, 10, colorVari3[3], 0);
    reversedmountain(height * 0.8, 0.012, 1, 1, 20, colorVari3[2], 10);
    reversedmountain(height * 0.68, 0.012, 2, 0.3, 40, colorVari3[1], 30);
    reversedmountain(height * 0.68, 0.012, 2, -0.2, 40, colorVari3[1], 30);
    reversedmountain(height * 0.68, 0.012, 2, 0, 70, colorVari3[0], 20);

    cartain(height * 0.55, height * 0.45);
  }
}

function keyPressed(){
  if(key == "y"){
    if(state == 0){
      state = 1;
    }
    else if(state == 1){
      state = 0;
    }
  }

  if(key == "h"){
    if(state == 1){
      stars.push({x: random(5, 390), y: random(5, 120), s: random(0.1, 1.7), c: random(30, 330)});
    }
  }

  if(key == "n"){
    if(state == 1){
      shootingStars.push({x: random(30, 350), y: random(- 10, 100), s: 1.7});
      sState = 1;
    }
  }
}

function mountain(y, noiseScale, angleTimes, phase, amplitude, mColor, noiseChange){
  push();
  for(let x = 0; x < width; x += 0.05){
    let noiseVal = noise(x * noiseScale + noiseChange);
    let ratio = map(x, 0, width, 0, 1);
    stroke(mColor);
    if(y - (cos(PI * ratio * angleTimes - PI * phase)) * amplitude + noiseVal * 80 < height * 0.55){
      line(x, y - (cos(PI * ratio * angleTimes - PI * phase)) * amplitude + noiseVal * 80, x, height * 0.55);
    }
  }
  pop();
}

function reversedmountain(y, noiseScale, angleTimes, phase, amplitude, mColor, noiseChange){
  push();
  for(let x = 0; x < width; x += 0.05){
    let noiseVal = noise(x * noiseScale + noiseChange);
    let ratio = map(x, 0, width, 0, 1);
    stroke(mColor);
    if(y + (cos(PI * ratio * angleTimes - PI * phase)) * amplitude - noiseVal * 80 > height * 0.55){
      line(x,  y + (cos(PI * ratio * angleTimes - PI * phase)) * amplitude - noiseVal * 80, x, height * 0.55);
    }
  }
  pop();
}

function flow(oceancolor, xbegin, xend, ybegin, yend, cntMax, scale, wave){
  push();
  fill(oceancolor);
  rect(0, height * 0.55, width, height * 0.45);
  
  push();
  for(let i = 0; i < colorVari1.length; i++){
    for(let xInt = xbegin; xInt <= xend; xInt += noise(i) * 0.15){
      for(let yInt = ybegin; yInt <= yend; yInt += noise(i) * 0.15){
        let xPoint = xInt;
        let yPoint = yInt;
        for(let cnt = 0; cnt < cntMax; ++cnt){
          let ratio = map(cnt, 0, cntMax, 0, 1);
          strokeWeight(sin(PI * ratio));
          stroke(colorVari1[i], 100, (1 - sin(PI * ratio)) * 80, 100);
          xPoint += scale * cos(TWO_PI * noise(xPoint, yPoint) * wave);
          yPoint += scale * sin(TWO_PI * noise(yPoint, xPoint) * wave);
          if(yPoint * height > height * 0.55){
            point(xPoint * width, yPoint * height);
          }
        }
      }
    }
  }
  pop();

  noFill();
  strokeWeight(0.7);
  stroke(215, 50, 40, 100);
  line(0, height * 0.55, width, height * 0.55);
  pop();
}

function reflection(xint, yend, y){
  for(let i = 0; i < yend; i += 0.1){
    stroke(215, 90, 30, 10);
    line(0, y + i, xint - i * 1.2 - noise(i * 0.08) * 80, y + i);
  }
}

function reflection2(xint, yend, y){
  for(let i = 0; i < yend; i += 0.1){
    stroke(215, 90, 30, 10);
    line(xint + i + noise(i * 0.08) * 80, y + i, width, y + i);
  }
}

function luminous(){
  for(let i = height * 0.55 + 0.3; i < height; i += 0.1){
    let ratio = map(i, height * 0.55 + 0.5, height, 0, 1);
    stroke(210, 60, 70, 12);
    line(width / 2 - (cos(PI * ratio * 1.5 + PI * 0.2) * 40 + noise(i * 0.1 + 10) * 100), i, width / 2 + cos(PI * ratio * 1.5 + PI * 0.2) * 40 + noise(i * 0.1) * 100, i);
  }
}

function gradation(ybegin, yend, heuInt, heuChange, brightnessInt, amplitude, angleTimes, posiORnega, ex, a, b){
  for(let i = ybegin; i < yend; i++){
    let ratio = map(i, ybegin, yend, 0, 1);
    noStroke();
    fill(heuInt - ratio * heuChange, 80, brightnessInt + sin(PI * ratio * angleTimes) * amplitude * posiORnega, 100);
    ellipse(ex, i, a * 2, b * 2);
  }
}

function sky(y1, y2, y3, y4, y5, y6, hue1, hue2, hue3, hue4, hue5, hue6, brightnessInt, ex, a, b){
  gradation(y1, y2, hue1, hue1 - hue2, brightnessInt, 20, 0.5, 1, ex, a, b);
  gradation(y2, y3, hue2, hue2 - hue3, brightnessInt + 20, 5, 0.5, 1, ex, a, b);
  gradation(y3, y4, hue3, hue3 - hue4, brightnessInt + 25, 5, 1, 1, ex, a, b);
  gradation(y4, y5, hue4, hue4 - hue5 , brightnessInt + 25, 5, 0.5, -1, ex, a, b);
  gradation(y5, y6, hue5, hue5 - hue6, brightnessInt + 20, 10, 0.5, -1, ex, a, b);
}

function star(x, y, radius1, radius2, npoints){
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2;
  beginShape();
  for(let a = 0; a < TWO_PI; a += angle){
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function rotatedStar(x, y, radius1, radius2){
  push();
  translate(x, y);
  rotate(PI * 0.3);
  star(0, 0, radius1, radius2, 5);
  pop();
}

function cartain(ybegin, length){
  push();
  noStroke();
  fill(215, 80, 10, 40);
  rect(0, ybegin, width, length);
  noFill();
  strokeWeight(0.1);
  stroke(215, 50, 90, 100);
  line(0, ybegin, width, ybegin);
  pop();
}