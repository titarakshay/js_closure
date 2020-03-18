## Closure Exercises

1. Write a function called `multiplyBy` that takes a `number` as an argument and returns a function. Returned function takes another `number` as an argument and returns the multiplication of both the numbers.

```js
// Your code goes here
function multiplyBy(number1){
  function inner(number2){
    return number1*number2
  }
  return inner
}

const double = multiplyBy(2);
const final = double(15); // final should be 30
```

2. Write a function called `fullName` that takes a string `firstName` as an argument and returns a function. Returned function takes another string `lastName` as an argument and returns full name.

```js
// Your code goes here
function fullName(str1){
  function inner(str2){
    return str1+str2;
  }
  return inner;
}

const name = fullName("Will");
const final = name("Smith"); // final should be "Will Smith"
```

3. Write a function called `isInBetween` which takes two parameter `a` and `b` and returns a function. When you call the returned function with any number it returns `true` if the value is in between `a` and `b`.

```js
function isInBetween(a, b) {
  function inner(c){
    if(c >= a && c <= b ){
      return true;
    }else{
      return false;
    }
  }
  return inner;
}

const isChild = isInBetween(10, 100);
isChild(21); // true
isChild(45); // true
isChild(103); // false
```

4. Write a function call `letsWishThem` that take one parameter `string` called `greeting` and returns a fucntion that takes another argument called `message`.

```js
function letsWishThem(greeting) {
  // your code goes here
  function inner(message){
    return greeting+ " "+message;
  }
  return inner;
}

const callWithHey = letsWishThem("Hey");
const callWithHello = letsWishThem("Hello");
callWithHey("Arya"); // Hey Arya
callWithHello("How Are You?"); // Hello How Are You?
```

5. Write a function called `addGame` which takes a string (name of the game) and returns a function calling that will increment the score by one and print something like `Score of Basketball is 1`.

```js
function addGame(gameName) {
  // your code goes here
    var num=0
  function inner(){
    return `your score of ${gameName} is ${num=num+1}`; 
  }
  return inner;
}

// Output
const hockey = addGame("Hockey");
hockey(); // Your score of Hockey is 1
hockey(); // Your score of Hockey is 2
const cricket = addGame("Cricket");
cricket(); // Your score of Cricket is 2
cricket(); // Your score of Cricket is 2
```

6. Write a function called `getCard` which takes one of these options (club, spade, heart, dimond) returns a function calling that function returns random card (2,3,4,5,6,7,8,9,10,J, Q, K, A) of that suit.

```js
function getCard(suit) {
  var items =[2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
  // your code goes here
  function inner(){
    return ` Card is : ${items[Math.floor(Math.random()*items.length)]} ${suit}`;
  }
  return inner;
}



// Output
const randomClub = addGame("Club");
randomClub(); // Card is: 6 Club
randomClub(); // Card is: A Club
const randomSpade = addGame("Spade");
randomSpade(); // Card is: 6 Spade
randomSpade(); // Card is: A Spade
```
