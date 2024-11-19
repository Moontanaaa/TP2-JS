import Rectangle from '../classes/rectangle.js';
import Circle from '../classes/circle.js';

// const
const canvas = document.getElementById('drawingCanvas');
const context = canvas.getContext('2d');

// rectangles
const rectangle1 = new Rectangle(60, 60, 110, 60, 'darkred');
const rectangle2 = new Rectangle(200, 100, 150, 75, 'lightblue');
const rectangle3 = new Rectangle(400, 300, 120, 60, 'lightgreen');

rectangle1.draw(context);
rectangle2.draw(context);
rectangle3.draw(context);

// cercles
const circle1 = new Circle(100, 300, 40, 'purple');
const circle2 = new Circle(300, 200, 50, 'darkgrey');
const circle3 = new Circle(500, 150, 50, 'blue');

circle1.draw(context);
circle2.draw(context);
circle3.draw(context);
