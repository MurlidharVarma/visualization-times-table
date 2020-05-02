let CIRCLE_NO = 100;
let SPACE_BETWEEN_CIRCLE=30;

let CIRCLE_DIA;
let CIRCLE_RADIUS;
let CIRCLES_PER_ROW;

function setup(){
  createCanvas(windowWidth, 5000);
  CIRCLE_DIA = Math.max(300,Math.ceil((windowWidth - (CIRCLE_NO*SPACE_BETWEEN_CIRCLE))/CIRCLE_NO));
  CIRCLE_RADIUS = CIRCLE_DIA/2;
  CIRCLES_PER_ROW = Math.floor(windowWidth/(CIRCLE_DIA + SPACE_BETWEEN_CIRCLE));

  angleMode(DEGREES)
  // frameRate(2)
  noLoop();
}

function draw() {
  for(let i=0; i< CIRCLE_NO; i++){
    let rowMultiplier = Math.floor(i/CIRCLES_PER_ROW);
    let columnMultiplier = (i%CIRCLES_PER_ROW);
    let x = ((CIRCLE_DIA + SPACE_BETWEEN_CIRCLE)*columnMultiplier) + CIRCLE_RADIUS;
    let y = ((CIRCLE_DIA + SPACE_BETWEEN_CIRCLE)*rowMultiplier) + CIRCLE_RADIUS;
    new Circle(i+2,300,x+SPACE_BETWEEN_CIRCLE,y+SPACE_BETWEEN_CIRCLE,CIRCLE_DIA);
  }
}