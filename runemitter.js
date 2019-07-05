let Emitter = require('./emitter');

let emtr = new Emitter();

emtr.on('greet', function(){
  console.log('Someone, somewhere said hello');
});

emtr.on('greet', function(){
  console.log('Hello is occurred');
});

console.log('hello');
emtr.emit('greet');
