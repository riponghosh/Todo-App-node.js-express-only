var test=require('./test');
var file=require('fs');
file.writeFileSync('./fileTest.js',test,'utf8');

console.log(test);