var tank;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    tank = new Tank();
}

function draw() {
    background(0);
    tank.display();
    tank.update();
}

function keyPressed() {
    if (key === 'a' || key === 'A') {
        tank.isMovingLeft = true;
    }
    else if (key === 'd' || key === 'D') {
        tank.isMovingRight = true;
    }
}

function keyReleased() {
    tank.isMovingLeft = false;
    tank.isMovingRight = false;
}
