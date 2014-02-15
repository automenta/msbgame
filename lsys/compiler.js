function compiler() {
    this.rules = new Array();
    this.axiom = '';
}
compiler.prototype.addRule = function(rule) {
    if(typeof this.rules[rule.predecessor] == 'undefined') {
        this.rules[rule.predecessor] = new Array();
    }
    this.rules[rule.predecessor].push(rule);
}

compiler.prototype.addRules = function(rules) {
    for(var rule in rules) {
        this.addRule(rules[rule]);
    }
}

compiler.prototype.getRulesByPredecessor = function(pdc) {
    if(typeof this.rules[pdc] != 'undefined') {
        return this.rules[pdc];
    }
    
    return false;
}

compiler.prototype.getFirstRuleByPredecessor = function(pdc) {
    var rules = this.getRulesByPredecessor(pdc);
    if(rules !== false) {
        return rules[0];
    }
    return false;
}

compiler.prototype.setAxiom = function(axiom) {
    this.axiom = axiom;
}

compiler.prototype.compile = function(iterations) {
    var successor = this.axiom;
    
    
    for(n=0; n<iterations; n++) {
    
        var tmp = new String();
        for(i=0; i< successor.length; i++) {
        
            var c = successor.charAt(i);
            var rule = this.getFirstRuleByPredecessor(c);
            if(rule !== false) {
                tmp = tmp + rule.successor;
            } else {
                tmp = tmp + c;
            }
        }
        successor = tmp;
    }    
    return successor;
}


