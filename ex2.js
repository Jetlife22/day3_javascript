//adding event listener first
var event1 = document.getElementById("button1");
event1.addEventListener('click', addButton, false);

//declaring an empty array (array literal)
var things = [];

function addButton()
{
    //declaring a variable that links with an element outside in the html page
    var showMembers = document.getElementById("demoBox");
    
    //using the access modifier "." in the "colors" array properties to get the push ability, which enables us to add whever we type in the "input" element, and then solidifying it with a ".value" at the end to state it exists.
    //The push() method adds one or more elements to the end of an array and returns the new length of the array.
    things.push(document.getElementById("input").value);
    
    //the join property joins all of the lements of an array into a string going ,downwards because of the <br>.
    showMembers.innerHTML = things.join('<br/>');
    
    //to show the length of an array we must add the length property to the array name using the access modifier
    document.getElementById("demoBox1").innerHTML = things.length;
}

