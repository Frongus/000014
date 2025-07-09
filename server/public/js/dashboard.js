// Dashboard functionality
let activeDashboardTab = 'overview';

// Dashboard tab management
function showDashboardTab(tabName) {
    // Update tab buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => btn.classList.remove('active'));
    
    const activeButton = document.querySelector(`.tab-btn[onclick*="${tabName}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
    
    // Update tab content
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));
    
    const activeContent = document.getElementById(`${tabName}-tab`);
    if (activeContent) {
        activeContent.classList.add('active');
    }
    
    activeDashboardTab = tabName;
    
    // Initialize tab-specific functionality
    if (tabName === 'discovery') {
        initializeCareerDiscovery();
    }
}

// Initialize career discovery when tab is shown
function initializeCareerDiscovery() {
    const container = document.getElementById('career-discovery-container');
    if (container && !container.dataset.initialized) {
        container.dataset.initialized = 'true';
        startCareerDiscovery();
    }
}

// Export functions
window.showDashboardTab = showDashboardTab;