var running = true;

function keyPressed() {
	if(keyCode === UP_ARROW && snake.xSpeed !== 0 && snake.ySpeed !== 1) {
		snake.dir(0,-1);
	} else if(keyCode === DOWN_ARROW && (snake.xSpeed !== 0 && snake.ySpeed !== -1)) {
		snake.dir(0,1);
	} else if(keyCode === RIGHT_ARROW && (snake.xSpeed !== -1 && snake.ySpeed !== 0)) {
		snake.dir(1,0);
	} else if(keyCode === LEFT_ARROW && (snake.xSpeed !== 1 && snake.ySpeed !== 0)) {
		snake.dir(-1,0);
	} else if(keyCode === ESCAPE) {
        running = !running;
        console.log(running);
    }
};
