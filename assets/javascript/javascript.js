// connecting PetFinder API
var pf = new petfinder.Client({
  apiKey: "HXhiJjRfDuYpnR3qEGLZ3A2J3wdv7Aj8oLtqTqbBm31lZjsmiU",
  secret: "KboKKC3HHujidOq6ODiMScif9apSRrUGGXQtR14c"
});

$("#button-submit").on("click", function() {
  // on submit button search for the pets by zip

  userZip = $("#zip")
    .val()
    .trim();
  console.log("this is user Zip" + userZip);

  // if (use the answers from the user) ...than show this
  // if else (show this)
  // else (plant)

  pf.animal
    // can i insert here the val from searchig var at the screen?
    .search({ location: userZip })
    .then(function(response) {
      // Do something with `response.data.animals`
      console.log(response);

      var animalAge = response.data.animals[0].age;
      console.log("this is the dog in array" + animalAge);

      var animalPhoto = response.data.animals[0].photos[0].medium;
      console.log(animalPhoto);

      var animalName = response.data.animals[0].name;
      console.log(animalName);
      var animalAddress = response.data.animals[0].contact.address.state;
      console.log(animalAddress);

      var animalDiscription = response.data.animals[0].description;
      console.log(animalDiscription);
    })
    .catch(function(error) {
      console.log(error);
      // Handle the error
    });
});
