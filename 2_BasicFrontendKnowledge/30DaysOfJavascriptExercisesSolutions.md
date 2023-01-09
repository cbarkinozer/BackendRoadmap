### 30 Days Of Javascript Solutions
## Day 2

### Exercise: Level 1

1. Declare a variable named challenge and assign it to an initial value **'30 Days Of JavaScript'**.
```js
let challange = "30 Days Of JavaScript";
```
2. Print the string on the browser console using __console.log()__
```js
let challange = "30 Days Of JavaScript";
console.log(challange)//30 Days Of JavaScript
```
3. Print the __length__ of the string on the browser console using _console.log()_
```js
let challange = "30 Days Of JavaScript";
console.log(challange.length)//21
```
4. Change all the string characters to capital letters using __toUpperCase()__ method
```js
let challange = "30 Days Of JavaScript";
console.log(challange.toUpperCase())//30 DAYS OF JAVASCRIPT
```
5. Change all the string characters to lowercase letters using __toLowerCase()__ method
```js
let challange = "30 Days Of JavaScript";
console.log(challange.toLowerCase())//30 days of javascript
```
6. Cut (slice) out the first word of the string using __substr()__ or __substring()__ method
```js
let challange = "30 Days Of JavaScript";
console.log(challange.substring(3))//Days Of JavaScript
```
7. Slice out the phrase *Days Of JavaScript* from *30 Days Of JavaScript*.
```js
let challange = "30 Days Of JavaScript";
console.log(challange.substring(0,3))//30
```
8. Check if the string contains a word __Script__ using __includes()__ method
```js
let challange = "30 Days Of JavaScript";
console.log(challange.includes("Script"))//true
```
9. Split the __string__ into an __array__ using __split()__ method
```js
let challange = "30 Days Of JavaScript";
console.log(challange.split())//[ '30 Days Of JavaScript' ]
```
10. Split the string 30 Days Of JavaScript at the space using __split()__ method
```js
let challange = "30 Days Of JavaScript";
console.log(challange.split(" "))//[ '30', 'Days', 'Of', 'JavaScript' ]
```
11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' __split__ the string at the comma and change it to an array.
```js
let challange = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(challange.split(","))
/*[
  'Facebook',
  ' Google',
  ' Microsoft',
  ' Apple',
  ' IBM',
  ' Oracle',
  ' Amazon'
]
*/
```
12. Change 30 Days Of JavaScript to 30 Days Of Python using __replace()__ method.
```js
let challange = '30 Days Of JavaScript';
console.log(challange.replace("JavaScript","Python"));//30 Days Of Python
```
13. What is character at index 15 in '30 Days Of JavaScript' string? Use __charAt()__ method.
```js
let challange = '30 Days Of JavaScript';
console.log(challange.charAt(15));//s
```
14. What is the character code of J in '30 Days Of JavaScript' string using __charCodeAt()__
```js
let challange = '30 Days Of JavaScript';
console.log(challange.charCodeAt(11));//74
```
15. Use __indexOf__ to determine the position of the first occurrence of __a__ in 30 Days Of JavaScript
```js
let challange = '30 Days Of JavaScript';
console.log(challange.indexOf('a'));//4
```
16. Use __lastIndexOf__ to determine the position of the last occurrence of __a__ in 30 Days Of JavaScript.
```js
let challange = '30 Days Of JavaScript';
console.log(challange.lastIndexOf('a'));//14
```
17. Use __indexOf__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
```js
let challange = 'You cannot end a sentence with because because because is a conjunction';
console.log(challange.indexOf('because'));//31
```
18. Use __lastIndexOf__ to find the position of the last occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
```js
let challange = 'You cannot end a sentence with because because because is a conjunction';
console.log(challange.lastIndexOf('because'));//47
```
19. Use __search__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
```js
let challange = 'You cannot end a sentence with because because because is a conjunction';
console.log(challange.search('because'));//31
```
20. Use __trim()__ to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
```js
let challange ='  30 Days Of JavaScript ';
console.log(challange.trim());//30 Days Of JavaScript
```
21. Use __startsWith()__ method with the string *30 Days Of JavaScript* and make the result true
```js
let challange ='*30 Days Of JavaScript*';
console.log(challange.startsWith('*'));//true
```
22. Use __endsWith()__ method with the string *30 Days Of JavaScript* and make the result true
```js
let challange ='*30 Days Of JavaScript*';
console.log(challange.endsWith('*'));//true
```
23. Use __match()__ method to find all the __a__’s in 30 Days Of JavaScript
```js
let challange ='*30 Days Of JavaScript*';
console.log(challange.match('a'));//[ 'a', index: 5, input: '*30 Days Of JavaScript*', groups: undefined ]
```
24. Use __concat()__ and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
```js
console.log('30 Days of'.concat('JavaScript'));//30 Days ofJavaScript
```
25. Use __repeat()__ method to print 30 Days Of JavaScript 2 times
```js
console.log('30 Days Of JavaScript'.repeat(2));//30 Days Of JavaScript30 Days Of JavaScript
```
### Exercise: Level 2

1. Using console.log() print out the following statement:

    ```sh
    The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
    ```
    
```js
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
```

2. Using console.log() print out the following quote by Mother Teresa:

    ```sh
    "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
    ```

```js
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");
```
3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
```js
console.log(typeof '10' == 10); //false
console.log(parseInt('10') == 10); //true
```
4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
```js
console.log(parseFloat('9.8') == 10); //false
console.log(Math.ceil(parseFloat('9.8')) == 10); //true
```
5. Check if 'on' is found in both python and jargon
```js
console.log("python".includes('on')); //true
console.log("jargon".includes('on')); //true
```
6. _I hope this course is not full of jargon_. Check if _jargon_ is in the sentence.
```js
console.log("I hope this course is not full of jargon. Check if jargon is in the sentence".includes('jargon')); //true
```
7. Generate a random number between 0 and 100 inclusively.
```js
console.log(Math.floor(Math.random()*101)); //0-100
```
8. Generate a random number between 50 and 100 inclusively.
```js
console.log(Math.floor(50+Math.random()*51)); //50-100
```
9. Generate a random number between 0 and 255 inclusively.
```js
console.log(Math.floor(Math.random()*251)); //0-250
```
10. Access the 'JavaScript' string characters using a random number.
```js
let string="JavaScript";
console.log(string[Math.floor(Math.random()*10)]);
```
11. Use console.log() and escape characters to print the following pattern.
    ```js
    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125
    ```

```js
for(let i=1;i<6;i++){
    console.log('%d %d %d %d %d',i, i**0, i**1, i**2, i**3);
}
```
12.  Use __substr__ to slice out the phrase __because because because__ from the following sentence:__'You cannot end a sentence with because because because is a conjunction'__

```js
let str ="You cannot end a sentence with because because because is a conjunction";
console.log(str.substr(0,30));
console.log(str.substr(55));
```

### Exercises: Level 3

1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word __love__ in this sentence.
```js
    let str ='Love is the best thing in this world. Some found their love and some are still looking for their love.';
    console.log(str.match(/love/gi).length);//3
```
2. Use __match()__ to count the number of all __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
```js
    let str ='You cannot end a sentence with because because because is a conjunction';
    console.log(str.match(/because/gi).length);//3
```
3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).

    ```js
        const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
    ```

```js
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

let tempSentence = sentence.split('@').join('');
tempSentence = tempSentence.split('%').join('');
tempSentence = tempSentence.split('&').join('');
tempSentence = tempSentence.split('#').join('');
tempSentence = tempSentence.split('$').join('');

console.log(tempSentence);

/*
    I am a teacher, and I love teaching;. There is nothing; as more rewarding as educating and empowering people. ;I found teaching more interesting than any other jobs. Does this motivate you to be a teacher!? This 30DaysOfJavaScript is also the result of love of teaching
*/

tempSentence = tempSentence.split('!').join('');
tempSentence = tempSentence.split(';').join('');
tempSentence = tempSentence.split('?').join('');
tempSentence = tempSentence.split('.').join('');
tempSentence = tempSentence.split(',').join('');

let arr = tempSentence.split(' ');

console.log(arr)

/*
    [
  'I',         'am',                 'a',
  'teacher',   'and',                'I',
  'love',      'teaching',           'There',
  'is',        'nothing',            'as',
  'more',      'rewarding',          'as',
  'educating', 'and',                'empowering',
  'people',    'I',                  'found',
  'teaching',  'more',               'interesting',
  'than',      'any',                'other',
  'jobs',      'Does',               'this',
  'motivate',  'you',                'to',
  'be',        'a',                  'teacher',
  'This',      '30DaysOfJavaScript', 'is',
  'also',      'the',                'result',
  'of',        'love',               'of',
  'teaching'
]
*/


let repsCount = {};
	for (let i = 0; i < arr.length; i++) {
		if (!repsCount[arr[i]]) {
			repsCount[arr[i]] = 1;
		} else {
			repsCount[arr[i]] = repsCount[arr[i]] + 1;
		}
	}
	let occursMore = [];
	for (let key in repsCount) {
		if (repsCount[key] > occursMore) {
			occursMore.push(key);
		}
	}
console.log(occursMore);// I
```
4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

```js
 let txt = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

let arraySalaries = txt.match(/\d+/g);

let salary = parseInt(arraySalaries[0]); 
let bonus = parseInt(arraySalaries[1]);
let course = parseInt(arraySalaries[2]);

let totalAnnualIncome =  (salary*12) + bonus + (course*12) ;

//He earns 250000 euros per year.
console.log("He earns "+ totalAnnualIncome + " euros per year.");
```
