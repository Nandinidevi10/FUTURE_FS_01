// Smooth Scroll
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({
                behavior: 'smooth'
            });
    });
});

// Simple Fade-in Animation
const cards = document.querySelectorAll('.card, .project-card');

window.addEventListener('scroll', () => {
    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }
    });
});

// Initial Style
cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.6s ease";
});