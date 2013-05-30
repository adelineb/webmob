$(document).ready(function(){
	$("#cacher").click(function(){
		$('#liste').animate({
			height: 'toggle'
		},1000)	
	});

	$("#montrer").click(function(){
		$('#liste').slideDown(2000);	
	});

	$("#cloner").click(function(){
		$("#liste").clone().appendTo("#coller").hide();
		$("#coller div:last").show(1000);
	});

	$("#virer").click(function(){
		$("#coller div:last").hide(1000);
		setTimeout(effacer,1100);	
	});
	
	$(".charger").click(function(){	
		$("#vue").load($(this).data("vue"));	
	});
	

});

function effacer(){
	$("#coller div:last").remove();
}
