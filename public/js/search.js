
let university = $("#search").val();


$("#submit").on("click", function (event) {
  event.preventDefault();
  // const search = $("#search").val();
  // console.log(search);
  console.log(university)
  getQOL("atlanta");

  //need to get corresponding id 
  //get api route for pulling our city page with our user generated data from our forum
});


function getQOL(city) {
  $.ajax({
    method: "GET",
    url: "/api/"+city,
    data: "Tells me about the city of Atlanta"
  })
    .then(function () {
      window.location.href = "/forum";
    });
}
