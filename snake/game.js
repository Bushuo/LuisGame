/*
	// TODO: make the food more appealing
	water melon, fish, strawberry
	// TODO: snake shape is hexagon
	// TODO: snake tile is 1/n th smaller for each tile width
	length = n
*/

var scl = 20;
var snake;
var food;
//var obs;
var slider;
var obstacles = [];

function resetGame() {
	obstacles.forEach(function (obs) {
		obs.reset();
	});
	snake.reset();
}

function setup() {
	createCanvas(600,600);
	frameRate(10);
	snake = new Snake();
	food = new Food();
	obstacles.push(new Obstacle());
	food.pickLocation();
	resetGame();

	// UI
	var resetButton	= document.createElement("button");
	var cvs = document.querySelector(".p5Canvas");
	resetButton.innerHTML = "reset";
	resetButton.addEventListener("click", function() {
		// restart game
		obstacles = [];
	});

	var sliderdiv = document.createElement("div");
 	slider = document.createElement("input");
	slider.type = "range";
	slider.min = "1";
	slider.max = "10";
	slider.value = "10";
	slider.oninput = function() {
		frameRate(int(slider.value));
	}

	insertAfter(cvs, sliderdiv);
	sliderdiv.appendChild(slider);
	insertAfter(cvs, resetButton);
};

function draw() {
	background(240);

	// update game logic
	if(snake.eat(food.pos)){
		food.pickLocation();
		if(snake.total%5 === 0) {
			obstacles.push(new Obstacle());
		}
	}
	snake.update();
	obstacles.forEach(function (obs) {
		if(snake.total >= 5 && !obs.isSpawned && !obs.isFalling) {
			obs.reset();
			obs.fall();
		}
		obs.update();
	});

	// show gameobjects
	snake.show();
	food.show();
	obstacles.forEach(function(obs) {
		obs.show();
	});
};

// debugging area

function mousePressed() {
};

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
};
