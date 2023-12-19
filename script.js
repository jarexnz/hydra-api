document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Here, you would typically send the username and password to a server for authentication.
    // For this example, let's assume correct username is "admin" and password is "password123".
    if (username === 'hydraapi' && password === 'root') {
        alert('Login successful!');
    } else {
        // Display error message
        alert('Login Unsuccessful!')
    }
});
