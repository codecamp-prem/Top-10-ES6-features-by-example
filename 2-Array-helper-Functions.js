/*
New cool helper functions appeared, which facilitate work with JS arrays in most useful cases.
How many times did you implement logic like: filtering, checking if any or all elements meet the condition, or 
elements conversion? Probably very often.
Now you have great language features to do the work for you. 
Here, in my opinion, are the most valuable functions:
*/

/******-forEach-******/
//->Executes the provided function for each element of the array, passing the array element as an argument.
var colors = ['red', 'green', 'blue']

function print(val) {
  console.log(val)
}

colors.forEach(print)
/*
O/P:
red 
green 
blue
*/

/******-map-******/
//->Creates a new array containing the same number of elements, but 
//output elements are created by the provided function. 
//It just converts each array element to something else.

var colors = ['red', 'green', 'blue']

function capitalize(val) {
    return val.toUpperCase()
}

var capitalizedColors = colors.map(capitalize)

console.log(capitalizedColors)
/*
O/P: ["RED","GREEN","BLUE"] 
*/

/******-filter-******/
//->Creates a new array containing a subset of the original array. 
//The result has these elements that pass the test implemented by the provided function, which should return true or false.

var values = [1, 60, 34, 30, 20, 5]

function lessThan20(val) {
    return val < 20
}

var valuesLessThan20 = values.filter(lessThan20)

console.log(valuesLessThan20)
/*
O/P: [1,5]
*/

/******-find-******/
//->Finds the first element that passes the test implemented by the provided function, which should return true or false.

var people = [
  {name: 'Jack', age: 50},
  {name: 'Michael', age: 9}, 
  {name: 'John', age: 40}, 
  {name: 'Ann', age: 19}, 
  {name: 'Elisabeth', age: 16}
]

function teenager(person) {
    return person.age > 10 && person.age < 20
}

var firstTeenager = people.find(teenager)

console.log('First found teenager:', firstTeenager.name)
/*
O/P: First found teenager: Ann 
*/

/******-every-******/
//->Checks if every element of the array passes the test implemented by the provided function, 
//which should return true or false.

var people = [
  {name: 'Jack', age: 50},
  {name: 'Michael', age: 9}, 
  {name: 'John', age: 40}, 
  {name: 'Ann', age: 19}, 
  {name: 'Elisabeth', age: 16}
]

function teenager(person) {
    return person.age > 10 && person.age < 20
}

var everyoneIsTeenager = people.every(teenager)

console.log('Everyone is teenager: ', everyoneIsTeenager)
/*
O/P: Everyone is teenager:  false 
*/

/******-some-******/
//->Checks if any element of the array passes the test implemented by the provided function, 
//which should return true or false.

var people = [
  {name: 'Jack', age: 50},
  {name: 'Michael', age: 9}, 
  {name: 'John', age: 40}, 
  {name: 'Ann', age: 19}, 
  {name: 'Elisabeth', age: 16}
]

function teenager(person) {
    return person.age > 10 && person.age < 20
}

var thereAreTeenagers = people.some(teenager)

console.log('There are teenagers:', thereAreTeenagers)
/*
O/P: There are teenagers: true 
*/

/******-reduce-******/
//->Applies a function passed as the first parameter against an accumulator and each element in the array (from left to right), thus reducing it to a single value. 
//The initial value of the accumulator should be provided as the second parameter of the reduce function.


var array = [1, 2, 3, 4]

function sum(acc, value) {
  return acc + value
}

function product(acc, value) {
  return acc * value
}

var sumOfArrayElements = array.reduce(sum, 0)
var productOfArrayElements = array.reduce(product, 1)

console.log('Sum of', array, 'is', sumOfArrayElements)
console.log('Product of', array, 'is', productOfArrayElements)
/*
O/P:
Sum of [1,2,3,4] is 10 
Product of [1,2,3,4] is 24 
*/










