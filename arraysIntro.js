//ARRAY LITERAL
//declaring an empty array (array literal)
var colors  = []

//declare an array with things in it
colors = ['white','black','pink'];

//ARRAY CONSTRUCTOR
//declaring an array in one line
var cars = ['bmw','volvo','merc'];

//UPDATING AN ARRAY
//Updating the values in an array by accessing the colors array, adding the [2] to it to indicate that I would like to call on that item, then used the equal sign to set it to a different color 'beige'.
colors[2] = 'beige';

//Locating an element inside the html file by calling it in the brackets and "" and setting it to a variable inside the JS file 
var el = document.getElementById('demo');

//TIME TO ADD THE UPDATE TO THE PAGE, the textContent is accessed via the variable declared to link to the html element, after which it is set to the updated color 
el.textContent = colors[2];

//TIME TO MAKE IT COME OUT TO THE HTML, before it was updated to the array system, now it needs to be shown on the screen.
document.getElementById("demo").innerHTML = colors[2];

/*for (var i = 0; i < items.length; i++)
    {
        textString += items [i] + " ";
        document.getElementById("result").innerHTML = textString;
    }*/