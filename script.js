const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    if (document.body.classList.contains('light-theme')) {
        themeToggle.textContent = 'Темная тема';
    } else {
        themeToggle.textContent = 'Светлая тема';
    }
});

const modal = document.getElementById('reviews-modal');
const openBtn = document.getElementById('open-reviews');
const closeBtn = document.getElementById('close-reviews');

openBtn.addEventListener('click', () => { modal.style.display = 'flex'; });
closeBtn.addEventListener('click', () => { modal.style.display = 'none'; });
window.addEventListener('click', (e) => {
    if (e.target === modal) { modal.style.display = 'none'; }
});