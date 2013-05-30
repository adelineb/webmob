$(document).ready(function(){
	navigator.geolocation.getCurrentPosition(_set,_onError);
})

function _set(position){
	Set("Latitude",position.coords.latitude);
	Set("longitude",position.coords.longitude);
	var cc= position.coords.latitude +',' + position.coords.longitude;
	$("#geomap").gmap('addMarker',{'position': cc, 'bounds': true})
}

function _onError(error){
/*	  switch(error.code) 
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
	    }*/	
}

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