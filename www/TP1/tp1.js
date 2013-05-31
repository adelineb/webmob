var heure=0,
	minute=0,
	seconde=0,
	leChrono,
	start=true;

$(document).ready(function(){
	// Exercice1
	$("#bouton1").click(function(){
		$("#bouton1").attr("size","20");
	});
	
	$("#bouton2").click(function(){
		$("body").css("backgroundColor","red");
	});
	
	// Exercice 2
	$(".qualite").hide();
	$(".confirmer").hide();
	
	/*$(".dernier").click(function(){
		var motPasse=$("#newpwd").val();
		$(".qualite").removeClass("fort moyen faible");
		$(".qualite").addClass(controlerQualite(motPasse));
		$(".qualite").text(controlerQualite(motPasse));
		$(".qualite").show();
	});*/
	
	$("#newpwd").keyup(function(){
		var motPasse=$("#newpwd").val();
		$(".qualite").removeClass("fort moyen faible");
		var force=controlerQualite(motPasse);
		$(".qualite").addClass(force);
		$(".qualite").text(force);
		$(".qualite").show();		
		$(".confirmer").show();
	});
	
	$("#confpwd").keyup(function(){
		var motPasse=$("#newpwd").val();		
		var motPasseConf=$("#confpwd").val();
		if (motPasse==motPasseConf) 
		{
			$(".confirmer").hide(1000);
		}
		else
		{
			$(".confirmer").show();
		}
	})
	
	
	$("#ok").click(function(){
		var test=$("#motpasse").serialize();
	});
	
	// Excercice 3
	$("#start").click(function(){
		if (start) {
			leChrono = setInterval(chrono,1000);
			start=false;
			$("#start").val("stop");
		}
		else {
			clearInterval(leChrono);
			start=true;
			$("#start").val("start");
		}
		
	});

	$("#reset").click(function(){
		clearInterval(leChrono);
		heure=0;
		minute=0;
		seconde=0;
		afficherTemps();
	});

});

function chrono() {
	seconde++;
	if (seconde>59){
		seconde=0;
		minute++;
		if (minute>59){
			seconde=0;
			minute=0;
			heure++;
		}
	}		
	afficherTemps();
};

function afficherTemps(){
	$("#chrono").text(to2chiffre(heure) + ":" + to2chiffre(minute) + ":" + to2chiffre(seconde) );	

}

function to2chiffre(number){
	var retour="00"+number;
	return retour.substr(retour.length-2,2);
}

function controlerQualite(motPasse){
	var regexFort = "[A-Z]"                  + //commence par une majuscule
	               "(?=(.*[a-z]){2,})"   + //contient au moins deux minuscule
	               "(?=(.*[0-9]){2,})"   , //contient au moins deux chiffres
	               
	                                  
	    regexMoyen ="(?=(.*[a-z]){2,})"   + //contient au moins deux minuscule
        			"(?=(.*[0-9]){2,})",    //contient au moins deux chiffres
       reFort=new RegExp(regexFort),
       reMoyen=new RegExp(regexMoyen);
	
	   if ((motPasse.match(reFort)) && (motPasse.length>=8)) {
		   return "fort";
	   }
		
	   if ((motPasse.match(reMoyen)) && (motPasse.length>=8)) {
		   return "moyen";
	   }
	   
	   return "faible";
	
}