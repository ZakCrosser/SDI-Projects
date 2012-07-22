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







var phone = "513-410-3403",
    email = "zakcrosser@gmail.com",
    url = "http://www.google.com",
 

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

