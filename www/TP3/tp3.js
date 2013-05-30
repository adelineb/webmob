var mode,
	imgCopiee,
	imgUndo;


$(document).ready(function(){
	
	$("input[type='radio']").click(function(){
		mode=$(this).attr("id");
		var fonction=$(this).data("fonction");
		if (fonction){
			// transforme la chaine de caractère en appel de la fonction correspondante
			window[fonction]();
		}
		event.stopPropagation();
	})
	
	
	$("#chope img").click(function(event){
		switch (mode){
		case "copier":
			imgCopiee=$(this);
			$(this).addClass("copier");
			break;
		case "droite":
			tourner($(this), parseInt($("#angle").val()))
			break;		
		case "gauche":
			tourner($(this), -parseInt( $("#angle").val()))
			break;
		}
		event.stopPropagation();
	});
	
	$("body").click(function(event){
		if ((imgCopiee) && (mode="deplacer")) {
			
			undo.position=$(imgCopiee).css("position");
			undo.left=$(imgCopiee).css("left");
			undo.top=$(imgCopiee).css("top");
			undo.typeUndo="deplacer";
			
			imgCopiee.css({
				"position":"absolute",
				"left":event.clientX ,
				"top":event.clientY 
			});
			
			imgCopiee.removeClass("copier");
			imgUndo=imgCopiee;
			imgCopiee=undefined;
		}
	})
	
	$("#chope img").dblclick(supprimer);
	
	$("#angle").hide();
	
	$("#undo").click(undo);
	$("#redo").click(redo);
});

function afficherAngle(){
	$("#angle").show();
}


function redo(){
	//$("<br/>").append("<h2/>").appendTo("#test");
	$("h2").text("toto");
	$("#test").append($("<br/>").append("<h2/>"));
}

function cacherAngle(){
	$("#angle").hide();
}

function tourner(image,angle){
	image.rotate(angle);	
	undo.angle=-angle;
	undo.typeUndo="rotation";
	imgUndo=image;
}


function supprimer(){
	imgCopiee=undefined;
	var r=confirm("Souhaitez-vous effacer l'image ?");
	if (r) {
		imgUndo=$(this);
		undo.typeUndo="supprimer";
		if ($(this).prev().length!=0){
			undo.parent=$(this).prev();	
			undo.before=false;
		}
		else
		{
			undo.parent=$(this).parent();
			undo.before=true;
		}
		
		$(this).remove();
	}
}

function undo(){
	switch(undo.typeUndo){
	case "deplacer":			
		imgUndo.css({
			"position":undo.position,
			"left":undo.left ,
			"top":undo.top 
		});
		break;
	case "supprimer":
		if (undo.before){
			$(undo.parent).prepend(imgUndo);
		}
		else {
			$(undo.parent).after(imgUndo);
		}
		imgUndo.click(supprimer);
		break;
	case "rotation":		
		imgUndo.rotate(undo.angle);
		break;

	}
	
};

