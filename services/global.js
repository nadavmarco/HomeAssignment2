document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('nav ul');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }
});