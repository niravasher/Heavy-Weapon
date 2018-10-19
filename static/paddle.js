var player = {
    x: 680,
    y: 600,
    width: 100,
    height: 30,
    draw: function(){
        rect(this.x+this.width/2-10, this.y-20, 20, 20);
        rect(this.x, this.y, this.width, this.height);
    }
};
