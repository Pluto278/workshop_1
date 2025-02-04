# workshop_1
link:https://pluto278.github.io/workshop_1

---

# tasks

- Create a p5.js sketch using 2D primitive shapes, loops, and random numbers.
- Write custom functions and call them in the code.
- Generate a variety of shapes (circles, squares, and triangles) with random positions, sizes, and colors.
- Display the shapes on the canvas.

---

# notes

## 1. Using 2D Primitive Shapes

The sketch uses three types of 2D primitive shapes:
- **Circles**: Drawn using the `ellipse()` function.
- **Squares**: Drawn using the `rect()` function.
- **Triangles**: Drawn using the `triangle()` function.

## 2. Randomness

Randomness is used to determine the position, size, and type of each shape. The `random()` function is used to generate random values.

```javascript
let x = random(width);
let y = random(height);
let size = random(20, 60);
let type = int(random(3));
```

## 3. Custom Functions
A custom function generateShapes() is used to create and store the shapes in an array. This function is called in the setup() function to initialize the shapes.
```
function generateShapes() {
  for (let i = 0; i < 15; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(20, 60);
    let type = int(random(3));
    shapes.push(new CustomShape(x, y, size, type));
  }
}
```

## 4. CustomShape Class
The CustomShape class is used to manage the properties and display of each shape. The display() method is used to draw the shape based on its type.
```
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
```
