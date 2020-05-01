function CustomerAddress(id,address) {       // Accept name and age in the constructor
    this.id = id || null;
    this.address  = address  || null;
}

CustomerAddress.prototype.getAddress = function() {
    return this.address;
}

CustomerAddress.prototype.setAddress = function(address) {
    this.address = address;
}

CustomerAddress.prototype.getId = function() {
    return this.id;
}

CustomerAddress.prototype.setId = function(id) {
   this.id = id;
}


CustomerAddress.prototype.fill = function(newFields) {
    for (var field in newFields) {
        if (this.hasOwnProperty(field) && newFields.hasOwnProperty(field)) {
            if (this[field] !== 'undefined') {
                this[field] = newFields[field];
            }
        }
    }
};

module.exports = CustomerAddress;