// connecting PetFinder API
var pf = new petfinder.Client({
    apiKey: "HXhiJjRfDuYpnR3qEGLZ3A2J3wdv7Aj8oLtqTqbBm31lZjsmiU",
    secret: "KboKKC3HHujidOq6ODiMScif9apSRrUGGXQtR14c"
  });
  
  pf.animal
    .search()
    .then(function(response) {
      // Do something with `response.data.animals`
      console.log(response);
  
      var animalAge = response.data.animals[0].age;
      console.log("this is the dog in array" + animalAge);
    })
    .catch(function(error) {
      console.log("if we have an arror");
    });
  