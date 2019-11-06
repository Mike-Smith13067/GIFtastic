

$(document).ready(function () {
  var topics = ["a", "b", "c"];
  var buttonsDiv = $("#buttons-div");
  var blank = $(".blank");
});

$("#add-input").on("click", function () {

  console.log(input);

  var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=" + (input);

  console.log(queryURL);

  $.ajax({
    url: queryURL,
    method: "GET"
  })

})
function displayBtn() {
  buttonsDiv.empty();
  for (var i = 0; i < topics.length; i++) {
    var newBtn = $("button type='button' class='btn btn-secondary btn-lg'>")
    newBtn.addClass("new-button");
    newBtn.attr("data-name", topics[i].split(" ").join("_"));
    newBtn.text(topics[i]);
    buttonsDiv.append(newBtn);
    console.log(newBtn);
  }

};