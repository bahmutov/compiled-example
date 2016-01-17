'use strict';

var lodash_fp = require('lodash/fp');

const add = (a, b) => a + b;

const sum = add(2, 3);
console.log(`2 + 3 = ${ sum }`);

const a = ['foo', 'bar', 'baz'];
console.log(`first element of ${ a } is`, lodash_fp.head(a));

Promise.resolve(42).then(value => console.log(`Promise resolved with ${ value }`));

const objectAdd = _ref => {
  let a = _ref.a;
  let b = _ref.b;
  return a + b;
};
console.log('Adding object properties', objectAdd({ a: 10, b: 2 }));