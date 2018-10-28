var bullets = [];
var balls = [];
var score = 0;
var song;
var booleane = 1;
var ballBullet;
var gameOver;
var backGround;
var planets;
var moon;
var lives = 3;
var playingGame = true;
var aeroplane;
var ypos = 0;
var ypos2 = -1.5 * 767;

function Collision(enemy, bullet) {
    return bullet.x + bullet.width >= enemy.pos.x &&
    bullet.x <= enemy.pos.x + enemy.radius*2 &&
    bullet.y + bullet.height >= enemy.pos.y &&
    bullet.y <= enemy.pos.y + enemy.radius*2;
}

function preload() {
    song = loadSound("/bullets.mp3");
    ballBullet = loadSound("/collision.mp3");
    gameOver = loadSound("/gameOver.mp3");
    backGround = loadImage('/space3.png');
    bulletShoot = loadImage('/laser-blast-png.png');
    planets = loadImage('/PLANET.svg');
    moon = loadImage('/moon.svg');
    aeroplane = loadImage('/plane3.svg');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    setInterval(function() {
        bullets.push(Bullet({}));
        if (booleane == 1)
            song.play();
        else {
            song.stop();
        }
    }, 150);
}

function draw() {
    // frameRate(30);
    if (playingGame) {
        background(0);
        image(backGround, 0, ypos, windowWidth, 1.5 * windowHeight);
        image(backGround, 0, ypos2, windowWidth, 1.5 * windowHeight);
        if (ypos >= windowHeight)
            ypos = -(1.5 * windowHeight);
        else
            ypos += 0.3;
        if (ypos2 > windowHeight)
            ypos2 = -(1.5 * windowHeight);
        else
            ypos2 += 0.3;
        textSize(50);
        fill(255);
        textFont('Georgia');
        text("score: " + score, 20, 70);
        text("lives: " + lives, 20, 130);

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

        if (score >= 30 && score < 50) {
            if (Math.random() < 0.02) {
                balls.push(Ball({}));
                balls.push(Moon({}));
            }
        }

        else if (score >= 50 && score < 100) {
            if (Math.random() < 0.04) {
                balls.push(Ball({}));
                balls.push(Moon({}));
            }
        }

        else if (score >= 100 && score < 200) {
            if (Math.random() < 0.05) {
                balls.push(Ball({}));
                balls.push(Moon({}));
            }
        }

        else if (score >= 200 && score < 300) {
            if (Math.random() < 0.075) {
                balls.push(Ball({}));
                balls.push(Moon({}));
            }
        }

        else if (score >= 300) {
            if (Math.random() < 0.15) {
                balls.push(Ball({}));
                balls.push(Moon({}));
            }
        }

        else if (score >= 10) {
            if (Math.random() < 0.03) {
                balls.push(Ball({}));
                balls.push(Moon({}));
            }
        }

        else {
            if (Math.random() < 0.01) {
                balls.push(Ball({}));
                balls.push(Moon({}));
            }
        }

        balls = balls.filter(function(ball) {
            return ball.active;
        });

        balls.forEach(function(ball) {
            ball.update();
            ball.draw();
        });

        bullets.forEach(function(bullet) {
            balls.forEach(function(ball) {
                if (Collision(ball, bullet)) {
                    bullet.active = false;
                    ball.active = false;
                    score++;
                    booleane = 1;
                    ballBullet.play();
                }
            });
        });

        balls.forEach(function(ball) {
            if (Collision(ball, player)) {
                ball.active = false;
                fill(255);
                textSize(80);
                if (lives == 1) {
                    text("GAME OVER...", windowWidth/2 - 250, windowHeight/2);
                    textSize(50);
                    text("lives: 0" + lives, 20, 130);
                    booleane = 0;
                    gameOver.play();
                    noLoop();
                    playingGame = false;
                }
                else {
                    lives--;
                    song.stop();
                    textSize(50);
                    text("lives : " + lives, windowWidth/2 - 50, windowHeight/2);
                    text("click to start again", windowWidth/2 - 175, windowHeight/2 + 50);
                    playingGame = false;
                }
                textSize(50);
            }
        });
    }
}

function mousePressed() {
    playingGame = true;
}
