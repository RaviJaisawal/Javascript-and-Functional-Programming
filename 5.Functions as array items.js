const sum = (x,y) => x + y;

console.log(sum(10,20))

const subtract = (x,y) => x - y;

console.log(subtract(10,20))

const multiply = (x,y) => x * y;

console.log(multiply(10,20))

const arrayOfFunction = [sum,subtract,multiply]
console.log(arrayOfFunction)
console.log(arrayOfFunction[0](10,20))