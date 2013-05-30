
function depart()
{
	var dragText=document.getElementById("drag"),
		departX=0,
		departY=0,
		sourisX=0,
		sourisY=0,
		body=document.getElementById("ladiv");
	
	body.onmouseup=function()
	{
		body.onmousemove=undefined;
	}
	
	dragText.onmousedown=function(event)
	{
		
		sourisX = event.clientX;
		sourisY = event.clientY;
		var elt=document.elementFromPoint(sourisX,sourisY);
		departX=parseInt(elt.style.left);
		departY=parseInt(elt.style.top);
		
		var body=document.getElementById("ladiv");
		body.onmousemove=mousemove;
	}
	
		
	mousemove=function(event)
	{
		var xEnCours=event.clientX,
			yEnCours=event.clientY,
			nouveauX=0,
			nouveauY=0,
			elt=document.getElementById("drag");
		
		nouveauX=departX + (xEnCours - sourisX);
		nouveauY=departY + (yEnCours - sourisY);		
		
		var body=document.getElementById("ladiv"),
			divX=parseInt(body.style.width)-parseInt(elt.style.width),
			divY=parseInt(body.style.height)-parseInt(elt.style.height);
	
			console.log("nouveauX" + nouveauX);
			console.log("nouveauY" + nouveauY);
			console.log("divX" + divX);
			console.log("divY" + divY);
		
		if (nouveauX>divX) 
			nouveauX=divX;
		
		if (nouveauY>divY) 
			nouveauY=divY;
		
		if (nouveauX<0) 
			nouveauX=0;
	
		if (nouveauY<0) 
			nouveauY=0;
	
		elt.style.left=nouveauX + "px";
		elt.style.top=nouveauY +"px" ;
	}

}

function couleur(nomCouleur)
{
	var body=document.getElementById("ladiv");
	body.style.backgroundColor=nomCouleur;
}