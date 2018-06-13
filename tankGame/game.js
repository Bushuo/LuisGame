var tileSize = 32; // rows = 30 cols = 30
var players = [];
var gamefield;
var cvs;
var wrapperdiv;

function setup() {
    createCanvas(960,960);
    players[0] = new Tank();
    players[1] = new Tank();
    players[0].pos.x = 0;
    players[0].pos.y = 0;
    players[1].pos.x = 0;
    players[1].pos.y = 0;
    players[0].dir.x = 0;
    players[0].dir.y = 0;
    players[1].dir.x = 0;
    players[1].dir.y = 0;

    players[0].color = "#FF0000";
    players[1].color = "#0000FF";
    cvs = document.getElementById("defaultCanvas0");
    wrapperdiv = document.getElementById("outer-wrapper");
    wrapperdiv.appendChild(cvs);

    //players[0].preload("Art/player0.png");
    //players[1].preload("Art/player1.png");
}

function createGamefield() {
    gamefield = new Array(900);
    for (var i = 0; i < gamefield.length; i++) {
        if(i<tileSize){
            gamefield[i] = new Obstacle();
        }
    }
}

function draw() {
    background(51);
    for(var i = 0; i < players.length; i++) {
        players[i].update();
    }
    players[0].show();
    players[1].show();
}
