### Exercise: Level 1

```js
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
```

1. Declare an _empty_ array;
```js
const arr = Array()
```
3. Declare an array with more than 5 number of elements
```js
const arr = Array(6)
```
4. Find the length of your array
```js
const arr = Array(6)
console.log(arr.length);//6
```
5. Get the first item, the middle item and the last item of the array
```js
const arr = [1,2,3,4,5,6]
console.log(arr[0],arr[arr.length/2],arr[arr.length-1]);//1 4 6
```
6. Declare an array called _mixedDataTypes_, put different data types in the array and find the length of the array. The array size should  be greater than 5
```js
```
7. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
```js
```
8. Print the array using _console.log()_
```js
```
9. Print the number of companies in the array
```js
```
10. Print the first company, middle and last company
```js
``
11. Print out each company
```js
```
12. Change each company name  to uppercase one by one and print them out
```js
```
13. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
```js
```
14. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is _not found_
```js
```
15. Filter out companies which have more than one 'o' without the filter method
```js
```
16. Sort the array using _sort()_ method
```js
```
17. Reverse the array using _reverse()_ method
```js
```
18. Slice out the first 3 companies from the array
```js
```
19. Slice out the last 3 companies from the array
```js
```
20. Slice out the middle IT company or companies from the array
```js
```
21. Remove the first IT company from the array
```js
```
22. Remove the middle IT company or companies from the array
```js
```
23. Remove the last IT company from the array
```js
```
24. Remove all IT companies
```js
```

### Exercise: Level 2

1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
```js
```
1. First remove all the punctuations and change the string to array and count the number of words in the array

    ```js
    let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
    console.log(words)
    console.log(words.length)
    ```

    ```sh
    ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
  
    13
    ```
```js
```

1. In the following shopping cart add, remove, edit items

    ```js
    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    ```

   - add 'Meat' in the beginning of your shopping cart if it has not been already added
   ```js
   ```
   - add Sugar at the end of you shopping cart if it has not been already added
   ```js
   ```
   - remove 'Honey' if you are allergic to honey
   ```js
   ```
   - modify Tea to 'Green Tea'
   ```js
   ```
1. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
```js
```
1. In the webTechs array check if Sass exists in the array  and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
```js
```
1. Concatenate the following two variables and store it in a fullStack variable.

    ```js
    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    const backEnd = ['Node','Express', 'MongoDB']
  
    console.log(fullStack)
    ```

    ```sh
    ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
    ```
```js
```
### Exercise: Level 3

1. The following is an array of 10 students ages:

    ```js
    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    ```


    - Sort the array and find the min and max age
    ```js
    ```
    - Find the median age(one middle item or two middle items divided by two)
    ```js
    ```
    - Find the average age(all items divided by number of items)
    ```js
    ```
    - Find the range of the ages(max minus min)
    ```js
    ```
    - Compare the value of (min - average) and (max - average), use _abs()_ method
    ```js
    ```
1.Slice the first ten countries from the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
```js
```
1. Find the middle country(ies) in the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
```js
```
2. Divide the countries array into two equal arrays if it is even.  If countries array is not even , one more country for the first half.
```js
```
