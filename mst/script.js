// Image Slider functionality
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);

    // Get Started button functionality
    const getStartedBtn = document.querySelector('.cta-button');
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', function() {
            window.location.href = 'register.html';
        });
    }

    // Update navigation based on auth status
    const auth = new Auth();
    const dashboardLink = document.querySelector('a[href="dashboard.html"]');
    const loginLink = document.querySelector('a[href="login.html"]');
    
    if (auth.isAuthenticated) {
        // Show dashboard link, hide login
        if (dashboardLink) dashboardLink.style.display = 'block';
        if (loginLink) loginLink.style.display = 'none';
    } else {
        // Hide dashboard link, show login
        if (dashboardLink) dashboardLink.style.display = 'none';
        if (loginLink) loginLink.style.display = 'block';
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add active class to current navigation item
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
}); 