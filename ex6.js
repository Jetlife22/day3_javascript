//in this case, you need to have something in a room to look for if you're going to walk into a room to look for it.
var countries = ['England', 'France', 'Italy', 'Mexico', 
    'Poland', 'Russia', 'China', 'Greece', 'Egypt', 'India'];
//event listeners first
var event1 = document.getElementById("button1");
event1.addEventListener('click', clickButton, false);



//declare vars to be used
var findMe;



function clickButton()
{
    //pick up user input when button is clicked
    var userInput1 = document.getElementById("input1").value;
    //use the indexOf method (with userinput involved) to find whayt position you were looking for
    findMe = countries.indexOf(userInput1);


    
    //display the position on the "demo" div
    document.getElementById("demo").innerHTML = findMe;
    
            
        if (findMe === -1) 
    {
        document.getElementById("demo").innerHTML = "Cant find that";
    }
    


}