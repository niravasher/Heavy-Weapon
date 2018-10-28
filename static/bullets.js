function Bullet(I) {
    I.active = true;
    I.x = player.x + player.width/2;
    I.y = player.y - 20;
    I.yvelocity = 8;
    I.width = 3;
    I.height = 25;

    I.inBounds = function() {
        return ((I.y >= 0) && I.y <= (windowHeight - I.height));
    }

    I.update = function() {
        I.active = I.active && I.inBounds();
        I.y -= I.yvelocity;
    }

    I.draw = function() {
        image(bulletShoot, I.x-12, I.y);
        // rect(I.x, I.y, I.width, I.height);
    }
    return I;
}
