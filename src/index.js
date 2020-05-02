const { Parser } = require('acorn')

console.log(Parser.parse('var x = 1 + 2'));

function add(a, b) {
  return a + b;
}

console.log(Parser.parse(add(1, 2)));
