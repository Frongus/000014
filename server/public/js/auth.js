// Authentication handling
async function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // Clear previous errors
    hideError('login-error');
    
    // Validate inputs
    if (!email || !password) {
        showError('login-error', 'Please fill in all fields');
        return;
    }
    
    if (!validateEmail(email)) {
        showError('login-error', 'Please enter a valid email address');
        return;
    }
    
    // Set loading state
    setButtonLoading('login-form', 'login-btn-text', 'login-spinner', true);
    
    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock authentication - in production, this would be a real API call
        const user = {
            id: '1',
            email: email,
            name: email.split('@')[0],
            isPremium: false,
            createdAt: new Date().toISOString(),
            profile: null,
            recommendations: []
        };
        
        // Save user and redirect
        window.CareerAI.setCurrentUser(user);
        showDashboard();
        
    } catch (error) {
        showError('login-error', 'An error occurred. Please try again.');
    } finally {
        setButtonLoading('login-form', 'login-btn-text', 'login-spinner', false);
    }
}

async function handleRegister(event) {
    event.preventDefault();
    
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    const acceptTerms = document.getElementById('accept-terms').checked;
    
    // Clear previous errors
    hideError('register-error');
    
    // Validate inputs
    if (!name || !email || !password || !confirmPassword) {
        showError('register-error', 'Please fill in all fields');
        return;
    }
    
    if (!validateEmail(email)) {
        showError('register-error', 'Please enter a valid email address');
        return;
    }
    
    if (!validatePassword(password)) {
        showError('register-error', 'Password must be at least 6 characters long');
        return;
    }
    
    if (password !== confirmPassword) {
        showError('register-error', 'Passwords do not match');
        return;
    }
    
    if (!acceptTerms) {
        showError('register-error', 'Please accept the terms and conditions');
        return;
    }
    
    // Set loading state
    setButtonLoading('register-form', 'register-btn-text', 'register-spinner', true);
    
    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock registration - in production, this would be a real API call
        const user = {
            id: Date.now().toString(),
            email: email,
            name: name,
            isPremium: false,
            createdAt: new Date().toISOString(),
            profile: null,
            recommendations: []
        };
        
        // Save user and redirect
        window.CareerAI.setCurrentUser(user);
        showDashboard();
        
    } catch (error) {
        showError('register-error', 'An error occurred. Please try again.');
    } finally {
        setButtonLoading('register-form', 'register-btn-text', 'register-spinner', false);
    }
}

// Utility functions for auth
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

function hideError(elementId) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.style.display = 'none';
    }
}

function setButtonLoading(formId, textElementId, spinnerId, isLoading) {
    const form = document.getElementById(formId);
    const button = form ? form.querySelector('button[type="submit"]') : null;
    const textElement = document.getElementById(textElementId);
    const spinner = document.getElementById(spinnerId);
    
    if (button) {
        button.disabled = isLoading;
    }
    
    if (textElement) {
        textElement.style.display = isLoading ? 'none' : 'inline';
    }
    
    if (spinner) {
        spinner.style.display = isLoading ? 'inline-block' : 'none';
    }
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    return password && password.length >= 6;
}

// Export functions
window.handleLogin = handleLogin;
window.handleRegister = handleRegister;