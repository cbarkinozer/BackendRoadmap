/*
  Letter Changes
Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm.
Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a).
Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
Examples
Input: "hello*3"
Output: Ifmmp*3
Input: "fun times!"
Output: gvO Ujnft!
*/

function LetterChanges(str) { 
  str = str.toLowerCase().replace(/[a-zA-Z]/g, function(letter) {
    return String.fromCharCode(letter.charCodeAt(0) + 1); } );
  str = str.replace(/[aeiou]/g, function(letter) {
    return letter.toUpperCase(); });  
  return str; 

}
   
// keep this function call here 
console.log(LetterChanges(readline()));
