/*
const enables you to define constants (finally!). 
let enables you to define variables. 
That’s great, but don’t we have variables in JavaScript already? Yes, that’s true, 
but variables declared by var have function scope and are hoisted to the top. 
It means that a variable can be used before it has been declared. 
let variables and constants have block scope (surrounded by {}) and cannot be used before declaration.
*/
unction f() {
  var x = 1
  let y = 2
  const z = 3
  {
    var x = 100
    let y = 200
    const z = 300
    console.log('x in block scope is', x)
    console.log('y in block scope is', y)
    console.log('z in block scope is', z)
  }
  console.log('x outside of block scope is', x)
  console.log('y outside of block scope is', y)
  console.log('z outside of block scope is', z)
}
f()
/*--OUTPUT---
x in block scope is 100 
y in block scope is 200 
z in block scope is 300 
x outside of block scope is 100 
y outside of block scope is 2 
z outside of block scope is 3 
*/
