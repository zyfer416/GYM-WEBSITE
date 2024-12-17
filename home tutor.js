// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Fade-in animation logic
    const fadeInElements = document.querySelectorAll(".fade-in");
    fadeInElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = 1; // Make the element visible
            el.style.transform = "translateY(0)"; // Reset position
        }, index * 200); // Stagger animations by 200ms
    });

    // Modal functionality for Join Now buttons
    const joinNowButtons = document.querySelectorAll('.join-now-btn');
    const modal = document.getElementById('confirmation-modal');
    const closeModal = document.getElementById('close-modal');
    const teacherName = document.getElementById('teacher-name');
    const dateSpan = document.getElementById('date');
    const timeSpan = document.getElementById('time');

    // Open the modal when a "Join Now" button is clicked
    joinNowButtons.forEach(button => {
        button.addEventListener('click', () => {
            const teacher = button.getAttribute('data-teacher');
            const now = new Date();

            teacherName.textContent = teacher; // Set the teacher's name in the modal
            dateSpan.textContent = now.toDateString(); // Set the current date
            timeSpan.textContent = now.toLocaleTimeString(); // Set the current time

            modal.style.display = 'flex'; // Show the modal
        });
    });

    // Close the modal when the close button is clicked
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none'; // Hide the modal
    });

    // Close the modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none'; // Hide the modal
        }
    });
});
