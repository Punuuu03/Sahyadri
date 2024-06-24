document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Retrieve form values
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const terms = document.getElementById('terms').checked;

    // Validate terms acceptance
    if (terms) {
        // Show success message
        alert('Account created successfully');

        // Log form data (for demonstration purposes)
        console.log({ name, username, email, password });

        // Refresh the page after a short delay (1 second)
        setTimeout(function() {
            location.reload();
        }, 1000);
    } else {
        // Alert user to agree to terms
        alert('You must agree to the terms to create an account.');
    }
});
