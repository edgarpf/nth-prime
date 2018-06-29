# nth-prime [![Build Status](https://travis-ci.org/edgarpf/nth-prime.svg?branch=master)](https://travis-ci.org/edgarpf/nth-prime) [![codecov](https://codecov.io/gh/edgarpf/nth-prime/branch/master/graph/badge.svg)](https://codecov.io/gh/edgarpf/nth-prime) [![Maintainability](https://api.codeclimate.com/v1/badges/c749e4bbf5d16e7676cc/maintainability)](https://codeclimate.com/github/edgarpf/nth-prime/maintainability)
A simple npm package with a function that returns the nth prime number.

## Installation
```js
npm i -S nth-prime
```

## Usage
```js
var nthPrime = require('nth-prime');

console.log(nthPrime(1)); // prints 2
console.log(nthPrime(2)); // prints 3
console.log(nthPrime(5)); // prints 11
console.log(nthPrime(1000000));  // prints 15485863

```
