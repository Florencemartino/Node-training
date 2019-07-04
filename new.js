function Person(firstname, lastname) {

  this.firstname = firstname;
  this.lastname = lastname;
};

// Creation of prototype
Person.prototype.greet = function() {
  console.log('Hello, ' + this.firstname + ' ' + this.lastname);
};

let john = new Person('John', 'Doe');
let jane = new Person('Jane', 'Doe');

console.log(john.firstname);

// using prototype
john.greet();
jane.greet();

//show prototype object
console.log(john.__proto__);

//compare prototype object
console.log(john.__proto__ === jane.__proto__);


