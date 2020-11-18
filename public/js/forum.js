$(document).ready(function () {

//get to university api route to pull city id from university name
function getCityId(univ) {

    $.ajax({
      url: "api/city/" + univ,
      method: "GET",
    }).then(function (res) {
      console.log(res.id)
      return res.id
    })
  };

  const newReview = {};
  ;
  let cityid="";

  function submitReview(info) {
    $.post("/api/review/", info, function () {});
  }

  $("#catchSchool").on("click",function(event){
    event.preventDefault();
    // const school = $("#univ").val()
    const school = "Vanderbilt University";
    let cityid= getCityId(school)
    return cityid
    })
   
  

  $("#submitrev").on("click", function (event) {
    event.preventDefault();
    const crimeScore = $("#crimeScore").val();
    const costScore = $("#costScore").val();
    const lgbtScore = $("#lgbtScore").val();
    const nightScore = $("#nightScore").val();
    const review = $("#review").val();
  

      // costOfLiving: costScore.val(),
      // crimeScore: crimeScore.val(),
      // lgbtFriendly: lgbtScore.val(),
      // nightLife: nightScore.val(),
      // comment: review.val().trim(),
      // CityId: cityInfo[0].id
      newReview.costOfLiving = 4;
      newReview.crimeScore = 5;
      newReview.lgbtFriendly = 2;
      newReview.nightLife = 3;
      newReview.comment = "It's cool ig";
      newReview.CityId = cityid;
      console.log(cityid)
      console.log(newReview.CityId);
    
    
    submitReview(newReview)

  });
});