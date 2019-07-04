function Greet3() {

  this.greeting = 'Hello !!!';
  this.greet = function() {
    console.log(this.greeting);
  }
};

module.exports = new Greet3();
