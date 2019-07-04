// pattern 1
let greet1 = require('./greet1');
greet1();

// pattern 2
let greet2 = require('./greet2').greet;
greet2();

// pattern 3
let greet3 = require('./greet3');
greet3.greet();

// pattern 4
let Greet4 = require('./greet4');
let grgr = new Greet4();
grgr.greet();

// pattern 5
let greet5 = require('./greet5');
greet5.greet();
