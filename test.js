var assert = require('assert');
var nthPrime = require('./');

assert.strictEqual(nthPrime(1), 2);
assert.strictEqual(nthPrime(2), 3);
assert.strictEqual(nthPrime(3), 5);
assert.strictEqual(nthPrime(4), 7);
assert.strictEqual(nthPrime(5), 11);
assert.strictEqual(nthPrime(1000000), 15485863);
