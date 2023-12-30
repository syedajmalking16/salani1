function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Simple validation
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill in all fields.");
    } else {
        // You can perform additional validation or submit the form data to a server
        alert("Form submitted successfully!");
        document.getElementById("contactForm").reset(); // Reset the form
    }
}
