// connecting PetFinder API
var pf = new petfinder.Client({
  apiKey: "tk2M4TpBDTJF3U0WIfryfor948l4AN5Rlhab4r5K9RyzlGuwsm",
  secret: "W9M0tIJ52td2d3TzuuhOAiGPT9mKWmGzHMIbKa0Q"
});

$("#button-submit").on("click", function() {
  // on submit button search for the pets by zip
  event.preventDefault();

  var userZip = $("#zip").val().trim();
  console.log("this is user Zip" + userZip);

  // if (use the answers from the user) ...than show this
  // if else (show this)
  // else (plant)


  pf.animal.search({ location: userZip })
    // can i insert here the val from searchig var at the screen?
    
    .then(response => {
      for (var i=0; i<5; i++){

      // Do something with `response.data.animals`
      console.log(response);

      var animalAge = response.data.animals[i].age;
      console.log("this is the dog in array" + animalAge);

      var animalPhoto = response.data.animals[i].photos[i].medium;
      console.log(animalPhoto);

      var animalName = response.data.animals[i].name;
      console.log(animalName);

      var animalState = response.data.animals[i].contact.address.state;
      console.log(animalState);

      var animalDiscription = response.data.animals[i].description;
      console.log(animalDiscription);
      }

    })
    .catch(function(error) {
      console.log(error);
      // Handle the error
    
    })
  
    $("#animalLOC").append(animalState);

  });
