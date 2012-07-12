//alert("JavaScript works!");
/*  Zachary Crosser
	07/10/2012
	Deliverable 1,
	Going to the Zoo
*/

var animals = [
      "Elephant",
      "Tiger",
      "Monkey",
      "Giraffe"
    ],
    goingToTheZoo = "We are going to the zoo today!",
    faces = ["stuck out our tongue.", "started to laugh.", "bug eyed looked at them.", "wanted to ride them."],
    leavingTheZoo = "Nooo we don't want to leave",
    hoursSlept = 8,
    wellSlept = true;
    
    
// Procedure
function setHoursSlept(wellSlept) {
  if( wellSlept ) {
    hoursSlept = 8;
  } else {
    hoursSlept = 5;
  }
}

// Number function
function wakeUp(hoursSlept) {
  if (hoursSlept >= 8) {
    return "Well rested for the Zoo!";
  } else {
    return "Its going to be a long day because I did not get enough sleep.";
  }
}

// Array Function
function goSeeingAnimal(theAnimals, facesMade) {
  var seeingAnimals = new Array(theAnimals.length);
  for (var i = 0; i < theAnimals.length; i++) {
    seeingAnimals[i] = "When we saw the " + theAnimals[i] + " " + "we" + " " + facesMade[i];
  }
  return seeingAnimals;
}

// Boolean Function
function question(theAnimals) {
  if (animals.indexOf('Tiger') >= 0){ 
    return "Dad asked us if we got to see the tigers and we answered, We saw the tigers and were scared by them.";
  } else {
    return "Dad asked us if we got to see the tigers and we answered, We wanted to see the tigers but were unable.";
  }
}

// String Function
function myfunction(excitment){
  var concatination = excitment;
  if (excitment === "Yay! we are going to the zoo!"){
    concatination += " can't wait to get there!";
  } else {
    concatination += ", we want to see more animals.";
  }
  return concatination;
}

setHoursSlept(wellSlept);
console.log(wakeUp(hoursSlept));
console.log(myfunction("Yay! we are going to the zoo!"));
animalsWeSaw = goSeeingAnimal(animals, faces);
for( var x in animalsWeSaw) {
  console.log(animalsWeSaw[x]);
}
console.log(myfunction(leavingTheZoo));
console.log(question(animals));

/*we we all excited when told we were going to the zoo
we all wanted to see the elephants, tigers, monkeys, and the giraffes
we did get to see all of the animals we wanted to see
all of our emotions were the same when we saw the animals,
when we saw the elephants animals we stuck are toung out at them
when we saw the monkeys animals we started to laugh
when we saw the tigers animals we all made bug eyed looks at them and were scared
when we saw the giraffe animals we all wanted to ride them
we were all sad when we had to leave
when we got home dad asked us if we was the tigers we all said yes and told him how scary they were.
*/