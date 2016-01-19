import { add } from './calc'
import { head } from 'lodash/fp'

const sum = add(2, 3)
console.log(`2 + 3 = ${sum}`)

const a = ['foo', 'bar', 'baz']
console.log(`first element of ${a} is`, head(a))

Promise.resolve(42)
  .then(value => console.log(`Promise resolved with ${value}`))

const objectAdd = ({a, b}) => a + b
console.log('Adding object properties', objectAdd({a: 10, b: 2 }))

// See more ES6 examples in
// https://github.com/JustinDrake/node-es6-examples

// trying Maps
const gods = [
  {name: 'Douglas Crockford'},
  {name: 'Guido van Rossum'},
  {name: 'Raffaele Esposito'}
];

let miracles = new Map()

miracles.set(gods[0], 'JavaScript')
miracles.set(gods[1], 'Python')
miracles.set(gods[2], 'Pizza Margherita')

// Prints "JavaScript"
console.log(miracles.get(gods[0]))

// trying Sets
let surveyAnswers = ['sex', 'sleep', 'sex', 'sun', 'sex', 'cinema'];

let pleasures = new Set();
surveyAnswers.forEach(function (pleasure) {
  pleasures.add(pleasure);
});

// Prints the number of pleasures in the survey, not counting duplicates
console.log(`number of life pleasures ${pleasures.size}`);

// Symbols
let a = new Map();
a.set(Symbol(), 'Noise');

// Prints "1" although the one element cannot be accessed!
console.log('Map uses symbol, size', a.size);

// more examples from http://es6-features.org/
var params = [ "hello", true, 7 ]
var other = [ 1, 2, ...params ] // [ 1, 2, "hello", true, 7 ]
console.assert(other.length === 5)

var str = "foo"
var chars = [ ...str ] // [ "f", "o", "o" ]
console.assert(chars.length === 3)
console.assert(chars[0] === 'f')

var foo3 = 'foo'.repeat(3)
console.assert(foo3 === 'foofoofoo', 'string repeat')
