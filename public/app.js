// // Grab the articles as a json
// $.getJSON("/articles", function (data) {
//   // For each one
//   for (var i = 0; i < data.length; i++) {
//     // // Display the apropos information on the page
//     // $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>").appendChild();
//     // // This function takes in a single JSON object for an article/headline
//     //     // It constructs a jQuery element containing all of the formatted HTML for the
//     //     // article card
//     var card = $(".article").append("<div class='card'>")
//     card.append("<div class='card-header'>")

//     var cardHeader = $("<div class='card-header'>").append(
//       $("<h3>").append(
//         $("<a class='article-link' target='_blank' rel='noopener noreferrer'>")
//           .attr("href", article.url)
//           .text(article.headline),
//         $("<a class='btn btn-success save'>Save Article</a>")
//       )
//     );

//     var cardBody = $("<div class='card-body'>").text(article.summary);

//     card.append(cardHeader, cardBody);
//     // We attach the article's id to the jQuery element
//     // We will use this when trying to figure out which article the user wants to save
//     card.data("_id", article._id);
//     // We return the constructed card jQuery element
//     return card;
//   }
// });

// function handleArticleScrape() {
//   // This function handles the user clicking any "scrape new article" buttons
//   $.get("/api/fetch").then(function (data) {
//     // If we are able to successfully scrape the NYTIMES and compare the articles to those
//     // already in our collection, re render the articles on the page
//     // and let the user know how many unique articles we were able to save
//     initPage();
//     bootbox.alert($("<h3 class='text-center m-top-80'>").text(data.message));
//   });
// }
// // Whenever someone clicks a p tag
// $(document).on("click", "p", function () {
//   // Empty the notes from the note section
//   $("#notes").empty();
//   // Save the id from the p tag
//   var thisId = $(this).attr("data-id");

//   // Now make an ajax call for the Article
//   $.ajax({
//     method: "GET",
//     url: "/articles/" + thisId
//   })
//     // With that done, add the note information to the page
//     .then(function (data) {
//       console.log(data);
//       // The title of the article
//       $("#notes").append("<h2>" + data.title + "</h2>");
//       // An input to enter a new title
//       $("#notes").append("<input id='titleinput' name='title' >");
//       // A textarea to add a new note body
//       $("#notes").append("<textarea id='bodyinput' name='body'></textarea>");
//       // A button to submit a new note, with the id of the article saved to it
//       $("#notes").append("<button data-id='" + data._id + "' id='savenote'>Save Note</button>");

//       // If there's a note in the article
//       if (data.note) {
//         // Place the title of the note in the title input
//         $("#titleinput").val(data.note.title);
//         // Place the body of the note in the body textarea
//         $("#bodyinput").val(data.note.body);
//       }
//     });
// });

// // When you click the savenote button
// $(document).on("click", "#savenote", function () {
//   // Grab the id associated with the article from the submit button
//   var thisId = $(this).attr("data-id");

//   // Run a POST request to change the note, using what's entered in the inputs
//   $.ajax({
//     method: "POST",
//     url: "/articles/" + thisId,
//     data: {
//       // Value taken from title input
//       title: $("#titleinput").val(),
//       // Value taken from note textarea
//       body: $("#bodyinput").val()
//     }
//   })
//     // With that done
//     .then(function (data) {
//       // Log the response
//       console.log(data);
//       // Empty the notes section
//       $("#notes").empty();
//     });

//   // Also, remove the values entered in the input and textarea for note entry
//   $("#titleinput").val("");
//   $("#bodyinput").val("");
// });
