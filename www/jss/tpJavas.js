var pays=new Array(
                   	["Allemagne",10],
                   	["France",11],
                   	["Belgique",15]
                   );

var tableau="<tr><td>Pays</td><td>Frais</td></tr>",select="";
//var tableau="",select="";

coul=new Array("FFFFCC","CCFFFF");

for ( var int = 0; int < pays.length; int++) {
	tableau += "<tr style=\"background-color:#" + coul[int % 2] + "\"><td>" + pays[int][0] + "</td><td class=\"frais toto\">" + pays[int][1] +  "</td></tr>";
	select += "<option value=\"" + pays[int][1]  + "\">" + pays[int][0] + "</option>";
}


$(document).ready(demarrer)

afficher=function(){
		
}

function ouvrirFenetre(){
	if (decompte!=0)
		{
			decompte--;
			var decHTML=document.getElementById("decompte");
			decHTML.innerHTML=decompte;
			
			setTimeout("ouvrirFenetre()",1000);
		}
	else 
		{
		window.open(
					"index.html","Test","location=no,menubar=no,resizable=no,scrollbar=no,status=no,toolbar=no,top=10,left=10,width=300,height=300"
				);
		}
}

var decompte=0;

function maFonctionSource(event){
	var textedestination=document.getElementById("textedestination");

	var source=document.getElementById(event.target.id);
	textedestination.innerHTML=source.value;
	
}

function demarrer(){
	
	var texteSource=document.getElementById("textesource");
	texteSource.onkeyup=maFonctionSource;

	var btnItalique=document.getElementById("italique");
	btnItalique.onclick=function(){
		var textesource=document.getElementById("textesource"),				
			debut=textesource.selectionStart,
			fin=textesource.selectionEnd,
			chainedebut=textesource.value.substring(0,debut),
			chainefin=textesource.value.substring(fin,textesource.value.length),				
			text= textesource.value.substring(debut,fin),
			textedestination=document.getElementById("textedestination"),
			intermediaire=chainedebut + "<i>" + text + "</i>" + chainefin;
		
		
		textesource.value =	intermediaire;	
		
		textedestination.innerHTML=chainedebut + "<i>" + text + "</i>" + chainefin;
	}
	
	var btnGras=document.getElementById("gras");
	btnGras.onclick=function(){
		var textesource=document.getElementById("textesource"),				
			debut=textesource.selectionStart,
			fin=textesource.selectionEnd,
			chainedebut=textesource.value.substring(0,debut),
			chainefin=textesource.value.substring(fin,textesource.value.length),				
			text= textesource.value.substring(debut,fin),
			textedestination=document.getElementById("textedestination"),
			intermediaire=chainedebut + "<b>" + text + "</b>" + chainefin;
		
		
		textesource.value =	intermediaire;	
		
		textedestination.innerHTML=chainedebut + "<b>" + text + "</b>" + chainefin;
	}

	
	var decHTML=document.getElementById("decompte");
	decHTML.innerHTML=decompte;
	//setTimeout("ouvrirFenetre()",1000);
	var tableauHTML=document.getElementById("monTableau");
	tableauHTML.innerHTML=tableau;

	var tableau2HTML=document.getElementById("monTableau2");
	tableau2HTML.innerHTML=tableau;
	
	var selectHTML=document.getElementById("selection");
	selectHTML.innerHTML=select;

	
	// JQUERY
	/*$("#ttc").bind("click",function(){
		var ht=$("#ht").val();
		var taux=$("#taux").val();
		
		if (!isNumber(ht)) {
			alert("Le montant HT n'est pas numerique !")
			return 
		}
	
		if (!isNumber(taux)) {
			alert("Le taux n'est pas numerique !")
			return 
		}		
		ttc(ht,taux);
		$("#monTableau .frais").bind("click",function(){
			alert("coucou");
		})
	});*/

	
	
	
	//Javascript

	var evtTableau=document.getElementById("monTableau2");
	var evtClasseFrais=evtTableau.getElementsByClassName("frais toto");
	for (var i=0;i< evtClasseFrais.length; i++ ){
		evtClasseFrais[i].onclick=function(){
			if (this.innerHTML.indexOf("strong") == -1 )
			{
				this.innerHTML="<strong>" + this.innerHTML + "</strong>";
			} 
			else
			{
				this.innerHTML= this.innerText;
			}
		}
	}
		
	document.getElementById("ttc").onclick=function(evt){
		var ht=document.getElementById("ht").value,
		    taux=document.getElementById("taux").value;
		
		evt.stopPropagation();
		evt.cancelBubble=true;
		if (!isNumber(ht)) {
			alert("Le montant HT n'est pas numerique !")
			return 
		}
	
		if (!isNumber(taux)) {
			alert("Le taux n'est pas numerique !")
			return 
		}		
		ttc(ht,taux);

	}
	
	// bouton pdf
	var btnPDF=document.getElementById("cherchePDF");
	btnPDF.onclick=function(){
		var html="";
		for (i=0;i<navigator.plugins.length;i++){
			var text=navigator.plugins[i].name ;
			if (text.indexOf("PDF") != -1 )
			{
				html += "<p style=\"color:red; margin: 0px; padding: 0px\">"  + text + "</p>";
			}
			else
				{
			html += "<p style=\"margin: 0px; padding: 0px \">"  + text + "</p>";
			}
			
		}
		var resultat=document.getElementById("resultat");
		resultat.innerHTML=html;
		
		// JQUERY
		// $("#resultat").innerHTML=html;
	}
}

function isNumber(n) {
	  return !isNaN(parseFloat(n)) && isFinite(n);
	}

function ttc(totalHT,taux){
	alert (parseFloat(totalHT)*(parseFloat(taux)/100) + parseFloat(totalHT));	
}

function retourPopup(a,b) {
	var ht=document.getElementById("ht"),
    	taux=document.getElementById("taux");
	ht.value=a;
	taux.value=b;
	ttc(a,b);
	
}


function lancer(){
	decompte=parseInt(document.getElementById("inc").value);
	setTimeout("ouvrirFenetre()",1000);
	var decHTML=document.getElementById("decompte");
	decHTML.innerHTML=decompte;
}

