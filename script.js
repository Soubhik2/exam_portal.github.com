let Button = document.getElementById("Button1");

Button.addEventListener('click',chack);

function chack(){
	let num = document.getElementById("Text1").value;
	alert("hello world");
	if(num%2 == 0)
	{
		document.getElementById("result").innerHTML = "Even number";
	}
	else
	{
		document.getElementById("result").innerHTML = "Odd number";
	}
}
