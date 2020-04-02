// Create the execution context flow of the this function

var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
})();

counter.value(); // first time value is 0 
counter.increment(); // after  increment value become 1
counter.increment(); // again after increment now the value has become 2
counter.value(); // now the value is 2 ;
counter.decrement(); // now we decrement the value  by -1  
counter.value(); // now after decrement value is become 1
