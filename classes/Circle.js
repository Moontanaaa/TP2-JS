import Shape from './shape.js';

export default class Circle extends Shape {
  #x;
  #y;
  #radius;

  constructor(x, y, radius, color) {
    super(color);
    this.#x = x;
    this.#y = y;
    this.#radius = radius;
  }

  draw(context) {
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.#x, this.#y, this.#radius, 0, Math.PI * 2);
    context.fill();
  }
}
