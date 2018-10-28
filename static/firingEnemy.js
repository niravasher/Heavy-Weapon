function FiringEnemy(I) {
    var randomVariable = (Math.random(-1, 1) * 4);
    I.active = true;
    I.radius = 30;
    I.pos = createVector(random(0, windowWidth - (I.radius*2)), I.radius/2);
    I.direction = createVector(randomVariable, randomVariable);
    I.vel = createVector(random(-1,1), random(0, 1)).mult(5);
    I.draw = function() {
        image(planeTwo, I.pos.x, I.pos.y);
        ellipse(I.pos.x, I.pos.y, I.radius);
    }

    I.update = function() {
        // I.active = I.active && I.inBounds();
        I.pos.x += I.vel.x * I.direction.x;
        I.pos.y += I.vel.y * I.direction.y;
    }
    return I;
}
