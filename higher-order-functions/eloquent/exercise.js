// Challenge 1. Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];
var myNewArray = arrays.reduce((prev, curr)=> {
  return prev.concat(curr);
});
// Your code here.
// → [1, 2, 3, 4, 5, 6]

// Challenge 2. Your own loop
// Your code here.
function loop(n) {
  for (let i = n; i >0; i--) {
    console.log(i);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

// Challenge 3. Everything
//array method
function every(array, test) {
  return array.some(test)
}



function every(array, test) {
  for (let element of array) {
    if (test(element) === false) {
      return false;
    }
  }
  return true;
}



console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

// Challenge 4. Dominant writing direction
function dominantDirection(text) {
  // Your code here.
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
