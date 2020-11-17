$(document).ready(function () {

  //This will correspond to the returned results for a city's search results should it be a sep. page
  //taking in the University name, pulling the id and getting the city associated
  function getCityData(univ) {
    const university = univ.Trim().toLower();
    const queryUrl = "/api/" + university;
    $.get(queryUrl, function (data) {
      if (data) {
        console.log(data);
        //if data null
        //create card that says "No reviews yet- 'Add a Review' or 'New Search buttons'"
        // If data exists
        //for #results, iterate over qols
        //will push to page each attribute's avg score
        //costCard.val(data.afforability)
        //totalReviews(qol.length?)
        //etc. for all attributes

        // // If we have a post with this id, set a flag for us to know to update the post
        // // when we hit submit
        // updating = true;
      }
    }).then(function(res){
      //begin adding each score and value to cards associated with each qol metric i.e.
      // the cost/affordability will add an average score for the costScore element of the html
      //the cost/affordabilityRev will display text comments for the metric
      $(results).appened(res.costOfLiving)
      $(results).appened(res.costOfLivingRev)
    });
  }

});
//eventListen. for Add Review or Return Home , below this line are both click listeners for those functions
//(#toForum).on("click",function(event){
//event.preventDefault();
//location.href = "./fourm.html";
// // pass cityID or city to forum.js for further action
//----------------------------------------------------------------
//(#newSearch).on("click",function(event){
//event.preventDefault();
//location.href = "./search.html";
//