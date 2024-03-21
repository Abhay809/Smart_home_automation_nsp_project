// Function to toggle the display of the login form
function toggleLoginForm() {
    var loginForm = document.getElementById('loginForm');
    loginForm.style.display === 'block' ? loginForm.style.display = 'none' : loginForm.style.display = 'block';
}

// Function to close the login form
function closeLoginForm() {
    var loginForm = document.getElementById('loginForm');
    loginForm.style.display = 'none';
}
