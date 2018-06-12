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
