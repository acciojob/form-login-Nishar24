document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get input values and trim spaces
    let firstName = document.getElementById("fname").value.trim();
    let lastName = document.getElementById("lname").value.trim();

    // Validate input
    if (firstName === "" || lastName === "") {
        alert("Please enter both First Name and Last Name.");
        return;
    }

    // Display full name
    alert(`${firstName} ${lastName}`);
});
