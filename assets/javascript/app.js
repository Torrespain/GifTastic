$(document).ready(function(){

var topics=["frog", "spider", "jumping spider", "ant", "cat", "dog", "bull", "snake", "dolphin", "shark", "godzilla", "the ring", "alien", "interstellar", "game of thrones", "the lord of the rings", "inception", "bigh fish" ]

function addButtons(){
	$("#buttonLocation").empty();
	for (var i = 0; i < topics.length; i++) {
		var newButton=$("<button>");
		newButton.addClass("btn btn-primary gif");
		newButton.attr("data-topic", topics[i]);
		newButton.text(topics[i]);
		$("#buttonLocation").append(newButton);
	}
}
addButtons();

$(document).on("click", ".gif", function(){
	var animal= $(this).attr("data-topic");
	gifSearch(animal);
});

$("#submit").on("click",function(event){
	event.preventDefault();
	var newInput = $("#gif-input").val().trim();
	console.log(newInput)
// console.log($("#gif-input").val())
		if (topics.indexOf(newInput) ===-1 && newInput!==""){
			
			// $("#buttonLocation").append(addedButton);
			topics.push(newInput)
			addButtons();
		}
});

function gifSearch(term){
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +term + "&api_key=dc6zaTOxFJmzC&limit=5";

	$.ajax({
          url: queryURL,
          method: "GET"
        })

    .then(function(response) {
	     generateGifs(response.data)
	   });
}

function generateGifs(data){

	for (var i = 0; i < data.length; i++) {
		var still=data[i].images.original_still.url;
		var animate=data[i].images.original.url;
		console.log (still)
		var images=$("<img>")
		images.attr("src", still);
		images.addClass("finalGif");
		images.attr("data-state", "still");
		images.attr("data-still", still);
		images.attr("data-animate", animate);
		$("#imageContainer").prepend(images);
	}
}

$(".container").on("click",".finalGif", function(){
var state = $(this).attr("data-state");
if (state === "still") {
  $(this).attr("src", $(this).attr("data-animate"));
  $(this).attr("data-state", "animate");
} 
else {
	$(this).attr("src", $(this).attr("data-still"));
  $(this).attr("data-state", "still");
}

});

});
