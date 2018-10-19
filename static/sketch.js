var bullets = [];
var balls = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);
    player.draw();

    if(keyIsDown(LEFT_ARROW)) {
        if(player.x - 10 >= 0) {
            player.x -= 10;
        }
        else {
            player.x = 0;
        }
    }
    if(keyIsDown(RIGHT_ARROW)) {
        if(player.x + 10 < windowWidth - player.width) {
            player.x += 10;
        }
        else {
            player.x = windowWidth - player.width;
        }
    }

    if(keyIsDown(32)) {
        bullets.push(Bullet({}));
    }

    bullets.forEach(function(bullet) {
        bullet.update();
        bullet.draw();
    });

    bullets = bullets.filter(function(bullet) {
        return bullet.active;
    });

    if (Math.random() < 0.01) {
        balls.push(Ball({}));
    }

    balls.forEach(function(ball) {
        ball.update();
        ball.draw();
        ball.checkEdges();
    });

    balls.forEach(function(ball) {
        return ball.active;
    });
}
