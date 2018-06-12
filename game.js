var scl = 20;
var snake;
var food;

function setup() {
	createCanvas(600,600);
	frameRate(10);
	snake = new Snake();
	pickLocation();
};

function draw() {
	background(51);
	
	if(snake.eat(food)){
		pickLocation();
	}
	snake.death();
	snake.update();
	snake.show();
	fill(255, 0, 100);
	rect(food.x, food.y, scl, scl);
};

function pickLocation() {
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	food = createVector(floor(random(cols)), floor(random(rows)));
	food.mult(scl);
};

function keyPressed() {
	if(keyCode === UP_ARROW && snake.xSpeed !== 0 && snake.ySpeed !== 1) {
		snake.dir(0,-1);
	} else if(keyCode === DOWN_ARROW && (snake.xSpeed !== 0 && snake.ySpeed !== -1)) {
		snake.dir(0,1);
	} else if(keyCode === RIGHT_ARROW && (snake.xSpeed !== -1 && snake.ySpeed !== 0)) {
		snake.dir(1,0);
	} else if(keyCode === LEFT_ARROW && (snake.xSpeed !== 1 && snake.ySpeed !== 0)) {
		snake.dir(-1,0);
	}
};

