$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "donnee.json",
		dataType:"json"
	}).success(function(data){
		var span1=$("<span/>").text(data[0].menu);
		var span2=$("<span/>").text(data[0].commands);
		$("#donnees").append(span1);
		$("#donnees").append("<br/>");
		$("#donnees").append(span2);
	}).error(function(jqXHR,status,error){
		alert(error);
	});
})