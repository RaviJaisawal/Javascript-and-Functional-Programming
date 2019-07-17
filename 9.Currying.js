//1
const magicPhrase = 
 (magicWord) => 
  (muggleWord) => 
    magicWord + muggleWord


//2
import _ from "lodash"

const magicPhrase = _.curry((magicWord, muggleWord) => magicWord + muggleWord)

const muggleWordAccepter = magicPhrase("Abra kedabra ")

muggleWordAccepter("dishwasher")


//3
import _ from "lodash"

const addFunction = _.curry((a, b) => a + b)

const addOne = add(1)

addTen(1)

//4 
//Why You Should Care About Currying
//

const getObjectId = (obj) => obj.id // works on single object

const arrayOfObjects = [{id: 1}, {id: 2}, {id: 3}, {id: 4}]

const arrayOfIDs = arrayOfObjects.map(getObjectId)


//5

const getFirstTwoLettersOfWord = (word) => word.substring(0,2)

// We can convert it, by wrapping it in the map method

const res =  ["aabb", "bbcc", "ccdd", "ddee"].map(getFirstTwoLettersOfWord)


//6
//Let’s refactor the max function so that it won’t reference any arguments.

arr = [2,4,6,8,9]

// LEAVE BE:
const getMax = (x, y) => {
  return x >= y ? x : y;
};

// REFACTOR THIS ONE:
const max = (arr) => {
  return arr.reduce((acc, x) => {
    return getMax(acc, x);
  }, -Infinity);
};

const max = arr.reduce(getMax, -Infinity)


//7
// Let’s wrap the native JS slice method so that it functional and curried.

import _ from "lodash"

const arr = ["barney", "fred", "dave"]

arr.slice(0, 2) // ["barney", "fred"]

const slice = _.curry((start, end, arr) => arr.slice(start, end));
const sliceWithSetIndexes = slice(0,2)

sliceWithSetIndexes(arr) // ["barney", "fred"]
