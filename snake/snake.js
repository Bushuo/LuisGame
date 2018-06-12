var rainbow = ["#FF0000","#FF7F00","#FFFF00","#00FF00","#0000FF","#4B0082","#9400D3"];

Snake = function() {
	this.x = 0;
	this.y = 0;

	this.xSpeed = 1;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];

    this.death = function() {
        for(var i = 0; i < this.tail.length; i++ ) {
            var pos = this.tail[i];
            var d = dist(this.x, this.y, pos.x, pos.y);
            if(d < 1) {
                this.total = 0;
                this.tail = [];
            }
        }
    }

	this.update = function() {
		if(!running) {
			return;
		}
		this.death();
        if(this.total === this.tail.length) {
            for(var i = 0; i < this.tail.length-1; i++) {
                this.tail[i] = this.tail[i+1];
            }
        }
        this.tail[this.total-1] = createVector(this.x, this.y);

		this.x += this.xSpeed * scl;
        this.y += this.ySpeed * scl;

        this.x = constrain(this.x, 0, width-scl);
        this.y = constrain(this.y, 0, height-scl);
    };

    this.eat = function(pos) {
        var d = dist(this.x, this.y, pos.x, pos.y);
        if(d < 1) {
            this.total++;
            return true;
        } else {
            return false;
        }
    };

	this.show = function() {
		fill(230,230,230);
        rect(this.x, this.y, scl, scl);
        for(var i = 0; i < this.tail.length; i++) {
            fill(rainbow[i%rainbow.length]);
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
	};

	this.dir = function(dirX, dirY) {
		this.xSpeed = dirX;
		this.ySpeed = dirY;
	}
}
