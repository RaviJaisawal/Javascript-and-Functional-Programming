/*
A higher order function is a function that takes a function as an argument, or returns a function.
*/
const add = (x,y) => x + y;
const subtract = (x,y) => x - y;
const multiply = (x,y) => x * y;

const arrayOfFunctions = [add, subtract, multiply];

arrayOfFunctions.forEach(calculationFunction => console.log(calculationFunction(1,1))); // 2 0 1


/*
functions in functional programming can be passed into arrays (lists) 
just like any other data type. Functions can go anywhere!
*/
const addWrapper = () => (x,y) => x + y;

const add = addWrapper();

const sum1 = add (1,2); // 3

// Or we could do it like this

const sum2 = addWrapper()(4,4); // 8


/*
We could get even crazier with our level of indirection and 
write a function that returns a function, that in turn returns its own function!
*/

const bankStatement =
      name =>
        location =>
          balance =>
            `Hello ${name}! Welcome to the bank of ${location}. Your current balance is ${balance}`;

const statementExpectingLocation = bankStatement("Omer");
const statementExpectingBalance = statementExpectingLocation("NYC");
const bankStatementMsg = statementExpectingBalance("100 million"); // wishful thinking?

console.log(bankStatementMsg); // Hello Omer! Welcome to the bank of NYC. Your current balance is 100 million

// We could also call the function with all the arguments up front
const msg = bankStatement("Jeff Bezos")("Silicon Valley")("97.7 billion");
console.log(msg); // Hello Jeff Bezos! Welcome to the bank of Silicon Valley. Your current balance is 97.7 billion

