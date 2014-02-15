function driver_svgSource(txtNode) {
    this.features = {
        'drawLine':true,
        'drawCircle':true,
        'setColor':true,
        'clear':true,
        'translate':true
    };
    this.textDOMNode = txtNode;
    this.clear();
}

driver_svgSource.prototype = new driver();

driver_svgSource.prototype.clear = function() {
    this.svg = '';
    this.textDOMNode.value = '';
}

driver_svgSource.prototype.drawLine = function(x1, y1, x2, y2) {
    this.svg = this.svg + '<path d="M '+x1+','+y1+' L '+x2+','+y2+'" stroke="black" fill="none" stroke-width="1"/>'+"\n";
}

driver_svgSource.prototype.drawCircle = function(x, y, r) {
}

driver_svgSource.prototype.setColor = function(r, g, b) {
}

driver_svgSource.prototype.start = function() {
    this.svg = '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800">';
    this.svg = this.svg + '<g id="lsys">';
}

driver_svgSource.prototype.finish = function() {
    this.svg = this.svg + '</g>';
    this.svg = this.svg + '</svg>';
    this.textDOMNode.value = this.svg;
}

