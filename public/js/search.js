

//on click will send user input through to university route to pull city id
$("#submit").on("click", function (event) {
  event.preventDefault();
  let university = $("#search").val();
  // const search = $("#search").val();
  // console.log(search);
  console.log(university)
  getQOL(university);

});
//NEEDS to incorporate an error checking/null for schools not found

function getQOL(univ) {
  $.ajax({
    method: "GET",
    url: "/api/city/" + univ,
    
  })
    .then(function (data) {
      console.log(data);
      if (data){
        window.location.href = "/cityData/" + data.id
      };
      if(undefined||null){
        alert("Sorry, this school wasn't found! Please try a new search!")
      }
    });
}
//will redirect to home/search page
$(".newSearch").on("click",function(event){
  event.preventDefault();
  window.location.href="/search";
});