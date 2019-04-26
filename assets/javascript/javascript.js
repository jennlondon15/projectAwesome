// connecting PetFinder API
var pf = new petfinder.Client({
  apiKey: "HXhiJjRfDuYpnR3qEGLZ3A2J3wdv7Aj8oLtqTqbBm31lZjsmiU",
  secret: "KboKKC3HHujidOq6ODiMScif9apSRrUGGXQtR14c"
});

//I made too many keys so we have some to try, this is for the google maps embed API if anyone needs to see the documentation.
var gMap = {apiKey: "AIzaSyAHT_UHK6gwGk73hjnJWdWSaG3r6IfuQgg",
            apiKey2: "AIzaSyAzBby-miAKzfPk7Cntf32RcUbkoRhn0P4",
            apiKey3:"AIzaSyC9WPR0Lch_bWed56_TKHgqgRRIiAdBD2E",
            queryURL:"https://www.google.com/maps/embed/v1/place?key=",
            queryTestURL:"https://www.google.com/maps/embed/v1/place?key="+ gMap.apiKey+ "&q=Eiffel+Tower,Paris+France"
            }

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
    
    //made change to mirror petfinder API webPage
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
