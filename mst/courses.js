document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchCourse');
    const filterSelect = document.getElementById('filterCategory');
    const courseCards = document.querySelectorAll('.course-card');
    const enrollButtons = document.querySelectorAll('.enroll-btn');

    // Search and filter functionality
    function filterCourses() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = filterSelect.value;

        courseCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const category = card.dataset.category;
            const matchesSearch = title.includes(searchTerm);
            const matchesCategory = selectedCategory === 'all' || category === selectedCategory;

            if (matchesSearch && matchesCategory) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    searchInput.addEventListener('input', filterCourses);
    filterSelect.addEventListener('change', filterCourses);

    // Enroll button functionality
    enrollButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const courseCard = e.target.closest('.course-card');
            const courseName = courseCard.querySelector('h3').textContent;

            // Check if user is logged in (you'll need to implement this)
            const isLoggedIn = checkLoginStatus();

            if (!isLoggedIn) {
                window.location.href = 'login.html';
                return;
            }

            showEnrollmentModal(courseName);
        });
    });

    // Simulated login check (replace with your actual login check)
    function checkLoginStatus() {
        // Return true if user is logged in, false otherwise
        return false; // For demo purposes
    }

    function showEnrollmentModal(courseName) {
        // Create and show modal
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.style.display = 'flex';
        
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Enroll in ${courseName}</h3>
                    <span class="close-modal">&times;</span>
                </div>
                <p>Are you sure you want to enroll in this course?</p>
                <button class="enroll-btn confirm-enroll">Confirm Enrollment</button>
            </div>
        `;

        document.body.appendChild(modal);

        // Close modal functionality
        const closeBtn = modal.querySelector('.close-modal');
        closeBtn.onclick = () => modal.remove();

        // Confirm enrollment
        const confirmBtn = modal.querySelector('.confirm-enroll');
        confirmBtn.onclick = () => {
            // Here you would typically make an API call to enroll the user
            modal.innerHTML = `
                <div class="modal-content">
                    <h3>Successfully Enrolled!</h3>
                    <p>You have been enrolled in ${courseName}</p>
                    <button class="enroll-btn" onclick="window.location.href='dashboard.html'">
                        Go to Dashboard
                    </button>
                </div>
            `;

            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 2000);
        };
    }
}); 