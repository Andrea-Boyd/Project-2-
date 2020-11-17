$(document).ready(function () {
  // Getting jQuery references to the post body, title, form, and author select
  const crimeScore = $("#crimeScore");
  const crimeText = $("#crimeText");
  const costScore = $("#costScore");
  const costText = $("#costText");
  const lgbtScore = $("#lgbtScore");
  const lgbtText = $("#cityText");
  const nightScore = $("#nightScore");
  const nightText = $("#nightText");

  //WILL ADD INPUT FORMS FOR ALL REQUESTED QOL INFO and consts that store each value
  // Adding an event listener for when the form is submitted to call update & send data to qol db 
  $(searchUni).on("click", updateScore)
  // Gets the part of the url that comes after the "?" (which we have if we're updating a post)\
  //catch cityID or name to send new review to that city
  const url = window.location.search;
  const cityID = "";

  const newReview = {
    costOfLiving: costScore.val(),
    crimeScore: crimeScore.val(),
    lgbtFriendly: lgbtScore.val(),
    nightLife: nightScore.val(),
    costOfLivingRev: costText.val().trim(),
    crimeScoreRev: crimeText.val().trim(),
    lgbtFriendlyRev: lgbtText.val().trim(),
    nightLifeRev: nightText.val().trim(),
    //need to include cityID 
  };

  function submitReview(info) {
    $.post("/api/review", info, function () {
      window.location.href = "/citydata"
    });
  }
  //submitReview(newReview);


  function updateScore(review) {
    //for updating acerage score for each QOL metric
    $.ajax({
      method: "PUT",
      where: { id: cityID },
      url: "/api/userInput",
    })
      .then(function () {
        //to the route that directs to a city's qol scores after the review has been added, an html tahat hasn't been made yet, unless we want to load city's results onto 
        //so essentially reloads to include newly added review
        window.location.href = "/citydata";
      });
  }
  $("#submitReview").on("click", function (event) {
    event.preventDefault();
    submitReview(newReview)
  })
});
