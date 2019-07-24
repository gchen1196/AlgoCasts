// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//use obj to count characters
//return the key with the most value 
function maxChar(str) {
  if (str.length === 0) {
    return null;
  }
  var countObj = {};
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    if (countObj[letter]) {
      countObj[letter]++;
    }
    else {
      countObj[letter] = 1;
    }
  }
  let greatestCount = 0; 
  let largestValue;
  for (var key in countObj) {
    if (countObj[key] > greatestCount) {
      greatestCount = countObj[key];
      largestValue = key;
    }
  }
  return largestValue;
}

module.exports = maxChar;
