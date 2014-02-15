function driver_canvas(canvasDOMNode) {
    this.features = {'drawLine':true, 'clear':true, 'translate':true};
    
    this.canvasDOMNode = canvasDOMNode;
    this.context = this.canvasDOMNode.getContext('2d');
    this.context.lineWidth = 1;
    
    this.clear();
}

driver_canvas.prototype = new driver();

driver_canvas.prototype.clear = function() {
    this.context.clearRect(0, 0, this.canvasDOMNode.width, this.canvasDOMNode.height);
}

driver_canvas.prototype.drawLine = function(x1, y1, x2, y2) {
    this.context.beginPath();
    this.context.moveTo(x1, y1);
    this.context.lineTo(x2, y2);
    this.context.stroke();
}

driver_canvas.prototype.drawCircle = function(x, y, r) {
    this.context.beginPath();
    this.context.arc(x, y, r, 0, Math.PI * 2, true);
    this.context.stroke();    
}

driver_canvas.prototype.setColor = function(r, g, b) {
    this.context.strokeStyle = 'rgb('+r+','+g+','+b+')';
}

driver_canvas.prototype.save = function() {
    this.context.save();
}

driver_canvas.prototype.restore = function() {
    this.context.restore();
}

driver_canvas.prototype.start = function() {
}

driver_canvas.prototype.finish = function() {
}

