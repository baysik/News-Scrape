// Grab the articles as a json
$.getJSON("/articles", function(data) {
  // For each one
  for (var i = 0; i < 10; i++) {
    $("#articles").append(
      `<h1 class='headline' data-id='${data[i]._id}'> ${data[i].title}</h1>
      <p class='summary'>${data[i].summary}</p>
      <a class="btn btn-primary btn-lg" id="save-article" data-id='${data[i]._id}' data-toggle="modal" data-target="#saved-article-Modal" role="button">Save Article</a>
      <a class="btn btn-primary btn-lg" href='${data[i].link}'>link</a>
      `
    );
  }
});
$(document).on("click", "#save-article", function() {
  // Grab the id associated with the article from the submit button
  var thisId = $(this).attr("data-id");
  // Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
    method: "POST",
    url: "/articles/" + thisId,
    data: {
      state: "saved"
    }
  })
    // With that done
    .then(function(data) {
      // Log the response
      console.log(data);
    });
});

$("#scrape-button").on("click", function(e) {
  $.get("/scrape", function(req, res) {});
});

// // When you click the savenote button
// $(document).on("click", "#save-article", function() {
//   // Grab the id associated with the article from the submit button
//   var thisId = $(this).attr("data-id");

//   // Run a POST request to change the note, using what's entered in the inputs
//   $.ajax({
//     method: "POST",
//     url: "/articles/saved/",
//     data: {
//       state: "saved"
//     }
//   })
//     // With that done
//     .then(function(data) {
//       // Log the response
//       console.log(data);
//     });
// });
