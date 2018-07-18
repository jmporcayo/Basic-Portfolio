 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyAa-vARBptt3-f2gWM2MDBQCQ_wjCd5QGQ",
    authDomain: "firstportfolio-5b7c2.firebaseapp.com",
    databaseURL: "https://firstportfolio-5b7c2.firebaseio.com",
    projectId: "firstportfolio-5b7c2",
    storageBucket: "firstportfolio-5b7c2.appspot.com",
    messagingSenderId: "444402799294"
  };
  firebase.initializeApp(config);
var database = firebase.database();

// 2. Button for adding contacts
$("#submit-btn").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var contactName = $("#contact-name").val();
  var contactEmail = $("#contact-email").val();
  var contactMessage = $("#contact-message").val();
 

  // Creates local "temporary" object for holding contact data
  var newContact = {
    name: contactName,
    email: contactEmail,
    message: contactMessage,
  };

  // Uploads contact data to the database
  database.ref().push(newContact);

  // Logs everything to console
  console.log(newContact.name);
  console.log(newContact.email);
  console.log(newContact.message);
  

  alert("Contact successfully added");

  // Clears all of the text-boxes
  $("#con").val("");
  $("#emm").val("");
  $("#mss").val("");
 
});

// 3. Create Firebase event for adding contact to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());

  // Store everything into a variable.
  var contactName = childSnapshot.val().name;
  var contactEmail = childSnapshot.val().email;
  var contactMessage = childSnapshot.val().message;
 

  // Employee Info
  console.log(contactName);
  console.log(contactEmail);
  console.log(contactMessage);
});
  


