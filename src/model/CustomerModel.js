function Customer(id,name,age, sex) {       // Accept name and age in the constructor
    this.id = id || null;
    this.name  = name  || null;
    this.age  = age  || null;
    this.sex  = sex  || null;
}

Customer.prototype.getSex = function() {
    return this.sex;
}

Customer.prototype.setSex = function(sex) {
    this.sex = sex;
}

Customer.prototype.getId = function() {
    return this.id;
}

Customer.prototype.setId = function(id) {
   this.id = id;
}


Customer.prototype.getAge = function() {
    return this.age;
}

Customer.prototype.setAge = function(age) {
    this.age = age;
}

Customer.prototype.getName = function() {
    return this.name;
}

Customer.prototype.setName = function(name) {
    this.name = name;
}


Customer.prototype.fill = function(newFields) {
    for (var field in newFields) {
        if (this.hasOwnProperty(field) && newFields.hasOwnProperty(field)) {
            if (this[field] !== 'undefined') {
                this[field] = newFields[field];
            }
        }
    }
};

module.exports = Customer;