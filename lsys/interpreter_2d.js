function interpreter_2d(driver, turtle) {
    this.driver = driver;
    this.turtle = turtle;
    this.drawStartPosition = true;
    this.reset();
}

interpreter_2d.prototype.reset = function() {
    this.angle = 90;
    this.nodeLength = 10;
    this.turtleStack = new Array();
    this.turtle.reset();
    this.colorPalette = [[0,0,0], [255,0,0], [0,255,0], [0,0,255]];
}

interpreter_2d.prototype.interpret = function(lstr) {
    
    this.driver.start();
    
    if(!this.driver.hasFeature('drawLine')) {
        alert('driver doesn\'t feature drawLine()!');
    }
    
    if(this.drawStartPosition) {
        this.driver.setColor(255, 0, 0);
        this.driver.drawCircle(this.turtle.x, this.turtle.y, 5);
    }
    this.driver.setColor(0, 0, 0);

	this.angleRad = deg2rad(this.angle);

	this.turtle.heading = deg2rad(180);

    for(i=0; i<lstr.length; i++) {
        
        var c = lstr.charAt(i);
                
        if(c >= 'A' && c <= 'Z') {
            var dx = (Math.sin(this.turtle.heading) * this.nodeLength);
            var dy = (Math.cos(this.turtle.heading) * this.nodeLength);
            var color = this.colorPalette[this.turtle.colorIndex];
            this.driver.setColor(color[0], color[1], color[2]);

            this.driver.drawLine(this.turtle.x, this.turtle.y, this.turtle.x + dx, this.turtle.y + dy);

            this.turtle.x += dx;
            this.turtle.y += dy;
            
        } else if(c >= 'a' && c <= 'z') {
            this.turtle.x += (Math.sin(this.turtle.heading) * this.nodeLength);
            this.turtle.y += (Math.cos(this.turtle.heading) * this.nodeLength);
            
        } else if(c == '-') {
            this.turtle.heading -= this.angleRad;
        
        } else if(c == '+') {
            this.turtle.heading += this.angleRad;

        } else if(c == '[') {
            this.turtleStack.push(this.turtle.toArray());

        } else if(c == ']') {
            if(this.turtleStack.length > 0) {
                this.turtle.fromArray(this.turtleStack.pop());
            }

        } else if(c == '\'') {
            this.turtle.colorIndex++;
            if(this.turtle.colorIndex >= this.colorPalette.length) {
                this.turtle.colorIndex = 0;
            }
        
        } else {
            //console.warn('unknown character: ' + c);
        }

        
    }
    //this.driver.translate(50,50);
    this.driver.finish();
    
}



