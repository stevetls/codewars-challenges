// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// my solution
function reverseWords(str) {
    // Go for it
    let arr = str.split(' ')
    let reversedArr = arr.map( word => word.split('').reverse().join(''))
    return reversedArr.join(' ')
  }

//   other's solution
function reverseWords(str) {
    return str.split(' ').map(function(word){
      return word.split('').reverse().join('');
    }).join(' ');
  }