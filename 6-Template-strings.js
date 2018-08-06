/*
Who loves writing large string and variables concatenation? I believe a minority of us. Who hates reading it? I’m sure everyone. 
Fortunately, ES6 introduces very easy-to-use string templates with placeholders for variables.
*/
function hello(firstName, lastName) {
  return `Good morning ${firstName} ${lastName}! 
How are you?`
}

console.log(hello('Jan', 'Kowalski'))

/*
O/P:
Good morning Jan Kowalski! 
How are you?
*/
