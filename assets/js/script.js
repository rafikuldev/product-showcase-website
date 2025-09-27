$(document).ready(function () {
  $('.hero_slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    cssEase: 'linear',
    arrows: false,
  });
  $('.product-images').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    cssEase: 'linear',
    arrows: false,
  });
  $('.card_slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    fade: true,
    autoplaySpeed: 3000,
    speed: 500,
    cssEase: 'linear',
    arrows: false,
  });
});
// End of recent edits
// About Us page js
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// Fade in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

// Add some initial animations
window.addEventListener('load', () => {
  // Animate hero elements with stagger
  const heroElements = document.querySelectorAll('.hero-content .fade-in');
  heroElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, index * 200);
  });
});

// Add hover effects to cards
document.querySelectorAll('.custom-card').forEach(card => {
  card.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-10px)';
  });

  card.addEventListener('mouseleave', function () {
    this.style.transform = 'translateY(0)';
  });
});

// Add click animation to buttons
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    // Create ripple effect
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255,255,255,0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s ease-out;
                    pointer-events: none;
                `;

    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
document.head.appendChild(style);
