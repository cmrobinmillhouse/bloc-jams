
        var forEach = function (array, callback, scope) {
          for (var i = 0; i < array.length; i++) {
            callback.call(scope, i, array[i]); 
          }
        };




/*

Write a forEach function in the utilities.js file. 

It should:
Use a loop to go through all elements in the array.
Execute a callback for each element.

var forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};


For educational purposes, DO NOT use the built-in Array.prototype.forEach function mentioned in the callback resource. The goal is to write your own implementation.


Replace the for loop in the animatePoints function with a forEach block and confirm that the selling points still animate properly.


1. classic for loop (real life example) *************************

var divs = document.querySelectorAll('div'), i;

        for (i = 0; i < divs.length; ++i) {
          divs[i].style.color = "green";
        }


2. forEach ********************************
        var a = ["a", "b", "c"];
        a.forEach(function(entry) {
            console.log(entry);
        });
        
3. classic for loop example for syntax *********************************

        var a = ["a", "b", "c"];
        var index;
        for (index = 0; index < a.length; ++index) {
            console.log(a[index]);
        }

4. what the hell is this ??? ********************************
    if (!Array.prototype.forEach)
{
   Array.prototype.forEach = function(fun , thisp)
   {
      var len = this.length;
      if (typeof fun != "function")
      throw new TypeError();
      
      var thisp = arguments[1];
      for (var i = 0; i < len; i++)
      {
         if (i in this)
         fun.call(thisp, this[i], i, this);
      }
   };
}

5.and another example *******************************************

var arr = [ "a", "b", "c" ];
    for(var i=0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    
6. and a possible solution found at CSS tricks.com

// forEach method, could be shipped as part of an Object Literal/Module

var forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

// Usage:
// optionally change the scope as final parameter too, like ECMA5

var myNodeList = document.querySelectorAll('li');

forEach(myNodeList, function (index, value) {
  console.log(index, value); // passes index + value back!
});

7.and yet another example ******************************************

var forEach = Function.prototype.call.bind(Array.prototype.forEach);

Then I use it like this:

forEach(myNodeList, function (val, index, obj) {
});

*/

