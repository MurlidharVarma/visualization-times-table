let CIRCLE_NO = 1;
let CIRCLES_PER_ROW = 1;
let SPACE_BETWEEN_CIRCLE = 30;
let MODULAR = 200;

let CIRCLE_DIA;
let CIRCLE_RADIUS;

let ANIME_INIT = 0;

let CIRCLE;
let SPOKED_ANIMATION = true;
let FRAME_RATE = 60;

function configChange(){
  MODULAR = document.querySelector("#modularNumber").value;
  let spokeAnimation = document.querySelector("#spokeAnimation").checked;
  CIRCLE.setModular(MODULAR,false);
  SPOKED_ANIMATION = spokeAnimation;
  if(spokeAnimation){
    FRAME_RATE=60;
  }else{
    FRAME_RATE=10;
  }
  ANIME_INIT=0
  CIRCLE.clearSpokes();
  clear();
}

function setup(){
  let minSize = Math.min(windowWidth,windowHeight);
  CIRCLE_DIA = minSize - (2*SPACE_BETWEEN_CIRCLE);
  CIRCLE_RADIUS = CIRCLE_DIA/2;
  
  createCanvas(minSize, minSize);
  angleMode(DEGREES)

  CIRCLE = new Circle(ANIME_INIT+2,MODULAR,CIRCLE_RADIUS+SPACE_BETWEEN_CIRCLE,CIRCLE_RADIUS+SPACE_BETWEEN_CIRCLE,CIRCLE_DIA,false);
  CIRCLE.clearSpokes();
  frameRate(FRAME_RATE);
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
  clear();
  CIRCLE.setTimesNumber(ANIME_INIT);
}

function drawSpokeAnimation(){
  CIRCLE.renderSpokes(ANIME_INIT);
  if(ANIME_INIT%MODULAR ==0){
    ANIME_INIT=0;
  }
}