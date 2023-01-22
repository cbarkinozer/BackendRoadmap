### Exercises: Level 1


1. Declare a function _fullName_ and it print out your full name.
```js
function fullName(){
  return "barkin ozer";
}
console.log(fullName()); 
```
2. Declare a function _fullName_ and now it takes firstName, lastName as a parameter and it returns your full - name.
```js
function fullName(firstName,lastName){
  return firstName+" "+lastName;
}
console.log(fullName("Barkın","Ozer")); 
```
3. Declare a function _addNumbers_ and it takes two parameters and it returns sum.
```js
function sum(first,second){
  return first+second;
}
console.log(sum(1,2)); 
```
4. An area of a rectangle is calculated as follows: _area = length x width_. Write a function which calculates _areaOfRectangle_.
```js
function areaOfRectangle(length,width){
  return length*width;
}
console.log(areaOfRectangle(1,2)); 
```
5. A perimeter of a rectangle is calculated as follows: _perimeter= 2x(length + width)_. Write a function which calculates _perimeterOfRectangle_.
```js
function perimeterOfRectangle(length,width){
  return 2*(length+width);
}
console.log(perimeterOfRectangle(1,2)); 
```
6. A volume of a rectangular prism is calculated as follows: _volume = length x width x height_. Write a function which calculates _volumeOfRectPrism_.
```js
function volumeOfRectPrism(length,width,height){
  return length*width*height;
}
console.log(volumeOfRectPrism(1,2,3)); 
```
7. Area of a circle is calculated as follows: _area = π x r x r_. Write a function which calculates _areaOfCircle_
```js
//easy passed
```
8. Circumference of a circle is calculated as follows: _circumference = 2πr_. Write a function which calculates _circumOfCircle_
```js
//easy passed
```
9. Density of a substance is calculated as follows:_density= mass/volume_. Write a function which calculates _density_.
```js
//easy passed
```
10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, _speed_.
```js
//easy passed
```
11. Weight of a substance is calculated as follows: _weight = mass x gravity_. Write a function which calculates _weight_.
```js
//easy passed
```
12. Temperature in oC can be converted to oF using this formula: _oF = (oC x 9/5) + 32_. Write a function which convert oC to oF _convertCelsiusToFahrenheit_.
```js
//easy passed
```
13. Body mass index(BMI) is calculated as follows: _bmi = weight in Kg / (height x height) in m2_. Write a function which calculates _bmi_. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is _underweight, normal, overweight_ or _obese_ based the information given below.

    - The same groups apply to both men and women.
    - _Underweight_: BMI is less than 18.5
    - _Normal weight_: BMI is 18.5 to 24.9
    - _Overweight_: BMI is 25 to 29.9
    - _Obese_: BMI is 30 or more

```js
//easy passed
```
14. Write a function called _checkSeason_, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
```js
//easy passed
```
15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

    ```js
    console.log(findMax(0, 10, 5))
    10
    console.log(findMax(0, -10, -2))
    0
    ```
```js
//easy passed
``` 
### Exercises: Level 2

1. Linear equation is calculated as follows: _ax + by + c = 0_. Write a function which calculates value of a linear equation, _solveLinEquation_.
```js
//easy passed
```
1. Quadratic equation is calculated as follows: _ax2 + bx + c = 0_. Write a function which calculates value or values of a quadratic equation, _solveQuadEquation_.

    ```js
    console.log(solveQuadratic()) // {0}
    console.log(solveQuadratic(1, 4, 4)) // {-2}
    console.log(solveQuadratic(1, -1, -2)) // {2, -1}
    console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
    console.log(solveQuadratic(1, 0, -4)) //{2, -2}
    console.log(solveQuadratic(1, -1, 0)) //{1, 0}
    ```

```js
function solveQuadratic(...args){
    let length = args.length;
    if(length === 0){
        return "The root of  thequadratic equation is "+0;
    }else if(length ===3){
        let a = args[0];
        let b = args[1];
        let c = args[2];
        
        let root1 =0;
        let root2=0;
        
        let discriminant = b * b - 4 * a * c;
        if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    // result
    return`The roots of quadratic equation are ${root1} and ${root2}`;
}

// condition for real and equal roots
else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);

    // result
    return`The roots of quadratic equation are ${root1} and ${root2}`;
}

// if roots are not real
else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    // result
    return
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
}
    }else{
        return null;
    }
}

console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}

/*
The root of  thequadratic equation is 0
The roots of quadratic equation are -2 and -2
The roots of quadratic equation are 2 and -1
The roots of quadratic equation are -3 and -4
The roots of quadratic equation are 2 and -2
The roots of quadratic equation are 1 and 0
*/

```
1. Declare a function name _printArray_. It takes array as a parameter and it prints out each value of the array.
```js
function printArray(arr){
    for(e of arr){
        console.log(e);
    }
}

const arr = [1,'a','abcd',true]
printArray(arr);
```
1. Write a function name _showDateTime_ which shows time in this format: 08/01/2020 04:08 using the Date object.

    ```sh
    showDateTime()
    08/01/2020 04:08
    ```

```js
function showDateTime(){
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minute = date.getMinutes();
    
    
    
    if(month<10){
        month = '0'+month;
    }
    if(day<10){
        day = '0'+day;
    }
    if(hour<10){
        hour = '0'+hour;
    }
    if(minute<10){
        minute = '0'+minute;
    }
    
    return month+'/'+day+'/'+year+' '+hour+':'+minute;
}

console.log(showDateTime()); //01/19/2023 17:28
```
1. Declare a function name _swapValues_. This function swaps value of x to y.

    ```js
    swapValues(3, 4) // x => 4, y=>3
    swapValues(4, 5) // x = 5, y = 4
    ```

```js
function swapValues(x,y){
    let temp = x;
    x= y;
    y= temp;
    console.log(x,y);
}
swapValues(3,4); //4,3
```
1. Declare a function name _reverseArray_. It takes array as a parameter and it returns the reverse of the array (don't use method).

    ```js
    console.log(reverseArray([1, 2, 3, 4, 5]))
    //[5, 4, 3, 2, 1]
    console.log(reverseArray(['A', 'B', 'C']))
    //['C', 'B', 'A']
    ```

```js
const reverseArray = arr => {
  const newArr = [];
  for (let i=arr.length-1;i>=0;i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']));
//['C', 'B', 'A']
```
1. Declare a function name _capitalizeArray_. It takes array as a parameter and it returns the - capitalizedarray.
```js
//easy passed
```
1. Declare a function name _addItem_. It takes an item parameter and it returns an array after adding the item
```js
//easy passed
```
1. Declare a function name _removeItem_. It takes an index parameter and it returns an array after removing an item
```js
//easy passed
```
1. Declare a function name _sumOfNumbers_. It takes a number parameter and it adds all the numbers in that range.
```js
//easy passed
```
1. Declare a function name _sumOfOdds_. It takes a number parameter and it adds all the odd numbers in that - range.
```js
//easy passed
```
1. Declare a function name _sumOfEven_. It takes a number parameter and it adds all the even numbers in that - range.
```js
//easy passed
```
1. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

    ```sh
    evensAndOdds(100);
    The number of odds are 50.
    The number of evens are 51.
    ```

```js
//easy passed
```
1. Write a function which takes any number of arguments and return the sum of the arguments

    ```js
    sum(1, 2, 3) // -> 6
    sum(1, 2, 3, 4) // -> 10
    ```

```js
//easy passed
```
1. Writ a function which generates a _randomUserIp_.
```js
//easy passed
```
1. Write a function which generates a _randomMacAddress_
```js
//easy passed
```
1. Declare a function name _randomHexaNumberGenerator_. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

    ```sh
    console.log(randomHexaNumberGenerator());
    '#ee33df'
    ```

```js
//easy passed
```
1. Declare a function name _userIdGenerator_. When this function is called it generates seven character id. The function return the id.

    ```sh
    console.log(userIdGenerator());
    41XTDbE
    ```
```js
function userIdGenerator(length){
    let id= '';
    let characters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        id += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return id;
}

console.log(userIdGenerator(7));//7GSFlHb
```

### Exercises: Level 3

1. Modify the _userIdGenerator_ function. Declare a function name _userIdGeneratedByUser_. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

    ```sh
    userIdGeneratedByUser()
    'kcsy2
    SMFYb
    bWmeq
    ZXOYh
    2Rgxf
    '
    userIdGeneratedByUser()
    '1GCSgPLMaBAVQZ26
    YD7eFwNQKNs7qXaT
    ycArC5yrRupyG00S
    UbGxOFI7UXSWAyKN
    dIV0SSUTgAdKwStr
    '
    ```
```js
function userIdGeneratedByUser(){
    
    let characterCount = prompt("Please enter your character count:");
    let idCount = prompt("Please enter id count:");
    
    let idArray = [idCount];
    
    let id= '';
    let characters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    
    for(let i=0;i<idCount;i++){
        
        for ( let i = 0; i < characterCount; i++ ) {
            id += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        
        idArray.push(id);
        id="";
    }
    
    
    
    return idArray.slice(1);
}

console.log(userIdGeneratedByUser());
/*
    Please enter your character count:7
    Please enter id count:3
    [ 'Hv2Vxk2', 'RLs1BBl', '6frsxTQ' ]
*/
```
1. Write a function name _rgbColorGenerator_ and it generates rgb colors.

    ```sh
    rgbColorGenerator()
    rgb(125,244,255)
    ```
```js
//pass
```
1. Write a function **_arrayOfHexaColors_** which return any number of hexadecimal colors in an array.
```js
//pass
```
1. Write a function **_arrayOfRgbColors_** which return any number of RGB colors in an array.
```js
//pass
```
1. Write a function **_convertHexaToRgb_** which converts hexa color to rgb and it returns an rgb color.
```js
//pass
```
1. Write a function **_convertRgbToHexa_** which converts rgb to hexa color and it returns an hexa color.
```js
//pass
```
1. Write a function **_generateColors_** which can generate any number of hexa or rgb colors.

    ```js
    console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
    console.log(generateColors('hexa', 1)) // '#b334ef'
    console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
    console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
    ```
```js
//pass
```
1. Call your function _shuffleArray_, it takes an array as a parameter and it returns a shuffled array
```js
function shuffleArray(arr){
    let temp = undefined;
    
    for(let i=0;i<arr.length;i++){
        
        let headOrTails = Math.floor(Math.random()*2);
        
        if(headOrTails === 0){
            let temp = arr.splice(i,1);
            arr.unshift(temp[0]);
        }
        
    }   
    return arr;
}

let arr =[1,2,3,4,5]
console.log(shuffleArray(arr));
/*
4 different run outputs:
    [ 3, 2, 1, 4, 5 ]
    [ 4, 1, 2, 3, 5 ]
    [ 4, 3, 2, 1, 5 ]
    [ 5, 3, 1, 2, 4 ]
    [ 1, 2, 3, 4, 5 ]
*/
```
1. Call your function _factorial_, it takes a whole number as a parameter and it return a factorial of the number
```js
```
1. Call your function _isEmpty_, it takes a parameter and it checks if it is empty or not
```js
```
1. Call your function _sum_, it takes any number of arguments and it returns the sum.
```js
```
1. Write a function called _sumOfArrayItems_, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
```js
```
1. Write a function called _average_, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
```js
```
1. Write a function called _modifyArray_ takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

    ```js
    console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
    ```
    ```sh
    ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
    ```
    ```js
    console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
    ```
    ```sh
    ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
    ```
    ```js
    console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
    ```
    ```sh
      'Not Found'
    ```
```js
```
1. Write a function called _isPrime_, which checks if a number is prime number.
```js
```
1. Write a functions which checks if all items are unique in the array.
```js
```
1. Write a function which checks if all the items of the array are the same data type.
```js
```
1. JavaScript variable name does not support special characters or symbols except \$ or \_. Write a function **isValidVariable** which check if a variable is valid or invalid variable.
```js
```
1. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
    ```js
    sevenRandomNumbers()
    [(1, 4, 5, 7, 9, 8, 0)]
    ```
```js
```
1. Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
```js
```
