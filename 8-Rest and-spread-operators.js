/*
Spread
------

It enables extraction of array or object content as single elements.

Example — make shallow copy of array:
*/
var array = ['red', 'blue', 'green']
var copyOfArray = [...array]

console.log('Copy of', array, 'is', copyOfArray)
console.log('Are', array, 'and', copyOfArray, 'same?', array === copyOfArray)

/*
O/P:
Copy of ["red","blue","green"] is ["red","blue","green"] 
Are ["red","blue","green"] and ["red","blue","green"] same? false 
*/

//Example — merge arrays:

var defaultColors = ['red', 'blue', 'green']
var userDefinedColors = ['yellow', 'orange']

var mergedColors = [...defaultColors, ...userDefinedColors]

console.log('Merged colors', mergedColors)

//O/P: Merged colors ["red","blue","green","yellow","orange"]

/******************************************************************/

/*
Rest
-----

Would you like to bind the first few function parameters to variables, and others to single variables as an array?
Now you can do it quite easily.

*/
function printColors(first, second, third, ...others) {
  console.log('Top three colors are ' + first + ', ' + second + ' and ' + third + '. Others are: ' + others)
}
printColors('yellow', 'blue', 'orange', 'white', 'black')

//O/P: Top three colors are yellow, blue and orange. Others are: white,black 

