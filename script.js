// Navbar scroll style
const navbar = document.getElementById('navbar');
const onScroll = () => {
  if (window.scrollY > 8) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
};
window.addEventListener('scroll', onScroll);
onScroll();

// Theme toggle (persist in localStorage)
const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') body.classList.add('light');

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light');
  localStorage.setItem('theme', body.classList.contains('light') ? 'light' : 'dark');
});

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal, .card');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: .15 });
revealEls.forEach(el => io.observe(el));

// Current year
document.getElementById('year').textContent = new Date().getFullYear();
