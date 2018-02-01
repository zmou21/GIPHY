
// On page load:
            // Set variables:
                // buttonTitles = ["baseball", "hockey", "football"]
            // Run displayButtons function

$(document).ready(function() {



	var carArr = ["Chevelle", "Lamborghini", "Bugatti"];

	displayButtons();

// displayButtons - function
            // Clear previous buttons from screen
            // for loop through buttonTitles
                // Create a jQuery button
                // Add attribute to jQuery button created (attribute name: "button-title", attribute value: the button title at that index)
                // Put the current buttonTitle that we are looping through in the button
                // Append button to page

	function displayButtons() {

		$(".button-holder").empty();

		for (var i = 0; i < carArr.length; i++) {

			var gifButton = $("<button>");

			gifButton.attr("data-button", carArr[i]);

			gifButton.append(carArr[i]);

			$(".button-holder").append(gifButton);
		};
	};


        // When the user clicks one of the buttons - function
            // prevent default
            // get the attribute of the button clicked, and store in a variables
            // clear out old images from the page (.empty)
            // AJAX call to GIPHY
                // Method | GET
                // URL | https://api.giphy.com/v1/gifs/search?api_key=YOUR_API_KEY&q=(THE BUTTON ATTRIBUTE WE GOT EARLIER)
                // .done
                    // loop through response.data
                        // create a jQuery div
                        // create a jQuery image
                        // Set the src attribute of the jQuery image to be image that we are looping through
                        // Add data-state attribute to jQuery image = "still"
						// Add data-animateurl attribute to jQuery image
						// Add data-stillurl attribute to jQuery image
                    	// create a jQuery paragrapgh
                        // Put the rating from GIPHY response into the paragrapgh created
                        // Append jQuery image to jQuery div
                        // Append jQuery paragrapgh to jQuery div
                        // Append jQuery div to page	

	$("button").on("click", function(event) {

		event.preventDefault();

		var clicked = $(this).attr("data-button");

		// ("button").empty();

		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + clicked + "&api_key=3WLAsTEKAa7bJ0uW9HpgGcTPhFOwlHmw&limit=10";

		$.ajax({

		url: queryURL,
		method: "GET"
		})
		.then(function(response){

			console.log(response.data)

			for (var i = 0; i < response.data.length; i++){

				var gifDiv = $("<div>");

				var image = $("<img src='" + response.data[i].images.original_still.url + "' alt='car-gifs'>");

				image.attr("data-state", "still");

				image.attr("data-animate-url");

				image.attr("data-still-url");

				var p = $("<p> Rating: " + response.data[i].rating.toUpperCase() + "</p>");

				gifDiv.prepend(image);

				gifDiv.prepend(p);

				$(".gif-holder").append(gifDiv);
			};

	 	});		

	});

	        // On click of form submit button - function
            // Create variable of user input text field
            // Push variable just created to array (buttonTitles)
            // Run displayButtons function

	$("#submit").on("click", function() {

		var userInput = $("#user-input").val().trim();

		carArr.push(userInput);

		displayButtons();
	});

        // On click of image div - function
            // Set variable equal to image clicked data-state attribute
            // if (imageState == "still")
                // Set src attribute of image clicked to be data-animateurl attribute of the image clicked
                // Set data-state attribute of image clicked to be "animated"
            // else if (imageState == "animated")
				// Set src attribute of image clicked to be data-stillurl attribute of the image clicked
				// Set data-state attribute of image clicked to be "still"

	
});