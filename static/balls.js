function Ball(I) {
    I.active = true;
    I.radius = 20;
    I.pos = createVector(random(0, windowWidth - (I.radius*2)), I.radius/2);
    I.direction = createVector(1,1);
    I.vel = createVector(1,1).mult(8);
    I.draw = function() {
        ellipse(I.pos.x, I.pos.y, I.radius*2, I.radius*2);
    }

    I.update = function() {
        // I.active = I.active && I.inBounds();
        I.pos.x += I.vel.x * I.direction.x;
        I.pos.y += I.vel.y * I.direction.y;
    }

    I.checkEdges = function() {
        if (I.pos.y < I.radius && I.direction.y < 0)
            I.direction.y *= -1;
        else if (I.pos.y > (windowHeight - I.radius) && I.direction.y > 0)
            I.direction.y *= -1;
        if (I.pos.x < I.radius && I.direction.x < 0)
            I.direction.x *= -1;
        else if (I.pos.x > (windowWidth - I.radius) && I.direction.x > 0)
            I.direction.x *= -1;
    }

    I.meets = function(player) {
        if (I.pos.y < player.y && I.pos.y > (player.y - I.radius) && I.pos.x > player.x - I.radius && I.pos.x < (player.x + player.width + I.radius))
            return true;
        else return false;
    }

    return I;
}
