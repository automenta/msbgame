function driver() {
    this.features = new Array();
}

driver.prototype.hasFeature = function(feature) {
    if(typeof this.features[feature] != 'undefined') {
        return true;
    } else {
        return false;
    }
    
}

