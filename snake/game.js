/*
	// TODO: button for resetting
	// TODO: slider for start frameRate
	// TODO: each 5 snake length new Obstacle
	// TODO: make the food more appealing
	water melon, fish, strawberry
	// TODO: snake shape is hexagon
	// TODO: snake tile is 1/n th smaller for each tile width
	length = n
*/

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
	background(240);
	// update game logic
	if(snake.eat(food.pos)){
		food.pickLocation();
	}
	snake.update();
	if(snake.total >= 5 && !obs.isSpawned && !obs.isFalling) {
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
}
