/*
Object literals have been enhanced. Now we can much more easily:

define fields with variable assignment of the same name
define functions
define dynamic (calculated) properties
*/

const color = 'red'
const point = {
  x: 5,
  y: 10,
  color,
  toString() {
    return 'X=' + this.x + ', Y=' + this.y + ', color=' + this.color
  },
  [ 'prop_' + 42 ]: 42
}

console.log('The point is ' + point)
console.log('The dynamic property is ' + point.prop_42)

/*
O/P:
he point is X=5, Y=10, color=red 
The dynamic property is 42 
*/
