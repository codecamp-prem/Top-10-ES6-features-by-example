//Don’t you like providing all possible function parameters? Use defaults.

function sort(arr = [], direction = 'ascending') {
  console.log('I\'m going to sort the array', arr, direction)
}

sort([1, 2, 3])
sort([1, 2, 3], 'descending')

/*
O/P:
I'm going to sort the array [1,2,3] ascending 
I'm going to sort the array [1,2,3] descending 
*/
