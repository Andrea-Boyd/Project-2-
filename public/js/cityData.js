//This will correspond to the returned results for a city's search results should it be a sep. page
//taking in the University name, pulling the id and getting the city associated
function getCityData(univ) {
    const university= univ.Trim().toLower();
    const queryUrl= "/api/"+university;
    $.get(queryUrl, function(data) {
      if (data) {
        console.log(data.university );
        // If this post exists, prefill our cms forms with its data
        // titleInput.val(data.title);
        // bodyInput.val(data.body);
        // authorId = data.AuthorId || data.id;
        // // If we have a post with this id, set a flag for us to know to update the post
        // // when we hit submit
        // updating = true;
      }
    });
  }