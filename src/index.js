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
