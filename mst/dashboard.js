// Make logout function global
function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html';
}

document.addEventListener('DOMContentLoaded', function() {
    // Simple login check
    if (!localStorage.getItem('isLoggedIn')) {
        window.location.href = 'login.html';
        return;
    }

    // Dashboard Navigation
    const navLinks = document.querySelectorAll('.dashboard-nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            showSection(sectionId);
            
            // Update active state
            document.querySelectorAll('.dashboard-nav a').forEach(l => {
                l.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // Progress Bar Animation
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const targetWidth = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 100);
    });

    // Course Progress Tracking
    function updateProgress(courseId, progress) {
        const progressBar = document.querySelector(`#course-${courseId} .progress`);
        const progressText = document.querySelector(`#course-${courseId} .progress-text`);
        
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${progress}% Complete`;
    }

    // Study Time Tracking
    let studyTimeInterval;
    function startStudyTimer() {
        const startTime = Date.now();
        studyTimeInterval = setInterval(() => {
            const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
            updateStudyTime(elapsedTime);
        }, 1000);
    }

    function updateStudyTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        document.querySelector('.study-time').textContent = 
            `${hours}h ${minutes}m`;
    }

    // Resume Course Functionality
    const resumeButtons = document.querySelectorAll('.resume-btn');
    resumeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const courseCard = this.closest('.course-progress-card');
            const courseName = courseCard.querySelector('h4').textContent;
            window.location.href = `course-content.html?course=${encodeURIComponent(courseName)}`;
        });
    });

    // Add this to your existing dashboard.js
    function showSection(sectionId) {
        // Hide all sections
        document.querySelectorAll('.dashboard-section').forEach(section => {
            section.style.display = 'none';
        });
        
        // Show selected section
        document.getElementById(sectionId).style.display = 'block';
    }

    // Add this to your existing dashboard.js
    document.querySelectorAll('.toggle-materials-btn').forEach(button => {
        button.addEventListener('click', function() {
            const courseCard = this.closest('.course-card');
            const materials = courseCard.querySelector('.course-materials');
            const isHidden = materials.style.display === 'none' || !materials.style.display;
            
            materials.style.display = isHidden ? 'block' : 'none';
            this.textContent = isHidden ? 'Hide Course Materials' : 'Show Course Materials';
        });
    });

    // Handle material interactions
    document.querySelectorAll('.watch-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const videoTitle = this.closest('li').querySelector('span').textContent;
            // Implement video player functionality
            console.log(`Playing video: ${videoTitle}`);
        });
    });

    document.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const materialTitle = this.closest('li').querySelector('span').textContent;
            // Implement download functionality
            console.log(`Downloading: ${materialTitle}`);
        });
    });

    document.querySelectorAll('.start-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const exerciseTitle = this.closest('li').querySelector('span').textContent;
            // Implement exercise functionality
            console.log(`Starting exercise: ${exerciseTitle}`);
        });
    });
}); 