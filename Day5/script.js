document.getElementById('contactForm').addEventListener('submit', function(event) {
    var form = event.target;
    var isValid = form.checkValidity();

    var errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function(message) {
        message.style.display = 'none';
    });

    if (!isValid) {
        event.preventDefault();
        var inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(function(input) {
            if (!input.validity.valid) {
                var errorMessage = input.parentElement.querySelector('.error-message');
                errorMessage.style.display = 'block';
            }
        });
    }
});