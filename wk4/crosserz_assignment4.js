//alert("JavaScript works!");
//Deliverable 4
//Zak Crosser

//Library
var myLibrary = function(){
};

//String Function 1- Phone Number
myLibrary.prototype.function1 = function(phoneNumber){
  var regexObj = /^\d{3}-\d{3}-\d{4}$/;
  return regexObj.test(phoneNumber);
};

//String Function 2- Email Address
myLibrary.prototype.function2 = function(emailAddress){
  var regexObj = (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/);
  return regexObj.test(emailAddress);
};

//Srting Function 3- URL
myLibrary.prototype.validateUrl = function(url){
  var regexObj = /http(s)?:\/\/([0-9a-zA-Z]{1,}.)?[0-9a-zA-Z]{2,}.[0-9a-zA-Z]{2,}/;
  return regexObj. test(url);
};

//String Function 4- Title-case 
myLibrary.prototype.titleCase = function( string ) {
  return string.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

//String Function 5- Strings
myLibrary.prototype.changeSeperator = function( string, seperatorOne, seperatorTwo ) {
  return string.replace(new RegExp(seperatorOne, 'gi'), seperatorTwo);
 };

//Number Function 1- Decimal Number
myLibrary.prototype.decimalToPercision = function( decimal, numberOfPlaces ) {
  return decimal.toFixed(numberOfPlaces);
 };

//Number Function 2- Fuzzy
myLibrary.prototype.numberWithinThreshold = function( number, percentThreshold, otherNumber ) {
  var deviation = otherNumber * ( percentThreshold / 100.0 );
  return number >= (otherNumber - deviation) && number <= (otherNumber + deviation);
};

// //Number Function 3- Dates
myLibrary.prototype.hourDifference = function( day1, day2 ) {
  // miliseconds / miliseconds per second / seconds per minute / minutes per hour
  return (day1 - day2) / 1000/ 60/ 60;
};

// //Number Function 4- String/Number
myLibrary.prototype.stringToNumber = function( string ) {
  return parseInt(string,1);
};



var phone = "513-410-3403",
    email = "zakcrosser@gmail.com",
    url = "http://www.google.com",
    titleCaseString = "zak crosser",
    seperatorString = "change my string to be like a csv",
    absoluteDecimal = (22/7.0), // Almost π
    percision = 2,
    theNumber = 45,
    theOtherNumber = 100,
    thresholdPercentage = 60,
    today = new Date(),
    birthday = new Date("23 August 1987"),
    stringNumber = "100101 is a number",
    
//Call Phone Number function
console.log ("is " + phone + " a valid phone number?");
if (myLib.function1(phone)) {
  console.log("Valid phone number");
} else{
  console.log("Invalid phone number");
}

//Call Email Function
console.log ("is " + email + " a valid email?");
if (myLib.function2(email)) {
  console.log("Valid Email address!"); 
} else {
  console.log("Please enter a valid Email address!");
}

//Call URL function
console.log ("is " + url + " a valid URL?");
if (myLib.validateUrl(url)) {
  console.log("Valid URL");
} else {
  console.log("Invalid URL. Please reenter URL!");
}

//Call Title Case Function
console.log( titleCaseString  + " title cased is: " + myLib.titleCase(titleCaseString) );

//Call Strings Function
console.log( seperatorString + " so with replaced seperators it is: '" + myLib.changeSeperator(seperatorString, ' ', ',') + "'" );

//Call Decimal Function
console.log( absoluteDecimal + " to percision " + percision + " is: " + myLib.decimalToPercision(absoluteDecimal, percision) );

//Call Fuzzy Function
console.log( theNumber + ' ' + (myLib.numberWithinThreshold(theNumber, thresholdPercentage, theOtherNumber) ? 'is' : 'is not') + " within " + thresholdPercentage + "% of " + theOtherNumber);

//Call Dates Function
console.log( "I have been alive for " + myLib.hourDifference(today, birthday) + " hours");

//Call Number/String Function
console.log( "'" + stringNumber + "' to number is: " + myLib.stringToNumber(stringNumber) );

