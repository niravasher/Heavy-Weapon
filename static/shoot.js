function Shoot(I) {
    I.active = true;
    I.x = 325;
    I.y = 100;
    I.yvelocity = -4;
    I.width = 5;
    I.height = 10;

    I.inBounds = function() {
        return ((I.y >= 0) && I.y <= (windowHeight - I.height));
    }

    I.update = function() {
        I.active = I.active && I.inBounds();
        I.y -= I.yvelocity;
    }

    I.draw = function() {
        // image(bulletShoot, I.x-12, I.y);
        rect(I.x, I.y, I.width, I.height);
    }
    return I;
}

function ShootTwo(I) {
    I.active = true;
    I.x = 500;
    I.y = 300;
    I.yvelocity = -4;
    I.width = 5;
    I.height = 10;

    I.inBounds = function() {
        return ((I.y >= 0) && I.y <= (windowHeight - I.height));
    }

    I.update = function() {
        I.active = I.active && I.inBounds();
        I.y -= I.yvelocity;
    }

    I.draw = function() {
        // image(bulletShoot, I.x-12, I.y);
        rect(I.x, I.y, I.width, I.height);
    }
    return I;
}
