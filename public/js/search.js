//where teleport%...is filled with urban area ID; will have to run cities through teleport api 
//to fetch unvieristy's city ID if on teleport then send to the urban area details api call
let cityID="";
const queryURL = "https://api.teleport.org/api/urban_areas/"+cityID+"/scores/";


$("#submit-btn").on("click", function (event) {
    const search= $("#search").val();
    cityID=
    event.preventDefault();
    console.log(search);
//this will actaully be routed to the db,api route, and template engine, nit the third party
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(response);
        })
});
