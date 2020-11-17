
//let university = $("#search").val();


$("#submit").on("click", function (event) {
  event.preventDefault();
  let university = $("#search").val();
  // const search = $("#search").val();
  // console.log(search);
  console.log(university)
  getQOL(university);

  //need to get corresponding id 
  //get api route for pulling our city page with our user generated data from our forum
});


function getQOL(univ) {
  $.ajax({
    method: "GET",
    url: "/api/city/" + univ,
    
  })
    .then(function (data) {
      console.log(data);
      window.location.href = "/cityData/" + data[0].id;
    });
}
