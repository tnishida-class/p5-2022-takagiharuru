// テキスト「関数を作る(2) 結果を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(520, 500);
  calendar(1234, 10);

  // isLeapYear の動作確認のため console に出力しています
  for(let i = 2000; i <= 2100; i++){
    if(isLeapYear(i)){
      console.log(i + "年はうるう年です");
    }
    else{
      console.log(i + "年はうるう年ではありません");
    }
  }
  console.log(dayOfWeek(2001, 6, 25));
}

function calendar(y, m){
  let dow = dayOfWeek(y, m, 1);
  let cellWidth = 60, cellHeight = 50;
  const c = [color(132, 145, 150), color(34, 122, 58), color(130, 130, 80)];
  fill(252, 251, 240);
  noStroke();
  rect(0, 0, cellWidth * 7 + 100, cellHeight * (int((dow - 1 + 31) / 7) + 3) + 75);

  push();
  translate(50, 30);

  push();
  stroke(c[0]);
  strokeWeight(2);
  line(0, cellHeight * 2 - 24, cellWidth * 7, cellHeight * 2 - 24)
  strokeWeight(1);
  line(0, cellHeight * 2, cellWidth * 7, cellHeight * 2);
  pop();

  textFont("serif");
  textAlign(LEFT, TOP);
  push();
  fill(c[0]);
  textSize(80);
  text(m, 0, 0);
  textSize(20);
  text(y, cellWidth * 2, cellHeight * 1);
  pop();

  push();
  textAlign(CENTER, BOTTOM);
  for(let i = 0; i < 7; i++){
    if(i == 0){
      fill(c[1]);
    }
    else if(i == 6){
      fill(c[2]);
    }
    else{
      fill(c[0]);
    }
    text(dayOfWeekAsString(i), 30 + i * cellWidth, 2 * cellHeight - 4);
  }
  pop();

  for(let d = 1; d <= daysInMonth(y, m); d++){
    textSize(16);
    if(dayOfWeek(y, m, d) == 0){
      fill(c[1]);
    }
    else if(dayOfWeek(y, m, d) == 6){
      fill(c[2]);
    }
    else{
      fill(c[0]);
    }
    text(d, cellWidth * ((dow - 1 + d) % 7) + 2, cellHeight * (int((dow - 1 + d) / 7) + 2) + 15);
  }
  pop();
}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(y){
  return isLeapYear(y) ? 366 : 365;
}

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d){
  let n = 0;
  if(y > 1900){
    for(let i = 1900; i < y; i++){
      n += daysInYear(i);
    }
    return (n + dayOfYear(y, m, d)) % 7;
  }
  else if(y < 1900){
    for(let i = 1899; i > y; i--){
      n += daysInYear(i);
    }
    return (8 - ((n + (daysInYear(y)- dayOfYear(y, m, d) + 1)) % 7)) % 7;
  }
  else if(y == 1900){
    return dayOfYear(y, m, d) % 7;
  }
}

function dayOfWeekAsString(dow){
  const a = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return a[dow];
}