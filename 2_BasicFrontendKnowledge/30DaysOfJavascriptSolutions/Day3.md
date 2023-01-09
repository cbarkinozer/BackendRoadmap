## 💻 Day 3: Exercises

### Exercises: Level 1

1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
```js
let firstName="barkin";
let lastName="ozer";
let country="Turkey";
let city="İstanbul";
let age="20";
let isMarried=false;
let year=2023;

console.log(typeof firstName); //string
console.log(typeof lastName); //string
console.log(typeof country); //string
console.log(typeof city); //string
console.log(typeof age); //string
console.log(typeof isMarried); //boolean
console.log(typeof year); //number
```
2. Check if type of '10' is equal to 10
```js
console.log(typeof '10' == 10);//false
```
3. Check if parseInt('9.8') is equal to 10
```js
console.log(parseInt(9.8) == 10);//false
```
4. Boolean value is either true or false.
   1. Write three JavaScript statement which provide truthy value.
   2. Write three JavaScript statement which provide falsy value.

```js
console.log(0 ==='');//false
console.log(typeof '10' == 10);//false
console.log(typeof '10' == 'number');//false

console.log(0 == ' ');//true
console.log('10' == 10);//true
console.log(typeof '10' == 'string');//true 
```
5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
   1. 4 > 3
   2. 4 >= 3
   3. 4 < 3
   4. 4 <= 3
   5. 4 == 4
   6. 4 === 4
   7. 4 != 4
   8. 4 !== 4
   9. 4 != '4'
   10. 4 == '4'
   11. 4 === '4'
   12. Find the length of python and jargon and make a falsy comparison statement.

```js
console.log(4>3);//true
console.log(4>=3);//true
console.log(4<3);//false
console.log(4<=3);//false
console.log(4==4);//true
console.log(4===4);//true
console.log(4!=4);//false
console.log(4!==4);//false
console.log(4!='4');//false
console.log(4==4);//true
console.log(4===4);//true
console.log('python'.length != 'jargon'.length); //false
```
6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
   1. 4 > 3 && 10 < 12
   2. 4 > 3 && 10 > 12
   3. 4 > 3 || 10 < 12
   4. 4 > 3 || 10 > 12
   5. !(4 > 3)
   6. !(4 < 3)
   7. !(false)
   8. !(4 > 3 && 10 < 12)
   9. !(4 > 3 && 10 > 12)
   10. !(4 === '4')
   11. There is no 'on' in both dragon and python

```js
//too easy passed
```
7. Use the Date object to do the following activities
   1. What is the year today?
   2. What is the month today as a number?
   3. What is the date today?
   4. What is the day today as a number?
   5. What is the hours now?
   6. What is the minutes now?
   7. Find out the numbers of seconds elapsed from January 1, 1970 to now.

```js
   console.log(new Date().getFullYear()); //2023
   console.log(new Date().getMonth()); //0
   console.log(new Date()); //2023-01-09T18:06:45.747Z
   console.log(new Date().getDay()); //1 (because sunday is 0)
   console.log(new Date().getHours()); //18
   console.log(new Date().getMinutes()); //12
   console.log(new Date().getTime()); //1673288054808
```

### Exercises: Level 2

1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

   ```sh
   Enter base: 20
   Enter height: 10
   The area of the triangle is 100
   ```

```js
let base = prompt('Enter base:', 'number goes here');
let height = prompt('Enter height:', 'height goes here');
console.log(height*base*0.5)//100
```
1. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

   ```sh
   Enter side a: 5
   Enter side b: 4
   Enter side c: 3
   The perimeter of the triangle is 12
   ```

```js
let a = prompt('Enter a:', 'a goes here');
let b = prompt('Enter b:', 'b goes here');
let c = prompt('Enter c:', 'c goes here');
console.log(parseInt(a)+parseInt(b)+parseInt(c))//12
```
1. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
```js
//repetetive question passed
```
1. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
```js
//repetetive question passed
```
1. Calculate the slope, x-intercept and y-intercept of y = 2x -2
```js
//repetetive question passed
```
1. Slope is m = (y<sub>2</sub>-y<sub>1</sub>)/(x<sub>2</sub>-x<sub>1</sub>). Find the slope between point (2, 2) and point(6,10)
```js
//repetetive question passed
```
1. Compare the slope of above two questions.
```js
//repetetive question passed
```
1. Calculate the value of y (y = x<sup>2</sup> + 6x + 9). Try to use different x values and figure out at what x value y is 0.
```js
//repetetive question passed
```
1. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

    ```sh
    Enter hours: 40
    Enter rate per hour: 28
    Your weekly earning is 1120
    ```

```js
//repetetive question passed
```
1. If the length of your name is greater than 7 say, your name is long else say your name is short.
```js
let name = prompt('Enter your name:', 'your name:');

if(name.length>7){
    console.log("Your name is long.");
}else{
    console.log("Your name is short.");
}
```
1. Compare your first name length and your family name length and you should get this output.

    ```js
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    ```

    ```sh
    Your first name, Asabeneh is longer than your family name, Yetayeh
    ```

```js
//repetetive question passed
```
1. Declare two variables _myAge_ and _yourAge_ and assign them initial values and myAge and yourAge.

   ```js
   let myAge = 250
   let yourAge = 25
   ```

   ```sh
   I am 225 years older than you.
   ```

```js
//repetetive question passed
```
1. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

    ```sh

    Enter birth year: 1995
    You are 25. You are old enough to drive

    Enter birth year: 2005
    You are 15. You will be allowed to drive after 3 years.
    ```

```js
//easy question passed
```
1. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just 80 years

   ```sh
   Enter number of years you live: 100
   You lived 3153600000 seconds.
   ```

```js
let age = prompt('Enter your age:', 'your age:');

let remainingTime= 31556926*(80-age);

console.log("You can live maximum this amount of seconds:");

while(remainingTime>0){
    console.log(remainingTime);
    new Promise(resolve => setTimeout(resolve, 1000));
    remainingTime--;
}
```
1. Create a human readable time format using the Date time object
   1. YYYY-MM-DD HH:mm
   2. DD-MM-YYYY HH:mm
   3. DD/MM/YYYY HH:mm

### Exercises: Level 3

1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
   1. YYY-MM-DD HH:mm eg. 20120-01-02 07:05
```js

```
