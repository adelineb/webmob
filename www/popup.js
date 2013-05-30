
var decompte=5;

function fermer(){
	if (decompte !=0){
		decompte--;
		var decHTML=document.getElementById("decompte");
		decHTML.innerHTML=decompte;
		setTimeout('fermer()',1000)
	}
	else
	{			
		this.opener.retourPopup("99","19.6");
		close();
	}
}


function onVaFermer(){
	var decHTML=document.getElementById("decompte");
	decHTML.innerHTML=decompte;
	setTimeout('fermer()',1000)
}