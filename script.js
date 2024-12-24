document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.button-container button').forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-scroll-to');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
