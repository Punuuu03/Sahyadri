document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const terms = document.getElementById('terms').checked;
    if (terms) {
        
        alert('Account created successfully');

        console.log({ name, username, email, password });

        setTimeout(function() {
            location.reload();
        }, 1000);
    } else {
        
        alert('You must agree to the terms to create an account.');
    }
});
