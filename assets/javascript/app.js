
var topics = ["cat", "dog", "football", "sport", "school"];
var apikey = "NkbmU5j3xQt3iIZwT1YNui67WVawmRX0";


function displayGif() {
  var name = $(this).attr("data-name");
  console.log (name);
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + name + "&api_key=" + apikey;

  $.ajax ({
    url: queryURL,
    method: "GET",    
  })
  .then(function (response) {
    var results = response.data;

    for (var i=0; i<results.length; i++) {
      var gifDiv = $("#gifImages");
      var p = $("<p>").text("Rating: " + results[i].rating);
      var gifImages = $("<img>");
      gifImages.attr("src", results[i].images.fixed_height_still.url);
      gifImages.attr("class", "gif");
      gifImages.attr("data-animate", results[i].images.fixed_height.url);
      gifImages.attr("data-still", results[i].images.fixed_height_still.url);

      $(".image").on("click", function() {
        var state = $(this).attr("data-state");
        if (state=== "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        }
        else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
      })

      gifDiv.prepend(p);
      gifDiv.prepend(gifImages);

      $("#gifImages").append(gifDiv);
    }
  });
};

function displayButtons () {
  $("#gifButton").empty();
  for (var i=0; i<topics.length; i++); {
    var newBtn = $("<button>");
    newBtn.addClass(".gif-btn");
    newBtn.text(topics[i]);
    newBtn.attr("data-name", topics[i]);
    $("#gifButton").append(newBtn);
  }
}

$("#add-input").on("click", function (event) {
  event.preventDefault();
  var topic = $("#input").val().trim();
  console.log (topic);
  topics.push(topic);
  console.log(topics);
});
displayGif();
displayButtons();
