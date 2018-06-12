Tank = function() {
    this.pos = createVector();
    this.dir = createVector();
    this.speed = 0;
    this.img;
    this.color;

    this.preload = function(path) {
        this.img = loadImage(path);
    };

    this.update = function() {
        this.pos.x += this.dir.x * this.speed * tileSize;
        this.pos.y += this.dir.y * this.speed * tileSize;
        this.speed = 0;
    };

    this.show = function() {
        //image(this.img, this.pos.x, this.pos.y);
        fill(this.color);
        rect(this.pos.x, this.pos.y, tileSize, tileSize);
    };

    this.dir = function(posx, posy) {
        this.dir.x = posx;
        this.dir.y = posy;
    }
}
