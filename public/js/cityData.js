$(document).ready(function () {

  //This will correspond to the returned results for a city's search results should it be a sep. page
  //taking in the University name, pulling the id and getting the city associated
  function getCityData(Univ) {
    const university = Univ.Trim().toLower();
    const queryUrl = "/api/" + university;
    $.get(queryUrl, function (data) {
      if (data) {
        console.log(data);
        //if data null
        //create card that says "No reviews yet- 'Add a Review' or 'New Search buttons'"
        // If data exists
        //for #results, iterate over qols
        //will push to page each attribute's avg score
        //costCard.val(data.afforability)
        //totalReviews(qol.length?)
        //etc. for all attributes

        // // If we have a post with this id, set a flag for us to know to update the post
        // // when we hit submit
        // updating = true;
      }
    }).then(function(res){
      //begin adding each score and value to cards associated with each qol metric i.e.
      // the cost/affordability will add an average score for the costScore element of the html
      //the cost/affordabilityRev will display text comments for the metric
      $(results).appened(res.costOfLiving)
      $(results).appened(res.costOfLivingRev)
    });
  }

});
//eventListen. for Add Review or Return Home 


//#select-album will need to be changed to id of the button on the review entry page 
$("#submit").on("click", function(event) {
  // Preventing the button from trying to submit the form
  event.preventDefault();
  // #search-input will need to be changed to id of the search on the review entry page 
  var inputUniv = $("#search").val().trim();
  
  //   return;
  // }
  //check the input is working right
  

  // Running the searchBandsInTown function(passing in the artist as an argument)
 getCityData(inputUniv);
  
});



function getCityData(album){
    var queryURL = "https://theaudiodb.com/api/v1/json/1/searchalbum.php?a=" + album + "&apikey=523532";
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response){        
        

        console.log(response);

        let albumDiv = $("<div class = 'album'>"); 
        let albumimgDiv = $("<div class = 'albumImage'>"); 

        let artistName = response.album[0].strArtist;

        let pOne = $("<p>").text("Artist: " + artistName);

        albumDiv.append(pOne);

        let albumName = response.album[0].strAlbum;

        let pTwo = $("<p>").text("Album: " + albumName);

        albumDiv.append(pTwo);

        let releaseYear = response.album[0].intYearReleased;

        let pThree = $("<p>").text("Year Released: " + releaseYear);

        albumDiv.append(pThree);

        let albumGenre = response.album[0].strGenre;

        let pFour = $("<p>").text("Genre: " + albumGenre);

        albumDiv.append(pFour);

        let albumDescription = response.album[0].strDescriptionEN;

        let textBox = $("<textarea class=scrollableTextBox id=albumTextBox>").text("Album Description: " + albumDescription);

        albumDiv.append(textBox);
        
        let albumCover = response.album[0].strAlbumThumb;

        let image  = $("<img class=albumCover width=700 height=600>").attr("src", albumCover);

        //albumDiv.append(image);
        albumimgDiv.append(image)
        idAlbum = response.album[0].idAlbum;

        $("#albumInfo").prepend(albumDiv);
        $("#albumImgInfo").prepend(albumimgDiv);

      



      })};

