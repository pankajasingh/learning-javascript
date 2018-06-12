function greetingJavascript()
{
	var x = prompt('greet me');
	if(x)
	{
		console.log(x);
	}
	else
	{
		window.alert("Please enter something");
		greetingJavascript();
	}
	
}

console.log(greetingJavascript());
