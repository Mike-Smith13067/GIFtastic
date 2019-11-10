
// Global Variables
var topics = ["cat", "dog", "football", "sport"];
var apikey = "NkbmU5j3xQt3iIZwT1YNui67WVawmRX0";
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
  name + "&api_key=" + apikey + "&limit=10";

function showButtons() {
  $.each(topics, function (index, value) {
    var newBtn = $("<button>");
    newBtn.addClass("gifBtn");
    newBtn.text(value);
    newBtn.attr("data-search", value);
    newBtn.attr(id = "gifBtn");
    $("#buttonsDiv").prepend(newBtn);
    console.log(value);
  });
}

$(document).ready(function () {

  // //Create buttons from inital topics on page load

  showButtons();

  // Click event listener for creation of new buttons and gif display
  $("#add-input").on("click", function () {
    event.preventDefault();
    var name = $("#input").val().trim();
    topics.push(name);
    console.log(topics);
    $("#buttonsDiv").empty();
    showButtons();
    //Ajax call
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      name + "&api_key=" + apikey + "&limit=10";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      var response = response.data;
      console.log(queryURL);
      console.log(response);
    });
    //Create and display new button
    function showNewButton() {
      $.each(topics, function (index, value) {
        var newBtn = $("<button>");
        newBtn.addClass("gifBtn");
        newBtn.text(value);
        newBtn.attr("data-search", value);
        $("#buttonsDiv").prepend(newBtn);

      });
    }
  });



  // Click event listener for existing buttons
  $(document).on("click", ".gifBtn", function () {
    event.preventDefault();
    $("#gifImages").empty();
    var name = $(this).attr("data-search");
    console.log(name);
    // logic to pull the unamniamted GIF for button selected
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      name + "&api_key=" + apikey + "&limit=10";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      var response = response.data;
      for (var i = 0; i < response.length; i++) {
        console.log(queryURL);
        console.log(response.data);
        console.log(response);
        //Display image (still)
        var image = $("<img>");
        image.attr("data-animate", "still");
        image.addClass("animate-still");
        image.attr("src", response[i].images.downsized_still.url);
        image.attr("animate-source", response[i].images.downsized.url);
        image.attr("still-source", response[i].images.downsized_still.url);
        $("#gifImages").prepend(image);
        //Append the GIF rating
        var ratingDiv = $("<span>");
        ratingDiv.text("Rating: " + response[i].rating);
        $("#gifImages").prepend(ratingDiv);
      }
    });

  });
});

// toggle between still and animated states
$(document).on("click", ".animate-still", function () {
  if ($(this).attr("data-animate") === "still") {
    $(this).attr("data-animate", "animate");
    $(this).attr("src", $(this).attr("animate-source"));
  } else {
    $(this).attr("data-animate", "still");
    $(this).attr("src", $(this).attr("still-source"));
  }
  
});

function reset() {
   topics = ["cat", "dog", "football", "sport"];
   apikey = "NkbmU5j3xQt3iIZwT1YNui67WVawmRX0";
   queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    name + "&api_key=" + apikey + "&limit=10";
}

// Clear Images
$(document).on("click", "#clear-images", function () {
  $("#gifImages").empty();
});
// Clear buttons
$(document).on("click", "#clear-buttons", function () {
  $("#buttonsDiv").empty();
  reset();
  showButtons();

});
//Clear all

$(document).on("click", "#clear-all", function () {
  $("#buttonsDiv").empty();
  $("#gifImages").empty();
  reset();
  showButtons();
});



