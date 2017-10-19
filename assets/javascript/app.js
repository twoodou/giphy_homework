var items = ["Dog", "Cat", "Bird", "Hamster", "Turtle", "Frog", "Jack Black"];
var counter = 0;


function displayInfo() {

  var animal = $(this).attr("data-animal");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    animal + "&api_key=dc6zaTOxFJmzC&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    console.log(queryURL);

    console.log(response);

    var results = response.data;

    for (var i = 0; i < results.length; i++) {

      var animalDiv = $("<div>");

      animalDiv.addClass("animalDiv");


      var p = $("<p>").text("Rating: " + results[i].rating);

      var animalImage = $("<img>");


      animalImage.attr("data-state", "animate");
      animalImage.attr("src", results[i].images.fixed_height.url);
      animalImage.attr("data-still", results[i].images.fixed_height_still.url);
      animalImage.attr("data-animate", results[i].images.fixed_height.url);

      animalDiv.append(p);
      animalDiv.append(animalImage);

      $("#animals").prepend(animalDiv);

    }

  });

}

function stopGIF() {
  var state = $(this).attr("src");
  console.log(state);

  if (state === "https://media1.giphy.com/media/123nrTcg9bHnPi/200.gif?fingerprint=e1bb72ff59e83077706d4f3832c68186") {
    $(this).attr("src", $(this).attr("data-still"));
  } else {
    $(this).attr("src", $(this).attr("data-animate"));

  }
}

function refreshButtons() {

  $("#animalButtons").empty();

  for (var i = 0; i < items.length; i++) {

    var a = $("<button>");

    a.addClass("clickButton btn btn-success");

    a.attr("data-animal", items[i]);

    a.text(items[i]);

    $("#animalButtons").append(a);
  }

}


$("#addAnimal").on("click", function(event) {

  event.preventDefault();

  var newItem = $("#animal-input").val().trim();

  items.push(newItem);

  refreshButtons();

});

$(document).on("click", ".clickButton", displayInfo);

$(document).on("click", ".animalImage", stopGIF);

refreshButtons();








// $("#addAnimal").on("click", function() {
//
//   var animal = $(this).attr("data-animal");
//   var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//     animal + "&api_key=dc6zaTOxFJmzC&limit=10";
//
//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).done(function(response) {
//     console.log(queryURL);
//
//     console.log(response);
//
//     var results = response.data;
//
//     for (var i = 0; i < results.length; i++) {
//
//       var animalDiv = $("<div>");
//
//       var p = $("<p>").text("Rating: " + results[i].rating);
//
//       var animalImage = $("<img>");
//
//       animalImage.attr("src", results[i].images.fixed_height.url);
//
//       animalDiv.append(p);
//       animalDiv.append(animalImage);
//
//       $("#animal").prepend(animalDiv);
//
//     }
//
//   });
//
// });
