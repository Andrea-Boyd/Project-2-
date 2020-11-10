//where teleport%...is filled with urban area ID; will have to run cities through teleport api 
//to fetch unvieristy's city ID if on teleport then send to the urban area details api call
const queryURL = "https://api.teleport.org/api/urban_areas/";

$("#submit-btn").on("click", function (event) {
    const search= $("#search").val();
    event.preventDefault();
    console.log(search);

    $.ajax({
        URL: queryURL,
        method: "GET",
        contentType: "application/vnd.teleport.v1+json"
    }).then(function (response) {
        console.log(response);
        })
});
