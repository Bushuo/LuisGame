var scl = 20;
var snake;
var food;
var obs;

function setup() {
	createCanvas(600,600);
	frameRate(10);
	snake = new Snake();
	food = new Food();
	food.pickLocation();
	obs = new Obstacle();
	obs.reset();
};

function draw() {
	background(125);

	// update gamelogic
	if(snake.eat(food.pos)){
		food.pickLocation();
	}
	snake.update();
	if(snake.total >= 10 && !obs.isSpawned && !obs.isFalling) {
		obs.reset();
		obs.fall();
	}
	obs.update();

	// show gameobjects
	snake.show();
	food.show();
	obs.show();
};

// debugging area

var spawnObsManually = function () {
	obs.reset();
	obs.fall();
};

function mousePressed() {
	spawnObsManually();
}
