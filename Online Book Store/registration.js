document.getElementById('myForm').addEventListener('submit', function(event) {
    var firstName = document.getElementById('fn').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value;
    
    if (firstName.length < 6) {
        alert('First name must be at least 6 characters long.');
        event.preventDefault();
        return;
    }

    if (password.length <= 8) {
        alert('Password must be at least 8 characters long.');
        event.preventDefault();
        return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email format.');
        event.preventDefault();
        return;
    }
    alert('Form submitted successfully!');
});
