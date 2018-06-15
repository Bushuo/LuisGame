Food = function() {
  this.pos;

  this.pickLocation = function () {
    let cols = floor(width/scl);
    let rows = floor(height/scl);
    food.pos = createVector(floor(random(cols)), floor(random(rows)));
    this.pos.mult(scl);
  }
}
