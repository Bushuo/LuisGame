var running = true;

function keyPressed() {
	// PLAYER 1

	if(keyCode === UP_ARROW) {
		players[0].speed = 1;
		players[0].dir(0,-1);
	} else if(keyCode === DOWN_ARROW) {
		players[0].speed = 1;
		players[0].dir(0,1);
	} else if(keyCode === RIGHT_ARROW) {
		players[0].speed = 1;
		players[0].dir(1,0);
	} else if(keyCode === LEFT_ARROW) {
		players[0].speed = 1;
		players[0].dir(-1,0);
	} else if(keyCode === 17) {
		// shoot
		console.log("player 0 shoot");
	}
	// PLAYER 2

	else if(keyCode === 87) {
		players[1].speed = 1;
		players[1].dir(0,-1);
	} else if(keyCode === 83) {
		players[1].speed = 1;
		players[1].dir(0,1);
	} else if(keyCode === 68) {
		players[1].speed = 1;
		players[1].dir(1,0);
	} else if(keyCode === 65) {
		players[1].speed = 1;
		players[1].dir(-1,0);
	} else if(keyCode === 67) {
		// shoot
		console.log("player 1 shoot");
	}
	// GENERAL
	else if(keyCode === ESCAPE) {
        running = !running;
    }
};
