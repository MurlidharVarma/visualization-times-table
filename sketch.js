let CIRCLE_NO = 10;
let MODULAR = 200;

let SPACE_BETWEEN_CIRCLE=30;

let CIRCLE_DIA;
let CIRCLE_RADIUS;
let CIRCLES_PER_ROW;

let ANIME_INIT = 0;
let CANVAS;

function configChange(){
  CIRCLE_NO = document.querySelector("#numberOfCircles").value,
  MODULAR = document.querySelector("#modularNumber").value;
  this.initalize();
  redraw();
}

function initalize(){
  CIRCLE_DIA = Math.max(300,Math.ceil((Math.min(windowWidth,windowHeight) - (CIRCLE_NO*SPACE_BETWEEN_CIRCLE))/CIRCLE_NO));
  CIRCLE_RADIUS = CIRCLE_DIA/2;
  CIRCLES_PER_ROW = Math.floor(windowWidth/(CIRCLE_DIA + SPACE_BETWEEN_CIRCLE));
  CANVAS = resizeCanvas(windowWidth, Math.max(windowHeight,(CIRCLE_DIA+(2*(SPACE_BETWEEN_CIRCLE+10)))*((CIRCLE_NO )/CIRCLES_PER_ROW)));
}

function setup(){
  CIRCLE_DIA = Math.max(300,Math.ceil((Math.min(windowWidth,windowHeight) - (CIRCLE_NO*SPACE_BETWEEN_CIRCLE))/CIRCLE_NO));
  CIRCLE_RADIUS = CIRCLE_DIA/2;
  CIRCLES_PER_ROW = Math.floor(windowWidth/(CIRCLE_DIA + SPACE_BETWEEN_CIRCLE));
  CANVAS = createCanvas(windowWidth, Math.max(windowHeight,(CIRCLE_DIA+(2*(SPACE_BETWEEN_CIRCLE+10)))*((CIRCLE_NO +CIRCLE_NO%CIRCLES_PER_ROW)/CIRCLES_PER_ROW)));
  CANVAS.parent('canvas-container');
  angleMode(DEGREES)
  noLoop();
}

function draw() {
    drawAllTimesTablesSnapshot();
}

function drawAllTimesTablesSnapshot(){
  for(let i=0; i< CIRCLE_NO; i++){
    let rowMultiplier = Math.floor(i/CIRCLES_PER_ROW);
    let columnMultiplier = (i%CIRCLES_PER_ROW);
    let x = ((CIRCLE_DIA + SPACE_BETWEEN_CIRCLE)*columnMultiplier) + CIRCLE_RADIUS;
    let y = ((CIRCLE_DIA + SPACE_BETWEEN_CIRCLE)*rowMultiplier) + CIRCLE_RADIUS;
    new Circle(i+2,MODULAR,x+SPACE_BETWEEN_CIRCLE,y+SPACE_BETWEEN_CIRCLE,CIRCLE_DIA);
  }
}