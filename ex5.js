//adding event listener first
var event1 = document.getElementById("button1");
event1.addEventListener('click', clickButton, false);

//display and declare all variable to be used in one line to save time on writing the var, maybe?
var people, text, pLength, i;
//array
people = ['ronny', ' bobby', ' ricky', ' mike', ' stevey', ' eric', ' bee', ' rakim',' alio', ' myMan!!'];
//array length
pLength = people.length;

//The <ul> tag defines an unordered (bulleted) list.
text = "<ul>";

//document.getElementById("demo").innerHTML = people;

function clickButton() 
{
for (i = 0; i < pLength; i++);
{
    //Use the <ul> tag together with the <li> tag to create unordered lists.
    text += "<li>" + people + "</li>";
}
text += "</ul>";
document.getElementById("demo").innerHTML = text;
   
}


