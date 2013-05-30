var imgCopiee;

$(document).ready(function(){
	
	// Exercice1
	$("#non").mouseover(intervertir);
	$("#oui").click(afficher);
	
	
	// Exercice 2
	$("#suivre").click(function(){
		$("body").mousemove(function(event){
			$("#curseur").css({"top":event.clientY,"left":event.clientX});
			$("#curseur").show();			
		})
	});
	
	$("#curseur").hide();
	
	// Excercice 3
	$("#panel img").mouseenter(function(){
		$(this).animate({
			"height":50,
			"width":50
		});
	}).mouseleave(function(){
		$(this).animate({
			"height":25,
			"width":25
		});
	});
	
	// Exercice 4
	$("#menuGauche").hide();
	$("#menuGauche").slideToggle();
	
	//Exercice 5
	$("#chope img").click(function(event){
		imgCopiee=$(this);
		event.stopPropagation();
	});
	
	$("body").click(function(event){
		if (imgCopiee) {
			
			imgCopiee.css({
				"position":"absolute",
				"left":event.clientX ,
				"top":event.clientY 
			});
			
			imgCopiee=undefined;
		}
	})
	
	$("#chope img").dblclick(function(){
		imgCopiee=undefined;
		var r=confirm("Souhaitez-vous effacer l'image ?");
		if (r) {
			$(this).remove();
		}
	});
});


function intervertir(){
	var bouton=$("#lesBoutons input:last");
	bouton.remove();
	$("#lesBoutons").prepend(bouton);
	if (bouton.val()=="non" ){
		$("#non").mouseover(intervertir);	
	}
	else
	{
		$("#oui").click(afficher);		
	}
}


function afficher(){
	$("#message").text("C'est ce que nous pensions");
}