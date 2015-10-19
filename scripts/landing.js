            var animatePoints = function () {
            
                var points = document.getElementsByClassName("point");
                
                var revealPoint = function (index) {
                     points[index].style.opacity = 1;
                     points[index].style.transform = "scaleX(1) translate(0)";
                     points[index].style.msTransform = "scaleX(1) translateY(0)";
                     points[index].style.WebkitTransform = "scaleX(1) translate(0)";
                }
                
                for (i = 0; i < points.length; i++){
                 revealPoint(i);   
                }

            };
                
            animatePoints();
                
    /*var revealFirstPoint = function() {
        points[0].style.opacity = 1;
        points[0].style.transform = "scaleX(1) translate(0)";
        points[0].style.msTransform = "scaleX(1) translateY(0)";
        points[0].style.WebkitTransform = "scaleX(1) translate(0)";
    };

    var revealSecondPoint = function() {
        points[1].style.opacity = 1;
        points[1].style.transform = "scaleX(1) translateY(0)";
        points[1].style.msTransform = "scaleX(1) translateY(0)";
        points[1].style.WebkitTransform = "scaleX(1) translateY(0)";
    };

    var revealThirdPoint = function() {
        points[2].style.opacity = 1;
        points[2].style.transform = "scaleX(1) translateY(0)";
        points[2].style.msTransform = "scaleX(1) translateY(0)";
        points[2].style.WebkitTransform = "scaleX(1) translateY(0)";
    };
            
    revealFirstPoint();

    revealSecondPoint();

    revealThirdPoint();*/
                
            


/*

function howMany (selectItem) {
  var numberSelected=0

  for (var i=0; i < selectItem.options.length; i++) {
     if (selectItem.options[i].selected == true)
       numberSelected++;
  }

  return numberSelected
}   


var revealPoint = function (i) {
for (i=0; i < points.length; i++) {}
    points[i] 
};


 var bottoms = document.getElementsByClassName("a1 a4 a7 a9 a11 a12");
 
for (var i = 0; i < bottoms.length; i++){
    bottoms[i].style.visibility='visible';
}


Instead of writing:
text += cars[0] + "<br>"; 
text += cars[1] + "<br>"; 
text += cars[2] + "<br>"; 
text += cars[3] + "<br>"; 
text += cars[4] + "<br>"; 
text += cars[5] + "<br>";

You can write:
for (i = 0; i < cars.length; i++) { 
    text += cars[i] + "<br>";
} */
           