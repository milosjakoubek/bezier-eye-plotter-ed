let contours = [];
let canvasWidth = 700;
let canvasHeight = 800;
let r = 175;
let margin = 200;
let node = 100;
let off = 100;
let border = 20

function setup() {
  createCanvas(canvasWidth, canvasHeight, SVG);
  for (let i = 0; i < node; i++) {
    let x0 = random(border, canvasWidth - border); //
    let y0 = canvasHeight - border; //
    let x1 = canvasWidth;
    let y1 = canvasHeight / 2;
    let x2 = canvasWidth / 2;
    let y2 = canvasHeight  - off;
    let x3 = canvasWidth /  4; //
    let y3 = canvasHeight / 2; //
    let c = new Contour(x0, y0, x1, y1, x2, y2, x3, y3);
    contours.push(c);
  }
  for (let i = 0; i < node; i++) {
    let x0 = random(border, canvasWidth - border); //
    let y0 = border; //
    let x1 = 0;
    let y1 = canvasHeight / 2;
    let x2 = canvasWidth / 2;
    let y2 = off;
    let x3 = canvasWidth - (canvasWidth /  4); //
    let y3 = canvasHeight / 2; //
    let c = new Contour(x0, y0, x1, y1, x2, y2, x3, y3);
    contours.push(c);
  }
}


function draw() {
  background(255);
  stroke(0);
  strokeWeight(2);
  noFill();
  ellipseMode(CENTER);
  ellipse(canvasWidth / 2, canvasHeight / 2, r, r);
  rect(border, border, canvasWidth - (border * 2), canvasHeight - (border * 2));
  for (let i = 0; i < contours.length; i++) {
    contours[i].show();
  }
  if (keyCode === LEFT_ARROW){
    save("mySVG.svg");
    print ("saved svg");
    noLoop();
  }
}

class Contour {
  constructor(x0, y0, x1, y1, x2, y2, x3, y3) {
    this.x0 = x0;
    this.y0 = y0;
    this.x1 = x1; 
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
  }
  show() {
    strokeWeight(0.5);
    stroke(0);
    noFill();
    bezier(this.x0, this.y0, this.x1, this.y1, this.x2, this.y2, this.x3, this.y3)
  }
}