
var topics = ["cat"];
var buttonsDiv = $("#buttons-div");
var emptyBox = $(".image");
console.log(topics);



// Add inputs
function addInput() {
  var input = $(this).attr("data-name");
  var apikey = "NkbmU5j3xQt3iIZwT1YNui67WVawmRX0";
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=" + apiKey + "&limit=10";
  console.log(queryURL);
  $.ajax({
    url: queryURL,
    method: "GET"
  })

    .then(function (response) {
      console.log(queryURL);
      console.log(response);
      var results = response.data;
      for (var i = 0; i < results.length; i++) {
        var newDiv = $("<div>");
        var gifImages = $("#gifImages");
        var text = $("<p>").text("Rating: " + rating);
        var rating = results[i].images.original.url;
        var image = $("<img>");
        var static = results[i].images.original_still.url;
        image.attr("src", gif);
        image.attr("data-still", static);
        image.attr("class", "gif");
        image.attr("data-state", "animate");
        newDiv.append(text);
        newDiv.append(image);
        gifImages.prepend(newDiv);

      }
    });

};

function displayButtons() {
  buttonsDiv.empty();
  for (var i = 0; i < topics.length; i++) {
    var newBtn = $("<Button type='button' class='btn btn-secondary btn-lg'>")
    newBtn.addClass("new-button");
    newBtn.attr("data-name", topics[i].split(" "));
    newBtn.text(topics[i]);
    buttonsDiv.append(newBtn);
    console.log(newBtn);
  }
};

// Set gif state
$(document.body).on("cick", ".gif", function () {
  var dataState = $(this).attr("data-state")
  if (dataState === "animate") {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
  else {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  }
});

// Add additional buttons
$("#add-input").on("click", function (event) {
  var input = $("#add-input").val().trim();// .trim cuts off exteraneous characters
  topics.push(input);
  displayButtons();
});

// Get random GIFS

$("#add-random").on("click", function () {
  var apiKey = "NkbmU5j3xQt3iIZwT1YNui67WVawmRX0";
  var queryURL = "https://api.giphy.com/v1/gifs/rando?&api_key=" + apiKey;
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {
      console.log(response);
      var results = response.data;
      var newDiv = $("<div");
      var gifImages = $("gifImages");
      var image = $("<image>");
      var gif = results.immages.original.url;
      image.attr("src", gif);
      image.attr("data-still", static);
      image.attr("class", "gif");
      image.attr("data-state", "animate");
      newDiv.append(text);
      newDiv.append(image);
      gifImages.prepend(newDiv);
    });

  // Clear Images function

  $("clear-images").on("click", function () {
    $("#gifImages").empty();
    $("gifImages").append($("<h1 class='image'> GIF!! </h1>"));
    emptyBox.show();
  });

  // Clear Buttons function

  $("#clear-buttons").on("click", function () {
    topics.length = 0;
    buttonsDiv.empty();
  });

  // Clear All function

  $("#clear-all").on("click", function () {
    topics.length = 0;
    buttonsDiv.empty();
    $("#gifImages").empty();
    $("input").val("");
    displayButtons();
    emptyBox.show();
  });

// Display buttons function
$(document).on("click", ".new-button", Input);
displayButtons();
 
});






