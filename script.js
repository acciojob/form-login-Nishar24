// Function to handle form submission
function getFormValue(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Retrieve values from the form fields
  const firstName = document.getElementById("fname").value.trim();
  const lastName = document.getElementById("lname").value.trim();

  // Concatenate the full name
  const fullName = `${firstName} ${lastName}`;

  // Display the full name in an alert
  alert(fullName);
}

// Attach the function to the form's submit event
document.getElementById("nameForm").addEventListener("submit", getFormValue);