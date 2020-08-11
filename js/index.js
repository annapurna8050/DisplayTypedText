function displayTypedText()
{	
	if(document.getElementById("putText").value.length==0)
	{
		var s="please enter something";
	
		document.getElementById("ifEmpty").innerHTML=s;
		
		console.log(s);

	}


	else
	{
		
	document.getElementById("getText").innerHTML=document.getElementById("putText").value;
	
	document.getElementById("putText").value="";
	document.getElementById("ifEmpty").innerHTML="";
	}
}
