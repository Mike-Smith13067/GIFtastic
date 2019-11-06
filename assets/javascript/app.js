
// Global Variables
var topics = ["cat", "dog", "football", "sport"];
var apikey = "NkbmU5j3xQt3iIZwT1YNui67WVawmRX0";

// function to display buttons for inital items in array

// //Create buttons from topics
$(document).ready(function() {
  $.each(topics, function(index, value) {
    var newBtn = $("<button>");
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
  //Create new button
  $.each(topics, function(index, value) {
    var newBtn = $("<button>");
    newBtn.text(value);
    newBtn.attr("data-search", value);
    $("#buttonsDiv").prepend(newBtn);
  });

}); 

});