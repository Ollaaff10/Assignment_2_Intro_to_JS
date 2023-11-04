function displayInput() {
    // Get the values from the form inputs
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
  
    // Create the display strings
    var displayText = "<h3>Your Input:</h3>";
    displayText += "<p>Name: " + name + "</p>";
    displayText += "<p>Email: " + email + "</p>";
    displayText += "<p>Subject: " + subject + "</p>";
    displayText += "<p>Message: " + message + "</p>";
  
    // Display the input data in the userInputDisplay div
    document.getElementById('userInputDisplay').innerHTML = displayText;
  }
  