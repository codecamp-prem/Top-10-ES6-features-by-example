/*
Of array
--------

Enables extraction of requested elements from the array and assigning them to variables.
*/

function printFirstAndSecondElement([first, second]) {
    console.log('First element is ' + first + ', second is ' + second)
}

function printSecondAndFourthElement([, second, , fourth]) {
    console.log('Second element is ' + second + ', fourth is ' + fourth)
}

var array = [1, 2, 3, 4, 5]

printFirstAndSecondElement(array)
printSecondAndFourthElement(array)

/* 
O/P:
First element is 1, second is 2 
Second element is 2, fourth is 4 
*/

/******************************************************************************/
/*
Of object
--------

Enables extraction of requested properties from the object and assigning them to variables of the same name as properties.
*/

function printBasicInfo({firstName, secondName, profession}) {
	console.log(firstName + ' ' + secondName + ' - ' + profession)
}

var person = {
  firstName: 'John',
  secondName: 'Smith',
  age: 33,
  children: 3,
  profession: 'teacher'
}

printBasicInfo(person)

// O/P: John Smith - teacher 
