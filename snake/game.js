var scl = 20;
var snake;
var food;

function setup() {
	createCanvas(600,600);
	frameRate(10);
	snake = new Snake();
	food = new Food();
	food.pickLocation();
};

function draw() {
	background(51);
	if(snake.eat(food.pos)){
		food.pickLocation();
	}
	snake.update();
	snake.show();
	fill(255, 0, 100);
	rect(food.pos.x, food.pos.y, scl, scl);
};
