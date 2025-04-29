import Line from './js/components/line.js';
let lines = [];
let _line; //guion bajo para que no se sobreescriba la funcion que tiene 

window.setup = (event) => {
    createCanvas(windowWidth, windowHeight);
};

window.mousePressed = (event) => {
    _line = new Line({
        stroke: color(random(255), random(255), random(255)),
        strokeWeight: random(1, 10)
    }
    );
    lines.push(_line);
    };

window.mouseDragged = (event) => {
    if(mouseIsPressed){
        const p=createVector(event.x, event.y);
        _line.addPoint(p);
    }
};

window.draw = (event) => {
    background(0);
    lines.forEach(line => {
        lines.forEach((Line) => line.draw());
    });
}
window.windowResized = (event) => {
    resizeCanvas(windowWidth, windowHeight);
};

/*class Crayon {
    constructor(args = {}) {
        this.strokeColor = args.strokeColor || '#FFFFFF';
        this.strokeWeight = args.strokeWeight || 5;
    }

    draw(x, y) {
        stroke(this.strokeColor);
        strokeWeight(this.strokeWeight);
        point(x, y);
    }
}

let crayon;

window.setup = (event) => {
    createCanvas(windowWidth, windowHeight);
    crayon = new Crayon({
        strokeColor: '#FFF',
        strokeWeight: 10
    });
};

window.draw = (event) => {
    background(bg);

    for (let i = 0; i < points.length; i++) {
        points[i].draw();
    }

    if (mouseIsPressed) {
        crayon.draw(mouseX, mouseY);
    }
};




console.log("") para ver que reacciona y que no lo hace*/