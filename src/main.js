/*

MALA PRÁCTICA FUNCIONAMIENTO PRINCIPAL

var point_a = {
  x: window.innerWidth/2,
  y: window.innerHeight/2
}

var point_b = {
  x: window.innerWidth/2,
  y: window.innerHeight/2
}

var friction = 0.1;//esta es para que se vea más smooth el movimiento del mouse, mas se tarda en llegar al puntero
var friction2 = 0.2;;

//Definición de clases en Javascript

class Point {
  constructor(args) {
    this.x = args.x;
    this.y = args.y;
    this.fill= args.fill;
  }
}

window.setup = () => {

  createCanvas(windowWidth, windowHeight);
  background('black');
  //poin_a = createVector(mouseX, mouseY); si se quiere usar el mouse como un vector y  para que incie desde el punto (0,0)

};

window.mouseMoved = () => {



}

window.draw = () => {

  background('black');

  //punto A
  point_a.x += (mouseX - point_a.x) * friction;
  point_a.y += (mouseY - point_a.y) * friction;
  //point_a.x = mouseX; Esto es para que el punto llegue al instante al mouse
  //point_a.y = mouseY;
  ellipse(point_a.x, point_a.y, 10, 10);
  text("  " + mouseX + "," + mouseY, mouseX, mouseY);
  fill (255);

  //punto B
  point_b.x += (point_a.x - point_b.x) * friction2;
  point_b.y += (point_a.y - point_b.y) * friction2;
  ellipse(point_b.x, point_b.y, 10, 10);
  fill (255);
  
};


window.windowResized = () => {

resizeCanvas(windowWidth, windowHeight);
background('black'); 

};*/

import Point from './js/components/point.js';

const TOTAL_POINTS = 10;
const PALETTE = ['#67191F', '#AB3130', '#FFF08F', '#51355A', '#2A0C4E'];
const bg = PALETTE[Math.floor(Math.random() * PALETTE.length)];
let points = [];


window.setup = (event) => {
  for (let i = 1; i <= TOTAL_POINTS; i++) {
    const randomColor = PALETTE[Math.floor(Math.random() * PALETTE.length)]
    const point = new Point({
      fill: randomColor,
      stroke: 0,
      size: 300 - (20 * i),
      friction: i * 0.1
    })


    points.push(point);//metodo de arrglo para que se itere y no sea un arreglo vacío
  };
  createCanvas(windowWidth, windowHeight);
};

window.draw = (event) => {
  background(bg);
  for (let i = 0; i < points.length; i++) {
    points[i].draw();
  };
};

window.windowResized = (event) => {
  resizeCanvas(windowWidth, windowHeight);
  background('bg');
};

