// Challenge 1
function addTwo(num) {
    return num+2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
function addS(word) {
    return word+"s";
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));

// Challenge 3
function multiplyByTwo(n){;
  return n*2;
}
function map(arr,multiplyByTwo){
   var array=[];
   for(let i=0;i<arr.length;i++){
     array.push(multiplyByTwo(arr[i]));
   }
   return array
}



// console.log(map([1, 2, 3], addTwo));

// Challenge 4
function char(char){
  return String(char);
}
function forEach(letters,char){
  var alphabet="";
  for (let i=0;i<letters.length;i++){
    alphabet +=char(letters[i])
  }
  return alphabet;
}

function forEach(letters,char)
var alphabet = '';
var letters = ['a', 'b', 'c', 'd'];

// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
// function mapWith(array, callback) {}

function multiplyByTwo(n){;
  return n*2;
}


function mapWith([1,2,3,4,5],multiplyByTwo){
  var array=[]
  arr.forEach(ele=> {
    array.push(multiplyByTwo(ele))

  });
  return array;

//Extension 2
// function reduce(array, callback, initialValue) {}
function reduce(nums,add,0){
  var current=0;
  for(let element of nums){
    current=add(current,element)
  }
  return current
}

var nums = [4, 1, 3];
var add = function(a, b) { return a + b; }
reduce(nums, add, 0);   //-> 8

//Extension 3
function intersection(...arrays) {
  return arrays.reduce((acc,cv)=>{
    acc.forEach((element,index)=>{
      if(cv.indexOf(element) == -1){
        acc.splice(index,1)
      }
      })
      return acc;
    })
  }




// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(...arrays) {
  return arrays.reduce((acc,cv)=>{
    cv.forEach(element=>{
      if(acc.indexOf(element)== -1){
        acc.push(element);
      }
    })
    return acc;
  },[])

}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1,array2,callback){
  var obj={};
  return array1.reduce((acc,cv,i)=>{
    if(callback(cv)=== array2[i]){
      obj[cv]=array2[i]
    }
    return obj;
  },{})
}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6

function multiMap(arrVals, arrCallbacks) {
  return arrVals.reduce((acc,cv)=>{
    acc[cv]=arrCallbacks.reduce((ele,val)=>{
      ele.push(val(cv))
      return ele
    },[])
    return acc
  },{})
  
}



// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
