//declaring  variables each for a separate function (shift = delete first = shiftButton in HTML)
var shiftEvent = document.getElementById("shiftButton");
shiftEvent.addEventListener('click', myShift,false);

//declaring  variables each for a separate function (unshift = add first = unshiftButton in HTML)
var unshiftEvent = document.getElementById("unshiftButton");
unshiftEvent.addEventListener('click', myUnshift,false);

//declaring two variables each for a separate function (pop = delete last = popButton in HTML)
var popEvent = document.getElementById("popButton");
popEvent.addEventListener('click', myPop,false);

//declaring two variables each for a separate function (push = add last = pushButton in HTML)
var pushEvent = document.getElementById("pushButton");
pushEvent.addEventListener('click', myPush,false);


var people = []

people = ['ronny', 'bobby', 'ricky', 'mike'];

document.getElementById("demo").innerHTML = people;

function myShift ()
{
   people.shift();
   document.getElementById("demo").innerHTML = people;
}

function myUnshift ()
{
   people.unshift("New Edition");
   document.getElementById("demo").innerHTML = people;
}

function myPop ()
{
   people.pop();
   document.getElementById("demo").innerHTML = people;
}

function myPush ()
{
   people.push("Candy");
   document.getElementById("demo").innerHTML = people;
}