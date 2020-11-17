
const university = $("#search").val().trim();


$("#submit").on("click", function (event) {
  event.preventDefault();
  // const search = $("#search").val();
  // console.log(search);
  console.log(university)

  //need to get corresponding id 
  //get api route for pulling our city page with our user generated data from our forum
});


function getQOL(univ) {
  $.ajax({
    method: "GET",
    url: "/api/city/"+univ,
    data: "Tells me about the city of Atlanta"
  })
    .then(function () {
      window.location.href = "/citydata";
    });
}
