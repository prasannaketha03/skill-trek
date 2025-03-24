document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Remove any existing error messages
        clearErrors();

        // Basic validation
        if (!validateEmail(email)) {
            showError('email', 'Please enter a valid email address');
            return;
        }

        if (password.length < 6) {
            showError('password', 'Password must be at least 6 characters');
            return;
        }

        // Simulate login
        simulateLogin();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        field.classList.add('error');
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        
        field.parentNode.appendChild(errorDiv);
    }

    function clearErrors() {
        document.querySelectorAll('.error').forEach(field => {
            field.classList.remove('error');
        });
        document.querySelectorAll('.error-message').forEach(message => {
            message.remove();
        });
    }

    function simulateLogin() {
        const loginButton = document.querySelector('.login-submit');
        loginButton.textContent = 'Logging in...';
        loginButton.disabled = true;

        // Store login state in localStorage
        localStorage.setItem('isLoggedIn', 'true');

        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1500);
    }
}); 