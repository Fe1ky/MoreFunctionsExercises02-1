//Create an anonymous fucntion and set it equal to a variable.
let tripple = function(input){
return input*3
}
console.log(tripple(1))


/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. */
let arrr = function(input){
  if(typeof input === 'number'){
    return input*3
  } else if(typeof input === 'string'){
    return 'ARRR!'
  }
}
console.log(arrr(3))


/* Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = ['Elocution', 21, 'Clean teeth', 100];

arr.map(arrr)