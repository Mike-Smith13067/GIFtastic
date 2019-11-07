
// Global Variables
var topics = ["cat", "dog", "football", "sport"];
var apikey = "NkbmU5j3xQt3iIZwT1YNui67WVawmRX0";
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
  name + "&api_key=" + apikey + "&limit=10";


// //Create buttons from inital topics on page load
$(document).ready(function () {
  $.each(topics, function (index, value) {
    var newBtn = $("<button>");
    newBtn.addClass("gifBtn");
    newBtn.text(value);
    newBtn.attr("data-search", value);
    $("#buttonsDiv").prepend(newBtn);
  });

  // Click event listener for new buttons
  $("#add-input").on("click", function () {
    event.preventDefault();
    var name = $("#input").val().trim();
    topics.push(name);
    console.log(topics);
    $("#buttonsDiv").empty();
    //Create and display new button
    $.each(topics, function (index, value) {
      var newBtn = $("<button>");
      newBtn.addClass("gifBtn");
      newBtn.text(value);
      newBtn.attr("data-search", value);
      $("#buttonsDiv").prepend(newBtn);
    });

  });
  // logic to pull the unamniamted GIF for button selected
  $(document).on("cick", ".gifBtn"), function () {
    event.preventDefault();
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      var response = response.data;
      console.log(response);
      // Appending GIFs to html
      $.each(response, function(index, value) {
        var images = $("<h1>");
        images.addClass("images");
        var gifRating = $("<div>");
        gifRating.addClass("gifRatiing");

      })
    })
  }

});