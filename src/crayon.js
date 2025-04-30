import PreLoader from './js/components/preloader.js';
import Line from './js/components/line.js';

const preloader = new PreLoader();

let lines = [];
let _line;
let undoneLines = [];
let brushColor = '#ff0000';
let brushOpacity = 255;
let brushSize = 1;

const redoBtn = document.getElementById('redo-btn');
const eraseBtn = document.getElementById('erase-btn');
const undoBtn = document.getElementById('undo-btn');
const brushColorInput = document.getElementById('brush-color');
const brushSizeInput = document.getElementById('brush-size');
const brushOpacityInput = document.getElementById('brush-opacity');



brushColorInput.addEventListener('input', (event) => {
    brushColor = event.target.value;
    console.log("Brush color updated:", brushColor);
});

brushSizeInput.addEventListener('input', (event) => {
    brushSize = parseFloat(event.target.value);
    console.log("Brush size updated:", brushSize);
});

brushOpacityInput.addEventListener('input', (event) => {
    brushOpacity = parseInt(event.target.value);
    console.log("Brush opacity updated:", brushOpacity);
});

redoBtn.addEventListener('click', () => {
    if (undoneLines.length > 0) {
        const redone = undoneLines.pop();
        lines.push(redone);
        console.log("Redo: lines =", lines.length, " | undoneLines =", undoneLines.length);
    }
});

eraseBtn.addEventListener('click', () => {
    lines = [];
});

undoBtn.addEventListener('click', () => {
    if (lines.length > 0) {
        const undone = lines.pop();
        undoneLines.push(undone);
        console.log("Undo: lines =", lines.length, " | undoneLines =", undoneLines.length);
    }
});

preloader.show();

window.setup = () => {
    createCanvas(windowWidth, windowHeight);
    preloader.hide();
};

window.mousePressed = (event) => {
    if (event.target.tagName === 'CANVAS') {
        _line = new Line({
            stroke: color(
                red(brushColor),
                green(brushColor),
                blue(brushColor),
                brushOpacity),
                strokeWeight: brushSize
        });
        lines.push(_line);
        console.log("Line added. Total lines: ", lines.length);
    }
};

window.mouseDragged = (event) => {
    if (event.target.tagName === 'CANVAS' && mouseIsPressed) {
        const p = createVector(event.x, event.y);
        _line.points.push(p);
    }
};

window.draw = () => {
    background(255);
    lines.forEach(line => {
        line.draw();
    });
};

window.windowResized = () => {
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