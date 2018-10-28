function powerEnemy(I) {
    var randomVariable = (Math.random(-1, 1) * 4);
    I.active = true;
    I.width = 50;
    I.height = 40;
    I.pos = createVector(300, 100);
    I.direction = createVector(randomVariable, randomVariable);
    I.vel = createVector(0, random(0, 1)).mult(1);
    I.draw = function() {
        // image(moon, I.pos.x, I.pos.y);
        rect(I.pos.x, I.pos.y, I.width, I.height);
    }

    I.update = function() {
        // I.active = I.active && I.inBounds();
        I.pos.y += I.vel.y * I.direction.y;
    }
    return I;
}

function powerEnemyTwo(I) {
    var randomVariable = (Math.random(-1, 1) * 4);
    I.active = true;
    I.width = 50;
    I.height = 40;
    I.pos = createVector(500, 200);
    I.direction = createVector(randomVariable, randomVariable);
    I.vel = createVector(0, random(0, 1)).mult(1);
    I.draw = function() {
        // image(moon, I.pos.x, I.pos.y);
        rect(I.pos.x, I.pos.y, I.width, I.height);
    }

    I.update = function() {
        // I.active = I.active && I.inBounds();
        I.pos.y += I.vel.y * I.direction.y;
    }
    return I;
}
