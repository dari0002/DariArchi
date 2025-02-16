// Remove the toggleMenu function since we're not using it anymore
// Add any additional interactivity here if needed

document.querySelectorAll('.tetris-piece').forEach(piece => {
    piece.addEventListener('click', () => {
        piece.style.transform = `rotate(${Math.random() * 360}deg)`;
        setTimeout(() => {
            piece.style.transform = 'rotate(0deg)';
        }, 500);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const category = btn.dataset.category;

            projectCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                    card.style.opacity = '1';
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
});
