document.addEventListener('DOMContentLoaded', function() {
    // Module accordion functionality
    const moduleHeaders = document.querySelectorAll('.module-header');
    
    moduleHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isOpen = content.style.display === 'none';
            
            // Close all module contents
            document.querySelectorAll('.module-content').forEach(content => {
                content.style.display = 'none';
            });
            
            // Open clicked module if it was closed
            if (isOpen) {
                content.style.display = 'flex';
            }
        });
    });

    // Video progress tracking
    const video = document.querySelector('video');
    if (video) {
        video.addEventListener('timeupdate', function() {
            const progress = (video.currentTime / video.duration) * 100;
            updateProgress(progress);
        });
    }

    function updateProgress(progress) {
        // Update progress bar
        const progressBar = document.querySelector('.progress');
        progressBar.style.width = `${progress}%`;
        
        // Update progress text
        const progressText = document.querySelector('.progress-text');
        progressText.textContent = `${Math.round(progress)}% Complete`;

        // Save progress to localStorage
        localStorage.setItem('courseProgress', progress);
    }

    // Navigation buttons
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    prevBtn.addEventListener('click', () => {
        // Navigate to previous lesson
        console.log('Navigate to previous lesson');
    });

    nextBtn.addEventListener('click', () => {
        // Navigate to next lesson
        console.log('Navigate to next lesson');
    });

    // Discussion forum functionality
    const postBtn = document.querySelector('.post-btn');
    postBtn.addEventListener('click', () => {
        // Show post question modal
        showPostModal();
    });

    function showPostModal() {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <h3>Post a Question</h3>
                <textarea placeholder="Type your question here..."></textarea>
                <div class="modal-actions">
                    <button class="cancel-btn">Cancel</button>
                    <button class="submit-btn">Submit</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Modal close functionality
        modal.querySelector('.cancel-btn').onclick = () => modal.remove();
        modal.querySelector('.submit-btn').onclick = () => {
            // Handle question submission
            modal.remove();
        };
    }
}); 