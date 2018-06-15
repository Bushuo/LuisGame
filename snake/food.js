Food = function() {
  this.pos;

  // chooses a random location for the food to appear
  this.pickLocation = function () {
    let cols = floor(width/scl);
    let rows = floor(height/scl);
    food.pos = createVector(floor(random(cols)), floor(random(rows)));
    this.pos.mult(scl);
  }

  this.show = function() {
    fill(255, 0, 100);
  	rect(food.pos.x, food.pos.y, scl, scl);
  }
}
