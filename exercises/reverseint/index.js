// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//input: number
//ouput: reverse number
//if number is negative, then concat - to result string
//convert the number to string using toString
//iterate through the string from end till the second and store to array
//check to see if there are 0's in the front by passing array to a recursive function
//recursive function will check for the starting index 
//use the starting index to iterate through the array and concat each number (string) to result
//return result 
function reverseInt(n) {
  var reversed = n.toString().split('').reverse().join('');
  var num = parseInt(reversed);
  if (n < 0) {
    return -1 * num;
  } 
  return num;
}


module.exports = reverseInt;
