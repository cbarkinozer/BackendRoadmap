/*
  Letter Capitalize
Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word.
Words will be separated by only one space.
Examples
Input: "hello world"
Output: Hello World
Input: "i ran there"
Output: I Ran There
*/


function LetterCapitalize(str) { 
  
  var separateWord = str.toLowerCase().split(' ');
   for (var i = 0; i < separateWord.length; i++) {
      separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
      separateWord[i].substring(1);
   }
   return separateWord.join(' ');

}
   
// keep this function call here 
console.log(LetterCapitalize(readline()));
