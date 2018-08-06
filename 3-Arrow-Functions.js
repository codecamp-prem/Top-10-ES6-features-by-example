var array = [1, 2, 3, 4]

const sum = (acc, value) => acc + value
const product = (acc, value) => acc * value

var sumOfArrayElements = array.reduce(sum, 0)
var productOfArrayElements = array.reduce(product, 1)

/*---------------------------------------------------*/

var array = [1, 2, 3, 4]

var sumOfArrayElements = array.reduce((acc, value) => acc + value, 0)
var productOfArrayElements = array.reduce((acc, value) => acc * value, 1)

/*---------------------------------------------------*/

var array = [1, 2, 3, 4]

const sum = (acc, value) => {
  const result = acc + value
  console.log(acc, ' plus ', value, ' is ', result)
  return result
}

var sumOfArrayElements = array.reduce(sum, 0)
