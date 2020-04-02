## Closure exercises

1. Write a function, `nonsense` that takes an input `string`. This function contains another function, `blab` which alerts `string` and is immediately called inside the function `nonsense`. `blab` should look like this inside of the `nonsense` function:

	```javascript

	 function nonsense(string){
		var blab = function(){
		alert(string);
		};
		return blab();
	 }
	 ```

1. In your function, `nonsense`, change the immediate call to a setTimeout so that the call to `blab` comes after 2 seconds. The `blab` function itself should stay the same as before.
```js
	 function nonsense(string){
		var blab = function(){
		 setTimeout(function(){ alert(string); }, 2000);
		 
		};
		return blab();
	 }
```

1. Now, instead of calling `blab` inside of `nonsense`, return `blab` (without invoking it). Call `nonsense` with some string and store the returned value (the `blab` function) in a variable called `blabLater`. Call `nonsense` again with a different string and store the returned value in a variable called `blabAgainLater`.
```js
	 function nonsense(string){
		var blab = function(){
		 setTimeout(function(){ alert(string); }, 2000);
		 
		};
		return blab;
	 }
	 var blabLater= nonsense("akshay");
	 var blabAgainLater=nonsense("Titar");

```

1. Inspect `blabLater` and `blabAgainLater` in your console. Call them (they are functions!) and see what happens!
```js
	console.log(blabLater());
	console.log(blabAgainLater());


1. Write a function with a closure. The first function should only take one argument, someone's first name, and the inner function should take one more argument, someone's last name. The inner function should console.log both the first name and the last name.
	```javascript
	var lastNameTrier = function(firstName){
	   //does stuff

	    var innerFunction = function(lastName) {
			//does stuff
			return firstName+" "+lastName;
	    };
		//maybe returns something here
		return innerFunction;
	};
	var firstNameFarmer = lastNameTrier('Farmer'); //logs nothing
	firstNameFarmer('Brown'); //logs 'Farmer Brown'
	```
	This function is useful in case you want to try on different last names. For example, I could use firstName again with another last name:

	```javascript
	firstNameFarmer('Jane'); //logs 'Farmer Jane'
	firstNameFarmer('Lynne'); //logs 'Farmer Lynne'
	```


1. Create a `storyWriter` function that returns an object with two methods. One method, `addWords` adds a word to your story and returns the story while the other one, `erase`, resets the story back to an empty string. Here is an implementation:
	```javascript
	var  storyWriter =function(){
		var string='';
		
		return {
			addWords:function (str){
			
			string +=' '+str;
			console.log(string)

		},

		 erase: function() {
			 string='';
			 console.log(string);
		}
		};
	}

	
	var farmLoveStory = storyWriter();
	farmLoveStory.addWords('There was once a lonely cow.'); // 'There was once a lonely cow.'
	farmLoveStory.addWords('It saw a friendly face.'); //'There was once a lonely cow. It saw a friendly face.'

	var storyOfMyLife = storyWriter();
	storyOfMyLife.addWords('My code broke.'); // 'My code broke.'
	storyOfMyLife.addWords('I ate some ice cream.'); //'My code broke. I ate some ice cream.'
	storyOfMyLife.erase(); // ''

	```