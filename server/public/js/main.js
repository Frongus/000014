// Main application state and navigation
let currentUser = null;
let currentPage = 'landing';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Check for existing user session
    const savedUser = localStorage.getItem('careerAI_user');
    if (savedUser) {
        try {
            currentUser = JSON.parse(savedUser);
            showDashboard();
        } catch (error) {
            console.error('Error parsing saved user:', error);
            localStorage.removeItem('careerAI_user');
            showLanding();
        }
    } else {
        showLanding();
    }
    
    // Initialize event listeners
    initializeEventListeners();
});

// Initialize all event listeners
function initializeEventListeners() {
    // Auth form listeners
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
}

// Page navigation functions
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show target page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = pageId.replace('-page', '');
    }
}

function showLanding() {
    showPage('landing-page');
}

function showLogin() {
    showPage('login-page');
    // Clear any previous errors
    const errorDiv = document.getElementById('login-error');
    if (errorDiv) {
        errorDiv.style.display = 'none';
    }
    // Clear form
    const form = document.getElementById('login-form');
    if (form) {
        form.reset();
    }
}

function showRegister() {
    showPage('register-page');
    // Clear any previous errors
    const errorDiv = document.getElementById('register-error');
    if (errorDiv) {
        errorDiv.style.display = 'none';
    }
    // Clear form
    const form = document.getElementById('register-form');
    if (form) {
        form.reset();
    }
}

function showDashboard() {
    if (!currentUser) {
        showLogin();
        return;
    }
    
    showPage('dashboard-page');
    updateDashboardUI();
    showDashboardTab('overview');
}

function showDemo() {
    // For now, redirect to register
    showRegister();
}

// Update dashboard UI with user data
function updateDashboardUI() {
    if (!currentUser) return;
    
    // Update user name displays
    const userNameElements = document.querySelectorAll('#user-name, #welcome-user-name');
    userNameElements.forEach(element => {
        if (element) {
            element.textContent = currentUser.name || 'User';
        }
    });
    
    // Update premium status
    const premiumCrown = document.getElementById('premium-crown');
    const userPlan = document.getElementById('user-plan');
    
    if (premiumCrown) {
        premiumCrown.style.display = currentUser.isPremium ? 'block' : 'none';
    }
    
    if (userPlan) {
        userPlan.textContent = currentUser.isPremium ? 'Premium' : 'Free';
    }
}

// Logout function
function logout() {
    currentUser = null;
    localStorage.removeItem('careerAI_user');
    showLanding();
}

// Password toggle functionality
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    if (!input) return;
    
    const button = input.nextElementSibling;
    if (!button) return;
    
    const icon = button.querySelector('.eye-icon');
    if (!icon) return;
    
    if (input.type === 'password') {
        input.type = 'text';
        icon.innerHTML = `
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
            <line x1="1" y1="1" x2="23" y2="23"/>
        `;
    } else {
        input.type = 'password';
        icon.innerHTML = `
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
            <circle cx="12" cy="12" r="3"/>
        `;
    }
}

// Utility functions
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

// Validation functions
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    return password && password.length >= 6;
}

// Export functions for use in other modules
window.CareerAI = {
    showLanding,
    showLogin,
    showRegister,
    showDashboard,
    showDemo,
    logout,
    togglePassword,
    showError,
    hideError,
    setButtonLoading,
    validateEmail,
    validatePassword,
    getCurrentUser: () => currentUser,
    setCurrentUser: (user) => {
        currentUser = user;
        if (user) {
            localStorage.setItem('careerAI_user', JSON.stringify(user));
        }
    }
};

// Make functions globally available
window.showLanding = showLanding;
window.showLogin = showLogin;
window.showRegister = showRegister;
window.showDashboard = showDashboard;
window.showDemo = showDemo;
window.logout = logout;
window.togglePassword = togglePassword;