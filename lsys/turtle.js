function turtle(x, y) {
    this.ox = x;
    this.oy = y;

    this.reset();
}

turtle.prototype.reset = function() {
    this.x = this.ox;
    this.y = this.oy;
    this.heading = 180;
    this.colorIndex = 0;
}

turtle.prototype.toArray = function() {
    var t = new Array();
    t['x'] = this.x;
    t['y'] = this.y;
    t['heading'] = this.heading;
    t['colorIndex'] = this.colorIndex;
    return t;
}

turtle.prototype.fromArray = function(t) {
    this.x = t['x'];
    this.y = t['y'];
    this.heading = t['heading'];
    this.colorIndex = t['colorIndex'];
}

