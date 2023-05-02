### Exercises: Level 1

```js
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
```

1. Explain the difference between **_forEach, map, filter, and reduce_**.
```js
forEach executes a provided function for each array element, map creates a new array with the results of calling a provided function on every element, filter creates a new array with all elements that pass the condition implemented by the provided function, and reduce executes a provided function for each value of the array and returns a single value.
```
2. Define a callback function before you use it in forEach, map, filter and reduce.
```js
function square(num) {
  return num * num;
}
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(square);
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
```
3. Use **_forEach_** to console.log each country in the countries array.
```js
countries.forEach(function(country) {
  console.log(country);
});
```
4. Use **_forEach_** to console.log each name in the names array.
```js
names.forEach(function(name) {
  console.log(name);
});
```
5. Use **_forEach_** to console.log each number in the numbers array.
```js
numbers.forEach(function(number) {
  console.log(number);
});
```
6. Use **_map_** to create a new array by changing each country to uppercase in the countries array.
```js
const countriesUpperCase = countries.map(function(country) {
  return country.toUpperCase();
});
```
7. Use **_map_** to create an array of countries length from countries array.
```js
const countriesLength = countries.map(function(country) {
  return country.length;
});
```
8. Use **_map_** to create a new array by changing each number to square in the numbers array
```js
const squaredNumbers = numbers.map(function(number) {
  return number * number;
});
```
9. Use **_map_** to change to each name to uppercase in the names array
```js
const namesUpperCase = names.map(function(name) {
  return name.toUpperCase();
});
```
10. Use **_map_** to map the products array to its corresponding prices.
```js
const prices = products.map(function(product) {
  return product.price;
});
```
11. Use **_filter_** to filter out countries containing **_land_**.
```js
const countriesWithoutLand = countries.filter(function(country) {
  return !country.includes('land');
});
```
12. Use **_filter_** to filter out countries having six character.
```js
const countriesWithoutSixChar = countries.filter(function(country) {
  return country.length !== 6;
});
```
13. Use **_filter_** to filter out countries containing six letters and more in the country array.
```js
const result = countries.filter(country => country.length < 6);
```
14. Use **_filter_** to filter out country start with 'E';
```js
const result = countries.filter(country => !country.startsWith('E'));
```
15. Use **_filter_** to filter out only prices with values.
```js
const result = products.filter(product => typeof product.price === 'number');
```
16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
```js
function getStringLists(arr) {
  return arr.filter(item => typeof item === 'string');
}

const arr = [1, 'apple', {}, 'banana', true, 'pear'];
const result = getStringLists(arr);
```
17. Use **_reduce_** to sum all the numbers in the numbers array.
```js
const result = numbers.reduce((acc, cur) => acc + cur, 0);
```
18. Use **_reduce_** to concatenate all the countries and to produce this sentence: **_Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries_**
```js
const result = countries.reduce((acc, cur, index, arr) => {
  if (index === arr.length - 1) {
    return acc + 'and ' + cur + ' are north European countries.';
  } else {
    return acc + cur + ', ';
  }
}, '');
```
19. Explain the difference between **_some_** and **_every_**
```js
The difference between some and every is that some returns true if at least one element in the array satisfies the condition provided by the callback function, while every returns true only if all elements in the array satisfy the condition.
```
20. Use **_some_** to check if some names' length greater than seven in names array
```js
const isGreaterThanSeven = names.some(name => name.length > 7);
```
21. Use **_every_** to check if all the countries contain the word land
```js
const containsLand = countries.every(country => country.includes("land"));
```
22. Explain the difference between **_find_** and **_findIndex_**.
```js
The difference between find and findIndex is that find returns the first element in the array that satisfies the condition provided by the callback function, while findIndex returns the index of the first element in the array that satisfies the condition. If no element satisfies the condition, find returns undefined, while findIndex returns -1.
```
23. Use **_find_** to find the first country containing only six letters in the countries array
```js
const sixLetterCountry = countries.find(country => country.length === 6);
```
24. Use **_findIndex_** to find the position of the first country containing only six letters in the countries array
```js
const sixLetterCountryIndex = countries.findIndex(country => country.length === 6);
```
25. Use **_findIndex_** to find the position of **_Norway_** if it doesn't exist in the array you will get -1.
```js
const norwayIndex = countries.findIndex(country => country === "Norway");
```
26. Use **_findIndex_** to find the position of **_Russia_** if it doesn't exist in the array you will get -1.
```js
const russiaIndex = countries.findIndex(country => country === "Russia");
```
### Exercises: Level 2

1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
1. Find the sum of price of products using only reduce reduce(callback))
1. Declare a function called **_categorizeCountries_** which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
1. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
1. Declare a **_getFirstTenCountries_** function and return an array of ten countries. Use different functional programming to work on the countries.js array
1. Declare a **_getLastTenCountries_** function which which returns the last ten countries in the countries array.
1. Find out which _letter_ is used many _times_ as initial for a country name from the countries array (eg. Finland, Fiji, France etc)

### Exercises: Level 3

1. Use the countries information, in the data folder. Sort countries by name, by capital, by population
1. \*\*\* Find the 10 most spoken languages:

   ````js
   // Your output should look like this
   console.log(mostSpokenLanguages(countries, 10))
   [
   {country: 'English',count:91},
   {country: 'French',count:45},
   {country: 'Arabic',count:25},
   {country: 'Spanish',count:24},
   {country:'Russian',count:9},
   {country:'Portuguese', count:9},
   {country:'Dutch',count:8},
   {country:'German',count:7},
   {country:'Chinese',count:5},
   {country:'Swahili',count:4}
   ]

   // Your output should look like this
   console.log(mostSpokenLanguages(countries, 3))
   [
   {country: 'English',count: 91},
   {country: 'French',count: 45},
   {country: 'Arabic',count: 25},
   ]```

   ````

2. \*\*\* Use countries_data.js file create a function which create the ten most populated countries

   ````js
   console.log(mostPopulatedCountries(countries, 10))

   [
   {country: 'China', population: 1377422166},
   {country: 'India', population: 1295210000},
   {country: 'United States of America', population: 323947000},
   {country: 'Indonesia', population: 258705000},
   {country: 'Brazil', population: 206135893},
   {country: 'Pakistan', population: 194125062},
   {country: 'Nigeria', population: 186988000},
   {country: 'Bangladesh', population: 161006790},
   {country: 'Russian Federation', population: 146599183},
   {country: 'Japan', population: 126960000}
   ]

   console.log(mostPopulatedCountries(countries, 3))
   [
   {country: 'China', population: 1377422166},
   {country: 'India', population: 1295210000},
   {country: 'United States of America', population: 323947000}
   ]
   ```

   ````

3. \*\*\* Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.

   ```js
   const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

   console.log('Count:', statistics.count()) // 25
   console.log('Sum: ', statistics.sum()) // 744
   console.log('Min: ', statistics.min()) // 24
   console.log('Max: ', statistics.max()) // 38
   console.log('Range: ', statistics.range() // 14
   console.log('Mean: ', statistics.mean()) // 30
   console.log('Median: ',statistics.median()) // 29
   console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
   console.log('Variance: ',statistics.var()) // 17.5
   console.log('Standard Deviation: ', statistics.std()) // 4.2
   console.log('Variance: ',statistics.var()) // 17.5
   console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
   ```

   ```sh
   console.log(statistics.describe())
   Count: 25
   Sum:  744
   Min:  24
   Max:  38
   Range:  14
   Mean:  30
   Median:  29
   Mode:  (26, 5)
   Variance:  17.5
   Standard Deviation:  4.2
   Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
   ```
