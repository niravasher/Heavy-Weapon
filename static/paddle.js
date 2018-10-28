var player = {
    x: 680,
    y: 650,
    width: 30,
    height: 40,
    draw: function(){
        // rect(this.x, this.y, this.width, this.height);
        image(aeroplane, this.x - 120, this.y - 50);
        // rect(this.x, this.y, this.width, this.height);
    }
};
