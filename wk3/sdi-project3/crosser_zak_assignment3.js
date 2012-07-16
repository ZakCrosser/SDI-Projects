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

// Zoo: Object
  // Method Procedure: initialize
  // Argument: Array
  var Zoo = (function(animalNames) {
    // Property: Array - animals
    this.animals = new Array( animalNames.length );
    // Property: Number - numberOfAnimals
    this.numberOfAnimals = animalNames.length;
    // For Loop
    for( var i = 0; i < this.numberOfAnimals; i++ ) {
      this.animals[i] = new Animal(animalNames[i]);
    };
    // Return Object
  });
  
  // Method Function: hasAnimalsLeftToVisit
  Zoo.prototype.hasAnimalsLeftToVisit = (function() {
    // Local Varables
    var hasAnimalsLeft = false;
    // While Loop
    for( var animalIndex = 0; animalIndex < this.animals.length; animalIndex++ ) {
      // Conditional
      if( !this.animals[animalIndex].has_been_visited() ) {
        hasAnimalsLeft = true;
        break;
      };
    };
    // Return Boolean
    return hasAnimalsLeft;
  });
  
  // Method Function: numberOfVisitedAnimals
  Zoo.prototype.numberOfVisitedAnimals = (function() {
    // Local variables
    var visitedAnimalsCount = 0;
    // For Loop
    for( var animalsIndex = 0; animalsIndex < this.animals.length; animalsIndex++ ) {
      // Nested Conditional
      if( this.animals[animalsIndex].has_been_visited() ) {
        // Math
        visitedAnimalsCount++;
      }
    };
    // Return Number
    return visitedAnimalsCount;
  });

