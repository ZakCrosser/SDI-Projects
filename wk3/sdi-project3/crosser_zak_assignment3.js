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

// DadsFavorite: Object
  //Method Procedure: initialize
  // Argument: String
  var DadsFavorite = (function(favoriteAnimal) {
    // Property: Object
    this.animal = favoriteAnimal;
    // Return Object
  });
  
  // Method Function: visited
  // Argument: Object
  DadsFavorite.prototype.visited = (function(zoo) {
    // Local variables
    var returnValue = this.animal.has_been_visited();
    
    // Output
    console.log("Dad wanted to know if we visited the " + this.animal.name + ".");
    // Conditonal
    if( returnValue ) {
      // Output
      console.log("We did and he smiled.");
    } else {
      // Output
      console.log("We didn't and he frowned.");
    };
    
    // Return Boolean
    return returnValue;
  });

// Method Function: visitAnimalsAtZoo
// Argument: Object
// Argument: Array
var makeFacesAtTheAnimalsAtTheZoo = (function(zoo, faces) {
  // Local Variables
  var zooAnimalIndex = 0;
  // While Loop
  while( zoo.hasAnimalsLeftToVisit() ) {
    // Nested Loop
    for( var facesIndex = 0; facesIndex < faces.length; facesIndex++ ) {
      faces[facesIndex].makeFaceAtAnimal(zoo.animals[zooAnimalIndex]);
    };
    zoo.animals[zooAnimalIndex].visit();
    zooAnimalIndex++;
  };
  
});

// Function: sleptWell
// Argument: Boolean
// Argument: Number
var sleptWell = (function(hoursSlept, enoughHoursToSleep) {
  // Conditonal
  if( enoughHoursToSleep === hoursSlept ) {
    // Output
    console.log("Sleeping for " + hoursSlept + " makes us feel good.");
  } else {
    // Output
    console.log("Sleeping for " + hoursSlept + " makes us feel sleepy, " + enoughHoursToSleep + " would of been better.");
  };
  // Back
});

// Global Variables
// JSON data
var arraysInJson = {'animalNames': [
      'Penguins',
      'Tigers',
      'Lions',
      'Bears',
      'Elephants'
    ],
    'faces': [
      ( new Face('bug eyeed') ),
      ( new Face('frowny') ),
      ( new Face('smiley') ),
      ( new Face('crazy') ),
      ( new Face('amazed') )
    ]};
var zoo = new Zoo(arraysInJson['animalNames']);
var dadsFavorite = new DadsFavorite(zoo.animals[1]),
    hoursSlept = 5,
    enoughHoursToSleep = 8;

sleptWell(hoursSlept, enoughHoursToSleep);
makeFacesAtTheAnimalsAtTheZoo( zoo, arraysInJson['faces'] );
dadsFavorite.visited(zoo);
console.log("Today at the zoo we visited " + zoo.numberOfVisitedAnimals() + " animals.");