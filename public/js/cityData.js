$(document).ready(function () {

  //This will correspond to the returned results for a city's search results should it be a sep. page
  //taking in the University name, pulling the id and getting the city associated
  function getCityData(Univ) {
    const university = Univ.Trim().toLower();
    const queryUrl = "/api/" + university;
    $.get(queryUrl, function (data,err) {
      if (err) {
        console.error();
        $(body).append("Sorry! No reviews have been left for" + Univ)
          //create card that says "No reviews yet- 'Add a Review' or 'New Search buttons'"
          }// If data exists
        //for #results, iterate over qols
        //will push to page each attribute's avg score
        //costCard.val(data.afforability)
        //totalReviews(qol.length?)
        //etc. for all attributes

        // // If we have a post with this id, set a flag for us to know to update the post
        // // when we hit submit
        // updating = true;
    }).then(function (res) {
      //begin adding each score and value to cards associated with each qol metric i.e.
      // the cost/affordability will add an average score for the costScore element of the html
      //the cost/affordabilityRev will display text comments for the metric
      let crimeScoreAvg=0;

      for(i=0; i<res.length; i++){
        $("#review").appened(res[i].comments)
        $("#review").appened($("<br>"));
        crimeScoreAvg= (crimeScoreAvg+(parseInt(res[i].crimeScore))/i+1);
        return crimeScoreAvg
      }
      $("#crimesScore").appened(crimeScoreAvg)
    });
  }

  //eventListen. for Add Review or Return Home 


  //#select-album will need to be changed to id of the button on the review entry page 
  $("#submit").on("click", function (event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    // #search-input will need to be changed to id of the search on the review entry page 
    var inputUniv = $("#search").val().trim();
    getCityData(inputUniv);

  });


});






