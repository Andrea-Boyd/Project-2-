//where teleport%...is filled with urban area ID; will have to run cities through teleport api 
//to fetch unvieristy's city ID if on teleport then send to the urban area details api call
let universityID="";
//const queryURL = "https://api.teleport.org/api/urban_areas/"+cityID+"/scores/";


$("#submit-btn").on("click", function (event) {
    const search= $("#search").val();
    //need to get city from university ID
    event.preventDefault();
    console.log(universityID);
//get api route for pulling our city page with our user generated data from our forum
});


function getQOL(scores) {
    $.ajax({
      method: "GET",
      url: "/api/university"+universityID,
      data: scores
    })
      .then(function() {
        window.location.href = "/scores";
      });
  }
 