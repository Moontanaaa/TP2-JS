import Shape from './shape.js';

export default class Rectangle extends Shape {
  #x;
  #y;
  #width;
  #height;

  constructor(x, y, width, height, color) {
    super(color);
    this.#x = x;
    this.#y = y;
    this.#width = width;
    this.#height = height;
  }

  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(this.#x, this.#y, this.#width, this.#height);
  }
}
