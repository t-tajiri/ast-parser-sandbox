const { Parser } = require('acorn')

console.log('\n**** example 1 ****\n');
console.log(Parser.parse('var x = 1 + 2'));

function add(a, b) {
  return a + b;
}

console.log('\n**** example 2 ****\n');
console.log(Parser.parse(add(1, 2)));


function declare() {
  let a = 1;
  const b = a + 2;
  const c = 3 + b;
}

console.log('\n**** example 3 ****\n');
for (node of Parser.parse(declare).body[0].body.body) {
  // start-end contains spaces.
  console.log(node.declarations);
}