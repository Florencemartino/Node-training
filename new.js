function Person(firstname, lastname) {

  this.firstname = firstname;
  this.lastname = lastname;
};

let john = new Person('John', 'Doe');

console.log(john.firstname);
