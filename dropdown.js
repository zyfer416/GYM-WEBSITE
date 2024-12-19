document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');

    dropdown.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('active');
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', () => {
        dropdown.classList.remove('active');
    });
});
