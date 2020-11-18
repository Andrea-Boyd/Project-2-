
$(document).ready(function () {

  //globally defining our user's input for entry into qol table
  const newReview = {};
  let cityid = "";

  //will send newReview object to the qol db then redirect to that city's data page
  function submitReview(info) {
    $.post("/api/review/", info, function () {
      window.location.href = "/cityData/" + cityid
    });
  }
  //calls to get city id from univeristy using unvi-api route then feeds the product of that call into out globally availabile city id variable
  $("#catchSchool").on("click", function (event) {
    const school = $("#univ").val()
    event.preventDefault();
    $.ajax({
      url: "api/city/" + school,
      method: "GET",
      success: function (res) {
        return res.id
      }
    }).then(function (data) {
      cityid = data.id;
      return cityid
    })
  })


  //will select input values for each metric and call to submit user review to the qol db for that city
  $("#submitrev").on("click", function (event) {
    event.preventDefault();
    const crimeScore = $("#crimeScore").val();
    const costScore = $("#costScore").val();
    const lgbtScore = $("#lgbtScore").val();
    const nightScore = $("#nightScore").val();
    const review = $("#review").val();
    //ensures that user provides a university so that cityid can be found
    if (cityid === "" || cityid === null) {
      $(".university").append($('<div>').attr("class", "alert alert-danger").text("Please provide and save a university for your review!"));
    }
    else {
      newReview.costOfLiving = costScore;
      newReview.crimeScore = crimeScore;
      newReview.lgbtFriendly = lgbtScore;
      newReview.nightLife = nightScore;
      newReview.comment = review;
      newReview.CityId = cityid;

      submitReview(newReview)

    }

  });
});