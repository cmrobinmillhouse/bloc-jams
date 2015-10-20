
function forEach(array, callback) {
    for (var i = 0; i < array.length; i++) {
    callback(array[i]);
    }

}



/*


function forEach(array, callback) {

}

function forEach(array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

forEach(ingredients, cut);


Write a forEach function in the utilities.js file. 

It should:
Use a loop to go through all elements in the array.
Execute a callback for each element. 


For educational purposes, DO NOT use the built-in Array.prototype.forEach function mentioned in the callback resource. The goal is to write your own implementation.


Replace the for loop in the animatePoints function with a forEach block and confirm that the selling points still animate properly.


1. classic for loop (real life example) *************************

var divs = document.querySelectorAll('div'), i;

        for (i = 0; i < divs.length; ++i) {
          divs[i].style.color = "green";
        }


2. forEach********************************
        var a = ["a", "b", "c"];
        a.forEach(function(entry) {
            console.log(entry);
        });
        
3. classic for loop example for syntax*********************************

        var a = ["a", "b", "c"];
        var index;
        for (index = 0; index < a.length; ++index) {
            console.log(a[index]);
        }


*/