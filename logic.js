var nbaGifs = ["Kobe Bryant", "Lebron James", "Michael Jordan", "Kevin Durant"];

// Function for displaying gifs
function renderButtons() {

    // Deleting the buttons prior to adding new button to avoid repeats

    $("#buttons-view").empty();

    // Looping through the array of terms
    for (var i = 0; i < nbaGifs.length; i++) {

        // Then dynamicaly generating buttons for each term in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var a = $("<button>");
        // Adding a class of nbaGif to our button
        a.addClass("nbaGif");
        // Adding a data-attribute
        a.attr("data-person", nbaGifs[i]);
        // Providing the initial button text
        a.text(nbaGifs[i]);
        // Adding the button to the buttons-view div
        $("#buttons-view").append(a);
    }
}

// This function handles events where a term button is clicked
$("#add-gif").on("click", function(event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var nbaGif = $("#gif-input").val().trim();

    // Adding term from the textbox to our array
    nbaGifs.push(nbaGif);

    // Calling renderButtons which handles the processing of our term array
    renderButtons();
});

// Calling the renderButtons function to display the intial buttons
renderButtons();

$("#buttons-view").on("click", "button",function() {
    var person = $(this).attr("data-person");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .done(function(response) {
            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div class='item'>");

                var rating = results[i].rating;

                var p = $("<p class='rating'>").text("Rating: " + rating);

                var personImage = $("<img>");
                personImage.attr("src", results[i].images.fixed_height_still.url);
                personImage.attr("data-animate", results[i].images.fixed_height.url);
                personImage.attr("data-still", results[i].images.fixed_height_still.url);
                personImage.attr("data-state", "still");
                personImage.addClass("gif");

                gifDiv.prepend(p);
                gifDiv.prepend(personImage);

                $("#gifArea").prepend(gifDiv);

                $(".gif").on("click", function() {
                    var state = $(this).attr("data-state");
                    if (state === "still") {

                        $(this).attr("src", $(this).attr("data-animate"));
                        $(this).attr("data-state", "animate");
                    } else {
                        $(this).attr("src", $(this).attr("data-still"))
                        $(this).attr("data-state", "still");

                    }
                });
            }
        });
});
