// function as first-class

function greet() {
  console.log('hi !')
};

greet();


// function expression
function logGreet(fn) {
  fn()
};
logGreet(greet);
