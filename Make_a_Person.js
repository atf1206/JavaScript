
var Person = function(firstAndLast) {
    var fullName = firstAndLast;
    var nameArray = fullName.split(" ");
      
      this.getFirstName = function() {
        console.log(nameArray[0]);
        return nameArray[0];
      };
      this.getLastName = function() {
        return nameArray[1];
      };
      this.getFullName = function() {
        return nameArray.join(" ");
      };
      this.setFirstName = function(first) {
        nameArray[0] = first;
      };
      this.setLastName = function(last) {
        nameArray[1] = last;
      };
      this.setFullName = function(firstAndLast) {
        nameArray = firstAndLast.split(" "); 
      };
};

var bob = new Person('Bob Ross');
bob.getFirstName();
