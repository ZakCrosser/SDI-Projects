// Animal: Object
  // Method Procedure: initialize
  // Argument: String
  var Animal = (function (animalName) {
    // Property: String - name
    this.name = animalName;
    // Property: Boolean - visited
    this.visited = false;
    // Return Object
  });
  
  // Method Accessor: has_been_visited
  Animal.prototype.has_been_visited = (function() {
    // Return Boolean
    return this.visited;
  });
  
  // Method Mutator: visit
  Animal.prototype.visit = (function() {
    this.visited = true;
    // Return Boolean
    return this.has_been_visited;
  });

// Face: Object
  // Method Procedure: initialize
  // Argument: String
  var Face = (function(faceName) {
    // Property: String - type
    this.type = faceName;
    // Return Object
  });
  
  // Method Function
  // Argument: Object
  Face.prototype.makeFaceAtAnimal = (function(animal) {
    // Output
    console.log("We made " + this.type + " faces at the " + animal.name);
  });

