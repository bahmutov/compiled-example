'use strict';

var lodash_fp = require('lodash/fp');

var add = function (a, b) {
  return a + b;
};

var sum = add(2, 3);
console.log('2 + 3 = ' + sum);

var a = ['foo', 'bar', 'baz'];
console.log('first element of ' + a + ' is', lodash_fp.head(a));

Promise.resolve(42).then(function (value) {
  return console.log('Promise resolved with ' + value);
});