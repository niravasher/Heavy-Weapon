function Moon(I) {
    var randomVariable = (Math.random(-1, 1) * 4);
    I.active = true;
    I.radius = 30;
    I.pos = createVector(random(0, windowWidth - (I.radius*2)), I.radius/2);
    I.direction = createVector(randomVariable, randomVariable);
    I.vel = createVector(random(-1,1), random(0, 1)).mult(5);
    I.draw = function() {
        image(moon, I.pos.x, I.pos.y);
        // ellipse(I.pos.x + 95, I.pos.y + 85, I.radius);
    }

    I.update = function() {
        // I.active = I.active && I.inBounds();
        I.pos.x += I.vel.x * I.direction.x;
        I.pos.y += I.vel.y * I.direction.y;
    }

    I.checkEdges = function() {
        if (I.pos.y <= I.radius && I.direction.y < 0)
            I.direction.y *= -1;
        else if (I.pos.x <= I.radius && I.direction.x < 0)
            I.direction.x *= -1;
        else if (I.pos.x >= (windowWidth - I.radius) && I.direction.x > 0)
            I.direction.x *= -1;
    }
    return I;
}
