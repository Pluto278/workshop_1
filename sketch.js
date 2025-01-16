let counter = 0;
let countInterval;

function setup() {
  createCanvas(400, 400);
  noStroke();
  countInterval = setInterval(drawRandomShape, 1000);
}

function draw() {
  // Create a gradient-like background
  background(map(counter % 255, 0, 255, 50, 200), 220, 240, 25);
}

function drawRandomShape() {
  let shapeType = floor(random(4)); // 0: Rectangle, 1: Ellipse, 2: Triangle, 3: Line
  let x = random(width);
  let y = random(height);
  let size = random(20, 50);
  fill(random(255), random(255), random(255), 150);

  switch (shapeType) {
    case 0:
      rect(x, y, size, size);
      break;
    case 1:
      ellipse(x, y, size, size);
      break;
    case 2:
      triangle(x, y, x + size / 2, y - size, x + size, y);
      break;
    case 3:
      stroke(random(255), random(255), random(255), 150);
      line(x, y, x + size, y + size);
      noStroke();
      break;
  }

  counter++;
  if (counter > 10) {
    clearInterval(countInterval);
    counter = 0;
    setTimeout(() => {
      countInterval = setInterval(drawRandomShape, 1000);
    }, 3000); // Pause for 3 seconds before resuming
  }
}

function mousePressed() {
  // Toggle the drawing process on and off with mouse click
  if (countInterval) {
    clearInterval(countInterval);
    countInterval = null;
  } else {
    countInterval = setInterval(drawRandomShape, 1000);
  }
}
