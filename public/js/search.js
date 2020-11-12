//where teleport%...is filled with urban area ID; will have to run cities through teleport api 
//to fetch unvieristy's city ID if on teleport then send to the urban area details api call
let cityID="";
const queryURL = "https://api.teleport.org/api/urban_areas/"+cityID+"/scores/";


$("#submit-btn").on("click", function (event) {
    const search= $("#search").val();
    cityID=
    event.preventDefault();
    console.log(search);
//get api route for pulling our city page with our user generated data from our forum
});


function getQOL(scores) {
    $.ajax({
      method: "GET",
      url: "/api/university",
      data: scores
    })
      .then(function() {
        window.location.href = "/scores";
      });
  }
