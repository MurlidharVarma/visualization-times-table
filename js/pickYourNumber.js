let CIRCLE_NO = 1;
let CIRCLES_PER_ROW = 1;
let CIRCLE_DIA;
let CIRCLE_RADIUS;
let PADDING =30;
let ANIME_INIT = 0;

let CIRCLE;
let SPOKED_ANIMATION = false;
let FRAME_RATE = 60;
let MODULAR = 200;
TIMES_NUMBER = 11;
let CANVAS;

function configChange(){
  MODULAR = document.querySelector("#modularNumber").value;
  TIMES_NUMBER = document.querySelector("#myTimesNumber").value;
  SPOKED_ANIMATION = document.querySelector("#spokeAnimation").checked;

  CIRCLE.setModular(MODULAR,false);
  CIRCLE.setTimesNumber(TIMES_NUMBER,false);

  ANIME_INIT=0
  FRAME_RATE=60;

  CIRCLE.clearSpokes();
  clear();
  redraw();
}

function setup(){
  let minSize = Math.min(windowWidth,windowHeight);
  CIRCLE_DIA = minSize - (2*PADDING);
  CIRCLE_RADIUS = CIRCLE_DIA/2;
  
  CANVAS = createCanvas(minSize,minSize);
  angleMode(DEGREES)

  CIRCLE = new Circle(TIMES_NUMBER,MODULAR,CIRCLE_RADIUS+PADDING,CIRCLE_RADIUS+PADDING,CIRCLE_DIA,false);
  // noLoop();
}

function draw() {
  frameRate(FRAME_RATE);
  ANIME_INIT++;
  if(SPOKED_ANIMATION){
    drawSpokeAnimation();
  }else{
    drawAnimation();
  }
}

function drawAnimation(){
  CIRCLE.setTimesNumber(TIMES_NUMBER);
  FRAME_RATE=0;
}

function drawSpokeAnimation(){
  CIRCLE.renderSpokes(ANIME_INIT, false);
  if(ANIME_INIT%MODULAR == 0){
    FRAME_RATE=0;
    // noLoop();
  }
}

function save(){
  saveCanvas(CANVAS,`${TIMES_NUMBER}-${MODULAR}-MurlidharVarma`, 'png');
}