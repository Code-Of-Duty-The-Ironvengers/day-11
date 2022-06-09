// rect(x value, y value, width value, height value)
let x = 0;
let y = 0;

const ARROW_RIGHT = 39;
const ARROW_DOWN = 40;
const ARROW_LEFT = 37;
const ARROW_UP = 38;

function setup() {
  console.log("In setup");
  createCanvas(500, 500);
}

function draw() {
  //   console.log("In draw");
  background("orange");
  rect(x, y, 50, 50);

  if (keyIsDown(ARROW_RIGHT)) {
    x += 5;
    // x += 5 === x = x + 5
  } else if (keyIsDown(ARROW_DOWN)) {
    y += 5;
    if (y > 450) {
      y = 450;
    }
  }
}
console.log("Out in the open");

function keyPressed() {
  if (keyCode === ARROW_LEFT) {
    x -= 50;
  } else if (keyCode === ARROW_DOWN) {
    // y += 50;
    // // tiru ru rur u, im a happy square i went down
    // // if the cavas is 500 per 500, whenever it exceeds the 500 it should return to 0
    // if (y >= 450) {
    //   y = 0;
    // }
  } else if (keyCode === ARROW_UP) {
    y -= 50;
    //   } else if (keyCode === ARROW_RIGHT) {
    //     x += 50;
  }
  //   console.log(keyCode);
  //   if (keyCode === 32) {
  //     y += 50;
  //   }
}
