var bullets = [];
var balls = [];
var score = 0;
var song;
var boolean = 1;
var ballBullet;
var gameOver;

function Collision(enemy, bullet) {
    return ((bullet.x + bullet.width >= enemy.pos.x) && (bullet.x <= enemy.pos.x + enemy.radius*2) && (bullet.y + bullet.height >= enemy.pos.y) && (bullet.y <= enemy.pos.y + enemy.radius*2));
}

function preload() {
    song = loadSound("/bullets.mp3");
    ballBullet = loadSound("/collision.mp3");
    gameOver = loadSound("/gameOver.mp3");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    noCursor();
    setInterval(function() {
        bullets.push(Bullet({}));
        if (boolean == 1)
            song.play();
        else {
            song.stop();
        }
    }, 100);
}

function draw() {
    background(0);
    textSize(50);
    fill(255);
    text("score: " + score, 20, 70);

    if(keyIsDown(LEFT_ARROW)) {
        if(player.x - 10 >= 0) {
            player.x -= 10;
        }
        else {
            player.x = 0;
        }
    }
    if(keyIsDown(RIGHT_ARROW)) {
        if(player.x + 10 <= windowWidth - player.width) {
            player.x += 10;
        }
        else {
            player.x = windowWidth - player.width;
        }
    }

    player.draw();

    bullets = bullets.filter(function(bullet) {
        return bullet.active;
    });

    bullets.forEach(function(bullet) {
        bullet.update();
        bullet.draw();
    });

    if (score >= 30) {
        if (Math.random() < 0.06) {
            balls.push(Ball({}));
        }
    }

    else if (score >= 50) {
        if (Math.random() < 0.08) {
            balls.push(Ball({}));
        }
    }

    else if (score >= 100) {
        if (Math.random() < 0.1) {
            balls.push(Ball({}));
        }
    }

    else if (score >= 200) {
        if (Math.random() < 0.15) {
            balls.push(Ball({}));
        }
    }

    else {
        if (Math.random() < 0.02) {
            balls.push(Ball({}));
        }
    }

    balls = balls.filter(function(ball) {
        return ball.active;
    });

    balls.forEach(function(ball) {
        ball.update();
        ball.draw();
        ball.checkEdges();
    });

    bullets.forEach(function(bullet) {
        balls.forEach(function(ball) {
            if (Collision(ball, bullet)) {
                console.log('nirav');
                bullet.active = false;
                ball.active = false;
                score++;
                console.log(score);
                boolean = 1;
                ballBullet.play();
            }
        });
    });

    balls.forEach(function(ball) {
        if (Collision(ball, player)) {
            ball.active = false;
            noLoop();
            console.log('Game Over');
            fill(255);
            textSize(80);
            text("GAME OVER...", windowWidth/2 - 250, windowHeight/2);
            boolean = 0;
            textSize(50);
            gameOver.play();
        }
    });
}
