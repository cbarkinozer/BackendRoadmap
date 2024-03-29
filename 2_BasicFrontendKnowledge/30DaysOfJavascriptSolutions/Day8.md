## 💻 Exercises

### Exercises: Level 1

1. Create an empty object called dog
```js
const dog = {};
```
3. Print the the dog object on the console
```js
const dog = {};
console.log(dog);
```
4. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return _woof woof_
```js
const dog ={
  name: 'Kuchu',
  legs: 4,
  color: 'black',
  age: 2,
  bark: function(){
    return 'woof woof';
  },
}
```
5. Get name, legs, color, age and bark value from the dog object
```js
const dog ={
  name: 'Kuchu',
  legs: 4,
  color: 'black',
  age: 2,
  bark: function(){
    return 'woof woof';
  },
}
console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark())
```
6. Set new properties the dog object: breed, getDogInfo
```js
const dog ={
  name: 'Kuchu',
  legs: 4,
  color: 'black',
  age: 2,
  breed: 'Rottweiler',
  bark: function(){
    return 'woof woof';
  },
  getDogInfo: function(){
    return 'A never barking, lovely female dog.';
  }
}
```

### Exercises: Level 2

```js
   const users = {
     Alex: {
       email: 'alex@alex.com',
       skills: ['HTML', 'CSS', 'JavaScript'],
       age: 20,
       isLoggedIn: false,
       points: 30
     },
     Asab: {
       email: 'asab@asab.com',
       skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
       age: 25,
       isLoggedIn: false,
       points: 50
     },
     Brook: {
       email: 'daniel@daniel.com',
       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
       age: 30,
       isLoggedIn: true,
       points: 50
     },
     Daniel: {
       email: 'daniel@alex.com',
       skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
       age: 20,
       isLoggedIn: false,
       points: 40
     },
     John: {
       email: 'john@john.com',
       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
       age: 20,
       isLoggedIn: true,
       points: 50
     },
     Thomas: {
       email: 'thomas@thomas.com',
       skills: ['HTML', 'CSS', 'JavaScript', 'React'],
       age: 20,
       isLoggedIn: false,
       points: 40
     },
     Paul: {
       email: 'paul@paul.com',
       skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
       age: 20,
       isLoggedIn: false,
       points: 40
     }
   }
```

1. Find the person who has more skills in the users object.
```js
let max = 0;
let userWithMaxSkill;
for (const user in users) {
  if (users.hasOwnProperty(user)) {
      if(users[user].skills.length>max){
          max = users[user].skills.length;
          userWithMaxSkill = user;
      }
  }
}
console.log(`${userWithMaxSkill}: ${max}`);
```
2. Count logged in users, count users having greater than equal to 50 points from the following object.

```js
    
let loggedUsers =[];
let usersWithMoreThan50Points = [];
for (const user in users) {
  if (users.hasOwnProperty(user)) {
      if(users[user].isLoggedIn == true){
          loggedUsers.push(user);
      }
      if(users[user].points >= 50){
         usersWithMoreThan50Points.push(user); 
      }
      
  }
}
console.log(` Users that are logged in:  ${loggedUsers}`);
console.log(` Users with more than 50 points:  ${usersWithMoreThan50Points}`);
```

3. Find people who are MERN stack developer from the users object
```js
let usersThatUseMernStack =[];
for (const user in users) {
  if (users.hasOwnProperty(user)) {
      if(Object.values(users[user].skills).includes("MongoDB")&&
      Object.values(users[user].skills).includes("Express")&&
      Object.values(users[user].skills).includes("React")&&
      Object.values(users[user].skills).includes("Node")){
          usersThatUseMernStack.push(user);
      }
  }
}
console.log(` Users that use the MERN stack:  ${usersThatUseMernStack}`);
```
4. Set your name in the users object without modifying the original users object
```js
const barkin = new Object();
barkin.Barkin = {
    email: '',
    skills: ['Java','Spring','JavaScript'],
    age: 23,
    isLoggedIn: false,
    points: 60
};
Object.assign(users,barkin);
for (const user in users) {
  if (users.hasOwnProperty(user)) {
      console.log(user);
  }
}
```
5. Get all keys or properties of users object
```js
const entries = Object.entries(users)
console.log(entries)
```
6. Get all the values of users object
```js
let values = Object.values(users);
console.log(values);
```
7. Use a countries object to print a country name, capital, populations and languages.
```js
   const countries = {
     Turkey: {
       capital: 'Ankara',
       languages: ['Turkish'],
       population: 84000000,
     }
   }
console.log(countries);
```

### Exercises: Level 3

1. Create an object literal called _personAccount_. It has _firstName, lastName, incomes, expenses_ properties and it has _totalIncome, totalExpense, accountInfo,addIncome, addExpense_ and _accountBalance_ methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
```js
```
2. **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()

  ```js
      const users = [
      {
          _id: 'ab12ex',
          username: 'Alex',
          email: 'alex@alex.com',
          password: '123123',
          createdAt:'08/01/2020 9:00 AM',
          isLoggedIn: false
      },
      {
          _id: 'fg12cy',
          username: 'Asab',
          email: 'asab@asab.com',
          password: '123456',
          createdAt:'08/01/2020 9:30 AM',
          isLoggedIn: true
      },
      {
          _id: 'zwf8md',
          username: 'Brook',
          email: 'brook@brook.com',
          password: '123111',
          createdAt:'08/01/2020 9:45 AM',
          isLoggedIn: true
      },
      {
          _id: 'eefamr',
          username: 'Martha',
          email: 'martha@martha.com',
          password: '123222',
          createdAt:'08/01/2020 9:50 AM',
          isLoggedIn: false
      },
      {
          _id: 'ghderc',
          username: 'Thomas',
          email: 'thomas@thomas.com',
          password: '123333',
          createdAt:'08/01/2020 10:00 AM',
          isLoggedIn: false
      }
      ];

      const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
      ],
      likes: []
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy']
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy']
    }
  ]
  ```

2. Imagine you are getting the above users collection from a MongoDB database.
    a. Create a function called signUp which allows user to sign up in the users collection. If user exists, inform the user that he has already an account.  
```js
    function signUp(user){
    
    for (const u in users) {
  if (users.hasOwnProperty(u)) {
      if(users[u]._id ===user._id){
          return "You already have an account.";
      }
  }
}
    users.push(user);
    return user;
    
}

const user = {
          _id: 'zy9q7X',
          username: 'seneca',
          email: 'seneca@romanempire.com',
          password: '123123',
          createdAt:'08/01/49 9:00 AM',
          isLoggedIn: false
}

console.log(signUp(user));
console.log(signUp(user));
```

    b. Create a function called signIn which allows user to sign in to the application  
```js
    function signUp(user){
    
    for (const u in users) {
  if (users.hasOwnProperty(u)) {
      if(users[u].email ==user.email &&
         users[u].password == user.password){
          return "Welcome " + users[u].username;
      }else{
          return "User does not exist or wrong credentials.";
      }
  }
}
}

const user1 = {
          email: 'alex@alex.com',
          password: '123123',
}
const user2 = {
          email: 'seneca@romanempire.com',
          password: '123123',
}

console.log(signUp(user2));//User does not exist or wrong credentials.
console.log(signUp(user1));//Welcome Alex
    
```
3. The products array has three elements and each of them has six properties.
    a. Create a function called rateProduct which rates the product
```js
      const products = [
  {
    id: 1,
    name: 'Product A',
    description: 'This is product A',
    price: 10.99,
    rating:0,
    likes: []
  },
  {
    id: 2,
    name: 'Product B',
    description: 'This is product B',
    price: 19.99,
    rating:0,
    likes: []
  },
  {
    id: 3,
    name: 'Product C',
    description: 'This is product C',
    price: 5.99,
    rating: 0,
    likes: []
  }
];

function rateProduct(products, productIndex, ratingValue) {
  // Get the specified product from the products array
  const product = products[productIndex];
  
  // Add a new rating object to the ratings array
  product.rating = ratingValue;
  
  return product;
}

console.log(rateProduct(products, 0, 4));
/*
    {
  id: 1,
  name: 'Product A',
  description: 'This is product A',
  price: 10.99,
  rating: 4,
  likes: []
}
*/
```
b. Create a function called averageRating which calculate the average rating of a product  
```js
    const products = [
  {
    id: 1,
    name: 'Product A',
    description: 'This is product A',
    price: 10.99,
    rating:1,
    likes: []
  },
  {
    id: 2,
    name: 'Product B',
    description: 'This is product B',
    price: 19.99,
    rating:2,
    likes: []
  },
  {
    id: 3,
    name: 'Product C',
    description: 'This is product C',
    price: 5.99,
    rating: 3,
    likes: []
  }
];

function averageRating(products, productIndex) {
  // Get the specified product from the products array
  const product = products[productIndex];
  
  // Get the ratings array of the product
  const ratings = []
  for (p of products) {
      ratings.push(p.rating);
  }
  
  // Calculate the average rating value
  if (ratings.length === 0) {
    return 0;
  } else {
    const sum = ratings.reduce((a, b) => a + b, 0);
    return sum / ratings.length;
  }
}

const productIndex = 0; // the index of the product you want to calculate the average rating for
const avgRating = averageRating(products, productIndex);
console.log(avgRating); // outputs the average rating value for the specified product
/*
2
*/
```


4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
```js
const products = [
  {
    id: 1,
    name: 'Product A',
    description: 'This is product A',
    price: 10.99,
    rating:1,
    likes: false
  },
  {
    id: 2,
    name: 'Product B',
    description: 'This is product B',
    price: 19.99,
    rating:2,
    likes: false
  },
  {
    id: 3,
    name: 'Product C',
    description: 'This is product C',
    price: 5.99,
    rating: 3,
    likes: false
  }
];

function likeProduct(products, productIndex) {
  const product = products[productIndex];
  if (product.isLiked) {
    // If the product is already liked, set isLiked to false to remove the like
    product.isLiked = false;
    console.log(`${product.name} is unliked.`);
  } else {
    // If the product is not liked, set isLiked to true to add the like
    product.isLiked = true;
    console.log(`${product.name} is liked.`);
  }
}

const productIndex = 0; // the index of the product to like or unlike
likeProduct(products, productIndex); // like or unlike the specified product
likeProduct(products, productIndex); // like or unlike the specified product
/*
Product A is liked.
Product A is unliked.
*/
```
