function nonsense(string){
    var blab = function(){
    alert(string);
    };
    return blab();
 }



 function nonsense(string){
    var blab = function(){
     setTimeout(function(){ alert(string); }, 2000);
     
    };
    return blab();
 }


 function nonsense(string){
    var blab = function(){
     setTimeout(function(){ alert(string); }, 2000);
     
    };
    return blab;
 }
 var blabLater= nonsense("akshay");
 var blabAgainLater=nonsense("Titar");

 console.log(blabLater());
 console.log(blabAgainLater());


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

 firstNameFarmer('Jane'); //logs 'Farmer Jane'
 firstNameFarmer('Lynne'); //logs 'Farmer Lynne'


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