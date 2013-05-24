function Set(cle, valeur) {
	if (localStorage)
		localStorage.setItem(cle, valeur)
}

function Get(cle) {
	if (localStorage)
		localStorage.getItem(cle)
}

function clear(){
	if (localStorage)
		localStorage.clear;	
}

function reset(cle){
	if (localStorage)
		localStorage.removeItem(cle);	
}

function recordFormSearch(){
	console.log(window.rech.auteur.value)
	Set("auteur",window.rech.auteur.value)
	Set("nationalite",window.rech.nationalite.value)
	Set("titre",window.rech.titre.value)
	Set("annee",window.rech.annee.value)
	Set("prix",window.rech.prix.value)
	Set("disponibilite",window.rech.disponibilite.value)
	reset("titre")
}



function init(){
	var x=document.getElementById("positionGPS");
	  if (navigator.geolocation)
	  {
	    navigator.geolocation.getCurrentPosition(_set,_onError);
	  }
	  else 
	  {
		  x.innerHTML="Geolocation is not supported by this browser.";
	  }
}

function _set(position){
	var x=document.getElementById("positionGPS");
	Set("Latitude",position.coords.latitude);
	Set("longitude",position.coords.longitude);
	x.innerHTML="Latitude = " + position.coords.latitude + " <br> Longitude = " + position.coords.longitude
}

function _onError(error){
	var x=document.getElementById("positionGPS");
	  switch(error.code) 
	    {
	    case error.PERMISSION_DENIED:
	      x.innerHTML="User denied the request for Geolocation."
	      break;
	    case error.POSITION_UNAVAILABLE:
	      x.innerHTML="Location information is unavailable."
	      break;
	    case error.TIMEOUT:
	      x.innerHTML="The request to get user location timed out."
	      break;
	    case error.UNKNOWN_ERROR:
	      x.innerHTML="An unknown error occurred."
	      break;
	    }	
}

function getRangeValue()
{
	var lavaleur=document.getElementById("valeur");
	return lavaleur.value;
}

function updateValue(){
	// Recupere la balise input de type range
	//$("#valeur").innerHTML='otot";
		
	
	// Recupere le "conteneur" d'affichage
	var affichage=document.getElementById("mavaleur");
	
	// Insérer la valeur dans le conteneur
	affichage.innerHTML=getRangeValue();
}

function update(){
	navigator.geolocation.getCurrentPosition(_set,_onError)
}