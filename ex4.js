//adding event listener first
var event1 = document.getElementById("button1");
event1.addEventListener('click', addButton, false);

var people = []

people = ['ronny', 'bobby', 'ricky', 'mike'];

document.getElementById("demo").innerHTML = people;

function addButton() 
{
  people.splice(2,0,"TELEPHONY");
   document.getElementById("demo").innerHTML = people;  
}