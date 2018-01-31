$(document).ready(function(){

var topics=["frog", "spider", "jumping spider", "ant", "cat", "dog", "bull", "snake", "dolphin", "shark", "godzilla", "the ring", "alien", "interstellar", "game of thrones", "the lord of the rings", "inception", "bigh fish" ]



function addButtons(){
	for (var i = 0; i < topics.length; i++) {
		var newButton=$("<button>");
		newButton.addClass("btn btn-primary");
		newButton.attr("data-topic", topics[i]);
		newButton.text(topics[i]);
		$("#buttonLocation").append(newButton);
	}
}
addButtons();

$("#submit").on("click",function(event){
	event.preventDefault();
	var addedButton=$("#gif-input").val().trim();
	$("#buttonLocation").append(addedButton);

});

});
