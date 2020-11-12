$(document).ready(function() {
    // Getting jQuery references to the post body, title, form, and author select
    const bodyInput = $("#body");
    const cityInput = $("#city");
    
    //WILL ADD INPUT FORMS FOR ALL REQUESTED QOL INFO
    // Adding an event listener for when the form is submitted to call update & send data to qol db 
    $(searchUni).on("click", updateScore)
    // Gets the part of the url that comes after the "?" (which we have if we're updating a post)
    const url = window.location.search;
  

function updateScore(score) {

    $.ajax({
      method: "PUT",
      url: "/api/userInput",
      data: score
    })
      .then(function() {
          //to the route that directs to a city's qol scores
        window.location.href = "/";
      });
  }
});
