Obstacle = function() {
    this.pos = createVector();
    this.lifetime = 50;
    this.posShadow = createVector();
    this.shadowSize = 0;
    this.isSpawned = false;
    this.isFalling = false;

    this.show = function () {
        fill(70)
        noStroke();
        rect(this.posShadow.x, this.posShadow.y, this.shadowSize, this.shadowSize);
        stroke(0);
        fill(200,200,200);
        rect(this.pos.x, this.pos.y, scl*2, scl*2);
    };

    this.update = function () {
        let d = dist(this.pos.x, this.pos.y, snake.x, snake.y);
        if (d < 1) {
            snake.reset();
            this.reset();
        }
        if (this.shadowSize < scl*2 && this.isFalling) {
            this.shadowSize++;
        }
        else if (this.shadowSize === scl*2 && !this.isSpawned) {
            this.activate();
        }
        if (this.lifetime > 0 && this.isSpawned && this.isFalling) {
            this.lifetime--;
        } else if (this.lifetime === 0) {
            this.reset();
        }
    };

    this.fall = function () {
        this.isFalling = true;
        let cols = floor(width/scl);
        let rows = floor(height/scl);
        this.posShadow = createVector(floor(random(2,cols-2)),floor(random(2,rows-2)));
        this.posShadow.mult(scl);
    };

    this.activate = function () {
        this.pos = this.posShadow;
        this.isSpawned = true;
    };

    this.reset = function () {
        this.pos.x = -100;
        this.pos.y = -100;
        this.lifetime = 50;
        this.spawnTime = 15;
        this.posShadow.x = -100;
        this.posShadow.y = -100;
        this.shadowSize = 0;

        this.isSpawned = false;
        this.isFalling = false;
    }
}
