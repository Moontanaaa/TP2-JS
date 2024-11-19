// constructeur couleur

export default class Shape {
    #color;
  
    constructor(color = 'white') {
      this.#color = color;
    }
  
    get color() {
      return this.#color;
    }
  
    set color(newColor) {
      this.#color = newColor;
    }
  }
  