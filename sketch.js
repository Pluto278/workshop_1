let shapes = [];

function setup() {
  createCanvas(600, 400);
  background(220);
  generateShapes();
}

function draw() {
  background(220);
  for (let shape of shapes) {
    shape.display();
  }
}

function generateShapes() {
  for (let i = 0; i < 15; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(20, 60);
    let type = int(random(3));
    shapes.push(new CustomShape(x, y, size, type));
  }
}

class CustomShape {
  constructor(x, y, size, type) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.type = type;
    this.color = color(random(255), random(255), random(255));
  }

  display() {
    fill(this.color);
    noStroke();
    if (this.type === 0) {
      ellipse(this.x, this.y, this.size);
    } else if (this.type === 1) {
      rect(this.x, this.y, this.size, this.size);
    } else {
      triangle(this.x, this.y - this.size / 2, this.x - this.size / 2, this.y + this.size / 2, this.x + this.size / 2, this.y + this.size / 2);
    }
  }
}
