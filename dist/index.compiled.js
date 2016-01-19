'use strict';
require('compiled').babelPolyfill()

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var lodash_fp = require('lodash/fp');

var add = function (a, b) {
  return a + b;
};

var sum = add(2, 3);
console.log('2 + 3 = ' + sum);

console.log('first element of ' + a + ' is', lodash_fp.head(a));

Promise.resolve(42).then(function (value) {
  return console.log('Promise resolved with ' + value);
});

var objectAdd = function (_ref) {
  var a = _ref.a;
  var b = _ref.b;
  return a + b;
};
console.log('Adding object properties', objectAdd({ a: 10, b: 2 }));

// See more ES6 examples in
// https://github.com/JustinDrake/node-es6-examples

// trying Maps
var gods = [{ name: 'Douglas Crockford' }, { name: 'Guido van Rossum' }, { name: 'Raffaele Esposito' }];

var miracles = new Map();

miracles.set(gods[0], 'JavaScript');
miracles.set(gods[1], 'Python');
miracles.set(gods[2], 'Pizza Margherita');

// Prints "JavaScript"
console.log(miracles.get(gods[0]));

// trying Sets
var surveyAnswers = ['sex', 'sleep', 'sex', 'sun', 'sex', 'cinema'];

var pleasures = new Set();
surveyAnswers.forEach(function (pleasure) {
  pleasures.add(pleasure);
});

// Prints the number of pleasures in the survey, not counting duplicates
console.log('number of life pleasures ' + pleasures.size);

// Symbols
var a = new Map();
a.set(Symbol(), 'Noise');

// Prints "1" although the one element cannot be accessed!
console.log('Map uses symbol, size', a.size);

// more examples from http://es6-features.org/
var params = ["hello", true, 7];
var other = [1, 2].concat(params); // [ 1, 2, "hello", true, 7 ]
console.assert(other.length === 5);

var str = "foo";
var chars = [].concat(_toConsumableArray(str)); // [ "f", "o", "o" ]
console.assert(chars.length === 3);
console.assert(chars[0] === 'f');

var foo3 = 'foo'.repeat(3);
console.assert(foo3 === 'foofoofoo', 'string repeat');
