function parser() {
    this.stringToParse = '';
    this.lines = new Array();
}

parser.prototype.parseString = function(instr) {
    this.lines = instr.split(/\n/);
    
    lsys = new lsystem();
    
    for(i=0; i<this.lines.length; i++) {
        var line = this.lines[i];
        // strip whitespace
        line = line.replace(/\s*/g, '');
        
        if(line.charAt(0) != '#') {
            var m = line.match(/^iterations=([0-9]+)/);
            if(m) {
                //console.log('parser.parseString(): iterations='+m[1]);
                lsys.iterations = parseInt(m[1]);
            }
            
            var m = line.match(/^angle=([0-9]+(\.[0-9]+)?)/);
            if(m) {
                //console.log('parser.parseString(): angle='+m[1]);
                lsys.angle = parseFloat(m[1]);
            }
            
            var m = line.match(/^axiom=([a-zA-Z\-\+\[\]]+)/);
            if(m) {
                //console.log('parser.parseString(): axiom='+m[1]);
                lsys.axiom = m[1];
            }
            
            var m = line.match(/^length=([0-9]+)/);
            if(m) {
                //console.log('parser.parseString(): length='+m[1]);
                lsys.nodeLength = parseInt(m[1]);
            }
            
            var m = line.match(/^([A-Za-z]?):=([a-zA-Z\-\+\[\]]+)/);
            if(m) {
                //console.log('parser.parseString(): rule: '+m[1]+':='+m[2]);
                lsys.rules.push(new rule(m[1], m[2]));
            }
            
        } 
    }
    return lsys;
    
}

