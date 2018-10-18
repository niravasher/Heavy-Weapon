function Tank()
{
    this.w = 160;
    this.h = 20;

    this.smallw = 5;
    this.smallh = 20;

    this.isMovingLeft = false;
    this.isMovingRight = false;

    this.pos = createVector(width/2-this.w/2, height-40);
    this.display = function() {
        rect(this.pos.x, this.pos.y, this.w, this.h);
        rect(this.pos.x + this.w/2 - this.smallw/2, this.pos.y-20, this.smallw, this.smallh);
    }
    this.move = function(step) {
        this.pos.x += step;
        if (this.pos.x < 0) this.pos.x = 0;
        else if (this.pos.x > windowWidth - this.w) this.pos.x = windowWidth - this.w;
    }

    this.update = function() {
        if (this.isMovingLeft) {
            this.move(-10);
        }
        else if (this.isMovingRight) {
            this.move(10);
        }
    }
}
