document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        const terms = document.getElementById('terms').checked;

        // Remove any existing error messages
        clearErrors();

        // Validation
        let isValid = true;

        if (fullName.trim().length < 2) {
            showError('fullName', 'Please enter your full name');
            isValid = false;
        }

        if (!validateEmail(email)) {
            showError('email', 'Please enter a valid email address');
            isValid = false;
        }

        if (!validatePassword(password)) {
            showError('password', 'Password must be at least 8 characters with numbers and letters');
            isValid = false;
        }

        if (password !== confirmPassword) {
            showError('confirmPassword', 'Passwords do not match');
            isValid = false;
        }

        if (!terms) {
            showError('terms', 'You must agree to the Terms and Conditions');
            isValid = false;
        }

        if (isValid) {
            simulateRegistration();
        }
    });

    // Password strength meter
    passwordInput.addEventListener('input', function() {
        updatePasswordStrength(this.value);
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePassword(password) {
        return password.length >= 8 && /[0-9]/.test(password) && /[a-zA-Z]/.test(password);
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

    function updatePasswordStrength(password) {
        const strengthMeter = document.querySelector('.strength-meter');
        
        if (password.length < 6) {
            strengthMeter.className = 'strength-meter strength-weak';
        } else if (password.length < 10) {
            strengthMeter.className = 'strength-meter strength-medium';
        } else {
            strengthMeter.className = 'strength-meter strength-strong';
        }
    }

    function simulateRegistration() {
        const registerButton = document.querySelector('.login-submit');
        registerButton.textContent = 'Creating Account...';
        registerButton.disabled = true;

        setTimeout(() => {
            // Simulate successful registration
            window.location.href = 'dashboard.html';
        }, 1500);
    }
}); 