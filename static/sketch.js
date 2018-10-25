var bullets = [];
var balls = [];
var score = 0;
var song;
var booleane = 1;
var ballBullet;
var gameOver;
var backGround;
var bulletShoot;
var planets;
var moon;
var lives = 3;
var playingGame = true;
var aeroplane;

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
    backGround = loadImage('/backgroundOasis.svg');
    bulletShoot = loadImage('/BULLET.svg');
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
    }, 100);
}

function draw() {
    if (playingGame) {
        background(0);
        image(backGround, 0, 0, windowWidth, windowHeight);
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

        if (score >= 30) {
            if (Math.random() < 0.03) {
                balls.push(Ball({}));
                balls.push(Moon({}));
            }
        }

        else if (score >= 50) {
            if (Math.random() < 0.04) {
                balls.push(Ball({}));
                balls.push(Moon({}));
            }
        }

        else if (score >= 100) {
            if (Math.random() < 0.05) {
                balls.push(Ball({}));
                balls.push(Moon({}));
            }
        }

        else if (score >= 200) {
            if (Math.random() < 0.075) {
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
            ball.checkEdges();
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
