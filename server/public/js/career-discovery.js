// Career Discovery functionality
let currentStep = 1;
let totalSteps = 4;
let userProfile = {
    age: 0,
    hobbies: [],
    interests: [],
    skills: [],
    experience: '',
    education: '',
    workStyle: '',
    goals: '',
    riskTolerance: '',
    timeCommitment: ''
};

// Start the career discovery process
function startCareerDiscovery() {
    currentStep = 1;
    updateProgressBar();
    renderCurrentStep();
}

// Update progress bar
function updateProgressBar() {
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    const progressPercent = document.getElementById('progress-percent');
    
    const progress = (currentStep / totalSteps) * 100;
    
    if (progressFill) {
        progressFill.style.width = `${progress}%`;
    }
    
    if (progressText) {
        progressText.textContent = `Step ${currentStep} of ${totalSteps}`;
    }
    
    if (progressPercent) {
        progressPercent.textContent = `${Math.round(progress)}% Complete`;
    }
}

// Render the current step
function renderCurrentStep() {
    const stepContent = document.getElementById('step-content');
    if (!stepContent) return;
    
    let content = '';
    
    switch (currentStep) {
        case 1:
            content = renderBasicInfoStep();
            break;
        case 2:
            content = renderInterestsStep();
            break;
        case 3:
            content = renderSkillsStep();
            break;
        case 4:
            content = renderPreferencesStep();
            break;
        default:
            content = '<div>Step not found</div>';
    }
    
    stepContent.innerHTML = content;
    
    // Add event listeners for the current step
    addStepEventListeners();
}

// Basic Info Step (Step 1)
function renderBasicInfoStep() {
    return `
        <div class="step-card">
            <div class="step-header">
                <h2>Tell us about yourself</h2>
                <p>Let's start with some basic information to understand your background.</p>
            </div>
            
            <div class="step-body">
                <div class="form-section">
                    <label for="user-age">Age</label>
                    <input type="number" id="user-age" class="age-input" min="16" max="100" 
                           value="${userProfile.age || ''}" placeholder="Enter your age">
                </div>
                
                <div class="form-section">
                    <label for="user-education">Education Level</label>
                    <select id="user-education">
                        <option value="">Select your education level</option>
                        <option value="high-school" ${userProfile.education === 'high-school' ? 'selected' : ''}>High School</option>
                        <option value="some-college" ${userProfile.education === 'some-college' ? 'selected' : ''}>Some College</option>
                        <option value="bachelors" ${userProfile.education === 'bachelors' ? 'selected' : ''}>Bachelor's Degree</option>
                        <option value="masters" ${userProfile.education === 'masters' ? 'selected' : ''}>Master's Degree</option>
                        <option value="phd" ${userProfile.education === 'phd' ? 'selected' : ''}>PhD</option>
                        <option value="other" ${userProfile.education === 'other' ? 'selected' : ''}>Other</option>
                    </select>
                </div>
                
                <div class="form-section">
                    <label for="user-experience">Work Experience</label>
                    <select id="user-experience">
                        <option value="">Select your experience level</option>
                        <option value="none" ${userProfile.experience === 'none' ? 'selected' : ''}>No professional experience</option>
                        <option value="entry" ${userProfile.experience === 'entry' ? 'selected' : ''}>0-2 years</option>
                        <option value="mid" ${userProfile.experience === 'mid' ? 'selected' : ''}>3-5 years</option>
                        <option value="senior" ${userProfile.experience === 'senior' ? 'selected' : ''}>6-10 years</option>
                        <option value="expert" ${userProfile.experience === 'expert' ? 'selected' : ''}>10+ years</option>
                    </select>
                </div>
            </div>
            
            <div class="step-navigation">
                <div></div>
                <button class="btn btn-primary" onclick="nextStep()" id="next-btn">
                    <span>Continue</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 18l6-6-6-6"/>
                    </svg>
                </button>
            </div>
        </div>
    `;
}

// Interests Step (Step 2)
function renderInterestsStep() {
    return `
        <div class="step-card">
            <div class="step-header">
                <h2>What drives you?</h2>
                <p>Share your hobbies and interests to help us understand what motivates you.</p>
            </div>
            
            <div class="step-body">
                <div class="tag-system">
                    <h3>Hobbies & Activities</h3>
                    <div class="tag-input-container">
                        <div class="tag-input-group">
                            <input type="text" id="hobby-input" placeholder="e.g., Photography, Gaming, Cooking">
                            <button type="button" class="btn btn-primary" onclick="addHobby()">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <line x1="12" y1="5" x2="12" y2="19"/>
                                    <line x1="5" y1="12" x2="19" y2="12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="tags-display" id="hobbies-display">
                            ${renderTags(userProfile.hobbies, 'hobby')}
                        </div>
                    </div>
                </div>
                
                <div class="tag-system">
                    <h3>Professional Interests</h3>
                    <div class="tag-input-container">
                        <div class="tag-input-group">
                            <input type="text" id="interest-input" placeholder="e.g., Technology, Healthcare, Finance">
                            <button type="button" class="btn btn-primary" onclick="addInterest()">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <line x1="12" y1="5" x2="12" y2="19"/>
                                    <line x1="5" y1="12" x2="19" y2="12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="tags-display" id="interests-display">
                            ${renderTags(userProfile.interests, 'interest')}
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="step-navigation">
                <button class="btn btn-secondary" onclick="prevStep()">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M15 18l-6-6 6-6"/>
                    </svg>
                    <span>Previous</span>
                </button>
                <button class="btn btn-primary" onclick="nextStep()" id="next-btn">
                    <span>Continue</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 18l6-6-6-6"/>
                    </svg>
                </button>
            </div>
        </div>
    `;
}

// Skills Step (Step 3)
function renderSkillsStep() {
    const suggestedSkills = [
        'Communication', 'Leadership', 'Problem Solving', 'Creativity', 'Analytical Thinking',
        'Project Management', 'Programming', 'Design', 'Sales', 'Marketing',
        'Data Analysis', 'Writing', 'Public Speaking', 'Teamwork', 'Time Management'
    ];
    
    return `
        <div class="step-card">
            <div class="step-header">
                <h2>Your skills & strengths</h2>
                <p>Tell us about your abilities and what you're naturally good at.</p>
            </div>
            
            <div class="step-body">
                <div class="tag-system">
                    <h3>Your Skills & Strengths</h3>
                    <div class="tag-input-container">
                        <div class="tag-input-group">
                            <input type="text" id="skill-input" placeholder="Add a skill or strength">
                            <button type="button" class="btn btn-primary" onclick="addSkill()">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <line x1="12" y1="5" x2="12" y2="19"/>
                                    <line x1="5" y1="12" x2="19" y2="12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="tags-display" id="skills-display">
                            ${renderTags(userProfile.skills, 'skill')}
                        </div>
                    </div>
                    
                    <div class="suggested-section">
                        <h4>Suggested Skills</h4>
                        <div class="suggested-tags">
                            ${suggestedSkills.filter(skill => !userProfile.skills.includes(skill))
                                .map(skill => `<button class="suggested-tag" onclick="addSuggestedSkill('${skill}')">+ ${skill}</button>`)
                                .join('')}
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="step-navigation">
                <button class="btn btn-secondary" onclick="prevStep()">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M15 18l-6-6 6-6"/>
                    </svg>
                    <span>Previous</span>
                </button>
                <button class="btn btn-primary" onclick="nextStep()" id="next-btn">
                    <span>Continue</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 18l6-6-6-6"/>
                    </svg>
                </button>
            </div>
        </div>
    `;
}

// Preferences Step (Step 4)
function renderPreferencesStep() {
    return `
        <div class="step-card">
            <div class="step-header">
                <h2>Your preferences</h2>
                <p>Help us understand your work style and career aspirations.</p>
            </div>
            
            <div class="step-body">
                <div class="form-section">
                    <label for="work-style">Preferred Work Style</label>
                    <select id="work-style">
                        <option value="">Select your preferred work style</option>
                        <option value="remote" ${userProfile.workStyle === 'remote' ? 'selected' : ''}>Remote work</option>
                        <option value="office" ${userProfile.workStyle === 'office' ? 'selected' : ''}>Office environment</option>
                        <option value="hybrid" ${userProfile.workStyle === 'hybrid' ? 'selected' : ''}>Hybrid (remote + office)</option>
                        <option value="freelance" ${userProfile.workStyle === 'freelance' ? 'selected' : ''}>Freelance/Contract</option>
                        <option value="entrepreneurial" ${userProfile.workStyle === 'entrepreneurial' ? 'selected' : ''}>Entrepreneurial/Own business</option>
                    </select>
                </div>
                
                <div class="form-section">
                    <label for="career-goals">Career Goals</label>
                    <textarea id="career-goals" placeholder="Describe your career aspirations and what you want to achieve...">${userProfile.goals}</textarea>
                </div>
                
                <div class="form-section">
                    <label for="risk-tolerance">Risk Tolerance</label>
                    <select id="risk-tolerance">
                        <option value="">Select your risk tolerance</option>
                        <option value="low" ${userProfile.riskTolerance === 'low' ? 'selected' : ''}>Low - Prefer stable, secure opportunities</option>
                        <option value="medium" ${userProfile.riskTolerance === 'medium' ? 'selected' : ''}>Medium - Balanced approach to risk and reward</option>
                        <option value="high" ${userProfile.riskTolerance === 'high' ? 'selected' : ''}>High - Willing to take significant risks for potential rewards</option>
                    </select>
                </div>
                
                <div class="form-section">
                    <label for="time-commitment">Time Commitment</label>
                    <select id="time-commitment">
                        <option value="">How much time can you dedicate to career development?</option>
                        <option value="part-time" ${userProfile.timeCommitment === 'part-time' ? 'selected' : ''}>Part-time (10-20 hours/week)</option>
                        <option value="full-time" ${userProfile.timeCommitment === 'full-time' ? 'selected' : ''}>Full-time (40+ hours/week)</option>
                        <option value="intensive" ${userProfile.timeCommitment === 'intensive' ? 'selected' : ''}>Intensive (60+ hours/week)</option>
                        <option value="flexible" ${userProfile.timeCommitment === 'flexible' ? 'selected' : ''}>Flexible schedule</option>
                    </select>
                </div>
            </div>
            
            <div class="step-navigation">
                <button class="btn btn-secondary" onclick="prevStep()">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M15 18l-6-6 6-6"/>
                    </svg>
                    <span>Previous</span>
                </button>
                <button class="btn btn-primary" onclick="generateResults()" id="next-btn">
                    <span>Get Results</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 18l6-6-6-6"/>
                    </svg>
                </button>
            </div>
        </div>
    `;
}

// Helper function to render tags
function renderTags(tags, type) {
    if (!tags || !Array.isArray(tags)) return '';
    
    return tags.map((tag, index) => `
        <span class="tag">
            ${tag}
            <button class="tag-remove" onclick="removeTag('${type}', ${index})">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
            </button>
        </span>
    `).join('');
}

// Add event listeners for current step
function addStepEventListeners() {
    // Add Enter key listeners for tag inputs
    const hobbyInput = document.getElementById('hobby-input');
    const interestInput = document.getElementById('interest-input');
    const skillInput = document.getElementById('skill-input');
    
    if (hobbyInput) {
        hobbyInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                addHobby();
            }
        });
    }
    
    if (interestInput) {
        interestInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                addInterest();
            }
        });
    }
    
    if (skillInput) {
        skillInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                addSkill();
            }
        });
    }
    
    // Update next button state
    updateNextButtonState();
    
    // Add change listeners to form inputs
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('change', updateNextButtonState);
        input.addEventListener('input', updateNextButtonState);
    });
}

// Update next button state based on validation
function updateNextButtonState() {
    const nextBtn = document.getElementById('next-btn');
    if (!nextBtn) return;
    
    let canProceed = false;
    
    switch (currentStep) {
        case 1:
            const age = document.getElementById('user-age')?.value;
            const education = document.getElementById('user-education')?.value;
            const experience = document.getElementById('user-experience')?.value;
            canProceed = age && parseInt(age) > 0 && education && experience;
            break;
        case 2:
            canProceed = userProfile.hobbies.length > 0 && userProfile.interests.length > 0;
            break;
        case 3:
            canProceed = userProfile.skills.length > 0;
            break;
        case 4:
            const workStyle = document.getElementById('work-style')?.value;
            const goals = document.getElementById('career-goals')?.value;
            const riskTolerance = document.getElementById('risk-tolerance')?.value;
            const timeCommitment = document.getElementById('time-commitment')?.value;
            canProceed = workStyle && goals && riskTolerance && timeCommitment;
            break;
    }
    
    nextBtn.disabled = !canProceed;
    nextBtn.style.opacity = canProceed ? '1' : '0.5';
}

// Navigation functions
function nextStep() {
    // Save current step data
    saveCurrentStepData();
    
    if (currentStep < totalSteps) {
        currentStep++;
        updateProgressBar();
        renderCurrentStep();
    }
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        updateProgressBar();
        renderCurrentStep();
    }
}

// Save current step data to profile
function saveCurrentStepData() {
    switch (currentStep) {
        case 1:
            userProfile.age = parseInt(document.getElementById('user-age')?.value) || 0;
            userProfile.education = document.getElementById('user-education')?.value || '';
            userProfile.experience = document.getElementById('user-experience')?.value || '';
            break;
        case 4:
            userProfile.workStyle = document.getElementById('work-style')?.value || '';
            userProfile.goals = document.getElementById('career-goals')?.value || '';
            userProfile.riskTolerance = document.getElementById('risk-tolerance')?.value || '';
            userProfile.timeCommitment = document.getElementById('time-commitment')?.value || '';
            break;
    }
}

// Tag management functions
function addHobby() {
    const input = document.getElementById('hobby-input');
    if (!input) return;
    
    const value = input.value.trim();
    
    if (value && !userProfile.hobbies.includes(value)) {
        userProfile.hobbies.push(value);
        input.value = '';
        updateTagsDisplay('hobbies-display', userProfile.hobbies, 'hobby');
        updateNextButtonState();
    }
}

function addInterest() {
    const input = document.getElementById('interest-input');
    if (!input) return;
    
    const value = input.value.trim();
    
    if (value && !userProfile.interests.includes(value)) {
        userProfile.interests.push(value);
        input.value = '';
        updateTagsDisplay('interests-display', userProfile.interests, 'interest');
        updateNextButtonState();
    }
}

function addSkill() {
    const input = document.getElementById('skill-input');
    if (!input) return;
    
    const value = input.value.trim();
    
    if (value && !userProfile.skills.includes(value)) {
        userProfile.skills.push(value);
        input.value = '';
        updateTagsDisplay('skills-display', userProfile.skills, 'skill');
        updateNextButtonState();
    }
}

function addSuggestedSkill(skill) {
    if (!userProfile.skills.includes(skill)) {
        userProfile.skills.push(skill);
        updateTagsDisplay('skills-display', userProfile.skills, 'skill');
        
        // Remove from suggested skills
        const suggestedButton = document.querySelector(`button[onclick="addSuggestedSkill('${skill}')"]`);
        if (suggestedButton) {
            suggestedButton.remove();
        }
        
        updateNextButtonState();
    }
}

function removeTag(type, index) {
    switch (type) {
        case 'hobby':
            userProfile.hobbies.splice(index, 1);
            updateTagsDisplay('hobbies-display', userProfile.hobbies, 'hobby');
            break;
        case 'interest':
            userProfile.interests.splice(index, 1);
            updateTagsDisplay('interests-display', userProfile.interests, 'interest');
            break;
        case 'skill':
            userProfile.skills.splice(index, 1);
            updateTagsDisplay('skills-display', userProfile.skills, 'skill');
            break;
    }
    updateNextButtonState();
}

function updateTagsDisplay(containerId, tags, type) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = renderTags(tags, type);
    }
}

// Generate AI results
async function generateResults() {
    // Save final step data
    saveCurrentStepData();
    
    // Show loading state
    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) {
        nextBtn.innerHTML = `
            <div class="spinner"></div>
            <span>Generating Results...</span>
        `;
        nextBtn.disabled = true;
    }
    
    try {
        // Send profile to server for AI processing
        const response = await fetch('/api/generate-recommendation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ profile: userProfile })
        });
        
        const data = await response.json();
        
        if (data.success) {
            // Show results
            showResults(data.recommendation);
            
            // Redirect to results page after a short delay
            setTimeout(() => {
                window.location.href = '/dashboard/results';
            }, 2000);
        } else {
            throw new Error(data.error || 'Failed to generate recommendation');
        }
        
    } catch (error) {
        console.error('Error generating results:', error);
        // Handle error
        if (nextBtn) {
            nextBtn.innerHTML = `
                <span>Get Results</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 18l6-6-6-6"/>
                </svg>
            `;
            nextBtn.disabled = false;
        }
        
        // Show error message
        alert('Failed to generate recommendation. Please try again.');
    }
}

// Show results
function showResults(recommendation) {
    const stepContent = document.getElementById('step-content');
    const progressContainer = document.getElementById('progress-container');
    
    // Hide progress bar
    if (progressContainer) {
        progressContainer.style.display = 'none';
    }
    
    // Show results
    if (stepContent) {
        stepContent.innerHTML = renderResults(recommendation);
    }
}

// Render results display
function renderResults(recommendation) {
    return `
        <div class="results-display">
            <div class="results-tabs">
                <button class="results-tab active" onclick="showResultsTab('profession')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                        <line x1="8" y1="21" x2="16" y2="21"/>
                        <line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>
                    Recommended Profession
                </button>
                <button class="results-tab" onclick="showResultsTab('business')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M3 3v18h18"/>
                        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
                    </svg>
                    Business Opportunity
                </button>
            </div>
            
            <div id="profession-results" class="result-content active">
                ${renderProfessionResults(recommendation.profession)}
            </div>
            
            <div id="business-results" class="result-content" style="display: none;">
                ${renderBusinessResults(recommendation.businessNiche)}
            </div>
            
            ${renderPremiumCTA()}
        </div>
    `;
}

// Render profession results
function renderProfessionResults(profession) {
    return `
        <div class="result-card">
            <div class="result-header">
                <h3 class="result-title">${profession.title}</h3>
                <div class="match-score">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                    </svg>
                    <span>${profession.matchPercentage}% Match</span>
                </div>
            </div>
            
            <p class="result-description">${profession.description}</p>
            
            <div class="result-stats">
                <div class="result-stat">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="12" y1="1" x2="12" y2="23"/>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                    <p class="stat-label">Average Salary</p>
                    <p class="stat-value">${profession.averageSalary}</p>
                </div>
                <div class="result-stat">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M3 3v18h18"/>
                        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
                    </svg>
                    <p class="stat-label">Growth Outlook</p>
                    <p class="stat-value">${profession.growthOutlook}</p>
                </div>
                <div class="result-stat">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 12l2 2 4-4"/>
                        <circle cx="12" cy="12" r="10"/>
                    </svg>
                    <p class="stat-label">Key Skills</p>
                    <p class="stat-value">${profession.keySkills.slice(0, 2).join(', ')}</p>
                </div>
            </div>
            
            <div class="skills-section">
                <h4>Required Skills</h4>
                <div class="skills-list">
                    ${profession.keySkills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
}

// Render business results
function renderBusinessResults(business) {
    return `
        <div class="result-card">
            <h3 class="result-title">${business.title}</h3>
            <p class="result-description">${business.description}</p>
            
            <div class="result-stats">
                <div class="result-stat">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M3 3v18h18"/>
                        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
                    </svg>
                    <p class="stat-label">Market Potential</p>
                    <p class="stat-value">${business.marketPotential}</p>
                </div>
                <div class="result-stat">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="12" y1="1" x2="12" y2="23"/>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                    <p class="stat-label">Startup Cost</p>
                    <p class="stat-value">${business.startupCost}</p>
                </div>
                <div class="result-stat">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12,6 12,12 16,14"/>
                    </svg>
                    <p class="stat-label">Time to Profit</p>
                    <p class="stat-value">${business.timeToProfit}</p>
                </div>
            </div>
            
            <div class="skills-section">
                <h4>Key Advantages</h4>
                <ul style="list-style: none; padding: 0;">
                    ${business.keyAdvantages.map(advantage => `
                        <li style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem; color: #d1d5db;">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 1rem; height: 1rem; color: #10b981; flex-shrink: 0;">
                                <path d="M9 12l2 2 4-4"/>
                                <circle cx="12" cy="12" r="10"/>
                            </svg>
                            <span>${advantage}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
}

// Render premium CTA
function renderPremiumCTA() {
    return `
        <div class="premium-cta">
            <div class="premium-cta-header">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M2.5 16.88a1 1 0 0 1-.32-1.43l3-5.18a1 1 0 0 1 1.74 0L9 14.5l2.08-3.62a1 1 0 0 1 1.74 0l2.08 3.62L17 10.27a1 1 0 0 1 1.74 0l3 5.18a1 1 0 0 1-.32 1.43A10 10 0 0 1 12 18a10 10 0 0 1-9.5-1.12Z"/>
                    <path d="M12 2L8 7l4 1 4-1-4-5Z"/>
                </svg>
                <h3>Unlock Your Complete Career Roadmap</h3>
            </div>
            <p>Get a detailed step-by-step plan, timeline, resources, and financial projections to achieve your career goals.</p>
            <ul class="premium-features">
                <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 12l2 2 4-4"/>
                        <circle cx="12" cy="12" r="10"/>
                    </svg>
                    Detailed career roadmap with timelines
                </li>
                <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 12l2 2 4-4"/>
                        <circle cx="12" cy="12" r="10"/>
                    </svg>
                    Curated learning resources and certifications
                </li>
                <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 12l2 2 4-4"/>
                        <circle cx="12" cy="12" r="10"/>
                    </svg>
                    Business plan with financial projections
                </li>
                <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 12l2 2 4-4"/>
                        <circle cx="12" cy="12" r="10"/>
                    </svg>
                    Personalized action steps
                </li>
            </ul>
            <button class="btn btn-primary btn-full" onclick="upgradeToPremium()">
                Upgrade to Premium - $29.99
            </button>
        </div>
    `;
}

// Results tab switching
function showResultsTab(tabName) {
    // Update tab buttons
    const tabs = document.querySelectorAll('.results-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    const activeTab = document.querySelector(`.results-tab[onclick*="${tabName}"]`);
    if (activeTab) {
        activeTab.classList.add('active');
    }
    
    // Update content
    const contents = document.querySelectorAll('.result-content');
    contents.forEach(content => content.style.display = 'none');
    
    const activeContent = document.getElementById(`${tabName}-results`);
    if (activeContent) {
        activeContent.style.display = 'block';
    }
}

// Premium upgrade
function upgradeToPremium() {
    alert('Premium upgrade functionality would be implemented here with payment processing.');
}

// Mock AI recommendation generator
function generateMockRecommendation(profile) {
    const professions = [
        {
            title: "UX/UI Designer",
            description: "Create intuitive and visually appealing user interfaces for digital products. Combine creativity with user research to solve complex design problems.",
            matchPercentage: 92,
            keySkills: ["Design Thinking", "Prototyping", "User Research", "Figma", "Adobe Creative Suite"],
            averageSalary: "$75,000 - $120,000",
            growthOutlook: "13% (Much faster than average)"
        },
        {
            title: "Data Scientist",
            description: "Analyze complex data to help organizations make informed decisions. Use statistical methods and machine learning to extract insights from large datasets.",
            matchPercentage: 88,
            keySkills: ["Python", "Machine Learning", "Statistics", "SQL", "Data Visualization"],
            averageSalary: "$95,000 - $165,000",
            growthOutlook: "22% (Much faster than average)"
        },
        {
            title: "Product Manager",
            description: "Guide the development of products from conception to launch. Work with cross-functional teams to deliver solutions that meet user needs and business goals.",
            matchPercentage: 85,
            keySkills: ["Strategic Thinking", "Project Management", "Market Research", "Communication", "Analytics"],
            averageSalary: "$90,000 - $150,000",
            growthOutlook: "19% (Much faster than average)"
        }
    ];

    const businesses = [
        {
            title: "Digital Marketing Agency",
            description: "Help small businesses establish their online presence through social media management, content creation, and digital advertising campaigns.",
            marketPotential: "High - $350B market",
            startupCost: "$5,000 - $15,000",
            timeToProfit: "6-12 months",
            keyAdvantages: [
                "Low barrier to entry",
                "High demand from small businesses",
                "Scalable service model",
                "Remote work friendly"
            ]
        },
        {
            title: "E-learning Platform",
            description: "Create and sell online courses in your area of expertise. Build a platform that helps others learn new skills while generating passive income.",
            marketPotential: "Very High - $350B market",
            startupCost: "$2,000 - $10,000",
            timeToProfit: "3-8 months",
            keyAdvantages: [
                "Passive income potential",
                "Global reach",
                "Low ongoing costs",
                "High profit margins"
            ]
        },
        {
            title: "SaaS Tool Development",
            description: "Develop software solutions that solve specific problems for businesses or individuals. Focus on subscription-based revenue model.",
            marketPotential: "Very High - $195B market",
            startupCost: "$10,000 - $50,000",
            timeToProfit: "12-24 months",
            keyAdvantages: [
                "Recurring revenue",
                "High scalability",
                "Global market access",
                "High valuation potential"
            ]
        }
    ];

    // Simple selection logic
    const selectedProfession = professions[Math.floor(Math.random() * professions.length)];
    const selectedBusiness = businesses[Math.floor(Math.random() * businesses.length)];

    return {
        profession: selectedProfession,
        businessNiche: selectedBusiness
    };
}

// Export functions
window.startCareerDiscovery = startCareerDiscovery;
window.nextStep = nextStep;
window.prevStep = prevStep;
window.addHobby = addHobby;
window.addInterest = addInterest;
window.addSkill = addSkill;
window.addSuggestedSkill = addSuggestedSkill;
window.removeTag = removeTag;
window.generateResults = generateResults;
window.showResultsTab = showResultsTab;
window.upgradeToPremium = upgradeToPremium;