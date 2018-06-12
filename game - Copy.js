var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;

document.body.appendChild(canvas); 

// BACKGROUND ////////////////////////////

var bgReady = false;
var bgImg = new Image();
bgImg.onload = function () {
	bgReady = true;
};

bgImg.src = "Art/background.png";

// GAME OBJECTS ////////////////////////////

var timeLeft = 10.0;

var playerReady = false;
var playerImg = new Image();
playerImg.onload = function () {
	playerReady = true;
};
playerImg.src = "Art/player.png";

var enemyReady = false;
var enemyImg = new Image();
enemyImg.onload = function () {
	enemyReady = true;
};
enemyImg.src = "Art/enemy.png";

var bulletReady = false;
var bulletImg = new Image();
bulletImg.onload = function() {
	bulletReady = true;
};
bulletImg.src = "Art/bullet.png";

var player = {
	speed : 256, // px/s
	x: 0,
	y: 0,
	direction: 0
};

var enemy = {
	x: 0,
	y: 0
};

var bullet = {
	owner: null,
	speed: 500, // px/s
	x:-10,
	y:-10,
	direction: 0
};

var bullets = {};
var enemiesCaught = 0;

var isGamePaused = false;

// HANDLE KEYDOWN EVENTS ////////////////////////////

var keysDown = {};

addEventListener("keydown", function (e) {
    keysDown[e.keyCode] = true;
    if(e.keyCode == 27) { // ESC
        isGamePaused = !isGamePaused;
    }
}, false); 

addEventListener("keyup", function (e) {
	keysDown[e.keyCode] = false;
}, false);

// BEGIN PLAY ////////////////////////////

function beginPlay() {
	var ready = confirm("I am ready?");
	if(ready) {reset();}
}

var reset = function() {
	timeLeft = 10.0;
	
	player.x = canvas.width / 2;
	player.y = canvas.height / 2;
	
	// throw monster randomly on screen

	enemy.x = 32 + (Math.random() * (canvas.width - 64));
	enemy.y = 32 + (Math.random() * (canvas.height - 64));
};

var resetEnemy = function() {
	enemy.x = 32 + (Math.random() * (canvas.width - 64));
	enemy.y = 32 + (Math.random() * (canvas.height - 64));
};

// UPDATE ////////////////////////////

var update = function(deltaTime) {
    if(isGamePaused) {
        deltaTime = 0;
    }

	if (keysDown[38] == true) { // UP
		player.y -= player.speed * deltaTime;
	}
	if (keysDown[40] == true) { // DOWN
		player.y += player.speed * deltaTime;
	}
	if (keysDown[37] == true) { // LEFT
		player.x -= player.speed * deltaTime;
	}
	if (keysDown[39] == true) { // RIGHT
		player.x += player.speed * deltaTime;
	}
	if (keysDown[17] == true) { // CTRL
		//Spawn bullet in forward direction
	}

	timeLeft -= deltaTime;

	if(timeLeft <= 0.0) {
		var again = confirm("Game Over. Play Again?");
		if(again) {reset();}
	}

	// COLLISION CHECK
	
	if(
		player.x <= (enemy.x + 32)
		&& enemy.x <= (player.x + 32)
		&& player.y <= (enemy.y + 32)
		&& enemy.y <= (player.y + 32)
	) {
		++enemiesCaught;
		++timeLeft;
		resetEnemy();
	}
};

var draw = function() {
	if(bgReady = true) {
		ctx.drawImage(bgImg, 0, 0);
	}
	
	if(playerReady) {
		ctx.translate((player.x + 32), (player.y + 32));
		ctx.rotate(0);
		ctx.drawImage(playerImg, 0, 0);
		ctx.rotate(-0);
		ctx.translate(-(player.x + 32), -(player.y + 32));
	}
	
	if(enemyReady) {
		ctx.drawImage(enemyImg, enemy.x, enemy.y);
    }
    
	// HUD
	ctx.fillStyle = "rgb(250, 250, 250)"
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Monsters caught: " + enemiesCaught, 32, 32);
    ctx.fillText("Time Left: " + timeLeft.toFixed(2), 32, 64);
    if(isGamePaused) {
        ctx.fillStyle = "rgb(250, 0, 0)";
        ctx.font = "50px Helvetica";
        ctx.textAlign = "center";
        ctx.fillText("GAME PAUSED", canvas.width/2, canvas.height/2);
    }
};

var gameLoop = function() {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	draw();

	then = now;
	
	requestAnimationFrame(gameLoop);
};

var then = Date.now();
beginPlay();
gameLoop();