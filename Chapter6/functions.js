//Function Definitions

function displayGreeting()
{
	document.write("Hello there!");
}

function displayPlayerScore(theScore)
{
	//var playerScore = 1000;
	theScore += 1000; //theScore = theScore + 1000
	document.write("<br/>Player Score: "+ theScore);
}

function addTheseNumbers(x,y)
{
	//document.write(x+y);
	return (x+y);
}